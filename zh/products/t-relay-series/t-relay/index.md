---
title: T-Relay
show_source: false
tags: ESP32, Relay, Wi-Fi, Bluetooth, IoT, Smart Home
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-relay" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-relay-series/t-relay/index/image/t-relay-1.jpg', alt: 'T-Relay 正面图' },
  { src: '/products/t-relay-series/t-relay/index/image/t-relay-2.jpg', alt: 'T-Relay 背面图' },
  { src: '/products/t-relay-series/t-relay/index/image/t-relay-3.jpg', alt: 'T-Relay 尺寸图' },
  { src: '/products/t-relay-series/t-relay/index/image/t-relay-info.jpg', alt: 'T-Relay 规格参数' },
]" />

## 概述

LILYGO T-Relay 是一款基于 **ESP32-WROVER-E** 的继电器控制开发板（双核 Xtensa LX6，240 MHz），集成 Wi-Fi 4（802.11 b/g/n）和蓝牙 4.2，配备 **4 路光耦隔离继电器**，可切换最高 250 V AC / 10 A 或 28 V DC / 10 A 负载。支持 5–24 V DC 宽压输入，兼容 Tasmota、ESPHome 等主流固件框架，适合智能家居自动化和工业控制。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-Relay](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay) | ✓ | | 继电器控制、ESPHome、Tasmota 示例 |

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中选择 **ESP32 Wrover Module**
3. 将 **分区方案** 设置为 **Huge APP (3MB No OTA/1MB SPIFFS)**，**PSRAM** 设置为 **Enabled**
4. 点击 **上传**

> **注意：** 该板需使用 LilyGO T-U2T 或其他 CP210x/CH340 USB 转串口适配器进行烧录。

## 主要特性

- ESP32-WROVER-E 双核 Xtensa LX6 @ 240 MHz，Wi-Fi + 蓝牙 4.2
- 4 路光耦隔离继电器（HRS4H-S-DC5V）
- 继电器触点：250 V AC / 10 A 或 28 V DC / 10 A
- 宽压输入：5–24 V DC
- 4 MB Flash，8 MB PSRAM
- 每路继电器配蓝色 LED 状态指示灯
- 兼容 Tasmota、ESPHome、ESPEasy

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-WROVER-E，双核 Xtensa LX6，240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，蓝牙 4.2 |
| 继电器通道 | 4 路 |
| 继电器额定值 | 250 V AC / 10 A，28 V DC / 10 A |
| 输入电压 | 5–24 V DC |

![T-Relay 规格参数](/products/t-relay-series/t-relay/index/image/t-relay-info.jpg)

## 引脚图

![T-Relay 引脚图](/products/t-relay-series/t-relay/index/image/t-relay-pinout.jpg)

### 继电器输出
| :---: | :--: |
| K1 | GPIO21 |
| K2 | GPIO19 |
| K3 | GPIO18 |
| K4 | GPIO5 |

## 原理图

- [LilyGo-T-Relay 硬件文件](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay/tree/main/hardware)

## 软件开发

- [LilyGo-T-Relay GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-Relay)
- [T-Relay Tasmota 模板](https://templates.blakadder.com/lilygo_T-Relay.html)

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
