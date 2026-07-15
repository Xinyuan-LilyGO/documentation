---
title: Quick Start
show_source: false
---

# T-Display AMOLED Lite Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LilyGo_AMOLED | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) |
| LVGL | **8.3.9** (do not upgrade) | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | Latest | [GitHub](https://github.com/lewisxhe/SensorsLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
   ```
3. Open `platformio.ini`, uncomment the `T-Display-AMOLED` environment
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

#### 2. Install LilyGo_AMOLED Library

Go to **Tools** → **Manage Libraries**, search `LilyGo_AMOLED` and install, or copy from the cloned repo's `lib/` folder.

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| USB Mode | **CDC and JTAG** |

#### 4. Upload

Connect via USB-C, open an example, and click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

### Peripheral Examples

#### Hello World (LilyGo_AMOLED)

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    Serial.begin(115200);

    bool rslt = amoled.beginAMOLED_147();
    if (!rslt) {
        Serial.println("AMOLED init failed");
        while (1) delay(1000);
    }

    amoled.fillScreen(amoled.color565(0, 0, 0));
    amoled.setTextColor(amoled.color565(255, 255, 255));
    amoled.setTextSize(2);
    amoled.setCursor(10, 80);
    amoled.println("T-Display AMOLED Lite");
}

void loop() {}
```

#### Minimal LVGL v8 Example (LV_Helper)

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    Serial.begin(115200);

    bool rslt = amoled.beginAMOLED_147();
    if (!rslt) { while (1) delay(1000); }

    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Display AMOLED Lite");
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

> **LVGL is pinned to 8.3.9.** Do not upgrade — `LV_Helper` integration has been tested against this version.

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: Does this board support hardware screen rotation?**  
A: No. T-Display AMOLED Lite does not support hardware screen rotation.

**Q: Deep sleep current?**  
A: Approximately 1.1 mA in deep sleep with timer wakeup enabled.
