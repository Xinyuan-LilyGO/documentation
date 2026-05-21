---
title: LILYGO T-Deck Pro
show_source: false
tags: ESP32-S3, 4G, LoRa, E-Paper, GPS
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-deck-pro" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-deck-series/t-deck-pro/assets/t-deck-pro1.jpg', alt: 'T-Deck Pro 正面图' },
  { src: '/products/t-deck-series/t-deck-pro/assets/t-deck-pro2.jpg', alt: 'T-Deck Pro 实物图' },
  { src: '/products/t-deck-series/t-deck-pro/assets/t-deck-pro3.jpg', alt: 'T-Deck Pro 引脚图' }
]" />

## 概述

LILYGO T-Deck Pro 是一款基于 ESP32-S3 芯片的高度集成多功能开发平台，支持 4G 通信和 LoRa 远距离无线传输，配备电子墨水屏（EPD）及触摸功能，兼顾低功耗显示与交互。其硬件模块涵盖 GPS 定位、陀螺仪传感、麦克风语音输入、SD 卡存储、机械键盘以及自学习 AI IMU，适用于物联网、户外设备、智能终端等场景。可以根据需求选择版本：版本一搭载音频模块 PCM512A，版本二搭载 4G 模块 A7682E，提供灵活配置，满足工业控制、环境监测、便携设备等多元化需求。

## 快速开始

### 示例支持

| 示例 | PlatformIO | Arduino | 描述 |
| :------ | :----: | :-----: | :---------- |
| [A7682E/test_AT](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/master/examples/A7682E/test_AT) | ✓ | | 4G 模块 AT 指令测试 |
| [出厂程序](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/master) | ✓ | ✓ | 出厂固件 |
| [更多示例](https://github.com/Xinyuan-LilyGO/T-Deck-Pro) | ✓ | ✓ | 参考 GitHub 仓库 |

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)，克隆或下载项目。
2. 在 VS Code 扩展中搜索并安装 `PlatformIO` 插件，安装后重启。
3. 打开项目后，PlatformIO 自动下载所需三方库，首次下载时间较长，请耐心等待。
4. 打开 `platformio.ini`，在 `example` 中取消注释选择示例，按 Ctrl+S 保存。
5. 点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino
1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)，安装 Espressif Systems 的 ESP32 开发板支持包。
2. 将项目 `libraries` 目录中的所有库复制到 Arduino 库目录。
3. 在"工具"菜单中选择正确的设置：

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
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确端口，编译并烧录。

### 开发平台
1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)

## 视频

## 主要特点

- ESP32-S3FN16R8：16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0
- SX1262 LoRa（433~920MHz），MIA-M10Q GPS，A7682E 4G LTE（可选）
- 3.1 英寸 GDEQ031T10 电子墨水屏（320×240），CST328 触摸
- TCA8418 机械键盘控制器，BHI260AP AI IMU 传感器
- LTR-553ALS 环境光传感器，麦克风语音输入
- PCM512A 音频模块（可选版本），BQ25896 + BQ27220 电池管理

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN16R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 3.1 英寸 GDEQ031T10 EPD (320×240) |
| 触摸 | CST328 (I²C) |
| 键盘 | TCA8418 (I²C) |
| LoRa | SX1262 (433~920MHz) |
| GPS | MIA-M10Q GNSS |
| 4G | A7682E LTE Cat1（可选） |
| IMU | BHI260AP AI IMU |
| 光线传感器 | LTR-553ALS |
| 电池管理 | BQ25896 + BQ27220 |
| 电池 | 3.7V 1500mAh |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × TYPE-C (USB + OTG) |
| 扩展接口 | 1 × QWIIC + 2.54mm 2×20 GPIO |
| 尺寸 | 120 × 66 × 13.5mm |

### A7682E 模块说明（4G 版本）

A7682E 为 LTE Cat1 模块，支持 LTE-FDD/GSM/GPRS/EDGE 无线通信，通过 AT 指令控制：

| 参数 | 值 |
| :-- | :-- |
| 频段 | LTE-FDD B1/B3/B5/B7/B8/B20 |
| GSM/GPRS/EDGE | 900/1800 MHz |
| LTE Cat1 速率 | 上行 5Mbps / 下行 10Mbps |
| 支持协议 | TCP/IP/IPv4/IPv6/HTTP/HTTPS/FTP/DNS |
| 供电电压 | 3.4V ~ 4.2V |

### 电子墨水屏刷新说明

