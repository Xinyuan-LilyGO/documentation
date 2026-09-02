---
title: T-Echo-Plus
show_source: false
tags: NRF52840, LoRa, SX1262, E-Ink, Meshtastic, GPS, BLE, BHI260AP
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-echo-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-1.jpg', alt: 'T-Echo-Plus front view' },
  { src: '/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-2.jpg', alt: 'T-Echo-Plus back view' },
  { src: '/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-3.jpg', alt: 'T-Echo-Plus dimensions' },
  { src: '/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-info.jpg', alt: 'T-Echo-Plus specifications' },
]" />

## Overview

LILYGO T-Echo-Plus is an upgraded version of the T-Echo, designed with Meshtastic mesh networking in mind. It is powered by the **Nordic nRF52840** MCU with Bluetooth 5.0 and NFC, paired with a **Semtech SX1262 LoRa** transceiver (433/868/915 MHz). The board features a **1.54-inch e-ink display**, **L76K GNSS** receiver, **BHI260AP** intelligent sensor hub (IMU), a buzzer, and a vibration motor — making it ideal for off-grid communication, asset tracking, and portable Meshtastic nodes.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-Echo](https://github.com/Xinyuan-LilyGO/LilyGo-T-Echo) | ✓ | | LoRa, e-ink, GPS, Meshtastic examples |

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add the **Adafruit nRF52** board package URL in Preferences
3. Install **Adafruit nRF52** boards from Board Manager
4. In **Tools → Board**, select **Adafruit Feather nRF52840 Express** or the T-Echo specific board
5. Upload

### Meshtastic

Flash Meshtastic firmware directly from [flasher.meshtastic.org](https://flasher.meshtastic.org/) or use the Meshtastic Android/iOS app.

## Key Features

- Nordic nRF52840 @ 64 MHz, Bluetooth 5.0 + NFC
- Semtech SX1262 LoRa (433/868/915 MHz), up to +22 dBm, sensitivity −139 dBm
- 1.54-inch e-ink display (ultra-low power, sunlight-readable)
- L76K GNSS (GPS/BeiDou/GLONASS/QZSS)
- BHI260AP intelligent sensor hub (6-axis IMU)
- Buzzer + vibration motor (upgraded vs. standard T-Echo)
- 2 MB Flash, 256 KB RAM (nRF52840)
- Li-Po battery support with charging
- Meshtastic compatible

## Specifications

| Parameter | Value |
| --- | --- |
| MCU | Nordic nRF52840, 64 MHz, Bluetooth 5.0 + NFC |
| Flash | 2 MB (MCU internal) |
| RAM | 256 KB |
| Wireless (LoRa) | SX1262, 433/868/915 MHz, +22 dBm |
| Wireless (BLE) | Bluetooth 5.0 |
| Display | 1.54-inch e-ink |
| GNSS | L76K (GPS/BeiDou/GLONASS/QZSS) |
| IMU | BHI260AP sensor hub |
| Alerts | Buzzer + vibration motor |
| USB | 1 × USB-C |
| Battery | Li-Po with charging |

![T-Echo-Plus Specifications](/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-info.jpg)

## Pin Diagram

![T-Echo-Plus Pinout](/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-pinout.jpg)

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

<!-- Link to public schematic PDF or image. -->

## Datasheet

* [nRF52840 Datasheet](/datasheet/nRF52840_PS_v1.11.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)

## Software Libraries

* [LilyGo-T-Echo GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T-Echo)
* [Meshtastic Firmware](https://github.com/meshtastic/firmware)

## FAQ

* **Q. How do I flash Meshtastic?**
  A. Use the official Meshtastic flasher at [flasher.meshtastic.org](https://flasher.meshtastic.org/) and select the T-Echo device.

* **Q. What is the difference from the standard T-Echo?**
  A. The T-Echo-Plus adds a BHI260AP intelligent sensor hub, buzzer, and vibration motor compared to the standard T-Echo.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release with BHI260AP, buzzer, vibration motor |
