---
title: LILYGO T3-TXCO
show_source: false
tags: ESP32-Pico-D4, LoRa, TCXO, OLED, IoT
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-txco/index/image/t3-txco-1.jpg', alt: 'T3-TXCO 正面图' },
  { src: '/products/t3-series/t3-txco/index/image/t3-txco-2.jpg', alt: 'T3-TXCO 实物图' },
  { src: '/products/t3-series/t3-txco/index/image/t3-txco-3.jpg', alt: 'T3-TXCO 引脚图' }
]" />

## 概述

LILYGO LORA32 TCXO 是一款基于 ESP32-Pico-D4 的 LoRa 无线通信开发板，支持 868/915MHz 双频段，搭载温度补偿晶振（TCXO），显著提升频率稳定性（-40°C~+85°C 范围内 ±0.5ppm），适合在温差变化较大的环境中实现高精度通信。板载 SSD1306 OLED 显示屏、TF 卡扩展、太阳能输入接口，支持 USB/锂电池/太阳能多种供电方式，适用于智能农业、远程传感器、工业监控等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [SX1276_PingPong](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/LoRa/T3_TCXO/SX1276_PingPong) | ✓ | | LoRa 通信示例 |
| [OLED](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/OLED) | ✓ | | OLED 显示示例 |
| [PMU](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/examples/PMU) | ✓ | | 电源管理示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [LilyGo-LoRa-Series 项目代码](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | 240MHz (WiFi/BT) |
| Flash Mode | QIO |
| Flash Frequency | 80MHz |
| Flash Size | **4MB (32Mb)** |
| Core Debug Level | None |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 在 `utilities.h` 中取消对应型号（`T3_V3_0_SX1276_TCXO`）的注释。
5. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-Pico-D4：4MB Flash，2MB PSRAM，Wi-Fi + 蓝牙 4.2 + BLE
- SX1276 LoRa（868/915MHz），TCXO 温度补偿晶振（±0.5ppm，-40°C~+85°C）
- SSD1306 I2C OLED 显示屏
- 太阳能输入，支持 USB/锂电池/太阳能多种供电
- TF 卡扩展，2 × QWIIC 接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-Pico-D4 |
| Flash | 4MB |
| PSRAM | 2MB |
| 屏幕 | SSD1306 I2C OLED |
| LoRa | SX1276 (868/915MHz) |
| TCXO | 温度补偿晶振 |
| 存储 | TF 卡扩展 |
| 无线 | Wi-Fi + Bluetooth 4.2 + BLE |
| USB | 1 × USB Type-C |
| 扩展接口 | 2 × QWIIC + 2.54mm 2×13 GPIO |
| 天线接口 | 天线座子 + SMA 天线接口 |
| 电源选项 | USB / 3.7V 锂电池 / 太阳能输入 |
| 按键 | RESET + BOOT |
| 安装孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 27 × 13mm |

### RF 参数

| 参数 | 规格 |
| :-- | :-- |
| RF 模块 | SX1276 |
| 频率范围 | 840~945MHz |
| 传输速率（LoRa） | 0.018K~37.5Kbps |
| 传输速率（FSK） | 1.2K~300Kbps |
| 调制方式 | FSK, GFSK, MSK, GMSK, LoRa, OOK |

## 引脚图

<img src="/products/t3-series/t3-txco/index/image/t3-txco-3.jpg" alt="T3-TXCO 引脚图" width=100%>

### 引脚映射

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| OLED (SSD1306) SDA | 21 | ❌ |
| OLED (SSD1306) SCL | 22 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 15 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa (SX1276) SCK | 5 | ❌ |
| LoRa (SX1276) MISO | 19 | ❌ |
| LoRa (SX1276) MOSI | 27 | ❌ |
| LoRa (SX1276) RESET | 23 | ❌ |
| LoRa (SX1276) DIO0 | 26 | ❌ |
| LoRa (SX1276) DIO1 | 32 | ❌ |
| LoRa (SX1276) CS | 7 | ❌ |
| LoRa (SX1276) TCXO EN | 12 | ❌ |
| Battery ADC | 35 | ❌ |
| 板载 LED | 25 | ❌ |

## 尺寸图

## 原理图

* [T3-TXCO V3.0 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V3.0.pdf)

## 数据手册

* [ESP32-Pico-D4 Datasheet](/datasheet/esp32-pico-d4_datasheet_en.pdf)
* [SX1276 Datasheet](/datasheet/SX1276-7-8-9_Datasheet.pdf)
* [SSD1306 Datasheet](/datasheet/SSD1306.pdf)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [u8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [arduino-LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [RadioLib](https://github.com/jgromes/RadioLib)

## 常见问题

* **Q. 如何调节外接天线电阻？**  
  A. 参考下图调整电阻方向：  
  <img src="/products/t3-series/t3-txco/index/image/t3-txco-4.jpg" alt="天线电阻调节" width=60%>

* **Q. TCXO 相比普通晶振有什么优势？**  
  A. TCXO（温度补偿晶振）在温度变化时能保持更高的频率稳定性，适合环境温度变化大的应用场景。

* **Q. 支持哪些供电方式？**  
  A. 支持 USB Type-C、3.7V 锂电池和太阳能输入，可通过电池开关切换。

* **Q. 为什么板子烧录失败？**  
  A. 请按住 "BOOT" 按键同时按 "RST" 按键，释放 "RST" 后进入下载模式重新烧录。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3-TXCO_V3.0 | — | 初始版本 |
