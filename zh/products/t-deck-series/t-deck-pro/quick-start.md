---
title: T-Deck Pro 快速上手
show_source: false
---

# T-Deck Pro 快速上手

本页涵盖 **T-Deck Pro V1.1（分支：HD-V2-250915）** 的 Arduino、PlatformIO、LVGL 及各外设使用方法。硬件规格与引脚定义请参考 [T-Deck Pro 产品页](index.md)。

> **版本说明：** 不同硬件版本的代码不兼容。本指南仅适用于 **V1.1**（分支 `HD-V2-250915`）。V1.0 请使用分支 `HD-V1-250326`。

---

## 引脚定义

将以下定义复制到每个工程中，后续所有示例均基于这些常量。

```cpp
// I2C 总线（触摸、键盘、IMU、光线传感器、电源管理）
#define BOARD_I2C_SDA       13
#define BOARD_I2C_SCL       14

// 键盘（TCA8418）
#define BOARD_KB_INT        15
#define BOARD_KB_LED        42

// 触摸（CST328）
#define BOARD_TOUCH_INT     12
#define BOARD_TOUCH_RST     45

// 环境光传感器（LTR553ALS）
#define BOARD_ALS_INT       16

// IMU（BHI260AP）
#define BOARD_IMU_INT       21

// 共享 SPI 总线（电子墨水屏、SD 卡、LoRa）
#define BOARD_SPI_SCK       36
#define BOARD_SPI_MOSI      33
#define BOARD_SPI_MISO      47

// 电子墨水屏（GDEQ031T10，320×240）
#define BOARD_EPD_DC        35
#define BOARD_EPD_CS        34
#define BOARD_EPD_BUSY      37
#define BOARD_EPD_BL        45   // 屏幕背光（V1.1 新增）

// SD 卡
#define BOARD_SDCARD_CS     48

// LoRa（SX1262）
#define RADIO_CS_PIN         3
#define RADIO_BUSY_PIN       6
#define RADIO_RST_PIN        4
#define RADIO_DIO1_PIN       5

// GNSS（MIA-M10Q，UART）
#define BOARD_GPS_RX_PIN    44
#define BOARD_GPS_TX_PIN    43
#define BOARD_GPS_PPS_PIN    1

// 4G 模块 A7682E（V2 硬件版本）
#define BOARD_4G_RI          7
#define BOARD_4G_ITR         8
#define BOARD_4G_RST         9
#define BOARD_4G_RXD        10
#define BOARD_4G_TXD        11
#define BOARD_4G_PWRKEY     40

// 音频 PCM5102A（V1 硬件版本，与 A7682E 共用 7/8/9）
#define BOARD_I2S_BCLK       7
#define BOARD_I2S_DOUT       8
#define BOARD_I2S_LRC        9

// 麦克风（PDM）
#define BOARD_MIC_DATA      17
#define BOARD_MIC_CLK       18

// 震动马达（DRV2605，V1.1）
#define BOARD_MOTOR          2

// 电源 / 使能
#define BOARD_GPS_EN        39
#define BOARD_1V8_EN        38
#define BOARD_4G_EN         41
#define BOARD_LORA_EN       46
#define BOARD_BOOT_PIN       0
```

> **SPI 总线共享：** 电子墨水屏、SD 卡和 LoRa 共用同一 SPI 总线。每次 SPI 通信前，需将其他 CS 脚拉高：
> ```cpp
> digitalWrite(BOARD_EPD_CS,    HIGH);
> digitalWrite(BOARD_SDCARD_CS, HIGH);
> digitalWrite(RADIO_CS_PIN,    HIGH);
> ```

> **V1 与 V2 硬件说明：** PCM5102A 音频（V1）和 A7682E 4G（V2）共用 GPIO 7/8/9，二者互斥。使用前请确认你的硬件版本。

---

## Arduino

### Arduino IDE

#### 安装开发板支持包

1. 打开 **Arduino IDE → 文件 → 首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 打开 **工具 → 开发板 → 开发板管理器**，搜索 **esp32**，安装 **esp32 by Espressif Systems**

