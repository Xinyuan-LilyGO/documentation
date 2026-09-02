---
title: T-Display-S3-AMOLED
show_source: false
tags: ESP32-S3, AMOLED, RM67162, Touch, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/en-us/products/t-display-s3-amoled" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-amoled/index/image/t-display-s3-amoled-1.jpg', alt: 'T-Display-S3-AMOLED 正面' },
  { src: '/products/t-display-series/t-display-s3-amoled/index/image/t-display-s3-amoled-2.jpg', alt: 'T-Display-S3-AMOLED 背面' },
  { src: '/products/t-display-series/t-display-s3-amoled/index/image/t-display-s3-amoled-3.jpg', alt: 'T-Display-S3-AMOLED 尺寸图' },
]" />

## 概述

LILYGO T-Display-S3-AMOLED 是 T-Display-S3 的升级版本，搭载 **1.91 英寸 AMOLED 显示屏**，分辨率为 536 × 240 像素，由 **RM67162** 控制器通过 QSPI 接口驱动。基于 **ESP32-S3** 双核 LX7 处理器（240 MHz），集成 **Wi-Fi 802.11 b/g/n** 和 **Bluetooth 5.0 LE** 无线连接。板载 16 MB Flash 和 8 MB PSRAM，并提供比标准 T-Display-S3 更多的可配置 GPIO 接口。可选电容触摸版本。适用于智能家居仪表盘、可穿戴 UI 及无线传感器显示等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Display-S3-AMOLED](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED) | ✓ | | AMOLED 显示屏、LVGL UI、触摸示例 |
| [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) | ✓ | | 统一 AMOLED 库示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-Display-S3-AMOLED` 项目文件夹
4. 打开 `platformio.ini` 并选择您的示例
5. 点击 **✓** 编译，通过 USB-C 连接后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中进行配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | 您的端口 |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi 802.11 b/g/n + Bluetooth 5.0 LE
- 1.91 英寸 AMOLED 显示屏，536 × 240 像素，RM67162 QSPI 驱动
- 可选电容触摸版本
- 16 MB Flash，8 MB OPI PSRAM
- 比 T-Display-S3 提供更多可配置 GPIO 接口
- 2 × 可编程按键
- USB-C 供电及编程接口
- 支持 LiPo 电池充电

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3R8，双核 LX7 @ 240 MHz |
| Flash | 16 MB（QSPI） |
| PSRAM | 8 MB（OPI） |
| 无线 | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | Bluetooth 5.0 LE |
| 显示屏 | 1.91 英寸 AMOLED，536 × 240 像素（RM67162） |
| 显示接口 | QSPI |
| 触摸 | 电容触摸（仅触摸版本） |
| 按键 | 2 × 可编程按键 |
| USB | 1 × USB-C |

## 功耗参考

| 工作条件 | 电流 | 唤醒方式 |
| :-- | :-- | :-- |
| CPU 240 MHz、Wi-Fi 开启 | 90-230+ mA | - |
| 睡眠 | 约 230 µA | 外部 GPIO0 |

> 数据来自[官方 LilyGo AMOLED Series 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series#current-consumption)。实际电流会随屏幕亮度、无线活动、已启用外设及固件变化。

## 引脚图

<!-- GPIO 映射关系表。 -->

### 显示屏 (RM67162)

| RM67162  | D0     | D1     | D2     | D3     | CS     | SCK    | RESET  | TE     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO47 | GPIO41 | GPIO0  | GPIO42 | GPIO6  | GPIO5  | GPIO17 | GPIO18 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [T-Display-S3-AMOLED 原理图（PDF）](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED/blob/main/schematic/T-DISPLAY-S3-AMOLED.pdf)

## 数据手册

* [RM67162 数据手册](/datasheet/RM67162%20DataSheet_V0.0.pdf)
* [ESP32-S3 数据手册](/datasheet/esp32-s3_datasheet_en-b8ebdddf.pdf)

## 软件开发

* [T-Display-S3-AMOLED GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED)
* [LilyGo-AMOLED-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)

### 依赖库

* [LVGL](https://github.com/lvgl/lvgl)
* [Arduino GFX](https://github.com/moononournation/Arduino_GFX)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
