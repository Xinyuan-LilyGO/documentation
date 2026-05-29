---
title: T7-S3
show_source: false
tags: ESP32-S3, Wi-Fi, Bluetooth, PSRAM, Qwiic, IoT, General Purpose
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t7-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7-s3/index/image/t7-s3-1.jpg', alt: 'T7-S3 正面图' },
  { src: '/products/t7-series/t7-s3/index/image/t7-s3-2.jpg', alt: 'T7-S3 背面图' },
  { src: '/products/t7-series/t7-s3/index/image/t7-s3-3.jpg', alt: 'T7-S3 尺寸图' },
]" />

## 概述

LILYGO T7-S3 是基于 **ESP32-S3-WROOM-1** 的紧凑型通用开发板，具备 16 MB Flash、8 MB PSRAM、USB-C 和蓝牙 5.0。配备 STEMMA QT / Qwiic JST-SH 接口便于 I2C 扩展，支持锂聚合物电池，尺寸仅 3.9×3.1 cm。适用于 IoT 原型、传感器集线器等需要 ESP32-S3 双核 LX7 性能和 USB OTG 功能的项目。

## 快速开始

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Flash Size | **16MB (128Mb)** |
| PSRAM | **OPI PSRAM** |
| USB Mode | **CDC and JTAG** |

## 主要特性

- ESP32-S3-WROOM-1，双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- 16 MB Flash，8 MB PSRAM
- USB-C（供电、烧录、USB OTG）
- STEMMA QT / Qwiic JST-SH I2C 扩展接口
- 支持锂聚合物电池充电
- 紧凑外形 39 × 31 mm

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3-WROOM-1，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz，蓝牙 5.0 |
| USB | 1 × USB-C（支持 OTG） |
| 扩展 | Qwiic / STEMMA QT（I2C） |
| 尺寸 | 39 × 31 mm |

![T7-S3 规格参数](/products/t7-series/t7-s3/index/image/t7-s3-info.jpg)

## 引脚图

![T7-S3 引脚图](/products/t7-series/t7-s3/index/image/t7-s3-pinout.jpg)

## 软件开发

* [LilyGo-T7-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T7-S3)

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
