---
title: LILYGO T-LoRa C6
show_source: false
tags: ESP32-C6, LoRa, Wi-Fi 6, Bluetooth 5, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-lora-c6" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-lora-series/t-lora-c6/index/image/t-lora-c6-1.jpg', alt: 'T-LoRa C6 正面图' },
  { src: '/products/t-lora-series/t-lora-c6/index/image/t-lora-c6-2.jpg', alt: 'T-LoRa C6 实物图' },
  { src: '/products/t-lora-series/t-lora-c6/index/image/t-lora-c6-3.jpg', alt: 'T-LoRa C6 引脚图' }
]" />

## 概述

LILYGO T-LoRa C6 是一款基于 ESP32-C6-MINI-1 模组的紧凑型物联网开发板，集成 2.4GHz Wi-Fi 6、蓝牙 5（LE）及 LoRa 远距离通信（SX1262 模块，支持 868/915MHz 频段），兼具高性能与低功耗特性。板载 4MB Flash，支持 C/C++、MicroPython、Lua 多语言开发，适配 Arduino IDE、VS Code 和 ESP-IDF 等主流平台。其小巧尺寸（33×29mm）与多协议融合能力（Wi-Fi/蓝牙/LoRa）使其适用于智能家居控制、工业传感器网络、远程环境监测等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [SX1262_PingPong](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/LoRa/T3C6/SX1262_PingPong) | ✓ | | LoRa 通信示例 |
| [BLE_server](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/BLE/BLE_server) | ✓ | | 蓝牙低功耗示例 |
| [I2CScanner](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/Sensor/I2CScanner) | ✓ | | I2C 传感器扫描示例 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [LilyGo-LoRa-Series 项目代码](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | Enabled |
| CPU Frequency | 160MHz (WiFi) |
| Flash Mode | DIO |
| Flash Size | **4MB (32Mb)** |
| Core Debug Level | None |
| Partition Scheme | **Default 4M Flash with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| Arduino Runs On | Core 1 |

4. 在 `utilities.h` 中取消对应型号（`T3_C6`）的注释。
5. 选择正确的端口，上传程序。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [ESP-IDF](https://github.com/espressif/esp-idf)
5. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-C6-MINI-1：4 MB Flash（Quad-SPI），160MHz
- Wi-Fi 6（2.4GHz）+ 蓝牙 5.0（LE）+ 802.15.4
- SX1262 LoRa（868/915MHz）
- USB Type-C 供电，BOOT + RESET 按键
- 4 × M1.2 定位孔，尺寸 33×29mm

## 产品参数

<img src="/products/t-lora-series/t-lora-c6/index/image/t-lora-c6-zh.jpg" alt="T-LoRa C6 概述图" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-C6-MINI-1 |
| Flash | 4MB (Quad-SPI) |
| LoRa | SX1262 (868/915MHz) |
| 无线 | 2.4GHz Wi-Fi 6 + Bluetooth 5.0 + 802.15.4 |
| USB | 1 × USB Type-C |
| 扩展接口 | 2 × 10-PIN GPIO |
| 按键 | RESET + BOOT |
| 电源输入 | 5V/500mA |
| 安装孔 | 4 × M1.2 定位孔 |
| 尺寸 | 33 × 29 × 6mm |

## 引脚图

<img src="/products/t-lora-series/t-lora-c6/index/image/t-lora-c6-3.jpg" alt="T-LoRa C6 引脚图" width=100%>

### 引脚映射

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| LoRa (SX1262) SCK | 6 | ❌ |
| LoRa (SX1262) MISO | 1 | ❌ |
| LoRa (SX1262) MOSI | 0 | ❌ |
| LoRa (SX1262) RESET | 21 | ❌ |
| LoRa (SX1262) DIO0 | 23 | ❌ |
| LoRa (SX1262) BUSY | 22 | ❌ |
| LoRa (SX1262) CS | 18 | ❌ |
| 板载 LED | 7 | ❌ |

## 尺寸图

## 原理图

* [T-LoRa-C6 V1.0 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3-C6_V1.0.pdf)

## 数据手册

* [ESP32-C6 Datasheet](/datasheet/esp32-c6_datasheet_en.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [arduino-LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [U8g2](https://github.com/olikraus/u8g2)

## 常见问题

* **Q. ESP32-C6 相比 ESP32-S3 有什么优势？**  
  A. ESP32-C6 支持 Wi-Fi 6，具有更好的能效比和网络性能，同时保持低成本。

* **Q. LoRa 模块的通信距离是多少？**  
  A. 在理想条件下，SX1262 LoRa 模块的通信距离可达数公里，具体取决于环境因素和天线配置。

* **Q. 为什么我的板子烧录失败？**  
  A. 请按住 "BOOT" 按键同时按 "RST" 按键，然后释放 "RST" 按键进入下载模式后重新烧录。

* **Q. Wi-Fi 6 和蓝牙可以同时工作吗？**  
  A. 是的，ESP32-C6 支持 Wi-Fi 和蓝牙共存工作模式。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-LoRa-C6_V1.0 | 2024-03-15 | 初始硬件版本 |
| T-LoRa-C6_V1.1 | 2024-06-20 | 软件优化更新 |