> **版本锁定：** T-Deck Pro V1.1 需要 **arduino-esp32 2.0.14**，与 V3.x 系列不兼容，请固定在 2.0.14 版本。

#### 安装依赖库

将项目 `lib/` 目录中的所有文件夹复制到 Arduino Sketchbook 的 `libraries/` 目录下：

| 库名称 | 版本 | 用途 |
| :----: | :--: | :--: |
| GxEPD2 | 1.5.5 | 电子墨水屏驱动 |
| RadioLib | 6.4.2 | LoRa / SX1262 |
| SensorLib | ^0.2.0 | IMU（BHI260AP）、触摸（CST328）、马达（DRV2605） |
| TinyGPSPlus | ^1.0.3 | GNSS NMEA 解析 |
| TinyGSM | ^0.12.0 | 4G 模组（A7682E） |
| lvgl | ~8.3.9 | GUI 框架（v8） |
| XPowersLib | ^0.2.4 | 电源管理（BQ25896/BQ27220） |
| Adafruit TCA8418 | ^1.0.1 | 键盘控制器 |
| Adafruit BusIO | ^1.14.4 | I2C/SPI 抽象层 |
| U8g2_for_Adafruit_GFX | ^1.8.0 | 电子墨水屏字体渲染 |
| Adafruit GFX Library | ^1.11.10 | 图形基础库 |
| ESP32-audioI2S | v3.0.12 | 音频播放 |

> Arduino IDE 提示升级库时，请**不要升级**——在确认硬件正常运行之前，保持 `lib/` 中的库版本不变。

#### 开发板配置

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

> Arduino IDE 中没有专用的 `T-Deck-Pro` 开发板条目，请选择 **ESP32S3 Dev Module** 并按上表手动配置。

#### 烧录

选择正确的 COM 端口，点击 **上传**。

若上传失败：按住 **BOOT** 按键（GPIO0），再点击上传。烧录完成后按 **RST** 退出下载模式。

---

### PlatformIO

#### platformio.ini

```ini
[platformio]
default_envs = T-Deck-Pro
; 取消注释要编译的示例（每次只保留一个有效）：
src_dir = examples/factory
; src_dir = examples/EPD_Test
; src_dir = examples/LoRa_Test
; src_dir = examples/GPS_Test
; src_dir = examples/Keyboard_Test
; src_dir = examples/IMU_Test
; src_dir = examples/4G_Test
; src_dir = examples/Audio_Test
boards_dir = boards

[env:T-Deck-Pro]
platform      = espressif32@6.5.0
board         = T-Deck-Pro
framework     = arduino
upload_speed  = 921600
monitor_speed = 115200
lib_deps =
    zinggjm/GxEPD2@1.5.5
    jgromes/RadioLib@6.4.2
    lewisxhe/SensorLib@^0.2.0
    mikalhart/TinyGPSPlus@^1.0.3
    vshymanskyy/TinyGSM@^0.12.0
    lvgl/lvgl@~8.3.9
    lewisxhe/XPowersLib@^0.2.4
    adafruit/Adafruit TCA8418@^1.0.1
    adafruit/Adafruit BusIO@^1.14.4
    olikraus/U8g2_for_Adafruit_GFX@^1.8.0
    adafruit/Adafruit GFX Library@^1.11.10
    esphome/ESP32-audioI2S#v3.0.12
build_flags =
    -DBOARD_HAS_PSRAM=1
    -DARDUINO_USB_CDC_ON_BOOT=1
    -DTINY_GSM_MODEM_SIM7672
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

#### 操作步骤

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场安装 **PlatformIO IDE**
3. 克隆 `HD-V2-250915` 分支并用 VS Code 打开项目文件夹
4. PlatformIO 首次构建时自动下载依赖（耐心等待）
5. 在 `platformio.ini` 中取消注释目标示例的 `src_dir` 行
6. 点击 **✓** 编译，点击 **→** 烧录

---

### LVGL

T-Deck Pro 使用 **LVGL v8.3.9** 配合 GxEPD2 显示驱动，分辨率 320 × 240（GDEQ031T10），支持 CST328 触摸。

> 此处使用 LVGL v8 API（非 v9）。关键类型：`lv_disp_draw_buf_t`、`lv_disp_drv_t`、`lv_indev_drv_t`。

#### lv_conf.h

将 `lv_conf.h` 放在 Arduino libraries 目录下（与 `lvgl/` 同级）。T-Deck Pro 最小配置：

```c
#define LV_COLOR_DEPTH      16
#define LV_HOR_RES_MAX     320
#define LV_VER_RES_MAX     240
#define LV_TICK_CUSTOM       1
#define LV_TICK_CUSTOM_INCLUDE  "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR  (millis())
#define LV_MEM_SIZE    (64 * 1024U)
```

#### Hello World（LVGL v8）

```cpp
#include <lvgl.h>
#include <GxEPD2_BW.h>

