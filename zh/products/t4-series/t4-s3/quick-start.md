---
title: T4-S3 快速上手
show_source: false
---

# T4-S3 快速上手

本页涵盖 **T4-S3** 的 Arduino、PlatformIO、LVGL 及各外设使用方法。硬件规格与引脚定义请参考 [T4-S3 产品页](index.md)。

---

## 引脚定义

T4-S3 通过 `LilyGo_AMOLED` 库统一管理硬件访问，通常无需手动定义引脚。以下定义仅供参考：

```cpp
// 显示屏（RM690B0 — QSPI）
#define BOARD_DISP_DATA0    14
#define BOARD_DISP_DATA1    10
#define BOARD_DISP_DATA2    16
#define BOARD_DISP_DATA3    12
#define BOARD_DISP_SCK      15
#define BOARD_DISP_CS       11
#define BOARD_DISP_RESET    13
#define BOARD_DISP_TE       18   // 防撕裂信号 — 禁止用于其他用途

// 触摸（CS226SE — I2C）
#define BOARD_TOUCH_SDA      6
#define BOARD_TOUCH_SCL      7
#define BOARD_TOUCH_IRQ      8
#define BOARD_TOUCH_RST     17

// 电源管理（SY6970 — I2C，与触摸共用总线）
#define BOARD_PMU_SDA        6
#define BOARD_PMU_SCL        7
#define BOARD_PMU_IRQ        5
#define BOARD_PMU_EN         9   // PMIC 使能

// SD 卡（SPI）
#define BOARD_SD_MISO        4
#define BOARD_SD_MOSI        2
#define BOARD_SD_SCK         3
#define BOARD_SD_CS          1

// 按键
#define BOARD_BOOT_PIN       0
```

> **GPIO18 / TE 引脚：** GPIO18 已内部连接至 AMOLED 显示屏的 TE（防撕裂）信号，禁止用于其他用途。

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

> **版本要求：** `LilyGo-AMOLED-Series` 库需要 **arduino-esp32 ≥ 2.0.5 且 < 3.0.0**，暂不支持 3.0.0 及以上版本。

#### 安装依赖库

将项目 `libdeps/` 目录下的所有文件夹复制到 Arduino Sketchbook 的 `libraries/` 目录，或通过库管理器安装：

| 库名称 | 版本 | 用途 |
| :----: | :--: | :--- |
| LilyGo-AMOLED-Series | latest | 板级 HAL、显示屏、触摸、电源管理 |
| lvgl | 8.4.0 | GUI 框架（v8） |
| XPowersLib | 0.2.7 | 电源管理（SY6970 / AXP2101） |
| SensorLib | 0.2.4 | 触摸（CS226SE） |
| TFT_eSPI | 2.5.31 | 底层 SPI 显示驱动 |
| TinyGPSPlus | 1.0.3 | GNSS NMEA 解析（Qwiic 扩展） |
| Adafruit NeoPixel | 1.11.0 | NeoPixel LED（仅 1.47 英寸版本） |

#### 开发板配置

| Arduino IDE 设置 | 值 |
| :--------------: | :-: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 烧录

选择正确的 COM 端口，点击**上传**。

若上传失败：按住 **BOOT**（GPIO0），短按 **RST** 后松开，再点击上传。

---

### PlatformIO

#### platformio.ini

