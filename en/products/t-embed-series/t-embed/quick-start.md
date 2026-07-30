---
title: Quick Start
show_source: false
---

# T-Embed Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | Latest | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
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
4. Click **Build** to build, connect via USB-C, click **Upload** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE -> **File** -> **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** -> **Board** -> **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

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

#### Hello World (LovyanGFX)

```cpp
#define LILYGO_LGFX_USE_T_EMBED
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Embed display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.setCursor(60, 75);
    display.println("T-Embed");
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

T-Embed features a **1.9-inch ST7789V IPS TFT** (320 × 170) driven by LovyanGFX.

#### Minimal LVGL v8 Example

```cpp
#define LILYGO_LGFX_USE_T_EMBED
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W 320
#define SCREEN_H 170

LilyGo_T_Embed display;
static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * SCREEN_H / 10];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    display.startWrite();
    display.setAddrWindow(area->x1, area->y1, w, h);
    display.pushPixels((uint16_t *)color_p, w * h, true);
    display.endWrite();
    lv_disp_flush_ready(drv);
}

void setup() {
    display.begin(1);

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
