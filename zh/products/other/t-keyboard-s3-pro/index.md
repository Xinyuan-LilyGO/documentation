---
title: LILYGO T-Keyboard S3 Pro
show_source: false
tags: ESP32-S3, Keyboard, Mechanical, RGB, Multi-screen
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-keyboard-s3-pro" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-keyboard-s3-pro/index/image/t-keyboard-s3-pro-1.jpg', alt: 'T-Keyboard S3 Pro 正面图' },
  { src: '/products/other/t-keyboard-s3-pro/index/image/t-keyboard-s3-pro-2.jpg', alt: 'T-Keyboard S3 Pro 实物图' },
  { src: '/products/other/t-keyboard-s3-pro/index/image/t-keyboard-s3-pro-zh.jpg', alt: 'T-Keyboard S3 Pro 引脚图' }
]" />

> **重要提示**：使用时必须要有主机，从机通过磁吸接口与主机连接。

## 概述

T-Keyboard S3 Pro 是一款基于**双 MCU 架构**（ESP32-S3-WROOM-1 + STM32G030F6P6）的高端可编程键盘。核心亮点包括 **4 块 0.85 英寸 GC9107 TFT LCD 屏幕**（128×128）、4 个热插拔机械按键、**WS2812C RGB** 灯效、旋转编码器、2 × QWIIC 以及 4 × 磁吸扩展接口（最多支持 6 个从机）。ESP32-S3 负责图形渲染与 Wi-Fi 通信，STM32 确保低延迟按键输入。**尺寸：164 × 46 × 42 mm。**

## 快速开始

