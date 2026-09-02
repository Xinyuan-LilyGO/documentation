---
title: T-Echo Card
show_source: false
tags: nRF52840, LoRa, GNSS, BLE, Bluetooth Mesh, Zigbee, OLED, IMU, Audio
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-card" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-1.jpg', alt: 'T-Echo Card 正面' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-2.jpg', alt: 'T-Echo Card 背面' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-3.jpg', alt: 'T-Echo Card' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-info-1.jpg', alt: 'T-Echo Card 产品信息' },
  { src: '/products/t-echo-series/t-echo-card/index/image/t-echo-card-info-2.jpg', alt: 'T-Echo Card 产品信息' },
]" />

## 概述

T-Echo Card 是一款基于 **nRF52840** 的紧凑型低功耗 IoT 开发板，以信用卡大小（90 × 60 × 9.5 mm）集成了 SX1262 LoRa 远程通信、L76K 多星座 GNSS 定位、ICM20948 九轴 IMU、0.42 英寸 OLED 显示屏、麦克风/喇叭音频，以及太阳能充电功能。内置 BLE 5、Thread、Zigbee、ANT、NFC 和 802.15.4 等多种无线协议，适用于户外和远程低功耗场景。

## 快速开始

### 硬件组装

<!-- 连接太阳能电池板、天线（LoRa + GNSS）、扬声器和电池。 -->

### Arduino（通过 Adafruit nRF52 BSP）

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 添加 Adafruit nRF52 开发板 URL：
   `https://adafruit.github.io/arduino-board-index/package_adafruit_index.json`
3. 安装 **Adafruit nRF52** 开发板包
4. 选择 **Adafruit Feather nRF52840 Express**（或最接近的 nRF52840 型号）
5. 安装 [软件开发](#软件开发) 中列出的依赖库
6. 克隆 [T-Echo-Card](https://github.com/Xinyuan-LilyGO/T-Echo-Card) 仓库，打开示例工程
7. 点击**上传**

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- nRF52840 @ 64 MHz，256 kB RAM，1 MB 内部 Flash + 32 Mbit 外部 SPI Flash
- SX1262 LoRa 收发器，400–945 MHz（频段变体：433 / 868 / 915 / 920 MHz）
- L76K 多星座 GNSS（GPS、GLONASS、北斗、QZSS）
- ICM20948 九轴 IMU（加速度计 + 陀螺仪 + 磁力计）
- 0.42 英寸 OLED 显示屏（SSD1306/SSD1315，72 × 40 像素，I2C）
- MP34DT05 PDM 数字 MEMS 麦克风 + MAX98357 I2S 单声道功放
- WS2812C-2020 RGB LED（256 级亮度）
- 太阳能充电：0.25 W，5 V
- 无线：BLE 5、Thread、Zigbee、ANT、NFC、802.15.4、Bluetooth Mesh
- 尺寸：90 × 60 × 9.5 mm

## 产品参数

| 参数 | 值 |
| :--: | :--: |
| 主控 | nRF52840 |
| CPU | ARM Cortex-M4F @ 64 MHz |
| RAM | 256 kB |
| 内部 Flash | 1 MB |
| 外部 Flash | 32 Mbit SPI（ZD25WQ32CEIGR） |
| LoRa | SX1262，400–945 MHz |
| GNSS | L76K（GPS / GLONASS / 北斗 / QZSS） |
| 显示屏 | 0.42 英寸 OLED，SSD1306/SSD1315，72 × 40 像素，I2C |
| IMU | ICM20948，九轴，I2C |
| 麦克风 | MP34DT05 MEMS，PDM |
| 扬声器 | MAX98357 I2S，8 Ω 1 W |
| RGB LED | WS2812C-2020 |
| 太阳能 | 0.25 W，5 V |
| 无线 | BLE 5、Thread、Zigbee、ANT、NFC、802.15.4 |
| 尺寸 | 90 × 60 × 9.5 mm |

## 引脚图

<img src="/products/t-echo-series/t-echo-card/index/image/t-echo-card-pinout.jpg" alt="T-Echo Card 引脚图" width=100%>

### LoRa（SX1262）

| SX1262   | SCK    | MOSI   | MISO   | CS     | RST    | BUSY   | INT (DIO1) |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :--------: |
| nRF52840 | GPIO13 | GPIO15 | GPIO17 | GPIO11 | GPIO7  | GPIO14 | GPIO40     |

### GNSS（L76K）

| L76K     | TX     | RX     | 1PPS   | Wake Up | EN     | RF EN  |
| :------: | :----: | :----: | :----: | :-----: | :----: | :----: |
| nRF52840 | GPIO19 | GPIO21 | GPIO23 | GPIO25  | GPIO47 | GPIO29 |

### 显示屏（OLED SSD1315）

| SSD1315  | SDA    | SCL    |
| :------: | :----: | :----: |
| nRF52840 | GPIO36 | GPIO34 |

### IMU（ICM20948）

| ICM20948 | SDA    | SCL    |
| :------: | :----: | :----: |
| nRF52840 | GPIO36 | GPIO34 |

### Flash（ZD25WQ32CEIGR）

| ZD25WQ32C | CS     | SCLK   | MOSI   | MISO   |
| :-------: | :----: | :----: | :----: | :----: |
| nRF52840  | GPIO12 | GPIO4  | GPIO6  | GPIO8  |

### 音频

| 功能               | GPIO   |
| :----------------: | :----: |
| 麦克风 CLK         | GPIO35 |
| 麦克风 DATA        | GPIO37 |
| 扬声器 EN          | GPIO43 |
| 扬声器 BCLK        | GPIO16 |
| 扬声器 DATA        | GPIO20 |
| 扬声器 WS（LRCK）  | GPIO22 |

### RGB LED（WS2812）

| 功能        | GPIO   |
| :---------: | :----: |
| WS2812 #1   | GPIO39 |
| WS2812 #2   | GPIO44 |
| WS2812 #3   | GPIO28 |

### 其他

| 功能                 | GPIO   |
| :------------------: | :----: |
| 按键（KEY_1）        | GPIO42 |
| 电池 ADC             | GPIO2  |
| 电池测量控制         | GPIO31 |
| RT9080 使能          | GPIO30 |

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [T-Echo Card 原理图](https://github.com/Xinyuan-LilyGO/T-Echo-Card/blob/main/project/T-Echo-Lite-Card_V1.0.pdf)

## 数据手册

* [nRF52840 数据手册](/datasheet/nRF52840_PS_v1.11.pdf)
* [SX1262 数据手册](/datasheet/DS_SX1261_SX1262.pdf)
* [ICM-20948 数据手册](/datasheet/ds-000189-icm-20948-datasheet.pdf)
* [L76K 数据手册](/datasheet/L76KB-A58.pdf)
* [MAX98357 数据手册](/datasheet/max98357a-max98357b.pdf)
* [MP34DT05 数据手册](/datasheet/mp34dt05-a.pdf)

## 软件开发

* [T-Echo-Card GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Echo-Card)

### 依赖库

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver)

## 常见问题

* **Q. T-Echo Card 是否支持 NFC？**
  A. 硬件已支持 NFC，但当前默认固件暂未启用该功能。

* **Q. 应选择哪个 LoRa 频段版本？**
  A. 请根据部署地区选择：915 MHz（北美）、868 MHz（欧洲）、920 MHz（日本/韩国）、433 MHz（亚洲及其他地区）。

## 版本迭代

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.0 | — | 初版发布 |
