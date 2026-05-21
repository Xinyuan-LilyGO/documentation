---
title: LILYGO T-Display Bar
show_source: false
tags: ESP32-S3, Display, IPS, BHI260AP, Touch Screen
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-bar" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-bar/assets/t-display-bar-1.jpg', alt: 'T-Display Bar 正面图' },
  { src: '/products/t-display-series/t-display-bar/assets/t-display-bar-2.jpg', alt: 'T-Display Bar 实物图' },
  { src: '/products/t-display-series/t-display-bar/assets/t-display-bar-pin.jpg', alt: 'T-Display Bar 引脚图' }
]" />

## 概述

LILYGO T-Display Bar 是一款基于 ESP32-S3R8 的高集成嵌入式智能显示模组，搭载 2.25 英寸 ST7789 IPS LCD（76×284px）和 CST816 电容触摸，内置 BHI260AP AI 传感器（六轴 IMU）、有源蜂鸣器、TF 卡及 QWIIC 扩展接口，支持 Wi-Fi 和蓝牙 5.0。紧凑型结构（69×23×15mm）适合工业仪表、信息展示和便携设备应用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/Factory) | ✓ | 出厂测试（含天气桌面、蓝牙鼠标） |
| [TFT_ESPI_Example](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/TFT_ESPI_Example) | ✓ | TFT_eSPI 库适配示例 |
| [LVGL_Example](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/LVGL_Example) | ✓ | LVGL 图形界面示例 |
| [WIFI_Config](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/WIFI_Config) | ✓ | Wi-Fi 配置示例 |
| [BHI260AP](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/BHI260AP) | ✓ | 六轴 IMU 传感器示例 |
| [BHI260AP_StepCounter](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/BHI260AP_StepCounter) | ✓ | 步数计数示例 |
| [BQ27220](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/BQ27220) | ✓ | 电量监测示例 |
| [BQ25896](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/BQ25896) | ✓ | 电源管理芯片示例 |
| [RTC](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/RTC) | ✓ | PCF8563 实时时钟示例 |
| [SD_Card](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/SD_Card) | ✓ | SD 卡读写示例 |
| [Sleep_Mode](https://github.com/Xinyuan-LilyGO/T-Display-Bar/tree/master/examples/Sleep_Mode) | ✓ | ESP32-S3 睡眠模式示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Display-Bar 项目代码](https://github.com/Xinyuan-LilyGO/T-Display-Bar)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `libraries` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **8M with spiffs (3MB APP/1.5MB SPIFFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3R8：16MB Flash，8MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 2.25 英寸 ST7789 IPS LCD（76×284px），CST816 电容触摸
- BHI260AP AI 传感器（六轴 IMU：加速度计 + 陀螺仪）
- 有源蜂鸣器，TF 卡扩展，2 × QWIIC 接口
- 紧凑尺寸（69×23×15mm）

## 产品参数

<img src="/products/t-display-series/t-display-bar/assets/t-display-bar-info.jpg" alt="T-Display Bar 概述图" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB (OPI PSRAM) |
| 屏幕 | 2.25 英寸 ST7789 IPS LCD (76×284px) |
| 触摸 | CST816 电容触摸 |
| 传感器 | BHI260AP AI 传感器（六轴 IMU） |
| 存储 | TF 卡 |
| 蜂鸣器 | 有源蜂鸣器 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 (LE) |
| USB | 1 × USB Type-C (OTG) |
| IO 接口 | 2.54mm 间距 13pin 接口 |
| 扩展接口 | 2 × QWIIC + 1 × 电池座 |
| 按键 | RESET + BOOT + IO38 + Sleep |
| 尺寸 | 69×23×15mm |

## 引脚图

<img src="/products/t-display-series/t-display-bar/assets/t-display-bar-pin.jpg" alt="T-Display Bar 引脚图" width=100%>

### 引脚映射

| GPIO | 功能 |
| :--: | :-- |
| IO2 / IO3 | I2C SDA |
| IO12 / IO13 / IO14 | SPI MOSI / MISO / SCK |
| IO6 / IO7 | TFT MOSI / SCLK |
| IO8 / IO5 / IO40 / IO15 | TFT CS / DC / RST / BL |
| IO16 / IO17 / IO18 | BHI260AP EN / RST / IRQ |
| IO11 | SD CS |
| IO9 | 蜂鸣器 |
| IO21 / IO1 | 触摸 IRQ / RST |
| IO38 / IO0 | 按键 1 / 按键 2 (BOOT) |
| IO19 / IO20 | USB D- / D+ |
| IO43 / IO44 | UART TX / RX |

## 尺寸图

## 原理图

* [T-Display-Bar V1.1 原理图](https://github.com/Xinyuan-LilyGO/T-Display-Bar/blob/master/hardware/H764%20T-Display%20Bar_V1.1.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [BHI260AP Datasheet](https://www.bosch-sensortec.com/products/smart-sensor-systems/bhi260ap/)

## 软件开发

* [T-Display-Bar GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-Bar)

### 依赖库

* [ESP32-BLE-Mouse](https://github.com/T-vK/ESP32-BLE-Mouse)
* [ArduinoJson](https://github.com/bblanchon/ArduinoJson)
* [lvgl](https://github.com/lvgl/lvgl)
* [MadgwickAHRS](https://github.com/arduino-libraries/MadgwickAHRS)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

## 常见问题

* **Q. 如何进入下载模式？**  
  A. 按住 "BOOT" 按键重新连接 USB 即可进入下载模式。

* **Q. 外部 UART 接口没有输出怎么办？**  
  A. 项目默认将 USB 接口作为 UART0 调试输出。PlatformIO 用户在 `platformio.ini` 中将 `-DARDUINO_USB_CDC_ON_BOOT=true` 改为 `false`；Arduino 用户在"工具"菜单中将 USB CDC On Boot 设为 Disabled。

* **Q. 为什么 Arduino IDE 提示升级库文件？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-Bar_V1.1 | — | 初始版本 |
