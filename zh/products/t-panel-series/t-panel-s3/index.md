---
title: T-Panel S3
show_source: false
tags: ESP32-S3, ESP32-H2, RS485, CAN, Touch Screen
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-panel-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-1.jpg', alt: 'T-Panel S3 正面' },
  { src: '/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-2.jpg', alt: 'T-Panel S3 背面' },
]" />

## 概述

T-Panel S3 是一款面向智能家居和工业 HMI 场景的紧凑型控制面板，采用双 MCU 架构：ESP32-S3 作为主应用处理器，ESP32-H2 提供 IEEE 802.15.4 / Thread / Zigbee 无线协处理器功能。板载 4.0 英寸 480×480 IPS RGB 触摸屏、MicroSD 卡槽、16 位 I2C IO 扩展芯片（XL9535），并支持可选的 RS485 或 CAN FD 现场总线通信模块，适用于工业 HMI、智能家居面板及嵌入式 IoT 仪表盘等应用场景。

## 快速开始

### 硬件组装

<!-- 焊接排针、安装天线等。 -->

### Arduino

<!-- Arduino 开发环境配置教程链接或说明。 -->

### ESP-IDF

需要 ESP-IDF ≥ v5.5.4。克隆仓库后打开 `project/` 目录下的任意示例：

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Panel.git
cd T-Panel
idf.py set-target esp32s3
idf.py build flash monitor
```

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- 4.0 英寸 480×480 IPS LCD，SPI 初始化 + RGB 并行数据总线（ST7701S 控制器）
- 双 MCU 架构：ESP32-S3（16 MB Flash，8 MB PSRAM）+ ESP32-H2（4 MB Flash）
- Wi-Fi 2.4 GHz + 蓝牙 5 LE（ESP32-S3）；IEEE 802.15.4 + 蓝牙 5 LE（ESP32-H2）
- CST3240 电容触摸（I2C 接口）
- MicroSD 卡槽（SPI 接口）
- XL9535 16 位 IO 扩展芯片（I2C，地址 0x20）
- 可选 RS485（500 kbps）或 CAN FD 现场总线模块
- 输入电压范围：7–24 V
- 支持 Arduino、PlatformIO 和 ESP-IDF 开发环境

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3 |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 协处理器 | ESP32-H2-MINI-1（4 MB Flash） |
| 显示屏 | 4.0 英寸 480×480 IPS，ST7701S，SPI+RGB |
| 触摸 | CST3240，I2C |
| 无线 | Wi-Fi 2.4 GHz、BT 5 LE（S3）；IEEE 802.15.4、BT 5 LE（H2） |
| IO 扩展 | XL9535，16 位，I2C |
| 现场总线 | RS485 或 CAN FD（可选模块） |
| 输入电压 | 7–24 V |
| 重量 | <!-- g --> |
| 外包装尺寸 | <!-- mm --> |

## 引脚图

<img src="/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-pinout.jpg" alt="pin diagram" width=100%>

### 显示屏 (ST7701S)

| ST7701S  | BL     | VSYNC  | HSYNC  | PCLK   | R0     | R1     | R2     | R3     | R4     | G0     | G1     | G2     | G3     | G4     | G5     | B0     | B1     | B2     | B3     | B4     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO14 | GPIO40 | GPIO39 | GPIO41 | GPIO1  | GPIO2  | GPIO42 | GPIO46 | GPIO45 | GPIO6  | GPIO7  | GPIO8  | GPIO9  | GPIO10 | GPIO11 | GPIO3  | GPIO4  | GPIO5  | GPIO12 | GPIO13 |
| XL9535   | RESET  |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |

### 触摸 (CST3240)

| CST3240  | SDA    | SCL    | INT    | RESET  |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO17 | GPIO18 | GPIO21 |        |
| XL9535   |        |        |        | IO4    |

### SD 卡

| SD Card  | CS     | SCK    | MOSI   | MISO   |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO38 | GPIO36 | GPIO35 | GPIO37 |

### IO 扩展 (XL9535)

| XL9535   | SDA    | SCL    |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO17 | GPIO18 |

XL9535 扩展引脚（I2C 地址 0x20）：

| 功能            | XL9535 引脚 |
| :-------------: | :---------: |
| ST7701 SPI CS   | IO17        |
| ST7701 SPI CLK  | IO15        |
| ST7701 SPI MOSI | IO16        |
| LCD RESET       | IO5         |
| Touch RESET     | IO4         |
| RS485 CON       | IO7         |
| ESP32-H2 IO12   | IO1         |
| ESP32-H2 IO4    | IO2         |
| ESP32-H2 IO5    | IO3         |

### RS485 / CAN

| RS485 / CAN | TX     | RX     |
| :---------: | :----: | :----: |
| ESP32-S3    | GPIO16 | GPIO15 |

### ESP32-H2

| ESP32-H2 | TX     | RX     | EN     | BOOT   |
| :------: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO48 | GPIO47 | GPIO34 | GPIO33 |

## 尺寸图

<img src="/products/t-panel-series/t-panel-s3/index/image/t-panel-s3-3.jpg" alt="尺寸图" width=100%>

## 原理图

[T-Panel V1.2 原理图 (PDF)](https://github.com/Xinyuan-LilyGO/T-Panel/blob/master/project/T-Panel_V1.2.pdf)

## 数据手册

- [ST7701S 显示控制器](/datasheet/ST7701S_SPEC_V1.4.pdf)
- [YDP395BT001 显示面板](/datasheet/YDP395BT001-V2.pdf)
- [CST3240 触摸控制器](/datasheet/HYNITRON-CST3240_V1.0.pdf)
- [XL9535 IO 扩展芯片](/datasheet/XL9535.pdf)
- [ESP32-H2-MINI-1](/datasheet/esp32-h2-mini-1_mini-1u_datasheet_en.pdf)

## 软件开发

- [T-Panel GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Panel)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.2 | | 最新硬件版本 |
| V1.0 | | 初版发布 |
