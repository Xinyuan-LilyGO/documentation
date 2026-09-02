---
title: T-Embed
show_source: false
tags: ESP32-S3, TFT, Rotary Encoder, APA102, Speaker, MicroSD, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-embed" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-1.jpg', alt: 'T-Embed front view' },
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-2.jpg', alt: 'T-Embed back view' },
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-3.jpg', alt: 'T-Embed dimensions' },
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-info.jpg', alt: 'T-Embed specifications' },
]" />

## Overview

LILYGO T-Embed is a multi-functional ESP32-S3 development platform featuring a **1.9-inch ST7789V IPS TFT** (320 × 170), a **24-step rotary encoder**, **7 APA102 RGB LEDs**, a stereo speaker (MAX98357A I2S amplifier), dual MEMS microphones, and a MicroSD card slot. Powered by the **ESP32-S3** dual-core LX7 @ 240 MHz with Wi-Fi and Bluetooth 5.0, it includes a 3.7 V Li-Po battery port and a 1300 mAh battery. Suitable for audio players, smart remote controls, LVGL-based HMI interfaces, and embedded IoT hubs.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Embed](https://github.com/Xinyuan-LilyGO/T-Embed) | ✓ | | Display, audio, LED, encoder, SD examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Embed` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 1.9-inch ST7789V IPS TFT (320 × 170), LVGL UI
- 24-step rotary encoder with push button
- 7 × APA102 RGB LEDs (SPI-controlled)
- MAX98357A I2S stereo amplifier + built-in speaker
- Dual MEMS PDM microphones
- MicroSD card slot
- 16 MB Flash, 8 MB PSRAM
- 3.7 V Li-Po battery support (1300 mAh included)
- 2 × QWIIC (I2C) expansion connectors

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3, Dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 5.0 |
| Display | 1.9-inch ST7789V IPS TFT, 320 × 170 |
| RGB LEDs | APA102 × 7 |
| Audio | MAX98357A I2S amplifier, dual MEMS mic, built-in speaker |
| Encoder | 24-step rotary encoder with push button |
| Storage | MicroSD card slot (SPI) |
| Battery | 3.7 V Li-Po, 1300 mAh |
| USB | 1 × USB-C |
| Expansion | 2 × QWIIC |
| Dimensions | 95.4 × 36.4 mm |

![T-Embed Specifications](/products/t-embed-series/t-embed/index/image/t-embed-info.jpg)

## Pin Diagram

![T-Embed Pinout](/products/t-embed-series/t-embed/index/image/t-embed-pinout.jpg)

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [T-Embed GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/schematic)

## Datasheet

- [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
- [ST7789V Datasheet](/datasheet/ST7789V.pdf)
- [MAX98357A Datasheet](/datasheet/max98357a-max98357b.pdf)

## Software Libraries

- [T-Embed GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Embed)

### Dependent Libraries

- [FastLED](https://github.com/FastLED/FastLED)
- [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
- [LVGL](https://github.com/lvgl/lvgl)
- [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)

## FAQ

* **Q. Can T-Embed play audio files from MicroSD?**
  A. Yes. With the ESP32-audioI2S library and MAX98357A amplifier, the T-Embed can stream MP3, AAC, and WAV files from a MicroSD card.

* **Q. What is the difference between T-Embed and T-Embed CC1101?**
  A. The T-Embed CC1101 adds a Sub-GHz CC1101 radio and PN532 NFC module. The base T-Embed focuses on display, audio, and LED control without wireless RF beyond Wi-Fi/BT.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
