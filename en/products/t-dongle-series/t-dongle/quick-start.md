---
title: Quick Start
show_source: false
---

# T-Dongle Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/LilyGO/T-Dongle.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, plug into a USB Type-A port, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | Disabled |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the T-Dongle repo and open an example sketch
3. Select **ESP32 Dev Module** and the settings above, then click **Upload**

---

## Notes

- **Form factor:** USB Type-A plug — plugs directly into any USB-A port; no cable needed
- **Display:** 0.96-inch ST7735 TFT, 80×160 px (SPI)
- **RGB LED:** WS2812 addressable LED
- **TF card:** Hidden inside the USB-A housing; remove the dongle to access the card slot
- **No PSRAM:** Standard ESP32 module with 4 MB Flash only

---

### Peripheral Examples

#### Display (ST7735)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(1);
  tft.drawString("T-Dongle", 15, 75);
}

void loop() {}
```

#### RGB LED (WS2812)

```cpp
#include <FastLED.h>

// WS2812 data pin — check T-Dongle schematic
#define LED_PIN  4
#define NUM_LEDS 1

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
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

This board uses a small ST7735 TFT and can run LVGL (recommended **8.3.x**) using the `TFT_eSPI` or `Arduino_GFX` backend. Place `lv_conf.h` next to the `lvgl/` folder in your Arduino `libraries/` directory and set `LV_HOR_RES_MAX` / `LV_VER_RES_MAX` to the panel size (80×160).

#### lv_conf.h

```c
#define LV_COLOR_DEPTH    16    // Color TFT
#define LV_HOR_RES_MAX    80
#define LV_VER_RES_MAX   160
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE (48 * 1024)
```

#### Hello World

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[80 * 20];

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
    tft.setRotation(1);
    
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 80 * 20);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 80;
    disp_drv.ver_res = 160;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Dongle\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

## FAQ

**Q: Display not initializing?**
A: Verify ST7735 SPI pin assignments match the T-Dongle schematic — the compact form factor uses non-standard SPI pins.

**Q: TF card not detected?**
A: The card slot is physically inside the USB housing. Fully remove the dongle from the USB port to insert or remove the card.
