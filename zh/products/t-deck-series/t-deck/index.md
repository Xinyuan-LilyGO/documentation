---
title: LILYGO T-Deck
show_source: false
tags: ESP32-S3, LoRa, GPS, Trackball, Keyboard
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-deck" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-deck-series/t-deck/index/image/t-deck-1.jpg', alt: 'T-Deck 正面图' },
  { src: '/products/t-deck-series/t-deck/index/image/t-deck-2.jpg', alt: 'T-Deck 实物图' },
  { src: '/products/t-deck-series/t-deck/index/image/t-deck-pin-zh.jpg', alt: 'T-Deck 引脚图' }
]" />

## 概述

LILYGO T-Deck 是一款基于 ESP32-S3 的多功能嵌入式开发平台，搭载 2.8 英寸 ST7789 LCD（320×240）、轨迹球导航模块（替代触摸屏）、物理键盘（I²C）、SX1262 LoRa、MIA-M10Q GNSS、ES7210 麦克风阵列和 TF 卡，支持 2000mAh 锂电池供电，适用于物联网终端、便携式通信设备和低功耗无线项目开发。

> **注意：**
> 1. T-Deck 版本无触摸屏，使用轨迹球导航代替。T-Deck-Plus 已将 Grove 接口引脚分配给 GPS 模块，Grove 接口不可使用。
> 2. LoRa 无线电模块与其他外设共享 SPI 总线。一次只能选择一个 SPI 设备，因此请确保在与 SX1262 通信之前，所有其他 SPI 设备的 CS 线都处于高电平（非活动状态）。
> 3. 使用电池供电时，**GPIO10 必须设置为高电平**。如果电路板通过 USB 供电，则可以忽略此要求。

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

4. 选择正确的端口，上传程序。若无法上传，请按住 BOOT（轨迹球中间按键）后插入 USB，再点击上传，上传完成后按 RST 退出下载模式。

> ESP32-C3 的编程接口在 RST 按键一侧的 6Pin 排针，从上到下依次为：3V3、GND、RST、BOOT、RX、TX。

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

<img src="/products/t-deck-series/t-deck/index/image/t-deck-info-zh.jpg" alt="T-Deck 概述图" width=100%>

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

<img src="/products/t-deck-series/t-deck/index/image/t-deck-pin-zh.jpg" alt="T-Deck 引脚图" width=100%>

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

#define BOARD_TBOX_G02      2   // 轨迹球
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

## 外设初始化代码

以下代码片段展示了使用上述引脚定义初始化各外设的最小配置。将 [引脚映射](#引脚映射) 中的 `#define` 代码块复制到你的程序中，然后使用相应的初始化片段。

> **所有 SPI 操作前** — 先将其他 CS 线拉高：
> ```cpp
> digitalWrite(BOARD_SDCARD_CS, HIGH);
> digitalWrite(BOARD_TFT_CS,    HIGH);
> digitalWrite(RADIO_CS_PIN,    HIGH);
> ```

### 电源使能（电池供电时必须）

```cpp
// 电池供电时必须设为 HIGH；USB 供电时调用也无害
pinMode(BOARD_POWERON, OUTPUT);
digitalWrite(BOARD_POWERON, HIGH);
```

### 屏幕（ST7789 — Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>

Arduino_DataBus *bus = new Arduino_ESP32SPI(
    BOARD_TFT_DC, BOARD_TFT_CS,
    BOARD_SPI_SCK, BOARD_SPI_MOSI, BOARD_SPI_MISO);

// 320×240，无 RST 引脚 (-1)，竖屏
Arduino_GFX *gfx = new Arduino_ST7789(bus, -1, 0, true, 320, 240);

void setup() {
    pinMode(BOARD_TFT_BACKLIGHT, OUTPUT);
    digitalWrite(BOARD_TFT_BACKLIGHT, HIGH);
    gfx->begin();
    gfx->fillScreen(BLACK);
}
```

### 屏幕（ST7789 — TFT_eSPI）

> 需要为 T-Deck 配置 `User_Setup.h` — 参考 [2024-07-26 提交](https://github.com/Xinyuan-LilyGO/T-Deck/commit/6adb8884c689f174c29a6d7172a0daa367a582eb) 获取正确的初始化序列。

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
    pinMode(BOARD_TFT_BACKLIGHT, OUTPUT);
    digitalWrite(BOARD_TFT_BACKLIGHT, HIGH);
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
}
```

### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(
    RADIO_CS_PIN,   // CS
    RADIO_DIO1_PIN, // DIO1 / IRQ
    RADIO_RST_PIN,  // RST
    RADIO_BUSY_PIN  // BUSY
);

