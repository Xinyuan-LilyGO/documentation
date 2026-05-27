---
title: LILYGO T-Lora-Dual
show_source: false
tags: ESP32, LR1121, ExpressLRS, LoRa
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-lora-dual" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-lora-series/t-lora-dual/index/image/t-lora-dual-1.jpg', alt: 'T-Lora-Dual 正面图' },
  { src: '/products/t-lora-series/t-lora-dual/index/image/t-lora-dual-2.jpg', alt: 'T-Lora-Dual 实物图' },
  { src: '/products/t-lora-series/t-lora-dual/index/image/t-lora-dual-pin.jpg', alt: 'T-Lora-Dual 引脚图' }
]" />

## 概述

T-Lora-Dual 是一款基于 **ESP32-PICO-D4** 微控制器的双频无线通信模块，集成了两个 **LR1121** 多频段无线芯片，专为 **ExpressLRS** 飞控协议设计。该模块支持 Sub-GHz/1.9GHz/2.4GHz 多频段通信，适用于遥控器高频头、无人机数据链路、物联网远距离通信等场景。

两个 LR1121 模块共享 SPI 总线，独立 CS 信号实现双频段并发通信；AT2401 射频开关控制天线切换，支持双路发射/接收模式。

## 快速开始

### ExpressLRS 编译（PlatformIO）
1. 用 VS Code 打开 `ExpressLRS/src` 目录。
2. 选择设备型号（T-ELRS LR1121 True Diversity）。
3. 点击编译上传（首次编译需下载依赖，可能较慢）。

### T-ELRS 编译

#### PlatformIO
1. 用 VS Code 打开 `T-ELRS` 目录，打开 `platformio.ini`，取消注释要编译的例程。
2. 点击编译上传。

#### Arduino IDE
1. 将 `T-ELRS/lib` 目录下的所有库复制到 Arduino IDE 库目录。
2. 用 Arduino IDE 打开 `examples` 目录下的例程。
3. 选择开发板 **ESP32 PICO-D4**（默认配置），编译上传。

### 烧录指南
1. 烧录前确保 ESP32 进入下载模式（持续按住 BOOT 按钮，再按 RESET 后松开 RESET）。
2. 如遇烧录失败，尝试降低波特率或更换 USB 线缆。
3. 烧录完成后按 RESET 按钮重启设备。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ExpressLRS](https://www.expresslrs.org/quick-start/getting-started/)

## 视频

## 主要特点

- ESP32-PICO-D4：双核，240MHz，Wi-Fi + 蓝牙
- 双 LR1121 多频段无线芯片（Sub-GHz + 1.9GHz/2.4GHz）
- 支持 ExpressLRS 协议（遥控器高频头/无人机数据链路）
- AT2401 射频开关，双路天线切换
- 共享 SPI 总线设计，硬件隔离双模块

## 产品参数

<img src="/products/t-lora-series/t-lora-dual/index/image/t-lora-dual-info.jpg" alt="T-Lora-Dual 硬件配置" width=100%>

| 模块 | 型号 | 主要特性 |
| :-- | :-- | :-- |
| 主控 MCU | ESP32-PICO-D4 | 双核 240MHz，Wi-Fi/蓝牙，34个 GPIO |
| 无线模块 | LR1121 ×2 | Sub-GHz + 1.9GHz/2.4GHz，LoRa/FSK 调制 |
| 状态指示 | LED | GPIO5 控制 |
| 射频开关 | AT2401 | 双路天线切换 |

## 引脚图

<img src="/products/t-lora-series/t-lora-dual/index/image/t-lora-dual-pin.jpg" alt="T-Lora-Dual 引脚图" width=100%>

### 引脚映射

**LR1121-1 模块**

| 信号 | GPIO | 说明 |
| :-- | :--: | :-- |
| MISO | 33 | SPI 数据输入 |
| MOSI | 32 | SPI 数据输出 |
| SCK | 25 | SPI 时钟 |
| CS | 27 | 芯片选择 |
| DIO9 | 37 | 中断信号 |
| RST | 26 | 模块复位 |
| BUSY | 36 | 模块状态输出 |

**LR1121-2 模块**

| 信号 | GPIO | 说明 |
| :-- | :--: | :-- |
| MISO | 33 | SPI 数据输入（共享） |
| MOSI | 32 | SPI 数据输出（共享） |
| SCK | 25 | SPI 时钟（共享） |
| CS | 13 | 芯片选择 |
| DIO9 | 34 | 中断信号 |
| RST | 21 | 模块复位 |
| BUSY | 39 | 模块状态输出 |

**AT2401 射频开关**

| 信号 | GPIO | 功能 |
| :-- | :--: | :-- |
| TX1 | 14 | 发射通道1控制 |
| TX2 | 15 | 发射通道2控制 |
| RX1 | 10 | 接收通道1控制 |
| RX2 | 9 | 接收通道2控制 |
| LED | 5 | 状态指示灯 |

## 尺寸图

## 原理图

* [T-ELRS GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

## 数据手册

* [LR1121 Datasheet](https://www.semtech.com/products/wireless-rf/lora-connect/lr1121)
* [ESP32-PICO-D4 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf)

## 软件开发

* [T-Lora-Dual GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)
* [ExpressLRS 官网](https://www.expresslrs.org/quick-start/getting-started/)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS)

## 常见问题

* **Q. 如何进入下载模式？**  
  A. 持续按住 BOOT 按钮，再按 RESET 按钮后松开 RESET，设备即进入下载模式。

* **Q. 两个 LR1121 如何区分使用？**  
  A. 两个模块共享 SPI 总线（SCK/MOSI/MISO），通过独立的 CS 引脚（GPIO27 和 GPIO13）分别选择。

* **Q. 如何配置 ExpressLRS？**  
  A. 请参考 [ExpressLRS 官方文档](https://www.expresslrs.org/quick-start/getting-started/)，选择 "T-ELRS LR1121 True Diversity" 硬件配置。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-ELRS_V1.0 | 2025-03-15 | 初始版本，支持 ExpressLRS 协议 |
| T-ELRS_V1.1 | 2025-06-20 | 优化 SPI 时序，增加稳定性 |
