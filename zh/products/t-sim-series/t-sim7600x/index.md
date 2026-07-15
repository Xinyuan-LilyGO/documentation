---
title: T-SIM7600X
show_source: false
tags: ESP32, LTE, SIM7600, 4G, Cat4, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim7600" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim7600x/index/image/t-sim7600x-e.jpg', alt: 'T-SIM7600E' },
  { src: '/products/t-sim-series/t-sim7600x/index/image/t-sim7600x-g.jpg', alt: 'T-SIM7600G' },
  { src: '/products/t-sim-series/t-sim7600x/index/image/t-sim7600x-sa.jpg', alt: 'T-SIM7600SA-H' }
]" />

## 概述

T-SIM7600X 是一款基于 **ESP32-WROVER-B**（N4R8：4 MB Flash，8 MB PSRAM）和 **SIM7600** 系列蜂窝模块的 4G LTE Cat-4 IoT 开发板。所有型号硬件设计完全相同，仅调制解调器芯片不同，从而支持不同地区的频段。配备 Nano SIM 卡槽、TF 卡、18650 电池座和 2 × 16-pin 2.54 mm IO 扩展接口，尺寸 111 × 34 × 19 mm。

## 型号对比

| 型号 | 调制解调器 | 地区 | LTE-FDD | LTE-TDD | GSM |
| :--: | :------: | :--- | :------ | :------ | :-- |
| T-SIM7600E | SIM7600E | 欧洲 / 中东 / 非洲 / 韩国 / 泰国 | B1/B3/B5/B8/B20 | — | 900/1800 MHz |
| T-SIM7600G | SIM7600G | 全球 | B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28/B66 | B34/B38/B39/B40/B41 | 850/900/1800/1900 MHz |
| T-SIM7600SA-H | SIM7600SA-H | 南美 / 澳大利亚 / 新西兰 | B1/B2/B3/B4/B5/B7/B8/B28 | — | 850/900/1800/1900 MHz |

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) | ✓ | | LTE、GPS、AT 指令示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场搜索并安装 **PlatformIO IDE**
3. 克隆 [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) 仓库
4. 打开 `platformio.ini`，取消注释 `default_envs = T-SIM7600X` 及目标示例的 `src_dir` 行
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
| 分区方案 | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |
| 核心调试级别 | None |

4. 在 `utilities.h` 中取消注释 `#define LILYGO_T_SIM7600X`
5. 点击**上传**

> **注意：** Arduino IDE 提示库有更新时请勿点击更新，可能导致兼容性问题（如 TinyGSM）。

### 开发平台

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)

## 相关视频

## 主要特性

- ESP32-WROVER-B（N4R8）@ 240 MHz，4 MB Flash，8 MB PSRAM，Wi-Fi + BT 4.2
- SIM7600X LTE Cat-4，最大下行 150 Mbps / 上行 50 Mbps
- 集成多星座 GNSS 定位
- Nano SIM、TF 卡、18650 电池座、2 × 16-pin 2.54 mm 扩展接口

## 产品参数

| 参数 | 规格 |
| :--: | :--: |
| 主控 | ESP32-WROVER-B（N4R8），双核 LX6 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | BT 4.2 |
| 蜂窝 | SIM7600X LTE Cat-4（型号决定） |
| 最大下行速率 | 150 Mbps |
| 最大上行速率 | 50 Mbps |
| 定位 | 多星座 GNSS |
| SIM 卡 | Nano SIM |
| 存储 | TF 卡、18650 电池座 |
| USB | 1 × Type-C |
| 扩展接口 | 2 × 16-pin 2.54 mm IO |
| 安装孔 | 4 × 2 mm |
| 尺寸 | 111 × 34 × 19 mm |

## 引脚图

| 功能 | GPIO |
| :--: | :--: |
| 调制解调器 TX | 27 |
| 调制解调器 RX | 26 |
| 调制解调器 PWRKEY | 4 |
| 调制解调器 RING | 33 |
| 调制解调器 DTR | 32 |
| 调制解调器飞行模式 | 25 |
| 调制解调器状态 | 34 |
| 板载 LED | 12 |
| SD SCK | 14 |
| SD MISO | 2 |
| SD MOSI | 15 |
| SD CS | 13 |
| 电池 ADC | 35 |
| 太阳能 ADC | 36 |
| 默认 SDA | 21 |
| 默认 SCL | 22 |

> ⚠️ 请勿在 GPIO4、GPIO25、GPIO32、GPIO33 引脚上连接任何导线，这些引脚已保留给调制解调器功能使用。


## 尺寸图

## 原理图

* [T-SIM7600X 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/master/schematic/T-SIM7600.pdf)

## 数据手册

* [ESP32 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
* [SIM7600 系列数据手册](https://cn.simcom.com/product/SIM7600X.html)

## 软件开发

* [LilyGo-Modem-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### 依赖库

* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [StreamDebugger](https://github.com/vshymanskyy/StreamDebugger)

## 常见问题

* **Q. 无法上传程序。**
  A. 按住 **BOOT** 按键后再尝试上传。

* **Q. T-SIM7600E / G / SA-H 有什么区别？**
  A. PCB 和固件完全相同，仅调制解调器芯片不同，决定支持的频段和地区。请根据您的部署地区选择对应型号。

* **Q. T-SIM7600X 是否支持 GPS？**
  A. 支持 —— SIM7600 集成多星座 GNSS，连接有源 GPS 天线至 GNSS 接口即可使用。

* **Q. 检测不到 SIM 卡。**
  A. 请在上电前插入 SIM 卡，热插拔可能导致识别失败。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.0 | — | 初始版本 |
