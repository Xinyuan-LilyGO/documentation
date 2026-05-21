---
title: T-Echo
show_source: false
tags: nRF52840, LoRa, E-Paper, GPS, NFC, Low Power
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-lilygo" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo/assets/t-echo1.jpg', alt: 'T-Echo front view' },
  { src: '/products/t-echo-series/t-echo/assets/t-echo2.jpg', alt: 'T-Echo physical image' },
  { src: '/products/t-echo-series/t-echo/assets/t-echo-info-en.jpg', alt: 'T-Echo component overview' }
]" />

## Overview

T-Echo is a multi-functional LoRa communication device based on the nRF52840 chip, integrating an E-Paper screen, GPS positioning, NFC functionality, and multiple sensors. The device supports Arduino and nRF5-SDK development environments, making it an ideal platform for developing LoRa communication, IoT nodes, and low-power applications.

T-Echo is compatible with multiple open-source firmware projects, including SoftRF and Meshtastic, and can be used to build decentralized communication networks. The device features low-power design and supports various power-saving modes, making it suitable for outdoor communication, environmental monitoring, and other application scenarios.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | nRF5-SDK | Description |
| :-----: | :----------------: | :------: | :---------: |
| [T-Echo Examples](https://github.com/Xinyuan-LilyGO/T-Echo/tree/main/examples) | ✓ | ✓ | Official example programs |
| [SoftRF](https://github.com/lyusupov/SoftRF/wiki/Badge-Edition) | ✓ | | Aircraft collision avoidance firmware |
| [Meshtastic](https://github.com/meshtastic/Meshtastic-device/tree/v1.2.42.2759c8d) | ✓ | | LoRa mesh communication firmware |

### Arduino IDE

1. Download [Arduino IDE](https://www.arduino.cc/en/software)
2. Open Preferences, add `https://www.adafruit.com/package_adafruit_index.json` to the Board Manager URL list
3. Open the Board Manager, wait for the index to update, select **Adafruit nRF52 by Adafruit** and click Install
4. After installation is complete, select **Nordic nRF52840 (PCA10056)** from the board list
5. Copy all folders in the `lib` directory to the Arduino library folder
6. Open the sketch, select the correct port, then click Upload

> When using USB to download firmware, double-click the reset button to enter DFU mode.

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. After restarting VS Code, click **File** → **Open Folder** → select the LilyGO-T-ECHO folder
4. Click the **✓** at the bottom to compile, **→** to upload

### nRF5-SDK

1. Download [nRF5-SDK](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download)
2. Use nRF5-SDK for programming, supporting advanced features like NFC

> **Note:** NFC functionality is not supported in Adafruit_nRF52_Arduino. Use nRF5-SDK for NFC-related development.

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software) — Supports Adafruit nRF52
2. [PlatformIO](https://platformio.org/) — Cross-platform development
3. [nRF5-SDK](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download) — Nordic official SDK

## Video

## Key Features

- nRF52840 ARM Cortex-M4 MCU with Bluetooth 5.0
- SX1262 LoRa module, supports multiple frequency bands, output power −17 to 22 dBm
- E-Paper display with ultra-low power consumption
- GPS module for global positioning
- NFC (Near Field Communication) support
- Compatible with SoftRF and Meshtastic open-source firmware
- Multiple power-saving modes, suitable for battery-powered outdoor use

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | nRF52840 @ ARM Cortex-M4 |
| Flash | MX25R1635FZUIL0 or ZD25WQ16B (selected based on supply conditions) |
| Wireless (BLE) | Bluetooth 5.0 |
| LoRa | SX1262, multiple frequency bands, −17 to 22 dBm |
| Display | E-Paper, low power |
| GPS | Supported |
| NFC | Supported |

## Pin Diagram

For pin definitions, please refer to the [utilities.h](https://github.com/Xinyuan-LilyGO/T-Echo/blob/main/examples/Integration/utilities.h) file in the repository.

## Dimension Diagram

## Schematic

## Datasheet

## Software Development

* [T-Echo GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Echo)
* [SoftRF — Badge Edition](https://github.com/lyusupov/SoftRF/wiki/Badge-Edition)
* [Meshtastic Firmware](https://github.com/meshtastic/Meshtastic-device)

### Dependent Libraries

- [`arduino-lmic`](https://github.com/mcci-catena/arduino-lmic)
- `AceButton`
- `Adafruit_BME280_Library`
- `Adafruit_BusIO`
- `Adafruit_EPD`
- `Adafruit-GFX-Library`
- `Button2`
- `GxEPD`
- `PCF8563_Library`
- `RadioLib`
- `SerialFlash_ID539`
- `SoftSPI`
- `TinyGPSPlus`

## FAQ

* **Q. FLASH model varies between boards?**
  A. FLASH will be selected as MX25R1635FZUIL0 or ZD25WQ16B based on supply conditions. Pay attention to the distinction during use.

* **Q. NFC is not working with Arduino?**
  A. NFC functionality is not supported in Adafruit_nRF52_Arduino. Please use [nRF5-SDK](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download) for NFC programming.

* **Q. How to enter DFU (download) mode?**
  A. Double-click the reset button to enter DFU mode when using USB to download firmware.

* **Q. LoRa output power configuration?**
  A. After setting LoRa output power, current limit configuration is required:

```cpp
// Set output power to 22 dBm (range: -17 to 22 dBm)
radio.setOutputPower(22);

// Set over-current protection limit to 80 mA (range: 45–240 mA)
// Setting to 0 disables over-current protection
radio.setCurrentLimit(80);
```

* **Q. What open-source firmware is compatible with T-Echo?**
  A. T-Echo supports [SoftRF](https://github.com/lyusupov/SoftRF/wiki/Badge-Edition) (aircraft collision avoidance) and [Meshtastic](https://github.com/meshtastic/Meshtastic-device) (LoRa mesh communication).

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Echo V1.0 | — | Initial release |
