---
title: T3-S3 V1.3
show_source: false
tags: ESP32-S3, LoRa, SX1262, SX1280, OLED, Meshtastic, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3-s3-v1-3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-1.jpg', alt: 'T3-S3 V1.3 front view' },
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-2.jpg', alt: 'T3-S3 V1.3 back view' },
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-3.jpg', alt: 'T3-S3 V1.3 dimensions' },
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-info.jpg', alt: 'T3-S3 V1.3 specifications' },
]" />

## Overview

LILYGO T3-S3 V1.3 is an updated revision of the T3-S3, based on the **ESP32-S3FH4R2** dual-core LX7 microcontroller with multi-band LoRa communication. It can be optionally configured with **SX1262/SX1276/SX1278** (433/868/915 MHz) or **SX1280** (2.4 GHz) LoRa modules, supporting long-distance low-power communication. Features an onboard **0.96-inch SSD1306 OLED** (128 × 64), MicroSD (TF) card slot, and USB-C for power and programming. Compared to V1.2, V1.3 includes hardware optimization and improved layout. Fully supported by the Meshtastic firmware for off-grid mesh networking.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa, OLED, SD Card, LoRaWAN examples |

<details>
<summary>Available examples</summary>

```
./examples/
├── ArduinoLoRa          # SX1276/SX1278 only
├── GPS                  # T-Beam GPS examples
├── LoRaWAN              # LMIC_Library_OTTA, RadioLib_OTAA
├── OLED                 # SSD1306/SH1106 display examples
├── RadioLibExamples     # SX1276/78/62/80 Transmit/Receive
├── T3S3Factory          # T3-S3 factory test
└── Factory              # Factory test examples
```

