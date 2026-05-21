---
title: LILYGO T-Deck Plus
show_source: false
tags: ESP32-S3, LoRa, LCD, GPS, Keyboard, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-deck-plus" />

<ImageGallery :columns="2" :images="[
  { src: '/products/t-deck-series/t-deck-plus/assets/t-deck-plus1.jpg', alt: 'T-Deck Plus 正面图' },
  { src: '/products/t-deck-series/t-deck-plus/assets/t-deck-plus2.jpg', alt: 'T-Deck Plus 实物图' }
]" />

## 概述

LILYGO T-Deck Plus 是基于 **ESP32-S3FN16R8**（16 MB Flash，8 MB PSRAM）的功能丰富便携式开发套件，集成 **ST7789 320×240 LCD**、**SX1262 LoRa**（433~915 MHz，可选）、**MIA-M10Q GPS**、**ES7210 音频解码器**、麦克风、扬声器、TF 卡、轨迹球、机械键盘、GT911 触摸屏和 PCA9535PW I/O 扩展器，支持 **2000 mAh 电池**，适用于物联网终端、远程控制、音频交互和户外移动开发。

> **注意：** Grove 接口引脚已分配给 GPS 模块，不可复用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :-----: | :----------------: | :---: |
| [T-Deck](https://github.com/Xinyuan-LilyGO/T-Deck) | ✓ | LoRa、GPS、LCD、键盘、音频综合示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Deck 项目代码](https://github.com/Xinyuan-LilyGO/T-Deck)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

3. 选择正确的端口，点击右上角"→"进行烧录。

### 开发平台

1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [MicroPython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3FN16R8 双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- SX1262 LoRa（433~915 MHz，可选）、MIA-M10Q GPS
- ST7789 320×240 LCD、GT911 触摸屏、PCA9535PW I/O 扩展
- ES7210 音频解码器、麦克风、扬声器
- 轨迹球 + 机械键盘（黑色/白色）
- 2000 mAh 电池，TF 卡槽

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN16R8 @ 双核 LX7，240 MHz |
| Flash | 16MB |
| PSRAM | 8MB |
| 无线 | 2.4 GHz Wi-Fi 802.11 b/g/n + 蓝牙 5.0 LE |
| LoRa | SX1262，433~915 MHz（可选） |
| GPS | MIA-M10Q |
| 屏幕 | ST7789 LCD，320×240 |
| 触摸 | GT911 |
| 音频 | ES7210 编解码器 |
| I/O 扩展 | PCA9535PW (0x20) |
| 电池 | 2000 mAh |
| 存储 | TF 卡 |
| USB | 1 × TYPE-C |
| 安装孔 | 2 × M2 |
| 尺寸 | 115×72×20mm |

## 引脚图

<img src="/products/t-deck-series/t-deck-plus/assets/t-deck-plus-zh.jpg" alt="T-Deck Plus 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-Deck Plus 原理图](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf)

## 数据手册

* [T-Deck ANT 868-915 MHz](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20868-915MHZ.pdf.pdf)
* [T-Deck ANT 433 MHz](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20433MHZ.pdf)

## 软件开发

* [T-Deck GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Deck)

### 依赖库

* [AceButton](https://github.com/bxparks/AceButton)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TouchLib](https://github.com/mmMicky/TouchLib)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)

## 常见问题

* **Q. 为什么板子一直烧录失败？**  
  A. 请按住 BOOT 按键重新下载程序。

* **Q. Grove 接口可以用吗？**  
  A. T-Deck Plus 的 Grove 接口引脚已分配给 GPS 模块，不能再用于其他外设。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-Deck Plus V1.0 | — | 初始版本 |
