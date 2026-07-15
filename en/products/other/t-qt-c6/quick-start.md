---
title: Quick Start
show_source: false
---

# T-QT C6 Quick Start

## Required Libraries

Copy the `libraries/` folder from the repository into your Arduino libraries directory:

| Library | Source |
| :-----: | :----: |
| Arduino_GFX | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| CST816T (touch) | included in project |
| LVGL 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| QMI8658 (IMU) | included in project |

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from the project `libraries/` into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **160 MHz** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |

#### 4. Upload

Connect via USB-C, open the example sketch, click **Upload**.  
If upload fails, hold **BOOT** and retry.

---

### PlatformIO

1. Install [VS Code](https://code.visualstudio.com/) and **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-QT-C6.git
   ```
3. Open `platformio.ini`, uncomment the desired `default_envs` line
4. Click **✓** to build, connect the board, click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `GFX` | Display graphics test |
| `CST816T` | Touch gesture demo |
| `IMU` | 6-axis IMU (QMI8658) |
| `ADC_Battery` | Battery voltage reading |
| `Breathing_Light` | LED breathing effect |
| `Deep_Sleep` | Deep sleep (~172 µA) |
| `Light_Sleep` | Light sleep (~517 µA) |
| `Lvgl_CIT_SGM41562` | Factory test (V1.2) |
| `Lvgl_CIT_ETA4662` | Factory test (V1.0–V1.1) |

---

### Peripheral Examples

#### Hello World (Arduino_GFX)

```cpp
#include <Arduino_GFX_Library.h>

// Pins — refer to pin_config.h in the project
#define TFT_CS    -1
#define TFT_DC     2
#define TFT_RST    1
#define TFT_BL     3

Arduino_DataBus *bus = new Arduino_ESP32SPI(TFT_DC, TFT_CS);
Arduino_GFX *gfx = new Arduino_GC9A01(bus, TFT_RST, 0 /* rotation */, true /* IPS */);

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    gfx->begin();
    gfx->fillScreen(BLACK);

    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(25, 60);
    gfx->println("T-QT C6");
}

void loop() {}
```

#### Read Touch Gestures (CST816T)

```cpp
#include <Wire.h>

#define TOUCH_SDA   11
#define TOUCH_SCL   10
#define TOUCH_INT    9
#define TOUCH_RST    8
#define TOUCH_ADDR   0x15

