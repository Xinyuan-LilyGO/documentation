---
title: Quick Start
show_source: false
---

# T-Encoder Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | Latest | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Encoder.git
   ```
3. Open `platformio.ini` and select the target example
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

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 3. Upload

Connect via USB-C and click **Upload**.

---

### Peripheral Examples

#### Encoder + GC9A01 Round Display

```cpp
#include <TFT_eSPI.h>

#define ENC_A   4
#define ENC_B   5
#define ENC_BTN 0
#define TFT_BL  9

TFT_eSPI tft;
int encoderPos = 0;
int lastA = HIGH;

void setup() {
    pinMode(ENC_A, INPUT_PULLUP);
    pinMode(ENC_B, INPUT_PULLUP);
    pinMode(ENC_BTN, INPUT_PULLUP);
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(3);
    tft.setCursor(80, 110);
    tft.println("0");
}

void loop() {
    int currentA = digitalRead(ENC_A);
    if (currentA != lastA && currentA == LOW) {
        encoderPos += (digitalRead(ENC_B) == LOW) ? 1 : -1;
        tft.fillScreen(TFT_BLACK);
        tft.setCursor(80, 110);
        tft.println(encoderPos);
    }
    lastA = currentA;
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: Encoder direction is reversed?**  
A: Swap ENC_A and ENC_B pin assignments in code, or physically reverse the encoder rotation logic.
