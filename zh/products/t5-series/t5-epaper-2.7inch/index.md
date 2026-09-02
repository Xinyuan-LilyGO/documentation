---
title: T5 E-Paper 2.7 inch
show_source: false
tags: ESP32, 电子纸, 2.7寸, ePaper, Wi-Fi, 蓝牙, IoT, 低功耗
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t5s-2-7inch-e-paper" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5-epaper-2.7inch/index/image/t5-epaper-2.7inch-1.jpg', alt: 'T5 E-Paper 2.7 inch 正面' },
]" />

## 概述

LILYGO T5 E-Paper 2.7 inch 是一款基于 ESP32 的电子纸开发板，搭载 **2.7 英寸墨水屏**（264 × 176），待机功耗极低。主控为 **ESP32** 双核 Xtensa LX6 @ 240 MHz，支持 Wi-Fi 和 Bluetooth 4.2，板载 **CP2102 USB 转串口**芯片、**MAX98357A I2S 功放**及扬声器接口、MicroSD 卡槽和电池接口。适用于 IoT 显示节点、电子货架标签、气象站等需要阳光下可读、超低功耗显示的应用场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-T5-Epaper-Series](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series) | ✓ | | 电子纸显示、深度睡眠、音频、SD 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-T5-Epaper-Series` 项目文件夹
4. 打开 `platformio.ini`，取消注释 `T5_V27` 环境
5. 点击 **✓** 编译，通过 Micro USB 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32 Dev Module** |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **Enabled** |
| 上传速度 | 921600 |

4. 点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32 双核 Xtensa LX6 @ 240 MHz，Wi-Fi + Bluetooth 4.2
- 2.7 英寸墨水屏（264 × 176，黑白双色）
- 超低功耗：刷新完成后无需供电即可保持画面
- CP2102 USB 转串口芯片，支持通过 Micro USB 编程
- MAX98357A I2S 功放及扬声器接口
- MicroSD 卡槽
- 电池接口，支持便携使用
- 支持深度睡眠，延长电池续航

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32，双核 Xtensa LX6 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 4.2 |
| 显示屏 | 2.7 英寸墨水屏（264 × 176，黑白） |
| USB | Micro USB（CP2102） |
| 音频 | MAX98357A I2S 功放 |
| 存储 | MicroSD 卡槽 |
| 电池 | JST 接口，支持锂离子/锂聚合物电池 |

## 引脚图

### 电子纸显示屏（SPI）

| 信号 | GPIO |
| :--: | :--: |
| MOSI | 23 |
| MISO | 19 |
| CLK  | 18 |
| CS   | 5  |
| DC   | 17 |
| RST  | 16 |
| BUSY | 4  |

### MicroSD 卡（SPI）

| 信号 | GPIO |
| :--: | :--: |
| MOSI | 23 |
| MISO | 19 |
| CLK  | 18 |
| CS   | 13 |

### I2S 音频（MAX98357A）

| 信号 | GPIO |
| :--: | :--: |
| BCLK | 26 |
| LRC  | 25 |
| DIN  | 22 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [LilyGo-T5-Epaper-Series GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series/tree/master/schematic)

## 数据手册

- [ESP32 数据手册](/datasheet/esp32_datasheet_en.pdf)
- [CP2102 数据手册](/datasheet/CP2102-9.pdf)

## 软件库

- [LilyGo-T5-Epaper-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series)

### 依赖库

- [GxEPD](https://github.com/ZinggJM/GxEPD)
- [GxEPD2](https://github.com/ZinggJM/GxEPD2)
- [Adafruit GFX](https://github.com/adafruit/Adafruit-GFX-Library)
- [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)

## 常见问题

* **Q. 电子纸屏幕刷新需要多长时间？**
  A. 2.7 英寸电子纸完整刷新通常需要 2–4 秒。局部刷新（如支持）速度更快，但可能出现残影。

* **Q. 断电后屏幕能保留图像吗？**
  A. 可以。电子纸显示屏具有双稳态特性，无需任何供电即可无限期保留最后显示的图像，非常适合深度睡眠 IoT 应用。

* **Q. 可以在刷新间隔使用深度睡眠吗？**
  A. 可以。ESP32 深度睡眠电流处于微安级别，使用 `esp_deep_sleep_start()` 并通过定时器或 GPIO 中断唤醒，可实现极长的电池续航。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V2.7 | | 初始版本，搭载 2.7 英寸电子纸 |
