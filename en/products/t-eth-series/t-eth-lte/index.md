---
title: T-ETH Elite LTE Shield
show_source: false
tags: LTE, 4G, GPS, L76K, T-ETH-Elite
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lte/assets/t-eth-lte-1.jpg', alt: 'T-ETH Elite LTE Shield front view' },
  { src: '/products/t-eth-series/t-eth-lte/assets/t-eth-lte-2.jpg', alt: 'T-ETH Elite LTE Shield physical image' },
  { src: '/products/t-eth-series/t-eth-lte/assets/t-eth-lte-3.jpg', alt: 'T-ETH Elite LTE Shield pin diagram' }
]" />

## Overview

T-ETH Elite LTE Shield is a 4G cellular expansion board designed for the **T-ETH-Elite** mainboard. Integrates LTE communication and **L76K GPS** positioning, enabling remote data transmission in areas without Wi-Fi or Ethernet coverage. Compatible with T-PCIE LTE modules (T-PCIE mode: 4.2 V; official PCIE mode: 3.3 V). Combined with the T-ETH-Elite's W5500 Ethernet and PoE (36–57 V), forms an LTE + GPS + Ethernet multi-protocol hybrid hub. Suitable for industrial remote monitoring, vehicle-mounted terminals, and IoT nodes in remote areas.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-ETH-Series Examples](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master) | ✓ | | LTE and GPS examples |

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

- LTE (4G/5G) cellular expansion for T-ETH-Elite mainboard
- Compatible with T-PCIE LTE modules (T-PCIE mode: 4.2 V; official PCIE mode: 3.3 V)
- L76K GPS for precise location tracking and time synchronization
- Works with T-ETH-Elite's W5500 Ethernet, PoE (36–57 V), and Wi-Fi/BT

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| Cellular | LTE (4G/5G via T-PCIE module) |
| GPS | L76K |
| PCIE Mode | T-PCIE (4.2 V) or official PCIE (3.3 V) |
| GPIO | 40-PIN (Raspberry Pi compatible) |
| Compatible Mainboard | T-ETH-Elite |

## Pin Diagram

<img src="/products/t-eth-series/t-eth-lte/assets/t-eth-lte-3.jpg" alt="T-ETH Elite LTE Shield pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-ETH-ELite-LTE-Shield Schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite-LTE-Shield.pdf)

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
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [U8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## FAQ

* **Q. Which mainboard is required to use T-ETH Elite LTE Shield?**
  A. Designed for the **T-ETH-Elite** mainboard. Does not function standalone.

* **Q. What LTE modules are compatible?**
  A. Compatible with T-PCIE LTE modules. Supports T-PCIE mode (4.2 V) or official PCIE mode (3.3 V).

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-ETH Elite LTE Shield V1.0 | — | Initial version |
