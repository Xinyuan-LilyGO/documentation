---
title: T7
show_source: false
tags: ESP32, WROVER, Wi-Fi, Bluetooth, MicroPython, IoT, General Purpose
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t7-v1-3-mini-32-esp32" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7/index/image/t7-1.jpg', alt: 'T7 正面图' },
  { src: '/products/t7-series/t7/index/image/t7-2.jpg', alt: 'T7 背面图' },
  { src: '/products/t7-series/t7/index/image/t7-3.jpg', alt: 'T7 尺寸图' },
]" />

## 概述

LILYGO T7（Mini32）是一款紧凑型通用 ESP32-WROVER 开发板，基于 **ESP32-WROVER-E** 模组，具备 4–16 MB Flash、8 MB PSRAM、Wi-Fi 和蓝牙 4.2 + BLE。兼容 MicroPython、Arduino 和 ESP-IDF，配备 CH9102 USB 转串口芯片和 STEMMA QT/Qwiic JST 接口，体积小巧，适合原型设计和量产。

## 快速开始

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中选择 **ESP32 Wrover Module**，启用 **PSRAM**

## 主要特性

- ESP32-WROVER-E 双核 Xtensa LX6 @ 240 MHz，Wi-Fi + 蓝牙 4.2 + BLE
- 4 或 16 MB Flash，8 MB PSRAM
- CH9102 USB 转串口
- STEMMA QT / Qwiic JST-SH 接口
- 紧凑型 Mini32 外形（40×31 mm）
- 支持 MicroPython，可接锂聚合物电池

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-WROVER-E，双核 LX6 @ 240 MHz |
| Flash | 4 MB 或 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz，蓝牙 4.2 + BLE |
| 尺寸 | 40 × 31 mm |

## 软件开发

* [TTGO-T7-Demo GitHub 仓库](https://github.com/LilyGO/TTGO-T7-Demo)

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.3 | | 初始版本 |
| V1.5 | | 新增 PSRAM |
