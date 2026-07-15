---
title: Quick Start
show_source: false
---

# T-Embed Si4732 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | Latest | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| SI4735 | Latest | [GitHub](https://github.com/pu2clr/SI4735) |
| FastLED | Latest | [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Embed-Si4732.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### Board Settings

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

### LVGL

T-Embed Si4732 uses a 1.9-inch ST7789V TFT (320×170). LVGL 8.x is pre-configured via TFT_eSPI in the official repository.

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

### Peripheral Examples

#### Display (ST7789V)

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

#### Si4732 AM/FM Radio

```cpp
#include <SI4735.h>

SI4735 radio;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  radio.setup(RESET_PIN, -1, CURRENT_MODE, SI473X_ANALOG_AUDIO, XOSCEN_CRYSTAL);
  radio.setFM(8400, 10800, 10390, 10);  // FM 87–108 MHz, start 103.9 MHz
  Serial.println("Si4732 FM ready");
}

void loop() {
  // Read current station info
  radio.getCurrentReceivedSignalQuality();
  uint8_t rssi = radio.getCurrentRSSI();
  Serial.print("RSSI: "); Serial.println(rssi);
  delay(1000);
}
```

#### RGB LED Strip (WS2812)

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
    leds[i] = CRGB::Green;
  }
  FastLED.show();
  delay(500);
  FastLED.clear();
  FastLED.show();
  delay(500);
}
```

---

### LVGL

T-Embed Si4732 uses a 1.9-inch ST7789V TFT (320×170). LVGL 8.x works via TFT_eSPI in the official repository.

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

### Peripheral Examples

#### Display (ST7789V)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Embed Si4732", 40, 75);
}

void loop() {}
```

#### Si4732 DSP Radio (SI4735 library)

```cpp
#include <SI4735.h>

SI4735 si4735;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  // Reset pin varies by board — check utilities.h
  si4735.setup(RESET_PIN, FM_BAND_TYPE);
  si4735.setFM(8400, 10800, 10390, 10); // 88–108 MHz, start at 103.9 MHz, step 100 kHz
  Serial.println("Si4732 FM ready");
}

void loop() {
  si4735.getCurrentReceivedSignalQuality();
  Serial.print("RSSI: ");
  Serial.print(si4735.getCurrentRSSI());
  Serial.println(" dBuV");
  delay(1000);
}
```

#### RGB LED Strip (APA102)

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

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What bands does Si4732 support?**  
A: Si4732 supports AM (520–1710 kHz), FM (64–108 MHz), and shortwave/SSB bands, making it suitable for a wide range of radio receiver projects.
