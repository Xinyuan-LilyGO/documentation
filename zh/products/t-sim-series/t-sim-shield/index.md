---
title: LILYGO T-Sim Shield 扩展板使用指南
show_source: false
tags: Sim系列, 扩展板, LoRa, 电流检测, RS485, INA3221
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim-shield" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim-shield/index/image/t-sim-shield-1.jpg', alt: 'T-Sim Shield 正面图' },
  { src: '/products/t-sim-series/t-sim-shield/index/image/intervface.png', alt: 'T-Sim Shield 接口图' },
  { src: '/products/t-sim-series/t-sim-shield/index/image/battery_current_detection_mode.png', alt: 'T-Sim Shield 电流检测' }
]" />

> **⚠️ 重要警告：** 通电前必须检查跳线帽和 DIP 开关设置，错误配置可能导致硬件损坏。

## 概述

T-Sim Shield 是专为 **LilyGo T-Sim 系列** 开发的多功能扩展板，集成了以下功能：

1. **三路电流检测**：基于 INA3221 芯片，支持独立电流监测
2. **LoRa 无线通信**：集成 SX1262 模块，支持远距离传输
3. **宽压直流输入**：支持 7~36V 直流输入，内置稳压电路
4. **RS485 接口**：硬件自动收发控制，支持工业通信
5. **I2C/SPI 扩展**：提供标准接口连接外设

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [SimShield_LoRaWAN](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShield_LoRaWAN/) | ✓ | | LoRaWAN 通信 |
| [SimShield_LoRaReceive](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShield_LoRaReceive/) | ✓ | | LoRa 接收 |
| [SimShield_LoRaTransmit](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShield_LoRaTransmit/) | ✓ | | LoRa 发送 |
| [SimShieldCurrentSensor](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShieldCurrentSensor/) | ✓ | | 电流传感器 |
| [SimShieldFactory](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SimShieldFactory/) | ✓ | | 出厂测试程序 |
| [SerialRS485](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/examples/SerialRS485/) | ✓ | | RS485 通信 |

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)

## 视频

## 主要特点

- INA3221 三路独立电流检测
- SX1262 LoRa 模块（远距离无线通信）
- RS485 接口（硬件自动收发，波特率 ≤115200）
- 宽压直流输入：7~36V，+5V 最大 2A 输出
- SD 卡接口（SPI 重映射）
- I2C 接口（支持 0.96 英寸 OLED）
- 2.00mm 2Pin JST 5V 外部电源接口
- 兼容全系列 LilyGo T-Sim 主板

## 产品参数

| 特性 | 参数 |
| :--- | :--- |
| DC 输入电压 | 7~36V |
| 电池输入电压 | 4.2V（最大） |
| +5V 输出电流 | 最大 2A |
| +3.3V 输出 | 由主板提供（建议负载 ≤100mA） |
| LoRa 模块 | SX1262 |
| 电流检测 | INA3221（三通道） |

## 引脚图

T-Sim Shield 引脚映射根据主板型号不同而不同，请按对应表格配置。

### SIM7000G / A7670X / A7608X（ESP32 版）

![配置图](/products/t-sim-series/t-sim-shield/index/image/sim7000_a7608_a7670_esp32.png)

| 跳线/开关 | 设置 | 说明 |
| :--- | :---: | :--- |
| J25 | IO → LP2 | 选择逻辑电平 |
| J21 | RP1 → 5V | 选择 5V 电源 |
| SW3 | ON | 启用此配置 |
| SW1/SW2/SW4 | OFF | 必须关闭 |

