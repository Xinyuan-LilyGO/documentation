---
title: LILYGO T-Display S3 Pro
show_source: false
tags: ESP32-S3, AMOLED, TFT_eSPI, USB OTG, IPS, Capacitive Touch
---

# {{ $frontmatter.title }} <ShopLink href="https://www.lilygo.cc/products/t-display-s3-pro" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-pro/assets/t-display-s3-pro-1.jpg', alt: 'T-Display S3 Pro 正面图' },
  { src: '/products/t-display-series/t-display-s3-pro/assets/t-display-s3-info.jpg', alt: 'T-Display S3 Pro 概述图' },
  { src: '/products/t-display-series/t-display-s3-pro/assets/t-display-s3 pro-pin.jpg', alt: 'T-Display S3 Pro 引脚图' }
]" />

## 概述

**T-Display S3 Pro** 是一款基于 ESP32-S3 的高性能开发板，配备 2.2 英寸 222×480 全彩 IPS 显示屏，支持电容触摸、摄像头扩展、USB OTG 及多种外设。内置 SY6970 电源管理芯片，支持锂电池充电（最大 1.5A）和电源路径管理。板载 TF 卡槽、LTR553 环境光传感器、姿态传感器（MPU9250/MPU6050）等，适用于智能家居、便携设备、多媒体应用等场景。

> V1.1 版本升级为恒流背光驱动，提升显示稳定性；查看 USB-C 接口旁是否标注 "V1.1" 可区分版本。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/examples/factory) | ✓ | | 出厂综合测试 |
| [TFT_eSPI_Simple](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/examples/TFT_eSPI_Simple) | ✓ | | TFT_eSPI 绘图基础 |
| [AdjustBacklight](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/examples/AdjustBacklight) | ✓ | | 背光调节（区分 V1.0/V1.1） |
| [PMU_Example](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/examples/PMU_Example) | ✓ | | 电源管理配置与电池信息 |
| [USB_HID_Example](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/examples/USB_HID_Example) | ✓ | | USB HID 和 OTG 功能 |
| [CameraShield](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/examples/CameraShield) | ✓ | | 摄像头扩展板使用 |
| [Cellphone](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/examples/Cellphone) | ✓ | | 拍照及相册（需 TF 卡） |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Display-S3-Pro 项目代码](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将项目 `lib` 目录中的所有库复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB CDC On Boot | Enabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)
4. [MicroPython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3R8：16MB Flash，8MB OPI PSRAM，2.4GHz Wi-Fi + 蓝牙 5.0
- 2.2 英寸 ST7789V2 IPS（222×480），CST816S 电容触摸
- SY6970 电源管理（1.5A 充电，电源路径管理，OTG 输出）
- LTR553 环境光/接近传感器，可选 MPU9250/MPU6050 姿态传感器
- DVP 摄像头接口（OV2640/OV5640），TF 卡槽，STEMMA QT/QWIIC

## 产品参数

| 项目 | 参数 |
| :-- | :-- |
| MCU | ESP32-S3R8（双核 LX7，240MHz） |
| Flash | 16MB |
| PSRAM | 8MB (OPI PSRAM) |
| 显示屏 | 2.2 英寸 ST7789V2 IPS（222×480） |
| 触摸 | CST816S 电容触摸（I2C，0x15） |
| 电源管理 | SY6970（1.5A 充电，路径管理，OTG） |
| 传感器 | LTR553 环境光/接近（I2C，0x23） |
| 姿态传感器 | MPU9250 / MPU6050（可选） |
| 存储 | TF 卡槽 (SPI) |
| 无线 | 2.4GHz Wi-Fi 802.11 b/g/n + Bluetooth 5 (LE) |
| USB | 1 × USB-C（支持 OTG） |
| 扩展接口 | 2×13 双排排针 + DVP 摄像头 + STEMMA QT/QWIIC |
| 按键 | RESET + BOOT |
| 安装孔 | 4 × 2mm 定位孔 |
| 尺寸 | 56.5 × 56.5 × 9.6mm |

## 引脚图

<img src="/products/t-display-series/t-display-s3-pro/assets/t-display-s3 pro-pin.jpg" alt="T-Display S3 Pro 引脚图（正面）" width=100%>

<img src="/products/t-display-series/t-display-s3-pro/assets/t-display-pro-pin-behind.jpg" alt="T-Display S3 Pro 引脚图（背面）" width=100%>

## 尺寸图

## 原理图

* [T-Display-S3-Pro 原理图](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/blob/main/schematic/T-Display-S3-Pro.pdf)
* [T-Display-S3-Pro 背板设计文件](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro/tree/main/dimensions/BackCover)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SY6970 Datasheet](https://www.semtech.com/products/analog-front-end/sy6970)

## 软件开发

* [T-Display-S3-Pro GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro)
* [T-Display-S3-Pro-MVSRBoard 扩展板](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro-MVSRBoard)
* [T-Display-S3-Pro-MVSRLora 扩展板](https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro-MVSRLora)

### 依赖库

* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorLib)
* [TouchLib](https://github.com/mmMicky/TouchLib)
* [lvgl](https://github.com/lvgl/lvgl)
* [JPEGDEC](https://github.com/bitbank2/JPEGDEC)
* [ESP32_USB_Stream](https://github.com/esp-arduino-libs/ESP32_USB_Stream)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 板子一直烧录失败？**  
  A. 按住 "BOOT" 键，再按 "RST" 键，然后点击烧录进入下载模式。

* **Q. 如何区分 V1.0 和 V1.1 版本？**  
  A. 查看 USB-C 接口旁是否标注 "V1.1"；V1.1 使用恒流背光，调节方式不同，请使用对应示例。

* **Q. 未连接电池时上电后设备反复重启？**  
  A. 未接电池时需关闭充电功能，可在初始化 PMU 时调用 `PMU.disableCharge()` 或参考 `PMU_Example`。

* **Q. 使用 OTG 外设时无法识别？**  
  A. 需在代码中启用 OTG 输出功能，启用 OTG 时 USB 输入不会对电池充电。

* **Q. 屏幕不亮或背光异常？**  
  A. 检查背光驱动方式是否与版本匹配（V1.0 用 PWM，V1.1 用恒流），并确保 PMU 正常供电。

## 功耗测试

| 测试项 | 结果 | 备注 |
| :-- | :--: | :-- |
| 背光功耗（最大） | ≈120mA | V1.1 恒流驱动 |
| 充电电流（最大） | 1.5A | SY6970 |
| USB OTG 供电 | 5V 500mA | 需 PMU 启用 |

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-Pro_V1.0 | 2023-08-01 | 初始版本，PWM 背光 |
| T-Display-S3-Pro_V1.1 | 2023-11-01 | 升级为恒流背光驱动 |
