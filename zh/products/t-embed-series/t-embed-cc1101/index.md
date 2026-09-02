---
title: LILYGO T-Embed CC1101
show_source: false
tags: ESP32-S3, CC1101, LoRa, NFC, TFT, Sub-GHz
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-embed" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-embed-series/t-embed-cc1101/index/image/t-embed-cc1101-1.jpg', alt: 'T-Embed CC1101 正面图' },
  { src: '/products/t-embed-series/t-embed-cc1101/index/image/t-embed-cc1101-2.jpg', alt: 'T-Embed CC1101 实物图' },
  { src: '/products/t-embed-series/t-embed-cc1101/index/image/t-embed-cc1101-zh.jpg', alt: 'T-Embed CC1101 引脚图' }
]" />

> 点这里切换到 [T-Embed-SI4732](../t-embed-si4732/) 版本

## 概述

LILYGO T-Embed CC1101 是一款基于 ESP32-S3 双核 LX7 处理器的高集成物联网开发板，专为多协议通信与智能硬件开发设计。板载 CC1101 Sub-GHz 模块、LoRa、PN532 NFC、红外遥控、Wi-Fi 6 与蓝牙 5.0，支持远程传感、智能家居控制与工业监控等复杂场景。配备 1.9 英寸 TFT 屏幕、旋转编码器、8 个可编程 RGB LED、麦克风与扬声器模块，并支持 TF 卡扩展存储，为开发者提供开箱即用、多场景适配的高效硬件平台。

## 快速开始

### 使用指南

在YouTube上有相关视频教程，请点击下面的链接观看：
[T-Embed-CC1101 使用指南](https://www.youtube.com/watch?v=U06XI1wtp4U)

### 示例支持

~~~
- ✅ bq25896_test : 电池管理测试，在串口中打印电池状态。
- ✅ cc1101_recv_irq ：无线接收测试，在串口中显示接收到的消息。
- ✅ cc1101_send_irq ：无线发送测试，在串口中显示发送的消息。
- ✅ display_test ：屏幕显示测试；
- ✅ encode_test ：编码器测试。
- ✅ infrared_recv_test: 红外接收
- ✅ infrared_send_test: 红外发送
- ✅ lvgl_test ：lvgl benchmark 和压力测试；
- ✅ pn532_test ：NFC测试，在串口中显示 IC 卡的信息。
- ✅ tf_card_test ：SD 卡测试，在串口中显示读取到的的文件名。
- ✅ record_test : 录制 15 秒钟的音频，并保存到 SD 卡中。
- ✅ voice_test : 扬声器测试，从SD卡读取音频。
- ✅ ws2812_test ：LED 灯测试；
~~~

### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2. 打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3. 在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4. 扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5. 打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32 Arduino"开发板下的开发板类型，选择的开发板类型由"platformio.ini"文件中以[env]目录下的"board = xxx"标头为准，如果没有对应的开发板，则需要自己手动添加项目文件夹下"board"目录下的开发板。
4. 打开菜单栏"文件"->"首选项"，找到"项目文件夹位置"这一栏，将项目目录下的"libraries"文件夹里的所有库文件连带文件夹复制粘贴到这个目录下的"libraries"里边。
5. 在"工具"菜单中选择正确的设置，如下表所示。

| Arduino IDE 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6. 选择正确的端口。
7. 点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 视频

## 主要特点

- ESP32-S3FN16R8 双核 LX7 @ 240 MHz，16 MB Flash，8 MB PSRAM，Wi-Fi 6 + 蓝牙 5.0
- CC1101 Sub-GHz 无线模块，PN532 NFC，LoRa
- 1.9 英寸 ST7789V IPS TFT 屏幕（320×170），旋转编码器
- 8 × WS2812 可编程 RGB LED，红外遥控收发
- ES7210 音频芯片（麦克风 + 扬声器），TF 卡槽，3.7V 1300mAh 电池

## 产品参数

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN16R8 Dual-core LX7 |
| Flash | 16MB |
| PSRAM | 8MB |
| 屏幕 | 1.9英寸 ST7789V IPS TFT，320×170 |
| Sub-GHz | CC1101 |
| NFC | PN532 |
| 音频 | ES7210 麦克风与扬声器 |
| 充电芯片 | BQ25896 |
| 电量监测 | BQ27220 |
| RGB LED | 8 × WS2812 可编程LED |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C) |
| 控制 | 旋转编码器 |
| 按键 | 1 × RESET + 1 × BOOT |
| 尺寸 | 97.5 × 39 × 31 mm |

## 引脚图

<img src="/products/t-embed-series/t-embed-cc1101/index/image/t-embed-cc1101-zh.jpg" alt="T-Embed CC1101 引脚图" width=100%>

