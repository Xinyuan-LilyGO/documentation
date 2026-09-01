---
title: LILYGO T-Halow-P4
show_source: false
tags: ESP32-P4, ESP32-C6, WiFi-HaLow, 802.11ah, MIPI, Camera, IoT, LongRange
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-halow-p4" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-halow-series/t-halow-p4/index/image/t-halow-p4-1.jpg', alt: 'T-Halow-P4 正面图' },
  { src: '/products/t-halow-series/t-halow-p4/index/image/t-halow-p4-2.jpg', alt: 'T-Halow-P4 实物图' },
  { src: '/products/t-halow-series/t-halow-p4/index/image/t-halow-p4-pin.jpg', alt: 'T-Halow-P4 引脚图' }
]" />

## 概述

LILYGO T-Halow-P4 是 T-Halow 系列的高性能升级版本，基于 ESP32-P4 主控，集成 ESP32-C6 辅助处理器和泰芯 TX-AH Wi-Fi HaLow（802.11ah）模块。ESP32-P4 支持 MIPI-DSI 显示接口、MIPI-CSI 摄像头接口、JPEG 解码（1080P@30fps）和 H264 视频编码；ESP32-C6 通过 SDIO 与 P4 通信，提供 Wi-Fi 6 和蓝牙 5.3；Wi-Fi HaLow 支持 730~950MHz 频段、传输距离可达数公里，适用于智能安防、工业监控和远程巡检场景。

> T-Halow-P4 与 T-Halow 使用相同的 [AT 指令集](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/AT_cmd.md)。

## 快速开始

### 开发环境搭建

T-Halow-P4 主要使用 ESP-IDF v5.4.1+ 进行开发。

1. 安装 [ESP-IDF v5.4.1+](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32/get-started/index.html)。
2. 克隆 [T-Halow-P4 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Halow-P4)。
3. 进入 examples 目录选择示例程序。

### 编译与烧录

```bash
cd ~/examples/xxx
idf.py set-target esp32p4
idf.py build
idf.py -p PORT flash
```

