---
title: 快速开始
show_source: false
---

# T-Encoder Pro 快速开始
## 依赖库
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | 最新| [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Encoder-Pro.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击编译，连接 USB-C 后上传
### Arduino IDE

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

## 显示例
T-Encoder Pro 使用 **2.04 英寸 SH8601A AMOLED**（390×390，QSPI）。`LilyGo_T_Encoder_Pro` 会使用 AMOLED VCI 电源并配QSPI 屏幕总线。
```cpp
#define LILYGO_LGFX_USE_T_ENCODER_PRO
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Encoder_Pro display;

void setup() {
  display.begin(0);
  display.setTextColor(TFT_WHITE, TFT_BLACK);
  display.setTextSize(2);
  display.drawString("T-Encoder Pro", 90, 180);
}

void loop() {}
```

---

## LVGL

```cpp
#define LILYGO_LGFX_USE_T_ENCODER_PRO
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W 390
#define SCREEN_H 390

LilyGo_T_Encoder_Pro display;
static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 10];

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
  display.begin(0);
  lv_init();
  lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 10);

  static lv_disp_drv_t disp_drv;
  lv_disp_drv_init(&disp_drv);
  disp_drv.hor_res = SCREEN_W;
  disp_drv.ver_res = SCREEN_H;
  disp_drv.flush_cb = my_disp_flush;
  disp_drv.draw_buf = &draw_buf;
  lv_disp_drv_register(&disp_drv);

  lv_obj_t *label = lv_label_create(lv_scr_act());
  lv_label_set_text(label, "T-Encoder Pro");
  lv_obj_center(label);
}

void loop() {
  lv_timer_handler();
  delay(5);
}
```

---

## 旋转编码器
```cpp
#define ENC_A    1
#define ENC_B    2
#define ENC_BTN  0

volatile int encoderPos = 0;

void IRAM_ATTR onEncoderA() {
  if (digitalRead(ENC_A) == digitalRead(ENC_B)) encoderPos++;
  else encoderPos--;
}

void setup() {
  Serial.begin(115200);
  pinMode(ENC_A, INPUT_PULLUP);
  pinMode(ENC_B, INPUT_PULLUP);
  pinMode(ENC_BTN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(ENC_A), onEncoderA, CHANGE);
}

void loop() {
  Serial.println(encoderPos);
  delay(100);
}
```

---

## 常见问题

**Q：一直无法烧录？**
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
**Q：T-Encoder Pro 使用什么屏幕？**
A：T-Encoder Pro 使用 QSPI 接口的 390×390 SH8601A AMOLED，不是 T-Encoder 的 240×240 GC9A01 屏幕：