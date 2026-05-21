---
title: T-SX1302
show_source: false
tags: LoRa, SX1302, Gateway, T-ETH-Elite
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-1302/assets/t-eth-1302-1.jpg', alt: 'T-SX1302 front view' },
  { src: '/products/t-eth-series/t-eth-1302/assets/t-eth-1302-2.jpg', alt: 'T-SX1302 physical image' },
  { src: '/products/t-eth-series/t-eth-1302/assets/t-eth-1302-3.jpg', alt: 'T-SX1302 module information' }
]" />

## Overview

T-SX1302 is a LoRa gateway expansion board designed to work with the **T-ETH-Elite** mainboard. Built around the **SX1302** chip, it offers low power consumption, high data rate, high sensitivity, high reliability, ultra-low noise, and long-distance communication. Supports LoRa gateway, LoRa end node, LTE cellular network, and multi-protocol integration operating modes when combined with the T-ETH-Elite mainboard.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-SX1302 Examples](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master) | ✓ | | LoRa gateway and end node examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGO-T-ETH-Series](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) repository
4. Open `platformio.ini` and uncomment the desired example
5. Click **✓** to compile, click **→** to upload

### Arduino

Refer to the [T-ETH-Elite](../t-eth-elite/index.md) Quick Start guide for Arduino board settings.

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Video

## Key Features

- SX1302 LoRa gateway chip: low power, high sensitivity, ultra-low noise
- Designed as expansion board for T-ETH-Elite mainboard
- Supports LoRa gateway and LoRa end node operating modes

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| LoRa Chip | SX1302 |
| Communication | LoRa (gateway/end node) |
| Compatible Mainboard | T-ETH-Elite |

## Pin Diagram

## Dimension Diagram

## Schematic

## Datasheet

## Software Development

* [LilyGO-T-ETH-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series)

### Dependent Libraries

* [AceButton](https://github.com/bxparks/AceButton)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## FAQ

* **Q. Which mainboard is required to use T-SX1302?**
  A. T-SX1302 is designed as an expansion module for the **T-ETH-Elite** mainboard. It does not function standalone.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-SX1302 V1.0 | — | Initial version |
