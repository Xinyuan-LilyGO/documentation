---
title: LILYGO T-Circle
show_source: false
tags: T-Circle, LCD, ESP32
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-circle-s3?variant=44912874062005" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-circle/assets/t-circle-1.jpg', alt: 'T-Circle 正面图' },
  { src: '/products/other/t-circle/assets/t-circle-2.jpg', alt: 'T-Circle 实物图' },
  { src: '/products/other/t-circle/assets/t-circle-zh.jpg', alt: 'T-Circle 引脚图' }
]" />

## 概述

LILYGO T-Circle 是 ESP32 版本的圆形屏幕开发板，核心搭载 0.75 英寸 TFT LCD 圆形显示屏，支持 160×160 分辨率与 262K 色彩显示，配备 CST816D 电容式触摸芯片实现精准触控交互。硬件采用 GC9D01N 驱动芯片，通过 12 引脚（含 3V3 供电、SPI 接口、I2C 通信等）与外部设备连接，兼容 Arduino 等开发框架。适用于智能手表、物联网设备界面或微型嵌入式系统的原型开发。

> **注意**：T-Circle 为 ESP32 版本，ESP32-S3 版本请参考 [T-Circle S3](/zh/products/other/t-circle-s3/)。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Basic Display](https://github.com/Xinyuan-LilyGO/T-Circle) | ✓ | | 基础显示示例 |
| [Touch Test](https://github.com/Xinyuan-LilyGO/T-Circle) | ✓ | | 触摸测试示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Circle 项目代码](https://github.com/Xinyuan-LilyGO/T-Circle)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `libraries` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | 默认配置 |
| PSRAM | Enabled |

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32：16MB Flash，8MB PSRAM (Octal SPI)，Wi-Fi + 蓝牙
- 0.75 英寸 GC9D01N TFT LCD 圆屏（160×160，SPI）
- CST816D 电容触摸（I2C）
- 12 引脚扩展接口，2 × M1.6 定位孔

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 0.75 英寸 GC9D01N TFT LCD (160×160) |
| 触摸 | CST816D 电容触摸 |
| 总线 | SPI |
| 无线 | 2.4GHz Wi-Fi + Bluetooth |
| 扩展接口 | 12pin 扩展接口 |
| 按键 | RESET + BOOT |
| 电源 | 5V/500mA |
| 安装孔 | 2 × M1.6×2 |
| 尺寸 | 32 × 17mm |

## 引脚图

<img src="/products/other/t-circle/assets/t-circle-zh.jpg" alt="T-Circle 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-Circle-S3 原理图（S3 版本，ESP32 版本请参考 GitHub 仓库）](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf)

## 数据手册

* [GC9D01N Datasheet](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/GC9D01N.pdf)
* [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MSM261S4030H0R Datasheet](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MSM261S4030H0R.pdf)
* [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)

## 软件开发

* [T-Circle GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Circle)

### 依赖库

* [TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)
* [FastLED-3.6.0](https://github.com/FastLED/FastLED)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 为什么板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键，再按 "RST" 按键，然后点击烧录进入下载模式。

* **Q. T-Circle 和 T-Circle S3 有什么区别？**  
  A. T-Circle 核心主控为 ESP32，T-Circle S3 核心主控为性能更强的 ESP32-S3，请根据项目需求选择。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Circle_V1.0 | 2021-03-14 | 初始版本 |
