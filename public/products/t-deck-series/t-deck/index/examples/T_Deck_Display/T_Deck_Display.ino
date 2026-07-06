/**
 * @file     T_Deck_Display.ino
 * @brief    LILYGO T-Deck 屏幕显示示例
 *
 * 硬件：LILYGO T-Deck
 *   - MCU  : ESP32-S3FN16R8 (16MB Flash / 8MB OPI PSRAM)
 *   - 屏幕  : 2.8" ST7789 LCD, 320×240, SPI
 *
 * 库依赖（任选其一）：
 *   - Arduino_GFX_Library  https://github.com/moononournation/Arduino_GFX
 *   - TFT_eSPI             https://github.com/Bodmer/TFT_eSPI
 *
 * 本文件默认使用 Arduino_GFX。
 * 若需切换到 TFT_eSPI，将 USE_TFT_ESPI 宏取消注释，并正确配置 User_Setup.h。
 *
 * 演示内容：
 *   Page 1 — 欢迎界面（彩色标题 + 装饰条）
 *   Page 2 — 基本图形（矩形 / 圆 / 三角形 / 直线）
 *   Page 3 — 颜色渐变色带（R / G / B）
 *   Page 4 — 进度条动画
 *   Page 5 — 系统信息文字
 *
 * Arduino IDE 设置（Tools 菜单）：
 *   Board              : ESP32S3 Dev Module
 *   USB Mode           : Hardware CDC and JTAG
 *   USB CDC On Boot    : Enabled
 *   Flash Size         : 16MB (128Mb)
 *   Partition Scheme   : 16M Flash (3MB APP/9.9MB FATFS)
 *   PSRAM              : OPI PSRAM
 */

// #define USE_TFT_ESPI   // 取消注释则改用 TFT_eSPI

#include <stdarg.h>

// ─── 引脚定义 ─────────────────────────────────────────────────────────────────
#define BOARD_POWERON        10   // 外设电源；电池供电时必须置 HIGH
#define BOARD_TFT_CS         12
#define BOARD_TFT_DC         11
#define BOARD_TFT_BACKLIGHT  42
#define BOARD_SPI_MOSI       41
#define BOARD_SPI_MISO       38
#define BOARD_SPI_SCK        40
#define BOARD_SDCARD_CS      39   // SD 卡 CS，SPI 操作前须拉高
#define RADIO_CS_PIN          9   // LoRa SX1262 CS，SPI 操作前须拉高

// ─── 颜色常量（RGB565） ───────────────────────────────────────────────────────
#define COL_BLACK    0x0000
#define COL_WHITE    0xFFFF
#define COL_RED      0xF800
#define COL_GREEN    0x07E0
#define COL_BLUE     0x001F
#define COL_YELLOW   0xFFE0
#define COL_CYAN     0x07FF
#define COL_MAGENTA  0xF81F
#define COL_ORANGE   0xFD20
#define COL_PURPLE   0x8010
#define COL_DARKGREY 0x7BEF
#define COL_NAVY     0x000F

// ─── 库选择 ───────────────────────────────────────────────────────────────────
#ifndef USE_TFT_ESPI
// ════════════ Arduino_GFX ════════════
#include <Arduino_GFX_Library.h>

Arduino_DataBus *bus = new Arduino_ESP32SPI(
    BOARD_TFT_DC,  BOARD_TFT_CS,
    BOARD_SPI_SCK, BOARD_SPI_MOSI, BOARD_SPI_MISO);

// 320×240，无硬件 RST (-1)，横屏 (rotation=0)，IPS=true
Arduino_GFX *gfx = new Arduino_ST7789(bus, -1, 0, true, 320, 240);

