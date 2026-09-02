---
title: LILYGO T3-S3 LR1121
show_source: false
tags: ESP32-S3, LR1121, LoRa, Dual-Band, OLED, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3-s3-lr1121" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3-lr1121/index/image/t3-s3-lr1121-1.jpg', alt: 'T3-S3 LR1121 正面图' },
  { src: '/products/t3-series/t3-s3-lr1121/index/image/t3-s3-lr1121-2.jpg', alt: 'T3-S3 LR1121 实物图' },
  { src: '/products/t3-series/t3-s3-lr1121/index/image/t3-s3-lr1121-3.jpg', alt: 'T3-S3 LR1121 引脚图' }
]" />

## 概述

LILYGO T3-S3 LR1121 是一款基于 ESP32-S3 的高集成物联网开发板，支持 LR1121 双频段 LoRa 通信（Sub-GHz 400~945MHz + 2.4GHz），理想条件下通信距离可达 10km+，覆盖全球不同地区频谱规范。板载 1.3 英寸 OLED 屏实时显示数据，配备 TF 卡槽、PCF85063ATL RTC 和 QWIIC 接口，结合 Wi-Fi/蓝牙 5.0 实现多协议互联，适用于智慧农业监测、工业设备管理、应急通信组网等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [LR1121_PingPong](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/LoRa/T3S3/LR1121_PingPong) | ✓ | | LR1121 通信示例 |
| [OLED](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/OLED) | ✓ | | OLED 显示示例 |
| [PCF8563_SimpleTime](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/Sensor/PCF8563_SimpleTime) | ✓ | | 实时时钟示例 |
| [SD_Test](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/SD/SD_Test) | ✓ | | SD 卡读写示例 |

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
| Board | **LilyGo T3-S3** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Core Debug Level | None |
| Partition Scheme | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **QSPI PSRAM** |
| **Board Revision** | **Radio-LR1121** |
| Upload Mode | **UART0/Hardware CDC** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3FH4R2：4MB Flash，2MB QSPI PSRAM，Wi-Fi + 蓝牙 5.0
- LR1121 双频段 LoRa（400~945MHz + 2.4GHz），通信距离 10km+
- 1.3 英寸 I2C OLED，PCF85063ATL RTC
- TF 卡扩展，2 × QWIIC 接口，太阳能输入（V1.3）
- 1.25mm 电池接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FH4R2 Dual-core LX7 |
| Flash | 4MB |
| PSRAM | 2MB (QSPI) |
| 屏幕 | 1.3 英寸 I2C OLED |
| LoRa | LR1121（400~945MHz + 2.4GHz） |
| RTC | PCF85063ATL (I2C) |
| 存储 | TF 卡扩展 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB Type-C |
| 扩展接口 | 2 × QWIIC |
| GPIO | 2.54mm 2×20 扩展 IO |
| 电池接口 | 1.25mm |
| 按键 | RESET + BOOT |
| 电源输入 | 5V/500mA |
| 安装孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 27 × 15mm |

### RF 参数

| 参数 | 规格 |
| :-- | :-- |
| RF 模块 | LR1121 |
| 频率范围 | 400~520MHz / 830~945MHz / 2400~2500MHz |
| 速率（LoRa Sub-1G） | 0.018K~62.5Kbps |
| 速率（FSK Sub-1G） | 0.6K~300Kbps |
| 速率（LoRa 2.4G） | 0.476K~101.5Kbps |
| 调制方式 | LoRa, FSK, LR-FHSS |

## 引脚图

<img src="/products/t3-series/t3-s3-lr1121/index/image/t3-s3-lr1121-3.jpg" alt="T3-S3 LR1121 引脚图" width=100%>

### 引脚映射

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| (QWIIC) UART1 TX | 43 | ✅ |
| (QWIIC) UART1 RX | 44 | ✅ |
| QWIIC IO10 | 10 | ✅ |
| QWIIC IO21 | 21 | ✅ |
| I2C SDA | 18 | ❌ |
| I2C SCL | 17 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 11 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa (LR1121) SCK | 5 | ❌ |
| LoRa (LR1121) MISO | 3 | ❌ |
| LoRa (LR1121) MOSI | 6 | ❌ |
| LoRa (LR1121) RESET | 8 | ❌ |
| LoRa (LR1121) DIO9 | 36 | ❌ |
| LoRa (LR1121) BUSY | 34 | ❌ |
| LoRa (LR1121) CS | 7 | ❌ |
| BOOT 按键 | 0 | ❌ |
| Battery ADC | 1 | ❌ |
| 板载 LED | 37 | ❌ |

## 尺寸图

## 原理图

* [T3-S3-LR1121 V1.3 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_S3_V1.3.pdf)

## 数据手册

* [LR1121 Datasheet](https://www.semtech.com/products/wireless-rf/lora-connect/lr1121)
* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
* [PCF85063ATL Datasheet](/datasheet/PCF85063A.pdf)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [u8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [arduino-LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [RadioLib](https://github.com/jgromes/RadioLib)

## 常见问题

* **Q. 如何调节外接天线电阻？**  
  A. 参考下图调整电阻方向：  
  <img src="/products/t3-series/t3-s3-lr1121/index/image/t3-s3-lr1121-4.jpg" alt="天线电阻调节" width=60%>

* **Q. LR1121 相比传统 LoRa 芯片有什么优势？**  
  A. LR1121 支持双频段（Sub-GHz + 2.4GHz），提供更大的部署灵活性和更好的抗干扰能力。

* **Q. 双频段可以同时工作吗？**  
  A. LR1121 支持频段切换，但不能同时在不同频段收发数据。

* **Q. 为什么板子烧录失败？**  
  A. 请按住 "BOOT" 按键同时按 "RST" 按键，释放 "RST" 后进入下载模式重新烧录。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3-S3-LR1121_V1.3 | 2024-03-25 | 初始硬件版本 |
| T3-S3-LR1121_V1.4 | 2024-06-18 | 软件优化更新 |
