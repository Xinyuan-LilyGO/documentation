---
title: T-Display K230
show_source: false
tags: K230, AIoT, LoRa, AMOLED, RISC-V
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-k230" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-k230/index/image/t-display-k230-1.jpg', alt: 'T-Display K230 front view' },
  { src: '/products/t-display-series/t-display-k230/index/image/t-display-k230-2.jpg', alt: 'T-Display K230 physical image' },
  { src: '/products/t-display-series/t-display-k230/index/image/t-display-k230-3.jpg', alt: 'T-Display K230 angled view' }
]" />

## Overview

T-Display K230 is based on Canaan Technology's **K230** chip — dual-core RISC-V (1.6 GHz + 0.8 GHz) with up to 1.6 TOPS NPU and 1 GB LPDDR4 memory. The board uses **RTL8189FS SDIO Wi-Fi**; Bluetooth requires a USB Bluetooth adapter or the optional nRF52840 base board. Features a **4.1-inch AMOLED** display (568 × 1232, MIPI DSI), **GT9895** capacitive touch, **SX1262/SX1280 LoRa** (433–923 MHz), 3-channel MIPI CSI-2 camera, HDMI 1080P output, Ethernet, and 3.5 mm audio. Suitable for AI inference, remote wireless data transmission, IoT monitoring, and video interaction in a 104 × 51 × 15.5 mm form factor.

<a href="/products/t-display-series/t-display-k230/k230/index.html?lang=en" target="_blank" rel="noopener noreferrer">K230 40Pin Pinout Tool</a>

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [K230 SDK](https://github.com/kendryte/k230_sdk) | | | K230 Linux/RT-Smart dual-core SDK |

### T-Display K230 SDK Setup

The T-Display-K230 repository contains the board support package and launcher. Build it in a Linux filesystem with Ubuntu 22.04 or 24.04 recommended; use WSL2 on Windows. The upstream K230 SDK documentation recommends Ubuntu 20.04 and also documents Docker.

#### Clone the Board Repository

```shell
git clone --recurse-submodules https://github.com/Xinyuan-LilyGO/T-Display-K230.git t-display-k230
cd t-display-k230
./scripts/setup_ubuntu.sh
```

#### Apply the BSP and Build the SD-Card Image

```shell
./scripts/apply_to_sdk.sh
./scripts/build_sdcard_image.sh
```

The image is generated at `k230_bsp/images/sysimage-sdcard.img`. For the upstream SDK workflow, see the [official K230 SDK README](https://github.com/kendryte/k230_sdk): run `make prepare_sourcecode`, then select a target with `make CONF=xxx`.

#### Flashing the SD Card Image

```shell
sudo dd if=k230_bsp/images/sysimage-sdcard.img of=/dev/sdX bs=8M status=progress conv=fsync
sync
```

On Windows, use [Rufus](https://rufus.ie/en) and select **DD Image mode** if prompted. Cancel any prompt to format an unknown partition after flashing.

Pre-built board images, when published, are listed in the [T-Display-K230 Releases](https://github.com/Xinyuan-LilyGO/T-Display-K230/releases). Generic images from the Canaan community require a matching board configuration.

### Development Platforms

1. [T-Display-K230 BSP](https://github.com/Xinyuan-LilyGO/T-Display-K230) — board Linux/RT-Smart image
2. [K230 SDK](https://github.com/kendryte/k230_sdk) — upstream K230 development
3. [K230 CanMV](https://github.com/kendryte/k230_canmv/) — K230 MicroPython
4. [nRF52840 base-board firmware](https://github.com/Xinyuan-LilyGO/T-Display-K230-nRF52840) — optional BLE peripheral

## Video

* [K230 SDK Video Tutorial](https://www.youtube.com/watch?v=lxcQWDoruOI)

## Key Features

- K230 dual-core RISC-V (1.6 GHz + 0.8 GHz), KPU ~1.6 TOPS, H.264/H.265 codec
- RTL8189FS SDIO Wi-Fi (some generic K230 BSP configurations also support RTL8723DS)
- Bluetooth via a USB Bluetooth adapter or the optional nRF52840 base board; RTL8723DS Bluetooth also requires separate UART signals
- 4.1-inch AMOLED (568 × 1232, MIPI DSI), GT9895 capacitive touch
- SX1262/SX1280 LoRa (433–923 MHz)
- 3-channel MIPI CSI-2 camera, HDMI 1080P @ 30 FPS
- RTL8152B 100 Mbps Ethernet (IEEE 802.3u), 3.5 mm audio, microphone
- 1 GB LPDDR4, 16 MB Flash, TF card slot
- 104 × 51 × 15.5 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| Main Processor | K230 Dual-core RISC-V, 1.6 GHz + 0.8 GHz, 1.6 TOPS NPU |
| Memory | 1 GB LPDDR4 |
| Wi-Fi | 2.4 GHz 802.11 b/g/n, RTL8189FS over SDIO |
| Bluetooth | No onboard ESP Bluetooth; use a USB Bluetooth adapter or optional nRF52840 base board |
| LoRa | SX1262/SX1280, 433–923 MHz |
| Display | 4.1-inch AMOLED, 568 × 1232, MIPI DSI |
| Touch | GT9895 capacitive |
| Camera | 3 × MIPI CSI-2 |
| Video Output | HDMI 1080P @ 30 FPS |
| Network | RTL8152B 100 Mbps Ethernet (IEEE 802.3u) |
| Audio | 3.5 mm jack + microphone |
| Storage | TF card slot |
| USB | 1 × Power + 1 × USB 2.0 OTG (Type-C) |
| Expansion | 2 × 20-pin dual-row header |
| Dimensions | 104 × 51 × 15.5 mm |

## Product Details

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-specifications.jpg" alt="T-Display K230 specifications" width=100%>

## Pin Diagram

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-cn.jpg" alt="T-Display K230 pin diagram" width=100%>

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-40pin.jpg" alt="T-Display K230 2 × 20-pin header pinout" width=100%>

## Expansion Board

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-keyboard-extension.jpg" alt="T-Display K230 keyboard extension board" width=100%>

## Dimension Diagram

## Schematic

## Datasheet

* [K230 Datasheet](https://www.kendryte.com/k230/en/main/00_hardware/K230_datasheet.html)
* [K230 SDK Documentation](https://github.com/kendryte/k230_docs)

## Software Development

* [K230 SDK GitHub Repository](https://github.com/kendryte/k230_sdk)
* [K230 Documentation](https://github.com/kendryte/k230_docs)

### Dependent Libraries

* [K230 SDK](https://github.com/kendryte/k230_sdk)
* [MaixPy](https://github.com/sipeed/maixpy)

## FAQ

* **Q. Which boot methods does K230 support?**
  A. K230 supports SDCard, eMMC, and NOR Flash boot. For development, TF card boot (SD card boot mode) is recommended.

* **Q. Which Linux distribution is required for K230 SDK compilation?**
  A. Ubuntu 20.04 is recommended by the upstream SDK. The T-Display-K230 repository recommends Ubuntu 22.04 or 24.04 for its board build scripts; use WSL2 on Windows.

* **Q. Is Wi-Fi or Bluetooth provided by an ESP32-S3 on this board?**
  A. No. The T-Display-K230 BSP uses RTL8189FS over SDIO for Wi-Fi. Bluetooth requires a USB Bluetooth adapter or the optional nRF52840 base board; identify the exact wireless hardware and driver on your board revision.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Display-K230 V1.0 | 2024-01-01 | Initial version |
