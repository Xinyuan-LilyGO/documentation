---
title: LILYGO T-Display S3 AMOLED 1.43
show_source: false
tags: AMOLED, Display, ESP32-S3
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44507650556085" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-amoled-1.43/index/image/t-display-s3-amoled-1.43-1.jpg', alt: 'T-Display S3 AMOLED 1.43 正面图' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.43/index/image/t-display-s3-amoled-1.43-2.jpg', alt: 'T-Display S3 AMOLED 1.43 实物图' },
  { src: '/products/t-display-series/t-display-s3-amoled-1.43/index/image/t-display-s3-amoled-1.43-zh.jpg', alt: 'T-Display S3 AMOLED 1.43 引脚图' }
]" />

## 概述

T-Display-S3-AMOLED-1.43 是一款集成 ESP32-S3 高性能 Wi-Fi/蓝牙双模芯片的智能显示开发板，专为物联网与交互应用设计。核心搭载 1.43 英寸 AMOLED 圆形显示屏（466×466 像素），支持触控操作并内置 PCF8563 实时时钟（RTC）。硬件配置包括 16MB Flash、8MB Octal SPI PSRAM，支持 MicroSD 卡扩展存储，同时集成电池电量检测（ADC）功能与 Type-C 供电接口。适用于智能穿戴、工业控制、嵌入式 GUI 开发等场景。

> 该芯片在未接电池 5V 供电时输出波形将非常不稳定，需要连接电池使用或者软件关闭电池通道。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Original Test](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test) | ✓ | | DO0143 出厂测试 |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX) | ✓ | | GFX 图形库示例 |
| [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/FT3168) | ✓ | | 触摸示例 |
| [SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970) | ✓ | | 电源管理示例 |
| [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563) | ✓ | | RTC 示例 |
| [Light Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up) | ✓ | | 轻睡眠唤醒 |
| [Deep Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up) | ✓ | | 深度睡眠唤醒 |
| [SD](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SD) | ✓ | | SD 卡读写 |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/iic_scan) | | ✓ | I2C 设备扫描 |
| [screen_touch_lvgl_9](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/screen_touch_lvgl_9) | | ✓ | LVGL 触摸示例 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Display-S3-AMOLED-1.43-1.75 项目代码](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将项目 `libraries` 目录中的所有库复制到 Arduino 库目录。
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
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
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

- ESP32-S3R8：16 MB Flash，8 MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 1.43 英寸 SH8601 AMOLED 圆屏（466×466），FT3168 电容触摸（QSPI）
- SY6970 电源管理，PCF8563 实时时钟
- TF 卡扩展，QWIIC 接口，RESET + BOOT 按键

## 产品参数

<img src="/products/t-display-series/t-display-s3-amoled-1.43/index/image/t-display-s3-amoled-1.43-info-zh.jpg" alt="T-Display S3 AMOLED 1.43 概述图" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 1.43 英寸 SH8601 AMOLED (466×466) |
| 触摸 | FT3168 电容触摸 (QSPI) |
| 充电芯片 | SY6970 |
| RTC | PCF8563 |
| 存储 | TF 卡 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB OTG (Type-C) |
| IO 接口 | 2 × 2.54mm 2×7 扩展 IO |
| 扩展接口 | 1 × QWIIC + JST-GH 1.25mm + 电池座 |
| 按键 | RESET + BOOT |
| 尺寸 | 45×45×11mm |

## 引脚图

<img src="/products/t-display-series/t-display-s3-amoled-1.43/index/image/t-display-s3-amoled-1.43-zh.jpg" alt="T-Display S3 AMOLED 1.43 引脚图" width=100%>

### 引脚映射

| AMOLED 屏幕 | GPIO |
| :--: | :--: |
| SDIO0 | IO11 |
| SDIO1 | IO13 |
| SDIO2 | IO14 |
| SDIO3 | IO15 |
| SCLK | IO12 |
| CS | IO10 |
| RST | IO17 |
| EN | IO16 |

| 触摸芯片 (FT3168) | GPIO |
| :--: | :--: |
| INT | IO9 |
| SDA | IO7 |
| SCL | IO6 |

| SD 卡 | GPIO |
| :--: | :--: |
| CS | IO4 |
| MOSI | IO39 |
| MISO | IO40 |
| SCLK | IO41 |

| 其他 | GPIO |
| :--: | :--: |
| 电池电压 ADC | IO4 |

## 尺寸图

## 原理图

* [T-Display-S3-AMOLED-1.43-1.75 V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/project/T-Display-S3-AMOLED-1.43-1.75_V1.0.pdf)

## 数据手册

* [SH8601 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SH8601Z.pdf)
* [PCF8563 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/PCF8563.pdf)
* [SY6970 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/AN_SY6970.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [T-Display-S3-AMOLED-1.43-1.75 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75)

### 依赖库

* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [LVGL](https://lvgl.io)
* [JPEGDEC](https://github.com/bitbank2/JPEGDEC)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. Arduino IDE 提示升级库文件，应该升级吗？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

* **Q. UART 接口没有输出数据？**  
  A. 默认配置将 USB 接口作为 UART0 调试输出。如需使用外部 UART 接口，请在 Arduino IDE "工具" 中将 USB CDC On Boot 设置为 Disabled。

* **Q. 板子一直烧录失败？**  
  A. 请按住 "BOOT-0" 按键重新下载程序。

## 功耗测试

| 程序 | 功耗 |
| :-- | :-- |
| Light_Sleep_Wake_Up | 1282.8µA |
| Deep_Sleep_Wake_Up | 174.2µA |

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-AMOLED-1.43_V1.0 | 2024-05-20 | 初始版本 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2024-11-25 | 新增排线、新增 H0175Y003AM 屏幕适配 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2025-01-13 | 新增 DO0143FMST10 屏幕适配 |
