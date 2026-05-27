---
title: LILYGO T3-S3 MVSR Board
show_source: false
tags: ESP32-S3, LoRa, Audio, Voice, Vibration, RTC
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3-s3-mvsr-board" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard01.jpg', alt: 'T3-S3 MVSR Board 正面图' },
  { src: '/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard02.jpg', alt: 'T3-S3 MVSR Board 实物图' },
  { src: '/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard.jpg', alt: 'T3-S3 MVSR Board 引脚图' }
]" />

## 概述

T3-S3 MVSR 版本是基于 T3-S3 主板设计了带有震动马达、麦克风、扬声器、RTC 功能扩展模块的版本，主要应用于 LoRa 语音收发功能。该扩展版本目前支持 T3S3 的 SX1262 和 SX1280 两个型号主板：SX1262 版本使用 FSK 制式，SX1280 使用 LoRa 制式。此外，该扩展版本还可用于 AI 语音交互功能或 MP3 播放等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_ReadData) | ✓ | | 麦克风数据读取 |
| [DMIC_SD](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_SD) | ✓ | | 麦克风录音存储 |
| [SD_Music](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SD_Music) | ✓ | | SD 卡音乐播放 |
| [SX126x_Walkie_Talkie](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_Walkie_Talkie) | ✓ | | LoRa 语音对讲 |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_PingPong) | ✓ | | SX126x 收发测试 |
| [SX128x_PingPong_2](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX128x_PingPong_2) | ✓ | | SX128x 收发测试 |
| [PCF85063](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063) | ✓ | | RTC 功能示例 |
| [Vibration_Motor](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Vibration_Motor) | ✓ | | 振动马达控制 |
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Sleep_Wake_Up) | ✓ | | 低功耗睡眠唤醒 |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Original_Test) | ✓ | | 出厂程序 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T3-S3-MVSRBoard 项目代码](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将项目 `libraries` 目录中的所有库复制到 Arduino 库目录。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **4MB (32Mb)** |
| Core Debug Level | None |
| Partition Scheme | Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS) |
| PSRAM | **QSPI PSRAM** |
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

- ESP32-S3FH4R2：4 MB Flash，2 MB PSRAM，Wi-Fi + 蓝牙 5.0
- MAX98357A I2S 音频功放 + MP34DT05-A PDM 麦克风（V1.1）
- LoRa：SX1262（868/915MHz，FSK）/ SX1280（2.4GHz，LoRa）可选
- PCF85063ATL 实时时钟（I2C），振动马达触觉反馈
- TF 卡扩展，RESET + BOOT 按键
- 静态电流低至 2.77µA（深度睡眠模式）

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FH4R2 Dual-core LX7 |
| Flash | 4MB |
| PSRAM | 2MB |
| 音频输入 | MP34DT05-A PDM 麦克风（V1.1）/ MSM261S4030H0R（V1.0） |
| 音频输出 | MAX98357A I2S 扬声器 |
| LoRa | SX1262 (868/915MHz) / SX1280 (2.4GHz) |
| RTC | PCF85063ATL 实时时钟 (I2C) |
| 振动 | 触觉振动马达 |
| 存储 | TF 卡扩展 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB Type-C |
| IO 接口 | 2.54mm 2×20 扩展 IO |
| 按键 | RESET + BOOT |
| 安装孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 27 × 15mm |

## 引脚图

<img src="/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard.jpg" alt="T3-S3 MVSR Board 引脚图" width=100%>

### 扬声器引脚映射

| 名称 | GPIO |
| :--: | :--: |
| BCLK | IO40 |
| LRCLK | IO41 |
| DATA | IO39 |
| SD_MODE | IO38 |

### 振动马达引脚映射

| 名称 | GPIO |
| :--: | :--: |
| DATA | IO46 |

### RTC 引脚映射

| 名称 | GPIO |
| :--: | :--: |
| SDA | IO42 |
| SCL | IO45 |
| INT | IO16 |

### LoRa 引脚映射（SX126x）

| 名称 | GPIO |
| :--: | :--: |
| CS | IO7 |
| RST | IO8 |
| SCLK | IO5 |
| MOSI | IO6 |
| MISO | IO3 |
| DIO1 | IO33 |
| BUSY | IO34 |

### LoRa 引脚映射（SX127x）

| 名称 | GPIO |
| :--: | :--: |
| CS | IO7 |
| RST | IO8 |
| SCLK | IO5 |
| MOSI | IO6 |
| MISO | IO3 |
| DIO0 | IO9 |
| DIO1 | IO33 |
| DIO2 | IO34 |
| DIO3 | IO21 |
| DIO4 | IO10 |
| DIO5 | IO36 |

### LoRa 引脚映射（SX128x）

| 名称 | GPIO |
| :--: | :--: |
| CS | IO7 |
| RST | IO8 |
| SCLK | IO5 |
| MOSI | IO6 |
| MISO | IO3 |
| DIO1 | IO9 |
| BUSY | IO36 |
| TX | IO10 |
| RX | IO21 |

### 麦克风引脚映射（V1.0 MSM261S4030H0R）

| 名称 | GPIO |
| :--: | :--: |
| BCLK | IO47 |
| WS | IO15 |
| DATA | IO48 |
| EN | IO35 |

### 麦克风引脚映射（V1.1 MP34DT05-A）

| 名称 | GPIO |
| :--: | :--: |
| LRCLK | IO15 |
| DATA | IO48 |
| EN | IO35 |

## 尺寸图

## 原理图

* [T3-S3-MVSRBoard V1.0 原理图](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/project/T3-S3-MVSRBoard_V1.0.pdf)

## 数据手册

* [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MAX98357AETE+T.pdf)
* [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/mp34dt05-a.pdf)
* [PCF85063ATL Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/PCF85063ATL-1,118.pdf)
* [MSM261S4030H0R Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MEMSensing-MSM261S4030H0R.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [T3-S3-MVSRBoard GitHub 仓库](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard)

### 依赖库

* [Arduino_DriveBus](https://github.com/Xk-w/Arduino_DriveBus)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [ESP8266Audio](https://github.com/earlephilhower/ESP8266Audio)

## 常见问题

* **Q. 如何调节外接天线电阻？**  
  A. 参考下图箭头指向处可更换电阻实现调整外接天线的电阻：
  <img src="/products/t3-series/t3-s3-mvsr/index/image/t3-s3_mvsrboard04.jpg" alt="天线电阻调节" width=60%>

* **Q. SX1262 和 SX1280 版本有什么区别？**  
  A. SX1262 支持 868/915MHz 频段，使用 FSK 调制；SX1280 支持 2.4GHz 频段，使用 LoRa 调制。

* **Q. V1.0 和 V1.1 的麦克风有何不同？**  
  A. V1.0 使用 MSM261S4030H0R（I2S 接口），V1.1 更换为 MP34DT05-A（PDM 接口），音频性能更优。

* **Q. 支持哪些音频格式？**  
  A. 支持 WAV、MP3 等常见音频格式，可通过软件解码库扩展支持。

* **Q. LoRa 语音通信距离是多少？**  
  A. 在理想条件下，语音通信距离可达数公里，具体取决于环境因素和天线配置。

## 功耗测试

深度睡眠模式静态电流：**2.77µA**（[详细测试日志](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/relevant_test/PowerConsumptionTestLog_[T3-S3-MVSRBoard_V1.0]_20241104.pdf)）

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3-S3-MVSRBoard_V1.0 | 2024-11-06 | 初始版本 |
| T3-S3-MVSRBoard_V1.1 | 2025-03-18 | 更换麦克风型号（MSM261→MP34DT05-A） |
