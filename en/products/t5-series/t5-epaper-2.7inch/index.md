---
title: T5 E-Paper 2.7 inch
show_source: false
tags: ESP32, E-Paper, 2.7inch, ePaper, Wi-Fi, Bluetooth, IoT, Low Power
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t5s-2-7inch-e-paper" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5-epaper-2.7inch/index/image/t5-epaper-2.7inch-1.jpg', alt: 'T5 E-Paper 2.7 inch front view' },
]" />

## Overview

LILYGO T5 E-Paper 2.7 inch is an ESP32-based e-paper development board featuring a **2.7-inch Waveshare e-ink display** (264 × 176) with ultra-low standby power consumption. Powered by the **ESP32** dual-core Xtensa LX6 @ 240 MHz with Wi-Fi and Bluetooth 4.2, the board includes a **CP2102 USB-to-serial** chip for programming, a **MAX98357A I2S amplifier** and speaker connector for audio output, a MicroSD card slot, and a battery connector for portable operation. Ideal for IoT display nodes, electronic shelf labels, weather stations, and any application requiring a sunlight-readable, low-power display.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T5-Epaper-Series](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series) | ✓ | | E-paper display, deep sleep, audio, SD examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `LilyGo-T5-Epaper-Series` project folder
4. Open `platformio.ini`, uncomment the `T5_V27` environment
5. Click **✓** to compile, connect via Micro USB, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **Enabled** |
| Upload Speed | 921600 |

4. Click **Upload**

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- ESP32 dual-core Xtensa LX6 @ 240 MHz, Wi-Fi + Bluetooth 4.2
- 2.7-inch e-ink display (264 × 176, black & white)
- Ultra-low power: display retains image with zero power when not refreshing
- CP2102 USB-to-serial chip for easy programming via Micro USB
- MAX98357A I2S amplifier with speaker connector
- MicroSD card slot
- Battery connector for portable use
- Deep sleep support for long battery life

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32, Dual-core Xtensa LX6 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wireless | Wi-Fi 802.11 b/g/n, Bluetooth 4.2 |
| Display | 2.7-inch e-ink (264 × 176, black & white) |
| USB | Micro USB (CP2102) |
| Audio | MAX98357A I2S amplifier |
| Storage | MicroSD card slot |
| Battery | JST connector for Li-Ion/Li-Po |

## Pin Diagram

### E-Paper Display (SPI)

| Signal | GPIO |
| :----: | :--: |
| MOSI | 23 |
| MISO | 19 |
| CLK  | 18 |
| CS   | 5  |
| DC   | 17 |
| RST  | 16 |
| BUSY | 4  |

### MicroSD Card (SPI)

| Signal | GPIO |
| :----: | :--: |
| MOSI | 23 |
| MISO | 19 |
| CLK  | 18 |
| CS   | 13 |

### I2S Audio (MAX98357A)

| Signal | GPIO |
| :----: | :--: |
| BCLK | 26 |
| LRC  | 25 |
| DIN  | 22 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

- [LilyGo-T5-Epaper-Series GitHub Repository (hardware)](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series/tree/master/schematic)

## Datasheet

- [ESP32 Datasheet](/datasheet/esp32_datasheet_en.pdf)
- [CP2102 Datasheet](/datasheet/CP2102-9.pdf)

## Software Libraries

- [LilyGo-T5-Epaper-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series)

### Dependent Libraries

- [GxEPD](https://github.com/ZinggJM/GxEPD)
- [GxEPD2](https://github.com/ZinggJM/GxEPD2)
- [Adafruit GFX](https://github.com/adafruit/Adafruit-GFX-Library)
- [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)

## FAQ

* **Q. How long does an e-paper screen refresh take?**
  A. A full 2.7-inch e-paper refresh typically takes 2–4 seconds. Partial refresh (if supported) can be faster but may leave ghosting artifacts.

* **Q. Does the display retain its image when powered off?**
  A. Yes. E-paper displays are bistable — they retain their last image indefinitely without any power, making them ideal for deep-sleep IoT applications.

* **Q. Can I use deep sleep between updates?**
  A. Yes. ESP32 deep sleep current is in the µA range. Use `esp_deep_sleep_start()` and wake via a timer or GPIO interrupt for extremely long battery life.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V2.7 | | Initial release with 2.7-inch e-paper |
