---
title: 快速开始
show_source: false
---

# T-Embed Si4732 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| SI4735 | 最新 | [GitHub](https://github.com/pu2clr/SI4735) |
| FastLED | 最新 | [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Embed-Si4732.git
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

T-Embed Si4732 搭载 1.9 英寸 ST7789V TFT（320×170）。官方仓库中已通过 TFT_eSPI 预配置 LVGL 8.x。

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
  lv_label_set_text(label, "T-Embed Si4732");
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
  tft.setTextColor(TFT_GREEN, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Embed Si4732", 30, 75);
}

void loop() {}
```

#### Si4732 DSP 调幅/调频收音机（SI4735 库）

```cpp
#include <SI4735.h>

SI4735 si4735;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  // 复位引脚因板子不同而有差异 — 请查阅 utilities.h
  si4735.setup(RESET_PIN, FM_BAND_TYPE);
  si4735.setFM(8400, 10800, 10390, 10); // 88–108 MHz，起始 103.9 MHz，步长 100 kHz
  Serial.println("Si4732 FM 就绪");
}

void loop() {
  si4735.getCurrentReceivedSignalQuality();
  Serial.print("RSSI: ");
  Serial.print(si4735.getCurrentRSSI());
  Serial.println(" dBuV");
  delay(1000);
}
```

#### RGB LED 灯条（APA102）

```cpp
#include <FastLED.h>

#define LED_CLK  14
#define LED_DATA 13
#define NUM_LEDS 8

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<APA102, LED_DATA, LED_CLK, BGR>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  for (int i = 0; i < NUM_LEDS; i++) leds[i] = CRGB::Green;
  FastLED.show();
  delay(500);
  FastLED.clear();
  FastLED.show();
  delay(500);
}
```

---

## 常见问题

**Q：Si4732 支持哪些波段？**  
A：Si4732 支持 AM（520–1710 kHz）、FM（64–108 MHz）以及短波/SSB 波段，适用于多种无线电接收项目。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
