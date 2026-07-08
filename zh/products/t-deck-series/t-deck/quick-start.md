---
title: T-Deck 快速上手
show_source: false
---

# T-Deck 快速上手

本页涵盖 Arduino、PlatformIO、LVGL 及各外设的使用方法。硬件规格与引脚定义请参考 [T-Deck 产品页](index.md)。

## 引脚定义

将以下定义复制到每个工程中，后续所有示例均基于这些常量。

```cpp
#define BOARD_POWERON       10   // 外设电源控制引脚，使用电池供电时必须拉高
#define BOARD_I2C_SDA       18
#define BOARD_I2C_SCL        8
#define BOARD_BAT_ADC        4
#define BOARD_TOUCH_INT     16
#define BOARD_KEYBOARD_INT  46
#define BOARD_SDCARD_CS     39
#define BOARD_TFT_CS        12
#define BOARD_TFT_DC        11
#define BOARD_TFT_BACKLIGHT 42
#define BOARD_SPI_MOSI      41
#define BOARD_SPI_MISO      38
#define BOARD_SPI_SCK       40
#define BOARD_TBOX_G01       3
#define BOARD_TBOX_G02       2
#define BOARD_TBOX_G03      15
#define BOARD_TBOX_G04       1
#define BOARD_ES7210_MCLK   48
#define BOARD_ES7210_LRCK   21
#define BOARD_ES7210_SCK    47
#define BOARD_ES7210_DIN    14
#define RADIO_CS_PIN         9
#define RADIO_BUSY_PIN      13
#define RADIO_RST_PIN       17
#define RADIO_DIO1_PIN      45
#define BOARD_GPS_TX_PIN    43
#define BOARD_GPS_RX_PIN    44
#define BOARD_BOOT_PIN       0
```

> **SPI 总线共享：** TFT、SD 卡和 LoRa 模块共用同一 SPI 总线。每次 SPI 通信前，需先将其他两个 CS 脚拉高：
> ```cpp
> digitalWrite(BOARD_SDCARD_CS, HIGH);
> digitalWrite(BOARD_TFT_CS,    HIGH);
> digitalWrite(RADIO_CS_PIN,    HIGH);
> ```

---

## Arduino

### 安装开发板支持包

1. 打开 **Arduino IDE → 文件 → 首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 打开 **工具 → 开发板 → 开发板管理器**，搜索 **esp32**，安装 **esp32 by Espressif Systems**

> **版本锁定：** T-Deck 示例在 **arduino-esp32 2.0.14** 下测试通过。高于 2.0.14 的版本可能导致 `TFT_eSPI` 显示异常，升级前请确认兼容性。

### 安装依赖库

将项目 `lib/` 目录中的所有文件夹复制到 Arduino Sketchbook 的 `libraries/` 目录，或通过库管理器手动安装：

