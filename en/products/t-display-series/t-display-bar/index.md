---
title: T-Display Bar
show_source: false
tags: ESP32-S3, LCD, IMU, BHI260AP, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-bar" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-bar/index/image/t-display-bar-1.jpg', alt: 'T-Display Bar front view' },
  { src: '/products/t-display-series/t-display-bar/index/image/t-display-bar-2.jpg', alt: 'T-Display Bar physical image' },
  { src: '/products/t-display-series/t-display-bar/index/image/t-display-bar-pin.jpg', alt: 'T-Display Bar pin diagram' }
]" />

## Overview

LILYGO T-Display Bar is a highly integrated embedded smart display module based on **ESP32-S3-R8** (16 MB Flash, 8 MB OPI PSRAM). Features a **2.25-inch ST7789 IPS LCD** (76 × 284) with **CST816** capacitive touch, **BHI260AP** AI six-axis IMU (accelerometer + gyroscope), active buzzer, TF card slot, and 2 × QWIIC interfaces. Compact design (69 × 23 × 15 mm) suitable for both industrial deployment and portable devices.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Display-Bar](https://github.com/Xinyuan-LilyGO/T-Display-Bar) | ✓ | | Display, IMU, BQ27220, RTC, sleep examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Display-Bar` project folder
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
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core1 |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Arduino Runs On | Core1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **8M with spiffs (3M APP/1.5MB SPIFFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3-R8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- 2.25-inch ST7789 IPS LCD (76 × 284), CST816 capacitive touch
- BHI260AP AI six-axis IMU (accelerometer + gyroscope)
- Active buzzer, TF card slot, 2 × QWIIC interfaces
- 2.54 mm 13-pin header, JST battery connector
- 69 × 23 × 15 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3-R8 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (OPI PSRAM) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 2.25-inch ST7789 IPS LCD, 76 × 284 |
| Touch | CST816 capacitive, I²C |
| Sensor | BHI260AP six-axis IMU (AI sensor) |
| Buzzer | Active buzzer |
| Storage | TF card slot |
| USB | 1 × Type-C (USB + OTG) |
| Expansion | 2 × QWIIC + 2.54 mm 13-pin header + JST battery |
| Buttons | RST + BOOT + IO38 + Sleep |
| Dimensions | 69 × 23 × 15 mm |

## Pin Diagram

<img src="/products/t-display-series/t-display-bar/index/image/t-display-bar-pin.jpg" alt="T-Display Bar pin diagram" width=100%>

### Pin Mapping

| TFT (SPI) | IO6 (MOSI), IO7 (SCLK), IO8 (CS), IO5 (DC), IO40 (RST), IO15 (BL) |
| :--: | :-- |
| Touch (CST816) | IO2/IO3 (SDA/SCL), IO21 (IRQ), IO1 (RST) |
| BHI260AP | IO2/IO3 (SDA/SCL), IO18 (IRQ), IO17 (RST), IO16 (EN) |
| SD (SPI) | IO12 (MOSI), IO13 (MISO), IO14 (SCK), IO11 (CS) |
| Buzzer | IO9 |
| Buttons | IO38 (Button1), IO0 (Button2/BOOT) |

## Dimension Diagram

## Schematic

* [T-Display-Bar V1.1 Schematic](https://github.com/Xinyuan-LilyGO/T-Display-Bar/blob/master/hardware/H764%20T-Display%20Bar_V1.1.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Software Development

* [T-Display-Bar GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Display-Bar)

### Dependent Libraries

* [lvgl](https://github.com/lvgl/lvgl)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [ESP32-BLE-Mouse](https://github.com/T-vK/ESP32-BLE-Mouse)
* [ArduinoJson](https://github.com/bblanchon/ArduinoJson)
* [MadgwickAHRS](https://github.com/arduino-libraries/MadgwickAHRS)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. Why is there no serial data output from the Uart interface?**
  A. The project defaults to USB CDC as Uart0. Set **USB CDC On Boot** to **Disabled** in Arduino Tools, or change `-DARDUINO_USB_CDC_ON_BOOT=true` to `false` in `platformio.ini`.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Display Bar V1.1 | — | Initial version |
