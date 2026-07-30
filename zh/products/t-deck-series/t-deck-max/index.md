---
title: T-Deck MAX
show_source: false
tags: ESP32-S3, 4G, LoRa, E-Paper, GPS, IMU, Keyboard
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-deck-max" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-deck-series/t-deck-max/index/image/t-deck-max-1.jpg', alt: 'T-Deck MAX 正面图' },
  { src: '/products/t-deck-series/t-deck-max/index/image/t-deck-max-2.jpg', alt: 'T-Deck MAX 背面图' },
  { src: '/products/t-deck-series/t-deck-max/index/image/t-deck-max-3.jpg', alt: 'T-Deck MAX 整体图' },
  { src: '/products/t-deck-series/t-deck-max/index/image/t-deck-max-compare.jpg', alt: 'T-Deck MAX 对比图' },
  { src: '/products/t-deck-series/t-deck-max/index/image/t-deck-max-info.jpg', alt: 'T-Deck MAX 信息图' },
]" />

## 概述

LILYGO T-Deck MAX 是基于 **ESP32-S3** 的高度集成多功能开发平台，在 T-Deck Pro 基础上进行了多项升级：新增 **XL9555 IO 扩展芯片**，将 **4G（A7682E）** 和**音频（ES8311）** 集成到同一块开发板，新增 LoRa 天线内外置选择开关、音频通道切换，并引入 **DRV2605 振动马达驱动芯片**。配备 **3.1 英寸电子纸屏幕**（GDEQ031T10，320 × 240）及触摸（CST3530）、**SX1262 LoRa**、**MIA-M10Q GPS**、**BHI260AP AI IMU**、**TCA8418 机械键盘**、**SY6970 + BQ27220** 电池管理。

适用于 IoT 终端、户外设备、智能通信设备和便携工业控制等场景。

## 快速开始

### 固件烧录

烧录前请先让设备进入下载模式：
1. 按住 **BOOT** 键不要松开
2. 点击背面的 **RST** 按键后松开
3. 最后松开 **BOOT** 键

#### 使用 LILYGO Spark 下载（推荐）