```ini
[platformio]
default_envs = T-Display-AMOLED
src_dir = examples/Factory
; src_dir = examples/Touchpad
; src_dir = examples/lvgl/widgets/btn
; src_dir = examples/PPM_Example_for_T4S3
; src_dir = examples/SPI_SDCard
boards_dir = boards

[env:T-Display-AMOLED]
platform      = espressif32@6.12.0
board         = T-Display-AMOLED
framework     = arduino
upload_speed  = 921600
monitor_speed = 115200
lib_extra_dirs = ${PROJECT_DIR}
build_flags =
    -DBOARD_HAS_PSRAM
    -DLV_CONF_INCLUDE_SIMPLE
    -DDISABLE_ALL_LIBRARY_WARNINGS
    -DARDUINO_USB_CDC_ON_BOOT=1
    -DCORE_DEBUG_LEVEL=1
lib_deps =
    lvgl/lvgl@8.4.0
    lewisxhe/XPowersLib@0.2.7
    lewisxhe/SensorLib@0.2.4
    bodmer/TFT_eSPI@2.5.31
    mikalhart/TinyGPSPlus@1.0.3
    adafruit/Adafruit NeoPixel@1.11.0
```

#### 操作步骤

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展市场安装 **PlatformIO IDE**
3. 克隆 `LilyGo-AMOLED-Series` 仓库并用 VS Code 打开项目文件夹
4. PlatformIO 首次构建时自动下载依赖（耐心等待）
5. 在 `platformio.ini` 中取消注释目标示例的 `src_dir` 行
6. 点击 **✓** 编译，点击 **→** 烧录

---

### LVGL

T4-S3 使用 **LVGL v8.4.0**，通过 `LilyGo_AMOLED` 库驱动。调用 `beginLvglHelper()` 可一键完成显示驱动、触摸输入和刷新回调的配置，无需手动编写。

#### lv_conf.h

将 `lv_conf.h` 放在 Arduino libraries 目录下（与 `lvgl/` 同级）。T4-S3 关键配置：

```c
#define LV_COLOR_DEPTH       16
#define LV_COLOR_16_SWAP      1    // QSPI AMOLED 必须开启
#define LV_MEM_CUSTOM         1
#define LV_MEM_CUSTOM_INCLUDE <esp32-hal-psram.h>
#define LV_MEM_CUSTOM_ALLOC   ps_malloc
#define LV_MEM_CUSTOM_FREE    free
#define LV_MEM_CUSTOM_REALLOC ps_realloc
#define LV_TICK_CUSTOM        1
#define LV_TICK_CUSTOM_INCLUDE  "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR  (millis())
```

#### Hello World（LVGL v8）

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);

    // beginAMOLED_241() 初始化 T4-S3 上的 2.41 英寸 AMOLED（RM690B0）
    if (!amoled.beginAMOLED_241()) {
        Serial.println("显示屏初始化失败");
        while (true) delay(1000);
    }

    // 一键初始化 LVGL（含显示 + 触摸）
    beginLvglHelper(amoled);

    // 创建标签
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "你好，T4-S3！");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_24, 0);
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop()
{
    lv_task_handler();
    delay(2);
}
```

---

### 外设示例

#### 示例

| 示例 | 描述 |
| :--: | :--- |
| [display_touch](examples/display_touch/display_touch.ino) | LVGL 界面，实时显示触摸坐标、最近 5 次触摸日志，以及跟随手指的可视化圆点 |

#### 显示屏（RM690B0 — QSPI AMOLED）

2.41 英寸 600 × 450 AMOLED，通过 QSPI 驱动。可使用 LVGL / TFT_eSPI 封装，也可直接调用 `pushColors()` 推送像素数据。

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_AMOLED amoled;

void setup()
{
    amoled.beginAMOLED_241();
    amoled.setBrightness(200);    // 0–255

    uint16_t w = amoled.width();
    uint16_t h = amoled.height();
    uint16_t *buf = (uint16_t *)ps_malloc(w * h * 2);
    if (buf) {
        for (int i = 0; i < w * h; i++) buf[i] = 0xF800; // 红色 RGB565
        amoled.pushColors(0, 0, w, h, buf);
        free(buf);
    }
}

void loop() {}
```

#### 触摸（CS226SE）

触摸由 `beginAMOLED_241()` 自动初始化，使用 `getPoint()` 轮询坐标。

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);
    amoled.beginAMOLED_241();
}

