---
title: LILYGO T-Glass
show_source: false
tags: ESP32-S3, AMOLED, Wearable, BHI260AP, Smart Glasses
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-glass" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-glass/index/image/t-glass-1.jpg', alt: 'T-Glass 正面图' },
  { src: '/products/other/t-glass/index/image/t-glass-2.jpg', alt: 'T-Glass 实物图' },
  { src: '/products/other/t-glass/index/image/t-glass-pin-zh.jpg', alt: 'T-Glass 引脚图' }
]" />

## 概述

LILYGO T-Glass 是一款基于 ESP32-S3 FN4R2 的智能可穿戴开发板，集成 BHI260AP AI 运动传感器（六轴 IMU）和 JD9613 驱动的 1.1 英寸 LTPS AMOLED 显示屏（分辨率 294×126px，可见区域 126×126px）。内置 4MB Flash 和 2MB QSPI PSRAM，配备 PCF85063A RTC、麦克风输入、振动反馈电机、侧面触摸按键和 QWIIC 扩展接口，适用于智能眼镜、运动追踪和便携可穿戴设备。

> 同系列产品 T-Wristband（[LILYGO Mall](https://www.lilygo.cc/products/t-wristband-s3)）使用相同主控和代码仓库，可见区域为 126×250px。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [GlassFactory](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/GlassFactory) | ✓ | 出厂综合测试 |
| [GlassHelloWorld](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/GlassHelloWorld) | ✓ | Hello World 显示示例 |
| [Glass6DoF](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/Glass6DoF) | ✓ | 六轴 IMU 运动传感示例 |
| [GlassDeepSleep](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/GlassDeepSleep) | ✓ | 深度睡眠示例 |
| [GlassTouchButton](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/GlassTouchButton) | ✓ | 触摸按键示例 |
| [GlassRtcDateTime](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/GlassRtcDateTime) | ✓ | RTC 时钟示例 |
| [GlassBatteryVoltage](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/GlassBatteryVoltage) | ✓ | 电池电量检测示例 |
| [GlassVoiceActivityDetection](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/examples/GlassV2/GlassVoiceActivityDetection) | ✓ | 语音活动检测示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [LilyGO-T-Wristband-and-T-Glass 项目代码](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例（`src_dir = xxx`），点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)（2.0.5 及以上，3.0 以下版本）。
2. 在库管理器中安装 `LilyGO T-Wristband and T-Glass`（选择 Install ALL），再安装 `lvgl 8.4.0` 和 `SensorLib 0.1.8`。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **4MB (32Mb)** |
| Core Debug Level | None |
| Partition Scheme | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **QSPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3 FN4R2：4MB Flash，2MB QSPI PSRAM，Wi-Fi + 蓝牙 5.0
- 1.1 英寸 JD9613 LTPS AMOLED（294×126px，可见区域 126×126px）
- BHI260AP AI 传感器（六轴 IMU：加速度计 + 陀螺仪）
- PCF85063A RTC，麦克风输入，振动反馈电机，侧面触摸按键
- 2 × QWIIC 接口，睡眠电流约 300µA

## 产品参数

<img src="/products/other/t-glass/index/image/t-glass-point-zh.jpg" alt="T-Glass 概述图" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 FN4R2 |
| Flash | 4MB |
| PSRAM | 2MB (QSPI) |
| 屏幕 | 1.1 英寸 JD9613 LTPS AMOLED (294×126px) |
| 运动传感器 | BHI260AP AI 传感器（六轴 IMU） |
| 触摸 | 侧面触摸按键 |
| RTC | PCF85063A |
| 音频 | 麦克风输入 |
| 振动 | 振动反馈电机 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 (LE) |
| USB | 1 × USB Type-C |
| 扩展接口 | 2 × QWIIC (4pin) |
| 按键 | RESET + BOOT |
| 开关 | 侧面电源开关 |
| 功耗 | 工作：90~230mA，睡眠：约 300µA |
| 尺寸 | 140×67×111mm |

## 引脚图

<img src="/products/other/t-glass/index/image/t-glass-pin-zh.jpg" alt="T-Glass 引脚图" width=100%>

## 尺寸图

## 原理图

* [T-Glass / T-Wristband 原理图](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/blob/master/schematic/LilyGO-T-Wristband-and-T-Glass.pdf)

## 数据手册

* [JD9613 Datasheet](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/blob/master/datasheet/JD9613_DS_Preliminary_V0.02_20210325.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/en/support/documents/technical-documents?keys=&field_type_tid%5B%5D=842)
* [BHI260AP Datasheet](https://www.bosch-sensortec.com/products/smart-sensor-systems/bhi260ap/)
* [PCF85063A Datasheet](https://www.nxp.com/products/analog-and-mixed-signal/real-time-clocks/rtcs-with-ic-bus/tiny-real-time-clock-calendar-with-alarm-function-and-ic-bus:PCF85063A)

## 软件开发

* [LilyGO-T-Wristband-and-T-Glass GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass)

### 依赖库

* [SensorLib 0.1.8](https://github.com/lewisxhe/SensorsLib)
* [lvgl 8.4.0](https://github.com/lvgl/lvgl/tree/release/v8.4)
* [MadgwickAHRS](https://github.com/arduino-libraries/MadgwickAHRS)

## 常见问题

* **Q. 找不到上传端口或 USB 持续闪烁怎么办？**  
  A. 手动进入下载模式：连接 USB 后，长按 BOOT 键同时按下 RST 键，先松开 RST，再松开 BOOT，然后上传程序。

* **Q. 使用外部电源（非 USB-C）供电时设备阻塞？**  
  A. 关闭 USB_CDC_ON_BOOT 选项（Arduino IDE 工具菜单 → USB CDC On Boot → Disabled；PlatformIO 在 build_flags 中将 `-DARDUINO_USB_CDC_ON_BOOT=1` 改为 `-UARDUINO_USB_CDC_ON_BOOT`）。关闭后串口信息从 GPIO43/GPIO44 输出。

* **Q. JD9613 屏幕旋转有哪些限制？**  
  A. JD9613 RAM 仅为屏幕尺寸的 1/2，不支持任意旋转。方向 0/2 为两个相反的竖屏方向；方向 1/3 为同一横屏方向，无法区分。

* **Q. 如何验证硬件是否正常？**  
  A. 烧录 firmware 目录中的二进制文件，运行出厂自检程序。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Glass V2 | — | 修改反射棱镜版本 |
| T-Glass V1 | — | 初始版本 |
