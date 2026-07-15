---
title: Quick Start
show_source: false
---

# T-Embed Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | Latest | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| FastLED | Latest | [GitHub](https://github.com/FastLED/FastLED) |
| ESP32-audioI2S | Latest | [GitHub](https://github.com/schreibfaul1/ESP32-audioI2S) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Embed.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 3. Upload

Connect via USB-C and click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

### Peripheral Examples

#### Hello World (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(60, 75);
    tft.println("T-Embed");
}

void loop() {}
```

#### APA102 LEDs

```cpp
#include <FastLED.h>

#define LED_DATA  39
#define LED_CLK   40
#define NUM_LEDS   7

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<APA102, LED_DATA, LED_CLK, BGR>(leds, NUM_LEDS);
    FastLED.setBrightness(50);
}

void loop() {
    for (int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Blue;
    }
    FastLED.show();
    delay(500);
    FastLED.clear(true);
    delay(500);
}
```

---

### LVGL

T-Embed features a **1.9-inch ST7789V IPS TFT** (320 × 170) driven by TFT_eSPI.

#### Minimal LVGL v8 Example

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

#define SCREEN_W 320
#define SCREEN_H 170

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
    lv_label_set_text(label, "T-Embed");
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: No audio output?**  
A: Ensure MAX98357A I2S amplifier is properly initialized. Check I2S pins match your board version.
