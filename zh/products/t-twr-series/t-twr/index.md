---
title: LILYGO T-TWR
show_source: false
tags: ESP32-S3, GNSS, Walkie-Talkie, OLED
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-twr-rev2-1?variant=44505308528821" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-twr-series/t-twr/assets/t-twr-1.jpg', alt: 'T-TWR 正面图' },
  { src: '/products/t-twr-series/t-twr/assets/t-twr-2.jpg', alt: 'T-TWR 实物图' },
  { src: '/products/t-twr-series/t-twr/assets/t-twr-3.jpg', alt: 'T-TWR 引脚图' }
]" />

## 概述

LILYGO T-TWR REV2.1 是一款基于 ESP32-S3-WROOM-1-N16R8 的对讲机开发板，搭载 16MB Flash 和 8MB PSRAM，内置 SA868 UHF/VHF 对讲机模块（可选 UHF 400~480MHz 或 VHF 134~174MHz 频段），L76K GNSS 多系统定位（GPS/BDS/GLONASS），以及 1.3 英寸 SH1106 OLED 显示屏。搭载 AXP2102 PMU，支持 USB/21700/18650 电池多种供电，内置 WS2812 RGB 状态指示灯，适用于户外通信、便携对讲等应用。

> T-TWR 有 UHF（400~480MHz）和 VHF（134~174MHz）两种频段版本，请根据使用场景选择。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/T-TWR/tree/master/examples/Factory) | ✓ | TWR 出厂综合测试 |
| [GPS_Basic_Example](https://github.com/Xinyuan-LilyGO/T-TWR/tree/master/examples/GPS_Basic_Example) | ✓ | GPS 基础示例 |
| [GPS_Full_Example](https://github.com/Xinyuan-LilyGO/T-TWR/tree/master/examples/GPS_Full_Example) | ✓ | GPS 完整示例 |
| [SA868_ATDebug_Example](https://github.com/Xinyuan-LilyGO/T-TWR/tree/master/examples/SA868_ATDebug_Example) | ✓ | 射频 AT 调试示例 |
| [SA868_ESPSendAudio_Example](https://github.com/Xinyuan-LilyGO/T-TWR/tree/master/examples/SA868_ESPSendAudio_Example) | ✓ | 射频发送 ESP32 音频信号 |
| [U8g2_GraphicsTest_Example](https://github.com/Xinyuan-LilyGO/T-TWR/tree/master/examples/U8g2_GraphicsTest_Example) | ✓ | OLED U8G2 图形测试 |
| [WAV_Player](https://github.com/Xinyuan-LilyGO/T-TWR/tree/master/examples/WAV_Player) | ✓ | WAV 音频播放 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-TWR 项目代码](https://github.com/Xinyuan-LilyGO/T-TWR)，在 VS Code 中打开。
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

## 视频

## 主要特点

- ESP32-S3-WROOM-1-N16R8：16MB Flash，8MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- SA868 UHF/VHF 对讲机模块（可选频段）
- L76K GNSS（GPS/BDS/GLONASS，支持 AGNSS 辅助定位）
- 1.3 英寸 SH1106 OLED（128×64，I2C）
- AXP2102 PMU，支持 USB/21700/18650 电池供电
- WS2812 RGB 状态指示灯，旋转编码器支持

## 产品参数

<img src="/products/t-twr-series/t-twr/assets/t-twr-4.jpg" alt="T-TWR 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1-N16R8 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 1.3 英寸 SH1106 OLED (128×64) |
| 对讲机 | SA868（UHF 400~480MHz 或 VHF 134~174MHz） |
| 音频 | RS2257XC6 音频采集模块 |
| GNSS | L76K (GPS/BDS/GLONASS) |
| 电源管理 | AXP2102 PMU |
| 电池 | 21700 / 18650 电池 |
| LED | WS2812 RGB 状态指示灯 |
| 存储 | TF 卡扩展 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 (LE) |
| USB | 1 × USB OTG (Type-C) |
| IO 接口 | 2 × 15pin 扩展 IO |
| 扩展接口 | 2 × STEMMA QT/QWIIC (1mm 4-pin) + 天线接口 |
| 按键 | RESET + BOOT + PWR + PTT |
| 电源 | 5V/500mA |
| 安装孔 | 2 × 2mm 定位孔 |
| 尺寸 | 126 × 39 × 29mm（天线约 200mm） |

## 引脚图

<img src="/products/t-twr-series/t-twr/assets/t-twr-3.jpg" alt="T-TWR 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-TWR-Plus Rev2.1 原理图](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/schematic/T-TWR-Plus_Rev2.1.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SA868 Datasheet](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/datasheet/SA868%202W%20Embedded%20walkie%20talkie%20moduleV1.3.pdf)
* [SH1106 Datasheet](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/datasheet/SPEC%20X096-2864KSWPG17-C30%20VER%20A.pdf)

## 软件开发

* [T-TWR GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-TWR)
* [OpenRTX SA8x8 固件](https://github.com/OpenRTX/sa8x8-fw)

### 依赖库

* [U8g2](https://github.com/olikraus/u8g2)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [AceButton](https://github.com/bxparks/AceButton)
* [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
* [AsyncTCP](https://github.com/me-no-dev/AsyncTCP)
* [ESP8266Audio](https://github.com/earlephilhower/ESP8266Audio)
* [SdFat - Adafruit Fork](https://github.com/adafruit/SdFat)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

## 常见问题

* **Q. 使用时有哪些注意事项？**  
  A. 请注意以下几点：
  1. **胶带式射频天线必须连接好**，未连接可能损坏射频模块，PMU 将自动关闭电源输出；
  2. **Rev2.1 版本必须使用电池**为射频单元供电，不能仅通过 USB 单独工作（射频电流较大，电池供电可降低噪音）；
  3. 高功率传输时，确保电池有足够的放电容量，否则 PMU 会自动关闭；
  4. TWR Rev2.1 内置 NiceRF 固件可升级为 OpenRTX 固件，**升级后 NiceRF 固件无法恢复**。

* **Q. Arduino IDE 提示升级库文件，应该升级吗？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

* **Q. UHF 和 VHF 版本有什么区别？**  
  A. UHF 版本频段为 400~480MHz，VHF 版本为 134~174MHz，请根据所在地区的法规和使用环境选择。

* **Q. 板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键重新下载程序。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-TWR REV2.1 | — | 当前版本 |
