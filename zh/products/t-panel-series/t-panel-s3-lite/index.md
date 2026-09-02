---
title: T-Panel S3 Lite
show_source: false
tags: ESP32-S3, Display, SD Card
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-panel-s3?variant=43906154168501" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-1.jpg', alt: 'T-Panel S3 Lite 正面' },
  { src: '/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-2.jpg', alt: 'T-Panel S3 Lite 背面' },
]" />

## 概述

T-Panel S3 Lite 是 T-Panel S3 的精简版本，搭载单颗 ESP32-S3，配备 3.95 英寸 480×480 IPS 非触摸显示屏。相比完整版 T-Panel S3，去掉了 ESP32-H2 协处理器、触摸控制器及 RS485/CAN 现场总线模块，更适合以显示为核心的 IoT 仪表盘和嵌入式 HMI 应用场景。

## 快速开始

### 硬件组装

<!-- 焊接排针、安装天线等。 -->

### Arduino

<!-- Arduino 开发环境配置教程链接或说明。 -->

### ESP-IDF

<!-- ESP-IDF 开发环境配置教程链接或说明。 -->

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- 3.95 英寸 480×480 IPS LCD，SPI 初始化 + RGB 并行数据总线（ST7701S 控制器，YDP395BT001 面板）
- ESP32-S3，16 MB Flash，8 MB PSRAM
- Wi-Fi 2.4 GHz + 蓝牙 5 LE
- 非触摸显示屏（无触摸控制器）
- MicroSD 卡槽（SPI 接口）
- XL9535 IO 扩展芯片（用于显示屏 SPI 初始化）
- 2 个用户按键（KEY1、KEY2）+ BOOT 按键
- 支持 Arduino、PlatformIO 和 ESP-IDF 开发环境

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3 |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 显示屏 | 3.95 英寸 480×480 IPS，ST7701S，SPI+RGB |
| 触摸 | 无 |
| 无线 | Wi-Fi 2.4 GHz，BT 5 LE |
| IO 扩展 | XL9535，I2C |
| 重量 | <!-- g --> |
| 外包装尺寸 | <!-- mm --> |

## 引脚图

<img src="/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-pinout.jpg" alt="引脚图" width=100%>

### 显示屏 (ST7701S)

| ST7701S  | BL     | VSYNC  | HSYNC  | PCLK   | R0     | R1     | R2     | R3     | R4     | G0     | G1     | G2     | G3     | G4     | G5     | B0     | B1     | B2     | B3     | B4     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO14 | GPIO40 | GPIO39 | GPIO41 | GPIO12 | GPIO13 | GPIO42 | GPIO46 | GPIO45 | GPIO6  | GPIO7  | GPIO8  | GPIO9  | GPIO10 | GPIO11 | GPIO1  | GPIO2  | GPIO3  | GPIO4  | GPIO5  |

显示屏 SPI 初始化（通过 XL9535）：

| 功能        | XL9535 引脚 |
| :---------: | :---------: |
| SPI CS      | IO14        |
| SPI SCLK    | IO36（与 SD 共用） |
| SPI MOSI    | IO35（与 SD 共用） |

### SD 卡

| SD Card  | CS     | SCK    | MOSI   | MISO   |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO34 | GPIO36 | GPIO35 | GPIO37 |

### 按键

| 功能  | GPIO   |
| :---: | :----: |
| KEY1  | GPIO48 |
| KEY2  | GPIO47 |
| BOOT  | GPIO0  |

## 尺寸图

<img src="/products/t-panel-series/t-panel-s3-lite/index/image/t-panel-s3-lite-3.jpg" alt="尺寸图" width=100%>

## 原理图

[T-Panel-Lite V1.0 原理图 (PDF)](https://github.com/Xinyuan-LilyGO/T-Panel-Lite/blob/main/project/T-Panel_Lite_V1.0.pdf)

## 数据手册

- [ST7701S 显示控制器](/datasheet/ST7701S_SPEC_V1.4.pdf)
- [YDP395BT001 显示面板](/datasheet/YDP395BT001-V2.pdf)

## 软件开发

- [T-Panel-Lite GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Panel-Lite)
- [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)（v1.3.7）
- [JPEGDEC](https://github.com/bitbank2/JPEGDEC)（v1.2.8）
- [MiniTV](https://github.com/moononournation/MiniTV)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
