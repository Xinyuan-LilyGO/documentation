---
title: LILYGO T-Display-S3-Long
show_source: false
tags: ESP32-S3, Long Display, AMOLED, IoT, Touch Screen
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3-long" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3-long/index/image/t-display-s3-long-1.jpg', alt: 'T-Display-S3-Long 正面图' },
  { src: '/products/t-display-series/t-display-s3-long/index/image/t-display-s3-long-2.jpg', alt: 'T-Display-S3-Long 实物图' },
  { src: '/products/t-display-series/t-display-s3-long/index/image/t-display-s3-long-pin-zh.jpg', alt: 'T-Display-S3-Long 引脚图' }
]" />

## 概述

T-Display-S3-Long 是一款基于 ESP32-S3R8 的长条形显示屏开发板，采用 AXS15231B 驱动的 180×640 AMOLED 屏幕，提供独特的纵向显示体验。搭载 16MB Flash 和 8MB OPI PSRAM，支持电容触摸，内置 PMU 电源管理（支持 OTG 输出）和 QWIIC 传感器接口，支持 Wi-Fi 和蓝牙 5.0，适用于智能家居控制面板、工业仪表显示、信息展示终端等场景。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/T-Display-S3-Long-cst3530/examples/factory) | ✓ | | 出厂测试程序 |
| [tft](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/T-Display-S3-Long-cst3530/examples/TFT) | ✓ | | 屏幕显示测试 |
| [touch](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/touch) | ✓ | | 触摸功能测试 |
| [QWIIC_Sensor](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/QWIIC_Sensor) | ✓ | | QWIIC 传感器示例 |
| [GFX_AXS15231B_Image](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/GFX_AXS15231B_Image) | ✓ | | 图形图像显示 |
| [lvgl_demo](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/lvgl_demo) | ✓ | | LVGL 图形界面演示 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Display-S3-Long 项目代码](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 按照下图配置 Arduino IDE 设置：

<img src="/products/t-display-series/t-display-s3-long/index/image/arduinoide.jpg" alt="Arduino IDE 设置" width=80%>

4. 选择正确的端口，上传程序。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)

## 视频

## 主要特点

- ESP32-S3R8：16MB Flash，8MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 180×640 AXS15231B AMOLED，电容触摸（I2C）
- 内置 PMU（支持 OTG 电源输出）
- QWIIC 传感器接口
- 睡眠电流约 1.1mA

## 产品参数

<img src="/products/t-display-series/t-display-s3-long/index/image/t-display-s3-long-info-zh.jpg" alt="T-Display-S3-Long 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB (OPI PSRAM) |
| 屏幕 | 180×640 AXS15231B AMOLED |
| 触摸 | 电容触摸（I2C） |
| 无线 | Wi-Fi 802.11b/g/n + Bluetooth 5.0 |
| USB | 1 × USB Type-C |
| 扩展接口 | QWIIC 传感器接口 |
| 按键 | BOOT + RST |
| 功耗 | 工作：90~350mA，睡眠：1.1mA |

## 引脚图

<img src="/products/t-display-series/t-display-s3-long/index/image/t-display-s3-long-pin-zh.jpg" alt="T-Display-S3-Long 引脚图" width=100%>

### 引脚映射

```c
#define TFT_QSPI_CS    12
#define TFT_QSPI_SCK   17
#define TFT_QSPI_D0    13
#define TFT_QSPI_D1    18
#define TFT_QSPI_D2    21
#define TFT_QSPI_D3    14
#define TFT_QSPI_RST   16
#define TFT_BL         1

#define PIN_BAT_VOLT   2
#define PIN_BUTTON_1   0
#define PIN_BUTTON_2   21

#define SPI_SD_CS      38
#define SPI_SD_MOSI    39
#define SPI_SD_MISO    41
#define SPI_SD_SCLK    40

#define TOUCH_IICSCL   10
#define TOUCH_IICSDA   15
#define TOUCH_INT      11
#define TOUCH_RES      16
```

## 尺寸图

## 原理图

* [T-Display-S3-Long GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long)

## 数据手册

* [ESP32-S3 Datasheet](/datasheet/esp32-s3_datasheet_en.pdf)

## 软件开发

* [T-Display-S3-Long GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long)

### 依赖库

* [LVGL 8.3.0](https://github.com/lvgl/lvgl)（注意：不要升级版本，已强制开启软件旋转）
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)

## 常见问题

* **Q. 开发板无法烧录程序怎么办？**  
  A. 手动进入下载模式：按住 BOOT 键，同时按下 RST 键，先释放 RST，再释放 BOOT，即可正常上传程序。

* **Q. USB 设备频繁断开连接？**  
  A. 检查 USB 线缆质量，尝试更换其他 USB 端口，确保电源供应稳定。

* **Q. OTG 功能如何使用？**  
  A. 需要软件启用 PMU 的 OTG 功能：`PMU.enableOTG()` 启用，`PMU.disableOTG()` 禁用。

* **Q. 电池充电指示灯闪烁？**  
  A. 未连接电池只连接 USB 时状态灯会闪烁，可使用 `PMU.disableStatLed()` 关闭（同时禁用充电状态指示）。

* **Q. 物理开关的作用？**  
  A. 将物理开关切换到 OFF 会完全断开电池与主板的连接，充电时需切换到 ON。

## 功耗测试

| 工作模式 | 电流 | 说明 |
| :--: | :--: | :-- |
| 正常工作 | 90~350mA | Wi-Fi 开启，240MHz |
| 睡眠模式 | 1.1mA | 低功耗待机 |

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-Long_V1.0 | — | 长条形显示屏开发板初始版本 |
