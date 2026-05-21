---
title: T-Display K230
show_source: false
tags: K230, AIoT, LoRa, AMOLED, RISC-V
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-k230" />
<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-k230/assets/t-display-k230-1.jpg', alt: 'T-Display K230 front view' },
  { src: '/products/t-display-series/t-display-k230/assets/t-display-k230-2.jpg', alt: 'T-Display K230 physical image' },
  { src: '/products/t-display-series/t-display-k230/assets/t-display-k230-3.jpg', alt: 'T-Display K230 pin diagram' },
  { src: '/products/t-display-series/t-display-k230/assets/t-display-k230-cn.jpg' }
]" />

## Overview

T-Display K230 is based on Canaan Technology's **K230** chip — dual-core RISC-V (1.6 GHz + 0.8 GHz) with up to 1.6 TOPS NPU — combined with **ESP32-S3-R8** (16 MB Flash, 8 MB PSRAM) for Wi-Fi/Bluetooth connectivity. Features a **4.1-inch AMOLED** display (568 × 1232, MIPI DSI), **GT9895** capacitive touch, **SX1262/SX1280 LoRa** (433–923 MHz), 3-channel MIPI CSI-2 camera, HDMI 1080P output, Ethernet, and 3.5 mm audio. Suitable for AI inference, remote wireless data transmission, IoT monitoring, and video interaction in a 104 × 51 × 15.5 mm form factor.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [K230 SDK](https://github.com/kendryte/k230_sdk) | | | K230 Linux/RT-Smart dual-core SDK |

### K230 SDK Setup

K230 SDK must be compiled in a **Linux environment** (Ubuntu 20.04 recommended). For Windows, use WSL2 + Docker.

#### Pull Docker Image

```shell
docker pull ghcr.io/kendryte/k230_sdk
```

#### Download K230 SDK Source

```shell
git clone https://github.com/kendryte/k230_sdk
cd k230_sdk
make prepare_sourcecode
```

> `make prepare_sourcecode` automatically downloads Linux and RT-Smart toolchains, buildroot packages, and AI packages. Ensure this completes without errors.

#### Compile K230 SDK

```shell
docker run -u root -it -v $(pwd):$(pwd) -v $(pwd)/toolchain:/opt/toolchain -w $(pwd) ghcr.io/kendryte/k230_sdk /bin/bash
make CONF=k230_evb_defconfig
```

Pre-compiled images are available at [Canaan Developer Community](https://developer.canaan-creative.com/resource) under `K230/Images`.

### Flashing Image

**Linux:**
```shell
sudo dd if=sysimage-sdcard.img of=/dev/sdx bs=1M oflag=sync
```

**Windows:** Use [Rufus](http://rufus.ie/downloads/) to flash the TF card.

### PlatformIO (ESP32-S3 co-processor)

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the project folder and select the ESP32-S3 example
4. Click **✓** to compile, click **→** to upload

### Arduino (ESP32-S3 co-processor)

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Configure board as **ESP32S3 Dev Module**
4. Click **Upload**

### Development Platforms

1. [K230 SDK](https://github.com/kendryte/k230_sdk) — Main K230 development
2. [MaixPy](https://github.com/sipeed/maixpy) — K230 MicroPython
3. [Arduino IDE](https://www.arduino.cc/en/software) — ESP32-S3 co-processor
4. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf) — ESP32-S3 advanced

## Video

* [K230 SDK Video Tutorial](https://www.youtube.com/watch?v=lxcQWDoruOI)

## Key Features

- K230 dual-core RISC-V (1.6 GHz + 0.8 GHz), KPU ~1.6 TOPS, H.264/H.265 codec
- ESP32-S3-R8 co-processor: Wi-Fi + Bluetooth 5.0
- 4.1-inch AMOLED (568 × 1232, MIPI DSI), GT9895 capacitive touch
- SX1262/SX1280 LoRa (433–923 MHz)
- 3-channel MIPI CSI-2 camera, HDMI 1080P @ 30 FPS
- Ethernet (IEEE 802.3u), 3.5 mm audio, microphone
- 8 Gb LPDDR4, 16 MB Flash, TF card slot
- 104 × 51 × 15.5 mm

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| Main Processor | K230 Dual-core RISC-V, 1.6 GHz + 0.8 GHz, 1.6 TOPS NPU |
| Co-processor | ESP32-S3-R8 |
| Flash | 16 MB |
| Memory | 8 Gb LPDDR4 |
| Wi-Fi | 2.4 GHz 802.11 b/g/n (ESP32-S3) |
| Bluetooth | Bluetooth 5.0 LE (ESP32-S3) |
| LoRa | SX1262/SX1280, 433–923 MHz |
| Display | 4.1-inch AMOLED, 568 × 1232, MIPI DSI |
| Touch | GT9895 capacitive |
| Camera | 3 × MIPI CSI-2 |
| Video Output | HDMI 1080P @ 30 FPS |
| Network | Wi-Fi + Ethernet (IEEE 802.3u) |
| Audio | 3.5 mm jack + microphone |
| Storage | TF card slot |
| USB | 1 × Power + 1 × USB 2.0 OTG (Type-C) |
| Expansion | 2 × 20-pin dual-row header |
| Dimensions | 104 × 51 × 15.5 mm |

## Pin Diagram

<img src="/products/t-display-series/t-display-k230/assets/t-display-k230-cn.jpg" alt="T-Display K230 pin diagram" width=100%>

## Dimension Diagram

## Schematic

## Datasheet

* [K230 Datasheet](https://canaan.io/product/kendryteai)
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
  A. Ubuntu 20.04 is recommended. For Windows, use WSL2 + Docker.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Display-K230 V1.0 | 2024-01-01 | Initial version |
