---
title: 快速开始
show_source: false
---

# T-Display S3 AMOLED Plus 快速开始

## 依赖库

在编译之前，请通过 Arduino IDE 库管理器安装以下库，或将 `libraries/` 目录中的文件夹复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LVGL | 8.3.9 | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |
| TFT_eSPI | 最新版 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| Arduino_GFX | 最新版 | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| XPowersLib | 最新版 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | 0.2.x | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| AceButton | 最新版 | [GitHub](https://github.com/bxparks/AceButton) |

> **注意：** SensorLib 请使用 0.2.x 版本，0.3.x 版本不兼容。

---

## Arduino

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 安装依赖库

将项目 `libraries/` 目录中的所有文件夹复制到 Arduino 库目录（例如 `C:\Users\YourName\Documents\Arduino\libraries`）。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :----: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 你的 COM 口 |
| USB CDC On Boot | **Enabled** |
| USB Mode | **Hardware CDC and JTAG** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3 MB APP / 9.9 MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

> **提示：** 使用电池供电时，请将 **USB CDC On Boot** 设为 **Disabled**。

#### 4. 上传

1. 通过 USB-C 连接开发板
2. 打开示例程序
3. 点击「上传」

如果上传失败，按住 **BOOT** 按钮后重试。

---

### PlatformIO

#### 1. 环境配置

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
   ```
3. 在 VS Code 中打开克隆的文件夹

#### 2. 选择示例

打开 `platformio.ini`，取消注释你想运行的 `src_dir` 行，确保同时只有一行生效。

#### 3. 编译与上传

- 点击 **✓** 编译
- 通过 USB-C 连接开发板
- 点击 **→** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Factory` | 出厂测试 |
| `TFT_eSPI` | TFT_eSPI 库演示 |
| `Arduino_GFX` | Arduino_GFX 库演示 |
| `LVGL` | LVGL GUI 演示 |
| `LoRa` | LoRa 通信示例 |
| `PowerManagement` | 电源管理示例 |
| `RTC` | RTC 示例 |

完整示例列表见 [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) 仓库。

---

### 外设示例

#### 最小 LVGL 程序

Plus 使用 `LilyGo-AMOLED-Series` 库，支持自动识别型号：

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Display-S3\nAMOLED Plus");
    lv_obj_center(label);
}

void loop() {
    lv_task_handler();
    delay(5);
}
```

#### 按钮事件回调

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

static void btn_cb(lv_event_t *e) {
    lv_obj_t *label = (lv_obj_t *)lv_event_get_user_data(e);
    static int count = 0;
    char buf[32];
    snprintf(buf, sizeof(buf), "点击次数: %d", ++count);
    lv_label_set_text(label, buf);
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "点击次数: 0");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, -40);

    lv_obj_t *btn = lv_btn_create(lv_scr_act());
    lv_obj_set_size(btn, 160, 60);
    lv_obj_align(btn, LV_ALIGN_CENTER, 0, 30);
    lv_obj_add_event_cb(btn, btn_cb, LV_EVENT_CLICKED, label);

    lv_obj_t *btn_label = lv_label_create(btn);
    lv_label_set_text(btn_label, "点我");
    lv_obj_center(btn_label);
}

void loop() {
    lv_task_handler();
    delay(5);
}
```

#### LoRa 收发

```cpp
#include <LoRa.h>

#define LORA_SCK  5
#define LORA_MISO 3
#define LORA_MOSI 6
#define LORA_CS   7
#define LORA_RST  8
#define LORA_IRQ  9

void setup() {
    Serial.begin(115200);
    SPI.begin(LORA_SCK, LORA_MISO, LORA_MOSI, LORA_CS);
    LoRa.setPins(LORA_CS, LORA_RST, LORA_IRQ);

    if (!LoRa.begin(915E6)) {  // 915 MHz，根据地区可改为 433E6 或 868E6
        Serial.println("LoRa 初始化失败");
        while (1);
    }
    Serial.println("LoRa 就绪");
}

void loop() {
    LoRa.beginPacket();
    LoRa.print("Hello from T-Display-Plus");
    LoRa.endPacket();
    delay(5000);
}
```

#### 电源管理（XPowersLib）

```cpp
#include <XPowersLib.h>

XPowersAXP2101 axp;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    if (!axp.begin(Wire, AXP2101_SLAVE_ADDRESS)) {
        Serial.println("PMU 初始化失败");
    }
    float vbat = axp.getBattVoltage();
    Serial.printf("电池电压: %.2f V\n", vbat / 1000.0f);
}

void loop() {}
```

> 上方引脚编号仅供参考，实际引脚请以仓库中的原理图为准。

---

## 常见问题

**板子一直烧录失败**
按住 **BOOT** 按钮，然后按一次 **RST** 按钮，再点击上传。

**LoRa 模块支持哪些频段？**
支持 433 MHz、868 MHz 和 915 MHz，请根据当地法规选择合适的频段。

**如何使用电源管理功能？**
使用 XPowersLib 库控制 AXPM65611 和 BQ25896 芯片，实现低功耗运行和电池管理。
