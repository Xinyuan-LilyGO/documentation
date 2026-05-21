---
title: T-ETH Elite
show_source: false
tags: ESP32-S3, Ethernet, PoE, W5500, LoRa, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-elite/assets/t-eth-elite-1.jpg', alt: 'T-ETH Elite front view' },
  { src: '/products/t-eth-series/t-eth-elite/assets/t-eth-elite-2.jpg', alt: 'T-ETH Elite physical image' },
  { src: '/products/t-eth-series/t-eth-elite/assets/t-eth-elite-3.jpg', alt: 'T-ETH Elite pin diagram' }
]" />

## Overview

T-ETH Elite is a high-performance IoT development board based on **ESP32-S3R8** (16 MB Flash, 8 MB PSRAM). Integrates **W5500 Ethernet** controller and **PoE (IEEE 802.3af Class 0, 36–57 V)**, **40-PIN GPIO** (Raspberry Pi compatible), TF card slot (SPI), USB OTG (Type-C), and UART. Supports hybrid wired/wireless networking (Wi-Fi + BT + Ethernet). Stackable with expansion boards: LoRa gateway (SX1302), LoRa end node, and LTE modules. 50 × 67 × 17 mm.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-ETH-Series Examples](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) | ✓ | | Ethernet, LoRa gateway, LTE examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGO-T-ETH-Series](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) repository
4. Open `platformio.ini` and uncomment the desired example
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Disabled** |
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

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3R8 dual-core LX7 @ 240 MHz, 16 MB Flash, 8 MB PSRAM, Wi-Fi + BT 5.0
- W5500 Ethernet + PoE (IEEE 802.3af Class 0, 36–57 V input)
- 40-PIN GPIO (Raspberry Pi compatible layout)
- Stackable expansion: LoRa gateway (SX1302/SX1262/SX1276), LoRa end node, LTE (4G/5G)
- TF card (SPI), USB OTG, 50 × 67 × 17 mm, 4 × M2.5 mounting holes

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Ethernet | W5500 (TCP/UDP/IPv4) |
| PoE | IEEE 802.3af Class 0, 36–57 V |
| GPIO | 40-PIN (Raspberry Pi compatible) |
| Storage | TF card slot (SPI) |
| USB | 1 × Type-C (USB + OTG) |
| Buttons | RESET + BOOT + OTG switch + IO38 |
| Mounting Holes | 4 × M2.5 |
| Dimensions | 50 × 67 × 17 mm |

## Pin Diagram

<img src="/products/t-eth-series/t-eth-elite/assets/t-eth-elite-en.jpg" alt="T-ETH Elite pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-ETH-Elite Schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Software Development

* [LilyGO-T-ETH-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series)

### Dependent Libraries

* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [ETHClass2](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/lib/ETHClass2)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [U8g2](https://github.com/olikraus/u8g2)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. What is the PoE input voltage range?**
  A. IEEE 802.3af Class 0, 36–57 V. Use a PoE-capable switch or injector.

* **Q. How do I configure the LoRa gateway?**
  A. Connect to the ESP32 hotspot (SSID: `LilyGo-Gateway`, password: `12345678`), open `192.168.4.1`, configure the frequency plan, NS host (e.g., TTN), and gateway ID, then click Apply and Restart.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-ETH Elite V1.0 | — | Initial version |
