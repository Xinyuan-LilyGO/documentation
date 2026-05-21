---
title: LILYGO T-Encoder Pro
show_source: false
tags: ESP32-S3, Encoder, AMOLED, Rotary, HMI
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-encoder-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-encoder-series/t-encoder-pro/assets/t-encoder-pro-1.jpg', alt: 'T-Encoder Pro 正面图' },
  { src: '/products/t-encoder-series/t-encoder-pro/assets/t-encoder-pro-2.jpg', alt: 'T-Encoder Pro 实物图' },
  { src: '/products/t-encoder-series/t-encoder-pro/assets/t-encoder-pro-pin-zh.jpg', alt: 'T-Encoder Pro 引脚图' }
]" />

## 概述

LILYGO T-Encoder-Pro 是一款配备 AMOLED 触摸屏的智能控制旋钮开发板，核心基于 ESP32-S3 R8 高性能 Wi-Fi/蓝牙双模芯片，集成 2.04 英寸 SH8601A 触摸 AMOLED 显示屏（分辨率 390×390），支持电容触控交互。硬件功能丰富，包含旋转编码器（支持左右旋转和按压操作）、蜂鸣器、振动电机、8MB PSRAM 和 16MB Flash 存储，并配备双 QWIIC 4-Pin 接口以快速扩展传感器或模块。适用于嵌入式 UI 开发、智能家居控制面板、音频调音台、便携式设备原型或物联网终端。

## 快速开始

### 示例支持

| 示例 | 支持的 IDE 和版本 | 描述 |
| ------  | ------  | ------ |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/tree/arduino-esp32-libs_V3.0.7/examples/GFX) | `[Arduino IDE][esp32_v3.0.7]` | 图形库示例 |
| [Lvgl_CIT](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/tree/arduino-esp32-libs_V3.0.7/examples/Lvgl_CIT) | `[Arduino IDE][esp32_v3.0.7]` | 出厂测试 |
| [CHSC5816](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/tree/arduino-esp32-libs_V3.0.7/examples/CHSC5816) | `[Arduino IDE][esp32_v3.0.7]` | 触摸测试 |
| [Rotary_Encoder](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/tree/arduino-esp32-libs_V3.0.7/examples/Rotary_Encoder) | `[Arduino IDE][esp32_v3.0.7]` | 旋转编码器测试 |

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
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- ESP32-S3R8 双核 LX7 @ 240 MHz，16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- 2.04 英寸 SH8601A AMOLED 显示屏（390×390），CHSC5816 触摸
- 旋转编码器（支持左右旋转和按压操作）
- 蜂鸣器（音频反馈）+ 振动电机（触觉反馈）
- 双 QWIIC 4-Pin 扩展接口，3 × M2 螺丝孔

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 2.04英寸 SH8601A AMOLED (390×390) |
| 触摸 | CHSC5816 (I²C) |
| 编码器 | 旋转编码器（支持按压） |
| 蜂鸣器 | 音频反馈 |
| 振动电机 | 触觉反馈 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × TYPE-C (USB + OTG) |
| 扩展接口 | 2 × QWIIC 4pin |
| 按键 | RESET + BOOT |
| 固定孔 | 3 × M2 |
| 尺寸 | 43.5 × 43.5 × 27.5mm |

## 引脚图

<img src="/products/t-encoder-series/t-encoder-pro/assets/t-encoder-pro-pin-zh.jpg" alt="T-Encoder Pro 引脚图" width=100%>

<img src="/products/t-encoder-series/t-encoder-pro/assets/t-encoder-pro-info-zh.jpg" alt="T-Encoder Pro 概述图" width=80%>

### 引脚映射

| 屏幕引脚 | ESP32S3 引脚 |
| :----: | :----: |
| SDIO0 | IO11 |
| SDIO1 | IO13 |
| SDIO2 | IO7 |
| SDIO3 | IO14 |
| SCLK | IO12 |
| RST | IO4 |
| VCI EN | IO3 |
| CS | IO10 |

| 触摸引脚 | ESP32S3 引脚 |
| :----: | :----: |
| RST | IO8 |
| INT | IO9 |
| SDA | IO5 |
| SCL | IO6 |

| 旋转编码器引脚 | ESP32S3 引脚 |
| :----: | :----: |
| KNOB DATA A | IO1 |
| KNOB DATA B | IO2 |
| KNOB KEY | IO0 |

| 蜂鸣器引脚 | ESP32S3 引脚 |
| :----: | :----: |
| BUZZER DATA | IO17 |

## 尺寸图

## 原理图

* [SCH_T-Encoder-Pro_V1.0](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/%5BSCH%5D%5BT-Encoder-Pro_V1.0%5D.pdf)
* [SCH_T-Encoder-Pro_V1.0_TFT_FPC](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/%5BSCH%5D%5BT-Encoder-Pro_V1.0%5D%5BTFT_FPC%5D.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [CHSC5816 Datasheet](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/DS_CHSC5816_V1.1.5.pdf)
* [CHSC5816 Application Note](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/CHSC5816-ApplicationDoc_US_V04.pdf)
* [DXQ120MYB2416A Datasheet](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/DXQ120MYB2416A.pdf)

## 软件开发

* [T-Encoder-Pro GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro)

### 依赖库

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [lvgl-8.3.5](https://github.com/lvgl/lvgl)
* [SensorLib-0.1.4](https://github.com/lewisxhe/SensorsLib)

## 常见问题

* **Q. T-Encoder Pro 的主要应用场景是什么？**  
  A. 适用于智能家居控制面板、音频设备调音台、工业 HMI 界面、多媒体控制器等需要精确旋钮控制和图形显示的场景。

* **Q. 编码器支持哪些操作？**  
  A. 编码器支持左右旋转（用于数值调节、菜单选择等）和按压操作（用于确认、选择等功能）。

* **Q. 如何连接外部传感器？**  
  A. 可以通过板载的 2 个 QWIIC 4pin 接口快速连接兼容的传感器模块，支持即插即用。

* **Q. 触觉反馈如何实现？**  
  A. 通过振动电机提供触觉反馈，可以在旋转编码器操作或特定事件时提供物理反馈，增强用户体验。

* **Q. 屏幕显示效果如何？**  
  A. 采用 2.04 英寸 AMOLED 屏幕，分辨率 390×390，显示效果清晰鲜艳，支持触摸操作。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-Encoder-Pro_V1.0 | 2024-02-02 | 初始版本 |
