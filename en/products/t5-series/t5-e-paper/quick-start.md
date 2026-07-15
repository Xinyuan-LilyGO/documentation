---
title: Quick Start
show_source: false
---

# T5-4.7 E-Paper Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| epd47 | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47) |

> The epd47 display driver is included in the LilyGo-EPD47 repository — use the examples directly from that repo rather than installing the library separately.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-EPD47.git
   ```
3. Open the project and select the appropriate environment in `platformio.ini`
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

> **Important:** Arduino ESP32 core v2.0.5–v2.0.15 only. Core v3.x is not supported for this board.

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support (use core **v2.x**, not v3.x):
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the LilyGo-EPD47 repo and open an example sketch
3. Select the board settings above and click **Upload**

---

## Notes

- **Display:** 4.7-inch EDO47TC1, 540×960 px, parallel interface (not SPI); driven via 74HCT4094D shift register
- **Touch:** GT911 two-point capacitive touch (I²C)
- **RTC:** PCF8563 for timekeeping
- **GPIO expansion:** 40-pin Raspberry Pi-compatible header for expansion

---

### Peripheral Examples

#### E-Paper Display (epd47)

```cpp
#include <epd47.h>

void setup() {
    // Pins for T5-4.7 original (ESP32-S3 version)
    epd47.init(/*CS*/39, /*DC*/11, /*RST*/17, /*BUSY*/13);
    epd47.clear();
    epd47.setFont(&FreeSans12pt7b);
    epd47.setCursor(20, 60);
    epd47.print("T5-4.7 E-Paper");
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

## FAQ

### LVGL

The 4.7-inch EPD can be used with LVGL using the `epd47` driver. Recommended LVGL: **8.3.x**.

#### lv_conf.h

Place `lv_conf.h` next to the `lvgl/` library folder in your Arduino libraries directory:

```c
#define LV_COLOR_DEPTH    16
#define LV_HOR_RES_MAX   540
#define LV_VER_RES_MAX   960
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
```

#### Hello World (from repository examples)

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
    // Initialize epd47 driver (parallel interface)
    epd47.init(/*CS*/39, /*DC*/11, /*RST*/17, /*BUSY*/13);
    
    // Initialize LVGL
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

Refer to the `epd47` example sketches in the repository for a complete LVGL + display integration.

**Q: Display stays blank after upload?**
A: Verify you are using Arduino ESP32 core v2.x — the epd47 driver is not compatible with v3.x.

**Q: Cannot upload?**
A: Ensure **USB CDC On Boot** is **Enabled**. Hold BOOT + press RST to enter download mode if needed.
