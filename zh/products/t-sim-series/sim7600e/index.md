---
title: LILYGO T-PCIE SIM7600E
show_source: false
tags: SIM7600E, LTE, 4G, PCIe, GPS
---

# {{ $frontmatter.title }}

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/sim7600e/assets/sim7600e.jpg', alt: 'T-PCIE SIM7600E 正面图' },
  { src: '/products/t-sim-series/sim7600e/assets/sim7600e-r.jpg', alt: 'T-PCIE SIM7600E 背面图' },
  { src: '/products/t-sim-series/sim7600e/assets/sim7600e-1.jpg', alt: 'T-PCIE SIM7600E 引脚图' }
]" />

## 概述

T-SIM7600E-PCIE 是一款基于 SIM7600E 芯片的 LTE Cat 1 模块，支持 LTE-TDD/LTE-FDD/HSPA+/GSM/GPRS/EDGE 等多种无线通信模式。最大下行速率 10Mbps，最大上行速率 5Mbps。采用 mini PCIe 外形规格，由 SIM7600 系列模块和 mini PCIe 适配板组成，便于客户集成。集成多种卫星高精度定位（GNSS）系统，支持 UART、USB、GPIO 等丰富接口，AT 命令与 SIM7500/SIM7600-H 系列兼容，适用于车联网、监控设备、工业路由器等物联网应用场景。

## 快速开始

### 示例支持

更多示例代码请参考 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE)。

### 开发平台
1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- SIM7600E 4G LTE Cat1 模块，mini PCIe 接口
- 支持 LTE-TDD/LTE-FDD/HSPA+/GSM/GPRS/EDGE
- 内置 GNSS 多卫星系统定位
- 支持 TCP/IP、HTTP/HTTPS 等网络协议
- 丰富接口：UART、USB、GPIO

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| 模块 | SIM7600E (LTE Cat1) |
| 封装 | mini PCIe |
| 下行速率 | 最大 10Mbps |
| 上行速率 | 最大 5Mbps |
| 定位 | GNSS（多系统） |
| 接口 | UART, USB, GPIO |
| AT 命令 | 兼容 SIM7500/SIM7600-H |

## 引脚图

<img src="/products/t-sim-series/sim7600e/assets/sim7600e-1.jpg" alt="SIM7600E 引脚图 1" width=60%>
<img src="/products/t-sim-series/sim7600e/assets/sim7600e-2.jpg" alt="SIM7600E 引脚图 2" width=60%>
<img src="/products/t-sim-series/sim7600e/assets/sim7600e-3.jpg" alt="SIM7600E 引脚图 3" width=40%>
<img src="/products/t-sim-series/sim7600e/assets/sim7600e-4.jpg" alt="SIM7600E 引脚图 4" width=40%>

## 尺寸图

## 原理图

* [T-PCIE_V1.2](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/blob/master/schematic/T-PCIE-V1.2.pdf)

## 数据手册

* [SIM7600E 规格书](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/Files/T-SIM7600E-PCIE.pdf)

## 软件开发

* [LilyGo-T-PCIE GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE)

## 常见问题

* **Q. SIM7600E 支持哪些地区的网络？**  
  A. SIM7600E 支持 LTE-FDD 和多频段 GSM 网络，具体频段覆盖欧洲、中东及亚洲部分地区，请参考规格书。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------: |
| T-PCIE_V1.2 | — | 当前版本 |
