---
title: T-Echo Lite Kit
show_source: false
tags: LoRa, nRF52840, E-Paper, Keyboard, Audio, GPS, IMU, Low Power, Meshtastic
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-lite-kit" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-1.jpg', alt: 'T-Echo Lite Kit 正面图' },
  { src: '/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-2.jpg', alt: 'T-Echo Lite Kit 背面图' },
]" />

## 概述

T-Echo Lite Kit 是 T-Echo Lite 主板与 **KeyShield** 键盘配件底板的组合套件。KeyShield 扩展了 5×4 物理键盘（TCA8418）、ES8311 音频编解码器（含扬声器和耳机接口）、AW21009QNR 键盘背光以及振动马达，并预留了可选 GPS（L76K）和 IMU（ICM20948）插槽。整套方案基于 **nRF52840** 主控，搭载 LoRa SX1262、1.22 英寸电子墨水屏，具备极低深睡眠功耗，适用于便携通信终端、LoRa Meshtastic 节点等应用场景。

## 快速开始

### 固件烧录

#### 使用 LILYGO Spark（推荐）

下载 [LILYGO Spark](https://lilygo.cc/en-us/pages/lilygo-spark)，搜索 `T-Echo Lite Kit`，直接烧录固件。

#### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 插件
3. 打开 T-Echo-Lite 项目文件夹
4. 打开 `platformio.ini`，在 `[platformio]` → `default_envs` 下取消注释目标示例
5. 首次使用时，在 `tool/win10 vscode platformio start` 目录下运行 `python t-echo-lite_v1.0.0_setup.py` 安装开发板支持包
6. 点击 **✓** 编译，连接开发板后点击 **→** 上传

#### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 在首选项中，将 `https://www.adafruit.com/package_adafruit_index.json` 添加到**附加开发板管理器网址**
3. 在开发板管理器中安装 **Adafruit nRF52**
4. 将项目 `libraries` 目录下的库文件夹复制到 Arduino Sketchbook 库目录
5. 在**工具** → **开发板**中选择 **Nordic nRF52840 DK**
6. 进入 DFU 烧录模式：按下并松开 RST，等待 LED1 亮起，再次按下并松开 RST，LED1 变暗后重新变亮即进入 DFU 模式
7. 点击 **✓** 编译，点击 **→** 上传

### 示例程序

#### T-Echo-Lite 示例

| 示例 | 支持 | 说明 |
| :--: | :--: | :--: |
| [Battery_Measurement](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Battery_Measurement) | ✓ | 电池电压读取 |
| [BLE_Uart](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/BLE_Uart) | ✓ | BLE UART 通信 |
| [Display](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Display) | ✓ | 电子墨水屏显示 |
| [GPS](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/GPS) | ✓ | GPS 定位 |
| [ICM20948](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/ICM20948) | ✓ | IMU 传感器 |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/SX126x_PingPong) | ✓ | LoRa 收发测试 |
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Sleep_Wake_Up) | ✓ | 深睡眠与唤醒 |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Original_Test) | ✓ | 出厂测试 |

#### T-Echo-Lite-KeyShield 示例

| 示例 | 支持 | 说明 |
| :--: | :--: | :--: |
| [aw21009qnr](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/aw21009qnr) | ✓ | 键盘背光 |
| [aw86224](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/aw86224) | ✓ | 振动马达 |
| [es8311](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/es8311) | ✓ | 扬声器 / 麦克风 |
| [tca8418](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/tca8418) | ✓ | 键盘 |
| [original_test](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/original_test) | ✓ | 出厂测试 |

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特点

- nRF52840 ARM Cortex-M4 @ 64 MHz，蓝牙 5.0，256 kB RAM，1 MB Flash
- SX1262 LoRa（400–520 MHz / 830–945 MHz），SPI
- 1.22 英寸 GDEM0122T61 电子墨水屏（176 × 192），驱动芯片 SSD1681
- 5×4 物理键盘，TCA8418 键盘控制器（I2C）
- AW21009QNR 键盘背光（I2C）
- ES8311 音频编解码器，扬声器 + 耳机接口（I2C + I2S）
- 振动马达（I2C）
- 可选 ICM20948 九轴 IMU（I2C）
- 可选 L76K GNSS 模块（UART）
- 按键（IO 0.24）
- 深睡眠功耗：最低 2–10 µA

## 产品参数

