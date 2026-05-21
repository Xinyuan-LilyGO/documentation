---
title: T-Embed CC1101
show_source: false
tags: ESP32-S3, CC1101, Sub-GHz, NFC, PN532, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-embed-series/t-embed-cc1101/assets/t-embed-cc1101-1.jpg', alt: 'T-Embed CC1101 front view' },
  { src: '/products/t-embed-series/t-embed-cc1101/assets/t-embed-cc1101-2.jpg', alt: 'T-Embed CC1101 appearance' },
  { src: '/products/t-embed-series/t-embed-cc1101/assets/t-embed-cc1101-en.jpg', alt: 'T-Embed CC1101 pin diagram' }
]" />

## Overview

LILYGO T-Embed CC1101 is a highly integrated IoT development board based on **ESP32-S3** (dual-core LX7). Integrates **Sub-GHz CC1101** wireless, **NFC PN532**, infrared remote control, Wi-Fi/Bluetooth 5.0, a **1.9-inch ST7789V IPS TFT** (320 × 170), rotary encoder, **8 programmable WS2812 RGB LEDs**, microphone, speaker, TF card, and BQ25896/BQ27220 battery management. Ideal for smart home control centers, environmental monitoring, and educational IoT prototyping with a compact, multi-protocol design.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Embed-CC1101](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101) | ✓ | | CC1101, NFC, IR, display, audio examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Embed-CC1101` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core1 |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Arduino Runs On | Core1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Video

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- CC1101 Sub-GHz wireless module
- PN532 NFC module
- Infrared remote control
- 1.9-inch ST7789V IPS TFT (320 × 170), LVGL UI
- Rotary encoder, 8 × WS2812 RGB LEDs
- Microphone + speaker, TF card slot
- BQ25896 + BQ27220 battery management, 1300 mAh Li-Po
- 2 × QWIIC interfaces

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Sub-GHz | CC1101 |
| NFC | PN532 |
| Display | 1.9-inch ST7789V IPS TFT, 320 × 170 |
| RGB LED | WS2812 × 8 |
| Battery IC | BQ25896 + BQ27220 |
| Battery | 3.7 V 1300 mAh |
| Storage | TF card slot |
| USB | 1 × Type-C |
| Expansion | 2 × QWIIC |
| Dimensions | 97.5 × 39 × 31 mm |

## Pin Diagram

<img src="/products/t-embed-series/t-embed-cc1101/assets/t-embed-cc1101-en.jpg" alt="T-Embed CC1101 pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Embed-CC1101 V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/T-Embed-CC1101%20V1.0%2024-07-29.pdf)

## Datasheet

* [PN532](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/PN532_C1.pdf)
* [BQ25896](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq25896.pdf)
* [BQ27220](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq27220_datasheet.pdf)
* [CC1101](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/cc1101.pdf)

## Software Development

* [T-Embed-CC1101 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101)

### Dependent Libraries

* [RadioLib](https://github.com/jgromes/RadioLib)
* [PN532](https://github.com/Seeed-Studio/PN532)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
* [FastLED](https://github.com/FastLED/FastLED)
* [IRremoteESP8266](https://github.com/crankyoldgit/IRremoteESP8266)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)

## FAQ

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Embed CC1101 V1.0 | 2024-07-29 | Initial version |
