---
title: LILYGO T-Connect Pro
show_source: false
tags: ESP32-S3, LoRa, CAN, Ethernet, Industrial
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-connect-pro" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-1.jpg', alt: 'T-Connect Pro 正面图' },
  { src: '/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-2.jpg', alt: 'T-Connect Pro 侧面图' }
]" />

## 概述

T-Connect-Pro 是一款基于 ESP32-S3 的多功能工业级控制与通信模块，集成 LoRa（SX1262 芯片）、ST7796 LCD 显示屏、CAN总线、以太网接口及双串口（RS232/RS485），支持 12~24V 宽电压输入与 10A 继电器输出，适用于复杂工业自动化与物联网场景。

**核心特性**
- 多协议通信：集成LoRa远距离传输、CAN总线控制、以太网、RS232/RS485串口
- 工业级设计：支持12~24V宽电压输入，10A继电器输出
- 丰富接口：3层板堆叠设计，集成触摸屏、传感器、QWIIC扩展接口
- 实时显示：ST7796 TFT屏幕提供直观的数据显示和操作界面

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :--: | :----------------: | :--: |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Original_Test) | ✓ | 出厂程序 |
| [CAN](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CAN) | ✓ | CAN总线通信示例 |
| [RS485](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485) | ✓ | RS485通信示例 |
| [RS485_2](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485_2) | ✓ | RS485通信示例（变体） |
| [Ethernet_HTTP](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_HTTP) | ✓ | 以太网HTTP示例 |
| [Ethernet_Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Relay) | ✓ | 以太网继电器控制 |
| [Ethernet_Scan](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Scan) | ✓ | 以太网网络扫描 |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX) | ✓ | 屏幕显示测试 |
| [GFX_SX1262](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX_SX1262) | ✓ | 屏幕 + LoRa综合示例 |
| [CST226SE](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CST226SE) | ✓ | 触摸屏测试 |
| [Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Relay) | ✓ | 继电器控制示例 |
| [SX1262_Receive_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX1262_Receive_Interrupt) | ✓ | LoRa中断接收示例 |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_PingPong) | ✓ | LoRa收发测试 |
| [SX126x_Channel_Activity_Detection_Blocking](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Blocking) | ✓ | LoRa信道活动检测（阻塞模式） |
| [SX126x_Channel_Activity_Detection_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Interrupt) | ✓ | LoRa信道活动检测（中断模式） |
| [raw](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/raw) | ✓ | LoRa裸数据传输 |
| [ttn_abp](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_abp) | ✓ | TTN ABP入网示例 |
| [ttn_otaa](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_otaa) | ✓ | TTN OTAA入网示例 |

### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2. 打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3. 在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4. 扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5. 打开项目文件中的"platformio.ini"，在"[platformio]"目录下取消注释选择你需要烧录的示例程序，然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件。
3. 打开"工具"菜单栏->选择"开发板"->"开发板管理器"，搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。
4. 打开菜单栏"文件"->"首选项"，将项目目录下的"libraries"文件夹里的所有库文件复制到Arduino库目录。
5. 在"工具"菜单中选择正确的设置，如下表所示。

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
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6. 选择正确的端口，点击右上角"<kbd>→</kbd>"进行烧录。

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- ESP32-S3-R8 双核 LX7 @ 240 MHz，16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- SX1262 LoRa 433~920 MHz（HPD16A 模块）
- W5500 以太网，TD501MCANFD CAN总线
- RS485（TD501D485H-A）+ RS232（TD501D232H）双串口
- ST7796 TFT LCD 222×480，CST226SE 触摸屏
- 10A 继电器输出
- 支持 12~24V DC 宽电压输入，3层板堆叠设计

## 产品参数

<img src="/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-info.jpg" alt="T-Connect Pro 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-R8 |
| Flash | 16MB |
| PSRAM | 8MB |
| 以太网 | W5500 (SPI) |
| LoRa | HPD16A/SX1262，433~920MHz |
| CAN | TD501MCANFD (TWAI) |
| RS485 | TD501D485H-A (UART) |
| RS232 | TD501D232H (UART) |
| 继电器 | 10A 输出 |
| 屏幕 | ST7796 TFT LCD，222×480 (SPI) |
| 触摸 | CST226SE (I²C) |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB + OTG (TYPE-C) |
| 扩展接口 | 1 × QWIIC |
| 按键 | 1 × RESET + 1 × BOOT |
| 电源输入 | 12~24V DC / 5V USB |
| 安装孔 | 4 × M3 |
| 尺寸 | 88 × 72 × 60 mm（含底座） |

