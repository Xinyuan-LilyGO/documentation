---
title: 快速开始
show_source: false
---

# T-Display C5 快速开始

## 依赖库

项目所有依赖库已放在 `lib/` 目录下，复制到 Arduino 库目录即可使用，或直接使用 PlatformIO（推荐）。

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LVGL | 9.2.0 | [GitHub](https://github.com/lvgl/lvgl) |
| AXP2602（电源管理） | 内置 | [GitHub](https://github.com/Xinyuan-LilyGO/T-Display-C5/tree/master/lib/AXP2602) |
| CST816S（触摸） | 内置 | [GitHub](https://github.com/Xinyuan-LilyGO/T-Display-C5/tree/master/lib/CST816S) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-C5.git
   ```
3. 打开 `platformio.ini`，取消注释目标 `default_envs` 行
4. 点击 **✓** 编译，连接开发板，点击 **→** 上传

---

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**（v3.x / 基于 ESP-IDF v5.3+）

#### 2. 安装依赖库

将项目 `lib/` 目录中的所有文件夹复制到 Arduino 库目录（例如 `C:\Users\YourName\Documents\Arduino\libraries`）。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32C5 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz** |
| Flash Mode | **QIO** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **Default 16MB** |
| PSRAM | **QIO PSRAM** |

#### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。  
若上传失败，按住 **BOOT**（GPIO0）重试。

---

## ESP-IDF

需要 ESP-IDF **≥ v5.3**。克隆仓库后使用 VS Code + ESP-IDF 插件打开，运行 `idf.py build flash monitor`。

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `lcd` | ST7789 显示图形测试 |
| `touch` | CST816S 触摸事件读取 |
| `lvgl` | LVGL v9 UI 演示 |
| `voltameter` | 电池电压读取（AXP2602） |
| `wifi_sat` | Wi-Fi 6 扫描 |
| `spi_test` | SPI 总线验证 |
| `factory` | 全功能出厂测试 |

---

### 外设示例

#### Hello World（ST7789 直接 SPI）

```cpp
#include <Arduino.h>
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7789.h>

#define TFT_CS   26
#define TFT_DC    8
#define TFT_RST  23
#define TFT_BL   25
#define TFT_SCLK  7
#define TFT_MOSI  9

Adafruit_ST7789 tft = Adafruit_ST7789(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST);

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    tft.init(170, 320);
    tft.setRotation(1);
    tft.fillScreen(ST77XX_BLACK);

    tft.setTextColor(ST77XX_GREEN);
    tft.setTextSize(2);
    tft.setCursor(60, 75);
    tft.println("T-Display C5");
}

void loop() {}
```

#### 读取触摸（CST816S）

```cpp
#include <Wire.h>

#define TOUCH_SDA   2
#define TOUCH_SCL   3
#define TOUCH_INT  27
#define TOUCH_RST  24
#define TOUCH_ADDR 0x15

void setup() {
    Serial.begin(115200);

    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);

    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (gesture || x || y) {
            Serial.printf("手势: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### 读取电池电压（AXP2602）

```cpp
// AXP2602 共用 I2C 总线（SDA=GPIO2，SCL=GPIO3）
// 完整电源管理请使用 lib/ 中内置的 AXP2602 库
#include <AXP2602.h>

AXP2602 pmu;

void setup() {
    Serial.begin(115200);
    Wire.begin(2, 3);
    pmu.begin(&Wire);
}

void loop() {
    float vbat = pmu.getBattVoltage();  // 单位：mV
    Serial.printf("电池电压: %.0f mV\n", vbat);
    delay(2000);
}
```

---

### LVGL

T-Display C5 内置 **LVGL v9.2.0**。LVGL 9 引入了全新的显示和输入驱动 API——使用 `lv_display_create()` 和 `lv_indev_create()` 替代 v8 的 `lv_disp_drv_t` / `lv_indev_drv_t` 结构体。

#### 配置 lv_conf.h

将项目根目录下的 `lv_conf.h` 复制到 Arduino 库目录中与 `lvgl` 文件夹同级的位置。确保 `LV_COLOR_DEPTH` 设置为 `16`，并启用对应的 SPI flush 路径。

#### 最简 LVGL v9 示例

```cpp
#include <Arduino.h>
#include <SPI.h>
#include <Wire.h>
#include <lvgl.h>

// --- 引脚定义 ---
#define TFT_CS   26
#define TFT_DC    8
#define TFT_RST  23
#define TFT_BL   25
#define TFT_SCLK  7
#define TFT_MOSI  9
#define TOUCH_SDA  2
#define TOUCH_SCL  3
#define TOUCH_ADDR 0x15

#define SCREEN_W 320
#define SCREEN_H 170

// 绘制缓冲区（屏幕的 1/10）
static lv_color_t buf[SCREEN_W * 17];

// --- 刷新回调（LVGL 9 API）---
void my_disp_flush(lv_display_t *disp, const lv_area_t *area, uint8_t *px_map) {
    // 通过 SPI 将像素数据发送到 ST7789
    // 使用你选择的 SPI/ST7789 驱动发送后调用：
    lv_display_flush_ready(disp);
}

// --- 触摸读取回调（LVGL 9 API）---
void my_touch_read(lv_indev_t *indev, lv_indev_data_t *data) {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        Wire.read();
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (x < SCREEN_W && y < SCREEN_H) {
            data->state   = LV_INDEV_STATE_PRESSED;
            data->point.x = x;
            data->point.y = y;
            return;
        }
    }
    data->state = LV_INDEV_STATE_RELEASED;
}

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    Wire.begin(TOUCH_SDA, TOUCH_SCL);

    lv_init();

    // 创建显示设备
    lv_display_t *disp = lv_display_create(SCREEN_W, SCREEN_H);
    lv_display_set_flush_cb(disp, my_disp_flush);
    lv_display_set_buffers(disp, buf, NULL, sizeof(buf), LV_DISPLAY_RENDER_MODE_PARTIAL);

    // 创建触摸输入设备
    lv_indev_t *indev = lv_indev_create();
    lv_indev_set_type(indev, LV_INDEV_TYPE_POINTER);
    lv_indev_set_read_cb(indev, my_touch_read);

    // 创建标签
    lv_obj_t *label = lv_label_create(lv_screen_active());
    lv_label_set_text(label, "T-Display C5");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

> **LVGL 9 与 LVGL 8 的主要 API 变化：** `lv_display_create()` 替代 `lv_disp_drv_register()`，`lv_display_flush_ready()` 替代 `lv_disp_flush_ready()`，`lv_screen_active()` 替代 `lv_scr_act()`，`lv_indev_create()` 替代 `lv_indev_drv_register()`。

#### 出厂测试示例

打开仓库中的 `factory` 示例。它完整初始化了 LVGL UI，包括显示屏、触摸、电池和 Wi-Fi 状态面板，是 T-Display C5 生产级 LVGL 开发的最佳参考。

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT** 按键（GPIO0）重试。如仍失败，按住 BOOT，按一下 RST 后松开，再松开 BOOT。

**Q：推荐用哪个开发环境？**  
A：推荐 PlatformIO。Arduino IDE 需使用 esp32 v3.x（ESP-IDF v5.3+），旧版开发板包会编译失败。

**Q：上传后屏幕全白或显示花屏？**  
A：确认背光引脚 GPIO25 已设为 HIGH。同时检查 SPI 引脚（SCLK=7，MOSI=9）是否正确——C5 的默认 HW SPI 引脚与其他型号不同。

**Q：Arduino 下 Wi-Fi 6（5 GHz）可以使用吗？**  
A：可以。ESP32-C5 支持 2.4 GHz 和 5 GHz 双频，使用标准 `WiFi.h` 即可，频段自动选择。
