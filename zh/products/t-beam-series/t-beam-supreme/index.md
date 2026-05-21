---
title: LILYGO T-Beam SUPREME
show_source: false
tags: LoRa, GPS, ESP32-S3, IoT, Sensor
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam-supreme" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam-supreme/assets/t-beam-supreme-1.jpg', alt: 'T-Beam Supreme 正面图' },
  { src: '/products/t-beam-series/t-beam-supreme/assets/t-beam-supreme-2.jpg', alt: 'T-Beam Supreme 实物图' },
  { src: '/products/t-beam-series/t-beam-supreme/assets/t-beam-supreme-pin-en.jpg', alt: 'T-Beam Supreme 引脚图' }
]" />

## 概述

T-BEAM-SUPREME V3.0 是一款高性能多功能的物联网开发板，基于 ESP32-S3FN8 双核处理器设计，支持 Wi-Fi 802.11 b/g/n 和蓝牙 5.0，提供灵活的无线连接能力。开发板兼容 Arduino-IDE、MicroPython 和 VS Code 编程环境，搭载 8MB PSRAM 和 8MB Flash 存储，并集成六轴传感器（QMI8658）、温湿度气压传感器（BME280）、3.7V 18650 电池供电接口及多功能按键（Boot/复位/电源）。

其配备 1.3 英寸 SH1106 OLED 屏幕（128×64 分辨率，I2C 接口），支持 LoRa SX1262 模块（覆盖 433/868/915/923MHz 频段），可实现远距离低功耗通信。此外，用户可灵活选择 Ublox MAX-M10S 或 L76K GPS 模块版本，满足精准定位需求，适用于智能硬件、环境监测及物联网节点开发等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [LoRaSender](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa 发送示例 |
| [LoRaReceiver](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa 接收示例 |
| [RadioLib Examples](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 支持 SX1262/LR1121 |
| [GPS TinyGPS](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | GPS 定位示例 |
| [GPS UBlox](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | UBlox GPS 示例 |
| [BME280 Sensor](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 温湿度气压传感器 |
| [QMI8658 IMU](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 六轴传感器 |
| [OLED Display](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | OLED 显示示例 |
| [PMU AXP2101](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 电源管理示例 |
| [Factory Test](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | 出厂测试 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)。
2. 在 VS Code 扩展中搜索并安装 `PlatformIO` 插件，安装完成后重启。
3. 打开 `文件` -> `打开文件夹` -> 选择 `LilyGo-LoRa-Series` 目录，等待依赖库安装。
4. 打开 `platformio.ini`，在 `default_envs` 下选择开发板名称并取消注释。
5. 取消一行 `src_dir = xxxx` 的注释，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | CDC and JTAG |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 8MB (64Mb) |
| Core Debug Level | None |
| Partition Scheme | 8M Flash (3MB APP/1.5MB SPIFFS) |
| PSRAM | QSPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |
| Upload Mode | UART0/Hardware CDC |

4. 在 `utilities.h` 中取消对应型号的注释（`T_BEAM_S3_SUPREME_SX1262` 或 `T_BEAM_S3_SUPREME_LR1121`）。
5. 选择正确的端口，上传程序。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3FN8：8 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- SX1262 LoRa（433/868/915/923MHz，可选 LR1121 双频段）
- GPS：MAX-M10S（U-blox，可选）或 L76K
- 1.3 英寸 SH1106 OLED（128×64，I2C）
- QMI8658 六轴传感器 + BME280 温湿度气压传感器 + QMC6310 磁力计（可选）
- AXP2101 电源管理，支持 3.7V 18650 电池 + USB-C 供电
- PCF85063ATL RTC，TF 卡槽，QWIIC 接口

## 产品参数

<img src="/products/t-beam-series/t-beam-supreme/assets/t-beam-supreme-info-zh.jpg" alt="T-Beam Supreme 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN8 Dual-core LX7 |
| Flash | 8MB |
| PSRAM | 8MB |
| 屏幕 | 1.3 英寸 SH1106 OLED (128×64) |
| LoRa | SX1262 (433/868/915/923MHz) / 可选 LR1121 |
| GPS | MAX-M10S (U-blox) 或 L76K |
| RTC | PCF85063ATL (I²C) |
| 传感器 | QMI8658 (六轴) + BME280 (温湿度气压) |
| 电源管理 | AXP2101 |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × TYPE-C (USB + OTG) |
| 扩展接口 | Wi-Fi 天线 + LoRa 天线 + GPS 天线 + QWIIC |
| IO 接口 | 2.54mm 2×13 扩展 IO 接口 |
| 按键 | RESET + BOOT + Power |
| 电池 | 支持 3.7V 18650 电池 |
| 尺寸 | 114 × 33 × 28mm |

### I2C 设备地址

| 设备 | 7-Bit 地址 | 总线 |
| :-- | :--: | :--: |
| OLED 屏幕 (SH1106) | 0x3C / 0x3D | I2C Bus 0 |
| 磁力计 (QMC6310U/N) | 0x1C / 0x3C | I2C Bus 0 |
| 磁力计 (QMC6309) | 0x7C | I2C Bus 0 |
| 温湿度气压 (BME280) | 0x77 | I2C Bus 0 |
| RTC (PCF8563) | 0x51 | I2C Bus 1 |
| 电源管理 (AXP2101) | 0x34 | I2C Bus 1 |

### LR1121 参数（可选版本）

| 参数 | 值 |
| :-- | :-- |
| 频率范围 | 830-945 MHz，2.4-2.5 GHz |
| 速率（LoRa Sub1G） | 0.018 K~62.5 Kbps |
| 速率（LoRa 2.4G） | 0.476 K~101.5 Kbps |
| 调制方式 | LoRa，(G)FSK，LR-FHSS |

## 引脚图

<img src="/products/t-beam-series/t-beam-supreme/assets/t-beam-supreme-pin-en.jpg" alt="T-Beam Supreme 引脚图" width=100%>

<img src="/products/t-beam-series/t-beam-supreme/assets/t-beam-s3-core.jpg" alt="T-Beam S3 核心板" width=100%>

<img src="/products/t-beam-series/t-beam-supreme/assets/t-beam-supreme-3.jpg" alt="T-Beam Supreme 扩展板" width=100%>

### 引脚映射

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| Uart1 TX | 43（外部 QWIIC 接口） | ✅ |
| Uart1 RX | 44（外部 QWIIC 接口） | ✅ |
| SDA | 17 | ❌ |
| SCL | 18 | ❌ |
| RTC INT | 14 | ❌ |
| IMU INT | 33 | ❌ |
| IMU CS | 34 | ❌ |
| SPI MOSI | 35 | ❌ |
| SPI MISO | 37 | ❌ |
| SPI SCK | 36 | ❌ |
| SD CS | 47 | ❌ |
| GNSS TX | 8 | ❌ |
| GNSS RX | 9 | ❌ |
| GNSS PPS | 6 | ❌ |
| GNSS Wake | 7 | ❌ |
| LoRa SCK | 12 | ❌ |
| LoRa MISO | 13 | ❌ |
| LoRa MOSI | 11 | ❌ |
| LoRa RST | 5 | ❌ |
| LoRa DIO1 | 1 | ❌ |
| LoRa BUSY | 4 | ❌ |
| LoRa CS | 10 | ❌ |
| BOOT 按键 | 0 | ❌ |
| PMU IRQ | 40 | ❌ |
| PMU SDA | 42 | ❌ |
| PMU SCL | 41 | ❌ |

> 注意：LoRa 有独立 SPI 总线；其他外设共享主 SPI 总线。T-BeamSupreme 有三种磁力计版本（QMC6310N, QMC6310U, QMC6309），设备地址各不同。GPS 热启动备用电源由 18650 电池提供。

## 尺寸图

## 原理图

* [T-Beam Supreme 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_T-BeamS3Supreme.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [MAX-M10S Datasheet](https://www.u-blox.com/zh/product/max-m10-series)
* [BME280 Datasheet](https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/)
* [QMI8658 Datasheet](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/lib/SensorsLib/datasheet/QMI8658A%20Datasheet%20Rev1.0.pdf)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [AXP202X_Library](https://github.com/lewisxhe/AXP202X_Library)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)

## 常见问题

* **Q. 如何选择 GPS 模块版本？**  
  A. MAX-M10S 精度更高功耗更低，L76K 成本更有优势。根据定位精度和预算需求选择。

* **Q. LoRa 通信距离不理想怎么办？**  
  A. 检查天线连接，确保在开阔环境使用，调整 LoRa 参数（扩频因子、带宽等）。

* **Q. 电池供电时间短？**  
  A. 启用深度睡眠模式，关闭不必要的传感器和外设，选择低功耗运行模式。

* **Q. 设备无法烧录程序？**  
  A. 确保 USB CDC On Boot 已启用，按住 BOOT 按键再点击 RESET 进入下载模式。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Beam-SUPREME_V3.0 | — | 初始版本 |
