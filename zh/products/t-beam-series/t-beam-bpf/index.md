---
title: T-Beam-BPF
show_source: false
tags: ESP32-S3, LoRa, SX1278, BPF, GPS, OLED, AXP2101, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-1.jpg', alt: 'T-Beam-BPF 正面图' },
  { src: '/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-2.jpg', alt: 'T-Beam-BPF 背面图' },
]" />

## 概述

LILYGO T-Beam-BPF 是 T-Beam 系列的特殊变体，集成了**带通滤波器（BPF）**，专为 **144–148 MHz VHF 频段** LoRa 通信优化，可有效抑制带外干扰，提升接收灵敏度。基于 **ESP32-S3** 双核 LX7，配备 **SX1278 LoRa** 模块、**0.96 英寸 SSD1306 OLED**、GPS 模块、**AXP2101 电源管理芯片**和 18650 电池座。适用于业余无线电、APRS 追踪及强干扰环境下的 LoRa 通信。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa、GPS、OLED、PMU 示例 |

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB CDC On Boot | Enable |
| Flash Size | **8MB (64Mb)** |
| PSRAM | **QSPI PSRAM** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- SX1278 LoRa，内置带通滤波器（144–148 MHz VHF）
- 提升信号选择性，有效抑制带外干扰
- 0.96 英寸 SSD1306 OLED（128×64，I2C）
- GPS 模块，支持定位追踪
- AXP2101 电源管理
- 18650 电池座，支持充电
- USB-C 供电与烧录

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3，双核 LX7 @ 240 MHz |
| Flash | 8 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz，蓝牙 5.0 |
| LoRa | SX1278 + BPF，144–148 MHz |
| 显示屏 | 0.96 英寸 SSD1306 OLED，128×64 |
| GPS | L76K 或兼容模块 |
| 电源管理 | AXP2101 |
| 电池 | 18650 锂离子电池座 |

## 原理图

* [LilyGo-LoRa-Series 硬件文件](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/schematic)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## 常见问题

* **Q. BPF 带通滤波器的作用？**  A. 内置滤波器将接收频段限制在 144–148 MHz VHF，有效减少带外干扰，提升在密集 RF 环境下的接收灵敏度。
* **Q. 可以用于 APRS 吗？**  A. 可以。144 MHz VHF 频段是大多数地区的 APRS 标准频率，BPF 专为此应用设计。

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