| 库名称 | 版本 | 来源 |
| :----: | :--: | :--: |
| TFT_eSPI | 锁定版本 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| RadioLib | latest | [GitHub](https://github.com/jgromes/RadioLib) |
| LVGL | 8.4.0 | [GitHub](https://github.com/lvgl/lvgl/tree/v8.4.0) |
| Arduino_GFX | latest | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| TinyGPSPlus | latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| TouchLib | latest | [GitHub](https://github.com/mmMicky/TouchLib) |
| AceButton | latest | [GitHub](https://github.com/bxparks/AceButton) |
| ESP32-audioI2S | latest | [GitHub](https://github.com/schreibfaul1/ESP32-audioI2S) |
| SensorsLib | latest | [GitHub](https://github.com/lewisxhe/SensorsLib) |

> Arduino IDE 提示升级库时，请**不要升级**——`lib/` 中的版本已经过整体测试，升级可能导致不兼容。

**TFT_eSPI 配置：**

较新版本的 TFT_eSPI（2.5.34+）已内置 `User_Setups/Setup210_LilyGo_T_Deck.h`，其中已包含 `USE_HSPI_PORT`。只需确保 `User_Setup_Select.h` 第 137 行已取消注释：

```cpp
#include <User_Setups/Setup210_LilyGo_T_Deck.h>  // For the LilyGo T-Deck based ESP32S3 with ST7789 320 x 240 TFT
```

如果你的版本没有 `Setup210_LilyGo_T_Deck.h`，请直接使用 `T-Deck/lib/TFT_eSPI/` 中预配置好的版本——将整个文件夹复制到 Arduino `libraries/` 目录即可。

> **注意：** 如果所用的配置文件中未包含 `USE_HSPI_PORT`，运行时会出现 `Guru Meditation Error: Core 1 panic'ed (StoreProhibited)` 崩溃。

### 开发板配置

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

### 烧录

选择正确的 COM 端口，点击 **上传**。

若上传失败：按住轨迹球中键（**BOOT = GPIO0**），插入 USB，再点击上传。烧录完成后按 **RST** 退出下载模式。

> ESP32-C3 键盘 MCU 需通过 RST 按键旁的 6 针排针单独烧录（从上到下：3V3、GND、RST、BOOT、RX、TX）。

---

## PlatformIO

### platformio.ini

```ini
[wifi]
ssid     = ${sysenv.PIO_WIFI_SSID}
password = ${sysenv.PIO_WIFI_PASSWORD}

[platformio]
default_envs = T-Deck
; 取消注释要编译的示例（每次只保留一个有效）：
src_dir = examples/UnitTest
; src_dir = examples/Microphone
; src_dir = examples/Touchpad
; src_dir = examples/lvgl_example
; src_dir = examples/Keyboard_T_Deck_Master
; src_dir = examples/GPSShield
; src_dir = examples/LoRaWAN_Starter
; src_dir = examples/I2SPlay
; src_dir = examples/LvglArduinoVNC_VGA
boards_dir = boards

[env:T-Deck]
platform      = espressif32@6.3.0
board         = T-Deck
framework     = arduino
upload_speed  = 921600
monitor_speed = 115200
lib_deps =
    bodmer/TFT_eSPI
    jgromes/RadioLib
    moononournation/Arduino_GFX_Library
    mikalhart/TinyGPSPlus
    lvgl/lvgl@^8.4.0
    AceButton
    lewisxhe/SensorsLib
build_flags =
    -DBOARD_HAS_PSRAM=1
    -DCORE_DEBUG_LEVEL=1
    -DARDUINO_USB_CDC_ON_BOOT=1
    '-DWIFI_SSID="${wifi.ssid}"'
    '-DWIFI_PASSWORD="${wifi.password}"'
    -DDISABLE_ALL_LIBRARY_WARNINGS
    -DRADIOLIB_EXCLUDE_CC1101
    -DRADIOLIB_EXCLUDE_NRF24
    -DRADIOLIB_EXCLUDE_RF69
    -DRADIOLIB_EXCLUDE_SX1231
    -DRADIOLIB_EXCLUDE_SI443X
    -DRADIOLIB_EXCLUDE_RFM2X
    -DRADIOLIB_EXCLUDE_SX127X
    -DRADIOLIB_EXCLUDE_AFSK
    -DRADIOLIB_EXCLUDE_AX25
    -DRADIOLIB_EXCLUDE_HELLSCHREIBER
    -DRADIOLIB_EXCLUDE_MORSE
    -DRADIOLIB_EXCLUDE_RTTY
    -DRADIOLIB_EXCLUDE_SSTV
    -DRADIOLIB_EXCLUDE_DIRECT_RECEIVE
    -DRADIOLIB_EXCLUDE_APRS
    -DRADIOLIB_EXCLUDE_BELL
```

### 操作步骤

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场安装 **PlatformIO IDE**
3. 克隆仓库，用 VS Code 打开 `T-Deck` 目录
4. PlatformIO 首次构建时自动下载依赖（耐心等待）
5. 在 `platformio.ini` 中取消注释目标示例的 `src_dir` 行
6. 点击 **✓** 编译，点击 **→** 烧录

---

## LVGL

T-Deck 使用 **LVGL v8.4.0** + **TFT_eSPI** 作为显示驱动，分辨率 320 × 240，无触摸——通过轨迹球交互。

> **TFT_eSPI 版本锁定：** 使用 `lib/` 中附带的 TFT_eSPI，并确保初始化序列与 [2024-07-26 提交](https://github.com/Xinyuan-LilyGO/T-Deck/commit/6adb8884c689f174c29a6d7172a0daa367a582eb) 一致。

### lv_conf.h

将 `lv_conf.h` 放在 Arduino libraries 目录下（与 `lvgl/` 同级）。最小配置如下：

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    320
#define LV_VER_RES_MAX    240
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
```

### Hello World

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[320 * 10];

// 刷新回调：将 LVGL 缓冲区内容写入 TFT
void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1, w, h);
    tft.pushColors((uint16_t *)&color_p->full, w * h, true);
    tft.endWrite();
    lv_disp_flush_ready(disp);
}

void setup() {
    // 外设供电（电池供电时必须）
    pinMode(BOARD_POWERON, OUTPUT);
    digitalWrite(BOARD_POWERON, HIGH);

    // 背光
    pinMode(BOARD_TFT_BACKLIGHT, OUTPUT);
    digitalWrite(BOARD_TFT_BACKLIGHT, HIGH);

    // TFT 初始化
    tft.begin();
    tft.setRotation(1);

    // LVGL 初始化
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 320 * 10);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res   = 320;
    disp_drv.ver_res   = 240;
    disp_drv.flush_cb  = disp_flush;
    disp_drv.draw_buf  = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    // 创建文字标签
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Hello T-Deck!");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

### 轨迹球作为 LVGL 输入设备

```cpp
#include <lvgl.h>

static int16_t enc_diff = 0;
static lv_indev_state_t enc_state = LV_INDEV_STATE_REL;

// 在中断或轮询中根据 G01/G02 更新 enc_diff
void trackball_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    data->enc_diff = enc_diff;
    data->state    = enc_state;
    enc_diff = 0;
}

void setup() {
    // ... 先完成上面的显示初始化 ...

    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init(&indev_drv);
    indev_drv.type    = LV_INDEV_TYPE_ENCODER;
    indev_drv.read_cb = trackball_read;
    lv_indev_drv_register(&indev_drv);
}
```

---

## 外设示例

### 电源使能

```cpp
// 使用电池供电时必须调用，USB 供电时调用也无影响
pinMode(BOARD_POWERON, OUTPUT);
digitalWrite(BOARD_POWERON, HIGH);
```

### 显示屏 (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
    pinMode(BOARD_TFT_BACKLIGHT, OUTPUT);
    digitalWrite(BOARD_TFT_BACKLIGHT, HIGH);
    tft.begin();
    tft.setRotation(1);   // 横屏
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.drawString("T-Deck", 120, 110, 4);
}
```

### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(RADIO_CS_PIN, RADIO_DIO1_PIN, RADIO_RST_PIN, RADIO_BUSY_PIN);

void setup() {
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(BOARD_TFT_CS,    OUTPUT); digitalWrite(BOARD_TFT_CS,    HIGH);
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);

    // 915 MHz，125 kHz 带宽，SF7，CR4/5，私有同步字，22 dBm
    int state = radio.begin(915.0, 125.0, 7, 5, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa 初始化失败: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello LoRa");
    Serial.printf("发送状态: %d\n", state);
    delay(2000);
}
```

### 键盘 (I²C)

```cpp
#include <Wire.h>

#define KEYBOARD_ADDR 0x55

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    pinMode(BOARD_KEYBOARD_INT, INPUT_PULLUP);
}

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
volatile int trackX = 0, trackY = 0;

void IRAM_ATTR onG01() { trackX++; }
void IRAM_ATTR onG02() { trackX--; }
void IRAM_ATTR onG03() { trackY++; }
void IRAM_ATTR onG04() { trackY--; }

void setup() {
    pinMode(BOARD_TBOX_G01, INPUT);
    pinMode(BOARD_TBOX_G02, INPUT);
    pinMode(BOARD_TBOX_G03, INPUT);
    pinMode(BOARD_TBOX_G04, INPUT);
    attachInterrupt(BOARD_TBOX_G01, onG01, CHANGE);
    attachInterrupt(BOARD_TBOX_G02, onG02, CHANGE);
    attachInterrupt(BOARD_TBOX_G03, onG03, CHANGE);
    attachInterrupt(BOARD_TBOX_G04, onG04, CHANGE);
}

void loop() {
    Serial.printf("轨迹球 X=%d Y=%d\n", trackX, trackY);
    delay(100);
}
```

### 麦克风 (ES7210 — I²S)

> 麦克风启用后，**GPIO0（BOOT / 轨迹球中键）不可用**。

```cpp
#include <driver/i2s.h>

void setup() {
    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
        .sample_rate          = 16000,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 4,
        .dma_buf_len          = 256,
        .use_apll             = false,
    };
    i2s_pin_config_t pins = {
        .mck_io_num   = BOARD_ES7210_MCLK,
        .bck_io_num   = BOARD_ES7210_SCK,
        .ws_io_num    = BOARD_ES7210_LRCK,
        .data_in_num  = BOARD_ES7210_DIN,
        .data_out_num = I2S_PIN_NO_CHANGE,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
}
```

### GPS (MIA-M10Q — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
    Serial.begin(115200);
    gpsSerial.begin(9600, SERIAL_8N1, BOARD_GPS_RX_PIN, BOARD_GPS_TX_PIN);
}

void loop() {
    while (gpsSerial.available()) {
        gps.encode(gpsSerial.read());
    }
    if (gps.location.isUpdated()) {
        Serial.printf("纬度: %.6f  经度: %.6f\n",
            gps.location.lat(), gps.location.lng());
    }
}
```

### SD 卡 (SPI)

```cpp
#include <SD.h>
#include <SPI.h>

void setup() {
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);
    if (!SD.begin(BOARD_SDCARD_CS)) {
        Serial.println("SD 卡初始化失败");
        return;
    }
    Serial.printf("SD 卡容量: %llu MB\n", SD.cardSize() / (1024 * 1024));
}
```

---

## ESP-IDF

T-Deck 仓库目前未提供官方 ESP-IDF 工程模板。若需使用 IDF 开发：

1. 创建新工程：`idf.py create-project t-deck`
2. 设置目标芯片：`idf.py set-target esp32s3`
3. 使用上方[引脚定义](#引脚定义)中的常量
4. 在 `menuconfig` 中启用 PSRAM：**Component config → ESP PSRAM → Enable**
5. 参考 [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)

---

## MicroPython

<!-- T-Deck 官方 MicroPython 固件暂未发布，请关注仓库更新。 -->
