---
title: T-SIM7000G
show_source: false
tags: ESP32, SIM7000G, NB-IoT, LTE-M, GPRS, GPS, IoT, 蜂窝
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim7000g" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim7000/index/image/t-sim7000-1.jpg', alt: 'T-SIM7000G 正面' },
  { src: '/products/t-sim-series/t-sim7000/index/image/t-sim7000-2.jpg', alt: 'T-SIM7000G 背面' },
]" />

## 概述

LILYGO T-SIM7000G 将 **ESP32** 微控制器与 **SIMCom SIM7000G** 多频段 LTE Cat-M/NB-IoT/GPRS 模块及集成 **GNSS** 接收器相结合。主控为 **ESP32-WROVER-B**（双核 Xtensa LX6，240 MHz，4 MB Flash，8 MB PSRAM），支持 Wi-Fi 和 Bluetooth 4.2。SIM7000G 支持全球 LTE Cat-M1（eMTC）和 NB-IoT（NB1/NB2）频段，并提供 GPRS 回退。集成 GPS/GLONASS/北斗/Galileo GNSS，是资产追踪、远程环境监控、预测性维护和智慧农业应用的完整蜂窝+GPS 解决方案。通过 Micro USB 连接，支持 3.7 V 锂电池。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGO-T-SIM7000G](https://github.com/Xinyuan-LilyGO/LilyGO-T-SIM7000G) | ✓ | | NB-IoT、MQTT、HTTP、GPS 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGO-T-SIM7000G` 项目文件夹
4. 打开 `platformio.ini`，选择对应示例
5. 点击 **✓** 编译，通过 Micro USB 连接设备，点击 **→** 上传

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

- ESP32-WROVER-B 双核 Xtensa LX6 @ 240 MHz，Wi-Fi + Bluetooth 4.2
- SIMCom SIM7000G：全球 LTE Cat-M1、NB-IoT、GPRS
- 集成 GNSS：GPS、GLONASS、北斗、Galileo
- Nano SIM 卡槽
- Micro USB 供电和编程
- 3.7 V 锂电池接口及充电电路
- 蜂窝 + GPS 天线接口（IPEX/U.FL）
- 4 MB Flash，8 MB PSRAM

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32-WROVER-B（Xtensa 双核 LX6，240 MHz） |
| Flash | 4 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 4.2 |
| 蜂窝 | SIM7000G — LTE Cat-M1、NB-IoT、GPRS（全球多频段） |
| GNSS | GPS、GLONASS、北斗、Galileo |
| SIM | Nano SIM |
| USB | Micro USB |
| 电池 | 3.7 V 锂电接口及充电 |
| 天线 | LTE IPEX + GPS IPEX |

## 引脚图

![T-SIM7000G 引脚图](/products/t-sim-series/t-sim7000/index/image/t-sim7000-pinout.jpg)

### SIM7000G UART

| 信号 | GPIO |
| :--: | :--: |
| UART TX（发往 SIM7000G） | 27 |
| UART RX（来自 SIM7000G） | 26 |
| PWR KEY | 4 |
| RESET | — （通过 AT 指令控制） |

### I2C

| 信号 | GPIO |
| :--: | :--: |
| SDA | 21 |
| SCL | 22 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [LilyGO-T-SIM7000G GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/LilyGO-T-SIM7000G/tree/master/hardware)

## 数据手册

- [ESP32 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
- [SIM7000G 硬件设计手册](https://simcom.ee/documents/?dir=SIM7000x)

## 软件库

- [LilyGO-T-SIM7000G GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-SIM7000G)

### 依赖库

- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
- [PubSubClient](https://github.com/knolleary/pubsubclient)
- [ArduinoHttpClient](https://github.com/arduino-libraries/ArduinoHttpClient)

## 常见问题

* **Q. SIM7000G 支持哪些蜂窝网络？**
  A. SIM7000G 在全球多个频段（B1、B2、B3、B4、B5、B8、B12、B13、B18、B19、B20、B26、B28、B85）支持 LTE Cat-M1（eMTC）和 NB-IoT，并提供 GPRS/EDGE 回退。请确认您所在地区的运营商支持情况。

* **Q. 如何开启 SIM7000G 模块？**
  A. 将 GPIO4（PWR KEY）拉低至少 1 秒后释放。如果使用 TinyGSM 库，也可以调用 `modem.powerOn()`。

* **Q. 需要哪些天线？**
  A. 需要蜂窝 LTE 天线（连接 LTE IPEX 接口）和 GPS 天线（连接 GPS IPEX 接口），模块为两者提供了独立接口。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
