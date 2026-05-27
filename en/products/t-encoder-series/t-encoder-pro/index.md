---
title: T-Encoder Pro
show_source: false
tags: ESP32-S3, Encoder, AMOLED, Rotary, HMI
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-encoder-plus" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-encoder-series/t-encoder-pro/index/image/t-encoder-pro-1.jpg', alt: 'T-Encoder Pro front view' },
  { src: '/products/t-encoder-series/t-encoder-pro/index/image/t-encoder-pro-2.jpg', alt: 'T-Encoder Pro physical image' },
  { src: '/products/t-encoder-series/t-encoder-pro/index/image/t-encoder-pro-pin-en.jpg', alt: 'T-Encoder Pro pin diagram' }
]" />

## Overview

T-Encoder Pro is a smart control knob development board based on **ESP32-S3-R8** (16 MB Flash, 8 MB OPI PSRAM). Features a **2.04-inch SH8601A AMOLED** display (390 × 390, QSPI), **CHSC5816** capacitive touch, rotary encoder (rotation + press), buzzer, vibration motor, and 2 × QWIIC interfaces. Suitable for smart home control panels, audio equipment mixers, industrial HMI, and multimedia controllers. **43.5 × 43.5 × 27.5 mm.**

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro) | ✓ | | Display graphics test |
| [Lvgl_CIT](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro) | ✓ | | Factory test |
| [CHSC5816](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro) | ✓ | | Touch example |
| [Rotary_Encoder](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro) | ✓ | | Rotary encoder example |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [T-Encoder-Pro](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro) repository
4. Open `platformio.ini` and under `[platformio]` uncomment the desired environment
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
3. Copy all directories from the project `libraries` folder to your Arduino libraries folder
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
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

5. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3-R8 @ 240 MHz, 16 MB Flash, 8 MB OPI PSRAM, Wi-Fi + BT 5.0
- 2.04-inch SH8601A AMOLED (390 × 390, QSPI), CHSC5816 capacitive touch
- Rotary encoder (rotation + press), buzzer, vibration motor, 2 × QWIIC, 43.5 × 43.5 × 27.5 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3-R8 @ Dual-core LX7 |
| Flash | 16 MB |
| PSRAM | 8 MB (OPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 2.04-inch SH8601A AMOLED, 390 × 390 (QSPI) |
| Touch | CHSC5816 Capacitive (I2C) |
| Encoder | Rotary encoder (rotation + press) |
| Buzzer | Audio feedback |
| Vibration Motor | Haptic feedback |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | 2 × QWIIC 4-pin |
| Buttons | RESET + BOOT |
| Mounting Holes | 3 × M2 |
| Dimensions | 43.5 × 43.5 × 27.5 mm |

## Pin Diagram

<img src="/products/t-encoder-series/t-encoder-pro/index/image/t-encoder-pro-pin-en.jpg" alt="T-Encoder Pro pin diagram" width=100%>

### Pin Mapping

| Name | GPIO |
| :--: | :--: |
| Display SDIO0 | IO11 |
| Display SDIO1 | IO13 |
| Display SDIO2 | IO7 |
| Display SDIO3 | IO14 |
| Display SCLK | IO12 |
| Display RST | IO4 |
| Display VCI EN | IO3 |
| Display CS | IO10 |
| Touch RST | IO8 |
| Touch INT | IO9 |
| Touch SDA | IO5 |
| Touch SCL | IO6 |
| Encoder A | IO1 |
| Encoder B | IO2 |
| Encoder Key | IO0 |
| Buzzer | IO17 |

## Dimension Diagram

## Schematic

* [T-Encoder-Pro V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/%5BSCH%5D%5BT-Encoder-Pro_V1.0%5D.pdf)
* [T-Encoder-Pro V1.0 TFT FPC Schematic](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/%5BSCH%5D%5BT-Encoder-Pro_V1.0%5D%5BTFT_FPC%5D.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [CHSC5816 Datasheet](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/DS_CHSC5816_V1.1.5.pdf)

## Software Development

* [T-Encoder-Pro GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro)

### Dependent Libraries

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [lvgl-8.3.5](https://github.com/lvgl/lvgl)
* [SensorLib-0.1.4](https://github.com/lewisxhe/SensorsLib)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold **BOOT** and press **RST** once, release RST while still holding BOOT, then start the upload.

* **Q. What are the main application scenarios?**
  A. Smart home control panels, audio equipment mixers, industrial HMI interfaces, multimedia controllers, and any scenario requiring precise knob control with graphical display.

* **Q. How to connect external sensors?**
  A. Connect via the two onboard QWIIC 4-pin interfaces for plug-and-play expansion of compatible modules.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Encoder-Pro V1.0 | 2024-02-02 | Initial hardware version |