GxEPD2_BW<GxEPD2_310_GDEQ031T10, GxEPD2_310_GDEQ031T10::HEIGHT>
    display(GxEPD2_310_GDEQ031T10(BOARD_EPD_CS, BOARD_EPD_DC,
                                   /*RST*/ -1, BOARD_EPD_BUSY));

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[320 * 10];

void disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    display.setPartialWindow(area->x1, area->y1,
                             area->x2 - area->x1 + 1,
                             area->y2 - area->y1 + 1);
    display.firstPage();
    do {
        for (int y = area->y1; y <= area->y2; y++) {
            for (int x = area->x1; x <= area->x2; x++) {
                lv_color_t c = color_p[(y - area->y1) * (area->x2 - area->x1 + 1) + (x - area->x1)];
                display.drawPixel(x, y, c.full ? GxEPD_WHITE : GxEPD_BLACK);
            }
        }
    } while (display.nextPage());
    lv_disp_flush_ready(drv);
}

void setup() {
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);
    display.init(115200);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 320 * 10);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = 320;
    disp_drv.ver_res  = 240;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "你好，T-Deck Pro！");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

### 外设示例

#### 电子墨水屏（GxEPD2）

GDEQ031T10 支持全刷、快刷和局刷。每进行 5 次连续局刷/快刷后，需执行一次全刷以消除残影。

```cpp
#include <GxEPD2_BW.h>
#include <SPI.h>

GxEPD2_BW<GxEPD2_310_GDEQ031T10, GxEPD2_310_GDEQ031T10::HEIGHT>
    display(GxEPD2_310_GDEQ031T10(BOARD_EPD_CS, BOARD_EPD_DC,
                                   /*RST*/ -1, BOARD_EPD_BUSY));

void setup() {
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(RADIO_CS_PIN,    OUTPUT); digitalWrite(RADIO_CS_PIN,    HIGH);

    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);
    display.init(115200);

    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setCursor(40, 120);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.print("T-Deck Pro V1.1");
    } while (display.nextPage());
}

void loop() {}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(RADIO_CS_PIN, RADIO_DIO1_PIN, RADIO_RST_PIN, RADIO_BUSY_PIN);

void setup() {
    Serial.begin(115200);

    pinMode(BOARD_EPD_CS,    OUTPUT); digitalWrite(BOARD_EPD_CS,    HIGH);
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);

    pinMode(BOARD_LORA_EN, OUTPUT); digitalWrite(BOARD_LORA_EN, HIGH);

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

#### 键盘（TCA8418 — I²C）

```cpp
#include <Adafruit_TCA8418.h>

Adafruit_TCA8418 keypad;

void setup() {
    Serial.begin(115200);
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!keypad.begin(TCA8418_DEFAULT_ADDR, &Wire)) {
        Serial.println("TCA8418 未找到");
    }
    keypad.matrix(4, 10);   // T-Deck Pro：4 行 × 10 列
    keypad.flush();
}

void loop() {
    if (keypad.available()) {
        int ev = keypad.getEvent();
        bool pressed = (ev & 0x80) != 0;
        uint8_t code = ev & 0x7F;
        if (pressed) {
            Serial.printf("按键: %d\n", code);
        }
    }
}
```

#### 触摸（CST328 — SensorLib）

```cpp
#include <SensorLib.h>

