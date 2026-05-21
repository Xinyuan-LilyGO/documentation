---
title: T-Watch S3 Plus
show_source: false
tags: T-Watch, ESP32-S3, Smart Watch, GPS, LoRa
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-s3/assets/主图.jpg', alt: 'T-Watch S3 Plus front view' },
  { src: '/products/t-watch-series/t-watch-s3/assets/watch2020v3_s3.jpg', alt: 'T-Watch S3 Plus physical image' },
  { src: '/products/t-watch-series/t-watch-s3/assets/watchs3英文版.jpg', alt: 'T-Watch S3 Plus pin diagram' }
]" />

## Overview

T-Watch S3 Plus is an enhanced version of T-Watch S3, adding GPS functionality. It is a multifunctional smart wearable device integrating high-performance hardware with wireless communication technology, suitable for sports health monitoring, remote interaction, and audio scenarios. Core features include a **1.54-inch 240 × 240 LCD**, **BMA423** 3-axis sensor, capacitive touch, **Max98357A** audio amplifier and PDM microphone. Available in **SX1262** and **SX1280** LoRa versions. **51.5 × 42 × 20 mm** (without strap).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO_TWatch_Library Examples](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3) | ✓ | | Watch UI, sensor, and LoRa examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3) repository (branch: `t-watch-s3`)
4. Open `platformio.ini` and under `[platformio]` uncomment the desired environment
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **UART0/Hardware CDC** |
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

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3 @ 240 MHz, 16 MB Flash, 8 MB OPI PSRAM, Wi-Fi + BT 5.0
- 1.54-inch LCD (240 × 240), BMA423 accelerometer, capacitive touch
- SX1262/SX1280 LoRa (433–923 MHz), Max98357A audio + PDM mic
- DRV2605 haptic motor, AXP2101 PMU, 51.5 × 42 × 20 mm (without strap)

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (OPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 1.54-inch LCD, 240 × 240 (SPI) |
| Touch | Capacitive touchscreen (I2C) |
| Accelerometer | BMA423 (I2C) |
| LoRa | SX1262 / SX1280, 433–923 MHz (selectable) |
| Haptic Motor | DRV2605 (I2C) |
| Power Management | AXP2101 |
| Audio Output | Max98357A amplifier |
| Audio Input | PDM Microphone |
| USB | 1 × USB + OTG (Micro connector) |
| Buttons | POWER (hold 2 s on / 6 s off) + BOOT (built-in) |
| Power Input | 5 V / 500 mA |
| Dimensions | 51.5 × 42 × 20 mm (without strap) |

## Pin Diagram

<img src="/products/t-watch-series/t-watch-s3/assets/watchs3英文版.jpg" alt="T-Watch S3 Plus pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Watch S3 Schematic](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/blob/t-watch-s3/schematic/T_WATCH_S3.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Software Development

* [TTGO_TWatch_Library GitHub Repository](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)

### Dependent Libraries

* [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)

## FAQ

* **Q. How to power on and off?**
  A. Press and hold the POWER button for 2 seconds to power on, hold for 6 seconds to power off.

* **Q. Why does my board keep failing to upload programs?**
  A. Hold **BOOT** and press **RST** once, release RST while still holding BOOT, then start the upload.

* **Q. Which LoRa versions are available?**
  A. SX1262 (Sub-GHz, 433–923 MHz) and SX1280 (2.4 GHz). Choose according to regional regulations.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Watch-S3-Plus V1.0 | — | Initial version with GPS functionality |
