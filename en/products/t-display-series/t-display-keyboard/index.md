---
title: T-Display-Keyboard
show_source: false
tags: ESP32, ST7789V, TFT, Keyboard, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-keyboard" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-keyboard/index/image/t-display-keyboard-1.jpg', alt: 'T-Display-Keyboard front view' },
  { src: '/products/t-display-series/t-display-keyboard/index/image/t-display-keyboard-2.jpg', alt: 'T-Display-Keyboard back view' },
]" />

## Overview

LILYGO T-Display-Keyboard is a handheld ESP32 development kit that combines the **T-Display** board (1.14-inch ST7789V IPS TFT, 240 × 135 px) with a compact physical keyboard shell. Based on the ESP32 dual-core LX6 processor at up to 240 MHz, it provides **Wi-Fi 802.11 b/g/n** and **Bluetooth 4.2 + BLE**. The keyboard shell exposes a full QWERTY-style keypad and a battery holder for portable, standalone applications. It is ideal for handheld controllers, message terminals, remote interfaces, and educational embedded projects.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display) | ✓ | | Display demos, TFT_eSPI examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `TTGO-T-Display` project folder
4. Open `platformio.ini` and select your example
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | Your port |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** or **16MB (128Mb)** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32 dual-core LX6 @ 240 MHz, Wi-Fi 802.11 b/g/n + Bluetooth 4.2 BLE
- 1.14-inch ST7789V IPS TFT LCD, 240 × 135 px
- Integrated keyboard shell for handheld use
- Optional 2800 mAh lithium battery support
- USB-C for power and programming
- Available in 4 MB and 16 MB Flash variants
- Modular interfaces: UART, SPI, I2C, I2S, PWM, ADC, DAC

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-D0WDQ6, dual-core LX6 @ 240 MHz |
| Flash | 4 MB / 16 MB (QSPI) |
| PSRAM | — |
| SRAM | 520 KB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 4.2 + BLE |
| Display | 1.14-inch ST7789V IPS TFT, 240 × 135 px |
| Display Interface | 4-wire SPI |
| Battery | Optional 805050 2800 mAh LiPo |
| USB | 1 × USB-C |
| Working Voltage | 2.7 V – 4.2 V |

## Pin Diagram

<!-- GPIO mapping table. -->

### Display (ST7789V)

| ST7789V  | MOSI   | SCK    | CS     | DC     | RST    | BL     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32    | GPIO19 | GPIO18 | GPIO5  | GPIO16 | GPIO23 | GPIO4  |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T-Display V1.0 Schematic](https://github.com/Xinyuan-LilyGO/TTGO-T-Display/blob/master/schematic/ESP32-TFT(6-26).pdf)

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

* [TTGO-T-Display GitHub Repository](https://github.com/Xinyuan-LilyGO/TTGO-T-Display)

### Dependent Libraries

* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

## FAQ

<!-- Errata and common issues. -->

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| V1.0 | | Initial release |
