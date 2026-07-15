---
title: 快速开始
show_source: false
---

# T-Embed CC1101 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| FastLED | 最新 | [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Embed-CC1101.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### LVGL

T-Embed CC1101 搭载 1.9 英寸 ST7789V TFT（320×170）。官方仓库中已通过 TFT_eSPI 预配置 LVGL 8.x。

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[320 * 10];
TFT_eSPI tft;

void my_disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
  uint32_t w = area->x2 - area->x1 + 1;
  uint32_t h = area->y2 - area->y1 + 1;
  tft.startWrite();
  tft.setAddrWindow(area->x1, area->y1, w, h);
  tft.pushColors((uint16_t *)&color_p->full, w * h, true);
  tft.endWrite();
  lv_disp_flush_ready(disp);
}

void setup() {
  tft.begin();
  tft.setRotation(1);
  lv_init();
  lv_disp_draw_buf_init(&draw_buf, buf, NULL, 320 * 10);

  static lv_disp_drv_t disp_drv;
  lv_disp_drv_init(&disp_drv);
  disp_drv.hor_res = 320;
  disp_drv.ver_res = 170;
  disp_drv.flush_cb = my_disp_flush;
  disp_drv.draw_buf = &draw_buf;
  lv_disp_drv_register(&disp_drv);

  lv_obj_t *label = lv_label_create(lv_scr_act());
  lv_label_set_text(label, "T-Embed CC1101");
  lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
  lv_timer_handler();
  delay(5);
}
```

---

### 外设示例

#### 显示屏（ST7789V）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Embed CC1101", 40, 75);
}

void loop() {}
```

#### CC1101 亚 GHz 无线模块

```cpp
#include <RadioLib.h>

// CC1101: CS=5, GDO0=4, RST=-1, GDO2=36
CC1101 radio = new Module(5, 4, RADIOLIB_NC, 36);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(433.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("CC1101 初始化失败: "); Serial.println(state);
    while (true);
  }
  Serial.println("CC1101 就绪");
}

void loop() {
  int state = radio.transmit("Hello CC1101");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### RGB LED 灯条（WS2812）

```cpp
#include <FastLED.h>

#define LED_PIN  38
#define NUM_LEDS 8

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB::Blue;
  }
  FastLED.show();
  delay(500);
  FastLED.clear();
  FastLED.show();
  delay(500);
}
```

---

## 常见问题

**Q：CC1101 工作在哪些频率？**  
A：CC1101 支持 315/433/868/915 MHz 亚 GHz 频段，请根据当地无线电法规在代码中配置频率。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