**进入下载模式：** 插入 USB 后，按住 BOOT 键不松手，按下 RST 键后立即松开，串口输出 "wait for download" 即表示进入下载模式，松开 BOOT 键后关闭串口。

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Halow-P4 项目代码](https://github.com/Xinyuan-LilyGO/T-Halow-P4)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Halow 模块使用

Halow 模块通过 SPI + UART 与 ESP32-P4 连接：
- **SPI**：数据传输，使用泰芯官方驱动程序
- **UART**：AT 命令收发和运行信息输出

数据传输链路：`ESP32P4 → SPI → Halow → RF → Halow → SPI → ESP32P4`

TX-AH 模块非 OS 驱动：[taixin-nonos-driver](https://www.taixin-semi.com/upload/files/productFile/20251204/taixin-nonos-driver_20251204162053.zip)

### 开发平台

1. [ESP-IDF v5.4.1+](https://docs.espressif.com/projects/esp-idf/en/latest/)（主要开发平台）
2. [Platform IO](https://platformio.org/)
3. [VS Code](https://code.visualstudio.com/)

## 视频

## 主要特点

- ESP32-P4：32MB PSRAM，MIPI-DSI + MIPI-CSI，JPEG 解码 1080P@30fps，H264 编码
- ESP32-C6-MINI：16MB Flash，Wi-Fi 6 (802.11ax) + 蓝牙 5.3，通过 SDIO 与 P4 通信
- TX-AH Wi-Fi HaLow 模块：730~950MHz，150Kbps~32.5Mbps，传输距离可达数公里
- SPI / I2S / I2C / LED PWM / 以太网等丰富外设

## 产品参数

<img src="/products/t-halow-series/t-halow-p4/index/image/t-halow-p4-info.jpg" alt="T-Halow-P4 规格图" width=100%>

| 项目 | 参数 |
| :-- | :-- |
| 主控芯片 | ESP32-P4 |
| 辅助处理器 | ESP32-C6-MINI（Wi-Fi 6 + 蓝牙 5.3） |
| Flash | 16MB Nor Flash（QSPI） |
| PSRAM | 32MB（封装内叠封） |
| 无线协议 | Wi-Fi 6 + 蓝牙 5.3（ESP32-C6） |
| Wi-Fi HaLow | 802.11ah（730~950MHz） |
| 显示接口 | MIPI-DSI（支持触控） |
| 摄像头接口 | MIPI-CSI（支持 1080P） |
| 图像处理 | JPEG 解码（1080P@30fps），PPA，2D DMA |
| 视频编码 | H264，JPEG |
| 编程平台 | ESP-IDF v5.4.1+ |

### Wi-Fi HaLow 频段

| 频段 | 频率范围 |
| :---: | :---: |
| 868MHz | 859~894MHz |
| 915MHz | 902~928MHz |

> 请根据所在地区法规选择相应频段。

## 引脚图

<img src="/products/t-halow-series/t-halow-p4/index/image/t-halow-p4-pin.jpg" alt="T-Halow-P4 引脚图" width=100%>

### 引脚映射

| 功能 | GPIO |
| :-- | :--: |
| I2C SCL | IO8 |
| I2C SDA | IO7 |
| HaLow AH_CMD | IO44 |
| HaLow AH_CLK | IO43 |
| HaLow AH_D3/D2/D1/D0 | IO42/IO41/IO40/IO39 |
| HaLow AH_TX / AH_RX | IO12 / IO13 |
| ESP32-C6 CMD/CLK | IO19 / IO18 |
| ESP32-C6 D3/D2/D1/D0 | IO17/IO16/IO15/IO14 |
| ESP32-C6 WAKEUP | IO6 |
| 触摸 INT / RST | IO11 / IO10 |
| MIPI-DSI RST | IO9 |

## 尺寸图

## 原理图

* [T-Halow-P4 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Halow-P4)

## 数据手册

* [ESP32-P4 文档](https://www.espressif.com/zh-hans/products/socs/esp32-p4)
* [TX-AH 模块规格书](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/%E6%B3%B0%E8%8A%AF802.11ah%C2%A0TX-AH-Rx00P%20Series%20module%20technical%20specification_20231116174457.pdf)
* [AT 指令开发指南](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20AT%20instruction%20development%20guide_20230524100503.pdf)
* [频率设置说明](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯802.11AH%20Frequency%20setting%20description_20231130110312.pdf)
* [硬件设计指南](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20hardware%20Design%20Guide_20230621170639.pdf)
* [泰芯官方文档](https://en.taixin-semi.com/Product?prouctSubClass=33)

## 软件开发

* [T-Halow-P4 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Halow-P4)
* [T-Halow AT 指令集](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/AT_cmd.md)
* [泰芯驱动程序下载](https://www.taixin-semi.com/upload/files/productFile/20251204/taixin-nonos-driver_20251204162053.zip)

### 依赖库

* `espressif/esp_hosted ^1.4.1`
* `espressif/esp_wifi_remote ^0.8.5`
* `espressif/esp_lcd_ek79007 ^1.0.2`
* `lvgl/lvgl`

## 常见问题

* **Q. T-Halow-P4 与 T-Halow 有什么区别？**  
  A. T-Halow-P4 使用 ESP32-P4 主控（支持 MIPI 摄像头/显示、H264 视频编码），而 T-Halow 使用 ESP32-S3。两者使用相同的 TX-AH HaLow 模块和 AT 指令集。

* **Q. 如何进入下载模式？**  
  A. 按住 BOOT 键后按下 RST 键并立即松开，串口输出 "wait for download" 后松开 BOOT 键。

* **Q. Wi-Fi HaLow 频段如何选择？**  
  A. 请根据所在地区的无线电法规选择 868MHz 或 915MHz 频段，不同频段天线设计可能不同。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Halow-P4_V1.0 | 2025-12-04 | ESP32-P4 + ESP32-C6 + T-Halow 模块初始版本 |