## 引脚图

<img src="/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-pinout.jpg" alt="T-Connect Pro 引脚图" width=100%>

### 引脚映射

| 屏幕引脚 | ESP32S3 引脚 |
| :------: | :----------: |
| MOSI | IO11 |
| MISO | IO13 |
| DC | IO41 |
| SCLK | IO12 |
| CS | IO21 |
| BL | IO46 |

| 触摸引脚 | ESP32S3 引脚 |
| :------: | :----------: |
| SDA | IO39 |
| SCL | IO40 |
| RST | IO47 |
| INT | IO3 |

| 以太网引脚 | ESP32S3 引脚 |
| :--------: | :----------: |
| MOSI | IO11 |
| MISO | IO13 |
| RST | IO48 |
| SCLK | IO12 |
| CS | IO10 |
| INT | IO9 |

| LoRa 引脚 | ESP32S3 引脚 |
| :-------: | :----------: |
| MOSI | IO11 |
| MISO | IO13 |
| RST | IO42 |
| SCLK | IO12 |
| CS | IO14 |
| INT/DIO1 | IO45 |
| BUSY | IO38 |

| RS485 引脚 | ESP32S3 引脚 |
| :--------: | :----------: |
| UART_TX | IO17 |
| UART_RX | IO18 |

| RS232 引脚 | ESP32S3 引脚 |
| :--------: | :----------: |
| UART_TX | IO4 |
| UART_RX | IO5 |

| CAN 引脚 | ESP32S3 引脚 |
| :------: | :----------: |
| TWAI_TX | IO6 |
| TWAI_RX | IO7 |

## 尺寸图

<img src="/products/t-connect-series/t-connect-pro/index/image/t-connect-pro-3.jpg" alt="T-Connect Pro 尺寸图" width=100%>

## 原理图

* [T-Connect-Pro_V1.0](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/project/T-Connect-Pro_V1.0.pdf)
* [T-Connect-Pro_V1.1](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/project/T-Connect-Pro_V1.1.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [HPD16A Module](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/HPDTEK_HPD16A_TCXO_V1.1.pdf)
* [SX1262 Datasheet](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/DS_SX1261-2_V2_1.pdf)
* [TD501MCANFD](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D485H-A_K-CUT.pdf)
* [TD501D232H](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D232H.pdf)

## 软件开发

* [T-Connect-Pro GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Connect-Pro)

### 依赖库

* 触摸：[Arduino_DriveBus-1.1.2](https://github.com/Xk-w/Arduino_DriveBus)
* LoRa：[RadioLib-6.6.0](https://github.com/jgromes/RadioLib)
* 屏幕：[Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* 以太网：[Ethernet_V2.0.0](http://www.arduino.cc/en/Reference/Ethernet)

## 常见问题

* **Q. 看了以上教程还是不会搭建编程环境怎么办？**  
  A. 可以参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 为什么打开Arduino IDE时会提醒升级库文件？**  
  A. 选择不升级，不同版本的库可能不兼容，建议保持当前版本。

* **Q. LoRa 模块支持哪些频段？**  
  A. LoRa 模块支持 433~920 MHz，具体版本可根据需求选择。

* **Q. 为什么我的板子一直烧录失败？**  
  A. 请按住 BOOT 按键重新下载程序。

* **Q. T-Connect Pro 是否有可用于外部扩展的 GPIO？**  
  A. T-Connect Pro 的大部分 GPIO 已被使用，可通过 I²C I/O 扩展器扩展外部 I/O。

* **Q. 从主板为外部低功耗模块供电是否安全？**  
  A. 安全，主板可为传感器或小电流扩展设备直接供电，但大功耗设备建议使用外部电源。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-Connect-Pro_V1.0 | — | 初始版本 |
