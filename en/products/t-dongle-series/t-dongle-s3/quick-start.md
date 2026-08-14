---
title: Quick Start
show_source: false
---

# T-Dongle-S3 Quick Start

## Development Environment

T-Dongle-S3 supports PlatformIO and Arduino IDE. Use the official repository examples as the reference:

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | Latest | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| FastLED | Latest | [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

## PlatformIO

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Open the `T-Dongle-S3` project folder
3. Enable `default_envs = T-Dongle-S3` in `platformio.ini`
4. Keep only one `src_dir = xxxx` example path that you want to run
5. Click **Build**, plug T-Dongle-S3 into a computer USB port, then click **Upload**

## Arduino IDE

### 1. Install ESP32 Board Support

1. Open Arduino IDE -> **File** -> **Preferences**
2. Add this URL to "Additional Board Manager URLs":

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

3. Go to **Tools** -> **Board** -> **Boards Manager**, search `esp32`, and install **esp32 by Espressif Systems 3.3.0 or later**

### 2. Install Libraries

Copy all folders in the project `lib` directory to the Arduino Sketchbook libraries directory.

### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240MHz (WiFi)** |
| Core Debug Level | **None** |
| USB DFU On Boot | **Disabled** |
| Erase All Flash Before Sketch Upload | **Disabled** |
| Flash Mode | **QIO 80MHz** |
| Flash Size | **16MB (128Mb)** |
| Arduino Runs On | **Core1** |
| USB Firmware MSC On Boot | **Disabled** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Disabled** |
| Programmer | **Esptool** |

> **Note:** T-Dongle-S3 has no PSRAM. Set PSRAM to **Disabled** in Arduino IDE.

### 4. USB Examples

For examples with `USB` in the name, set **USB Mode** to **USB-OTG (TinyUSB)**.

### 5. Upload

Plug T-Dongle-S3 into a computer USB port, open an example, and click Upload. If upload fails, hold the **BOOT** button while plugging T-Dongle-S3 into the USB port to enter download mode, then upload again. After flashing, unplug and plug the device again. Do not hold BOOT for normal startup.

## Examples

| Example | Description |
| :-----: | :---------- |
| `factory` | Factory test |
| `hello_world` | Basic serial output |
| `lvgl_test` | LVGL display test |
| `sd` | TF card read/write |
| `qwiic` | QWIIC serial example |

## Pin Notes

| Name | GPIO |
| --- | --- |
| RGB DIN | GPIO40 |
| RGB CLK | GPIO39 |
| SDMMC D0 | GPIO14 |
| SDMMC D1 | GPIO17 |
| SDMMC D2 | GPIO21 |
| SDMMC D3 | GPIO18 |
| SDMMC CLK | GPIO12 |
| SDMMC CMD | GPIO16 |
| Button | GPIO0 |
| QWIIC TX | GPIO43 |
| QWIIC RX | GPIO44 |

## APA102 RGB LED

```cpp
#include <FastLED.h>

#define LED_DI  40
#define LED_CI  39
#define NUM_LEDS 1

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<APA102, LED_DI, LED_CI, BGR>(leds, NUM_LEDS);
    FastLED.setBrightness(50);
}

void loop() {
    leds[0] = CRGB::Red;   FastLED.show(); delay(500);
    leds[0] = CRGB::Green; FastLED.show(); delay(500);
    leds[0] = CRGB::Blue;  FastLED.show(); delay(500);
}
```

## LVGL

T-Dongle-S3 uses a 0.96-inch **ST7735 SPI color display** with 160 × 80 resolution.

### Key `lv_conf.h` Settings

```c
#define LV_COLOR_DEPTH  16
#define LV_HOR_RES_MAX  160
#define LV_VER_RES_MAX  80
```

## FAQ

**Q: Upload keeps failing?**  
A: Hold the **BOOT** button while plugging T-Dongle-S3 into the USB port to enter download mode, then upload again.

**Q: Why should PSRAM be disabled?**  
A: T-Dongle-S3 hardware has no PSRAM. Set PSRAM to **Disabled** in Arduino IDE.

**Q: Can QWIIC be used as I2C directly?**  
A: QWIIC is configured for serial port function by default. To use it as I2C, add pull-up resistors to the external sensor.
