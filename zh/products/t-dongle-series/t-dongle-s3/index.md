---
title: T-Dongle-S3
show_source: false
tags: ESP32-S3, USB Dongle, TFT, Wi-Fi, Bluetooth, APA102, TF Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-1.jpg', alt: 'T-Dongle-S3 正面' },
  { src: '/products/t-dongle-series/t-dongle-s3/index/image/t-dongle-s3-2.jpg', alt: 'T-Dongle-S3 背面' },
]" />

## 概述

LILYGO T-Dongle-S3 是一款功能丰富的 ESP32-S3 USB 无线开发板，采用标准 USB Type-A 插头形态。搭载 **ESP32-S3** 双核 Xtensa LX7（240 MHz），支持 Wi-Fi 802.11 b/g/n 与蓝牙 5 LE，板载 **0.96 英寸 ST7735 IPS 彩色 TFT**（80 × 160）、**APA102 RGB LED**，以及隐藏于 USB-A 接口外壳内的 TF 卡槽，全部集成于透明塑料外壳之中。16 MB Flash 与 8 MB PSRAM 为数据密集型应用提供充足资源。JST SH 1.0 mm UART 接口与 1.25 mm 电池接口提供扩展连接能力。适用于 USB HID 小工具、无线显示棒、便携数据记录仪及 IoT 教育项目。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle-S3](https://github.com/Xinyuan-LilyGO/T-Dongle-S3) | ✓ | | 显示屏、TF 卡、LED、BLE 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-Dongle-S3` 项目文件夹
4. 打开 `platformio.ini` 选择示例
5. 点击 **✓** 编译，通过 USB-A 连接后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 您的端口 |
| USB CDC On Boot | Enable |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 模式 | QIO 80 MHz |
| Flash 大小 | **16MB (128Mb)** |
| 分区方案 | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| 上传模式 | UART0/Hardware CDC |
| 上传速率 | 921600 |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-S3 双核 Xtensa LX7 @ 240 MHz，Wi-Fi 802.11 b/g/n + 蓝牙 5 LE
- USB Type-A 插头形态，透明塑料外壳
- 0.96 英寸 ST7735 IPS 彩色 TFT LCD（80 × 160，65k 色）
- APA102 RGB LED（SPI 控制）
- TF 卡槽集成于 USB-A 接口外壳内部
- 16 MB Flash，8 MB PSRAM
- JST SH 1.0 mm 4 针 UART 接口
- MX 1.25 mm 2 针电池接口（含充电电路）
- 板载天线 + IPEX 外接天线接口
- 兼容 Arduino IDE、PlatformIO、MicroPython 及 Zephyr RTOS

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3（Xtensa 双核 LX7，240 MHz） |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，蓝牙 5 LE |
| 显示屏 | 0.96 英寸 ST7735 IPS TFT，80 × 160 |
| RGB LED | APA102 × 1 |
| 存储 | TF 卡槽 |
| USB | USB Type-A 插头 |
| 电池接口 | MX 1.25 mm 2 针 |
| UART 接口 | JST SH 1.0 mm 4 针 |
| 天线 | 板载天线 + IPEX |
| 外包装尺寸 | <!-- 尺寸 --> |

## 引脚图

### Display (ST7735)

| ST7735   | BL     | CS     | SCK    | MOSI   | DC     | RST    |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO38 | GPIO4  | GPIO5  | GPIO3  | GPIO2  | GPIO1  |

### TF Card

| TF Card  | CLK    | CMD    | D0     | CS     |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO5  | GPIO3  | GPIO7  | GPIO4  |

### APA102 LED

| APA102   | CI     | DI     |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO40 | GPIO39 |

### Button

| Button   | GPIO   |
| :------: | :----: |
| ESP32-S3 | GPIO0  |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [T-Dongle-S3 GitHub 仓库（硬件资料）](https://github.com/Xinyuan-LilyGO/T-Dongle-S3/tree/main/hardware)

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

- [T-Dongle-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Dongle-S3)

### 依赖库

- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
- [FastLED](https://github.com/FastLED/FastLED)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
