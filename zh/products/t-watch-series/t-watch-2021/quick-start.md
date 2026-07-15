---
title: 快速开始
show_source: false
---

# T-Watch 2021 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TTGO_TWatch_Library | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library.git
   ```
3. 打开 `platformio.ini`，在 `[platformio]` 下取消注释 `T-Watch-2021` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi/BT)** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enabled** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆库文件，通过「草图 → 导入库 → 添加 .ZIP 库」安装
3. 打开示例工程，在 `config.h` 中定义正确型号宏（如 `#define LILYGO_WATCH_2021`）
4. 按上表配置开发板参数，点击「上传」

---

### LVGL

T-Watch 2021 通过 `TTGO_TWatch_Library` 使用 **LVGL v7**，调用 `watch->lvgl_begin()` 初始化显示和触摸驱动。

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();
    watch->lvgl_begin();

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch 2021");
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
    watch->tft->print("T-Watch 2021");
}

void loop() {}
```

---

## 常见问题

**Q：`config.h` 中应使用哪个宏？**
A：使用 `#define LILYGO_WATCH_2021`。

**Q：无法烧录？**
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后重试。

**Q：触摸或传感器上传后不工作？**
A：检查 `config.h` 中是否定义了正确的型号宏，错误的宏会导致 GPIO 映射错误。
