---
title: T-Display S3 Pro LR1121
show_source: false
tags: ESP32-S3, AMOLED, LoRa, LR1121
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-pro-lr1121/index/image/t-display-s3-pro-lr1121-1.jpg', alt: 'T-Display S3 Pro LR1121 front view' },
  { src: '/products/t-display-series/t-display-s3-pro-lr1121/index/image/t-display-s3-pro-lr1121-2.jpg', alt: 'T-Display S3 Pro LR1121 physical image' },
  { src: '/products/t-display-series/t-display-s3-pro-lr1121/index/image/t-display-s3-pro-lr1121-3.jpg', alt: 'T-Display S3 Pro LR1121 pin diagram' }
]" />

## Overview

T-Display S3 Pro LR1121 is a highly integrated development board based on **ESP32-S3R8** (16 MB Flash, 8 MB PSRAM). Equipped with a **1.91-inch RM67162 IPS AMOLED** display (SPI/QSPI) with optional capacitive touch, **LR1121** multi-band LoRa module, **AXPM65611 + BQ25896** power management, **PCF85063ATL** RTC, TF card, and STEMMA QT/QWIIC expansion. Suitable for smart wearables, IoT terminals, and scenarios requiring display interaction with long-range wireless communication, in a compact 60 × 32 × 12 mm form factor.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) | ✓ | | Factory and display examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-AMOLED-Series` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3R8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 1.91-inch RM67162 IPS AMOLED, SPI/QSPI, optional capacitive touch
- LR1121 multi-band LoRa (sub-GHz + 2.4 GHz)
- AXPM65611 + BQ25896 power management, PCF85063ATL RTC
- TF card, STEMMA QT/QWIIC, expansion header (see pin diagram)
- 60 × 32 × 12 mm, 4 × 2 mm positioning holes

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| LoRa | LR1121 (multi-band) |
| Display | 1.91-inch RM67162 IPS AMOLED |
| Touch | Optional capacitive touch |
| Power Management | AXPM65611 + BQ25896 |
| RTC | PCF85063ATL |
| Storage | TF card slot |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | STEMMA QT/QWIIC; pictured header: 3V3, GPIO1, GPIO2, GPIO46, GPIO45, GPIO42, BAT, VBUS, GND |
| Mounting Holes | 4 × 2 mm |
| Dimensions | 60 × 32 × 12 mm |

## Pin Diagram

<img src="/products/t-display-series/t-display-s3-pro-lr1121/index/image/t-display-s3-pro-lr1121-3.jpg" alt="T-Display S3 Pro LR1121 pin diagram" width=100%>

### LR1121 Shield Pin Assignments

The following assignments apply to the LR1121 Shield shown above. All GPIO numbers refer to the ESP32-S3.

| Peripheral | Signal | GPIO |
| :-- | :-- | :-- |
| LR1121 | BUSY | GPIO46 |
| LR1121 | INT | GPIO40 |
| LR1121 | SCLK | GPIO18 |
| LR1121 | MOSI | GPIO17 |
| LR1121 | MISO | GPIO8 |
| LR1121 | CS / NSS | GPIO7 |
| LR1121 | RST | GPIO10 |
| MAX98357A amplifier | BCLK | GPIO4 |
| MAX98357A amplifier | LRCLK | GPIO15 |
| MAX98357A amplifier | DATA | GPIO11 |
| MAX98357A amplifier | SD_MODE | GPIO41 |
| Microphone | LRCLK | GPIO1 |
| Microphone | DATA | GPIO2 |
| Microphone | EN | GPIO3 |
| RTC | SDA | GPIO5 |
| RTC | SCL | GPIO6 |
| RTC | INT | GPIO21 |
| RT9080 power | EN | GPIO42 |
| Vibration motor | DATA | GPIO45 |
| Button | Upper button on the right in the diagram | GPIO12 |
| Button | Lower button on the right in the diagram | GPIO16 |

The buttons on the left are RESET and BOOT. From left to right in the header view, the pins are **3V3, GPIO1, GPIO2, GPIO46, GPIO45, GPIO42, BAT, VBUS, GND**. The two QWIIC connectors sit on either side of USB-C.

Header pins GPIO1, GPIO2, GPIO46, GPIO45, and GPIO42 are shared with the microphone, LR1121 BUSY, vibration motor, or power enable. Check for conflicts with onboard functions before connecting peripherals. GPIO46 is input-only.

**Antenna rotation:** Rotate the antennas toward the screen only, up to 180°. Do not rotate them backward.

## Dimension Diagram

## Schematic

* [T-Display S3 AMOLED Plus Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/schematic/T-Display-S3-AMOLED-Plus.pdf)

## Datasheet

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)

## Software Development

* [LilyGo-AMOLED-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)

### Dependent Libraries

* [lvgl-8.3.9](https://github.com/lvgl/lvgl)
* [AceButton](https://github.com/bxparks/AceButton)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button, then press the **RST** button once, then click Upload to enter download mode.

* **Q. Which frequency bands does the LR1121 LoRa module support?**
  A. The LR1121 supports multiple sub-GHz bands (433/868/915 MHz) and 2.4 GHz. Select the appropriate band according to regional regulations.

* **Q. How to connect external sensors?**
  A. Use the onboard STEMMA QT/QWIIC interfaces for compatible sensors. When using the expansion header, follow the pin assignments above and account for GPIOs shared with onboard peripherals.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Display-S3-Pro-LR1121 V1.0 | 2024-01-01 | Initial version |
