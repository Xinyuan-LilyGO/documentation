---
title: LILYGO T-Deck Plus
show_source: false
tags: ESP32-S3, LoRa, GPS, Trackball, Keyboard
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-deck" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-deck-series/t-deck-plus/assets/t-deck-plus-1.jpg', alt: 'T-Deck Plus 正面图' },
  { src: '/products/t-deck-series/t-deck-plus/assets/t-deck-plus-2.jpg', alt: 'T-Deck Plus 实物图' },
  { src: '/products/t-deck-series/t-deck-plus/assets/t-deck-plus-zh.jpg', alt: 'T-Deck Plus 引脚图' }
]" />

## 概述

LILYGO T-Deck Plus 是 T-Deck 的升级版本，基于 ESP32-S3 主控，搭载 2.8 英寸 ST7789 LCD（320×240）、轨迹球导航模块、物理键盘（I²C）、SX1262 LoRa、MIA-M10Q GNSS、ES7210 麦克风阵列和 TF 卡，支持 2000mAh 锂电池供电。

> **注意：** T-Deck-Plus 的 Grove 接口引脚已分配给 GPS 模块，Grove 接口不可使用。T-Deck 版本无触摸屏，使用轨迹球导航代替。

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | 描述 |
| :------ | :----------------: | :---------- |
| [UnitTest](https://github.com/Xinyuan-LilyGO/T-Deck/tree/master/examples/UnitTest) | ✓ | 出厂硬件单元测试 |
| [Keyboard_T_Deck_Master](https://github.com/Xinyuan-LilyGO/T-Deck/tree/master/examples/Keyboard_T_Deck_Master) | ✓ | 读取键盘输入 |
| [Keyboard_ESP32C3](https://github.com/Xinyuan-LilyGO/T-Deck/tree/master/examples/Keyboard_ESP32C3) | ✓ | ESP32-C3 键盘 I2C 从机 |
| [Microphone](https://github.com/Xinyuan-LilyGO/T-Deck/tree/master/examples/Microphone) | ✓ | 噪声检测示例 |
| [Touchpad](https://github.com/Xinyuan-LilyGO/T-Deck/tree/master/examples/Touchpad) | ✓ | 读取轨迹球坐标 |
| [GPSShield](https://github.com/Xinyuan-LilyGO/T-Deck/tree/master/examples/GPSShield) | ✓ | GPS 扩展板示例 |

> 如果启用麦克风，板子中间的 BOOT 按键（GPIO0）将不可用。

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 并安装 "PlatformIO IDE" 扩展，安装后重启。
2. 从 GitHub 下载 [T-Deck 项目代码](https://github.com/Xinyuan-LilyGO/T-Deck)，在 VS Code 中打开。
3. 在 `platformio.ini` 中取消注释选择所需示例，点击 (✔) 编译，连接设备后点击 (→) 烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 和 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)。
2. 将 `lib` 目录中的所有文件夹复制到 Arduino 库目录（`~/Documents/Arduino/libraries`）。
3. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Mode | **UART0/Hardware CDC** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

4. 选择正确的端口，上传程序。若无法上传，请按住 BOOT（轨迹球中间按键）后插入 USB，再点击上传，上传完成后按 RST 键退出下载模式。

### 开发平台

1. [Platform IO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 视频

## 主要特点

- ESP32-S3FN16R8：16MB Flash，8MB OPI PSRAM，Wi-Fi + 蓝牙 5.0
- 2.8 英寸 ST7789 LCD（320×240），轨迹球导航
- SX1262 LoRa（433MHz~915MHz 可选），MIA-M10Q GNSS
- ES7210 音频编解码器 + MSM381A3729H9CP 麦克风阵列
- 2000mAh 锂聚合物电池，物理键盘（I²C），TF 卡

## 产品参数

<img src="/products/t-deck-series/t-deck-plus/assets/t-deck-info-zh.jpg" alt="T-Deck Plus 概述图" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN16R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB (OPI) |
| LoRa | SX1262（433MHz~915MHz 可选） |
| GNSS | MIA-M10Q |
| 屏幕 | 2.8 英寸 ST7789 LCD (320×240) |
| 控制方式 | 轨迹球导航模块 |
| 输入 | 物理键盘（I²C） |
| 音频 | ES7210 + MSM381A3729H9CP 麦克风阵列 |
| 电池 | 2000mAh 锂聚合物电池 |
| 存储 | TF 卡 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 (LE) |
| USB | 1 × USB Type-C |
| IO 扩展 | 2mm 间距 6pin 接口 |
| 扩展接口 | GPS 扩展接口 + 2 × JST GH 1.25mm + 4pin 接口 |
| 按键 | RST + BOOT（轨迹球） |
| 开关 | 电源开关 |
| 定位孔 | 2mm 定位孔 |
| 尺寸 | 100×68×11mm |

## 引脚图

<img src="/products/t-deck-series/t-deck-plus/assets/t-deck-plus-zh.jpg" alt="T-Deck Plus 引脚图" width=100%>

### 引脚映射

```c
#define BOARD_POWERON       10  // 外设电源控制，使用外设时需置 HIGH

#define BOARD_I2S_WS        5
#define BOARD_I2S_BCK       7
#define BOARD_I2S_DOUT      6

#define BOARD_I2C_SDA       18
#define BOARD_I2C_SCL       8

#define BOARD_BAT_ADC       4

#define BOARD_TOUCH_INT     16
#define BOARD_KEYBOARD_INT  46

#define BOARD_SDCARD_CS     39
#define BOARD_TFT_CS        12
#define RADIO_CS_PIN        9

#define BOARD_TFT_DC        11
#define BOARD_TFT_BACKLIGHT 42

#define BOARD_SPI_MOSI      41
#define BOARD_SPI_MISO      38
#define BOARD_SPI_SCK       40

#define BOARD_TBOX_G02      2
#define BOARD_TBOX_G01      3
#define BOARD_TBOX_G04      1
#define BOARD_TBOX_G03      15

#define BOARD_ES7210_MCLK   48
#define BOARD_ES7210_LRCK   21
#define BOARD_ES7210_SCK    47
#define BOARD_ES7210_DIN    14

#define RADIO_BUSY_PIN      13
#define RADIO_RST_PIN       17
#define RADIO_DIO1_PIN      45

#define BOARD_BOOT_PIN      0

#define BOARD_GPS_TX_PIN    43
#define BOARD_GPS_RX_PIN    44
```

## 尺寸图

## 原理图

* [T-Deck 原理图](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf)

## 数据手册

* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [T-Deck ANT 868-915MHz](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20868-915MHZ.pdf.pdf)
* [T-Deck ANT 433MHz](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20433MHZ.pdf)

## 软件开发

* [T-Deck GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Deck)

### 依赖库

* [AceButton](https://github.com/bxparks/AceButton)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TouchLib](https://github.com/mmMicky/TouchLib)
* [LVGL 8.4.0](https://github.com/lvgl/lvgl/tree/v8.4.0)

## 常见问题

* **Q. T-Deck Plus 是否有触摸屏功能？**  
  A. T-Deck Plus 没有触摸屏，使用轨迹球导航模块替代触摸操作。

* **Q. Grove 接口可以使用吗？**  
  A. T-Deck-Plus 的 Grove 接口引脚已分配给 GPS 模块，Grove 接口不可使用。

* **Q. 为什么板子一直烧录失败？**  
  A. 按住轨迹球中间按键（BOOT），然后插入 USB，此时芯片进入下载模式，再点击上传。上传完成后按 RST 键退出下载模式。

* **Q. 为什么 Arduino IDE 提示升级库文件？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Deck-Plus V1.0 | — | 初始版本 |
