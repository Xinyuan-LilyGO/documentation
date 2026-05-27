---
title: T5
show_source: false
tags: ESP32, E-Paper, 4.7inch, Wi-Fi, Bluetooth, IoT, Ultra-Low-Power
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5/index/image/t5-1.jpg', alt: 'T5 front view' },
  { src: '/products/t5-series/t5/index/image/t5-2.jpg', alt: 'T5 back view' },
]" />

## Overview

LILYGO T5 is an ultra-low-power development board built around the **ESP32** dual-core processor paired with a **4.7-inch ED047TC1 e-paper display** (960 × 540, 16-level grayscale). The display supports partial refresh and retains its image with zero power, making the T5 ideal for battery-operated dashboards, smart labels, weather stations, and IoT devices. An onboard **PCF8563 RTC** enables timed wake-ups from deep sleep, and a TF card slot provides local storage. The board ships in two battery connector variants: a PH 2.0 JST interface and an 18650 cell holder.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-EPD47](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47) | ✓ | ✓ | EPD47 display driver, weather station, partial refresh demos |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-EPD47` project folder
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
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enabled** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32 dual-core Xtensa LX6 @ 240 MHz, Wi-Fi + Bluetooth
- 4.7-inch ED047TC1 e-paper display, 960 × 540 resolution, 16-level grayscale
- Partial refresh support for fast screen updates
- Ultra-low power: ~170 µA in deep sleep
- PCF8563 RTC for scheduled wake-up
- TF card slot for local data storage
- PH 2.0 JST or 18650 battery connector options
- BQ25896 battery management IC
- USB programming interface

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32 (Xtensa dual-core LX6, 240 MHz) |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 4.2 |
| Display | 4.7-inch ED047TC1 e-paper, 960 × 540, 16-level grayscale |
| RTC | PCF8563 |
| Storage | TF card slot |
| Battery | PH 2.0 JST or 18650 holder |
| Deep Sleep Current | ~170 µA |
| USB | 1 × USB (programming) |

## Pin Diagram

<!-- GPIO mapping table. -->

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [LilyGo-EPD47 Schematic (GitHub)](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47/tree/master/hardware)

## Datasheet

- [ED047TC1 E-Paper Datasheet (GitHub)](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47/tree/master/docs)

## Software Libraries

- [LilyGo-EPD47 GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47)

### Dependent Libraries

- [GxEPD2](https://github.com/ZinggJM/GxEPD2)

## FAQ

<!-- Errata and common issues. -->

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| V1.0 | | Initial release |
