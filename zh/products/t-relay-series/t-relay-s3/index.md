---
title: T-Relay-S3
show_source: false
tags: ESP32-S3, Relay, Wi-Fi, Bluetooth, IoT, Smart Home, ESPHome, Tasmota
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-relay-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-relay-series/t-relay-s3/index/image/t-relay-s3-1.jpg', alt: 'T-Relay-S3 正面图' },
  { src: '/products/t-relay-series/t-relay-s3/index/image/t-relay-s3-2.jpg', alt: 'T-Relay-S3 背面图' },
]" />

## 概述

LILYGO T-Relay-S3 是继电器控制开发板的升级版，采用 **ESP32-S3-WROOM-1U**（双核 LX7，16 MB Flash，8 MB PSRAM），配备 **6 路继电器**（通过 SN74HC595 移位寄存器控制）。支持扩展最多 3 块扩展板，实现最多 24 路继电器控制，每路额定电流 10 A。兼容 Tasmota、ESPHome 和 ESPEasy，适用于智能家居自动化。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-Relay](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay) | ✓ | | 继电器控制、ESPHome、Tasmota |

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

- ESP32-S3-WROOM-1U，双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- 6 路继电器（SN74HC595 移位寄存器控制）
- 可扩展至 24 路（最多 3 块扩展板）
- 每路继电器额定 10 A（最大 2500 W）
- 16 MB Flash，8 MB PSRAM
- 2 × 10 针扩展座（可接 LCD）
- 兼容 Tasmota、ESPHome、ESPEasy

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3-WROOM-1U，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，蓝牙 5.0 |
| 继电器通道 | 6 路（可扩展至 24 路） |
| 最大负载电流 | 每路 10 A |

## 软件开发

* [LilyGo-T-Relay GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay)
* [T-Relay S3 Tasmota 模板](https://templates.blakadder.com/lilygo_T-Relay-S3.html)

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
