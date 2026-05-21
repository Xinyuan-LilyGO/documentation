---
title: LILYGO T-Display S3 AMOLED Plus
show_source: false
tags: ESP32-S3, AMOLED, LoRa, Power Management
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3-amoled-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-amoled-plus/assets/t-display-s3-amoled-plus-1.jpg', alt: 'T-Display S3 AMOLED Plus 正面图' },
  { src: '/products/t-display-series/t-display-s3-amoled-plus/assets/t-display-s3-amoled-plus-2.jpg', alt: 'T-Display S3 AMOLED Plus 实物图' },
  { src: '/products/t-display-series/t-display-s3-amoled-plus/assets/t-display-s3-amoled-plus-3.jpg', alt: 'T-Display S3 AMOLED Plus 引脚图' }
]" />

## 概述

T-Display S3 AMOLED Plus 是一款基于 ESP32-S3 微控制器的高集成度开发板，主打多功能与高性能。其核心搭载 16MB Flash 和 8MB PSRAM，支持复杂应用运行。配备 1.91 英寸 AMOLED 显示屏，并支持触摸功能。内置 AXPM65611 PMU（电源管理单元）和 PCF85063 RTC（实时时钟），结合 BQ25896 充电管理，优化了低功耗设计。扩展方面，提供 STEMMA QT/QWIIC 双接口，兼容快速传感器连接；支持 SD 卡存储，并板载 LoRa 模块。适用于智能穿戴、物联网终端等需要显示交互与多传感器集成的场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/examples/Factory/Factory.ino) | ✓ | | 出厂示例 |
| [更多示例](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) | ✓ | | 参考 GitHub 仓库 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [LilyGo-AMOLED-Series 项目代码](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)，在 VS Code 中打开。
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
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3R8：16 MB Flash，8 MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 1.91 英寸 RM67162 IPS AMOLED，电容触摸（I2C）
- LoRa SX1276（868/915MHz）
- AXPM65611 电源管理 + BQ25896 充电管理，PCF85063 RTC
- TF 卡扩展，STEMMA QT/QWIIC 接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 1.91 英寸 RM67162 IPS AMOLED |
| 触摸 | 电容触摸屏 (I2C) |
| LoRa | SX1276（868/915MHz） |
| 存储 | TF 卡 |
| RTC | PCF85063ATL/1 |
| 电源管理 | AXPM65611 + BQ25896 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB OTG (Type-C) |
| IO 接口 | 2×13 双排扩展接口 |
| 扩展接口 | FPC 天线 + TF 卡 + STEMMA QT/QWIIC + JST-GH 1.25mm |
| 按键 | RESET + BOOT |
| 固定孔 | 4 × 2mm 定位孔 |
| 尺寸 | 60×32×12mm |

## 引脚图

<img src="/products/t-display-series/t-display-s3-amoled-plus/assets/t-display-s3-amoled-plus-3.jpg" alt="T-Display S3 AMOLED Plus 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-Display S3 AMOLED Plus 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/schematic/T-Display-S3-AMOLED-Plus.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [LilyGo-AMOLED-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)

### 依赖库

* [lvgl 8.3.9](https://github.com/lvgl/lvgl)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [AceButton](https://github.com/bxparks/AceButton)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键重新下载程序。

* **Q. LoRa 模块支持哪些频段？**  
  A. 支持 868MHz 和 915MHz 等多个频段，请根据所在地区法规选择合适的频段。

* **Q. 如何使用电源管理功能？**  
  A. 通过 XPowersLib 库可以控制 AXPM65611 和 BQ25896，实现低功耗运行和电池管理。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-AMOLED-Plus_V1.0 | — | 初始版本 |
