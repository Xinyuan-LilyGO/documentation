---
title: T-Panel S3
show_source: false
tags: ESP32-S3, ESP32-H2, RS485, CAN, Touch Screen
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-panel-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-1.jpg', alt: 'T-Panel S3 front' },
  { src: '/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-2.jpg', alt: 'T-Panel S3 back' },
]" />

## Overview

T-Panel S3 is a compact smart-home control panel built around a dual-MCU architecture: the ESP32-S3 serves as the primary application processor while the ESP32-H2 provides IEEE 802.15.4 / Thread / Zigbee wireless coprocessor capability. The board integrates a 4.0" 480×480 IPS RGB touchscreen, SD card storage, a 16-bit I2C IO expander (XL9535), and an optional field-bus module supporting either RS485 or CAN FD — making it suitable for industrial HMI, smart-home panels, and embedded IoT dashboards.

## Quick Start

### Hardware Assembly

<!-- Soldering headers, installing antennas, etc. -->

### Arduino

<!-- Link to or embed the Arduino setup guide. -->

### ESP-IDF

Requires ESP-IDF ≥ v5.5.4. Clone the repository and open any example under `project/`:

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Panel.git
cd T-Panel
idf.py set-target esp32s3
idf.py build flash monitor
```

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- 4.0" 480×480 IPS LCD with SPI init + RGB parallel data bus (ST7701S controller)
- Dual-MCU: ESP32-S3 (16 MB Flash, 8 MB PSRAM) + ESP32-H2 (4 MB Flash)
- Wi-Fi 2.4 GHz + Bluetooth 5 LE (ESP32-S3) and IEEE 802.15.4 + Bluetooth 5 LE (ESP32-H2)
- Capacitive touch via CST3240 (I2C)
- MicroSD card slot (SPI interface)
- 16-bit IO expander via XL9535 (I2C, address 0x20)
- Optional RS485 (500 kbps) or CAN FD field-bus transceiver module
- Input voltage range: 7–24 V
- Compatible with Arduino, PlatformIO, and ESP-IDF

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3 |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Co-processor | ESP32-H2-MINI-1 (4 MB Flash) |
| Display | 4.0" 480×480 IPS, ST7701S, SPI+RGB |
| Touch | CST3240, I2C |
| Wireless | Wi-Fi 2.4 GHz, BT 5 LE (S3); IEEE 802.15.4, BT 5 LE (H2) |
| IO Expander | XL9535, 16-bit, I2C |
| Field-bus | RS485 or CAN FD (optional module) |
| Input Voltage | 7–24 V |
| Weight | <!-- g --> |
| Package size | <!-- mm --> |

## Pin Diagram

<img src="/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-pinout.jpg" alt="pin diagram" width=100%>

### Display (ST7701S)

| ST7701S  | BL     | VSYNC  | HSYNC  | PCLK   | R0     | R1     | R2     | R3     | R4     | G0     | G1     | G2     | G3     | G4     | G5     | B0     | B1     | B2     | B3     | B4     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO14 | GPIO40 | GPIO39 | GPIO41 | GPIO1  | GPIO2  | GPIO42 | GPIO46 | GPIO45 | GPIO6  | GPIO7  | GPIO8  | GPIO9  | GPIO10 | GPIO11 | GPIO3  | GPIO4  | GPIO5  | GPIO12 | GPIO13 |
| XL9535   | RESET  |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |

### Touch (CST3240)

| CST3240  | SDA    | SCL    | INT    | RESET  |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO17 | GPIO18 | GPIO21 |        |
| XL9535   |        |        |        | IO4    |

### SD Card

| SD Card  | CS     | SCK    | MOSI   | MISO   |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO38 | GPIO36 | GPIO35 | GPIO37 |

### IO Expander (XL9535)

| XL9535   | SDA    | SCL    |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO17 | GPIO18 |

XL9535 expanded pins (I2C address 0x20):

| Function       | XL9535 Pin |
| :------------: | :--------: |
| ST7701 SPI CS  | IO17       |
| ST7701 SPI CLK | IO15       |
| ST7701 SPI MOSI| IO16       |
| LCD RESET      | IO5        |
| Touch RESET    | IO4        |
| RS485 CON      | IO7        |
| ESP32-H2 IO12  | IO1        |
| ESP32-H2 IO4   | IO2        |
| ESP32-H2 IO5   | IO3        |

### RS485 / CAN

| RS485 / CAN | TX     | RX     |
| :---------: | :----: | :----: |
| ESP32-S3    | GPIO16 | GPIO15 |

### ESP32-H2

| ESP32-H2 | TX     | RX     | EN     | BOOT   |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO48 | GPIO47 | GPIO34 | GPIO33 |

## Dimensions

<img src="/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-3.jpg" alt="dimensions" width=100%>

## Schematic

[T-Panel V1.2 Schematic (PDF)](https://github.com/Xinyuan-LilyGO/T-Panel/blob/master/project/T-Panel_V1.2.pdf)

## Datasheet

- [ST7701S Display Controller](https://github.com/Xinyuan-LilyGO/T-Panel/blob/master/docs/ST7701S_SPEC_V1.4.pdf)
- [YDP395BT001 Display Panel](https://github.com/Xinyuan-LilyGO/T-Panel/blob/master/docs/YDP395BT001-V2.pdf)
- [CST3240 Touch Controller](https://github.com/Xinyuan-LilyGO/T-Panel/blob/master/docs/HYNITRON-CST3240_V1.0.pdf)
- [XL9535 IO Expander](https://github.com/Xinyuan-LilyGO/T-Panel/blob/master/docs/XL9535.pdf)
- [ESP32-H2-MINI-1](https://www.espressif.com/sites/default/files/documentation/esp32-h2-mini-1_mini-1u_datasheet_en.pdf)

## Software Libraries

- [T-Panel GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Panel)

## FAQ

<!-- Errata and common issues. -->

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.2 | | Latest hardware revision |
| V1.0 | | Initial release |
