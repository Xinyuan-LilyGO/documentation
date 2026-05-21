---
title: T-Halow P4
show_source: false
tags: ESP32-P4, ESP32-C6, WiFi-HaLow, 802.11ah, MIPI, Camera, IoT, LongRange
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-halow-p4" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-halow-p4/assets/t-halow-p4-1.jpg', alt: 'T-Halow P4 front view' },
  { src: '/products/t-sim-series/t-halow-p4/assets/t-halow-p4-2.jpg', alt: 'T-Halow P4 physical image' },
  { src: '/products/t-sim-series/t-halow-p4/assets/t-halow-p4-pin.jpg', alt: 'T-Halow P4 pin diagram' }
]" />

## Overview

T-Halow P4 is a high-performance IoT development board based on **ESP32-P4** (16 MB Nor Flash QSPI, 32 MB package-stacked PSRAM), co-processor **ESP32-C6-MINI** (Wi-Fi 6 + Bluetooth 5.3, SDIO), and **T-Halow** module (Wi-Fi HaLow 802.11ah, 730–950 MHz). Features **MIPI-DSI** display interface, **MIPI-CSI** camera interface with H264/JPEG encoding (1080P), Pixel Processing Accelerator (PPA), and 2D DMA. The ESP32-P4 handles complex graphics and video tasks while the ESP32-C6 provides Wi-Fi 6 and Bluetooth 5.3 connectivity via esp-hosted-mcu over SDIO. Primary development platform: **ESP-IDF v5.4.1+**.

> T-Halow-P4 and T-Halow use the same [AT Command Set](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/AT_cmd.md).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Halow-P4 Examples](https://github.com/Xinyuan-LilyGO/T-Halow-P4) | | ✓ | Camera, HaLow, display examples |

### ESP-IDF (Primary)

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **ESP-IDF** extension
2. Install [ESP-IDF v5.4.1+](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32/get-started/index.html)
3. Clone the [T-Halow-P4](https://github.com/Xinyuan-LilyGO/T-Halow-P4) repository
4. Build and flash:
   ```bash
   cd examples/xxx
   idf.py set-target esp32p4
   idf.py build
   idf.py -p PORT flash
   ```

**Enter Download Mode:**
1. Plug in USB, hold **BOOT** without releasing
2. Press **RST** briefly, then release
3. Serial output "wait for download" → in download mode
4. Release **BOOT**, then flash

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf) — Primary platform (v5.4.1+)
2. [PlatformIO](https://platformio.org/)

## Video

## Key Features

- ESP32-P4 (16 MB Flash, 32 MB stacked PSRAM), complex graphics and video processing
- ESP32-C6-MINI co-processor (Wi-Fi 6 + BT 5.3, SDIO)
- T-Halow module (Wi-Fi HaLow 802.11ah, 730–950 MHz, km-range)
- MIPI-DSI display + MIPI-CSI camera, H264 encoding, JPEG decoding (1080P 30fps)
- PPA pixel accelerator, 2D DMA, SPI, I2S, I2C, LED PWM, Ethernet

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-P4 |
| Flash | 16 MB (Nor Flash, QSPI) |
| PSRAM | 32 MB (package-stacked) |
| Co-processor | ESP32-C6-MINI |
| Wi-Fi | Wi-Fi 6 (ESP32-C6, SDIO) |
| Bluetooth | Bluetooth 5.3 (ESP32-C6) |
| Wi-Fi HaLow | TX-AH (802.11ah), 730–950 MHz |
| Display | MIPI-DSI interface (with touch) |
| Camera | MIPI-CSI interface (1080P) |
| Video | H264 + JPEG encoding, JPEG decoding (1080P 30fps) |
| USB | 1 × Type-C |

## Pin Diagram

<img src="/products/t-sim-series/t-halow-p4/assets/t-halow-p4-pin.jpg" alt="T-Halow P4 pin diagram" width=100%>

### Pin Mapping

| I2C | IO8 (SCL), IO7 (SDA) |
| :--: | :-- |
| Touch | IO8 (SCL), IO7 (SDA), IO11 (INT), IO10 (RST) |
| MIPI DSI | IO9 (RST) |
| Halow (SPI+UART) | IO44 (CMD), IO43 (CLK), IO42–IO39 (D3–D0), IO12 (TX), IO13 (RX) |
| ESP32-C6 (SDIO) | IO19 (CMD), IO18 (CLK), IO17–IO14 (D3–D0), IO6 (WAKEUP) |

## Dimension Diagram

## Schematic

## Datasheet

* [ESP32-P4 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-p4_datasheet_en.pdf)
* [TX-AH Module Resources](https://en.taixin-semi.com/Product?prouctSubClass=33)

## Software Development

* [T-Halow-P4 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Halow-P4)

### Dependent Libraries

* `espressif/esp_hosted^1.4.1`
* `espressif/esp_wifi_remote^0.8.5`
* `espressif/esp_lcd_ek79007^1.0.2`
* `lvgl/lvgl`

## FAQ

* **Q. How do I enter download mode?**
  A. Hold **BOOT**, press **RST** once, release RST while still holding BOOT, then flash with `idf.py flash`.

* **Q. Which ESP-IDF version is required?**
  A. ESP-IDF v5.4.1 or newer. Configure and build with `idf.py set-target esp32p4`.

* **Q. What frequency bands does the HaLow module support?**
  A. 868 MHz (859–894 MHz) and 915 MHz (902–928 MHz). Select appropriate band per regional regulations.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Halow P4 V1.0 | 2025-12-04 | Initial version: ESP32-P4 + ESP32-C6 + T-Halow |
