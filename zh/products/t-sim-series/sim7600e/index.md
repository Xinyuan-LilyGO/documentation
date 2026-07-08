---
title: LILYGO T-PCIE SIM7600E
show_source: false
tags: SIM7600E, LTE, 4G, mini PCIe, GNSS
---

# {{ $frontmatter.title }}

<ImageGallery :columns="2" :images="[
  { src: '/products/t-sim-series/sim7600e/index/image/sim7600e.jpg', alt: 'T-PCIE SIM7600E 正面图' },
  { src: '/products/t-sim-series/sim7600e/index/image/sim7600e-r.jpg', alt: 'T-PCIE SIM7600E 背面图' }
]" />

## 概述

T-PCIE SIM7600E 是一款基于 **SIM7600E** 芯片的 **mini PCIe 规格 LTE 调制解调器模块**，设计用于插入 T-PCIE 主板的 mPCIe 插槽。支持 LTE-FDD/LTE-TDD、HSPA+、GSM/GPRS/EDGE 多模无线通信，最大下行速率 10 Mbps，最大上行速率 5 Mbps。集成多星座 GNSS 定位、内置 TCP/IP/HTTP/HTTPS/FTP 协议栈，USB 驱动支持 Windows/Linux/Android。AT 命令与 SIM7600 系列兼容，适用于车联网、监控设备、工业路由器及远程 IoT 设备。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-T-PCIE](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) | ✓ | | AT 指令、MQTT、HTTP 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场搜索并安装 **PlatformIO IDE**
3. 克隆 [LilyGo-T-PCIE](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) 仓库并用 VS Code 打开
4. 打开 `platformio.ini`，取消注释目标示例的 `src_dir` 行
5. 点击 **✓** 编译，点击 **→** 烧录

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 将项目 `lib/` 目录下所有文件夹复制到 Arduino `libraries/` 目录
3. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32 Wrover Module** |
| CPU 频率 | 240 MHz (WiFi/BT) |
| Flash 模式 | QIO |
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enable** |
| 上传速度 | 921600 |

4. 在 sketch 中打开 `utilities.h`，取消注释 `#define LILYGO_T_SIM7600X`
5. 点击 **上传**

### 开发平台

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)

## 相关视频

## 主要特点

- SIM7600E LTE Cat-4 调制解调器，mini PCIe 接口
- LTE-FDD B1/B3/B5/B8/B20，GSM 900/1800 MHz
- 最大下行 10 Mbps / 上行 5 Mbps
- 集成多星座 GNSS 定位
- 内置 TCP/IP、HTTP/HTTPS、FTP/FTPS 协议栈
- USB 2.0 接口，支持 Windows/Linux/Android 驱动
- AT 命令与 SIM7600 系列兼容

## 调制解调器参数

| 参数 | 规格 |
| :--: | :--: |
| 模块型号 | SIM7600E |
| 封装规格 | mini PCIe |
| 标准 | LTE Cat-4 |
| LTE-FDD 频段 | B1/B3/B5/B8/B20 |
| GSM 频段 | 900 / 1800 MHz |
| 最大下行速率 | 10 Mbps |
| 最大上行速率 | 5 Mbps |
| 定位 | 多星座 GNSS |
| 接口 | UART、USB 2.0、GPIO |
| AT 命令 | 兼容 SIM7600 系列 |
| SIM 卡 | Nano SIM |

> **注意：** SIM7600E 频段覆盖欧洲、中东、非洲、韩国及泰国。其他地区请参考下方模块差异表或查阅规格书。

## 模块差异

| 型号 | GPS | 语音通话 | 短信 | 频段 |
| :--: | :-: | :------: | :--: | :--- |
| SIM7600E | ✅ | ✅ | ✅ | LTE-FDD: B1/B3/B5/B8/B20；GSM: 900/1800 MHz |

> 语音通话功能需要板载音频解码芯片，请确认购买版本。发送 `AT+SIMCOMATI` 可查询模块固件及硬件版本。

## 拨码开关

| 编号 | GPIO | ON | OFF |
| :--: | :--: | :- | :-- |
| Pin 1 | 27 | 调制解调器 TX 连接至 ESP | 断开 |
| Pin 2 | 26 | 调制解调器 RX 连接至 ESP | 断开 |
| Pin 3 | NC | 无连接 | 无连接 |
| Pin 4 | PWRKEY | 由 ESP 控制调制解调器开机 | 上电自动开机 |

**ESP 编程模式** — Pin 1 & 2 拨至 ON（调制解调器 UART 连接 ESP），Pin 4 拨至 OFF（ESP 控制调制解调器电源）。

**USB 调制解调器模式** — Pin 1 & 2 拨至 OFF，Pin 4 拨至 ON。用于通过 PC 更新调制解调器固件或直接拨号上网。

## 引脚映射

