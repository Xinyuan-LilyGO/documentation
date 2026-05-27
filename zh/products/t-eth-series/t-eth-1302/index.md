---
title: LILYGO T-SX1302
show_source: false
tags: SX1302, LoRa, Gateway, Ethernet, Shield
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-eth-elite-1?variant=44525092765877" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-1302/index/image/t-eth-1302-1.jpg', alt: 'T-SX1302 正面图' },
  { src: '/products/t-eth-series/t-eth-1302/index/image/t-eth-1302-2.jpg', alt: 'T-SX1302 实物图' },
  { src: '/products/t-eth-series/t-eth-1302/index/image/t-eth-1302-3.jpg', alt: 'T-SX1302 概述图' }
]" />

## 概述

LILYGO T-SX1302 是搭配 T-ETH-ELITE 主板使用的 LoRa 网关扩展板，采用 SX1302 芯片，具有低功耗、高速率、高灵敏度、高可靠性、超低噪声、超长距离等特点。T-ETH-ELITE 可支持多个工作模式，包括 LoRa 网关、LoRa 终端节点、LTE 蜂窝网络、多协议融合等。

**适用组合：** T-ETH-Elite 主板 + T-SX1302 扩展板

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master)。

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- SX1302 LoRa 网关芯片，低功耗、高灵敏度、超长距离
- 搭配 T-ETH-Elite 主板构建完整 LoRa 网关解决方案
- 支持 LoRa 网关、LoRa 终端节点、多协议融合等工作模式

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| LoRa 芯片 | SX1302 |
| 搭配主板 | T-ETH-Elite |
| 工作模式 | LoRa 网关 / LoRa 终端节点 / 多协议融合 |

## 引脚图

<img src="/products/t-eth-series/t-eth-1302/index/image/t-eth-1302-3.jpg" alt="T-SX1302 概述图" width=80%>

## 尺寸图

## 原理图

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [LilyGO-T-ETH-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master)

### 依赖库

* [AceButton](https://github.com/bxparks/AceButton)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## 常见问题

* **Q. T-SX1302 必须配合 T-ETH-Elite 使用吗？**  
  A. 是的，该扩展板专为 T-ETH-Elite 主板设计，需要与主板组合使用。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-SX1302_V1.0 | — | 初始版本 |
