---
title: LILYGO T-Display S3 AMOLED 1.64
show_source: false
tags: AMOLED, ESP32-S3, Display, Touch
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44437365031093" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-amoled-1.64/assets/t-display-s3-amoled-1.64-1.jpg', alt: 'T-Display S3 AMOLED 1.64 正面图' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.64/assets/t-display-s3-amoled-1.64-2.jpg', alt: 'T-Display S3 AMOLED 1.64 实物图' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.64/assets/t-display-s3-amoled-1.64-zh.jpg', alt: 'T-Display S3 AMOLED 1.64 引脚图' }
]" />

## 概述

T-Display-S3 AMOLED 1.64 是一款基于 ESP32-S3R8 双核 LX7 微处理器的高性能物联网开发板，集成 2.4 GHz Wi-Fi 和蓝牙 5（LE）无线通信功能，支持多平台开发（Arduino、PlatformIO-IDE、ESP-IDF）。其核心亮点为 1.64 英寸 ICMA3311 AMOLED 显示屏，分辨率达 280×456 像素，采用 QSPI 总线接口并兼容 Arduino_GFX 图形库。板载 16MB Flash 和 8MB PSRAM，支持 SY6970 电源管理和 PCF8563 RTC，适用于智能穿戴、嵌入式 GUI、工业控制等场景。

> 注意：该芯片在未接电池 5V 供电时输出波形将非常不稳定，需要连接电池使用或者软件关闭电池通道。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/FT3168) | ✓ | | FT3168触摸示例 |
| [Original Test](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test) | ✓ | | 出厂测试 |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX) | ✓ | | GFX图形库示例 |
| [GFX FT3168 Image](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX_FT3168_Image) | ✓ | | GFX图像显示示例 |
| [SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970) | ✓ | | 电源管理示例 |
| [SY6970 OTG](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970_OTG) | ✓ | | OTG功能示例 |
| [Light Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up) | ✓ | | 轻睡眠唤醒示例 |
| [Deep Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up) | ✓ | | 深度睡眠唤醒示例 |
| [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563) | ✓ | | PCF8563 RTC示例 |
| [SD](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SD) | ✓ | | SD卡读写示例 |
| [lvgl_benchmark](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/lvgl_benchmark) | ✓ | | LVGL性能测试 |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/iic_scan) | | ✓ | I2C设备扫描 |
| [screen_touch_lvgl_9](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/screen_touch_lvgl_9) | | ✓ | 屏幕触摸与LVGL示例 |

### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2. 打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3. 在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4. 扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5. 打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32 Arduino"开发板下的开发板类型，选择的开发板类型由"platformio.ini"文件中以[env]目录下的"board = xxx"标头为准，如果没有对应的开发板，则需要自己手动添加项目文件夹下"board"目录下的开发板。
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
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## 视频

## 主要特点

- ESP32-S3R8 双核 LX7 @ 240 MHz，16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- 1.64 英寸 ICMA3311 AMOLED 显示屏（280×456），QSPI 接口
- FT3168 电容触控，SY6970 电源管理，PCF8563 RTC
- LoRa 支持（1276/868/915 MHz），TF 卡槽
- 尺寸紧凑：28 × 42mm

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 1.64英寸 ICMA3311 AMOLED (280×456) |
| 触摸 | FT3168 (I²C) |
| 总线 | QSPI |
| LoRa | 1276/868/915MHz |
| 存储 | TF 卡 |
| 充电芯片 | SY6970 |
| RTC | PCF8563 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × TYPE-C (USB + OTG) |
| IO 接口 | 2 × 2×7 扩展IO接口 |
| 扩展接口 | 2 × STEMMA QT/Qwiic + JST-GH 电池座 + 天线座 |
| 按键 | RESET + BOOT |
| 尺寸 | 28 × 42 × 11mm |

## 引脚图

<img src="/products/t-display-series/t-display-s3-amoled-1.64/assets/t-display-s3-amoled-1.64-zh.jpg" alt="T-Display S3 AMOLED 1.64 引脚图" width=100%>

<img src="/products/t-display-series/t-display-s3-amoled-1.64/assets/t-display-s3-amoled-1.64-info-zh.jpg" alt="T-Display S3 AMOLED 1.64 概述图" width=80%>

## 尺寸图

## 原理图

* [T-Display-S3-AMOLED-1.64_V1.0](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/project/T-Display-AMOLED-1.64_V1.0.pdf)

## 数据手册

* [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/PCF8563.pdf)
* [SH8601](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SH8601Z.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/AN_SY6970.pdf)
* [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/FT3168.pdf)

## 软件开发

* [T-Display-S3-AMOLED-1.64 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64)

### 依赖库

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [lvgl-8.3.5](https://lvgl.io)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)

## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 可以参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 为什么打开Arduino IDE时会提醒升级库文件？**  
  A. 选择不升级，不同版本的库可能不兼容，建议保持当前版本。

* **Q. 为什么我的板子一直烧录失败？**  
  A. 请按住 BOOT 按键重新下载程序。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-AMOLED-1.43_V1.0 | 2024-05-20 | 初始版本 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2024-11-25 | 新增排线、新增H0175Y003AM屏幕适配 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2025-01-13 | 新增DO0143FMST10屏幕适配 |
