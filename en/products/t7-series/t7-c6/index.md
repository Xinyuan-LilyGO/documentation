---
title: T7-C6
show_source: false
tags: ESP32-C6, Wi-Fi 6, Bluetooth 5, IoT, Development Board
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7-c6/index/image/t7_c6_1.jpg', alt: 'T7-C6 front view' },
  { src: '/products/t7-series/t7-c6/index/image/t7_c6_2.jpg', alt: 'T7-C6 appearance' },
  { src: '/products/t7-series/t7-c6/index/image/t7_c6_3.jpg', alt: 'T7-C6 pin diagram' }
]" />

## Overview

The LILYGO T7-C6 is a compact development board based on the **ESP32-C6-MINI-1** module, integrating **Wi-Fi 6**, **Bluetooth 5 (BLE)**, and **Thread/Zigbee (802.15.4)**. Features GPIO0–GPIO23, ADC, SPI (SDIO), a JST SH 4-pin connector (GND/3V/TX/RX), and 4 MB Flash. With 5 V and 3.3 V power outputs, it can power various external devices. Suitable for smart home systems, remote monitoring, and embedded IoT applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T7-C6](https://github.com/Xinyuan-LilyGO/T7-c6) | ✓ | | Wi-Fi 6, BLE, GPIO examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T7-C6` project folder
4. Open `platformio.ini` and select the example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Open the example `.ino` file
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32C6 Dev Module** |
| Port | Your port |
| CPU Frequency | 160 MHz |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Flash Mode | QIO |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| Upload Speed | 921600 |

5. Click **Upload**

### Development Platforms

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Video

## Key Features

- ESP32-C6-MINI-1: Wi-Fi 6 (2.4 GHz), Bluetooth 5 (LE), 802.15.4 (Thread/Zigbee)
- 4 MB Flash, TP4065 battery charging chip
- GPIO0–GPIO23, ADC, SPI (SDIO)
- JST SH 4-pin connector (GND / 3V / TX / RX)
- 5 V and 3.3 V power outputs
- 1 × QWIIC interface

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-C6-MINI-1 |
| Flash | 4 MB |
| Battery IC | TP4065 |
| Wi-Fi | Wi-Fi 6 (2.4 GHz 802.11ax) |
| Bluetooth | Bluetooth 5.0 LE |
| 802.15.4 | Thread / Zigbee |
| Power | 5 V / 500 mA |
| Expansion | 1 × QWIIC |
| Buttons | RESET + BOOT |
| Mounting Holes | 1 × M2 |

## Pin Diagram

<img src="/products/t7-series/t7-c6/index/image/t7_c6_3.jpg" alt="T7-C6 pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T7-C6 V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T7-C6/blob/main/project/T7-C6_V1.0.pdf)

## Datasheet

* [TP4065 Datasheet](/datasheet/TP4065-4.2V-SOT25-R.pdf)

## Software Development

* [T7-C6 GitHub Repository](https://github.com/Xinyuan-LilyGO/T7-c6)

## FAQ

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T7-C6 V1.0 | — | Initial version |
