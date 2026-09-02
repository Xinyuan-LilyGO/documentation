---
title: LILYGO T-LoraPager
show_source: false
tags: LoRa, GPS, AI Sensor, Keyboard, ESP32-S3
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-lora-pager" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-lora-series/t-lora-pager/index/image/t-lorapager-1.jpg', alt: 'T-LoraPager 正面图' },
  { src: '/products/t-lora-series/t-lora-pager/index/image/t-lorapager-2.jpg', alt: 'T-LoraPager 实物图' },
  { src: '/products/t-lora-series/t-lora-pager/index/image/t-lorapager-3.jpg', alt: 'T-LoraPager 引脚图' }
]" />

## 概述

T-LoraPager 是一款 LILYGO 推出的手持式 AIOT 可编程开发设备，集成了 ESP32-S3 高性能 Wi-Fi/蓝牙双模芯片与多种无线通信模块。设备采用小巧外观与可折叠外部天线设计，在保证无线性能的同时兼顾美观。提供多种版本选择，主要区别在于 LoRa 模块（LR1121、SX1262 或 CC1101），用户可根据应用需求选购。

开发板功能丰富，集成 QWERT 键盘、支持 AI 的 IMU（BHI260AP）、2.33 英寸长条屏（480×222 分辨率）、U-blox GPS 模组（MIA-M10Q）、RFID/NFC、RTC 电路、TI 电源管理芯片、ES8311 音频编解码器（支持麦克风、扬声器、耳机）、旋转编码器、GPIO 扩展接口等。背部设计有 1/4 固定螺丝接口与 M2 螺丝柱，并附带挂绳，便于携带与固定。出厂固件包含 LILYGO 设计的 UI Demo，可通过编码器进行流畅交互，适合智能穿戴、物联网定位、数据采集等场景开发。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [UI Demo](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | 出厂 UI 演示程序 |
| [LoRa Example](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | LoRa 通信示例 |
| [GPS Example](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | GPS 定位示例 |
| [Keyboard Example](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | 键盘输入示例 |
| [Audio Example](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | 音频播放示例 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download)。
2. 在扩展中搜索并安装 "PlatformIO IDE"。
3. 从 GitHub 下载 [T-LoraPager 项目代码](https://github.com/Xinyuan-LilyGO/LilyGoLib)。
4. 在 VS Code 中打开项目文件夹，编辑 `platformio.ini` 文件选择所需环境。
5. 连接设备，编译并烧录程序。

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
| Board | **LilyGo-T-LoRa-Pager** |
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

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- SX1262 LoRa（433-920MHz，可选 LR1121/CC1101），MIA-M10Q GPS，ST25R3916 NFC
- BHI260AP AI IMU 传感器，PCF85063A RTC，ES8311 音频编解码器
- 2.33 英寸 ST7796 IPS LCD（480×222），QWERT 键盘，旋转编码器
- BQ25896 充电，BQ27220 电量监测，DRV2605 振动电机
- TF 卡槽，GPIO 扩展接口，1/4 英寸螺丝接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 2.33 英寸 ST7796 IPS LCD (480×222) |
| LoRa | SX1262 (433-920MHz)，可选 LR1121/CC1101 |
| GPS | MIA-M10Q (U-blox) |
| NFC | ST25R3916 (SPI) |
| AI 传感器 | BHI260AP |
| 音频 | ES8311（麦克风 + 扬声器 + 耳机） |
| RTC | PCF85063A |
| 充电芯片 | BQ25896 |
| 电量监测 | BQ27220 |
| 振动电机 | DRV2605 |
| 存储 | TF 卡（最大 32GB FAT32） |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × TYPE-C |
| 输入 | QWERT 键盘（TCA8418）+ 旋转编码器 |
| IO 扩展 | XL9555 (I²C) |
| 扩展接口 | GPS 接口 + 2 × Knockout + 2.54mm 2×8 GPIO |
| 按键 | RESET + BOOT |
| 固定孔 | 1/4 英寸螺丝接口 + 4 × M2 背孔 |
| 尺寸 | 106 × 89 × 23mm |

## 电气参数

| 项目 | 参数 |
| :-- | :-- |
| USB-C 输入电压 | 3.9 V - 6 V |
| USB-C 输出电压 | 4.55 V - 5.55 V |
| USB-C 输出电流 | 0.5 A - 1 A |
| 充电电流 | 0 - 3008 mA（可编程） |
| 电池电压 | 3.7 V |
| 电池容量 | 1500 mAh（5.55 Wh） |
| 充电温度范围 | 0 - 60°C |

> 推荐充电电流：**< 750 mA**。充电电流不应超过电池容量的一半。

## 引脚图

<img src="/products/t-lora-series/t-lora-pager/index/image/t-lorapager-3.jpg" alt="T-LoraPager 引脚图" width=100%>

<img src="/products/t-lora-series/t-lora-pager/index/image/t-lorapager-info-zh.jpg" alt="T-LoraPager 概述图" width=100%>

### 引脚映射

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| Custom Pin | GPIO9（外部12-Pin接口） | ✅ |
| Uart1 TX | 43（外部12-Pin接口） | ✅ |
| Uart1 RX | 44（外部12-Pin接口） | ✅ |
| SDA | 3 | ❌ |
| SCL | 2 | ❌ |
| SPI MOSI | 34 | ❌ |
| SPI MISO | 33 | ❌ |
| SPI SCK | 35 | ❌ |
| SD CS | 21 | ❌ |
| Keyboard INT | 6 | ❌ |
| Keyboard BL | 46 | ❌ |
| Rotary Encoder A | 40 | ❌ |
| Rotary Encoder B | 41 | ❌ |
| Rotary Encoder SW | 7 | ❌ |
| RTC INT | 1 | ❌ |
| NFC CS | 39 | ❌ |
| NFC INT | 5 | ❌ |
| Sensor INT | 8 | ❌ |
| Audio WS | 18 | ❌ |
| Audio SCK | 11 | ❌ |
| Audio MCLK | 10 | ❌ |
| Audio Dout | 45 | ❌ |
| Audio Din | 17 | ❌ |
| GNSS TX | 12 | ❌ |
| GNSS RX | 4 | ❌ |
| GNSS PPS | 13 | ❌ |
| LoRa RST | 47 | ❌ |
| LoRa BUSY | 48 | ❌ |
| LoRa CS | 36 | ❌ |
| LoRa INT | 14 | ❌ |
| Display CS | 38 | ❌ |
| Display DC | 37 | ❌ |
| Display BL | 42 | ❌ |

## 尺寸图

<img src="/products/t-lora-series/t-lora-pager/index/image/t-lorapager-three-views-zh.jpg" alt="T-LoraPager 三视图" width=100%>

## 原理图

* [T-LoraPager_V1.0](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/schematic/T-Lora%20Pager%20V1.0%20SCH%2025-06-13.pdf)

## 数据手册

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)
* [MIA-M10Q Datasheet](/datasheet/MIA-M10Q_DataSheet_UBX-22015849.pdf)
* [BHI260AP Datasheet](/datasheet/bst-bhi260ap-ds000.pdf)

## 软件开发

* [LilyGoLib GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGoLib)
* [快速上手指南](quick-start.md)
* [出厂固件使用指南](factory.md)
* [VibeKeyboard 使用指南](vibe-keyboard.md)
* [使用 T-Lora Pager 运行 Claude Desktop Buddy](claude-desktop-buddy.md)

### 依赖库

* [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)

## 常见问题

* **Q. 如何选择不同版本的 T-LoraPager？**  
  A. 根据应用需求选择 LoRa 模块：SX1262 适用于长距离通信，LR1121 支持多频段，CC1101 适用于低成本 Sub-1GHz 应用。

* **Q. 设备无法烧录程序怎么办？**  
  A. 确保 USB CDC On Boot 已启用，并按住 BOOT 按键再点击 RESET 进入下载模式。

* **Q. GPS 定位慢或无信号？**  
  A. 确保在户外开阔地区使用，并检查天线连接是否良好。

* **Q. Arduino ESP32 版本要求是什么？**  
  A. 本库依赖于 arduino-esp32 V3.3.0-alpha1 或更高版本，低版本会报错。

## 功耗测试

| 模式 | 唤醒方式 | 电流 |
| :-- | :-- | :-- |
| DeepSleep | BootButton | 530uA |
| DeepSleep | Timer | 530uA |
| LightSleep | BootButton | ~2.26mA |
| Power OFF | PowerButton | 26uA |

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-LoraPager_V1.0 | 2024-08-05 | 初始版本 |
