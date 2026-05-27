---
title: LILYGO T-Knob
show_source: false
tags: ESP32-C6, BLDC, Knob, MT6701, TMC6300, HMI
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-knob" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-knob/index/image/t-knob-1.jpg', alt: 'T-Knob 正面图' },
  { src: '/products/other/t-knob/index/image/t-knob-2.jpg', alt: 'T-Knob 实物图' },
  { src: '/products/other/t-knob/index/image/t-knob-pin-zh.jpg', alt: 'T-Knob 引脚图' }
]" />

## 概述

LILYGO T-Knob 是一款基于 ESP32-C6-MINI-1U 无线模块的智能旋钮控制器，集成了 BLDC（无刷直流电机）和 MT6701 霍尔传感器，提供高精度旋钮交互体验。通过 TMC6300 电机驱动芯片实现扭矩控制与反馈，支持 USB Type-C 接口供电及通信，可广泛应用于智能家居（音量调节、灯光控制）、工业设备人机界面等场景，适合开发高响应、低功耗的触觉交互解决方案。

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Knob)。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32C6 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 160MHz |
| Flash Mode | QIO |
| Flash Size | 4MB (32Mb) |
| Partition Scheme | Huge APP (3MB No OTA/1MB SPIFFS) |
| Core Debug Level | None |
| USB DFU On Boot | Disabled |

4. 选择正确的端口，点击右上角"<kbd>→</kbd>"进行烧录。

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## 视频

## 主要特点

- ESP32-C6-MINI-1U：4 MB Flash，Wi-Fi 6，蓝牙 5 LE，IEEE 802.15.4
- BLDC 无刷直流电机 + MT6701 霍尔传感器，高精度旋钮
- TMC6300 电机驱动芯片，扭矩控制与反馈
- 4 × 可编程 LED，1 × 蜂鸣器，QWIIC 扩展接口
- USB Type-C 接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-C6-MINI-1U |
| Flash | 4MB |
| 无线 | Wi-Fi 6, Bluetooth 5 (LE), IEEE 802.15.4 |
| 电机 | BLDC（TMC6300 驱动） |
| 霍尔传感器 | MT6701 |
| LED | 4 × 可编程 LED |
| 蜂鸣器 | 1 × |
| USB | USB Type-C |
| 扩展接口 | 1 × QWIIC |
| 按键 | RST + BOOT |
| 电源 | 5V/500mA |
| 定位孔 | 1 × 2mm |
| 尺寸 | 32 × 32 × 34mm |

## 引脚图

<img src="/products/other/t-knob/index/image/t-knob-pin-zh.jpg" alt="T-Knob 引脚图" width=100%>

<img src="/products/other/t-knob/index/image/t-knob-info-zh.jpg" alt="T-Knob 概述图" width=100%>

## 尺寸图

## 原理图

* [T-Knob_V1.0](https://github.com/Xinyuan-LilyGO/T-Knob/blob/master/hardware/T-MotorDriver-C6%20V1.0.pdf)

## 数据手册

* [TMC6300](https://github.com/Xinyuan-LilyGO/T-Knob/blob/master/hardware/TMC6300_datasheet_rev1.08.pdf)
* [MT6701](https://github.com/Xinyuan-LilyGO/T-Knob/blob/master/hardware/MT6701_Rev.1.0.pdf)

## 软件开发

* [T-Knob GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Knob)

## 常见问题

* **Q. T-Knob 支持哪些旋钮操作模式？**  
  A. 支持连续旋转、定点控制和扭矩反馈等模式，具体实现请参考 GitHub 仓库的示例代码。

* **Q. 为什么我的板子一直烧录失败？**  
  A. 请按住 BOOT 按键重新下载程序。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-Knob_V1.0 | — | 初始版本 |
