---
title: T-A7670X
show_source: false
tags: ESP32, LTE, A7670, 4G, Cat1, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-a7670/index/image/t-a7670e-1.jpg', alt: 'T-A7670E 正面图' },
  { src: '/products/t-sim-series/t-a7670/index/image/t-a7670g-2.jpg', alt: 'T-A7670G 正面图' },
  { src: '/products/t-sim-series/t-a7670/index/image/t-a7670sa-1.jpg', alt: 'T-A7670SA 正面图' }
]" />

## 概述

T-A7670X R2 是一款基于 **ESP32-WROVER-E**（4 MB Flash，8 MB PSRAM）和 **A7670** 系列蜂窝模块的 4G LTE Cat1 IoT 开发板。所有型号硬件设计完全相同，仅调制解调器芯片不同，从而支持不同地区的频段。集成丰富接口资源：12 路 GPIO（支持 ADC/DAC 及触摸传感功能）、SPI、I2C、UART，并内置 TF 卡、18650 电池接口和 2 × 16-pin 2.54 mm IO 扩展接口，尺寸 111 × 34 × 19 mm。可选 GPS 版本。

> T-A76xx 系列各型号差异请参考 [SIM 对比页面](../sim.md)。

> ⚠️ 4G 版本只支持数据传输，不支持语音及 SIM 卡语音功能。

## 型号对比

| 型号 | 调制解调器 | 地区 | LTE-FDD | LTE-TDD | GSM |
| :--: | :------: | :--- | :------ | :------ | :-- |
| T-A7670E | A7670E | 欧洲 / 中东 / 非洲 / 韩国 / 泰国 | B1/B3/B5/B8/B20 | — | 900/1800 MHz |
| T-A7670G | A7670G | 全球 | B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28/B66 | B34/B38/B39/B40/B41 | 850/900/1800/1900 MHz |
| T-A7670SA | A7670SA | 南美 / 新西兰 / 澳大利亚 | B1/B2/B3/B4/B5/B7/B8/B28/B66 | — | 850/900/1800/1900 MHz |

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGO-T-A76XX](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX) | ✓ | | LTE、GPS、AT 指令示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场搜索并安装 **PlatformIO IDE**
3. 克隆 [LilyGO-T-A76XX](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX) 仓库
4. 打开 `platformio.ini`，取消注释目标示例
5. 点击 **✓** 编译，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 添加 ESP32 开发板 URL：`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32 Dev Module** |
| 上传速度 | 921600 |
| CPU 频率 | 240 MHz (WiFi/BT) |
| Flash 频率 | 80 MHz |
| Flash 模式 | QIO |
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **default 4MB with spiffs (1.2MB APP/1.5MB spiffs)** |
| PSRAM | **Enabled** |
| 核心调试级别 | None |

4. 点击**上传**

### 开发平台

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)

## 视频

## 主要特性

- ESP32-WROVER-E @ 240 MHz，4 MB Flash，8 MB PSRAM，Wi-Fi + BT 5.0
- A7670X LTE Cat1，支持 GSM/GPRS/EDGE 及多频段 4G（型号决定）
- Nano SIM，12 路 GPIO，8 ADC，2 DAC，电容触摸，SPI、I2C、UART
- TF 卡、18650 电池座、2 × 16-pin 2.54 mm 扩展接口，尺寸 111 × 34 × 19 mm

## 产品参数

| 参数 | 规格 |
| :--: | :--: |
| 主控 | ESP32-WROVER-E @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | Bluetooth 5.0 LE |
| 蜂窝 | A7670X LTE Cat1（型号决定） |
| SIM 卡 | Nano SIM |
| 存储 | TF 卡、18650 电池座 |
| USB | 1 × Type-C（USB + OTG） |
| 扩展接口 | 2 × 16-pin 2.54 mm IO |
| 安装孔 | 4 × 2 mm |
| 尺寸 | 111 × 34 × 19 mm |

## 引脚图

**T-A7670E**

<img src="/products/t-sim-series/t-a7670/index/image/t-a7670e-3.jpg" alt="T-A7670E 引脚图" width=100%>

**T-A7670G**

<img src="/products/t-sim-series/t-a7670/index/image/t-a7670g-zh.jpg" alt="T-A7670G 引脚图" width=100%>

**T-A7670SA**

<img src="/products/t-sim-series/t-a7670/index/image/a7670sa.jpg" alt="T-A7670SA 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-A7670X V1.4 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/main/schematic/esp32/T-A7670X-V1.4.pdf)

## 数据手册

* [ESP32 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)

## 软件开发

* [LilyGO-T-A76XX GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX)

### 依赖库

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [Adafruit_SSD1306](https://github.com/adafruit/Adafruit_SSD1306)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [StreamDebugger](https://github.com/vshymanskyy/StreamDebugger)
* [TinyGSM-fork](https://github.com/lewisxhe/TinyGSM-fork)

## 常见问题

* **Q. 为什么我的板子一直烧录失败？**
  A. 请按住 **BOOT** 按键后再尝试烧录。

* **Q. T-A7670E / G / SA 有什么区别？**
  A. PCB 和固件完全相同，仅调制解调器芯片不同，决定支持的频段和地区。请根据您的部署地区选择对应型号。

* **Q. 是否包含 GPS？**
  A. 标准版本不含 GPS，可选购 GPS 版本，请联系客服。

* **Q. 4G 版本是否支持语音通话？**
  A. 不支持 —— 4G 版本仅支持数据传输，不支持电路交换语音通话和短信。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| T-A7670X R2 | — | 当前版本 |
