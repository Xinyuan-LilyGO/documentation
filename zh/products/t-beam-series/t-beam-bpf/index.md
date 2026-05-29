---
title: T-Beam-BPF
show_source: false
tags: ESP32-S3, LoRa, SX1278, BPF, GPS, OLED, AXP2101, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-beam" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-1.jpg', alt: 'T-Beam-BPF 正面图' },
  { src: '/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-2.jpg', alt: 'T-Beam-BPF 背面图' },
]" />

## 概述

LILYGO T-Beam-BPF 是 T-Beam 系列的特殊变体，集成了**带通滤波器（BPF）**，专为 **144–148 MHz VHF 频段** LoRa 通信优化，可有效抑制带外干扰，提升接收灵敏度。基于 **ESP32-S3** 双核 LX7，配备 **SX1278 TCXO LoRa** 模块、**0.96 英寸 SH1106 OLED**、L76K GPS 模块、**AXP2101 电源管理芯片**和 18650 电池座。适用于业余无线电、APRS 追踪及强干扰环境下的 LoRa 通信。

### 使用注意事项

1. 首次插入电池时设备不会上电，因为板载 BMS 处于出厂运输模式。需插入 USB-C 激活设备电源。若拔出电池后重新插入，需重复此步骤。
2. 发射前请务必连接天线，否则容易损坏 RF 模块。

### 功能框图

![T-Beam-BPF 功能框图](/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-block-diagram.jpg)

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series) | ✓ | | LoRa、GPS、OLED、PMU 示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展，安装完成后重启 VS Code
3. 通过 **文件 → 打开文件夹** 打开 `LilyGo-LoRa-Series` 项目目录
4. 等待第三方依赖库安装完成
5. 打开 `platformio.ini`，在 `default_envs` 中取消注释 T-Beam-BPF 环境，并取消注释对应的 `src_dir` 行
6. 点击 **✓** 编译，通过 USB-C 连接后点击 **→** 上传
7. 点击插头图标监控串口输出

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 将 `lib` 目录下所有文件夹复制到 Arduino `Sketchbook` 目录：
   - Windows：`C:\Users\{用户名}\Documents\Arduino`
   - macOS：`/Users/{用户名}/Documents/Arduino`
   - Linux：`/home/{用户名}/Arduino`
4. 从 `LilyGo-LoRa-Series/examples/` 打开对应示例
5. 在 **工具 → 开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| Programmer | **Esptool** |

6. 在 `utilities.h` 中取消注释 `#define T_BEAM_S3_BPF`
7. 点击 **上传**

### 开发平台

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## 相关视频

<!-- 产品宣传视频和教程视频。-->

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi + 蓝牙 5.0
- SX1278 TCXO LoRa，内置带通滤波器（144–148 MHz VHF）
- 提升信号选择性，有效抑制带外干扰
- 0.96 英寸 SH1106 OLED（128×64，I2C）
- L76K GPS 模块，支持定位追踪
- AXP2101 电源管理
- 18650 电池座，支持充电
- USB-C 供电与烧录

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3，双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB（OPI） |
| 无线 | Wi-Fi 2.4 GHz 802.11 b/g/n，蓝牙 5.0 |
| LoRa | SX1278 TCXO + BPF，144–148 MHz |
| 显示屏 | 0.96 英寸 SH1106 OLED，128×64，I2C |
| GPS | L76K |
| 电源管理 | AXP2101 |
| 电池 | 18650 锂离子电池座 |
| USB | 1 × USB-C |

![T-Beam-BPF 规格参数](/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-info.jpg)

## 引脚图

![T-Beam-BPF 引脚图](/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-pinout.jpg)

### 引脚映射

| 名称 | GPIO | 可用 |
| ---- | ---- | ---- |
| UART1 TX | 43（外部 QWIIC 接口） | ✅ |
| UART1 RX | 44（外部 QWIIC 接口） | ✅ |
| SDA | 8（外部 QWIIC 接口） | ❌ |
| SCL | 9（外部 QWIIC 接口） | ❌ |
| OLED（SH1106）SDA | 共享 I2C 总线 | ❌ |
| OLED（SH1106）SCL | 共享 I2C 总线 | ❌ |
| SPI MOSI | 11 | ❌ |
| SPI MISO | 13 | ❌ |
| SPI SCK | 12 | ❌ |
| SD CS | 10 | ❌ |
| SD MOSI | 共享 SPI 总线 | ❌ |
| SD MISO | 共享 SPI 总线 | ❌ |
| SD SCK | 共享 SPI 总线 | ❌ |
| GNSS（L76K）TX | 6 | ❌ |
| GNSS（L76K）RX | 5 | ❌ |
| GNSS（L76K）PPS | 7 | ❌ |
| LoRa（SX1278）SCK | 共享 SPI 总线 | ❌ |
| LoRa（SX1278）MISO | 共享 SPI 总线 | ❌ |
| LoRa（SX1278）MOSI | 共享 SPI 总线 | ❌ |
| LoRa（SX1278）RESET | 18 | ❌ |
| LoRa（SX1278）DIO0 | 14 | ❌ |
| LoRa（SX1278）DIO1 | 21 | ❌ |
| LoRa（SX1278）CS | 1 | ❌ |
| LoRa（SX1278）LDO EN | 16 | ❌ |
| LoRa（SX1278）Ctrl | 39 | ❌ |
| 按键1（BOOT） | 0 | ❌ |
| 按键2 | 3 | ❌ |
| PMU（AXP2101）IRQ | 4 | ❌ |
| PMU（AXP2101）SDA | 共享 I2C 总线 | ❌ |
| PMU（AXP2101）SCL | 共享 I2C 总线 | ❌ |

