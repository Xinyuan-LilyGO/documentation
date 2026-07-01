---
title: LILYGO T-Impulse Plus
show_source: false
tags: nRF52840, LoRa, GPS, OLED, IMU, BLE
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-lmpulse-plus" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-1.jpg', alt: 'T-Impulse Plus 正面' },
  { src: '/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-2.jpg', alt: 'T-Impulse Plus 背面' },
]" />

## 概述

T-Impulse Plus 是一款基于 **nRF52840** 芯片的低功耗腕带设备，采用优化的功耗设计。最低深度睡眠功耗可达 **10 μA – 40 μA**（实际功耗因板载元器件差异而有所不同），关机功耗低于 **1 μA**。板载 OLED 显示屏、SX1262 LoRa 模块、MIA-M10Q GPS、ICM20948 九轴 IMU、SPI Flash 及 TTP223 电容触摸按键，适用于低功耗可穿戴物联网应用场景。

## 快速开始

### 示例支持

| 示例 | Arduino / PlatformIO | 描述 |
| :-----: | :------------------: | :---------: |
| [original_test](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/original_test) | ✓ | 出厂测试程序 |
| [Battery_Measurement](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Battery_Measurement) | ✓ | 电池电压测量 |
| [BLE_Uart](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/BLE_Uart) | ✓ | BLE UART 通信 |
| [Display](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Display) | ✓ | OLED 显示测试 |
| [Display_GPS_BLE_Uart](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Display_GPS_BLE_Uart) | ✓ | 显示 + GPS + BLE 综合示例 |
| [Flash](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Flash) | ✓ | SPI Flash 读写 |
| [Flash_Erase](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Flash_Erase) | ✓ | SPI Flash 擦除 |
| [Flash_Speed_Test](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/Flash_Speed_Test) | ✓ | SPI Flash 速度测试 |
| [GPS](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/GPS) | ✓ | GPS 基础示例 |
| [gps_2](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/gps_2) | ✓ | GPS 示例变体 |
| [GPS_Full](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/GPS_Full) | ✓ | GPS 完整功能示例 |
| [ICM20948](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/ICM20948) | ✓ | IMU 传感器测试 |
| [IIC_Scan_2](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/IIC_Scan_2) | ✓ | I²C 总线扫描 |
| [sgm41562](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/sgm41562) | ✓ | 电源管理 IC 测试 |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/SX126x_PingPong) | ✓ | LoRa 收发测试 |
| [SX126x_PingPong_2](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/SX126x_PingPong_2) | ✓ | LoRa 收发测试（变体） |
| [sx126x_tx_continuous_wave](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/sx126x_tx_continuous_wave) | ✓ | LoRa 连续波发射 |
| [ttp223](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/tree/main/examples/ttp223) | ✓ | 触摸按键测试 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 **PlatformIO IDE** 扩展
2. 克隆 [T-Impulse-Plus](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus) 仓库并在 VS Code 中打开
3. 打开 `platformio.ini`，在 `[platformio]` 下取消注释需要烧录的示例
4. 点击 **✓** 编译，点击 **→** 烧录
5. 首次使用若编译报错，请打开 `tool/win10 vscode platformio start/`，执行 `python t_impulse_plus_setup.py` 完成开发板安装

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 在 **首选项** 中添加 Adafruit 开发板 URL：`https://www.adafruit.com/package_adafruit_index.json`
3. 在 **开发板管理器** 中搜索 `Adafruit_nRF52` 并安装
4. 将项目 `libraries/` 目录中所有库文件复制到 Arduino 库目录
5. 选择开发板设置：

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| Board | **Nordic nRF52840 DK** |

6. 进入 Bootloader 下载模式：按下并松开 **RST** 键，等待 1 秒，再次按下并松开 **RST** 键，电脑出现新盘符即表示进入下载模式
7. 点击 **→** 上传

### JLINK 烧录

1. 安装 [nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop) 和 [JLINK](https://www.segger.com/downloads/jlink/)
2. 正确连接 JLINK 引脚
3. 打开 nRF Connect → **Programmer** 工具
4. 同时添加 Bootloader 和固件文件，点击 **Erase & Write** 完成烧录

### 开发平台

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [PlatformIO](https://platformio.org/)

## 视频

## 主要特性

- nRF52840 ARM Cortex-M4 @ 64 MHz，1 MB Flash，256 kB RAM，蓝牙 5.0 LE
- SX1262 LoRa（S62F 模块，SPI）
- MIA-M10Q GNSS（UART）
- SSD1315 OLED 显示屏，64 × 32 px（I²C）
- ICM20948 九轴 IMU（I²C）
- ZD25WQ32CEIGR 4 MB SPI Flash
- TTP223 电容触摸按键
- SGM41562 电源管理 IC
- 深度睡眠：10–40 μA；关机：< 1 μA

## 产品参数

| 参数 | 值 |
| :--: | :-: |
| MCU | nRF52840 |
| RAM | 256 kB |
| Flash（MCU） | 1 MB |
| Flash（外部） | 4 MB（ZD25WQ32CEIGR，SPI） |
| 蓝牙 | Bluetooth 5.0 LE |
| LoRa | SX1262（S62F 模块） |
| GPS | MIA-M10Q GNSS |
| 显示屏 | SSD1315 OLED，64 × 32 px |
| IMU | ICM20948（九轴） |
| 触摸 | TTP223 电容按键 |
| 电源管理 | SGM41562 |
| 深度睡眠电流 | 10–40 μA |
| 关机电流 | < 1 μA |

## 引脚图

<img src="/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-pinout.jpg" alt="T-Impulse Plus 引脚图" width=100%>

<!-- GPIO 映射关系表。完整定义请参考仓库中的 pin_config.h。 -->

## 尺寸图

<img src="/products/t-impulse-series/t-impulse-plus/index/image/t-impulse-plus-3.jpg" alt="T-Impulse Plus 尺寸图" width=100%>

## 原理图

* [T-Impulse-Plus_V1.0](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/project/T-Impulse-Plus_V1.0.pdf)

## 数据手册

* [nRF52840 Datasheet](https://docs.nordicsemi.com/bundle/ps_nrf52840/page/keyfeatures_html5.html)
* [SSD1315](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/SSD1315.pdf)
* [S62F (SX1262)](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/S62F.pdf)
* [MIA-M10Q](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/MIA-M10Q-00B.pdf)
* [ICM20948](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/ICM20948.pdf)
* [ZD25WQ32CEIGR](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/ZD25WQ32CEIGR.pdf)
* [TTP223](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/TTP223-BA6-TD.pdf)
* [SGM41562](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus/blob/main/information/SGMICRO-SGM41562XGTR.pdf)

## 软件开发

* [T-Impulse-Plus GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Impulse-Plus)

### 依赖库

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver)

## 常见问题

* **Q. 如何进入 Bootloader 下载模式？**
  A. 按下并松开 **RST** 键，等待 1 秒，再次按下并松开 **RST** 键，电脑出现新盘符即表示进入 Bootloader 下载模式，此时可进行烧录。

* **Q. 为什么 USB 没有调试信息输出？**
  A. 请在串口助手软件中启用 **DTR** 选项。

* **Q. 为什么 Arduino IDE 提示升级库文件？**
  A. 建议不升级，不同版本库文件可能不兼容，请保持使用 `libraries` 目录中的版本。

* **Q. 看了教程还是不会搭建编程环境怎么办？**
  A. 可参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明进行搭建。

## 版本迭代

| 版本 | 日期 | 说明 |
| :--: | :--: | :--: |
| T-Impulse-Plus V1.0 | 2025-06-18 | 初版发布 |