| 刷新类型 | 视觉表现 | 使用建议 |
| :------: | :------: | :------: |
| 全屏刷新 | 伴随多次闪烁 | 基础刷新模式 |
| 快速刷新 | 闪烁一次 | 连续操作 ≤5 次后需全屏刷新 |
| 局部刷新 | 无闪烁 | 连续操作 ≤5 次后需全屏刷新 |

> 快速刷新和局部刷新连续操作 **5 次后**，必须执行一次全屏刷新，以消除残影堆积。

## 引脚图

<img src="/products/t-deck-series/t-deck-pro/assets/t-deck-pro3.jpg" alt="T-Deck Pro 引脚图" width=100%>

### 引脚定义

```c
// I2C
#define BOARD_I2C_SDA  13
#define BOARD_I2C_SCL  14

// I2C 设备地址
// CST328 触摸:      0x1A
// LTR-553ALS 光线:  0x23
// BHI260AP 陀螺仪:  0x28
// TCA8418 键盘:     0x34
// BQ27220 电量:     0x55
// BQ25896 充电:     0x6B

// 键盘
#define BOARD_KEYBOARD_INT 15
#define BOARD_KEYBOARD_LED 42

// 触摸
#define BOARD_TOUCH_INT 12
#define BOARD_TOUCH_RST 45

// SPI
#define BOARD_SPI_SCK  36
#define BOARD_SPI_MOSI 33
#define BOARD_SPI_MISO 47

// EPD 电子墨水屏
#define BOARD_EPD_DC   35
#define BOARD_EPD_CS   34
#define BOARD_EPD_BUSY 37

// SD 卡
#define BOARD_SD_CS    48

// LoRa
#define BOARD_LORA_CS   3
#define BOARD_LORA_BUSY 6
#define BOARD_LORA_RST  4
#define BOARD_LORA_INT  5

// GPS
#define BOARD_GPS_RXD 44
#define BOARD_GPS_TXD 43
#define BOARD_GPS_PPS  1

// A7682E 4G（可选版本）
#define BOARD_A7682E_RXD    10
#define BOARD_A7682E_TXD    11
#define BOARD_A7682E_RST     9
#define BOARD_A7682E_PWRKEY 40

// PCM512A 音频（可选版本）
#define BOARD_I2S_BCLK  7
#define BOARD_I2S_DOUT  8
#define BOARD_I2S_LRC   9

// 麦克风
#define BOARD_MIC_DATA  17
#define BOARD_MIC_CLOCK 18

// 使能引脚
#define BOARD_GPS_EN  39
#define BOARD_1V8_EN  38
#define BOARD_6609_EN 41
#define BOARD_LORA_EN 46

// 其他
#define BOARD_MOTOR_PIN 2
#define BOARD_BOOT_PIN  0
```

## 尺寸图

## 原理图

* [T-DeckPro V1.0](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/blob/master/hardware/T-Deckpro%2024-05-16/T-DeckPro%20V1.0%2024-05-16.pdf)
* [T-DeckPro V1.1](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V2-250915/hardware/T-Deckpro%20v1.1%2025-09-15)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [MIA-M10Q Datasheet](https://www.u-blox.com/en/product/mia-m10-series)
* [BHI260AP Datasheet](https://www.bosch-sensortec.com/products/motion-sensors/imu/bhi260ap/)

## 软件开发

* [T-Deck-Pro GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Deck-Pro)

### 依赖库

* [GxEPD2-1.5.5](https://github.com/ZinggJM/GxEPD2)
* [RadioLib-6.4.2](https://github.com/jgromes/RadioLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [lvgl-8.3.9](https://github.com/lvgl/lvgl)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [Adafruit TCA8418](https://github.com/adafruit/Adafruit_TCA8418)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. Arduino IDE 提示升级库文件，应该升级吗？**  
  A. 建议不升级，不同版本的库文件可能不兼容，确认运行正常后再考虑升级。

* **Q. 电子墨水屏出现残影怎么办？**  
  A. 连续使用快速刷新或局部刷新 5 次后，必须执行一次全屏刷新来消除残影。

* **Q. 板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键重新下载程序。

## 版本历史

不同硬件版本代码不兼容，请确认硬件版本后进入相应 git 分支。

| Version | 分支 | Update date | Update description |
| :-----: | :--: | :---------: | :---------------- |
| T-Deck-Pro V1.0 | [HD-V1-250326](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V1-250326) | 2024-05-16 | 初始版本 |
| T-Deck-Pro V1.1 | [HD-V2-250915](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V2-250915) | 2025-09-15 | 第二版 |
| T-Deck-Pro MAX V1.0 | [HD-V3-250911](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V3-250911) | 2025-09-11 | MAX 版本（暂未上市） |
