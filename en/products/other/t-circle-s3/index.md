---
title: T-Circle S3
show_source: false
tags: T-Circle-S3, LCD, ESP32-S3, Audio
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-circle-s3" />
<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-circle-s3/index/image/t-circle-s3-1.jpg', alt: 'T-Circle S3 front view' },
  { src: '/products/other/t-circle-s3/index/image/t-circle-s3-2.jpg', alt: 'T-Circle S3 physical image' },
  { src: '/products/other/t-circle-s3/index/image/t-circle-s3-en.jpg', alt: 'T-Circle S3 pin diagram' }
]" />

## Overview

LILYGO T-Circle S3 is a versatile development board based on **ESP32-S3-R8** (16 MB Flash, 8 MB PSRAM). Integrates a **0.75-inch GC9D01N TFT LCD** (160 × 160) circular screen with **CST816D** capacitive touch, **MAX98357A** I2S speaker, **MP34DT05-A** PDM microphone (V1.1) / **MSM261S4030H0R** I2S microphone (V1.0), and **APA102** LED control interface. Connects to external devices via 2 × 4-pin expansion IO interface and USB Type-C. Suitable for IoT terminals, smart wearable devices, and embedded audio visualization projects.

> **Note**: T-Circle S3 is the ESP32-S3 version. For the ESP32 version, see [T-Circle](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Circle/T-Circle.html).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Circle-S3](https://github.com/Xinyuan-LilyGO/T-Circle-S3) | ✓ | ✓ | Display, touch, audio, LED, Wi-Fi examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Circle-S3` project folder
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
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3-R8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 0.75-inch GC9D01N TFT LCD (160 × 160), CST816D touch
- MAX98357A I2S speaker, PDM microphone (MP34DT05-A V1.1 / MSM261S V1.0)
- APA102 LED ring, 2 × 4-pin expansion IO interface
- 5 V / 500 mA, 2 × M1.6 mounting holes, 32 × 17 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3-R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 0.75-inch GC9D01N TFT LCD, 160 × 160 |
| Touch | CST816D capacitive, I²C |
| Speaker | MAX98357A I2S |
| Microphone | MP34DT05-A PDM (V1.1) / MSM261S I2S (V1.0) |
| LED | APA102 |
| Expansion | 2 × 4-pin IO header |
| Power | 5 V / 500 mA |
| Mounting Holes | 2 × M1.6 |
| Dimensions | 32 × 17 mm |

## Pin Diagram

<img src="/products/other/t-circle-s3/index/image/t-circle-s3-en.jpg" alt="T-Circle S3 pin diagram" width=100%>

### Pin Mapping

| LCD (SPI) | IO17 (MOSI), IO15 (SCLK), IO13 (CS), IO16 (DC), IO18 (BL) |
| :--: | :-- |
| Touch (CST816D) | IO11 (SDA), IO14 (SCL), IO12 (INT) |
| Speaker (MAX98357A) | IO5 (BCLK), IO4 (LRCLK), IO6 (DATA), IO45 (SD_MODE) |
| APA102 LED | IO39 (CLOCK), IO38 (DATA) |
| Microphone V1.0 (MSM261S) | IO7 (BCLK), IO9 (WS), IO8 (DATA) |
| Microphone V1.1 (MP34DT05-A) | IO9 (LRCLK), IO8 (DATA) |

## Dimension Diagram

## Schematic

* [T-Circle-S3 V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf)

## Datasheet

* [GC9D01N](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/GC9D01N.pdf)
* [MAX98357A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MP34DT05-A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)

## Software Development

* [T-Circle-S3 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Circle-S3)

### Dependent Libraries

* [TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [FastLED-3.6.0](https://github.com/FastLED/FastLED)
* [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT-0** button and try uploading again.

* **Q. Why is there no serial data output from the Uart interface?**
  A. The project defaults to USB CDC as Uart0. To use the external Uart interface, set **USB CDC On Boot** to **Disabled** in Arduino Tools, or change `-DARDUINO_USB_CDC_ON_BOOT=true` to `false` in `platformio.ini`.

* **Q. Should I upgrade library files when Arduino IDE prompts me?**
  A. Do not upgrade — different library versions may not be compatible with this project.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Circle-S3 V1.0 | 2024-01-01 | Initial version |
| T-Circle-S3 V1.1 | — | Updated microphone to MP34DT05-A (PDM) |
