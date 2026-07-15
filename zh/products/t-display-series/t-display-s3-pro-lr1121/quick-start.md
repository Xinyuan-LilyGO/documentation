---
title: 快速开始
show_source: false
---

# T-Display S3 Pro LR1121 快速开始

## 依赖库

克隆 [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) 仓库，将 `lib/` 文件夹内容复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LilyGo_AMOLED | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) |
| LVGL | **8.3.9**（禁止升级） | [GitHub](https://github.com/lvgl/lvgl) |
| AceButton | 最新 | [GitHub](https://github.com/bxparks/AceButton) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | 最新 | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| Adafruit_NeoPixel | 最新 | [GitHub](https://github.com/adafruit/Adafruit_NeoPixel) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
   ```
3. 在 VS Code 中打开项目文件夹
4. 打开 `platformio.ini`，取消注释 `T-Display-S3-Pro-LR1121` 环境行
5. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 安装 LilyGo_AMOLED 库

在 Arduino IDE 中，前往 **工具** → **管理库**，搜索 `LilyGo_AMOLED` 并安装；或将克隆仓库的 `lib/` 文件夹内容复制到 Arduino 库目录。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> **提示：** 使用电池供电时，将 **USB CDC On Boot** 设为 **Disabled**。

#### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。  
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，然后上传。

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Factory` | 含显示、触摸、LoRa 的全功能出厂测试 |
| `LVGL_Demo` | RM67162 AMOLED 上的 LVGL 8 UI 演示 |
| `LR1121_LoRa` | LR1121 多频段 LoRa 收发 |
| `PMU_Example` | AXPM65611 + BQ25896 电源管理 |
| `RTC_Example` | PCF85063ATL 实时时钟 |
| `TFCard` | TF 卡读写 |

---

### 外设示例

#### Hello World（LilyGo_AMOLED）

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    Serial.begin(115200);

    // beginAMOLED_191() 自动识别 1.91 英寸 RM67162 屏幕
    bool rslt = amoled.beginAMOLED_191();
    if (!rslt) {
        Serial.println("屏幕初始化失败，请检查开发板选择");
        while (1) delay(1000);
    }

    amoled.fillScreen(amoled.color565(0, 0, 0));
    amoled.setTextColor(amoled.color565(255, 255, 255));
    amoled.setTextSize(2);
    amoled.setCursor(20, 100);
    amoled.println("T-Display S3 Pro LR1121");
}

void loop() {}
```

#### LR1121 LoRa 发送

```cpp
#include <RadioLib.h>

// 根据实际电路图调整引脚
LR1121 radio = new Module(/* NSS */, /* DIO9 */, /* RESET */, /* BUSY */);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(868.0);  // 频率（MHz），请遵守当地无线电法规
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("LR1121 初始化成功");
    } else {
        Serial.printf("LR1121 初始化失败: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello from T-Display S3 Pro LR1121");
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("发送成功");
    }
    delay(2000);
}
```

---

### LVGL

T-Display S3 Pro LR1121 搭载 **1.91 英寸 RM67162 IPS AMOLED** 屏幕（SPI/QSPI）。`LilyGo-AMOLED-Series` 库提供 `LV_Helper`，只需几行代码即可将 LVGL 与屏幕和触摸驱动完整对接。

> **LVGL 固定在 8.3.9 版本。** `LV_Helper` 集成已针对此版本测试，请勿升级。

#### 最简 LVGL v8 示例（LV_Helper）

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    Serial.begin(115200);

    bool rslt = amoled.beginAMOLED_191();
    if (!rslt) {
        Serial.println("屏幕初始化失败");
        while (1) delay(1000);
    }

    // LV_Helper 自动注册 LVGL 显示和触摸驱动
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Display S3 Pro LR1121");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 出厂示例

打开 `LilyGo-AMOLED-Series` 仓库中的 `Factory` 示例，这是 LoRa、PMU、RTC 与 LVGL 完整集成的权威参考。

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：LR1121 支持哪些 LoRa 频段？**  
A：LR1121 为多频段模块，支持 Sub-GHz 和 2.4 GHz。常用 Sub-GHz 频率：868 MHz（欧洲）、915 MHz（美国）、470 MHz（中国）。请遵守当地无线电法规。

**Q：如何连接外部传感器？**  
A：使用板载 STEMMA QT/QWIIC 接口快速连接 I²C 传感器，或通过 2×13 双排扩展接口连接其他外设。

**Q：能升级 LVGL 到 8.3.9 以上吗？**  
A：不建议。`LilyGo-AMOLED-Series` 中的 `LV_Helper` 集成已针对 8.3.9 测试，升级可能导致刷新或触摸回调出错。
