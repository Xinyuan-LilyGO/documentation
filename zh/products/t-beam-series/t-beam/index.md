---
title: T-Beam
show_source: false
tags: ESP32, LoRa, SX1276, SX1278, GPS, OLED, AXP192, Meshtastic, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-1.jpg', alt: 'T-Beam 正面图' },
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-2.jpg', alt: 'T-Beam 背面图' },
  { src: '/products/t-beam-series/t-beam/index/image/t-beam-3.jpg', alt: 'T-Beam 尺寸图' },
]" />

## 概述

LILYGO T-Beam 是一款功能丰富的 ESP32 开发板，将 LoRa 远距离无线通信、GPS 定位和电池管理集成于紧凑的一体化设计中。基于 **ESP32** 双核 LX6 处理器，支持 Wi-Fi 和蓝牙 4.2，集成 **SX1276/SX1278 LoRa** 模块（433/868/915 MHz）、**GPS 模块**（NEO-6M 或兼容型号）、**0.96 英寸 SSD1306 OLED** 显示屏（128×64）和 **AXP192 电源管理芯片**，配备 18650 电池座。广泛应用于 Meshtastic 网状网络、APRS 追踪、LoRaWAN 节点及便携式 IoT 应用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa、GPS、OLED、PMU 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-LoRa-Series` 项目文件夹
4. 打开 `platformio.ini`，在 `default_envs` 下取消注释 T-Beam 环境
5. 点击 **✓** 编译，通过 USB 连接后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录
4. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | 您的端口 |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| Upload Speed | 921600 |

5. 在 `utilities.h` 中取消对应型号的注释，点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [MicroPython](https://micropython.org/)

## 相关视频

<!-- 产品宣传视频和教程视频。-->

## 主要特性

- ESP32 双核 LX6 @ 240 MHz，Wi-Fi 802.11 b/g/n + 蓝牙 4.2 BLE
- SX1276 / SX1278 LoRa（433/868/915 MHz），远距离低功耗通信
- GPS 模块（NEO-6M 或兼容型号），支持定位追踪
- 0.96 英寸 SSD1306 OLED（128×64，I2C）
- AXP192 电源管理，18650 电池座，支持充电
- Micro USB 供电与烧录
- 兼容 Meshtastic

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32，双核 LX6 @ 240 MHz |
| Flash | 4 MB |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n，蓝牙 4.2 + BLE |
| LoRa | SX1276 / SX1278，433/868/915 MHz |
| GPS | NEO-6M 或兼容型号 |
| 显示屏 | 0.96 英寸 SSD1306 OLED，128×64 |
| 电源管理 | AXP192 |
| 电池 | 18650 锂离子电池座 |
| USB | 1 × Micro USB |

![](/products/t-beam-series/t-beam/index/image/t-beam-info.jpg)

## 引脚图

<!-- PCB 引脚图。-->
![](/products/t-beam-series/t-beam/index/image/t-beam-pinout.jpg)
## 尺寸图

<!-- PCB 及外壳尺寸图。-->
![](/products/t-beam-series/t-beam/index/image/t-beam-3.jpg)
## 原理图

* [LilyGo-LoRa-Series 硬件文件](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/schematic)

## 数据手册

* [ESP32 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
* [SX1276 数据手册](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## 常见问题

* **Q. 应该使用哪个 LoRa 频段？**
  A. 433 MHz 常用于亚洲，868 MHz 用于欧洲，915 MHz 用于北美。请根据所在地区的无线电法规选择对应频段。

* **Q. 无法烧录固件？**
  A. 按住 **BOOT** 键，按下并释放 **RST**，再点击上传。

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
| V1.1 | | 新增 AXP192 电源管理 |
