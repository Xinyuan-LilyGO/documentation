---
title: T-Display-CM0
show_source: false
tags: CM0, Cortex-A53, Linux, Raspberry Pi OS, AMOLED, Touch, Camera, LoRa
---

# {{ $frontmatter.title }}

<!-- 官方购买链接公布后添加 ShopLink。 -->

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-1.jpg', alt: 'T-Display-CM0 正面' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-2.jpg', alt: 'T-Display-CM0 背面' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-3.jpg', alt: 'T-Display-CM0 键盘拓展触点和 TF 卡槽' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-4.jpg', alt: 'T-Display-CM0 以太网、HDMI 接口及控制按键' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-5.jpg', alt: 'T-Display-CM0 摄像头向上翻转后的正面' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-6.jpg', alt: 'T-Display-CM0 摄像头向上翻转后的背面' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-7.jpg', alt: 'T-Display-CM0 正反面斜视图' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-8.jpg', alt: 'T-Display-CM0 安装外置天线后的正面' },
  { src: '/products/t-display-series/t-display-cm0/index/image/t-display-cm0-9.jpg', alt: 'T-Display-CM0 安装外置天线后的背面' },
]" />

## 概述

T-Display-CM0 是一款基于 **Raspberry Pi Compute Module 0 (CM0)** 的手持 Linux 开发终端，核心模块采用 **1 GHz 四核 64 位 Arm Cortex-A53 处理器**和 **512 MB LPDDR2 内存**。设备集成 **4.1 英寸 AMOLED 触摸屏**（568 × 1232，RM69A10 MIPI DSI）和 **GT9895 电容触摸控制器**，支持 **180° 旋转的 IMX219-AF 摄像头**和音频功能，全系标配 **LR2021 LoRa**。设备提供以太网、HDMI、USB 和拓展接口，适用于桌面使用、摄像头应用及联网硬件项目。

