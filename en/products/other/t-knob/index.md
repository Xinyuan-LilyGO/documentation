---
title: T-Knob
show_source: false
tags: ESP32-C6, BLDC, Haptic, Motor, Rotary, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-knob/index/image/t-knob-1.jpg', alt: 'T-Knob front view' },
  { src: '/products/other/t-knob/index/image/t-knob-2.jpg', alt: 'T-Knob appearance' },
  { src: '/products/other/t-knob/index/image/t-knob-info-en.jpg', alt: 'T-Knob component overview' }
]" />

## Overview

LILYGO T-Knob is a smart rotary controller based on the **ESP32-C6-MINI-1U** wireless module. It integrates a **BLDC (Brushless DC Motor)** driven by the **TMC6300** chip and an **MT6701 Hall sensor** for high-precision rotation detection, delivering a haptic rotary interaction experience. Supports USB Type-C for power and data. Suitable for smart home control (volume adjustment, lighting), industrial HMI, and haptic feedback applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Knob](https://github.com/Xinyuan-LilyGO/T-Knob) | ✓ | | Motor control, Hall sensor, BLDC examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Knob` project folder
4. Open `platformio.ini`, uncomment the example under `[platformio]`
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Open the example `.ino` file
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32C6 Dev Module** |
| Port | Your port |
| CPU Frequency | 160 MHz |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Flash Mode | QIO |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| Upload Speed | 921600 |

5. Click **Upload**

### Development Platforms

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Video

## Key Features

- ESP32-C6-MINI-1U: Wi-Fi 6 (2.4 GHz), Bluetooth 5 (LE), 802.15.4
- TMC6300 BLDC motor driver with torque feedback
- MT6701 Hall sensor for high-precision rotation detection
- 4 × onboard LEDs (GPIO20, 21, 22, 23)
- 1 × buzzer, 1 × QWIIC interface
- USB Type-C power and data
- Compact form factor: 32 × 32 × 34 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-C6-MINI-1U |
| Flash | 4 MB |
| Wi-Fi | Wi-Fi 6 (2.4 GHz 802.11ax) |
| Bluetooth | Bluetooth 5.0 LE |
| 802.15.4 | Thread / Zigbee |
| Motor Driver | TMC6300 |
| Hall Sensor | MT6701 |
| LEDs | 4 × (GPIO20–23) |
| Buzzer | 1 × |
| USB | 1 × Type-C |
| Expansion | 1 × QWIIC |
| Power | 5 V / 500 mA |
| Buttons | RESET + BOOT |
| Mounting Holes | 1 × M2 |
| Dimensions | 32 × 32 × 34 mm |

## Pin Diagram

<img src="/products/other/t-knob/index/image/t-knob-pin-en.jpg" alt="T-Knob pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Knob V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Knob/blob/master/hardware/T-MotorDriver-C6%20V1.0.pdf)

## Datasheet

* [TMC6300 Datasheet](https://github.com/Xinyuan-LilyGO/T-Knob/blob/master/hardware/TMC6300_datasheet_rev1.08.pdf)
* [MT6701 Datasheet](https://github.com/Xinyuan-LilyGO/T-Knob/blob/master/hardware/MT6701_Rev.1.0.pdf)

## Software Development

* [T-Knob GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Knob)

## FAQ

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Knob V1.0 | — | Initial version |
