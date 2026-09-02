---
title: LILYGO T-Watch S3 Plus
show_source: false
tags: T-Watch, ESP32-S3, 智能手表, GPS, LoRa
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-watch-s3-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-s3-plus/index/image/t-watch-s3-plus1.jpg', alt: 'T-Watch S3 Plus 正面图' },
  { src: '/products/t-watch-series/t-watch-s3-plus/index/image/t-watch-s3-plus2.jpg', alt: 'T-Watch S3 Plus 实物图' },
  { src: '/products/t-watch-series/t-watch-s3-plus/index/image/t-watch-s3-plus3.jpg', alt: 'T-Watch S3 Plus 引脚图' }
]" />

## 概述

T-Watch S3 Plus 是基于 T-Watch S3 的增强版本，增加了 GNSS 功能，是一款多功能智能可穿戴设备，集成了高性能硬件与无线通信技术，适用于运动健康监测、远程交互及音频场景。其核心配置包括 1.3 英寸 240×240 高清 LCD 显示屏，搭配 BMA423 轴传感器和电容式触摸模块，可精准追踪运动轨迹并提供灵敏触控操作，内置 Max98357A 音频放大器与 PDM 麦克风，支持高质量音频输出及语音指令输入。目前 T-Watch S3 Plus 有 SX1262 和 SX1280 两个 LoRa 版本，结合 GNSS 模块，实现精确定位和远距离低功耗无线通信，适用于物联网与智能穿戴场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [出厂程序](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/examples/factory/factory.ino) | ✓ | | 出厂示例 |
| [更多示例](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | 参考 GitHub 仓库 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download)，在扩展中搜索并安装 "PlatformIO IDE"。
2. 从 GitHub 下载 [LilyGoLib 项目代码](https://github.com/Xinyuan-LilyGO/LilyGoLib)。
3. 在 VS Code 中打开项目文件夹，在 `platformio.ini` 中取消注释选择所需示例。
4. 点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 安装 [Arduino ESP32 **V3.3.0-alpha1** 或更高版本](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)
   * Arduino 管理器网址：`https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json`
3. [下载 LilyGoLib 库](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip)
4. 打开 `Arduino IDE` -> `项目` -> `加载库` -> `添加 .ZIP 库` -> 选择下载的库压缩包
5. [安装 LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)：将所有目录复制到 Arduino IDE 的库目录中
6. `文件` -> `示例` -> `LilyGOLib` -> `helloworld`
7. `工具` -> `开发板` -> `esp32`，选择如下配置：

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **LilyGo T-Watch-S3** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Board Revision | **Radio-SX1262**（根据购买版本选择） |
| Upload Mode | **UART0/Hardware CDC** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

**开发板版本选项（根据购买的射频类型选择）：**
- Radio-SX1262（Sub 1G LoRa）
- Radio-SX1280（2.4G LoRa）
- Radio-CC1101（Sub 1G (G)MSK, FSK, ASK, OOK）
- Radio-LR1121（Sub 1G + 2.4G LoRa）
- Radio-SI4432（Sub 1G ISM）

> 注意：如果串口没有消息输出，请检查 USB CDC ON Boot 是否设置为 Enabled。本库依赖于最新版 arduino-esp32 **V3.3.0-alpha1** 或更高版本。

### T-Watch-S3-Plus 进入下载模式

> 下载模式仅在程序不允许上传代码时才需要。正常情况下不需要此步骤。
>
> 1. 通过 Micro-USB 线连接开发板
> 2. 按住 **BOOT** 按钮
> 3. 在按住 BOOT 的同时，按下 **RST** 按钮后释放
> 4. 释放 **BOOT** 按钮
> 5. USB 端口固定后，点击上传
> 6. 按下 **RST** 退出下载模式

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- SX1262/SX1280 LoRa（433~923MHz），u-blox MIA-M10Q 或 Quectel LS550G GNSS
- 1.3 英寸 ST7789V3 IPS LCD（240×240），FT6336U 电容触摸
- BMA423 六轴传感器，DRV2605 触觉驱动，红外发射器
- Max98357A 音频放大器 + SPM1423 PDM 麦克风
- AXP2101 电源管理，940mAh 电池，PCF8563 RTC

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 1.3 英寸 ST7789V3 IPS LCD (240×240) |
| 触摸 | FT6336U (I²C) |
| GNSS | u-blox MIA-M10Q 或 Quectel LS550G |
| LoRa | SX1262 / SX1280 (可选) |
| IMU | BMA423 (I²C) |
| RTC | PCF8563 (I²C) |
| 电源管理 | AXP2101 |
| 触觉 | DRV2605 (I²C) |
| 音频输出 | MAX98357A (I2S) |
| 音频输入 | SPM1423HM4H PDM 麦克风 |
| 红外 | IR12-21C |
| 电池 | 940mAh (3.7V) |
| 无线 | 2.4 GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × Micro-USB + OTG |

### 电气参数

| 参数 | 值 |
| :-- | :-- |
| Micro-USB 输入电压 | 3.9V - 6V |
| 充电电流 | 0 - 1024mA（可编程） |
| 电池电压 | 3.7V |
| 电池容量 | 940mAh |

> 建议充电电流不高于 **300mA**，且不要超过 **400mA**。过大的充电电流可能损坏电池。如果长时间不使用，请将电池开关拨到 OFF。

## 引脚图

<img src="/products/t-watch-series/t-watch-s3-plus/index/image/t-watch-s3-plus3.jpg" alt="T-Watch S3 Plus 引脚图" width=100%>

### 引脚映射

参考：[pins_arduino.h](https://github.com/espressif/arduino-esp32/blob/master/variants/lilygo_twatch_s3/pins_arduino.h)

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| SDA | 10 | ❌ |
| SCL | 11 | ❌ |
| 触摸 (FT6336U) SDA | 39 | ❌ |
| 触摸 (FT6336U) SCL | 40 | ❌ |
| 触摸 INT | 16 | ❌ |
| RTC INT | 17 | ❌ |
| IMU (BMA423) INT | 14 | ❌ |
| PCM 放大器 BCLK | 48 | ❌ |
| PCM 放大器 WCLK | 15 | ❌ |
| PCM 放大器 DOUT | 46 | ❌ |
| GNSS TX | 42 | ❌ |
| GNSS RX | 41 | ❌ |
| LoRa SCK | 3 | ❌ |
| LoRa MISO | 4 | ❌ |
| LoRa MOSI | 1 | ❌ |
| LoRa RST | 8 | ❌ |
| LoRa BUSY | 7 | ❌ |
| LoRa CS | 5 | ❌ |
| LoRa INT | 9 | ❌ |
| 显示屏 CS | 12 | ❌ |
| 显示屏 MOSI | 13 | ❌ |
| 显示屏 SCK | 18 | ❌ |
| 显示屏 DC | 38 | ❌ |
| 显示屏 背光 | 45 | ❌ |
| PMU INT | 21 | ❌ |
| PDM 麦克风 SCK | 44 | ❌ |
| PDM 麦克风 DATA | 47 | ❌ |
| 红外发射器 | 2 | ❌ |

### I2C 设备地址

| 设备 | 7-Bit 地址 | 总线 |
| :-- | :--: | :--: |
| 触摸面板 FT6336U | 0x38 | Wire1 独立 |
| 加速度传感器 BMA423 | 0x19 | 共享 |
| 电源管理 AXP2101 | 0x34 | 共享 |
| 实时时钟 PCF8563 | 0x51 | 共享 |
| 触觉驱动器 DRV2605 | 0x5A | 共享 |

## 尺寸图

## 原理图

* [T-Watch S3 Plus 主板原理图](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/schematic/T_WATCH-S3%2025-03-24.pdf)
* [T-Watch S3 Plus GPS 原理图](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/schematic/T-Watch-S3-Plus-GPS%20V1.0%202025-04-29.pdf)

## 数据手册

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
* [BMA423 Datasheet](/datasheet/BMA423.PDF)
* [MIA-M10Q Datasheet](/datasheet/MIA-M10Q_DataSheet_UBX-22015849.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)

## 软件开发

* [LilyGoLib GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGoLib)

### 依赖库

* [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)
* [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)

## 常见问题

* **Q. T-Watch S3 Plus 与 T-Watch S3 的主要区别是什么？**  
  A. T-Watch S3 Plus 在 T-Watch S3 的基础上增加了 GPS 功能，其他硬件配置基本一致。

* **Q. 如何开机和关机？**  
  A. 按住 POWER 按键两秒开机，按住六秒关机。BOOT 按键用于进入下载模式。

* **Q. 支持哪些 LoRa 频段？**  
  A. 目前有 SX1262 和 SX1280 两个版本，支持 433MHz~923MHz 频段，请根据所在地区法规选择合适版本。

* **Q. 电池续航时间如何？**  
  A. 续航取决于使用场景，深度睡眠模式下电流约为 460~530uA，正常使用可达数天。

## 功耗测试

| 模式 | 唤醒方式 | 电流 |
| :-- | :-- | :-- |
| 轻睡眠 | 电源按钮 + BOOT 按钮 + 触摸面板 | 2.38 mA |
| 轻睡眠 | 电源按钮 + BOOT 按钮 | 暂无数据 |
| 深度睡眠 | 电源按钮 + BOOT 按钮（备份电源开启） | 530 µA |
| 深度睡眠 | 电源按钮 + BOOT 按钮（备份电源关闭） | 460 µA |
| 深度睡眠 | 触摸面板 | 1.08 mA |
| 深度睡眠 | 定时器（备份电源开启） | 510 µA |
| 深度睡眠 | 定时器（备份电源关闭） | 460 µA |
| 关机 | 仅保留备份电源 | 50 µA |

> 数据来自[官方 T-Watch S3 Plus 硬件文档](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/docs/hardware/lilygo-t-watch-s3-plus.md#-power-consumption-reference)，实际电流会随固件和已启用外设变化。触摸复位引脚未连接；若让触摸控制器进入睡眠，将无法通过触摸唤醒。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Watch-S3-Plus_V1.0 | 2024-01-01 | 初始版本，增加 GPS 功能 |
