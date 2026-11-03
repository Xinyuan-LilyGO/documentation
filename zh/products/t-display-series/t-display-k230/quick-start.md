---
title: 快速开始
show_source: false
---

# T-Display K230 快速开始

## 概述

T-Display K230 基于 **嘉楠科技 K230** RISC-V 双核处理器，主系统使用 K230 Linux/RT-Smart SDK。板载 Wi-Fi 为 RTL8189FS SDIO，蓝牙需要 USB 蓝牙适配器或可选 nRF52840 底板。

---

## SDK 环境搭建

1. 在 Ubuntu 22.04/24.04 或 WSL2 的 Linux 文件系统中克隆仓库并初始化子模块：
   ```bash
   git clone --recurse-submodules https://github.com/Xinyuan-LilyGO/T-Display-K230.git t-display-k230
   cd t-display-k230
   ```
2. 安装工具链并构建本板镜像：
   ```bash
   ./scripts/setup_ubuntu.sh
   ./scripts/apply_to_sdk.sh
   ./scripts/build_sdcard_image.sh
   ```
3. 生成的镜像位于 `k230_bsp/images/sysimage-sdcard.img`。Linux 使用 `dd` 写入 TF 卡，Windows 使用 Rufus 的 **DD 镜像模式**。

---

## 开发平台

- [K230 SDK](https://github.com/kendryte/k230_sdk)
- [T-Display-K230 仓库](https://github.com/Xinyuan-LilyGO/T-Display-K230)
- [K230 CanMV](https://github.com/kendryte/k230_canmv/)

---

## 常见问题

**Q：可以用 Arduino IDE 开发吗？**  
A：K230 主系统不能使用 Arduino IDE，需要使用 K230 SDK 工具链。当前 T-Display-K230 BSP 不包含 ESP32-S3 协处理器开发流程。

**Q：K230 支持哪些操作系统？**  
A：K230 SDK 使用 Linux 与 RT-Smart 双核架构：小核运行 Linux，大核运行 RT-Smart。

**Q：T-Display K230 的 Wi-Fi 和蓝牙芯片是什么？**

A：T-Display-K230 BSP 使用 RTL8189FS 通过 SDIO 提供 Wi-Fi；蓝牙需要 USB 蓝牙适配器或可选 nRF52840 底板。不同硬件版本请以实际驱动为准。
