---
title: T-Echo-Plus
show_source: false
tags: NRF52840, LoRa, SX1262, E-Ink, Meshtastic, GPS, BLE, BHI260AP
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-echo-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-1.jpg', alt: 'T-Echo-Plus 正面图' },
  { src: '/products/t-echo-series/t-echo-plus/index/image/t-echo-plus-2.jpg', alt: 'T-Echo-Plus 背面图' },
]" />

## 概述

LILYGO T-Echo-Plus 是 T-Echo 的升级版本，专为 Meshtastic 网状网络设计。采用 **Nordic nRF52840** MCU（蓝牙 5.0 + NFC），搭配 **Semtech SX1262 LoRa** 收发器（433/868/915 MHz），配备 **1.54 英寸电子墨水屏**、**L76K GNSS** 接收器、**BHI260AP** 智能传感器中枢（IMU）、蜂鸣器和振动马达。相比标准 T-Echo，新增了传感器中枢、蜂鸣器和振动反馈，适用于离网通信、资产追踪和便携式 Meshtastic 节点。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-Echo](https://github.com/Xinyuan-LilyGO/LilyGo-T-Echo) | ✓ | | LoRa、电子墨水屏、GPS、Meshtastic 示例 |

### Meshtastic

直接通过 [flasher.meshtastic.org](https://flasher.meshtastic.org/) 烧录 Meshtastic 固件，选择 T-Echo 设备即可。也可通过 Meshtastic Android/iOS 应用进行配置。

## 主要特性

- Nordic nRF52840 @ 64 MHz，蓝牙 5.0 + NFC
- Semtech SX1262 LoRa（433/868/915 MHz），最大 +22 dBm，灵敏度 −139 dBm
- 1.54 英寸电子墨水屏（超低功耗，强光下可读）
- L76K GNSS（支持 GPS/北斗/GLONASS/QZSS）
- BHI260AP 智能传感器中枢（六轴 IMU）
- 蜂鸣器 + 振动马达（相比标准 T-Echo 新增）
- 支持锂聚合物电池充电
- 兼容 Meshtastic

## 产品参数

| 参数 | 值 |
| --- | --- |
| MCU | Nordic nRF52840，64 MHz，蓝牙 5.0 + NFC |
| Flash | 2 MB（MCU 内置） |
| RAM | 256 KB |
| LoRa | SX1262，433/868/915 MHz，+22 dBm |
| 蓝牙 | Bluetooth 5.0 |
| 显示屏 | 1.54 英寸电子墨水屏 |
| GNSS | L76K |
| IMU | BHI260AP 传感器中枢 |
| 提示 | 蜂鸣器 + 振动马达 |
| USB | 1 × USB-C |

## 软件开发

* [LilyGo-T-Echo GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-Echo)
* [Meshtastic 固件](https://github.com/meshtastic/firmware)

## 常见问题

* **Q. 如何烧录 Meshtastic？**  A. 访问 [flasher.meshtastic.org](https://flasher.meshtastic.org/)，选择 T-Echo 设备，按提示完成烧录。
* **Q. 与标准 T-Echo 的区别？**  A. T-Echo-Plus 新增了 BHI260AP 智能传感器中枢、蜂鸣器和振动马达。

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本，新增 BHI260AP、蜂鸣器、振动马达 |
