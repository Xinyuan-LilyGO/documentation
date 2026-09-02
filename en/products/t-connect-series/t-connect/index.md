---
title: T-Connect
show_source: false
tags: ESP32-S3, RS485, CAN, Industrial
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-connect" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-connect-series/t-connect/index/image/t-connect-1.jpg', alt: 'T-Connect front view' },
  { src: '/products/t-connect-series/t-connect/index/image/t-connect-2.jpg', alt: 'T-Connect physical image' },
  { src: '/products/t-connect-series/t-connect/index/image/t-connect-en-1.jpg', alt: 'T-Connect pin diagram' }
]" />

## Overview

T-Connect is an industrial-grade multi-protocol communication board based on **ESP32-S3-R8** (16 MB Flash, 8 MB PSRAM). Integrates up to three independent **RS485** channels and one **CAN bus** channel, **APA102** LED strip controller, **10 A relay**, and QWIIC expansion interface. Supports switching between CAN and RS485 modules. **7–12 V DC** wide-range input. 94 × 83 × 13 mm. Suitable for IoT gateways, industrial automation, and smart lighting scenarios.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/Original_Test) | ✓ | | Factory test program |
| [APA102_Blink](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/APA102_Blink) | ✓ | | APA102 LED blink example |
| [CAN](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/CAN) | ✓ | | CAN bus communication |
| [RS485](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/RS485) | ✓ | | RS485 communication |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [T-Connect](https://github.com/Xinyuan-LilyGO/T-Connect) repository
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
- Up to 3 × RS485 + 1 × CAN bus, switchable configuration
- APA102 RGB LED strip controller
- 10 A relay output
- 7–12 V DC input, 4 × mounting holes, 94 × 83 × 13 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3-R8 |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Communication | RS485 (up to 3 ch) + CAN (TWAI) |
| LED Driver | APA102 |
| Relay | 10 A output |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| USB | 1 × Type-C (USB + OTG) |
| Power Input | 7–12 V DC or 5 V/500 mA USB |
| Expansion | 1 × QWIIC |
| Buttons | RESET + BOOT |
| Mounting Holes | 4 × 2 mm |
| Dimensions | 94 × 83 × 13 mm |

## Pin Diagram

<img src="/products/t-connect-series/t-connect/index/image/t-connect-en-1.jpg" alt="T-Connect pin diagram" width=100%>

### Pin Mapping

| APA102 | IO8 (DATA), IO3 (CLOCK) |
| :--: | :-- |
| CAN/RS485 TX_1/RX_1 | IO4, IO5 |
| CAN/RS485 TX_2/RX_2 | IO6, IO7 |
| CAN/RS485 TX_3/RX_3 | IO17, IO18 |
| CAN/RS485 TX_4/RX_4 | IO9, IO10 |

## Dimension Diagram

## Schematic

* [T-Connect_V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Connect/blob/main/project/T-Connect_V1.0.pdf)

## Datasheet

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)

## Software Development

* [T-Connect GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Connect)

### Dependent Libraries

* [FastLED](https://github.com/FastLED/FastLED)
* [ESP32TWAI](https://github.com/espressif/esp-idf/tree/master/examples/peripherals/twai)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. How to configure switching between RS485 and CAN modules?**
  A. Switching is achieved through onboard configuration jumpers or software settings. Refer to the schematic and example code.

* **Q. Why is there no serial data output from the Uart interface?**
  A. The project defaults to USB CDC as Uart0. Set **USB CDC On Boot** to **Disabled** in Arduino Tools, or change `-DARDUINO_USB_CDC_ON_BOOT=true` to `false` in `platformio.ini`.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Connect V1.0 | — | Initial version |
