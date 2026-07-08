---
title: T-LoRaPager 快速上手
show_source: false
---

# T-LoRaPager 快速上手

本页涵盖 Arduino、PlatformIO、LVGL 及各外设的使用方法。硬件规格与引脚定义请参考 [T-LoRaPager 产品页](index.md)。

## 引脚定义

将以下定义复制到每个工程中，后续所有示例均基于这些常量。

```cpp
// 显示屏（ST7796，共享 SPI 总线）
#define BOARD_DISP_BL       42   // 背光（AW9364）
#define BOARD_DISP_CS       38
#define BOARD_DISP_DC       37
#define BOARD_DISP_RST      -1   // 无复位引脚

// 共享 SPI 总线（显示屏、SD 卡、NFC、LoRa）
#define BOARD_SPI_SCK       35
#define BOARD_SPI_MOSI      34
#define BOARD_SPI_MISO      33

// SD 卡
#define BOARD_SDCARD_CS     21

// LoRa（SX1262 / SX1280）
#define RADIO_CS_PIN        36
#define RADIO_DIO1_PIN      14
#define RADIO_RST_PIN       47
#define RADIO_BUSY_PIN      48

// NFC（ST25R3916）
#define BOARD_NFC_CS        39
#define BOARD_NFC_INT        1

// GNSS（MIA-M10Q，UART）
#define BOARD_GPS_RX_PIN    12
#define BOARD_GPS_TX_PIN     4
#define BOARD_GPS_PPS_PIN   13

// I2C 总线（键盘、IMU、RTC、电源管理、震动马达、电量计）
#define BOARD_I2C_SCL        2
#define BOARD_I2C_SDA        3

// 键盘（TCA8418，I2C）
#define BOARD_KB_INT         6

// 旋转编码器
#define BOARD_ENC_A         40
#define BOARD_ENC_B         41
#define BOARD_ENC_BTN        7

// Boot / 用户按键
#define BOARD_BOOT_PIN       0

// 音频（ES8311，I2S）
#define BOARD_I2S_WS        18
#define BOARD_I2S_BCK       11
#define BOARD_I2S_MCLK      10
#define BOARD_I2S_DOUT      45
#define BOARD_I2S_DIN       17

// GPIO 扩展器（XL9555，I2C 地址 0x20）
// XL9555 IO2=键盘电源EN, IO3=NFC电源EN, IO4=GNSS电源EN
// IO5=NFC电源, IO7=GNSS复位, IO9=EXT CE, IO10=键盘复位, IO14=SD电源EN
```

> **SPI 总线共享：** 显示屏、SD 卡、NFC（ST25R3916）和 LoRa 共用同一 SPI 总线。每次 SPI 通信前，需先将其他 CS 脚拉高：
> ```cpp
> digitalWrite(BOARD_DISP_CS,    HIGH);
> digitalWrite(BOARD_SDCARD_CS,  HIGH);
> digitalWrite(RADIO_CS_PIN,     HIGH);
> digitalWrite(BOARD_NFC_CS,     HIGH);
> ```

---

## Arduino

### 安装开发板支持包

