---
title: T-Display S3 AMOLED 1.75
show_source: false
tags: ESP32-S3, AMOLED, Display, Touch
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44848332931253" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-1.jpg', alt: 'T-Display S3 AMOLED 1.75 front view' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-2.jpg', alt: 'T-Display S3 AMOLED 1.75 physical image' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-en.jpg', alt: 'T-Display S3 AMOLED 1.75 pin diagram' }
]" />

## Overview

T-Display S3 AMOLED 1.75 is a highly integrated development board based on **ESP32-S3R8** (16 MB Flash, 8 MB PSRAM). Equipped with a **1.75-inch SH8601 AMOLED** display (280 × 456, QSPI), **FT3168** capacitive touch, **SY6970** PMU, **PCF8563** RTC, TF card slot, and dual STEMMA QT/QWIIC interfaces. Supports battery voltage detection and 5V/500 mA USB charging. Suitable for smart wearables, embedded GUI, and IoT terminals in a compact 45 × 45 × 11 mm form factor.

> The output waveform of the SY6970 PMU will be very unstable when powered by 5V without a battery. Connect a battery for use, or use software to disable the battery channel.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/FT3168) | ✓ | | FT3168 touch example |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX) | ✓ | | GFX graphics library example |
| [SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970) | ✓ | | SY6970 power management |
| [Light Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up) | ✓ | | Light sleep wake up |
| [Deep Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up) | ✓ | | Deep sleep wake up |
| [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563) | ✓ | | PCF8563 RTC example |
| [SD](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SD) | ✓ | | SD card read/write |
| [lvgl_benchmark](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/lvgl_benchmark) | ✓ | | LVGL performance test |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Display-S3-AMOLED-1.43-1.75` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## Video

## Key Features

- ESP32-S3R8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 1.75-inch SH8601 AMOLED (280 × 456), QSPI bus
- FT3168 capacitive touch
- SY6970 PMU, PCF8563 RTC
- TF card slot, 2 × STEMMA QT/QWIIC, JST-GH battery connector
- 45 × 45 × 11 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 1.75-inch SH8601 AMOLED, 280 × 456, QSPI |
| Touch | FT3168 capacitive |
| PMU | SY6970 |
| RTC | PCF8563 |
| Storage | TF card slot |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | 2 × STEMMA QT/QWIIC + JST-GH battery connector |
| Dimensions | 45 × 45 × 11 mm |

## Pin Diagram

<img src="/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-en.jpg" alt="T-Display S3 AMOLED 1.75 pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Display-S3-AMOLED-1.43-1.75 V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/project/T-Display-S3-AMOLED-1.43-1.75_V1.0.pdf)

## Datasheet

* [SH8601](/datasheet/SH8601Z.pdf)
* [PCF8563](/datasheet/PCF8563.pdf)
* [AN_SY6970](/datasheet/AN_SY6970.pdf)

## Software Development

* [T-Display-S3-AMOLED-1.43-1.75 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75)

### Dependent Libraries

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [Arduino_DriveBus-1.1.16](https://github.com/Llgok/Arduino_DriveBus)
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [lvgl-8.3.5](https://lvgl.io)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)

## FAQ

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Display-S3-AMOLED-1.43-1.75 V1.0 | 2024-11-25 | Added FPC cable, H0175Y003AM screen support |
| T-Display-S3-AMOLED-1.43-1.75 V1.0 | 2025-01-13 | Added DO0143FMST10 screen support |