SensorCST328 touch;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    pinMode(BOARD_TOUCH_RST, OUTPUT);
    digitalWrite(BOARD_TOUCH_RST, HIGH);
    delay(50);

    if (!touch.begin(Wire, CST328_SLAVE_ADDRESS)) {  // 0x1A
        Serial.println("CST328 未找到");
        return;
    }
}

void loop() {
    if (touch.isPressed()) {
        touch.update();
        Serial.printf("触摸 X=%d Y=%d\n",
            touch.getPoint(0).x, touch.getPoint(0).y);
    }
    delay(10);
}
```

#### GNSS（MIA-M10Q — TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
    Serial.begin(115200);
    pinMode(BOARD_GPS_EN, OUTPUT); digitalWrite(BOARD_GPS_EN, HIGH);
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

#### IMU（BHI260AP — SensorLib）

```cpp
#include <SensorLib.h>

SensorBHI260AP imu;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!imu.begin(Wire, BHI260AP_SLAVE_ADDRESS)) {  // 0x28
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

#### 4G — A7682E（V2 硬件版本 — TinyGSM）

> 此外设仅存在于 **V2 硬件版本**，与 V1 的 PCM5102A 音频共用 GPIO 7/8/9，两者互斥。

```cpp
#define TINY_GSM_MODEM_SIM7672
#include <TinyGsmClient.h>

HardwareSerial modemSerial(1);

void setup() {
    Serial.begin(115200);

    pinMode(BOARD_4G_EN,     OUTPUT); digitalWrite(BOARD_4G_EN,     HIGH);
    pinMode(BOARD_4G_PWRKEY, OUTPUT);
    digitalWrite(BOARD_4G_PWRKEY, HIGH);
    delay(1000);
    digitalWrite(BOARD_4G_PWRKEY, LOW);
    delay(2000);

    modemSerial.begin(115200, SERIAL_8N1, BOARD_4G_RXD, BOARD_4G_TXD);

    TinyGsm modem(modemSerial);
    modem.restart();
    Serial.println(modem.getModemInfo());
}

void loop() {}
```

#### 音频 — PCM5102A（V1 硬件版本 — I²S）

> 此外设仅存在于 **V1 硬件版本**，与 V2 的 A7682E 4G 共用 GPIO 7/8/9，两者互斥。

```cpp
#include <driver/i2s.h>

void setup() {
    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
        .sample_rate          = 44100,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 8,
        .dma_buf_len          = 512,
        .use_apll             = false,
    };
    i2s_pin_config_t pins = {
        .mck_io_num   = I2S_PIN_NO_CHANGE,
        .bck_io_num   = BOARD_I2S_BCLK,
        .ws_io_num    = BOARD_I2S_LRC,
        .data_out_num = BOARD_I2S_DOUT,
        .data_in_num  = I2S_PIN_NO_CHANGE,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
}
```

#### SD 卡（SPI）

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

T-Deck Pro 仓库暂无官方 ESP-IDF 工程模板。如需 IDF 开发：

1. 创建新工程：`idf.py create-project t-deck-pro`
2. 设置目标芯片：`idf.py set-target esp32s3`
3. 使用上方[引脚定义](#引脚定义)中的常量
4. 在 `menuconfig` 中启用 PSRAM：**Component config → ESP PSRAM → Enable**，类型选 **Octal PSRAM**
5. 设置 Flash 大小为 16 MB：**Serial flasher config → Flash size → 16 MB**
6. 参考 [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)

---

## V1.1 相对 V1.0 的硬件变更

| 变更项 | V1.0 | V1.1 |
| :---- | :--- | :--- |
| IO16（LCD RST 释放） | 用于 LCD RST | 改用作 ALS INT |
| IO38（T-RST 释放） | 用于 T-RST | 改用作 1V8 EN |
| 屏幕背光控制 | 无独立控制 | IO45 控制 EPD 背光 |
| 震动马达驱动 | ERM 驱动 | DRV2605（I2C） |
| PSRAM 供电电压 | 1.8 V | 3.3 V |

> 触摸芯片区别：V1.0 使用 CST816S（地址 0x15），V1.1 使用 CST328（地址 0x1A）。请使用 `SensorLib` 中对应的类。
