---
title: T-PCIE
show_source: false
tags: ESP32, PCIe, 蜂窝, 4G, LTE, AXP2101, IoT, 调制解调器
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/a-t-pcie" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-1.jpg', alt: 'T-PCIE 正面' },
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-2.jpg', alt: 'T-PCIE 背面' },
  { src: '/products/t-sim-series/t-pcie/index/image/t-pcie-3.jpg', alt: 'T-PCIE 尺寸图' },
]" />

## 概述

LILYGO T-PCIE 是一款基于 ESP32 的蜂窝开发板，配备 **Mini PCIe（mPCIe）插槽**，支持更换不同的蜂窝调制解调器模块。主控为 **ESP32-WROVER-E**（双核 Xtensa LX6，240 MHz，4 MB / 16 MB Flash，8 MB PSRAM），支持 Wi-Fi 和 Bluetooth 4.2。兼容调制解调器模块包括 **SIM7000G**（NB-IoT/Cat-M）、**SIM7600X**（LTE Cat-4）、**A7608X**、**SIM7670G**、**SIM7080G** 等标准 mPCIe 形式的调制解调器。**AXP2101 PMU** 负责 ESP32 和调制解调器的电源管理。适用于蜂窝 IoT 网关、远程监控节点和便携 LTE/NB-IoT 数据设备。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) | ✓ | | 蜂窝 AT 指令、MQTT、HTTP 示例 |

### PlatformIO

