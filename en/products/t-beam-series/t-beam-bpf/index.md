---
title: T-Beam-BPF
show_source: false
tags: ESP32-S3, LoRa, SX1278, BPF, GPS, OLED, AXP2101, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-1.jpg', alt: 'T-Beam-BPF front view' },
  { src: '/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-2.jpg', alt: 'T-Beam-BPF back view' },
]" />

## Overview

LILYGO T-Beam-BPF is a variant of the T-Beam series featuring an integrated **Band-Pass Filter (BPF)** for improved LoRa signal reception in the **144–148 MHz VHF band**. Based on the **ESP32-S3** dual-core LX7 with Wi-Fi and Bluetooth 5.0, it pairs with the **SX1278 LoRa** module to deliver enhanced selectivity and noise rejection — ideal for amateur radio, APRS, and interference-prone environments. Includes a **0.96-inch SSD1306 OLED**, GPS module, **AXP2101 PMU**, and 18650 battery support.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa, GPS, OLED, PMU examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-LoRa-Series` project folder
4. Open `platformio.ini`, uncomment the T-Beam-BPF environment
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Size | **8MB (64Mb)** |
| Partition Scheme | **8M Flash (3MB APP/1.5MB SPIFFS)** |
| PSRAM | **QSPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- SX1278 LoRa with integrated Band-Pass Filter (144–148 MHz VHF)
- Enhanced signal selectivity and noise immunity
- 0.96-inch SSD1306 OLED (128 × 64, I2C)
- GPS module for location tracking
- AXP2101 power management unit
- 18650 battery holder with charging support
- USB-C for programming and power

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3, Dual-core LX7 @ 240 MHz |
| Flash | 8 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 5.0 |
| LoRa | SX1278 with BPF, 144–148 MHz VHF |
| Display | 0.96-inch SSD1306 OLED, 128 × 64, I2C |
| GPS | L76K or compatible |
| PMU | AXP2101 |
| Battery | 18650 Li-Ion holder |
| USB | 1 × USB-C |

## Pin Diagram

<!-- GPIO mapping table. -->

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [LilyGo-LoRa-Series Hardware](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/schematic)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1278 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1278)

## Software Libraries

* [LilyGo-LoRa-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### Dependent Libraries

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## FAQ

* **Q. What is the BPF (Band-Pass Filter)?**
  A. The built-in band-pass filter limits the receivable frequency range to 144–148 MHz VHF, effectively reducing out-of-band interference and improving reception sensitivity in dense RF environments.

* **Q. Can it be used for APRS?**
  A. Yes. The 144 MHz VHF band is the standard APRS frequency in most regions, and the BPF is specifically designed for this application.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
