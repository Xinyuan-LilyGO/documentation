/**
 * T4-S3 显示屏 + 触摸示例
 *
 * 在 2.41 英寸 AMOLED 上实时显示触摸坐标面板。
 * 触摸屏幕可查看 X/Y 坐标、触摸轨迹日志以及跟随手指的可视化圆点。
 *
 * Arduino IDE 设置:
 *   Board            : ESP32S3 Dev Module
 *   USB CDC On Boot  : Enable
 *   Flash Mode       : QIO 80 MHz
 *   Flash Size       : 16MB (128Mb)
 *   Partition Scheme : 16M Flash (3MB APP/9.9MB FATFS)
 *   PSRAM            : OPI PSRAM
 *   Upload Mode      : UART0/Hardware CDC
 *   USB Mode         : Hardware CDC and JTAG
 *
 * 依赖库:
 *   LilyGo-AMOLED-Series (latest)
 *   lvgl 8.4.0
 *   XPowersLib 0.2.7
 *   SensorLib 0.2.4
 *   TFT_eSPI 2.5.31
 */

#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_AMOLED amoled;

// ---------- UI 组件 ----------
static lv_obj_t *coord_label;   // "X: 123  Y: 456"
static lv_obj_t *state_label;   // "已触摸" / "未触摸"
static lv_obj_t *log_label;     // 最近 5 次触摸记录
static lv_obj_t *dot;           // 跟随手指的可视化圆点

// 存储最近 5 次触摸点的循环缓冲区
#define LOG_SIZE 5
static int16_t log_x[LOG_SIZE];
static int16_t log_y[LOG_SIZE];
static int     log_head = 0;
static bool    log_full = false;

static void build_ui(void)
{
    lv_obj_t *scr = lv_scr_act();
    lv_obj_set_style_bg_color(scr, lv_color_black(), 0);

    // 标题
    lv_obj_t *title = lv_label_create(scr);
    lv_label_set_text(title, "T4-S3  显示屏 + 触摸");
    lv_obj_set_style_text_color(title, lv_color_hex(0x00BFFF), 0);
    lv_obj_set_style_text_font(title, &lv_font_montserrat_18, 0);
    lv_obj_align(title, LV_ALIGN_TOP_MID, 0, 12);

    // 分隔线
    lv_obj_t *line = lv_obj_create(scr);
    lv_obj_set_size(line, 560, 2);
    lv_obj_set_style_bg_color(line, lv_color_hex(0x444444), 0);
    lv_obj_set_style_border_width(line, 0, 0);
    lv_obj_align(line, LV_ALIGN_TOP_MID, 0, 40);

    // 状态标签
    state_label = lv_label_create(scr);
    lv_label_set_text(state_label, "未触摸");
    lv_obj_set_style_text_color(state_label, lv_color_hex(0xAAAAAA), 0);
    lv_obj_set_style_text_font(state_label, &lv_font_montserrat_16, 0);
    lv_obj_align(state_label, LV_ALIGN_TOP_LEFT, 20, 55);

    // 坐标标签
    coord_label = lv_label_create(scr);
    lv_label_set_text(coord_label, "X: ---   Y: ---");
    lv_obj_set_style_text_color(coord_label, lv_color_white(), 0);
    lv_obj_set_style_text_font(coord_label, &lv_font_montserrat_24, 0);
    lv_obj_align(coord_label, LV_ALIGN_TOP_LEFT, 20, 80);

    // 日志标签（最近 5 次触摸）
    lv_obj_t *log_title = lv_label_create(scr);
    lv_label_set_text(log_title, "最近触摸:");
    lv_obj_set_style_text_color(log_title, lv_color_hex(0x888888), 0);
    lv_obj_set_style_text_font(log_title, &lv_font_montserrat_14, 0);
    lv_obj_align(log_title, LV_ALIGN_TOP_LEFT, 20, 120);

    log_label = lv_label_create(scr);
    lv_label_set_text(log_label, "");
    lv_obj_set_style_text_color(log_label, lv_color_hex(0xCCCCCC), 0);
    lv_obj_set_style_text_font(log_label, &lv_font_montserrat_14, 0);
    lv_obj_align(log_label, LV_ALIGN_TOP_LEFT, 20, 140);

    // 触摸区域提示
    lv_obj_t *area_label = lv_label_create(scr);
    lv_label_set_text(area_label, "触摸屏幕任意位置");
    lv_obj_set_style_text_color(area_label, lv_color_hex(0x555555), 0);
    lv_obj_set_style_text_font(area_label, &lv_font_montserrat_14, 0);
    lv_obj_align(area_label, LV_ALIGN_BOTTOM_MID, 0, -12);

    // 跟随手指的圆点
    dot = lv_obj_create(scr);
    lv_obj_set_size(dot, 20, 20);
    lv_obj_set_style_radius(dot, LV_RADIUS_CIRCLE, 0);
    lv_obj_set_style_bg_color(dot, lv_color_hex(0xFF4500), 0);
    lv_obj_set_style_border_width(dot, 0, 0);
    lv_obj_set_style_opa(dot, LV_OPA_TRANSP, 0);   // 首次触摸前隐藏
    lv_obj_align(dot, LV_ALIGN_TOP_LEFT, 0, 0);
}

static void update_log(int16_t x, int16_t y)
{
    log_x[log_head] = x;
    log_y[log_head] = y;
    log_head = (log_head + 1) % LOG_SIZE;
    if (log_head == 0) log_full = true;

    char buf[128] = "";
    int count = log_full ? LOG_SIZE : log_head;
    // 最新的在前面
    for (int i = 0; i < count; i++) {
        int idx = ((log_head - 1 - i) + LOG_SIZE) % LOG_SIZE;
        char line[32];
        snprintf(line, sizeof(line), "(%3d, %3d)\n", log_x[idx], log_y[idx]);
        strncat(buf, line, sizeof(buf) - strlen(buf) - 1);
    }
    lv_label_set_text(log_label, buf);
}

void setup()
{
    Serial.begin(115200);

    if (!amoled.beginAMOLED_241()) {
        Serial.println("AMOLED 初始化失败 — 请检查 arduino-esp32 版本 (<3.0)");
        while (true) delay(1000);
    }

    beginLvglHelper(amoled);
    build_ui();

    Serial.printf("显示屏就绪: %u x %u\n", amoled.width(), amoled.height());
    Serial.println("触摸屏幕进行测试。");
}

void loop()
{
    int16_t x, y;
    bool touched = amoled.getPoint(&x, &y, 1);

    if (touched) {
        // 更新坐标显示
        char buf[32];
        snprintf(buf, sizeof(buf), "X: %3d   Y: %3d", x, y);
        lv_label_set_text(coord_label, buf);
        lv_label_set_text(state_label, "已触摸");
        lv_obj_set_style_text_color(state_label, lv_color_hex(0x00FF88), 0);

        // 将圆点移动到触摸位置（居中在手指位置）
        lv_obj_set_pos(dot, x - 10, y - 10);
        lv_obj_set_style_opa(dot, LV_OPA_COVER, 0);

        // 添加到日志
        update_log(x, y);

        Serial.printf("触摸  X=%d  Y=%d\n", x, y);
    } else {
        lv_label_set_text(state_label, "未触摸");
        lv_obj_set_style_text_color(state_label, lv_color_hex(0xAAAAAA), 0);
        lv_obj_set_style_opa(dot, LV_OPA_TRANSP, 0);
    }

    lv_task_handler();
    delay(5);
}
