---
title: Quick Start
show_source: false
---

# T-Watch S3 Plus Quick Start

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
3. Open `platformio.ini`, uncomment the `T-Watch-S3-Plus` environment
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
2. Clone the repository (branch `t-watch-s3`) and open an example
3. In `config.h` ensure `LILYGO_WATCH_2024_PLUS` or the appropriate macro is defined
4. Apply the board settings above and click **Upload**

---

### LVGL

T-Watch S3 Plus uses **LVGL v8** via the `TTGO_TWatch_Library`. Call `watch->lvgl_begin()` to initialize display, flush callback, and touch input automatically.

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
    lv_label_set_text(label, "T-Watch S3 Plus");
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
    watch->tft->setCursor(20, 100);
    watch->tft->print("T-Watch S3 Plus");
}

void loop() {}
```

#### GPS (MIA-M10Q — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

// Check TTGO_TWatch_Library config for GPS UART pins
#define GPS_RX  10
#define GPS_TX  11

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(38400, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n", gps.location.lat(), gps.location.lng());
    }
}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

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
    radio.transmit("Hello T-Watch S3 Plus");
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

**Q: What is new compared to T-Watch S3?**
A: T-Watch S3 Plus adds GPS (MIA-M10Q) and larger battery capacity.

**Q: Cannot upload?**
A: Hold **BOOT**, press **RST** once, release **BOOT**, then retry uploading.
