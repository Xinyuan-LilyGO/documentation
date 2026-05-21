---
title: Sim Shield
show_source: false
tags: Sim Series, Expansion Board, LoRa, Current Sensing, RS485, INA3221
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/sim-shield" />
<ImageGallery :columns="1" :images="[
  { src: '/products/t-sim-series/t-sim-shield/assets/t-sim-shield-1.jpg', alt: 'Sim Shield front view' }
]" />

## Overview

Sim Shield is a multifunction expansion board designed for the **LilyGo T-Sim Series**. Integrates **INA3221** triple-channel current sensing, **SX1262 LoRa** long-range transceiver, **RS485** (hardware auto direction control), **7–36 V DC** wide-voltage input (with 5 V/2 A regulated output), I2C/SPI expansion interfaces, and SD card slot (remapped SPI). Compatible with all LilyGo T-Sim series mainboards via a stackable connector.

> **Important:** Always verify jumper cap and DIP switch settings before powering on. Incorrect configuration may cause hardware damage.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [SimShield_LoRaWAN](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShield_LoRaWAN/) | ✓ | | LoRaWAN communication |
| [SimShield_LoRaReceive](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShield_LoRaReceive/) | ✓ | | LoRa receive |
| [SimShield_LoRaTransmit](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShield_LoRaTransmit/) | ✓ | | LoRa transmit |
| [SimShieldCurrentSensor](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShieldCurrentSensor/) | ✓ | | INA3221 current sensing |
| [SimShieldFactory](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShieldFactory/) | ✓ | | Factory test |
| [SerialRS485](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SerialRS485/) | ✓ | | RS485 communication |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) repository
4. Open `platformio.ini` and uncomment the desired example
5. Click **✓** to compile, click **→** to upload

### Arduino

Refer to the mainboard-specific Quick Start guide. Use the same libraries and Arduino settings as the matched T-Sim mainboard.

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Video

## Key Features

- INA3221 triple-channel current sensing (battery charge/discharge monitoring)
- SX1262 LoRa transceiver (long-range wireless)
- 7–36 V DC wide-voltage input, 5 V/2 A output
- RS485 (hardware auto direction control, ≤115200 baud)
- SD card slot (SPI remapped from mainboard), I2C/SPI expansion

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| Current Sensing | INA3221, 3 channels |
| LoRa | SX1262 (SPI) |
| RS485 | Hardware auto direction (ADCDC) |
| DC Input | 7–36 V |
| Battery Input | 4.2 V max |
| 5 V Output | Max 2 A |
| Compatibility | All LilyGo T-Sim series mainboards |

## Pin Diagram

Pin mappings vary by mainboard. Configure DIP switches and jumpers before use.

**SIM7000G / A7670X / A7608X (ESP32):**

| Signal | GPIO |
| :--- | :---: |
| SIMSHIELD_MOSI | 23 |
| SIMSHIELD_MISO | 19 |
| SIMSHIELD_SCK | 18 |
| SIMSHIELD_SD_CS | 32 |
| SIMSHIELD_RADIO_BUSY | 39 |
| SIMSHIELD_RADIO_CS | 5 |
| SIMSHIELD_RADIO_IRQ | 34 |
| SIMSHIELD_RADIO_RST | 15 |
| SIMSHIELD_RS_RX | 13 |
| SIMSHIELD_RS_TX | 14 |
| SIMSHIELD_SDA | 21 |
| SIMSHIELD_SCL | 22 |

**SIM7670G (ESP32-S3):**

| Signal | GPIO |
| :--- | :---: |
| SIMSHIELD_MOSI | 15 |
| SIMSHIELD_MISO | 7 |
| SIMSHIELD_SCK | 16 |
| SIMSHIELD_SD_CS | 46 |
| SIMSHIELD_RADIO_BUSY | 38 |
| SIMSHIELD_RADIO_CS | 39 |
| SIMSHIELD_RADIO_IRQ | 6 |
| SIMSHIELD_RADIO_RST | 40 |
| SIMSHIELD_RS_RX | 41 |
| SIMSHIELD_RS_TX | 42 |
| SIMSHIELD_SDA | 2 |
| SIMSHIELD_SCL | 1 |

For other mainboard pin mappings and jumper configurations, refer to the [GitHub README](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series).

## Dimension Diagram

## Schematic

* [T-SimShield-Rev1.0 Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/schematic/shield/T-SimShield-Rev1.0.pdf)

## Datasheet

* [INA3221 Datasheet](https://www.ti.com/lit/ds/symlink/ina3221.pdf)

## Software Development

* [LilyGo-Modem-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### Dependent Libraries

* [RadioLib](https://github.com/jgromes/RadioLib)

## FAQ

* **Q. Why is there no SD card slot output after inserting the card?**
  A. After using the Sim Shield, insert the SD card into the **expansion board**, not the mainboard — the SPI bus is remapped.

* **Q. Can I use an external battery with the mainboard's 18650 socket?**
  A. No. When using an external battery connected to the Sim Shield, do **not** install a battery in the mainboard's 18650 socket.

* **Q. What RS485 baud rate is recommended?**
  A. ≤115200 baud is recommended for reliable communication.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-SimShield Rev1.0 | 2024-08-10 | Initial release |
| T-SimShield Rev1.1 | 2024-11-05 | Optimized power circuit for stability |
