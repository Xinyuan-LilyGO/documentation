---
title: Quick Start
show_source: false
---

# T-Display-S3 Quick Start

## Required Libraries

Install the following libraries via the Arduino IDE Library Manager, or place them manually in your `libraries` folder:

| Library | Source |
| :-----: | :----: |
| TFT_eSPI | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| Arduino_GFX | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| LVGL (v8.x) | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |

> **Note:** Use TFT_eSPI **version 2.0.14 or below**. Versions above 2.0.14 have compatibility issues with ESP32-S3.

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add the following URL to "Additional Boards Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems 2.0.14**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your COM port |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3 MB APP / 9.9 MB FATFS)** |
| Upload Mode | **UART0 / Hardware CDC** |
| Upload Speed | **921600** |
| USB Mode | **CDC and JTAG** |

> **Note:** When running on battery without USB, set **USB CDC On Boot** to **Disabled** to prevent the board from stalling at boot waiting for a USB connection.

#### 3. TFT_eSPI Configuration

T-Display-S3 uses an ST7789V via the I8080 parallel interface. After installing TFT_eSPI, activate the correct config file:

1. Open `TFT_eSPI/User_Setup_Select.h` in your Arduino libraries folder
2. Comment out the default `#include <User_Setup.h>`
3. Uncomment:
   ```cpp
   #include <User_Setups/Setup206_LilyGo_T_Display_S3.h>
   ```

#### 4. Upload

1. Connect the board via USB-C
2. Open an example sketch
3. Click **Upload**

If the upload fails, enter download mode manually:
1. Hold the **BOOT** button
2. Press and release **RST**
3. Release **BOOT**
4. Click **Upload** in the IDE
5. Press **RST** to exit download mode after uploading

---

### PlatformIO

#### 1. Setup

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3.git
   ```
3. Open the cloned folder in VS Code

#### 2. Select an Example

Open `platformio.ini` and uncomment the `default_envs` line for the example you want. Only one line should be active at a time:

```ini
; Uncomment only one at a time
default_envs = Factory
; default_envs = TFT_eSPI_Hello_World
; default_envs = WIFI_Scan
```

#### 3. Build and Upload

- Click **✓** in the bottom toolbar to compile
- Connect the board via USB-C
- Click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Factory` | Factory test / demo |
| `TFT_eSPI_Hello_World` | Basic TFT_eSPI display |
| `WIFI_Scan` | Wi-Fi network scanner |
| `BLE_Uart` | BLE UART passthrough |
| `SPIFFS_Test` | SPIFFS filesystem |
| `FFat_Test` | FFat filesystem |

See the full [T-Display-S3 repository](https://github.com/Xinyuan-LilyGO/T-Display-S3) for all examples.

---

## ESP-IDF

T-Display-S3 supports ESP-IDF development. See [LilyGo-Display-IDF](https://github.com/Xinyuan-LilyGO/LilyGo-Display-IDF).

---

## MicroPython

MicroPython is supported:
- [russhughes/st7789s3_mpy](https://github.com/russhughes/st7789s3_mpy)
- [lilygo-micropython](https://github.com/Xinyuan-LilyGO/lilygo-micropython)

---

### Peripheral Examples

#### Hello World (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();

void setup() {
    pinMode(15, OUTPUT);
    digitalWrite(15, HIGH); // enable display power

    tft.init();
    tft.setRotation(1);     // landscape
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.drawString("T-Display-S3", 40, 80);
}

void loop() {}
```

#### Draw Shapes

```cpp
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();

void setup() {
    pinMode(15, OUTPUT);
    digitalWrite(15, HIGH);

    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);

    tft.fillCircle(80, 85, 50, TFT_BLUE);
    tft.drawRect(160, 35, 100, 100, TFT_GREEN);
    tft.drawLine(0, 0, 319, 169, TFT_RED);
}

void loop() {}
```

#### Read Buttons

T-Display-S3 has two buttons: BOOT (GPIO0) and another configurable button (check your board variant's pinout).

```cpp
#define BTN_BOOT 0

void setup() {
    Serial.begin(115200);
    pinMode(BTN_BOOT, INPUT_PULLUP);
}

void loop() {
    if (digitalRead(BTN_BOOT) == LOW) {
        Serial.println("BOOT button pressed");
        delay(200);
    }
}
```

#### Sprite Animation

```cpp
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft);

int x = 0;

void setup() {
    pinMode(15, OUTPUT);
    digitalWrite(15, HIGH);

    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
    sprite.createSprite(60, 60);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.fillCircle(30, 30, 28, TFT_CYAN);
    sprite.pushSprite(x, 55);
    
    x += 5;
    if (x > 320) x = -60;
    delay(30);
}
```

---

### LVGL

T-Display-S3 supports LVGL 8.x with TFT_eSPI as the display flush backend. The I8080 parallel interface is handled transparently by TFT_eSPI — LVGL only needs to call `tft.pushColors()`.

#### Setup lv_conf.h

Copy `lv_conf.h` from the project root (or LVGL's `lv_conf_template.h`) into your Arduino libraries directory at the same level as the `lvgl` folder. Key settings:

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    320
#define LV_VER_RES_MAX    170
```

#### Minimal LVGL v8 Sketch

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

#define SCREEN_W 320
#define SCREEN_H 170
#define TFT_PWR  15   // display power enable pin

TFT_eSPI tft = TFT_eSPI();

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;

    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1, w, h);
    tft.pushColors((uint16_t *)color_p, w * h, true);
    tft.endWrite();

    lv_disp_flush_ready(drv);
}

void setup() {
    pinMode(TFT_PWR, OUTPUT);
    digitalWrite(TFT_PWR, HIGH);

    tft.init();
    tft.setRotation(1);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    // Create a label
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Display-S3");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### Adding Touch Input

T-Display-S3 has an optional capacitive touch variant. If your board has touch, wire the touch read callback to LVGL's input driver:

```cpp
// Touch read callback — adapt to your touch library
void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    uint16_t x, y;
    bool touched = /* your_touch_lib.getPoint(&x, &y) */ false;
    if (touched) {
        data->state   = LV_INDEV_STATE_PR;
        data->point.x = x;
        data->point.y = y;
    } else {
        data->state = LV_INDEV_STATE_REL;
    }
}

// Register inside setup(), after display driver:
static lv_indev_drv_t indev_drv;
lv_indev_drv_init(&indev_drv);
indev_drv.type    = LV_INDEV_TYPE_POINTER;
indev_drv.read_cb = my_touchpad_read;
lv_indev_drv_register(&indev_drv);
```

#### Factory Example

The `Factory` sketch in the repository uses LVGL to build the full factory test UI. It is the authoritative reference for production-ready LVGL integration on T-Display-S3.

---

## FAQ

**Screen stays dark when running on battery**
Add these lines at the top of `setup()`:
```cpp
pinMode(15, OUTPUT);
digitalWrite(15, HIGH); // enable display power
```

**Upload succeeds but nothing appears on screen**
Run `Arduino_GFXDemo` first to confirm hardware is working. If that works but TFT_eSPI doesn't display, check that `Setup206_LilyGo_T_Display_S3.h` is active in `User_Setup_Select.h`.

**Cannot upload / port keeps flashing**
Enter download mode manually (see steps above), or move the sketch to a shorter path (Windows MAX_PATH limit can cause compile failures).

**Running on external power instead of USB-C**
Set `USB CDC On Boot` to `Disabled`; otherwise the board waits for a USB connection on every boot.
