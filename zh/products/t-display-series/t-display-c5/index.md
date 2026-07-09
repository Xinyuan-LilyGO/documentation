---
title: T-Display C5
show_source: false
tags: ESP32-C5, Display, Touch, Wi-Fi 6, BLE, LVGL
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-c5" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-c5/index/image/t-display-c5-1.jpg', alt: 'T-Display C5 正面' },
  { src: '/products/t-display-series/t-display-c5/index/image/t-display-c5-2.jpg', alt: 'T-Display C5 背面' },
  { src: '/products/t-display-series/t-display-c5/index/image/t-display-c5-3.jpg', alt: 'T-Display C5' },
  { src: '/products/t-display-series/t-display-c5/index/image/t-display-c5-info.jpg', alt: 'T-Display C5 产品信息' },
]" />

## 概述

T-Display C5 是一款基于 **ESP32-C5**（RISC-V 32位 @ 240 MHz）的紧凑型开发板，配备 1.9 英寸 ST7789 IPS LCD 触摸屏、AXP2602 电源管理 IC 和 CST816S 电容触摸控制器。支持双频 **Wi-Fi 6**（2.4 GHz + 5 GHz）和 **Bluetooth 5 LE**，板载 16 MB Flash 和 8 MB PSRAM。兼容 Arduino IDE 和 ESP-IDF，内置 LVGL v9.2.0。

## 快速开始

### 硬件组装

<!-- 焊接排针、连接电池等。 -->

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场安装 **PlatformIO IDE**
3. 克隆 [T-Display-C5](https://github.com/Xinyuan-LilyGO/T-Display-C5) 仓库
4. 打开 `platformio.ini`，选择目标示例
5. 点击 **✓** 编译，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 添加 ESP32 开发板 URL：`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. 安装 **esp32** 开发板包（v3.x / v5.3+）
4. 选择 **ESP32C5 Dev Module** 作为开发板
5. 点击**上传**

### ESP-IDF

需要 ESP-IDF >= v5.3。克隆仓库后使用 VS Code + ESP-IDF 插件打开。

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-C5 RISC-V 32 位 @ 240 MHz，带 ULP 低功耗核心
- 双频 Wi-Fi 6（2.4 GHz + 5 GHz，802.11ax/b/g/n）+ Bluetooth 5 LE
- 1.9 英寸 ST7789 IPS LCD，分辨率 170 × 320，RGB565
- CST816S 电容触摸控制器（I2C）
- AXP2602 低功耗电池管理 IC
- 16 MB Quad QIO Flash + 8 MB Quad QIO PSRAM
- USB Type-C（USB-Serial-JTAG）
- 内置 LVGL v9.2.0

## 产品参数

| 参数 | 值 |
| :--: | :--: |
| 主控 | ESP32-C5，RISC-V 32 位 @ 240 MHz |
| Flash | 16 MB Quad QIO |
| PSRAM | 8 MB Quad QIO |
| 显示屏 | 1.9 英寸 ST7789 IPS LCD |
| 分辨率 | 170 × 320，RGB565 |
| 显示接口 | 4 线 SPI，3.3 V |
| 触摸 | CST816S 电容触摸，I2C |
| Wi-Fi | 802.11ax/b/g/n，2.4 GHz + 5 GHz（Wi-Fi 6） |
| 蓝牙 | BLE 5 |
| 电源管理 | AXP2602 |
| USB | Type-C，USB-Serial-JTAG，5 V / 500 mA |
| 尺寸 | 62 × 26 × 10 mm |

## 引脚图

<img src="/products/t-display-series/t-display-c5/index/image/t-display-c5-pinout.jpg" alt="T-Display C5 引脚图" width=100%>

### 显示屏（ST7789）

| ST7789 | CS     | SCK    | MOSI   | DC     | RST    | BL     |
| :----: | :----: | :----: | :----: | :----: | :----: | :----: |
|        | GPIO26 | GPIO7  | GPIO9  | GPIO8  | GPIO23 | GPIO25 |

### 触摸（CST816S）

| CST816S | SDA    | SCL    | INT    | RST    |
| :-----: | :----: | :----: | :----: | :----: |
|         | GPIO2  | GPIO3  | GPIO27 | GPIO24 |

### 电源管理（AXP2602）

| AXP2602 | SDA    | SCL    | INT    |
| :-----: | :----: | :----: | :----: |
|         | GPIO2  | GPIO3  | GPIO10 |

### 按键

| 功能     | GPIO   |
| :------: | :----: |
| 用户按键 | GPIO0  |
| Boot     | GPIO28 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [T-Display C5 原理图](https://github.com/Xinyuan-LilyGO/T-Display-C5/blob/master/hardware/T-Display%20C5_20260519.pdf)

## 数据手册

* [ESP32-C5-WROOM-1 数据手册](https://github.com/Xinyuan-LilyGO/T-Display-C5/blob/master/doc/ESP32-C5-WROOM-1.pdf)
* [AXP2602 数据手册](https://github.com/Xinyuan-LilyGO/T-Display-C5/blob/master/doc/AXP2602_Datasheet_V1.0_cn%20(1).pdf)

## 软件开发

* [T-Display-C5 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-C5)

### 依赖库

* [AXP2602](https://github.com/Xinyuan-LilyGO/T-Display-C5/tree/master/lib/AXP2602)
* [CST816S](https://github.com/Xinyuan-LilyGO/T-Display-C5/tree/master/lib/CST816S)
* [LVGL v9.2.0](https://github.com/lvgl/lvgl)

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.0 | — | 初版发布 |
