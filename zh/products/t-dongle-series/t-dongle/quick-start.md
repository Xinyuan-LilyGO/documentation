---
title: 快速开始
show_source: false
---

# T-Dongle 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/LilyGO/T-Dongle.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，插入 USB-A 端口，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | Disabled |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 T-Dongle 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

### 外设示例

#### 显示屏（ST7735）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(1);
  tft.drawString("T-Dongle", 15, 75);
}

void loop() {}
```

#### RGB LED（WS2812）

```cpp
#include <FastLED.h>

// WS2812 数据引脚 — 请查阅 T-Dongle 原理图
#define LED_PIN  4
#define NUM_LEDS 1

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  leds[0] = CRGB::Red;   FastLED.show(); delay(500);
  leds[0] = CRGB::Green; FastLED.show(); delay(500);
  leds[0] = CRGB::Blue;  FastLED.show(); delay(500);
}
```

---

## 注意事项

- **外形**：USB-A 插头形式，可直接插入任意 USB-A 接口，无需数据线
- **显示屏**：0.96 英寸 ST7735 TFT，80×160 像素（SPI）
- **RGB LED**：WS2812 可寻址 LED
- **TF 卡**：卡槽隐藏在 USB-A 外壳内部，需将 Dongle 从 USB 口拔出后才能插拔 TF 卡
- **无 PSRAM**：标准 ESP32 模块，仅 4 MB Flash

---

## LVGL

该开发板搭载小尺寸 ST7735 TFT 屏幕，可以使用 LVGL（推荐版本 **8.3.x**）和 `TFT_eSPI` 或 `Arduino_GFX` 后端。将 `lv_conf.h` 放在 Arduino `libraries/` 目录中 `lvgl/` 文件夹旁边，并将 `LV_HOR_RES_MAX` / `LV_VER_RES_MAX` 设置为屏幕尺寸（80×160）。

#### lv_conf.h

```c
#define LV_COLOR_DEPTH    16    // 彩色 TFT
#define LV_HOR_RES_MAX    80
#define LV_VER_RES_MAX   160
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE (48 * 1024)
```

#### Hello World

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[80 * 20];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1, w, h);
    tft.pushColors((uint16_t *)&color_p->full, w * h, true);
    tft.endWrite();
    lv_disp_flush_ready(disp);
}

void setup() {
    tft.begin();
    tft.setRotation(1);
    
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 80 * 20);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 80;
    disp_drv.ver_res = 160;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Dongle\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

## 常见问题

**Q：显示屏无法初始化？**
A：确认 ST7735 SPI 引脚定义与 T-Dongle 原理图一致——紧凑外形使用了非标准 SPI 引脚。

**Q：TF 卡未被检测到？**
A：TF 卡槽在 USB 外壳内部，需将 Dongle 完全从 USB 口拔出后才能插拔 TF 卡。
