---
title: T-Dongle-S3
show_source: false
tags: ESP32-S3, USB Dongle, TFT, Wi-Fi, Bluetooth, APA102, TF Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-1.jpg', alt: 'T-Dongle-S3 front view' },
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-2.jpg', alt: 'T-Dongle-S3 back view' },
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-3.jpg', alt: 'T-Dongle-S3 dimensions' },
]" />

## Overview

LILYGO T-Dongle-S3 is an ESP32-S3 USB dongle development board in a USB Type-A plug form factor, suitable for USB gadgets, portable displays, data logging, and IoT education projects. It uses the **ESP32-S3** with **16MB Quad-SPI Flash** and **512KB SRAM**, and has **no PSRAM**. Onboard peripherals include a 0.96-inch ST7735 SPI color display (160 × 80), APA102 RGB LED, TF card slot, BOOT button, and QWIIC connector.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-S3](https://github.com/Xinyuan-LilyGO/T-Dongle-S3) | ✓ | | Display, TF card, LED, QWIIC examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code, then restart VS Code
3. Open the `T-Dongle-S3` project folder
4. Enable `default_envs = T-Dongle-S3` in `platformio.ini`
5. Keep only one valid `src_dir = xxxx` example path
6. Click **✓** to build, plug in the device, then click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32 Core 3.3.0 or later](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Copy all folders in the project `lib` directory to the Arduino Sketchbook libraries directory
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240MHz (WiFi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Arduino Runs On | Core1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Disabled** |
| Upload Speed | 921600 |
| Programmer | **Esptool** |
| USB Mode | **Hardware CDC and JTAG** |

> **Note:** For examples with USB in the name, set USB Mode to **USB-OTG (TinyUSB)**. If upload fails, hold the BOOT button while plugging the T-Dongle-S3 into the computer USB port to enter download mode.

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3, Wi-Fi 802.11 b/g/n + Bluetooth 5 LE
- 16MB Quad-SPI Flash, 512KB SRAM, no PSRAM
- USB Type-A dongle form factor
- 0.96-inch ST7735 SPI color display, 160 × 80 resolution
- APA102 RGB LED, BGR color order
- TF card slot using SDMMC pins
- QWIIC connector configured for serial port function by default
- BOOT button for custom functions or download mode

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3 |
| Flash | 16MB (Quad-SPI) |
| SRAM | 512KB |
| PSRAM | No PSRAM |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 5 LE |
| Display | 0.96-inch ST7735 (SPI), 160 × 80 |
| RGB LED | APA102 × 1, BGR |
| Storage | TF card slot |
| USB Input Voltage | 4.8V ~ 5.5V |
| USB Max Current | 800mA |
| USB | USB Type-A plug |
| QWIIC | Serial port function by default; add external pull-up resistors for I2C |

![T-Dongle-S3 Specifications](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-info.jpg)

## Pin Diagram

| Name | GPIO |
| --- | --- |
| RGB DIN | GPIO40 |
| RGB CLK | GPIO39 |
| SDMMC D0 | GPIO14 |
| SDMMC D1 | GPIO17 |
| SDMMC D2 | GPIO21 |
| SDMMC D3 | GPIO18 |
| SDMMC CLK | GPIO12 |
| SDMMC CMD | GPIO16 |
| Button | GPIO0 |
| QWIIC TX | GPIO43 |
| QWIIC RX | GPIO44 |

![T-Dongle-S3 Pinout](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-pinout.jpg)

## QWIIC Connector

The QWIIC connector is configured for serial port function by default. To use it for I2C, add pull-up resistors to the external sensor.

## Dimensions

![T-Dongle-S3 Dimensions Diagram](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-3.jpg)

## Schematic

- [T-Dongle-S3 GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/tree/main/schematic)

## Datasheet

- [ST7735 Display Datasheet](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/ST773_datasheet.pdf)
- [APA102 Datasheet](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/APA102%202020%20256%206A.pdf)

## Software Libraries

- [T-Dongle-S3 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Dongle-S3)

## FAQ

* **Q. Upload keeps failing?**  
  A. Hold the BOOT button while plugging the T-Dongle-S3 into the computer USB port to enter download mode. After flashing, unplug and power it again. Do not hold BOOT while powering on for normal startup.

* **Q. Can QWIIC be used as I2C directly?**  
  A. QWIIC is configured for serial port function by default. To use I2C, add pull-up resistors to the external sensor.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
