---
title: 快速开始
show_source: false
---

# T-Watch 2019 快速开始

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
3. 打开 `platformio.ini`，在 `[platformio]` 下取消注释 `T-Watch-2019` 环境行
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **TTGO T-Watch** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi/BT)** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

> 若找不到 **TTGO T-Watch**，请安装 [ESP32 Arduino 核心](https://espressif.github.io/arduino-esp32/package_esp32_index.json)，并将 TTGO_TWatch_Library `boards/` 目录下的开发板定义文件导入 Arduino IDE。

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持
2. 克隆库文件，通过「草图 → 导入库 → 添加 .ZIP 库」安装
3. 打开示例，在 `config.h` 中定义型号宏（如 `#define LILYGO_WATCH_2019_WITH_TOUCH`）
4. 按上表配置开发板参数，点击「上传」

---

### LVGL

T-Watch 2019 通过 `TTGO_TWatch_Library` 使用 **LVGL v7**，库会自动初始化 ST7789 显示屏和 FT6336 触摸。

```cpp
#include "LilyGoWatch.h"

TTGOClass *watch;

void setup() {
    watch = TTGOClass::getWatch();
    watch->begin();
    watch->openBL();
    watch->lvgl_begin();

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch 2019");
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
    watch->tft->setTextColor(TFT_GREEN, TFT_BLACK);
    watch->tft->setTextSize(2);
    watch->tft->setCursor(40, 100);
    watch->tft->print("T-Watch 2019");
}

void loop() {}
```

---

## 常见问题

**Q：`config.h` 中应使用哪个宏？**
A：带电容触摸屏的标准版使用 `#define LILYGO_WATCH_2019_WITH_TOUCH`。

**Q：触摸屏无响应？**
A：FT6336 触摸控制器挂载在 I2C 总线（SDA=21, SCL=22, INT=38），默认地址 0x38，可运行 I2C 扫描程序确认连接正常。

**Q：PMU（AXP202）无响应？**
A：AXP202 同样挂载在 I2C 总线（SDA=21, SCL=22, INT=35），运行 I2C 扫描程序确认正常连接。
