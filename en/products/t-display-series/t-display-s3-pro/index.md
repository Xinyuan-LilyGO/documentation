---
title: T-Display S3 Pro
show_source: false
tags: ESP32-S3, IPS, TFT_eSPI, USB OTG, Camera, Capacitive Touch
---

# {{ $frontmatter.title }} <ShopLink href="https://www.lilygo.cc/products/t-display-s3-pro" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-pro/index/image/t-display-s3-pro-1.jpg', alt: 'T-Display S3 Pro front view' },
  { src: '/products/t-display-series/t-display-s3-pro/index/image/t-display-s3 pro-pin.jpg', alt: 'T-Display S3 Pro front pin diagram' },
  { src: '/products/t-display-series/t-display-s3-pro/index/image/t-display-pro-pin-behind.jpg', alt: 'T-Display S3 Pro back pin diagram' }
]" />

## Overview

T-Display S3 Pro is a high-performance development board based on **ESP32-S3R8** (16 MB Flash, 8 MB OPI PSRAM). Features a **2.2-inch ST7789V2 IPS** display (222 × 480), **CST816S** capacitive touch, **SY6970** PMU (1.5 A charging, OTG output), **LTR553** ambient light/proximity sensor, optional **MPU9250/MPU6050** motion sensor, DVP camera expansion connector (OV2640/OV5640), TF card slot, and 2 × STEMMA QT/QWIIC. V1.1 uses a constant-current backlight driver for improved display stability.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Display-S3-Pro](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro) | ✓ | | Factory, TFT, PMU, USB HID, camera examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone: `git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro.git`
4. Open `platformio.ini` and under `[platformio]` uncomment the desired environment
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. Copy the project `lib` folder to your Arduino libraries folder
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | Enabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

5. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Video

## Key Features

- ESP32-S3R8 dual-core LX7 @ 240 MHz, 16 MB Flash, 8 MB OPI PSRAM
- 2.2-inch ST7789V2 IPS (222 × 480), CST816S capacitive touch
- SY6970 PMU (1.5 A charging, power path, OTG 5 V/500 mA output)
- LTR553 ambient light/proximity sensor, optional MPU9250/MPU6050 IMU
- DVP camera connector (OV2640/OV5640), TF card, 2 × STEMMA QT/QWIIC
- 2 × 13-pin dual-row expansion header
- 56.5 × 56.5 × 9.6 mm, 4 × 2 mm mounting holes

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (OPI PSRAM) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 2.2-inch ST7789V2 IPS, 222 × 480 |
| Touch | CST816S capacitive, I²C (0x15) |
| PMU | SY6970 (1.5 A charge, OTG) |
| Light Sensor | LTR553 (I²C 0x23) |
| Motion Sensor | MPU9250/MPU6050 (optional) |
| Camera | DVP (OV2640/OV5640 compatible) |
| Storage | TF card slot (SPI) |
| USB | 1 × Type-C (OTG capable) |
| Expansion | 2 × STEMMA QT/QWIIC + 2×13 dual-row header |
| Mounting Holes | 4 × 2 mm |
| Dimensions | 56.5 × 56.5 × 9.6 mm |

## Pin Diagram

<img src="/products/t-display-series/t-display-s3-pro/index/image/t-display-s3 pro-pin.jpg" alt="T-Display S3 Pro front pin diagram" width=100%>
<img src="/products/t-display-series/t-display-s3-pro/index/image/t-display-pro-pin-behind.jpg" alt="T-Display S3 Pro back pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-Display-S3-Pro Schematic](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/blob/main/schematic/T-Display-S3-Pro.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Software Development

* [T-Display-S3-Pro GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro)

### Dependent Libraries

* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorLib)
* [TouchLib](https://github.com/mmMicky/TouchLib)
* [lvgl](https://github.com/lvgl/lvgl)
* [JPEGDEC](https://github.com/bitbank2/JPEGDEC)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)

## FAQ

* **Q. Why does my board keep failing to upload?**
  A. Hold **BOOT**, press **RST** once, release RST while still holding BOOT, then start the upload.

* **Q. How do I distinguish V1.0 from V1.1?**
  A. Look for "V1.1" printed near the USB-C port. V1.1 uses a constant-current backlight driver — use the corresponding example.

* **Q. When no battery is connected, the device reboots repeatedly?**
  A. Without a battery, disable charging: `PMU.disableCharge()`. See the `PMU_Example` for reference.

* **Q. The screen stays black or backlight is abnormal?**
  A. Check that backlight configuration matches your board version (V1.0: PWM, V1.1: constant-current).

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Display-S3-Pro V1.0 | 2023-08-01 | Initial version, PWM backlight |
| T-Display-S3-Pro V1.1 | 2023-11-01 | Upgraded to constant-current backlight driver |