void setup() {
    // 先禁用其他 SPI 设备
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(BOARD_TFT_CS,    OUTPUT); digitalWrite(BOARD_TFT_CS,    HIGH);

    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);

    // frequency (MHz), bandwidth (kHz), spreading factor, coding rate, sync word, output power (dBm)
    int state = radio.begin(915.0, 125.0, 7, 5, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa 初始化失败: %d\n", state);
    }
}
```

### 键盘（I²C）

```cpp
#include <Wire.h>

#define KEYBOARD_ADDR 0x55

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    pinMode(BOARD_KEYBOARD_INT, INPUT_PULLUP);
}

// 轮询或使用中断 — 每次按键读取一个字节
void loop() {
    if (digitalRead(BOARD_KEYBOARD_INT) == LOW) {
        Wire.requestFrom(KEYBOARD_ADDR, 1);
        if (Wire.available()) {
            char key = Wire.read();
            Serial.printf("按键: %c\n", key);
        }
    }
}
```

### 轨迹球

```cpp
// 轨迹球在四个 GPIO 上输出正交脉冲信号
// 使用中断检测移动方向
void setup() {
    pinMode(BOARD_TBOX_G01, INPUT);
    pinMode(BOARD_TBOX_G02, INPUT);
    pinMode(BOARD_TBOX_G03, INPUT);
    pinMode(BOARD_TBOX_G04, INPUT);
}
```

### 麦克风（ES7210 — I²S）

> 启用麦克风后，**GPIO0（BOOT / 轨迹球中间按键）不可用**。

```cpp
#include <driver/i2s.h>

void setup() {
    i2s_config_t i2s_config = {
        .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
        .sample_rate = 16000,
        .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count = 4,
        .dma_buf_len = 256,
        .use_apll = false,
    };
    i2s_pin_config_t pin_config = {
        .mck_io_num   = BOARD_ES7210_MCLK,
        .bck_io_num   = BOARD_ES7210_SCK,
        .ws_io_num    = BOARD_ES7210_LRCK,
        .data_in_num  = BOARD_ES7210_DIN,
        .data_out_num = I2S_PIN_NO_CHANGE,
    };
    i2s_driver_install(I2S_NUM_0, &i2s_config, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pin_config);
}
```

### SD 卡（SPI）

```cpp
#include <SD.h>

void setup() {
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);
    if (!SD.begin(BOARD_SDCARD_CS)) {
        Serial.println("SD 卡初始化失败");
    }
}
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

* **Q. T-Deck 是否有触摸屏功能？**  
  A. T-Deck 版本没有触摸屏，使用轨迹球导航模块替代触摸操作。

* **Q. 为什么板子一直烧录失败？**  
  A. 按住轨迹球中间按键（BOOT），然后插入 USB，此时芯片进入下载模式，再点击上传。上传完成后按 RST 键退出下载模式。

* **Q. TFT 屏幕显示不正确怎么办？**  
  A. T-Deck 于 2024-07-26 更新了 TFT_eSPI ST7789 初始化序列，请确保本地库文件与 [GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Deck/commit/6adb8884c689f174c29a6d7172a0daa367a582eb) 中的初始化序列一致。

* **Q. 为什么 Arduino IDE 提示升级库文件？**  
  A. 建议不升级，不同版本的库文件可能不兼容。

## 版本历史

| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Deck V1.0 | — | 初始版本 |
