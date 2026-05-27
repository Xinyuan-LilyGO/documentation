---
title: LILYGO T-Camera Plus S3
show_source: false
tags: ESP32-S3, Camera, TFT, Audio, Vision
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-camera-plus-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-1.jpg', alt: 'T-Camera Plus S3 正面图' },
  { src: '/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-2.jpg', alt: 'T-Camera Plus S3 实物图' },
  { src: '/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-pin-zh.jpg', alt: 'T-Camera Plus S3 引脚图' }
]" />

## 概述

T-CameraPlus-S3是一款基于ESP32-S3主控芯片的多功能智能硬件开发板，集成高性能摄像头模块（支持OV2640/OV5640可选）、LCD显示屏（含触摸功能）和MAX98357A音频芯片，具备16MB Flash与8MB PSRAM，可高效处理图像、视频及音频数据。支持双模音频输入输出（麦克风与数字音频接口），配备TF卡扩展存储、QWIIC接口（兼容I²C设备扩展）以及电池管理模块。硬件设计兼容多种传感器与外围设备，通过SPI、I²C等协议实现摄像头、显示屏、音频模块的协同工作，满足开发者在AIoT、边缘计算等领域的灵活开发需求。出厂自带基于LVGL的UI系统，支持文件管理、音乐播放、录音、摄像头投影等功能。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Wifi_Scan](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | Wi-Fi 扫描 |
| [Lvgl_UI](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | 出厂固件 |
| [Wifi_Music](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | Wi-Fi 音乐播放 |
| [SD_Music](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | SD 卡音乐播放 |
| [Camera_WebServer](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | 摄像头 Web 服务器 |
| [Camera_Screen](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | 摄像头屏幕显示 |
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | 数字麦克风读取 |
| [TFT](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | ✓ | | TFT 显示测试 |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | | ✓ | I²C 扫描 |
| [afe](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3) | | ✓ | 音频前端 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download)。
2. 在扩展中搜索并安装 "PlatformIO IDE"。
3. 从 GitHub 下载 [T-CameraPlus-S3 项目代码](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3)。
4. 在 VS Code 中打开项目文件夹，编辑 `platformio.ini` 文件选择所需环境。
5. 连接设备，编译并烧录程序。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 打开右上角"工具"菜单栏，选择"开发板"->"开发板管理器"，搜索"esp32"，安装 Espressif Systems 的开发板支持包。
3. 将项目目录下的 `libraries` 文件夹中的所有库文件复制到 Arduino IDE 的 `libraries` 目录。
4. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | QSPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

5. 选择正确的端口，编译并烧录。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3R8：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- 1.3 英寸 ST7789V TFT LCD（240×240），CST816S 电容触摸
- OV2640/OV5640 摄像头模块（可选），AP1511B 红外滤镜驱动
- MAX98357A 音频放大器 + MP34DT05-A PDM 数字麦克风（V1.2）
- SY6970 电源管理芯片，TF 卡扩展存储
- 2 × STEMMA QT/QWIIC 接口，2×13 双排扩展接口

## 产品参数

<img src="/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-info-zh.jpg" alt="T-Camera Plus S3 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core Xtensa LX7 CPU |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 1.3 英寸 ST7789V TFT LCD (240×240) |
| 触摸 | CST816S 电容触摸 |
| 摄像头 | OV2640/OV5640 (可选) |
| 存储 | TF 卡 |
| 音频输出 | MAX98357A 扬声器 |
| 音频输入 | MP34DT05-A 麦克风 (V1.2) |
| 电源管理 | SY6970 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × TYPE-C (USB + OTG) |
| IO 接口 | 2×13 双排扩展接口 |
| 扩展接口 | TF 卡 + 2 × STEMMA QT/QWIIC + JST-GH 1.25MM |
| 按键 | RESET + BOOT + IO17 功能按键 |
| 固定孔 | 4 × 2mm 定位孔 |
| 尺寸 | 60 × 32 × 12mm |

## 引脚图

<img src="/products/t-camera-series/t-camera-plus-s3/index/image/t-cameraplus-s3-pin-zh.jpg" alt="T-Camera Plus S3 引脚图" width=100%>

### 引脚映射（V1.0-V1.1）

| LCD 引脚 | ESP32S3 引脚 |
| :----: | :----: |
| MOSI | IO35 |
| SCLK | IO36 |
| RST | IO33 |
| BL | IO46 |
| CS | IO34 |
| DC | IO45 |

| IIS 麦克风 (MSM261S4030H0R) | ESP32S3 引脚 |
| :----: | :----: |
| BCLK | IO18 |
| WS | IO39 |
| DATA | IO40 |

| 功放 MAX98357A | ESP32S3 引脚 |
| :----: | :----: |
| BCLK | IO41 |
| LRCLK | IO42 |
| DATA | IO38 |

| SD 卡 | ESP32S3 引脚 |
| :----: | :----: |
| CS | IO21 |
| SCLK | IO36 |
| MOSI | IO35 |
| MISO | IO37 |

| 电源芯片 SY6970 | ESP32S3 引脚 |
| :----: | :----: |
| SDA | IO1 |
| SCL | IO2 |
| INT | IO47 |

| 摄像头 OV2640 | ESP32S3 引脚 |
| :----: | :----: |
| RESET | IO3 |
| XCLK | IO7 |
| SIDO | IO1 |
| SIOC | IO2 |
| D7 | IO6 |
| D6 | IO8 |
| D5 | IO9 |
| D4 | IO11 |
| D3 | IO13 |
| D2 | IO15 |
| D1 | IO14 |
| D0 | IO12 |
| VSYNC | IO4 |
| HREF | IO5 |
| PCLK | IO10 |

| 触摸芯片 CST816S | ESP32S3 引脚 |
| :----: | :----: |
| SDA | IO1 |
| SCL | IO2 |
| RST | IO48 |
| INT | IO47 |

### 引脚映射（V1.2）

| LCD 引脚 | ESP32S3 引脚 |
| :----: | :----: |
| MOSI | IO34 |
| SCLK | IO35 |
| BL | IO46 |
| CS | IO36 |
| DC | IO45 |

| PDM 麦克风 (MP34DT05TR) | ESP32S3 引脚 |
| :----: | :----: |
| LRCLK | IO40 |
| DATA | IO38 |

| 功放 MAX98357A | ESP32S3 引脚 |
| :----: | :----: |
| BCLK | IO41 |
| LRCLK | IO42 |
| DATA | IO39 |

| SD 卡 | ESP32S3 引脚 |
| :----: | :----: |
| CS | IO21 |
| SCLK | IO35 |
| MOSI | IO34 |
| MISO | IO48 |

| 电源芯片 SY6970 | ESP32S3 引脚 |
| :----: | :----: |
| SDA | IO33 |
| SCL | IO37 |

| 摄像头 OV2640 | ESP32S3 引脚 |
| :----: | :----: |
| XCLK | IO7 |
| SIDO | IO1 |
| SIOC | IO2 |
| D7 | IO6 |
| D6 | IO8 |
| D5 | IO9 |
| D4 | IO11 |
| D3 | IO13 |
| D2 | IO15 |
| D1 | IO14 |
| D0 | IO12 |
| VSYNC | IO3 |
| HREF | IO5 |
| PCLK | IO10 |
| PWDN | IO4 |

| 触摸芯片 CST816S | ESP32S3 引脚 |
| :----: | :----: |
| SDA | IO33 |
| SCL | IO37 |
| INT | IO47 |

| 其他 | ESP32S3 引脚 |
| :----: | :----: |
| OV2640 红外滤镜 (AP1511B_FBC) | IO16 |
| 功能按键 KEY1 | IO17 |

## 尺寸图

## 原理图

* [T-CameraPlus-S3_V1.0-V1.1](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/project/T-CameraPlus-S3_V1.0-V1.1_20241109.pdf)
* [T-CameraPlus-S3_V1.2](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/project/T-CameraPlus-S3_V1.2_20240417.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)
* [SY6970 Datasheet](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/EVB_SY6970.pdf)

## 软件开发

* [T-CameraPlus-S3 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3)

### 依赖库

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [lvgl-8.3.5](https://github.com/lvgl/lvgl)
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [MiniTV](https://github.com/moononournation/MiniTV)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [XPowersLib-0.2.1](https://github.com/lewisxhe/XPowersLib)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [cst816t-1.5.0](https://github.com/koendv/cst816t)
* [arduino-libhelix-0.8.1](https://github.com/pschatzmann/arduino-libhelix)
* [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)

## 常见问题

* **Q. T-Camera Plus S3 的主要应用场景是什么？**  
  A. 适用于智能监控、视频门铃、物联网视觉交互、多媒体终端、AI 图像识别等需要摄像头和显示功能的场景。

* **Q. 出厂是否预装程序？**  
  A. 出厂自带基于 LVGL 的 UI 程序，支持文件管理、音乐播放、录音、摄像头投影等功能。

* **Q. 支持哪些摄像头模块？**  
  A. 支持 OV2640 和 OV5640 两种摄像头模块，用户可以根据需求选择不同分辨率的摄像头。

* **Q. 如何扩展外部设备？**  
  A. 可以通过 2 个 STEMMA QT/QWIIC 接口快速连接兼容的传感器，也可以通过 2×13 的双排扩展接口连接其他外设。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-CameraPlus-S3_V1.0-V1.1 | 2023-10-23 | 初始版本 |
| T-CameraPlus-S3_V1.2 | 2025-04-17 | 提升 Wi-Fi 性能，修改麦克风型号，修改引脚号优化走线 |
