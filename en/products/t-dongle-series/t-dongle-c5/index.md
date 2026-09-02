---
title: T-Dongle-C5
show_source: false
tags: ESP32-C5, USB Dongle, TFT, Wi-Fi 6, Bluetooth, TF Card, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-c5" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-1.jpg', alt: 'T-Dongle-C5 front view' },
  { src: '/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-2.jpg', alt: 'T-Dongle-C5 back view' },
  { src: '/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-3.jpg', alt: 'T-Dongle-C5 dimensions' },
]" />

## Overview

LILYGO T-Dongle-C5 is a compact ESP32-C5-based USB dongle development board in a standard USB Type-A plug form factor. Powered by the **ESP32-C5** single-core RISC-V @ 240 MHz with **dual-band Wi-Fi 6 (2.4 GHz + 5 GHz)** and **Bluetooth 5.0 LE**, it integrates a **0.96-inch ST7735 IPS color TFT** (80 × 160), a TF card slot, 16 MB Flash, and 8 MB PSRAM — all within a transparent USB-A housing. Thread and Zigbee 3.0 support makes it a versatile platform for next-generation IoT applications, wireless display dongles, and Matter-ready devices.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-C5](https://github.com/Xinyuan-LilyGO/T-Dongle-C5) | ✓ | | Display, TF card, Wi-Fi 6, BLE examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Dongle-C5` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-A, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32C5 Dev Module** |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz |
| Flash Mode | **QIO** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-C5 single-core RISC-V @ 240 MHz
- Dual-band Wi-Fi 6 (802.11ax) 2.4 GHz + 5 GHz
- Bluetooth 5.0 LE, Thread, Zigbee 3.0
- USB Type-A plug form factor with transparent housing
- 0.96-inch ST7735 IPS color TFT LCD (80 × 160, 65k colors)
- TF card slot
- 16 MB Flash, 8 MB PSRAM
- Matter-ready for smart home integration

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-C5, Single-core RISC-V @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 6 (2.4 GHz + 5 GHz), Bluetooth 5.0 LE, Thread, Zigbee 3.0 |
| Display | 0.96-inch ST7735 IPS TFT, 80 × 160 |
| Storage | TF card slot |
| USB | USB Type-A plug |
| Dimensions | 58 × 18 × 9 mm |

![T-Dongle-C5 Specifications](/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-info.jpg)

## Pin Diagram

![T-Dongle-C5 Pinout](/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-pinout.jpg)

## Dimensions

![T-Dongle-C5 Dimensions Diagram](/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-3.jpg)

## Schematic

- [T-Dongle-C5 GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/T-Dongle-C5/tree/master/hardware)

## Datasheet

- [ESP32-C5 Datasheet](/datasheet/esp32-c5_datasheet_en.pdf)

## Software Libraries

- [T-Dongle-C5 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Dongle-C5)

### Dependent Libraries


## FAQ

* **Q. Does T-Dongle-C5 support Matter?**
  A. Yes. The ESP32-C5 supports Thread and Zigbee 3.0, which are key protocols for Matter-based smart home ecosystems.

* **Q. What is the difference from T-Dongle-S3?**
  A. The C5 variant uses the newer ESP32-C5 chip with dual-band Wi-Fi 6 (including 5 GHz) and Thread/Zigbee support, whereas the S3 uses ESP32-S3 with 2.4 GHz Wi-Fi 4 and Bluetooth 5 LE only.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
