---
title: T-Impulse Plus
show_source: false
tags: nRF52840, LoRa, GPS, OLED, IMU, BLE
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-lmpulse-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-1.jpg', alt: 'T-Impulse Plus front' },
  { src: '/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-2.jpg', alt: 'T-Impulse Plus back' },
]" />

## Overview

T-Impulse Plus is a low-power wristband based on the **nRF52840** chip, featuring an optimized power efficiency design. Minimum deep sleep power consumption reaches **10 μA – 40 μA** (actual values may vary across boards due to differences in onboard components). Shutdown power consumption is below **1 μA**. The board integrates an OLED display, SX1262 LoRa module, MIA-M10Q GPS, ICM20948 IMU, SPI Flash, and TTP223 capacitive touch button. Suitable for low-power wearable IoT applications.

## Quick Start

### Example Support

| Example | Arduino / PlatformIO | Description |
| :-----: | :------------------: | :---------: |
| [original_test](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/original_test) | ✓ | Factory test program |
| [Battery_Measurement](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Battery_Measurement) | ✓ | Battery voltage measurement |
| [BLE_Uart](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/BLE_Uart) | ✓ | BLE UART communication |
| [Display](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Display) | ✓ | OLED display test |
| [Display_GPS_BLE_Uart](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Display_GPS_BLE_Uart) | ✓ | Display + GPS + BLE combined |
| [Flash](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Flash) | ✓ | SPI Flash read/write |
| [Flash_Erase](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Flash_Erase) | ✓ | SPI Flash erase |
| [Flash_Speed_Test](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Flash_Speed_Test) | ✓ | SPI Flash speed test |
| [GPS](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/GPS) | ✓ | GPS basic example |
| [gps_2](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/gps_2) | ✓ | GPS example variant |
| [GPS_Full](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/GPS_Full) | ✓ | GPS full-featured example |
| [ICM20948](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/ICM20948) | ✓ | IMU sensor test |
| [IIC_Scan_2](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/IIC_Scan_2) | ✓ | I²C bus scan |
| [sgm41562](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/sgm41562) | ✓ | Power management IC test |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/SX126x_PingPong) | ✓ | LoRa ping-pong test |
| [SX126x_PingPong_2](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/SX126x_PingPong_2) | ✓ | LoRa ping-pong test (variant) |
| [sx126x_tx_continuous_wave](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/sx126x_tx_continuous_wave) | ✓ | LoRa continuous wave TX |
| [ttp223](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/ttp223) | ✓ | Touch button test |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the [T-Impulse-Plus](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus) repository and open it in VS Code
3. Open `platformio.ini`, uncomment the desired example under `[platformio]`
4. Click **✓** to compile, click **→** to upload
5. If you encounter an error during first setup, open `tool/win10 vscode platformio start/` and run `python t_impulse_plus_setup.py` to complete board installation

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. In **Preferences**, add the Adafruit board URL: `https://www.adafruit.com/package_adafruit_index.json`
3. In **Board Manager**, search for `Adafruit_nRF52` and install the Adafruit package
4. Copy all folders from the project `libraries/` to your Arduino libraries folder
5. Select board settings:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **Nordic nRF52840 DK** |

6. Enter bootloader download mode: Press and release **RST**, wait 1 second, then press and release **RST** again. A new drive letter will appear on the computer.
7. Click **→** to upload

### JLINK Flashing

1. Install [nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop) and [JLINK](https://www.segger.com/downloads/jlink/)
2. Connect JLINK pins correctly
3. Open nRF Connect → **Programmer** tool
4. Add bootloader + firmware files, click **Erase & Write**

### Development Platforms

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## Video

## Key Features

- nRF52840 ARM Cortex-M4 @ 64 MHz, 1 MB Flash, 256 kB RAM, Bluetooth 5.0 LE
- SX1262 LoRa (S62F module, SPI)
- MIA-M10Q GNSS (UART)
- SSD1315 OLED display, 64 × 32 px (I²C)
- ICM20948 9-axis IMU (I²C)
- ZD25WQ32CEIGR 4 MB SPI Flash
- TTP223 capacitive touch button
- SGM41562 power management IC
- Deep sleep: 10–40 μA; shutdown: < 1 μA

## Product Parameters

| Parameter | Value |
| :-------: | :---: |
| MCU | nRF52840 |
| RAM | 256 kB |
| Flash (MCU) | 1 MB |
| Flash (External) | 4 MB (ZD25WQ32CEIGR, SPI) |
| Bluetooth | Bluetooth 5.0 LE |
| LoRa | SX1262 (S62F module) |
| GPS | MIA-M10Q GNSS |
| Display | SSD1315 OLED, 64 × 32 px |
| IMU | ICM20948 (9-axis) |
| Touch | TTP223 capacitive button |
| PMU | SGM41562 |
| Deep Sleep Current | 10–40 μA |
| Shutdown Current | < 1 μA |

## Pin Diagram

<img src="/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-pinout.jpg" alt="T-Impulse Plus pin diagram" width=100%>

<!-- GPIO mapping table. Refer to pin_config.h in the repository for full definitions. -->

## Dimensions

<img src="/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-3.jpg" alt="T-Impulse Plus dimension diagram" width=100%>

## Schematic

* [T-Impulse-Plus_V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/project/T-Impulse-Plus_V1.0.pdf)

## Datasheet

* [nRF52840 Datasheet](https://docs.nordicsemi.com/bundle/ps_nrf52840/page/keyfeatures_html5.html)
* [SSD1315](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/SSD1315.pdf)
* [S62F (SX1262)](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/S62F.pdf)
* [MIA-M10Q](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/MIA-M10Q-00B.pdf)
* [ICM20948](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/ICM20948.pdf)
* [ZD25WQ32CEIGR](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/ZD25WQ32CEIGR.pdf)
* [TTP223](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/TTP223-BA6-TD.pdf)
* [SGM41562](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/SGMICRO-SGM41562XGTR.pdf)

## Software Libraries

* [T-Impulse-Plus GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus)

### Dependent Libraries

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver)

## FAQ

* **Q. How do I enter bootloader download mode?**
  A. Press and release **RST**, wait 1 second, then press and release **RST** again. A new drive letter will appear on the computer indicating the device is in bootloader mode.

* **Q. Why is there no debug output from USB?**
  A. Enable the **DTR** option in your serial monitor software.

* **Q. Arduino IDE prompts to upgrade libraries — should I?**
  A. Do not upgrade. Different library versions may be incompatible; stay with the versions in the `libraries` directory.

* **Q. Still don't know how to set up the programming environment?**
  A. Refer to [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) for additional setup instructions.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Impulse-Plus V1.0 | 2025-06-18 | Initial release |
