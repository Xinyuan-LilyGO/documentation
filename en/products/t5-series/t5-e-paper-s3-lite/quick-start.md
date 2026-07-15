---
title: Quick Start
show_source: false
---

# T5-4.7 E-Paper S3 Lite Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| epd47 | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47) |

> The epd47 display driver is included in the LilyGo-EPD47 repository — use the examples directly from that repo.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-EPD47.git
   ```
3. Open the project and select the S3 Lite environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the LilyGo-EPD47 repo and open an example sketch
3. Select board settings above and click **Upload**

---

## Notes

- **Display:** 4.7-inch EDO47TC1, 540×960 px, with AG anti-glare glass and warm backlight — same panel as the S3 Pro but without LoRa and GPS
- **Code compatibility:** Fully compatible with the T5-4.7 S3 Pro examples in the same repo
- **Touch:** GT911 capacitive touch (I²C), same as the base T5-4.7
- **RTC:** PCF8563 for timekeeping

### LVGL

T5-4.7 S3 Lite supports LVGL using the same `epd47` driver and examples as the S3 Pro. Recommended LVGL: **8.3.x**.

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

Use the `epd47` examples from the same repository for complete LVGL integration. The S3 Lite shares the same display code as the S3 Pro.

### Peripheral Examples

#### E-Paper Display (epd47)

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

#### Touch (GT911)

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
        Serial.printf("Touch X=%d Y=%d\n", tp.points[0].x, tp.points[0].y);
    }
    delay(10);
}
```

#### RTC (PCF8563)

```cpp
#include <Wire.h>
#include <PCF8563.h>

PCF8563 rtc;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    rtc.begin();
    // Set time: 2025-01-01 12:00:00
    rtc.setDate(1, 3, 1, 0, 25);   // day, weekday, month, century, year
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

## FAQ

**Q: What is the difference from the T5-4.7 S3 Pro?**
A: The Lite removes the SX1262 LoRa module and MIA-M10Q GPS to reduce cost. Display, touch, and code are identical.

**Q: Cannot upload?**
A: Ensure **USB CDC On Boot** is **Enabled**. Hold BOOT + press RST to enter download mode if needed.
