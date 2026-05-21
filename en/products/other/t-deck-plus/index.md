---
title: T-Deck Plus
show_source: false
tags: ESP32-S3, LoRa, LCD, GPS, Keyboard, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="2" :images="[
  { src: '/products/t-deck-series/t-deck-plus/assets/t-deck-plus1.jpg', alt: 'T-Deck Plus front view' },
  { src: '/products/t-deck-series/t-deck-plus/assets/t-deck-plus2.jpg', alt: 'T-Deck Plus appearance' }
]" />

## Overview

The LILYGO T-Deck Plus is a feature-rich portable development kit powered by **ESP32-S3FN16R8** (16 MB Flash, 8 MB PSRAM). Integrates a **ST7789 320 × 240 LCD**, **SX1262 LoRa** (433–915 MHz), **MIA-M10Q GPS**, **ES7210 audio codec**, microphone, speaker, TF card, trackball, mechanical keyboard, GT911 touchscreen, and PCA9535PW I/O expander. Supports a **2000 mAh battery** with voltage detection. Suitable for IoT terminals, remote control systems, audio interaction, and outdoor mobile development.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Deck](https://github.com/Xinyuan-LilyGO/T-Deck) | ✓ | | LoRa, GPS, LCD, keyboard, audio examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Deck` project folder
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

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)
4. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3FN16R8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- SX1262 LoRa (433–915 MHz, optional)
- MIA-M10Q GPS, GT911 touchscreen, PCA9535PW I/O expander
- ST7789 320 × 240 LCD display
- ES7210 audio codec, MSM381A3729H9CP microphone, speaker
- Trackball + mechanical keyboard (black or white)
- 2000 mAh battery, power switch, TF card slot

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3FN16R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| LoRa | SX1262, 433–915 MHz (optional) |
| GPS | MIA-M10Q |
| Display | ST7789 LCD, 320 × 240 |
| Touch | GT911 |
| Audio | ES7210 codec |
| I/O Expander | PCA9535PW (0x20) |
| Battery | 2000 mAh |
| Storage | TF card slot |
| USB | 1 × Type-C |
| Mounting Holes | 2 × M2 |
| Dimensions | 115 × 72 × 20 mm |

## Pin Diagram

<img src="/products/t-deck-series/t-deck-plus/assets/t-deck-plus-en.jpg" alt="T-Deck Plus pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Deck Plus Schematic](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf)

## Datasheet

* [T-Deck ANT 868-915 MHz](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20868-915MHZ.pdf.pdf)
* [T-Deck ANT 433 MHz](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20433MHZ.pdf)

## Software Development

* [T-Deck GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Deck)

### Dependent Libraries

* [AceButton](https://github.com/bxparks/AceButton)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TouchLib](https://github.com/mmMicky/TouchLib)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)

## FAQ

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Deck Plus V1.0 | — | Initial version |
