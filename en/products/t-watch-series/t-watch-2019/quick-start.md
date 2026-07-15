---
title: Quick Start
show_source: false
---

# T-Watch 2019 Quick Start

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
3. Open `platformio.ini` and under `[platformio]` uncomment the `T-Watch-2019` environment
4. Click **✓** to compile, connect USB, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **TTGO T-Watch** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi/BT)** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

> If **TTGO T-Watch** does not appear, install the [ESP32 Arduino core](https://espressif.github.io/arduino-esp32/package_esp32_index.json) and add the board definitions from the TTGO_TWatch_Library `boards/` folder.

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support
2. Clone the library and add it via **Sketch → Include Library → Add .ZIP Library**
3. Open an example, set the watch model in `config.h` (e.g., `#define LILYGO_WATCH_2019_WITH_TOUCH`)
4. Apply the board settings above and click **Upload**

---

### LVGL

T-Watch 2019 uses **LVGL v7** via the `TTGO_TWatch_Library`. The library initializes the ST7789 display and FT6336 touch.

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
    lv_label_set_text(label, "T-Watch 2019");
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
    watch->tft->setTextColor(TFT_GREEN, TFT_BLACK);
    watch->tft->setTextSize(2);
    watch->tft->setCursor(40, 100);
    watch->tft->print("T-Watch 2019");
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
    Serial.printf("USB present: %s\n", watch->power->isVBUSPlug() ? "Yes" : "No");
}

void loop() {}
```

#### RTC (PCF8563)

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    // Set time: 2025-01-01 12:00:00
    RTC_Date date(2025, 1, 1);
    RTC_Time time(12, 0, 0);
    watch->rtc->setDateTime(date, time);
}

void loop() {
    RTC_Date date = watch->rtc->getDateTime();
    RTC_Time time = watch->rtc->getTime();
    Serial.printf("%04d-%02d-%02d %02d:%02d:%02d\n",
        date.year, date.month, date.day,
        time.hours, time.minutes, time.seconds);
    delay(1000);
}
```

---

## FAQ

**Q: Which `config.h` macro should I use for T-Watch 2019?**
A: Define `LILYGO_WATCH_2019_WITH_TOUCH` for the standard version with capacitive touch.

**Q: Touch panel not responding?**
A: The FT6336 touch controller is on I2C (SDA=21, SCL=22, INT=38). Verify I2C address 0x38 is detected.

**Q: PMU (AXP202) not responding?**
A: AXP202 is on the same I2C bus (SDA=21, SCL=22, INT=35). Run an I2C scanner sketch to confirm wiring is intact.
