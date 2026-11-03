---
title: LILYGO T-Display K230
show_source: false
tags: K230, AIoT, LoRa, AMOLED, RISC-V
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-k230" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-k230/index/image/t-display-k230-1.jpg', alt: 'T-Display K230 正面图' },
  { src: '/products/t-display-series/t-display-k230/index/image/t-display-k230-2.jpg', alt: 'T-Display K230 实物图' },
  { src: '/products/t-display-series/t-display-k230/index/image/t-display-k230-3.jpg', alt: 'T-Display K230 斜视图' }
]" />

## 概述

T-Display K230 是基于嘉楠 K230 AI 芯片设计的高性能 AIoT 开发板，配备 4.1 英寸 AMOLED 屏幕（568×1232）和 GT9895 电容触摸。K230 搭载双核 RISC-V 处理器（大核 1.6GHz + 小核 0.8GHz）和约 1.6TOPS 算力的 NPU，内置 1 GB LPDDR4 内存。板载 RTL8189FS 通过 SDIO 提供 Wi-Fi；蓝牙需使用 USB 蓝牙适配器或可选的 nRF52840 底板。板载 SX1262/SX1280 LoRa、以太网、HDMI 输出（1080P@30FPS）、3 路 MIPI CSI-2 摄像头接口和 3.5mm 音频接口，适用于 AI 推理、远程图像识别和物联网监控等场景。

<a href="/products/t-display-series/t-display-k230/k230/index.html?lang=zh" target="_blank" rel="noopener noreferrer">K230 40Pin 引脚查询工具</a>

## 快速开始

### T-Display K230 SDK 编译

T-Display-K230 仓库包含本板的 BSP 和 Launcher。推荐在 Ubuntu 22.04 或 24.04 的 Linux 文件系统中编译；Windows 用户请使用 WSL2。嘉楠官方 K230 SDK 文档推荐 Ubuntu 20.04，并提供 Docker 编译环境。

**下载 T-Display-K230 源码并初始化 SDK 子模块：**

```sh
git clone --recurse-submodules https://github.com/Xinyuan-LilyGO/T-Display-K230.git t-display-k230
cd t-display-k230
./scripts/setup_ubuntu.sh
```

**应用板级支持并构建 SD 卡镜像：**

```sh
./scripts/apply_to_sdk.sh
./scripts/build_sdcard_image.sh
```

**编译产物：**

```text
k230_bsp/images/sysimage-sdcard.img
```

