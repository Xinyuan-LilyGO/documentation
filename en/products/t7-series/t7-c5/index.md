---
title: T7-C5
show_source: false
tags: ESP32-C5, WiFi6, 5GHz, Thread, Zigbee, Bluetooth5, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t7-c5" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7-c5/index/image/t7-c5-1.jpg', alt: 'T7-C5 front view' },
  { src: '/products/t7-series/t7-c5/index/image/t7-c5-2.jpg', alt: 'T7-C5 back view' },
  { src: '/products/t7-series/t7-c5/index/image/t7-c5-3.jpg', alt: 'T7-C5 dimensions' },
]" />

## Overview

LILYGO T7-C5 is a development board based on the **ESP32-C5-MINI-1** module — Espressif's first chip supporting **dual-band Wi-Fi 6 (802.11ax) at both 2.4 GHz and 5 GHz**, plus Bluetooth 5 and IEEE 802.15.4 (Thread/Zigbee). With 4 MB Flash, USB-C, and a compact form factor, it is designed for next-generation smart home and industrial IoT applications requiring high-throughput wireless connectivity and multi-protocol support.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T7-C5](https://github.com/Xinyuan-LilyGO/LilyGo-T7-C5) | ✓ | ✓ | Wi-Fi 6, BLE, Thread/Zigbee examples |

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install ESP32 Arduino core (v3.x or later, which includes ESP32-C5 support)
3. In **Tools → Board**, select **ESP32C5 Dev Module**
4. Click **Upload**

### ESP-IDF

1. Install [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/) v5.3 or later
2. Set target: `idf.py set-target esp32c5`
3. Build and flash: `idf.py build flash`

## Key Features

- ESP32-C5-MINI-1 @ 240 MHz, RISC-V single-core
- Dual-band Wi-Fi 6 (802.11ax): 2.4 GHz + 5 GHz
- Bluetooth 5 (LE)
- IEEE 802.15.4 (Thread / Zigbee)
- 4 MB Flash
- USB-C for power and programming
- Onboard ceramic antenna

## Specifications

| Parameter | Value |
| --- | --- |
| MCU | ESP32-C5-MINI-1, RISC-V @ 240 MHz |
| Flash | 4 MB |
| Wi-Fi | 2.4 GHz + 5 GHz, 802.11ax (Wi-Fi 6) |
| Bluetooth | Bluetooth 5 (LE) |
| 802.15.4 | Thread / Zigbee |
| USB | 1 × USB-C |

![T7-C5 Specifications](/products/t7-series/t7-c5/index/image/t7-c5-info.jpg)

## Pin Diagram

![T7-C5 Pinout](/products/t7-series/t7-c5/index/image/t7-c5-pinout.jpg)

## Software Libraries

* [LilyGo-T7-C5 GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T7-C5)

## FAQ

* **Q. What is the advantage of Wi-Fi 6 (802.11ax)?**
  A. Wi-Fi 6 offers higher throughput, lower latency, and better performance in dense wireless environments compared to Wi-Fi 4 (802.11n).

* **Q. Does it support 5 GHz networks?**
  A. Yes. The ESP32-C5 is the first ESP32 chip with dual-band Wi-Fi including 5 GHz support.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
