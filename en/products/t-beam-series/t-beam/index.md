---
title: T-Beam
show_source: false
tags: ESP32, LoRa, SX1276, SX1278, GPS, OLED, AXP192, Meshtastic, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-1.jpg', alt: 'T-Beam front view' },
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-2.jpg', alt: 'T-Beam back view' },
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-3.jpg', alt: 'T-Beam dimensions' },
]" />

## Overview

LILYGO T-Beam is a feature-rich ESP32-based development board combining LoRa long-range wireless communication, GPS positioning, and battery management in a single compact form factor. Based on the **ESP32** dual-core LX6 processor with Wi-Fi and Bluetooth 4.2, it integrates an **SX1276/SX1278 LoRa** module (433/868/915 MHz), a **GPS module** (NEO-6M or compatible), a **0.96-inch SSD1306 OLED** display (128×64), and an **AXP192 PMU** with 18650 battery holder. Widely used for Meshtastic mesh networking, APRS tracking, LoRaWAN nodes, and portable IoT applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa, GPS, OLED, PMU examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-LoRa-Series` project folder
4. Open `platformio.ini`, uncomment the T-Beam environment under `default_envs`
5. Click **✓** to compile, connect via USB, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Copy all folders from the `lib` directory to your Arduino libraries folder
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | Your port |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| Upload Speed | 921600 |

5. In `utilities.h`, uncomment your board model, then click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32 dual-core LX6 @ 240 MHz, Wi-Fi 802.11 b/g/n + Bluetooth 4.2 BLE
- SX1276 / SX1278 LoRa (433/868/915 MHz), long-range low-power communication
- GPS module (NEO-6M or compatible) for location tracking
- 0.96-inch SSD1306 OLED display (128×64, I2C)
- AXP192 PMU — 18650 battery holder with charging
- Micro USB for programming and power
- Meshtastic compatible

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32, Dual-core LX6 @ 240 MHz |
| Flash | 4 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 4.2 + BLE |
| LoRa | SX1276 / SX1278, 433/868/915 MHz |
| GPS | NEO-6M or compatible |
| Display | 0.96-inch SSD1306 OLED, 128×64, I2C |
| PMU | AXP192 |
| Battery | 18650 Li-Ion holder |
| USB | 1 × Micro USB |

![](/products/t-beam-series/t-beam/index/image/t-beam-info.jpg)

## Pin Diagram

![](/products/t-beam-series/t-beam/index/image/t-beam-pinout.jpg)
<!-- PCB pin diagram image. -->

## Dimensions

![](/products/t-beam-series/t-beam/index/image/t-beam-3.jpg)
<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [LilyGo-LoRa-Series Hardware](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/schematic)

## Datasheet

* [ESP32 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
* [SX1276 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)

## Software Libraries

* [LilyGo-LoRa-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### Dependent Libraries

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## FAQ

* **Q. Which LoRa frequency should I use?**
  A. 433 MHz is common in Asia; 868 MHz in Europe; 915 MHz in North America. Match the frequency to your region's regulations.

* **Q. Cannot flash firmware?**
  A. Hold the **BOOT** button, press and release **RST**, then click Upload.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
| V1.1 | | Added AXP192 PMU |