### 引脚定义

~~~c
#define BOARD_USER_KEY 6
#define BOARD_PWR_EN   15

// WS2812
#define WS2812_NUM_LEDS 8
#define WS2812_DATA_PIN 14

// IR
#define BOARD_IR_EN 2
#define BOARD_IR_RX 1

// MIC
#define BOARD_MIC_DATA 42
#define BOARD_MIC_CLK  39

// VOICE
#define BOARD_VOICE_BCLK  46
#define BOARD_VOICE_LRCLK 40
#define BOARD_VOICE_DIN   7

// --------- DISPLAY ---------
#define DISPLAY_WIDTH  170
#define DISPLAY_HEIGHT 320

#define DISPLAY_BL   21
#define DISPLAY_CS   41
#define DISPLAY_MISO -1
#define DISPLAY_MOSI  9
#define DISPLAY_SCLK 11
#define DISPLAY_DC   16
#define DISPLAY_RST  40

// --------- ENCODER ---------
#define ENCODER_INA 4
#define ENCODER_INB 5
#define ENCODER_KEY 0

// --------- IIC ---------
#define BOARD_I2C_SDA  8
#define BOARD_I2C_SCL  18

// IIC addr
#define BOARD_I2C_ADDR_1 0x24  // PN532
#define BOARD_I2C_ADDR_2 0x55  // BQ27220
#define BOARD_I2C_ADDR_3 0x6b  // BQ25896

// NFC
#define BOARD_PN532_SCL     BOARD_I2C_SCL
#define BOARD_PN532_SDA     BOARD_I2C_SDA
#define BOARD_PN532_RF_REST 45
#define BOARD_PN532_IRQ     17

// --------- SPI ---------
#define BOARD_SPI_SCK  11
#define BOARD_SPI_MOSI 9
#define BOARD_SPI_MISO 10

// TF card
#define BOARD_SD_CS   13
#define BOARD_SD_SCK  BOARD_SPI_SCK
#define BOARD_SD_MOSI BOARD_SPI_MOSI
#define BOARD_SD_MISO BOARD_SPI_MISO

// LORA
#define BOARD_LORA_CS   12
#define BOARD_LORA_SCK  BOARD_SPI_SCK
#define BOARD_LORA_MOSI BOARD_SPI_MOSI
#define BOARD_LORA_MISO BOARD_SPI_MISO
#define BOARD_LORA_IO2  38
#define BOARD_LORA_IO0  3
#define BOARD_LORA_SW1  47
#define BOARD_LORA_SW0  48
~~~

## 尺寸图

## 原理图

* [T-Embed-CC1101_V1.0](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/T-Embed-CC1101%20V1.0%2024-07-29.pdf)

## 数据手册

* [CC1101](/datasheet/cc1101.pdf)
* [PN532](/datasheet/PN532_C1.pdf)
* [BQ25896](/datasheet/bq25896.pdf)
* [BQ27220](/datasheet/bq27220_datasheet.pdf)
* ST7789V

## 软件开发

### 依赖库

* [RadioLib](https://github.com/jgromes/RadioLib)
* [PN532](https://github.com/Seeed-Studio/PN532.git)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
* [FastLED](https://github.com/FastLED/FastLED)
* [IRremoteESP8266](https://github.com/crankyoldgit/IRremoteESP8266)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)

## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 可以参考 [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) 文档说明来搭建。

* **Q. 设备出现故障时，如何排查故障原因？**  
  A. 首先检查电源是否正常，电池是否充足；检查设备是否被电脑识别；检查固件是否正确烧录。可参考[下载说明](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/docs/flash_download_tool.md)恢复出厂固件。

* **Q. 不能检测到SD卡？**  
  A. 建议使用不超过 32GB 的 SanDisk 卡（FAT32 格式）。

* **Q. 为什么我的板子一直烧录失败呢？**  
  A. 请按住 BOOT 按键同时按 RST 按键，然后释放 RST，进入下载模式后重新上传。

* **Q. CC1101 模块的通信距离是多少？**  
  A. CC1101 通信距离受天线设计、环境干扰、数据速率等多种因素影响，在理想条件下可达数百米。

* **Q. NFC 无法工作怎么办？**  
  A. 烧录出厂固件后用配送的 NFC 标签测试。检查标签是否正确贴好、固件是否正确烧录、NFC 功能是否已开启。可参考[常见问题表格](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/docs/download_mode.md)。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T-Embed-CC1101_V1.0 | 2024-07-29 | 初始硬件版本 |
| T-Embed-CC1101_V1.1 | 2025-01-09 | 软件更新 |