inline void dispInit() { gfx->begin(); }
inline int16_t dispWidth()  { return gfx->width();  }
inline int16_t dispHeight() { return gfx->height(); }
inline void dispFillScreen(uint16_t c)                                                              { gfx->fillScreen(c); }
inline void dispFillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t c)                   { gfx->fillRect(x, y, w, h, c); }
inline void dispDrawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t c)                   { gfx->drawRect(x, y, w, h, c); }
inline void dispFillRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, uint16_t c)   { gfx->fillRoundRect(x, y, w, h, r, c); }
inline void dispFillCircle(int16_t x, int16_t y, int16_t r, uint16_t c)                            { gfx->fillCircle(x, y, r, c); }
inline void dispFillTriangle(int16_t x0,int16_t y0,int16_t x1,int16_t y1,int16_t x2,int16_t y2,uint16_t c) { gfx->fillTriangle(x0,y0,x1,y1,x2,y2,c); }
inline void dispDrawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t c)               { gfx->drawLine(x0, y0, x1, y1, c); }
inline void dispDrawFastHLine(int16_t x, int16_t y, int16_t w, uint16_t c)                         { gfx->drawFastHLine(x, y, w, c); }
inline void dispDrawFastVLine(int16_t x, int16_t y, int16_t h, uint16_t c)                         { gfx->drawFastVLine(x, y, h, c); }
inline uint16_t dispColor565(uint8_t r, uint8_t g, uint8_t b)                                      { return gfx->color565(r, g, b); }

void dispText(const char *s, int16_t x, int16_t y, uint8_t sz, uint16_t fg) {
    gfx->setTextSize(sz);
    gfx->setTextColor(fg);
    gfx->setCursor(x, y);
    gfx->print(s);
}
void dispCenteredText(const char *s, int16_t y, uint8_t sz, uint16_t fg) {
    gfx->setTextSize(sz);
    gfx->setTextColor(fg);
    int16_t x1, y1; uint16_t w, h;
    gfx->getTextBounds(s, 0, y, &x1, &y1, &w, &h);
    gfx->setCursor((dispWidth() - (int16_t)w) / 2, y);
    gfx->print(s);
}
void dispTextf(int16_t x, int16_t y, uint8_t sz, uint16_t fg, const char *fmt, ...) {
    char buf[64]; va_list ap; va_start(ap, fmt); vsnprintf(buf, sizeof(buf), fmt, ap); va_end(ap);
    dispText(buf, x, y, sz, fg);
}

#else
// ════════════ TFT_eSPI ════════════
// 使用前请配置 User_Setup.h：
//   参考 https://github.com/Xinyuan-LilyGO/T-Deck/commit/6adb8884c689f174c29a6d7172a0daa367a582eb
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();

inline void dispInit() { tft.init(); tft.setRotation(1); }
inline int16_t dispWidth()  { return 320; }
inline int16_t dispHeight() { return 240; }
inline void dispFillScreen(uint16_t c)                                                              { tft.fillScreen(c); }
inline void dispFillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t c)                   { tft.fillRect(x, y, w, h, c); }
inline void dispDrawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t c)                   { tft.drawRect(x, y, w, h, c); }
inline void dispFillRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, uint16_t c)   { tft.fillRoundRect(x, y, w, h, r, c); }
inline void dispFillCircle(int16_t x, int16_t y, int16_t r, uint16_t c)                            { tft.fillCircle(x, y, r, c); }
inline void dispFillTriangle(int16_t x0,int16_t y0,int16_t x1,int16_t y1,int16_t x2,int16_t y2,uint16_t c) { tft.fillTriangle(x0,y0,x1,y1,x2,y2,c); }
inline void dispDrawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t c)               { tft.drawLine(x0, y0, x1, y1, c); }
inline void dispDrawFastHLine(int16_t x, int16_t y, int16_t w, uint16_t c)                         { tft.drawFastHLine(x, y, w, c); }
inline void dispDrawFastVLine(int16_t x, int16_t y, int16_t h, uint16_t c)                         { tft.drawFastVLine(x, y, h, c); }
inline uint16_t dispColor565(uint8_t r, uint8_t g, uint8_t b)                                      { return tft.color565(r, g, b); }

