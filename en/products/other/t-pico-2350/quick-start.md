---
title: Quick Start
show_source: false
---

# T-PICO-2350 Quick Start

## Overview

T-PICO-2350 has two processors: **RP2350** handles display and peripherals; **ESP32-C6** handles Wi-Fi 6 and Bluetooth. The two chips communicate over UART. You can develop for RP2350 using Arduino (with Raspberry Pi Pico board support) or MicroPython.

---

## Arduino

### Arduino IDE (RP2350)

#### 1. Install Raspberry Pi Pico Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `pico`, install **Raspberry Pi Pico/RP2040/RP2350 by Earle F. Philhower III**

#### 2. Install Libraries

Copy all folders from the project `libraries/` into your Arduino libraries folder.

#### 3. Board Settings (RP2350)

| Setting | Value |
| :-----: | :---: |
| Board | **Raspberry Pi Pico 2** |
| CPU Speed | **150 MHz** |
| Flash Size | **16 MB** |
| USB Stack | **Adafruit TinyUSB** |
| Upload Speed | 921600 |

#### 4. Upload

Connect via USB-C, open the example sketch, click **Upload**.

---

## MicroPython (RP2350)

1. Download the [RP2350 MicroPython UF2](https://micropython.org/download/RPI_PICO2/) firmware
2. Hold **BOOTSEL** on the board and connect USB — it mounts as a drive
3. Drag the `.uf2` file onto the drive; the board reboots automatically
4. Use [Thonny IDE](https://thonny.org/) or any serial terminal to write MicroPython code

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Display_Demo` | 2.33-inch IPS LCD graphics |
| `WiFi_Scan` | ESP32-C6 Wi-Fi scan (via UART) |
| `BLE_Beacon` | ESP32-C6 BLE advertisement |
| `Factory_Test` | Full hardware test |

---

### Peripheral Examples

#### Display Hello World (Arduino_GFX)

```cpp
#include <Arduino_GFX_Library.h>

// SPI and control pins — refer to pin_config.h
Arduino_DataBus *bus = new Arduino_HWSPI(/* DC */, /* CS */);
Arduino_GFX *gfx = new Arduino_ST7789(bus, /* RST */, /* rotation */);

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);

    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(30, 100);
    gfx->println("T-PICO-2350");
}

void loop() {}
```

#### Draw Shapes

```cpp
#include <Arduino_GFX_Library.h>
// ... init gfx as above ...

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);

    // Filled rectangle
    gfx->fillRect(10, 10, 100, 60, BLUE);

    // Circle
    gfx->drawCircle(160, 120, 50, YELLOW);

    // Triangle
    gfx->fillTriangle(50, 200, 100, 150, 150, 200, RED);

    gfx->setTextColor(WHITE);
    gfx->setCursor(60, 110);
    gfx->print("Hello!");
}
```

#### ESP32-C6 Wi-Fi Scan (via RP2350 UART)

RP2350 sends AT commands to ESP32-C6 over UART. Make sure the ESP32-C6 is flashed with AT firmware.

```cpp
// UART to ESP32-C6 — refer to pin_config.h for TX/RX pins
#define ESP_SERIAL Serial1

void setup() {
    Serial.begin(115200);
    ESP_SERIAL.begin(115200);

    delay(1000);
    ESP_SERIAL.println("AT+CWLAP");  // scan Wi-Fi networks
}

void loop() {
    while (ESP_SERIAL.available()) {
        Serial.write(ESP_SERIAL.read());
    }
}
```

#### Read Battery Voltage

```cpp
// ADC pin for battery monitor — refer to pin_config.h
#define BAT_ADC_PIN  A0

void setup() {
    Serial.begin(115200);
    pinMode(BAT_ADC_PIN, INPUT);
}

void loop() {
    int raw = analogRead(BAT_ADC_PIN);
    // Adjust the divider ratio to match your hardware
    float voltage = raw * (3.3f / 1023.0f) * 2.0f;
    Serial.printf("Battery: %.2f V\n", voltage);
    delay(2000);
}
```

#### Deep Sleep (RP2350)

```cpp
#include "pico/sleep.h"

void setup() {
    Serial.begin(115200);
    Serial.println("Running...");
    delay(2000);

    Serial.println("Entering deep sleep for 10 seconds");
    sleep_ms(100);  // flush serial

    // Wake after 10 s using RTC alarm (RP2350 dormant mode)
    // See Raspberry Pi Pico SDK docs for full dormant example
    rp2040.deepSleep(10000);
}

void loop() {}
```

---

### LVGL

T-PICO-2350's factory firmware uses LVGL 8.3.9 for the display UI. The RP2350 drives the 2.33-inch IPS LCD via Arduino_GFX; LVGL sits on top as the UI layer.

#### Install LVGL

Copy `lvgl` from the project `libraries/` folder into your Arduino libraries directory, then place `lv_conf.h` from the project root at the same level as the `lvgl` folder.

#### Minimal LVGL Sketch (RP2350 + Arduino_GFX)

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// Pins — refer to pin_config.h
Arduino_DataBus *bus = new Arduino_HWSPI(/* DC */, /* CS */);
Arduino_GFX *gfx    = new Arduino_ST7789(bus, /* RST */, 0 /* rotation */);

#define SCREEN_W  240
#define SCREEN_H  280

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    /* Simple label */
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-PICO-2350");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

> **Note:** Confirm the exact display driver and screen resolution from the project `pin_config.h` — the factory example is the authoritative reference for pin assignments.

#### Factory Example

Open the `Factory` sketch from the project repository. It initialises the full LVGL UI, including the display, buttons, and ESP32-C6 communication panel, and is the best reference for a production-ready LVGL setup on T-PICO-2350.

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold **BOOTSEL** and connect USB. The board appears as a USB drive — copy the `.uf2` file manually.

**Q: How do RP2350 and ESP32-C6 communicate?**  
A: Via UART. RP2350 sends commands, ESP32-C6 responds. Flash ESP32-C6 with the AT firmware included in the project for easy Wi-Fi/BLE control.

**Q: Can I program ESP32-C6 separately?**  
A: Yes. Connect to the ESP32-C6 USB interface (if exposed) or use the UART bootloader. Use Arduino with ESP32C6 Dev Module board support.

**Q: What display driver does the 2.33-inch LCD use?**  
A: Refer to the project `pin_config.h` and `platformio.ini` for the exact driver. Common drivers for this size include ST7789 and GC9A01.
