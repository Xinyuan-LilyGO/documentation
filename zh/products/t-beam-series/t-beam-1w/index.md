---
title: LILYGO T-Beam 1W
show_source: false
tags: LoRa, GPS, ESP32-S3, OLED, AXP2101
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam-1w" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam-1w/index/image/t-beam-1w-1.jpg', alt: 'T-Beam 1W 正面图' },
  { src: '/products/t-beam-series/t-beam-1w/index/image/t-beam-1w-2.jpg', alt: 'T-Beam 1W 实物图' },
  { src: '/products/t-beam-series/t-beam-1w/index/image/t-beam-1w-pin.jpg', alt: 'T-Beam 1W 引脚图' }
]" />

## 概述

T-Beam-1W 是一款集成了 **ESP32-S3** 双核处理器、**LoRa SX1262** 模块、**GPS L76K** 定位模块、**SH1106 OLED 屏幕**和 **AXP2101 电源管理芯片**的高性能物联网开发板。板载 TF 卡槽、QWIIC 接口、外部天线接口，支持 Wi-Fi、蓝牙 5.0 和 LoRa 通信，适用于远距离通信、定位追踪、环境监测等应用场景。

> **使用须知：**
> 1. 本板不对外接 7.4V 电池充电，仅由电池供电。
> 2. 发射前务必连接天线，否则易损坏 RF 模块。
> 3. 引脚表中标有 \* 的 GPIO 已连接内部模块，无法复用。
> 4. 本板上 RF 模块最大输出功率为 32dBm。

## 快速开始

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
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | Enabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 在 `utilities.h` 中取消对应型号（`T_BEAM_1W`）的注释。
5. 选择正确的端口，上传程序。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)

## 视频

## 主要特点

- ESP32-S3FN8：16 MB Flash，8 MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- SX1262 LoRa（830~945MHz），最大输出功率 32dBm
- L76K 多星座 GPS 定位
- 1.3 英寸 SH1106 OLED（128×64）
- AXP2101 电源管理，7.4V 双节电池供电
- TF 卡扩展，QWIIC 接口，风扇控制

## 产品参数

<img src="/products/t-beam-series/t-beam-1w/index/image/t-beam-1w-info-zh.jpg" alt="T-Beam 1W 概述图" width=100%>

| 组件 | 规格 |
| :--: | :--: |
| MCU | ESP32-S3FN8，双核 LX7，240MHz |
| Flash | 16MB |
| PSRAM | 8MB (OPI) |
| 无线 | Wi-Fi 2.4GHz + 蓝牙 5.0 |
| LoRa | SX1262（830~945MHz），最大 32dBm |
| GPS | L76K 多星座定位 |
| 屏幕 | 1.3 英寸 SH1106 OLED（128×64） |
| 电源管理 | AXP2101 |
| 存储 | TF 卡扩展 |
| 接口 | QWIIC、TF 卡槽、USB Type-C |
| 按键 | BOOT + RESET + 自定义 + 电源键 |
| 尺寸 | 133 × 43 × 27mm |

### 电气参数

| 参数 | 值 |
| :-- | :-- |
| USB-C 输入电压 | 3.9V ~ 6V |
| 充电功能 | 不支持 |
| 电池电压 | 7.4V |

> 建议电池放电能力 ≥ 2A，否则高功率发射时可能触发保护。

## 引脚图

<img src="/products/t-beam-series/t-beam-1w/index/image/t-beam-1w-pin.jpg" alt="T-Beam 1W 引脚图" width=100%>

### 引脚映射

| 名称 | GPIO | 可用 |
| :-- | :--: | :--: |
| Uart1 TX | 43 | ✅ |
| Uart1 RX | 44 | ✅ |
| I2C SDA | 8 | ❌ |
| I2C SCL | 9 | ❌ |
| SPI MOSI | 11 | ❌ |
| SPI MISO | 12 | ❌ |
| SPI SCK | 13 | ❌ |
| SD CS | 10 | ❌ |
| GPS TX | 6 | ❌ |
| GPS RX | 5 | ❌ |
| GPS PPS | 7 | ❌ |
| GPS Wake-up | 16 | ❌ |
| LoRa RESET | 3 | ❌ |
| LoRa DIO1 | 1 | ❌ |
| LoRa CS | 15 | ❌ |
| LoRa LDO EN | 40 | ❌ |
| LoRa Ctrl | 21 | ❌ |
| LoRa BUSY | 38 | ❌ |
| BOOT 按键 | 0 | ❌ |
| 自定义按键 | 17 | ❌ |
| 板载 LED | 18 | ❌ |
| NTC ADC | 14 | ❌ |
| 电池 ADC | 4 | ❌ |
| 风扇控制 | 41 | ❌ |

> 注意：LDO EN 为模块内部使能引脚（高电平打开 Radio）；LoRa Ctrl 为内部 LNA 控制引脚（接收时高电平，发送/休眠时低电平）。

### 按键与 LED 说明

| 按键 | 功能 |
| :-- | :-- |
| IO17 | 自定义按键 |
| BOOT | 下载模式/自定义 |
| RST | 复位 |
| PWR | 长按 6 秒关机 |

| LED | 说明 |
| :-- | :-- |
| IO18 LED | 受 GPIO18 控制 |
| PPS LED | 随 GPS 脉冲闪烁 |
| USB LED | USB 连接时亮起 |

## 尺寸图

## 原理图

* [T-Beam-1W V1.0 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T-Beam_1W_V1.0.pdf)

## 数据手册

* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [AXP2101 Datasheet](https://www.x-powers.com/en/product/axp2101)
* [L76K Datasheet](https://www.quectel.com/product/gnss-l76k)

## 软件开发

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## 常见问题

* **Q. 为什么烧录时 USB 设备不停闪烁？**  
  A. 请检查是否选择了正确的开发板型号，并确保 `utilities.h` 中 `T_BEAM_1W` 宏定义已打开。

* **Q. 为什么 LoRa 发送距离很近？**  
  A. 请确认天线已连接，且 RF Switch 切换正确，输出功率设置合理。

* **Q. 电池供电时为何无法开机？**  
  A. 请检查电池电压是否在 7.4V 左右，电池放电能力是否 ≥ 2A。

* **Q. GPS 定位慢或无信号？**  
  A. 请确保在室外空旷环境使用，并检查天线连接。

## RF 参数说明

| 频段 | 模块型号 | 频率范围 | 最大输出功率 | 调制方式 |
| :-- | :-- | :-- | :-- | :-- |
| 868/915MHz | SX1262 (XY16P35) | 830~950MHz | 32dBm | LoRa/FSK/GMSK |
| 433MHz | SX1262 (XY16P354) | 400~520MHz | 32dBm | LoRa/FSK/GMSK |

> **重要：** 发射前务必连接天线；建议 PA 稳定时间 > 800µs；发射前需提前切换 RF Switch 至 TX 通道，否则可能损坏 PA。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Beam-1W_V1.0 | 2024-06-15 | 初始版本 |
| T-Beam-1W_V1.1 | 2024-08-22 | 优化电源电路，增加风扇控制 |
