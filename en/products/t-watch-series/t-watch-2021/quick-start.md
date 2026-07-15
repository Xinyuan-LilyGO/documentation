---
title: Quick Start
show_source: false
---

# T-Watch 2021 Quick Start

## Dependencies

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TTGO_TWatch_Library | latest | [GitHub](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library) |
| XPowersLib | latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library.git
   ```
3. Open `platformio.ini` and under `[platformio]` uncomment the `T-Watch-2021` environment
4. Click **✓** to compile, connect USB-C, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi/BT)** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enabled** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the library and add it via **Sketch → Include Library → Add .ZIP Library**
3. Open an example, set the watch model in `config.h` (e.g., `#define LILYGO_WATCH_2021`)
4. Apply the board settings above and click **Upload**

---

### LVGL

T-Watch 2021 uses **LVGL v7** via the `TTGO_TWatch_Library`. Call `watch->lvgl_begin()` to initialize the display and touch driver.

#### Hello World

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();
    watch->lvgl_begin();

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch 2021");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_task_handler();
    delay(5);
}
```

---

### Peripheral Examples

#### Display (ST7789 — TTGO_TWatch_Library)

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();
    watch->tft->fillScreen(TFT_BLACK);
    watch->tft->setTextColor(TFT_WHITE, TFT_BLACK);
    watch->tft->setTextSize(2);
    watch->tft->setCursor(40, 100);
    watch->tft->print("T-Watch 2021");
}

void loop() {}
```

#### Touch (FT6336)

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
}

void loop() {
    int16_t x, y;
    if (watch->getTouch(x, y)) {
        Serial.printf("Touch X=%d Y=%d\n", x, y);
    }
    delay(10);
}
```

#### PMU (AXP202 — XPowersLib)

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    Serial.printf("Battery: %u mV\n", watch->power->getBattVoltage());
    Serial.printf("Charging: %s\n", watch->power->isCharging() ? "Yes" : "No");
}

void loop() {}
```

#### IMU (BMA423 — TTGO_TWatch_Library)

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->bma->accelConfig.odr = BMA4_OUTPUT_DATA_RATE_100HZ;
    watch->bma->accelConfig.range = BMA4_ACCEL_RANGE_4G;
    watch->bma->accelConfig.bandwidth = BMA4_ACCEL_NORMAL_AVG4;
    watch->bma->accelConfig.perf_mode = BMA4_CONTINUOUS_MODE;
    watch->bma->accelEnable();
}

void loop() {
    Accel acc;
    if (watch->bma->getAccel(acc)) {
        Serial.printf("X=%.2f Y=%.2f Z=%.2f\n",
            acc.x * 0.001f, acc.y * 0.001f, acc.z * 0.001f);
    }
    delay(100);
}
```

---

## FAQ

**Q: Which `config.h` macro should I use for T-Watch 2021?**
A: Define `LILYGO_WATCH_2021` in `config.h` before including the library.

**Q: Cannot upload?**
A: Hold **BOOT**, press **RST** once, release **BOOT**, then upload.

**Q: Touch or sensor not working after upload?**
A: Ensure the correct watch model macro is defined; using the wrong macro will map incorrect GPIO pins.
