---
title: T-Bao
show_source: false
tags: K210, ESP32, AI, Camera, Touch Screen, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-bao" />
<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-bao/index/image/t-bao-1.jpg', alt: 'T-Bao front view' },
  { src: '/products/other/t-bao/index/image/t-bao-2.jpg', alt: 'T-Bao physical image' },
  { src: '/products/other/t-bao/index/image/t-bao.jpg', alt: 'T-Bao pin diagram' }
]" />

## Overview

T-Bao is an open-source AIoT terminal based on **ESP32-D0WDQ6-V3** and **K210** RISC-V AI chip, featuring high performance, low power consumption, expandability, and programmability. It deeply integrates the K210 RISC-V architecture AI chip (with KPU neural network processor) with the ESP32 dual-core Wi-Fi/BLE communication module, equipped with a professional **OV2640** 2-megapixel camera (supporting 180° rotation) and **ST7789V 1.54-inch IPS touch screen** (240 × 240, 90° adaptive rotation). Supports millisecond-level face recognition and dynamic image processing.

Built-in **MAX98357A** I2S digital power amplifier, **MSM261S** high-sensitivity microphone array, and **AXP202** intelligent power management. Integrates **MPU6050** six-axis sensor, TF card storage, and rich interface resources (UART/SPI/I2C/Touch). Compatible with Arduino/MicroPython ecosystem. Suitable for industrial vision detection, smart security, AIoT terminals, and educational robots.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-K210-Script](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script) | ✓ | | Direction recognition, face recognition, speech recognition |

### K210 Firmware Flashing

1. Download the latest MaixPy firmware: [MaixPy Firmware](https://cn.dl.sipeed.com/MAIX/MaixPy/release/master)
2. Download flashing tool: [kflash_gui](https://cn.dl.sipeed.com/shareURL/MAIX/tools)
3. Select the corresponding firmware and model files for flashing

> **Note**: Speech recognition requires writing the model file `maix_asr_2900k_0x500000.kmodel` to address 0x500000 first, then flashing the firmware.

| Application | K210 Firmware | ESP32 Firmware | Model File |
| :--------- | :-----------: | :------------: | :--------- |
| Direction Recognition | maixpy_twatch_v0.6.2-75.bin | ESP32_AT_Firmware_UART1_SGPIO.bin | Identify_Direction_model.kmodel |
| Face Recognition | maixpy_twatch_v0.6.2-75.bin | ESP32_AT_Firmware_UART1_SGPIO.bin | face_model_at_0x300000.kfpkg |
| Speech Recognition | maixpy_v0.6.2_83_minimum_speech.bin | ESP32_AT_Firmware_UART1_SGPIO.bin | maix_asr_2900k_0x500000.kmodel |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-K210-Script` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Copy library folders from the project `libraries` directory to your Arduino libraries folder
4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software) — ESP32 development
2. [MaixPy IDE](https://dl.sipeed.com/shareURL/MAIX/MaixPy/ide) — K210 development
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf) — ESP32 advanced development
4. [MicroPython](https://docs.micropython.org/en/latest/) — Script development

## Video

## Key Features

- K210 RISC-V dual-core (400 MHz), KPU neural network processor (YOLOv3, face recognition, etc.)
- ESP32-D0WDQ6-V3, 16 MB Flash, 8 MB PSRAM, Wi-Fi + Bluetooth 4.2
- OV2640 2 MP camera, 180° rotation
- ST7789V 1.54-inch IPS touch screen (240 × 240)
- MAX98357A I2S amplifier + MSM261S microphone array
- AXP202 PMU, MPU6050 six-axis IMU, DRV8833 motor driver
- 2 × QWIIC + 4 × magnetic interfaces, TF card slot
- 164 × 46 × 42 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| AI Chip | K210 RISC-V Dual-core, 400 MHz, KPU ~0.5 TOPS |
| MCU | ESP32-D0WDQ6-V3 |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 4.2 + BLE |
| Display | 1.54-inch ST7789V IPS TFT, 240 × 240 |
| Camera | OV2640 (2 MP) |
| Audio Output | MAX98357A I2S amplifier |
| Audio Input | MSM261S microphone array |
| Sensor | MPU6050 six-axis IMU |
| Power Management | AXP202 PMU |
| Motor Driver | DRV8833 |
| Storage | TF card slot |
| USB | 1 × Type-C |
| Expansion | 2 × QWIIC + 4 × magnetic interfaces |
| Dimensions | 164 × 46 × 42 mm |

## Pin Diagram

<img src="/products/other/t-bao/index/image/t-bao.jpg" alt="T-Bao pin diagram" width=100%>

### SD Card Notes

<img src="/products/other/t-bao/index/image/t-bao-en.jpg" alt="T-Bao SD card usage notes" width=80%>

## Dimension Diagram

## Schematic

* [T-Bao Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script/blob/master/schematic/K210_Main.pdf)

## Datasheet

* [K210 Datasheet](https://canaan.io/product/kendryteai)
* [OV2640 Datasheet](https://www.ovt.com/sensors/OV2640)

## Software Development

* [LilyGo-K210-Script GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script)
* [MaixHub Model Training](https://maixhub.com/)

### Dependent Libraries

* [MaixPy](https://github.com/sipeed/MaixPy) — K210 development framework
* [LVGL](https://lvgl.io/) — Embedded graphics library
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)

## FAQ

* **Q. How do K210 and ESP32 communicate?**
  A. Communication is through UART serial port, with K210 as AI processor and ESP32 as main controller and communication module.

* **Q. Camera not working properly?**
  A. Check the camera ribbon cable connection, ensure the camera module is properly inserted, and check power supply.

* **Q. SD card not recognized?**
  A. Refer to the SD card installation diagram in the Pin Diagram section, ensure the card is properly inserted and formatted as FAT32.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Bao V1.0 | — | Initial version: K210 + ESP32 dual-core AIoT terminal |
