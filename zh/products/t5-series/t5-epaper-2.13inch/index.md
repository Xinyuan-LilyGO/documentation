---
title: T5 ePaper 2.13inch
show_source: false
tags: ESP32, E-Paper, 2.13inch, SSD1680, Wi-Fi, Bluetooth, Ultra-Low-Power, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-1.jpg', alt: 'T5 ePaper 2.13inch 正面' },
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-2.jpg', alt: 'T5 ePaper 2.13inch 背面' },
  { src: '/products/t5-series/t5-epaper-2.13inch/index/image/t5-epaper-2.13inch-3.jpg', alt: 'T5 ePaper 2.13inch 尺寸图' },
]" />

## 概述

LILYGO T5 ePaper 2.13inch 是一款小巧的超低功耗开发板，搭载 **ESP32** 双核处理器与 **2.13 英寸 SSD1680 电子墨水屏**（212 × 104 像素，黑白，2 级灰度）。电子墨水屏仅在刷新时消耗电能，断电后可无限期保持画面，非常适合电池供电的电子名牌、电子价签、物联网传感器和家居自动化显示。板载 Wi-Fi 和蓝牙连接、USB-UART（CP2102）编程接口以及 TF 卡槽。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 说明 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-T5-Epaper-Series](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series) | ✓ | | 电子墨水屏显示演示、局部刷新、GxEPD2 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-T5-Epaper-Series` 项目文件夹
4. 打开 `platformio.ini` 并选择示例
5. 点击 **✓** 编译，连接 USB 后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32 Dev Module** |
| 端口 | 你的端口 |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Disabled** |
| Upload Speed | 921600 |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32 双核 Xtensa LX6 @ 240 MHz，支持 Wi-Fi + 蓝牙
- 2.13 英寸 SSD1680 电子墨水屏，212 × 104 像素，黑白显示
- 断电后可无限期保持画面（双稳态 / 零待机功耗）
- 全局刷新时间约 8 秒
- 超低功耗深度睡眠模式
- CP2102 USB-UART 编程接口
- TF 卡槽提供本地存储
- 工作电压 3.3 V
- 工作温度：-20 °C 至 60 °C

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32（Xtensa 双核 LX6，240 MHz） |
| Flash | 4 MB |
| PSRAM | — |
| 无线 | Wi-Fi 802.11 b/g/n，蓝牙 4.2 |
| 显示屏 | 2.13 英寸 SSD1680 电子墨水屏，212 × 104，黑白 |
| 显示接口 | SPI |
| 存储 | TF 卡槽 |
| USB | CP2102 USB-UART |
| 工作电压 | 3.3 V |
| 工作温度 | -20 °C 至 60 °C |

## 引脚图

<!-- GPIO 映射关系表。 -->

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [T5 2.13 英寸原理图 PDF（GitHub）](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series/blob/master/schematic/T5_2.13.pdf)

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

- [LilyGo-T5-Epaper-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series)

### 依赖库

- [GxEPD2](https://github.com/ZinggJM/GxEPD2)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V2.3.1 | | 更新 PCB 布局 |
| V2.3 | | 初版发布 |
