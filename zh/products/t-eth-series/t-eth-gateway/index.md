---
title: LILYGO T-ETH Gateway
show_source: false
tags: LoRa, SX1302, GPS, Ethernet, Gateway
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-eth-elite-1?variant=44498205016245" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-gateway/index/image/t-eth-gateway-1.jpg', alt: 'T-ETH Gateway 正面图' },
  { src: '/products/t-eth-series/t-eth-gateway/index/image/t-eth-gateway-2.jpg', alt: 'T-ETH Gateway 实物图' },
  { src: '/products/t-eth-series/t-eth-gateway/index/image/t-eth-gateway-3.jpg', alt: 'T-ETH Gateway 引脚图' }
]" />

## 概述

LILYGO T-ETH ELITE Gateway Shield（网关扩展板）是一款多功能物联网网关解决方案，支持 LoRa（SX1276/SX1262/SX1280/LR1121 等模块）、以太网（W5500 控制器）和 Wi-Fi/蓝牙双模通信，集成 GPS 定位与 PoE 供电（36~57V），可搭建广域网络枢纽，适用于农业监测、物流追踪及混合组网场景，兼容 Arduino/ESP-IDF 开发平台。

**适用组合：** T-ETH-Elite 主板 + T-ETH-Gateway 扩展板

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master)。

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- 多模 LoRa 网关：支持 SX1276/SX1262/SX1280/LR1121，覆盖 868/915MHz 频段
- GPS 模块，精准定位
- 结合 T-ETH-Elite 主板：W5500 以太网、Wi-Fi/蓝牙、PoE 供电（36~57V）
- 适用于远距离、低功耗广域物联网部署

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| LoRa | SX1276/SX1262/SX1280/LR1121 |
| 频段 | 868/915MHz |
| GPS | 集成 GPS |
| 搭配主板 | T-ETH-Elite |
| 以太网 | W5500（主板） |
| PoE | 36~57V（主板） |

## 引脚图

<img src="/products/t-eth-series/t-eth-gateway/index/image/t-eth-gateway-3.jpg" alt="T-ETH Gateway 引脚图" width=100%>

<img src="/products/t-eth-series/t-eth-gateway/index/image/t-eth-gateway-4.jpg" alt="T-ETH Gateway 概述图" width=100%>

## 尺寸图

## 原理图

* [T-ETH-ELite-Gateway-Shield](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite-Gateway-Shield.pdf)

## 数据手册

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)

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

* **Q. T-ETH Gateway Shield 必须配合 T-ETH-Elite 使用吗？**  
  A. 是的，该扩展板专为 T-ETH-Elite 主板设计，需要与主板组合使用。

* **Q. 如何配置 LoRa 网关频率？**  
  A. 请参考 T-ETH-Elite 产品页面的应用参考章节，其中包含 TTN 网关详细配置说明。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-ETH-ELite-Gateway-Shield_V1.0 | — | 初始版本 |
