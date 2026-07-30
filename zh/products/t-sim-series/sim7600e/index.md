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

T-PCIE SIM7600E 是一款基于 **SIM7600E** 芯片的 **mini PCIe 规格 LTE 调制解调器模块**，设计用于插入 [T-PCIE 主板](../index.md) 的 mPCIe 插槽。支持 LTE-FDD/LTE-TDD、HSPA+、GSM/GPRS/EDGE 多模无线通信，最大下行速率 10 Mbps，最大上行速率 5 Mbps。集成多星座 GNSS 定位、内置 TCP/IP/HTTP/HTTPS/FTP 协议栈，AT 命令与 SIM7600 系列兼容。

> 主板硬件细节（拨码开关、引脚映射、电气参数、按键、LED、天线）请参阅 [T-PCIE 主板页面](../index.md)。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) | ✓ | | AT 指令、MQTT、HTTP 示例 |


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
| SIM 卡 | Nano SIM（通过主板卡槽） |

> **频段覆盖：** SIM7600E 覆盖欧洲、中东、非洲、韩国及泰国。其他地区请参考下方模块差异表或查阅规格书。

## 模块差异

| 型号 | GPS | 语音通话 | 短信 | 频段 |
| :--: | :-: | :------: | :--: | :--- |
| SIM7600E | ✅ | ✅ | ✅ | LTE-FDD: B1/B3/B5/B8/B20；GSM: 900/1800 MHz |

> 语音通话功能需要板载音频解码芯片。发送 `AT+SIMCOMATI` 可确认模块硬件版本。SIM7600 系列仅当 PCB 上音频解码区域（红色标注区）有芯片时才支持语音通话，若该区域为空则不支持。

## 引脚图

<img src="/products/t-sim-series/sim7600e/index/image/sim7600e-1.jpg" alt="SIM7600E 引脚图" width="60%">

## 尺寸图

## 原理图

* [T-PCIE V1.2 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/blob/master/schematic/T-PCIE-V1.2.pdf)

## 数据手册

* [SIM7600E 规格书](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/Files/T-SIM7600E-PCIE.pdf)
* [SIMCOM SIM7600X 官方页面](https://cn.simcom.com/product/SIM7600X.html)

## 软件开发

* [LilyGo-Modem-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### 依赖库

* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## 常见问题

* **Q. SIM7600E 支持哪些地区的网络？**
  A. 覆盖欧洲、中东、非洲、韩国及泰国（LTE-FDD B1/B3/B5/B8/B20，GSM 900/1800 MHz）。

* **Q. SIM7600E 支持语音通话吗？**
  A. 仅限带有板载音频解码芯片的版本。发送 `AT+SIMCOMATI` 确认版本；若音频区域为空则不支持语音通话。

* **Q. 支持哪些 GPS 天线？**
  A. 使用 3.3 V 有源 GPS 天线（IPEX 一代接口），支持 2.5–5.5 V 供电的有源天线均可兼容。

* **Q. 主板相关问题（上传失败、SIM 卡检测、电源切换等）。**
  A. 请参阅 [T-PCIE 主板常见问题](../index.md#常见问题)。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| T-PCIE V1.2 | — | 当前版本 |
