---
title: T5
show_source: false
tags: ESP32, E-Paper, 4.7inch, Wi-Fi, Bluetooth, IoT, Ultra-Low-Power
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5/index/image/t5-1.jpg', alt: 'T5 正面' },
  { src: '/products/t5-series/t5/index/image/t5-2.jpg', alt: 'T5 背面' },
]" />

## 概述

LILYGO T5 是一款基于 **ESP32** 双核处理器与 **4.7 英寸 ED047TC1 电子墨水屏**（960 × 540，16 级灰度）的超低功耗开发板。电子墨水屏支持局部刷新，断电后仍可保持画面，非常适合电池供电的仪表盘、智能标签、气象站及物联网设备。板载 **PCF8563 RTC** 支持定时唤醒，TF 卡槽提供本地存储。提供 PH 2.0 JST 和 18650 电池座两种电池接口版本。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 说明 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-EPD47](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47) | ✓ | ✓ | EPD47 显示驱动、天气站、局部刷新演示 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-EPD47` 项目文件夹
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
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enabled** |
| Upload Speed | 921600 |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [MicroPython](https://micropython.org/)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32 双核 Xtensa LX6 @ 240 MHz，支持 Wi-Fi + 蓝牙
- 4.7 英寸 ED047TC1 电子墨水屏，960 × 540 分辨率，16 级灰度
- 支持局部刷新，更新速度更快
- 超低功耗：深度睡眠电流约 170 µA
- PCF8563 RTC 支持定时唤醒
- TF 卡槽提供本地数据存储
- 提供 PH 2.0 JST 或 18650 电池座两种接口
- BQ25896 电池管理 IC
- USB 编程接口

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32（Xtensa 双核 LX6，240 MHz） |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，蓝牙 4.2 |
| 显示屏 | 4.7 英寸 ED047TC1 电子墨水屏，960 × 540，16 级灰度 |
| RTC | PCF8563 |
| 存储 | TF 卡槽 |
| 电池 | PH 2.0 JST 或 18650 电池座 |
| 深度睡眠电流 | 约 170 µA |
| USB | 1 × USB（编程） |

## 引脚图

<!-- GPIO 映射关系表。 -->

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [LilyGo-EPD47 原理图（GitHub）](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47/tree/master/hardware)

## 数据手册

- [ED047TC1 电子墨水屏数据手册（GitHub）](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47/tree/master/docs)

## 软件开发

- [LilyGo-EPD47 GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47)

### 依赖库

- [GxEPD2](https://github.com/ZinggJM/GxEPD2)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
