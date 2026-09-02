---
title: T-Display SF32
show_source: false
tags: SF32LB52X, AMOLED, LoRa, BLE 5.3, IMU, AIoT
---

# {{ $frontmatter.title }} <ShopLink href="" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-sf32/index/image/t-display-sf32-1.jpg', alt: 'T-Display SF32 front' },
  { src: '/products/t-display-series/t-display-sf32/index/image/t-display-sf32-2.jpg', alt: 'T-Display SF32 back' },
  { src: '/products/t-display-series/t-display-sf32/index/image/t-display-sf32-info.jpg', alt: 'T-Display SF32 info' },
]" />

## Overview

T-Display SF32 is a development board based on SiFli's **SF32LB52X** ultra-low-power AIoT MCU. Built for smart wearables, smart home, industrial sensing, and IoT applications, the main board integrates a 2.16" AMOLED display, SX1262 LoRa, BHI260AP 9-axis IMU, BME280 temperature/humidity sensor, 24-bit audio, and USB PD fast charging; the L76K multi-constellation GNSS is located on the keyboard expansion module. The dual-core Arm Cortex-M33 big.LITTLE architecture (HCPU @ 192 MHz + LCPU @ 24 MHz) with an integrated ePicasso 2.5D graphics engine enables rich UI with very low power consumption.

<a href="/en/products/t-display-series/t-display-sf32/expansion-version.html">Expansion Version Notes</a>

## Quick Start

### SDK Setup

**Windows**

