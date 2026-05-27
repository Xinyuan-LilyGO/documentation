---
title: T-Beam Supreme
show_source: false
tags: ESP32-S3, LoRa, GPS, GNSS, IoT, Meshtastic, SX1262
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam-supreme" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-1.jpg', alt: 'T-Beam Supreme front' },
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-2.jpg', alt: 'T-Beam Supreme back' },
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-3.jpg', alt: 'T-Beam Supreme pin diagram' },
]" />

## Overview

The LILYGO T-Beam Supreme (V3.0) is a high-performance, feature-rich IoT development board built on the **ESP32-S3FN8** dual-core LX7 processor with Wi-Fi 802.11 b/g/n and Bluetooth 5.0. It integrates an **SX1262 LoRa** module (433/868/915/923 MHz), a choice of **Ublox MAX-M10S** or **L76K GNSS**, a **1.3-inch SH1106 OLED** display (128×64, I²C), a **QMI8658** 6-axis IMU, **BME280** temperature/humidity/pressure sensor, **QMC6310** magnetometer, **AXP2101** PMU, and **PCF85063ATL** RTC. An 18650 battery holder and TF card slot round out the board for portable, long-range IoT and Meshtastic applications.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [LoRaSender](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa transmit example |
| [LoRaReceiver](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa receive example |
| [RadioLib Examples](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | SX1262 / SX1280 support |
| [GPS TinyGPS](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | TinyGPS++ positioning |
| [GPS UBlox](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | UBlox GPS example |
| [BME280 Sensor](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | Temperature/humidity/pressure |
| [QMI8658 IMU](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 6-axis IMU |
| [OLED Display](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | SH1106 OLED display |
| [PMU AXP2101](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | Power management |
| [Factory Test](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | Factory test sketch |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code, then restart
3. Open `File` → `Open Folder` → select the `LilyGo-LoRa-Series` directory and wait for dependencies
4. Open `platformio.ini`, uncomment the board name under `default_envs`
5. Uncomment the matching `src_dir = xxxx` line, click **✓** to compile, then **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. Copy all folders from the `lib` directory into your Arduino libraries folder (`~/Documents/Arduino/libraries`)
3. Configure **Tools** as shown in the table below

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **8 MB (64Mb)** |
| Core Debug Level | None |
| Partition Scheme | **8M Flash (3MB APP/1.5MB SPIFFS)** |
| PSRAM | **QSPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |
| Upload Mode | UART0/Hardware CDC |

4. Uncomment your board model in `utilities.h`, then upload

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [MicroPython](https://micropython.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3FN8 dual-core LX7 @ 240 MHz, 8 MB Flash, 8 MB PSRAM
- SX1262 LoRa (433/868/915/923 MHz); optional SX1280 (2.4 GHz)
- GNSS: Ublox MAX-M10S (optional) or L76K — GPS, GLONASS, BeiDou, QZSS
- 1.3-inch SH1106 OLED display (128×64, I²C)
- QMI8658 6-axis IMU + BME280 temperature/humidity/pressure + QMC6310 magnetometer
- AXP2101 PMU — 18650 battery holder + USB-C charging
- PCF85063ATL RTC, TF card slot, QWIIC connector
- 2.54 mm 2×13 expansion I/O header
- Supports Arduino, PlatformIO, MicroPython

## Specifications

| Parameter | Value |
| :-------: | :---: |
| MCU | ESP32-S3FN8 Dual-core LX7 @ 240 MHz |
| Flash | 8 MB |
| PSRAM | 8 MB |
| Display | 1.3-inch SH1106 OLED (128×64) |
| LoRa | SX1262 (433/868/915/923 MHz) / optional SX1280 (2.4 GHz) |
| GNSS | MAX-M10S (U-blox) or L76K |
| RTC | PCF85063ATL (I²C) |
| IMU | QMI8658 (6-axis) |
| Environment | BME280 (temperature / humidity / pressure) |
| Magnetometer | QMC6310 |
| PMU | AXP2101 |
| Storage | TF card slot |
| Wireless | 2.4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5.0 |
| USB | 1 × USB-C (USB + OTG) |
| Expansion | Wi-Fi antenna + LoRa antenna + GPS antenna + QWIIC |
| I/O Header | 2.54 mm 2×13 |
| Buttons | RESET + BOOT + Power |
| Battery | 3.7 V 18650 |
| Dimensions | 114 × 33 × 28 mm |

### I2C Device Addresses

| Device | 7-bit Address | Bus |
| :----- | :-----------: | :-: |
| OLED (SH1106) | 0x3C | Shared |
| RTC (PCF85063ATL) | 0x51 | Shared |
| Magnetometer (QMC6310) | 0x1C | Shared |
| Temp/Humidity/Pressure (BME280) | 0x77 | Shared |
| PMU (AXP2101) | 0x34 | Dedicated |

## Pin Diagram

<!-- PCB pin diagram image. -->

### Pin Mapping

| Name | GPIO | Available |
| :--- | :--: | :-------: |
| UART1 TX | 43 (external QWIIC) | ✅ |
| UART1 RX | 44 (external QWIIC) | ✅ |
| SDA | 17 | ❌ |
| SCL | 18 | ❌ |
| RTC INT | 14 | ❌ |
| IMU INT | 33 | ❌ |
| IMU CS | 34 | ❌ |
| SPI MOSI | 35 | ❌ |
| SPI MISO | 37 | ❌ |
| SPI SCK | 36 | ❌ |
| SD CS | 47 | ❌ |
| GNSS TX | 8 | ❌ |
| GNSS RX | 9 | ❌ |
| GNSS PPS | 6 | ❌ |
| GNSS Wake | 7 | ❌ |
| LoRa SCK | 12 | ❌ |
| LoRa MISO | 13 | ❌ |
| LoRa MOSI | 11 | ❌ |
| LoRa RST | 5 | ❌ |
| LoRa DIO1 | 1 | ❌ |
| LoRa BUSY | 4 | ❌ |
| LoRa CS | 10 | ❌ |
| BOOT button | 0 | ❌ |
| PMU IRQ | 40 | ❌ |
| PMU SDA | 42 | ❌ |
| PMU SCL | 41 | ❌ |

> Note: LoRa uses a dedicated SPI bus; all other peripherals share the main SPI bus. GPS hot-start backup power is supplied by the 18650 battery.

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T-Beam Supreme Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_T-BeamS3Supreme.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [MAX-M10S Datasheet](https://www.u-blox.com/en/product/max-m10-series)
* [BME280 Datasheet](https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/)
* [QMI8658 Datasheet](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/lib/SensorsLib/datasheet/QMI8658A%20Datasheet%20Rev1.0.pdf)

## Software Libraries

* [LilyGo-LoRa-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### Dependent Libraries

* [AXP202X_Library](https://github.com/lewisxhe/AXP202X_Library)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)

## FAQ

* **Q. Which GPS module version should I choose?**
  A. The MAX-M10S offers higher accuracy and lower power consumption; the L76K is more cost-effective. Choose based on positioning accuracy requirements and budget.

* **Q. Poor LoRa range?**
  A. Check antenna connections, use in open environments, and tune LoRa parameters (spreading factor, bandwidth, etc.).

* **Q. Short battery life?**
  A. Enable deep-sleep mode, disable unused sensors and peripherals, and use low-power operating modes.

* **Q. Cannot flash firmware?**
  A. Ensure USB CDC On Boot is enabled. Hold the BOOT button and press RESET to enter download mode.

## Version History

| Version | Release Date | Notes |
| :-----: | :----------: | :---- |
| T-Beam-SUPREME V3.0 | — | Initial release |
