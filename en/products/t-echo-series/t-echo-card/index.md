---
title: T-Echo Card
show_source: false
tags: nRF52840, LoRa, GNSS, BLE, Bluetooth Mesh, Zigbee, OLED, IMU, Audio
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-card" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-1.jpg', alt: 'T-Echo Card front' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-2.jpg', alt: 'T-Echo Card back' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-3.jpg', alt: 'T-Echo Card' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-info-1.jpg', alt: 'T-Echo Card info' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-info-2.jpg', alt: 'T-Echo Card info' },
]" />

## Overview

T-Echo Card is a compact, low-power IoT development board built around the **nRF52840** microcontroller. It combines long-range LoRa communication (SX1262), multi-constellation GNSS (L76K), 9-axis IMU (ICM20948), a 0.42" OLED display, audio recording/playback (MP34DT05 + MAX98357), and solar charging in a credit-card-sized form factor (90 × 60 × 9.5 mm). Supports BLE 5, Thread, Zigbee, ANT, NFC, and 802.15.4 out of the box.

## Quick Start

### Hardware Assembly

<!-- Connecting solar panel, antennas (LoRa + GNSS), speaker, and battery. -->

### Arduino (via Adafruit nRF52 BSP)

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add the Adafruit nRF52 board URL:
   `https://adafruit.github.io/arduino-board-index/package_adafruit_index.json`
3. Install **Adafruit nRF52** board package
4. Select **Adafruit Feather nRF52840 Express** (or closest nRF52840 variant)
5. Install the required libraries listed in [Software Libraries](#software-libraries)
6. Clone [T-Echo-Card](https://github.com/Xinyuan-LilyGO/T-Echo-Card) and open an example sketch
7. Click **Upload**

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- nRF52840 @ 64 MHz, 256 kB RAM, 1 MB internal Flash + 32 Mbit external SPI Flash
- SX1262 LoRa transceiver, 400–945 MHz (variants: 433 / 868 / 915 / 920 MHz)
- L76K multi-constellation GNSS (GPS, GLONASS, BeiDou, QZSS)
- ICM20948 9-axis IMU (accelerometer + gyroscope + magnetometer)
- 0.42" OLED display (SSD1306/SSD1315, 72 × 40 px, I2C)
- MP34DT05 PDM digital MEMS microphone + MAX98357 I2S mono amplifier
- WS2812C-2020 RGB LED (256 brightness levels)
- Solar charging: 0.25 W, 5 V
- Wireless: BLE 5, Thread, Zigbee, ANT, NFC, 802.15.4, Bluetooth Mesh
- Compact: 90 × 60 × 9.5 mm

## Specifications

| Parameter | Value |
| :-------: | :---: |
| SOC | nRF52840 |
| CPU | ARM Cortex-M4F @ 64 MHz |
| RAM | 256 kB |
| Flash (internal) | 1 MB |
| Flash (external) | 32 Mbit SPI (ZD25WQ32CEIGR) |
| LoRa | SX1262, 400–945 MHz |
| GNSS | L76K (GPS / GLONASS / BeiDou / QZSS) |
| Display | 0.42" OLED, SSD1306/SSD1315, 72 × 40 px, I2C |
| IMU | ICM20948, 9-axis, I2C |
| Microphone | MP34DT05 MEMS, PDM |
| Speaker | MAX98357 I2S, 8 Ω 1 W |
| RGB LED | WS2812C-2020 |
| Solar | 0.25 W, 5 V |
| Wireless | BLE 5, Thread, Zigbee, ANT, NFC, 802.15.4 |
| Dimensions | 90 × 60 × 9.5 mm |

## Pin Diagram

<img src="/products/t-echo-series/t-echo-card/index/image/t-echo-card-pinout.jpg" alt="T-Echo Card pin diagram" width=100%>

### LoRa (SX1262)

| SX1262   | SCK    | MOSI   | MISO   | CS     | RST    | BUSY   | INT (DIO1) |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :--------: |
| nRF52840 | GPIO13 | GPIO15 | GPIO17 | GPIO11 | GPIO7  | GPIO14 | GPIO40     |

### GNSS (L76K)

| L76K     | TX     | RX     | 1PPS   | Wake Up | EN     | RF EN  |
| :------: | :----: | :----: | :----: | :-----: | :----: | :----: |
| nRF52840 | GPIO19 | GPIO21 | GPIO23 | GPIO25  | GPIO47 | GPIO29 |

### Display (OLED SSD1315)

| SSD1315  | SDA    | SCL    |
| :------: | :----: | :----: |
| nRF52840 | GPIO36 | GPIO34 |

### IMU (ICM20948)

| ICM20948 | SDA    | SCL    |
| :------: | :----: | :----: |
| nRF52840 | GPIO36 | GPIO34 |

### Flash (ZD25WQ32CEIGR)

| ZD25WQ32C | CS     | SCLK   | MOSI   | MISO   |
| :-------: | :----: | :----: | :----: | :----: |
| nRF52840  | GPIO12 | GPIO4  | GPIO6  | GPIO8  |

### Audio

| Function           | GPIO   |
| :----------------: | :----: |
| Microphone CLK     | GPIO35 |
| Microphone DATA    | GPIO37 |
| Speaker EN         | GPIO43 |
| Speaker BCLK       | GPIO16 |
| Speaker DATA       | GPIO20 |
| Speaker WS (LRCK)  | GPIO22 |

### RGB LED (WS2812)

| Function   | GPIO   |
| :--------: | :----: |
| WS2812 #1  | GPIO39 |
| WS2812 #2  | GPIO44 |
| WS2812 #3  | GPIO28 |

### Other

| Function                    | GPIO   |
| :-------------------------: | :----: |
| Button (KEY_1)              | GPIO42 |
| Battery ADC                 | GPIO2  |
| Battery Measurement Control | GPIO31 |
| RT9080 Enable               | GPIO30 |

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

* [T-Echo Card Schematic](https://github.com/Xinyuan-LilyGO/T-Echo-Card/blob/main/project/T-Echo-Lite-Card_V1.0.pdf)

## Datasheet

* [nRF52840 Datasheet](/datasheet/nRF52840_PS_v1.11.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)
* [ICM-20948 Datasheet](/datasheet/ds-000189-icm-20948-datasheet.pdf)
* [L76K Datasheet](/datasheet/L76KB-A58.pdf)
* [MAX98357 Datasheet](/datasheet/max98357a-max98357b.pdf)
* [MP34DT05 Datasheet](/datasheet/mp34dt05-a.pdf)

## Software Libraries

* [T-Echo-Card GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Echo-Card)

### Required Libraries

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver)

## FAQ

* **Q. Does T-Echo Card support NFC?**
  A. The hardware supports NFC, but the default firmware does not currently enable it.

* **Q. Which LoRa frequency variant should I choose?**
  A. Choose based on your region: 915 MHz (North America), 868 MHz (Europe), 920 MHz (Japan/Korea), 433 MHz (Asia/other).

## Changelog

| Version | Date | Notes |
| :-----: | :--: | :---- |
| V1.0 | — | Initial release |