</details>

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-LoRa-Series` project folder
4. Open `platformio.ini`, under `default_envs` uncomment your board name
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Copy all folders from the `lib` directory to your Arduino libraries folder:
   - Windows: `C:\Users\{Username}\Documents\Arduino`
   - macOS: `/Users/{Username}/Documents/Arduino`
   - Linux: `/home/{Username}/Arduino`
4. Open the example `.ino` file from the `examples` directory
5. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **LilyGo T3-S3** |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core1 |
| Arduino Runs On | Core1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **QSPI PSRAM** |
| Board Revision | Select per your actual model |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| Programmer | **Esptool** |

6. Click **Upload**

> If upload fails: hold **BOOT**, press **RST**, release RST, then click Upload.

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32-S3FH4R2 dual-core LX7 @ 240 MHz, Wi-Fi + Bluetooth 5.0
- SX1262 / SX1276 / SX1278 (433/868/915 MHz) or SX1280 (2.4 GHz) LoRa — optional
- 0.96-inch SSD1306 OLED (128 × 64), I2C
- 4 MB Flash + 2 MB QSPI PSRAM + TF card slot
- USB-C power and programming
- Battery switch, supports 3.7 V Li-Po battery
- 2 × QWIIC interfaces, 2.54 mm 2×13 GPIO expansion
- Meshtastic compatible

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3FH4R2, Dual-core LX7 @ 240 MHz |
| Flash | 4 MB (Quad-SPI) |
| PSRAM | 2 MB (Quad-SPI) |
| Wireless | Wi-Fi 2.4 GHz 802.11 b/g/n, Bluetooth 5.0 |
| LoRa | SX1262 / SX1276 / SX1278 (433/868/915 MHz) or SX1280 (2.4 GHz) |
| Display | 0.96-inch SSD1306 OLED, 128 × 64, I2C |
| Storage | TF card slot (SPI) |
| USB | 1 × USB-C |
| Expansion | 2 × QWIIC, 2.54 mm 2×13 GPIO |
| Buttons | RESET + BOOT |
| Battery | 3.7 V Li-Po (with battery switch) |
| Mounting Holes | 2 × M2 |
| Dimensions | 66 × 36 × 14 mm |
| Weight | <!-- placeholder --> |
| Package size | <!-- placeholder --> |

![T3-S3 V1.3 Specifications](/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-info.jpg)

## Pin Diagram

### SX1262 Pin Mapping

| Signal | GPIO | Available |
| :----- | :--: | :-------: |
| QWIIC Uart1 TX | 43 | ✅ |
| QWIIC Uart1 RX | 44 | ✅ |
| QWIIC IO10 | 10 | ✅ |
| QWIIC IO21 | 21 | ✅ |
| I2C SDA | 18 | ❌ |
| I2C SCL | 17 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 11 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 3 | ❌ |
| LoRa MOSI | 6 | ❌ |
| LoRa RESET | 8 | ❌ |
| LoRa DIO1 | 33 | ❌ |
| LoRa BUSY | 34 | ❌ |
| LoRa CS | 7 | ❌ |
| BOOT Button | 0 | ❌ |
| Battery ADC | 1 | ❌ |
| Onboard LED | 37 | ❌ |

### SX1276 / SX1278 Pin Mapping

| Signal | GPIO | Available |
| :----- | :--: | :-------: |
| QWIIC Uart1 TX | 43 | ✅ |
| QWIIC Uart1 RX | 44 | ✅ |
| QWIIC IO10 | 10 | ✅ |
| QWIIC IO21 | 21 | ✅ |
| I2C SDA | 18 | ❌ |
| I2C SCL | 17 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 11 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 3 | ❌ |
| LoRa MOSI | 6 | ❌ |
| LoRa RESET | 8 | ❌ |
| LoRa DIO0 | 9 | ❌ |
| LoRa DIO1 | 33 | ❌ |
| LoRa DIO2 | 34 | ❌ |
| LoRa DIO3 | 21 | ❌ |
| LoRa DIO4 | 10 | ❌ |
| LoRa DIO5 | 36 | ❌ |
| LoRa CS | 7 | ❌ |
| BOOT Button | 0 | ❌ |
| Battery ADC | 1 | ❌ |
| Onboard LED | 37 | ❌ |

> GPIO10 and GPIO21 can be freed by removing the two resistors connecting them to LoRa DIO3/DIO4.

### SX1280 Pin Mapping

| Signal | GPIO | Available |
| :----- | :--: | :-------: |
| QWIIC Uart1 TX | 43 | ✅ |
| QWIIC Uart1 RX | 44 | ✅ |
| I2C SDA | 18 | ❌ |
| I2C SCL | 17 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 11 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 3 | ❌ |
| LoRa MOSI | 6 | ❌ |
| LoRa RESET | 8 | ❌ |
| LoRa DIO1 | 9 | ❌ |
| LoRa BUSY | 36 | ❌ |
| LoRa CS | 7 | ❌ |
| BOOT Button | 0 | ❌ |
| Battery ADC | 1 | ❌ |
| Onboard LED | 37 | ❌ |

### Contrast Comparison

![T3-S3 V1.3 Contrast](/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-contrast.jpg)

### Pinout Diagram

![T3-S3 V1.3 Pinout](/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-pinout.jpg)

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T3-S3 V1.3 Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_S3_V1.3.pdf)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [SSD1306 Datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)

## Software Libraries

* [LilyGo-LoRa-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### Dependent Libraries

* [RadioLib](https://github.com/jgromes/RadioLib)
* [U8g2](https://github.com/olikraus/u8g2)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [SD](https://github.com/esp8266/Arduino/tree/master/libraries/SD)

## FAQ

* **Q. How to choose the LoRa module version?**
  A. SX1262/SX1276 are suitable for Sub-1 GHz bands (433/868/915 MHz) with longer range; SX1280 is suitable for the 2.4 GHz band with higher data rate.

* **Q. What changed from V1.2 to V1.3?**
  A. V1.3 includes hardware optimizations and improved PCB layout over V1.2. The pin mapping remains the same.

* **Q. OLED screen not displaying?**
  A. Check the I2C address configuration (SSD1306 default is 0x3C). Confirm SDA = GPIO18, SCL = GPIO17.

* **Q. SD card not recognized?**
  A. Ensure the SD card is formatted as FAT32, check that it is properly inserted, and try a different card.

* **Q. Upload fails?**
  A. Hold **BOOT**, press and release **RST**, then click Upload.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| T3-S3 V1.2 | — | Initial release: ESP32-S3 with multi-band LoRa |
| T3-S3 V1.3 | — | Hardware optimization update |
