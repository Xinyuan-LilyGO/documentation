---
title: T-Dongle
show_source: false
tags: ESP32, USB Dongle, TFT, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-esp32-s2-1-14-inch-lcd-board" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle/index/image/t-dongle-1.jpg', alt: 'T-Dongle 正面' },
  { src: '/products/t-dongle-series/t-dongle/index/image/t-dongle-2.jpg', alt: 'T-Dongle 背面' },
  { src: '/products/t-dongle-series/t-dongle/index/image/t-dongle-3.jpg', alt: 'T-Dongle 尺寸图' },
]" />

## 概述

LILYGO T-Dongle 是一款基于 **ESP32** 的紧凑型 USB 无线开发板。搭载双核 Xtensa LX6 处理器，支持 Wi-Fi 802.11 b/g/n 与蓝牙 4.2，将 **0.96 英寸 ST7735 彩色 TFT LCD**（80 × 160）集成于标准 USB Type-A 插头形态之中。板载 TF 卡槽隐藏于 USB 接口外壳内部，另有 WS2812 RGB LED 及扩展 GPIO。适用于便携式 IoT 传感器、USB 小工具、无线数据记录仪及可穿戴项目。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Dongle](https://github.com/Xinyuan-LilyGO/T-Dongle-ESP32S2) | ✓ | | 显示屏、TF 卡、LED 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-Dongle` 项目文件夹
4. 打开 `platformio.ini` 选择示例
5. 点击 **✓** 编译，通过 USB-A 连接后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| 开发板 | **ESP32 Dev Module** |
| 端口 | 您的端口 |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **Default 4MB with spiffs** |
| 上传速率 | 921600 |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32 双核 Xtensa LX6 @ 240 MHz，Wi-Fi 802.11 b/g/n + 蓝牙 4.2
- USB Type-A 插头形态，可直接插入任意 USB 接口
- 0.96 英寸 ST7735 彩色 TFT LCD（80 × 160，65k 色）
- TF 卡槽集成于 USB-A 接口外壳内部
- WS2812 RGB LED
- 4 MB Flash
- 紧凑便携的 IoT 及 USB 小工具开发平台
- 兼容 Arduino IDE、PlatformIO 和 MicroPython

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32（Xtensa 双核 LX6，240 MHz） |
| Flash | 4 MB |
| PSRAM | — |
| 无线 | Wi-Fi 802.11 b/g/n，蓝牙 4.2 |
| 显示屏 | 0.96 英寸 ST7735 TFT，80 × 160 |
| RGB LED | WS2812 × 1 |
| 存储 | TF 卡槽 |
| USB | USB Type-A 插头 |
| 输入电压 | 5 V（USB 供电） |
| 外包装尺寸 | 58 × 18 × 9 mm |

![T-Dongle 规格参数](/products/t-dongle-series/t-dongle/index/image/t-dongle-info.jpg)

## 引脚图

![T-Dongle 引脚图](/products/t-dongle-series/t-dongle/index/image/t-dongle-pinout.jpg)

## 尺寸图

![T-Dongle 尺寸图](/products/t-dongle-series/t-dongle/index/image/t-dongle-3.jpg)

## 原理图

- [LilyGO T-Dongle GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Dongle-ESP32S2)

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

- [LilyGO T-Dongle GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Dongle-ESP32S2)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
