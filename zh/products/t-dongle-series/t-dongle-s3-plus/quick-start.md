---
title: 快速开始
show_source: false
---

# T-Dongle-S3-Plus 快速开始

## 开发环境

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

## PlatformIO

1. 安装 VS Code 和 PlatformIO IDE
2. 打开 `T-Dongle-S3` 仓库
3. 在 `platformio.ini` 中选择 Plus 对应环境和示例
4. 只保留一个需要运行的 `src_dir = xxxx` 示例路径
5. 点击 **Build** 编译，插入设备后点击 **Upload** 上传

## Arduino IDE

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240MHz (WiFi)** |
| Flash Mode | **QIO 80MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> **注意：** T-Dongle-S3-Plus 带 8MB OPI PSRAM，Arduino IDE 中需要将 PSRAM 设置为 **OPI PSRAM**。

## 下载模式

如果上传失败，按住 **BOOT** 键并插入电脑 USB 口，使设备进入下载模式后再上传。烧录完成后重新插拔设备，正常启动时不要按住 BOOT。

## 引脚说明

| 名称 | GPIO |
| --- | --- |
| RGB DIN | GPIO40 |
| RGB CLK | GPIO39 |
| SDMMC D0 | GPIO14 |
| SDMMC D1 | GPIO17 |
| SDMMC D2 | GPIO21 |
| SDMMC D3 | GPIO18 |
| SDMMC CLK | GPIO12 |
| SDMMC CMD | GPIO16 |
| Button | GPIO0 |
| QWIIC TX | GPIO43 |
| QWIIC RX | GPIO44 |
| PDM CLK | GPIO9 |
| PDM DATA | GPIO8 |
| IR | GPIO7 |
| I2C SDA（仅加密版本） | GPIO11 |
| I2C SCL（仅加密版本） | GPIO10 |

## QWIIC

QWIIC 接口默认配置为串口功能。如需作为 I2C 使用，需要为外接传感器添加上拉电阻。

## 加密芯片说明

加密版本可选 ATECC508A。为避免芯片被锁定，出厂时仅进行 I2C 探测确认设备响应，不会对 ATECC508A 进行配置或读写。配置后芯片会按照其固有配置进入锁定状态，操作前请确认理解相关流程。
