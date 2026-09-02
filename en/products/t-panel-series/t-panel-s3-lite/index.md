---
title: T-Panel S3 Lite
show_source: false
tags: ESP32-S3, Display, SD Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-panel-s3?variant=43906154168501" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-1.jpg', alt: 'T-Panel S3 Lite front' },
  { src: '/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-2.jpg', alt: 'T-Panel S3 Lite back' },
]" />

## Overview

T-Panel S3 Lite is a streamlined variant of the T-Panel S3, powered by a single ESP32-S3 with a 3.95" 480×480 IPS non-touch display. Compared to the full T-Panel S3, it removes the ESP32-H2 coprocessor, the touch controller, and the RS485/CAN field-bus module, resulting in a simpler and more affordable panel suitable for display-centric IoT dashboards and embedded HMI projects.

## Quick Start

### Hardware Assembly

<!-- Soldering headers, installing antennas, etc. -->

### Arduino

<!-- Link to or embed the Arduino setup guide. -->

### ESP-IDF

<!-- Link to or embed the ESP-IDF setup guide. -->

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- 3.95" 480×480 IPS LCD, SPI init + RGB parallel data bus (ST7701S controller, YDP395BT001 panel)
- ESP32-S3 with 16 MB Flash and 8 MB PSRAM
- Wi-Fi 2.4 GHz + Bluetooth 5 LE
- Non-touch display (no touch controller)
- MicroSD card slot (SPI interface)
- IO expander (XL9535) for SPI control of display init
- 2 user buttons (KEY1, KEY2) + BOOT button
- Compatible with Arduino, PlatformIO, and ESP-IDF

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | ESP32-S3 |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Display | 3.95" 480×480 IPS, ST7701S, SPI+RGB |
| Touch | None |
| Wireless | Wi-Fi 2.4 GHz, BT 5 LE |
| IO Expander | XL9535, I2C |
| Weight | <!-- g --> |
| Package size | <!-- mm --> |

## Pin Diagram

<img src="/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-pinout.jpg" alt="pin diagram" width=100%>

### Display (ST7701S)

| ST7701S  | BL     | VSYNC  | HSYNC  | PCLK   | R0     | R1     | R2     | R3     | R4     | G0     | G1     | G2     | G3     | G4     | G5     | B0     | B1     | B2     | B3     | B4     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO14 | GPIO40 | GPIO39 | GPIO41 | GPIO12 | GPIO13 | GPIO42 | GPIO46 | GPIO45 | GPIO6  | GPIO7  | GPIO8  | GPIO9  | GPIO10 | GPIO11 | GPIO1  | GPIO2  | GPIO3  | GPIO4  | GPIO5  |

Display SPI init (via XL9535):

| Function    | XL9535 Pin |
| :---------: | :--------: |
| SPI CS      | IO14       |
| SPI SCLK    | IO36 (shared with SD) |
| SPI MOSI    | IO35 (shared with SD) |

### SD Card

| SD Card  | CS     | SCK    | MOSI   | MISO   |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO34 | GPIO36 | GPIO35 | GPIO37 |

### Buttons

| Function | GPIO   |
| :------: | :----: |
| KEY1     | GPIO48 |
| KEY2     | GPIO47 |
| BOOT     | GPIO0  |

## Dimensions

<img src="/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-3.jpg" alt="dimensions" width=100%>

## Schematic

[T-Panel-Lite V1.0 Schematic (PDF)](https://github.com/Xinyuan-LilyGO/T-Panel-Lite/blob/main/project/T-Panel_Lite_V1.0.pdf)

## Datasheet

- [ST7701S Display Controller](/datasheet/ST7701S_SPEC_V1.4.pdf)
- [YDP395BT001 Display Panel](/datasheet/YDP395BT001-V2.pdf)

## Software Libraries

- [T-Panel-Lite GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Panel-Lite)
- [Arduino_GFX](https://github.com/moononournation/Arduino_GFX) (v1.3.7)
- [JPEGDEC](https://github.com/bitbank2/JPEGDEC) (v1.2.8)
- [MiniTV](https://github.com/moononournation/MiniTV)

## FAQ

<!-- Errata and common issues. -->

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
