---
title: T-Echo Lite Kit
show_source: false
tags: LoRa, nRF52840, E-Paper, Keyboard, Audio, GPS, IMU, Low Power, Meshtastic
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-lite-kit" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-1.jpg', alt: 'T-Echo Lite Kit front view' },
  { src: '/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-2.jpg', alt: 'T-Echo Lite Kit back view' },
]" />

## Overview

T-Echo Lite Kit is the T-Echo Lite mainboard combined with the **KeyShield** accessory baseboard. The KeyShield adds a 5×4 physical keyboard (TCA8418), ES8311 audio codec with speaker and earphone jack, AW21009QNR keyboard backlight, and a vibration motor — plus optional GPS (L76K) and IMU (ICM20948) sockets. The combination provides a complete portable communication terminal built on the **nRF52840** with LoRa SX1262, 1.22-inch e-paper display, and ultra-low deep-sleep power consumption.

## Quick Start

### Firmware Flash

#### Using LILYGO Spark (Recommended)

Download [LILYGO Spark](https://lilygo.cc/en-us/pages/lilygo-spark), search for `T-Echo Lite Kit`, and flash the firmware directly.

#### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the T-Echo-Lite project folder
4. Open `platformio.ini`, uncomment the example you want under `[platformio]` → `default_envs`
5. If first time: run `python t-echo-lite_v1.0.0_setup.py` from the `tool/win10 vscode platformio start` folder to install the board
6. Click **✓** to compile, connect the board, click **→** to upload

#### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. In Preferences, add `https://www.adafruit.com/package_adafruit_index.json` to **Additional Board Manager URLs**
3. In Board Manager, install **Adafruit nRF52**
4. Copy library folders from the project `libraries` directory to your Arduino Sketchbook libraries folder
5. In **Tools** → **Board**, select **Nordic nRF52840 DK**
6. Enter DFU boot mode: press and release RST, wait for LED1 to light, then press and release RST again. LED1 will dim then brighten — DFU mode is active.
7. Click **✓** to compile, then **→** to upload

### Example Support

#### T-Echo-Lite Examples

| Example | Support | Description |
| :-----: | :-----: | :---------: |
| [Battery_Measurement](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Battery_Measurement) | ✓ | Battery voltage reading |
| [BLE_Uart](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/BLE_Uart) | ✓ | BLE UART communication |
| [Display](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Display) | ✓ | E-Paper display |
| [GPS](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/GPS) | ✓ | GPS positioning |
| [ICM20948](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/ICM20948) | ✓ | IMU sensor |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/SX126x_PingPong) | ✓ | LoRa ping-pong |
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Sleep_Wake_Up) | ✓ | Deep sleep & wake |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Original_Test) | ✓ | Factory test |

#### T-Echo-Lite-KeyShield Examples

| Example | Support | Description |
| :-----: | :-----: | :---------: |
| [aw21009qnr](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/aw21009qnr) | ✓ | Keyboard backlight |
| [aw86224](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/aw86224) | ✓ | Vibration motor |
| [es8311](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/es8311) | ✓ | Speaker / microphone |
| [tca8418](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/tca8418) | ✓ | Keyboard |
| [original_test](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/original_test) | ✓ | Factory test |

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- nRF52840 ARM Cortex-M4 @ 64 MHz, Bluetooth 5.0, 256 kB RAM, 1 MB Flash
- SX1262 LoRa (400–520 MHz / 830–945 MHz), SPI
- 1.22-inch GDEM0122T61 E-Paper display (176 × 192), driver SSD1681
- 5×4 physical keyboard via TCA8418 keyboard controller (I2C)
- AW21009QNR keyboard backlight (I2C)
- ES8311 audio codec — speaker + earphone jack (I2C + I2S)
- Vibration motor (I2C)
- Optional ICM20948 9-axis IMU (I2C)
- Optional L76K GNSS module (UART)
- Key button (IO 0.24)
- Deep sleep power consumption: 2–10 µA minimum

## Specifications

