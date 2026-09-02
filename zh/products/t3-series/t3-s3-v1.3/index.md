---
title: T3-S3 V1.3
show_source: false
tags: ESP32-S3, LoRa, SX1262, SX1280, OLED, Meshtastic, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3-s3-v1-3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-1.jpg', alt: 'T3-S3 V1.3 正面图' },
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-2.jpg', alt: 'T3-S3 V1.3 背面图' },
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-3.jpg', alt: 'T3-S3 V1.3 尺寸图' },
  { src: '/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-info.jpg', alt: 'T3-S3 V1.3 规格参数' },
]" />

## 概述

LILYGO T3-S3 V1.3 是 T3-S3 的更新版本，基于 **ESP32-S3FH4R2** 双核 LX7 主控，支持多频段 LoRa 通信。可选配 **SX1262/SX1276/SX1278**（433/868/915 MHz）或 **SX1280**（2.4 GHz）LoRa 模块，实现远距离低功耗通信。板载 **0.96 英寸 SSD1306 OLED**（128×64）、MicroSD 卡槽和 USB-C 接口。相比 V1.2，V1.3 进行了硬件优化和布局改进，完全支持 Meshtastic 固件。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa、OLED、SD 卡、LoRaWAN 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-LoRa-Series` 项目文件夹
4. 打开 `platformio.ini`，在 `default_envs` 下取消注释对应开发板名称
5. 点击 **✓** 编译，连接 USB-C 后点击 **→** 烧录

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中进行如下配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **LilyGo T3-S3** |
| USB CDC On Boot | Enable |
| Flash Size | **4MB** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **QSPI PSRAM** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

> 若上传失败：按住 **BOOT**，按下并释放 **RST**，再点击上传。

## 主要特性

- ESP32-S3FH4R2 双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- SX1262 / SX1276 / SX1278（433/868/915 MHz）或 SX1280（2.4 GHz）LoRa
- 0.96 英寸 SSD1306 OLED（128×64，I2C）
- 4 MB Flash + 2 MB PSRAM + TF 卡槽
- USB-C 供电，支持 3.7 V 锂聚合物电池
- 2 × QWIIC，2×13 GPIO 扩展接口
- 兼容 Meshtastic

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3FH4R2，双核 LX7 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 2 MB |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n，蓝牙 5.0 |
| LoRa | SX1262 / SX1276 / SX1278 或 SX1280 |
| 显示屏 | 0.96 英寸 SSD1306 OLED，128×64 |
| 存储 | TF 卡槽 |
| USB | 1 × USB-C |
| 尺寸 | 66 × 36 × 14 mm |

![T3-S3 V1.3 规格参数](/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-info.jpg)

## 引脚图

### SX1262 引脚映射

| 信号 | GPIO | 可用 |
| :----- | :--: | :---: |
| QWIIC Uart1 TX | 43 | ✅ |
| QWIIC Uart1 RX | 44 | ✅ |
| I2C SDA | 18 | ❌ |
| I2C SCL | 17 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 3 | ❌ |
| LoRa MOSI | 6 | ❌ |
| LoRa RESET | 8 | ❌ |
| LoRa DIO1 | 33 | ❌ |
| LoRa BUSY | 34 | ❌ |
| LoRa CS | 7 | ❌ |
| SD CS | 13 | ❌ |
| 板载 LED | 37 | ❌ |

### 对比图

![T3-S3 V1.3 对比图](/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-contrast.jpg)

### 引脚图

![T3-S3 V1.3 引脚图](/products/t3-series/t3-s3-v1.3/index/image/t3-s3-v1.3-pinout.jpg)

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [T3-S3 V1.3 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_S3_V1.3.pdf)

## 数据手册

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [U8g2](https://github.com/olikraus/u8g2)

## 常见问题

* **Q. 如何选择 LoRa 模块版本？**  A. SX1262/SX1276 适用于 Sub-1 GHz 频段，通信距离更远；SX1280 适用于 2.4 GHz 频段，数据速率更高。
* **Q. 烧录失败？**  A. 按住 **BOOT**，按下并释放 **RST**，再点击上传。

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| T3-S3 V1.2 | — | 初始版本 |
| T3-S3 V1.3 | — | 硬件优化更新 |
