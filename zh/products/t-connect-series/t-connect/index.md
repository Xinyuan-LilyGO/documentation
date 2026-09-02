---
title: LILYGO T-Connect
show_source: false
tags: ESP32-S3, RS485, CAN, Industrial
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-connect" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-connect-series/t-connect/index/image/t-connect-1.jpg', alt: 'T-Connect 正面图' },
  { src: '/products/t-connect-series/t-connect/index/image/t-connect-2.jpg', alt: 'T-Connect 实物图' },
  { src: '/products/t-connect-series/t-connect/index/image/t-connect-zh-1.jpg', alt: 'T-Connect 引脚图' }
]" />

## 概述

T-Connect 是一款基于 ESP32-S3 芯片的多功能工业通信开发板，搭载 8MB PSRAM 和 16MB Flash，支持 Wi-Fi/蓝牙双模通信及 RS485/CAN 工业协议。拥有 4 组不同模块输出数据，支持 CAN 和 RS485 两种不同模块相互切换，最大支持三组 RS485 和一组 CAN 总线输出不同数据。内置 APA102 RGB LED 驱动、10A 继电器输出和 QWIIC 扩展接口，支持 7~12V 宽压输入，适用于物联网设备、工业自动化等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/Original_Test) | ✓ | | 出厂初始测试 |
| [APA102_Blink](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/APA102_Blink) | ✓ | | APA102 LED 示例 |
| [CAN](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/CAN) | ✓ | | CAN 总线通信示例 |
| [RS485](https://github.com/Xinyuan-LilyGO/T-Connect/tree/main/examples/RS485) | ✓ | | RS485 通信示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Connect 项目代码](https://github.com/Xinyuan-LilyGO/T-Connect)，在 VS Code 中打开。
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

- ESP32-S3-R8：16MB Flash，8MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 最大支持 3 组 RS485（UART）+ 1 组 CAN（TWAI）总线输出
- 支持 CAN 和 RS485 模块相互切换配置
- APA102 RGB LED 驱动，10A 继电器输出
- 7~12V 宽压 DC 输入，4 个 2mm 定位孔

## 产品参数

<img src="/products/t-connect-series/t-connect/index/image/t-connect-zh.jpg" alt="T-Connect 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-R8 |
| Flash | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 通信协议 | RS485 (UART) / CAN (TWAI) |
| LED 驱动 | APA102 |
| 继电器 | 10A 输出 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5 (LE) |
| USB | 1 × USB OTG (Type-C) |
| 输出配置 | 最大 3 组 RS485 + 1 组 CAN 总线 |
| 扩展接口 | 1 × QWIIC 接口 |
| 按键 | RESET + BOOT |
| 电源输入 | 7~12V DC + 5V/500mA USB |
| 安装孔 | 4 × 2mm 定位孔 |
| 尺寸 | 94 × 83 × 13mm |

## 引脚图

<img src="/products/t-connect-series/t-connect/index/image/t-connect-zh-1.jpg" alt="T-Connect 引脚图" width=100%>

### 引脚映射

| LED 引脚 | ESP32-S3 GPIO |
| :--: | :--: |
| APA102_DATA | IO8 |
| APA102_CLOCK | IO3 |

| CAN/RS485 共用引脚 | ESP32-S3 GPIO |
| :--: | :--: |
| TX_1 | IO4 |
| RX_1 | IO5 |
| TX_2 | IO6 |
| RX_2 | IO7 |
| TX_3 | IO17 |
| RX_3 | IO18 |
| TX_4 | IO9 |
| RX_4 | IO10 |

## 尺寸图

## 原理图

* [T-Connect V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Connect/blob/main/project/T-Connect_V1.0.pdf)

## 数据手册

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)
* [TD501MCANFD Datasheet](/datasheet/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A Datasheet](/datasheet/TD501D485H-A_K-CUT.pdf)

## 软件开发

* [T-Connect GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Connect)

### 依赖库

* [FastLED](https://github.com/FastLED/FastLED)
* [ESP32 TWAI](https://github.com/espressif/esp-idf/tree/master/examples/peripherals/twai)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. Arduino IDE 提示升级库文件，应该升级吗？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

* **Q. 如何配置 RS485 和 CAN 模块的切换？**  
  A. 通过板载配置跳线或软件设置来切换，具体方法请参考原理图和示例代码。

* **Q. 板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键重新下载程序。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Connect_V1.0 | — | 初始版本 |
