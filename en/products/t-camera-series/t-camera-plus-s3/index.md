---
title: T-Camera Plus S3
show_source: false
tags: ESP32-S3, Camera, TFT, Audio, Vision
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-camera-plus-s3" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-1.jpg', alt: 'T-Camera Plus S3 front view' },
  { src: '/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-2.jpg', alt: 'T-Camera Plus S3 physical image' },
  { src: '/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-pin-en.jpg', alt: 'T-Camera Plus S3 pin diagram' }
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

<img src="/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-pin-en.jpg" alt="T-Camera Plus S3 pin diagram" width=100%>

### Display

| ST7789V   | MOSI   | SCLK   | CS     | DC     | BL     |
| :-------: | :----: | :----: | :----: | :----: | :----: |
| V1.0-V1.1 | GPIO35 | GPIO36 | GPIO34 | GPIO45 | GPIO46 |
| V1.2      | GPIO34 | GPIO35 | GPIO36 | GPIO45 | GPIO46 |

### Touch

| CST816S   | SDA    | SCL    | RST    | INT    |
| :-------: | :----: | :----: | :----: | :----: |
| V1.0-V1.1 | GPIO1  | GPIO2  | GPIO48 | GPIO47 |
| V1.2      | GPIO33 | GPIO37 | NC     | GPIO47 |

### Camera

| OV2640    | XCLK  | SIOD  | SIOC  | VSYNC  | PWDN/RST | HREF  | PCLK   | D0     | D1     | D2     | D3     | D4     | D5    | D6    | D7    |
| :-------: | :---: | :---: | :---: | :----: | :------: | :---: | :----: | :----: | :----: | :----: | :----: | :----: | :---: | :---: | :---: |
| V1.0-V1.1 | GPIO7 | GPIO1 | GPIO2 | GPIO4  | GPIO3    | GPIO5 | GPIO10 | GPIO12 | GPIO14 | GPIO15 | GPIO13 | GPIO11 | GPIO9 | GPIO8 | GPIO6 |
| V1.2      | GPIO7 | GPIO1 | GPIO2 | GPIO3  | GPIO4    | GPIO5 | GPIO10 | GPIO12 | GPIO14 | GPIO15 | GPIO13 | GPIO11 | GPIO9 | GPIO8 | GPIO6 |

### Speaker

| MAX98357A | BCLK   | LRCLK  | DATA   |
| :-------: | :----: | :----: | :----: |
| V1.0-V1.1 | GPIO41 | GPIO42 | GPIO38 |
| V1.2      | GPIO41 | GPIO42 | GPIO39 |

### Microphone

**V1.0-V1.1 (MSM261S4030H0R)**

| MSM261S4030H0R | BCLK   | WS     | DATA   |
| :------------: | :----: | :----: | :----: |
| V1.0-V1.1      | GPIO18 | GPIO39 | GPIO40 |

**V1.2 (MP34DT05TR)**

| MP34DT05TR | LRCLK  | DATA   |
| :---------: | :----: | :----: |
| V1.2        | GPIO40 | GPIO38 |

### SDCard

| SD Card   | CS     | SCLK   | MOSI   | MISO   |
| :-------: | :----: | :----: | :----: | :----: |
| V1.0-V1.1 | GPIO21 | GPIO36 | GPIO35 | GPIO37 |
| V1.2      | GPIO21 | GPIO35 | GPIO34 | GPIO48 |

### Power

| SY6970(0x6A)    | SDA    | SCL    | INT    |
| :-------: | :----: | :----: | :----: |
| V1.0-V1.1 | GPIO1  | GPIO2  | GPIO47 |
| V1.2      | GPIO33 | GPIO37 | NC     |

### Button

| Button    | KEY1   | KEY2   |
| :-------: | :----: | :----: |
| V1.0-V1.1 | GPIO17 | GPIO0  |
| V1.2      | GPIO17 | GPIO0  |

## Dimension Diagram

## Schematic

* [T-CameraPlus-S3 V1.0-V1.1 Schematic](/products/t-camera-series/t-camera-plus-s3/index/hardware/T-CameraPlus-S3_V1.0-V1.1_20241109.pdf)
* [T-CameraPlus-S3 V1.2 Schematic](public/products/t-camera-series/t-camera-plus-s3/index/hardware/T-CameraPlus-S3_V1.2_20240417.pdf)

## Datasheet

* [MAX98357A](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MP34DT05-A](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/AN_SY6970.pdf)

## Software Development

* [T-CameraPlus-S3 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3)
* [Dashcam](./dashcam.md)

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
