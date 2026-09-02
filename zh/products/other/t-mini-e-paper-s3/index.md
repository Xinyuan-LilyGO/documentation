---
title: LILYGO T-Mini E paper S3
show_source: false
tags: ESP32-S3, E-Paper, LoRa, Low Power, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-mini-epaper-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-mini-e-paper-s3/index/image/t-mini-e-paper-s3-1.jpg', alt: 'T-Mini E-Paper S3 正面图' },
  { src: '/products/other/t-mini-e-paper-s3/index/image/t-mini-e-paper-s3-2.jpg', alt: 'T-Mini E-Paper S3 实物图' },
  { src: '/products/other/t-mini-e-paper-s3/index/image/t-mini-e-paper-s3-pin.jpg', alt: 'T-Mini E-Paper S3 引脚图' }
]" />

## 概述

LILYGO T-MINI E-Paper S3 Kit 是一款紧凑型（102×24.5×53mm）多功能开发板，搭载 ESP32-S3FN4R2 双核处理器，集成 1.02 英寸低功耗电子墨水屏（128×80）、SX1262 LoRa 远距离通信模块（868/915/923MHz）和 PCF85063ATL RTC 实时时钟，支持 18350 锂电池供电。板载 TF 卡扩展和丰富 GPIO 接口，支持深度睡眠，适用于远程环境监测节点、低功耗信息显示标签、便携式数据记录器等物联网场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [Extension](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/tree/main/examples/Extension) | ✓ | LoRa 扩展模块、RTC 实时时钟示例 |
| [Meun_Lora_Shield](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/tree/main/examples/Meun_Lora_Shield) | ✓ | 带 Meshtastic 功能模式的菜单示例 |
| [Meun](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/tree/main/examples/Meun) | ✓ | 菜单界面模式示例 |
| [GxEPD_TF_Card_Example](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/tree/main/examples/GxEPD_TF_Card_Example) | ✓ | TF 卡功能示例 |
| [Hello_World_U8G2_Fonts](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/tree/main/examples/Hello_World_U8G2_Fonts) | ✓ | U8G2 字体库使用示例 |
| [GxEPD_Example](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/tree/main/examples/GxEPD_Example) | ✓ | 电子墨水屏、SD 卡及 WiFi 功能测试 |
| [Partial_UpdateTest](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/tree/main/examples/Partial_UpdateTest) | ✓ | 电子墨水屏局部刷新测试 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [LilyGO-Mini-Epaper-S3 项目代码](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

> 推荐使用 PlatformIO，无需繁琐步骤。

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
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
| Partition Scheme | **Default 4MB with spiffs (1.5MB APP/1.5MB SPIFFS)** |
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

- ESP32-S3FN4R2：4MB Flash，2MB QSPI PSRAM，Wi-Fi + 蓝牙 5.0
- 1.02 英寸 E-Paper 电子墨水屏（128×80，SPI）
- SX1262 LoRa（868/915/923MHz）
- PCF85063ATL RTC 实时时钟，TF 卡扩展
- 18350 锂电池供电，支持深度睡眠

## 产品参数

<img src="/products/other/t-mini-e-paper-s3/index/image/t-mini-e-paper-s3-info.jpg" alt="T-Mini E-Paper S3 概述图" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN4R2 Dual-core LX7 |
| Flash | 4MB |
| PSRAM | 2MB (QSPI) |
| 屏幕 | 1.02 英寸 E-Paper (128×80) |
| LoRa | SX1262 (868/915/923MHz) |
| RTC | PCF85063ATL |
| 存储 | TF 卡扩展 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5 (LE) |
| USB | 1 × USB Type-C |
| 扩展接口 | 1 × LoRa 天线接口 + 1 × QWIIC |
| 按键 | RESET + BOOT |
| 电池 | 18350 3.7V 锂电池 |
| 安装孔 | M1 × 4 |
| 尺寸 | 102 × 24.5 × 53mm |

## 引脚图

<img src="/products/other/t-mini-e-paper-s3/index/image/t-mini-e-paper-s3-pin.jpg" alt="T-Mini E-Paper S3 引脚图" width=100%>

### 引脚映射

| GPIO | LoRa | TF 卡 | EPD (SPI) | RTC | 按键 | USB |
| :--: | :--: | :---: | :-------: | :--: | :--: | :--: |
| IO0 | | | | | Button_BOOT | |
| IO3 | | | | | Button_RIGHT | |
| IO4 | | | | | Button_LEFT | |
| IO5 | Lora_DIO1 | | | | | |
| IO6 | Lora_MISO | | | | | |
| IO8 | Lora_SCK | | | | | |
| IO9 | | | | RTC_SCL | | |
| IO10 | | | EPD_BUSY | | | |
| IO11 | | | EPD_RST | | | |
| IO13 | | | EPD_CS | | | |
| IO14 | | | EPD_SCLK | | | |
| IO15 | | | EPD_MOSI | | | |
| IO16 | Lora_BUSY | | | | | |
| IO17 | Lora_MOSI | | | | | |
| IO18 | | | | RTC_SDA | | |
| IO19 | | | | | | USB_N |
| IO20 | | | | | | USB_P |
| IO21 | Lora_RST | | | | | |
| IO38 | | TF_MISO | | | | |
| IO39 | | TF_MOSI | | | | |
| IO40 | | TF_CS | | | | |
| IO41 | | TF_SCK | | | | |
| IO42 | | | EPD_EN | | | |

## 尺寸图

## 原理图

* [T-Mini-E-paper-S3 V1.2 原理图](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/schematic/Mini-Epaper-S3-V1.2.pdf)
* [LoRa Shield 原理图](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/schematic/Mini%20e-paper-LoRa%20Shield_Schematic.pdf)

## 数据手册

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)
* [PCF85063ATL Datasheet](/datasheet/PCF85063A.pdf)

## 软件开发

* [LilyGO-Mini-Epaper-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3)

### 依赖库

* [GxEPD](https://github.com/bot1131357/GxEPD)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [Adafruit_GFX_Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [PCF8563_Library](https://github.com/lewisxhe/PCF8563_Library)
* [AceButton](https://github.com/bxparks/AceButton)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [ArduinoJson](https://github.com/bblanchon/ArduinoJson)
* [BMA423](https://github.com/wasp-os/BMA423-Sensor-API)
* [QMC5883LCompass](https://github.com/mprograms/QMC5883LCompass)

## 常见问题

* **Q. 如何进入下载模式？**  
  A. 长按 BOOT 键不松开，同时按下 RST 键，松开 RST 键，再松开 BOOT 键，即可进入下载模式。

* **Q. 如何启用 USB 串口打印？**  
  A. T-Mini-E-Paper-S3 使用 USB 作为 JTAG 上传端口。如需通过 USB 打印串口信息，需开启 `USB_CDC_ON_BOOT` 配置。

* **Q. 烧录失败或 USB 设备持续闪烁怎么办？**  
  A. 可尝试烧录 [固件文件](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/firmware/README.MD) 以检测硬件是否正常。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Mini-E-paper-S3_V1.0 | 2023-11-10 | 初始硬件版本 |
| T-Mini-E-paper-S3_V1.2 | 2024-01-15 | 硬件优化更新 |