适用型号：[SIM7000G-ESP32](https://lilygo.cc/products/t-sim7000g) / [A7608X-ESP32](https://lilygo.cc/products/t-a7608e-h) / [A7670X-ESP32](https://lilygo.cc/products/t-sim-a7670e)

> **注意：** A7670X/A7608X 需移除电阻才能使用 T-Sim Shield，详情见[此链接](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/issues/160#issuecomment-2409860411)。

| 信号 | GPIO |
| :--- | :---: |
| SIMSHIELD_MOSI | 23 |
| SIMSHIELD_MISO | 19 |
| SIMSHIELD_SCK | 18 |
| SIMSHIELD_SD_CS | 32 |
| SIMSHIELD_RADIO_BUSY | 39 |
| SIMSHIELD_RADIO_CS | 5 |
| SIMSHIELD_RADIO_IRQ | 34 |
| SIMSHIELD_RADIO_RST | 15 |
| SIMSHIELD_RS_RX | 13 |
| SIMSHIELD_RS_TX | 14 |
| SIMSHIELD_SDA | 21 |
| SIMSHIELD_SCL | 22 |

### SIM7600X（ESP32 版）

![配置图](/products/t-sim-series/t-sim-shield/index/image/sim7600_esp32.png)

| 跳线/开关 | 设置 | 说明 |
| :--- | :---: | :--- |
| J25 | IO → BAT | 选择电池供电 |
| J21 | RP2 → 5V | 选择 5V 电源 |
| SW3 | ON | 启用此配置 |
| SW1/SW2/SW4 | OFF | 必须关闭 |

适用型号：[SIM7600X-ESP32](https://lilygo.cc/products/t-sim7600)

> **注意：** GPIO32（SD CS）、GPIO34（RADIO IRQ）、GPIO12（RS RX）已被 T-Sim Shield 占用，分别复用为 SIM7600 DTR / STATUS / LED 引脚，请勿用于其他用途。

### SIM7670G（ESP32-S3 版）

![配置图](/products/t-sim-series/t-sim-shield/index/image/sim7670g_esp32s3.png)

| 跳线/开关 | 设置 | 说明 |
| :--- | :---: | :--- |
| J25 | IO → LP2 | 选择逻辑电平 |
| J21 | RP1 → 5V | 选择 5V 电源 |
| SW2 | ON | 启用此配置 |
| SW1/SW3/SW4 | OFF | 必须关闭 |

适用型号：[SIM7670G-ESP32S3](https://lilygo.cc/products/t-sim-7670g-s3)

| 信号 | GPIO |
| :--- | :---: |
| SIMSHIELD_MOSI | 15 |
| SIMSHIELD_MISO | 7 |
| SIMSHIELD_SCK | 16 |
| SIMSHIELD_SD_CS | 46 |
| SIMSHIELD_RADIO_BUSY | 38 |
| SIMSHIELD_RADIO_CS | 39 |
| SIMSHIELD_RADIO_IRQ | 6 |
| SIMSHIELD_RADIO_RST | 40 |
| SIMSHIELD_RS_RX | 41 |
| SIMSHIELD_RS_TX | 42 |
| SIMSHIELD_SDA | 2 |
| SIMSHIELD_SCL | 1 |

### A7608X（ESP32-S3 版）

![配置图](/products/t-sim-series/t-sim-shield/index/image/a7608_esp32s3.png)

| 跳线/开关 | 设置 | 说明 |
| :--- | :---: | :--- |
| J25 | IO → LP2 | 选择逻辑电平 |
| J21 | 不连接 | - |
| SW2 | ON | 启用此配置 |
| SW1/SW3/SW4 | OFF | 必须关闭 |

适用型号：[A7608X-ESP32S3](https://lilygo.cc/products/t-a7608e-h)

| 信号 | GPIO |
| :--- | :---: |
| SIMSHIELD_MOSI | 11 |
| SIMSHIELD_MISO | 10 |
| SIMSHIELD_SCK | 12 |
| SIMSHIELD_SD_CS | 45 |
| SIMSHIELD_RADIO_BUSY | 38 |
| SIMSHIELD_RADIO_CS | 39 |
| SIMSHIELD_RADIO_IRQ | 9 |
| SIMSHIELD_RADIO_RST | 40 |
| SIMSHIELD_RS_RX | 41 |
| SIMSHIELD_RS_TX | 42 |
| SIMSHIELD_SDA | 2 |
| SIMSHIELD_SCL | 1 |

### SIM7080G（ESP32-S3 PMU 版）

![配置图](/products/t-sim-series/t-sim-shield/index/image/sim7080g_esp32s3.png)

| 跳线/开关 | 设置 | 说明 |
| :--- | :---: | :--- |
| J25 | 不连接 | - |
| J21 | 不连接 | - |
| SW4 | ON | 启用此配置 |
| SW1/SW2/SW3 | OFF | 必须关闭 |

> **重要：** SIM7080G 需将 18650 电池座正极焊接到指定位置，并移除主板 18650 电池座。`DC5` 和 `VSYS` 引脚必须空置。

![焊接示意图](/products/t-sim-series/t-sim-shield/index/image/h606-sim7080.png)

适用型号：[SIM7080G-ESP32S3](https://lilygo.cc/products/t-sim7080-s3)

| 信号 | GPIO |
| :--- | :---: |
| SIMSHIELD_MOSI | 11 |
| SIMSHIELD_MISO | 13 |
| SIMSHIELD_SCK | 12 |
| SIMSHIELD_SD_CS | 21 |
| SIMSHIELD_RADIO_BUSY | 48 |
| SIMSHIELD_RADIO_CS | 45 |
| SIMSHIELD_RADIO_IRQ | 8 |
| SIMSHIELD_RADIO_RST | 47 |
| SIMSHIELD_RS_RX | 2 |
| SIMSHIELD_RS_TX | 1 |
| SIMSHIELD_SDA | 44 |
| SIMSHIELD_SCL | 43 |

### 标准系列（SIM7000G / A7670X / SIM7670G / SIM7080G）

![配置图](/products/t-sim-series/t-sim-shield/index/image/standard%20series.png)

| 跳线/开关 | 设置 | 说明 |
| :--- | :---: | :--- |
| J25 | IO → LP2 | 选择逻辑电平 |
| J21 | RP1 → 5V | 选择 5V 电源 |
| SW1 | ON | 启用此配置 |
| SW2/SW3/SW4 | OFF | 必须关闭 |

| 信号 | GPIO |
| :--- | :---: |
| SIMSHIELD_MOSI | 11 |
| SIMSHIELD_MISO | 13 |
| SIMSHIELD_SCK | 12 |
| SIMSHIELD_SD_CS | 37 |
| SIMSHIELD_RADIO_BUSY | 15 |
| SIMSHIELD_RADIO_CS | 38 |
| SIMSHIELD_RADIO_IRQ | 14 |
| SIMSHIELD_RADIO_RST | 39 |
| SIMSHIELD_RS_RX | 40 |
| SIMSHIELD_RS_TX | 41 |
| SIMSHIELD_SDA | 3 |
| SIMSHIELD_SCL | 2 |

### 接口说明

**电池连接**

![电池连接](/products/t-sim-series/t-sim-shield/index/image/battery_sokect.png)

通过跳线帽将外部电池接口连接到主板电池接口。如果外接电池，请勿在主板的 18650 插座上安装电池。

**电流监测设置**

![电流监测](/products/t-sim-series/t-sim-shield/index/image/battery_current_detection_mode.png)

- **垂直跳线帽：** 将电池电流路由至 INA3221 通道 2，可监测充放电电流
- **无跳线帽：** 监测压线端子接口电流
- 使用电池监测时，请勿连接压线端子

**电流检测通道**

![电流检测接口](/products/t-sim-series/t-sim-shield/index/image/intervface.png)

| 通道 | 可用性 | 说明 |
| :--- | :---: | :--- |
| CH1 | 条件可用 | 如果电池通过跳线连接则不可用 |
| CH2 | 条件可用 | 如果选择为电池监测则压线端子不可用 |
| CH3 | 始终可用 | 自由使用 |

端子定义：**IN+** 电流流入 / **G** 负载 GND / **IN-** 电流流出

## 尺寸图

## 原理图

* [T-SimShield-Rev1.0 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/tree/main/schematic/shield/T-SimShield-Rev1.0.pdf)

## 数据手册

* [SX1262 Datasheet](/datasheet/DS_SX1261_SX1262.pdf)
* [INA3221 Datasheet](/datasheet/ina3221.pdf)
* [3D5ETR00372 太阳能板规格](/datasheet/3D5ETR00372_233153V01_20250828.pdf)

## 软件开发

* [LilyGo-Modem-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)

## 常见问题

* **Q. 使用前最重要的注意事项是什么？**  
  A. 通电前务必检查跳线帽和 DIP 开关设置，不同主板型号对应不同的配置，错误配置可能导致硬件损坏。

* **Q. SD 卡应该插在哪里？**  
  A. 使用 T-Sim Shield 后，SD 卡必须插入扩展板，而非主板。T-Sim Shield 重新映射了 SPI 接口。

* **Q. 如何选择正确的主板配置？**  
  A. 根据主板型号参考对应的跳线/开关配置表，确保只开启与所用主板对应的 SW 开关，其余保持 OFF。

* **Q. RS485 通信有什么限制？**  
  A. 建议通信波特率 ≤115200，硬件已自动处理收发控制，无需软件干预。

* **Q. A7670X / A7608X 使用时有特殊要求吗？**  
  A. 需移除主板上的相关电阻才能使用 T-Sim Shield，详情见[此 GitHub Issue](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/issues/160#issuecomment-2409860411)。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-SimShield-Rev1.0 | 2024-08-10 | 初始版本，支持全系列 Sim 主板 |
| T-SimShield-Rev1.1 | 2024-11-05 | 优化电源电路，增强稳定性 |
