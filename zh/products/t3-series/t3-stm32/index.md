---
title: LILYGO T3-STM32
show_source: false
tags: STM32WL55, LoRa, OLED, Low Power, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t3-stm32" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t3-series/t3-stm32/assets/t3-stm32-1.jpg', alt: 'T3-STM32 正面图' },
  { src: '/products/t3-series/t3-stm32/assets/t3-stm32-2.jpg', alt: 'T3-STM32 实物图' },
  { src: '/products/t3-series/t3-stm32/assets/t3-stm32-3.jpg', alt: 'T3-STM32 引脚图' }
]" />

## 概述

LILYGO T3 STM32 是一款基于 STM32WL55CCU6 低功耗微控制器的多功能物联网开发板，集成 LoRa 远程通信模块，支持 433/868/915MHz 多频段，适配全球物联网应用场景。硬件配置包括 256KB Flash 与 64KB SRAM，搭载 SSD1315 驱动的 OLED 显示屏（I2C 接口）、TF 卡存储扩展（SPI）以及太阳能输入接口（4.4~6V），支持户外能源采集与低功耗运行。预留 QWIIC 生态连接器，便于传感器扩展，适用于远程监测、环境传感、LoRa 网关及太阳能供电设备等物联网终端。

## 快速开始

### 示例支持

| 示例 | 描述 |
| :-- | :-- |
| 1_led | 创建简单 LED 项目 |
| 2_jlink_rtt_print | 测试 J-Link 打印输出 |
| 3_sdcard | 测试 TF 卡读写 |
| 4_oled | 测试 OLED 屏幕 |
| 5_RF_test | AT Slave 模式，仅用于 RF 测试 |
| 6_SubGHz_TXRX | 使用 LoRa 调制的收发测试 |
| DeepSleep | 测试深度睡眠功耗 |
| PingPong | 移植 CubeMX SubGHz_Phy_PingPong 程序 |

### 下载工具准备

1. **STM32CubeProgrammer** — [ST 官方下载](https://www.st.com.cn/zh/development-tools/stm32cubeprog.html)
2. **J-Link** — [SEGGER 下载](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)
3. **ST-Link** — [ST 官方驱动](https://www.st.com.cn/zh/development-tools/stsw-link009.html)

> **注意**：JLink、STLink、STM32CubeProgrammer 三种下载器均需要安装对应驱动程序才能正常使用。

### 开发平台

1. [STM32CubeIDE](https://www.st.com.cn/zh/development-tools/stm32cubeide.html#get-software)
2. [VS Code](https://code.visualstudio.com/)
3. [PlatformIO](https://platformio.org/)

## 视频

## 主要特点

- STM32WL55CCU6：双核 Cortex-M4 + Cortex-M0+，256KB Flash，64KB SRAM
- 内置无线电：LoRa®, (G)FSK, (G)MSK, BPSK
- SX1262 LoRa（433/868/915MHz 多频段）
- 0.96 英寸 SSD1315 OLED（128×64，I2C）
- 太阳能输入接口（4.4~6V），支持户外供电
- QWIIC 接口 + SWD 调试接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | STM32WL55CCU6 Dual-core Cortex-M4+M0+ |
| Flash | 256KB |
| SRAM | 64KB |
| 屏幕 | 0.96 英寸 SSD1315 OLED (128×64) |
| LoRa | SX1262 (433/868/915MHz) |
| 内置无线电 | LoRa®, (G)FSK, (G)MSK, BPSK |
| 存储 | TF 卡扩展 (SPI) |
| USB | 1 × USB Type-C |
| 扩展接口 | 2 × QWIIC + 2.54mm 2×13 GPIO |
| 调试接口 | 2.54mm 4 针 SWD 接口 |
| 电源接口 | 太阳能输入（4.4~6V） |
| 天线接口 | LoRa 天线接口 + 五针天线座子 |
| 按键 | RESET + BOOT |
| 安装孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 27 × 13mm |

## 引脚图

<img src="/products/t3-series/t3-stm32/assets/t3-stm32-3.jpg" alt="T3-STM32 引脚图" width=100%>

## 尺寸图

## 原理图

* [T3-STM32 V1.0 原理图](https://github.com/Xinyuan-LilyGO/T3-STM32/blob/master/hardware/T3_STM32%20V1.0%2024-07-30.pdf)

## 数据手册

* [SSD1315 Datasheet](https://github.com/Xinyuan-LilyGO/T3-STM32/blob/master/hardware/SSD1315.pdf)
* [STM32WL55 Datasheet](https://www.st.com/resource/en/datasheet/stm32wl55cc.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)

## 软件开发

* [T3-STM32 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T3-STM32)

### 依赖库

* [STM32 HAL Library](https://www.st.com/en/embedded-software/stm32cubewl.html)
* [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html)
* [LoRa Radio Driver](https://github.com/stm32-hotspot/STM32WL_LoRa_Radio_Driver)

## 常见问题

* **Q. 支持哪些调试器？**  
  A. 支持 ST-Link、J-Link 等多种调试器，通过 4 针 SWD 接口连接。

* **Q. 太阳能输入有什么要求？**  
  A. 支持 4.4~6V 太阳能输入，适合户外能源采集应用。

* **Q. LoRa 频段如何选择？**  
  A. 提供 433MHz、868MHz、915MHz 三种频段版本，请根据所在地区的法规要求选择。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3-STM32_V1.0 | 2024-07-30 | 初始版本 |