如果只需要使用上游 K230 SDK，请参阅 [嘉楠 K230 SDK README](https://github.com/kendryte/k230_sdk)，执行 `make prepare_sourcecode` 下载工具链和依赖，再根据目标开发板选择 `make CONF=xxx`。T-Display K230 应使用本节的板级仓库和构建脚本。

### 烧录镜像

**Linux：**

```shell
sudo dd if=k230_bsp/images/sysimage-sdcard.img of=/dev/sdX bs=8M status=progress conv=fsync
sync
```

**Windows：** 使用 [Rufus](https://rufus.ie/en) 写入 `sysimage-sdcard.img`，如果提示写入模式，请选择 **DD 镜像模式**。Windows 提示格式化未知分区时请选择取消。

### 预编译镜像

如不希望自行编译，请优先使用 [T-Display-K230 Releases](https://github.com/Xinyuan-LilyGO/T-Display-K230/releases) 中与本板匹配的镜像。嘉楠社区的通用 K230 镜像需要对应的板级配置，不能直接替代 T-Display K230 BSP 镜像。

### K230 SDK 视频教程

* [K230 SDK 视频教程](https://www.youtube.com/watch?v=lxcQWDoruOI)

### 开发平台

1. [T-Display-K230 BSP](https://github.com/Xinyuan-LilyGO/T-Display-K230)（本板 Linux/RT-Smart 镜像）
2. [K230 SDK](https://github.com/kendryte/k230_sdk)（Linux / Docker）
3. [K230 CanMV](https://github.com/kendryte/k230_canmv/)（MicroPython 支持）
4. [nRF52840 底板固件](https://github.com/Xinyuan-LilyGO/T-Display-K230-nRF52840)（可选 BLE 外设）

## 视频

## 主要特点

- K230 双核 RISC-V（1.6GHz + 0.8GHz），NPU 约 1.6TOPS
- RTL8189FS SDIO Wi-Fi（部分 K230 BSP 也支持 RTL8723DS）
- 蓝牙：USB 蓝牙适配器或可选 nRF52840 底板；RTL8723DS 的蓝牙还需要独立 UART 信号
- 4.1 英寸 AMOLED（568×1232），GT9895 电容触摸
- SX1262/SX1280 LoRa（433~923MHz），RTL8152B 百兆以太网，HDMI 1080P@30FPS
- 3 路 MIPI CSI-2 摄像头接口，3.5mm 音频接口

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| 主处理器 | K230 双核 RISC-V (1.6GHz + 0.8GHz) |
| NPU | 约 1.6TOPS，支持 INT8/INT16 AI 推理 |
| 内存 | 1 GB LPDDR4 |
| 存储 | TF 卡（SD 卡镜像） |
| 屏幕 | 4.1 英寸 AMOLED (568×1232)，2 lane MIPI DSI |
| 触摸 | GT9895 电容触摸 |
| 摄像头 | 3 路 MIPI CSI-2（最高 1路 4lane + 1路 2lane，1.5Gbps） |
| 视频输出 | HDMI 1080P@30FPS |
| LoRa | SX1262/SX1280（433~923MHz） |
| Wi-Fi | 2.4GHz 802.11 b/g/n，RTL8189FS 通过 SDIO 连接 |
| 蓝牙 | 板载未集成；支持 USB 蓝牙适配器和可选 nRF52840 底板 |
| 音频 | 3.5mm 音频输出 + 麦克风输入 |
| USB | 1 × 电源 USB + 1 × USB 2.0 OTG (Type-C) |
| IO 接口 | 2×20 双排扩展接口 |
| 按键 | RST + BOOT + INT0 |
| 指示灯 | 电源指示灯 + RGB 灯 |
| 电源 | 5V/500mA |
| 尺寸 | 104×51×15.5mm |

## 产品详情

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-specifications.jpg" alt="T-Display K230 产品规格图" width=100%>

## 引脚图

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-cn.jpg" alt="T-Display K230 引脚图" width=100%>

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-40pin.jpg" alt="T-Display K230 2 × 20Pin 扩展排针引脚图" width=100%>

## 扩展板

<img src="/products/t-display-series/t-display-k230/index/image/t-display-k230-keyboard-extension.jpg" alt="T-Display K230 键盘扩展板" width=100%>

## 尺寸图

## 原理图

## 数据手册

* [K230 文档](https://github.com/kendryte/k230_docs)

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
  A. 使用 T-Display-K230 构建的 SD 卡镜像，将启动开关切换至 SD 卡模式，插入烧录好的 TF 卡并上电。K230 默认有两个串口：小核运行 Linux（用户名 root，密码为空），大核运行 RT-Smart。

* **Q. 如何快速验证硬件？**  
  A. 下载 [T-Display-K230 Releases](https://github.com/Xinyuan-LilyGO/T-Display-K230/releases) 中与本板匹配的预编译镜像直接烧录，无需自行编译 SDK。嘉楠开发者社区中的通用 K230 镜像只有在板级配置匹配时才能使用。

* **Q. K230 SDK 编译速度慢怎么办？**  
  A. 推荐使用 Docker 编译环境（`ghcr.io/kendryte/k230_sdk`），也可参考 `tools/docker/Dockerfile` 在本地 Linux 环境安装依赖。

* **Q. T-Display K230 的 Wi-Fi 和蓝牙由 ESP32-S3 提供吗？**

  A. 不是。T-Display-K230 BSP 使用 RTL8189FS 通过 SDIO 提供 Wi-Fi；蓝牙需要 USB 蓝牙适配器或可选 nRF52840 底板。请根据实际硬件版本确认无线芯片和驱动。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-K230_V1.0 | 2024-01-01 | 初始版本 |
