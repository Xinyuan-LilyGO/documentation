---
title: T-Display SF32
show_source: false
tags: SF32LB52X, AMOLED, LoRa, BLE 5.3, GNSS, IMU, AIoT
---

# {{ $frontmatter.title }} <ShopLink href="" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-sf32/index/image/t-display-sf32-1.jpg', alt: 'T-Display SF32 正面' },
  { src: '/products/t-display-series/t-display-sf32/index/image/t-display-sf32-2.jpg', alt: 'T-Display SF32 背面' },
  { src: '/products/t-display-series/t-display-sf32/index/image/t-display-sf32-info.jpg', alt: 'T-Display SF32 产品信息' },
]" />

## 概述

T-Display SF32 是一款基于 SiFli **SF32LB52X** 超低功耗 AIoT MCU 的开发板，面向智能可穿戴、智能家居、工业传感和 IoT 应用。集成 2.16 英寸 AMOLED 显示屏、SX1262 LoRa、L76K 多星座 GNSS、BHI260AP 九轴 IMU、BME280 温湿度传感器、24 位音频、8×8 矩阵键盘接口和 USB PD 快充。双核 Arm Cortex-M33 big.LITTLE 架构（HCPU @ 192 MHz + LCPU @ 24 MHz）内置 ePicasso 2.5D 图形引擎，在极低功耗下实现丰富 UI 渲染。

## 快速开始

### SDK 安装

**Windows**

参考 [SlFli-SDK-Lilygo Windows 安装指南](https://github.com/Xinyuan-LilyGO/SlFli-SDK-Lilygo/blob/master/readme.md)。

**Linux / macOS**

参考 [SIFLI-SDK Unix 安装指南](https://docs.sifli.com/projects/sdk/v2.4/sf32lb52x/quickstart/install/script/unix.html)。

### 编译与烧录（PowerShell）

```powershell
cd SIFLI\T-Display-SF32\examples\rt_os\rt_driver\project
scons --board=t-display-sf32_hcpu -j8
build_t-display-sf32_hcpu\uart_download.bat
```

编译完成后运行 `uart_download.bat`，输入设备 COM 口编号即可烧录。

> **注意：** 若设备未被识别，请从 `tools/VisualCppRedist_54_Setup.7z` 安装 C++ 驱动。

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- SF32LB52X 双核 Arm Cortex-M33 big.LITTLE：HCPU @ 192 MHz（787 CoreMark）+ LCPU @ 24 MHz
- ePicasso 2.5D 高性能图形引擎
- 2.16 英寸 AMOLED 显示屏（CO5300）+ CST9220 电容触摸
- 双模蓝牙 5.3（BLE 5.3 + 经典蓝牙），支持 BLE Audio，接收灵敏度 −100 dBm
- SX1262 LoRa 模块（433 / 868 / 915 MHz，低功耗）
- L76K 多星座 GNSS（GPS、GLONASS、北斗、QZSS）
- BHI260AP 九轴 IMU（加速度计 + 陀螺仪 + 磁力计）
- BME280 温湿度传感器
- 24 位音频 ADC/DAC，支持蓝牙音频流，3.5 mm 耳机接口
- AW86224 振动马达，VSMY14940 红外发射器
- TCA8418 + AW21009 8×8 矩阵键盘接口
- SGM41562B USB PD 快充电源管理
- MicroSD 卡槽（SDHC/SDXC）
- 16 MB Flash + 8 MB PSRAM
- 45 路 GPIO，I2C ×4，SPI ×2，UART，JTAG/SWD，Type-C USB

## 产品参数

| 参数 | 值 |
| :--: | :--: |
| 主控 | SF32LB52X |
| 架构 | Arm Cortex-M33 STAR-MC1 big.LITTLE |
| HCPU | 192 MHz，787 CoreMark |
| LCPU | 24 MHz |
| SRAM | 576 kB（512 kB + 64 kB） |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 显示屏 | 2.16 英寸 AMOLED（CO5300） |
| 触摸 | CST9220 电容触摸 |
| 蓝牙 | BLE 5.3 + 经典蓝牙，BLE Audio |
| LoRa | SX1262，433 / 868 / 915 MHz |
| GNSS | L76K（GPS / GLONASS / 北斗 / QZSS） |
| IMU | BHI260AP，九轴 |
| 温湿度 | BME280 |
| 音频 | 24 位 ADC/DAC，3.5 mm 耳机接口 |
| 充电 | SGM41562B，USB PD 快充 |
| 存储 | MicroSD（SDHC/SDXC） |
| USB | Type-C |
| GPIO | 45 路 |
| 工作电压 | 3.2 V – 4.7 V |

## 引脚图

<img src="/products/t-display-series/t-display-sf32/index/image/t-display-sf32-pinout.jpg" alt="T-Display SF32 引脚图" width=100%>

<!-- GPIO 映射关系表 — 详见硬件原理图。 -->

## 尺寸图

<img src="/products/t-display-series/t-display-sf32/index/image/t-display-sf32-3.jpg" alt="T-Display SF32 尺寸图" width=100%>

## 原理图

* [T-Display SF32 V1.0 原理图（2026-04-02）](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-Display%20SF32%20V1.0%2026-04-02.pdf)
* [T-Display SF32 V1.0 原理图（2026-05-11）](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-Display%20SF32%20V1.0%2026-05-11\(1\).PDF)
* [T-SF32-Keyboard V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-SF32-Keyboard%20V1.0.PDF)

## 数据手册

* [SF32LB52X 芯片技术规格书](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/DS0052-SF32LB52X-芯片技术规格书%20V0p1.pdf)
* [SF32LB52X 用户手册](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/UM5201-SF32LB52x-用户手册%20V0p8p5.pdf)
* [L76K GNSS 规格书](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/C2916234_卫星定位模块_L76KB-A58_规格书_WJ417768.PDF)
* [BME280 数据手册](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/BME280.pdf)
* [SGM41562B 电池管理规格书](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/C5153801_电池管理_SGM41562BXG-TR_规格书_SGMICRO\(圣邦微\)电池管理规格书.PDF)
* [AW86224 振动马达数据手册](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/AW86224.pdf)
* [AW21009 LED 驱动数据手册](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/AW21009QNR.pdf)
* [XL9555 IO 扩展器数据手册](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/xl9555.pdf)

## 软件开发

* [T-Display-SF32 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-SF32)
* [LILYGO SiFli SDK](https://github.com/Xinyuan-LilyGO/SlFli-SDK-Lilygo)
* [SIFLI 官方 SDK 文档](https://docs.sifli.com/projects/sdk/v2.4/sf32lb52x/index.html)
* [RT-Thread 文档](https://www.rt-thread.org/document/site/#/rt-thread-version/rt-thread-standard/README)

## 常见问题

* **Q. menuconfig 配置后 BLE 无法使用。**
  A. 在 `SConscript` 中添加 `lcpu_general_ble_img`，并在 `SConstruct` 中添加 `AddLCPU(...)`。BLE 初始化由 LCPU 负责。

* **Q. Impeller 烧录一直失败。**
  A. 使用 Type-C USB 线，在设备管理器中确认 COM 口，并从 `tools/VisualCppRedist_54_Setup.7z` 安装 C++ 驱动。

* **Q. 关机后 USB 无法开机。**
  A. 出厂固件关机后进入深度低功耗模式，只能通过物理按键唤醒，充电功能正常运作。

## 版本迭代

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.0 | — | 初版发布 |
