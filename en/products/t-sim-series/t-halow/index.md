---
title: T-Halow
show_source: false
tags: ESP32-S3, WiFi-HaLow, 802.11ah, Camera, IoT, Long Range
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-halow" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-halow/index/image/t-halow-1.jpg', alt: 'T-Halow front view' },
  { src: '/products/t-sim-series/t-halow/index/image/t-halow-2.jpg', alt: 'T-Halow physical image' },
  { src: '/products/t-sim-series/t-halow/index/image/t-halow-pin.jpg', alt: 'T-Halow pin diagram' }
]" />

## Overview

T-Halow is a long-range IoT development board based on **ESP32-S3** (16 MB Flash, 8 MB PSRAM). Integrates the **TX-AH Wi-Fi HaLow (802.11ah)** module (730–950 MHz), OV2640/OV5640 DVP camera (up to 5 MP), **RJ45 Ethernet** port, TF card slot, and 18650 battery support. Wi-Fi HaLow provides sub-GHz long-range wireless connectivity with up to several kilometers range and better wall penetration than 2.4 GHz Wi-Fi. Suitable for security monitoring, agricultural telemetry, and industrial IoT gateways. 113 × 33 mm.

> T-Halow has two hardware versions. Please refer to the [VER1](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/ver1/readme.md) or [VER2](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/ver2/readme.md) documentation depending on your hardware. Both versions use the same [AT Command Set](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/AT_cmd.md).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Halow Examples](https://github.com/Xinyuan-LilyGO/T-Halow) | ✓ | | Camera, HaLow, Ethernet examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [T-Halow](https://github.com/Xinyuan-LilyGO/T-Halow) repository
4. Open `platformio.ini`, uncomment the desired example under `[platformio]`, press `Ctrl+S`
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 boards URL: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. Copy `T-Halow/lib/` contents to your Arduino libraries folder
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

1. [PlatformIO](https://platformio.org/) — Recommended
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Video

## Key Features

- ESP32-S3 dual-core LX7 @ 240 MHz, 16 MB Flash, 8 MB PSRAM, Wi-Fi + BT 5.0
- TX-AH Wi-Fi HaLow (802.11ah) module, 730–950 MHz, up to 32.5 Mbps, km-range
- OV2640 (2 MP) / OV5640 (5 MP) DVP camera support
- RJ45 Ethernet, TF card, 18650 battery support with ADC monitoring
- 113 × 33 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Wi-Fi HaLow | TX-AH (802.11ah), 730–950 MHz |
| Camera | OV2640 (2 MP) / OV5640 (5 MP) DVP |
| Ethernet | RJ45 (replaceable firmware) |
| Storage | TF card slot |
| USB | 1 × Type-C (5 V/500 mA) |
| Battery | 18650 (with ADC monitoring) |
| Dimensions | 113 × 33 mm |

## Pin Diagram

<img src="/products/t-sim-series/t-halow/index/image/t-halow-pin.jpg" alt="T-Halow pin diagram" width=100%>

### Pin Mapping

| Camera | IO4 (SIOC), IO5 (SIOD), IO17 (HREF), IO12 (PCLK), IO8 (MCLK), IO16 (VSYNC), IO18 (RST), IO9–IO21/IO47–IO48 (D0–D9) |
| :--: | :-- |
| SPI | IO39 (CS), IO41 (SCK), IO40 (MOSI), IO42 (MISO) |

## Dimension Diagram

## Schematic

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [TX-AH Module Resources](https://en.taixin-semi.com/Product?prouctSubClass=33)

## Software Development

* [T-Halow GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Halow)

### Dependent Libraries

* (Managed via PlatformIO — see `platformio.ini`)

## FAQ

* **Q. Which version of T-Halow do I have?**
  A. VER1 was released 2023-08-23, VER2 on 2024-04-16. Check the PCB or refer to the version table in the [GitHub README](https://github.com/Xinyuan-LilyGO/T-Halow).

* **Q. How do I enter download mode?**
  A. Hold **BOOT**, press **RST** once, release RST while still holding BOOT, then start the upload.

* **Q. How do I flash TX-AH module firmware?**
  A. Use the downloader tool or ESP32 flash_download_tool — see [firmware flashing documentation](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs).

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Halow VER1 | 2023-08-23 | Initial version |
| T-Halow VER2 | 2024-04-16 | Updated pairing method |
