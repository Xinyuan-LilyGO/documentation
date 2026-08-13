---
title: 快速开始
show_source: false
---

# T-Display P4 快速开始

## 概述

T-Display P4 基于 **乐鑫 ESP32-P4** 高性能应用处理器，使用 ESP-IDF SDK 进行开发。

---

## 固件下载与烧录说明

文档或仓库中提到的“下载固件”，通常包含两个动作：先下载对应的 `.bin` 固件文件，再使用 **LILYGO Spark** 软件把固件烧录到开发板 Flash 中。T-Display P4 板上有 **ESP32-P4 主控** 和 **ESP32-C6 无线协处理器**，烧录前需要确认目标芯片，避免把固件刷到错误芯片。

### 烧录 ESP32-P4 主控固件

如果只是恢复出厂固件、运行官方示例或烧录 `LilygoBox` 等主控应用，一般只需要烧录 ESP32-P4：

1. 从 [T-Display-P4 GitHub Releases](https://github.com/Xinyuan-LilyGO/T-Display-P4/releases) 下载需要的 `.bin` 固件。
2. 打开 [LILYGO Spark](https://lilygo.cc/en-us/pages/lilygo-spark) 软件，进入“固件刷写工具”。
3. 使用 USB-C 连接 T-Display P4，烧录目标芯片选择 **ESP32-P4**。
4. 选择下载好的 `.bin` 文件，烧录地址填写 `0x0`。
5. 点击烧录，等待完成后按下 **RST** 或重新上电启动。

> 如果无法进入烧录模式，请按住 **BOOT**，按一下 **RST** 后松开，再松开 **BOOT**，然后重新开始烧录。

### 烧录 ESP32-C6 协处理器固件

ESP32-C6 用于 Wi-Fi / 蓝牙等无线功能。协处理器固件不能直接当作 ESP32-P4 主控固件烧录。以下步骤使用 **LILYGO Spark** 的“固件刷写工具”完成，顺序为 **P4 准备固件 → C6 协处理器固件 → P4 出厂固件**：

1. 在固件中心选择 **T-Display P4** 系列固件，找到 [`[T-Display-P4][coprocessor_download_mode]`](https://github.com/Xinyuan-LilyGO/T-Display-P4/blob/main/firmware/%5BT-Display-P4%5D%5Bcoprocessor_download_mode%5D) 并点击下载。下载完成后，选择设备对应的 **ESP32-P4** 端口进行烧录，用于让 ESP32-C6 进入下载准备模式。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-1-select-coprocessor-download-mode.png" alt="选择 T-Display P4 的 coprocessor download mode 固件" width=100%>

2. `coprocessor_download_mode` 烧录完成后，点击删除已下载的固件，再去下载下一个固件。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-2-delete-coprocessor-download-mode.png" alt="删除已下载的 coprocessor download mode 固件" width=100%>

3. 选择 [`lilygobox-t-display-p4-device-v1.0-esp32c6-rev0.0-v2.12.3-merged.bin`](https://github.com/Xinyuan-LilyGO/lilygobox-espidf/releases/download/v1.0.4/lilygobox-t-display-p4-device-v1.0-esp32c6-rev0.0-v2.12.3-merged.bin) 作为 ESP32-C6 协处理器固件。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-3-select-c6-firmware.png" alt="选择 ESP32-C6 协处理器固件" width=100%>

   使用 3.3V USB-TTL 串口下载器连接到设备的 C6 UART 接口。接口引脚顺序为 `RX-TX-3.3V-GND`，接线时 `RX` 接 USB-TTL `TX`，`TX` 接 USB-TTL `RX`，`GND` 接 `GND`。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-uart-download.png" alt="T-Display P4 ESP32-C6 UART 下载接口" width=70%>

4. 在烧录窗口中选择设备 **ESP32-C6** 对应的 USB-TTL 串口下载器端口，然后开始烧录。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-4-flash-c6-port.png" alt="选择 ESP32-C6 对应端口进行烧录" width=100%>

5. ESP32-C6 固件烧录完成后，点击删除已下载的 C6 固件，再去下载下一个固件。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-5-delete-c6-firmware.png" alt="删除已下载的 ESP32-C6 固件" width=100%>

6. 选择 [`lilygobox-t-display-p4-device-v1.0-esp32p4-rev1.0-v1.0.4-merged.bin`](https://github.com/Xinyuan-LilyGO/lilygobox-espidf/releases/download/v1.0.4/lilygobox-t-display-p4-device-v1.0-esp32p4-rev1.0-v1.0.4-merged.bin) 作为 ESP32-P4 出厂固件。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-6-select-p4-factory-firmware.png" alt="选择 ESP32-P4 出厂固件" width=100%>

7. 在烧录窗口中选择设备 **ESP32-P4** 对应的 USB 端口，然后开始烧录。

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-7-flash-p4-port.png" alt="选择 ESP32-P4 对应端口进行烧录" width=100%>

> 注意：ESP32-P4 主控固件与 ESP32-C6 协处理器固件不通用。主控固件选择 **ESP32-P4**，协处理器固件选择 **ESP32-C6**。
> 推荐先完成 ESP32-C6 协处理器固件烧录，再将 ESP32-P4 主控重新烧录为出厂固件或正常应用固件。

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
