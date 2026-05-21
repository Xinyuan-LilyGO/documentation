---
title: LILYGO T-Watch S3 Plus
show_source: false
tags: ESP32-S3, Watch, LoRa, LCD, GPS, Wearable
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-watch-s3-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-s3-plus/assets/t-watch-s3-plus1.jpg', alt: 'T-Watch S3 Plus 正面图' },
  { src: '/products/t-watch-series/t-watch-s3-plus/assets/t-watch-s3-plus2.jpg', alt: 'T-Watch S3 Plus 实物图' },
  { src: '/products/t-watch-series/t-watch-s3-plus/assets/t-watch-s3-plus3.jpg', alt: 'T-Watch S3 Plus 引脚图' }
]" />

## 概述

T-Watch S3 Plus 是 T-Watch S3 的升级版本，在原有基础上增加了 GPS 功能，是一款多功能智能可穿戴设备，集成了高性能硬件与无线通信技术，适用于运动健康监测、远程交互及音频场景。核心配置包括 1.54 英寸 240×240 高清 LCD 显示屏，搭配 BMA423 轴传感器和电容式触摸模块，内置 Max98357A 音频放大器与 PDM 麦克风，支持高质量音频输出及语音指令输入。目前有 SX1262 和 SX1280 两个 LoRa 版本，可实现远距离低功耗无线通信。

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/)。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | UART0/Hardware CDC |
| USB CDC On Boot | Enabled |
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
- 1.54 英寸 240×240 LCD 显示屏，电容触摸
- BMA423 轴传感器，Max98357A 音频放大器，PDM 麦克风
- LoRa SX1262/SX1280（433~923 MHz 可选），GPS，AXP2101 电源管理
- DRV2605 振动电机

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 1.54英寸 LCD 240×240 (SPI) |
| 触摸 | 电容触摸 (I²C) |
| 轴传感器 | BMA423 (I²C) |
| 音频输出 | Max98357A (I²C) |
| 音频输入 | PDM 麦克风 |
| LoRa | SX1262/SX1280，433~923MHz |
| 电机 | DRV2605 (I²C) |
| 电源管理 | AXP2101 |
| 无线 | Wi-Fi 802.11 b/g/n + BLE 5.0 |
| USB | 1 × Micro-USB |
| 按键 | POWER（长按2s开机，长按6s关机）+ BOOT |
| 尺寸 | 51.5 × 42 × 20mm（不含表带） |

## 引脚图

<img src="/products/t-watch-series/t-watch-s3-plus/assets/t-watch-s3-plus3.jpg" alt="T-Watch S3 Plus 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-Watch S3 Plus](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/blob/t-watch-s3/schematic/T_WATCH_S3.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [TTGO_TWatch_Library GitHub 仓库](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)

### 依赖库

* [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)

## 常见问题

* **Q. 如何开机/关机？**  
  A. 按住 POWER 按键约 2 秒开机，按住约 6 秒关机。

* **Q. T-Watch S3 Plus 和 T-Watch S3 有什么区别？**  
  A. Plus 版本在 T-Watch S3 基础上新增了 GPS 功能，其余硬件规格相同。

* **Q. 为什么我的板子一直烧录失败？**  
  A. 请按住 BOOT 按键重新下载程序。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-Watch-S3-Plus_V1.0 | — | 初始版本 |
