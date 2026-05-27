---
title: T-SIM7080-S3
show_source: false
tags: ESP32-S3, SIM7080G, NB-IoT, Cat-M1, GNSS, GPS, IoT, LTE
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-sim7080-s3" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-sim-series/t-sim7080-s3/index/image/t-sim7080-s3-1.jpg', alt: 'T-SIM7080-S3 正面' },
  { src: '/products/t-sim-series/t-sim7080-s3/index/image/t-sim7080-s3-2.jpg', alt: 'T-SIM7080-S3 背面' },
]" />

## 概述

LILYGO T-SIM7080-S3 是一款紧凑型物联网开发板，将 **ESP32-S3** 双核 LX7 处理器与 **SIM7080G** 多频 Cat-M / NB-IoT 模块集于一身。板载 Wi-Fi 4、蓝牙 5.0 LE 及可选 GNSS 定位功能，适用于资产追踪、智能抄表、远程传感器节点等低功耗广域网（LPWAN）应用场景。开发板集成了带短路和过载保护的 PMU 电源管理芯片、18650 电池座、太阳能充电输入（4.4 V–6 V）、TF 卡槽和 Nano SIM 卡槽。提供两个 USB 接口：USB-C 用于 ESP32-S3 程序烧录，Micro-USB 专用于 SIM7080G 固件升级。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 说明 |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-SIM7080G](https://github.com/Xinyuan-LilyGO/LilyGo-T-SIM7080G) | ✓ | | NB-IoT、Cat-M、GPS、BLE5、深度睡眠示例 |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 中搜索并安装 **PlatformIO IDE** 扩展
3. 打开 `LilyGo-T-SIM7080G` 项目文件夹
4. 在 `platformio.ini` 中选择目标示例
5. 点击 **✓** 编译，通过 USB-C 连接后点击 **→** 上传

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 在 **工具** → **开发板** 中配置：

| Arduino IDE 设置 | 值 |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | 对应端口 |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

4. 点击 **上传**

### 开发平台

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

- ESP32-S3 双核 LX7 @ 240 MHz，Wi-Fi 4 + 蓝牙 5.0 LE
- SIM7080G 多频 Cat-M1 / NB-IoT 模块（全球频段）
- GNSS 定位（GPS，注意：Cat-M/NB 数据连接与 GPS 不可同时使用）
- 太阳能充电输入 4.4 V–6 V，支持离网部署
- 18650 电池座，板载 PMU（短路 + 过载保护）
- TF 卡槽 + Nano SIM 卡槽
- USB-C 烧录；Micro-USB 用于 SIM7080G 固件升级
- 16 MB Flash，8 MB PSRAM（Octal SPI，GPIO 35–37 已占用）

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | ESP32-S3 双核 LX7 @ 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB（Octal SPI） |
| 无线 | Wi-Fi 4（2.4 GHz 802.11 b/g/n），蓝牙 5.0 LE |
| 蜂窝 | SIM7080G — Cat-M1 / NB-IoT（多频全球） |
| GNSS | GPS（经由 SIM7080G，不可与蜂窝数据同时使用） |
| SIM | Nano SIM |
| 存储 | TF 卡槽 |
| 电源 | USB-C、18650 电池、太阳能输入 4.4 V–6 V |
| USB | USB-C（ESP32-S3）+ Micro-USB（SIM7080G 固件） |
| 重量 | <!-- placeholder --> |
| 外包装尺寸 | <!-- placeholder --> |

## 引脚图

<!-- GPIO 映射关系表。 -->

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

* [T-SIM7080G 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-T-SIM7080G/blob/master/schematic/T-SIM7080G_Schematic.pdf)

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

* [LilyGo-T-SIM7080G GitHub 仓库](https://github.com/Xinyuan-LilyGO/LilyGo-T-SIM7080G)

## 常见问题

- **SIM 卡未检测到：** 请在上电前插入 SIM 卡；SIM7080G 启动后热插卡将无法识别。
- **关闭设备：** 长按 PWRKEY 6 秒关机；按下 128 ms 开机。
- **GPIO 35–37 不可用：** 这些引脚已被 Octal SPI PSRAM 内部占用。

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
