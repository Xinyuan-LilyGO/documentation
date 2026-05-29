---
title: T7
show_source: false
tags: ESP32, WROVER, Wi-Fi, Bluetooth, MicroPython, IoT, General Purpose
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t7-v1-3-mini-32-esp32" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7/index/image/t7-1.jpg', alt: 'T7 front view' },
  { src: '/products/t7-series/t7/index/image/t7-2.jpg', alt: 'T7 back view' },
  { src: '/products/t7-series/t7/index/image/t7-3.jpg', alt: 'T7 dimensions' },
]" />

## Overview

LILYGO T7 (Mini32) is a compact general-purpose ESP32-WROVER development board. Based on the **ESP32-WROVER-E** module with 4–16 MB Flash, 8 MB PSRAM, Wi-Fi, and Bluetooth 4.2 + BLE, it is WROVER-compatible and supports MicroPython, Arduino, and ESP-IDF. Features CH9102 USB-to-UART, STEMMA QT/Qwiic JST connectors, and a compact form factor suitable for prototyping and production.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO-T7-Demo](https://github.com/LilyGO/TTGO-T7-Demo) | ✓ | | GPIO, PSRAM, Wi-Fi examples |

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. In **Tools → Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| Flash Size | **4MB (32Mb)** or **16MB (128Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |

## Key Features

- ESP32-WROVER-E (Xtensa dual-core LX6 @ 240 MHz), Wi-Fi + Bluetooth 4.2 + BLE
- 4 or 16 MB Flash, 8 MB PSRAM
- CH9102 USB-to-UART
- STEMMA QT / Qwiic JST-SH connector
- Compact Mini32 form factor (40 × 31 mm)
- MicroPython support
- Battery support (Li-Po with charging)

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-WROVER-E, Dual-core LX6 @ 240 MHz |
| Flash | 4 MB or 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 4.2 + BLE |
| USB Serial | CH9102 |
| Dimensions | 40 × 31 mm |

## Software Libraries

* [TTGO-T7-Demo GitHub Repository](https://github.com/LilyGO/TTGO-T7-Demo)

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.3 | | Initial release |
| V1.5 | | Added PSRAM |
