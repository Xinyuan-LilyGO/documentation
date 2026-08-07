---
title: 快速开始
show_source: false
---

# T-Display P4 快速开始

## 概述

T-Display P4 基于 **乐鑫 ESP32-P4** 高性能应用处理器，使用 ESP-IDF SDK 进行开发。

---

## 固件下载与烧录说明

文档或仓库中提到的“下载固件”，通常包含两个动作：先下载对应的 `.bin` 固件文件，再把固件烧录到开发板 Flash 中。T-Display P4 板上有 **ESP32-P4 主控** 和 **ESP32-C6 无线协处理器**，烧录前需要确认目标芯片，避免把固件刷到错误芯片。

### 烧录 ESP32-P4 主控固件

如果只是恢复出厂固件、运行官方示例或烧录 `LilygoBox` 等主控应用，一般只需要烧录 ESP32-P4：

1. 从 [T-Display-P4 GitHub Releases](https://github.com/Xinyuan-LilyGO/T-Display-P4/releases) 下载需要的 `.bin` 固件。
2. 打开 [ESP Launchpad](https://espressif.github.io/esp-launchpad/) 或其他 ESP 烧录工具。
3. 使用 USB-C 连接 T-Display P4，烧录目标芯片选择 **ESP32-P4**。
4. 选择下载好的 `.bin` 文件，烧录地址填写 `0x0`。
5. 点击烧录，等待完成后按下 **RST** 或重新上电启动。

> 如果无法进入烧录模式，请按住 **BOOT**，按一下 **RST** 后松开，再松开 **BOOT**，然后重新开始烧录。

### 烧录 ESP32-C6 协处理器固件

ESP32-C6 用于 Wi-Fi / 蓝牙等无线功能。只有在需要更新无线协处理器固件时，才需要执行此步骤。协处理器固件不能直接当作 ESP32-P4 主控固件烧录。

1. 先给 ESP32-P4 主控烧录仓库中的 `coprocessor_download_mode` 固件，地址为 `0x0`。
2. 启动后查看串口日志，确认出现 `Coprocessor preparation completed`。
3. 断电后使用 3.3V USB-TTL 转接器连接协处理器 UART：`RX` 接 USB-TTL `TX`，`TX` 接 USB-TTL `RX`，`GND` 接 `GND`。

   串口下载接口位置如下图所示，引脚顺序为 `RX-TX-3.3V-GND`：

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-uart-download.png" alt="T-Display P4 ESP32-C6 UART 下载接口" width=70%>

4. 让 ESP32-C6 进入下载模式：按住协处理器 **BOOT**，按一下 **RESET** 后松开，再松开 **BOOT**。
5. 烧录工具中目标芯片选择 **ESP32-C6**，选择协处理器固件，烧录地址填写 `0x0`。
6. 协处理器烧录完成后，再把需要使用的 ESP32-P4 主控应用固件重新烧录回主控。

> 注意：ESP32-P4 主控固件与 ESP32-C6 协处理器固件不通用。主控固件选择 **ESP32-P4**，协处理器固件选择 **ESP32-C6**。

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