1. 打开 **Arduino IDE → 文件 → 首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json
   ```
3. 打开 **工具 → 开发板 → 开发板管理器**，搜索 **esp32**，安装 **esp32 by Espressif Systems**

> **版本要求：** T-LoRaPager 需要 **arduino-esp32 V3.3.0-alpha1 或更高版本**。`LilyGo-T-LoRa-Pager` 开发板定义仅在 V3.x 中提供，低于此版本将报错。

### 安装依赖库

**第一步 — 安装 LilyGoLib：**

1. 下载 [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip) ZIP 压缩包
2. 在 Arduino IDE 中：**项目 → 加载库 → 添加 .ZIP 库** → 选择下载的 ZIP 文件

**第二步 — 安装 LilyGoLib-ThirdParty：**

1. 下载 [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)（克隆或下载 ZIP）
2. 将 `LilyGoLib-ThirdParty/` **内部所有文件夹**复制到 Arduino `libraries/` 目录（不要复制父文件夹本身）
   - Windows：`C:\Users\{用户名}\Documents\Arduino\libraries`
   - macOS：`/Users/{用户名}/Documents/Arduino/libraries`
   - Linux：`/home/{用户名}/Arduino/libraries`

ThirdParty 中包含的主要库：

| 库名称 | 版本 | 用途 |
| :----: | :--: | :--: |
| LilyGoLib | master | 开发板 HAL |
| lvgl | 9.4.0 | GUI 框架 |
| RadioLib | 7.4.0 | LoRa / 无线通信 |
| XPowersLib | 0.3.1 | 电源管理（BQ25896/BQ27220） |
| SensorLib | 0.3.3 | IMU（BHI260AP）、RTC（PCF85063A）、震动（DRV2605） |
| TinyGPSPlus | 1.1.0 | GNSS NMEA 解析 |
| ESP8266Audio | 2.0.0 | 音频播放 |
| Adafruit TCA8418 | 1.0.2 | 键盘控制器 |
| Adafruit BusIO | 1.17.0 | I2C/SPI 抽象层 |
| NFC-RFAL Fork | 1.0.1 | NFC 协议栈 |
| ST25R3916 Fork | 1.1.0 | NFC 驱动 |

> Arduino IDE 提示升级库时，请**不要升级**——在确认硬件正常运行之前，请保持 ThirdParty 中的库版本不变。

### 开发板配置

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| Board | **LilyGo-T-LoRa-Pager** |
| Port | 你的串口 |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | 240 MHz (WiFi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core 1 |
| JTAG Adapter | Disable |
| Arduino Runs On | Core 1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **16M Flash (3M APP/9.9MB FATFS)** |
| Board Revision | **Radio-SX1262**（根据实际模块选择） |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

**Board Revision** 需与实际 RF 模块匹配：
- `Radio-SX1262` — Sub-1G LoRa（最常见）
- `Radio-SX1280` — 2.4G LoRa
- `Radio-CC1101` — Sub-1G FSK/OOK
- `Radio-LR1121` — Sub-1G + 2.4G LoRa
- `Radio-SI4432` — Sub-1G ISM

### 烧录

选择正确的 COM 端口，点击 **上传**。

若上传失败：按住 **BOOT（GPIO0）**，再按 **RESET**，然后松开 BOOT，设备进入下载模式，点击上传。烧录完成后按 **RESET** 退出下载模式。

---

## PlatformIO

> **注意：** PlatformIO 使用独立仓库 [LilyGoLib-PlatformIO](https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO)，目标平台为 `espressif32@6.10.0`（IDF v4.4.7 / arduino-esp32 v2.0.17），与 Arduino IDE 路径不同。

### platformio.ini

```ini
[platformio]
default_envs = tlora_pager
; 取消注释要编译的示例（每次只保留一个有效）：
src_dir = examples/Factory
; src_dir = examples/LoRa
; src_dir = examples/GPS
; src_dir = examples/Keyboard
; src_dir = examples/Audio
; src_dir = examples/NFC

[env_arduino]
platform      = espressif32@6.10.0
framework     = arduino
upload_speed  = 921600
monitor_speed = 115200
build_flags =
    -D ARDUINO_LILYGO_LORA_SX1262
    ; -D ARDUINO_LILYGO_LORA_SX1280
    ; -D ARDUINO_LILYGO_LORA_CC1101
    ; -D ARDUINO_LILYGO_LORA_LR1121
    ; -D ARDUINO_LILYGO_LORA_SI4432
    -DRADIOLIB_EXCLUDE_RF69
    -DRADIOLIB_EXCLUDE_SX1231
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
lib_deps =
    LilyGoLib
    lvgl @ 9.4.0
    RadioLib @ 7.4.0
    XPowersLib @ 0.3.1
    SensorLib @ 0.3.3
    TinyGPSPlus @ 1.1.0
    ESP8266Audio @ 2.0.0
    Adafruit TCA8418 @ 1.0.2
    Adafruit BusIO @ 1.17.0
    NFC-RFAL-fork @ 1.0.1
    ST25R3916-fork

[env:tlora_pager]
extends       = env_arduino
board         = lilygo-t-lora-pager
build_flags   =
    ${env_arduino.build_flags}
    -D ARDUINO_T_LORA_PAGER
    -I variants/lilygo_tlora_pager
```

### 操作步骤

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场安装 **PlatformIO IDE**
3. 克隆 [LilyGoLib-PlatformIO](https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO) 并用 VS Code 打开
4. PlatformIO 首次构建时自动下载依赖（耐心等待）
5. 在 `platformio.ini` 中取消注释目标示例的 `src_dir` 行，并选择与 RF 模块对应的 `ARDUINO_LILYGO_LORA_*` 编译标志
6. 点击 **✓** 编译，点击 **→** 烧录

---

## LVGL

T-LoRaPager 使用 **LVGL v9.4.0** 配合 LilyGoLib 显示驱动，分辨率 480 × 222（ST7796 IPS），无触摸——通过旋转编码器和键盘交互。

### lv_conf.h

将 `lv_conf.h` 放在 Arduino libraries 目录下（与 `lvgl/` 同级）。T-LoRaPager 最小配置：

```c
#define LV_COLOR_DEPTH       16
#define LV_HOR_RES_MAX      480
#define LV_VER_RES_MAX      222
#define LV_TICK_CUSTOM        1
#define LV_TICK_CUSTOM_INCLUDE  "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR  (millis())
#define LV_MEM_SIZE    (128 * 1024U)   // 128 KB，可根据 PSRAM 使用情况调大
```

> LVGL v9 与 v8 API 有变动。如需从 v8 迁移：`lv_disp_draw_buf_t` → `lv_draw_buf_t`，`lv_disp_drv_t` → 使用 `lv_display_create()`。

### Hello World（LVGL v9）

```cpp
#include <lvgl.h>
#include <LilyGoLib.h>

