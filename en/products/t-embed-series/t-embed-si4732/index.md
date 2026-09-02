---
title: T-Embed SI4732
show_source: false
tags: ESP32-S3, SI4732, Radio, AM, FM, OLED, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-embed-series/t-embed-si4732/index/image/t-embed-si4732-1.jpg', alt: 'T-Embed SI4732 front view' },
  { src: '/products/t-embed-series/t-embed-si4732/index/image/t-embed-si4732-2.jpg', alt: 'T-Embed SI4732 appearance' },
  { src: '/products/t-embed-series/t-embed-si4732/index/image/t-embed-si4732-3.jpg', alt: 'T-Embed SI4732 component overview' }
]" />

## Overview

LILYGO T-Embed SI4732 is an enhanced T-Embed featuring an integrated **SI4732-A10** extension module — a high-performance DSP radio receiver supporting **AM/FM/SW/LW** broadcast bands with high sensitivity, low power consumption, and RDS support. The T-Embed base includes a rounded enclosure with a **rotary encoder + RGB LED ring (APA102)**, a **1.9-inch ST7789V IPS TFT** (320 × 170), MEMS microphone (ES7210), built-in speaker, TF card slot, and 900 mAh Li-Po battery. Suitable for radio receivers, audio applications, and portable media.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Embed](https://github.com/Xinyuan-LilyGO/T-Embed) | ✓ | | SI4732 radio, display, encoder, audio examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Embed` project folder
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
- SI4732-A10 DSP radio receiver (AM/FM/SW/LW/RDS)
- 1.9-inch ST7789V IPS TFT (320 × 170)
- Rotary encoder + APA102 RGB LED ring
- ES7210 MEMS microphone + built-in speaker
- MIA-M10Q GPS, TF card slot
- 16 MB Flash + 8 MB PSRAM, 900 mAh battery

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Radio | SI4732-A10 (AM/FM/SW/LW/RDS) |
| GPS | MIA-M10Q |
| Display | 1.9-inch ST7789V IPS TFT, 320 × 170 |
| Microphone | ES7210 MEMS |
| RGB LED | APA102 |
| Storage | TF card slot |
| USB | 1 × Type-C |
| Battery | 702550, 900 mAh |
| Mounting Holes | 2 × M2 |
| Dimensions | 98 × 39 × 39 mm |

## Pin Diagram

<img src="/products/t-embed-series/t-embed-si4732/index/image/t-embed-si4732.jpg" alt="T-Embed SI4732 pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Embed-SI4732 Schematic](https://github.com/Xinyuan-LilyGO/T-Embed/blob/main/schematic/T-Embed-SI4732.pdf)

## Datasheet

* [PN532](/datasheet/PN532_C1.pdf)
* [BQ25896](/datasheet/bq25896.pdf)
* [BQ27220](/datasheet/bq27220_datasheet.pdf)

## Software Development

* [T-Embed GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Embed)

### Dependent Libraries

* [RadioLib](https://github.com/jgromes/RadioLib)
* [PN532](https://github.com/Seeed-Studio/PN532)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
* [FastLED](https://github.com/FastLED/FastLED)
* [IRremoteESP8266](https://github.com/crankyoldgit/IRremoteESP8266)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)
* [PU2CLR SI4735](https://github.com/pu2clr/SI4735)

## FAQ

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Embed SI4732 V1.0 | — | Initial version |
