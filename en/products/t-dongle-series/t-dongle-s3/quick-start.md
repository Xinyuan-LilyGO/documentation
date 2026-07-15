---
title: Quick Start
show_source: false
---

# T-Dongle-S3 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | Latest | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| FastLED | Latest | [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
   ```
3. Open `platformio.ini` and uncomment the target example line
4. Click **✓** to build, insert the dongle into a USB-A port, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from the project `lib/` to your Arduino libraries directory, or install via **Tools** → **Manage Libraries**.

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> **Note:** Set **USB CDC On Boot** to **Disabled** when running on battery.

#### 4. Upload

Insert the dongle into a USB-A port, open an example, and click Upload.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Display_Test` | ST7735 TFT display test |
| `APA102_LED` | APA102 RGB LED color cycling |
| `TF_Card` | TF card read/write |
| `LVGL_Demo` | LVGL 8 UI demo |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### Hello World (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

// T-Dongle-S3 pin definitions
#define TFT_BL  38
#define TFT_CS   4
#define TFT_SCK  5
#define TFT_MOSI 3
#define TFT_DC   2
#define TFT_RST  1

TFT_eSPI tft;

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(5, 65);
    tft.println("T-Dongle S3");
}

void loop() {}
```

#### APA102 RGB LED

```cpp
#include <FastLED.h>

#define LED_CI  40
#define LED_DI  39
#define NUM_LEDS 1

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<APA102, LED_DI, LED_CI, BGR>(leds, NUM_LEDS);
    FastLED.setBrightness(50);
}

void loop() {
    leds[0] = CRGB::Red;   FastLED.show(); delay(500);
    leds[0] = CRGB::Green; FastLED.show(); delay(500);
    leds[0] = CRGB::Blue;  FastLED.show(); delay(500);
}
```

---

### LVGL

T-Dongle-S3 uses a 0.96-inch **ST7735 IPS TFT** (80 × 160) driven by **TFT_eSPI**. The LVGL flush callback uses `pushColors`.

#### Configure lv_conf.h

Copy `lv_conf.h` from the project to sit beside the `lvgl` folder in your Arduino libraries directory. Key settings:

```c
#define LV_COLOR_DEPTH  16
#define LV_HOR_RES_MAX  80
#define LV_VER_RES_MAX 160
```

#### Minimal LVGL v8 Example

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

#define TFT_BL  38
#define SCREEN_W  80
#define SCREEN_H 160

TFT_eSPI tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * SCREEN_H / 10];

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
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * SCREEN_H / 10);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Dongle S3");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_14, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### Factory Example

Open the `LVGL_Demo` or `Factory` example from the repository for a production-ready LVGL integration reference.

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: Screen stays off after upload?**  
A: Ensure `TFT_BL` (GPIO38) is set HIGH before calling `tft.init()`.

**Q: APA102 LED not lighting up?**  
A: Verify CI/DI pin order (CI=GPIO40, DI=GPIO39). APA102 uses SPI-like protocol — clock and data are separate pins, unlike WS2812 single-wire.
