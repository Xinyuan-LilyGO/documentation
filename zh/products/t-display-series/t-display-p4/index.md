---
title: LILYGO T-Display-P4
show_source: false
tags: ESP32-P4, MIPI, AMOLED, LoRa, GPS, ESP32-C6
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-p4" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-p4/index/image/t-display-p4-1.jpg', alt: 'T-Display-P4 正面图' },
  { src: '/products/t-display-series/t-display-p4/index/image/t-display-p4-2.jpg', alt: 'T-Display-P4 实物图' },
  { src: '/products/t-display-series/t-display-p4/index/image/t-display-p4-amoled.jpg', alt: 'T-Display-P4 引脚图' }
]" />

## 概述

T-Display-P4 是一款基于 **ESP32-P4** 高性能核心的多功能开发板，专为复杂图形处理、多媒体交互与物联网应用设计。主要特点包括：

1. **高性能处理**：搭载 ESP32-P4 处理器，支持复杂图形与视频任务处理。
2. **高清显示**：配备 4.05 英寸 MIPI 接口屏幕（TFT 或 AMOLED 两个版本），支持触控。
3. **双核协同**：板载 ESP32-C6 辅助处理器，支持 Wi-Fi 6 与蓝牙 5.3。
4. **丰富外设**：集成扬声器、麦克风、线性振动马达、LoRa、GPS、摄像头、电池监测等模块。
5. **扩展性强**：提供丰富 GPIO 接口，支持键盘扩展板（T-Display-P4-Keyboard）。

## 快速开始

### 示例支持

#### T-Display-P4 示例

| 示例 | ESP-IDF | 描述 |
| :------ | :-----: | :---------- |
| [afe](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/afe) | ✓ | 音频前端 |
| [aw86224](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/aw86224) | ✓ | 振动马达 |
| [bq27220](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/bq27220) | ✓ | 电量监测 |
| [deep_sleep](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/deep_sleep) | ✓ | 深度睡眠 |
| [es8311](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/es8311) | ✓ | 音频编解码器 |
| [l76k](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/l76k) | ✓ | GPS 定位 |
| [lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/lvgl_9_ui) | ✓ | 出厂示例 |
| [screen_camera](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_camera) | ✓ | 摄像头屏幕显示 |
| [sx1262_lora_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_lora_send_receive) | ✓ | LoRa 收发 |
| [icm20948](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/icm20948) | ✓ | 惯性传感器 |
| [pcf8563](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/pcf8563) | ✓ | RTC 时钟 |
| [xiaozhi](https://github.com/78/xiaozhi-esp32) | ✓ | 小智 AI |

#### T-Display-P4-Keyboard 扩展板示例

| 示例 | ESP-IDF | 描述 |
| :------ | :-----: | :---------- |
| [radiolib_cc1101_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/radiolib_cc1101_send_receive) | ✓ | CC1101 收发 |
| [radiolib_nrf24l01_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/radiolib_nrf24l01_send_receive) | ✓ | NRF24L01 收发 |
| [st25r3916](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/st25r3916) | ✓ | NFC 测试 |
| [tca8418](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/tca8418) | ✓ | 键盘测试 |

### ESP-IDF（VS Code）
1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download)，在扩展中搜索并安装 "ESP-IDF"。
2. 克隆仓库：
   ```bash
   git clone --recursive https://github.com/Xinyuan-LilyGO/T-Display-P4.git
   git submodule update --init --recursive
   ```
