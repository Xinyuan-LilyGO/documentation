---
title: T-Watch 2019
show_source: false
tags: ESP32, 智能手表, 触摸屏, 物联网
---

# {{ $frontmatter.title }} <ShopLink href="https://item.taobao.com/item.htm?id=750160296086" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-watch-series/t-watch-2019/index/image/t-watch-2019-1.jpg', alt: 'T-Watch 2019' },
]" />

## 概述

T-Watch 2019 是一个基于 ESP32 的功能强大、功能丰富的智能手表平台。它将高质量显示屏、多个传感器和无线连接集成在一个紧凑的可穿戴设备中。通过集成的电源管理单元和各种可选外设，T-Watch 非常适合物联网项目、健身追踪和自定义智能手表应用。该库提供完整的硬件驱动程序、LVGL 图形框架集成和大量示例，让您可以快速入门。

## 快速开始

### 硬件组装

T-Watch 2019 是预装配的。基本使用不需要焊接。对于扩展模块，请按照模块指南进行组装，并参考特定模块文档。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/Main/Software)
2. 从 [GitHub](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library) 下载库文件
3. 通过 Sketch → Include Library → Add .ZIP Library 安装
4. 在每个示例的 `config.h` 中选择您的 T-Watch 型号
5. 在 Arduino IDE 中选择 **TTGO T-Watch** 作为开发板
6. 上传代码

### ESP-IDF

<!-- ESP-IDF 开发环境配置教程链接或说明。 -->

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- **多种显示选项**：1.54" 240×240 触摸屏（ST7789V），各个版本可选
- **丰富的传感器套件**：包括 IMU（BMA423）、实时时钟（PCF8563），以及依版本而定的可选 GPS、麦克风和红外传感器
- **电源管理**：集成 AXP202 电源管理单元，支持电池供电
- **无线连接**：通过 ESP32 提供蓝牙和 WiFi
- **扩展库支持**：为所有硬件组件预装驱动程序
- **LVGL 图形支持**：集成 LVGL 7.7.2 框架，支持丰富 UI 开发
- **模块化设计**：可选的 GPS、音频等扩展模块
- **多个变种**：支持 T-Watch 2019、2020（V1/V2/V3）及更新版本

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32 (D0WDQ6) |
| Flash | 4–8 MB（因型号而异） |
| PSRAM | 16 MB |
| 无线 | WiFi 802.11b/g/n, Bluetooth 4.2 |
| 显示屏 | 1.54" 240×240 ST7789V TFT LCD |
| 触摸屏 | 电容式 FT6336 |
| IMU | BMA423（某些版本），MPU6050（T-Block） |
| 实时时钟 | PCF8563 |
| 电源管理 | AXP202 |
| 重量 | ~85g（含表带） |
| 外包装尺寸 | 45 × 45 × 15 mm（表体） |

## 引脚图

### 显示屏

| 芯片 | BL | RESET | SCK | MOSI | MISO | CS | DC |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32 | GPIO12 | GPIO5 | GPIO18 | GPIO19 | GPIO23 | GPIO27 | GPIO33 |

### 触摸面板

| 芯片 | SDA | SCL | INT |
| :------: | :----: | :----: | :----: |
| FT6336 | GPIO21 | GPIO22 | GPIO38 |

### IMU（BMA423）

| 芯片 | SDA | SCL | INT |
| :------: | :----: | :----: | :----: |
| BMA423 | GPIO21 | GPIO22 | GPIO39 |

### 电源管理（AXP202）

| 芯片 | SDA | SCL | INT |
| :------: | :----: | :----: | :----: |
| AXP202 | GPIO21 | GPIO22 | GPIO35 |

### 实时时钟（PCF8563）

| 芯片 | SDA | SCL |
| :------: | :----: | :----: |
| PCF8563 | GPIO21 | GPIO22 |

### 可选外设

<!-- GPS（高通 L76K，2020-V2）：GPIO13、GPIO15 UART
麦克风（SPM1423HM4H，2020-V3）：I2S 接口
触觉反馈：GPIO37（2020-V1/V3），DRV2605 I2C（2020-V2）
-->

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

<!-- 可公开的原理图链接或图片。原理图可在 GitHub 仓库中找到：https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/master/Schematic -->

## 数据手册

- [ESP32 数据手册](https://www.espressif.com/en/products/microcontrollers/esp32/resources)
- [ST7789V 显示控制器](http://www.displayfuture.com/Display/datasheet/ST7789V.pdf)
- [FT6336 触摸屏控制器](https://www.alldatasheet.com/datasheet-pdf/pdf/1172978/FOCALTECH/FT6336.html)
- [BMA423 IMU 传感器](https://www.bosch-sensortec.com/bst/products/all_products/bma423)
- [AXP202 电源管理芯片](https://www.x-powers.com/en.php/Info/product_detail/article_id/29)

## 软件开发

- [TTGO T-Watch 库](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library) - 官方 Arduino 库，包含驱动和示例
- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) - 显示驱动库（已包含）
- [LVGL](https://github.com/lvgl/lvgl) - 图形框架（v7.7.2 集成）
- [My-TTGO-Watch](https://github.com/sharandac/My-TTGO-Watch) - 社区定制固件
- [lunokjod/watch](https://github.com/lunokjod/watch) - 替代手表操作系统实现

## 常见问题

**Q：库只支持 esp-idf core 3.0 及以下版本。为什么？**  
A：硬件驱动针对旧版 ESP-IDF 版本进行了优化。建议使用 core 2.0.14 以获得最佳兼容性。

**Q：上传失败，显示"Failed to write to target RAM"？**  
A：将 Arduino IDE 中的上传波特率从 115200 更改为 921600。

**Q：我如何选择正确的 T-Watch 型号？**  
A：打开每个示例中的 `config.h` 并取消注释与您的硬件版本相匹配的行（LILYGO_WATCH_2020_V1、V2、V3 等）。

**Q：我可以不使用库来使用 T-Watch 吗？**  
A：可以，库是可选的。但是，库大大简化了硬件初始化并提供了预构建的驱动程序支持。

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.4.3 | 2023年3月 | 最新稳定版本 |
| V1.4.0 | 更早版本 | 添加 T-Watch-S3 分支支持 |
| V1.0.0 | 2019年早期 | 初版发布 |
