---
title: T3-TCXO
show_source: false
tags: ESP32-Pico-D4, LoRa, TCXO, OLED, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3-txco" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-txco/index/image/t3-txco-1.jpg', alt: 'T3-TCXO front view' },
  { src: '/products/t3-series/t3-txco/index/image/t3-txco-2.jpg', alt: 'T3-TCXO physical image' },
  { src: '/products/t3-series/t3-txco/index/image/t3-txco-3.jpg', alt: 'T3-TCXO pin diagram' }
]" />

## Overview

LILYGO T3-TCXO is a wireless communication development board based on the **ESP32-Pico-D4** and **SX1276 LoRa** (868/915 MHz). The key differentiator is the onboard **TCXO (Temperature Compensated Crystal Oscillator)**, which significantly improves frequency stability across wide temperature ranges (±0.5 ppm, −40 °C to +85 °C) — ideal for applications in environments with large temperature variations. Supports USB-C, 3.7 V Li-Po battery, and solar input. Equipped with an SSD1306 OLED and TF card slot. Suitable for smart agriculture, remote sensors, and industrial monitoring.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa, OLED, LoRaWAN, battery examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-LoRa-Series` project folder
4. Open `platformio.ini`, under `[platformio]` → `default_envs` uncomment your board name
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
| Board | **ESP32 Dev Module** |
| Port | Your port |
| CPU Frequency | 240 MHz (WiFi/BT) |
| Core Debug Level | None |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core1 |
| Flash Frequency | 80 MHz |
| Flash Mode | QIO |
| Flash Size | **4MB (32Mb)** |
| JTAG Adapter | Disabled |
| Arduino Runs On | Core1 |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enable** |
| Upload Speed | 921600 |
| Programmer | **Esptool** |

6. In `utilities.h`, uncomment your board model (e.g., `T3_V3_0_SX1276_TCXO`)
7. Click **Upload**

> If upload fails: hold **BOOT**, press and release **RST**, then click Upload.

### Development Platforms

1. [MicroPython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)
4. [Visual Studio Code](https://code.visualstudio.com/)

## Video

## Key Features

- ESP32-Pico-D4 dual-core @ 240 MHz, Wi-Fi + Bluetooth 4.2 + BLE
- SX1276 LoRa (868/915 MHz) with TCXO (±0.5 ppm, −40 °C to +85 °C)
- 0.96-inch SSD1306 I2C OLED
- 4 MB Flash + 2 MB PSRAM + TF card slot
- USB-C / 3.7 V Li-Po battery / solar input
- 2 × QWIIC, 2.54mm 2×13 GPIO expansion

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-Pico-D4 @ Dual-core, 240 MHz |
| Flash | 4 MB |
| PSRAM | 2 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 4.2 + BLE |
| LoRa | SX1276, 868 / 915 MHz |
| Oscillator | TCXO (Temperature Compensated) |
| Display | 0.96-inch SSD1306 OLED, I2C |
| Storage | TF card slot |
| USB | 1 × Type-C |
| Power | USB / 3.7 V Li-Po / Solar |
| Expansion | 2 × QWIIC, 2.54mm 2×13 GPIO |
| Buttons | RESET + BOOT |
| Mounting Holes | 2 × M2 |
| Dimensions | 66 × 27 × 13 mm |

## Pin Diagram

<img src="/products/t3-series/t3-txco/index/image/t3-txco-3.jpg" alt="T3-TCXO pin diagram" width=100%>

### Pin Mapping

| Signal | GPIO | Available |
| :----- | :--: | :-------: |
| OLED SDA | 21 | ❌ |
| OLED SCL | 22 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 15 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 19 | ❌ |
| LoRa MOSI | 27 | ❌ |
| LoRa RESET | 23 | ❌ |
| LoRa DIO0 | 26 | ❌ |
| LoRa DIO1 | 32 | ❌ |
| LoRa CS | 7 | ❌ |
| LoRa TCXO EN | 12 | ❌ |
| Battery ADC | 35 | ❌ |
| Onboard LED | 25 | ❌ |

## Dimension Diagram

## Schematic

* [T3-TCXO V3.0 Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V3.0.pdf)

## Datasheet

* [ESP32-Pico-D4 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf)
* [SX1276 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)
* [SSD1306 Datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)

## Software Development

* [LilyGo-LoRa-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### Dependent Libraries

* [RadioLib](https://github.com/jgromes/RadioLib)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [u8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## FAQ

* **Q. How to adjust the external antenna resistor?**
  A. Refer to the image below for resistor direction adjustment:
  <img src="/products/t3-series/t3-txco/index/image/t3-txco-4.jpg" alt="Antenna resistor adjustment" width=60%>

* **Q. What advantages does TCXO have over a standard crystal?**
  A. TCXO maintains higher frequency stability when temperature changes (±0.5 ppm over −40 °C to +85 °C), suitable for precision communication in variable-temperature environments.

* **Q. What power supply methods are supported?**
  A. Supports USB Type-C, 3.7 V Li-Po battery, and solar input, switchable via battery switch.

* **Q. What is the LoRa communication distance?**
  A. Under ideal conditions, several kilometers. Actual range depends on environment and antenna configuration.

* **Q. Upload fails?**
  A. Hold **BOOT**, press and release **RST**, then click Upload.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T3-TCXO V3.0 | — | Initial version |

---

## Related Tests

### TCXO Performance

| Temperature Range | Frequency Stability |
| :---------------: | :-----------------: |
| −40 °C to +85 °C | ±0.5 ppm |
| 25 °C | ±0.2 ppm |

### SX1276 RF Specifications

| Feature | Details |
| :-----: | :-----: |
| RF Module | SX1276 |
| Frequency Range | 840–945 MHz |
| Transfer Rate (LoRa) | 0.018–37.5 kbps |
| Transfer Rate (FSK) | 1.2–300 kbps |
| Modulation | FSK, GFSK, MSK, GMSK, LoRa, OOK |
