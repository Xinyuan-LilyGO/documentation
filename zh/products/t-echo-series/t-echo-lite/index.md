---
title: LILYGO T-Echo Lite
show_source: false
tags: LoRa, nRF52840, E-Paper, Low Power, Meshtastic, Keyboard
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-echo-lite?variant=45331277906101" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-echo-series/t-echo-lite/assets/t-echo-lite01.jpg', alt: 'T-Echo Lite 正面图' },
  { src: '/products/t-echo-series/t-echo-lite/assets/t-echo-lite02.jpg', alt: 'T-Echo Lite 实物图' },
  { src: '/products/t-echo-series/t-echo-lite/assets/t-echo-lite03.jpg', alt: 'T-Echo Lite 配件图' }
]" />

## 概述

T-Echo Lite 是 T-Echo 的轻便版本，基于 nRF52840 设计，具有更小的体积和更低的功耗（深度睡眠最低约 2μA）。板载 SX1262 LoRa、L76K GPS、ICM20948 九轴 IMU、1.22 英寸 E-Paper 显示屏，支持太阳能充电（5V）。T-Echo-Lite-KeyShield 为扩展底板，新增键盘（TCA8418）、扬声器/麦克风（ES8311）和振动（AW86224）外设。

## 快速开始

### 示例支持

**T-Echo-Lite 示例：**

| 示例 | Arduino/PlatformIO | 描述 |
| :------ | :----------------: | :---------- |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Original_Test) | ✓ | 出厂综合测试 |
| [Display](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Display) | ✓ | E-Paper 显示测试 |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/SX126x_PingPong) | ✓ | LoRa 收发测试 |
| [GPS](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/GPS) | ✓ | GPS 定位示例 |
| [GPS_Full](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/GPS_Full) | ✓ | GPS 完整示例 |
| [ICM20948](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/ICM20948) | ✓ | 九轴 IMU 示例 |
| [BLE_Uart](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/BLE_Uart) | ✓ | BLE 串口示例 |
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Sleep_Wake_Up) | ✓ | 深度睡眠（最低 2.54µA） |
| [Battery_Measurement](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Battery_Measurement) | ✓ | 电池电量测量 |
| [Flash](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite/Flash) | ✓ | Flash 读写测试 |

**T-Echo-Lite-KeyShield 示例：**

