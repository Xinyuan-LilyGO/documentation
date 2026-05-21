---
title: LILYGO T-ETH LTE
show_source: false
tags: LTE, 4G, GPS, Ethernet, Shield
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-eth-elite-1?variant=44498205049013" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lte/assets/t-eth-lte-1.jpg', alt: 'T-ETH LTE 正面图' },
  { src: '/products/t-eth-series/t-eth-lte/assets/t-eth-lte-2.jpg', alt: 'T-ETH LTE 实物图' },
  { src: '/products/t-eth-series/t-eth-lte/assets/t-eth-lte-3.jpg', alt: 'T-ETH LTE 引脚图' }
]" />

## 概述

LILYGO T-ETH ELITE-LTE Shield 是一款专为 T-ETH-Elite 主板设计的 4G 蜂窝网络扩展模块，集成 LTE 通信与 L76K 高精度 GPS 定位功能，支持在无网络覆盖区域实现远程数据传输。兼容 T-PCIE LTE 模块，提供 T-PCIE 模式（4.2V 供电）与官方 PCIE 模式（3.3V 供电），适用于工业设备远程监控、偏远地区数据传输、车载移动终端等场景。

**适用组合：** T-ETH-Elite 主板 + T-ETH-LTE 扩展板

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master)。

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- 4G LTE 蜂窝通信，覆盖 Wi-Fi/以太网无法部署的区域
- L76K GPS 模块，精准地理位置追踪与时间同步
- 支持 T-PCIE 模式（4.2V）和官方 PCIE 模式（3.3V）
- 40-PIN GPIO 扩展（兼容树莓派）

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| 无线 | 4G LTE |
| GPS | L76K |
| 供电模式 | T-PCIE 4.2V / 官方 PCIE 3.3V |
| 接口 | 40-PIN GPIO（兼容树莓派） |
| 搭配主板 | T-ETH-Elite |

## 引脚图

<img src="/products/t-eth-series/t-eth-lte/assets/t-eth-lte-3.jpg" alt="T-ETH LTE 引脚图" width=100%>

<img src="/products/t-eth-series/t-eth-lte/assets/t-eth-lte-4.jpg" alt="T-ETH LTE 概述图" width=100%>

## 尺寸图

## 原理图

* [T-ETH-ELite-LTE-Shield](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite-LTE-Shield.pdf)

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

* **Q. T-ETH LTE Shield 必须配合 T-ETH-Elite 使用吗？**  
  A. 是的，该扩展板专为 T-ETH-Elite 主板设计，需要与主板组合使用。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-ETH-ELite-LTE-Shield_V1.0 | — | 初始版本 |