> **注意：** LDO EN 为射频模块电源控制引脚——高电平开启，低电平关闭。
> LoRa Ctrl 为内部 LNA 电源控制——接收时置高，发射或休眠时置低。

### I2C 设备地址

| 设备 | 7位地址 | 共享总线 |
| ---- | ------- | -------- |
| OLED SH1106 | 0x3C | ✅ |
| PMU AXP2101 | 0x34 | ✅ |

## 电气参数

| 特性 | 详情 |
| ---- | ---- |
| USB-C 输入电压 | 3.9 V – 6 V |
| 充电电流 | 0 – 1024 mA（可编程） |
| 电池电压 | 3.7 V |

> **注意：** 本板集成 BMS，首次连接电池后需插入 USB-C 激活。若断开电池后重新连接，需重复激活步骤。

### 电源管理通道

| 通道 | 外设 |
| ---- | ---- |
| DC1 | ESP32-S3 |
| DC2 | 未使用 |
| DC3 | 外部排针 |
| DC4 | 未使用 |
| DC5 | 外部排针 |
| LDO1（VRTC） | 未使用 |
| ALDO1 | 外部排针 |
| ALDO2 | SD 卡 |
| ALDO3 | 外部排针 |
| ALDO4 | GNSS |
| BLDO1 | 未使用 |
| BLDO2 | 外部排针 |
| DLDO1 | 未使用 |
| CPUSLDO | 未使用 |
| VBACKUP | 未使用 |

## 按键说明

| 按键 | 功能 |
| ---- | ---- |
| IO3 | 可自定义 |
| PWR | PMU 按键——按下开机；长按 6 秒关机 |
| BOOT | 启动模式 / 可自定义 |
| RST | 复位 |

## LED 说明

- **CHG LED**：充电时常亮，充满后熄灭。可通过程序控制。
- **PPS LED**：连接至 GPS PPS 引脚，PPS 脉冲到达时闪烁，无法通过程序关闭。

## RF 参数

| 特性 | 详情 |
| ---- | ---- |
| RF 模块 | SX1278 TCXO（XP02P181T） |
| 频率范围 | 144–148 MHz |
| 传输速率（LoRa） | 0.018 K–37.5 Kbps |
| 传输速率（FSK） | 1.2 K–300 Kbps |
| 调制方式 | FSK、GFSK、MSK、GMSK、LoRa、OOK |

> **RF 注意事项：**
> 1. 测试或使用时，请先连接天线再上电发射。
> 2. 发射/接收前先切换 RF 开关管通道（SX127X RXTX/RFMOD：高电平切换至 TX，低电平切换至 RX）。
> 3. 输出功率控制在 +10 dBm，不超过 +12 dBm。
> 4. 休眠时若 TCXO_EN 为高电平，TCXO 晶振仍消耗约 2.5 mA。将 TCXO_EN 置低可实现真正休眠，但 SX127X 配置将丢失，唤醒后需重新初始化。

## 尺寸图

<!-- PCB 及外壳尺寸图。-->
![T-Beam-BPF 尺寸图](/products/t-beam-series/t-beam-bpf/index/image/t-beam-bpf-3.jpg)

## 原理图

* [LilyGo_TBeam_BPF.pdf](/products/t-beam-series/t-beam-bpf/index/hardware/LilyGo_TBeam_BPF.pdf)
* [LilyGo-LoRa-Series 硬件文件](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master/schematic)

## 数据手册

* [ESP32-S3 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1278 数据手册](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1278)

## 软件库

* [LilyGo-LoRa-Series GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## 常见问题

* **Q. BPF 带通滤波器的作用？**
  A. 内置滤波器将接收频段限制在 144–148 MHz VHF，有效减少带外干扰，提升在密集 RF 环境下的接收灵敏度。

* **Q. 可以用于 APRS 吗？**
  A. 可以。144 MHz VHF 频段是大多数地区的 APRS 标准频率，BPF 专为此应用设计。

* **Q. 插入电池后设备不上电？**
  A. 板载 BMS 处于出厂运输模式，需插入 USB-C 激活。若拔出电池后重新插入，需重复此步骤。

* **Q. 如何启用 PSRAM？**
  A. 在 Arduino IDE 中将 PSRAM 设置为 **OPI PSRAM**。在 ESP-IDF 中通过 menuconfig 启用 SPIRAM 支持。

## 版本历史

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初始版本 |
