---
title: T5 ePaper 2.13inch
show_source: false
tags: ESP32, E-Paper, 2.13inch, SSD1680, Wi-Fi, Bluetooth, Ultra-Low-Power, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-1.jpg', alt: 'T5 ePaper 2.13inch front view' },
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-2.jpg', alt: 'T5 ePaper 2.13inch back view' },
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-3.jpg', alt: 'T5 ePaper 2.13inch dimensions' },
]" />

## Overview

LILYGO T5 ePaper 2.13inch is a compact ultra-low-power development board combining the **ESP32** dual-core processor with a **2.13-inch SSD1680 e-paper display** (212 × 104 pixels, black and white, 2 grayscale levels). The display requires power only for refreshing and retains its image indefinitely when power is removed, making this board ideal for battery-powered name badges, price tags, IoT sensors, and home automation displays. The board features Wi-Fi and Bluetooth connectivity, onboard USB-UART (CP2102), and a TF card slot.

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
- 2.13-inch SSD1680 e-paper display, 212 × 104 pixels, black & white
- Display retains image without power (bistable / zero standby power)
- Full refresh time: ~8 seconds
- Ultra-low power deep sleep mode
- USB-UART (CP2102) for programming
- TF card slot for local storage
- 3.3 V operating voltage
- Operating temperature: -20 °C to 60 °C

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32 (Xtensa dual-core LX6, 240 MHz) |
| Flash | 4 MB |
| PSRAM | — |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 4.2 |
| Display | 2.13-inch SSD1680 e-paper, 212 × 104, black & white |
| Display Interface | SPI |
| Storage | TF card slot |
| USB | CP2102 USB-UART |
| Operating Voltage | 3.3 V |
| Operating Temperature | -20 °C to 60 °C |

## Pin Diagram

<!-- GPIO mapping table. -->

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [T5V2.3 Schematic PDF (GitHub)](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series/blob/master/schematic/T5V2.3.pdf)
- [T5V2.4 Schematic PDF (GitHub)](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series/blob/master/schematic/T5V2.4.pdf)

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
| V2.3.1 | | Updated board layout |
| V2.3 | | Initial release |
