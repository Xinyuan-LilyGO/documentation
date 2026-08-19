---
title: T4-S3
show_source: false
tags: ESP32-S3, AMOLED, Touch, Display, WiFi, Bluetooth
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t4-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t4-series/t4-s3/index/image/t4-s3-1.jpg', alt: 'T4-S3 front view' },
  { src: '/products/t4-series/t4-s3/index/image/t4-s3-2.jpg', alt: 'T4-S3 back view' },
  { src: '/products/t4-series/t4-s3/index/image/t4-s3-3.jpg', alt: 'T4-S3 dimensions' },
]" />

## Overview

LILYGO T4-S3 is a compact development board based on the **ESP32-S3R8** dual-core LX7 microcontroller featuring a vibrant **2.41-inch SPI RGB AMOLED touchscreen** (600 × 450, 800 cd/m²). It integrates Wi-Fi 2.4 GHz and Bluetooth 5.0 (LE), 16 MB Flash, 8 MB PSRAM, a MicroSD card slot, and battery management via a JST-GH 1.25 mm connector. Two Qwiic (JST-SH 1.0 mm) ports and a 30-pin 1.27 mm-pitch header expose available GPIOs and power pins. Suitable for smart-display projects, wearable prototyping, and compact IoT applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) | ✓ | ✓ | AMOLED display, touch, TF card examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-AMOLED-Series` project folder
4. Open `platformio.ini` and select the T4-S3 environment
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

> **Note:** GPIO18 is assigned to the AMOLED display TE pin — do not use it for other purposes.

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3R8 dual-core LX7 @ 240 MHz, Wi-Fi 2.4 GHz + Bluetooth 5.0 (LE)
- 2.41-inch SPI RGB AMOLED touchscreen, 600 × 450 resolution, 800 cd/m²
- 16 MB Flash + 8 MB PSRAM
- MicroSD card slot
- Battery charging via JST-GH 1.25 mm connector
- 2 × Qwiic (JST-SH 1.0 mm) I2C expansion ports
- 30-pin 1.27 mm-pitch GPIO header
- USB-C programming and power

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3R8, Dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 5.0 (LE) |
| Display | 2.41-inch AMOLED, 600 × 450, SPI, capacitive touch |
| Storage | MicroSD card slot |
| USB | 1 × USB-C |
| Expansion | 2 × Qwiic (JST-SH 1.0 mm), 30-pin 1.27 mm header |
| Battery | JST-GH 1.25 mm, 3.7 V Li-Po |
| Weight | <!-- placeholder --> |
| Package size | <!-- placeholder --> |

## Power Consumption Reference

| Operating Condition | Current | Wake-Up Source |
| :-- | :-- | :-- |
| CPU at 240 MHz, Wi-Fi on | 90-230+ mA | - |
| Sleep | About 230 µA | External GPIO0 |

> Values published in the [official LilyGo AMOLED Series repository](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series#current-consumption). Actual current depends on display brightness, wireless activity, enabled peripherals, and firmware.

## Pin Diagram

![T4-S3 Specifications](/products/t4-series/t4-s3/index/image/t4-s3-info.jpg)

### Pinout Diagram

![T4-S3 Pinout](/products/t4-series/t4-s3/index/image/t4-s3-pinout.jpg)

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [LilyGo-AMOLED-Series Schematics](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/tree/master/schematic)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Software Libraries

* [LilyGo-AMOLED-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)
* [Quick Start Guide](quick-start.md)

### Dependent Libraries

* [LVGL](https://github.com/lvgl/lvgl)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)

## FAQ

* **Q. Why is GPIO18 not available?**
  A. GPIO18 is connected to the AMOLED display TE (tearing effect) pin internally. Using it for other purposes may cause display artifacts.

* **Q. Upload fails?**
  A. Hold **BOOT**, press and release **RST**, then click Upload.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | 2023-12 | Initial release |
