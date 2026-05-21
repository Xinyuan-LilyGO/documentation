---
title: LILYGO T-ETH-Lite S3
show_source: false
tags: ESP32-S3, Ethernet, W5500, PoE, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-eth-lite?variant=43120880779445" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-1.jpg', alt: 'T-ETH-Lite S3 正面图' },
  { src: '/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-2.jpg', alt: 'T-ETH-Lite S3 实物图' },
  { src: '/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-pin-zh.jpg', alt: 'T-ETH-Lite S3 引脚图' }
]" />

## 概述

T-ETH-Lite ESP32-S3 是一款基于 ESP32-S3 芯片的嵌入式开发模块，集成了以太网通信、TF 卡存储扩展及多种外设接口。核心配置包括 16MB Flash 和 8MB PSRAM，内置 W5500 以太网控制器提供稳定网络连接。模块配备丰富的 GPIO 接口，支持 ADC 通道、触摸输入及专用输出控制引脚，可灵活适配传感器和执行器。此外还提供 SD 卡槽和可选 PoE 供电扩展板，适用于物联网终端、工业控制等场景。

> 注意：T-ETH-Lite S3 为 ESP32-S3 版本，ESP32 版本请切换到 [T-ETH-Lite](../t-eth-lite/) 页面。

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series)。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Disabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | OPI PSRAM |
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

- ESP32-S3：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- W5500 以太网控制器，支持可选 PoE 供电扩展
- TF 卡扩展槽，丰富 GPIO
- 支持 ADC 信号采集和电容触控
- 3 × 指示灯（Power/Link/ACT），4 × 2mm 定位孔

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 |
| Flash | 16MB |
| PSRAM | 8MB |
| 以太网 | W5500 |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5.0 |
| USB | 1 × TYPE-C |
| IO 扩展 | 2 × 15pin |
| LED | 3 × 指示灯 |
| 按键 | BOOT + Reset |
| 电源 | 5V/500mA |
| 定位孔 | 4 × 2mm |

## 引脚图

<img src="/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-pin-zh.jpg" alt="T-ETH-Lite S3 引脚图" width=100%>

<img src="/products/t-eth-series/t-eth-lite-s3/assets/t-eth-lite-s3-info-zh.jpg" alt="T-ETH-Lite S3 概述图" width=100%>

## 尺寸图

## 原理图

* [T-ETH-Lite-ESP32S3](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-Lite-ESP32S3.pdf)

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

* **Q. T-ETH-Lite S3 和 T-ETH-Lite 有什么区别？**  
  A. T-ETH-Lite S3 基于 ESP32-S3，配备 16MB Flash 和 8MB OPI PSRAM；T-ETH-Lite 基于 ESP32，配备 16MB Flash 和 8MB PSRAM，以太网芯片为 RTL8201。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-ETH-Lite-ESP32S3_V1.0 | — | 初始版本 |
