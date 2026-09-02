---
title: T-Beam Supreme
show_source: false
tags: LoRa, GPS, ESP32-S3, IoT, Sensor
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam-supreme" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam-supreme/index/image/t-beam-supreme-1.jpg', alt: 'T-Beam Supreme front view' },
  { src: '/products/t-beam-series/t-beam-supreme/index/image/t-beam-supreme-2.jpg', alt: 'T-Beam Supreme physical image' },
  { src: '/products/t-beam-series/t-beam-supreme/index/image/t-beam-supreme-info-en.jpg', alt: 'T-Beam Supreme component overview' }
]" />

## Overview

T-Beam-Supreme V3.0 is a high-performance multifunctional IoT development board based on the **ESP32-S3FN8** dual-core processor, supporting Wi-Fi 802.11 b/g/n and Bluetooth 5.0. It integrates a **SX1262 LoRa** module (433/868/915/923 MHz), selectable **MAX-M10S or L76K GPS** module, **1.3-inch SH1106 OLED** (128 × 64), **AXP2101 power management**, and onboard sensors including a six-axis IMU (QMI8658), environmental sensor (BME280), and magnetometer (QMC6309/6310). Equipped with 8 MB PSRAM and 8 MB Flash, TF card slot, QWIIC interface, and 3.7 V 18650 battery support.

Suitable for smart hardware, environmental monitoring, LoRa long-range communication, and IoT node development scenarios.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa, GPS, OLED, Sensor examples |

<details>
<summary>Available examples</summary>

```
./examples/
├── ArduinoLoRa          # SX1276/SX1278 only
├── GPS                  # TinyGPS, UBlox examples
├── LoRaWAN              # LMIC_Library_OTTA, RadioLib_OTAA
├── OLED                 # SH1106 display examples
├── PMU                  # Power management examples
├── RadioLibExamples     # SX1262/LR1121 Transmit/Receive
├── Sensor               # BME280, QMI8658, QMC6310, PCF8563
└── Factory              # Factory test examples
```

</details>

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. After restarting VS Code, click **File** → **Open Folder** → select the `LilyGo-LoRa-Series` directory
4. Wait for dependency libraries to install
5. Open `platformio.ini`, under `default_envs` uncomment your board name
6. Uncomment one `src_dir = xxxx` line (only one active at a time)
7. Click **✓** to compile, then connect via USB-C and click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Copy all folders from the `lib` directory to your Arduino libraries folder:
   - Windows: `C:\Users\{Username}\Documents\Arduino`
   - macOS: `/Users/{Username}/Documents/Arduino`
   - Linux: `/home/{Username}/Arduino`
