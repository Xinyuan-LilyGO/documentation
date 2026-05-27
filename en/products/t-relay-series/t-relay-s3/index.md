---
title: T-Relay-S3
show_source: false
tags: ESP32-S3, Relay, Wi-Fi, Bluetooth, IoT, Smart Home, ESPHome, Tasmota
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-relay-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-relay-series/t-relay-s3/index/image/t-relay-s3-1.jpg', alt: 'T-Relay-S3 front view' },
  { src: '/products/t-relay-series/t-relay-s3/index/image/t-relay-s3-2.jpg', alt: 'T-Relay-S3 back view' },
]" />

## Overview

LILYGO T-Relay-S3 is an upgraded relay control board powered by the **ESP32-S3-WROOM-1U** (dual-core LX7, 16 MB Flash, 8 MB PSRAM), featuring **6 relay channels** controlled via an SN74HC595 shift register. The board supports up to 3 expansion boards for a total of 24 relays, with each relay rated for up to 10 A. Compatible with Tasmota, ESPHome, and ESPEasy for home automation. Includes expansion headers for optional LCD connection.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-Relay](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay) | ✓ | | Relay control, ESPHome, Tasmota |

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

- ESP32-S3-WROOM-1U, dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 6 relay channels (SN74HC595 shift register controlled)
- Expandable to 24 relays with 3 expansion boards
- Each relay rated up to 10 A load current (max 2500 W)
- 16 MB Flash, 8 MB PSRAM
- 2 × 10-pin expansion seats for optional LCD
- Reset and Boot buttons
- Compatible with Tasmota, ESPHome, ESPEasy

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3-WROOM-1U, Dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 |
| Relay Channels | 6 (expandable to 24) |
| Max Load Current | 10 A per relay |
| USB | 1 × USB-C |

## Pin Diagram

<!-- GPIO mapping table. -->

## Schematic

* [LilyGo-T-Relay GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay/blob/main/docs/RELAY_ESP32S3.MD)

## Software Libraries

* [LilyGo-T-Relay GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay)
* [T-Relay S3 Tasmota Template](https://templates.blakadder.com/lilygo_T-Relay-S3.html)
* [ESPHome Configuration](https://github.com/rh1rich/esphome-t-relay-s3)

## FAQ

* **Q. How to expand beyond 6 relays?**
  A. Connect up to 3 expansion boards to the T-Relay-S3, giving a maximum of 24 relay channels.

* **Q. What is the maximum load?**
  A. Each relay supports up to 10 A. Do not connect loads exceeding 2500 W.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
