---
title: T-Dongle-S3-Dual
show_source: false
tags: ESP32-S3, USB Dongle, Dual MCU, TFT, Wi-Fi, Bluetooth, APA102, TF Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-s3" />

<ImageGallery :columns="1" :images="[
  { src: '/products/t-dongle-series/t-dongle-s3-dual/index/image/t-dongle-s3-dual-1.png', alt: 'T-Dongle-S3-Dual product image' },
]" />

## Overview

T-Dongle-S3-Dual is the dual ESP32-S3 version in the T-Dongle-S3 series, using a USB Type-A dongle form factor. It integrates two ESP32-S3 MCUs. Each MCU has 16MB Quad-SPI Flash and 512KB SRAM, with no PSRAM. Onboard peripherals include APA102 RGB LED, TF card slot, and BOOT button. It is suitable for dual-MCU communication, USB gadgets, portable displays, and wireless IoT experiments.

## Quick Start

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-S3](https://github.com/Xinyuan-LilyGO/T-Dongle-S3) | ✓ | | Dual, display, TF card, LED, QWIIC examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [PlatformIO IDE](https://platformio.org/)
2. Clone and open the official repository:

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

3. Select the Dual environment and example in `platformio.ini`
4. Click **Build**, plug in the device, then click **Upload**

### Arduino

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB CDC On Boot | Enable |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Disabled** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |

> **Note:** Both ESP32-S3 MCUs on T-Dongle-S3-Dual have no PSRAM. Set PSRAM to **Disabled** in Arduino IDE.

## Key Features

- Dual ESP32-S3 MCUs
- 16MB Quad-SPI Flash and 512KB SRAM per MCU, no PSRAM
- USB Type-A dongle form factor
- APA102 RGB LED
- TF card slot using SDMMC pins
- BOOT button for custom functions or download mode

## Specifications

| Parameter | Value |
| --- | --- |
| MCU | ESP32-S3 × 2 |
| Flash | 16MB (Quad-SPI) × 2 |
| SRAM | 512KB × 2 |
| PSRAM | No PSRAM |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 5 LE |
| RGB LED | APA102 × 1 |
| Storage | TF card slot |
| USB Input Voltage | 4.8V ~ 5.5V |
| USB Max Current | 1000mA |
| USB | USB Type-A plug |

## Pin Diagram

### ESP Core 1

| Name | GPIO |
| --- | --- |
| Core 1 RGB DIN | GPIO40 |
| Core 1 RGB CLK | GPIO39 |
| Core 1 SDMMC D0 | GPIO14 |
| Core 1 SDMMC D1 | GPIO17 |
| Core 1 SDMMC D2 | GPIO21 |
| Core 1 SDMMC D3 | GPIO18 |
| Core 1 SDMMC CLK | GPIO12 |
| Core 1 SDMMC CMD | GPIO16 |
| Core 1 Button | GPIO0 |

### ESP Core 2

| Name | GPIO |
| --- | --- |
| Core 2 RGB DIN | GPIO40 |
| Core 2 RGB CLK | GPIO39 |

## Schematic

- [T-Dongle-S3-Dual Schematic](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/schematic/T-Dongle-S3-DUAL.pdf)

## Datasheet

- [ST7735 Display Datasheet](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/ST773_datasheet.pdf)
- [APA102 Datasheet](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/APA102%202020%20256%206A.pdf)

## Software Libraries

- [T-Dongle-S3 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Dongle-S3)