void setup() {
    Serial.begin(115200);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);

    // Reset touch IC
    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);  // gesture register
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint8_t xH = Wire.read() & 0x0F;
        uint8_t xL = Wire.read();
        uint8_t yH = Wire.read() & 0x0F;
        uint8_t yL = Wire.read();
        int x = (xH << 8) | xL;
        int y = (yH << 8) | yL;
        if (gesture) {
            Serial.printf("Gesture: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### IMU — Read Accelerometer & Gyroscope (QMI8658)

```cpp
#include <Wire.h>

#define IMU_ADDR  0x6B

void setup() {
    Serial.begin(115200);
    Wire.begin();

    // Wake up QMI8658
    Wire.beginTransmission(IMU_ADDR);
    Wire.write(0x02); Wire.write(0x60);  // CTRL1: enable accel + gyro
    Wire.endTransmission();
}

void readIMU(float &ax, float &ay, float &az, float &gx, float &gy, float &gz) {
    Wire.beginTransmission(IMU_ADDR);
    Wire.write(0x35);  // ACCEL_XOUT_L
    Wire.endTransmission(false);
    Wire.requestFrom(IMU_ADDR, 12);

    int16_t raw[6];
    for (int i = 0; i < 6; i++) {
        raw[i] = Wire.read() | (Wire.read() << 8);
    }
    ax = raw[0] / 4096.0f;  ay = raw[1] / 4096.0f;  az = raw[2] / 4096.0f;
    gx = raw[3] / 64.0f;    gy = raw[4] / 64.0f;    gz = raw[5] / 64.0f;
}

void loop() {
    float ax, ay, az, gx, gy, gz;
    readIMU(ax, ay, az, gx, gy, gz);
    Serial.printf("Accel: %.2f %.2f %.2f  Gyro: %.2f %.2f %.2f\n",
                  ax, ay, az, gx, gy, gz);
    delay(100);
}
```

#### Read Battery Voltage

```cpp
// ADC pin — refer to pin_config.h
#define BAT_ADC_PIN  0

void setup() {
    Serial.begin(115200);
    analogReadResolution(12);
}

void loop() {
    int raw = analogRead(BAT_ADC_PIN);
    float voltage = raw * (3.3f / 4095.0f) * 2.0f;  // adjust divider if needed
    Serial.printf("Battery: %.2f V  (raw=%d)\n", voltage, raw);
    delay(2000);
}
```

#### Deep Sleep + Timer Wake-Up

```cpp
#include <esp_sleep.h>

#define SLEEP_SECONDS 30

void setup() {
    Serial.begin(115200);
    Serial.println("Woke up!");

    // ... do your work here ...

    Serial.printf("Sleeping %d s...\n", SLEEP_SECONDS);
    esp_sleep_enable_timer_wakeup((uint64_t)SLEEP_SECONDS * 1000000ULL);
    esp_deep_sleep_start();
}

void loop() {}
```

---

### LVGL

T-QT C6 ships with factory test firmware built on LVGL 8.3.x (`Lvgl_CIT_SGM41562` for V1.2, `Lvgl_CIT_ETA4662` for V1.0–V1.1). The sketch below shows the minimal wiring to get LVGL running on the GC9A01 round display using Arduino_GFX as the flush backend.

#### Setup lv_conf.h

Copy `lvgl` from the project `libraries/` folder to your Arduino libraries directory, then copy `lv_conf.h` from the project root to the same level as the `lvgl` folder.

#### Minimal LVGL Sketch

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// Pins — match pin_config.h
#define TFT_CS    -1
#define TFT_DC     2
#define TFT_RST    1
#define TFT_BL     3
#define SCREEN_W  128
#define SCREEN_H  128

Arduino_DataBus *bus = new Arduino_ESP32SPI(TFT_DC, TFT_CS);
Arduino_GFX *gfx = new Arduino_GC9A01(bus, TFT_RST, 0, true);

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    Wire.beginTransmission(0x15);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(0x15, 6);

    if (Wire.available() >= 6) {
        Wire.read();  // gesture
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (x < SCREEN_W && y < SCREEN_H) {
            data->state   = LV_INDEV_STATE_PR;
            data->point.x = x;
            data->point.y = y;
            return;
        }
    }
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);
    gfx->begin();

    Wire.begin(/* SDA */, /* SCL */);  // use pin_config.h values

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init(&indev_drv);
    indev_drv.type    = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register(&indev_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-QT C6");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_14, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### Factory Test Example

The factory firmware is a full LVGL-based component inspection UI that exercises the display, touch, IMU, and battery. Open `Lvgl_CIT_SGM41562` (V1.2) or `Lvgl_CIT_ETA4662` (V1.0–V1.1) in Arduino IDE and upload directly.

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold the **BOOT** button and retry.

**Q: Which factory test example should I use?**  
A: Check your board version:
- V1.0 and V1.1: use `Lvgl_CIT_ETA4662`
- V1.2: use `Lvgl_CIT_SGM41562`

**Q: The display stays black after upload.**  
A: Check the backlight pin — set it HIGH. Also verify `TFT_BL` matches `pin_config.h`.

**Q: Does T-QT C6 support Wi-Fi 6?**  
A: Yes. ESP32-C6 supports 802.11ax (Wi-Fi 6) in 2.4 GHz band, plus Bluetooth 5 LE and Zigbee/Thread (802.15.4).
