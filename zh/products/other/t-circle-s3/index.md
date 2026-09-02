---
title: LILYGO T-Circle S3
show_source: false
tags: ESP32-S3, LCD, Audio, Touch Screen, QWIIC
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-circle-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-circle-s3/index/image/t-circle-s3-1.jpg', alt: 'T-Circle S3 正面图' },
  { src: '/products/other/t-circle-s3/index/image/t-circle-s3-2.jpg', alt: 'T-Circle S3 实物图' },
  { src: '/products/other/t-circle-s3/index/image/t-circle-s3.jpg', alt: 'T-Circle S3 引脚图' }
]" />

## 概述

LILYGO T-Circle S3 是基于 ESP32-S3-R8 的圆形显示屏开发板，搭载 0.75 英寸 GC9D01N 圆形 TFT LCD（160×160px）和 CST816D 电容触摸，集成 MAX98357A I2S 数字音频放大器、MP34DT05-A PDM 麦克风（V1.1）、APA102 LED 和 QWIIC 扩展接口，支持 Wi-Fi 和蓝牙 5.0，适用于物联网终端、智能穿戴和音频可视化项目。

> T-Circle S3 为 ESP32-S3 版本；ESP32 版本请参见 [T-Circle](../t-circle/)。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/Original_Test) | ✓ | 出厂综合测试 |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/GFX) | ✓ | 屏幕显示示例 |
| [CST816D](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/CST816D) | ✓ | 触摸示例 |
| [APA102_Blink](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/APA102_Blink) | ✓ | LED 闪烁示例 |
| [Voice_Speaker](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/Voice_Speaker) | ✓ | 扬声器示例 |
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/DMIC_ReadData) | ✓ | 麦克风读取 |
| [Wifi_Music](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/Wifi_Music) | ✓ | Wi-Fi 音乐播放 |
| [GFX_Wifi_AP_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/GFX_Wifi_AP_Contract) | ✓ | Wi-Fi AP 示例 |
| [Animated_Eyes_1](https://github.com/Xinyuan-LilyGO/T-Circle-S3/tree/master/examples/Animated_Eyes_1) | ✓ | 动画眼睛 |
| [lilygo_s3_apps](https://github.com/Grovety/lilygo_s3_apps) | | 语音控制示例（Grovety 提供，ESP-IDF） |
| [XiaoZhi_AI_Chatbot](https://github.com/78/xiaozhi-esp32) | | 小智 AI 示例（ESP-IDF V5.3.2） |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Circle-S3 项目代码](https://github.com/Xinyuan-LilyGO/T-Circle-S3)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32 v2.0.14](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `libraries` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
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
3. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3-R8：16MB Flash，8MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 0.75 英寸 GC9D01N 圆形 TFT LCD（160×160px），CST816D 电容触摸
- MAX98357A I2S 数字音频放大器，MP34DT05-A PDM 麦克风（V1.1）
- APA102 RGB LED，QWIIC 扩展接口
- 紧凑尺寸（32×17mm）

## 产品参数

<img src="/products/other/t-circle-s3/index/image/t-circle-s3-zh.jpg" alt="T-Circle S3 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 0.75 英寸 GC9D01N TFT LCD (160×160px) |
| 触摸 | CST816D 电容触摸 |
| 扬声器 | MAX98357A I2S 数字音频放大器 |
| 麦克风 | MP34DT05-A PDM（V1.1）/ MSM261S4030H0R IIS（V1.0） |
| LED | APA102 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 (LE) |
| USB | 1 × USB Type-C (OTG) |
| IO 接口 | 2 × 4pin 扩展 IO |
| 按键 | RESET + BOOT |
| 电源 | 5V/500mA |
| 安装孔 | 2 × M1.6 |
| 尺寸 | 32×17mm |

## 引脚图

<img src="/products/other/t-circle-s3/index/image/t-circle-s3.jpg" alt="T-Circle S3 引脚图" width=100%>

### 引脚映射

| 功能 | GPIO |
| :-- | :--: |
| LCD MOSI | IO17 |
| LCD DC | IO16 |
| LCD SCLK | IO15 |
| LCD CS | IO13 |
| LCD BL | IO18 |
| 触摸 INT | IO12 |
| 触摸 SDA | IO11 |
| 触摸 SCL | IO14 |
| 扬声器 BCLK | IO5 |
| 扬声器 LRCLK | IO4 |
| 扬声器 DATA | IO6 |
| 扬声器 SD_MODE | IO45 |
| LED CLOCK | IO39 |
| LED DATA | IO38 |
| 麦克风 BCLK（V1.0）/ LRCLK（V1.1） | IO9 |
| 麦克风 DATA | IO8 |
| 麦克风 WS（V1.0） | IO9 |

## 尺寸图

## 原理图

* [T-Circle-S3 V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/master/project/T-Circle-S3_V1.0.pdf)

## 数据手册

* [GC9D01N Datasheet](/datasheet/GC9D01N.pdf)
* [MAX98357A Datasheet](/datasheet/MAX98357AETE+T.pdf)
* [MSM261S4030H0R Datasheet](/datasheet/MEMSensing-MSM261S4030H0R.pdf)
* [MP34DT05-A Datasheet](/datasheet/mp34dt05-a.pdf)

## 软件开发

* [T-Circle-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Circle-S3)

### 依赖库

* [Arduino_DriveBus 1.1.16](https://github.com/Llgok/Arduino_DriveBus)
* [Arduino_GFX 1.3.7](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S 3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)（V1.0）
* [FastLED 3.6.0](https://github.com/FastLED/FastLED)

## 常见问题

* **Q. 为什么板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键重新下载程序。

* **Q. 外部 UART 接口没有输出怎么办？**  
  A. 默认将 USB 接口作为 UART0 调试输出。PlatformIO 用户在 `platformio.ini` 中将 `-DARDUINO_USB_CDC_ON_BOOT=true` 改为 `false`；Arduino 用户在"工具"菜单中将 USB CDC On Boot 设为 Disabled。

* **Q. 为什么 Arduino IDE 提示升级库文件？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Circle-S3_V1.0 | 2024-01-01 | 初始版本（MSM261S I2S 麦克风） |
| T-Circle-S3_V1.1 | — | 麦克风改为 MP34DT05-A PDM 接口 |
