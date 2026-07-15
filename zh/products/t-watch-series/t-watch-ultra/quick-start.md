---
title: 快速开始
show_source: false
---

# T-Watch Ultra 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LilyGoLib | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGoLib) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGoLib.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-Watch-Ultra` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGoLib 仓库，打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

### LVGL

T-Watch Ultra 通过 `LilyGoLib` 使用 **LVGL v8**，库会自动处理 AMOLED 显示初始化、触摸和刷新。

```cpp
#include <LilyGoLib.h>
#include <LV_Helper.h>

void setup() {
    watch.begin();
    beginLvglHelper(watch);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch Ultra");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_task_handler();
    delay(2);
}
```

---

### 外设示例

#### 显示屏（AMOLED — LilyGoLib）

```cpp
#include <LilyGoLib.h>

void setup() {
    watch.begin();
    watch.setBrightness(200);
    uint16_t w = watch.width(), h = watch.height();
    uint16_t *buf = (uint16_t *)ps_malloc(w * h * 2);
    if (buf) {
        for (int i = 0; i < w * h; i++) buf[i] = 0xF800; // 红色
        watch.pushColors(0, 0, w, h, buf);
        free(buf);
    }
}

void loop() {}
```

#### 触摸

```cpp
#include <LilyGoLib.h>

void setup() {
    watch.begin();
}

void loop() {
    int16_t x, y;
    if (watch.getPoint(&x, &y, 1)) {
        Serial.printf("触摸坐标: X=%d Y=%d\n", x, y);
    }
    delay(10);
}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

// 引脚请在 LilyGoLib/src/LilyGoWatch.h 中确认
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
    radio.transmit("Hello T-Watch Ultra");
    delay(2000);
}
```

---

## 注意事项

- **NFC**：ST25R3916，LilyGoLib 内置 NFC 驱动，可直接使用相关示例
- **蜂窝模块（T3902）**：需插入 SIM 卡，参考 LilyGoLib 中的 modem 示例
- **GNSS**：MIA-M10Q 多星座定位，室外冷启动约需 60–90 秒获得定位
- **电源键**：按住 2 秒开机，按住 6 秒强制关机

---

## 常见问题

**Q：无法烧录？**
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后重试。

**Q：AMOLED 显示屏上传后无显示？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**，分区方案选择 16M Flash (3MB APP)。
