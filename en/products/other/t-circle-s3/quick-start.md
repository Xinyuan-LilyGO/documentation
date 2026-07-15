---
title: Quick Start
show_source: false
---

# T-Circle S3 Quick Start

## Required Libraries

Copy the `libraries/` folder from the repository into your Arduino libraries directory:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | ≤ 2.0.14 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| CST816D (touch) | latest | [GitHub](https://github.com/Xinyuan-LilyGO/T-Circle-S3) |
| LVGL | 8.3.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from the project `libraries/` into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your COM port |
| USB CDC On Boot | **Enabled** |
| USB Mode | **Hardware CDC and JTAG** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

> **Note:** Set **USB CDC On Boot** to **Disabled** when running on battery only.

#### 4. Upload

Connect via USB-C, open the example sketch, click **Upload**.  
If upload fails, hold **BOOT** and press **RST**, release RST first, then start upload.

---

### PlatformIO

1. Install [VS Code](https://code.visualstudio.com/) and **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Circle-S3.git
   ```
3. Open `platformio.ini`, uncomment the desired example environment
4. Click **✓** to build, connect the board, click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Display` | TFT_eSPI display demo |
| `Touch` | CST816D capacitive touch |
| `LVGL_Demo` | LVGL UI framework demo |
| `Factory` | Full hardware test |

---

### Peripheral Examples

#### Hello World (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);

    tft.setTextColor(TFT_GREEN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(15, 70);
    tft.println("T-Circle S3");
}

void loop() {}
```

#### Draw on the Round Screen

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.fillScreen(TFT_BLACK);

    // Filled background circle
    tft.fillCircle(80, 80, 78, TFT_NAVY);
    // White ring border
    tft.drawCircle(80, 80, 78, TFT_WHITE);

    tft.setTextColor(TFT_WHITE);
    tft.setTextSize(2);
    tft.setCursor(30, 72);
    tft.print("Hello!");
}

void loop() {}
```

#### Read Touch (CST816D)

```cpp
#include <Wire.h>

// Refer to pin_config.h for actual I2C pins
#define TOUCH_SDA   3
#define TOUCH_SCL   2
#define TOUCH_ADDR  0x15

void setup() {
    Serial.begin(115200);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x02);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint8_t xH = Wire.read() & 0x0F;
        uint8_t xL = Wire.read();
        uint8_t yH = Wire.read() & 0x0F;
        uint8_t yL = Wire.read();
        int x = (xH << 8) | xL;
        int y = (yH << 8) | yL;
        if (x || y) {
            Serial.printf("Gesture: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### Minimal LVGL Sketch

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[160 * 20];

TFT_eSPI tft = TFT_eSPI();

void disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1,
                      area->x2 - area->x1 + 1,
                      area->y2 - area->y1 + 1);
    tft.pushColors((uint16_t *)color_p, (area->x2 - area->x1 + 1) * (area->y2 - area->y1 + 1), true);
    tft.endWrite();
    lv_disp_flush_ready(drv);
}

void setup() {
    tft.init();
    tft.setRotation(0);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 160 * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = 160;
    disp_drv.ver_res  = 160;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    // Create a label
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Circle S3");
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold **BOOT**, press and release **RST**, then start the upload while still holding BOOT.

**Q: No serial output over USB?**  
A: Set **USB CDC On Boot** to **Enabled** in Arduino IDE Tools.

**Q: T-Circle vs T-Circle S3?**  
A: T-Circle S3 uses ESP32-S3 with USB-OTG, OPI PSRAM, and more GPIO. Use this version for new projects.

**Q: TFT_eSPI version must be ≤ 2.0.14?**  
A: Yes. Newer versions of TFT_eSPI changed the driver interface and are not compatible with this board's configuration file.
