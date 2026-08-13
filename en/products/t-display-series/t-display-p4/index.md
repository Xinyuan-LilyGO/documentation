---
title: T-Display P4
show_source: false
tags: ESP32-P4, MIPI, AMOLED, LoRa, GPS, ESP32-C6
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-p4" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-p4/index/image/t-display-p4-1.jpg', alt: 'T-Display P4 front view' },
  { src: '/products/t-display-series/t-display-p4/index/image/t-display-p4-2.jpg', alt: 'T-Display P4 physical image' },
  { src: '/products/t-display-series/t-display-p4/index/image/t-display-p4-amoled.jpg', alt: 'T-Display P4 AMOLED pin diagram' }
]" />

## Overview

T-Display P4 is a multi-functional development board based on **ESP32-P4** (16 MB Flash) for complex graphics, multimedia, and IoT applications. Features a **4.05-inch MIPI TFT** (540 × 1168) or **4.1-inch AMOLED** (568 × 1232) with capacitive touch, **ESP32-C6** auxiliary processor (Wi-Fi 6 + Bluetooth 5.3, SDIO), **SX1262 LoRa** (HPD16A module), **L76K GPS**, **ES8311 + NS4150B** audio, **AW86224** linear vibration motor, **ICM20948** IMU, **BQ27220** battery monitor, **OV2710** MIPI camera. Supports keyboard expansion board (T-Display-P4-Keyboard) with CC1101, NRF24L01, and NFC (ST25R3916).

## Hardware Notes

The **RST** button on T-Display P4 resets the ESP32-P4 main controller only. It is not a full board power reset. Some onboard peripheral power rails are controlled through I/O expanders such as XL9535, so resetting only the ESP32-P4 may not force every peripheral through a complete power-off and power-on cycle.

If the device enters download mode after power-on, does not boot normally, or cannot recover after pressing **RST**, turn the power switch off first, wait for the board capacitors to discharge, and then turn the device on again. Do not hold **BOOT** during power-on; **BOOT** may put the ESP32-P4 into download mode, making the device appear unable to start normally.

## Quick Start

### Example Support

| Example | ESP-IDF | Description |
| :-----: | :-----: | :---------: |
| [lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/lvgl_9_ui) | ✓ | Factory example |
| [screen_camera](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_camera) | ✓ | Camera preview |
| [sx1262_lora_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_lora_send_receive) | ✓ | SX1262 LoRa send/receive |
| [l76k](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/l76k) | ✓ | L76K GPS |
| [es8311](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/es8311) | ✓ | Audio codec |
| [deep_sleep](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/deep_sleep) | ✓ | Deep sleep (avg 1.2 mA) |
| [icm20948](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/icm20948) | ✓ | ICM20948 IMU |
| [aw86224](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/aw86224) | ✓ | Vibration motor |
| [xiaozhi](https://github.com/78/xiaozhi-esp32) | ✓ | XiaoZhi AI chatbot |

### ESP-IDF (Primary)

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **ESP-IDF** extension
2. Clone the repository:
   ```shell
   git clone --recursive https://github.com/Xinyuan-LilyGO/T-Display-P4.git
   git submodule update --init --recursive
   ```
3. Install [ESP-IDF v5.4.1](https://dl.espressif.cn/dl/esp-idf/?idf=4.4) and configure the extension
4. Open "SDK Configuration Editor", select the example to build and the screen type, click Save
5. Set target to **ESP32P4**, click "Build Project", then "Flash Project"

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Open the `T-Display-P4` project folder
3. Open `platformio.ini` and select your example
4. Click **✓** to compile, click **→** to upload

### Arduino

Configure board as **ESP32P4 Dev Module** with appropriate settings when Arduino ESP32 adds ESP32-P4 support.

### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf) — Primary platform
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)
4. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-P4 (16 MB Flash), ESP32-C6 co-processor (Wi-Fi 6 + BT 5.3, SDIO)
- 4.05" MIPI TFT (540 × 1168) or 4.1" AMOLED (568 × 1232), 10-point capacitive touch
- SX1262 LoRa (HPD16A module), L76K GPS, PCF8563 RTC
- ES8311 + NS4150B audio, AW86224 linear vibration motor
- ICM20948 9-axis IMU, BQ27220 battery monitor, LGS4056H charger
- OV2710 MIPI camera, XL9535 I/O expander
- Keyboard expansion: CC1101, NRF24L01, NFC (ST25R3916), TCA8418 keyboard driver

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-P4 |
| Flash | 16 MB |
| Co-processor | ESP32-C6-FH4, 4 MB PSRAM, SDIO |
| Wi-Fi | Wi-Fi 6 (ESP32-C6) |
| Bluetooth | Bluetooth 5.3 LE (ESP32-C6) |
| Display | 4.05" MIPI TFT (540×1168) / 4.1" AMOLED (568×1232) |
| Touch | 10-point capacitive |
| LoRa | SX1262 (HPD16A module) |
| GPS | L76K |
| RTC | PCF8563 |
| Audio | ES8311 codec + NS4150B amplifier |
| Vibration | AW86224 linear motor |
| IMU | ICM20948 nine-axis |
| Battery Monitor | BQ27220 |
| Camera | OV2710 (MIPI) |
| I/O Expander | XL9535 |
| USB | 1 × Type-C |

## Pin Diagram

#### AMOLED Version
<img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-amoled.jpg" alt="T-Display P4 AMOLED pin diagram" width=100%>

#### TFT Version
<img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-tft.jpg" alt="T-Display P4 TFT pin diagram" width=100%>

For pin definitions see config files:
- [t_display_p4_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_config.h)
- [t_display_p4_keyboard_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_keyboard_config.h)

## Dimension Diagram

## Schematic

## Datasheet

* [SX1261/2](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/DS_SX1261-2_V2_1.pdf)
* [L76K GPS](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/L76KB-A58.pdf)
* [ES8311](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ES8311.pdf)
* [ICM20948](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ICM20948.pdf)
* [BQ27220](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/bq27220_en.pdf)

## Software Development

* [T-Display-P4 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Display-P4)

### Dependent Libraries

* (ESP-IDF based — all dependencies managed via IDF component manager)

## FAQ

* **Q. Why does my board keep failing to upload programs?**
  A. Hold down the **BOOT** button and try uploading again.

* **Q. Why does the screen show many `init fail` initialization errors?**
  A. This is usually caused by the side QWIIC / expansion connector not being fully seated. Power off the board first, then check whether the connector is fully inserted, tilted, or loose. Power the board on again after reconnecting it.

  <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-qwiic-connector.png" alt="T-Display P4 QWIIC connector check position" width=100%>

* **Q. Why can't I get a GPS fix in the factory firmware?**
  A. Test outdoors or in an area with good GPS signal. Check the [latest factory firmware](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware).

* **Q. Battery not charging when powered off or battery life very short?**
  A. T-Display-P4 supports charging when off. Factory firmware runs ~3–5 hours (no sleep). For sleep, use the `deep_sleep` example.

* **Q. ESP-IDF menuconfig reports `asyncio.exceptions.LimitOverrunError`?**
  A. This is a bug in esp-idf v5.4–v5.5. In `esp-idf-v5.x/tools/idf_py_actions/tools.py` line 351, change `limit=1024 * 256` to `limit=1024 * 512`.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Display-P4 V1.0 | 2025-06-13 | Initial version |
| T-Display-P4-Keyboard V1.0 | 2025-09-12 | Keyboard expansion board initial version |
