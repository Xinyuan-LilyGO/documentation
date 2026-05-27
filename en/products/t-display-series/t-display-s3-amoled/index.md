---
title: T-Display-S3-AMOLED
show_source: false
tags: ESP32-S3, AMOLED, RM67162, Touch, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-display-s3-amoled" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-amoled/index/image/t-display-s3-amoled-1.jpg', alt: 'T-Display-S3-AMOLED front view' },
  { src: '/products/t-display-series/t-display-s3-amoled/index/image/t-display-s3-amoled-2.jpg', alt: 'T-Display-S3-AMOLED back view' },
]" />

## Overview

LILYGO T-Display-S3-AMOLED is an upgraded version of the T-Display-S3, featuring a **1.91-inch AMOLED display** with a resolution of 536 × 240 pixels driven by the **RM67162** controller via QSPI interface. Based on the **ESP32-S3** dual-core LX7 processor running at 240 MHz, it provides **Wi-Fi 802.11 b/g/n** and **Bluetooth 5.0 LE**. The board ships with 16 MB Flash and 8 MB PSRAM and exposes more configurable GPIO ports than the standard T-Display-S3. An optional capacitive touch version is available. Ideal for smart home dashboards, wearable UIs, and wireless sensor displays.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Display-S3-AMOLED](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED) | ✓ | | AMOLED display, LVGL UI, touch examples |
| [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) | ✓ | | Unified AMOLED library examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Display-S3-AMOLED` project folder
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
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, Wi-Fi 802.11 b/g/n + Bluetooth 5.0 LE
- 1.91-inch AMOLED display, 536 × 240 px, driven by RM67162 via QSPI
- Optional capacitive touch version
- 16 MB Flash, 8 MB OPI PSRAM
- More configurable GPIO ports than T-Display-S3
- 2 × programmable push buttons
- USB-C for power and programming
- LiPo battery charging support

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3R8, dual-core LX7 @ 240 MHz |
| Flash | 16 MB (QSPI) |
| PSRAM | 8 MB (OPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 1.91-inch AMOLED, 536 × 240 px (RM67162) |
| Display Interface | QSPI |
| Touch | Capacitive (touch version only) |
| Buttons | 2 × programmable push buttons |
| USB | 1 × USB-C |

## Pin Diagram

<!-- GPIO mapping table. -->

### Display (RM67162)

| RM67162  | D0     | D1     | D2     | D3     | CS     | SCK    | RESET  | TE     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO47 | GPIO41 | GPIO0  | GPIO42 | GPIO6  | GPIO5  | GPIO17 | GPIO18 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T-Display-S3-AMOLED Schematic (PDF)](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED/blob/main/schematic/T-DISPLAY-S3-AMOLED.pdf)

## Datasheet

* [RM67162 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED/blob/main/datasheet/RM67162%20DataSheet_V0.0.pdf)
* [ESP32-S3 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED/blob/main/doc/esp32-s3_datasheet_en.pdf)

## Software Libraries

* [T-Display-S3-AMOLED GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED)
* [LilyGo-AMOLED-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)

### Dependent Libraries

* [LVGL](https://github.com/lvgl/lvgl)
* [Arduino GFX](https://github.com/moononournation/Arduino_GFX)

## FAQ

<!-- Errata and common issues. -->

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| V1.0 | | Initial release |
