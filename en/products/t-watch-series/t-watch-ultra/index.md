---
title: T-Watch Ultra
show_source: false
tags: Smart Watch, ESP32-S3, LoRa, GNSS, AMOLED, AI Sensor, NFC
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-watch-ultra" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-1.jpg', alt: 'T-Watch Ultra front view' },
  { src: '/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-2.jpg', alt: 'T-Watch Ultra physical image' },
  { src: '/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-pin.jpg', alt: 'T-Watch Ultra pin diagram' }
]" />

## Overview

T-Watch Ultra is a high-performance smart watch development module based on **ESP32-S3** (16 MB Flash, 8 MB OPI PSRAM). Features a **2.06-inch AMOLED** display (410 × 502, QSPI), **BHI260AP** AI motion sensor, **MIA-M10Q** GNSS, **ST25R3916 NFC**, **SX1262/SX1280 LoRa**, **MAX98357A** audio, **DRV2605** haptic, **AXP2101** PMU, **XL9555** IO expander, and MicroSD storage. 1100 mAh battery. **63.5 × 49 × 22 mm** (without strap).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [Watch UI](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | Watch interface example |
| [GNSS Tracking](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | Satellite positioning |
| [LoRa Communication](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | LoRa communication test |
| [AI Sensor](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | Motion recognition |
| [NFC Reader](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | NFC function demo |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib) repository
4. Open `platformio.ini` and under `[platformio]` uncomment the desired environment
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32 **V3.3.0-alpha1** or higher](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)
   - Boards Manager URL: `https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json`
3. [Download LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip) and install via **Sketch → Include Library → Add .ZIP Library**
4. Copy all directories from [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) into your Arduino `libraries` folder
5. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **LilyGo T-Watch-Ultra** |
| Upload Speed | 921600 |
| Upload Mode | **UART0/Hardware CDC** |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Board Revision | **Radio-SX1262** (or per your RF module) |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

   Board Revision options: `Radio-SX1262` / `Radio-SX1280` / `Radio-CC1101` / `Radio-LR1121` / `Radio-SI4432`

6. Click **Upload**

> If upload fails, enter download mode: hold **BOOT** → press **RST** → release **RST** → release **BOOT** → upload → press **RST** to exit.

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3 @ 240 MHz, 16 MB Flash, 8 MB OPI PSRAM, Wi-Fi + BT 5.0
- 2.06-inch AMOLED (410 × 502, QSPI), CST9217 capacitive touch
- SX1262/SX1280 LoRa, MIA-M10Q GNSS, ST25R3916 NFC, BHI260AP AI sensor
- MAX98357A audio, DRV2605 haptic, AXP2101 PMU, 1100 mAh, 63.5 × 49 × 22 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | ESP32-S3 @ Dual-core LX7, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB (Octal SPI) |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 5.0 LE |
| Display | 2.06-inch AMOLED, 410 × 502 (QSPI) |
| Touch | CST9217 Capacitive |
| LoRa | SX1262 (433–923 MHz) / SX1280 (2.4 GHz) |
| GNSS | MIA-M10Q Multi-constellation |
| NFC | ST25R3916 |
| AI Sensor | BHI260AP Motion Sensor |
| Audio Output | MAX98357A (I2S) |
| Haptic Motor | DRV2605 |
| Power Management | AXP2101 |
| RTC | PCF85063A |
| IO Expander | XL9555 (16 IOs) |
| Communication Module | T3902 (voice call) |
| Storage | MicroSD (max 32 GB) |
| Battery | 3.7 V, 1100 mAh (4.07 Wh) |
| USB | 1 × Type-C (USB OTG) |
| Buttons | POWER (hold 2 s on / 6 s off) + BOOT (built-in) |
| Temperature Range | -40 ~ 85 °C |
| Dimensions | 63.5 × 49 × 22 mm (without strap) |

## Pin Diagram

<img src="/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-pin.jpg" alt="T-Watch Ultra pin diagram" width=100%>

### Pin Mapping

| Name | GPIO |
| :--: | :--: |
| I2C SDA | 3 |
| I2C SCL | 2 |
| SPI MOSI | 34 |
| SPI MISO | 33 |
| SPI SCK | 35 |
| SD CS | 21 |
| RTC (PCF85063A) Interrupt | 1 |
| NFC (ST25R3916) CS | 4 |
| NFC (ST25R3916) Interrupt | 5 |
| BHI260 Interrupt | 8 |
| MAX98357A BCLK | 9 |
| MAX98357A WCLK | 10 |
| MAX98357A DOUT | 11 |
| GNSS (MIA-M10Q) TX | 43 |
| GNSS (MIA-M10Q) RX | 44 |
| GNSS (MIA-M10Q) PPS | 13 |
| LoRa Reset | 47 |
| LoRa BUSY | 48 |
| LoRa CS | 36 |
| LoRa Interrupt | 14 |
| Display CS | 41 |
| Display DATA0 | 38 |
| Display DATA1 | 39 |
| Display DATA2 | 42 |
| Display DATA3 | 45 |
| Display SCK | 40 |
| Display TE | 6 |
| Display Reset | 37 |
| AXP2101 Interrupt | 7 |

## Dimension Diagram

## Schematic

* [T-Watch Ultra Schematic](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/docs/hardware/)

## Datasheet

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [MIA-M10Q GNSS Datasheet](https://www.u-blox.com/en/product/mia-m10-series)
* [BHI260AP Datasheet](https://www.bosch-sensortec.com/products/motion-sensors/imu-with-integrated-ai/bhi260ap/)
* [AXP2101 Datasheet](https://www.x-powers.com/en.php/Product/detail/id/145)

## Software Development

* [LilyGoLib GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGoLib)

### Dependent Libraries

* [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)
* [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [LVGL](https://lvgl.io/)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## FAQ

* **Q. What advantages does T-Watch Ultra have over other versions?**
  A. The Ultra features a larger AMOLED screen, BHI260AP AI motion sensor, multi-constellation GNSS, NFC, and a larger 1100 mAh battery.

* **Q. How to power on and off?**
  A. Press and hold the POWER button for 2 seconds to power on, hold for 6 seconds to power off.

* **Q. Which GNSS constellations are supported?**
  A. The MIA-M10Q supports GPS, GLONASS, Galileo, BeiDou, and more.

* **Q. Why does my board keep failing to upload programs?**
  A. Enter download mode: hold **BOOT** → press **RST** → release **RST** → release **BOOT** → upload → press **RST** to exit.

* **Q. No serial output?**
  A. Ensure **USB CDC On Boot** is set to **Enabled**.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Watch-Ultra V1.0 | — | Initial version |
