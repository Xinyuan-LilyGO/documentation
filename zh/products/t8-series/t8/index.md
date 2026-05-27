---
title: T8
show_source: false
tags: ESP32, WROVER, PSRAM, Wi-Fi, Bluetooth, MicroPython, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t8" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t8-series/t8/index/image/t8-1.jpg', alt: 'T8 正面图' },
  { src: '/products/t8-series/t8/index/image/t8-2.jpg', alt: 'T8 背面图' },
]" />

## 概述

LILYGO T8 是基于 ESP32-WROVER 的开发板，配备 **8 MB PSRAM**、4 MB Flash、Wi-Fi 和蓝牙 4.2。包含 MicroSD 卡槽、锂电池管理、CH9102F USB 转串口芯片和 3D 天线。大容量 PSRAM 和 Flash 使其非常适合 MicroPython 开发、图像处理和数据密集型 IoT 应用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO-T8-ESP32](https://github.com/LilyGO/TTGO-T8-ESP32) | ✓ | | SD 卡、音频、PSRAM 示例 |

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32 Wrover Module** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |

## 主要特性

- ESP32-WROVER 双核 Xtensa LX6 @ 240 MHz，Wi-Fi + 蓝牙 4.2
- 4 MB Flash，8 MB PSRAM
- MicroSD 卡槽，锂聚合物电池管理
- CH9102F USB 转串口（Micro USB）
- 3D 天线，支持 MicroPython

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-WROVER，双核 Xtensa LX6，240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz，蓝牙 4.2 + BLE |
| USB 串口 | CH9102F |
| 存储 | MicroSD 卡槽 |
| USB | 1 × Micro USB |
| 尺寸 | 65 × 26 × 10 mm |

## 软件开发

* [TTGO-T8-ESP32 GitHub 仓库](https://github.com/LilyGO/TTGO-T8-ESP32)

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| T8 V1.7 | | 初始版本 |
| T8 V1.8 | | 硬件修订 |