static lv_color_t buf1[480 * 20];

void disp_flush(lv_display_t *disp, const lv_area_t *area, uint8_t *px_map) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    board.display->pushImageDMA(area->x1, area->y1, w, h, (uint16_t *)px_map);
    lv_display_flush_ready(disp);
}

void setup() {
    board.begin();   // 初始化显示屏、键盘、电源等

    lv_init();

    lv_display_t *disp = lv_display_create(480, 222);
    lv_display_set_flush_cb(disp, disp_flush);
    lv_display_set_buffers(disp, buf1, NULL, sizeof(buf1), LV_DISPLAY_RENDER_MODE_PARTIAL);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "你好，T-LoRaPager！");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

### 旋转编码器作为 LVGL 输入设备

```cpp
#include <lvgl.h>

static int32_t enc_diff = 0;
static lv_indev_state_t enc_state = LV_INDEV_STATE_RELEASED;

void encoder_read(lv_indev_t *indev, lv_indev_data_t *data) {
    data->enc_diff = enc_diff;
    data->state    = enc_state;
    enc_diff = 0;
}

void IRAM_ATTR onEncA() {
    enc_diff += (digitalRead(BOARD_ENC_B) == LOW) ? 1 : -1;
}

void setup() {
    // ... 先完成上面的显示初始化 ...

    pinMode(BOARD_ENC_A,   INPUT_PULLUP);
    pinMode(BOARD_ENC_B,   INPUT_PULLUP);
    pinMode(BOARD_ENC_BTN, INPUT_PULLUP);
    attachInterrupt(BOARD_ENC_A, onEncA, FALLING);

    lv_indev_t *enc_indev = lv_indev_create();
    lv_indev_set_type(enc_indev, LV_INDEV_TYPE_ENCODER);
    lv_indev_set_read_cb(enc_indev, encoder_read);
}
```

---

## 外设示例

### 显示屏（LilyGoLib / ST7796）

LilyGoLib 提供统一的 `board` 对象封装显示驱动。

```cpp
#include <LilyGoLib.h>

void setup() {
    board.begin();
    board.display->fillScreen(TFT_BLACK);
    board.display->setTextColor(TFT_WHITE, TFT_BLACK);
    board.display->setTextSize(2);
    board.display->drawString("T-LoRaPager", 160, 96);
}
```

### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(RADIO_CS_PIN, RADIO_DIO1_PIN, RADIO_RST_PIN, RADIO_BUSY_PIN);

void setup() {
    // 先将其他 SPI CS 引脚拉高
    pinMode(BOARD_DISP_CS,   OUTPUT); digitalWrite(BOARD_DISP_CS,   HIGH);
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(BOARD_NFC_CS,    OUTPUT); digitalWrite(BOARD_NFC_CS,    HIGH);
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

### 键盘（TCA8418 — I²C）

```cpp
#include <Adafruit_TCA8418.h>

Adafruit_TCA8418 keypad;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!keypad.begin(TCA8418_DEFAULT_ADDR, &Wire)) {
        Serial.println("TCA8418 未找到");
    }
    keypad.matrix(6, 10);   // T-LoRaPager：6 行 × 10 列（60 路键位，34 键实际使用）
    keypad.flush();
}

void loop() {
    if (keypad.available()) {
        int key = keypad.getEvent();
        bool pressed = key & 0x80;
        key &= 0x7F;
        if (pressed) {
            Serial.printf("按键按下: %d\n", key);
        }
    }
}
```

### 旋转编码器

```cpp
volatile int32_t encoderPos = 0;

void IRAM_ATTR onEncA() {
    encoderPos += (digitalRead(BOARD_ENC_B) == LOW) ? 1 : -1;
}

void setup() {
    pinMode(BOARD_ENC_A,   INPUT_PULLUP);
    pinMode(BOARD_ENC_B,   INPUT_PULLUP);
    pinMode(BOARD_ENC_BTN, INPUT_PULLUP);
    attachInterrupt(BOARD_ENC_A, onEncA, FALLING);
}

void loop() {
    Serial.printf("编码器位置: %d  按钮: %s\n",
        encoderPos,
        digitalRead(BOARD_ENC_BTN) == LOW ? "按下" : "释放");
    delay(100);
}
```

### GPS（MIA-M10Q — TinyGPSPlus）

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
        Serial.printf("纬度: %.6f  经度: %.6f  海拔: %.1f m\n",
            gps.location.lat(), gps.location.lng(), gps.altitude.meters());
    }
}
```

### IMU（BHI260AP — SensorLib）

```cpp
#include <SensorLib.h>

