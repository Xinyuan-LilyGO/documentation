---
title: T3-S3 E-Paper
show_source: false
tags: ESP32-S3, E-Paper, LoRa, Low Power, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/ts-s3-epaper" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3-e-paper/index/image/t3-s3-e-paper-1.jpg', alt: 'T3-S3 E-Paper front view' },
  { src: '/products/t3-series/t3-s3-e-paper/index/image/t3-s3-e-paper-2.jpg', alt: 'T3-S3 E-Paper physical image' },
  { src: '/products/t3-series/t3-s3-e-paper/index/image/t3-s3-e-paper-info-en.jpg', alt: 'T3-S3 E-Paper component overview' }
]" />

## Overview

T3-S3 E-Paper is a low-power IoT development board based on the **ESP32-S3FH4R2** microcontroller with 2.4 GHz Wi-Fi and Bluetooth 5.0. It integrates a **2.13-inch E-ink display** (DEPG0213BN, 250 × 122) and supports multi-band LoRa modules (SX1280 @ 2.4 GHz, or SX1276/SX1262 @ 868/915 MHz). Equipped with 4 MB Flash, 2 MB PSRAM, TF card expansion, and dual power supply (USB-C or 3.7 V Li-Po battery). Suitable for electronic labels, smart agriculture, industrial sensing, and smart warehousing.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [Lilygo-LoRa-Epaper-series](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series) | ✓ | | E-Paper, LoRa, SD Card examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the project folder. Open `platformio.ini`, uncomment your example under `[platformio]`
4. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. In Board Manager, find and install **esp32 by Espressif Systems**
3. Copy library folders from the project to your Arduino Sketchbook libraries folder
4. Open the example `.ino` file
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
| Flash Size | **4MB(32Mb)** |
| Core Debug Level | None |
| Partition Scheme | Default 4MB with spiffs |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6. Select the correct port and click **Upload**

> If upload fails: hold **BOOT**, press **RST**, release RST, then click Upload.

### Development Platforms

1. [MicroPython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## Video

## Key Features

- ESP32-S3FH4R2 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0 LE
- 2.13-inch DEPG0213BN E-ink display (250 × 122), SPI
- LoRa: SX1280 (2.4 GHz) or SX1276/SX1262 (868/915 MHz)
- 4 MB Flash + 2 MB OPI PSRAM + TF card slot
- USB-C or 3.7 V Li-Po battery (with battery switch)
- STEMMA QT / QWIIC interface

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3FH4R2 @ Dual-core LX7, 240 MHz |
| Flash | 4 MB |
| PSRAM | 2 MB (OPI PSRAM) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| LoRa | SX1280 (2.4 GHz) / SX1276 / SX1262 (868/915 MHz) |
| Display | 2.13-inch DEPG0213BN E-Paper, 250 × 122 |
| Storage | TF card slot |
| USB | 1 × Type-C |
| Battery | 3.7 V Li-Po (JST-GH 2 mm) |
| Expansion | STEMMA QT / QWIIC, 2.54mm 2×13 GPIO |
| Mounting Holes | 4 × M2 |
| Dimensions | 67 × 29 × 15 mm |

## Pin Diagram

<img src="/products/t3-series/t3-s3-e-paper/index/image/t3-s3-e-paper-en.jpg" alt="T3-S3 E-Paper pin diagram" width=100%>

### Pin Mapping

```c
#define EDP_BUSY_PIN   48
#define EDP_RSET_PIN   47
#define EDP_DC_PIN     16
#define EDP_CS_PIN     15
#define EDP_CLK_PIN    14   // CLK
#define EDP_MOSI_PIN   11   // MOSI
#define EDP_MISO_PIN   -1

#define RADIO_SCLK_PIN 5
#define RADIO_MISO_PIN 3
#define RADIO_MOSI_PIN 6
#define RADIO_CS_PIN   7
#define RADIO_DIO1_PIN 33
#define RADIO_BUSY_PIN 34
#define RADIO_RST_PIN  8
#define RADIO_POW_PIN  35

// SX1276/78 only
#define RADIO_DIO0_PIN 9
#define RADIO_DIO3_PIN 21
#define RADIO_DIO4_PIN 10
#define RADIO_DIO5_PIN 36

#define SDCARD_MOSI    EDP_MOSI_PIN
#define SDCARD_SCLK    EDP_CLK_PIN
#define SDCARD_MISO    2
#define SDCARD_CS      13

#define BOARD_LED      37
#define BAT_ADC_PIN    1
#define BUTTON_PIN     0
```

## Dimension Diagram

## Schematic

* [T3-S3-E-paper V1.0 Schematic](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/blob/master/schematic/T3S3_E-paper%20V1.0%2023-12-16.pdf)

## Datasheet

* DEPG0213BN (E-Paper)
* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)
* [SX1276 Datasheet](/datasheet/SX1276-7-8-9_Datasheet.pdf)
* [SX1280 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1280zxxxxgw1)

## Software Development

* [Lilygo-LoRa-Epaper-series GitHub Repository](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series)

### Dependent Libraries

* [GxEPD](https://github.com/bot1131357/GxEPD)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)

## FAQ

* **Q. How to adjust the external antenna resistor?**
  A. Refer to the image below for resistor direction adjustment:
  <img src="/products/t3-series/t3-s3-e-paper/index/image/t3-s3-e-paper-3.jpg" alt="Antenna resistor adjustment" width=60%>

* **Q. Why is the E-ink refresh slow?**
  A. E-ink full refresh takes 2–3 seconds by design. After refresh, no power is needed to maintain the display — ideal for static content.

* **Q. Which LoRa modules are supported?**
  A. SX1280 (2.4 GHz), SX1276 (868/915 MHz), SX1262 (868/915 MHz).

* **Q. What is the battery life?**
  A. In deep sleep mode with a suitable Li-Po battery, battery life can reach several weeks to months.

* **Q. Upload fails?**
  A. Hold **BOOT**, press and release **RST**, then release BOOT, and click Upload.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T3-S3-E-paper V1.0 | 2023-12-16 | Initial hardware version |
| T3-S3-E-paper V1.1 | 2024-03-10 | Software optimization update |

---

## Related Tests

### E-Paper Performance

| Refresh Mode | Refresh Time | Power |
| :----------: | :----------: | :---: |
| Full Refresh | 2–3 s | Higher |
| Partial Refresh | 0.3–0.5 s | Lower |
| Sleep Mode | — | Very Low |
