---
title: LILYGO T-2Can
show_source: false
tags: CAN, ESP32-S3, Communication
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-2can" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-2can/assets/t-2can-1.jpg', alt: 'T-2Can 正面图' },
  { src: '/products/t-sim-series/t-2can/assets/t-2can-2.jpg', alt: 'T-2Can 实物图' },
  { src: '/products/t-sim-series/t-2can/assets/t-2can-pin.jpg', alt: 'T-2Can 引脚图' }
]" />

## 概述

LILYGO T-2CAN 是一款高性能、紧凑型嵌入式通信模块，基于 ESP32-S3 微控制器（集成 Wi-Fi 与蓝牙 BLE），创新性地集成双路独立 MCP2515 CAN 总线控制器。严格遵循 CAN 2.0B 协议标准，支持高达 1 Mb/s 的通信速率，提供两路完全独立的 CAN 通道接口（含 CAN_H、CAN_L、信号地 SGND 及电源地 DGND），每路配备 6 个 29 位验收滤波器及 2 个 29 位验收屏蔽码。支持 DC 12~24V 宽压输入，具备信号隔离设计，适用于工业级通信应用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [can](https://github.com/Xinyuan-LilyGO/T-2Can/tree/main/examples/can) | ✓ | | CAN 通信示例 |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-2Can/tree/main/examples/original_test) | ✓ | | 出厂测试程序 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-2Can 项目代码](https://github.com/Xinyuan-LilyGO/T-2Can)，在 VS Code 中打开。
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

- ESP32-S3-WROOM-1U：16MB Flash，8MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 双路独立 MCP2515 CAN 总线控制器（CAN 2.0B，最高 1 Mb/s）
- 每路 6 个 29 位验收滤波器 + 2 个 29 位验收屏蔽码
- DC 12~24V 宽压输入，信号地与电源地隔离
- IPEX 天线接口，QWIIC 扩展接口

## 产品参数

<img src="/products/t-sim-series/t-2can/assets/t-2can-info.jpg" alt="T-2Can 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1U (MCN16R8) |
| Flash | 16MB |
| PSRAM | 8MB (OPI PSRAM) |
| CAN 控制器 | MCP2515 × 2 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5 (LE) |
| USB | 1 × USB OTG (Type-C) |
| 电源输入 | DC 12~24V |
| 扩展接口 | 2 × CAN 接口 + 2 × 2.54mm 13pin + 2 × QWIIC |
| 天线 | IPEX 天线接口 |
| 按键 | RESET + BOOT |
| 尺寸 | 18 × 39 × 91mm |

## 引脚图

<img src="/products/t-sim-series/t-2can/assets/t-2can-pin.jpg" alt="T-2Can 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-2Can V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/project/T-2Can_V1.0.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [MCP2515 Datasheet](https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP2515-Stand-Alone-CAN-Controller-with-SPI-20001801J.pdf)
* [TD501MCANFD Datasheet](https://github.com/Xinyuan-LilyGO/T-2Can-Pro/blob/main/information/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A Datasheet](https://github.com/Xinyuan-LilyGO/T-2Can-Pro/blob/main/information/TD501D485H-A_K-CUT.pdf)

## 软件开发

* [T-2Can GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-2Can)

### 依赖库

* [FastLED](https://github.com/FastLED/FastLED)
* [mcp2515](https://github.com/autowp/arduino-mcp2515)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. Arduino IDE 提示升级库文件，应该升级吗？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

* **Q. UART 接口没有输出数据？**  
  A. 默认将 USB 接口作为 UART0 调试输出。PlatformIO 用户修改 `platformio.ini` 中 `-DARDUINO_USB_CDC_ON_BOOT=true` 为 `false`；Arduino 用户在工具菜单将 "USB CDC On Boot" 改为 "Disabled"。

* **Q. 板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键重新下载程序。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-2Can_V1.0 | — | 初始版本 |