| Parameter | Value |
| :-------: | :---: |
| MCU | nRF52840, ARM Cortex-M4 @ 64 MHz |
| RAM | 256 kB |
| Flash (MCU) | 1 MB |
| Bluetooth | Bluetooth 5.0 |
| LoRa | SX1262, 400–520 MHz / 830–945 MHz |
| Display | 1.22-inch GDEM0122T61 E-Paper, 176 × 192 |
| Keyboard | TCA8418 (5×4), I2C 0x34 |
| Keyboard Backlight | AW21009QNR, I2C |
| Audio | ES8311, I2C 0x34 |
| IMU (optional) | ICM20948, I2C |
| GNSS (optional) | L76K, UART |
| Deep Sleep | 2–10 µA |

<img src="/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-info.jpg" alt="T-Echo Lite Kit info" width=100%>

## Pin Diagram

<img src="/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-pinmap.jpg" alt="T-Echo Lite Kit pin diagram" width=100%>

### E-Paper Display (1.22-inch, 176×192)

| GDEM0122T61 | BS1    | BUSY   | RST    | DC     | CS     | SCLK   | MOSI   |
| :---------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| nRF52840    | IO 1.12 | IO 0.03 | IO 0.28 | IO 0.21 | IO 0.22 | IO 0.19 | IO 0.20 |

### ES8311 Audio

| ES8311   | SDA    | SCL    | Address |
| :------: | :----: | :----: | :-----: |
| nRF52840 | IO 1.4 | IO 1.2 | 0x34    |

### Vibration Motor

| Vibration Motor | SDA    | SCL    |
| :-------------: | :----: | :----: |
| nRF52840        | IO 1.4 | IO 1.2 |

### LoRa SX1262

| SX1262   | CS      | RST     | SCLK    | MOSI    | MISO    | BUSY    | DIO1 / INT | DIO2    | RF_VC1  | RF_VC2  |
| :------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :--------: | :-----: | :-----: | :-----: |
| nRF52840 | IO 0.11 | IO 0.07 | IO 0.13 | IO 0.15 | IO 0.17 | IO 0.14 | IO 1.8     | IO 0.05 | IO 0.27 | IO 1.1  |

### Keyboard (TCA8418)

| TCA8418  | SDA    | SCL    | Address |
| :------: | :----: | :----: | :-----: |
| nRF52840 | IO 1.4 | IO 1.2 | 0x34    |

### Key Button

| Function | Pin     |
| :------: | :-----: |
| Key      | IO 0.24 |

### IMU ICM20948 (Optional)

| ICM20948 | SDA    | SCL    | INT     |
| :------: | :----: | :----: | :-----: |
| nRF52840 | IO 1.4 | IO 1.2 | IO 0.16 |

### GNSS L76K (Optional)

| L76K     | RX      | TX      | 1PPS    | WAKE    |
| :------: | :-----: | :-----: | :-----: | :-----: |
| nRF52840 | IO 1.13 | IO 1.15 | IO 0.29 | IO 1.10 |

## Dimensions

<img src="/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-3.jpg" alt="T-Echo Lite Kit dimensions" width=100%>

## Schematic

* [T-Echo-Lite V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite_V1.0.pdf)
* [T-Echo-Lite-Eapper V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite-Eapper_V1.0.pdf)

## Datasheet

* [nRF52840 Datasheet](https://docs.nordicsemi.com/bundle/ps_nrf52840/page/keyfeatures_html5.html)
* [GDEM0122T61 (E-Paper)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/GDEM0122T61.pdf)
* [SSD1681 (E-Paper Driver)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/SSD1681.pdf)
* [S62F (SX1262 Module)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/S62F.pdf)
* [L76KB-A58 (GNSS)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/L76KB-A58.pdf)
* [ICM20948](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/ICM20948.pdf)

## Software Libraries

* [T-Echo-Lite GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Echo-Lite)

### Dependent Libraries

* [Adafruit_EPD](https://github.com/adafruit/Adafruit_EPD)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver)

## FAQ

* **Q. No debug output from USB?**
  A. Enable the **DTR** option in your serial assistant software.

* **Q. USB upload fails?**
  A. Enter DFU boot mode: press and release RST, wait for LED1 to light, press and release RST again. LED1 will dim then brighten — DFU mode is active.

* **Q. Arduino IDE prompts to upgrade libraries?**
  A. Do not upgrade — stay with the library versions included in the project.

* **Q. E-paper display shows ghosting?**
  A. GDEM0122T61 does not support fast refresh. Use full refresh only.

## Changelog

| Version | Date | Notes |
| :-----: | :--: | :---- |
| V1.0 | — | Initial release |