4. Open the example sketch from the `examples` directory
5. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240MHZ(WiFi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core1 |
| Flash Mode | QIO 80MHZ |
| Flash Size | **8MB(64Mb)** |
| Arduino Runs On | Core1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **8M Flash(3M APP/1.5MB SPIFFS)** |
| PSRAM | **QSPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| Programmer | **Esptool** |

6. In `utilities.h`, uncomment your board model (`T_BEAM_S3_SUPREME_SX1262` or `T_BEAM_S3_SUPREME_LR1121`)
7. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3FN8 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- SX1262 LoRa (433/868/915/923 MHz) or LR1121 (Sub-1G + 2.4G)
- Selectable GPS: MAX-M10S (high accuracy) or L76K (cost-optimized)
- 1.3-inch SH1106 OLED display (128 × 64)
- Six-axis IMU: QMI8658
- Environmental sensor: BME280 (temperature, humidity, pressure)
- Magnetometer: QMC6309 / QMC6310U / QMC6310N
- RTC: PCF85063ATL
- AXP2101 power management, supports 3.7 V 18650 battery
- 8 MB Flash + 8 MB PSRAM + TF card slot
- QWIIC / STEMMA QT expansion interface

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3FN8 @ Dual-core LX7, 240 MHz |
| Flash | 8 MB |
| PSRAM | 8 MB (QSPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| LoRa | SX1262 (433/868/915/923 MHz) / LR1121 |
| GPS | MAX-M10S or L76K (selectable) |
| Display | 1.3-inch SH1106 OLED, 128 × 64, I2C |
| IMU | QMI8658 (6-axis) |
| Environmental Sensor | BME280 (temperature / humidity / pressure) |
| Magnetometer | QMC6309 / QMC6310U / QMC6310N |
| RTC | PCF85063ATL (I2C) |
| Power Management | AXP2101 |
| USB Input | 3.9 V – 6 V (USB-C) |
| Battery | 3.7 V 18650 |
| Storage Expansion | TF card slot |
| Dimensions | 114 × 33 × 28 mm |

### I2C Device Addresses

| Device | 7-bit Address | Bus |
| :----: | :-----------: | :-: |
| OLED (SH1106) | 0x3C / 0x3D | I2C Bus 0 |
| MAG (QMC6310U / QMC6310N) | 0x1C / 0x3C | I2C Bus 0 |
| MAG (QMC6309) | 0x7C | I2C Bus 0 |
| BME280 | 0x77 | I2C Bus 0 |
| RTC (PCF8563) | 0x51 | I2C Bus 1 |
| PMU (AXP2101) | 0x34 | I2C Bus 1 |

### AXP2101 Power Channels

| Channel | Peripheral |
| :------: | :--------- |
| DC1 | ESP32-S3 |
| DC3 / DC4 / DC5 | External M.2 Socket |
| ALDO1 | BME280 + Display + MAG Sensor |
| ALDO2 | Sensor |
| ALDO3 | Radio |
| ALDO4 | GPS |
| BLDO1 | SD Card |
| BLDO2 | External pin header |

> GPS backup power is provided by the 18650 battery. Remove the battery and GPS hot start will not be available.

## Pin Diagram

<img src="/products/t-beam-series/t-beam-supreme/index/image/t-beam-supreme-pin-en.jpg" alt="T-Beam Supreme pin diagram" width=100%>

### Pin Mapping

| Pin Name | GPIO | Available |
| :------- | :--: | :-------: |
| Uart1 TX | 43 (QWIIC) | ✅ |
| Uart1 RX | 44 (QWIIC) | ✅ |
| I2C SDA | 17 | ❌ |
| I2C SCL | 18 | ❌ |
| SPI MOSI | 35 | ❌ |
| SPI MISO | 37 | ❌ |
| SPI SCK | 36 | ❌ |
| SD CS | 47 | ❌ |
| GNSS TX | 8 | ❌ |
| GNSS RX | 9 | ❌ |
| GNSS PPS | 6 | ❌ |
| GNSS Wake-up (L76K only) | 7 | ❌ |
| LoRa SCK | 12 | ❌ |
| LoRa MISO | 13 | ❌ |
| LoRa MOSI | 11 | ❌ |
| LoRa RESET | 5 | ❌ |
| LoRa DIO1/DIO9 | 1 | ❌ |
| LoRa BUSY | 4 | ❌ |
| LoRa CS | 10 | ❌ |
| IMU (QMI8658) CS | 34 | ❌ |
| IMU (QMI8658) INT | 33 | ❌ |
| RTC INT | 14 | ❌ |
| BOOT Button | 0 | ❌ |
| PMU IRQ | 40 | ❌ |
| PMU SDA | 42 | ❌ |
| PMU SCL | 41 | ❌ |

## Dimension Diagram

## Schematic

* [T-Beam Supreme Schematic PDF](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T-Beam-S3-Supreme/T-Beam-S3-Supreme-V3.1.pdf)

## Datasheet

* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)
* [MAX-M10S Datasheet](/datasheet/MAX-M10S_DataSheet_UBX-20035208.pdf)
* [BME280 Datasheet](/datasheet/bst-bme280-ds002.pdf)
* [QMI8658 Datasheet](/datasheet/QMI8658A%20Datasheet%20Rev1.0.pdf)

## Software Development

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

* **Q. How to choose between GPS module versions?**
  A. MAX-M10S has higher accuracy and lower power consumption; L76K has better cost advantage. Choose based on positioning accuracy requirements and budget.

* **Q. LoRa communication distance is not ideal?**
  A. Check antenna connection, ensure use in open environment, and adjust LoRa parameters (spreading factor, bandwidth, etc.).

* **Q. Battery life is short?**
  A. Enable deep sleep mode, disable unused sensors and peripherals, and select low-power operation modes.

* **Q. Cannot flash the program?**
  A. Ensure USB CDC On Boot is enabled. Hold the BOOT button and click RESET to enter download mode.

* **Q. T-Beam Supreme has three magnetometer variants?**
  A. Yes: QMC6310N, QMC6310U, and QMC6309, each with a different I2C device address. Check the label on your board.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Beam-Supreme V3.0 | — | Initial release |