void dispText(const char *s, int16_t x, int16_t y, uint8_t sz, uint16_t fg) {
    tft.setTextSize(sz); tft.setTextColor(fg, COL_BLACK);
    tft.setCursor(x, y); tft.print(s);
}
void dispCenteredText(const char *s, int16_t y, uint8_t sz, uint16_t fg) {
    tft.setTextSize(sz); tft.setTextColor(fg, COL_BLACK);
    int16_t tw = tft.textWidth(s);
    tft.setCursor((dispWidth() - tw) / 2, y); tft.print(s);
}
void dispTextf(int16_t x, int16_t y, uint8_t sz, uint16_t fg, const char *fmt, ...) {
    char buf[64]; va_list ap; va_start(ap, fmt); vsnprintf(buf, sizeof(buf), fmt, ap); va_end(ap);
    dispText(buf, x, y, sz, fg);
}
#endif  // USE_TFT_ESPI

// ─── 辅助：进度条 ─────────────────────────────────────────────────────────────
void drawProgressBar(int16_t x, int16_t y, int16_t w, int16_t h,
                     uint8_t percent, uint16_t fgColor) {
    dispDrawRect(x, y, w, h, COL_WHITE);
    int16_t filled = (int16_t)((w - 2) * percent / 100);
    if (filled > 0)
        dispFillRect(x + 1, y + 1, filled, h - 2, fgColor);
    if ((w - 2) - filled > 0)
        dispFillRect(x + 1 + filled, y + 1, (w - 2) - filled, h - 2, COL_BLACK);
}

// ─── Page 1：欢迎界面 ─────────────────────────────────────────────────────────
void pageWelcome() {
    dispFillScreen(COL_BLACK);

    dispFillRect(0,  0, 320, 8, COL_RED);
    dispFillRect(0,  8, 320, 8, COL_YELLOW);
    dispFillRect(0, 16, 320, 8, COL_GREEN);

    dispCenteredText("LILYGO T-Deck",      50, 3, COL_WHITE);
    dispCenteredText("ESP32-S3 + ST7789",  90, 2, COL_CYAN);
    dispCenteredText("320 x 240   2.8\"", 115, 2, COL_CYAN);

    dispDrawFastHLine(20, 140, 280, COL_DARKGREY);

    dispCenteredText("Display Example", 155, 2, COL_YELLOW);
#ifndef USE_TFT_ESPI
    dispCenteredText("Arduino_GFX", 180, 2, COL_GREEN);
#else
    dispCenteredText("TFT_eSPI", 180, 2, COL_GREEN);
#endif

    dispFillRect(0, 224, 320, 8, COL_BLUE);
    dispFillRect(0, 232, 320, 8, COL_PURPLE);

    delay(3000);
}

// ─── Page 2：基本图形 ─────────────────────────────────────────────────────────
void pageGraphics() {
    dispFillScreen(COL_BLACK);
    dispCenteredText("Graphics Demo", 5, 2, COL_WHITE);
    dispDrawFastHLine(0, 24, 320, COL_WHITE);

    // 实心矩形
    dispFillRect(10, 35, 80, 55, COL_RED);
    dispText("fillRect", 20, 95, 1, COL_WHITE);

    // 圆角矩形
    dispFillRoundRect(105, 35, 80, 55, 10, COL_GREEN);
    dispText("roundRect", 108, 95, 1, COL_WHITE);

    // 圆形
    dispFillCircle(250, 62, 26, COL_BLUE);
    dispText("circle", 234, 95, 1, COL_WHITE);

    // 三角形
    dispFillTriangle(10, 170, 90, 115, 170, 170, COL_YELLOW);
    dispText("triangle", 58, 176, 1, COL_WHITE);

    // 渐变斜线
    for (int i = 0; i < 6; i++) {
        dispDrawLine(200, 115, 200 + i * 20, 175,
                     dispColor565(255 - i * 40, i * 40, 128));
    }
    dispText("lines", 218, 180, 1, COL_WHITE);

    delay(3000);
}

