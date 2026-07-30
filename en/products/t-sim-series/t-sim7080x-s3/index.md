---
title: T-SIM7080X-S3
show_source: false
tags: ESP32-S3, SIM7080G, NB-IoT, Cat-M1, GNSS, GPS, IoT, LTE
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim7080-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-1.jpg', alt: 'T-SIM7080X-S3 front view' },
  { src: '/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-2.jpg', alt: 'T-SIM7080X-S3 back view' },
  { src: '/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-3.jpg', alt: 'T-SIM7080X-S3 dimensions' },
  { src: '/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-info-1.jpg', alt: 'T-SIM7080X-S3 specifications part 1' },
  { src: '/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-info-2.jpg', alt: 'T-SIM7080X-S3 specifications part 2' },
]" />

## Overview

LILYGO T-SIM7080X-S3 is a compact IoT development board combining the **ESP32-S3** dual-core LX7 processor with the **SIM7080G** multi-band Cat-M / NB-IoT module. It adds Wi-Fi 4, Bluetooth 5.0 LE, and optional GNSS positioning, making it well-suited for low-power wide-area network (LPWAN) applications such as asset tracking, smart metering, and remote sensor nodes. The board integrates an onboard PMU with short-circuit and overload protection, an 18650 battery holder, a solar charging input (4.4 V–6 V), a TF card slot, and a nano SIM slot. Two USB ports are provided: USB-C for ESP32-S3 programming and a Micro-USB port dedicated to SIM7080G firmware upgrades.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-SIM7080G](https://github.com/Xinyuan-LilyGO/LilyGo-T-SIM7080G) | ✓ | | NB-IoT, Cat-M, GPS, BLE5, deep sleep examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-T-SIM7080G` project folder
4. Select your target example in `platformio.ini`
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, Wi-Fi 4 + Bluetooth 5.0 LE
- SIM7080G multi-band Cat-M1 / NB-IoT module (global frequency bands)
- GNSS positioning (GPS, optional concurrent with data — note: Cat-M/NB and GPS cannot run simultaneously)
- Solar charging input 4.4 V–6 V for off-grid deployment
- 18650 battery holder with onboard PMU (short circuit + overload protection)
- TF card slot and nano SIM card slot
- USB-C for programming; Micro-USB for SIM7080G firmware upgrade
- 16 MB Flash, 8 MB PSRAM (Octal SPI — GPIO 35–37 reserved)

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3 dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wireless | Wi-Fi 4 (2.4 GHz 802.11 b/g/n), Bluetooth 5.0 LE |
| Cellular | SIM7080G — Cat-M1 / NB-IoT (multi-band global) |
| GNSS | GPS (via SIM7080G, not concurrent with cellular data) |
| SIM | Nano SIM |
| Storage | TF card slot |
| Power | USB-C, 18650 battery, solar input 4.4 V–6 V |
| USB | USB-C (ESP32-S3) + Micro-USB (SIM7080G firmware) |
| Weight | <!-- placeholder --> |
| Package size | <!-- placeholder --> |

![T-SIM7080X-S3 Specifications Part 1](/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-info-1.jpg)

![T-SIM7080X-S3 Specifications Part 2](/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-info-2.jpg)

## Pin Diagram

![T-SIM7080X-S3 Pinout](/products/t-sim-series/t-sim7080x-s3/index/image/t-sim7080x-s3-pinout.jpg)

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T-SIM7080G Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-T-SIM7080G/blob/master/schematic/T-SIM7080G_Schematic.pdf)

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

* [LilyGo-T-SIM7080G GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T-SIM7080G)

## FAQ

- **SIM card not detected:** Insert the SIM card before powering on. Hot-inserting after the SIM7080G has started will not be detected.
- **Turning off the board:** Press and hold PWRKEY for 6 seconds to power off; press for 128 ms to power on.
- **GPIO 35–37 unavailable:** These pins are used internally by the Octal SPI PSRAM.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
