---
title: T-SIMCam
show_source: false
tags: ESP32-S3, Camera, OV2640, SIM, mPCIe, Cellular, 4G, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-simcam" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-simcam/index/image/t-simcam-1.jpg', alt: 'T-SIMCam front view' },
  { src: '/products/t-sim-series/t-simcam/index/image/t-simcam-2.jpg', alt: 'T-SIMCam back view' },
]" />

## Overview

LILYGO T-SIMCam is an all-in-one ESP32-S3 camera and cellular IoT board combining an **OV2640 2MP camera** with a **Mini PCIe (mPCIe) cellular modem slot**. Powered by the **ESP32-S3** dual-core LX7 @ 240 MHz with Wi-Fi and Bluetooth 5.0, it supports LTE/4G cellular modules in mPCIe form factor (such as SIM7600X) for image capture and remote transmission over cellular networks. Features a Nano SIM card slot, I2S microphone, USB-C for power and programming, and a battery connector. Ideal for remote surveillance cameras, wildlife monitoring stations, industrial inspection cameras, and cellular-connected smart camera applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-SIMCam](https://github.com/Xinyuan-LilyGO/T-SIMCam) | ✓ | | Camera capture, cellular upload, MQTT examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-SIMCam` project folder
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
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- OV2640 2MP camera (JPEG output, up to 1600 × 1200)
- Mini PCIe (mPCIe) slot for cellular modem modules (SIM7600X, etc.)
- Nano SIM card slot
- I2S MEMS microphone
- USB-C for programming and power
- 3.7 V Li-Po battery connector
- 16 MB Flash, 8 MB PSRAM

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3, Dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 |
| Cellular | Via mPCIe module (e.g. SIM7600X) |
| Camera | OV2640, 2MP, up to 1600 × 1200 |
| Microphone | I2S MEMS |
| SIM | Nano SIM |
| USB | 1 × USB-C |
| Battery | 3.7 V Li-Po connector |

## Pin Diagram

### Camera (OV2640, DVP)

| Signal | GPIO |
| :----: | :--: |
| HREF | 26 |
| VSYNC | 25 |
| PCLK | 36 |
| XCLK | 40 |
| D0–D7 | 39, 41, 42, 43, 44, 45, 46, 48 |
| SDA (SCCB) | 4 |
| SCL (SCCB) | 5 |
| PWDN | 9 |
| RESET | 8 |

### Modem UART

| Signal | GPIO |
| :----: | :--: |
| UART TX (to modem) | 18 |
| UART RX (from modem) | 17 |
| PWR KEY | 10 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [T-SIMCam GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/T-SIMCam/tree/master/hardware)

## Datasheet

- [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
- [OV2640 Datasheet](https://www.ov.com/full/product/OV2640.html)

## Software Libraries

- [T-SIMCam GitHub Repository](https://github.com/Xinyuan-LilyGO/T-SIMCam)

### Dependent Libraries

- [esp32-camera](https://github.com/espressif/esp32-camera)
- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [PubSubClient](https://github.com/knolleary/pubsubclient)

## FAQ

* **Q. Which cellular modules are compatible with T-SIMCam?**
  A. The mPCIe slot is designed for SIM7600X-series LTE Cat-4 modules. Other standard mPCIe cellular modules may work; verify UART pin compatibility and power requirements.

* **Q. What image resolutions does the OV2640 support?**
  A. The OV2640 supports resolutions from QQVGA (160 × 120) up to UXGA (1600 × 1200) in JPEG mode. Typical streaming resolutions are VGA (640 × 480) or SVGA (800 × 600) for balance between quality and frame rate.

* **Q. Can I stream live video over 4G?**
  A. Live MJPEG streaming over LTE is possible with sufficient network bandwidth. Compress JPEG frames and use an MQTT or HTTP server to relay images. Full H.264 video streaming requires an external video encoder not available on the OV2640.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
