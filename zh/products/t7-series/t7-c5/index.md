---
title: T7-C5
show_source: false
tags: ESP32-C5, WiFi6, 5GHz, Thread, Zigbee, Bluetooth5, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t7-c5" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7-c5/index/image/t7-c5-1.jpg', alt: 'T7-C5 正面图' },
  { src: '/products/t7-series/t7-c5/index/image/t7-c5-2.jpg', alt: 'T7-C5 背面图' },
  { src: '/products/t7-series/t7-c5/index/image/t7-c5-3.jpg', alt: 'T7-C5 尺寸图' },
]" />

## 概述

LILYGO T7-C5 基于 **ESP32-C5-MINI-1** 模组，这是乐鑫首款支持 **双频 Wi-Fi 6（802.11ax，2.4 GHz + 5 GHz）** 的芯片，同时支持蓝牙 5 和 IEEE 802.15.4（Thread/Zigbee）。配备 4 MB Flash、USB-C 接口和紧凑外形，专为需要高吞吐量无线连接和多协议支持的下一代智能家居及工业 IoT 应用设计。

## 快速开始

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 ESP32 Arduino 核心（v3.x 或更高版本，支持 ESP32-C5）
3. 在 **工具 → 开发板** 中选择 **ESP32C5 Dev Module**

### ESP-IDF

1. 安装 [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/) v5.3 或更高版本
2. 设置目标：`idf.py set-target esp32c5`
3. 编译并烧录：`idf.py build flash`

## 主要特性

- ESP32-C5-MINI-1 @ 240 MHz，RISC-V 单核
- 双频 Wi-Fi 6（802.11ax）：2.4 GHz + 5 GHz
- 蓝牙 5（LE）
- IEEE 802.15.4（Thread / Zigbee）
- 4 MB Flash，USB-C

## 产品参数

| 参数 | 值 |
| --- | --- |
| MCU | ESP32-C5-MINI-1，RISC-V @ 240 MHz |
| Flash | 4 MB |
| Wi-Fi | 2.4 GHz + 5 GHz，802.11ax（Wi-Fi 6） |
| 蓝牙 | Bluetooth 5（LE） |
| 802.15.4 | Thread / Zigbee |
| USB | 1 × USB-C |

![T7-C5 规格参数](/products/t7-series/t7-c5/index/image/t7-c5-info.jpg)

## 引脚图

![T7-C5 引脚图](/products/t7-series/t7-c5/index/image/t7-c5-pinout.jpg)

## 软件开发

* [LilyGo-T7-C5 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T7-C5)

## 常见问题

* **Q. Wi-Fi 6 的优势是什么？**  A. Wi-Fi 6 相比 Wi-Fi 4 提供更高吞吐量、更低延迟，在密集无线环境下性能更佳。
* **Q. 支持 5 GHz 网络吗？**  A. 支持。ESP32-C5 是首款支持双频（含 5 GHz）Wi-Fi 的 ESP32 芯片。

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
