---
title: T-SIM7600X
show_source: false
tags: ESP32, LTE, SIM7600, 4G, Cat4, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim7600" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim7600x/index/image/t-sim7600x-e.jpg', alt: 'T-SIM7600E' },
  { src: '/products/t-sim-series/t-sim7600x/index/image/t-sim7600x-g.jpg', alt: 'T-SIM7600G' },
  { src: '/products/t-sim-series/t-sim7600x/index/image/t-sim7600x-sa.jpg', alt: 'T-SIM7600SA-H' }
]" />

## Overview

T-SIM7600X is a 4G LTE Cat-4 IoT development board based on **ESP32-WROVER-B** (N4R8: 4 MB Flash, 8 MB PSRAM) and the **SIM7600** series cellular module. All variants share the same PCB design — the only difference is the modem chip, which determines the supported regional frequency bands. Features Nano SIM slot, TF card, 18650 battery support, and 2 × 16-pin 2.54 mm IO expansion. 111 × 34 × 19 mm.

## Variant Comparison

| Variant | Modem | Region | LTE-FDD | LTE-TDD | GSM |
| :-----: | :---: | :----- | :------ | :------ | :-- |
| T-SIM7600E | SIM7600E | Europe / Middle East / Africa / South Korea / Thailand | B1/B3/B5/B8/B20 | — | 900/1800 MHz |
| T-SIM7600G | SIM7600G | Global | B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28/B66 | B34/B38/B39/B40/B41 | 850/900/1800/1900 MHz |
| T-SIM7600SA-H | SIM7600SA-H | South America / Australia / New Zealand | B1/B2/B3/B4/B5/B7/B8/B28 | — | 850/900/1800/1900 MHz |

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) | ✓ | | LTE, GPS, AT command examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) repository
4. Open `platformio.ini`, uncomment `default_envs = T-SIM7600X` and the desired `src_dir` line
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
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |
| Core Debug Level | None |

5. Click **Upload**

> **Note:** Do not update libraries when prompted in Arduino IDE — updated versions may break compatibility (e.g. TinyGSM).

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Related Videos

## Key Features

- ESP32-WROVER-B (N4R8) @ 240 MHz, 4 MB Flash, 8 MB PSRAM, Wi-Fi + BT 4.2
- SIM7600X LTE Cat-4, max 150 Mbps downlink / 50 Mbps uplink
- Integrated multi-constellation GNSS
- Nano SIM, TF card, 18650 battery, 2 × 16-pin 2.54 mm expansion

## Product Parameters

| Feature | Specification |
| :-----: | :-----------: |
| MCU | ESP32-WROVER-B (N4R8), dual-core LX6 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | BT 4.2 |
| Cellular | SIM7600X LTE Cat-4 (variant dependent) |
| Max Downlink | 150 Mbps |
| Max Uplink | 50 Mbps |
| GNSS | Multi-constellation |
| SIM | Nano SIM |
| Storage | TF card, 18650 battery holder |
| USB | 1 × Type-C |
| Expansion | 2 × 16-pin 2.54 mm IO |
| Mounting Holes | 4 × 2 mm |
| Dimensions | 111 × 34 × 19 mm |

## Pin Diagram

| Function | GPIO |
| :------: | :--: |
| Modem TX | 27 |
| Modem RX | 26 |
| Modem PWRKEY | 4 |
| Modem RING | 33 |
| Modem DTR | 32 |
| Modem Flight Mode | 25 |
| Modem Status | 34 |
| Board LED | 12 |
| SD SCK | 14 |
| SD MISO | 2 |
| SD MOSI | 15 |
| SD CS | 13 |
| Battery ADC | 35 |
| Solar ADC | 36 |
| Default SDA | 21 |
| Default SCL | 22 |

> ⚠️ Do not connect any wires to GPIO4, GPIO25, GPIO32, or GPIO33 header positions — these are reserved for modem functions.


## Dimension Diagram

## Schematic

* [T-SIM7600X Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/master/schematic/T-SIM7600.pdf)

## Datasheet

* [ESP32 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
* [SIM7600 Series Datasheet](https://cn.simcom.com/product/SIM7600X.html)

## Software Development

* [LilyGo-Modem-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### Dependent Libraries

* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [StreamDebugger](https://github.com/vshymanskyy/StreamDebugger)

## FAQ

* **Q. Why does my board fail to upload?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. What is the difference between T-SIM7600E / G / SA-H?**
  A. The PCB and firmware are identical. The only difference is the modem chip, which determines the supported frequency bands and regions — choose the variant that matches your deployment region.

* **Q. Does T-SIM7600X support GPS?**
  A. Yes — SIM7600 integrates multi-constellation GNSS. Connect an active GPS antenna to the GNSS connector.

* **Q. SIM card not detected.**
  A. Insert the SIM card before powering on. Hot-inserting may cause detection failure.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| V1.0 | — | Initial version |
