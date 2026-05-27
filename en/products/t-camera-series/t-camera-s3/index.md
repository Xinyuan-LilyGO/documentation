---
title: T-Camera-S3
show_source: false
tags: ESP32-S3, Camera, OV2640, OLED, PIR, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-camera-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-camera-series/t-camera-s3/index/image/t-camera-s3-1.jpg', alt: 'T-Camera-S3 front view' },
  { src: '/products/t-camera-series/t-camera-s3/index/image/t-camera-s3-2.jpg', alt: 'T-Camera-S3 back view' },
]" />

## Overview

LILYGO T-Camera-S3 is a compact camera development board based on the **ESP32-S3FN16R8** (dual-core LX7 @ 240 MHz). It integrates a **2MP OV2640** camera module, a **0.96-inch SSD1306 OLED** display (128 × 64), an **AS312 PIR** motion sensor, a microphone, and a battery management circuit. With built-in Wi-Fi 802.11 b/g/n and Bluetooth 5.0, the board is well-suited for TinyML computer vision, smart doorbell, motion detection, and edge AI prototyping applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-Camera-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Camera-Series) | ✓ | | Camera, OLED, PIR, microphone examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-Camera-Series` project folder
4. Open `platformio.ini` and select the T-Camera-S3 environment
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
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3FN16R8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 2MP OV2640 camera module (up to 1600 × 1200)
- 0.96-inch SSD1306 OLED display (128 × 64, I2C)
- AS312 PIR motion sensor
- Built-in microphone
- JST battery connector with charging circuit
- Compact form factor with enclosure option
- USB Type-C for power and programming

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3FN16R8, dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (OPI) |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 LE |
| Camera | OV2640, 2MP, up to 1600 × 1200 |
| Display | 0.96-inch SSD1306 OLED, 128 × 64 |
| PIR Sensor | AS312 |
| USB | 1 × Type-C |
| Battery | JST connector, Li-Po supported |

## Pin Diagram

<!-- GPIO mapping table. -->

### Camera (OV2640)

| OV2640   | XCLK   | SIOD   | SIOC   | VSYNC  | HREF   | PCLK   | D0     | D1     | D2     | D3     | D4     | D5     | D6     | D7     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO38 | GPIO5  | GPIO4  | GPIO8  | GPIO18 | GPIO12 | GPIO9  | GPIO10 | GPIO11 | GPIO13 | GPIO21 | GPIO47 | GPIO48 | GPIO14 |

### OLED Display (SSD1306)

| SSD1306  | SDA    | SCL    |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO5  | GPIO4  |

### PIR Sensor

| AS312    | OUT    |
| :------: | :----: |
| ESP32-S3 | GPIO21 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

<!-- Link to public schematic PDF or image. -->

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

* [LilyGo-Camera-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-Camera-Series)

### Dependent Libraries

* [esp32-camera](https://github.com/espressif/esp32-camera)
* [Adafruit SSD1306](https://github.com/adafruit/Adafruit_SSD1306)

## FAQ

<!-- Errata and common issues. -->

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Camera-S3 V1.0 | 2022-12 | Initial version |
