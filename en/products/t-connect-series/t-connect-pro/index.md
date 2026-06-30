---
title: T-Connect Pro
show_source: false
tags: ESP32-S3, LoRa, CAN, Ethernet, Industrial
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-1.jpg', alt: 'T-Connect Pro front view' },
  { src: '/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-2.jpg', alt: 'T-Connect Pro side view' }
]" />

## Overview

T-Connect Pro is a 3-layer stackable industrial-grade module based on **ESP32-S3-R8** (16 MB Flash, 8 MB PSRAM). Integrates **SX1262 LoRa** (HPD16A, 433–920 MHz), **ST7796 TFT LCD** (222 × 480, SPI) with **CST226SE** capacitive touch, **W5500 Ethernet**, **CAN** (TD501MCANFD), **RS485** (TD501D485H-A), **RS232** (TD501D232H), and 10 A relay. **12–24 V DC** wide-range input. Suitable for complex industrial automation and IoT terminals.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Original_Test) | ✓ | | Factory program |
| [CAN](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CAN) | ✓ | | CAN bus communication |
| [RS485](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485) | ✓ | | RS485 communication |
| [RS485_2](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485_2) | ✓ | | RS485 communication (variant) |
| [Ethernet_HTTP](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_HTTP) | ✓ | | Ethernet HTTP client |
| [Ethernet_Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Relay) | ✓ | | Ethernet relay control |
| [Ethernet_Scan](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Scan) | ✓ | | Ethernet network scan |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX) | ✓ | | Display test |
| [GFX_SX1262](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX_SX1262) | ✓ | | Display + LoRa combined |
| [CST226SE](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CST226SE) | ✓ | | Touch screen test |
| [Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Relay) | ✓ | | Relay control |
| [SX1262_Receive_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX1262_Receive_Interrupt) | ✓ | | LoRa receive with interrupt |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_PingPong) | ✓ | | LoRa ping-pong test |
| [SX126x_Channel_Activity_Detection_Blocking](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Blocking) | ✓ | | LoRa CAD blocking mode |
| [SX126x_Channel_Activity_Detection_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Interrupt) | ✓ | | LoRa CAD interrupt mode |
| [raw](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/raw) | ✓ | | LoRa raw transmission |
| [ttn_abp](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_abp) | ✓ | | TTN ABP activation |
| [ttn_otaa](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_otaa) | ✓ | | TTN OTAA activation |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [T-Connect-Pro](https://github.com/Xinyuan-LilyGO/T-Connect-Pro) repository
4. Open `platformio.ini` and under `[platformio]` uncomment the desired environment
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. Copy the project `libraries` folder to your Arduino libraries folder
4. In **Tools** → **Board**, configure:

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

5. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Video

## Key Features

- ESP32-S3-R8 dual-core LX7 @ 240 MHz, 16 MB Flash, 8 MB PSRAM, Wi-Fi + BT 5.0
- SX1262 LoRa (HPD16A, 433–920 MHz), W5500 Ethernet
- ST7796 TFT LCD 222 × 480, CST226SE capacitive touch
- CAN (TWAI), RS485, RS232 industrial protocols; 10 A relay
- 12–24 V DC input, 3-layer stackable design

## Product Parameters

<img src="/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-info.jpg" alt="T-Connect Pro overview" width=100%>

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3-R8 |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| LoRa | SX1262 (HPD16A), 433–920 MHz |
| Ethernet | W5500 (SPI) |
| Display | ST7796 TFT LCD, 222 × 480 (SPI) |
| Touch | CST226SE (I²C) |
| CAN | TD501MCANFD (TWAI) |
| RS485 | TD501D485H-A (UART) |
| RS232 | TD501D232H (UART) |
| Relay | 10 A output |
| IMU | BMA423 (I²C) |
| USB | 1 × Type-C (USB + OTG) |
| Power Input | 12–24 V DC or 5 V/500 mA USB |
| Expansion | 1 × QWIIC |
| Mounting Holes | 4 × M3 |
| Dimensions | 88 × 72 × 60 mm (with base) |

## Pin Diagram

<img src="/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-pinout.jpg" alt="T-Connect Pro pin diagram" width=100%>

### Pin Mapping

| Display | IO11 (MOSI), IO13 (MISO), IO41 (DC), IO12 (SCLK), IO21 (CS), IO46 (BL) |
| :--: | :-- |
| Touch (CST226SE) | IO39 (SDA), IO40 (SCL), IO47 (RST), IO3 (INT) |
| Ethernet (W5500) | IO11 (MOSI), IO13 (MISO), IO48 (RST), IO12 (SCLK), IO10 (CS), IO9 (INT) |
| LoRa (SX1262) | IO11 (MOSI), IO13 (MISO), IO42 (RST), IO12 (SCLK), IO14 (CS), IO45 (DIO1), IO38 (BUSY) |
| RS485 | IO17 (TX), IO18 (RX) |
| RS232 | IO4 (TX), IO5 (RX) |
| CAN | IO6 (TWAI_TX), IO7 (TWAI_RX) |

## Dimension Diagram

<img src="/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-3.jpg" alt="T-Connect Pro dimension diagram" width=100%>

## Schematic

* [T-Connect-Pro_V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/project/T-Connect-Pro_V1.0.pdf)
* [T-Connect-Pro_V1.1 Schematic](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/project/T-Connect-Pro_V1.1.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [HPD16A Module](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/HPDTEK_HPD16A_TCXO_V1.1.pdf)
* [SX1262 Datasheet](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/DS_SX1261-2_V2_1.pdf)
* [TD501MCANFD](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D485H-A_K-CUT.pdf)
* [TD501D232H](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D232H.pdf)

## Software Development

* [T-Connect-Pro GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Connect-Pro)

### Dependent Libraries

* [Arduino_DriveBus-1.1.2](https://github.com/Xk-w/Arduino_DriveBus)
* [RadioLib-6.6.0](https://github.com/jgromes/RadioLib)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [Ethernet_V2.0.0](http://www.arduino.cc/en/Reference/Ethernet)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. What frequency bands does the LoRa module support?**
  A. The LoRa module supports 433–920 MHz. Select the appropriate band per regional regulations.

* **Q. Are there any GPIO conflicts when using LoRa with Wi-Fi or Bluetooth?**
  A. No, Wi-Fi and Bluetooth are built-in chip functions with no GPIO conflicts.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Connect Pro V1.0 | — | Initial version |
