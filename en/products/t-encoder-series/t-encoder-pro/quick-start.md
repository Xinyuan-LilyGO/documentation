---
title: Quick Start
show_source: false
---

# T-Encoder Pro Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | Latest | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Encoder-Pro.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **Build**, connect via USB-C, then upload

### Arduino IDE

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

## Display

T-Encoder Pro uses a **2.04-inch SH8601A AMOLED** display (390×390, QSPI). `LilyGo_T_Encoder_Pro` enables the AMOLED VCI pin and configures the QSPI display bus.

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

## Rotary Encoder

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

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What display does T-Encoder Pro use?**  
A: T-Encoder Pro uses a 390×390 SH8601A AMOLED display over QSPI, not the 240×240 GC9A01 display used by T-Encoder.
