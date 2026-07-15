---
title: Quick Start
show_source: false
---

# T-Impulse Plus Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| Adafruit nRF52 BSP | Latest | [GitHub](https://github.com/adafruit/Adafruit_nRF52_Arduino) |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |

> Do not upgrade the bundled libraries in the T-Impulse-Plus repo — specific versions are required.

---

## Arduino

### Arduino IDE

#### Board Package

Add the Adafruit nRF52 board package URL in **File → Preferences → Additional Board Manager URLs**:
```
https://adafruit.github.io/arduino-board-index/package_adafruit_index.json
```

Then install **Adafruit nRF52** in Boards Manager.

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **Nordic nRF52840 DK** |
| Softdevice | **S140 7.3.0** |
| Debug Level | **None** |

#### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Impulse-Plus.git
   ```
2. Open an example sketch in Arduino IDE
3. Select **Nordic nRF52840 DK** with the settings above
4. Double-tap the reset button to enter bootloader mode (LED pulses)
5. Select the UF2 bootloader drive and click **Upload**

---

## Flashing via J-Link

Connect a J-Link to the SWD header and use:
```bash
nrfjprog --program firmware.hex --chiperase --verify
```

---

## Notes

- **LoRa:** SX1262 (S62F module) — configure frequency to match your region (433/868/915 MHz)
- **GNSS:** MIA-M10Q; first fix may take several minutes outdoors
- **OLED:** SSD1315 64×32 I²C display
- **IMU:** ICM20948 9-axis (accelerometer + gyroscope + magnetometer)
- **Power:** SGM41562 PMU; deep sleep ~10–40 µA, shutdown < 1 µA
- **Bootloader:** Double-tap reset to enter UF2 bootloader for drag-and-drop flashing

---

### Peripheral Examples

#### LoRa (SX1262)

```cpp
#include <RadioLib.h>

// T-Impulse-Plus SX1262 pins — check schematic
SX1262 radio = new Module(/*CS=*/24, /*IRQ=*/25, /*RST=*/26, /*BUSY=*/17);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio init failed: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1262 ready");
}

void loop() {
  int state = radio.transmit("Hello T-Impulse");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### GPS (MIA-M10Q via TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;

void setup() {
  Serial.begin(115200);
  Serial1.begin(9600); // GPS UART on nRF52 Serial1
}

void loop() {
  while (Serial1.available()) gps.encode(Serial1.read());
  if (gps.location.isUpdated()) {
    Serial.printf("Lat: %.6f Lon: %.6f\n",
      gps.location.lat(), gps.location.lng());
  }
}
```

#### OLED Display (SSD1315 via U8g2)

```cpp
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_64X32_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_5x7_tr);
  u8g2.drawStr(0, 12, "T-Impulse");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

### LVGL

The small SSD1315 OLED (64×32) can be used with LVGL for simple UIs, but note memory and usability constraints. Recommended LVGL: **8.3.x**. If you use LVGL here, reduce `LV_MEM_SIZE` and keep the UI simple.

#### lv_conf.h

```c
#define LV_COLOR_DEPTH     1    // Monochrome OLED
#define LV_HOR_RES_MAX    64
#define LV_VER_RES_MAX    32
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE (16 * 1024)  // 16KB for nRF52 constraints
```

#### Hello World

```cpp
#include <lvgl.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1315_128X40_1_HW_I2C u8g2(U8G2_R0, /*reset*/U8X8_PIN_NONE);

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[64 * 8];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    
    u8g2.clearBuffer();
    for (int y = 0; y < h; y++) {
        for (int x = 0; x < w; x++) {
            uint16_t idx = y * w + x;
            if (color_p[idx].full) {
                u8g2.drawPixel(area->x1 + x, area->y1 + y);
            }
        }
    }
    u8g2.sendBuffer();
    
    lv_disp_flush_ready(disp);
}

void setup() {
    Serial.begin(115200);
    
    // Initialize OLED
    u8g2.begin();
    u8g2.clearDisplay();
    
    // Initialize LVGL
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 64 * 8);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 64;
    disp_drv.ver_res = 32;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Impulse\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(10);
}
```

> **Note:** Memory on nRF52840 is limited. For complex UIs, consider lightweight libraries like U8g2 or native OLED libraries instead.

## FAQ

**Q: Board not entering bootloader mode?**
A: Double-tap the reset button quickly (within ~500 ms). The LED will pulse slowly when in bootloader mode.

**Q: Compilation errors with library version mismatches?**
A: Use only the library versions bundled with the T-Impulse-Plus repo — do not upgrade them independently.
