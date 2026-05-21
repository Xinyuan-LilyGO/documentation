---
title: T-Camera Plus S3
show_source: false
tags: ESP32-S3, Camera, TFT, Audio, Vision
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-camera-plus-s3" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-camera-series/t-camera-plus-s3/assets/t-cameraplus-s3-1.jpg', alt: 'T-Camera Plus S3 front view' },
  { src: '/products/t-camera-series/t-camera-plus-s3/assets/t-cameraplus-s3-2.jpg', alt: 'T-Camera Plus S3 physical image' },
  { src: '/products/t-camera-series/t-camera-plus-s3/assets/t-cameraplus-s3-pin-en.jpg', alt: 'T-Camera Plus S3 pin diagram' }
]" />

## Overview

T-Camera Plus S3 is a versatile smart hardware development board based on **ESP32-S3** (16 MB Flash, 8 MB PSRAM). Integrates a **OV2640/OV5640** (optional) camera module, **ST7789V 1.3-inch IPS TFT** (240 × 240) with **CST816S** capacitive touch, **MAX98357A** I2S audio amplifier, **MP34DT05-A** PDM microphone (V1.2), **SY6970** PMU, and TF card. Pre-installed with an LVGL-based UI supporting file management, music playback, recording, and camera projection. Suitable for AIoT, edge computing, and multimedia development.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-CameraPlus-S3](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | ✓ | Camera, display, audio, Wi-Fi examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-CameraPlus-S3` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

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
| PSRAM | **QSPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Video

## Key Features

- ESP32-S3R8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- OV2640/OV5640 (optional) camera, AP1511B IR filter control
- ST7789V 1.3-inch IPS TFT (240 × 240), CST816S touch
- MAX98357A I2S speaker, MP34DT05-A PDM microphone (V1.2)
- SY6970 PMU, TF card slot, 2 × STEMMA QT/QWIIC
- LVGL-based UI pre-installed (file manager, music, recording, camera)
- 60 × 32 × 12 mm, 4 × 2 mm positioning holes

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 1.3-inch ST7789V IPS TFT, 240 × 240 |
| Touch | CST816S capacitive, I²C |
| Camera | OV2640 (OV5640 optional) |
| Speaker | MAX98357A I2S |
| Microphone | MP34DT05-A PDM (V1.2) / MSM261S I2S (V1.0-V1.1) |
| PMU | SY6970 |
| Storage | TF card slot |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | 2 × STEMMA QT/QWIIC + JST-GH 1.25 mm |
| Mounting Holes | 4 × 2 mm |
| Dimensions | 60 × 32 × 12 mm |

## Pin Diagram

<img src="/products/t-camera-series/t-camera-plus-s3/assets/t-cameraplus-s3-pin-en.jpg" alt="T-Camera Plus S3 pin diagram" width=100%>

### Pin Mapping (V1.2)

| LCD | IO34 (MOSI), IO35 (SCLK), IO36 (CS), IO45 (DC), IO46 (BL) |
| :--: | :-- |
| Camera (OV2640) | IO7 (XCLK), IO1 (SIDO), IO2 (SIOC), IO3 (VSYNC→PWDN), IO5 (HREF), IO10 (PCLK), D0–D7 = IO12–IO15, IO11, IO13, IO8, IO6 |
| Touch (CST816S) | IO33 (SDA), IO37 (SCL), IO47 (INT) |
| Speaker (MAX98357A) | IO41 (BCLK), IO42 (LRCLK), IO39 (DATA) |
| Microphone (MP34DT05-A) | IO40 (LRCLK), IO38 (DATA) |
| SD Card | IO21 (CS), IO35 (SCLK), IO34 (MOSI), IO48 (MISO) |
| SY6970 | IO33 (SDA), IO37 (SCL) |
| KEY1 | IO17 |

## Dimension Diagram

## Schematic

* [T-CameraPlus-S3 V1.0-V1.1 Schematic](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/project/T-CameraPlus-S3_V1.0-V1.1_20241109.pdf)
* [T-CameraPlus-S3 V1.2 Schematic](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/project/T-CameraPlus-S3_V1.2_20240417.pdf)

## Datasheet

* [MAX98357A](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MP34DT05-A](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/AN_SY6970.pdf)

## Software Development

* [T-CameraPlus-S3 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3)

### Dependent Libraries

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [lvgl-8.3.5](https://github.com/lvgl/lvgl)
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [XPowersLib-0.2.1](https://github.com/lewisxhe/XPowersLib)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [cst816t-1.5.0](https://github.com/koendv/cst816t)
* [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [MiniTV](https://github.com/moononournation/MiniTV)

## FAQ

* **Q. What are the main application scenarios for T-Camera Plus S3?**
  A. Suitable for smart surveillance, video doorbells, IoT visual interaction, multimedia terminals, and AI image recognition.

* **Q. Which camera modules are supported?**
  A. Supports OV2640 and OV5640. V1.2 adds OV5640 auto-focus support.

* **Q. How to flash the factory firmware?**
  A. Flash the `Lvgl_UI` example from the GitHub repository. Pre-compiled firmware binaries are available in the `firmware/` folder.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-CameraPlus-S3 V1.0-V1.1 | 2023-10-23 | Initial version |
| T-CameraPlus-S3 V1.2 | 2025-04-17 | Improved Wi-Fi performance, updated microphone (MP34DT05-A), modified pin numbers, optimized PCB routing |
