---
title: LILYGO T-A7670G
show_source: false
tags: ESP32, 4G LTE, SIM, A7670G, Global, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-a7670/t-a7670g/index/image/t-a7670g-2.jpg', alt: 'T-A7670G 正面图' },
  { src: '/products/t-sim-series/t-a7670/t-a7670g/index/image/t-a7670g-1.jpg', alt: 'T-A7670G 实物图' },
  { src: '/products/t-sim-series/t-a7670/t-a7670g/index/image/t-a7670g-zh.jpg', alt: 'T-A7670G 引脚图' }
]" />

> T-A76xx 系列各型号差异请参考 [SIM 对比页面](../../SIM.md)

## 概述

LILYGO T-A7670G R2 是一款专为物联网设计的 4G LTE Cat1 通信模块，支持全球多频段 GSM/GPRS/EDGE 网络，覆盖广泛运营商，适用于中低速数据传输场景（如传感器上报、远程指令控制）。内置 Nano SIM 卡槽，集成 12 路 GPIO（支持 ADC/DAC 及电容触摸功能）、SPI、I2C、UART 串口，并内置 TF 卡存储扩展接口。支持 4.4~6V 宽电压输入，可由 18650 锂电池供电，适合野外监测、车载追踪等无固定电源场景。

> ⚠️ 可选择不带 GPS 版本，带 GPS 版本请联系客服购买。

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX)。

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
| Flash Size | 4MB (32Mb) |
| Core Debug Level | None |
| Partition Scheme | default 4MB with spiffs (1.2MB APP/1.5MB spiffs) |
| PSRAM | Enabled |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，点击右上角"<kbd>→</kbd>"进行烧录。

### 开发平台
1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- ESP32-WROVER-B：4 MB Flash，8 MB PSRAM，240 MHz，Wi-Fi + 蓝牙 5.0
- A7670G 4G LTE Cat1 模块，支持全球多频段 GSM/GPRS/EDGE
- Nano SIM 卡，TF 卡扩展，18650 电池接口
- 丰富 GPIO：SPI、I2C、UART、ADC/DAC，电容触摸
- 可选 GPS 版本

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-WROVER-B |
| Flash | 4MB |
| PSRAM | 8MB |
| 时钟频率 | 240MHz |
| 无线 | Wi-Fi 802.11 b/g/n + BLE 5.0 |
| 4G 模块 | A7670G (LTE Cat1) |
| 支持地区 | 全球 |
| 频段 | LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28/B66; LTE-TDD: B34/B38/B39/B40/B41; GSM: 850/900/1800/1900MHz |
| 协议 | TCP/IP/IPv4/IPv6/DNS/FTP/HTTP/HTTPS |
| SIM | Nano SIM |
| 存储 | TF 卡 |
| USB | 1 × TYPE-C |
| IO 扩展 | 2.54mm × 2×16 GPIO |
| 电池 | 18650 |
| 电源输入 | 5V/500mA |
| 定位孔 | 4 × 2mm |
| 尺寸 | 111 × 34 × 19mm |

## 引脚图

<img src="/products/t-sim-series/t-a7670/t-a7670g/index/image/t-a7670g-zh.jpg" alt="T-A7670G 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-A7670G_V1.4](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/schematic/T-A7670X-V1.4.pdf)

## 数据手册

* [ESP32-WROVER-B Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-wrover-b_datasheet_en.pdf)

## 软件开发

* [LilyGO-T-A76XX GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX)

### 依赖库

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [ArduinoHttpClient](https://github.com/arduino-libraries/ArduinoHttpClient)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [StreamDebugger](https://github.com/vshymanskyy/StreamDebugger)
* [TinyGSM-fork](https://github.com/lewisxhe/TinyGSM-fork)

## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 可以参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 为什么我的板子一直烧录失败？**  
  A. 请按住 BOOT 按键重新下载程序。

* **Q. T-A7670G 支持哪些地区的网络？**  
  A. 支持全球多频段网络，覆盖主流运营商的 LTE-FDD/TDD 和 GSM 网络。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-A7670G_V1.4 | — | 当前版本 |
