---
title: T-Dongle-S3
show_source: false
tags: ESP32-S3, USB Dongle, TFT, Wi-Fi, Bluetooth, APA102, TF Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-1.jpg', alt: 'T-Dongle-S3 front view' },
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-2.jpg', alt: 'T-Dongle-S3 back view' },
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-3.jpg', alt: 'T-Dongle-S3 dimensions' },
]" />

## Overview

LILYGO T-Dongle-S3 is a feature-rich ESP32-S3 USB dongle development board in a standard USB Type-A plug form factor. It is powered by the **ESP32-S3** dual-core Xtensa LX7 (240 MHz) with Wi-Fi 802.11 b/g/n and Bluetooth 5 LE, and packs a **0.96-inch ST7735 IPS color TFT** (80 × 160), an **APA102 RGB LED**, and a TF card slot hidden inside the USB-A connector — all in a compact transparent plastic housing. 16 MB Flash and 8 MB PSRAM provide ample resources for data-rich applications. A JST SH 1.0 mm UART connector and a 1.25 mm battery connector round out the expansion options. Ideal for USB HID gadgets, wireless display sticks, portable data loggers, and educational IoT projects.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-S3](https://github.com/Xinyuan-LilyGO/T-Dongle-S3) | ✓ | | Display, TF card, LED, BLE examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Dongle-S3` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-A, click **→** to upload

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
| Flash Mode | QIO 80 MHz |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | UART0/Hardware CDC |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3 dual-core Xtensa LX7 @ 240 MHz, Wi-Fi 802.11 b/g/n + Bluetooth 5 LE
- USB Type-A plug form factor with transparent plastic housing
- 0.96-inch ST7735 IPS color TFT LCD (80 × 160, 65k colors)
- APA102 RGB LED (SPI-controlled)
- TF card slot integrated inside the USB-A connector housing
- 16 MB Flash, 8 MB PSRAM
- JST SH 1.0 mm 4-pin UART connector
- MX 1.25 mm 2-pin battery connector with charging circuit
- On-board antenna + IPEX connector for external antenna
- Compatible with Arduino IDE, PlatformIO, MicroPython, and Zephyr RTOS

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3 (Xtensa dual-core LX7, 240 MHz) |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 5 LE |
| Display | 0.96-inch ST7735 IPS TFT, 80 × 160 |
| RGB LED | APA102 × 1 |
| Storage | TF card slot |
| USB | USB Type-A plug |
| Battery Connector | MX 1.25 mm 2-pin |
| UART Connector | JST SH 1.0 mm 4-pin |
| Antenna | On-board + IPEX |
| Dimensions | 58 × 18 × 9 mm |

![T-Dongle-S3 Specifications](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-info.jpg)

## Pin Diagram

### Display (ST7735)

| ST7735   | BL     | CS     | SCK    | MOSI   | DC     | RST    |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO38 | GPIO4  | GPIO5  | GPIO3  | GPIO2  | GPIO1  |

### TF Card

| TF Card  | CLK    | CMD    | D0     | CS     |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO5  | GPIO3  | GPIO7  | GPIO4  |

### APA102 LED

| APA102   | CI     | DI     |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO40 | GPIO39 |

### Button

| Button   | GPIO   |
| :------: | :----: |
| ESP32-S3 | GPIO0  |

### Pinout Diagram

![T-Dongle-S3 Pinout](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-pinout.jpg)

## Dimensions

![T-Dongle-S3 Dimensions Diagram](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-3.jpg)

## Schematic

- [T-Dongle-S3 GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/tree/main/hardware)

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

- [T-Dongle-S3 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Dongle-S3)

### Dependent Libraries

- [FastLED](https://github.com/FastLED/FastLED)

## FAQ

<!-- Errata and common issues. -->

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
