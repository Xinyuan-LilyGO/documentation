---
title: T-Embed
show_source: false
tags: ESP32-S3, TFT, 旋转编码器, APA102, 扬声器, MicroSD, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-embed" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-1.jpg', alt: 'T-Embed 正面' },
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-2.jpg', alt: 'T-Embed 背面' },
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-3.jpg', alt: 'T-Embed 尺寸图' },
  { src: '/products/t-embed-series/t-embed/index/image/t-embed-info.jpg', alt: 'T-Embed 规格参数' },
]" />

## 概述

LILYGO T-Embed 是一款多功能 ESP32-S3 开发平台，配备 **1.9 英寸 ST7789V IPS TFT**（320 × 170）、**24 步旋转编码器**、**7 颗 APA102 RGB LED**、立体声扬声器（MAX98357A I2S 功放）、双 MEMS 麦克风和 MicroSD 卡槽。搭载 **ESP32-S3** 双核 LX7 @ 240 MHz，支持 Wi-Fi 和 Bluetooth 5.0，并配有 3.7 V 锂电池接口（含 1300 mAh 电池）。适用于音频播放器、智能遥控器、LVGL HMI 界面和嵌入式 IoT 中枢。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [T-Embed](https://github.com/Xinyuan-LilyGO/T-Embed) | ✓ | | 显示、音频、LED、编码器、SD 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-Embed` 项目文件夹
4. 打开 `platformio.ini`，选择对应示例
5. 点击 **✓** 编译，通过 USB-C 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 您的端口 |
| USB CDC On Boot | Enable |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 模式 | **QIO 80 MHz** |
| Flash 大小 | **16MB (128Mb)** |
| 分区方案 | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| 上传模式 | **UART0/Hardware CDC** |
| 上传速度 | 921600 |
| USB 模式 | **CDC and JTAG** |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi + Bluetooth 5.0
- 1.9 英寸 ST7789V IPS TFT（320 × 170），支持 LVGL UI
- 24 步旋转编码器（带按键）
- 7 颗 APA102 RGB LED（SPI 控制）
- MAX98357A I2S 立体声功放 + 内置扬声器
- 双 MEMS PDM 麦克风
- MicroSD 卡槽
- 16 MB Flash，8 MB PSRAM
- 支持 3.7 V 锂电池（含 1300 mAh 电池）
- 2 × QWIIC（I2C）扩展接口

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32-S3，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n，Bluetooth 5.0 |
| 显示屏 | 1.9 英寸 ST7789V IPS TFT，320 × 170 |
| RGB LED | APA102 × 7 |
| 音频 | MAX98357A I2S 功放，双 MEMS 麦克风，内置扬声器 |
| 编码器 | 24 步旋转编码器（带按键） |
| 存储 | MicroSD 卡槽（SPI） |
| 电池 | 3.7 V 锂电，1300 mAh |
| USB | 1 × USB-C |
| 扩展 | 2 × QWIIC |
| 尺寸 | 95.4 × 36.4 mm |

![T-Embed 规格参数](/products/t-embed-series/t-embed/index/image/t-embed-info.jpg)

## 引脚图

![T-Embed 引脚图](/products/t-embed-series/t-embed/index/image/t-embed-pinout.jpg)

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [T-Embed GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/schematic)

## 数据手册

- [ESP32-S3 数据手册](/datasheet/esp32-s3_datasheet_en.pdf)

## 软件库

- [T-Embed GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Embed)

### 依赖库

- [FastLED](https://github.com/FastLED/FastLED)
- [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
- [LVGL](https://github.com/lvgl/lvgl)
- [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)

## 常见问题

* **Q. T-Embed 能从 MicroSD 播放音频文件吗？**
  A. 可以。结合 ESP32-audioI2S 库和 MAX98357A 功放，T-Embed 支持从 MicroSD 卡流式播放 MP3、AAC 和 WAV 文件。

* **Q. T-Embed 和 T-Embed CC1101 有何区别？**
  A. T-Embed CC1101 额外增加了 Sub-GHz CC1101 射频模块和 PN532 NFC 模块；而基础版 T-Embed 专注于显示、音频和 LED 控制，不包含 Wi-Fi/BT 以外的无线射频功能。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
