---
title: T-Dongle-S3
show_source: false
tags: ESP32-S3, USB Dongle, TFT, Wi-Fi, Bluetooth, APA102, TF Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-1.jpg', alt: 'T-Dongle-S3 正面' },
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-2.jpg', alt: 'T-Dongle-S3 背面' },
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-3.jpg', alt: 'T-Dongle-S3 尺寸图' },
]" />

## 概述

LILYGO T-Dongle-S3 是一款 ESP32-S3 USB Dongle 开发板，采用 USB Type-A 插头形态，适合 USB 小工具、便携显示、数据记录和 IoT 教育项目。主控为 **ESP32-S3**，配备 **16MB Quad-SPI Flash**、**512KB SRAM**，不带 PSRAM。板载 0.96 英寸 ST7735 SPI 彩色屏（160 × 80）、APA102 RGB LED、TF 卡槽、BOOT 按键和 QWIIC 接口。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-S3](https://github.com/Xinyuan-LilyGO/T-Dongle-S3) | ✓ | | 显示屏、TF 卡、LED、QWIIC 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展，安装后重启 VS Code
3. 打开 `T-Dongle-S3` 项目目录
4. 在 `platformio.ini` 中启用 `default_envs = T-Dongle-S3`
5. 只保留一个有效的 `src_dir = xxxx` 示例路径
6. 点击 **✓** 编译，插入设备后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32 Core 3.3.0 或更高版本](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 将项目 `lib` 目录下的所有文件夹复制到 Arduino Sketchbook 的 libraries 目录
4. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 您的端口 |
| USB CDC On Boot | Enable |
| CPU Frequency | 240MHz (WiFi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Arduino Runs On | Core1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Disabled** |
| Upload Speed | 921600 |
| Programmer | **Esptool** |
| USB Mode | **Hardware CDC and JTAG** |

> **注意：** 使用带 USB 名称的示例时，USB Mode 需要切换为 **USB-OTG (TinyUSB)**。如果上传失败，按住 BOOT 键再插入电脑 USB 口，使设备进入下载模式。

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-S3，Wi-Fi 802.11 b/g/n + Bluetooth 5 LE
- 16MB Quad-SPI Flash，512KB SRAM，无 PSRAM
- USB Type-A Dongle 形态
- 0.96 英寸 ST7735 SPI 彩色屏，160 × 80 分辨率
- APA102 RGB LED，颜色顺序 BGR
- TF 卡槽，使用 SDMMC 引脚
- QWIIC 接口默认配置为串口功能
- BOOT 按键可作为自定义按键或下载模式按键

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3 |
| Flash | 16MB (Quad-SPI) |
| SRAM | 512KB |
| PSRAM | 无 |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 5 LE |
| 显示屏 | 0.96 英寸 ST7735 (SPI)，160 × 80 |
| RGB LED | APA102 × 1，BGR |
| 存储 | TF 卡槽 |
| USB 输入电压 | 4.8V ~ 5.5V |
| USB 最大电流 | 800mA |
| USB | USB Type-A 插头 |
| QWIIC | 默认串口功能，可通过外部上拉电阻用于 I2C |

![T-Dongle-S3 规格参数](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-info.jpg)

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

![T-Dongle-S3 引脚图](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-pinout.jpg)

## QWIIC 接口

QWIIC 接口默认配置为串口功能。若需要作为 I2C 使用，需要为外接传感器添加上拉电阻。

## 尺寸图

![T-Dongle-S3 尺寸图](/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-3.jpg)

## 原理图

- [T-Dongle-S3 原理图](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/schematic/T-Dongle-S3-QWIIC.pdf)

## 数据手册

- [ST7735 显示屏数据手册](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/ST773_datasheet.pdf)
- [APA102 数据手册](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/blob/main/datasheet/APA102%202020%20256%206A.pdf)

## 软件开发

- [T-Dongle-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Dongle-S3)

## 常见问题

* **Q. 一直无法烧录？**  
  A. 按住 BOOT 键并插入电脑 USB 口，使设备进入下载模式。烧录完成后重新插拔上电，正常启动时不要按住 BOOT。

* **Q. QWIIC 可以直接当 I2C 用吗？**  
  A. QWIIC 默认是串口功能。如需 I2C，需要为外接传感器添加上拉电阻。

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