void loop()
{
    int16_t x, y;
    if (amoled.getPoint(&x, &y, 1)) {
        Serial.printf("触摸 X=%d  Y=%d\n", x, y);
    }
    delay(10);
}
```

#### SD 卡（SPI）

板载 MicroSD 卡槽，调用 `amoled.installSD()` 以默认引脚（MISO=4, MOSI=2, SCK=3, CS=1）挂载。

```cpp
#include <LilyGo_AMOLED.h>
#include <SD.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);
    amoled.beginAMOLED_241();

    if (!amoled.installSD()) {
        Serial.println("SD 卡挂载失败");
        return;
    }
    Serial.printf("SD 卡容量：%llu MB\n", SD.cardSize() / (1024 * 1024));

    File root = SD.open("/");
    File f = root.openNextFile();
    while (f) {
        Serial.println(f.name());
        f = root.openNextFile();
    }
}

void loop() {}
```

#### 电源管理（SY6970）

SY6970 电源管理芯片通过 `amoled.BQ` 对象访问（PowersBQ25896 兼容 API）。

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);
    amoled.beginAMOLED_241();

    Serial.printf("电池电压：%u mV\n", amoled.getBattVoltage());
    Serial.printf("VBUS 电压：%u mV\n", amoled.getVbusVoltage());
    Serial.printf("充电中：%s\n",       amoled.isCharging() ? "是" : "否");
    Serial.printf("电池已接入：%s\n",   amoled.isBatteryConnect() ? "是" : "否");
}

void loop() {}
```

#### 亮度控制

```cpp
amoled.setBrightness(128);   // 0（关闭）～ 255（最亮）
uint8_t level = amoled.getBrightness();
```

#### 休眠 / 唤醒

```cpp
// 显示屏休眠（MCU 继续运行）
amoled.disp_sleep();

// 唤醒显示屏
amoled.disp_wakeup();

// 深度休眠（传入 true 可启用触摸唤醒）
amoled.sleep(true);
```

#### Qwiic / I2C 扩展

两个 Qwiic（JST-SH 1.0 mm）接口复用 I2C 总线（SDA=6, SCL=7），可直接使用标准 `Wire` API：

```cpp
#include <Wire.h>

void setup()
{
    Wire.begin(6, 7);   // SDA=6, SCL=7

    // 扫描 I2C 设备
    for (uint8_t addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        if (Wire.endTransmission() == 0) {
            Serial.printf("发现 I2C 设备：0x%02X\n", addr);
        }
    }
}
```

---

## ESP-IDF

T4-S3 暂无官方 ESP-IDF 工程模板。如需 IDF 开发：

1. 创建新工程：`idf.py create-project t4-s3`
2. 设置目标芯片：`idf.py set-target esp32s3`
3. 在 `menuconfig` 中启用 PSRAM：**Component config → ESP PSRAM → Enable**，类型选 **Octal PSRAM**
4. 设置 Flash 大小为 16 MB：**Serial flasher config → Flash size → 16 MB**
5. 参考 [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)

---

## 常见问题

* **Q. 上传后屏幕无显示。**
  A. 请确认 Arduino IDE 中 PSRAM 设置为 **OPI PSRAM**。库在编译时会检查 `BOARD_HAS_PSRAM`，未启用 PSRAM 将无法初始化。

* **Q. 上传失败。**
  A. 按住 **BOOT**（GPIO0），短按 **RST** 后松开，再点击上传。上传开始后可松开 BOOT。

* **Q. `beginAMOLED_241()` 返回 false。**
  A. 请确认 arduino-esp32 核心版本 ≥ 2.0.5 且 < 3.0.0，当前暂不支持 3.x 版本。

* **Q. 应该调用哪个 `begin()` 函数？**
  A. T4-S3（2.41 英寸）请使用 `amoled.beginAMOLED_241()`。也可使用 `amoled.begin()` 自动识别，但 `beginAMOLED_241()` 更可靠。
