---
title: T-A7670X
show_source: false
tags: ESP32, LTE, A7670, 4G, Cat1, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-a7670/index/image/t-a7670e-1.jpg', alt: 'T-A7670E front view' },
  { src: '/products/t-sim-series/t-a7670/index/image/t-a7670g-2.jpg', alt: 'T-A7670G front view' },
  { src: '/products/t-sim-series/t-a7670/index/image/t-a7670sa-1.jpg', alt: 'T-A7670SA front view' }
]" />

## Overview

T-A7670X R2 is a 4G LTE Cat1 IoT development board based on **ESP32-WROVER-E** (4 MB Flash, 8 MB PSRAM) and the **A7670** series cellular module. All variants share the same PCB design — the only difference is the modem chip, which determines the supported regional frequency bands. Features Nano SIM slot, 12 GPIO, 8 ADC, 2 DAC, capacitive touch pins, SPI, I2C, TF card, 18650 battery support, and 2 × 16-pin 2.54 mm IO expansion. 111 × 34 × 19 mm. Optional GPS version available.

> The differences between T-A76xx series variants are described in the [SIM comparison table](../sim.md).

## Variant Comparison

| Variant | Modem | Region | LTE-FDD | LTE-TDD | GSM |
| :-----: | :---: | :----- | :------ | :------ | :-- |
| T-A7670E | A7670E | Europe / Middle East / Africa / South Korea / Thailand | B1/B3/B5/B8/B20 | — | 900/1800 MHz |
| T-A7670G | A7670G | Global | B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28/B66 | B34/B38/B39/B40/B41 | 850/900/1800/1900 MHz |
| T-A7670SA | A7670SA | South America / New Zealand / Australia | B1/B2/B3/B4/B5/B7/B8/B28/B66 | — | 850/900/1800/1900 MHz |

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

## Related Videos

## Key Features

- ESP32-WROVER-E @ 240 MHz, 4 MB Flash, 8 MB PSRAM, Wi-Fi + BT 5.0
- A7670X LTE Cat1, supports GSM/GPRS/EDGE and multi-band 4G (variant dependent)
- Nano SIM, 12 GPIO, 8 ADC, 2 DAC, capacitive touch, SPI, I2C, UART
- TF card, 18650 battery, 2 × 16-pin 2.54 mm expansion, 111 × 34 × 19 mm

## Product Parameters

| Feature | Specification |
| :-----: | :-----------: |
| MCU | ESP32-WROVER-E @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Cellular | A7670X LTE Cat1 (variant dependent) |
| SIM | Nano SIM |
| Storage | TF card, 18650 battery holder |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | 2 × 16-pin 2.54 mm IO |
| Mounting Holes | 4 × 2 mm |
| Dimensions | 111 × 34 × 19 mm |

## Pin Diagram

**T-A7670E**

<img src="/products/t-sim-series/t-a7670/index/image/t-a7670e-3.jpg" alt="T-A7670E pin diagram" width=100%>

**T-A7670G**

<img src="/products/t-sim-series/t-a7670/index/image/t-a7670g-zh.jpg" alt="T-A7670G pin diagram" width=100%>

**T-A7670SA**

<img src="/products/t-sim-series/t-a7670/index/image/a7670sa.jpg" alt="T-A7670SA pin diagram" width=100%>

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

* **Q. Why does my board fail to upload?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. What is the difference between T-A7670E / G / SA?**
  A. The PCB and firmware are identical. The only difference is the modem chip, which determines the supported frequency bands and regions — choose the variant that matches your deployment region.

* **Q. Is GPS included?**
  A. The standard version does not include GPS. A GPS version is available — contact customer service.

* **Q. Does the 4G version support voice calls?**
  A. No — the 4G version supports data transmission only. Voice calls and SMS over circuit-switched networks are not supported.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-A7670X R2 | — | Current version |
