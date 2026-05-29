---
title: T-SIMCam
show_source: false
tags: ESP32-S3, 摄像头, OV2640, SIM, mPCIe, 蜂窝, 4G, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-simcam" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-simcam/index/image/t-simcam-1.jpg', alt: 'T-SIMCam 正面' },
  { src: '/products/t-sim-series/t-simcam/index/image/t-simcam-2.jpg', alt: 'T-SIMCam 背面' },
  { src: '/products/t-sim-series/t-simcam/index/image/t-simcam-3.jpg', alt: 'T-SIMCam 尺寸图' },
  { src: '/products/t-sim-series/t-simcam/index/image/t-simcam-info.jpg', alt: 'T-SIMCam 规格参数' },
]" />

## 概述

LILYGO T-SIMCam 是一款集摄像头与蜂窝通信于一体的 ESP32-S3 IoT 开发板，将 **OV2640 200 万像素摄像头**与 **Mini PCIe（mPCIe）蜂窝调制解调器插槽**融为一体。主控为 **ESP32-S3** 双核 LX7 @ 240 MHz，支持 Wi-Fi 和 Bluetooth 5.0，可通过 mPCIe 形式的 LTE/4G 蜂窝模块（如 SIM7600X）实现图像采集并通过蜂窝网络远程传输。配备 Nano SIM 卡槽、I2S 麦克风、USB-C 编程/供电接口和电池接口。适用于远程监控摄像头、野生动物监测站、工业检测相机及蜂窝联网智能摄像头应用。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [T-SIMCam](https://github.com/Xinyuan-LilyGO/T-SIMCam) | ✓ | | 摄像头采集、蜂窝上传、MQTT 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `T-SIMCam` 项目文件夹
4. 打开 `platformio.ini`，选择对应示例
5. 点击 **✓** 编译，通过 USB-C 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 您的端口 |
| USB CDC On Boot | Enable |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 大小 | **16MB (128Mb)** |
| 分区方案 | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| 上传模式 | **UART0/Hardware CDC** |
| 上传速度 | 921600 |
| USB 模式 | **CDC and JTAG** |

4. 点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi + Bluetooth 5.0
- OV2640 200 万像素摄像头（JPEG 输出，最高 1600 × 1200）
- Mini PCIe（mPCIe）插槽，支持蜂窝调制解调器模块（SIM7600X 等）
- Nano SIM 卡槽
- I2S MEMS 麦克风
- USB-C 供电和编程
- 3.7 V 锂电池接口
- 16 MB Flash，8 MB PSRAM

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32-S3，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 5.0 |
| 蜂窝 | 通过 mPCIe 模块（如 SIM7600X） |
| 摄像头 | OV2640，200 万像素，最高 1600 × 1200 |
| 麦克风 | I2S MEMS |
| SIM | Nano SIM |
| USB | 1 × USB-C |
| 电池 | 3.7 V 锂电接口 |

![T-SIMCam 规格参数](/products/t-sim-series/t-simcam/index/image/t-simcam-info.jpg)

## 引脚图

### 摄像头（OV2640，DVP）

| 信号 | GPIO |
| :--: | :--: |
| HREF | 26 |
| VSYNC | 25 |
| PCLK | 36 |
| XCLK | 40 |
| D0–D7 | 39, 41, 42, 43, 44, 45, 46, 48 |
| SDA（SCCB） | 4 |
| SCL（SCCB） | 5 |
| PWDN | 9 |
| RESET | 8 |

### 调制解调器 UART

| 信号 | GPIO |
| :--: | :--: |
| UART TX（发往调制解调器） | 18 |
| UART RX（来自调制解调器） | 17 |
| PWR KEY | 10 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [T-SIMCam GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/T-SIMCam/tree/master/hardware)

## 数据手册

- [ESP32-S3 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
- [OV2640 数据手册](https://www.ov.com/full/product/OV2640.html)

## 软件库

- [T-SIMCam GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-SIMCam)

### 依赖库

- [esp32-camera](https://github.com/espressif/esp32-camera)
- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [PubSubClient](https://github.com/knolleary/pubsubclient)

## 常见问题

* **Q. T-SIMCam 兼容哪些蜂窝模块？**
  A. mPCIe 插槽专为 SIM7600X 系列 LTE Cat-4 模块设计。其他标准 mPCIe 蜂窝模块或许可以工作，请验证 UART 引脚兼容性和供电需求。

* **Q. OV2640 支持哪些图像分辨率？**
  A. OV2640 在 JPEG 模式下支持从 QQVGA（160 × 120）到 UXGA（1600 × 1200）的多种分辨率。通常使用 VGA（640 × 480）或 SVGA（800 × 600）在图像质量和帧率之间取得平衡。

* **Q. 可以通过 4G 进行实时视频流传输吗？**
  A. 在网络带宽足够的情况下，可以通过 LTE 进行 MJPEG 实时流传输。压缩 JPEG 帧并使用 MQTT 或 HTTP 服务器中转图像。完整的 H.264 视频流需要 OV2640 不支持的外部视频编码器。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
