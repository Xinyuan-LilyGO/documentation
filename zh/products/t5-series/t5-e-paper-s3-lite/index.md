---
title: LILYGO T5 E-Paper S3 Lite
show_source: false
tags: E-Paper, ESP32-S3, Touch, E-Ink, Lite
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5-e-paper-s3-lite/index/image/t5-e-paper-lite-1.jpg', alt: 'T5 E-Paper S3 Lite 正面图' },
  { src: '/products/t5-series/t5-e-paper-s3-lite/index/image/t5-e-paper-lite-2.jpg', alt: 'T5 E-Paper S3 Lite 实物图' },
  { src: '/products/t5-series/t5-e-paper-s3-lite/index/image/t5-4.7-s3-pro-pin.jpg', alt: 'T5 E-Paper S3 Lite 引脚图' }
]" />

## 概述

LILYGO T5-4.7-S3 系列是基于 ESP32-S3-WROOM-1-N16R8（16 MB Flash，8 MB PSRAM）的 4.7 英寸电子墨水屏开发方案，分为 **Pro 版**（含 GPS/LoRa）和 **Lite 版** 两个型号。

**Lite 版**专为低成本墨水屏应用优化，移除了 GPS 与 LoRa 模块，屏幕玻璃采用 **AG 防眩光工艺**，背光改为**暖色调**，保留 ESP32-S3 核心性能、电子墨水屏（540×960）、GT911 两点触控、PCF8563 RTC 等核心功能，适用于电子书、气象站等纯显示类应用。

## 版本差异

![Pro vs Lite 对比图](/products/t5-series/t5-e-paper-s3-lite/index/image/对比图.jpg)

| 功能 | T5-4.7-S3 Pro | T5-4.7-S3 Lite |
| :--: | :---: | :---: |
| 核心芯片 | ESP32-S3-WROOM-1-N16R8 | ESP32-S3-WROOM-1-N16R8 |
| Flash/PSRAM | 16MB/8MB | 16MB/8MB |
| 电子墨水屏 | 4.7英寸 EDO47TC1 (540×960) | 4.7英寸 EDO47TC1 (540×960) |
| 触控功能 | GT911 两点电容触控 | GT911 两点电容触控 |
| RTC 时钟 | PCF8563 | PCF8563 |
| GPS/LoRa 模块 | ✅ 支持 | ❌ 移除 |
| 玻璃工艺 | 普通玻璃 | AG 防眩光玻璃 |
| 背光 | 标准白光 | 暖色调背光 |
| 适用场景 | 全功能物联网终端 | 电子书/相册/气象站等纯显示应用 |

## 快速开始

### 示例支持

```txt
examples/
├── button              # 按键示例
├── demo                # 综合测试示例（含睡眠电流测试）
├── drawExample         # 绘制线条和圆形示例
├── drawImages          # 显示图片示例
├── grayscale_test      # 灰度测试
├── screen_repair       # 全屏刷新示例
├── spi_driver          # 作为 SPI 从设备
├── touch               # 触摸示例
└── wifi_sync           # Wi-Fi 综合示例
```

### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2. 打开VisualStudioCode软件侧边栏的"扩展"，搜索"PlatformIO IDE"扩展并下载。
3. 从 GitHub 下载 [LilyGo-EPD47](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47) 项目代码。
4. 扩展安装完成后，打开侧边栏的资源管理器，点击"打开文件夹"，找到刚刚下载的项目代码，点击"添加"。
5. 打开项目文件中的"platformio.ini"，在"[platformio]"目录下取消注释选择你需要烧录的示例程序，然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。
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
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，点击右上角"<kbd>→</kbd>"进行烧录。

### 开发平台
1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3-WROOM-1-N16R8：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- 4.7 英寸 EDO47TC1 电子墨水屏（540×960），AG 防眩光玻璃，暖色调背光
- GT911 两点电容触控，PCF8563 实时时钟
- 兼容树莓派 40-PIN GPIO 扩展接口
- TF 卡槽，Type-C USB，JST-PH 2.0mm 电池接口
- 2.5D 弧面设计，6 × 3.8mm 定位孔

## 产品参数

