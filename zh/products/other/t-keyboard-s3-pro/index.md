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

T-Keyboard-S3 Pro 是一款基于双 MCU 架构（ESP32-S3 + STM32G030F6P6）的高端可编程键盘，专为开发者与专业用户打造。其核心亮点包括 4 块 0.85 英寸 RGB LCD 屏幕（分辨率 128×128），支持多屏独立显示快捷指令、系统状态或动态交互界面；4 个热插拔机械按键兼容自定义轴体，搭配 RGB WS2812 灯效与旋转编码器，可编程背光模式及精准参数调节（如音量、滚动控制）。硬件上，主控 ESP32-S3 配备 16MB Flash + 8MB PSRAM，支持 Wi-Fi/蓝牙通信与复杂逻辑运算，外置 STM32 芯片辅助处理实时输入任务，确保低延迟响应。扩展性方面，提供 STEMMA QT/QWIIC 接口及磁吸扩展能力，可连接多个从机设备，打造多功能控制终端。

## 快速开始

### 使用注意事项

1. **I2C 通信扩展**：默认固件配置为 I2C 通信扩展模式。扩展从设备时，必须确保每个设备具有唯一的 I2C 地址，避免地址冲突。
2. **设备数量限制**：最多可连接 6 个设备。连接多个设备时，需要将板载 LED 的最大亮度调低至 10。
3. **扩展方向限制**：主控板左右两侧各只能扩展一个设备，向下最多可扩展两个设备，最多形成 2×3 的网格布局。

### ESP32-S3 主机示例

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) | ✓ | 图形库示例 |
| [Keyboard](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) | ✓ | 键盘输入示例 |
| [Rotary_Encoder](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) | ✓ | 旋转编码器 |
| [Shortcut-Keys](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) | ✓ | 快捷键示例 |
| [Lvgl_UI](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) | ✓ | 出厂 UI 示例 |
| [Original_Test_2](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) | ✓ | 出厂测试程序 |
| [T-Keyboard-S3-Pro_IIC_Command](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro) | ✓ | I2C 命令示例 |

### STM32 从机示例

| 示例 | 描述 |
| :------ | :---------- |
| [KEY](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/tree/stm32cubeg0-firmware-package_V1.6.2/examples/KEY) | 按键测试 |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/tree/stm32cubeg0-firmware-package_V1.6.2/examples/Original_Test) | 出厂测试 |
| [WS2812B](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/tree/stm32cubeg0-firmware-package_V1.6.2/examples/WS2812B) | RGB 灯效 |
| [T-Keyboard-S3-Pro_IIC_Command](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/tree/stm32cubeg0-firmware-package_V1.6.2/examples/T-Keyboard-S3-Pro_IIC_Command) | I2C 命令 |

### PlatformIO（ESP32-S3）
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展。
2. 从 GitHub 下载 [T-Keyboard-S3-Pro 项目代码](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro)。
3. 在 VS Code 中打开项目文件夹，在 `platformio.ini` 中取消注释所需示例环境。
4. 点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino（ESP32-S3）
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)，安装 Espressif Systems 的 ESP32 开发板支持包。
2. 将项目 `libraries` 目录中的所有库复制到 Arduino 库目录。
3. 在"工具"菜单中选择正确的设置：

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
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | Default (6.25MB APP/3.43MB SPIFFS) |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

### STM32CubeProgrammer（从机固件烧录）
1. 安装 [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html)。
2. 选择正确的调试器（STLINK 或 UART），选择 firmware 文件，点击 "Start Programming" 开始下载。

