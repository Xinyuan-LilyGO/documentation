---
title: LILYGO T-Display K230
show_source: false
tags: K230, AIoT, LoRa, AMOLED, RISC-V
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-k230" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-k230/assets/t-display-k230-1.jpg', alt: 'T-Display K230 正面图' },
  { src: '/products/t-display-series/t-display-k230/assets/t-display-k230-2.jpg', alt: 'T-Display K230 实物图' },
  { src: '/products/t-display-series/t-display-k230/assets/t-display-k230-cn.jpg', alt: 'T-Display K230 引脚图' }
]" />

## 概述

T-Display K230 是基于嘉楠 K230 AI 芯片设计的高性能 AIoT 开发板，配备 4.1 英寸 AMOLED 屏幕（568×1232）和 GT9895 电容触摸。K230 搭载双核 RISC-V 处理器（大核 1.6GHz + 小核 0.8GHz）和约 1.6TOPS 算力的 NPU，内置 8Gb LPDDR4 内存。协处理器 ESP32-S3-R8 提供 Wi-Fi/蓝牙连接。板载 SX1262/SX1280 LoRa、以太网、HDMI 输出（1080P@30FPS）、3 路 MIPI CSI-2 摄像头接口和 3.5mm 音频接口，适用于 AI 推理、远程图像识别和物联网监控等场景。

## 快速开始

### K230 SDK 编译

K230 SDK 需在 Linux 环境下编译，推荐使用 Ubuntu 20.04（Windows 用户可使用 WSL2 + Docker）。

**下载源码：**

```shell
git clone https://github.com/kendryte/k230_sdk
cd k230_sdk
make prepare_sourcecode
```

**使用 Docker 编译：**

```shell
# 拉取 Docker 镜像
docker pull ghcr.io/kendryte/k230_sdk

# 进入 Docker 环境
docker run -u root -it -v $(pwd):$(pwd) -v $(pwd)/toolchain:/opt/toolchain -w $(pwd) ghcr.io/kendryte/k230_sdk /bin/bash

# 编译（以 EVB 板为例）
make CONF=k230_evb_defconfig
```

**编译产物：**

```shell
k230_evb_defconfig/images/
├── sysimage-sdcard.img       # SD 卡/eMMC 非安全启动镜像
├── sysimage-sdcard.img.gz    # 压缩版本
├── sysimage-spinor32m.img    # NOR Flash 镜像
└── ...
```

### 烧录镜像

**Linux：**

```shell
sudo dd if=sysimage-sdcard.img of=/dev/sdx bs=1M oflag=sync
```

**Windows：** 使用 [rufus](http://rufus.ie/downloads/) 工具烧录。

### 预编译镜像

如不希望自行编译，可从以下渠道下载预编译镜像：
- [GitHub Releases](https://github.com/kendryte/k230_sdk/releases)（v1.4 及以上）
- [嘉楠开发者社区](https://developer.canaan-creative.com/resource)（K230/Images 分类）

### K230 SDK 视频教程

* [K230 SDK 视频教程](https://www.youtube.com/watch?v=lxcQWDoruOI)

### 开发平台

1. [K230 SDK](https://github.com/kendryte/k230_sdk)（Linux / Docker）
2. [K230 CanMV](https://github.com/kendryte/k230_canmv/)（MicroPython 支持）
3. [ESP32-S3 Arduino IDE](https://www.arduino.cc/en/software)（协处理器开发）

## 视频

## 主要特点

- K230 双核 RISC-V（1.6GHz + 0.8GHz），NPU 约 1.6TOPS
- ESP32-S3-R8：16MB Flash，Wi-Fi + 蓝牙 5.0
- 4.1 英寸 AMOLED（568×1232），GT9895 电容触摸
- SX1262/SX1280 LoRa（433~923MHz），以太网，HDMI 1080P@30FPS
- 3 路 MIPI CSI-2 摄像头接口，3.5mm 音频接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| 主处理器 | K230 双核 RISC-V (1.6GHz + 0.8GHz) |
| 协处理器 | ESP32-S3-R8 |
| NPU | 约 1.6TOPS，支持 INT8/INT16 AI 推理 |
| 内存 | 8Gb LPDDR4 |
| 存储 | 16MB Flash + TF 卡 |
| 屏幕 | 4.1 英寸 AMOLED (568×1232)，2 lane MIPI DSI |
| 触摸 | GT9895 电容触摸 |
| 摄像头 | 3 路 MIPI CSI-2（最高 1路 4lane + 1路 2lane，1.5Gbps） |
| 视频输出 | HDMI 1080P@30FPS |
| LoRa | SX1262/SX1280（433~923MHz） |
| 网络 | Wi-Fi 802.11b/g/n（ESP32-S3）+ 以太网 |
| 蓝牙 | Bluetooth 5 (LE)（ESP32-S3） |
| 音频 | 3.5mm 音频输出 + 麦克风输入 |
| USB | 1 × 电源 USB + 1 × USB 2.0 OTG (Type-C) |
| IO 接口 | 2×20 双排扩展接口 |
| 按键 | RST + BOOT + INT0 |
| 指示灯 | 电源指示灯 + RGB 灯 |
| 电源 | 5V/500mA |
| 尺寸 | 104×51×15.5mm |

## 引脚图

<img src="/products/t-display-series/t-display-k230/assets/t-display-k230-cn.jpg" alt="T-Display K230 引脚图" width=100%>

## 尺寸图

## 原理图

## 数据手册

* [K230 文档](https://github.com/kendryte/k230_docs)
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 软件开发

* [K230 SDK GitHub 仓库](https://github.com/kendryte/k230_sdk)
* [K230 CanMV GitHub 仓库](https://github.com/kendryte/k230_canmv/)
* [嘉楠开发者社区](https://developer.canaan-creative.com/resource)

### K230 SDK 目录结构

| 目录 | 子目录 | 说明 |
| :-- | :-- | :-- |
| configs | — | 资源配置（内存分配规划） |
| output | — | SDK 编译产物 |
| src | big | 大核 RTSmart 代码 |
| src | common | 大小核公共代码 |
| src | little | 小核 Linux 代码 |
| tools | docker | Dockerfile |
| tools | gen_image.sh | 生成可烧写镜像的脚本 |
| tools | gen_image_cfg | 镜像分区配置文件 |

## 常见问题

* **Q. K230 开发板如何启动？**  
  A. 将拨码开关切换至 SD 卡启动模式，插入烧录好镜像的 TF 卡，将电源开关拨到 ON 位置即可上电启动。系统默认有两个串口：小核 Linux（用户名 root，密码为空）和大核 RTSmart。

* **Q. 如何快速验证硬件？**  
  A. 下载[嘉楠开发者社区](https://developer.canaan-creative.com/resource)中的预编译镜像直接烧录，无需自行编译 SDK。

* **Q. K230 SDK 编译速度慢怎么办？**  
  A. 推荐使用 Docker 编译环境（`ghcr.io/kendryte/k230_sdk`），也可参考 `tools/docker/Dockerfile` 在本地 Linux 环境安装依赖。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-K230_V1.0 | 2024-01-01 | 初始版本 |
