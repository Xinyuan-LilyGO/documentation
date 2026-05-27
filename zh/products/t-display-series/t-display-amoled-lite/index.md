---
title: T-Display-AMOLED-Lite
show_source: false
tags: ESP32-S3, AMOLED, SH8501B0, Touch, AXP2101, Display, Low Power, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-amoled-lite" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-amoled-lite/index/image/t-display-amoled-lite-1.jpg', alt: 'T-Display-AMOLED-Lite 正面图' },
  { src: '/products/t-display-series/t-display-amoled-lite/index/image/t-display-amoled-lite-2.jpg', alt: 'T-Display-AMOLED-Lite 背面图' },
]" />

## 概述

LILYGO T-Display-AMOLED-Lite 是一款基于 **ESP32-S3R8**（双核 LX7，240 MHz）的紧凑型开发板，配备 **1.47 英寸 SH8501B0 AMOLED 显示屏**（194×368 像素，450 nits，QSPI 接口）。板载 **CHSC5816 电容触摸控制器**、**AXP2101 电源管理芯片**、**CM32181A3OP 环境光传感器**、16 MB Flash 和 8 MB OPI PSRAM。深睡眠电流低至约 1.1 mA，支持定时唤醒，适合可穿戴设备、便携 IoT 仪表盘和低功耗显示应用。

> **注意：** 本产品不支持硬件屏幕旋转。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) | ✓ | | AMOLED 显示、LVGL、TFT_eSPI、触摸、PMU、光照传感器示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场搜索并安装 **PlatformIO IDE**
3. 打开 `LilyGo-AMOLED-Series` 项目文件夹
4. 打开 `platformio.ini`，取消注释 `T-Display-AMOLED` 环境
5. 点击 **✓** 编译，连接 USB-C，点击 **→** 烧录

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB CDC On Boot | **Enable** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

3. 打开 `examples/` 目录下的示例，选择正确串口，点击 **上传**

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-S3R8 双核 LX7 @ 240 MHz，Wi-Fi 2.4 GHz + 蓝牙 5.0
- 1.47 英寸 SH8501B0 AMOLED，194×368 像素，450 nits，QSPI 接口
- CHSC5816 电容触摸控制器
- AXP2101 电源管理芯片，支持锂电池充电
- CM32181A3OP 环境光传感器
- 16 MB Flash，8 MB OPI PSRAM
- 深睡眠电流约 1.1 mA，支持定时唤醒
- 板载 RGB LED（WS2812 兼容）
- 2 个用户按键（GPIO0、GPIO21）
- USB-C 供电与烧录

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3R8，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB（OPI） |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n，蓝牙 5.0 |
| 显示屏 | 1.47 英寸 SH8501B0 AMOLED，194×368 像素，450 nits |
| 触摸 | CHSC5816 电容触摸 |
| 电源管理 | AXP2101 |
| 光照传感器 | CM32181A3OP |
| 工作电流 | 90 ~ 230+ mA（240 MHz，Wi-Fi 开启） |
| 睡眠电流 | 约 1.1 mA |
| USB | 1 × USB-C |
| 电池 | 锂聚合物，AXP2101 集成充电管理 |

## 引脚图

### 显示屏

| SH8501B0 | D0    | D1     | D2     | D3     | SCK   | CS    | RST    | TE    |
| :------: | :---: | :----: | :----: | :----: | :---: | :---: | :----: | :---: |
| ESP32-S3 | GPIO7 | GPIO10 | GPIO11 | GPIO12 | GPIO5 | GPIO4 | GPIO40 | GPIO6 |

### 触摸

| CHSC5816 | SDA   | SCL   | IRQ    | RST    |
| :------: | :---: | :---: | :----: | :----: |
| ESP32-S3 | GPIO1 | GPIO2 | GPIO13 | GPIO14 |

### 电源管理

| AXP2101  | SDA   | SCL   | IRQ   |
| :------: | :---: | :---: | :---: |
| ESP32-S3 | GPIO1 | GPIO2 | GPIO3 |

### 光照传感器

| CM32181A3OP | SDA   | SCL   | IRQ   |
| :---------: | :---: | :---: | :---: |
| ESP32-S3    | GPIO1 | GPIO2 | GPIO8 |

### 按键

| ESP32-S3 | BOOT  | USER   |
| :------: | :---: | :----: |
|          | GPIO0 | GPIO21 |

### RGB LED

| ESP32-S3 | DATA   |
| :------: | :----: |
|          | GPIO18 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

* [T-Display-AMOLED-Lite PCB 尺寸图（DWG）](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/dimensions/T-Display-AMOLED-Lite.DWG)
* [T-Display-AMOLED-Lite 3D PCB 模型（STP）](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/dimensions/T-Display-AMOLED-Lite-PCB-3D.7z)

## 原理图

* [T-Display-AMOLED-Lite 原理图（PDF）](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/schematic/T-Display_AMOLED-Lite.pdf)

## 数据手册

* [ESP32-S3 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SH8501B0 数据手册](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/datasheet/SH8501B0%20DataSheet.pdf)
* [AXP2101 数据手册](https://github.com/Xinyuan-LilyGO/XPowersLib/blob/master/datasheet/AXP2101_Datasheet_V1.0_en.pdf)
* CHSC5816 触摸控制器
* CM32181A3OP 环境光传感器

## 软件开发

* [LilyGo-AMOLED-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)

### 依赖库

* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [LVGL](https://github.com/lvgl/lvgl)
* [Arduino GFX](https://github.com/moononournation/Arduino_GFX)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib) — AXP2101 驱动

## 常见问题

* **Q. 上传后显示屏无显示？**
  A. 确认 Arduino IDE 中 PSRAM 选项设为 **OPI PSRAM**；使用 PlatformIO 时需确认环境为 `T-Display-AMOLED`，并包含 `-DBOARD_HAS_PSRAM` 编译标志。

* **Q. 是否支持屏幕旋转？**
  A. 不支持。1.47 英寸 SH8501B0 AMOLED 不支持硬件屏幕旋转，软件旋转会影响性能。

* **Q. GPIO18 是否可以用作通用引脚？**
  A. GPIO18 连接板载 RGB LED（WS2812），如不需要 LED 功能可复用，否则请勿修改其配置。

* **Q. 触摸复位后无响应？**
  A. 请完全断电后重新上电（拔插 USB-C）。CHSC5816 触摸控制器需要正确的上电时序才能正常初始化。

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