| 参数 | 规格 |
| :--: | :--: |
| MCU | nRF52840，ARM Cortex-M4 @ 64 MHz |
| RAM | 256 kB |
| Flash（MCU） | 1 MB |
| 蓝牙 | Bluetooth 5.0 |
| LoRa | SX1262，400–520 MHz / 830–945 MHz |
| 显示屏 | 1.22 英寸 GDEM0122T61 电子墨水屏，176 × 192 |
| 键盘 | TCA8418（5×4），I2C 0x34 |
| 键盘背光 | AW21009QNR，I2C |
| 音频 | ES8311，I2C 0x34 |
| IMU（可选） | ICM20948，I2C |
| GNSS（可选） | L76K，UART |
| 深睡眠功耗 | 2–10 µA |

<img src="/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-info.jpg" alt="T-Echo Lite Kit 详情图" width=100%>

## 引脚图

<img src="/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-pinmap.jpg" alt="T-Echo Lite Kit 引脚图" width=100%>

### 电子墨水屏（1.22 英寸，176×192）

| GDEM0122T61 | BS1    | BUSY   | RST    | DC     | CS     | SCLK   | MOSI   |
| :---------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| nRF52840    | IO 1.12 | IO 0.03 | IO 0.28 | IO 0.21 | IO 0.22 | IO 0.19 | IO 0.20 |

### ES8311 音频

| ES8311   | SDA    | SCL    | 地址 |
| :------: | :----: | :----: | :--: |
| nRF52840 | IO 1.4 | IO 1.2 | 0x34 |

### 振动马达

| 振动马达 | SDA    | SCL    |
| :------: | :----: | :----: |
| nRF52840 | IO 1.4 | IO 1.2 |

### LoRa SX1262

| SX1262   | CS      | RST     | SCLK    | MOSI    | MISO    | BUSY    | DIO1 / INT | DIO2    | RF_VC1  | RF_VC2  |
| :------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :--------: | :-----: | :-----: | :-----: |
| nRF52840 | IO 0.11 | IO 0.07 | IO 0.13 | IO 0.15 | IO 0.17 | IO 0.14 | IO 1.8     | IO 0.05 | IO 0.27 | IO 1.1  |

### 键盘（TCA8418）

| TCA8418  | SDA    | SCL    | 地址 |
| :------: | :----: | :----: | :--: |
| nRF52840 | IO 1.4 | IO 1.2 | 0x34 |

### 按键

| 功能 | 引脚    |
| :--: | :-----: |
| 按键 | IO 0.24 |

### IMU ICM20948（可选）

| ICM20948 | SDA    | SCL    | INT     |
| :------: | :----: | :----: | :-----: |
| nRF52840 | IO 1.4 | IO 1.2 | IO 0.16 |

### GNSS L76K（可选）

| L76K     | RX      | TX      | 1PPS    | WAKE    |
| :------: | :-----: | :-----: | :-----: | :-----: |
| nRF52840 | IO 1.13 | IO 1.15 | IO 0.29 | IO 1.10 |

## 尺寸图

<img src="/products/t-echo-series/t-echo-lite-kit/index/image/t-echo-lite-kit-3.jpg" alt="T-Echo Lite Kit 尺寸图" width=100%>

## 原理图

* [T-Echo-Lite V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite_V1.0.pdf)
* [T-Echo-Lite-Eapper V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite-Eapper_V1.0.pdf)

## 数据手册

* [nRF52840 数据手册](https://docs.nordicsemi.com/bundle/ps_nrf52840/page/keyfeatures_html5.html)
* [GDEM0122T61（电子墨水屏）](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/GDEM0122T61.pdf)
* [SSD1681（电子墨水屏驱动）](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/SSD1681.pdf)
* [S62F（SX1262 模组）](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/S62F.pdf)
* [L76KB-A58（GNSS）](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/L76KB-A58.pdf)
* [ICM20948](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/information/ICM20948.pdf)

## 软件开发

* [T-Echo-Lite GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Echo-Lite)

### 依赖库

* [Adafruit_EPD](https://github.com/adafruit/Adafruit_EPD)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver)

## 常见问题

* **Q. USB 无调试输出？**
  A. 在串口助手软件中启用 **DTR** 选项。

* **Q. USB 上传失败？**
  A. 进入 DFU 烧录模式：按下并松开 RST，等待 LED1 亮起，再次按下并松开 RST，LED1 变暗后重新变亮即进入 DFU 模式。

* **Q. Arduino IDE 提示升级库？**
  A. 请勿升级，使用项目中附带的库版本。

* **Q. 电子墨水屏出现残影？**
  A. GDEM0122T61 不支持快速刷新，请仅使用全刷模式。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V1.0 | — | 初版发布 |
