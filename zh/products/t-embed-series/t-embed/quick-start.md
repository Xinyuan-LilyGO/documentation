---
title: 快速开始
show_source: false
---

# T-Embed 快速开始
## 依赖库
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| FastLED | 最新| [GitHub](https://github.com/FastLED/FastLED) |
| ESP32-audioI2S | 最新| [GitHub](https://github.com/schreibfaul1/ESP32-audioI2S) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Embed.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **Build** 编译，连接 USB-C，点击 **Upload** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### LVGL

T-Embed 搭载 **1.9 英寸 ST7789V IPS TFT**20 × 170），LovyanGFX 驱动
#### 最简 LVGL v8 示例

```cpp
#define LILYGO_LGFX_USE_T_EMBED
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W 320
#define SCREEN_H 170

LilyGo_T_Embed display;
static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * SCREEN_H / 10];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    display.startWrite();
    display.setAddrWindow(area->x1, area->y1, w, h);
    display.pushPixels((uint16_t *)color_p, w * h, true);
    display.endWrite();
    lv_disp_flush_ready(drv);
}

void setup() {
    display.begin(1);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * SCREEN_H / 10);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Embed");
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

### 外设示例

#### 显示屏（LovyanGFX）
```cpp
#define LILYGO_LGFX_USE_T_EMBED
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Embed display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.setCursor(60, 75);
    display.println("T-Embed");
}

void loop() {}
```

#### APA102 LED 灯条

```cpp
#include <FastLED.h>

#define LED_DATA  39
#define LED_CLK   40
#define NUM_LEDS   7

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<APA102, LED_DATA, LED_CLK, BGR>(leds, NUM_LEDS);
    FastLED.setBrightness(50);
}

void loop() {
    for (int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Blue;
    }
    FastLED.show();
    delay(500);
    FastLED.clear(true);
    delay(500);
}
```

---

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
**Q：扬声器无声音？**  
A：确认MAX98357A I2S 功放已正确初始化，并检查I2S 引脚配置是否与实际版本一致