---
title: T-Dongle-S3-Plus
show_source: false
tags: ESP32-S3, USB Dongle, TFT, Wi-Fi, Bluetooth, PSRAM, APA102, TF Card, PDM, IR
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-s3" />

<ImageGallery :columns="1" :images="[
  { src: '/products/t-dongle-series/t-dongle-s3-plus/index/image/t-dongle-s3-plus-1.png', alt: 'T-Dongle-S3-Plus 产品图' },
]" />

## 概述

T-Dongle-S3-Plus 是 T-Dongle-S3 系列中的增强版本，采用 ESP32-S3 MCU，配备 16MB Quad-SPI Flash、8MB OPI PSRAM 和 512KB SRAM。相较普通 T-Dongle-S3，Plus 版本增加了 PDM 麦克风、IR 红外发射、可选加密芯片 I2C 等功能，同时保留 0.96 英寸 ST7735 SPI 彩色屏、APA102 RGB LED、TF 卡槽、QWIIC 接口和 USB Type-A Dongle 形态。

## 快速开始

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-S3](https://github.com/Xinyuan-LilyGO/T-Dongle-S3) | ✓ | | Plus、显示屏、TF 卡、LED、PDM、IR、QWIIC 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [PlatformIO IDE](https://platformio.org/)
2. 克隆并打开官方仓库：

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

3. 在 `platformio.ini` 中选择 Plus 对应环境和示例
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
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |

> **注意：** T-Dongle-S3-Plus 带 8MB OPI PSRAM，Arduino IDE 中需要将 PSRAM 设置为 **OPI PSRAM**。

## 主要特性

- ESP32-S3 MCU，Wi-Fi 802.11 b/g/n + Bluetooth 5 LE
- 16MB Quad-SPI Flash，8MB OPI PSRAM，512KB SRAM
- USB Type-A Dongle 形态
- 0.96 英寸 ST7735 SPI 彩色屏，160 × 80 分辨率
- APA102 RGB LED
- TF 卡槽，使用 SDMMC 引脚
- PDM 麦克风
- IR 红外发射
- 可选加密芯片 I2C
- QWIIC 接口默认配置为串口功能

## 产品参数

| 参数 | 值 |
| --- | --- |
| MCU | ESP32-S3 |
| Flash | 16MB (Quad-SPI) |
| PSRAM | 8MB (OPI PSRAM) |
| SRAM | 512KB |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 5 LE |
| 显示屏 | 0.96 英寸 ST7735 (SPI)，160 × 80 |
| RGB LED | APA102 × 1 |
| 存储 | TF 卡槽 |
| 麦克风 | PDM 麦克风 |
| 红外 | IR 发射 |
| 加密芯片 | 可选 I2C 加密芯片 |
| USB 输入电压 | 4.8V ~ 5.5V |
| USB 最大电流 | 800mA |
| USB | USB Type-A 插头 |
| QWIIC | 默认串口功能，可通过外部上拉电阻用于 I2C |

## 引脚图

| 名称 | GPIO |
| --- | --- |
| RGB DIN | GPIO40 |
| RGB CLK | GPIO39 |
| SDMMC D0 | GPIO14 |
| SDMMC D1 | GPIO17 |
| SDMMC D2 | GPIO21 |
| SDMMC D3 | GPIO18 |
| SDMMC CLK | GPIO12 |
| SDMMC CMD | GPIO16 |
| Button | GPIO0 |
| QWIIC TX | GPIO43 |
| QWIIC RX | GPIO44 |
| PDM CLK | GPIO9 |
| PDM DATA | GPIO8 |
| IR | GPIO7 |
| I2C SDA（仅加密版本） | GPIO11 |
| I2C SCL（仅加密版本） | GPIO10 |

## QWIIC 接口

QWIIC 接口默认配置为串口功能。若需要作为 I2C 使用，需要为外接传感器添加上拉电阻。

## 加密芯片说明

加密版本可选 ATECC508A。为避免芯片被锁定，出厂时仅进行 I2C 探测确认设备响应，不会对 ATECC508A 进行配置或读写。配置后芯片会按照其固有配置进入锁定状态，操作前请确认理解相关流程。

## 原理图

- [T-Dongle-S3-Plus 原理图](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/schematic/T-Dongle-S3-PLUS.pdf)

## 数据手册

- [ST7735 显示屏数据手册](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/ST773_datasheet.pdf)
- [APA102 数据手册](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/APA102%202020%20256%206A.pdf)

## 软件开发

- [T-Dongle-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Dongle-S3)
