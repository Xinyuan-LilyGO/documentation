---
title: 快速开始
show_source: false
---

# T-Dongle-S3 快速开始
## 依赖库
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| FastLED | 最新| [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例行
4. 点击 **Build** 编译，将 Dongle 插入 USB-A 接口，点击 **Upload** 上传

---

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE -> **文件** -> **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** -> **开发板** -> **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 安装依赖库
将项目 `lib/` 中的所有文件夹复制到 Arduino 库目录，或通过 **工具** -> **管理库** 安装
#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> **提示：** 使用电池供电时，将 **USB CDC On Boot** 设为 **Disabled**。
#### 4. 上传

将 Dongle 插入 USB-A 接口，打开示例，点击「上传」。 
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，然后上传。
---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Display_Test` | ST7735 TFT 显示测试 |
| `APA102_LED` | APA102 RGB LED 彩色循环 |
| `TF_Card` | TF 卡读取|
| `LVGL_Demo` | LVGL 8 UI 演示 |
| `Factory` | 全功能出厂测试|

---

### 外设示例

#### Hello World（LovyanGFX
```cpp
#define LILYGO_LGFX_USE_T_DONGLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Dongle_S3 display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.setCursor(5, 65);
    display.println("T-Dongle S3");
}

void loop() {}
```

#### APA102 RGB LED

```cpp
#include <FastLED.h>

#define LED_CI  40
#define LED_DI  39
#define NUM_LEDS 1

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<APA102, LED_DI, LED_CI, BGR>(leds, NUM_LEDS);
    FastLED.setBrightness(50);
}

void loop() {
    leds[0] = CRGB::Red;   FastLED.show(); delay(500);
    leds[0] = CRGB::Green; FastLED.show(); delay(500);
    leds[0] = CRGB::Blue;  FastLED.show(); delay(500);
}
```

---

### LVGL

T-Dongle-S3 搭载 0.96 英寸 **ST7735 IPS TFT**0 × 160），LovyanGFX 驱动
#### 配置 lv_conf.h

将项目中将 `lv_conf.h` 复制到 Arduino 库目录中`lvgl` 文件夹同级的位置。关键配置：

```c
#define LV_COLOR_DEPTH  16
#define LV_HOR_RES_MAX  80
#define LV_VER_RES_MAX 160
```

#### 最简 LVGL v8 示例

```cpp
#define LILYGO_LGFX_USE_T_DONGLE_S3
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W  80
#define SCREEN_H 160

LilyGo_T_Dongle_S3 display;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * SCREEN_H / 10];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    display.startWrite();
    display.setAddrWindow(area->x1, area->y1, w, h);
    display.pushPixels((uint16_t *)color_p, w * h, true);
    display.endWrite();
    lv_disp_flush_ready(drv);
}

void setup() {
    display.begin(1);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * SCREEN_H / 10);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Dongle S3");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_14, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 出厂示例

打开仓库中的 `LVGL_Demo` `Factory` 示例，这T-Dongle-S3 生产LVGL 集成的权威参考。
---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
**Q：上传后屏幕不亮？**  
A：使用 `LilyGo_T_Dongle_S3` `display.begin()`，该函数会初始化 GPIO38 背光。
**Q：APA102 LED 不亮？**  
A：确认引脚顺序正确（CI=GPIO40，DI=GPIO39）。APA102 使用途SPI 协议，时钟和数据为独立引脚，与 WS2812 单线协议不同。