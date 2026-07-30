---
title: LILYGO T-Bao
show_source: false
tags: K210, ESP32, AI, Camera, Touch Screen, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-bao" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-bao/index/image/t-bao-1.jpg', alt: 'T-Bao 正面图' },
  { src: '/products/other/t-bao/index/image/t-bao-2.jpg', alt: 'T-Bao 实物图' },
  { src: '/products/other/t-bao/index/image/t-bao.jpg', alt: 'T-Bao 引脚图' }
]" />

## 概述

T-Bao 是一款基于 ESP32-D0WDQ6-V3 和 K210 RISC-V AI 芯片的开源 AIoT 终端，深度融合 K210 RISC-V 架构 AI 芯片与 ESP32 双核 Wi-Fi/BLE 通信模组，搭载 OV2640 200 万像素摄像头（支持 180° 旋转调节）及 ST7789V 1.54 英寸 IPS 触控屏（240×240）。该屏幕由 K210 侧驱动，ESP32 侧通过 UART 与 K210 通信，不直接连接显示屏。内置 MAX98357A I2S 数字功放、MSM261S 麦克风阵列，采用 AXP202 智能电源管理，集成 MPU6050 六轴传感器、TF 卡和磁吸扩展接口，适用于工业视觉检测、智能安防、AIoT 终端及教育机器人等场景。

## 快速开始

### 示例应用

| 应用类型 | K210 固件 | ESP32 固件 | 模型文件 |
| :------ | :------: | :-------: | :------- |
| 方向识别 | maixpy_twatch_v0.6.2-75_dirty.bin | ESP32_AT_Firmware_UART1_SGPIO.bin | Identify_Direction_model.kmodel |
| 人脸识别 | maixpy_twatch_v0.6.2-75_dirty.bin | ESP32_AT_Firmware_UART1_SGPIO.bin | face_model_at_0x300000.kfpkg |
| 语音识别 | maixpy_v0.6.2_minimum_speech.bin | ESP32_AT_Firmware_UART1_SGPIO.bin | maix_asr_2900k_0x500000.kmodel |

### K210 固件烧录

1. 下载最新固件：[MaixPy 固件](https://cn.dl.sipeed.com/MAIX/MaixPy/release/master)
2. 下载烧录工具：[kflash_gui](https://cn.dl.sipeed.com/shareURL/MAIX/tools)
3. 选择对应固件和模型文件进行烧录

> **注意**：语音识别应用需先将模型文件 `maix_asr_2900k_0x500000.kmodel` 写入地址 0x500000，再烧录固件。

### 模型训练

使用 [Maixhub](https://maixhub.com/) 可以训练自己的模型，只需准备训练数据集，无需搭建训练环境和编写代码，上传数据即可快速训练出模型。训练完成后，将压缩包中的 `main.py` 和 `.kmodel` 文件上传到 SD 卡中运行。

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)（ESP32 开发）
2. [MaixPy IDE](https://dl.sipeed.com/shareURL/MAIX/MaixPy/ide)（K210 开发）
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)（ESP32 高级开发）
4. [MicroPython](https://docs.micropython.org/en/latest/)（脚本开发）

## 视频

## 主要特点

- K210 RISC-V 双核 64bit AI 芯片，400MHz，8MB SRAM，内置 KPU 神经网络处理器
- ESP32-D0WDQ6-V3：16MB Flash，8MB PSRAM，Wi-Fi + 蓝牙 4.2 + BLE
- 1.54 英寸 ST7789V IPS 触控屏（240×240），由 K210 侧驱动
- OV2640 200 万像素摄像头（支持 180° 旋转调节）
- MAX98357A I2S 功放 + MSM261S 麦克风阵列
- AXP202 PMU，MPU6050 六轴传感器，DRV8833 电机驱动

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| AI 芯片 | K210 RISC-V Dual Core 64bit，400MHz |
| 主 MCU | ESP32-D0WDQ6-V3，Dual Core LX6，240MHz |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 1.54 英寸 ST7789V IPS Touch (240×240)，K210 侧驱动 |
| 摄像头 | OV2640（200 万像素，180° 旋转） |
| 音频 | MAX98357A I2S 功放 + MSM261S 麦克风阵列 |
| 传感器 | MPU6050 六轴传感器 |
| 电源管理 | AXP202 PMU |
| 电机驱动 | DRV8833 |
| 存储 | TF 卡 |
| 无线 | Wi-Fi 802.11b/g/n + Bluetooth 4.2 + BLE |
| USB | 1 × Type-C |
| 按键 | RST + BOOT + 旋钮 + 4 × 屏幕按键 |
| 扩展接口 | 2 × QWIIC + 4 × 磁吸接口 |
| 尺寸 | 164 × 46 × 42mm |

## 引脚图

<img src="/products/other/t-bao/index/image/t-bao.jpg" alt="T-Bao 引脚图" width=100%>

> **SD 卡使用注意事项**  
> <img src="/products/other/t-bao/index/image/t-bao-zh.jpg" alt="SD 卡安装说明" width=80%>

## 尺寸图

## 原理图

* [T-Bao 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script/blob/master/schematic/K210_Main.pdf)

## 数据手册

* [K210 数据手册](https://canaan.io/product/kendryteai)
* [ESP32 数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32_datasheet_en.pdf)
* [OV2640 数据手册](https://www.ovt.com/sensors/OV2640)
* [ST7789V 数据手册](https://www.newhavendisplay.com/app_notes/ST7789V.pdf)

## 软件开发

* [LilyGo-K210-Script GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script)
* [MaixPy 文档](https://docs.micropython.org/en/latest/)
* [Maixhub 模型训练](https://maixhub.com/)

### 依赖库

* [MaixPy](https://github.com/sipeed/MaixPy)（K210 开发框架）
* [LVGL](https://lvgl.io/)（嵌入式图形库）
* [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)

## 常见问题

* **Q. K210 和 ESP32 如何通信？**  
  A. 通过 UART 串口通信，K210 作为 AI 处理器，ESP32 作为主控制器和通信模块。

* **Q. 摄像头无法正常工作？**  
  A. 检查摄像头排线连接，确认摄像头模块已正确插入，检查电源供应。

* **Q. 语音识别不准确？**  
  A. 确保在安静环境下使用，检查麦克风是否被遮挡，尝试重新训练模型。

* **Q. SD 卡无法识别？**  
  A. 参考引脚图中 SD 卡安装说明，确保卡片正确插入且格式为 FAT32。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Bao_V1.0 | — | 基于 K210+ESP32 的双核 AIoT 终端初始版本 |
