---
title: LILYGO T-Echo
show_source: false
tags: nRF52840, LoRa, E-Paper, GPS, NFC, Low Power
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-lilygo" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo/index/image/t-echo1.jpg', alt: 'T-Echo 正面图' },
  { src: '/products/t-echo-series/t-echo/index/image/t-echo2.jpg', alt: 'T-Echo 实物图' },
  { src: '/products/t-echo-series/t-echo/index/image/t-echo-info-zh.jpg', alt: 'T-Echo 概述图' }
]" />

## 概述

T-Echo 是一款基于 nRF52840 芯片的多功能 LoRa 通信设备，集成了 E-Paper 屏幕、GPS 定位、NFC 功能和多种传感器。设备支持 Arduino 和 nRF5-SDK 开发环境，是开发 LoRa 通信、物联网节点和低功耗应用的理想平台。

T-Echo 兼容多个开源固件项目，包括 SoftRF 和 Meshtastic，可用于构建去中心化的通信网络。设备采用低功耗设计，支持多种省电模式，适合户外通信、环境监测等应用场景。

兼容开源固件：[SoftRF](https://github.com/lyusupov/SoftRF/wiki/Badge-Edition) / [Meshtastic](https://github.com/meshtastic/Meshtastic-device/tree/v1.2.42.2759c8d)

## 快速开始

### 示例支持

| 示例 | Arduino | nRF5-SDK | 描述 |
| :------ | :----: | :-----: | :---------- |
| [更多示例](https://github.com/Xinyuan-LilyGO/T-Echo/tree/main/examples) | ✓ | ✓ | 参考 GitHub 仓库 |

### Arduino
1. 下载 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 打开首选项，添加 `https://www.adafruit.com/package_adafruit_index.json` 到板安装管理器地址列表。
3. 打开板子安装管理器，选择 "Adafruit nRF52 by Adafruit" 安装。
4. 安装完成后，在板子列表中选择 "Nordic nRF52840 (PCA10056)"。
5. 将 `lib` 目录中的所有文件夹拷贝到 Arduino 库文件夹中。
6. 打开草图，选择正确的端口，然后点击上传。

> **注意：** 使用 USB 下载固件时，需要双击复位按键进入 DFU 模式。

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展。
2. 从 GitHub 下载 [T-Echo 项目代码](https://github.com/Xinyuan-LilyGO/T-Echo)，在 VS Code 中打开。
3. 点击左下角 (✔) 编译，点击 (→) 上传。

### nRF5-SDK
1. 下载 [nRF5-SDK](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download)。
2. 使用 nRF5-SDK 进行编程，支持 NFC 等高级功能。

> **注意：** 使用 nRF5-SDK 对板子编程将会丢失原先的 Adafruit Bootloader。Adafruit_nRF52_Arduino 中不支持 NFC 功能，如需使用 NFC 请用 nRF5-SDK 开发。

### 开发平台
1. [Arduino IDE](https://www.arduino.cc/en/software)（Adafruit nRF52）
2. [Platform IO](https://platformio.org/)
3. [nRF5-SDK](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download)

## 视频

## 主要特点

- nRF52840（ARM Cortex-M4），蓝牙 5.0
- SX1262 LoRa（多频段，-17~22dBm 输出功率）
- E-Paper 低功耗显示屏
- GPS 定位，NFC 近场通信
- 板载多种传感器
- 兼容 SoftRF / Meshtastic 开源固件

## 产品参数

<img src="/products/t-echo-series/t-echo/index/image/t-echo-info-zh.jpg" alt="T-Echo 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | nRF52840（ARM Cortex-M4） |
| LoRa | SX1262（多频段） |
| 屏幕 | E-Paper 显示屏 |
| GPS | 支持定位功能 |
| NFC | 支持近场通信 |
| 蓝牙 | 5.0 |
| 开发环境 | Arduino / nRF5-SDK |

## 电气参数

| 项目 | 参数 |
| :-- | :-- |
| USB-C 输入电压 | 4.8 V - 5.5 V |
| 充电电流 | 500 mA（固定） |
| 电池电压 | 3.7 V |
| 电池容量 | 850 mAh / 2400 mAh |
| 电池接口 | MX 1.25 mm |
| 充电温度 | 0 - 60°C |

> 接入 USB 后电池会开始充电，此时 ADC 读取的电池电压可能不准确。供电建议使用 USB-A 转 USB-C 线，部分 USB-C 转 USB-C 电源可能不会给设备供电。

## 引脚图

引脚定义请参考 [utilities.h](https://github.com/Xinyuan-LilyGO/T-Echo/blob/main/examples/Integration/utilities.h) 文件。

## 尺寸图

## 原理图

* [T-Echo GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Echo)

## 数据手册

* [nRF52840 Datasheet](https://www.nordicsemi.com/Products/nRF52840)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)

## 软件开发

* [T-Echo GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Echo)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [GxEPD](https://github.com/ZinggJM/GxEPD)
* [Adafruit_nRF52_Arduino](https://github.com/adafruit/Adafruit_nRF52_Arduino)
* [PCF8563_Library](https://github.com/lewisxhe/PCF8563_Library)
* [arduino-lmic](https://github.com/mcci-catena/arduino-lmic)

## 常见问题

* **Q. 如何进入 DFU 下载模式？**  
  A. 使用 USB 下载固件时，需要双击复位按键进入 DFU 模式。

* **Q. 使用 nRF5-SDK 开发后如何恢复 Arduino 支持？**  
  A. 使用 nRF5-SDK 编程会丢失 Adafruit Bootloader，需要重新烧录 [Adafruit_nRF52_Bootloader](https://github.com/adafruit/Adafruit_nRF52_Bootloader)。

* **Q. NFC 功能如何使用？**  
  A. NFC 功能需使用 nRF5-SDK 进行开发，Adafruit_nRF52_Arduino 不支持 NFC。

* **Q. Flash 供货型号有哪些？**  
  A. Flash 根据供货情况选择 MX25R1635FZUIL0 或 ZD25WQ16B，使用时注意区别。

* **Q. 设置 LoRa 输出功率需要注意什么？**  
  A. 设置输出功率后需配置电流限制（建议 80mA），可接受范围 -17~22dBm 输出功率，45~240mA 电流限制。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Echo_V1.0 | — | 多功能 LoRa 通信设备初始版本 |
