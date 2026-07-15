---
title: Quick Start
show_source: false
---

# T-Watch S3 Quick Start

## Dependencies

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TTGO_TWatch_Library | latest (branch: t-watch-s3) | [GitHub](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3) |
| RadioLib | latest | [GitHub](https://github.com/jgromes/RadioLib) |
| XPowersLib | latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository (branch `t-watch-s3`):
   ```bash
   git clone -b t-watch-s3 https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library.git
   ```
3. Open `platformio.ini` and under `[platformio]` uncomment the target environment
4. Click **✓** to compile, connect USB-C, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **UART0/Hardware CDC** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the repository (branch `t-watch-s3`) and open an example sketch
3. Select `config.h` in the example and ensure the correct watch model is defined
4. Select the board settings above and click **Upload**

---

### LVGL

T-Watch S3 uses **LVGL v8** via the `TTGO_TWatch_Library`. The library handles display init, flush callback, and touch input automatically through `watch->lvgl_begin()`.

#### lv_conf.h

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    240
#define LV_VER_RES_MAX    240
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE  (64 * 1024)
```

#### Hello World

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();        // Turn on backlight
    watch->lvgl_begin();    // Init LVGL + display + touch

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch S3");
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
    watch->tft->print("T-Watch S3");
}

void loop() {}
```

#### Touch

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

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

// Verify pins in the TTGO_TWatch_Library config for your variant
#define LORA_CS    36
#define LORA_IRQ   45
#define LORA_RST   42
#define LORA_BUSY  46

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) Serial.printf("LoRa init failed: %d\n", state);
}

void loop() {
    radio.transmit("Hello T-Watch S3");
    delay(2000);
}
```

#### PMU (AXP2101 — XPowersLib)

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

---

## FAQ

**Q: Which LoRa variant do I have — SX1262 or SX1280?**
A: Check the label on the LoRa module. SX1262 operates at 433–915 MHz; SX1280 operates at 2.4 GHz. Set the correct variant in `config.h` before compiling.

**Q: Cannot upload?**
A: Hold **BOOT**, press **RST** once, release **BOOT**, then upload. This forces download mode.

**Q: Display stays blank after flashing?**
A: Ensure **USB CDC On Boot** is **Enabled** and the partition scheme matches (16M Flash).
