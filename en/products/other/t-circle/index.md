---
title: T-Circle
show_source: false
tags: T-Circle, LCD, ESP32
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-circle-s3?variant=44912874062005" />
<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-circle/index/image/t-circle-1.jpg', alt: 'T-Circle front view' },
  { src: '/products/other/t-circle/index/image/t-circle-2.jpg', alt: 'T-Circle physical image' },
  { src: '/products/other/t-circle/index/image/t-circle-en.jpg', alt: 'T-Circle pin diagram' }
]" />

## Overview

LILYGO T-Circle is a circular screen development board based on **ESP32**. It features a **0.75-inch GC9D01N TFT LCD** circular display with 160 × 160 resolution and 262K color support, equipped with **CST816D** capacitive touch chip for precise touch interaction. The hardware connects to external devices through 12 pins (including 3V3 power supply, SPI interface MOSI/SCK/CS, I2C communication SDA/SCL, and BLE enable pin BLEEN), compatible with development frameworks like Arduino. Its compact design integrates high-precision display, touch control, and low-power communication functions, suitable for smart watches, IoT device interfaces, or prototype development of micro embedded systems.

> **Note**: T-Circle is the ESP32 version. For the ESP32-S3 version, see [T-Circle S3](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Circle-S3/T-Circle-S3.html).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Circle](https://github.com/Xinyuan-LilyGO/T-Circle) | ✓ | | Basic display and touch examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Circle` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | Default Configuration |
| PSRAM | Enabled |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32, 16 MB Flash, 8 MB PSRAM (Octal SPI), Wi-Fi + Bluetooth
- 0.75-inch GC9D01N TFT LCD (160 × 160), 262K color
- CST816D capacitive touch, I²C
- 12-pin expansion interface
- 2 × M1.6 mounting holes, 32 × 17 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32 |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth LE |
| Display | 0.75-inch GC9D01N TFT LCD, 160 × 160 |
| Touch | CST816D capacitive, I²C |
| Expansion | 12-pin header |
| Power | 5 V / 500 mA |
| Mounting Holes | 2 × M1.6 |
| Dimensions | 32 × 17 mm |

## Pin Diagram

<img src="/products/other/t-circle/index/image/t-circle-en.jpg" alt="T-Circle pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Circle-S3 Schematic (reference)](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf)

## Datasheet

* [GC9D01N](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/GC9D01N.pdf)

## Software Development

* [T-Circle GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Circle)

### Dependent Libraries

* [TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [FastLED-3.6.0](https://github.com/FastLED/FastLED)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button, then press the **RST** button once, then click Upload to enter download mode.

* **Q. What's the difference between T-Circle and T-Circle S3?**
  A. T-Circle uses ESP32 as the main controller, while T-Circle S3 uses the more powerful ESP32-S3. Choose the appropriate version according to your project requirements.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Circle V1.0 | 2021-03-14 | Initial version |
