---
title: T-Echo Lite
show_source: false
tags: LoRa, nRF52840, E-Paper, Low Power, Meshtastic, Keyboard
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-lite?_pos=1&_sid=79b4c08e7&_ss=r&variant=45331277906101" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-lite/index/image/t-echo-lite01.jpg', alt: 'T-Echo Lite front view' },
  { src: '/products/t-echo-series/t-echo-lite/index/image/t-echo-lite02.jpg', alt: 'T-Echo Lite physical image' },
  { src: '/products/t-echo-series/t-echo-lite/index/image/t-echo-lite03.jpg', alt: 'T-Echo Lite software overview' }
]" />

## Overview

T-Echo-Lite is a lightweight version of T-Echo featuring a smaller form factor and lower power consumption. Minimum deep sleep power consumption can reach **2 µA to 10 µA**. The board includes an inertial sensor (ICM20948), SX1262 LoRa module, solar charging (5 V), external GPS (L76K), 1.22-inch e-paper display, and 32 MB SPI Flash.

**T-Echo-Lite-KeyShield** is an optional baseboard expansion that adds a keyboard (TCA8418), speaker/microphone (ES8311), vibration motor (AW86224), and keyboard backlight (AW21009QNR).

## Quick Start

### Example Support

#### T-Echo-Lite Examples

| Example | Arduino (Adafruit_nRF52 V1.6.1) / PlatformIO | Description |
| :-----: | :-------------------------------------------: | :---------: |
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
| [es8311](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/es8311) | ✓ | Speaker/microphone |
| [tca8418](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/tca8418) | ✓ | Keyboard |
| [original_test](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/original_test) | ✓ | Factory test |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the T-Echo-Lite project folder
4. Open `platformio.ini`, uncomment the example you want under `[platformio]` → `default_envs`
5. If first time: run `python t-echo-lite_v1.0.0_setup.py` from the `tool/win10 vscode platformio start` folder to install the board
6. Click **✓** to compile, connect the board, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. In Preferences, add `https://www.adafruit.com/package_adafruit_index.json` to **Additional Board Manager URLs**
3. In Board Manager, install **Adafruit nRF52**
4. Copy library folders from the project `libraries` directory to your Arduino Sketchbook libraries folder
5. In **Tools** → **Board**, select:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **Nordic nRF52840 DK** |

6. Select the correct port
7. Enter DFU boot mode: press and release RST, wait for LED1 to light, then press and release RST again. LED1 will dim then brighten — DFU mode is active.
8. Click **✓** to compile, then **→** to upload

### JLINK Flashing

1. Install [nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop)
2. Install [J-Link](https://www.segger.com/downloads/jlink/)
3. Connect JLINK to the board as shown below:

<img src="/products/t-echo-series/t-echo-lite/index/image/12.jpg" alt="JLINK connection" width=100%>

4. Open nRF Connect for Desktop, install and open the **Programmer** tool
5. Add both the bootloader file and firmware file, click **Erase & Write** to flash

## Video

## Key Features

- nRF52840 ARM Cortex-M4 @ 64 MHz, Bluetooth 5.0, 256 kB RAM, 1 MB Flash
- SX1262 (S62F module) LoRa, SPI
- 1.22-inch GDEM0122T61 E-Paper display (176 × 192), driver SSD1681 — full refresh only
- ICM20948 9-axis IMU (I2C)
- L76K GPS module (UART)
- 32 MB SPI Flash (ZD25WQ32CEIGR)
- Solar charging (5 V input)
- Deep sleep power consumption: 2–10 µA minimum
- KeyShield expansion: TCA8418 keyboard + ES8311 audio + AW86224 vibration + AW21009QNR backlight

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU | nRF52840 @ ARM Cortex-M4, 64 MHz |
| RAM | 256 kB |
| Flash (MCU) | 1 MB |
| Flash (External) | 32 MB (ZD25WQ32CEIGR, SPI) |
| Bluetooth | Bluetooth 5.0 |
| LoRa | SX1262 (S62F module), SPI |
| GPS | L76K (UART) |
| Display | 1.22-inch GDEM0122T61 E-Paper, 176 × 192, SSD1681 |
| IMU | ICM20948 (9-axis, I2C) |
| Deep Sleep | 2–10 µA |
| Charging | Solar (5 V) |

### KeyShield Expansion

| Component | IC | Bus |
| :-------: | :--: | :-: |
| Keyboard | TCA8418 | I2C |
| Keyboard Backlight | AW21009QNR | I2C |
| Vibration Motor | AW86224 | I2C |
| Speaker / Microphone | ES8311 | I2C + I2S |

## Pin Diagram

For pin definitions, refer to the configuration files in the repository:

* [t_echo_lite_config.h](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/libraries/private_library/t_echo_lite_config.h)
* [t_echo_lite_keyshield_config.h](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/libraries/private_library/t_echo_lite_keyshield_config.h)

<img src="/products/t-echo-series/t-echo-lite/index/image/14.png" alt="T-Echo Lite antenna identification" width=60%>

> **Antenna note:** The Bluetooth and LoRa antennas are separate — see the diagram above to distinguish them.

## Dimension Diagram

## Schematic

* [T-Echo-Lite V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite_V1.0.pdf)
* [T-Echo-Lite-Eapper V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite-Eapper_V1.0.pdf)

## Datasheet

* [nRF52840 Datasheet](https://docs.nordicsemi.com/bundle/ps_nrf52840/page/keyfeatures_html5.html)
* [GDEM0122T61 (E-Paper)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/GDEM0122T61.pdf)
* [SSD1681 (E-Paper Driver)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/SSD1681.pdf)
* [S62F (SX1262 Module)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/S62F.pdf)
* [L76KB-A58 (GPS)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/L76KB-A58.pdf)
* [ICM20948](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/ICM20948.pdf)
* [ZD25WQ32CEIGR (Flash)](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/ZD25WQ32CEIGR.pdf)

## Software Development

* [T-Echo-Lite GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Echo-Lite)

### Dependent Libraries

* [Adafruit_EPD](https://github.com/adafruit/Adafruit_EPD)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver) (KeyShield)

## FAQ

* **Q. No debug output from USB?**
  A. Enable the **DTR** option in your serial assistant software.

* **Q. USB upload fails?**
  A. Enter DFU boot mode: press and release RST, wait for LED1 to light, press and release RST again. LED1 will dim then brighten — DFU mode is active.

* **Q. How to distinguish the Bluetooth and LoRa antennas?**
  A. Refer to the antenna diagram in the Pin Diagram section above.

* **Q. Arduino IDE prompts to upgrade libraries?**
  A. Do not upgrade — stay with the library versions included in the project.

* **Q. E-paper display shows ghosting?**
  A. GDEM0122T61 does not support fast refresh. Use full refresh only.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Echo-Lite V1.0 | 2024-12-06 | Initial release |
| T-Echo-Lite-KeyShield V1.0 | 2025-10-14 | KeyShield expansion board |

---

## Related Tests

### Power Consumption

| Mode | Firmware | Minimum Current |
| :--: | :------: | :-------------: |
| Deep Sleep | [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/firmware) | 2.54 µA |
