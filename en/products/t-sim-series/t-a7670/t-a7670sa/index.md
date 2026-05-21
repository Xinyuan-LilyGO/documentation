---
title: T-A7670SA
show_source: false
tags: ESP32, LTE, A7670SA, 4G, South America, Australia, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-a7670/t-a7670sa/assets/t-a7670sa-1.jpg', alt: 'T-A7670SA front view' },
  { src: '/products/t-sim-series/t-a7670/t-a7670sa/assets/t-a7670sa-2.jpg', alt: 'T-A7670SA physical image' },
  { src: '/products/t-sim-series/t-a7670/t-a7670sa/assets/a7670sa.jpg', alt: 'T-A7670SA pin diagram' }
]" />

## Overview

T-A7670SA R2 is a 4G LTE Cat1 IoT development board based on **ESP32-WROVER-E** (4 MB Flash, 8 MB PSRAM) and the **A7670SA** cellular module. Designed specifically for South America, New Zealand, and Australia — supports LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66 and GSM 850/900/1800/1900 MHz. Features Nano SIM slot, GPIO, ADC/DAC, capacitive touch, I2C, SPI, UART, TF card, 18650 battery support, and 2 × 16-pin 2.54 mm IO expansion. 111 × 34 × 19 mm. Optional GPS version available.

> The differences between T-A76xx series variants are described in the [SIM comparison table](../../sim.md).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGO-T-A76XX Examples](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX) | ✓ | | LTE, GPS, AT command examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGO-T-A76XX](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX) repository
4. Open `platformio.ini` and uncomment the desired example
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | 240 MHz (WiFi/BT) |
| Flash Frequency | 80 MHz |
| Flash Mode | QIO |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **default 4MB with spiffs (1.2MB APP/1.5MB spiffs)** |
| PSRAM | **Enabled** |
| Core Debug Level | None |

4. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Video

## Key Features

- ESP32-WROVER-E @ 240 MHz, 4 MB Flash, 8 MB PSRAM, Wi-Fi + BT 5.0
- A7670SA LTE Cat1: B1/B2/B3/B4/B5/B7/B8/B28/B66, GSM 850/900/1800/1900 MHz
- Designed for South America, New Zealand, Australia; RCM/Anatel certified
- TF card, 18650 battery, 2 × 16-pin 2.54 mm expansion, 111 × 34 × 19 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-WROVER-E @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Cellular | A7670SA LTE Cat1 |
| LTE-FDD | B1/B2/B3/B4/B5/B7/B8/B28/B66 |
| GSM | 850/900/1800/1900 MHz |
| Regions | South America, New Zealand, Australia |
| Certifications | RoHS/CE(RED)/FCC/REACH/OCD(Anatel)/RCM |
| SIM | Nano SIM |
| Storage | TF card, 18650 battery holder |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | 2 × 16-pin 2.54 mm IO |
| Mounting Holes | 4 × 2 mm |
| Dimensions | 111 × 34 × 19 mm |

## Pin Diagram

<img src="/products/t-sim-series/t-a7670/t-a7670sa/assets/a7670sa.jpg" alt="T-A7670SA pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-A7670X V1.4 Schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/schematic/T-A7670X-V1.4.pdf)

## Datasheet

* [ESP32 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)

## Software Development

* [LilyGO-T-A76XX GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX)

### Dependent Libraries

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [Adafruit_SSD1306](https://github.com/adafruit/Adafruit_SSD1306)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [StreamDebugger](https://github.com/vshymanskyy/StreamDebugger)
* [TinyGSM-fork](https://github.com/lewisxhe/TinyGSM-fork)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. Which regions does A7670SA support?**
  A. South America, New Zealand, and Australia (LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66). Certified: RCM (AU/NZ), Anatel (Brazil).

* **Q. Is GPS included?**
  A. The standard version does not include GPS. A GPS version is available — contact customer service.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-A7670SA R2 | — | Initial R2 version (South America/Australia/NZ) |
