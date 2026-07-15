---
title: Quick Start
show_source: false
---

# T-Display S3 Pro LR1121 Quick Start

## Required Libraries

Clone the [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) repository and copy the `lib/` folder contents to your Arduino libraries directory:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LilyGo_AMOLED | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) |
| LVGL | **8.3.9** (pinned) | [GitHub](https://github.com/lvgl/lvgl) |
| AceButton | Latest | [GitHub](https://github.com/bxparks/AceButton) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | Latest | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| Adafruit_NeoPixel | Latest | [GitHub](https://github.com/adafruit/Adafruit_NeoPixel) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
   ```
3. Open the project folder in VS Code
4. Open `platformio.ini` and uncomment the `T-Display-S3-Pro-LR1121` environment
5. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install the LilyGo_AMOLED Library

In Arduino IDE, go to **Tools** → **Manage Libraries**, search for `LilyGo_AMOLED` and install it — or copy the `lib/` folders from the cloned repository to your Arduino libraries directory.

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> **Note:** Set **USB CDC On Boot** to **Disabled** when running on battery only.

#### 4. Upload

Connect via USB-C, open an example, and click Upload.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Factory` | Full factory test with display, touch, and LoRa |
| `LVGL_Demo` | LVGL 8 UI demo on RM67162 AMOLED |
| `LR1121_LoRa` | LR1121 multi-band LoRa transmit/receive |
| `PMU_Example` | AXPM65611 + BQ25896 power management |
| `RTC_Example` | PCF85063ATL real-time clock |
| `TFCard` | TF card read/write |

---

### Peripheral Examples

#### Hello World (LilyGo_AMOLED)

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    Serial.begin(115200);

    // beginAMOLED() auto-detects the connected display
    bool rslt = amoled.beginAMOLED_191();
    if (!rslt) {
        Serial.println("Display init failed — check board selection");
        while (1) delay(1000);
    }

    amoled.fillScreen(amoled.color565(0, 0, 0));
    amoled.setTextColor(amoled.color565(255, 255, 255));
    amoled.setTextSize(2);
    amoled.setCursor(20, 100);
    amoled.println("T-Display S3 Pro LR1121");
}

void loop() {}
```

#### LR1121 LoRa Transmit

```cpp
#include <RadioLib.h>

// Adjust pins to match your board schematic
LR1121 radio = new Module(/* NSS */, /* DIO9 */, /* RESET */, /* BUSY */);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(868.0);  // frequency in MHz — check local regulations
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("LR1121 init OK");
    } else {
        Serial.printf("LR1121 init failed: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello from T-Display S3 Pro LR1121");
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("Transmitted OK");
    }
    delay(2000);
}
```

---

### LVGL

T-Display S3 Pro LR1121 uses a **1.91-inch RM67162 IPS AMOLED** display via SPI/QSPI. The `LilyGo-AMOLED-Series` library provides `LV_Helper` to wire LVGL directly to the board's display and touch in a few lines.

> **LVGL is pinned at 8.3.9.** The `LV_Helper` integration is tested against this version — do not upgrade.

#### Minimal LVGL v8 Example (LV_Helper)

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    Serial.begin(115200);

    bool rslt = amoled.beginAMOLED_191();
    if (!rslt) {
        Serial.println("Display init failed");
        while (1) delay(1000);
    }

    // LV_Helper registers the display and touch drivers with LVGL automatically
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Display S3 Pro LR1121");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### Factory Example

Open the `Factory` example from the `LilyGo-AMOLED-Series` repository — it demonstrates full LVGL integration alongside LoRa, PMU, and RTC on this board.

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode, then upload.

**Q: Which LoRa frequencies does LR1121 support?**  
A: LR1121 is multi-band (sub-GHz and 2.4 GHz). Common sub-GHz frequencies: 868 MHz (EU), 915 MHz (US), 470 MHz (CN). Always follow local radio regulations.

**Q: How do I connect external sensors?**  
A: Use the onboard STEMMA QT/QWIIC connector for quick I²C sensor connections, or the 2×13 dual-row expansion header for other peripherals.

**Q: Can I upgrade LVGL beyond 8.3.9?**  
A: Not recommended. The `LV_Helper` integration in `LilyGo-AMOLED-Series` is pinned to 8.3.9. Upgrading may break the flush/touch callbacks.
