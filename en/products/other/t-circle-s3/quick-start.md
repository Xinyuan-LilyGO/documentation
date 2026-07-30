---
title: Quick Start
show_source: false
---

# T-Circle S3 Quick Start

## Required Libraries

Before compiling any example, install the following libraries from the Arduino IDE Library Manager or place them manually in your `libraries` folder. For the touch library, copy it from the `libraries/` directory in the T-Circle-S3 repository:

| Library | Source |
| :-----: | :----: |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| CST816D (touch) | [T-Circle-S3 repository](https://github.com/Xinyuan-LilyGO/T-Circle-S3) |
| LVGL (v8.x) | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |

> **Note:** New display examples should use `LilyGo_LovyanGFX`. The library wraps the T-Circle S3 screen pins and driver settings on top of LovyanGFX, which makes AI-generated UI code less likely to overwrite the low-level display configuration.

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE -> **File** -> **Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** -> **Board** -> **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Board Settings

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

> **Note:** Set **USB CDC On Boot** to **Disabled** when running on battery only, otherwise the board may wait for a USB connection during boot.

#### 3. LilyGo_LovyanGFX Configuration

T-Circle S3 uses a GC9D01N round TFT LCD (160 × 160, SPI interface). After installing `LilyGo_LovyanGFX`, create a `LilyGo_T_Circle_S3` object directly in your sketch:

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;
```

`tft.begin()` initializes the display, applies rotation and brightness, and clears the screen.

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
4. If you create a new example based on `LilyGo_LovyanGFX`, add LovyanGFX to `lib_deps` and keep the local library in your Arduino libraries folder:
   ```ini
   lib_deps =
       lovyan03/LovyanGFX
   ```
5. Click **Build** to build, connect the board, click **Upload** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `LilyGo_LovyanGFX_Board_Test` | Unified LilyGo_LovyanGFX board display test |
| `Original_Test` | Factory hardware test |
| `GFX` | LovyanGFX display example |
| `CST816D` | CST816D capacitive touch |
| `APA102_Blink` | APA102 LED blink |
| `Voice_Speaker` | Speaker example |
| `DMIC_ReadData` | Microphone readout |
| `Wifi_Music` | Wi-Fi music playback |

See the [T-Circle-S3 repository](https://github.com/Xinyuan-LilyGO/T-Circle-S3) for the complete example list.

---

### Peripheral Examples

#### Hello World (LovyanGFX)

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;

void setup() {
    tft.begin(0);

    tft.setTextColor(TFT_GREEN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(15, 70);
    tft.println("T-Circle S3");
}

void loop() {}
```

#### Draw on the Round Screen

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;

void setup() {
    tft.begin(0);

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

// From the pin table: CST816D uses SDA=IO11, SCL=IO14, INT=IO12
#define TOUCH_SDA   11
#define TOUCH_SCL   14
#define TOUCH_INT   12
#define TOUCH_ADDR  0x15

void setup() {
    Serial.begin(115200);
    pinMode(TOUCH_INT, INPUT);
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

#### Sprite Animation

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;
LGFX_Sprite sprite(&tft);

int r = 8;
int delta = 2;

void setup() {
    tft.begin(0);
    sprite.createSprite(80, 80);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.fillCircle(40, 40, r, TFT_CYAN);
    sprite.drawCircle(40, 40, 30, TFT_WHITE);
    sprite.pushSprite(40, 40);

    r += delta;
    if (r >= 28 || r <= 8) delta = -delta;
    delay(30);
}
```

---

### LVGL

T-Circle S3 supports LVGL 8.x with LovyanGFX as the display flush backend.

#### Configure lv_conf.h

Copy `lv_conf.h` from the project root, or LVGL's `lv_conf_template.h`, to the same level as the `lvgl` folder in your Arduino libraries directory. Key settings:

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    160
#define LV_VER_RES_MAX    160
```

#### Minimal LVGL v8 Sketch

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W 160
#define SCREEN_H 160

LilyGo_T_Circle_S3 tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1,
                      area->x2 - area->x1 + 1,
                      area->y2 - area->y1 + 1);
    tft.writePixels((lgfx::rgb565_t *)color_p,
                    (area->x2 - area->x1 + 1) * (area->y2 - area->y1 + 1));
    tft.endWrite();
    lv_disp_flush_ready(drv);
}

void setup() {
    tft.begin(0);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Circle S3");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

## AI Code Generation Tips

When using AI tools to generate T-Circle S3 display code, describe the target like this:

```text
Generate an Arduino/PlatformIO example for LilyGO T-Circle S3.
Use LovyanGFX as the display driver.
The screen is a GC9D01N 160x160 round TFT LCD over SPI.
LCD pins: MOSI=17, SCLK=15, CS=13, DC=16, BL=18.
Use the LilyGo_LovyanGFX library, include <LilyGo_LovyanGFX.h>, and create LilyGo_T_Circle_S3 tft.
Generate only the display or UI logic inside setup/loop.
Use LGFX_Sprite for off-screen drawing when needed.
```

This keeps the AI focused on UI and interaction logic and reduces the chance of regenerating incorrect pins or display driver settings.

---

## FAQ

**Q: Upload keeps failing - what should I do?**  
A: Hold **BOOT**, press and release **RST**, then start the upload while still holding BOOT.

**Q: No serial output over USB?**  
A: Set **USB CDC On Boot** to **Enabled** in Arduino IDE Tools.

**Q: T-Circle vs T-Circle S3?**  
A: T-Circle S3 uses ESP32-S3 with USB-OTG, OPI PSRAM, and more GPIO. Use this version for new projects.

**Q: The screen does not light up. What should I check?**
A: `LilyGo_LovyanGFX` controls the backlight through LovyanGFX `Light_PWM`. Confirm the T-Circle S3 profile matches your board version, and make sure USB or battery power is stable.

**Q: Why is LovyanGFX recommended for new projects?**
A: `LilyGo_LovyanGFX` keeps the screen configuration in a board profile class. Later AI-generated code only needs to call drawing APIs such as `fillScreen`, `drawCircle`, `drawString`, and `LGFX_Sprite`, which helps avoid accidental changes to the low-level pin configuration.
