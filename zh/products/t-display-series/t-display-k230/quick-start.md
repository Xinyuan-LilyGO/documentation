---
title: 快速开始
show_source: false
---

# T-Display K230 快速开始

## 概述

T-Display K230 基于 **嘉楠科技 K230** RISC-V 双核处理器，不使用标准的 ESP32 Arduino/PlatformIO 开发流程。请参考官方 K230 SDK 进行开发。

---

## SDK 环境搭建

1. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-K230.git
   ```
2. 参考 README 安装工具链并按说明编译
3. 使用提供的脚本或 `kflash` 工具烧录固件

---

## 开发平台

- [K230 SDK](https://github.com/kendryte/k230_sdk)
- [T-Display-K230 仓库](https://github.com/Xinyuan-LilyGO/T-Display-K230)

---

## 常见问题

**Q：可以用 Arduino IDE 开发吗？**  
A：不可以。T-Display K230 基于嘉楠 K230 RISC-V SoC，需要使用 K230 SDK 工具链。

**Q：K230 支持哪些操作系统？**  
A：K230 支持裸机、RT-Thread 和 Linux（双核架构——大核运行 Linux，小核运行 RT-Thread 或裸机程序）。
