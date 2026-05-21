---
title: LILYGO T-ETH LoRa Shield
show_source: false
tags: LoRa, SX1262, GPS, Ethernet, Shield
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-eth-elite-1?variant=44498256298165" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lora-shield/assets/t-eth-lora-shield-1.jpg', alt: 'T-ETH LoRa Shield 正面图' },
  { src: '/products/t-eth-series/t-eth-lora-shield/assets/t-eth-lora-shield-2.jpg', alt: 'T-ETH LoRa Shield 实物图' },
  { src: '/products/t-eth-series/t-eth-lora-shield/assets/t-eth-lora-shield-3.jpg', alt: 'T-ETH LoRa Shield 引脚图' }
]" />

## 概述

LILYGO T-ETH LoRa Shield 是一款专为 T-ETH-Elite 主板设计的扩展模块，集成多频段 LoRa 通信（支持 T-LR1121、SX1262/SX1276/SX1280 等模块，覆盖 2.4GHz 及 830-945MHz 频段）与 L76K 高精度 GPS 定位，适用于远距离物联网通信与位置追踪。提供 40-PIN GPIO（兼容树莓派布局）、SPI 接口及控制引脚，支持快速部署 LoRa 终端节点，广泛应用于物流追踪、资产定位、野外传感器数据回传等场景。

**适用组合：** T-ETH-Elite 主板 + T-ETH-LoRa 扩展板

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master)。

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- 多频段 LoRa：支持 SX1276/SX1262/SX1280/T-LR1121，覆盖 2.4GHz 及 830-945MHz
- L76K GPS 模块，高精度定位
- 40-PIN GPIO 扩展（兼容树莓派）
- SPI 接口（MISO/MOSI/SCLK/CS）及 RST/IRQ/BUSY 控制引脚
- 4 × M2.5 安装孔

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| LoRa | SX1276/SX1262/SX1280/T-LR1121 |
| 频段 | 2.4GHz 及 830-945MHz |
| GPS | L76K |
| 接口 | SPI + 40-PIN GPIO（兼容树莓派） |
| 安装孔 | 4 × M2.5 |

## 引脚图

<img src="/products/t-eth-series/t-eth-lora-shield/assets/t-eth-lora-shield-3.jpg" alt="T-ETH LoRa Shield 引脚图" width=100%>

<img src="/products/t-eth-series/t-eth-lora-shield/assets/t-eth-lora-shield-4.jpg" alt="T-ETH LoRa Shield 概述图" width=100%>

## 尺寸图

## 原理图

* [T-ETH-ELite-LoRa-Shield](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite-LoRa-Shield.pdf)

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

* **Q. T-ETH LoRa Shield 必须配合 T-ETH-Elite 使用吗？**  
  A. 是的，该扩展板专为 T-ETH-Elite 主板设计，需要与主板组合使用。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-ETH-ELite-LoRa-Shield_V1.0 | — | 初始版本 |
