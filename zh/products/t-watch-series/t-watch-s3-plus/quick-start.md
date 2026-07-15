---
title: 快速开始
show_source: false
---

# T-Watch S3 Plus 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TTGO_TWatch_Library | 最新（分支：t-watch-s3） | [GitHub](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库（分支 `t-watch-s3`）：
   ```bash
   git clone -b t-watch-s3 https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-Watch-S3-Plus` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **UART0/Hardware CDC** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆仓库（分支 `t-watch-s3`），打开示例工程
3. 在 `config.h` 中确认已定义正确的手表型号宏
4. 按上表配置开发板参数，点击「上传」

---

### LVGL

T-Watch S3 Plus 通过 `TTGO_TWatch_Library` 使用 **LVGL v8**，调用 `watch->lvgl_begin()` 自动初始化显示、刷新回调和触摸输入。

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();
    watch->lvgl_begin();

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch S3 Plus");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_task_handler();
    delay(5);
}
```

---

### 外设示例

#### 显示屏（ST7789 — TTGO_TWatch_Library）

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();
    watch->tft->fillScreen(TFT_BLACK);
    watch->tft->setTextColor(TFT_WHITE, TFT_BLACK);
    watch->tft->setTextSize(2);
    watch->tft->setCursor(20, 100);
    watch->tft->print("T-Watch S3 Plus");
}

void loop() {}
```

#### GPS（MIA-M10Q — TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

// 请查阅 TTGO_TWatch_Library 配置文件确认 GPS UART 引脚
#define GPS_RX  10
#define GPS_TX  11

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(38400, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("纬度: %.6f  经度: %.6f\n", gps.location.lat(), gps.location.lng());
    }
}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

#define LORA_CS    36
#define LORA_IRQ   45
#define LORA_RST   42
#define LORA_BUSY  46

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) Serial.printf("LoRa 初始化失败: %d\n", state);
}

void loop() {
    radio.transmit("Hello T-Watch S3 Plus");
    delay(2000);
}
```

---

## 常见问题

**Q：与 T-Watch S3 有何区别？**
A：T-Watch S3 Plus 新增了 GPS（MIA-M10Q）功能，电池容量也有所增加。

**Q：无法烧录？**
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后重试。
