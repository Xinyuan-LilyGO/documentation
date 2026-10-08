---
title: T5 V2.4
show_source: false
tags: ESP32, E-Paper, 2.13inch, T5 V2.4, DEPG0213BN, GDEM0213B74, CH9102, Wi-Fi, Bluetooth, Ultra-Low-Power, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="2" :images="[
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-1.jpg', alt: 'T5 V2.4 front and back views' },
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-2.jpg', alt: 'T5 V2.4 angled view' },
]" />

## Overview

LILYGO T5 V2.4 is a compact ultra-low-power development board combining the **ESP32** dual-core processor with a **2.13-inch SPI e-paper display** (122 × 250 pixels). It supports DEPG0213BN (2 grayscale levels) and GDEM0213B74 (4 grayscale levels) display variants. The display requires power only for refreshing and retains its image when power is removed, making the board suitable for battery-powered name badges, price tags, IoT sensors, and home automation displays. The board features Wi-Fi, Bluetooth 4.2/BLE, a CH9102 USB-UART interface, and a TF card slot.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T5-Epaper-Series](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series) | ✓ | | E-paper display demos, partial refresh, GxEPD2 examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-T5-Epaper-Series` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | Your port |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Disabled** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32 dual-core Xtensa LX6 @ 240 MHz, Wi-Fi + Bluetooth
- 2.13-inch e-paper display, 122 × 250 pixels
- Supports DEPG0213BN (2 grayscale levels) and GDEM0213B74 (4 grayscale levels)
- Display retains image without power (bistable / zero standby power)
- Partial refresh support; full refresh time: ~2 seconds
- Ultra-low power deep sleep mode
- CH9102 USB-UART interface for programming
- TF card slot for local storage
- GPIO12 display power control
- 3.3 V operating voltage
- Operating temperature: 0 °C to 50 °C

## Specifications

<img src="/products/t5-series/t5-epaper-2.13inch/index/image/t5-v2.4-specifications.jpg" alt="T5 V2.4 specifications" width=100%>

| Parameter | Value |
| --- | --- |
| SOC | ESP32 (Xtensa dual-core LX6, 240 MHz) |
| Flash | 4 MB |
| PSRAM | — |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 4.2 |
| Display | 2.13-inch e-paper, 122 × 250; DEPG0213BN (2 grayscale levels) or GDEM0213B74 (4 grayscale levels) |
| Display Interface | SPI |
| Storage | TF card slot |
| USB | CH9102 USB-UART |
| Refresh | Partial refresh supported; full refresh in approximately 2 seconds |
| Power Consumption | Approximately 300 µA |
| Display Power Control | GPIO12 |
| Operating Voltage | 3.3 V |
| Operating Temperature | 0 °C to 50 °C |

## Pin Diagram

<img src="/products/t5-series/t5-epaper-2.13inch/index/image/t5-v2.4-pinmap.jpg" alt="T5 V2.4 pin diagram" width=100%>

## Dimensions

<img src="/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-3.jpg" alt="T5 V2.4 dimensions" width=100%>

## Schematic

- [T5V2.4 Schematic PDF (GitHub)](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series/blob/master/schematic/T5_2.13.pdf)

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

- [LilyGo-T5-Epaper-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series)

### Dependent Libraries

- [GxEPD2](https://github.com/ZinggJM/GxEPD2)

## FAQ

<!-- Errata and common issues. -->

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| V2.4 | | Updated product images, display variants, and USB-UART chipset |
| V2.3.1 | | Updated board layout |
| V2.3 | | Initial release |