> **推荐：** 使用 [T-Keyboard-S3-Pro-Library](library) 统一驱动显示屏、按键、RGB 灯和编码器，无需手动配置引脚。详见 [Library 使用指南](library)，包含安装说明、快速入门和完整 API 参考。

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [Basic/Displays](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Basic/Displays) | ✓ | | 在主机的四个屏幕上绘图 |
| [Basic/Keyboard](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Basic/Keyboard) | ✓ | | 读取 5 个按键（含消抖），同步显示到屏幕 |
| [Basic/Encoder](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Basic/Encoder) | ✓ | | 旋转编码器位置追踪 |
| [Basic/RGB](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Basic/RGB) | ✓ | | WS2812C LED HSV 色彩轮播 |
| [Advanced/MultiBoard](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Advanced/MultiBoard) | ✓ | | 多板级联，热插拔检测 |
| [Advanced/BleKeyboard](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Advanced/BleKeyboard) | ✓ | | BLE HID 键盘（含媒体键） |
| [Advanced/Buddy](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Advanced/Buddy) | ✓ | | Claude 桌面伴侣，四屏 UI |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展中搜索并安装 **PlatformIO IDE**
3. 克隆 [T-Keyboard-S3-Pro](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) 仓库
4. 打开 `platformio.ini`，在 `[platformio]` 下取消注释所需环境
5. 点击 **✓** 编译，点击 **→** 烧录

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 添加 ESP32 开发板 URL：`https://espressif.github.io/arduino-esp32/package_esp32_index.json`
3. 安装 **T-Keyboard-S3-Pro** 库及其依赖（见下方[依赖库](#依赖库)）
4. 在 **工具** → **开发板** 中配置（ESP32-S3 主机设备）：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **Default (6.25MB APP/3.43MB SPIFFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

5. 点击 **Upload** 上传

> STM32G030 从机设备固件请使用 **STM32CubeMX** + **ARM Keil μVision5** 或 **STM32CubeProgrammer** 烧录。详见 [仓库](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/tree/stm32cubeg0-firmware-package_V1.6.2)。

### 开发平台

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. STM32CubeMX + ARM Keil μVision5（用于 STM32 协处理器）

## 视频

## 主要特点

- ESP32-S3-WROOM-1 (R8) @ 240 MHz，16 MB Flash，8 MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 4 × 0.85 英寸 GC9107 TFT（128×128），4 × 热插拔机械按键，WS2812C RGB
- STM32G030F6P6 协处理器，旋转编码器，2 × QWIIC，磁吸扩展（最多 6 个设备）

## 产品参数

| 功能 | 规格 |
| :------------------------------: | :------------------------------: |
| 主 MCU | ESP32-S3-WROOM-1 (R8) @ 双核 LX7 |
| 主 Flash | 16 MB |
| 主 PSRAM | 8 MB (OPI) |
| 协处理器 | STM32G030F6P6 |
| 协处理器 Flash | 64 KB |
| 协处理器 SRAM | 8 KB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | Bluetooth 5.0 LE |
| 显示屏 | 4 × 0.85 英寸 GC9107 TFT，128×128（SPI） |
| 按键 | 4 × 热插拔机械按键 + 旋转编码器 |
| RGB | WS2812C |
| 存储 | TF 卡 |
| USB | 1 × Type-C |
| 扩展接口 | 2 × QWIIC + 4 × 磁吸接口 |
| 按钮 | RESET + BOOT |
| 尺寸 | 164 × 46 × 42 mm |

## 引脚图

<img src="/products/other/t-keyboard-s3-pro/index/image/t-keyboard-s3-pro-zh.jpg" alt="T-Keyboard S3 Pro 引脚图" width=100%>

### ESP32-S3 引脚映射

| 名称 | GPIO |
| :--: | :--: |
| I2C1 SDA | IO42 |
| I2C1 SCL | IO2 |
| I2C2 SDA（外扩） | IO6 |
| I2C2 SCL（外扩） | IO7 |
| LCD MOSI | IO40 |
| LCD SCLK | IO41 |
| LCD DC | IO39 |
| LCD RST | IO38 |
| LCD BL | IO1 |
| 编码器 A | IO4 |
| 编码器 B | IO5 |
| 编码器按键 | IO0 |

## 尺寸图

## 原理图

* [T-Keyboard-S3-Pro MCU V1.1](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_MCU_V1.1.pdf)
* [T-Keyboard-S3-Pro Keyboard V1.1](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Keyboard_V1.1.pdf)
* [T-Keyboard-S3-Pro Magnet Female V1.0](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Magnet_Female_V1.0.pdf)
* [T-Keyboard-S3-Pro Magnet Male V1.0](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Magnet_Male_V1.0.pdf)

## 数据手册

* [ESP32-S3-WROOM-1 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf)
* [STM32G030F6P6 Datasheet](https://www.st.com/en/microcontrollers-microprocessors/stm32g030f6.html#documentation)
* [GC9107 Datasheet](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/information/GC9107_DataSheet_V1.2.pdf)

## 软件开发

* [T-Keyboard-S3-Pro GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro)
* [T-Keyboard-S3-Pro-Library GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library)
* [T-Keyboard S3 Pro Claude 桌面伴侣](claude-desktop-buddy.md)

### 依赖库

* [T-Keyboard-S3-Pro-Library](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library)
* [LovyanGFX](https://github.com/lovyan03/LovyanGFX)
* [ButtonSense](https://github.com/lbuque/ButtonSense)

## 常见问题

* **Q. 为什么开发板一直无法上传程序？**
  A. 按住 **BOOT** 键，按一下 **RST** 键后松开 RST，继续按住 BOOT，然后开始上传。

* **Q. 如何扩展从机设备？**
  A. 通过磁吸接口连接从机设备，最多支持 6 个设备组成 2×3 网格布局（左右各 1 个，向下最多 2 个）。使用多个设备时需将 LED 最大亮度调低至 10。

* **Q. 热插拔机械按键支持哪些轴体？**
  A. 支持使用 Kailh 连接器、引脚间距 6.35 mm 的热插拔机械轴体。请选择中间有开孔（间距 > 7 mm）的轴体，以容纳 FPC 排线。

* **Q. 双 MCU 架构有什么优势？**
  A. ESP32-S3 处理复杂的图形界面和无线通信，STM32 负责实时输入处理，确保低延迟的按键响应。

## 版本历史

| 版本 | 发布日期 | 更新说明 |
| :-----: | :----------: | :----------------: |
| T-Keyboard-S3-Pro MCU V1.1 | 2024-09-05 | 初始版本 |
| T-Keyboard-S3-Pro Keyboard V1.1 | 2024-09-05 | 初始版本 |
