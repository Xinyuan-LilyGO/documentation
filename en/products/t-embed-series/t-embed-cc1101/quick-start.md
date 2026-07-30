---
title: Quick Start
show_source: false
---

# T-Embed CC1101 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | Latest | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| FastLED | Latest | [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Embed-CC1101.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **Build** to build, connect via USB-C, click **Upload** to upload

---

### Arduino IDE

#### Board Settings

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

#### Upload

Connect via USB-C and click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

### Basic Example

| Example | Description |
| :-----: | :---------- |
| `LilyGo_LovyanGFX_Board_Test` | Unified LilyGo_LovyanGFX board display test; T-Embed CC1101 uses `display.begin(3)` |

---

### LovyanGFX Display Test

T-Embed CC1101 uses a 1.9-inch ST7789V TFT (320×170). After installing `LovyanGFX` and `LilyGo_LovyanGFX`, create a `LilyGo_T_Embed_CC1101` object directly. This board's landscape orientation should use `display.begin(3)`.

```cpp
#define LILYGO_LGFX_USE_T_EMBED_CC1101
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Embed_CC1101 display;

void setup() {
  display.begin(3);
  display.setTextDatum(textdatum_t::middle_center);
  display.fillScreen(TFT_BLACK);
  display.drawRect(0, 0, display.width(), display.height(), TFT_CYAN);
  display.setTextColor(TFT_WHITE, TFT_BLACK);
  display.drawString("T-Embed CC1101", display.width() / 2, 54, &fonts::Font4);
  display.setTextColor(TFT_YELLOW, TFT_BLACK);
  display.drawString("LovyanGFX", display.width() / 2, 102, &fonts::Font2);
}

void loop() {}
```

---

### Peripheral Examples

#### Display (ST7789V)

```cpp
#define LILYGO_LGFX_USE_T_EMBED_CC1101
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Embed_CC1101 display;

void setup() {
  display.begin(3);     // Landscape, rotated 180 degrees from rotation=1
  display.fillScreen(TFT_BLACK);
  display.setTextColor(TFT_WHITE, TFT_BLACK);
  display.drawString("T-Embed CC1101", 40, 75, &fonts::Font2);
}

void loop() {}
```

#### CC1101 Sub-GHz Radio

```cpp
#include <RadioLib.h>

// CC1101: CS=5, GDO0=4, RST=-1, GDO2=36
CC1101 radio = new Module(5, 4, RADIOLIB_NC, 36);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(433.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("CC1101 init failed: "); Serial.println(state);
    while (true);
  }
  Serial.println("CC1101 ready");
}

void loop() {
  int state = radio.transmit("Hello CC1101");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### RGB LED Strip (WS2812)

```cpp
#include <FastLED.h>

#define LED_PIN  38
#define NUM_LEDS 8

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB::Blue;
  }
  FastLED.show();
  delay(500);
  FastLED.clear();
  FastLED.show();
  delay(500);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What frequency does CC1101 operate on?**  
A: CC1101 supports 315/433/868/915 MHz sub-GHz bands. Configure the frequency in code to match your regional regulations.
