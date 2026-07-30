---
title: T-Display-Keyboard
show_source: false
tags: ESP32, ST7789V, TFT, Keyboard, Wi-Fi, Bluetooth, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-keyboard" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-keyboard/index/image/t-display-keyboard-1.jpg', alt: 'T-Display-Keyboard 正面' },
  { src: '/products/t-display-series/t-display-keyboard/index/image/t-display-keyboard-2.jpg', alt: 'T-Display-Keyboard 背面' },
  { src: '/products/t-display-series/t-display-keyboard/index/image/t-display-keyboard-3.jpg', alt: 'T-Display-Keyboard 尺寸图' },
]" />

## 概述

LILYGO T-Display-Keyboard 是一款手持式 ESP32 开发套件，将 **T-Display** 主板（1.14 英寸 ST7789V IPS TFT，240 × 135 像素）与紧凑型实体键盘外壳相结合。基于 ESP32 双核 LX6 处理器（最高 240 MHz），提供 **Wi-Fi 802.11 b/g/n** 和 **Bluetooth 4.2 + BLE** 无线连接。键盘外壳提供完整的 QWERTY 键盘布局以及电池仓，适合便携式独立应用场景。非常适合手持控制器、消息终端、远程界面以及嵌入式教学项目。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display) | ✓ | | 显示屏演示、示例 |

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
| Flash Size | **4MB (32Mb)** 或 **16MB (128Mb)** |
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
- 1.14 英寸 ST7789V IPS TFT LCD，240 × 135 像素
- 集成键盘外壳，支持手持使用
- 可选 2800 mAh 锂电池支持
- USB-C 供电及编程接口
- 提供 4 MB 和 16 MB Flash 两种版本
- 模块化接口：UART、SPI、I2C、I2S、PWM、ADC、DAC

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-D0WDQ6，双核 LX6 @ 240 MHz |
| Flash | 4 MB / 16 MB（QSPI） |
| PSRAM | — |
| SRAM | 520 KB |
| 无线 | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | Bluetooth 4.2 + BLE |
| 显示屏 | 1.14 英寸 ST7789V IPS TFT，240 × 135 像素 |
| 显示接口 | 4 线 SPI |
| 电池 | 可选 805050 2800 mAh LiPo |
| USB | 1 × USB-C |
| 工作电压 | 2.7 V – 4.2 V |

## 引脚图

<!-- GPIO 映射关系表。 -->

### 显示屏 (ST7789V)

| ST7789V  | MOSI   | SCK    | CS     | DC     | RST    | BL     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32    | GPIO19 | GPIO18 | GPIO5  | GPIO16 | GPIO23 | GPIO4  |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [T-Display V1.0 原理图](https://github.com/Xinyuan-LilyGO/TTGO-T-Display/blob/master/schematic/ESP32-TFT(6-26).pdf)

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

* [TTGO-T-Display GitHub 仓库](https://github.com/Xinyuan-LilyGO/TTGO-T-Display)

### 依赖库


## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
