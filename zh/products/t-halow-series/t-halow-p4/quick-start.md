---
title: 快速开始
show_source: false
---

# T-HaLow P4 快速开始

## 概述

T-HaLow P4 将 **ESP32-P4** 高性能应用处理器与 **Wi-Fi HaLow（802.11ah）** 结合，适用于需要强大本地处理能力的远距离亚 1 GHz 物联网应用。

---

## ESP-IDF 环境搭建

1. 安装 [ESP-IDF（ESP32-P4）](https://docs.espressif.com/projects/esp-idf/en/latest/esp32p4/get-started/)
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Halow.git
   ```
3. 进入示例目录并编译：
   ```bash
   idf.py set-target esp32p4
   idf.py build flash monitor
   ```

---

## 常见问题

**Q：可以用 Arduino IDE 开发吗？**  
A：Arduino 对 ESP32-P4 的支持仍处于实验阶段，推荐使用 ESP-IDF。
