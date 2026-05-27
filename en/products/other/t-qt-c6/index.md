---
title: T-QT C6
show_source: false
tags: ESP32-C6, Wearable, TFT, IMU, QWIIC
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-qt-c6" />
<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-qt-c6/index/image/t-qt-c6-1.jpg', alt: 'T-QT C6 front view' },
  { src: '/products/other/t-qt-c6/index/image/t-qt-c6-2.jpg', alt: 'T-QT C6 physical image' },
  { src: '/products/other/t-qt-c6/index/image/t-qt-c6-pin-en.jpg', alt: 'T-QT C6 pin diagram' }
]" />

## Overview

T-QT C6 is a compact smart wearable development kit based on **ESP32-C6-MINI-1U** (4 MB Flash, 4 MB PSRAM). Features a **0.85-inch GC9107 TFT LCD** (128 × 128), **CST816T** touch, **LSM6DSLTR** 6-axis IMU (V1.1+), **SGM41562** PMU (V1.2) / ETA4662 (V1.0–V1.1), breathing light, QWIIC interface, and battery support. Supports Wi-Fi 6 + BT 5.0. **33 × 24 × 44.5 mm.**

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [Battery_Voltage](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Battery voltage reading |
| [Breathing_Light](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Breathing light effect |
| [CST816T](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Touch gesture demo |
| [Deep_Sleep](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Deep sleep (172.61 µA) |
| [Light_Sleep](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Light sleep (516.81 µA) |
| [IMU](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | 6-axis IMU example |
| [GFX](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Display graphics test |
| [Lvgl_CIT_SGM41562](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Factory test (V1.2) |
| [Lvgl_CIT_ETA4662](https://github.com/Xinyuan-LilyGO/T-QT-C6) | ✓ | | Factory test (V1.0–V1.1) |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [T-QT-C6](https://github.com/Xinyuan-LilyGO/T-QT-C6) repository
4. Open `platformio.ini` and under `[platformio]` uncomment the desired environment
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
3. Copy all directories from the project `libraries` folder to your Arduino libraries folder
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | 160 MHz |
| Flash Mode | QIO |
| Flash Size | **4MB (32Mb)** |
| Core Debug Level | None |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |

5. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-C6-MINI-1U, 4 MB Flash, 4 MB PSRAM, Wi-Fi 6 + BT 5.0
- 0.85-inch GC9107 TFT (128 × 128), CST816T capacitive touch
- LSM6DSLTR 6-axis IMU, SGM41562 PMU, breathing light, QWIIC, 33 × 24 × 44.5 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-C6-MINI-1U |
| Flash | 4 MB |
| PSRAM | 4 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n (Wi-Fi 6) |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 0.85-inch GC9107 TFT, 128 × 128 (SPI) |
| Touch | CST816T Capacitive (I2C) |
| IMU | LSM6DSLTR 6-axis (V1.1+) |
| Power Management | SGM41562 (V1.2) / ETA4662 (V1.0–V1.1) |
| LED | WS2812B/C Breathing Light |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | QWIIC 4-pin + 2×2×7 IO |
| Buttons | RESET + BOOT |
| Dimensions | 33 × 24 × 44.5 mm |

## Pin Diagram

<img src="/products/other/t-qt-c6/index/image/t-qt-c6-pin-en.jpg" alt="T-QT C6 pin diagram" width=100%>

### Pin Mapping

| Name | GPIO |
| :--: | :--: |
| Display MOSI | IO15 |
| Display SCLK | IO18 |
| Display RST | IO20 |
| Display BL | IO2 |
| Display CS | IO14 |
| Display DC | IO19 |
| Touch RST | IO23 |
| Touch INT | IO7 |
| Touch / IMU SDA | IO21 |
| Touch / IMU SCL | IO22 |
| Battery ADC Control | IO8 |
| Battery ADC Data | IO6 |
| Breathing Light | IO9 |
| IMU INT1 (V1.1–V1.2) | IO0 |
| IMU INT2 (V1.1–V1.2) | IO1 |
| IMU I2C Address Mode (V1.1–V1.2) | IO3 |
| SGM41562 INT (V1.2) | IO4 |

## Dimension Diagram

## Schematic

* [T-QT-C6 V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.0)
* [T-QT-C6 V1.1 Schematic](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.1)
* [T-QT-C6 V1.2 Schematic](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.2)

## Datasheet

* [ESP32-C6-MINI-1U Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6-mini-1_mini-1u_datasheet_en.pdf)
* [SGM41562 Datasheet](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/information/SGMICRO-SGM41562XGTR.pdf)
* [LSM6DSL Datasheet](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/information/lsm6dsl.pdf)

## Software Development

* [T-QT-C6 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-QT-C6)

### Dependent Libraries

* [Arduino_DriveBus-1.1.16](https://github.com/Xinyuan-LilyGO/T-QT-C6)
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [lvgl-8.3.5](https://github.com/lvgl/lvgl)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold **BOOT** and press **RST** once, release RST while still holding BOOT, then start the upload.

* **Q. How to achieve low power operation?**
  A. Use the SGM41562/ETA4662 PMU with ESP32-C6 deep sleep mode. Deep sleep draws ~172 µA, light sleep ~516 µA.

* **Q. Which touch gestures are supported?**
  A. CST816T supports swipe up/down/left/right, single-click, double-click, and long-press.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-QT-C6 V1.0 | 2023-12-20 | Initial version |
| T-QT-C6 V1.1 | 2024-03-27 | Added battery backplane support |
| T-QT-C6 V1.2 | 2024-06-13 | Changed PMU to SGM41562 |
| T-QT-C6 Battery V1.2 | 2025-08-11 | Modified backplane pins, 2-pin 1.25 mm pitch battery connector |
