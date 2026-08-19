---
title: T-SIM7670G-S3
show_source: false
tags: ESP32-S3, SIM7670G, 4G, LTE Cat-1, GPS, IoT, 蜂窝
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim7670g-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-1.jpg', alt: 'T-SIM7670G-S3 正面' },
  { src: '/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-2.jpg', alt: 'T-SIM7670G-S3 背面' },
  { src: '/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-3.jpg', alt: 'T-SIM7670G-S3 尺寸图' },
  { src: '/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-info-1.jpg', alt: 'T-SIM7670G-S3 规格参数 1' },
  { src: '/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-info-2.jpg', alt: 'T-SIM7670G-S3 规格参数 2' },
]" />

## 概述

LILYGO T-SIM7670G-S3 将 **ESP32-S3** 双核 LX7 微控制器与 **SIMCom SIM7670G** LTE Cat-1 蜂窝模块及集成 GNSS 相结合。SIM7670G 提供 LTE Cat-1 数据速率（下行 10 Mbps / 上行 5 Mbps），覆盖全球多频段，支持语音通话，并集成 GPS/GLONASS/北斗接收器。ESP32-S3（16 MB Flash，8 MB PSRAM）在蜂窝连接的基础上还提供 Wi-Fi 802.11 b/g/n 和 Bluetooth 5.0 LE。配备 Nano SIM 卡槽、USB-C 编程接口、3.7 V 锂电池接口及充电电路，以及 LTE 和 GPS 天线的 IPEX 接口。属于 LilyGo-Modem-Series 生态系列产品。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) | ✓ | | LTE Cat-1、MQTT、HTTP、GPS、短信示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-Modem-Series` 项目文件夹
4. 打开 `platformio.ini`，选择 `T-SIM7670G-S3` 环境
5. 点击 **✓** 编译，通过 USB-C 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 您的端口 |
| USB CDC On Boot | Enable |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 大小 | **16MB (128Mb)** |
| 分区方案 | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| 上传模式 | **UART0/Hardware CDC** |
| 上传速度 | 921600 |
| USB 模式 | **CDC and JTAG** |

4. 点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi + Bluetooth 5.0
- SIMCom SIM7670G：LTE Cat-1（下行 10 Mbps / 上行 5 Mbps），全球多频段
- SIM7670G 支持语音通话
- 集成 GNSS：GPS、GLONASS、北斗
- Nano SIM 卡槽
- USB-C 供电和编程
- 3.7 V 锂电池接口及充电
- LTE 和 GPS 天线 IPEX 接口
- 16 MB Flash，8 MB PSRAM

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32-S3，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 5.0 |
| 蜂窝 | SIM7670G — LTE Cat-1，全球多频段 |
| 语音 | 支持（SIM7670G） |
| GNSS | GPS、GLONASS、北斗 |
| SIM | Nano SIM |
| USB | 1 × USB-C |
| 电池 | 3.7 V 锂电接口及充电 |
| 天线 | LTE IPEX + GPS IPEX |

![T-SIM7670G-S3 规格参数 1](/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-info-1.jpg)

![T-SIM7670G-S3 规格参数 2](/products/t-sim-series/t-sim7670g-s3/index/image/t-sim7670g-s3-info-2.jpg)

## 电气参数

| 项目 | 参数 |
| :-- | :-- |
| USB-C 输入电压 | 5 V |
| 太阳能输入电压 | 5 V - 6 V |
| USB-C / 太阳能最大充电电流 | 500 mA |
| 电池电压 | 3.7 V |
| VBUS 排针 | 5 V |
| VBAT 排针 | 4.2 V |

> 板载 JST2.0 接口仅用于太阳能板给电池充电，不能直接为开发板供电。VBUS 与 USB-C 输入同一路，仅作为外部电源输入使用。USB/VBUS 输入需具备至少 2 A 峰值供电能力，且电压不应低于 5 V，否则可能触发低压关机。

### 电池保护

| 项目 | 参数 |
| :-- | :-- |
| 过压保护阈值 | 4.30 V |
| 欠压保护阈值 | 2.5 V |
| 过放电流 | 3 A |
| 保护芯片 | DW01V |

> USB 与电池供电切换时，开发板可能复位重启；该板没有无缝电源切换方案，属于正常现象。

## 引脚图

### SIM7670G UART

| 信号 | GPIO |
| :--: | :--: |
| UART TX（发往 SIM7670G） | 17 |
| UART RX（来自 SIM7670G） | 18 |
| PWR KEY | 9 |
| DTR | 10 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [LilyGo-Modem-Series GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/master/hardware)

## 数据手册

- [ESP32-S3 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
- [SIM7670G 硬件设计手册](https://simcom.ee/documents/?dir=SIM767x)

## 软件库

- [LilyGo-Modem-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### 依赖库

- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
- [PubSubClient](https://github.com/knolleary/pubsubclient)
- [ArduinoHttpClient](https://github.com/arduino-libraries/ArduinoHttpClient)

## 常见问题

* **Q. SIM7670G 与 SIM7000G 有何区别？**
  A. SIM7670G 是 LTE Cat-1 模块，数据速率更高（下行最高 10 Mbps），支持语音通话；SIM7000G 是 NB-IoT/LTE Cat-M 模块，专为低功耗、低数据量应用设计。需要更高吞吐量或语音功能时请选择 SIM7670G。

* **Q. T-SIM7670G-S3 支持语音通话吗？**
  A. 支持。SIM7670G 具备语音通话能力。实现完整语音方案还需将音频编解码器及扬声器/麦克风连接到模块的音频引脚。

* **Q. 如何开启 SIM7670G？**
  A. 将 GPIO9（PWR KEY）拉低至少 1 秒后释放，等待模块启动（通常需 5–10 秒）后再发送 AT 指令。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
