---
title: 快速开始
show_source: false
---

# T5-4.7 E-Paper 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| epd47 | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47) |

> epd47 显示驱动已包含在 LilyGo-EPD47 仓库中，直接使用仓库内的示例，无需单独安装库。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-EPD47.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
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

> **重要**：仅支持 Arduino ESP32 核心 v2.0.5–v2.0.15，不支持 v3.x。

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持（使用 **v2.x** 核心，不要使用 v3.x）：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-EPD47 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **显示屏**：4.7 英寸 EDO47TC1，540×960 像素，并行接口（非 SPI），通过 74HCT4094D 移位寄存器驱动
- **触摸**：GT911 双点电容触摸（I²C）
- **RTC**：PCF8563 实时时钟
- **扩展接口**：40 针树莓派兼容排针

---

### 外设示例

#### 墨水屏（epd47）

```cpp
#include <epd47.h>

void setup() {
    // T5-4.7 原版（ESP32-S3 版本）引脚
    epd47.init(/*CS*/39, /*DC*/11, /*RST*/17, /*BUSY*/13);
    epd47.clear();
    epd47.setFont(&FreeSans12pt7b);
    epd47.setCursor(20, 60);
    epd47.print("T5-4.7 E-Paper");
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

#### RTC（PCF8563）

```cpp
#include <Wire.h>
#include <PCF8563.h>

PCF8563 rtc;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    rtc.begin();
    rtc.setDate(1, 3, 1, 0, 25);
    rtc.setTime(12, 0, 0);
}

void loop() {
    Time t = rtc.getTime();
    Date d = rtc.getDate();
    Serial.printf("20%02d-%02d-%02d %02d:%02d:%02d\n",
        d.year, d.month, d.day, t.hour, t.minute, t.second);
    delay(1000);
}
```

---

## LVGL

该开发板可以使用 LVGL 在其 EDO47TC1 显示屏上构建图形界面。推荐 LVGL 版本：**8.3.x**。将 `lv_conf.h` 放在 Arduino `libraries/` 目录中 `lvgl/` 文件夹旁边。

#### lv_conf.h

```c
#define LV_COLOR_DEPTH    16
#define LV_HOR_RES_MAX   540
#define LV_VER_RES_MAX   960
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
```

#### Hello World（参考仓库 examples）

```cpp
#include <lvgl.h>
#include <epd47.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[540 * 60];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    epd47.writePixelArea(area->x1, area->y1, w, h, (uint16_t *)color_p);
    lv_disp_flush_ready(disp);
}

void setup() {
    // 初始化 epd47 驱动（并行接口）
    epd47.init(/*CS*/39, /*DC*/11, /*RST*/17, /*BUSY*/13);
    
    // 初始化 LVGL
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 540 * 60);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 540;
    disp_drv.ver_res = 960;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T5 4.7 E-Paper\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(10);
}
```

---

## 常见问题

**Q：上传后显示屏没有显示？**
A：确认使用的是 Arduino ESP32 核心 v2.x——epd47 驱动与 v3.x 不兼容。

**Q：无法上传？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**。必要时按住 BOOT + 按 RST 进入下载模式。
