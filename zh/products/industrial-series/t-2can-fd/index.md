---
title: T-2Can-FD
show_source: false
tags: CAN FD, ESP32-S3, MCP2518
---

# {{ $frontmatter.title }} <ShopLink href="" />

<ImageGallery :columns="3" :images="[
  { src: '/products/industrial-series/t-2can-fd/index/image/t-2can-fd-1.jpg', alt: 'T-2Can-Fd 正面' },
  { src: '/products/industrial-series/t-2can-fd/index/image/t-2can-fd-2.jpg', alt: 'T-2Can-Fd 背面' },
  { src: '/products/industrial-series/t-2can-fd/index/image/t-2can-fd-pin.jpg', alt: 'T-2Can-Fd 引脚图' }
]" />

## 概述

T-2Can-Fd 是一款基于 ESP32-S3 的双 CAN 总线开发板。提供两路独立 CAN 总线：**CAN 总线 1** 由外置 **MCP2518FD** 控制器（SPI，支持 CAN-FD，兼容 CAN 2.0）驱动；**CAN 总线 2** 使用 **ESP32-S3 内置 TWAI** 控制器（CAN 2.0B）。适用于工业通信、车载诊断、机器人控制等需要高可靠性和高数据吞吐量的 CAN 总线场景。

> **使用注意事项：**
> 1. 烧录固件时若失败，请按住 `BOOT-0` 按键再尝试下载。
> 2. 使用 USB 串口调试时，默认配置 USB 作为 UART0 输出；如需使用外部 Uart 接口，请修改 CDC 设置（见 FAQ）。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 说明 |
| :--: | :----------------: | :--: |
| [can](https://github.com/Xinyuan-LilyGO/T-2Can/tree/main/examples/can) | ✅ | CAN 通信示例（需适配 CAN FD） |
| [original_test](https://github.com/Xinyuan-LilyGO/T-2Can/tree/main/examples/original_test) | ✅ | 出厂测试程序 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展中搜索并安装 **PlatformIO IDE**
3. 克隆或下载项目仓库：`https://github.com/Xinyuan-LilyGO/T-2Can`
4. 在 VS Code 中打开项目文件夹
5. 打开 `platformio.ini`，在 `[platformio]` 目录下取消注释需要烧录的示例（`default_envs = xxx`，选择 T-2Can-Fd 对应配置）
6. 点击左下角 **✓** 编译
7. 连接开发板，点击 **→** 上传

### Arduino IDE

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 ESP32 开发板支持：工具 → 开发板 → 开发板管理器 → 搜索 `esp32` 并安装 `Espressif Systems`
3. 选择开发板：**ESP32S3 Dev Module**
4. 将项目 `libraries` 目录下的所有库复制到 Arduino 库目录（`Sketchbook location/libraries`）
5. 打开示例项目（`examples` 目录下的 `.ino` 文件）
6. 在 **工具** 菜单中选择如下配置：

| Arduino IDE  (ESP32-S3) | Value |
| :--------------------------: | :-: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

7. 选择正确的端口，点击 **上传**

### 固件烧录（使用烧录工具）

1. 打开项目 `tools` 目录下的 ESP32 烧录工具
2. 选择正确的芯片和烧录方式，点击 **OK**
3. 按步骤选择 firmware 文件（位于 `firmware/` 目录），设置地址，选择端口，点击烧录
4. 若烧录失败，请按住 **BOOT-0** 按键再尝试

## 相关视频

> 暂无视频教程，欢迎贡献。

## 主要特性

- 主控：ESP32-S3-WROOM-1U (16 MB Flash + 8 MB PSRAM)
- CAN 总线 1：外置 **MCP2518FD** 控制器（SPI，支持 CAN-FD，兼容 CAN 2.0）
- CAN 总线 2：ESP32-S3 内置 **TWAI** 控制器（CAN 2.0B）
- 支持 Wi-Fi + Bluetooth 5.0 LE
- USB 供电，板载 5V 降压电路
- 提供 Uart 扩展接口（可通过配置切换 CDC）
- 紧凑型设计，适用于车载、工业现场总线

## 产品参数

| 特性 | 规格 |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1U |
| Flash | 16 MB |
| PSRAM | 8 MB |
| CAN FD 控制器 | MCP2518FD（SPI，支持 CAN-FD） |
| CAN 总线 2 | ESP32-S3 内置 TWAI（CAN 2.0B） |
| 协议 | CAN FD (灵活数据速率) |
| 接口 | SPI |
| 无线 | Wi-Fi 802.11 b/g/n + Bluetooth 5.0 LE |
| 供电 | USB 5V |
| 尺寸 | 待补充 |

## 引脚图

引脚定义请参考配置文件：  
[pin_config.h](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/libraries/private_library/pin_config.h)

> 具体 GPIO 映射与 SPI 片选、中断引脚等详见上述头文件。

### 主要接口说明

| 接口 | 说明 |
| :--: | :--: |
| CAN1 | MCP2518FD CAN-FD 控制器，SPI 片选 CS1 |
| CAN2 | ESP32-S3 内置 TWAI 控制器 |
| USB | 默认作为 UART0 调试输出 |
| Uart 接口 | 外部 UART0（需配置 CDC 禁用） |
| BOOT-0 | 下载模式按键 |
| RST | 复位按键 |

## 尺寸图

<img src="/products/industrial-series/t-2can-fd/index/image/t-2can-fd-3.jpg" alt="T-2Can-Fd 尺寸图" width="100%" />

## 原理图

- [T-2Can-Fd V1.0 原理图 PDF](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/project/T-2Can-Fd_V1.0.pdf)

## 数据手册

- [MCP2518 数据手册](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/docs/MCP2518FDT-E-SL.pdf)
- [ESP32-S3-WROOM-1U 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf)

## 软件开发

- [T-2Can GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-2Can)
- [Longan_CANFD 库](https://github.com/Longan-Labs/Longan_CANFD)（用于 MCP2518）

## 常见问题

**Q：看了以上教程还是不会搭建编程环境怎么办？**  
A：可参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 获取更详细的入门指导。

**Q：打开 Arduino IDE 时提醒是否升级库文件，应该升级吗？**  
A：选择不升级。不同版本的库可能不兼容，建议使用项目自带的库版本。

**Q：为什么板上的 Uart 接口没有串口数据输出？**  
A：项目默认将 USB 作为 UART0 输出。若要使用外部 Uart 接口：
- PlatformIO 用户：修改 `platformio.ini`，将 `build_flags = -DARDUINO_USB_CDC_ON_BOOT=true` 改为 `false`。
- Arduino 用户：工具菜单中将 USB CDC On Boot 设为 **Disabled**。

**Q：为什么板子一直烧录失败？**  
A：请按住 **BOOT-0** 按键同时重新下载程序。

**Q：T-2Can-Fd 与 T-2Can 程序是否兼容？**  
A：不兼容。T-2Can-Fd 的 CAN 总线 1 使用 MCP2518FD 库，CAN 总线 2 使用 ESP32-S3 内置 TWAI，需使用对应的示例程序。

## 版本迭代

| 版本 | 发布日期 | 更新说明 |
| :--: | :------: | :--: |
| T-2Can-Fd V1.0 | 2026-04-10 | 初始版本，MCP2518FD + ESP32-S3 TWAI |