---
title: LILYGO T-ETH ELite
show_source: false
tags: ESP32-S3, Ethernet, PoE, W5500, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-eth-elite-1?variant=44498204983477" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-eth-series/t-eth-elite/index/image/t-eth-elite-1.jpg', alt: 'T-ETH ELite 正面图' },
  { src: '/products/t-eth-series/t-eth-elite/index/image/t-eth-elite-2.jpg', alt: 'T-ETH ELite 实物图' },
  { src: '/products/t-eth-series/t-eth-elite/index/image/t-eth-elite-3.jpg', alt: 'T-ETH ELite 引脚图' }
]" />

## 概述

LILYGO T-ETH ELITE 是一款基于 ESP32-S3-WROOM-1 模组的高性能物联网开发板，集成了 W5500 以太网控制器，支持以太网通信和 PoE（IEEE 802.3af Class 0）供电，输入电压范围为 36~57V。该板载 16MB Flash 和 8MB PSRAM，提供丰富的扩展接口，包括 MicroSD 卡槽（SPI 接口）、40-PIN GPIO（兼容树莓派引脚布局），以及以太网、USB OTG、UART 等外设接口。支持双模（Wi-Fi/蓝牙 + 以太网）组网，可通过扩展板支持 LoRa 网关、LoRa 终端节点、LTE 蜂窝网络等多种物联网应用场景。

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master)。

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
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [MicroPython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3-WROOM-1：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- W5500 以太网控制器，支持 IEEE 802.3af PoE（36~57V 输入）
- 兼容树莓派 40-PIN GPIO 扩展接口
- MicroSD 卡槽（SPI），USB OTG（Type-C）
- 支持 LoRa 网关/节点、LTE 等扩展板

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB |
| 以太网 | W5500 |
| PoE | IEEE 802.3af Class 0，36~57V |
| 存储 | MicroSD (SPI) |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5.0 |
| USB | 1 × TYPE-C (USB + OTG) |
| 扩展接口 | 40-PIN GPIO（树莓派兼容） |
| 按键 | RESET + BOOT + OTG switch + IO38 |
| 电源输入 | 5V/500mA |
| 定位孔 | 4 × M2.5 |
| 尺寸 | 50 × 67 × 17mm |

## 引脚图

<img src="/products/t-eth-series/t-eth-elite/index/image/t-eth-elite-3.jpg" alt="T-ETH ELite 引脚图" width=100%>

<img src="/products/t-eth-series/t-eth-elite/index/image/t-eth-elite-zh.jpg" alt="T-ETH ELite 概述图" width=100%>

## 尺寸图

## 原理图

* [T-ETH-ELite](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-ELite.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [LilyGO-T-ETH-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/tree/master)

### 依赖库

* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)
* [ESP32_USB_Stream](https://github.com/esp-arduino-libs/ESP32_USB_Stream)
* [ETHClass2](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/lib/ETHClass2)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [ModbusMaster](https://github.com/4-20ma/ModbusMaster)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [U8g2](https://github.com/olikraus/u8g2)

## 应用参考

<img src="/products/t-eth-series/t-eth-elite/index/image/t-eth-mode.jpg" alt="T-ETH ELite 应用方案" width=100%>

### LoRa 网关方案

组合：主板 + LoRa 网关扩展板

功能：支持搭建 LoRa 网络基础设施，兼容 SX1276/SX1262/SX1280/LR1121 等主流模块，可选配 GPS 实现精准定位。

场景：适用于远距离、低功耗的广域物联网部署，如农业环境监测、智慧城市节点管理。

### LoRa 终端节点方案

组合：主板 + LoRa 模块扩展板

场景：物流追踪、资产定位、野外传感器数据回传等移动终端场景。

### LTE 蜂窝网络方案

组合：主板 + LTE 通讯扩展板

场景：工业设备远程监控、偏远地区数据传输、车载移动终端等。

### LoRa 网关配置说明

网关项目参考：[LilyGO-ETH-Gateway](https://github.com/Xinyuan-LilyGO/LilyGO-ETH-Gateway)  
参考视频：[TTN & LilyGO LoRa Gateway](https://www.youtube.com/watch?v=NyL87WWntP4)

**配置方法一（Wi-Fi AP 模式）：**
1. 手机连接 ESP32S3 产生的热点，名称：`LilyGo-Gateway`，密码：`12345678`
2. 在浏览器中输入 `192.168.4.1` 打开网关配置页面
3. 根据标题填写对应栏目，完成后点击 Apply
4. 点击重启按钮，网关将按填写参数运行

**配置方法二（以太网模式）：**
1. 通过网线接入以太网接口
2. 打开串口监视器，获取连接 IP 地址，在同一局域网的浏览器中输入该 IP
3. 根据标题填写对应栏目，完成后点击 Apply
4. 点击重启按钮

**主要配置参数：**

| 参数 | 说明 |
| :-- | :-- |
| Next time Boot | 重启后的运行模式：Soft AP / Station / Ethernet |
| Frequency Plan | LoRa 频率计划：CN470 / EU868 / US915 |
| Radio 1/2 Center Frequency | 射频中心频率（CN470: 470600000, EU868: 867500000, US915: 915600000） |
| Wi-Fi SSID / Password | 无线网络名称和密码（Ethernet Mode 可不填） |
| NS Host | LoRa 网关服务器域名或 IP |
| NS Port | 服务器端口（TTN 默认 1700） |
| Gateway ID | 8字节十六进制网关ID，不可重复 |

频率计划参考：[The Things Network Regional Parameters](https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/)

## 常见问题

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-ETH-ELite_V1.0 | — | 初始版本 |
