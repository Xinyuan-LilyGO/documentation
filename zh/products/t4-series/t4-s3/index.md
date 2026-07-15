---
title: T4-S3
show_source: false
tags: ESP32-S3, AMOLED, Touch, Display, WiFi, Bluetooth
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t4-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t4-series/t4-s3/index/image/t4-s3-1.jpg', alt: 'T4-S3 正面' },
  { src: '/products/t4-series/t4-s3/index/image/t4-s3-2.jpg', alt: 'T4-S3 背面' },
  { src: '/products/t4-series/t4-s3/index/image/t4-s3-3.jpg', alt: 'T4-S3 尺寸图' },
]" />

## 概述

LILYGO T4-S3 是一款基于 **ESP32-S3R8** 双核 LX7 微控制器的紧凑型开发板，搭载 **2.41 英寸 SPI RGB AMOLED 触摸屏**（600 × 450，800 cd/m²）。板载 Wi-Fi 2.4 GHz 和蓝牙 5.0 (LE)，16 MB Flash、8 MB PSRAM，MicroSD 卡槽以及通过 JST-GH 1.25 mm 接口提供的锂电池管理功能。两个 Qwiic（JST-SH 1.0 mm）扩展口和 30 针 1.27 mm 间距引脚排可访问可用 GPIO 和电源引脚。适用于智能显示项目、可穿戴原型开发及紧凑型物联网应用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) | ✓ | ✓ | AMOLED 显示、触摸、TF 卡示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-AMOLED-Series` 项目文件夹
4. 打开 `platformio.ini`，选择 T4-S3 环境
5. 点击 **✓** 编译，通过 USB-C 连接后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | 对应端口 |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. 点击 **上传**

> **注意：** GPIO18 已连接至 AMOLED 显示屏 TE 引脚，请勿用于其他用途。

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-S3R8 双核 LX7 @ 240 MHz，Wi-Fi 2.4 GHz + 蓝牙 5.0 (LE)
- 2.41 英寸 SPI RGB AMOLED 触摸屏，600 × 450 分辨率，800 cd/m²
- 16 MB Flash + 8 MB PSRAM
- MicroSD 卡槽
- JST-GH 1.25 mm 接口锂电池充电管理
- 2 × Qwiic（JST-SH 1.0 mm）I2C 扩展接口
- 30 针 1.27 mm 间距 GPIO 引脚排
- USB-C 编程与供电

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3R8，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n，蓝牙 5.0 (LE) |
| 显示屏 | 2.41 英寸 AMOLED，600 × 450，SPI，电容触摸 |
| 存储 | MicroSD 卡槽 |
| USB | 1 × USB-C |
| 扩展接口 | 2 × Qwiic（JST-SH 1.0 mm），30 针 1.27 mm 引脚排 |
| 电池 | JST-GH 1.25 mm，3.7 V 锂电池 |
| 重量 | <!-- placeholder --> |
| 外包装尺寸 | <!-- placeholder --> |

## 引脚图

![T4-S3 规格参数](/products/t4-series/t4-s3/index/image/t4-s3-info.jpg)

### 引脚图

![T4-S3 引脚图](/products/t4-series/t4-s3/index/image/t4-s3-pinout.jpg)

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [LilyGo-AMOLED-Series 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/tree/master/schematic)

## 数据手册

* [ESP32-S3 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [LilyGo-AMOLED-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)
* [快速上手指南](quick-start.md)

### 依赖库

* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [LVGL](https://github.com/lvgl/lvgl)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)

## 常见问题

* **Q. 为什么 GPIO18 不可用？**
  A. GPIO18 内部已连接至 AMOLED 显示屏的 TE（防撕裂）引脚，用于其他用途可能导致显示异常。

* **Q. 上传失败？**
  A. 长按 **BOOT**，短按 **RST** 后松开，再点击上传。

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | 2023-12 | 初版发布 |
