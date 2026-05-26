---
title: T-Spe
show_source: false
tags: ESP32, Ethernet, RS485, Industrial, LAN8671
---

# {{ $frontmatter.title }} <ShopLink href="" />

<ImageGallery :columns="3" :images="[
  { src: '/products/industrial-series/t-spe/assets/t-spe-1.jpg', alt: 'T-Spe 正面' },
  { src: '/products/industrial-series/t-spe/assets/t-spe-2.jpg', alt: 'T-Spe 背面' },
  { src: '/products/industrial-series/t-spe/assets/t-spe-pin.jpg', alt: 'T-Spe 引脚图' }
]" />

## 概述

T-Spe 是一款专为工业多网络通信设计的紧凑型控制器板。它以乐鑫 **ESP32-WROVER-E** 为核心，同时板载 **Microchip LAN8671 10BASE-T1S 以太网 PHY** 和 **RS485 收发器**，将新兴的单对线以太网技术与经典的工业总线相结合。凭借 5–75V 超宽电压输入及无缝电源切换电路，T-Spe 可稳定部署在工厂自动化、车载系统、智能电网等严苛环境中，作为边缘计算节点或协议转换网关。

> **使用注意事项：**
> 1. 烧录固件时若失败，请按住 `BOOT` 按键再尝试下载。
> 2. 输入电压范围 5–75V，请勿超出范围以防损坏。

## 快速开始

### 示例支持

| 示例 | ESP-IDF v5.5.3 | 说明 |
| :--: | :------------: | :--: |
| [general_test](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/main/examples/general_test) | ✅ | 出厂示例 |
| [iperf_ethernet](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/main/examples/iperf_ethernet) | ✅ | 以太网性能测试 |
| [rs485](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/main/examples/rs485) | ✅ | RS485 通信示例 |
| [wifi](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/main/examples/wifi) | ✅ | Wi-Fi 示例 |
| [wifi_http_download_file](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/main/examples/wifi_http_download_file) | ✅ | HTTP 文件下载 |

### ESP-IDF (Visual Studio Code)

1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download)
2. 在 VS Code 扩展中搜索并安装 **ESP-IDF** 扩展
3. 克隆仓库（包含子模块）：
```bash
git clone --recursive https://github.com/Xinyuan-LilyGO/T-Spe.git
```
若已克隆但未带子模块，执行：
```bash
 git submodule update --init --recursive
```
4. 下载安装 [ESP-IDF v5.5.3](https://dl.espressif.cn/dl/esp-idf/?idf=4.4)，记录安装路径。
5. 打开 ESP-IDF extension 的“Configure ESP-IDF Extension”，选择 **USE EXISTING SETUP** → **Search ESP-IDF in system**，设置：
   - **ESP-IDF directory (IDF_PATH):** `你的安装路径\Espressif\frameworks\esp-idf-v5.5.3`
   - **ESP-IDF Tools directory (IDF_TOOLS_PATH):** `你的安装路径\Espressif`
   点击 **install** 完成框架安装。
6. 点击 VS Code 底部菜单栏的 **SDK Configuration Editor**，搜索 `Select the example to build`，选择要编译的 example，保存。
7. 点击底部菜单栏的 **Set Espressif device target**，选择 **ESP32**。
8. 点击 **Build Project**，等待完成后点击 **Select Flash Port**，最后点击 **Flash Project**。

### Firmware 烧录（使用烧录工具）

1. 打开项目 `tools` 目录下的 ESP32 烧录工具。
2. 选择正确的 chip 和烧录方式，点击 **OK**。
3. 按步骤操作：选择 firmware 文件（位于 `firmware/` 目录），设置 address，选择 port，点击烧录。
4. 若烧录失败，请按住 **BOOT** 按键再尝试烧录。

## 相关视频

> 暂无视频教程，欢迎贡献。

## 主要特性

- MCU：ESP32-WROVER-E 双核 LX6 @ 240 MHz
- 工业 Ethernet：Microchip LAN8671 10BASE-T1S PHY (RMII)
- 工业总线：RS485 transceiver (TD301D485H-A)，UART interface
- 超宽电压输入：5–75 V DC，集成 SY8513 buck converter
- 无缝电源切换电路，适用严苛工业环境
- 16 MB Flash + 8 MB PSRAM
- 支持 Wi-Fi + Bluetooth 双模无线通信
- 适用于工厂自动化、车载系统、智能电网等边缘计算与协议转换场景

## 产品参数

| 特性 | 规格 |
| :--: | :--: |
| MCU | ESP32-WROVER-E (dual-core LX6, 240 MHz) |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Ethernet PHY | Microchip LAN8671 (10BASE-T1S, RMII) |
| RS485 Module | TD301D485H-A (UART interface) |
| 输入电压 | 5 – 75 V DC |
| Buck Converter | SY8513 |
| Wireless | Wi-Fi 802.11 b/g/n + Bluetooth 4.2 BR/EDR/BLE |
| 尺寸 | 待补充 |

## 引脚图

<img src="/products/industrial-series/t-spe/assets/t-spe-pin.jpg" alt="T-Spe 引脚图" width="100%" />

Pin definitions 请参考配置文件：  
[t_spe_config.h](https://github.com/Xinyuan-LilyGO/lilygo_device_driver/blob/main/src/device/t_spe/t_spe_config.h)

> 具体 GPIO mapping 与外设对应关系详见上述 header file。

### 主要接口说明

| 接口 | 说明 |
| :--: | :--: |
| Ethernet | LAN8671 通过 RMII 连接 ESP32 |
| RS485 | 通过 UART 连接 ESP32 |
| 电源输入 | 5–75V 宽压输入，经 SY8513 降压 |
| BOOT 按键 | 用于下载模式及自定义功能 |
| RST 按键 | 复位 |

## 尺寸图

<img src="/products/industrial-series/t-spe/assets/t-spe-3.jpg" alt="T-Spe 尺寸图" width="100%" />

## 原理图

- [T-Spe V1.0 Schematic PDF](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/project/T-Spe_V1.0_202603131624.pdf)

## 数据手册

- [ESP32-WROVER-E Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-wrover-e_esp32-wrover-ie_datasheet_en.pdf)
- [LAN8671 Datasheet](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/project/docs/LAN8671C2T-E-U3B.pdf)
- [TD301D485H-A Datasheet](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/project/docs/TD301D485H-A.pdf)
- [SY8513 Datasheet](https://github.com/Xinyuan-LilyGO/T-Spe/tree/main/project/docs/DS_SY8513.pdf)

## 软件开发

- [T-Spe GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Spe)
- [Driver Library (lilygo_device_driver)](https://github.com/Xinyuan-LilyGO/lilygo_device_driver)
- [cpp_bus_driver (RS485 dependency)](https://github.com/Llgok/cpp_bus_driver)

## FAQ

**Q：看了以上教程还是不会搭建编程环境怎么办？**  
A：可参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 获取更详细的入门指导。

**Q：为什么板子一直烧录失败？**  
A：请按住 **BOOT** 按键同时重新下载 program，确保进入 download mode。

**Q：板子支持哪些开发框架？**  
A：目前官方支持 **ESP-IDF v5.5.3**，暂未提供 Arduino 或 PlatformIO examples，欢迎社区贡献。

## 版本迭代

| Version | Release Date | Update Description |
| :--: | :------: | :--: |
| T-Spe V1.0 | 2026-03-13 | Initial version |