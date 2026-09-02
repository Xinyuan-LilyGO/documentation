---
title: T-Watch 2019
show_source: false
tags: ESP32, Smartwatch, TouchScreen, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://item.taobao.com/item.htm?id=750160296086" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-2019/index/image/t-watch-2019-1.jpg', alt: 'T-Watch 2019' },
]" />

## Overview

T-Watch 2019 is a powerful, feature-rich smartwatch platform based on ESP32. It combines a high-quality display, multiple sensors, and wireless connectivity into a compact wearable device. With an integrated power management unit and various optional peripherals, the T-Watch is ideal for IoT projects, fitness tracking, and custom smartwatch applications. The library provides complete hardware drivers, LVGL graphics framework integration, and extensive examples to get you started quickly.

## Quick Start

### Hardware Assembly

The T-Watch is pre-assembled. No soldering required for basic usage. For expansion modules, refer to the specific module documentation.

### Arduino

1. Install the [Arduino IDE](https://www.arduino.cc/en/Main/Software)
2. Download the library from [GitHub](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library)
3. Install via Sketch → Include Library → Add .ZIP Library
4. Select your T-Watch model in `config.h` of each example
5. Select **TTGO T-Watch** as the board in Arduino IDE
6. Upload the sketch

### ESP-IDF

<!-- Link to or embed the ESP-IDF setup guide. -->

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- **Multiple Display Options**: 1.54" 240×240 touchscreen (ST7789V) across various versions
- **Rich Sensor Suite**: Includes IMU (BMA423), RTC (PCF8563), and optional GPS, microphone, and infrared sensor depending on version
- **Power Management**: Integrated AXP202 power management unit for battery operation
- **Wireless Connectivity**: Bluetooth and WiFi via ESP32
- **Extensive Libraries**: Pre-built drivers for all hardware components
- **LVGL Graphics Support**: LVGL 7.7.2 framework for rich UI development
- **Modular Design**: Optional expansion modules for GPS, audio, and other peripherals
- **Multiple Variants**: Supports T-Watch 2019, 2020 (V1/V2/V3), and newer versions

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32 (D0WDQ6) |
| Flash | 4–8 MB (variant dependent) |
| PSRAM | 16 MB |
| Wireless | WiFi 802.11b/g/n, Bluetooth 4.2 |
| Display | 1.54" 240×240 ST7789V TFT LCD |
| Touchscreen | Capacitive FT6336 |
| IMU | BMA423 (some versions), MPU6050 (T-Block) |
| RTC | PCF8563 |
| Power Management | AXP202 |
| Weight | ~85g (with band) |
| Package Size | 45 × 45 × 15 mm (watch body) |

## Pin Diagram

### Display

| Chip | BL | RESET | SCK | MOSI | MISO | CS | DC |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32 | GPIO12 | GPIO5 | GPIO18 | GPIO19 | GPIO23 | GPIO27 | GPIO33 |

### Touch Panel

| Chip | SDA | SCL | INT |
| :------: | :----: | :----: | :----: |
| FT6336 | GPIO21 | GPIO22 | GPIO38 |

### IMU (BMA423)

| Chip | SDA | SCL | INT |
| :------: | :----: | :----: | :----: |
| BMA423 | GPIO21 | GPIO22 | GPIO39 |

### Power Management (AXP202)

| Chip | SDA | SCL | INT |
| :------: | :----: | :----: | :----: |
| AXP202 | GPIO21 | GPIO22 | GPIO35 |

### RTC (PCF8563)

| Chip | SDA | SCL |
| :------: | :----: | :----: |
| PCF8563 | GPIO21 | GPIO22 |

### Optional Peripherals

<!-- GPS (Quectel L76K, 2020-V2): GPIO13, GPIO15 UART
Microphone (SPM1423HM4H, 2020-V3): I2S interface
Tactile feedback: GPIO37 (2020-V1/V3), DRV2605 I2C (2020-V2)
-->

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

<!-- Link to public schematic PDF or image. Schematics available in GitHub repository: https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/master/Schematic -->

## Datasheet

- [ESP32 Datasheet](/datasheet/esp32_datasheet_en.pdf)
- [ST7789V Display Controller](/datasheet/ST7789V.pdf)
- [FT6336 Touchscreen Controller](/datasheet/FT6236-FT6336-FT6436L-FT6436_Datasheet.pdf)
- [BMA423 IMU Sensor](/datasheet/BMA423.PDF)
- [AXP202 Power Management IC](/datasheet/AXP192%20Brief.pdf)

## Software Libraries

- [TTGO T-Watch Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library) - Official Arduino library with drivers and examples
- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) - Display driver library (already included)
- [LVGL](https://github.com/lvgl/lvgl) - Graphics framework (v7.7.2 integrated)
- [My-TTGO-Watch](https://github.com/sharandac/My-TTGO-Watch) - Community custom firmware
- [lunokjod/watch](https://github.com/lunokjod/watch) - Alternative watch OS implementation

## FAQ

**Q: The library only supports esp-idf core 3.0 and below. Why?**  
A: The hardware drivers are optimized for older ESP-IDF versions. Core 2.0.14 is recommended for best compatibility.

**Q: Upload fails with "Failed to write to target RAM"?**  
A: Change the upload baud rate in Arduino IDE from 115200 to 921600.

**Q: How do I select the correct T-Watch variant?**  
A: Open `config.h` in each example and uncomment the line matching your hardware version (LILYGO_WATCH_2020_V1, V2, V3, etc.).

**Q: Can I use the T-Watch without the library?**  
A: Yes, the library is optional. However, it greatly simplifies hardware initialization and provides pre-built driver support.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.4.3 | Mar 2023 | Latest stable release |
| V1.4.0 | Earlier | Added T-Watch-S3 branch support |
| V1.0.0 | Early 2019 | Initial release |
