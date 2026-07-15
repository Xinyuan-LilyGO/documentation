---
title: Quick Start
show_source: false
---

# T-Glass Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LilyGo T-Wristband & T-Glass | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass.git
   ```
3. Open the project and select the T-Glass environment in `platformio.ini`
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
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **QSPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the repo and open a T-Glass example sketch
3. Select board settings above and click **Upload**

---

## Notes

- **Display:** 1.1-inch JD9613 AMOLED (294×126 px); visible area is 126×126 px — do not use `setRotation(1)` or `setRotation(3)`, only `0` or `2` are valid
- **IMU:** BHI260AP AI motion sensor (6-DoF) for gesture and activity detection
- **Sleep:** ~300 µA in sleep; wake via side touch button
- **RTC:** PCF85063A — use for timestamped logging or scheduled wakeups
- **PSRAM:** QSPI 2 MB — select **QSPI PSRAM** in Arduino IDE

---

### Peripheral Examples

#### AMOLED Display (JD9613)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(0); // Only 0 or 2 are valid
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(1);
  tft.drawString("T-Glass", 30, 55);
}

void loop() {}
```

#### IMU (BHI260AP)

```cpp
#include <Wire.h>

// BHI260AP I2C address
#define BHI260_ADDR 0x28

void setup() {
  Serial.begin(115200);
  Wire.begin();
  // Check device presence
  Wire.beginTransmission(BHI260_ADDR);
  if (Wire.endTransmission() == 0) {
    Serial.println("BHI260AP detected");
  }
}

void loop() { delay(1000); }
```

#### RTC (PCF85063A)

```cpp
#include <Wire.h>

#define PCF85063_ADDR 0x51

void setup() {
  Serial.begin(115200);
  Wire.begin();
  // Read seconds register
  Wire.beginTransmission(PCF85063_ADDR);
  Wire.write(0x04); // seconds register
  Wire.endTransmission(false);
  Wire.requestFrom(PCF85063_ADDR, 1);
  if (Wire.available()) {
    uint8_t secs = Wire.read() & 0x7F; // mask VL bit
    Serial.printf("RTC seconds: %d\n", secs);
  }
}

void loop() { delay(1000); }
```

---

### LVGL

T-Glass can run LVGL on its JD9613 AMOLED display (visible area 126×126). Recommended LVGL: **8.3.x**. Place `lv_conf.h` next to the `lvgl/` folder in your Arduino `libraries/` directory and set `LV_HOR_RES_MAX` / `LV_VER_RES_MAX` to 126×126. Be aware of rotation limitations — use `setRotation(0)` or `setRotation(2)` only.

#### lv_conf.h

```c
#define LV_COLOR_DEPTH    16    // Color AMOLED
#define LV_HOR_RES_MAX   126
#define LV_VER_RES_MAX   126
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE (64 * 1024)  // 64KB for small display
```

#### Hello World

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[126 * 20];

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
    tft.setRotation(0);   // Only 0 or 2
    
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 126 * 20);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 126;
    disp_drv.ver_res = 126;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Glass\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

The project repository includes LVGL-based examples for T-Glass and T-Wristband. Use those examples as the authoritative reference for the display driver, touch handling, and rotation settings.

## FAQ

**Q: Display shows corrupted image after rotation?**
A: The JD9613 does not support all rotation modes. Use `setRotation(0)` or `setRotation(2)` only.

**Q: Cannot upload?**
A: Ensure **USB CDC On Boot** is **Enabled**. Hold BOOT + press RST to enter download mode if needed.
