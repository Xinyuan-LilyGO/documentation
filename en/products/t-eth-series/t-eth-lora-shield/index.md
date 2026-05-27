---
title: T-ETH Elite LoRa Shield
show_source: false
tags: LoRa, GPS, L76K, T-ETH-Elite, SX1262
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lora-shield/index/image/t-eth-lora-shield-1.jpg', alt: 'T-ETH Elite LoRa Shield front view' },
  { src: '/products/t-eth-series/t-eth-lora-shield/index/image/t-eth-lora-shield-2.jpg', alt: 'T-ETH Elite LoRa Shield physical image' },
  { src: '/products/t-eth-series/t-eth-lora-shield/index/image/t-eth-lora-shield-3.jpg', alt: 'T-ETH Elite LoRa Shield pin diagram' }
]" />

## Overview

T-ETH Elite LoRa Shield is a LoRa end-node expansion board designed for the **T-ETH-Elite** mainboard. Integrates multi-band LoRa communication supporting T-LR1121, SX1262, SX1276, and SX1280 modules (covering 2.4 GHz and 830–945 MHz bands), plus **L76K GPS** positioning. Features a 40-PIN GPIO header (Raspberry Pi compatible), SPI interface (MISO/MOSI/SCLK/CS), and control pins (RST/IRQ/BUSY), 4 × M2.5 mounting holes. Combined with the T-ETH-Elite's W5500 Ethernet and PoE (36–57 V), suitable for logistics tracking, asset location, and outdoor sensor deployments.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-ETH-Series Examples](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master) | ✓ | | LoRa end node examples |

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

- LoRa end-node expansion for T-ETH-Elite mainboard
- Multi-band support: SX1262, SX1276, SX1280, T-LR1121 (2.4 GHz + 830–945 MHz)
- L76K GPS for real-time location tracking
- 40-PIN GPIO (Raspberry Pi compatible), 4 × M2.5 mounting holes

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| LoRa Modules | SX1262, SX1276, SX1280, T-LR1121 |
| LoRa Bands | 2.4 GHz + 830–945 MHz |
| GPS | L76K |
| GPIO | 40-PIN (Raspberry Pi compatible) |
| Compatible Mainboard | T-ETH-Elite |

## Pin Diagram

<img src="/products/t-eth-series/t-eth-lora-shield/index/image/t-eth-lora-shield-3.jpg" alt="T-ETH Elite LoRa Shield pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-ETH-ELite-LoRa-Shield Schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite-LoRa-Shield.pdf)

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

* **Q. Which mainboard is required to use T-ETH Elite LoRa Shield?**
  A. Designed for the **T-ETH-Elite** mainboard. Does not function standalone.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-ETH Elite LoRa Shield V1.0 | — | Initial version |
