---
title: Quick Start
show_source: false
---

# T-Display C5 Quick Start

## Required Libraries

The project bundles all required libraries under `lib/`. Copy them to your Arduino libraries directory or use PlatformIO (recommended).

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LVGL | 9.2.0 | [GitHub](https://github.com/lvgl/lvgl) |
| AXP2602 (PMU) | bundled | [GitHub](https://github.com/Xinyuan-LilyGO/T-Display-C5/tree/master/lib/AXP2602) |
| CST816S (touch) | bundled | [GitHub](https://github.com/Xinyuan-LilyGO/T-Display-C5/tree/master/lib/CST816S) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-C5.git
   ```
3. Open `platformio.ini`, uncomment the desired `default_envs` line
4. Click **✓** to build, connect the board, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems** (v3.x / based on ESP-IDF v5.3+)

#### 2. Install Libraries

Copy all folders from the project `lib/` directory into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32C5 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz** |
| Flash Mode | **QIO** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **Default 16MB** |
| PSRAM | **QIO PSRAM** |

#### 4. Upload

Connect via USB-C, open the example sketch, click **Upload**.  
If upload fails, hold **BOOT** (GPIO0) and retry.

---

## ESP-IDF

Requires ESP-IDF **≥ v5.3**. Clone the repository and open with VS Code + ESP-IDF extension, then run `idf.py build flash monitor`.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `lcd` | ST7789 display graphics test |
| `touch` | CST816S touch event reading |
| `lvgl` | LVGL v9 UI demo |
| `voltameter` | Battery voltage (AXP2602) |
| `wifi_sat` | Wi-Fi 6 scan |
| `spi_test` | SPI bus verification |
| `factory` | Full hardware factory test |

---

### Peripheral Examples

#### Hello World (ST7789 direct SPI)

```cpp
#include <Arduino.h>
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7789.h>

#define TFT_CS   26
#define TFT_DC    8
#define TFT_RST  23
#define TFT_BL   25
#define TFT_SCLK  7
#define TFT_MOSI  9

Adafruit_ST7789 tft = Adafruit_ST7789(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST);

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    tft.init(170, 320);
    tft.setRotation(1);
    tft.fillScreen(ST77XX_BLACK);

    tft.setTextColor(ST77XX_GREEN);
    tft.setTextSize(2);
    tft.setCursor(60, 75);
    tft.println("T-Display C5");
}

void loop() {}
```

#### Read Touch (CST816S)

```cpp
#include <Wire.h>

#define TOUCH_SDA   2
#define TOUCH_SCL   3
#define TOUCH_INT  27
#define TOUCH_RST  24
#define TOUCH_ADDR 0x15

void setup() {
    Serial.begin(115200);

    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);

    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (gesture || x || y) {
            Serial.printf("Gesture: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### Read Battery Voltage (AXP2602)

```cpp
// AXP2602 shares the I2C bus (SDA=GPIO2, SCL=GPIO3)
// Use the bundled AXP2602 library from lib/ for full PMU control.
// Quick voltage read via the library:
#include <AXP2602.h>

AXP2602 pmu;

void setup() {
    Serial.begin(115200);
    Wire.begin(2, 3);
    pmu.begin(&Wire);
}

void loop() {
    float vbat = pmu.getBattVoltage();  // mV
    Serial.printf("Battery: %.0f mV\n", vbat);
    delay(2000);
}
```

---

### LVGL

T-Display C5 includes **LVGL v9.2.0**. LVGL 9 introduced a new display and input driver API — use `lv_display_create()` and `lv_indev_create()` instead of the v8 `lv_disp_drv_t` / `lv_indev_drv_t` structs.

#### Setup lv_conf.h

Copy `lv_conf.h` from the project root to the same level as the `lvgl` folder in your Arduino libraries directory. Ensure `LV_COLOR_DEPTH` is set to `16` and `LV_USE_ST7789` or the SPI flush path is enabled.

#### Minimal LVGL v9 Sketch

```cpp
#include <Arduino.h>
#include <SPI.h>
#include <Wire.h>
#include <lvgl.h>

// --- Pin definitions ---
#define TFT_CS   26
#define TFT_DC    8
#define TFT_RST  23
#define TFT_BL   25
#define TFT_SCLK  7
#define TFT_MOSI  9
#define TOUCH_SDA  2
#define TOUCH_SCL  3
#define TOUCH_ADDR 0x15

#define SCREEN_W 320
#define SCREEN_H 170

// Draw buffer (1/10 screen)
static lv_color_t buf[SCREEN_W * 17];

// --- Flush callback (LVGL 9 API) ---
void my_disp_flush(lv_display_t *disp, const lv_area_t *area, uint8_t *px_map) {
    // Send pixel data to ST7789 via SPI
    // Use your preferred SPI/ST7789 driver here
    // After sending, call:
    lv_display_flush_ready(disp);
}

// --- Touch read callback (LVGL 9 API) ---
void my_touch_read(lv_indev_t *indev, lv_indev_data_t *data) {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        Wire.read();
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (x < SCREEN_W && y < SCREEN_H) {
            data->state   = LV_INDEV_STATE_PRESSED;
            data->point.x = x;
            data->point.y = y;
            return;
        }
    }
    data->state = LV_INDEV_STATE_RELEASED;
}

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    Wire.begin(TOUCH_SDA, TOUCH_SCL);

    lv_init();

    // Create display
    lv_display_t *disp = lv_display_create(SCREEN_W, SCREEN_H);
    lv_display_set_flush_cb(disp, my_disp_flush);
    lv_display_set_buffers(disp, buf, NULL, sizeof(buf), LV_DISPLAY_RENDER_MODE_PARTIAL);

    // Create touch input device
    lv_indev_t *indev = lv_indev_create();
    lv_indev_set_type(indev, LV_INDEV_TYPE_POINTER);
    lv_indev_set_read_cb(indev, my_touch_read);

    // Simple label
    lv_obj_t *label = lv_label_create(lv_screen_active());
    lv_label_set_text(label, "T-Display C5");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

> **LVGL 9 vs LVGL 8:** The key API changes are `lv_display_create()` (replaces `lv_disp_drv_register()`), `lv_display_flush_ready()` (replaces `lv_disp_flush_ready()`), `lv_screen_active()` (replaces `lv_scr_act()`), and `lv_indev_create()` (replaces `lv_indev_drv_register()`).

#### Factory Example

Open the `factory` sketch from the repository. It initialises the full LVGL UI including display, touch, battery, and Wi-Fi status panel, and is the authoritative reference for production-ready LVGL setup on T-Display C5.

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold the **BOOT** button (GPIO0) and retry. If that doesn't work, hold BOOT, press and release RST, then release BOOT.

**Q: Which development environment is recommended?**  
A: PlatformIO is recommended for the smoothest experience. Arduino IDE works with esp32 v3.x (ESP-IDF v5.3+), but older board packages will fail to compile.

**Q: The display stays white or shows noise after upload.**  
A: Ensure backlight pin GPIO25 is set HIGH. Also verify the correct SPI pins (SCLK=7, MOSI=9) — the C5 does not have a default HW SPI on standard pins.

**Q: Does Wi-Fi 6 (5 GHz) work in Arduino?**  
A: Yes, the ESP32-C5 supports 2.4 GHz and 5 GHz bands. Use standard `WiFi.h` — band selection is handled automatically.
