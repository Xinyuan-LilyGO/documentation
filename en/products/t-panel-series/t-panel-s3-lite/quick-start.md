---
title: Quick Start
show_source: false
---

# T-Panel S3 Lite Quick Start

## Dependencies

| Library | Version | Source |
| :-----: | :-----: | :----: |
| Arduino_GFX | latest | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| LVGL | ≥ 8.3 | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Panel.git
   ```
3. Open `platformio.ini` and under `[platformio]` uncomment the `T-Panel-S3-Lite` environment
4. Click **✓** to compile, connect USB-C, click **→** to upload

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
2. Clone the T-Panel repository and open an example sketch
3. Apply the board settings above and click **Upload**

---

### LVGL

T-Panel S3 Lite uses a 3.95-inch ST7701S IPS display (480×480). LVGL 8.x with Arduino_GFX.

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// Set in lv_conf.h: LV_HOR_RES_MAX=480, LV_VER_RES_MAX=480
// Arduino_GFX handles the display flush in the T-Panel library

void setup() {
  // Full GFX + LVGL init is in the T-Panel examples
  lv_obj_t *label = lv_label_create(lv_scr_act());
  lv_label_set_text(label, "T-Panel S3 Lite");
  lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
  lv_timer_handler();
  delay(5);
}
```

---

### Peripheral Examples

#### Display (ST7701S via Arduino_GFX)

```cpp
#include <Arduino_GFX_Library.h>

// ST7701S initialized via XL9535 IO expander over I2C
// Full pin config is in T-Panel/src/pin_config.h
extern Arduino_RGB_Display *gfx;

void setup() {
  gfx->begin();
  gfx->fillScreen(BLACK);
  gfx->setTextColor(WHITE);
  gfx->setTextSize(3);
  gfx->setCursor(100, 220);
  gfx->print("T-Panel S3 Lite");
}

void loop() {}
```

#### Buttons

```cpp
#define KEY1 48
#define KEY2 47

void setup() {
  Serial.begin(115200);
  pinMode(KEY1, INPUT_PULLUP);
  pinMode(KEY2, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(KEY1) == LOW) {
    Serial.println("KEY1 pressed");
    delay(200);
  }
  if (digitalRead(KEY2) == LOW) {
    Serial.println("KEY2 pressed");
    delay(200);
  }
}
```

---

## Notes

- **Display**: 3.95-inch 480×480 IPS (ST7701S). No touch controller — this is a display-only panel
- **IO Expander**: XL9535 handles SPI initialization of the ST7701S display; ensure the XL9535 I2C driver is included
- **Buttons**: KEY1 = GPIO48, KEY2 = GPIO47, BOOT = GPIO0
- **microSD**: SPI interface (CS=GPIO34, SCK=GPIO36, MOSI=GPIO35, MISO=GPIO37)

---

## FAQ

**Q: What is the difference from T-Panel S3?**
A: T-Panel S3 Lite has a smaller 3.95-inch display (480×480) with no touch, while T-Panel S3 has a 4.3-inch 800×480 display with capacitive touch (GT911).

**Q: Cannot upload?**
A: Hold **BOOT**, press **RST** once, release **BOOT**, then retry uploading.