下载 [LILYGO Spark](https://lilygo.cc/en-us/pages/lilygo-spark)，搜索 `T-Deck Max`，直接下载固件。

| 固件 | 说明 | 来源 |
| :--- | :--- | :--- |
| [T-Deck-MAX_xxxxx](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/firmware) | 出厂固件 | — |

#### 使用 WireScan 验证硬件

下载 [WireScan](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/raw/master/firmware/examples/WireScan.bin) 固件，打开串口监视器，确认所有 I2C 模组正常响应。

### 示例应用

| 示例 | 说明 |
| :--- | :--- |
| [WireScan](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/WireScan) | I2C 设备扫描，确认模组是否正常 |
| [test_wifi](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/test_wifi) | WiFi 连接测试 |
| [test_BHI260AP](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/test_BHI260AP) | 陀螺仪（BHI260AP）测试 |
| [test_GPS](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/test_GPS) | GPS（MIA-M10Q）测试 |
| [keypad](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/keypad) | 键盘输入测试 |
| [XL9555/read](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/XL9555/read) | IO 扩展芯片读取示例 |
| [XL9555/write](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/XL9555/write) | IO 扩展芯片写入示例 |
| [Elink_paper/touch](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/Elink_paper/touch) | 触摸屏基础测试 |
| [Elink_paper/display](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/Elink_paper/display) | 电子纸屏幕显示示例 |
| [Elink_paper/test_lvgl](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/Elink_paper/test_lvgl) | LVGL 图形库示例 |
| [Elink_paper/GDEQ031T10_Arduino](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/Elink_paper/GDEQ031T10_Arduino) | 电子纸 Arduino 库驱动示例 |
| [LoRa_sx1262/lora_send](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/LoRa_sx1262/lora_send) | LoRa 发送示例 |
| [LoRa_sx1262/lora_recv](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/LoRa_sx1262/lora_recv) | LoRa 接收示例 |
| [A7682E/test_AT](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/A7682E/test_AT) | 4G 模块 AT 命令测试 |
| [ES8311/playWAV](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/ES8311/playWAV) | 播放 WAV 音频示例 |
| [ES8311/playFormSD](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/ES8311/playFormSD) | 从 TF 卡播放音频示例 |
| [battery/bq25896](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/battery/bq25896) | 电池管理芯片 BQ25896 测试 |
| [battery/bq27220](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/battery/bq27220) | 电量计 BQ27220 测试 |
| [battery/sy6974](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/battery/sy6974) | 充电芯片 SY6974 测试 |
| [motor/basic](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/motor/basic) | 振动马达基础示例 |
| [motor/audio](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/motor/audio) | 振动马达音频反馈示例 |
| [motor/realtime](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/motor/realtime) | 振动马达实时控制示例 |
| [motor/complex](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/motor/complex) | 振动马达复杂模式示例 |
| [tf_card](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/tf_card) | TF 卡读写测试 |
| [eng_test](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/examples/eng_test) | 整机功能综合测试 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展，安装完成后重启
3. 打开 T-Deck-MAX 项目文件夹，PlatformIO 会自动下载依赖（首次较慢，请耐心等待）
4. 打开 `platformio.ini`，取消注释要使用的示例，按 `Ctrl+S` 保存
5. 点击 **✓** 编译，通过 USB 连接设备，点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 将项目 `lib/` 目录下的所有文件夹复制到 Arduino 库路径
3. 打开目标示例的 `.ino` 文件
4. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :--------------: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 你的端口 |
| USB CDC On Boot | **启用** |
| CPU Frequency | 240 MHz (WiFi) |
| Core Debug Level | 无 |
| USB DFU On Boot | 禁用 |
| Erase All Flash Before Upload | 禁用 |
| Events Run On | Core 1 |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Arduino Runs On | Core 1 |
| USB Firmware MSC On Boot | 禁用 |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **QSPI PSRAM** |
| Upload Mode | **UART0 / Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

5. 点击 **上传**

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特点

- ESP32-S3 双核 LX7 @ 240 MHz，16 MB Flash，8 MB PSRAM，Wi-Fi + 蓝牙 5.0 LE
- SX1262 LoRa（433–920 MHz），通过 XL9555 切换内置/外置天线
- A7682E 4G LTE Cat 1（下行 10 Mbps / 上行 5 Mbps）
- ES8311 音频编解码器 — 与 A7682E 共用扬声器，通过 XL9555 IO12 切换
- 3.1 英寸 GDEQ031T10 电子纸屏（320 × 240），CST3530 触摸
- TCA8418 机械键盘控制器
- BHI260AP AI IMU（六轴自学习）
- MIA-M10Q GNSS 模块
- XL9555 IO 扩展芯片 — 控制天线选择、音频路由、功率放大器
- DRV2605 振动马达驱动（触觉反馈）
- SY6970 + BQ27220 电池管理，3.7 V 1500 mAh

## 产品参数

| 参数 | 规格 |
| :--: | :--: |
| MCU | ESP32-S3 |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| 蓝牙 | Bluetooth 5.0 LE |
| LoRa | SX1262 |
| 4G 模块 | A7682E（LTE Cat 1） |
| GPS | MIA-M10Q |
| 显示屏 | GDEQ031T10 电子纸，320 × 240 |
| 触摸 | CST3530（I2C 0x1A） |
| 键盘 | TCA8418（I2C 0x34） |
| IMU | BHI260AP（I2C 0x28） |
| 音频 | ES8311（I2C 0x18） |
| IO 扩展 | XL9555（I2C 0x20） |
| 振动马达 | DRV2605（I2C 0x5A） |
| 电池管理 | SY6970（I2C 0x6A）+ BQ27220（I2C 0x55） |
| 电池 | 3.7 V，1500 mAh |
| USB | 1 × Type-C |
| 存储 | TF 卡槽 |

<img src="/products/t-deck-series/t-deck-max/index/image/t-deck-max-info.jpg" alt="T-Deck MAX 详情图" width=100%>

## 模块说明

### A7682E 4G 模块

A7682E 是 LTE Cat 1 模块，支持 LTE-FDD/GSM/GPRS/EDGE。插入 SIM 卡后支持打电话、收发短信和上网。

| 参数 | 值 |
| :--: | :-- |
| 频段 | LTE-FDD B1/B3/B5/B7/B8/B20，GSM/GPRS/EDGE 900/1800 MHz |
| LTE Cat 1 | 下行 10 Mbps / 上行 5 Mbps |
| GPRS | 最高 85.6 Kbps |
| 供电电压 | 3.4–4.2 V |
| 网络协议 | TCP/IP、IPv4/IPv6、HTTP/HTTPS、FTP/FTPS、DNS、SSL |
| 其他 | 语音通话、短信、FOTA、RNDIS/PPP/ECM |

> A7682E 和 ES8311 的扬声器共用。将 **XL9555 IO12 设为 HIGH** 输出 A7682E 音频。音量过小时，将 **XL9555 IO06 设为 HIGH** 启用功率放大器。

### ES8311 音频

> 将 **XL9555 IO12 设为 LOW** 输出 ES8311 音频。音量过小时，将 **XL9555 IO06 设为 HIGH** 启用功率放大器。

### LoRa 天线选择

| 天线 | XL9555 IO04 |
| :--: | :---------: |
| 内置天线（默认） | HIGH |
| 外置天线 | LOW |

## 引脚图

<img src="/products/t-deck-series/t-deck-max/index/image/t-deck-max-pinout.jpg" alt="T-Deck MAX 引脚图" width=100%>

引脚定义统一收录于：

[`lib/TDeckMaxBoard/src/TDeckMaxBoard.h`](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/blob/master/lib/TDeckMaxBoard/src/TDeckMaxBoard.h)

示例中直接引用：
```c
#include <TDeckMaxBoard.h>
```

完整引脚映射：[pinmap](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/blob/master/docs/pinmap_cn.md)

## 尺寸图

<img src="/products/t-deck-series/t-deck-max/index/image/t-deck-max-3.jpg" alt="T-Deck MAX 尺寸图" width=100%>

## 原理图

* [T-Deck MAX 硬件资料](https://github.com/Xinyuan-LilyGO/T-Deck-MAX/tree/master/hardware)

## 数据手册

* [ESP32-S3 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 产品页面](https://semtech.com/products/wireless-rf/lora-connect/sx1262)
* [A7682E 产品页面](https://en.simcom.com/product/A7682E.html)
* [BHI260AP 数据手册](https://www.bosch-sensortec.com/products/smart-sensor-systems/bhi260ap/)

## 软件开发

* [T-Deck-MAX GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Deck-MAX)
* [TDeckMax-Reader](https://github.com/ShallowGreen123/TDeckMax-Reader)

### 依赖库

```
zinggjm/GxEPD2
jgromes/RadioLib
lewisxhe/SensorLib
mikalhart/TinyGPSPlus
vshymanskyy/TinyGSM
lvgl/lvgl
lewisxhe/XPowersLib
adafruit/Adafruit TCA8418
adafruit/Adafruit BusIO
esphome/ESP32-audioI2S
```

## 常见问题

* **Q. 如何进入下载模式？**
  A. 按住 BOOT，点击 RST 后松开，再松开 BOOT。

* **Q. 扬声器没有声音？**
  A. 检查 XL9555 IO12 电平（HIGH = A7682E 音频，LOW = ES8311 音频）。将 IO06 设为 HIGH 启用功率放大器。

* **Q. LoRa 外置天线不工作？**
  A. 将 XL9555 IO04 设为 LOW 切换到外置天线，默认为内置天线（HIGH）。

* **Q. 电子纸屏出现残影？**
  A. 连续快速/局部刷新 5 次后需执行一次全刷以消除残影。

* **Q. 无法烧录固件？**
  A. 按住 BOOT 键后重试。确认已选择正确的分区方案（16M Flash 3MB APP/9.9MB FATFS）。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.0 | — | 初始版本 — 新增 XL9555 IO 扩展，集成 4G + 音频，DRV2605 振动马达 |
