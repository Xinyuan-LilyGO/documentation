---
title: T8
show_source: false
tags: ESP32, WROVER, PSRAM, Wi-Fi, Bluetooth, MicroPython, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t8" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t8-series/t8/index/image/t8-1.jpg', alt: 'T8 front view' },
  { src: '/products/t8-series/t8/index/image/t8-2.jpg', alt: 'T8 back view' },
  { src: '/products/t8-series/t8/index/image/t8-3.jpg', alt: 'T8 dimensions' },
]" />

## Overview

LILYGO T8 is an ESP32-WROVER based development board featuring **8 MB PSRAM**, 4 MB Flash, Wi-Fi, and Bluetooth 4.2. It includes a MicroSD card slot, battery management, USB-to-UART via CH9102F, and a 3D antenna. The combination of ample PSRAM and Flash makes it well suited for MicroPython, image processing, and data-intensive IoT applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO-T8-ESP32](https://github.com/LilyGO/TTGO-T8-ESP32) | ✓ | | SD card, audio, PSRAM examples |

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. In **Tools → Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| Flash Frequency | **80 MHz** |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |

3. Click **Upload**

## Key Features

- ESP32-WROVER dual-core Xtensa LX6 @ 240 MHz, Wi-Fi + Bluetooth 4.2
- 4 MB QSPI Flash, 8 MB PSRAM
- MicroSD (TF) card slot
- Battery management with Li-Po charging
- CH9102F USB-to-UART (Micro USB)
- 3D antenna
- MicroPython support
- Operating voltage: 2.3–3.6 V

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-WROVER (Xtensa dual-core LX6, 240 MHz) |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 4.2 + BLE |
| USB Serial | CH9102F |
| Storage | MicroSD card slot |
| USB | 1 × Micro USB |
| Operating Voltage | 2.3–3.6 V |
| Dimensions | 65 × 26 × 10 mm |


![T8 Specifications](/products/t8-series/t8/index/image/t8-info.jpg)

### Pinout Diagram

![T8 Pinout](/products/t8-series/t8/index/image/t8-pinout.jpg)

## Schematic

* [TTGO-T8-ESP32 GitHub Repository](https://github.com/LilyGO/TTGO-T8-ESP32)

## Datasheet

* [ESP32 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)

## Software Libraries

* [TTGO-T8-ESP32 GitHub Repository](https://github.com/LilyGO/TTGO-T8-ESP32)

## FAQ

* **Q. How do I enable PSRAM?**
  A. In Arduino IDE, set PSRAM to Enabled. In ESP-IDF, enable SPIRAM support in menuconfig.

* **Q. Does it support MicroPython?**
  A. Yes. Flash MicroPython firmware from [micropython.org](https://micropython.org/download/esp32/).

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| T8 V1.7 | | Initial release |
| T8 V1.8 | | Hardware revision |
