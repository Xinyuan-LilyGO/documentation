---
title: LILYGO T-ETH-Lite
show_source: false
tags: ESP32, Ethernet, RTL8201, PoE, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-eth-lite?variant=43120880746677" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lite/index/image/t-eth-lite-1.jpg', alt: 'T-ETH-Lite 正面图' },
  { src: '/products/t-eth-series/t-eth-lite/index/image/t-eth-lite-2.jpg', alt: 'T-ETH-Lite 实物图' },
  { src: '/products/t-eth-series/t-eth-lite/index/image/t-eth-lite-pin-zh.jpg', alt: 'T-ETH-Lite 引脚图' }
]" />

## 概述

T-ETH-Lite 是一款多功能嵌入式开发板，搭载 ESP32 主控芯片，深度融合以太网通信、本地存储与供电扩展能力。硬件层面配备 16MB Flash 与 8MB PSRAM，内置 RTL8201 以太网模块，同时预留 PoE 供电扩展接口，简化设备部署的供电需求。开发板整合了丰富的 GPIO 资源，支持多路 ADC 信号采集及电容触控功能，并集成 TF 卡扩展槽，广泛应用于智能控制、远程监测及自动化系统中。

> 注意：T-ETH-Lite 为 ESP32 版本，ESP32-S3 版本请切换到 [T-ETH-Lite S3](../t-eth-lite-s3/) 页面。

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series)。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 240MHz (WiFi/BT) |
| Flash Mode | QIO |
| Flash Frequency | 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | Enabled |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，点击右上角"<kbd>→</kbd>"进行烧录。

### 开发平台
1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙
- RTL8201 以太网模块，支持可选 PoE 供电扩展
- TF 卡扩展槽，丰富 GPIO，支持 ADC 和电容触控
- 3 × 指示灯（Power/Link/ACT），4 × 2mm 定位孔

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32 |
| Flash | 16MB |
| PSRAM | 8MB |
| 以太网 | RTL8201 |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth |
| USB | 1 × TYPE-C |
| IO 扩展 | 2 × 15pin |
| LED | 3 × 指示灯 |
| 按键 | BOOT + Reset |
| 电源 | 5V/500mA |
| 定位孔 | 4 × 2mm |

## 引脚图

<img src="/products/t-eth-series/t-eth-lite/index/image/t-eth-lite-pin-zh.jpg" alt="T-ETH-Lite 引脚图" width=100%>

<img src="/products/t-eth-series/t-eth-lite/index/image/t-eth-lite-info-zh.jpg" alt="T-ETH-Lite 概述图" width=100%>

## 尺寸图

## 原理图

* [T-ETH-Lite-ESP32](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-Lite-ESP32.pdf)

## 数据手册

* [DP9900M PoE](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/datasheet/ETH-POE-DP9900M-5V.pdf)
* [DP5300 PoE Pro](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/datasheet/ETH-PRO-POE-DP5300-12V.pdf)

## 软件开发

* [LilyGO-T-ETH-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series)

### 依赖库

* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [ETHClass2](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/lib/ETHClass2)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [ModbusMaster](https://github.com/4-20ma/ModbusMaster)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)

## 常见问题

* **Q. T-ETH-Lite 和 T-ETH-Lite S3 有什么区别？**  
  A. T-ETH-Lite 基于 ESP32，使用 RTL8201 以太网芯片；T-ETH-Lite S3 基于 ESP32-S3，使用 W5500 以太网芯片，支持 OPI PSRAM。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-ETH-Lite-ESP32_V1.0 | — | 初始版本 |
