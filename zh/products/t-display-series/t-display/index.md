---
title: T-Display
show_source: false
tags: ESP32, ST7789V, TFT, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display/index/image/t-display-1.jpg', alt: 'T-Display 正面' },
]" />

## 概述

LILYGO T-Display 是一款集成 **1.14 英寸 ST7789V IPS TFT LCD**（240 × 135 像素）的紧凑型 ESP32 开发板。基于 ESP32 双核 LX6 处理器（最高 240 MHz），集成 **Wi-Fi 802.11 b/g/n** 和 **Bluetooth 4.2 + BLE** 无线连接功能。开发板配备两个可编程按键、电池充电电路、USB-C 编程接口，并提供完整的 GPIO 引脚引出。其小巧的外形和集成显示屏使其广泛应用于可穿戴设备、环境监测和 IoT 仪表盘。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display) | ✓ | | 显示屏演示、TFT_eSPI 示例、出厂测试 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `TTGO-T-Display` 项目文件夹
4. 打开 `platformio.ini` 并选择您的示例
5. 点击 **✓** 编译，通过 USB-C 连接后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中进行配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | 您的端口 |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Upload Speed | 921600 |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32 双核 LX6 @ 240 MHz，Wi-Fi 802.11 b/g/n + Bluetooth 4.2 BLE
- 1.14 英寸 ST7789V IPS TFT LCD，240 × 135 像素，260 PPI
- 可编程背光（GPIO4）
- 2 × 可编程按键
- 电池充电电路（支持 1S LiPo）
- USB-C 供电及编程接口
- 紧凑外形，完整 GPIO 引出

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-D0WDQ6，双核 LX6 @ 240 MHz |
| Flash | 4 MB（QSPI）/ 可选 16 MB 版本 |
| PSRAM | — |
| 无线 | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | Bluetooth 4.2 + BLE |
| 显示屏 | 1.14 英寸 ST7789V IPS TFT，240 × 135 像素 |
| 显示接口 | 4 线 SPI |
| 按键 | 2 × 可编程按键 |
| 电池 | JST-GH 1.25mm 接口，支持 1S LiPo |
| USB | 1 × USB-C |
| 工作电压 | 2.7 V – 4.2 V |

![T-Display 规格参数](/products/t-display-series/t-display/index/image/t-display-info.jpg)

## 引脚图

![T-Display 引脚图](/products/t-display-series/t-display/index/image/t-display-pinout.jpg)

### 显示屏 (ST7789V)

| ST7789V  | MOSI   | SCK    | CS     | DC     | RST    | BL     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32    | GPIO19 | GPIO18 | GPIO5  | GPIO16 | GPIO23 | GPIO4  |

### 按键

| 功能 | GPIO   |
| :-------: | :----: |
| 按键 1  | GPIO0  |
| 按键 2  | GPIO35 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [T-Display V1.0 原理图](https://github.com/Xinyuan-LilyGO/TTGO-T-Display/blob/master/schematic/ESP32-TFT(6-26).pdf)

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

* [TTGO-T-Display GitHub 仓库](https://github.com/Xinyuan-LilyGO/TTGO-T-Display)

### 依赖库

* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
