---
title: T-SIM7670G-S3
show_source: false
tags: ESP32-S3, SIM7670G, 4G, LTE Cat-1, GPS, IoT, Cellular
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim7670g-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-1.jpg', alt: 'T-SIM7670G-S3 front view' },
  { src: '/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-2.jpg', alt: 'T-SIM7670G-S3 back view' },
]" />

## Overview

LILYGO T-SIM7670G-S3 combines the **ESP32-S3** dual-core LX7 microcontroller with the **SIMCom SIM7670G** LTE Cat-1 cellular module and integrated GNSS. The SIM7670G delivers LTE Cat-1 data rates (10 Mbps downlink / 5 Mbps uplink) with global multi-band coverage, voice call support, and an integrated GPS/GLONASS/BeiDou receiver. The ESP32-S3 (16 MB Flash, 8 MB PSRAM) provides Wi-Fi 802.11 b/g/n and Bluetooth 5.0 LE alongside the cellular connection. Features a Nano SIM card slot, USB-C for programming, a 3.7 V Li-Po battery connector with charging, and IPEX antenna connectors for LTE and GPS. Part of the LilyGo-Modem-Series ecosystem.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) | ✓ | | LTE Cat-1, MQTT, HTTP, GPS, SMS examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-Modem-Series` project folder
4. Open `platformio.ini`, select the `T-SIM7670G-S3` environment
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
- SIMCom SIM7670G: LTE Cat-1 (10 Mbps DL / 5 Mbps UL), global multi-band
- Voice call support via SIM7670G
- Integrated GNSS: GPS, GLONASS, BeiDou
- Nano SIM card slot
- USB-C for programming and power
- 3.7 V Li-Po battery connector with charging
- IPEX connectors for LTE and GPS antennas
- 16 MB Flash, 8 MB PSRAM

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3, Dual-core LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 |
| Cellular | SIM7670G — LTE Cat-1, global multi-band |
| Voice | Supported (SIM7670G) |
| GNSS | GPS, GLONASS, BeiDou |
| SIM | Nano SIM |
| USB | 1 × USB-C |
| Battery | 3.7 V Li-Po connector with charging |
| Antenna | LTE IPEX + GPS IPEX |

## Pin Diagram

### SIM7670G UART

| Signal | GPIO |
| :----: | :--: |
| UART TX (to SIM7670G) | 17 |
| UART RX (from SIM7670G) | 18 |
| PWR KEY | 9 |
| DTR | 10 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [LilyGo-Modem-Series GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/master/hardware)

## Datasheet

- [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
- [SIM7670G Hardware Design](https://simcom.ee/documents/?dir=SIM767x)

## Software Libraries

- [LilyGo-Modem-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### Dependent Libraries

- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
- [PubSubClient](https://github.com/knolleary/pubsubclient)
- [ArduinoHttpClient](https://github.com/arduino-libraries/ArduinoHttpClient)

## FAQ

* **Q. What is the difference between SIM7670G and SIM7000G?**
  A. SIM7670G is an LTE Cat-1 module with higher data rates (up to 10 Mbps DL) and voice call support. SIM7000G is an NB-IoT/LTE Cat-M module designed for low-power, low-data applications. Choose SIM7670G for applications requiring higher throughput or voice.

* **Q. Does T-SIM7670G-S3 support voice calls?**
  A. Yes. The SIM7670G supports voice calls. An audio codec and speaker/microphone hardware would need to be connected to the module's audio pins for a complete voice solution.

* **Q. How do I power on the SIM7670G?**
  A. Pull GPIO9 (PWR KEY) LOW for at least 1 second, then release. Wait for the module to boot (typically 5–10 seconds) before sending AT commands.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