SensorBHI260AP imu;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!imu.begin(Wire)) {
        Serial.println("BHI260AP 未找到");
        return;
    }
    imu.configure(SENSOR_ID_ACC_PASS, 100);   // 加速度计 100 Hz
}

void loop() {
    imu.update();
    float x, y, z;
    imu.getAccelerometer(x, y, z);
    Serial.printf("加速度: X=%.2f Y=%.2f Z=%.2f\n", x, y, z);
    delay(10);
}
```

### 音频（ES8311 — I²S）

```cpp
#include <driver/i2s.h>
#include <Wire.h>

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);

    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
        .sample_rate          = 44100,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 8,
        .dma_buf_len          = 512,
        .use_apll             = true,
    };
    i2s_pin_config_t pins = {
        .mck_io_num   = BOARD_I2S_MCLK,
        .bck_io_num   = BOARD_I2S_BCK,
        .ws_io_num    = BOARD_I2S_WS,
        .data_out_num = BOARD_I2S_DOUT,
        .data_in_num  = BOARD_I2S_DIN,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
    // ES8311 编解码器通过 I2C（地址 0x18）初始化，由 LilyGoLib board.begin() 处理
}
```

### RTC（PCF85063A — SensorLib）

```cpp
#include <SensorLib.h>

SensorPCF85063A rtc;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!rtc.begin(Wire)) {
        Serial.println("PCF85063A 未找到");
        return;
    }
    // 设置时间：年、月、日、时、分、秒
    rtc.setDateTime(2025, 1, 1, 12, 0, 0);
}

void loop() {
    RTC_DateTime dt = rtc.getDateTime();
    Serial.printf("%04d-%02d-%02d %02d:%02d:%02d\n",
        dt.year, dt.month, dt.day, dt.hour, dt.minute, dt.second);
    delay(1000);
}
```

### SD 卡（SPI）

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

T-LoRaPager 基于 LilyGoLib（Arduino for ESP32），暂无官方 ESP-IDF 工程模板。如需 IDF 开发：

1. 创建新工程：`idf.py create-project t-lorapager`
2. 设置目标芯片：`idf.py set-target esp32s3`
3. 使用上方[引脚定义](#引脚定义)中的常量
4. 在 `menuconfig` 中启用 PSRAM：**Component config → ESP PSRAM → Enable**，类型选 **Octal PSRAM**
5. 在 `menuconfig` 中设置 Flash 大小为 16 MB：**Serial flasher config → Flash size → 16 MB**
6. 参考 [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)

---

## MicroPython

LILYGO 为 T-LoRaPager 提供了 MicroPython 固件，请在 [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib) 的 Releases 页面下载最新 `.bin` 固件。

### 烧录 MicroPython

1. 安装 `esptool`：`pip install esptool`
2. 擦除 Flash：
   ```bash
   esptool.py --chip esp32s3 --port COM端口 erase_flash
   ```
3. 烧录 MicroPython 固件：
   ```bash
   esptool.py --chip esp32s3 --port COM端口 --baud 921600 \
     write_flash -z 0x0 micropython_t_lorapager_vX.X.X.bin
   ```
4. 用串口终端（115200 波特率）连接，进入 REPL

### MicroPython 基础示例

```python
from machine import Pin, I2C, SPI, UART
import time

# 编码器
enc_a = Pin(40, Pin.IN, Pin.PULL_UP)
enc_btn = Pin(7, Pin.IN, Pin.PULL_UP)

# GNSS 串口
gps_uart = UART(1, baudrate=9600, tx=4, rx=12)

# I2C（传感器、键盘）
i2c = I2C(0, scl=Pin(2), sda=Pin(3), freq=400000)

print("T-LoRaPager MicroPython 就绪")
print("I2C 设备:", [hex(x) for x in i2c.scan()])

while True:
    if gps_uart.any():
        line = gps_uart.readline()
        if line and line.startswith(b'$GNGGA'):
            print("GPS:", line.decode('utf-8', 'ignore').strip())
    time.sleep_ms(100)
```
