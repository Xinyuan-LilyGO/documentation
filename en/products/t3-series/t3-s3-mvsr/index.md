---
title: T3-S3 MVSR Board
show_source: false
tags: ESP32-S3, LoRa, Audio, Voice, Vibration, RTC
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3-s3-mvsr-board" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard01.jpg', alt: 'T3-S3 MVSR Board front view' },
  { src: '/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard02.jpg', alt: 'T3-S3 MVSR Board physical image' },
  { src: '/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard.jpg', alt: 'T3-S3 MVSR Board pin diagram' }
]" />

## Overview

The T3-S3 MVSR Board is an expansion baseboard for the **T3-S3 V1.2** main board, adding **vibration motor**, **microphone** (I2S/PDM), **speaker** (MAX98357A I2S), and **RTC** (PCF85063ATL) functions. Its primary use case is **LoRa voice transmission**: the SX1262 version uses FSK modulation; the SX1280 version uses LoRa modulation. It can also be used for AI voice interaction, MP3 playback, and other audio applications. Features extremely low static current (2.77 µA deep sleep).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T3-S3-MVSRBoard](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard) | ✓ | | Audio, LoRa voice, RTC, vibration, SD examples |

<details>
<summary>Available examples</summary>

| Example | Description |
| :-----: | :---------: |
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_ReadData) | Digital microphone read |
| [DMIC_SD](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_SD) | Microphone → SD card recording |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Original_Test) | Factory test |
| [PCF85063](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063) | RTC read/write |
| [SD_Music](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SD_Music) | Play MP3 from SD card |
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Sleep_Wake_Up) | Deep sleep & wake |
| [SX126x_Walkie_Talkie](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_Walkie_Talkie) | LoRa voice intercom |
| [Voice_Speaker](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Voice_Speaker) | Voice → speaker |
| [Vibration_Motor](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Vibration_Motor) | Vibration motor control |

