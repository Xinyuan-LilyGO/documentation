---
title: 快速开始
show_source: false
---

# T-Dongle-S3 快速开始

## 开发环境

T-Dongle-S3 支持 PlatformIO 和 Arduino IDE。项目示例以官方仓库为准：

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新 | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| FastLED | 最新 | [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

## PlatformIO

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 打开 `T-Dongle-S3` 项目目录
3. 在 `platformio.ini` 中启用 `default_envs = T-Dongle-S3`
4. 只保留一个需要运行的 `src_dir = xxxx` 示例路径
5. 点击 **Build** 编译，将 T-Dongle-S3 插入电脑 USB 口，点击 **Upload** 上传

## Arduino IDE

### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE -> **文件** -> **首选项**
2. 在「附加开发板管理器网址」中添加：

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

3. 前往 **工具** -> **开发板** -> **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems 3.3.0 或更高版本**

### 2. 安装依赖库

将项目 `lib` 目录下的所有文件夹复制到 Arduino Sketchbook 的 libraries 目录。

### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240MHz (WiFi)** |
| Core Debug Level | **None** |
| USB DFU On Boot | **Disabled** |
| Erase All Flash Before Sketch Upload | **Disabled** |
| Flash Mode | **QIO 80MHz** |
| Flash Size | **16MB (128Mb)** |
| Arduino Runs On | **Core1** |
| USB Firmware MSC On Boot | **Disabled** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Disabled** |
| Programmer | **Esptool** |

> **注意：** T-Dongle-S3 没有 PSRAM，Arduino IDE 中必须将 PSRAM 设置为 **Disabled**。

### 4. USB 示例

运行示例名称中包含 `USB` 的程序时，将 **USB Mode** 改为 **USB-OTG (TinyUSB)**。

### 5. 上传

将 T-Dongle-S3 插入电脑 USB 口，打开示例并点击「上传」。如果上传失败，按住 **BOOT** 键并插入电脑 USB 口，使设备进入下载模式后再上传。烧录完成后重新插拔设备，正常启动时不要按住 BOOT。

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `factory` | 出厂测试 |
| `hello_world` | 基础串口输出 |
| `lvgl_test` | LVGL 显示测试 |
| `sd` | TF 卡读写 |
| `qwiic` | QWIIC 串口示例 |

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

## APA102 RGB LED

```cpp
#include <FastLED.h>

#define LED_DI  40
#define LED_CI  39
#define NUM_LEDS 1

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<APA102, LED_DI, LED_CI, BGR>(leds, NUM_LEDS);
    FastLED.setBrightness(50);
}

void loop() {
    leds[0] = CRGB::Red;   FastLED.show(); delay(500);
    leds[0] = CRGB::Green; FastLED.show(); delay(500);
    leds[0] = CRGB::Blue;  FastLED.show(); delay(500);
}
```

## LVGL

T-Dongle-S3 搭载 0.96 英寸 **ST7735 SPI 彩色屏**，分辨率为 160 × 80。

### `lv_conf.h` 关键配置

```c
#define LV_COLOR_DEPTH  16
#define LV_HOR_RES_MAX  160
#define LV_VER_RES_MAX  80
```

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT** 键并插入电脑 USB 口，使设备进入下载模式后再上传。

**Q：为什么 PSRAM 不能启用？**  
A：T-Dongle-S3 硬件没有 PSRAM，Arduino IDE 中应设置为 **Disabled**。

**Q：QWIIC 可以直接作为 I2C 使用吗？**  
A：QWIIC 默认配置为串口功能。如需作为 I2C 使用，需要为外接传感器添加上拉电阻。