Follow the [SlFli-SDK-Lilygo Windows Installation Guide](https://github.com/Xinyuan-LilyGO/SlFli-SDK-Lilygo/blob/master/readme.md).

**Linux / macOS**

Follow the [SIFLI-SDK Unix Installation Guide](https://docs.sifli.com/projects/sdk/v2.4/sf32lb52x/quickstart/install/script/unix.html).

### Build and Flash (PowerShell)

```powershell
cd SIFLI\T-Display-SF32\examples\rt_os\rt_driver\project
scons --board=t-display-sf32_hcpu -j8
build_t-display-sf32_hcpu\uart_download.bat
```

After the build completes, run `uart_download.bat` and enter the device COM port number to flash.

> **Note:** If the device is not recognized, install the C++ driver from `tools/VisualCppRedist_54_Setup.7z`.

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

- SF32LB52X dual-core Arm Cortex-M33 big.LITTLE: HCPU @ 192 MHz (787 CoreMark) + LCPU @ 24 MHz
- ePicasso 2.5D high-performance graphics engine
- 2.16" AMOLED display (CO5300) with CST9220 capacitive touch
- Dual-mode Bluetooth 5.3 (BLE 5.3 + Classic BT) with BLE Audio, RX sensitivity −100 dBm
- SX1262 LoRa module (433 / 868 / 915 MHz, low power)
- Keyboard expansion module with L76K multi-constellation GNSS (GPS, GLONASS, BeiDou, QZSS)
- BHI260AP 9-axis IMU (accelerometer + gyroscope + magnetometer)
- BME280 temperature & humidity sensor
- 24-bit audio ADC/DAC with Bluetooth audio streaming, 3.5 mm jack
- AW86224 vibration motor, VSMY14940 IR transmitter
- Keyboard expansion module with TCA8418 + AW21009 8×8 matrix keyboard interface
- SGM41562B USB PD fast-charging battery management
- MicroSD slot (SDHC/SDXC)
- 16 MB Flash + 8 MB PSRAM
- 45 GPIO, I2C ×4, SPI ×2, UART, JTAG/SWD, Type-C USB

## Specifications

| Parameter | Value |
| :-------: | :---: |
| SOC | SF32LB52X |
| Architecture | Arm Cortex-M33 STAR-MC1 big.LITTLE |
| HCPU | 192 MHz, 787 CoreMark |
| LCPU | 24 MHz |
| SRAM | 576 kB (512 kB + 64 kB) |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Display | 2.16" AMOLED (CO5300) |
| Touch | CST9220 capacitive |
| Bluetooth | BLE 5.3 + Classic BT, BLE Audio |
| LoRa | SX1262, 433 / 868 / 915 MHz |
| GNSS | Keyboard expansion module: L76K (GPS / GLONASS / BeiDou / QZSS) |
| IMU | BHI260AP, 9-axis |
| Temp / Humidity | BME280 |
| Audio | 24-bit ADC/DAC, 3.5 mm jack |
| Charging | SGM41562B, USB PD fast charging |
| Storage | MicroSD (SDHC/SDXC) |
| USB | Type-C |
| GPIO | 45 pins |
| Operating Voltage | 3.2 V – 4.7 V |

## Pin Diagram

<img src="/products/t-display-series/t-display-sf32/index/image/t-display-sf32-pinout.jpg" alt="T-Display SF32 pin diagram" width=100%>

<!-- GPIO mapping table — refer to hardware schematics. -->

## Dimensions

<img src="/products/t-display-series/t-display-sf32/index/image/t-display-sf32-3.jpg" alt="T-Display SF32 dimensions" width=100%>

## Schematic

* [T-Display SF32 V1.0 Schematic (2026-04-02)](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-Display%20SF32%20V1.0.PDF)
* [T-Display SF32 V1.0 Schematic (2026-05-11)](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-Display%20SF32%20V1.0.PDF)
* [T-SF32-Keyboard V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-SF32-Keyboard%20V1.0.PDF)

## Datasheet

* [SF32LB52X Chip Spec](/datasheet/DS0052-SF32LB52X-%E8%8A%AF%E7%89%87%E6%8A%80%E6%9C%AF%E8%A7%84%E6%A0%BC%E4%B9%A6%20V0p1.pdf)
* [SF32LB52X User Manual](/datasheet/UM5201-SF32LB52x-%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C%20V0p8p5.pdf)
* [L76K GNSS Datasheet (keyboard expansion module)](/datasheet/L76KB-A58.pdf)
* [BME280 Datasheet](/datasheet/BME280.pdf)
* [SGM41562B Datasheet](/datasheet/C5153801_%E7%94%B5%E6%B1%A0%E7%AE%A1%E7%90%86_SGM41562BXG-TR_%E8%A7%84%E6%A0%BC%E4%B9%A6_SGMICRO%28%E5%9C%A3%E9%82%A6%E5%BE%AE%29%E7%94%B5%E6%B1%A0%E7%AE%A1%E7%90%86%E8%A7%84%E6%A0%BC%E4%B9%A6.PDF)
* [AW86224 Vibration Motor Datasheet](/datasheet/AW86224.pdf)
* [AW21009 LED Driver Datasheet](/datasheet/AW21009QNR.pdf)
* [XL9555 IO Expander Datasheet](/datasheet/xl9555.pdf)

## Software Libraries

* [T-Display-SF32 GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Display-SF32)
* [LILYGO SiFli SDK](https://github.com/Xinyuan-LilyGO/SlFli-SDK-Lilygo)
* [SIFLI Official SDK Docs](https://docs.sifli.com/projects/sdk/v2.4/sf32lb52x/index.html)
* [RT-Thread Documentation](https://www.rt-thread.org/document/site/#/rt-thread-version/rt-thread-standard/README)

## FAQ

* **Q. BLE is not working after menuconfig setup.**
  A. Add `lcpu_general_ble_img` to `SConscript` and `AddLCPU(...)` to `SConstruct`. The LCPU handles BLE initialization.

* **Q. Impeller flashing keeps failing.**
  A. Use a Type-C USB cable, verify the COM port in Device Manager, and install the C++ driver from `tools/VisualCppRedist_54_Setup.7z`.

* **Q. Device won't power on via USB after shutdown.**
  A. The factory firmware enters deep low-power mode on shutdown — only a physical button press can wake it. Charging still works normally while powered off.

## Changelog

| Version | Date | Notes |
| :-----: | :--: | :---- |
| V1.0 | — | Initial release |
