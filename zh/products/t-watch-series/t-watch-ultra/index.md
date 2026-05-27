---
title: LILYGO T-Watch Ultra
show_source: false
tags: Smart Watch, ESP32-S3, LoRa, GNSS, AMOLED, AI Sensor, NFC
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-watch-ultra" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-1.jpg', alt: 'T-Watch Ultra 正面图' },
  { src: '/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-2.jpg', alt: 'T-Watch Ultra 实物图' },
  { src: '/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-pin.jpg', alt: 'T-Watch Ultra 引脚图' }
]" />

## 概述

LILYGO T-Watch Ultra 是一款高性能智能手表开发模组，基于 ESP32-S3 双核处理器，搭载 16MB 闪存与 8MB PSRAM，支持 Arduino/ESP-IDF/MicroPython 开发环境。核心功能高度集成：

- **显示交互**：配备 2.06 英寸 AMOLED 屏（410×502 分辨率，1600 万色），支持电容触控与 QSPI 高速渲染
- **四重无线通信**：集成 Wi-Fi/BLE 5.0、LoRa（SX1262/SX1280，覆盖 433/868/915MHz 频段）、GNSS 定位（MIA-M10Q 模块）及 NFC（ST25R3916）
- **智能感知与反馈**：内置 BHI260AP AI 动作传感器、DRV2605 触觉震动马达及 MAX98357A 音频功放，实现运动识别与多模态交互
- **扩展与续航**：支持 MicroSD 卡扩展（32GB FAT32），由 AXP2101 电源管理芯片动态优化能耗，搭配 1100mAh 电池（4.07Wh）
- **工业级设计**：紧凑尺寸（49×63.5×22mm），宽温域运行（-40℃~85℃），适用于户外运动设备、工业物联网网关等场景

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Watch UI](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | 手表界面示例 |
| [GNSS Tracking](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | 卫星定位功能 |
| [LoRa Communication](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | LoRa 通信测试 |
| [AI Sensor](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | 动作识别示例 |
| [NFC Reader](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | NFC 功能演示 |

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 安装 [Arduino ESP32 V3.3.0-alpha1 或更高版本](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)
   * Arduino 管理器网址：`https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json`
3. [下载 LilyGoLib 库](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip)
4. 打开 `Arduino IDE` -> `项目` -> `加载库` -> `添加 .ZIP 库` -> 选择下载的库压缩包
5. [安装 LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)：将所有目录复制到 Arduino IDE 的库目录中
6. `文件` -> `示例` -> `LilyGOLib` -> `helloworld`
7. `工具` -> `开发板` -> `esp32`，选择如下配置：

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **LilyGo T-Watch-Ultra** |
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

### T-Watch-Ultra 进入下载模式

> 下载模式仅在程序不允许上传代码时才需要。正常情况下不需要此步骤。
>
> 1. 通过 USB-C 线连接开发板
> 2. 按住 **BOOT** 按钮
> 3. 在按住 BOOT 的同时，按下 **RST** 按钮后释放
> 4. 释放 **BOOT** 按钮
> 5. USB 端口固定后，点击上传
> 6. 按下 **RST** 退出下载模式

### 开发平台
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
4. [VS Code](https://code.visualstudio.com/)
5. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3：16 MB Flash，8 MB PSRAM（Octal SPI），Wi-Fi + 蓝牙 5.0
- 2.06 英寸 AMOLED（410×502，QSPI），CST9217 电容触摸
- LoRa：SX1262（433~923MHz）/ SX1280（2.4GHz）可选
- GNSS：MIA-M10Q 多星座定位，NFC：ST25R3916
- BHI260AP AI 动作传感器，DRV2605 触觉反馈，MAX98357A 音频功放
- AXP2101 电源管理，PCF85063A RTC，XL9555 IO 扩展，T3902 通话模块
- 1100mAh 电池，MicroSD 卡扩展，USB Type-C

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 双核处理器 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 2.06 英寸 AMOLED (410×502) |
| 触摸 | CST9217 电容触摸屏 |
| LoRa | SX1262 (433~923MHz) / SX1280 (2.4GHz) |
| GNSS | MIA-M10Q 多星座定位 |
| NFC | ST25R3916 |
| AI 传感器 | BHI260AP 动作传感器 |
| 音频 | MAX98357A 音频功放 |
| 振动马达 | DRV2605 触觉反馈 |
| 电源管理 | AXP2101 PMU |
| RTC | PCF85063A 实时时钟 |
| IO 扩展 | XL9555 (16个IO) |
| 通话模块 | T3902 |
| 存储 | MicroSD 卡扩展 |
| 电池 | 1100mAh 锂电池 |
| 无线 | Wi-Fi 802.11b/g/n + Bluetooth 5.0 |
| USB | 1 × USB OTG (Type-C) |
| 按键 | POWER + BOOT |
| 尺寸 | 63.5×49×22mm |

## 引脚图

<img src="/products/t-watch-series/t-watch-ultra/index/image/t-watch-ultra-pin.jpg" alt="T-Watch Ultra 引脚图" width=100%>

### 引脚映射

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| SDA | 3 | ❌ |
| SCL | 2 | ❌ |
| SPI MOSI | 34 | ❌ |
| SPI MISO | 33 | ❌ |
| SPI SCK | 35 | ❌ |
| SD CS | 21 | ❌ |
| RTC (PCF85063A) INT | 1 | ❌ |
| NFC (ST25R3916) CS | 4 | ❌ |
| NFC (ST25R3916) INT | 5 | ❌ |
| BHI260 INT | 8 | ❌ |
| PCM 功放 (MAX98357A) BCLK | 9 | ❌ |
| PCM 功放 (MAX98357A) WCLK | 10 | ❌ |
| PCM 功放 (MAX98357A) DOUT | 11 | ❌ |
| GNSS (MIA-M10Q) TX | 43 | ❌ |
| GNSS (MIA-M10Q) RX | 44 | ❌ |
| GNSS (MIA-M10Q) PPS | 13 | ❌ |
| LoRa RST | 47 | ❌ |
| LoRa BUSY | 48 | ❌ |
| LoRa CS | 36 | ❌ |
| LoRa INT | 14 | ❌ |
| 显示屏 CS | 41 | ❌ |
| 显示屏 DATA0 | 38 | ❌ |
| 显示屏 DATA1 | 39 | ❌ |
| 显示屏 DATA2 | 42 | ❌ |
| 显示屏 DATA3 | 45 | ❌ |
| 显示屏 SCK | 40 | ❌ |
| 显示屏 TE | 6 | ❌ |
| 显示屏 RESET | 37 | ❌ |
| AXP2101 INT | 7 | ❌ |

## 尺寸图

## 原理图

* [T-Watch Ultra 原理图](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/docs/hardware/)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [MIA-M10Q Datasheet](https://www.u-blox.com/en/product/mia-m10-series)
* [BHI260AP Datasheet](https://www.bosch-sensortec.com/products/motion-sensors/imu-with-integrated-ai/bhi260ap/)
* [AXP2101 Datasheet](https://www.x-powers.com/en.php/Product/detail/id/145)

## 软件开发

* [LilyGoLib GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGoLib)

### 依赖库

* [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)
* [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [LVGL](https://lvgl.io/)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## 常见问题

* **Q. T-Watch Ultra 相比其他版本有什么优势？**  
  A. Ultra 版本配备了更大的 AMOLED 屏幕、AI 动作传感器、GNSS 多星座定位、NFC 功能，以及更大的电池容量，功能更加全面。

* **Q. 如何开机和关机？**  
  A. 按住 POWER 按键两秒开机，按住六秒关机。BOOT 按键用于进入下载模式。

* **Q. 支持哪些 GNSS 星座？**  
  A. MIA-M10Q 模块支持 GPS、GLONASS、Galileo、北斗等多重卫星系统。

* **Q. AI 传感器有什么特殊功能？**  
  A. BHI260AP 可以识别复杂的动作模式，如手势识别、活动分类等，适合运动监测应用。

* **Q. 电池续航如何？**  
  A. 1100mAh 电池在正常使用下可提供数天续航，具体时间取决于功能使用情况。

## 功耗测试

| 模式 | 唤醒方式 | 电流 |
| :-- | :-- | :-- |
| 轻睡眠 | 电源按钮 + BOOT + 触摸面板 | 4.6mA |
| 轻睡眠 | 电源按钮 + BOOT | 2.1mA |
| 深度睡眠 | 电源按钮 + BOOT（备份电源开） | 1.1mA |
| 深度睡眠 | 电源按钮 + BOOT（备份电源关） | 840uA |
| 深度睡眠 | 触摸面板 | 3.34mA |
| 深度睡眠 | 定时器（备份电源开） | 850uA |
| 深度睡眠 | 定时器（备份电源关） | 1.1mA |
| 关机 | 仅保持备份电源 | 77uA |

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Watch-Ultra_V1.0 | — | 初始版本 |
