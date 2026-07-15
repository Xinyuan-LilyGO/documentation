---
title: Quick Start
show_source: false
---

# T-Keyboard S3 Pro Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| T-Keyboard-S3-Pro-Library | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings (ESP32-S3 Host)

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone both repos and open an example sketch
3. Select board settings above and click **Upload**

---

### Peripheral Examples

#### Key Press Reading (T-Keyboard-S3-Pro-Library)

```cpp
#include <T_Keyboard_S3_Pro.h>

TKeyboardS3Pro keyboard;

void setup() {
  Serial.begin(115200);
  keyboard.begin();
}

void loop() {
  keyboard.update();
  if (keyboard.isPressed()) {
    uint8_t key = keyboard.getKey();
    Serial.printf("Key pressed: %d\n", key);
  }
  delay(10);
}
```

#### TFT Display (GC9107 via TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE);
  tft.setTextSize(1);
  tft.drawString("T-Keyboard", 20, 55);
}

void loop() {}
```

#### RGB LEDs (WS2812C via FastLED)

```cpp
#include <FastLED.h>

// WS2812C pin — check T-Keyboard-S3-Pro schematic
#define LED_PIN  38
#define NUM_LEDS 4

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812C, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(10); // Keep low for multi-unit setups
}

void loop() {
  for (int i = 0; i < NUM_LEDS; i++) leds[i] = CRGB::Cyan;
  FastLED.show();
  delay(500);
  FastLED.clear();
  FastLED.show();
  delay(500);
}
```

---

## Notes

- **Host + slaves:** Host unit connects to slave units via magnetic interfaces — up to 6 slaves in a 2×3 grid
- **RGB LEDs:** WS2812C; reduce brightness to 10 or lower when running multiple units to avoid overloading power supply
- **4× TFT displays:** Each 0.85-inch GC9107, 128×128 px (SPI)
- **STM32 co-processor:** Handles keyboard scanning; program via STM32CubeMX + ARM Keil μVision5 over SWD if customizing firmware
- **PSRAM:** OPI 8 MB — select **OPI PSRAM** in Arduino IDE

---

## FAQ

**Q: Slave units not detected?**
A: Ensure the magnetic connectors are fully seated. Power the host before attaching slaves.

**Q: LEDs too bright / flickering?**
A: Limit WS2812C brightness to 10 in multi-device configurations to stay within the power budget.
