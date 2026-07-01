---
title: T-2Can
show_source: false
tags: CAN, ESP32-S3, Communication
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-2can" />
<ImageGallery :columns="3" :images="[
  { src: '/products/industrial-series/t-2can/index/image/t-2can-1.jpg', alt: 'T-2Can front view' },
  { src: '/products/industrial-series/t-2can/index/image/t-2can-2.jpg', alt: 'T-2Can physical image' },
  { src: '/products/industrial-series/t-2can/index/image/t-2can-pin.jpg', alt: 'T-2Can pin diagram' }
]" />

## Overview

T-2CAN is a compact dual-channel CAN communication module based on **ESP32-S3-WROOM-1U** (16 MB Flash, 8 MB OPI PSRAM). It provides two independent CAN buses: **CAN bus 1** is driven by an external **MCP2515** controller (SPI, CAN 2.0B, up to 1 Mb/s), and **CAN bus 2** uses the **ESP32-S3's built-in TWAI** controller. Features wide-range **12–24 V DC** input, signal isolation design (SGND/DGND), IPEX antenna interface, QWIIC expansion, and Type-C USB. Suitable for industrial-grade CAN bus applications and IoT gateways.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [can](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/examples/can) | ✓ | | Basic CAN communication example |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/examples/original_test) | ✓ | | Factory test program with CAN bus testing |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [T-2Can](https://github.com/Xinyuan-LilyGO/T-2Can) repository
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

- ESP32-S3-WROOM-1U dual-core LX7 @ 240 MHz, 16 MB Flash, 8 MB OPI PSRAM, Wi-Fi + BT 5.0
- CAN bus 1: external **MCP2515** controller via SPI (CAN 2.0B, up to 1 Mb/s)
- CAN bus 2: ESP32-S3 built-in **TWAI** controller (CAN 2.0B)
- 12–24 V DC wide-range input, signal isolation (SGND/DGND)
- IPEX antenna interface, QWIIC expansion interface
- 18 × 39 × 91 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3-WROOM-1U (MCN16R8) |
| Flash | 16 MB |
| PSRAM | 8 MB (OPI PSRAM) |
| CAN Bus 1 | MCP2515 (SPI, CAN 2.0B, up to 1 Mb/s) |
| CAN Bus 2 | ESP32-S3 built-in TWAI (CAN 2.0B) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| USB | 1 × Type-C (USB + OTG) |
| Power Input | 12–24 V DC or 5 V/500 mA USB |
| Expansion | 2 × QWIIC + 2 × 2.54 mm 13-pin headers |
| Antenna | IPEX interface |
| Buttons | RESET + BOOT |
| Dimensions | 18 × 39 × 91 mm |

## Pin Diagram

<img src="/products/industrial-series/t-2can/index/image/t-2can-pin.jpg" alt="T-2Can pin diagram" width=100%>

## Dimension Diagram

## Schematic

* [T-2Can_V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/project/T-2Can_V1.0.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [MCP2515 Datasheet](https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP2515-Stand-Alone-CAN-Controller-with-SPI-20001801J.pdf)

## Software Development

* [T-2Can GitHub Repository](https://github.com/Xinyuan-LilyGO/T-2Can)

### Dependent Libraries

* [FastLED](https://github.com/FastLED/FastLED)
* [mcp2515](https://github.com/autowp/arduino-mcp2515)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. Why is there no serial data output from the Uart interface?**
  A. The project defaults to USB CDC as Uart0. Set **USB CDC On Boot** to **Disabled** in Arduino Tools, or change `-DARDUINO_USB_CDC_ON_BOOT=true` to `false` in `platformio.ini`.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-2Can V1.0 | — | Initial version |