3. 下载安装 [ESP-IDF v5.4.1](https://dl.espressif.cn/dl/esp-idf/?idf=4.4)，在扩展中选择 "USE EXISTING SETUP" 配置路径。
4. 在 "SDK 配置编辑器" 中搜索 "Select the example to build" 选择要编译的示例。
5. 选择设备目标 **ESP32P4**，构建并烧录。

### 开发平台
1. [VS Code + ESP-IDF](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

**T-Display-P4 主板：**
- ESP32-P4：16 MB Flash，高性能处理器
- ESP32-C6-MINI-1U：4 MB PSRAM，Wi-Fi 6 + 蓝牙 5.3（SDIO 接口）
- 4.05" MIPI TFT（540×1168，HI8561）或 4.1" MIPI AMOLED（568×1232，RM69A10），10 点电容触控
- OV2710 MIPI 摄像头，ICM20948 六轴 IMU
- ES8311 音频编解码器 + NS4150B 功放 + 麦克风
- SX1262 LoRa 模块（HPD16A），L76K GPS，PCF8563 RTC
- AW86224AFCR 线性振动马达，BQ27220 电量监测，LGS4056H 充电管理
- XL9535 IO 扩展器

**T-Display-P4-Keyboard 扩展板（可选）：**
- TCA8418 键盘驱动，XL9555 IO 扩展
- T-MixRF 无线模块：CC1101 + NRF24L01 + ST25R3916 NFC

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-P4 |
| Flash | 16MB |
| 协处理器 | ESP32-C6-MINI-1U（4MB PSRAM） |
| 屏幕（TFT版） | 4.05 英寸 MIPI TFT (540×1168)，HI8561 |
| 屏幕（AMOLED版） | 4.1 英寸 MIPI AMOLED (568×1232)，RM69A10 |
| 触摸 | GT9895 / 兼容触控芯片，10 点电容触控 |
| 摄像头 | OV2710 (MIPI) |
| IMU | ICM20948 (I²C) |
| LoRa | SX1262 (HPD16A, SPI) |
| GPS | L76K (UART) |
| RTC | PCF8563 (I²C) |
| 音频 | ES8311 + NS4150B + 麦克风 |
| 振动 | AW86224AFCR (I²C) |
| 充电 | LGS4056H（支持 NTC 温度检测） |
| 电量监测 | BQ27220 (I²C) |
| IO 扩展 | XL9535 (I²C) |
| 无线 | Wi-Fi 6 + 蓝牙 5.3（通过 ESP32-C6） |
| USB | 1 × TYPE-C |

## 引脚图

T-Display-P4 有 AMOLED、TFT 两个版本：

#### AMOLED 版本

<img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-amoled.jpg" alt="T-Display-P4 AMOLED 引脚图" width=100%>

#### TFT 版本

<img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-tft.jpg" alt="T-Display-P4 TFT 引脚图" width=100%>

引脚定义请参考配置文件：
- [t_display_p4_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_config.h)
- [t_display_p4_keyboard_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_keyboard_config.h)

## 尺寸图

## 原理图

* [T-Display-P4 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-P4)

## 数据手册

* [ESP32-P4 Datasheet](https://www.espressif.com/en/support/documents/technical-documents)
* [ESP32-C6-MINI-1U Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6-mini-1_mini-1u_datasheet_en.pdf)
* [SX1262 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/DS_SX1261-2_V2_1.pdf)
* [ES8311 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ES8311.pdf)
* [ICM20948 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ICM20948.pdf)
* [BQ27220 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/bq27220_en.pdf)
* [L76K Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/L76KB-A58.pdf)
* [PCF8563 Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/PCF8563.pdf)

## 软件开发

* [T-Display-P4 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Display-P4)

### 依赖库

* [lvgl 8.3.9](https://github.com/lvgl/lvgl)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## 常见问题

* **Q. 看了教程还是不会搭建编程环境怎么办？**  
  A. 参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 为什么板子一直烧录失败？**  
  A. 请按住 "BOOT" 按键重新下载程序。

* **Q. 使用出厂固件时找不到 GPS 定位？**  
  A. 确保设备在室外或信号良好处测试，并烧录最新固件。

* **Q. 关机无法充电或续航严重缩水？**  
  A. 出厂固件最多使用 3-5 小时，未加入睡眠功能。参考[睡眠示例](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/deep_sleep)添加深度睡眠。

* **Q. OLED 屏幕出现波浪纹？**  
  A. 若低电量时波纹更明显，基本与电池相关；若电量充足仍出现，需检查屏幕供电回路。

* **Q. 屏幕上出现很多 `init fail` 初始化失败提示？**  
  A. 通常是侧边 QWIIC / 扩展接口连接器没有插好导致外设初始化失败。请先断电，检查连接器是否完全插入、是否偏斜或松动，再重新上电测试。

  <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-qwiic-connector.png" alt="T-Display P4 QWIIC 连接器检查位置" width=100%>

* **Q. 关于天线接口与 GPS 定位问题？**  
  A. 当前 SX1262 版本外壳上的两个天线接口只有一个有接线，只能用一个天线接口。

* **Q. 电量显示不准？**  
  A. 在固件中设置 `set_design_capacity` 参数为 1000mAh，然后完成满电→自然放电至关机→再充满电的循环，电量芯片会自动校准。

* **Q. ESP-IDF 构建时报 `LimitOverrunError`？**  
  A. 这是 ESP-IDF v5.4~v5.5 的已知 bug，修改 `esp-idf-v5.x\tools\idf_py_actions\tools.py` 第 351 行，将 `limit=1024 * 256` 改为 `limit=1024 * 512`。

## 功耗测试

| 模式 | 电流 |
| :-- | :-- |
| Deep Sleep | 平均 1.2mA |

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-P4_V1.0 | 2025-06-13 | 初始版本 |
| T-Display-P4-Keyboard_V1.0 | 2025-09-12 | 键盘扩展板初始版本 |
