---
title: Quick Start
show_source: false
---

# T-Dongle-C5 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | Latest | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LVGL | **9.x** | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Dongle-C5.git
   ```
3. Open `platformio.ini` and enable one target example
4. Build, insert the dongle into a USB-A port, then upload

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE -> **File** -> **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** -> **Board** -> **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Install **LovyanGFX** and **LVGL** via **Tools** > **Manage Libraries**, then place `LilyGo_LovyanGFX` in your Arduino libraries folder.

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32C5 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz** |
| Flash Mode | **QIO** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 4. Upload

Insert the dongle into a USB-A port, open an example, and click Upload.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Display_Test` | ST7735 TFT display test |
| `TF_Card` | TF card read/write |
| `LVGL_Demo` | LVGL 9 UI demo |
| `WiFi6_Scan` | Dual-band Wi-Fi 6 scan |
| `BLE_Scan` | Bluetooth 5.0 LE scan |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### Hello World (LovyanGFX)

```cpp
#define LILYGO_LGFX_USE_T_DONGLE_C5
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Dongle_C5 display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.drawString("T-Dongle-C5", 5, 28, &fonts::Font2);
}

void loop() {}
```

---

### LVGL

T-Dongle-C5 uses an **ESP32-C5** chip and pairs with **LVGL v9**. The display is a 0.96-inch ST7735 IPS TFT (80 x 160) driven by LovyanGFX.

#### Configure lv_conf.h

Copy `lv_conf.h` from the project to sit beside the `lvgl` folder in your Arduino libraries directory. Key settings:

```c
#define LV_COLOR_DEPTH  16
```

#### Minimal LVGL v9 Example

```cpp
#define LILYGO_LGFX_USE_T_DONGLE_C5
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W  80
#define SCREEN_H 160

LilyGo_T_Dongle_C5 display;

static lv_display_t *disp;
static lv_color_t buf[SCREEN_W * SCREEN_H / 10];

void my_disp_flush(lv_display_t *disp, const lv_area_t *area, uint8_t *px_map) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    display.startWrite();
    display.setAddrWindow(area->x1, area->y1, w, h);
    display.pushPixels((uint16_t *)px_map, w * h, true);
    display.endWrite();
    lv_display_flush_ready(disp);
}

void setup() {
    display.begin(0);

    lv_init();

    disp = lv_display_create(SCREEN_W, SCREEN_H);
    lv_display_set_flush_cb(disp, my_disp_flush);
    lv_display_set_buffers(disp, buf, NULL, sizeof(buf), LV_DISPLAY_RENDER_MODE_PARTIAL);

    lv_obj_t *label = lv_label_create(lv_screen_active());
    lv_label_set_text(label, "T-Dongle-C5");
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

**Q: Does T-Dongle-C5 support Matter?**  
A: Yes. The ESP32-C5 supports Thread and Zigbee 3.0, which are the key protocols for Matter-based smart home ecosystems.

**Q: What is the difference from T-Dongle-S3?**  
A: The C5 uses the newer ESP32-C5 with dual-band Wi-Fi 6 (including 5 GHz) and Thread/Zigbee support. The S3 uses ESP32-S3 with 2.4 GHz Wi-Fi 4 and Bluetooth 5 LE only.
