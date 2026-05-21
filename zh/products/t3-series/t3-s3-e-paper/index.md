---
title: LILYGO T3-S3 E-paper
show_source: false
tags: ESP32-S3, E-Paper, LoRa, Low Power, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/ts-s3-epaper" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3-e-paper/assets/t3-s3-e-paper-1.jpg', alt: 'T3-S3 E-Paper 正面图' },
  { src: '/products/t3-series/t3-s3-e-paper/assets/t3-s3-e-paper-2.jpg', alt: 'T3-S3 E-Paper 实物图' },
  { src: '/products/t3-series/t3-s3-e-paper/assets/t3-s3-e-paper-zh.jpg', alt: 'T3-S3 E-Paper 引脚图' }
]" />

## 概述

T3-S3 E-Paper 是一款基于 ESP32-S3FH4R2 的低功耗物联网开发板，集成 2.4GHz Wi-Fi 和蓝牙 5.0，支持多种 LoRa 射频模块（SX1280/SX1276/SX1262），覆盖 2.4GHz 及 868/915MHz 频段。核心搭载 2.13 英寸电子墨水屏（DEPG0213BN，250×122），屏幕无需供电可保持显示，适合信息静态展示需求。支持 USB Type-C 或 3.7V 锂电池双供电，TF 卡扩展，STEMMA QT/QWIIC 接口，适用于智慧农业、工业传感、智能仓储等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [E-Paper_Display](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/tree/master/examples/Display) | ✓ | | 电子墨水屏显示示例 |
| [LoRa_Communication](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/tree/master/examples/RadioLibExamples) | ✓ | | LoRa 通信示例 |
| [SD_Card](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/tree/master/examples/SD) | ✓ | | SD 卡读写示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [Lilygo-LoRa-Epaper-series 项目代码](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `libraries` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

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
| Flash Size | **4MB (32Mb)** |
| Core Debug Level | None |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3FH4R2：4MB Flash，2MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 2.13 英寸 DEPG0213BN E-Paper（250×122，SPI）
- 支持 SX1280 (2.4GHz) / SX1276/SX1262 (868/915MHz) 多种 LoRa 模块
- TF 卡扩展，STEMMA QT/QWIIC 接口
- USB / 3.7V 锂电池双供电，支持深度睡眠

## 产品参数

<img src="/products/t3-series/t3-s3-e-paper/assets/t3-s3-e-paper-info-zh.jpg" alt="T3-S3 E-Paper 概述图" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FH4R2 Dual-core LX7 |
| Flash | 4MB |
| PSRAM | 2MB (OPI PSRAM) |
| 屏幕 | 2.13 英寸 DEPG0213BN E-Paper (250×122) |
| LoRa | SX1280 (2.4GHz) / SX1276/SX1262 (868/915MHz) |
| 存储 | TF 卡扩展 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5 (LE) |
| USB | 1 × USB Type-C |
| 扩展接口 | STEMMA QT/QWIIC + FPC 天线接口 |
| GPIO 接口 | 2.54mm 2×13 扩展 IO |
| 电池接口 | JST-GH 2mm |
| 按键 | RESET + BOOT |
| 安装孔 | 4 × 2mm 定位孔 |
| 尺寸 | 67 × 29 × 15mm |

## 引脚图

<img src="/products/t3-series/t3-s3-e-paper/assets/t3-s3-e-paper-zh.jpg" alt="T3-S3 E-Paper 引脚图" width=100%>

### 引脚映射

```c
#define EDP_BUSY_PIN   48
#define EDP_RSET_PIN   47
#define EDP_DC_PIN     16
#define EDP_CS_PIN     15
#define EDP_CLK_PIN    14   // CLK
#define EDP_MOSI_PIN   11   // MOSI
#define EDP_MISO_PIN   -1

#define RADIO_SCLK_PIN  5
#define RADIO_MISO_PIN  3
#define RADIO_MOSI_PIN  6
#define RADIO_CS_PIN    7
#define RADIO_DIO1_PIN  33
#define RADIO_BUSY_PIN  34
#define RADIO_RST_PIN   8
#define RADIO_POW_PIN   35

// SX1276/78 module only
#define RADIO_DIO0_PIN  9
#define RADIO_DIO3_PIN  21
#define RADIO_DIO4_PIN  10
#define RADIO_DIO5_PIN  36

#define SDCARD_MOSI    EDP_MOSI_PIN
#define SDCARD_SCLK    EDP_CLK_PIN
#define SDCARD_MISO    2
#define SDCARD_CS      13

#define BOARD_LED      37
#define BAT_ADC_PIN    1
#define BUTTON_PIN     0
```

## 尺寸图

## 原理图

* [T3-S3-E-paper V1.0 原理图](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/blob/master/schematic/T3S3_E-paper%20V1.0%2023-12-16.pdf)

## 数据手册

* [DEPG0213BN Datasheet](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/blob/master/datasheet/DEPG0213BN.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)
* [SX1276 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)
* [SX1280 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1280)

## 软件开发

* [Lilygo-LoRa-Epaper-series GitHub 仓库](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series)

### 依赖库

* [GxEPD](https://github.com/bot1131357/GxEPD)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)

## 常见问题

* **Q. 如何调节外接天线电阻？**  
  A. 参考下图调整电阻方向：  
  <img src="/products/t3-series/t3-s3-e-paper/assets/t3-s3-e-paper-3.jpg" alt="天线电阻调节" width=60%>

* **Q. 电子墨水屏刷新率为什么比较慢？**  
  A. 这是电子墨水屏的特性，全屏刷新需要 2~3 秒，局部刷新约 0.3~0.5 秒，但刷新后无需供电可保持显示，适合静态信息展示。

* **Q. 支持哪些 LoRa 模块？**  
  A. 支持 SX1280（2.4GHz）、SX1276/SX1262（868/915MHz）多种 LoRa 模块。

* **Q. 为什么板子烧录失败？**  
  A. 请按住 "BOOT" 按键同时按 "RST" 按键，释放 "RST" 后进入下载模式重新烧录。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3-S3-E-paper_V1.0 | 2023-12-16 | 初始硬件版本 |
| T3-S3-E-paper_V1.1 | 2024-03-10 | 软件优化更新 |