</details>

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T3-S3-MVSRBoard` project folder
4. Open `platformio.ini`, under `[platformio]` → `default_envs` uncomment the example to flash
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. In **Tools** → **Board Manager**, search for `esp32` and install **esp32 by Espressif Systems**
3. Copy library folders from the project `libraries` directory to your Arduino Sketchbook libraries folder
4. Open the example `.ino` file from the `examples` directory
5. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | QIO 80 MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6. Select the correct port and click **Upload**

> If upload fails: hold **BOOT**, press **RST**, release RST, then click Upload.

### Development Platforms

1. [MicroPython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)
4. [Visual Studio Code](https://code.visualstudio.com/)

## Video

## Key Features

- ESP32-S3FH4R2 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- SX1262 (868/915 MHz, FSK) or SX1280 (2.4 GHz, LoRa) — matches T3-S3 main board
- MAX98357A I2S speaker amplifier (9 dB gain default)
- Microphone: MSM261S4030H0R I2S (V1.0) / MP34DT05-A PDM (V1.1)
- PCF85063ATL Real-time Clock (I2C)
- Haptic vibration motor
- TF card slot for storage expansion
- Deep sleep current: 2.77 µA

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3FH4R2 @ Dual-core LX7, 240 MHz |
| Flash | 4 MB |
| PSRAM | 2 MB (OPI PSRAM) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 |
| LoRa | SX1262 (868/915 MHz) or SX1280 (2.4 GHz) |
| Speaker | MAX98357A (I2S) |
| Microphone V1.0 | MSM261S4030H0R (I2S) |
| Microphone V1.1 | MP34DT05-A (PDM) |
| RTC | PCF85063ATL (I2C) |
| Vibration | Haptic motor |
| Storage | TF card slot |
| USB | 1 × Type-C |
| Power Input | 5 V / 500 mA |
| Mounting Holes | 2 × M2 |
| Dimensions | 66 × 27 × 15 mm |

## Pin Diagram

<img src="/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard.jpg" alt="T3-S3 MVSR Board pin diagram" width=100%>

### Speaker (MAX98357A)

| Signal | GPIO |
| :----- | :--: |
| BCLK | 40 |
| LRCLK | 41 |
| DATA | 39 |
| SD_MODE | 38 |

### Microphone — V1.0 (MSM261S4030H0R, I2S)

| Signal | GPIO |
| :----- | :--: |
| BCLK | 47 |
| WS | 15 |
| DATA | 48 |
| EN | 35 |

### Microphone — V1.1 (MP34DT05-A, PDM)

| Signal | GPIO |
| :----- | :--: |
| LRCLK | 15 |
| DATA | 48 |
| EN | 35 |

### Vibration Motor

| Signal | GPIO |
| :----- | :--: |
| DATA | 46 |

### RTC (PCF85063ATL)

| Signal | GPIO |
| :----- | :--: |
| SDA | 42 |
| SCL | 45 |
| INT | 16 |

### SX126x (SX1262)

| Signal | GPIO |
| :----- | :--: |
| CS | 7 |
| RST | 8 |
| SCLK | 5 |
| MOSI | 6 |
| MISO | 3 |
| DIO1 | 33 |
| BUSY | 34 |

### SX127x

| Signal | GPIO |
| :----- | :--: |
| CS | 7 |
| RST | 8 |
| SCLK | 5 |
| MOSI | 6 |
| MISO | 3 |
| DIO0 | 9 |
| DIO1 | 33 |
| DIO2 | 34 |
| DIO3 | 21 |
| DIO4 | 10 |
| DIO5 | 36 |

### SX128x (SX1280)

| Signal | GPIO |
| :----- | :--: |
| CS | 7 |
| RST | 8 |
| SCLK | 5 |
| MOSI | 6 |
| MISO | 3 |
| DIO1 | 9 |
| BUSY | 36 |
| TX | 10 |
| RX | 21 |

## Dimension Diagram

## Schematic

* [T3-S3-MVSRBoard V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/project/T3-S3-MVSRBoard_V1.0.pdf)

## Datasheet

* [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MAX98357AETE+T.pdf)
* [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/mp34dt05-a.pdf)
* [MSM261S4030H0R Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MEMSensing-MSM261S4030H0R.pdf)
* [PCF85063ATL Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/PCF85063ATL-1,118.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Software Development

* [T3-S3-MVSRBoard GitHub Repository](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard)

### Dependent Libraries

* [Arduino_DriveBus](https://github.com/Xk-w/Arduino_DriveBus)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [ESP8266Audio](https://github.com/earlephilhower/ESP8266Audio)

## FAQ

* **Q. How to adjust the external antenna resistor?**
  A. Refer to the image below for resistor direction adjustment:
  <img src="/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard04.jpg" alt="Antenna resistor adjustment" width=60%>

* **Q. What's the difference between SX1262 and SX1280 versions?**
  A. SX1262 supports 868/915 MHz using FSK modulation; SX1280 supports 2.4 GHz using LoRa modulation.

* **Q. Which audio formats are supported?**
  A. Supports WAV, MP3, and other common audio formats (with software decoding libraries).

* **Q. What is the LoRa voice communication range?**
  A. Under ideal conditions, voice communication range can reach several kilometers, depending on environment and antenna.

* **Q. Does it support real-time voice transmission?**
  A. Yes — supports real-time voice acquisition, compression, and LoRa transmission for walkie-talkie functionality.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T3-S3-MVSRBoard_V1.0 | 2024-11-06 | Initial version |
| T3-S3-MVSRBoard_V1.1 | 2025-03-18 | Changed microphone to MP34DT05-A (PDM) |

---

## Related Tests

### Power Consumption

| Mode | Minimum Current |
| :--: | :-------------: |
| Deep Sleep | 2.77 µA |

### Audio Performance

| Parameter | Specification |
| :-------: | :-----------: |
| Sample Rate | 8–48 kHz |
| Bit Depth | 16-bit |
| Signal-to-Noise Ratio | >90 dB |