操作系统基于 **Raspberry Pi OS**，配备**定制桌面环境**。出厂固件的相关软件统一维护在 [LILYGO-UI](https://github.com/LILYGO-UI)。详细的使用文档和开发文档将陆续更新至 [LILYGO UI 文档站](https://lilygo-ui.github.io/zh/)。内核驱动和设备树叠加层（Device Tree Overlay）维护在 [lilygo-linux-dtoverlays 的 T-DisplayCM0 目录](https://github.com/Xinyuan-LilyGO/lilygo-linux-dtoverlays/tree/master/boards/T-DisplayCM0)。键盘、电池、GNSS 和 LTE-M 功能取决于实际安装的拓展模块。

## 快速开始

### 开机

1. 通过任意一个 Type-C 接口接入 5 V 电源。
2. 按住 **POWER** 按键约 **1 秒**，启动设备。

固件烧录、应用使用和开发说明请参阅 [LILYGO UI 文档站](https://lilygo-ui.github.io/zh/)。

## 相关视频

<!-- 官方产品视频和教程视频公布后补充。 -->

## 主要特性

- Raspberry Pi Compute Module 0 (CM0)：1 GHz 四核 64 位 Arm Cortex-A53，512 MB LPDDR2
- 基于 Raspberry Pi OS 的操作系统，配备定制桌面环境
- LILYGO-UI 出厂固件软件，提供 Linux 内核驱动和设备树叠加层源码
- 2.4 GHz 频段 802.11 b/g/n 无线局域网（Wireless LAN）
- 蓝牙 4.2 标准，支持低功耗模式（Bluetooth Low Energy，BLE）
- 4.1 英寸 AMOLED 屏幕，568 × 1232 分辨率，RM69A10 MIPI DSI 接口
- GT9895 电容式多点触摸
- IMX219-AF 摄像头模块，支持 180° 旋转，采用 MIPI CSI-2 接口
- ES8390 I2S 音频编解码器
- 全系标配 LR2021 LoRa 无线模块，采用 SPI 接口
- QMI8658B IMU 和 RTC 接口，以及通过键盘拓展模块提供的充电和电池接口
- 以太网、最高 1080p 30 FPS 的 HDMI 输出、USB Type-A、Type-C 和 TF 卡槽
- 3 × 8 键盘拓展触点、QWIIC 4 针、Grove 4 针接口及两路 I2C 总线
- 支持键盘、电池、GNSS 和 LTE-M 拓展

## 产品参数

| 参数 | 值 |
| :------: | :------: |
| 平台 | Raspberry Pi Compute Module 0 (CM0) |
| CPU | 1 GHz 四核 64 位 Arm Cortex-A53 |
| 内存 | 512 MB LPDDR2 |
| 操作系统 | 基于 Raspberry Pi OS，配备定制桌面环境；出厂固件相关软件由 LILYGO-UI 维护 |
| 显示屏 | 4.1 英寸 AMOLED，568 × 1232，RM69A10，MIPI DSI |
| 触摸 | Goodix GT9895，I2C，地址 `0x5D` |
| 摄像头 | IMX219-AF，MIPI CSI-2，支持 180° 旋转 |
| 音频 | ES8390，I2S；I2C 控制地址 `0x11` |
| LoRa | LR2021，SPI，全系标配 |
| IMU | QMI8658B，I2C 地址 `0x6A` |
| RTC | RX8130CE，I2C 地址 `0x32` |
| 充电管理 | 键盘拓展模块上的 BQ25896，I2C 地址 `0x6B` |
| 电池电量计 | 键盘拓展模块上的 BQ27220，I2C 地址 `0x55` |
| I/O 扩展器 | XL9555，I2C 地址 `0x26` |
| 键盘拓展 | 键盘拓展模块上的 TCA8418 控制器，7 × 10 矩阵，I2C 地址 `0x34` |
| 存储 | TF / microSD 卡；CM0 Lite 无板载 eMMC |
| 视频输出 | HDMI，1080p 30 FPS |
| 有线网络 | 以太网 |
| 无线 | 2.4 GHz 频段，802.11 b/g/n 无线局域网（Wireless LAN） |
| 蓝牙 | 蓝牙 4.2 标准，支持低功耗模式（Bluetooth Low Energy，BLE） |
| USB | Type-A；两个 Type-C 接口均支持 5 V 输入 |
| 拓展接口 | 3 × 8 键盘触点、QWIIC 4 针、Grove 4 针、背部排针接口 |
| 外壳尺寸 | 110 × 58 × 30 mm（长 × 宽 × 高），以所提供的尺寸图为依据 |

<!-- 补充已确认的重量和外包装尺寸。 -->

BQ25896 充电芯片、BQ27220 电池电量计和 TCA8418 键盘控制器由键盘拓展模块提供，CM0 载板上未搭载这些器件。

所提供的引脚图和 V0.3 原理图将音频编解码器标注为 **ES8390**。[Linux 板级支持文档](https://github.com/Xinyuan-LilyGO/lilygo-linux-dtoverlays/tree/master/boards/T-DisplayCM0)使用 `es8389` 驱动名称支持 ES8389 / ES8390 音频。请根据硬件版本选择对应驱动和设备树叠加层；拓展模块功能取决于实际安装的模块。

## 引脚图

<img src="/products/t-display-series/t-display-cm0/index/image/t-display-cm0-pin.jpg" alt="T-Display-CM0 外设引脚图" width="100%">

以下映射以所提供的产品引脚图为依据。`GPIO` 编号表示 CM0 的 GPIO 信号。XL9555 引脚保留 `Pxx` 端口表示法（例如 `P11` 表示端口 1 的第 1 位），并非 CM0 GPIO 编号。`CM0_*` 名称保留图中使用的信号标识。

### Display

| RM69A10 | DSI Data 0 | DSI Data 1 | DSI Clock | RESET | Power EN |
| :------: | :------: | :------: | :------: | :------: | :------: |
| CM0 | CM0_MIPI DSI DATA0 | CM0_MIPI DSI DATA1 | CM0_MIPI DSI CLK |  |  |
| XL9555 |  |  |  | P11 | P07 |

### Touch

| GT9895 | SDA | SCL | INT | RESET |
| :------: | :------: | :------: | :------: | :------: |
| CM0 | CM0_SDA0 | CM0_SCL0 | GPIO13 |  |
| XL9555 |  |  |  | P10 |

### Audio

| ES8390 | PCM_CLK | PCM_FS | PCM_DIN | PCM_DOUT | AUDIO_MCLK | Power EN |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| CM0 | GPIO18 | GPIO19 | GPIO20 | GPIO21 | GPIO6 |  |
| XL9555 |  |  |  |  |  | P12 |

### LoRa

| LR2021 | SCK | MOSI | MISO | CS | RESET | INT | BUSY | Power EN |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| CM0 | GPIO11 | GPIO10 | GPIO9 | GPIO8 | GPIO7 | GPIO25 | GPIO24 |  |
| XL9555 |  |  |  |  |  |  |  | P15 |

### Camera

| IMX219-AF | CSI Lane 0 | CSI Lane 1 | CSI Clock | SDA | SCL | RESET | Power EN |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| CM0 | CM0_MIPI CSI Lane 0 | CM0_MIPI CSI Lane 1 | CM0_MIPI CSI Clock | CM0_SDA | CM0_SCL |  |  |
| XL9555 |  |  |  |  |  | P13 | P14 |

### I2C1 Devices

CM0 载板上未搭载 BQ25896、BQ27220 或 TCA8418；连接键盘拓展模块后，才可使用这些器件及其对应地址。

| Device | Address |
| :------: | :------: |
| BQ25896 charging management（键盘拓展模块） | `0x6B` |
| BQ27220 battery gauge（键盘拓展模块） | `0x55` |
| TCA8418 keyboard controller（键盘拓展模块） | `0x34` |
| QMI8658B IMU | `0x6A` |
| RX8130CE RTC | `0x32` |
| XL9555 I/O expander | `0x26` |
| ES8390 audio codec | `0x11` |

### USB and Wireless Control

| Control | USB_SEL | WIFI_ON | BT_ON |
| :------: | :------: | :------: | :------: |
| XL9555 | P06 | P16 | P17 |

### Expansion Connectors

<img src="/products/t-display-series/t-display-cm0/index/image/t-display-cm0-expansion.jpg" alt="T-Display-CM0 背部接口、键盘触点及拓展信号" width="100%">

上图展示接口朝向和键盘触点排列。接线时请按照图示朝向核对信号；QWIIC 和 Grove 接口提供的电源电压不同。

| Connector | Signals shown in the diagram |
| :------: | :------: |
| QWIIC 4-pin | GND, 3V3, SDA1, SCL1 |
| Grove 4-pin | GND, 5V, SDA1, SCL1 |
| Rear header, upper row | TX, CM0_SDA1, SCL0, GPIO27, GND |
| Rear header, lower row | RX, CM0_SCL1, SDA0, GPIO4, 3V3 |
| Keyboard expansion | 3 × 8 contacts; signal and power layout shown above |

## 尺寸图

<img src="/products/t-display-series/t-display-cm0/index/image/t-display-cm0-dimensions.jpg" alt="T-Display-CM0 外壳尺寸：长 110 mm、宽 58 mm、高 30 mm" width="100%">

## 包装清单

所提供的包装清单图展示 **1 × T-Display-CM0** 和 **1 × 天线**。随附模块和配件请以所选产品配置为准。

<img src="/products/t-display-series/t-display-cm0/index/image/t-display-cm0-packing-zh.jpg" alt="T-Display-CM0 包装清单：一台设备和一根天线" width="100%">

## 原理图

完整原理图包括以下三份 PDF：

- [T-DIsplay-CM0-V0.3-20260815.pdf（主板）](/products/t-display-series/t-display-cm0/index/hardware/T-DIsplay-CM0-V0.3-20260815.pdf)
- [T-DIsplay-CM0_SUB-V0.3-20260818.pdf（SUB 子板）](/products/t-display-series/t-display-cm0/index/hardware/T-DIsplay-CM0_SUB-V0.3-20260818.pdf)
- [T-DIsplay-CM0_FPC-V0.3-20260818.pdf（FPC）](/products/t-display-series/t-display-cm0/index/hardware/T-DIsplay-CM0_FPC-V0.3-20260818.pdf)

## 数据手册

- [CM0 + CM0-KIT 中文规格书](/datasheet/cm0-cm0-kit-specifications-zh.pdf)
- [LR20xx 数据手册（V2.2）](/datasheet/63293790.LR20xxDatasheet_V2_2.pdf)
- [H0410S001AMT001 4.1 英寸 AMOLED 规格书（568 × 1232，MIPI）](</datasheet/H0410S001AMT001 V0规格书4.1寸 568X1232 MIPI AMOLED.pdf>)
- [GT9895 触摸控制器（V1.1）](/datasheet/GT9895_Datasheet_V1.1.pdf)
- [IMX219PQH5 图像传感器](/datasheet/%5BTRULY%5DIMX219PQH5_4.0.0_DataSheet.pdf)
- [ES8390 音频编解码器](/datasheet/ES8390.pdf)
- [QMI8658B IMU](/datasheet/QMI8658B.pdf)
- [RX8130CE 实时时钟](/datasheet/RX8130CE_en.pdf)
- [XL9555 I/O 扩展器](/datasheet/xl9555.pdf)
- [GEK100 开关机控制芯片](/datasheet/GEK100.pdf)
- [BQ25896 充电管理（键盘拓展模块）](/datasheet/bq25896.pdf)
- [BQ27220 电池电量计（键盘拓展模块）](/datasheet/bq27220_en.pdf)
- [TCA8418 键盘控制器（键盘拓展模块）](/datasheet/tca8418.pdf)

## 软件开发

### 出厂固件相关软件

出厂固件的相关软件统一维护在 [LILYGO-UI](https://github.com/LILYGO-UI)，包括定制桌面环境、应用、公共库和构建工具。各项目的构建要求请参阅对应仓库的 README。

### 使用文档与开发文档

详细的使用文档和开发文档将陆续更新至 [LILYGO UI 文档站](https://lilygo-ui.github.io/zh/)。

### 内核驱动与设备树

板级支持、设备树叠加层、构建及安装说明位于 [lilygo-linux-dtoverlays 的 boards/T-DisplayCM0 目录](https://github.com/Xinyuan-LilyGO/lilygo-linux-dtoverlays/tree/master/boards/T-DisplayCM0)。该目录提供板级构建入口，可复用的外部内核驱动源码位于同一仓库的 `modules/` 目录。

编译内核模块时，需使用与目标设备运行内核匹配的源码或头文件及配置。具体构建参数和启动配置请参阅上述板级 README。

## 常见问题

### 出厂固件的软件与文档在哪里？

相关软件维护在 [LILYGO-UI](https://github.com/LILYGO-UI)。详细的使用文档和开发文档将陆续更新至 [LILYGO UI 文档站](https://lilygo-ui.github.io/zh/)。

### 驱动提示 `Invalid module format` 是什么原因？

内核模块与正在运行的内核不匹配。请根据目标内核版本及配置重新编译，并参阅 [T-DisplayCM0 内核驱动说明](https://github.com/Xinyuan-LilyGO/lilygo-linux-dtoverlays/tree/master/boards/T-DisplayCM0)。

### 每台设备都包含 LoRa、GNSS 和 LTE-M 吗？

所有 T-Display-CM0 均标配 LR2021 LoRa。GNSS、LTE-M、键盘和电池功能取决于实际安装的拓展模块。使用对应应用前，请核对所选硬件配置。

## 版本迭代

| 版本 | 日期 | 说明 |
| :------: | :------: | :------: |
| V0.3 主板原理图 | 2026-08-15 | 日期以所提供的 PDF 文件名为准 |
| V0.3 SUB 和 FPC 原理图 | 2026-08-18 | 日期以所提供的 PDF 文件名为准 |

<!-- 产品和固件版本记录公布后，补充已确认的发布历史。 -->
