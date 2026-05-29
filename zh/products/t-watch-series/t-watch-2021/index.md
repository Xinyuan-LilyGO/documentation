---
title: T-Watch 2021
show_source: false
tags: ESP32, 智能手表, AXP202, BMA423, TFT, Wi-Fi, 蓝牙, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-watch-2021" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-2021/index/image/t-watch-2021-1.jpg', alt: 'T-Watch 2021 正面' },
  { src: '/products/t-watch-series/t-watch-2021/index/image/t-watch-2021-2.jpg', alt: 'T-Watch 2021 背面' },
  { src: '/products/t-watch-series/t-watch-2021/index/image/t-watch-2021-info.jpg', alt: 'T-Watch 2021 规格参数' },
]" />

## 概述

LILYGO T-Watch 2021 是一款基于 ESP32 的开源智能手表开发平台。搭载 **ESP32** 双核 Xtensa LX6 @ 240 MHz，支持 Wi-Fi 和 Bluetooth 4.2，配备 **1.54 英寸 ST7789V TFT 触摸屏**（240 × 240，电容触控）、**AXP202 PMU** 电源管理、**BMA423 加速度计**（步数统计与手势识别）、**S76G GNSS 模块**（GPS 定位）和内置麦克风。380 mAh 锂电池加 USB-C 充电接口，构成完整的可穿戴开发解决方案。兼容 PlatformIO、Arduino 和开源 TTGO_TWatch_Library。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :--: | :----------------: | :-----: | :--: |
| [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library) | ✓ | | 手表 UI、GPS、BLE、加速度计示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `TTGO_TWatch_Library` 项目文件夹
4. 打开 `platformio.ini`，选择 `LILYGO_WATCH_2021` 环境
5. 点击 **✓** 编译，通过 USB-C 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 将 `TTGO_TWatch_Library` 文件夹复制到 Arduino 库目录
4. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| 开发板 | **ESP32 Dev Module** |
| CPU 频率 | 240 MHz (WiFi) |
| Flash 大小 | **4MB (32Mb)** |
| 分区方案 | **Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)** |
| PSRAM | **Enabled** |
| 上传速度 | 921600 |

5. 点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)

## 相关视频

<!-- 产品宣传视频和教程视频。 -->

## 主要特性

- ESP32 双核 Xtensa LX6 @ 240 MHz，Wi-Fi + Bluetooth 4.2
- 1.54 英寸 ST7789V TFT 触摸屏（240 × 240），FT6236 电容触控
- AXP202 电源管理单元，支持电池监控
- BMA423 三轴加速度计（步数统计与手势识别）
- S76G GNSS 模块（GPS/GLONASS/北斗）
- 内置 PDM MEMS 麦克风
- 380 mAh 锂电池，USB-C 充电
- 振动马达，支持触觉反馈
- 4 MB Flash，8 MB PSRAM

## 规格参数

| 参数 | 值 |
| --- | --- |
| 主控 | ESP32，双核 Xtensa LX6 @ 240 MHz |
| Flash | 4 MB |
| PSRAM | 8 MB |
| 无线 | Wi-Fi 802.11 b/g/n，Bluetooth 4.2 |
| 显示屏 | 1.54 英寸 ST7789V TFT，240 × 240 |
| 触摸 | FT6236 电容触控 |
| PMU | AXP202 |
| IMU | BMA423（加速度计 + 步数统计） |
| GNSS | S76G（GPS/GLONASS/北斗） |
| 麦克风 | PDM MEMS 麦克风 |
| 振动 | 振动马达 |
| 电池 | 380 mAh 锂电池 |
| USB | USB-C |

![T-Watch 2021 规格参数](/products/t-watch-series/t-watch-2021/index/image/t-watch-2021-info.jpg)

## 引脚图

### 显示屏（ST7789V）

| 信号 | GPIO |
| :--: | :--: |
| MOSI | 19 |
| SCLK | 18 |
| CS   | 5  |
| DC   | 27 |
| BL   | 12 |
| RST  | — （硬件连接） |

### I2C 总线（AXP202、BMA423、FT6236）

| 信号 | GPIO |
| :--: | :--: |
| SDA | 21 |
| SCL | 22 |

### GNSS（S76G，UART）

| 信号 | GPIO |
| :--: | :--: |
| TX  | 34 |
| RX  | 33 |
| PPS | 37 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

- [T-Watch 2021 GitHub 仓库（硬件）](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/master/docs)

## 数据手册

- [ESP32 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
- [AXP202 数据手册](http://www.x-powers.com/en.php/Info/product_detail/article_id/29)
- [BMA423 数据手册](https://www.bosch-sensortec.com/products/motion-sensors/accelerometers/bma423/)

## 软件库

- [TTGO_TWatch_Library GitHub 仓库](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library)

### 依赖库

- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
- [XPowersLib](https://github.com/lewisxhe/XPowersLib)
- [LVGL](https://github.com/lvgl/lvgl)

## 常见问题

* **Q. 如何在 Arduino 中配置手表型号？**
  A. 在 sketch 中，于 `#include "LilyGoWatch.h"` 之前添加 `#define LILYGO_WATCH_2021`，这将自动配置 2021 版本的引脚分配。

* **Q. 触摸屏无响应，如何排查？**
  A. 确认 FT6236 的 I2C 地址为 0x38，SDA = GPIO21，SCL = GPIO22，并确保 AXP202 在触摸初始化之前已为显示背光供电。

* **Q. 表带可以更换吗？**
  A. 可以。T-Watch 使用标准 20 mm 表带，任何 20 mm 快拆表带均兼容。

## 更新日志

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| T-Watch 2020 | — | 初代设计 |
| T-Watch 2021 | — | 更新 S76G GNSS、BMA423、改进 PMU |
