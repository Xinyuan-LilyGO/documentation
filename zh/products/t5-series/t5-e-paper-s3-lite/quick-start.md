---
title: 快速开始
show_source: false
---

# T5-4.7 E-Paper S3 Lite 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| epd47 | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47) |

> epd47 显示驱动已包含在 LilyGo-EPD47 仓库中，直接使用仓库内的示例即可。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-EPD47.git
   ```
3. 打开项目，在 `platformio.ini` 中选择 S3 Lite 对应环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-EPD47 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **显示屏**：4.7 英寸 EDO47TC1，540×960 像素，带 AG 防眩光玻璃和暖色背光，与 S3 Pro 面板相同
- **与 S3 Pro 的区别**：Lite 去掉了 SX1262 LoRa 模块和 MIA-M10Q GPS，降低成本；显示、触摸和代码完全兼容
- **触摸**：GT911 电容触摸（I²C）
- **RTC**：PCF8563 实时时钟

---

## LVGL

T5-4.7 S3 Lite 支持 LVGL，使用与 S3 Pro 相同的 `epd47` 驱动和示例。推荐 LVGL 版本：**8.3.x**。S3 Lite 与 S3 Pro 使用相同的显示驱动代码。

#### lv_conf.h

```c
#define LV_COLOR_DEPTH    16
#define LV_HOR_RES_MAX   960
#define LV_VER_RES_MAX   540
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
```

#### Hello World

```cpp
#include <lvgl.h>
#include <epd47.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[960 * 60];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    epd47.writePixelArea(area->x1, area->y1, w, h, (uint16_t *)color_p);
    lv_disp_flush_ready(disp);
}

void setup() {
    epd47.init(/*CS*/9, /*DC*/11, /*RST*/17, /*BUSY*/13);
    
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 960 * 60);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 960;
    disp_drv.ver_res = 540;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T5-4.7 S3 Lite\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(10);
}
```

---

### 外设示例

#### 墨水屏（epd47）

```cpp
#include <epd47.h>

void setup() {
    epd47.init(/*CS*/9, /*DC*/11, /*RST*/17, /*BUSY*/13);
    epd47.clear();
    epd47.setFont(&FreeSans12pt7b);
    epd47.setCursor(20, 60);
    epd47.print("T5-4.7 S3 Lite");
    epd47.update();
}

void loop() {}
```

#### 触摸（GT911）

```cpp
#include <Wire.h>
#include <TAMC_GT911.h>

#define TOUCH_SDA   17
#define TOUCH_SCL   18
#define TOUCH_INT   16
#define TOUCH_RST   -1

TAMC_GT911 tp(TOUCH_SDA, TOUCH_SCL, TOUCH_INT, TOUCH_RST, 540, 960);

void setup() {
    Serial.begin(115200);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
    tp.begin();
    tp.setRotation(ROTATION_NORMAL);
}

void loop() {
    tp.read();
    if (tp.isTouched) {
        Serial.printf("触摸坐标: X=%d Y=%d\n", tp.points[0].x, tp.points[0].y);
    }
    delay(10);
}
```

---

## 常见问题

**Q：与 T5-4.7 S3 Pro 的区别是什么？**
A：Lite 去掉了 LoRa 和 GPS 模块以降低成本，显示效果和代码与 Pro 版完全相同。

**Q：无法上传？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**。必要时按住 BOOT + 按 RST 进入下载模式。