| 组件 | Pro 版 | Lite 版 |
| :--: | :--: | :--: |
| MCU | ESP32-S3-WROOM-1-N16R8 | ESP32-S3-WROOM-1-N16R8 |
| Flash | 16MB | 16MB |
| PSRAM | 8MB | 8MB |
| 屏幕 | EDO47TC1 4.7英寸 (540×960) | EDO47TC1 4.7英寸 (540×960) + AG玻璃+暖光 |
| 触摸 | GT911 两点电容触控 | GT911 两点电容触控 |
| 时钟 | PCF8563 (I²C) | PCF8563 (I²C) |
| GPS/LoRa | ✅ 支持 | ❌ 移除 |
| 存储 | TF 卡 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × TYPE-C (USB + OTG) | 1 × TYPE-C (USB + OTG) |
| IO 扩展 | 2 × 20pin（树莓派 40-PIN 兼容） | 2 × 20pin（树莓派 40-PIN 兼容） |
| 按键 | RST + SIR_io0 + io21 | RST + SIR_io0 + io21 |
| 定位孔 | 6 × 3.8mm | 6 × 3.8mm |
| 尺寸 | 121 × 67 × 12mm | 121 × 67 × 12mm |

## 引脚图

<img src="/products/t5-series/t5-e-paper-s3-lite/index/image/t5-4.7-s3-pro-pin.jpg" alt="T5 E-Paper S3 Lite 引脚图" width=100%>

<img src="/products/t5-series/t5-e-paper-s3-lite/index/image/t5-4.7-s3-pro-info-zh.jpg" alt="T5 E-Paper S3 Lite 产品信息图" width=100%>

### 引脚映射

| GPIO | 连接至 | 可用 |
| :--: | :----: | :--: |
| 13 | 74HCT4094D CFG_DATA | ❌ |
| 12 | 74HCT4094D CFG_CLK | ❌ |
| 0 | 74HCT4094D CFG_STR | ❌ |
| 38 | E-paper CKV | ❌ |
| 40 | E-paper STH | ❌ |
| 41 | E-paper CKH | ❌ |
| 8–7 | E-paper D0–D7 | ❌ |
| 21 | Button | ❌ |
| 14 | Battery ADC | ❌ |
| 16/15/11/42 | SD MISO/MOSI/SCK/CS | ❌* |
| 18 | SDA | ❌ |
| 17 | SCL | ❌ |
| 47 | Touch IRQ | ❌ |
| 45/10/48/39 | — | ✅ |

> *SD 引脚（16、15、11、42）在不使用 SD 卡时可以自由使用。GPIO10 可连接到 GPIO47 以实现触摸唤醒功能（参见 [issue #93](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47/issues/93)）。

## 尺寸图

## 原理图

* [T5-ePaper-S3-V2.4](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47/blob/esp32s3/schematic/T5-ePaper-S3-V2.4.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [ED047TC1 屏幕数据手册](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47/blob/esp32s3/datasheet/ED047TC1.pdf)

## 软件开发

* [LilyGo-EPD47 GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-EPD47)

### 依赖库

* [Button2](https://github.com/LennartHennigs/Button2)
* [SensorLib@0.19](https://github.com/lewisxhe/SensorsLib)
* [GxEPD2](https://github.com/ZinggJM/GxEPD2)
* [Adafruit_GFX](https://github.com/adafruit/Adafruit-GFX-Library)

## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 可以参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 为什么打开Arduino IDE时会提醒升级库文件？**  
  A. 选择不升级，不同版本的库可能不兼容，建议保持当前测试通过的版本。

* **Q. 电子墨水屏的刷新率如何？**  
  A. 电子墨水屏刷新率较低，适合显示静态或更新不频繁的内容，具有极低的功耗。

* **Q. 为什么我的板子一直烧录失败？**  
  A. 请按住 BOOT 按键重新下载程序。

* **Q. Lite 版和 Pro 版的代码可以通用吗？**  
  A. 核心显示、触控、RTC 等功能代码完全通用；Pro 版专属的 GPS/LoRa 相关代码在 Lite 版上不适用。

* **Q. AG 防眩光玻璃和暖色调背光有什么优势？**  
  A. AG 防眩光玻璃可大幅减少屏幕反光，户外阳光下可视性提升明显；暖色调背光更接近纸质书观感，长时间阅读更护眼。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T5-ePaper-S3-V2.4 | — | Pro 版当前版本 |
| T5-ePaper-S3-Lite | — | Lite 版（移除 GPS/LoRa，AG 玻璃+暖光背光） |
