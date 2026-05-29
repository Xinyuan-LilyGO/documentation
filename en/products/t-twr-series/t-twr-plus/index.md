---
title: T-TWR-Plus
show_source: false
tags: ESP32-S3, SA868, VHF, UHF, Walkie-Talkie, GPS, OLED, Radio, APRS
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-twr-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-1.jpg', alt: 'T-TWR-Plus front view' },
  { src: '/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-2.jpg', alt: 'T-TWR-Plus back view' },
  { src: '/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-3.jpg', alt: 'T-TWR-Plus dimensions' },
  { src: '/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-info.jpg', alt: 'T-TWR-Plus specifications' },
]" />

## Overview

LILYGO T-TWR-Plus is a programmable walkie-talkie development board based on **ESP32-S3-WROOM-1** (dual-core LX7, 16 MB Flash, 8 MB PSRAM) with an integrated **SA868 UHF radio module** (400–480 MHz). It features a **1.3-inch SH1106 OLED**, **L76K GNSS** receiver, PTT button, speaker, microphone, TF card slot, and a 21700 battery holder. Compatible with OpenRTX and APRS, it supports fully custom radio applications over Wi-Fi and Bluetooth 5.0.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-TWR](https://github.com/Xinyuan-LilyGO/T-TWR) | ✓ | | SA868 radio, GPS, OLED, audio examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Install **PlatformIO IDE** extension
3. Open the `T-TWR` project folder
4. Open `platformio.ini`, select the T-TWR-Plus environment
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. In **Tools → Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB CDC On Boot | Enable |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

## Key Features

- ESP32-S3-WROOM-1, dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- SA868 UHF radio module, 400–480 MHz (VHF 136–174 MHz optional)
- 16 MB Flash, 8 MB PSRAM
- 1.3-inch SH1106 OLED (128 × 64, I2C)
- L76K GNSS (GPS/BeiDou/GLONASS)
- PTT button, speaker, microphone
- TF card slot
- 21700 battery holder with charging
- Compatible with OpenRTX, APRS

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3-WROOM-1, Dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 5.0 |
| Radio | SA868 UHF 400–480 MHz (or VHF 136–174 MHz) |
| Display | 1.3-inch SH1106 OLED, 128 × 64 |
| GNSS | L76K |
| Storage | TF card slot |
| Battery | 21700 Li-Ion holder |
| USB | 1 × USB-C |

![T-TWR-Plus Specifications](/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-info.jpg)

## Pin Diagram

![T-TWR-Plus Pinout](/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-pinout.jpg)

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T-TWR GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/T-TWR)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Software Libraries

* [T-TWR GitHub Repository](https://github.com/Xinyuan-LilyGO/T-TWR)

### Compatible Firmware

* [OpenRTX](https://github.com/OpenRTX/OpenRTX) — open-source radio firmware
* [ESP32APRS T-TWR](https://github.com/nakhonthai/ESP32APRS_T-TWR) — APRS support

## FAQ

* **Q. What frequencies does it support?**
  A. The standard T-TWR-Plus uses the SA868 UHF module (400–480 MHz). A VHF version (136–174 MHz) is also available.

* **Q. Can it transmit on amateur radio frequencies?**
  A. The SA868 module is capable of FM voice transmission. Ensure you have the appropriate amateur radio license for your region.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