| 示例 | Arduino/PlatformIO | 描述 |
| :------ | :----------------: | :---------- |
| [original_test](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/original_test) | ✓ | KeyShield 出厂测试 |
| [tca8418](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/tca8418) | ✓ | 键盘矩阵示例 |
| [es8311](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/es8311) | ✓ | 音频编解码示例 |
| [voice_speaker](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/voice_speaker) | ✓ | 语音播放示例 |
| [aw86224](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/aw86224) | ✓ | 振动电机示例 |
| [aw21009qnr](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/examples/T-Echo-Lite-KeyShield/aw21009qnr) | ✓ | 键盘背光示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Echo-Lite 项目代码](https://github.com/Xinyuan-LilyGO/T-Echo-Lite)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 打开首选项，在"其他开发板管理地址"中添加：
   ```
   https://www.adafruit.com/package_adafruit_index.json
   ```
3. 在开发板管理器中搜索 `Adafruit_nRF52`（作者 Adafruit）并安装 v1.6.1。
4. 将 `libraries` 目录中的所有文件夹复制到 Arduino 库目录。
5. 在"工具"菜单中选择 Board: **Nordic nRF52840 DK**。
6. 进入引导下载模式：按下 RST 后松开，等待 LED1 亮起，再次按下 RST 后松开，观察 LED1 逐渐熄灭并点亮，即已进入下载模式。

> **JLINK 烧录：** 安装 [nRF-Connect-for-Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop) 和 [JLINK](https://www.segger.com/downloads/jlink/)，按下图连接 JLINK，同时选择 bootloader 和 firmware 文件后点击 Erase & Write。
> <img src="/products/t-echo-series/t-echo-lite/assets/12.jpg" alt="JLINK 连接图" width=60%>

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)（Adafruit nRF52 支持）
2. [Platform IO](https://platformio.org/)（nordicnrf52 平台）
3. [nRF Connect SDK](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-SDK)（原生开发）

## 视频

## 主要特点

- nRF52840：1MB Flash，256kB RAM，蓝牙 5.0
- SX1262 LoRa，L76K GPS（UART），ICM20948 九轴 IMU
- 1.22 英寸 E-Paper（176×192px，SSD1681 驱动），仅支持全刷
- 太阳能充电（5V），超低功耗（深度睡眠最低约 2µA）
- KeyShield 扩展板：物理键盘、扬声器/麦克风、振动电机、键盘背光

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | nRF52840 |
| RAM | 256kB |
| Flash | 1MB (nRF52840) + 4MB (ZD25WQ32, 外置) |
| 屏幕 | 1.22 英寸 E-Paper GDEM0122T61 (176×192px) |
| LoRa | S62F (SX1262)，433~915MHz |
| GNSS | L76K（UART） |
| IMU | ICM20948 九轴 |
| 蓝牙 | Bluetooth 5.0 (LE) |
| USB | 1 × USB Type-C |
| 充电 | USB + 太阳能（5V） |
| 睡眠功耗 | 最低约 2µA |

**KeyShield 扩展板额外配置：**

| 组件 | 描述 |
| :--: | :--: |
| 键盘 | TCA8418 矩阵键盘控制器 |
| 键盘背光 | AW21009QNR LED 驱动 |
| 振动 | AW86224 振动电机驱动 |
| 音频 | ES8311 编解码（扬声器 + 麦克风） |

## 引脚图

> 详细引脚定义请参考配置文件：
> * [t_echo_lite_config.h](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/libraries/private_library/t_echo_lite_config.h)
> * [t_echo_lite_keyshield_config.h](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/libraries/private_library/t_echo_lite_keyshield_config.h)

<img src="/products/t-echo-series/t-echo-lite/assets/14.png" alt="T-Echo Lite 天线分布图" width=80%>

> T-Echo Lite 的蓝牙天线和 LoRa 天线如上图所示。

## 尺寸图

## 原理图

* [T-Echo-Lite V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite_V1.0.pdf)
* [T-Echo-Lite E-Paper V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/project/T-Echo-Lite_V1.0/T-Echo-Lite-Eapper_V1.0.pdf)

## 数据手册

* [nRF52840 文档](https://docs.nordicsemi.com/bundle/ps_nrf52840/page/keyfeatures_html5.html)
* [GDEM0122T61 Datasheet](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/information/GDEM0122T61.pdf)
* [SSD1681 Datasheet](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/information/SSD1681.pdf)
* [S62F (SX1262) Datasheet](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/information/S62F.pdf)
* [L76K Datasheet](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/information/L76KB-A58.pdf)
* [ICM20948 Datasheet](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/blob/main/information/ICM20948.pdf)

## 软件开发

* [T-Echo-Lite GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Echo-Lite)

### 依赖库

**T-Echo-Lite：**
* [Adafruit_EPD](https://github.com/adafruit/Adafruit_EPD)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [ICM20948_WE](https://github.com/wollewald/ICM20948_WE)

**T-Echo-Lite-KeyShield：**
* [cpp_bus_driver](https://github.com/Llgok/cpp_bus_driver)

## 常见问题

* **Q. 为什么 USB 没有调试信息输出？**  
  A. 请打开串口助手软件中的 "DTR" 选项。

* **Q. 烧录失败怎么办？**  
  A. 进入引导下载模式：按下 RST 后松开，等待 LED1 亮起后再次按下 RST，观察 LED1 逐渐熄灭并点亮，即已进入引导下载模式，此时可正常烧录。

* **Q. E-Paper 是否支持局部刷新？**  
  A. GDEM0122T61 不支持局部刷新（已向屏厂确认），建议仅使用全刷。

* **Q. 为什么 Arduino IDE 提示升级库文件？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Echo-Lite_V1.0 | 2024-12-06 | 超低功耗 LoRa 节点设备初始版本 |
| T-Echo-Lite-KeyShield_V1.0 | 2025-10-14 | 键盘扩展板版本 |
