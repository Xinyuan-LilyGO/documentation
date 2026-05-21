---
title: LILYGO T7 C6
show_source: false
tags: ESP32-C6, Wi-Fi 6, Bluetooth 5, Thread, Zigbee
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t7-c6" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t7-series/t7-c6/assets/t7_c6_1.jpg', alt: 'T7 C6 正面图' },
  { src: '/products/t7-series/t7-c6/assets/t7_c6_2.jpg', alt: 'T7 C6 实物图' },
  { src: '/products/t7-series/t7-c6/assets/t7_c6_3.jpg', alt: 'T7 C6 引脚图' }
]" />

## 概述

LILYGO T7-C6 是一款基于 ESP32-C6 芯片的开发板，集成了 Wi-Fi 6、蓝牙 5（BLE）以及 Thread/Zigbee 支持，适用于物联网和无线通信项目。该开发板提供丰富的 GPIO 引脚（GPIO0-GPIO23），支持 ADC（模数转换）功能，并内置 4MB Flash 存储。

其引脚布局兼容常见的 JST SH 4-Pin 接口（GND、3V、TX、RX），同时具备 SPI（SDIO）通信能力，适合连接传感器或其他外设。此外，开发板还支持 5V 和 3.3V 电源输出，方便为不同设备供电，集成 TP4065 电池充电芯片，是开发者实现智能家居、远程监控等应用的理想选择。

## 快速开始

### 示例支持

| 示例 | 支持的 IDE 和版本 | 描述 |
| ------  | ------  | ------ |
| [Battery Voltage Measure](https://github.com/Xinyuan-LilyGO/T7-C6/tree/main/examples/Battery_Voltage) | `[Arduino IDE][esp32_v3.0.0-rc3]` | 电池电压测量 |
| [ESP32 Deep Sleep](https://github.com/Xinyuan-LilyGO/T7-C6/tree/main/examples/ESP32_Deep_Sleep) | `[Arduino IDE][esp32_v3.0.0-rc3]` | 深度睡眠示例 |
| [Original Test](https://github.com/Xinyuan-LilyGO/T7-C6/tree/main/examples/Original_Test) | `[Arduino IDE][esp32_v3.0.0-rc3]` | 出厂初始测试文件 |
| [Wifi STA](https://github.com/Xinyuan-LilyGO/T7-C6/tree/main/examples/Wifi_STA) | `[Arduino IDE][esp32_v3.0.0-rc3]` | Wi-Fi STA 示例 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download)。
2. 在扩展中搜索并安装 "PlatformIO IDE"。
3. 从 GitHub 下载 [T7-C6 项目代码](https://github.com/Xinyuan-LilyGO/T7-c6)。
4. 在 VS Code 中打开项目文件夹，编辑 `platformio.ini` 文件选择所需环境。
5. 连接设备，编译并烧录程序。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32C6 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 160MHz |
| Flash Size | 4MB (32Mb) |
| Flash Mode | QIO |
| Partition Scheme | Huge APP (3MB No OTA/1MB SPIFFS) |
| Core Debug Level | None |

4. 选择正确端口，编译并烧录。

### 开发平台
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [VS Code](https://code.visualstudio.com/)

## 视频

## 主要特点

- ESP32-C6-MINI-1：RISC-V 32位单核 @ 160 MHz，4 MB Flash
- Wi-Fi 6（802.11ax）+ 蓝牙 5 LE + IEEE 802.15.4（Thread/Zigbee）
- TP4065 电池充电芯片，支持 5V/3.3V 输出
- 丰富的 GPIO（GPIO0-GPIO23），支持 SPI、UART、I2C、ADC
- QWIIC 接口，2mm 定位孔

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-C6-MINI-1 |
| Flash | 4MB |
| 无线 | Wi-Fi 6 + Bluetooth 5 LE + Thread/Zigbee |
| 充电芯片 | TP4065 |
| GPIO | GPIO0-GPIO23 |
| 通信接口 | SPI, UART, I2C, ADC |
| 扩展接口 | QWIIC |
| 按键 | RST + BOOT |
| 电源输入 | 5V/500mA |
| 定位孔 | 2mm |

## 引脚图

<img src="/products/t7-series/t7-c6/assets/t7_c6_3.jpg" alt="T7 C6 引脚图" width=100%>

### 引脚映射

| 功能模块 | ESP32-C6 引脚 | 描述 |
| :------: | :----------: | :--- |
| UART0 | GPIO20(TX), GPIO21(RX) | 默认串口 |
| UART1 | GPIO8(TX), GPIO9(RX) | 备用串口 |
| SPI | GPIO10-13 | SPI接口 |
| I2C | GPIO4(SDA), GPIO5(SCL) | I2C接口 |
| ADC | GPIO0-3 | 模拟输入 |
| PWM | 多个GPIO | PWM输出 |
| QWIIC | GPIO4(SDA), GPIO5(SCL) | I2C扩展 |

## 尺寸图

## 原理图

* [T7-C6_V1.0](https://github.com/Xinyuan-LilyGO/T7-C6/blob/main/project/T7-C6_V1.0.pdf)

## 数据手册

* [ESP32-C6 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
* [TP4065](https://github.com/Xinyuan-LilyGO/T7-C6/blob/main/information/TP4065-4.2V-SOT25-R.pdf)
* [ESP32-C6 Technical Reference Manual](https://www.espressif.com.cn/sites/default/files/documentation/esp32-c6_technical_reference_manual_en.pdf)

## 软件开发

* [T7-C6 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T7-c6)

### 依赖库

* [ESP32 Arduino Core](https://github.com/espressif/arduino-esp32)
* [WiFi](https://github.com/espressif/arduino-esp32/tree/master/libraries/WiFi)
* [BluetoothSerial](https://github.com/espressif/arduino-esp32/tree/master/libraries/BluetoothSerial)

## 常见问题

* **Q. ESP32-C6 相比 ESP32 有什么优势？**  
  A. ESP32-C6 支持 Wi-Fi 6，提供更好的网络性能和能效，同时集成了 Thread/Zigbee 协议支持。

* **Q. 如何为开发板供电？**  
  A. 通过 Type-C 接口提供 5V 电源，或者通过电池接口连接锂电池。

* **Q. 支持哪些无线协议？**  
  A. 支持 Wi-Fi 6、Bluetooth 5 LE 和 IEEE 802.15.4（Thread/Zigbee）。

* **Q. 程序烧录失败怎么办？**  
  A. 确保驱动安装正确，按住 BOOT 按键再点击 RESET 进入下载模式。

* **Q. 如何连接外部传感器？**  
  A. 可以通过 GPIO 引脚直接连接，或者使用 QWIIC 接口连接兼容的 I2C 设备。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T7-C6_V1.0 | — | 基于ESP32-C6的Wi-Fi 6开发板初始版本 |
