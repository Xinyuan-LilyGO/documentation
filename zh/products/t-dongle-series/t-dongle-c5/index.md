---
title: T-Dongle-C5
show_source: false
tags: ESP32-C5, USB Dongle, TFT, Wi-Fi 6, 蓝牙, TF卡, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-dongle-c5" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-1.jpg', alt: 'T-Dongle-C5 正面' },
  { src: '/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-2.jpg', alt: 'T-Dongle-C5 背面' },
  { src: '/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-3.jpg', alt: 'T-Dongle-C5 尺寸图' },
]" />

## 概述

LILYGO T-Dongle-C5 是一款基于 **ESP32-C5** 的紧凑型 USB 加密狗开发板，采用标准 USB Type-A 插头外形。搭载 ESP32-C5 单核 RISC-V @ 240 MHz，支持**双频 Wi-Fi 6（2.4 GHz + 5 GHz）**和 **Bluetooth 5.0 LE**，集成 **0.96 英寸 ST7735 IPS 彩色 TFT**（80 × 160）、TF 卡槽、16 MB Flash 和 8 MB PSRAM，一切均置于透明 USB-A 外壳中。支持 Thread 和 Zigbee 3.0，是面向下一代 IoT 应用、无线显示加密狗及 Matter 设备的理想平台。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [T-Dongle-C5](https://github.com/Xinyuan-LilyGO/T-Dongle-C5) | ✓ | | 显示、TF 卡、Wi-Fi 6、BLE 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-Dongle-C5` 项目文件夹
4. 打开 `platformio.ini`，选择对应示例
5. 点击 **✓** 编译，通过 USB-A 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32C5 Dev Module** |
| 端口 | 您的端口 |
| USB CDC On Boot | Enable |
| CPU 频率 | 240 MHz |
| Flash 模式 | **QIO** |
| Flash 大小 | **16MB (128Mb)** |
| 分区方案 | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| 上传速度 | 921600 |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32-C5 单核 RISC-V @ 240 MHz
- 双频 Wi-Fi 6（802.11ax）2.4 GHz + 5 GHz
- Bluetooth 5.0 LE、Thread、Zigbee 3.0
- USB Type-A 插头外形，透明外壳
- 0.96 英寸 ST7735 IPS 彩色 TFT LCD（80 × 160，65k 色）
- TF 卡槽
- 16 MB Flash、8 MB PSRAM
- 支持 Matter 智能家居生态

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32-C5，单核 RISC-V @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 6（2.4 GHz + 5 GHz）、Bluetooth 5.0 LE、Thread、Zigbee 3.0 |
| 显示屏 | 0.96 英寸 ST7735 IPS TFT，80 × 160 |
| 存储 | TF 卡槽 |
| USB | USB Type-A 插头 |
| 尺寸 | 58 × 18 × 9 mm |

![T-Dongle-C5 规格参数](/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-info.jpg)

## 引脚图

![T-Dongle-C5 引脚图](/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-pinout.jpg)

## 尺寸图

![T-Dongle-C5 尺寸图](/products/t-dongle-series/t-dongle-c5/index/image/t-dongle-c5-3.jpg)

## 原理图

- [T-Dongle-C5 GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/T-Dongle-C5/tree/master/hardware)

## 数据手册

- [ESP32-C5 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-c5_datasheet_en.pdf)

## 软件库

- [T-Dongle-C5 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Dongle-C5)

### 依赖库

- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

## 常见问题

* **Q. T-Dongle-C5 支持 Matter 吗？**
  A. 支持。ESP32-C5 支持 Thread 和 Zigbee 3.0，这是 Matter 智能家居生态的关键协议。

* **Q. 与 T-Dongle-S3 有何区别？**
  A. C5 版本采用更新的 ESP32-C5 芯片，支持双频 Wi-Fi 6（含 5 GHz）以及 Thread/Zigbee；而 S3 版本使用 ESP32-S3，仅支持 2.4 GHz Wi-Fi 4 和 Bluetooth 5 LE。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
