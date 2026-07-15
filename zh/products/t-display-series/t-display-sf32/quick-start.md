---
title: 快速开始
show_source: false
---

# T-Display SF32 快速开始

## 概述

T-Display SF32 基于 **锐思华创 SF32** 处理器，使用 SF32 SDK 进行开发。

---

## SDK 环境搭建

1. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-SF32.git
   ```
2. 参考 README 安装 SDK 工具链
3. 使用提供的脚本进行编译和烧录

---

## 开发平台

- [T-Display-SF32 仓库](https://github.com/Xinyuan-LilyGO/T-Display-SF32)

---

## 常见问题

**Q：可以用 Arduino IDE 或 ESP-IDF 开发吗？**  
A：不可以。T-Display SF32 使用锐思华创 SF32 芯片，需要其专用 SDK 工具链。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