1. 安装 **CH9102 USB 驱动**（[Windows](https://www.wch-ic.com/downloads/CH343SER_ZIP.html) / [Mac OS](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)）
2. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
3. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展，完成后重启
4. 打开 `LilyGo-Modem-Series` 项目文件夹
5. 打开 `platformio.ini`，取消注释与您模块对应的 `default_envs = T-PCIE-XXXX` 行
6. 取消注释目标示例的 `src_dir = examples/xxx` 行（保证只有一行有效）
7. 点击 **✓** 编译，通过 USB-C 连接设备，点击 **→** 上传

### Arduino

1. 安装 **CH9102 USB 驱动**（[Windows](https://www.wch-ic.com/downloads/CH343SER_ZIP.html) / [Mac OS](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)）
2. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 将项目 `lib/` 目录下所有文件夹复制到 Arduino `libraries/` 目录
4. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32 Dev Module** |
| CPU 频率 | 240 MHz (WiFi/BT) |
| Flash 频率 | 80 MHz |
| Flash 模式 | QIO |
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enable** |
| 上传速度 | 921600 |

6. 点击 **上传**

> **注意：** 打开 Arduino IDE 时若提示有库更新，请勿点击更新，更新后可能导致编译失败或覆盖默认配置（如 TinyGSM）。

### 开发平台

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)

## 相关视频

## 主要特性

- ESP32-WROVER-E 双核 Xtensa LX6 @ 240 MHz，Wi-Fi 2.4 GHz + Bluetooth 4.2
- Mini PCIe（mPCIe）插槽，无需改板即可更换调制解调器模块
- 兼容 SIM7000G、SIM7600X、A7608X、SIM7670G、SIM7080G
- AXP2101 PMU，统一管理 ESP32 与调制解调器供电
- Nano SIM 卡槽
- USB-C 供电和编程
- 4 MB 或 16 MB Flash，8 MB PSRAM
- 18650 电池座 + 太阳能充电接口

## 规格参数

| 参数 | 值 |
| :--: | :-: |
| 主控 | ESP32-WROVER-E，双核 LX6 @ 240 MHz |
| Flash | 4 MB 或 16 MB（Quad-SPI） |
| PSRAM | 8 MB（Quad-SPI） |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | 4.2 |
| 蜂窝 | 通过 mPCIe 模块（SIM7000G / SIM7600X / A7608X / SIM7670G / SIM7080G） |
| PMU | AXP2101 |
| SIM 卡 | Nano SIM |
| USB | 1 × USB-C |
| 电池 | 18650 电池座 + JST 太阳能输入 |

## 调制解调器模块兼容性

| 模块 | 标准 | 备注 |
| :--: | :--: | :--- |
| SIM7000G | NB-IoT / LTE Cat-M / GPRS | 含 GPS |
| SIM7600X | LTE Cat-4 | 多区域版本 |
| A7608X | LTE Cat-4 / Cat-1 | 多区域版本 |
| SIM7670G | LTE Cat-1 | 多区域版本 |
| SIM7080G | NB-IoT / Cat-M | 含 GPS |

## 拨码开关

| 编号 | GPIO | ON | OFF |
| :--: | :--: | :- | :-- |
| Pin 1 | 27 | 调制解调器 TX 连接至 ESP | 断开 |
| Pin 2 | 26 | 调制解调器 RX 连接至 ESP | 断开 |
| Pin 3 | NC | 无连接 | 无连接 |
| Pin 4 | PWRKEY | 由 ESP 控制调制解调器开机 | 上电自动开机 |

**ESP 编程模式** — Pin 1 & 2 拨至 ON，Pin 4 拨至 OFF：调制解调器 UART 连接 ESP32，ESP 控制调制解调器电源。

**USB 调制解调器模式** — Pin 1 & 2 拨至 OFF，Pin 4 拨至 ON：调制解调器直接通过 USB 连接 PC，用于更新固件或直接拨号上网。

## 引脚映射

| 名称 | GPIO | 可用 |
| :--- | :--: | :--: |
| 调制解调器 DC 升压使能 | 25 | ❌ |
| 调制解调器 TX | 27 | ❌ |
| 调制解调器 RX | 26 | ❌ |
| 调制解调器 PWRKEY | 4 | ❌ |
| 调制解调器 DTR | 32 | ❌ |
| 调制解调器 RING | 33 | ❌ |
| 板载 LED | 12 | ❌ |
| PMIC IRQ | 35 | ❌ |
| PMIC SDA | 21 | ✅ |
| PMIC SCL | 22 | ✅ |

> - ESP32 GPIO33 及以上仅支持输入，不可用于输出。
> - I2C 引脚已与 AXP2101 PMU 共用，不可更改。
> - 请勿在 GPIO4（PWRKEY）、GPIO25、GPIO32、GPIO33 的引脚排位置连接外部导线。

## 电气参数

| 参数 | 值 |
| :--: | :-: |
| USB-C 输入电压 | 5 V |
| USB-C 最大充电电流 | 1000 mA |
| 电池电压 | 3.7 V |

> 充电电流可通过 AXP2101 PMU 调节，最高 1 A。

## 按键说明

| 按键 | 功能 |
| :--: | :--- |
| EN（靠近 USB-C） | 复位设备 |
| PWR | 长按 1 秒开机；长按 6 秒关机 |

## 天线

| 接口 | 功能 |
| :--: | :--- |
| SIM / MAIN | LTE 主天线 |
| GPS / GNSS | 有源 GPS 天线 |

## LED 指示灯

| LED | 颜色 | 位置 |
| :-: | :--: | :--- |
| 调制解调器状态 | 红色 | 调制解调器模块上 |
| 调制解调器网络状态 | 红色 | 调制解调器模块上 |
| 充电指示 | 蓝色 | 靠近板载 LED |

> 调制解调器状态灯和网络灯无法通过软件关闭。

## 引脚图

## 尺寸图

## 原理图

* [T-PCIE V1.2 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/blob/master/schematic/T-PCIE-V1.2.pdf)

## 数据手册

* [ESP32 数据手册](/datasheet/esp32_datasheet_en.pdf)
* [AXP2101 数据手册](/datasheet/AXP2101_Datasheet_V1.4_en.pdf)

## 软件开发

* [LilyGo-Modem-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### 调制解调器模块页面

* [T-PCIE SIM7600E](sim7600e/index.md)

### 依赖库

* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [PubSubClient](https://github.com/knolleary/pubsubclient)

## 常见问题

* **Q. 无法上传固件。**
  A. 将 GND 与 IO0 短接，按下 RST 后松开，断开 IO0 与 GND，再上传。或按住 BOOT 再按 RST。

* **Q. 检测不到 SIM 卡。**
  A. 请先插入 SIM 卡再上电，上电后热插可能导致无法识别。

* **Q. 兼容哪些蜂窝模块？**
  A. 已测试：SIM7000G、SIM7600X、A7608X、SIM7670G、SIM7080G（标准 mPCIe 封装）。

* **Q. mPCIe 插槽传输的是 PCIe 信号吗？**
  A. 不是。mPCIe 接口通过 UART 信号连接至 ESP32，这是嵌入式设计中集成蜂窝调制解调器的标准方式。

* **Q. 无法让调制解调器进入休眠模式。**
  A. T-PCIE 系列需要移除板上的 VBUS 电感/电阻才能启用调制解调器休眠模式。

* **Q. 切换 USB 和电池供电时设备重启。**
  A. 正常现象，板子没有无缝切换电源方案，无法通过软件改变。

## 更新日志

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.2 | — | 当前版本 |
