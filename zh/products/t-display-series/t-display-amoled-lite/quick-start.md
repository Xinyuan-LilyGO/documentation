---
title: 快速开始
show_source: false
---

# T-Display AMOLED Lite 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LilyGo_AMOLED | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) |
| LVGL | **8.3.9**（禁止升级） | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | 最新 | [GitHub](https://github.com/lewisxhe/SensorsLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-Display-AMOLED` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| USB Mode | **CDC and JTAG** |

---

### 外设示例

#### 最简 LVGL v8 示例（LV_Helper）

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    Serial.begin(115200);

    bool rslt = amoled.beginAMOLED_147();
    if (!rslt) { while (1) delay(1000); }

    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Display AMOLED Lite");
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

> **LVGL 固定在 8.3.9 版本。** `LV_Helper` 集成已针对此版本测试，请勿升级。

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：支持硬件旋转屏幕吗？**  
A：不支持，T-Display AMOLED Lite 不支持硬件旋转。

**Q：深度睡眠电流是多少？**  
A：启用定时器唤醒时，深度睡眠电流约为 1.1 mA。
