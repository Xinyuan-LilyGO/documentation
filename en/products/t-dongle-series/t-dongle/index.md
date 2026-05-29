---
title: T-Dongle
show_source: false
tags: ESP32, USB Dongle, TFT, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle/index/image/t-dongle-1.jpg', alt: 'T-Dongle front view' },
  { src: '/products/t-dongle-series/t-dongle/index/image/t-dongle-2.jpg', alt: 'T-Dongle back view' },
  { src: '/products/t-dongle-series/t-dongle/index/image/t-dongle-3.jpg', alt: 'T-Dongle dimensions' },
]" />

## Overview

LILYGO T-Dongle is a compact ESP32-based USB dongle development board. Built around the **ESP32** dual-core Xtensa LX6 processor with Wi-Fi 802.11 b/g/n and Bluetooth 4.2, the board packs a **0.96-inch ST7735 color TFT LCD** (80 × 160) into a standard USB Type-A plug form factor. It also includes a TF card slot hidden inside the USB connector, a WS2812 RGB LED, and exposes spare GPIOs for expansion. Suitable for portable IoT sensors, USB gadgets, wireless data loggers, and wearable projects.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle](https://github.com/LilyGO/T-Dongle) | ✓ | | Display, TF card, LED examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Dongle` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-A, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | Your port |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32 dual-core Xtensa LX6 @ 240 MHz, Wi-Fi 802.11 b/g/n + Bluetooth 4.2
- USB Type-A plug form factor — plug directly into any USB port
- 0.96-inch ST7735 color TFT LCD (80 × 160, 65k colors)
- TF card slot integrated inside the USB-A connector housing
- WS2812 RGB LED
- 4 MB Flash
- Compact, portable IoT and USB gadget platform
- Compatible with Arduino IDE, PlatformIO, and MicroPython

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32 (Xtensa dual-core LX6, 240 MHz) |
| Flash | 4 MB |
| PSRAM | — |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 4.2 |
| Display | 0.96-inch ST7735 TFT, 80 × 160 |
| RGB LED | WS2812 × 1 |
| Storage | TF card slot |
| USB | USB Type-A plug |
| Input Voltage | 5 V via USB |
| Dimensions | 58 × 18 × 9 mm |

![T-Dongle Specifications](/products/t-dongle-series/t-dongle/index/image/t-dongle-info.jpg)

## Pin Diagram

![T-Dongle Pinout](/products/t-dongle-series/t-dongle/index/image/t-dongle-pinout.jpg)

## Dimensions

![T-Dongle Dimensions Diagram](/products/t-dongle-series/t-dongle/index/image/t-dongle-3.jpg)

## Schematic

- [LilyGO T-Dongle GitHub Repository](https://github.com/LilyGO/T-Dongle)

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

- [LilyGO T-Dongle GitHub Repository](https://github.com/LilyGO/T-Dongle)

## FAQ

<!-- Errata and common issues. -->

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
