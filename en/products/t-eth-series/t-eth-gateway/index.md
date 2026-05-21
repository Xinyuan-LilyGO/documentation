---
title: T-ETH Gateway Shield
show_source: false
tags: LoRa, GPS, Gateway, SX1302, T-ETH-Elite
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-gateway/assets/t-eth-gateway-1.jpg', alt: 'T-ETH Gateway Shield front view' },
  { src: '/products/t-eth-series/t-eth-gateway/assets/t-eth-gateway-2.jpg', alt: 'T-ETH Gateway Shield physical image' },
  { src: '/products/t-eth-series/t-eth-gateway/assets/t-eth-gateway-3.jpg', alt: 'T-ETH Gateway Shield pin diagram' }
]" />

## Overview

T-ETH Gateway Shield is a LoRa gateway expansion board designed for the **T-ETH-Elite** mainboard. Supports mainstream LoRa modules including SX1276, SX1262, SX1280, and LR1121, with optional GPS positioning (L76K). When combined with the T-ETH-Elite's W5500 Ethernet, Wi-Fi/Bluetooth, and PoE (36–57 V), it forms a complete LoRa network gateway hub. Suitable for agricultural environmental monitoring, smart city node management, and long-range low-power wide-area IoT deployments.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-ETH-Series Examples](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master) | ✓ | | LoRa gateway examples |

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

- LoRa gateway expansion for T-ETH-Elite mainboard
- Compatible with SX1276, SX1262, SX1280, LR1121 modules
- Optional L76K GPS (868/915 MHz frequency bands)
- Works with T-ETH-Elite's W5500 Ethernet, PoE (36–57 V), and Wi-Fi/BT

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| LoRa Modules | SX1276, SX1262, SX1280, LR1121 |
| GPS | L76K (optional) |
| Compatible Mainboard | T-ETH-Elite |

## Pin Diagram

<img src="/products/t-eth-series/t-eth-gateway/assets/t-eth-gateway-3.jpg" alt="T-ETH Gateway Shield pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-ETH-ELite-Gateway-Shield Schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite-Gateway-Shield.pdf)

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

* **Q. Which mainboard is required to use T-ETH Gateway Shield?**
  A. Designed for the **T-ETH-Elite** mainboard. Does not function standalone.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-ETH Gateway Shield V1.0 | — | Initial version |
