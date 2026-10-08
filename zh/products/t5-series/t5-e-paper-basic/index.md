---
title: T5-E-Paper-Basic
show_source: false
tags: ESP32-S3, E-Paper, 4.7-inch, AXP2602, XL9555, M5GFX, Wi-Fi, Bluetooth LE, TF Card
---

# {{ $frontmatter.title }} <ShopLink href="" />

<ImageGallery :columns="2" :images="[
  { src: '/products/t5-series/t5-e-paper-basic/index/image/t5-e-paper-basic-1.jpg', alt: 'T5-E-Paper-Basic 正反面' },
  { src: '/products/t5-series/t5-e-paper-basic/index/image/t5-e-paper-basic-2.jpg', alt: 'T5-E-Paper-Basic 双机斜视图' },
]" />

## 概述

LILYGO T5 e-Paper Basic 是一款基于 ESP32-S3 的大尺寸并口电子纸开发板。官方仓库提供电子纸屏、XL9555 IO 扩展、SD 卡、Wi-Fi、AXP2602 电量计、出厂测试和电子工牌等 PlatformIO 示例。仓库版本表标注为 4.7 英寸级 960 x 540 电子纸屏；出厂测试程序还包含通过 `FACTORY_TEST_PANEL_1216X684` 选择的 1216 x 684 面板配置。

## 快速开始

[查看 T5-E-Paper-Basic 快速开始指南](./quick-start)

| 示例仓库 | PlatformIO | Arduino IDE | 说明 |
| :---: | :---: | :---: | :--- |
| [T5-E-Paper-Basic](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic) | 支持 | 手动配置 | 包含屏幕、SD 卡、Wi-Fi、AXP2602、出厂测试和电子工牌示例 |

## 相关视频

<!-- 产品及教程视频将在可用后补充。 -->

## 主要特性

- ESP32-S3 主控，16 MB Flash
- 8-bit 并口 EPD
- 标准屏幕配置为 960 x 540
- 出厂测试可选 1216 x 684 屏幕配置
- I2C 设备包括 AXP2602 电量计和 XL9555 IO 扩展芯片
- 通过 SPI 连接 TF / SD 卡
- ESP32-S3 提供 2.4 GHz Wi-Fi 和 Bluetooth LE
- USB-C、USB CDC 和下载接口
- USB-C 和单节锂电池供电接口

## 产品参数

| 参数 | 值 |
| --- | --- |
| MCU | ESP32-S3 |
| Flash | 16 MB |
| 屏幕总线 | 8-bit 并口 EPD |
| 标准屏幕配置 | 960 x 540 |
| 出厂测试屏幕配置 | 1216 x 684（可选） |
| I2C 设备 | AXP2602 电量计、XL9555 IO 扩展芯片 |
| 存储 | 通过 SPI 连接 TF / SD 卡 |
| 无线功能 | ESP32-S3 提供 2.4 GHz Wi-Fi 和 Bluetooth LE |
| USB | USB-C、USB CDC 和下载接口 |
| 供电 | USB-C 和单节锂电池接口 |

## 引脚图

| 功能 | 引脚 |
| :--- | :--- |
| I2C SDA | GPIO3 |
| I2C SCL | GPIO2 |
| XL9555 中断 | GPIO1 |
| AXP2602 中断 | GPIO21 |
| EPD 数据 D0..D7 | GPIO6、14、7、12、9、11、8、10 |
| EPD XSTL | GPIO13 |
| EPD SPV / CKV | GPIO17 / GPIO18 |
| EPD 电源 / 升压使能 | GPIO45 / GPIO46 |
| SD MOSI / SCK / MISO / CS | GPIO38 / GPIO39 / GPIO40 / GPIO47 |
| BOOT 按键 | GPIO0 |

## 尺寸图

<img src="/products/t5-series/t5-e-paper-basic/index/image/t5-e-paper-basic-3.jpg" alt="T5-E-Paper-Basic 尺寸图" width=100%>

## 原理图

- [T5-E-Paper-Basic 原理图](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/blob/master/hardware/T5%20e-Paper%20Basic.pdf)

## 数据手册

- [E0470A03-AF-S 屏幕规格书](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/blob/master/hardware/E0470A03-AF-S%20A%E7%89%88%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)
- [E0470A01-AF-CF 屏幕规格书](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/blob/master/hardware/E0470A01-AF-CF%28A%29%281%29.pdf)
- [AXP2602 设计指南](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/blob/master/hardware/AXP2602%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97_V1.0.pdf)

## 软件开发

- [T5-E-Paper-Basic GitHub 仓库](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic)
- [M5GFX](https://github.com/m5stack/M5GFX)
- [SensorLib](https://github.com/lewisxhe/SensorLib)
- [预编译出厂固件](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/firmware)

## 常见问题

| 问题 | 检查项 |
| :--- | :--- |
| 屏幕无显示 | 检查电子纸排线、USB 供电、板卡定义和面板分辨率配置。 |
| 屏幕出现横线或严重残影 | 重新上电，检查屏幕排线，并等待完整刷新结束。 |
| SD 卡无法识别 | 使用 FAT32 格式，并检查 GPIO38/39/40/47 及 XL9555 `P05` 卡检测信号。 |
| Wi-Fi 扫描不到热点 | 使用 2.4 GHz 热点，ESP32-S3 不支持仅 5 GHz 的网络。 |
| 按键没有反应 | 检查 GPIO2/GPIO3 的 I2C 连接，以及 XL9555 `P00` 至 `P04`。 |
| 无法上传程序 | 手动进入下载模式，并更换支持数据传输的 USB 线。 |

## 版本迭代

<!-- GitHub 仓库暂未提供版本历史记录。 -->
