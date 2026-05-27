---
title: T-Camera-S3
show_source: false
tags: ESP32-S3, Camera, OV2640, OLED, PIR, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-camera-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-camera-series/t-camera-s3/index/image/t-camera-s3-1.jpg', alt: 'T-Camera-S3 正面' },
  { src: '/products/t-camera-series/t-camera-s3/index/image/t-camera-s3-2.jpg', alt: 'T-Camera-S3 背面' },
]" />

## 概述

LILYGO T-Camera-S3 是一款基于 **ESP32-S3FN16R8**（双核 LX7 @ 240 MHz）的紧凑型摄像头开发板。板载 **200 万像素 OV2640** 摄像头模块、**0.96 英寸 SSD1306 OLED** 显示屏（128 × 64）、**AS312 PIR** 人体红外传感器、麦克风及电池管理电路。内置 Wi-Fi 802.11 b/g/n 与蓝牙 5.0，适用于 TinyML 计算机视觉、智能门铃、运动检测及边缘 AI 原型开发等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [LilyGo-Camera-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Camera-Series) | ✓ | | 摄像头、OLED、PIR、麦克风示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 插件
3. 打开 `LilyGo-Camera-Series` 项目文件夹
4. 打开 `platformio.ini`，选择 T-Camera-S3 环境
5. 点击 **✓** 编译，通过 USB-C 连接设备后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中进行如下配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| Board | **ESP32S3 Dev Module** |
| Port | 对应串口 |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-S3FN16R8 双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- 200 万像素 OV2640 摄像头（最高 1600 × 1200）
- 0.96 英寸 SSD1306 OLED 显示屏（128 × 64，I2C）
- AS312 PIR 人体红外传感器
- 板载麦克风
- JST 电池接口及充电电路
- 小巧外形，可选外壳
- USB Type-C 供电与编程

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3FN16R8，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB（OPI） |
| 无线 | Wi-Fi 802.11 b/g/n，蓝牙 5.0 LE |
| 摄像头 | OV2640，200 万像素，最高 1600 × 1200 |
| 显示屏 | 0.96 英寸 SSD1306 OLED，128 × 64 |
| PIR 传感器 | AS312 |
| USB | 1 × Type-C |
| 电池 | JST 接口，支持锂电池 |

## 引脚图

<!-- GPIO 映射关系表。 -->

### 摄像头（OV2640）

| OV2640   | XCLK   | SIOD   | SIOC   | VSYNC  | HREF   | PCLK   | D0     | D1     | D2     | D3     | D4     | D5     | D6     | D7     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO38 | GPIO5  | GPIO4  | GPIO8  | GPIO18 | GPIO12 | GPIO9  | GPIO10 | GPIO11 | GPIO13 | GPIO21 | GPIO47 | GPIO48 | GPIO14 |

### OLED 显示屏（SSD1306）

| SSD1306  | SDA    | SCL    |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO5  | GPIO4  |

### PIR 传感器

| AS312    | OUT    |
| :------: | :----: |
| ESP32-S3 | GPIO21 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

<!-- 可公开的原理图链接或图片。 -->

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

* [LilyGo-Camera-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-Camera-Series)

### 依赖库

* [esp32-camera](https://github.com/espressif/esp32-camera)
* [Adafruit SSD1306](https://github.com/adafruit/Adafruit_SSD1306)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| T-Camera-S3 V1.0 | 2022-12 | 初版发布 |
