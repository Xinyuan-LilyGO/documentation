---
title: LILYGO T-PICO-2350
show_source: false
tags: RP2350, ESP32-C6, Raspberry Pi, Dual-Core
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-pico?variant=45197490585781" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-pico-2350/index/image/t-pico-2350-03.jpg', alt: 'T-PICO-2350 正面图' },
  { src: '/products/other/t-pico-2350/index/image/t-pico-2350-04.jpg', alt: 'T-PICO-2350 实物图' },
  { src: '/products/other/t-pico-2350/index/image/t-pico-2350-01.jpg', alt: 'T-PICO-2350 引脚图' }
]" />

## 概述

T-PICO-2350 是 T-Pico 系列基于树莓派 RP2350 芯片的版本，集成 RP2350 + ESP32-C6 双芯片架构，搭载 2.33 英寸电容触摸 IPS LCD、TF 卡、HDMI 接口、2 × QWIIC 接口和 PMU 电源管理。支持电池供电和 USB 供电，正反插 USB-C 可分别对两颗芯片编程。底部预留 4 个 M1.4 铜螺母用于扩展固定，同时提供 2×13 排母扩展和 13pin 0.3mm 间距 FPC 扩展接口。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | C/C++ | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2/tree/master/examples/Factory) | ✓ | ✓ | 出厂示例 |

更多 RP2350 示例请参考 [arduino-pico-libraries](https://github.com/earlephilhower/arduino-pico/tree/master/libraries)，更多 ESP32-C6 示例请参考 [arduino-esp32-libraries](https://github.com/espressif/arduino-esp32/tree/master/libraries)。

### 新用户指南

- 首次使用时，需要使用 [Zadig](https://zadig.akeo.ie/) 替换驱动以正确识别端口。
- 可逆 Type-C 设计：一侧对应 **RP2350** 端口，另一侧对应 **ESP32-C6** USB 端口。
- 识别 RP2350 端口：按住侧面 **BOOT** 按钮，然后插入 **USB-C**，电脑识别为磁盘即为 RP2350 端口。
- `QWIIC` I2C 端口仅能配置为 I2C 接口（连接到屏幕触摸和 PMU），不能用于其他用途。
- **ESP32-C6** 使用修改过的 AT 固件，已交换 TX/RX 引脚。

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [Lilygo-T-Pico2 项目代码](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino Pico](https://arduino-pico.readthedocs.io/en/latest/install.html)。
2. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 按照下图配置 Arduino IDE 设置：

<img src="/products/other/t-pico-2350/index/image/image.png" alt="Arduino IDE 设置" width=80%>

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)（需安装 Arduino Pico）
3. [ESP32-C6 AT 命令集](https://docs.espressif.com/projects/esp-at/en/latest/esp32c6/AT_Command_Set/index.html)

## 视频

## 主要特点

- RP2350：16MB Flash，520KB SRAM，双核处理器
- ESP32-C6-MINI-1U-N4：4MB Flash，Wi-Fi 6（2.4GHz）+ 蓝牙 BLE
- 2.33 英寸 ST7796S IPS LCD，XL9535 I2C 电容触摸
- HDMI 接口，TF 卡，2 × QWIIC，PMU 电源管理
- 可逆 USB-C 分别编程两颗芯片

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| 主处理器 | RP2350 |
| 无线协处理器 | ESP32-C6-MINI-1U-N4 |
| Flash | 16MB (RP2350) + 4MB (ESP32-C6) |
| SRAM | 520KB (RP2350) |
| 屏幕 | 2.33 英寸 ST7796S IPS LCD |
| 触摸 | XL9535 I2C 电容触摸 |
| 存储 | TF 卡 |
| 视频输出 | 19pin HDMI 接口 |
| 无线 | Wi-Fi 6 + BLE (ESP32-C6) |
| 扩展接口 | 2×13 IO + 2 × QWIIC + 13pin FPC |
| 电源管理 | 集成 PMU |
| 安装孔 | 4 × M1.4mm |

## 引脚图

<img src="/products/other/t-pico-2350/index/image/t-pico-2350-01.jpg" alt="T-PICO-2350 引脚图" width=100%>

> XL9535 是 RP2350A 的外部扩展 IO 端口，详细引脚定义请参考原理图。

## 尺寸图

## 原理图

* [T-PICO-2350 V1.2 原理图](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2/blob/master/hardware/T_Pico2350_V1.2.pdf)

## 数据手册

* [RP2350 文档](/datasheet/RP-008373-DS-2-rp2350-datasheet.pdf)
* [ST7796S Datasheet](/datasheet/ST7796S-Sitronix.pdf)
* [LTR-553ALS 光线传感器](https://github.com/lewisxhe/SensorsLib)
* [SY6970 Datasheet](/datasheet/AN_SY6970.pdf)

## 软件开发

* [Lilygo-T-Pico2 GitHub 仓库](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2)
* [ESP32-C6 AT 固件自定义编译](https://github.com/lewisxhe/esp-at)

### 依赖库

* [lvgl 8.3.9](https://github.com/lvgl/lvgl)
* [AceButton](https://github.com/bxparks/AceButton)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [WiFiEspAT](https://github.com/jandrassy/WiFiEspAT)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## 常见问题

* **Q. 如何进入 RP2350 下载模式？**  
  A. 按住侧面 BOOT 键的同时按下同侧 RST 键，先释放 RST，再释放 BOOT，即可进入下载模式。

* **Q. 如何烧录 ESP32-C6？**  
  A. ESP32-C6 复位引脚由 RP2350 控制，烧录时请勿在 RP2350 程序中包含控制 ESP32-C6 复位引脚的操作。按住 ESP32-C6 模块侧的 BOOT 按钮并插入 "ESP32-C6" 对应 USB-C 侧，即可烧录。

* **Q. 如何验证硬件是否正常？**  
  A. 进入 RP2350 下载模式后，将 `firmware` 目录中的 `firmware.uf2` 拖入磁盘。程序包含硬件自检功能。

* **Q. 为什么串口没有输出？**  
  A. Arduino IDE 中选择工具栏 "调试端口：串口"，并在串口助手中打开 `DTR` 选项。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-PICO-2350_V1.2 | 2024-01-01 | 初始版本 |
