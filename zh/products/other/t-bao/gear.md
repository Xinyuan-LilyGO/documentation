---
title: T-Bao Gear
show_source: false
tags: K210, ESP32, AI, Camera, Motor, Robot, WiFi
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-bao" />


## 概述

T-Bao Gear 是 T-Bao AIoT 终端的智能小车扩展版本，将 **K210** RISC-V AI 芯片与 **ESP32** 双核 MCU 融合到轮式机器人底盘中。通过 **DRV8833** 双路 H 桥电机驱动器控制两路直流减速电机，配合 **ES_9051** 舵机实现摄像头云台控制。K210 负责端侧 AI 推理（人脸检测、表情识别、目标追踪）并驱动板载屏幕，ESP32 负责运动控制、WiFi 通信与 Web 远程遥控。适用于 AI 机器人教育、自主导航研究和远程控制车辆等场景。

## 快速开始

### 示例应用

| 示例 | PlatformIO / Arduino | 功能说明 |
| :--: | :-----------------: | :------- |
| [DRV8833](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/DRV8833) | ✓ | 直流电机基础驱动，串口指令控制 |
| [ES_9051](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/ES_9051) | ✓ | 舵机精确角度控制（0–180°） |
| [Seeking](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Seeking) | ✓ | 自动人脸追踪，丢失目标超时搜寻 |
| [Emotion](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Emotion) | ✓ | 随机表情动画 — 小车随机播放表情动画和运动 |
| [Factory](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Factory) | ✓ | 多模式集成：人脸跟随 / 物体识别 / 遥控 |
| [Remote](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Remote) | ✓ | WiFi Web 远程遥控驾驶 |

### 固件下载

