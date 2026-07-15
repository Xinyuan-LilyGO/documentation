---
title: 快速开始
show_source: false
---

# T5 E-Paper 2.13" 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| GxEPD2 | 最新 | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| Adafruit GFX | 最新 | Arduino 库管理器 |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | Disabled |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-T5-Epaper-Series 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **显示屏**：2.13 英寸 SSD1680，212×104 像素，黑白，SPI 接口
- **全刷时间**：约 8 秒，避免频繁全刷以延长屏幕寿命
- **USB**：CP2102 USB 转串口，若端口未识别请安装 CP210x 驱动
- **TF 卡**：与显示屏共用 SPI 总线，初始化时先初始化显示屏再初始化 SD

---

## LVGL

该开发板可以使用 `GxEPD2` 和 LVGL 构建图形界面。推荐 LVGL 版本：**8.3.x**。

#### lv_conf.h

将 `lv_conf.h` 放在 Arduino `libraries/` 目录中 `lvgl/` 文件夹旁边。最小化配置：

```c
#define LV_COLOR_DEPTH     1    // 黑白电子墨水屏
#define LV_HOR_RES_MAX   212
#define LV_VER_RES_MAX   104
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
```

#### Hello World

```cpp
#include <GxEPD2_BW.h>
#include <lvgl.h>

GxEPD2_BW<GxEPD2_213, GxEPD2_213::HEIGHT> display(GxEPD2_213(/*CS*/10, /*DC*/9, /*RST*/8, /*BUSY*/7));

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[212 * 10];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    display.setPartialWindow(area->x1, area->y1, w, h);
    for (int y = 0; y < h; y++) {
        for (int x = 0; x < w; x++) {
            uint16_t idx = y * w + x;
            display.writePixel(x, y, color_p[idx].full ? GxEPD_WHITE : GxEPD_BLACK);
        }
    }
    display.nextPage();
    lv_disp_flush_ready(disp);
}

void setup() {
    display.init(115200);
    display.setRotation(1);
    
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 212 * 10);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 212;
    disp_drv.ver_res = 104;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T5 2.13in\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(50);
}
```

---

### 外设示例

#### 墨水屏（GxEPD2）

```cpp
#include <GxEPD2_BW.h>

// 2.13 英寸 SSD1680 212×104 — 请按实际引脚调整
GxEPD2_BW<GxEPD2_213, GxEPD2_213::HEIGHT> display(GxEPD2_213(/*CS*/10, /*DC*/9, /*RST*/8, /*BUSY*/7));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.setCursor(10, 50);
        display.print("T5 2.13\" EPaper");
    } while (display.nextPage());
}

void loop() {}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

// SX1262 示例 — 如使用 SX1276 或 SX1280 请替换对应类
#define LORA_CS    14
#define LORA_IRQ   13
#define LORA_RST   12
#define LORA_BUSY  15

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) Serial.printf("LoRa 初始化失败: %d\n", state);
}

void loop() {
    radio.transmit("Hello T5 2.13in");
    delay(3000);
}
```

#### SD 卡（SPI）

```cpp
#include <SD.h>
#include <SPI.h>

#define SD_CS  2

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SD_CS)) {
        Serial.println("SD 卡初始化失败");
        return;
    }
    Serial.printf("SD 卡容量: %llu MB\n", SD.cardSize() / (1024 * 1024));
}

void loop() {}
```

---

## 常见问题

**Q：上传后显示屏出现残影？**
A：首次上电时调用 `display.display(false)` 进行全刷以清除残影。

**Q：端口未识别？**
A：安装 CP2102（CP210x）USB 驱动后重新连接。
