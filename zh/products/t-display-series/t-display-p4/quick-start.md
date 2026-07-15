---
title: 快速开始
show_source: false
---

# T-Display P4 快速开始

## 概述

T-Display P4 基于 **乐鑫 ESP32-P4** 高性能应用处理器，使用 ESP-IDF SDK 进行开发。

---

## ESP-IDF 环境搭建

1. 安装 [ESP-IDF（ESP32-P4）](https://docs.espressif.com/projects/esp-idf/en/latest/esp32p4/get-started/)
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-P4.git
   ```
3. 进入示例目录并编译：
   ```bash
   idf.py set-target esp32p4
   idf.py build flash monitor
   ```

---

## 开发平台

- [ESP-IDF（ESP32-P4）](https://docs.espressif.com/projects/esp-idf/en/latest/esp32p4/)
- [T-Display-P4 仓库](https://github.com/Xinyuan-LilyGO/T-Display-P4)

---

## 常见问题

**Q：可以用 Arduino IDE 开发吗？**  
A：Arduino 对 ESP32-P4 的支持仍处于实验阶段，推荐使用 ESP-IDF。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