| 示例 | ESP32 固件 | K210 固件 | K210 模型 | 说明 |
| :--: | :--------: | :-------: | :-------: | :--- |
| DRV8833 | [firmware_lilygo-t-bao-esp32-DRV8833](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-DRV8833.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | — | 串口控制 |
| Seeking | [firmware_lilygo-t-bao-esp32-Seeking](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Seeking.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | [face_model_at_0x300000](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/model/face_model_at_0x300000.kfpkg) | 人脸追踪 + 自动搜寻 |
| Emotion | [firmware_lilygo-t-bao-esp32-Emotion](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Emotion.bin) | ⚠️ [maixpy_v0.6.2_87_g37c84a3e7](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_v0.6.2_87_g37c84a3e7.bin) | — | K210 固件与其他示例不同 |
| Factory | [firmware_lilygo-t-bao-esp32-Factory](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Factory.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | [face_model_at_0x300000](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/model/face_model_at_0x300000.kfpkg) | 多模式集成 |
| Remote | [firmware_lilygo-t-bao-esp32-Remote](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Remote.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | — | 仅需 ESP32 固件 |

### K210 固件烧录

1. 下载 [MaixPy IDE](http://dl.sipeed.com/MAIX/MaixPy/ide/) — 在线调试和固件烧录工具
2. 下载 [kflash_gui](https://dl.sipeed.com/shareURL/MAIX/tools) — K210 固件和模型烧录工具
3. 选择对应示例的固件和模型文件进行烧录

> **注意：** **Emotion** 示例使用不同的 K210 固件（`maixpy_v0.6.2_87_g37c84a3e7.bin`），请勿与其他示例混用。

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-Bao` 项目文件夹
4. 打开 `platformio.ini`，取消注释要使用的示例
5. 点击 **✓** 编译，通过 USB-C 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 打开目标示例的 `.ino` 文件
4. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :--: |
| 开发板 | **ESP32 Dev Module** |
| 端口 | 你的端口 |
| Flash 大小 | **16MB (128Mb)** |
| 分区方案 | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **已启用** |
| 上传速度 | 921600 |

5. 点击 **上传**

## 相关视频

- [T-BAO 演示视频](https://www.youtube.com/watch?v=vCzTFDb4YZ0)

## 主要特点

- K210 RISC-V 双核 64 位 AI 芯片（400 MHz），KPU 神经网络处理器 — 端侧人脸检测、随机表情动画、目标追踪
- ESP32-D0WDQ6-V3，16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 4.2
- DRV8833 双路 H 桥电机驱动，控制两路直流减速电机
- ES_9051 舵机，摄像头云台控制（0–180°）
- OV2640 200 万像素摄像头，支持 180° 旋转
- ST7789V 1.54 英寸 IPS 触控屏（240 × 240），由 K210 侧驱动
- 支持 WiFi Web 远程遥控
- K210 ↔ ESP32 UART 通信（TX: GPIO25，RX: GPIO26）
- 多种运行模式：人脸追踪、表情互动、Web 遥控、多模式工厂

## 产品参数

| 参数 | 规格 |
| :--: | :--: |
| AI 芯片 | K210 RISC-V 双核 64 位，400 MHz，KPU ~0.5 TOPS |
| 主 MCU | ESP32-D0WDQ6-V3 双核 LX6，240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n |
| 蓝牙 | Bluetooth 4.2 + BLE |
| 显示屏 | 1.54 英寸 ST7789V IPS TFT，240 × 240，由 K210 侧驱动 |
| 摄像头 | OV2640（200 万像素，180° 旋转） |
| 电机驱动 | DRV8833 双路 H 桥 |
| 舵机 | ES_9051（0–180°） |
| USB | 1 × Type-C |

## 引脚图

<!-- 引脚图图片 -->

### 电机（DRV8833）

| DRV8833 | EN    | IN1    | IN2    | IN3    | IN4    |
| :-----: | :---: | :----: | :----: | :----: | :----: |
| ESP32   | GPIO2 | GPIO22 | GPIO21 | GPIO15 | GPIO13 |

### 舵机

| ES_9051 | 信号线 |
| :-----: | :----: |
| ESP32   | GPIO19 |

### K210 UART

| K210  | TX     | RX     |
| :---: | :----: | :----: |
| ESP32 | GPIO26 | GPIO25 |

## 尺寸图

## 原理图

* [T-Bao 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script/blob/master/schematic/K210_Main.pdf)

## 数据手册

* [K210 数据手册](https://canaan.io/product/kendryteai)
* [ESP32 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
* [OV2640 数据手册](https://www.ovt.com/sensors/OV2640)
* [DRV8833 数据手册](https://www.ti.com/product/DRV8833)

## 软件开发

* [T-Bao GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Bao) — ESP32 Arduino/PlatformIO 示例
* [LilyGo-K210-Script](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script) — K210 MicroPython 示例
* [MaixPy](https://github.com/sipeed/MaixPy) — K210 开发框架
* [MaixHub](https://maixhub.com/) — 在线模型训练平台

## 常见问题

* **Q. K210 和 ESP32 如何通信？**
  A. 通过 UART 串口通信——K210 TX → ESP32 GPIO26，K210 RX → ESP32 GPIO25。K210 负责 AI 推理，ESP32 负责运动控制和 WiFi。

* **Q. Emotion 示例烧录标准 K210 固件后无法运行？**
  A. Emotion 示例需要专用 K210 固件（`maixpy_v0.6.2_87_g37c84a3e7.bin`），请按固件表中的对应固件烧录。

* **Q. 如何调整电机速度？**
  A. 修改 `MotorPWMConfig` 结构体中的 PWM 值，范围 0–255，例如 `{200, 0, 0, 200}` 代表更高速度。

* **Q. 如何修改舵机角度范围？**
  A. 编辑示例源码中的 `SERVO_MIN_ANGLE` 和 `SERVO_MAX_ANGLE` 常量。

* **Q. Web 遥控无法连接？**
  A. 确认 ESP32 已烧录 Remote 或 Factory 固件，手机/电脑连接 ESP32 的 WiFi AP 后，在浏览器中打开串口输出的 IP 地址即可。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.0 | — | 初始版本 |
