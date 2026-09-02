---
title: LILYGO T-Display S3 AMOLED 1.43/1.75
show_source: false
tags: AMOLED, Display, ESP32-S3
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44848332931253" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-1.jpg', alt: 'T-Display S3 AMOLED 1.75 正面图' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-2.jpg', alt: 'T-Display S3 AMOLED 1.75 实物图' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-zh.jpg', alt: 'T-Display S3 AMOLED 1.75 引脚图' }
]" />

## 概述

T-Display S3 AMOLED 是一款基于 ESP32-S3 微控制器的高集成度开发板，主打多功能与高性能。核心搭载 16MB Flash 和 8MB PSRAM，支持复杂应用运行。支持 1.43 英寸（DO0143FMST02/DO0143FMST10）或 1.75 英寸（H0175Y003AM）AMOLED 显示屏，并支持触摸功能。内置 SY6970 PMU（电源管理单元）和 PCF8563 RTC（实时时钟），优化低功耗设计。扩展方面，提供 STEMMA QT/QWIIC 接口，支持 SD 卡存储，并预留丰富 GPIO 接口，便于外设扩展。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Original Test](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test) | ✓ | | DO0143 出厂测试 |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX) | ✓ | | GFX 图形库示例 |
| [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/FT3168) | ✓ | | 触摸示例 |
| [SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970) | ✓ | | 电源管理示例 |
| [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563) | ✓ | | RTC 示例 |
| [Light Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up) | ✓ | | 轻睡眠唤醒 |
| [Deep Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up) | ✓ | | 深度睡眠唤醒 |
| [SD](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SD) | ✓ | | SD 卡读写 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Display-S3-AMOLED-1.43-1.75 项目代码](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将项目 `libraries` 目录中的所有库复制到 Arduino 库目录。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
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

4. 选择正确的端口，上传程序。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)

## 视频

## 主要特点

- ESP32-S3R8：16 MB Flash，8 MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 1.43 英寸 AMOLED（DO0143FMST02/DO0143FMST10）或 1.75 英寸 AMOLED（H0175Y003AM，280×456）
- FT3168 电容触摸屏，QSPI 接口
- SY6970 电源管理，PCF8563 实时时钟
- TF 卡扩展，QWIIC 接口，RESET + BOOT 按键

> 该芯片在未接电池 5V 供电时输出波形将非常不稳定，需要连接电池使用或者软件关闭电池通道。

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 1.75 英寸 SH8601 AMOLED (280×456) / 1.43 英寸 AMOLED |
| 触摸 | FT3168 电容触摸 (QSPI) |
| 充电芯片 | SY6970 |
| RTC | PCF8563 |
| 存储 | TF 卡 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB OTG (Type-C) |
| IO 接口 | 2 × 2.54mm 2×7 扩展 IO |
| 扩展接口 | 1 × QWIIC + JST-GH 1.25mm + 电池座 |
| 按键 | RESET + BOOT |
| 尺寸 | 45×45×11mm |

## 引脚图

<img src="/products/t-display-series/t-display-s3-amoled-1.75/index/image/t-display-s3-amoled-1.75-zh.jpg" alt="T-Display S3 AMOLED 1.75 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-Display-S3-AMOLED-1.43-1.75 V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/project/T-Display-S3-AMOLED-1.43-1.75_V1.0.pdf)

## 数据手册

* [SH8601 Datasheet](/datasheet/SH8601Z.pdf)
* [FT3168 Datasheet](/datasheet/FT3168.pdf)
* [PCF8563 Datasheet](/datasheet/PCF8563.pdf)
* [SY6970 Datasheet](/datasheet/AN_SY6970.pdf)
* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)

## 软件开发

* [T-Display-S3-AMOLED-1.43-1.75 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75)

### 依赖库

* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [LVGL](https://lvgl.io)
* [JPEGDEC](https://github.com/bitbank2/JPEGDEC)

## 常见问题

* **Q. 1.43 英寸和 1.75 英寸版本有什么区别？**  
  A. 同一主板支持两种屏幕，1.43 英寸使用 DO0143FMST02/DO0143FMST10，1.75 英寸使用 H0175Y003AM，请使用对应的示例程序。

* **Q. 屏幕显示异常怎么办？**  
  A. 确认使用了对应屏幕型号的示例程序，并检查 QSPI 接口连接是否正常。

* **Q. 未接电池时电源不稳定？**  
  A. 这是已知特性，建议连接电池使用，或在软件中关闭电池通道。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-AMOLED-1.43_V1.0 | 2024-05-20 | 初始版本 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2024-11-25 | 新增排线、新增 H0175Y003AM 屏幕适配 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2025-01-13 | 新增 DO0143FMST10 屏幕适配 |
