---
title: T7-S3
show_source: false
tags: ESP32-S3, Wi-Fi, Bluetooth, PSRAM, Qwiic, IoT, General Purpose
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t7-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7-s3/index/image/t7-s3-1.jpg', alt: 'T7-S3 front view' },
  { src: '/products/t7-series/t7-s3/index/image/t7-s3-2.jpg', alt: 'T7-S3 back view' },
]" />

## Overview

LILYGO T7-S3 is a compact general-purpose development board based on the **ESP32-S3-WROOM-1** module with 16 MB Flash, 8 MB PSRAM, USB-C, and Bluetooth 5.0. It features a STEMMA QT / Qwiic JST-SH connector for easy I2C expansion, Li-Po battery support, and a 3.9 × 3.1 cm footprint. Suitable for IoT prototyping, sensor hubs, and any project benefiting from the ESP32-S3's dual-core LX7 performance and USB OTG capability.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T7-S3](https://github.com/Xinyuan-LilyGO/LilyGo-T7-S3) | ✓ | | GPIO, PSRAM, Wi-Fi, sensor examples |

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
- 16 MB Flash, 8 MB PSRAM
- USB-C (power, programming, USB OTG)
- STEMMA QT / Qwiic JST-SH I2C connector
- Li-Po battery support with charging
- Compact 39 × 31 mm board

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3-WROOM-1, Dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 5.0 |
| USB | 1 × USB-C (OTG capable) |
| Expansion | Qwiic / STEMMA QT (I2C) |
| Dimensions | 39 × 31 mm |

## Software Libraries

* [LilyGo-T7-S3 GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T7-S3)

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
