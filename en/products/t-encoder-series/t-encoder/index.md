---
title: T-Encoder
show_source: false
tags: ESP32-S3, Round Display, GC9A01, Rotary Encoder, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-encoder" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-encoder-series/t-encoder/index/image/t-encoder-1.jpg', alt: 'T-Encoder front view' },
  { src: '/products/t-encoder-series/t-encoder/index/image/t-encoder-2.jpg', alt: 'T-Encoder back view' },
  { src: '/products/t-encoder-series/t-encoder/index/image/t-encoder-3.jpg', alt: 'T-Encoder dimensions' },
  { src: '/products/t-encoder-series/t-encoder/index/image/t-encoder-info.jpg', alt: 'T-Encoder specifications' },
]" />

## Overview

LILYGO T-Encoder is a compact ESP32-S3 development board combining a **1.28-inch GC9A01 round TFT display** (240 × 240) with an integrated **rotary encoder** and push button. Powered by the **ESP32-S3** dual-core LX7 @ 240 MHz with Wi-Fi 802.11 b/g/n and Bluetooth 5.0 LE, it provides a sleek, knob-style interface form factor ideal for volume controls, smart dimmers, menus, and wearable-style embedded HMI applications. Supports Arduino IDE, PlatformIO, and ESP-IDF.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Encoder](https://github.com/Xinyuan-LilyGO/T-Encoder) | ✓ | | Round display, encoder, BLE examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Encoder` project folder
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
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **Disabled** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 1.28-inch GC9A01 round TFT display (240 × 240, SPI)
- Integrated rotary encoder with push button
- Compact knob-style form factor
- USB-C for power and programming
- QWIIC connector for I2C expansion

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3, Dual-core LX7 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | — |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 5.0 LE |
| Display | 1.28-inch GC9A01 round TFT, 240 × 240 |
| Interface | Rotary encoder with push button |
| USB | 1 × USB-C |
| Expansion | 1 × QWIIC |

![T-Encoder Specifications](/products/t-encoder-series/t-encoder/index/image/t-encoder-info.jpg)

## Pin Diagram

![T-Encoder Pinout](/products/t-encoder-series/t-encoder/index/image/t-encoder-pinout.jpg)

### Display (GC9A01)

| Signal | GPIO |
| :----: | :--: |
| SPI MOSI | 13 |
| SPI SCK  | 12 |
| CS       | 10 |
| DC       | 11 |
| RST      | 14 |
| BL       | 9  |

### Rotary Encoder

| Signal | GPIO |
| :----: | :--: |
| ENC A  | 4 |
| ENC B  | 5 |
| Button | 0 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [T-Encoder GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/T-Encoder/tree/master/hardware)

## Datasheet

- [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
- [GC9A01 Datasheet](https://www.buydisplay.com/download/ic/GC9A01A.pdf)

## Software Libraries

- [T-Encoder GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Encoder)

### Dependent Libraries

- [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
- [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
- [LVGL](https://github.com/lvgl/lvgl)

## FAQ

* **Q. How do I read the rotary encoder direction?**
  A. Use the RotaryEncoder library, monitoring GPIO4 (A) and GPIO5 (B). The library handles debounce and direction detection automatically.

* **Q. Can I use LVGL with the round GC9A01 display?**
 A. Yes. LVGL works with the GC9A01 driver. Define the display resolution as 240 × 240 and use the GC9A01 profile or the official display helper.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
