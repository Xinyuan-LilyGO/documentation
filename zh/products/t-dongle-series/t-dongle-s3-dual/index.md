---
title: T-Dongle-S3-Dual
show_source: false
tags: ESP32-S3, USB Dongle, Dual MCU, TFT, Wi-Fi, Bluetooth, APA102, TF Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-s3" />

<ImageGallery :columns="1" :images="[
  { src: '/products/t-dongle-series/t-dongle-s3-dual/index/image/t-dongle-s3-dual-1.png', alt: 'T-Dongle-S3-Dual 产品图' },
]" />

## 概述

T-Dongle-S3-Dual 是 T-Dongle-S3 系列中的双 ESP32-S3 版本，采用 USB Type-A Dongle 形态。设备集成两个 ESP32-S3 MCU，每个 MCU 配备 16MB Quad-SPI Flash 和 512KB SRAM，均不带 PSRAM。板载 APA102 RGB LED、TF 卡槽和 BOOT 按键，适合双 MCU 通信、USB 小工具、便携显示和无线 IoT 实验。

## 快速开始

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-S3](https://github.com/Xinyuan-LilyGO/T-Dongle-S3) | ✓ | | Dual、显示屏、TF 卡、LED、QWIIC 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [PlatformIO IDE](https://platformio.org/)
2. 克隆并打开官方仓库：

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

3. 在 `platformio.ini` 中选择 Dual 对应环境和示例
4. 点击 **Build** 编译，插入设备后点击 **Upload** 上传

### Arduino

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| 开发板 | **ESP32S3 Dev Module** |
| USB CDC On Boot | Enable |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Disabled** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |

> **注意：** T-Dongle-S3-Dual 两个 ESP32-S3 均无 PSRAM，Arduino IDE 中需要将 PSRAM 设置为 **Disabled**。

## 主要特性

- 双 ESP32-S3 MCU
- 每个 MCU 配备 16MB Quad-SPI Flash、512KB SRAM，无 PSRAM
- USB Type-A Dongle 形态
- APA102 RGB LED
- TF 卡槽，使用 SDMMC 引脚
- BOOT 按键可作为自定义按键或下载模式按键

## 产品参数

| 参数 | 值 |
| --- | --- |
| MCU | ESP32-S3 × 2 |
| Flash | 16MB (Quad-SPI) × 2 |
| SRAM | 512KB × 2 |
| PSRAM | 无 |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 5 LE |
| RGB LED | APA102 × 1 |
| 存储 | TF 卡槽 |
| USB 输入电压 | 4.8V ~ 5.5V |
| USB 最大电流 | 1000mA |
| USB | USB Type-A 插头 |

## 引脚图

### ESP Core 1

| 名称 | GPIO |
| --- | --- |
| Core 1 RGB DIN | GPIO40 |
| Core 1 RGB CLK | GPIO39 |
| Core 1 SDMMC D0 | GPIO14 |
| Core 1 SDMMC D1 | GPIO17 |
| Core 1 SDMMC D2 | GPIO21 |
| Core 1 SDMMC D3 | GPIO18 |
| Core 1 SDMMC CLK | GPIO12 |
| Core 1 SDMMC CMD | GPIO16 |
| Core 1 Button | GPIO0 |

### ESP Core 2

| 名称 | GPIO |
| --- | --- |
| Core 2 RGB DIN | GPIO40 |
| Core 2 RGB CLK | GPIO39 |

## 原理图

- [T-Dongle-S3-Dual 原理图](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/schematic/T-Dongle-DualS3.pdf)

## 数据手册

- [ST7735 显示屏数据手册](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/ST773_datasheet.pdf)
- [APA102 数据手册](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/APA102%202020%20256%206A.pdf)

## 软件开发

- [T-Dongle-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Dongle-S3)
