---
title: T-Encoder
show_source: false
tags: ESP32-S3, 圆形显示屏, GC9A01, 旋转编码器, Wi-Fi, 蓝牙, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-encoder" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-encoder-series/t-encoder/index/image/t-encoder-1.jpg', alt: 'T-Encoder 正面' },
  { src: '/products/t-encoder-series/t-encoder/index/image/t-encoder-2.jpg', alt: 'T-Encoder 背面' },
]" />

## 概述

LILYGO T-Encoder 是一款紧凑型 ESP32-S3 开发板，将 **1.28 英寸 GC9A01 圆形 TFT 显示屏**（240 × 240）与集成**旋转编码器**和按键相结合。搭载 **ESP32-S3** 双核 LX7 @ 240 MHz，支持 Wi-Fi 802.11 b/g/n 和 Bluetooth 5.0 LE，提供优雅的旋钮式交互界面。适用于音量控制、智能调光器、菜单导航和可穿戴风格 HMI 应用。支持 Arduino IDE、PlatformIO 和 ESP-IDF 开发。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [T-Encoder](https://github.com/Xinyuan-LilyGO/T-Encoder) | ✓ | | 圆形显示、编码器、BLE 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-Encoder` 项目文件夹
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
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **Disabled** |
| 上传模式 | **UART0/Hardware CDC** |
| 上传速度 | 921600 |
| USB 模式 | **CDC and JTAG** |

4. 点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi + Bluetooth 5.0
- 1.28 英寸 GC9A01 圆形 TFT 显示屏（240 × 240，SPI）
- 集成旋转编码器（带按键）
- 紧凑旋钮式外形设计
- USB-C 供电和编程
- QWIIC 接口支持 I2C 扩展

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32-S3，双核 LX7 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | — |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n，Bluetooth 5.0 LE |
| 显示屏 | 1.28 英寸 GC9A01 圆形 TFT，240 × 240 |
| 交互 | 旋转编码器（带按键） |
| USB | 1 × USB-C |
| 扩展 | 1 × QWIIC |

## 引脚图

### 显示屏（GC9A01）

| 信号 | GPIO |
| :--: | :--: |
| SPI MOSI | 13 |
| SPI SCK  | 12 |
| CS       | 10 |
| DC       | 11 |
| RST      | 14 |
| BL       | 9  |

### 旋转编码器

| 信号 | GPIO |
| :--: | :--: |
| ENC A  | 4 |
| ENC B  | 5 |
| 按键   | 0 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [T-Encoder GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/T-Encoder/tree/master/hardware)

## 数据手册

- [ESP32-S3 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
- [GC9A01 数据手册](https://www.buydisplay.com/download/ic/GC9A01A.pdf)

## 软件库

- [T-Encoder GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Encoder)

### 依赖库

- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
- [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
- [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
- [LVGL](https://github.com/lvgl/lvgl)

## 常见问题

* **Q. 如何读取旋转编码器的方向？**
  A. 使用 RotaryEncoder 库，监控 GPIO4（A 相）和 GPIO5（B 相），库会自动处理去抖动和方向检测。

* **Q. 圆形 GC9A01 显示屏可以使用 LVGL 吗？**
  A. 可以。LVGL 兼容 GC9A01 驱动，将显示分辨率设置为 240 × 240，并在 TFT_eSPI 的 `User_Setup.h` 中设置 `GC9A01_DRIVER` 标志即可。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
