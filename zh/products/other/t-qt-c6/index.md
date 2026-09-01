---
title: LILYGO T-QT C6
show_source: false
tags: ESP32-C6, Wearable, TFT, IMU, QWIIC
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-qt-c6" />

<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-qt-c6/index/image/t-qt-c6-1.jpg', alt: 'T-QT C6 正面图' },
  { src: '/products/other/t-qt-c6/index/image/t-qt-c6-2.jpg', alt: 'T-QT C6 实物图' },
  { src: '/products/other/t-qt-c6/index/image/t-qt-c6-pin-zh.jpg', alt: 'T-QT C6 引脚图' }
]" />

## 概述

LILYGO T-QT-C6 是基于 ESP32-C6-MINI-1U 微控制器的智能可穿戴开发套件，搭载 0.85 英寸 GC9107 TFT LCD（128×128px）和 CST816T 电容触摸，内置 LSM6DSLTR 六轴 IMU 和 SGM41562 电源管理芯片，支持 Wi-Fi 6 和蓝牙 5.0。具有呼吸灯（WS2812）、QWIIC 扩展接口和电池背板，适用于运动监测、智能穿戴和嵌入式原型开发。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [Lvgl_CIT_SGM41562](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/Lvgl_CIT_SGM41562) | ✓ | 出厂综合测试（V1.2） |
| [Lvgl_CIT_ETA4662](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/Lvgl_CIT_ETA4662) | ✓ | 出厂综合测试（V1.0-V1.1） |
| [GFX](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/GFX) | ✓ | 屏幕显示示例 |
| [CST816T](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/CST816T) | ✓ | 触摸按键示例 |
| [IMU](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/IMU) | ✓ | 六轴 IMU 示例 |
| [IMU_Level](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/IMU_Level) | ✓ | IMU 水平仪示例 |
| [Battery_Voltage](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/Battery_Voltage) | ✓ | 电池电量检测 |
| [Breathing_Light](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/BREATHING_LIGHT) | ✓ | 呼吸灯示例 |
| [Deep_Sleep](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/Deep_Sleep) | ✓ | 深度睡眠（约 172µA） |
| [Light_Sleep](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/Light_Sleep) | ✓ | 轻度睡眠（约 517µA） |
| [SGM41562](https://github.com/Xinyuan-LilyGO/T-QT-C6/tree/master/examples/SGM41562) | ✓ | 电源管理芯片（V1.2） |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-QT-C6 项目代码](https://github.com/Xinyuan-LilyGO/T-QT-C6)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)（v3.0.2）。
2. 将 `libraries` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32C6 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 160MHz |
| Flash Mode | QIO |
| Flash Size | 4MB (32Mb) |
| Core Debug Level | None |
| Partition Scheme | Huge APP (3MB No OTA/1MB SPIFFS) |

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-C6-MINI-1U：4MB Flash，Wi-Fi 6 + 蓝牙 5.0 (LE)
- 0.85 英寸 GC9107 TFT LCD（128×128px），CST816T 电容触摸
- LSM6DSLTR 六轴 IMU（加速度计 + 陀螺仪，支持步数计数）
- SGM41562 PMU（自动切换 USB/电池供电）
- WS2812 呼吸灯，QWIIC 接口

## 产品参数

<img src="/products/other/t-qt-c6/index/image/t-qt-c6-info-zh.jpg" alt="T-QT C6 概述图" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-C6-MINI-1U (ESP32-C6-FH4) |
| Flash | 4MB |
| PSRAM | 4MB |
| 屏幕 | 0.85 英寸 GC9107 TFT (128×128px) |
| 触摸 | CST816T 电容触摸 |
| 传感器 | LSM6DSLTR 六轴 IMU（V1.1+） |
| 电源管理 | SGM41562 PMU（V1.2） / ETA4662（V1.0-V1.1） |
| LED | WS2812B/C 呼吸灯 |
| 无线 | Wi-Fi 6 + Bluetooth 5.0 (LE) |
| USB | 1 × USB Type-C (OTG) |
| IO 接口 | 2 × 2×7 扩展 IO |
| 扩展接口 | QWIIC 4pin + 电池接口 + 电源接口 |
| 按键 | RESET + BOOT |
| 尺寸 | 33×24×44.5mm |

## 功耗参考

| 硬件版本 | 模式 / 测试固件 | 电流 |
| :-- | :-- | :-- |
| T-QT-C6 V1.2 | 浅睡眠 | 553 µA |
| T-QT-C6 V1.2 | 深度睡眠 | 170 µA |

> 数据在电池输入端使用官方睡眠测试固件测得，详见 [T-QT-C6 V1.2 功耗测试报告](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/relevant_test/PowerConsumptionTestLog_%5BT-QT-C6_V1.2%5D_20241122.pdf)。V1.0-V1.1 使用不同的 PMU，结果可能不同。

## 引脚图

<img src="/products/other/t-qt-c6/index/image/t-qt-c6-pin-zh.jpg" alt="T-QT C6 引脚图" width=100%>

### 引脚映射

| 名称 | GPIO |
| :-- | :--: |
| TFT MOSI | IO15 |
| TFT SCLK | IO18 |
| TFT RST | IO20 |
| TFT BL | IO2 |
| TFT CS | IO14 |
| TFT DC | IO19 |
| 触摸 SDA / PMU SDA / IMU SDA | IO21 |
| 触摸 SCL / PMU SCL / IMU SCL | IO22 |
| 触摸 RST | IO23 |
| 触摸 INT / 睡眠唤醒 | IO7 |
| IMU 地址选择 | IO3 |
| IMU INT1 / INT2 | IO0 / IO1 |
| PMU INT（V1.2） | IO4 |
| 电池 ADC | IO6 |
| 电池测量控制 | IO8 |
| 呼吸灯 | IO9 |

> 详细引脚定义请参考原理图。

## 尺寸图

## 原理图

* [T-QT-C6 电池板 V1.1 原理图](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.2/T-QT-C6_Battery_V1.1.pdf)
* [T-QT-C6 MCU V1.2 原理图](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.2/T-QT-C6_MCU_V1.2.pdf)

## 数据手册

* [ESP32-C6 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6-mini-1_mini-1u_datasheet_en.pdf)
* [LSM6DSL Datasheet](https://www.st.com/resource/en/datasheet/lsm6dsl.pdf)
* [SGM41562 Datasheet](https://www.sg-micro.com/uploads/soft/20230630/1688108945.pdf)

## 软件开发

* [T-QT-C6 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-QT-C6)

### 依赖库

* [Arduino_DriveBus 1.1.16](https://github.com/Xinyuan-LilyGO/Arduino_DriveBus)
* [Arduino_GFX 1.3.7](https://github.com/moononournation/Arduino_GFX)
* [lvgl 8.3.5](https://github.com/lvgl/lvgl)

## 常见问题

* **Q. T-QT C6 的主要应用场景是什么？**  
  A. 专为智能可穿戴设备设计，适用于运动监测、健康追踪、智能戒指和便携式交互设备等场景。

* **Q. 如何连接外部传感器？**  
  A. 通过板载 QWIIC 4pin 接口快速连接兼容传感器模块，也可通过 2×7 扩展 IO 接口连接其他外设。

* **Q. 如何实现低功耗运行？**  
  A. V1.2 官方实测深度睡眠约 170 µA、浅睡眠约 553 µA。V1.0-V1.1 使用不同的 PMU，结果可能不同。

* **Q. V1.0/V1.1 和 V1.2 有什么区别？**  
  A. V1.2 将电源管理芯片更换为 SGM41562（原为 ETA4662），稳定性更好；电池背板 V1.2 改用 2pin 1.25mm 间距引脚座连接，提高系统稳定性。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-QT-C6_MCU_V1.0 | 2023-12-20 | 初始版本 |
| T-QT-C6_MCU_V1.1 | 2024-03-27 | 新增电池背板支持 |
| T-QT-C6_MCU_V1.2 | 2024-06-13 | 电源管理芯片改为 SGM41562 |
| T-QT-C6_Battery_V1.2 | 2025-08-11 | 背板改用 2pin 1.25mm 电池座，提高稳定性 |
