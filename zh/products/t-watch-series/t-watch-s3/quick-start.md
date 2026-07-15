---
title: 快速开始
show_source: false
---

# T-Watch S3 快速开始

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
3. 打开 `platformio.ini`，在 `[platformio]` 下取消注释目标环境行
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
3. 在示例的 `config.h` 中确认定义了正确的型号宏
4. 按上表配置开发板参数，点击「上传」

---

### LVGL

T-Watch S3 通过 `TTGO_TWatch_Library` 使用 **LVGL v8**，调用 `watch->lvgl_begin()` 自动初始化显示、刷新回调和触摸输入。

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();
    watch->lvgl_begin();

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch S3");
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
    watch->tft->setCursor(40, 100);
    watch->tft->print("T-Watch S3");
}

void loop() {}
```

#### 触摸

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
}

void loop() {
    int16_t x, y;
    if (watch->getTouch(x, y)) {
        Serial.printf("触摸坐标: X=%d Y=%d\n", x, y);
    }
    delay(10);
}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

// 引脚请在 TTGO_TWatch_Library 配置文件中确认
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
    radio.transmit("Hello T-Watch S3");
    delay(2000);
}
```

---

## 常见问题

**Q：我的 LoRa 版本是 SX1262 还是 SX1280？**
A：查看 LoRa 模块上的标签。SX1262 工作在 433–915 MHz，SX1280 工作在 2.4 GHz。编译前在 `config.h` 中设置正确的版本。

**Q：无法烧录？**
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，强制进入下载模式后重试。

**Q：上传后屏幕无显示？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**，分区方案选择 16M Flash。
