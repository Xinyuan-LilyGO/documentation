---
title: LILYGO LoRa32
show_source: false
tags: LoRa, ESP32, OLED, IoT, SX1276, SX1278
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/lora3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-lora32/assets/lora32-1.jpg', alt: 'LoRa32 正面图' },
  { src: '/products/t3-series/t3-lora32/assets/lora32-2.jpg', alt: 'LoRa32 实物图' },
  { src: '/products/t3-series/t3-lora32/assets/lora32-pin.jpg', alt: 'LoRa32 引脚图' }
]" />

## 概述

LILYGO T3_V1.6.1（LoRa32 V2.1.6）多协议物联网开发板是一款集成 ESP32 主控（4MB Flash）、0.96 英寸 SSD1306 I²C OLED 屏（128×64 分辨率）及低功耗 LoRa 模块的复合型硬件平台。

开发板支持 SX1276/SX1278 双频段 LoRa 模块，提供 Wi-Fi + 蓝牙 4.2 + BLE 无线协议，支持双电源供电模式（USB 接口或 3.7V Li-Po 电池，带电源切换开关），并具备 TF 卡扩展槽和硬件复位/启动按键。LoRa 模块可实现 +14dBm 发射功率与 9.9mA 超低接收电流，适用于远程环境监测、LoRaWAN 终端、低功耗传感器网关等物联网场景开发。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [LoRaSender](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa 发送（SX1276/SX1278） |
| [LoRaReceiver](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa 接收（SX1276/SX1278） |
| [RadioLib Examples](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | RadioLib 通信示例 |
| [LoRaWAN OTAA](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRaWAN 入网 |
| [OLED Display](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | OLED 显示示例 |
| [Factory Test](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 出厂测试 |

### PlatformIO
1. 首次使用需安装 CH9102 USB 驱动：[Windows](https://www.wch-ic.com/downloads/CH343SER_ZIP.html) / [macOS](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)
2. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
3. 从 GitHub 下载 [LilyGo-LoRa-Series 项目代码](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)，在 VS Code 中打开。
4. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 首次使用需安装 CH9102 USB 驱动。
2. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
3. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
4. 在"工具"菜单中选择正确的设置，如下表所示。

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
| PSRAM | Enabled |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

5. 在 `utilities.h` 中取消对应型号的注释（如 `T3_V1_3_SX1276`、`T3_V1_3_SX1278`）。
6. 选择正确的端口，上传程序。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32：4 MB Flash，Wi-Fi + 蓝牙 4.2 + BLE
- SX1276（868/915/923MHz）或 SX1278（433MHz）LoRa，+14dBm 发射，9.9mA 接收
- 0.96 英寸 SSD1306 OLED（128×64，I2C）
- CH9102 USB 转串口，MicroSD（TF）卡槽
- 双电源：Micro USB 或 3.7V Li-Po（带电源开关）

## 产品参数

<img src="/products/t3-series/t3-lora32/assets/lora32-info-zh.jpg" alt="LoRa32 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32 (Xtensa LX6 双核) |
| Flash | 4MB |
| 屏幕 | 0.96 英寸 SSD1306 OLED (128×64) |
| LoRa | SX1276 (868/915/923MHz) / SX1278 (433MHz) |
| 串口芯片 | CH9102 |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi + Bluetooth 4.2 + BLE |
| USB | 1 × Micro USB |
| 扩展接口 | 3D Wi-Fi 天线 + LoRa 天线 + 1.25mm JST GH 电池 |
| IO 接口 | 2.54mm 2×13 扩展 IO |
| 按键 | RESET + BOOT |
| 固定孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 36 × 15mm |

<img src="/products/t3-series/t3-lora32/assets/lora32-version.jpg" alt="LoRa32 版本对比图" width=100%>

## 引脚图

<img src="/products/t3-series/t3-lora32/assets/lora32-pin.jpg" alt="LoRa32 引脚图" width=100%>

### 引脚映射（LoRa32 V1.3）

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| OLED SDA | 21 | ❌ |
| OLED SCL | 22 | ❌ |
| LoRa SCK | 18 | ❌ |
| LoRa MISO | 19 | ❌ |
| LoRa MOSI | 27 | ❌ |
| LoRa RST | 14 | ❌ |
| LoRa DIO0 | 26 | ❌ |
| LoRa DIO1 | 33 | ❌ |
| LoRa CS | 18 | ❌ |
| 电池 ADC | 35 | ❌ |

### 引脚映射（LoRa32 V1.6.1）

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| OLED SDA | 21 | ❌ |
| OLED SCL | 22 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 15 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 19 | ❌ |
| LoRa MOSI | 27 | ❌ |
| LoRa RST | 23 | ❌ |
| LoRa DIO1 | 33 | ❌ |
| LoRa DIO2 | 32 | ❌ |
| LoRa CS | 18 | ❌ |
| 电池 ADC | 35 | ❌ |
| 板载 LED | 25 | ❌ |

### 引脚映射（LoRa32 TCXO）

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| OLED SDA | 21 | ❌ |
| OLED SCL | 22 | ❌ |
| SD CS | 13 | ❌ |
| SD MOSI | 15 | ❌ |
| SD MISO | 2 | ❌ |
| SD SCK | 14 | ❌ |
| LoRa SCK | 5 | ❌ |
| LoRa MISO | 19 | ❌ |
| LoRa MOSI | 27 | ❌ |
| LoRa RST | 23 | ❌ |
| LoRa DIO0 | 26 | ❌ |
| LoRa DIO1 | 32 | ❌ |
| LoRa CS | 7 | ❌ |
| LoRa TCXO EN | 12 | ❌ |
| 电池 ADC | 35 | ❌ |
| 板载 LED | 25 | ❌ |

> 注意：
> - GPIO33 及以上的 GPIO 只能用于输入功能，不能设置为输出
> - 上传代码时需要移除 SD 卡，否则代码无法下载
> - TCXO EN 必须在初始化 LoRa 之前设置为高电平

## 尺寸图

## 原理图

* [LoRa32 T3_V1.3 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V1.3.pdf)
* [LoRa32 T3_V1.6.1 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V1.6.1.pdf)
* [LoRa32 T3_TCXO 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V3.0.pdf)

## 数据手册

* [ESP32 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32_datasheet_cn.pdf)
* [SX1276 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)
* [SX1278 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1278)
* [SSD1306 Datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)
* [CH9102 Datasheet](https://www.wch.cn/products/CH9102.html)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [arduino-LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [U8g2](https://github.com/olikraus/u8g2)
* [Adafruit_SSD1306](https://github.com/adafruit/Adafruit_SSD1306)

## 常见问题

* **Q. LoRa32 和 T3-S3 有什么区别？**  
  A. LoRa32 使用 ESP32 + SX1276/78，T3-S3 使用 ESP32-S3 + SX1262/80，处理器和 LoRa 芯片都不同。

* **Q. 如何选择 SX1276 和 SX1278 版本？**  
  A. 根据所在地区频率法规：SX1276 支持 868/915/923MHz，SX1278 支持 433MHz。

* **Q. OLED 屏幕不显示？**  
  A. 检查 I2C 地址（SSD1306 通常为 0x3C），确认 SDA=IO21、SCL=IO22 的连接。

* **Q. 程序烧录失败？**  
  A. 确保 CH9102 驱动安装正确，按住 BOOT 按键再点击 RESET 进入下载模式。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3_V1.6.1 (LoRa32 V2.1.6) | — | 多协议物联网开发板 |
