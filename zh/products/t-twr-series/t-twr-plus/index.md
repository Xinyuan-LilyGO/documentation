---
title: T-TWR-Plus
show_source: false
tags: ESP32-S3, SA868, VHF, UHF, Walkie-Talkie, GPS, OLED, Radio, APRS
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-twr-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-1.jpg', alt: 'T-TWR-Plus 正面图' },
  { src: '/products/t-twr-series/t-twr-plus/index/image/t-twr-plus-2.jpg', alt: 'T-TWR-Plus 背面图' },
]" />

## 概述

LILYGO T-TWR-Plus 是一款可编程对讲机开发板，基于 **ESP32-S3-WROOM-1**（双核 LX7，16 MB Flash，8 MB PSRAM），集成 **SA868 UHF 无线模块**（400–480 MHz）。配备 **1.3 英寸 SH1106 OLED**、**L76K GNSS** 接收器、PTT 按键、扬声器、麦克风、TF 卡槽和 21700 电池座。兼容 OpenRTX 和 APRS，可实现完全自定义的无线电应用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [T-TWR](https://github.com/Xinyuan-LilyGO/T-TWR) | ✓ | | SA868 无线电、GPS、OLED、音频示例 |

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| USB Mode | **CDC and JTAG** |

## 主要特性

- ESP32-S3-WROOM-1，双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- SA868 UHF 无线模块，400–480 MHz（可选 VHF 136–174 MHz）
- 16 MB Flash，8 MB PSRAM
- 1.3 英寸 SH1106 OLED（128×64，I2C）
- L76K GNSS（GPS/北斗/GLONASS）
- PTT 按键、扬声器、麦克风
- TF 卡槽，21700 电池座
- 兼容 OpenRTX、APRS

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3-WROOM-1，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz，蓝牙 5.0 |
| 无线电 | SA868 UHF 400–480 MHz |
| 显示屏 | 1.3 英寸 SH1106 OLED，128×64 |
| GNSS | L76K |
| 存储 | TF 卡槽 |
| 电池 | 21700 锂离子电池座 |

## 软件开发

* [T-TWR GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-TWR)
* [OpenRTX 开源无线电固件](https://github.com/OpenRTX/OpenRTX)
* [ESP32APRS T-TWR](https://github.com/nakhonthai/ESP32APRS_T-TWR)

## 常见问题

* **Q. 支持哪些频段？**  A. 标准版使用 SA868 UHF 模块（400–480 MHz），另有 VHF 版本（136–174 MHz）可选。
* **Q. 可以用于业余无线电吗？**  A. SA868 模块支持 FM 语音发射，请确认您持有当地的业余无线电执照。

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
