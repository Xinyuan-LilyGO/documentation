---
title: T-PCIE
show_source: false
tags: ESP32, PCIe, Cellular, 4G, LTE, AXP2101, IoT, Modem
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-pcie" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-1.jpg', alt: 'T-PCIE front view' },
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-2.jpg', alt: 'T-PCIE back view' },
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-3.jpg', alt: 'T-PCIE dimensions' },
]" />

## Overview

LILYGO T-PCIE is an ESP32-based cellular development board featuring a **Mini PCIe (mPCIe) socket** for interchangeable cellular modem modules. Powered by the **ESP32-WROVER-E** (dual-core Xtensa LX6, 240 MHz, 4 MB Flash, 8 MB PSRAM) with Wi-Fi and Bluetooth 4.2, the T-PCIE accommodates a wide range of cellular modules — including **SIM7000G** (NB-IoT/Cat-M), **SIM7600X** (LTE Cat-4), and other standard mPCIe-format modems. An **AXP2101 PMU** manages power for the modem and the ESP32, while a SIM card slot and USB-C connector round out the design. Ideal for cellular IoT gateways, remote monitoring nodes, and portable LTE/NB-IoT data devices.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-PCIE](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) | ✓ | | Cellular AT commands, MQTT, HTTP examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-T-PCIE` project folder
4. Open `platformio.ini` and select the modem environment matching your module
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Wrover Module** |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-WROVER-E dual-core Xtensa LX6 @ 240 MHz, Wi-Fi + Bluetooth 4.2
- Mini PCIe (mPCIe) socket for interchangeable cellular modem modules
- Compatible with SIM7000G, SIM7600X, and other mPCIe cellular modules
- AXP2101 PMU for ESP32 and modem power management
- Nano SIM card slot
- USB-C for programming and power
- 4 MB Flash, 8 MB PSRAM
- Battery connector for portable operation

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-WROVER-E (Xtensa dual-core LX6, 240 MHz) |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 4.2 |
| Cellular | Via mPCIe module (SIM7000G, SIM7600X, etc.) |
| PMU | AXP2101 |
| SIM | Nano SIM card slot |
| USB | 1 × USB-C |
| Battery | JST connector for Li-Ion/Li-Po |

## Pin Diagram

### Modem UART

| Signal | GPIO |
| :----: | :--: |
| UART TX (to modem) | 27 |
| UART RX (from modem) | 26 |
| Modem PWR KEY | 4 |
| Modem RESET | 5 |
| Modem POWER ON | 25 |

### I2C (AXP2101)

| Signal | GPIO |
| :----: | :--: |
| SDA | 21 |
| SCL | 22 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [LilyGo-T-PCIE GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/tree/master/hardware)

## Datasheet

- [ESP32 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
- [AXP2101 Datasheet](http://www.x-powers.com/en.php/Info/product_detail/article_id/97)

## Software Libraries

- [LilyGo-T-PCIE GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE)

### Dependent Libraries

- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [XPowersLib](https://github.com/lewisxhe/XPowersLib)
- [PubSubClient](https://github.com/knolleary/pubsubclient)

## FAQ

* **Q. Which cellular modules are compatible with the T-PCIE mPCIe slot?**
  A. The T-PCIE has been tested with SIM7000G (NB-IoT/Cat-M/GPRS+GPS) and SIM7600X (LTE Cat-4). Other standard mPCIe-form modems may work but are not officially supported.

* **Q. Does the mPCIe slot carry USB or PCIe signals?**
  A. The mPCIe connector on the T-PCIE uses UART signals routed to the ESP32 (not full PCIe). This is the standard approach for cellular modem integration in embedded designs.

* **Q. Do I need an external antenna?**
  A. Yes. A cellular antenna must be connected to the modem's antenna connector (IPEX/U.FL) for reliable network connectivity. A GPS antenna is also required if using a module with GPS.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
