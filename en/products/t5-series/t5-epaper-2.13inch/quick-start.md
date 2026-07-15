---
title: Quick Start
show_source: false
---

# T5 E-Paper 2.13" Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| GxEPD2 | Latest | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| Adafruit GFX | Latest | Arduino Library Manager |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series.git
   ```
3. Open the project and select the matching environment in `platformio.ini`
4. Click **✓** to build, connect via USB, then click **→** to upload

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
2. Clone the LilyGo-T5-Epaper-Series repo and open an example sketch
3. Select board settings above and click **Upload**

---

## Notes

- **Display:** 2.13-inch SSD1680, 212×104 px, black & white, SPI interface
- **Full refresh:** ~8 seconds — avoid frequent full refreshes to preserve panel lifespan
- **USB:** CP2102 USB-to-serial; install CP210x driver if the port is not detected
- **TF card:** Shares the SPI bus with the display — initialize SD after the display

---

### LVGL

This board can use LVGL with `GxEPD2`. Recommended LVGL: **8.3.x**.

#### lv_conf.h

Place `lv_conf.h` alongside the `lvgl/` folder in your Arduino `libraries/` directory:

```c
#define LV_COLOR_DEPTH     1    // Black & white e-ink
#define LV_HOR_RES_MAX   212
#define LV_VER_RES_MAX   104
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
```

#### Hello World

```cpp
#include <GxEPD2_BW.h>
#include <lvgl.h>

GxEPD2_BW<GxEPD2_213, GxEPD2_213::HEIGHT> display(GxEPD2_213(/*CS*/10, /*DC*/9, /*RST*/8, /*BUSY*/7));

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[212 * 10];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    display.setPartialWindow(area->x1, area->y1, w, h);
    for (int y = 0; y < h; y++) {
        for (int x = 0; x < w; x++) {
            uint16_t idx = y * w + x;
            display.writePixel(x, y, color_p[idx].full ? GxEPD_WHITE : GxEPD_BLACK);
        }
    }
    display.nextPage();
    lv_disp_flush_ready(disp);
}

void setup() {
    display.init(115200);
    display.setRotation(1);
    
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 212 * 10);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 212;
    disp_drv.ver_res = 104;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T5 2.13in\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(50);
}
```

### Peripheral Examples

#### E-Paper Display (GxEPD2)

```cpp
#include <GxEPD2_BW.h>

// 2.13" SSD1680 212×104 — adjust pins for your board
GxEPD2_BW<GxEPD2_213, GxEPD2_213::HEIGHT> display(GxEPD2_213(/*CS*/10, /*DC*/9, /*RST*/8, /*BUSY*/7));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.setCursor(10, 50);
        display.print("T5 2.13\" EPaper");
    } while (display.nextPage());
}

void loop() {}
```

#### LoRa (SX1276/SX1262/SX1280 — RadioLib)

```cpp
#include <RadioLib.h>

// SX1262 example — replace with SX1276 or SX1280 class if your variant differs
#define LORA_CS    14
#define LORA_IRQ   13
#define LORA_RST   12
#define LORA_BUSY  15

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) Serial.printf("LoRa init failed: %d\n", state);
}

void loop() {
    radio.transmit("Hello T5 2.13in");
    delay(3000);
}
```

#### SD Card (SPI)

```cpp
#include <SD.h>
#include <SPI.h>

#define SD_CS  2

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SD_CS)) {
        Serial.println("SD init failed");
        return;
    }
    Serial.printf("SD size: %llu MB\n", SD.cardSize() / (1024 * 1024));
}

void loop() {}
```

## FAQ

**Q: Display shows artifacts after upload?**
A: Perform a full refresh (`display.display(false)`) on first boot to clear the panel.

**Q: Port not found?**
A: Install the CP2102 (CP210x) USB driver and reconnect.