// ─── Page 3：颜色渐变 ─────────────────────────────────────────────────────────
void pageColorGradient() {
    dispFillScreen(COL_BLACK);
    dispCenteredText("Color Gradient", 5, 2, COL_WHITE);
    dispDrawFastHLine(0, 24, 320, COL_WHITE);

    // 每段渐变宽 128 px（256 步，每步 0.5px），起始 x=32
    for (int i = 0; i < 256; i++) {
        int16_t vx = (int16_t)(i / 2) + 32;
        dispDrawFastVLine(vx,  35, 40, dispColor565((uint8_t)i, 0, 0));
        dispDrawFastVLine(vx,  90, 40, dispColor565(0, (uint8_t)i, 0));
        dispDrawFastVLine(vx, 145, 40, dispColor565(0, 0, (uint8_t)i));
    }

    dispText("Red",   32,  80, 1, COL_WHITE);
    dispText("Green", 32, 135, 1, COL_WHITE);
    dispText("Blue",  32, 190, 1, COL_WHITE);

    delay(3000);
}

// ─── Page 4：进度条动画 ───────────────────────────────────────────────────────
void pageProgressBar() {
    dispFillScreen(COL_BLACK);
    dispCenteredText("Progress Bar", 5, 2, COL_WHITE);
    dispDrawFastHLine(0, 24, 320, COL_WHITE);

    dispText("Loading...", 20, 60, 1, COL_CYAN);

    for (uint8_t p = 0; p <= 100; p += 2) {
        drawProgressBar(20, 80, 280, 20, p, COL_CYAN);
        // 清除旧数字再重绘，避免叠字
        dispFillRect(138, 110, 44, 12, COL_BLACK);
        dispTextf(138, 110, 1, COL_WHITE, "%3d%%", p);
        delay(40);
    }

    dispCenteredText("Done!", 150, 2, COL_GREEN);
    delay(2000);
}

// ─── Page 5：系统信息 ─────────────────────────────────────────────────────────
void pageSystemInfo() {
    dispFillScreen(COL_BLACK);
    dispFillRect(0, 0, 320, 28, COL_NAVY);
    dispCenteredText("System Info", 5, 2, COL_WHITE);
    dispDrawFastHLine(0, 28, 320, COL_CYAN);

    const char *labels[] = {
        "MCU  : ESP32-S3FN16R8",
        "Flash: 16 MB",
        "PSRAM: 8 MB (OPI)",
        "LCD  : ST7789  320x240",
        "LoRa : SX1262",
        "GNSS : MIA-M10Q",
        "WiFi : 2.4GHz 802.11 b/g/n",
        "BLE  : 5.0 LE",
        "Batt : 2000mAh LiPo",
    };

    for (int i = 0; i < 9; i++) {
        dispText(labels[i], 10, 38 + i * 18, 1, COL_YELLOW);
    }

    dispDrawFastHLine(0, 205, 320, COL_CYAN);
    dispTextf(10, 212, 1, COL_DARKGREY, "Uptime: %lu s", millis() / 1000UL);

    delay(4000);
}

// ─── setup ────────────────────────────────────────────────────────────────────
void setup() {
    Serial.begin(115200);

    // 电源使能（电池供电时必须）
    pinMode(BOARD_POWERON, OUTPUT);
    digitalWrite(BOARD_POWERON, HIGH);

    // 将其他 SPI CS 线拉高，避免总线冲突
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(RADIO_CS_PIN,    OUTPUT); digitalWrite(RADIO_CS_PIN,    HIGH);

    // 背光开启
    pinMode(BOARD_TFT_BACKLIGHT, OUTPUT);
    digitalWrite(BOARD_TFT_BACKLIGHT, HIGH);

    // 初始化显示驱动
    dispInit();
    dispFillScreen(COL_BLACK);

    Serial.println("T-Deck display ready.");
}

// ─── loop ────────────────────────────────────────────────────────────────────
void loop() {
    pageWelcome();
    pageGraphics();
    pageColorGradient();
    pageProgressBar();
    pageSystemInfo();
}
