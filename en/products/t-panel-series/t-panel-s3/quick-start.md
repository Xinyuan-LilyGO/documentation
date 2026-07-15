---
title: Quick Start
show_source: false
---

# T-Panel S3 Quick Start

## Dependencies

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LVGL | ≥ 8.3 | [GitHub](https://github.com/lvgl/lvgl) |
| Arduino_GFX | latest | [GitHub](https://github.com/moononournation/Arduino_GFX) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Panel.git
   ```
3. Open `platformio.ini` and under `[platformio]` uncomment the `T-Panel-S3` environment
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

T-Panel S3 uses a 4.3-inch RGB LCD (800×480). LVGL 8.x with Arduino_GFX.

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// RGB panel — Arduino_GFX handles the flush callback internally
// Set in lv_conf.h: LV_HOR_RES_MAX=800, LV_VER_RES_MAX=480

void setup() {
  // GFX and LVGL init handled by the T-Panel library
  // Refer to examples/LVGL in the T-Panel repo for full setup
  lv_obj_t *label = lv_label_create(lv_scr_act());
  lv_label_set_text(label, "T-Panel S3");
  lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
  lv_timer_handler();
  delay(5);
}
```

---

### Peripheral Examples

#### Display (4.3-inch RGB IPS via Arduino_GFX)

```cpp
#include <Arduino_GFX_Library.h>

// RGB panel data pins and timing defined in T-Panel board config
// Refer to T-Panel/src/pin_config.h for exact pin assignments
extern Arduino_RGB_Display *gfx;

void setup() {
  gfx->begin();
  gfx->fillScreen(BLACK);
  gfx->setTextColor(WHITE);
  gfx->setTextSize(3);
  gfx->setCursor(250, 220);
  gfx->print("T-Panel S3");
}

void loop() {}
```

#### Touch (GT911)

```cpp
#include <Wire.h>

// GT911 I2C: SDA=19, SCL=20, INT=18, RST=38
#define GT911_ADDR 0x5D
#define TOUCH_SDA  19
#define TOUCH_SCL  20
#define TOUCH_INT  18
#define TOUCH_RST  38

void setup() {
  Serial.begin(115200);
  Wire.begin(TOUCH_SDA, TOUCH_SCL);
  pinMode(TOUCH_RST, OUTPUT);
  digitalWrite(TOUCH_RST, LOW); delay(10);
  digitalWrite(TOUCH_RST, HIGH); delay(50);
  pinMode(TOUCH_INT, INPUT);
}

void loop() {
  if (digitalRead(TOUCH_INT) == LOW) {
    Wire.beginTransmission(GT911_ADDR);
    Wire.write(0x81); Wire.write(0x4E); // status register
    Wire.endTransmission(false);
    Wire.requestFrom(GT911_ADDR, 1);
    if (Wire.available()) {
      uint8_t status = Wire.read();
      if (status & 0x80) { // buffer ready
        Serial.print("Touch detected, points: ");
        Serial.println(status & 0x0F);
      }
    }
  }
  delay(10);
}
```

---

## Notes

- **Display**: 4.3-inch 800×480 IPS with capacitive touch (GT911). The display uses an RGB interface driven by the ESP32-S3
- **microSD**: SPI interface; use the `SD` library
- **LVGL**: Set `LV_HOR_RES_MAX = 800` and `LV_VER_RES_MAX = 480` in `lv_conf.h`

---

## FAQ

**Q: Cannot upload?**
A: Hold **BOOT**, press **RST** once, release **BOOT**, then retry uploading.

**Q: Display shows garbage or stays blank?**
A: Ensure **USB CDC On Boot** is **Enabled** and the correct board variant (`T-Panel-S3`) is selected in `platformio.ini` or `config.h`.
