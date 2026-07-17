---
title: LILYGO T5 E-Paper
show_source: false
tags: E-Paper, ESP32-S3, Touch, E-Ink
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t5-series/t5-e-paper/index/image/t5-e-paper-1.jpg', alt: 'T5 E-Paper 正面图' },
  { src: '/products/t5-series/t5-e-paper/index/image/t5-e-paper-2.jpg', alt: 'T5 E-Paper 实物图' },
  { src: '/products/t5-series/t5-e-paper/index/image/t5-e-paper-pin-zh.jpg', alt: 'T5 E-Paper 引脚图' }
]" />

## 概述

LILYGO T5-4.7-S3 电容触摸屏开发板是一款基于 ESP32-S3-WROOM-1-N16R8 芯片（内置 8MB PSRAM 和 16MB Flash）的 4.7 英寸电子墨水屏（E-Paper）解决方案。该产品集成了电容式触摸功能（支持两点触控），配备了 PCF8563 实时时钟芯片，并设有 Type-C USB 接口以及 Li-Po 电池接口（JST-GH 2.0mm），支持电池电压监测（Bat ADC）。它提供兼容树莓派 40-PIN 的 GPIO 扩展接口，板载 TF 卡槽，具备专用的屏幕驱动信号（STV/LE）和 SPI 接口（CS/SCLK/MOSI/MISO），并采用 2.5D 弧面设计，专为开发低功耗、带触控交互的电子墨水屏应用（如信息牌、智能家居显示终端、便携设备等）而设计。

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
2. 打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3. 在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4. 扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5. 打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32 Arduino"开发板下的开发板类型。
4. 打开菜单栏"文件"->"首选项"，找到"项目文件夹位置"这一栏，将项目目录下的"libraries"文件夹里的所有库文件连带文件夹复制粘贴到这个目录下的"libraries"里边。
5. 在"工具"菜单中选择正确的设置，如下表所示。

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

6. 选择正确的端口。
7. 点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3-WROOM-1-N16R8：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- 4.7 英寸 EDO47TC1 电子墨水屏（540×960），低功耗
- GT911 两点电容触控，PCF8563 实时时钟
- 兼容树莓派 40-PIN GPIO 扩展接口
- TF 卡槽，Type-C USB，JST-GH 2.0mm 电池接口
- 2.5D 弧面设计，6 × 3.8mm 定位孔

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1-N16R8 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | EDO47TC1 4.7英寸电子墨水屏 (540×960) |
| 触摸 | GT911 两点电容触控 |
| 时钟 | PCF8563 (I²C) |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × TYPE-C (USB + OTG) |
| IO 扩展 | 2 × 20pin（树莓派 40-PIN 兼容） |
| 按键 | RST + SIR_io0 + io21 |
| 定位孔 | 6 × 3.8mm |
| 尺寸 | 121 × 67 × 12mm |

## 引脚图

<img src="/products/t5-series/t5-e-paper/index/image/t5-e-paper-pin-zh.jpg" alt="T5 E-Paper 引脚图" width=100%>

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

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T5-ePaper-S3-V2.4 | — | 当前版本 |