| 名称 | GPIO |
| :--- | :--: |
| 调制解调器 TX | 27 |
| 调制解调器 RX | 26 |
| 调制解调器 PWRKEY | 4 |
| 调制解调器 RING | 33 |
| 调制解调器 DTR | 32 |
| 调制解调器 Flight（飞行模式） | 25 |
| 调制解调器 Status | 34 |
| 板载 LED | 12 |
| SD SCK | 14 |
| SD MISO | 2 |
| SD MOSI | 15 |
| SD CS | 13 |
| 电池 ADC | 35 |
| 太阳能 ADC | 36 |
| 默认 SDA | 21 |
| 默认 SCL | 22 |

> **注意：**
> - **调制解调器 Flight 引脚（GPIO25）** 必须置高才能连接蜂窝网络，低电平 = 飞行模式。
> - ESP32 GPIO33 及以上仅支持输入，不可用于输出。
> - 请勿在 GPIO4（PWRKEY）、GPIO25、GPIO32、GPIO33 的引脚排位置连接外部导线。
> - 上传固件前请拔出 SD 卡（SD 卡使用 GPIO2 作为 CS 引脚）。

## 电气参数

| 参数 | 值 |
| :--: | :-: |
| USB-C 输入电压 | 5 V |
| 太阳能输入电压 | 5 ~ 6 V |
| 最大充电电流 | 500 mA |
| 电池电压 | 3.7 V |
| VBUS（引脚排） | 5 V |
| VBAT（引脚排） | 最高 4.2 V |

> - 请使用 USB-A 转 USB-C 线缆供电，不可使用 USB-C 转 USB-C（如苹果电脑 USB-C 口无法直接供电）。
> - VBUS 仅在连接 USB-C 时有电压输出；仅使用电池时 VBUS 无输出。
> - USB/VBUS 输入需能提供至少 2 A 峰值电流，电压不可低于 5 V，否则触发自动关机保护。

## 电池保护参数

| 参数 | 值 |
| :--: | :-: |
| 过压保护阈值 | 4.30 V |
| 欠压保护阈值 | 2.5 V |
| 过放电流保护 | 3 A |

## 按键说明

| 按键 | 功能 |
| :--: | :--- |
| RST（靠近调制解调器） | 复位设备 |
| PWR（靠近调制解调器） | 首次接入电池时按下以激活电池供电 |

## 天线

| 接口 | 功能 |
| :--: | :--- |
| MAIN | LTE 主天线 |
| AUX | LTE 分集天线（可选，不接也可正常使用） |
| GPS | 有源 GPS 天线（3.3 V，IPEX 一代） |

## LED 指示灯

| LED | 颜色 | 位置 |
| :-: | :--: | :--- |
| 调制解调器状态 | 红色 | 靠近调制解调器 |
| 调制解调器网络状态 | 红色 | 靠近调制解调器 |
| 充电指示 | 红色 | 靠近电源开关 |
| 充电完成 | 绿色 | 靠近电源开关 |
| 板载 LED | 蓝色 | 靠近 ESP 模块 |

> 调制解调器状态灯和网络灯无法通过软件关闭。

## 引脚图

<img src="/products/t-sim-series/sim7600e/index/image/sim7600e-1.jpg" alt="SIM7600E 引脚图" width="60%">

## 尺寸图

## 原理图

* [T-PCIE V1.2 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/blob/master/schematic/T-PCIE-V1.2.pdf)

## 数据手册

* [SIM7600E 规格书](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/Files/T-SIM7600E-PCIE.pdf)
* [SIMCOM SIM7600X 官方页面](https://cn.simcom.com/product/SIM7600X.html)

## 软件开发

* [LilyGo-T-PCIE GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE)

### 依赖库

## 常见问题

* **Q. 无法上传固件。**
  A. 按住 BOOT（IO0），按下 RST 后松开，再松开 BOOT，然后重试上传。或将 GND 与 IO0 短接后按 RST，再断开 IO0 与 GND 进行上传。

* **Q. 检测不到 SIM 卡。**
  A. 请先插入 SIM 卡再上电。上电后热插卡可能导致无法识别。

* **Q. 切换 USB 和电池供电时设备重启。**
  A. 正常现象，板子没有无缝切换电源方案，无法通过软件改变。

* **Q. SIM7600E 支持语音通话吗？**
  A. 仅限带有板载音频解码芯片的版本。发送 `AT+SIMCOMATI` 确认版本；无解码芯片则不支持语音通话。

* **Q. 支持哪些 GPS 天线？**
  A. 使用 3.3 V 有源 GPS 天线（IPEX 一代接口），支持 2.5–5.5 V 供电的有源天线均可兼容。

* **Q. 板载电源开关有什么作用？**
  A. 仅控制电池供电，外接电池直连 VBAT 引脚时开关失效。USB 供电时开关无效。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| T-PCIE V1.2 | — | 当前版本 |
