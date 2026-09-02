---
title: T-PICO-2350
show_source: false
tags: RP2350, ESP32-C6, Raspberry Pi, Dual-Core
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-pico?variant=45197490585781" />
<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-pico-2350/index/image/t-pico-2350-03.jpg', alt: 'T-PICO-2350 front view' },
  { src: '/products/other/t-pico-2350/index/image/t-pico-2350-04.jpg', alt: 'T-PICO-2350 physical image' },
  { src: '/products/other/t-pico-2350/index/image/t-pico-2350-01.jpg', alt: 'T-PICO-2350 pin diagram' }
]" />

## Overview

T-PICO-2350 is a dual-processor development board based on **Raspberry Pi RP2350** (16 MB Flash) and **ESP32-C6-MINI-1U** (4 MB Flash, Wi-Fi 6 + BT). Features a **2.33-inch IPS LCD** (ST7796S), **XL9535** touch, **HDMI output**, TF card, 2 × QWIIC, 2×13 IO expansion, and PMU. Reversible USB for programming both chips independently. Supports battery and USB power.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | C/C++ | Description |
| :-----: | :----------------: | :---: | :---------: |
| [Factory](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2/tree/master/examples/Factory) | ✓ | ✓ | Factory test |
| [LilyGO-T-Pico2 Examples](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2) | ✓ | ✓ | RP2350 and ESP32-C6 examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [Lilygo-T-Pico2](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2) repository
4. Open `platformio.ini`, uncomment the desired `src_dir` line (keep only one active)
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino Pico](https://arduino-pico.readthedocs.io/en/latest/install.html) (RP2350 board support)
3. For ESP32-C6 examples: add ESP32 boards URL `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
4. Copy all directories from the project `lib` folder to your Arduino libraries folder
5. Select **Board** and configure per the [project repository](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2) instructions
6. Click **Upload**

> **Note**: T-PICO-2350 uses reversible USB — plug orientation selects either the RP2350 port or the ESP32-C6 port. To identify the RP2350 port, hold the side **BOOT** button while plugging in USB-C; if the computer recognizes a disk drive, that is the RP2350 port.

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software) (via Arduino-Pico)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- RP2350 @ 16 MB Flash, 520 kB SRAM + ESP32-C6 @ 4 MB Flash, Wi-Fi 6 + BT
- 2.33-inch IPS LCD (ST7796S, SPI), XL9535 capacitive touch (I2C)
- HDMI output, TF card, 2 × QWIIC, 2×13 IO expansion, reversible USB

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| Main MCU | Raspberry Pi RP2350 |
| Main Flash | 16 MB |
| Main SRAM | 520 kB |
| Wireless MCU | ESP32-C6-MINI-1U-N4 |
| Wireless Flash | 4 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n (Wi-Fi 6) |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 2.33-inch IPS LCD (ST7796S, SPI) |
| Touch | XL9535 I2C Capacitive |
| Video Output | HDMI (19-pin) |
| Storage | TF card |
| Power Management | Integrated PMU |
| USB | 2 × Type-C (reversible, RP2350 / ESP32-C6) |
| Expansion | 2×13 IO + 2 × QWIIC + 13-pin FPC |
| Power Supply | Battery + USB |
| Mounting Holes | 4 × M1.4 |

## Pin Diagram

<img src="/products/other/t-pico-2350/index/image/t-pico-2350-01.jpg" alt="T-PICO-2350 pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-PICO-2350 V1.2 Schematic](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2/blob/master/hardware/T_Pico2350_V1.2.pdf)

## Datasheet

* [RP2350 Documentation](/datasheet/RP-008373-DS-2-rp2350-datasheet.pdf)
* [ESP32-C6 Datasheet](/datasheet/esp32-c6-mini-1_mini-1u_datasheet_en.pdf)
* [ST7796S Datasheet](/datasheet/ST7796S-Sitronix.pdf)

## Software Development

* [Lilygo-T-Pico2 GitHub Repository](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2)

### Dependent Libraries

* [lvgl 8.3.9](https://github.com/lvgl/lvgl)
* [AceButton](https://github.com/bxparks/AceButton)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [WiFiEspAT](https://github.com/jandrassy/WiFiEspAT)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold the side **BOOT** button and press the side **RST** button, release RST, release BOOT, then upload.

* **Q. How to write to ESP32-C6?**
  A. Hold the ESP32 BOOT button on the ESP32-C6 module side and plug in USB-C on that side. Do not include ESP32-C6 reset pin control in the RP2350 program when updating ESP32-C6 firmware.

* **Q. How to identify which USB port is RP2350 vs ESP32-C6?**
  A. Hold the side BOOT button while plugging in USB-C. If the computer recognizes a disk drive, this is the RP2350 port.

* **Q. No serial output?**
  A. In Arduino IDE, select **Debug Port: "Serial"** in the toolbar and enable the **DTR** option in your serial monitor.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-PICO-2350 V1.2 | 2024-01-01 | Initial version |
