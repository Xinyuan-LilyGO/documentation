---
title: 快速开始
show_source: false
---

# T-Dongle-S3-Dual 快速开始

## 开发环境

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

## PlatformIO

1. 安装 VS Code 和 PlatformIO IDE
2. 打开 `T-Dongle-S3` 仓库
3. 在 `platformio.ini` 中选择 Dual 对应环境和示例
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
| PSRAM | **Disabled** |

> **注意：** T-Dongle-S3-Dual 无 PSRAM，Arduino IDE 中必须将 PSRAM 设置为 **Disabled**。

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
### ESP Core 2

| 名称 | GPIO |
| --- | --- |
| Core 2 RGB DIN | GPIO40 |
| Core 2 RGB CLK | GPIO39 |
