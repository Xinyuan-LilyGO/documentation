---
title: Quick Start
show_source: false
---

# T-Display Bar Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | Latest | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-Bar.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 3. Upload

Connect via USB-C, open an example, and click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

### LVGL

T-Display Bar uses a 2.25-inch ST7789 IPS LCD (76×284). LVGL 8.x works via TFT_eSPI.

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[76 * 10];
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
  tft.setRotation(0);
  lv_init();
  lv_disp_draw_buf_init(&draw_buf, buf, NULL, 76 * 10);

  static lv_disp_drv_t disp_drv;
  lv_disp_drv_init(&disp_drv);
  disp_drv.hor_res = 76;
  disp_drv.ver_res = 284;
  disp_drv.flush_cb = my_disp_flush;
  disp_drv.draw_buf = &draw_buf;
  lv_disp_drv_register(&disp_drv);

  lv_obj_t *label = lv_label_create(lv_scr_act());
  lv_label_set_text(label, "T-Display\nBar");
  lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
  lv_timer_handler();
  delay(5);
}
```

---

### Peripheral Examples

#### Display (ST7789)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Display Bar", 5, 130);
}

void loop() {}
```

#### Touch (CST816)

```cpp
#include <Wire.h>

// CST816 I2C: SDA=2, SCL=3, IRQ=21, RST=1
#define CST816_ADDR 0x15
#define TOUCH_SDA   2
#define TOUCH_SCL   3
#define TOUCH_IRQ   21
#define TOUCH_RST   1

void setup() {
  Serial.begin(115200);
  Wire.begin(TOUCH_SDA, TOUCH_SCL);
  // Reset CST816
  pinMode(TOUCH_RST, OUTPUT);
  digitalWrite(TOUCH_RST, LOW); delay(10);
  digitalWrite(TOUCH_RST, HIGH); delay(50);
  pinMode(TOUCH_IRQ, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(TOUCH_IRQ) == LOW) {
    Wire.beginTransmission(CST816_ADDR);
    Wire.write(0x02); // gesture register
    Wire.endTransmission(false);
    Wire.requestFrom(CST816_ADDR, 6);
    if (Wire.available() >= 6) {
      Wire.read(); // gesture
      uint8_t num = Wire.read();
      uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
      uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
      Serial.printf("Touch: x=%d y=%d fingers=%d\n", x, y, num);
    }
  }
  delay(10);
}
```

#### IMU (BHI260AP)

```cpp
#include <Wire.h>

// BHI260AP I2C: SDA=2, SCL=3, IRQ=18, RST=17, EN=16
#define BHI_ADDR 0x28

void setup() {
  Serial.begin(115200);
  Wire.begin(2, 3);
  // Enable BHI260AP
  pinMode(16, OUTPUT);
  digitalWrite(16, HIGH);
  delay(100);
  // Check chip ID
  Wire.beginTransmission(BHI_ADDR);
  Wire.write(0x2B); // chip ID register
  Wire.endTransmission(false);
  Wire.requestFrom(BHI_ADDR, 1);
  if (Wire.available()) {
    Serial.print("BHI260AP Chip ID: 0x");
    Serial.println(Wire.read(), HEX);
  }
}

void loop() { delay(1000); }
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.