从机调试口位于 "T-Keyboard-S3-Pro_Keyboard" 板背面。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html)
4. [ARM Keil μVision5](https://www.keil.arm.com/mdk-community/)

## 视频

## 主要特点

- ESP32-S3-WROOM-1：16 MB Flash，8 MB PSRAM（Octal SPI），Wi-Fi + 蓝牙 5.0
- STM32G030F6P6：64 KB Flash，8 KB SRAM，负责实时键盘输入处理
- 4 × 0.85 英寸 GC9107 TFT LCD（128×128），多屏独立显示
- 4 × 热插拔机械按键（兼容 MX 结构，含屏幕按键）
- WS2812C RGB 可编程灯效，旋转编码器
- 磁吸扩展接口，最多连接 6 个从机，支持 2×3 网格布局
- 2 × STEMMA QT/QWIIC 接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| 主处理器 | ESP32-S3R8 Dual-core LX7 |
| 协处理器 | STM32G030F6P6 |
| Flash | 16MB (ESP32-S3) + 64KB (STM32) |
| PSRAM | 8MB (ESP32-S3) + 8KB (STM32) |
| 屏幕 | 4 × 0.85 英寸 GC9107 TFT LCD (128×128) |
| 按键 | 4 × 热插拔机械按键 + 旋转编码器 |
| RGB | WS2812C |
| 无线 | 2.4 GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × TYPE-C |
| 扩展接口 | 2 × QWIIC + 4 × 磁吸接口 |
| 尺寸 | 164 × 46 × 42mm |

## 引脚图

<img src="/products/other/t-keyboard-s3-pro/index/image/t-keyboard-s3-pro-zh.jpg" alt="T-Keyboard S3 Pro 引脚图" width=100%>

### ESP32-S3 引脚映射

| I2C_1 | ESP32S3 引脚 |
| :----: | :----: |
| SDA | IO42 |
| SCL | IO2 |

| I2C_2（外扩） | ESP32S3 引脚 |
| :----: | :----: |
| SDA | IO6 |
| SCL | IO7 |

| LCD 屏幕 | ESP32S3 引脚 |
| :----: | :----: |
| MOSI | IO40 |
| SCLK | IO41 |
| DC | IO39 |
| RST | IO38 |
| BL | IO1 |

| 旋转编码器 | ESP32S3 引脚 |
| :----: | :----: |
| KNOB_DATA_A | IO4 |
| KNOB_DATA_B | IO5 |
| KNOB_DATA_KEY | IO0 |

### STM32G030 引脚映射

| I2C | STM32G0 引脚 |
| :----: | :----: |
| SDA | PC14/PB9 |
| SCL | PB7/PB8 |

| KEY | STM32G0 引脚 |
| :----: | :----: |
| KEY1 | PA1 |
| KEY2 | PA0 |
| KEY3 | PC15 |
| KEY4 | PB3/PB4/PB5/PB6 |
| KEY5 | PA12[PA10] |

| LCD CS | STM32G0 引脚 |
| :----: | :----: |
| LCD_CS1 | PA4 |
| LCD_CS2 | PA11[PA9] |
| LCD_CS3 | PB0/PB1/PB2/PA8 |
| LCD_CS4 | PA6 |
| LCD_CS5 | PA5 |

| WS2812B | STM32G0 引脚 |
| :----: | :----: |
| WS2812B_DATA | PA7 |

## 尺寸图

## 原理图

* [SCH_T-Keyboard-S3-Pro_MCU_V1.1](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_MCU_V1.1.pdf)
* [SCH_T-Keyboard-S3-Pro_Keyboard_V1.1](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Keyboard_V1.1.pdf)
* [SCH_T-Keyboard-S3-Pro_Magnet_Female_V1.0](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Magnet_Female_V1.0.pdf)
* [SCH_T-Keyboard-S3-Pro_Magnet_Male_V1.0](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Magnet_Male_V1.0.pdf)
* [SCH_T-Keyboard-S3-Pro_Keyboard_LCD_FPC_V1.0](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Keyboard_LCD_FPC_V1.0.pdf)

## 数据手册

* [ESP32-S3-WROOM-1 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf)
* [STM32G030F6P6 Datasheet](https://www.st.com/en/microcontrollers-microprocessors/stm32g030f6.html#documentation)
* [GC9107 Datasheet](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/information/GC9107_DataSheet_V1.2.pdf)
* [WS2812C Datasheet](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/information/WS2812C-2020.pdf)

## 软件开发

* [T-Keyboard-S3-Pro GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [lvgl-8.3.5](https://github.com/lvgl/lvgl)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)

## 常见问题

* **Q. T-Keyboard S3 Pro 的主要特点是什么？**  
  A. 高端可编程键盘，具有 4 块独立 LCD 屏幕、热插拔机械按键、RGB 灯效、旋转编码器和双 MCU 架构，支持多设备磁吸扩展。

* **Q. 如何扩展从机设备？**  
  A. 通过磁吸接口连接从机设备，最多支持 6 个设备组成 2×3 网格布局。注意每个从机必须有唯一的 I2C 地址。

* **Q. 热插拔机械按键支持哪些轴体？**  
  A. 支持标准的热插拔机械轴体，兼容大多数 MX 结构的机械轴，且按键中间有开孔支持屏幕 FPC 连接。

* **Q. 连接多个设备时需要注意什么？**  
  A. 需要将 LED 亮度调低至 10，并注意扩展方向限制（左右各 1 个，向下最多 2 个）。

* **Q. 双 MCU 架构有什么优势？**  
  A. ESP32-S3 处理复杂的图形界面和无线通信，STM32 负责实时输入处理，确保低延迟的按键响应。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Keyboard-S3-Pro_MCU_V1.1 | 2024-09-05 | 初始版本 |
| T-Keyboard-S3-Pro_Keyboard_V1.1 | 2024-09-05 | 键盘板初始版本 |
