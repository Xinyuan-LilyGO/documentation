---
title: LILYGO T-Halow
show_source: false
tags: ESP32-S3, WiFi-HaLow, 802.11ah, Camera, IoT, LongRange
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-halow" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-halow-series/t-halow/index/image/t-halow-1.jpg', alt: 'T-Halow 正面图' },
  { src: '/products/t-halow-series/t-halow/index/image/t-halow-2.jpg', alt: 'T-Halow 实物图' },
  { src: '/products/t-halow-series/t-halow/index/image/t-halow-pin.jpg', alt: 'T-Halow 引脚图' }
]" />

## 概述

**LILYGO T-Halow** 是一款集成 **ESP32-S3** 主控、**Wi-Fi HaLow (802.11ah)** 远距离通信、**200 万/500 万像素摄像头**及 **RJ45 以太网口**的多功能物联网开发板。Wi-Fi HaLow 工作于 730~950MHz 频段，相较传统 2.4GHz/5GHz Wi-Fi 拥有更远的传输距离与更强的穿墙能力，适用于安防监控、远程巡检、环境监测等大范围物联网场景。

T-Halow 有两个不同版本，主要在配对方式上有所区别：

| 版本 | 发布时间 | 文档链接 |
| :---: | :---: | :---: |
| VER1 | 2023-08-23 | [版本1文档](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/ver1/readme.md) |
| VER2 | 2024-04-16 | [版本2文档](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/ver2/readme.md) |

> **注意**：两个版本使用相同的 [AT 指令集](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/AT_cmd.md)。

## 快速开始

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 克隆或下载 [T-Halow 项目代码](https://github.com/Xinyuan-LilyGO/T-Halow)，在 VS Code 中打开。
3. PlatformIO 会自动下载所需三方库，首次过程较长，请耐心等待。
4. 打开 `platformio.ini`，取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `lib/` 目录下的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，上传程序。

### 固件下载

如需下载 TX-AH 固件，可使用以下两种方法：

| 下载方式 | 说明文档 |
| :--- | :--- |
| 通过下载器下载固件 | [查看文档](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/Firmware_burn_1.md) |
| 通过 ESP32 flash_download_tool 下载固件 | [查看文档](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/Firmware_burn_2.md) |

## 视频

## 主要特点

- ESP32-S3：16MB Flash，8MB PSRAM，2.4GHz Wi-Fi + 蓝牙 5 (LE)
- Wi-Fi HaLow (802.11ah)：730~950MHz，信道带宽 1/2/4/8MHz，传输距离可达数公里
- 支持 OV2640 (2MP) / OV5640 (5MP) 摄像头
- RJ45 以太网口（需刷入对应固件）
- USB-C 供电 / 18650 锂电池供电，支持 TF 卡扩展

## 产品参数

| 项目 | 参数 |
| :-- | :-- |
| 主控芯片 | ESP32-S3（双核，240MHz） |
| Flash | 16MB |
| PSRAM | 8MB |
| 摄像头 | OV2640 (2MP) / OV5640 (5MP) |
| 无线 | 2.4GHz Wi-Fi + 蓝牙 5 (LE) |
| Wi-Fi HaLow 频段 | 模式1：902~928MHz（915M Saw）/ 模式2：859~894MHz（875M Saw） |
| 有线网络 | RJ45 以太网口（需刷入对应固件） |
| 供电 | USB-C (5V/500mA) / 18650 锂电池 |
| 电池监测 | ADC (I003) |
| 尺寸 | 113 × 33mm |

### TX-AH 模组型号对比

| 模组名称 | 正面丝印区分 | 认证 | 支持频段 | 备注 |
| :---: | :---: | :---: | :---: | :--- |
| TX-AH-R900P | 左下角 P9，右下角 P9 | FCC/CE | 860~928MHz | 标准版本 |
| TX-AH-R900PNR | 左下角 P9，右下角 NR | FCC | 902~928MHz | 带 915M Saw，改善接收性能 |
| TX-AH-R900PNR-860M | 左下角 86，右下角 NR | CE | 859~894MHz | 带 875M Saw，改善接收性能 |

> P 系列模组与早期 A 系列区别：(1) P 系列左下角丝印以 P 开头，A 系列以 R 开头；(2) P 系列 PIN4/5 需要供电，A 系列不需要。带屏蔽罩版本在模组名称后加 **-S** 后缀。

## 引脚图

<img src="/products/t-halow-series/t-halow/index/image/t-halow-pin.jpg" alt="T-Halow 引脚图" width=100%>

### 引脚映射

**摄像头引脚：**

| 摄像头信号 | GPIO |
| :-- | :--: |
| SIOC | I004 |
| SIOD | I005 |
| HREF | I017 |
| PCLK | I012 |
| MCLK | I008 |
| VSYNC | I016 |
| RESET | I018 |
| Data0~Data9 | I009~I021, I047~I048 |

**SPI 引脚（以太网/外设）：**

| 信号 | GPIO |
| :-- | :--: |
| SPI_CS | I039 |
| SPI_SCK | I041 |
| SPI_MOSI | I040 |
| SPI_MISO | I042 |

## 尺寸图

## 原理图

* [T-Halow GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Halow)

## 数据手册

* [频率设置说明](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯802.11AH%20Frequency%20setting%20description_20231130110312.pdf)
* [TX-AH-Rx00P 系列模块技术规格书](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/%E6%B3%B0%E8%8A%AF802.11ah%C2%A0TX-AH-Rx00P%20Series%20module%20technical%20specification_20231116174457.pdf)
* [TX-AH-Rx00P 桥接说明](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Bridge%20instructions_20230908122753.pdf)
* [AH 模块 AT 指令开发指南](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20AT%20instruction%20development%20guide_20230524100503.pdf)
* [AH 模块开发板说明](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20development%20board%20instructions_20230621205234.pdf)
* [AH 模块硬件设计指南](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20hardware%20Design%20Guide_20230621170639.pdf)
* [泰芯官方资料](https://en.taixin-semi.com/Product?prouctSubClass=33)

## 软件开发

* [T-Halow GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Halow)
* [hgSDK（自行编译参考）](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/SDK/hgSDK-v1.6.4.3-29063-wnb)

## 常见问题

* **Q. VER1 和 VER2 有什么区别？**  
  A. 两个版本主要在配对方式上有所不同，使用相同的 AT 指令集。请根据手中的硬件版本参考对应文档。

* **Q. 能否获取 TX-AH 模块的详细 SDK？**  
  A. 泰芯暂不提供详细的 API 说明。如需自行编译，可参考 [hgSDK](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/SDK/hgSDK-v1.6.4.3-29063-wnb) 项目。

* **Q. RJ45 以太网功能如何启用？**  
  A. 需要刷入专用固件才能启用 RJ45 以太网网络功能，请参考 GitHub 仓库中的固件下载说明。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Halow_VER1 | 2023-08-23 | 初始版本 |
| T-Halow_VER2 | 2024-04-16 | 优化配对方式 |
