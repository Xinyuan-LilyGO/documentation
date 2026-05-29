---
title: T-Display
show_source: false
tags: ESP32, ST7789V, TFT, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display/index/image/t-display-1.jpg', alt: 'T-Display front view' },
]" />

## Overview

LILYGO T-Display is a compact ESP32 development board with a built-in **1.14-inch ST7789V IPS TFT LCD** (240 × 135 px). Based on the ESP32 dual-core LX6 processor running at up to 240 MHz, it integrates **Wi-Fi 802.11 b/g/n** and **Bluetooth 4.2 + BLE** for wireless connectivity. The board features two programmable push buttons, a battery charging circuit, USB-C programming interface, and exposes a full set of GPIO pins. Its small footprint and integrated display make it popular for wearables, environmental monitors, and IoT dashboards.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display) | ✓ | | Display demos, TFT_eSPI examples, factory test |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `TTGO-T-Display` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | Your port |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32 dual-core LX6 @ 240 MHz, Wi-Fi 802.11 b/g/n + Bluetooth 4.2 BLE
- 1.14-inch ST7789V IPS TFT LCD, 240 × 135 px, 260 PPI
- Programmable backlight (GPIO4)
- 2 × programmable push buttons
- Battery charging circuit (supports 1S LiPo)
- USB-C for power and programming
- Compact form factor with full GPIO breakout

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-D0WDQ6, dual-core LX6 @ 240 MHz |
| Flash | 4 MB (QSPI) / 16 MB variant available |
| PSRAM | — |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 4.2 + BLE |
| Display | 1.14-inch ST7789V IPS TFT, 240 × 135 px |
| Display Interface | 4-wire SPI |
| Buttons | 2 × programmable push buttons |
| Battery | JST-PH 1.25mm connector, supports 1S LiPo |
| USB | 1 × USB-C |
| Working Voltage | 2.7 V – 4.2 V |

![T-Display Specifications](/products/t-display-series/t-display/index/image/t-display-info.jpg)

## Pin Diagram

![T-Display Pinout](/products/t-display-series/t-display/index/image/t-display-pinout.jpg)

### Display (ST7789V)

| ST7789V  | MOSI   | SCK    | CS     | DC     | RST    | BL     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32    | GPIO19 | GPIO18 | GPIO5  | GPIO16 | GPIO23 | GPIO4  |

### Buttons

| Function  | GPIO   |
| :-------: | :----: |
| Button 1  | GPIO0  |
| Button 2  | GPIO35 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T-Display V1.0 Schematic](https://github.com/Xinyuan-LilyGO/TTGO-T-Display/blob/master/schematic/ESP32-TFT(6-26).pdf)

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

* [TTGO-T-Display GitHub Repository](https://github.com/Xinyuan-LilyGO/TTGO-T-Display)

### Dependent Libraries

* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

## FAQ

<!-- Errata and common issues. -->

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| V1.0 | | Initial release |
