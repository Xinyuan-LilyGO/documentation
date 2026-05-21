---
title: T-ETH Lite
show_source: false
tags: ESP32, Ethernet, PoE, RTL8201, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lite/assets/t-eth-lite-1.jpg', alt: 'T-ETH Lite front view' },
  { src: '/products/t-eth-series/t-eth-lite/assets/t-eth-lite-2.jpg', alt: 'T-ETH Lite physical image' },
  { src: '/products/t-eth-series/t-eth-lite/assets/t-eth-lite-pin-en.jpg', alt: 'T-ETH Lite pin diagram' }
]" />

## Overview

T-ETH Lite is an Ethernet-enabled development board based on **ESP32** (16 MB Flash, 8 MB PSRAM). Features **RTL8201 Ethernet** controller, PoE expansion interface, TF card slot (SD_CS: IO5), and extensive GPIO resources (GPIO02–GPIO39) including ADC, DAC, and capacitive touch pins. Suitable for intelligent control, remote monitoring, and automation systems requiring high reliability, low latency, and multi-peripheral collaboration.

> T-ETH Lite is the ESP32 version. For the ESP32-S3 version see [T-ETH Lite S3](../t-eth-lite-s3/index.md).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-ETH-Series Examples](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) | ✓ | | Ethernet, LoRa, LTE examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGO-T-ETH-Series](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) repository
4. Open `platformio.ini` and uncomment the desired example
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | 240 MHz (WiFi/BT) |
| Flash Frequency | 80 MHz |
| Flash Mode | QIO |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enable** |
| Core Debug Level | None |

4. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32 dual-core LX6 @ 240 MHz, 16 MB Flash, 8 MB PSRAM, Wi-Fi + BT 5.0
- RTL8201 Ethernet, PoE expansion interface
- TF card slot, 2 × 15-pin IO expansion, 4 × 2 mm mounting holes
- Extensive GPIO: ADC, DAC, capacitive touch (TOUCH02–TOUCH09)

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32 @ Dual-core LX6, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Ethernet | RTL8201 |
| PoE | Expansion interface |
| Storage | TF card (SD_CS: IO5) |
| USB | 1 × Type-C |
| Expansion | 2 × 15-pin IO, QWIIC |
| Buttons | BOOT + RESET |
| LED | Power/Link/ACT indicators |
| Mounting Holes | 4 × 2 mm |

## Pin Diagram

<img src="/products/t-eth-series/t-eth-lite/assets/t-eth-lite-pin-en.jpg" alt="T-ETH Lite pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-ETH-Lite (ESP32) Schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-Lite-ESP32.pdf)

## Datasheet

* [DP9900M PoE](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/datasheet/ETH-POE-DP9900M-5V.pdf)
* [DP5300 PoE](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/datasheet/ETH-PRO-POE-DP5300-12V.pdf)

## Software Development

* [LilyGO-T-ETH-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series)

### Dependent Libraries

* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [ETHClass2](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/lib/ETHClass2)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [U8g2](https://github.com/olikraus/u8g2)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-ETH Lite V1.0 | — | Initial version (ESP32) |
