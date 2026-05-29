---
title: T-PCIE
show_source: false
tags: ESP32, PCIe, 蜂窝, 4G, LTE, AXP2101, IoT, 调制解调器
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-pcie" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-1.jpg', alt: 'T-PCIE 正面' },
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-2.jpg', alt: 'T-PCIE 背面' },
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-3.jpg', alt: 'T-PCIE 尺寸图' },
]" />

## 概述

LILYGO T-PCIE 是一款基于 ESP32 的蜂窝开发板，配备 **Mini PCIe（mPCIe）插槽**，支持更换不同的蜂窝调制解调器模块。主控为 **ESP32-WROVER-E**（双核 Xtensa LX6，240 MHz，4 MB Flash，8 MB PSRAM），支持 Wi-Fi 和 Bluetooth 4.2。T-PCIE 兼容多种蜂窝模块，包括 **SIM7000G**（NB-IoT/Cat-M）、**SIM7600X**（LTE Cat-4）等标准 mPCIe 形式的调制解调器。**AXP2101 PMU** 负责 ESP32 和调制解调器的电源管理，Nano SIM 卡槽和 USB-C 接口完善整体设计。适用于蜂窝 IoT 网关、远程监控节点和便携 LTE/NB-IoT 数据设备。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-T-PCIE](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) | ✓ | | 蜂窝 AT 指令、MQTT、HTTP 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-T-PCIE` 项目文件夹
4. 打开 `platformio.ini`，选择与您的模块对应的环境
5. 点击 **✓** 编译，通过 USB-C 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32 Wrover Module** |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |
| 上传速度 | 921600 |

4. 点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32-WROVER-E 双核 Xtensa LX6 @ 240 MHz，Wi-Fi + Bluetooth 4.2
- Mini PCIe（mPCIe）插槽，支持更换蜂窝调制解调器模块
- 兼容 SIM7000G、SIM7600X 等 mPCIe 蜂窝模块
- AXP2101 PMU，管理 ESP32 及调制解调器供电
- Nano SIM 卡槽
- USB-C 供电和编程
- 4 MB Flash，8 MB PSRAM
- 电池接口，支持便携使用

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32-WROVER-E（Xtensa 双核 LX6，240 MHz） |
| Flash | 4 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 4.2 |
| 蜂窝 | 通过 mPCIe 模块（SIM7000G、SIM7600X 等） |
| PMU | AXP2101 |
| SIM | Nano SIM 卡槽 |
| USB | 1 × USB-C |
| 电池 | JST 接口，支持锂离子/锂聚合物电池 |

## 引脚图

### 调制解调器 UART

| 信号 | GPIO |
| :--: | :--: |
| UART TX（发往调制解调器） | 27 |
| UART RX（来自调制解调器） | 26 |
| 调制解调器 PWR KEY | 4 |
| 调制解调器 RESET | 5 |
| 调制解调器 POWER ON | 25 |

### I2C（AXP2101）

| 信号 | GPIO |
| :--: | :--: |
| SDA | 21 |
| SCL | 22 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [LilyGo-T-PCIE GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/tree/master/hardware)

## 数据手册

- [ESP32 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
- [AXP2101 数据手册](http://www.x-powers.com/en.php/Info/product_detail/article_id/97)

## 软件库

- [LilyGo-T-PCIE GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE)

### 依赖库

- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [XPowersLib](https://github.com/lewisxhe/XPowersLib)
- [PubSubClient](https://github.com/knolleary/pubsubclient)

## 常见问题

* **Q. T-PCIE 的 mPCIe 插槽兼容哪些蜂窝模块？**
  A. T-PCIE 已通过 SIM7000G（NB-IoT/Cat-M/GPRS+GPS）和 SIM7600X（LTE Cat-4）测试。其他标准 mPCIe 形式的调制解调器或许可以工作，但不在官方支持范围内。

* **Q. mPCIe 插槽传输的是 USB 还是 PCIe 信号？**
  A. T-PCIE 的 mPCIe 接口使用 UART 信号连接至 ESP32（非完整 PCIe），这是嵌入式设计中集成蜂窝调制解调器的标准做法。

* **Q. 需要外置天线吗？**
  A. 需要。必须将蜂窝天线连接到调制解调器的天线接口（IPEX/U.FL）才能可靠入网。如果使用带 GPS 的模块，还需连接 GPS 天线。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
