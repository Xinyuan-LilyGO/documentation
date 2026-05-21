---
title: T-ETH Lite S3
show_source: false
tags: ESP32-S3, Ethernet, PoE, W5500, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-1.jpg', alt: 'T-ETH Lite S3 front view' },
  { src: '/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-2.jpg', alt: 'T-ETH Lite S3 physical image' },
  { src: '/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-pin-en.jpg', alt: 'T-ETH Lite S3 pin diagram' }
]" />

## Overview

T-ETH Lite S3 is an Ethernet-enabled IoT development board based on **ESP32-S3** (16 MB Flash, 8 MB PSRAM). Features **W5500 Ethernet** controller with optional PoE expansion, TF card slot (SPI), extensive GPIO interfaces (GPIO00–GPIO20, GPIO38–GPIO46) including ADC, touch (TOUCH03–TOUCH08), and dedicated output pins (GK_OUT1/GK_OUT2). Suitable for IoT endpoints, industrial control systems, and low-power edge computing.

> T-ETH Lite S3 is the ESP32-S3 version. For the ESP32 version see [T-ETH Lite](../t-eth-lite/index.md).

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
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Disabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, 16 MB Flash, 8 MB OPI PSRAM, Wi-Fi + BT 5.0
- W5500 Ethernet, optional PoE expansion board
- TF card slot (SPI), 2 × 15-pin IO expansion, 4 × 2 mm mounting holes
- Wide GPIO range: ADC, capacitive touch, dedicated output pins

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (OPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Ethernet | W5500 |
| PoE | Optional expansion board |
| Storage | TF card slot (SPI) |
| USB | 1 × Type-C |
| Expansion | 2 × 15-pin IO |
| Buttons | BOOT + RESET |
| LED | Power/Link/ACT indicators |
| Mounting Holes | 4 × 2 mm |

## Pin Diagram

<img src="/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-pin-en.jpg" alt="T-ETH Lite S3 pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-ETH-Lite-ESP32S3 Schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-Lite-ESP32S3.pdf)

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

* **Q. Why is USB CDC On Boot set to Disabled?**
  A. T-ETH Lite S3 uses hardware Ethernet requiring specific boot configuration. Keep USB CDC On Boot **Disabled** for correct operation.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-ETH Lite S3 V1.0 | — | Initial version (ESP32-S3) |
