---
title: LILYGO T3S3
show_source: false
tags: LoRa, ESP32-S3, OLED, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3s3-v1-0?_pos=1&_psq=T3&_ss=e&_v=1.0" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-s3/assets/t3s3-1.jpg', alt: 'T3S3 正面图' },
  { src: '/products/t3-series/t3-s3/assets/t3s3-2.jpg', alt: 'T3S3 实物图' },
  { src: '/products/t3-series/t3-s3/assets/t3s3-pin.jpg', alt: 'T3S3 引脚图' }
]" />

## 概述

T3S3 (LILYGO T3-S3 V1.2) 是一款集成 ESP32-S3 主控与多频段 LoRa 通信能力的紧凑型开发板。该开发板可选配 SX1262/1276（433/868/915MHz）或 SX1280（2.4GHz）LoRa 模块，支持远距离低功耗通信。板载 0.96 英寸 128×64 OLED 显示屏（SSD1306）及 MicroSD（TF）卡槽，提供数据可视化与存储功能。

通过 Type-C USB 实现供电与程序烧录，并扩展了丰富的接口资源，包括 ADC、UART、PSP 总线等。同时保留 BOOT/RST 按键与标注清晰的 GPIO 引脚，适用于物联网传感网络、环境监测等低功耗场景开发。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [LoRaSender](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa 发送（SX1276/SX1278） |
| [LoRaReceiver](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa 接收（SX1276/SX1278） |
| [RadioLib Examples](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 支持 SX1262/SX1280 |
| [OLED Display](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | OLED 显示示例 |
| [T3S3Factory](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 出厂测试 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展。
2. 从 GitHub 下载 [LilyGo-LoRa-Series 项目代码](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)。
3. 在 VS Code 中打开项目文件夹，在 `platformio.ini` 中取消注释选择所需示例环境。
4. 点击 (✔) 编译，连接设备后点击 (→) 烧录。

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
| Board Revision | **根据实际型号选择** |
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

- ESP32-S3FH4R2：4 MB Flash，2 MB PSRAM，Wi-Fi + 蓝牙 5.0
- LoRa：SX1262/SX1276（433/868/915MHz）或 SX1280（2.4GHz）可选
- 0.96 英寸 SSD1306 OLED（128×64，I2C）
- MicroSD（TF）卡槽（SPI），2 × QWIIC 接口
- 电池接口，板载 LED，BOOT/RST 按键

## 产品参数

<img src="/products/t3-series/t3-s3/assets/t3s3-info.jpg" alt="T3S3 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FH4R2 |
| Flash | 4MB |
| PSRAM | 2MB |
| 屏幕 | 0.96 英寸 SSD1306 OLED (128×64) |
| LoRa | SX1262/SX1276 (433/868/915MHz) / SX1280 (2.4GHz) |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × TYPE-C (USB + OTG) |
| 扩展接口 | LoRa 天线 + 电池接口 + 2 × QWIIC |
| IO 接口 | 2.54mm 2×13 扩展 IO |
| 按键 | RESET + BOOT |
| 固定孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 36 × 14mm |

## 引脚图

<img src="/products/t3-series/t3-s3/assets/t3s3-pin.jpg" alt="T3S3 引脚图" width=100%>

### 引脚映射（SX1262）

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| QWIIC Uart1 TX | 43 | ✅ |
| QWIIC Uart1 RX | 44 | ✅ |
| QWIIC IO10 | 10 | ✅ |
| QWIIC IO21 | 21 | ✅ |
| SDA | 18 | ❌ |
| SCL | 17 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 11 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 3 | ❌ |
| LoRa MOSI | 6 | ❌ |
| LoRa RST | 8 | ❌ |
| LoRa DIO1 | 33 | ❌ |
| LoRa BUSY | 34 | ❌ |
| LoRa CS | 7 | ❌ |
| BOOT 按键 | 0 | ❌ |
| 电池 ADC | 1 | ❌ |
| 板载 LED | 37 | ❌ |

### 引脚映射（SX1276/SX1278）

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| QWIIC Uart1 TX | 43 | ✅ |
| QWIIC Uart1 RX | 44 | ✅ |
| QWIIC IO10* | 10 | ✅ |
| QWIIC IO21* | 21 | ✅ |
| SDA | 18 | ❌ |
| SCL | 17 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 11 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 3 | ❌ |
| LoRa MOSI | 6 | ❌ |
| LoRa RST | 8 | ❌ |
| LoRa DIO0 | 9 | ❌ |
| LoRa DIO1 | 33 | ❌ |
| LoRa DIO2 | 34 | ❌ |
| LoRa DIO3 | 21 | ❌ |
| LoRa DIO4 | 10 | ❌ |
| LoRa DIO5 | 36 | ❌ |
| LoRa CS | 7 | ❌ |
| BOOT 按键 | 0 | ❌ |
| 电池 ADC | 1 | ❌ |
| 板载 LED | 37 | ❌ |

> 注意：可通过移除两个电阻来将 GPIO10 和 GPIO21 用作自由 IO，否则默认连接至 LoRa DIO3/DIO4。

### 引脚映射（SX1280）

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| QWIIC Uart1 TX | 43 | ✅ |
| QWIIC Uart1 RX | 44 | ✅ |
| SDA | 18 | ❌ |
| SCL | 17 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 11 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 3 | ❌ |
| LoRa MOSI | 6 | ❌ |
| LoRa RST | 8 | ❌ |
| LoRa DIO1 | 9 | ❌ |
| LoRa BUSY | 36 | ❌ |
| LoRa CS | 7 | ❌ |
| BOOT 按键 | 0 | ❌ |
| 电池 ADC | 1 | ❌ |
| 板载 LED | 37 | ❌ |

## 尺寸图

## 原理图

* [T3S3 V1.3 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_S3_V1.3.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [SSD1306 Datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [U8g2](https://github.com/olikraus/u8g2)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)

## 常见问题

* **Q. 如何选择 LoRa 模块版本？**  
  A. SX1262/SX1276 适用于 Sub-1GHz 频段，通信距离更远；SX1280 适用于 2.4GHz 频段，数据速率更高。

* **Q. OLED 屏幕不显示？**  
  A. 检查屏幕排线连接，确认 I2C 地址配置正确（SSD1306 通常为 0x3C）。

* **Q. SD 卡无法识别？**  
  A. 确保 SD 卡格式正确（FAT32），检查卡片是否插好，尝试不同的 SD 卡。

* **Q. 程序烧录失败？**  
  A. 按住 BOOT 按键再点击 RESET 进入下载模式，确保驱动安装正确。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3S3_V1.2 | — | 初始版本 |
| T3S3_V1.3 | — | 硬件优化更新 |
