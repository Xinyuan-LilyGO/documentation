---
title: Quick Start
show_source: false
---

# T-Display S3 Pro Quick Start

## Required Libraries

Copy all folders from the project `lib/` directory to your Arduino libraries folder:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | Latest | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| Arduino_GFX | Latest | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | Latest | [GitHub](https://github.com/lewisxhe/SensorLib) |
| TouchLib | Latest | [GitHub](https://github.com/mmMicky/TouchLib) |
| JPEGDEC | Latest | [GitHub](https://github.com/bitbank2/JPEGDEC) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro.git
   ```
3. Open `platformio.ini` and uncomment the target example line under `[platformio]`
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

#### 2. Install Libraries

Copy all folders from the project `lib/` to your Arduino libraries directory (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> **Note:** Set **USB CDC On Boot** to **Disabled** when running on battery only.

#### 4. Upload

Connect via USB-C, open an example, and click Upload.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Factory` | Full factory test |
| `TFT_eSPI_Hello` | Hello World on ST7789V2 using TFT_eSPI |
| `Touch_Test` | CST816S capacitive touch test |
| `PMU_Example` | SY6970 battery management |
| `Camera` | DVP camera streaming (OV2640/OV5640) |
| `USB_HID` | USB HID keyboard/mouse demo |
| `LTR553_Sensor` | Ambient light and proximity sensor |
| `LVGL_Demo` | LVGL 8 UI demo |

---

### Peripheral Examples

#### Hello World (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

// Ensure your User_Setup.h targets ST7789V2, 222x480
TFT_eSPI tft;

#define TFT_PWR 15  // Backlight power pin

void setup() {
    pinMode(TFT_PWR, OUTPUT);
    digitalWrite(TFT_PWR, HIGH);

    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);

    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(20, 220);
    tft.println("T-Display S3 Pro");
}

void loop() {}
```

#### Read Touch (CST816S)

```cpp
#include <Wire.h>

#define TOUCH_SDA  3
#define TOUCH_SCL  2
#define TOUCH_INT 21
#define TOUCH_RST 13
#define TOUCH_ADDR 0x15

struct TouchPoint { uint16_t x, y; bool pressed; };

TouchPoint readTouch() {
    TouchPoint tp = {0, 0, false};
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);
    if (Wire.available() >= 6) {
        Wire.read(); // gesture
        uint8_t fingers = Wire.read() & 0x0F;
        tp.x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        tp.y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        tp.pressed = (fingers > 0);
    }
    return tp;
}

void setup() {
    Serial.begin(115200);
    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    TouchPoint tp = readTouch();
    if (tp.pressed) {
        Serial.printf("Touch: x=%d  y=%d\n", tp.x, tp.y);
    }
    delay(50);
}
```

#### PMU — Read Battery Voltage (SY6970)

```cpp
#include <XPowersLib.h>

// SY6970 uses I2C address 0x6A
XPowersSY6970 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin(/* SDA */, /* SCL */);
    if (!PMU.begin(Wire, SY6970_SLAVE_ADDRESS)) {
        Serial.println("PMU init failed");
        return;
    }
    // Disable charging if no battery is connected
    // PMU.disableCharge();
}

void loop() {
    Serial.printf("VBUS: %.2f V  VBAT: %.2f V  VSYS: %.2f V\n",
        PMU.getVbusVoltage() / 1000.0f,
        PMU.getBattVoltage() / 1000.0f,
        PMU.getSystemVoltage() / 1000.0f);
    delay(2000);
}
```

---

### LVGL

T-Display S3 Pro uses a 2.2-inch **ST7789V2 IPS** display (222 × 480) with **CST816S** capacitive touch. The primary display driver is **TFT_eSPI**, which uses `pushColors` for the LVGL flush callback.

#### Configure lv_conf.h

Copy `lv_conf.h` from the project `lib/` to sit beside the `lvgl` folder in your Arduino libraries directory. Key settings:

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    222
#define LV_VER_RES_MAX    480
```

#### Minimal LVGL v8 Example

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

#define TFT_PWR    15
#define SCREEN_W  222
#define SCREEN_H  480

// Touch pins
#define TOUCH_SDA   3
#define TOUCH_SCL   2
#define TOUCH_RST  13
#define TOUCH_ADDR 0x15

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1, w, h);
    tft.pushColors((uint16_t *)color_p, w * h, true);
    tft.endWrite();
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);
    if (Wire.available() >= 6) {
        Wire.read();
        uint8_t fingers = Wire.read() & 0x0F;
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (fingers > 0) {
            data->state   = LV_INDEV_STATE_PR;
            data->point.x = x;
            data->point.y = y;
            return;
        }
    }
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);

    pinMode(TFT_PWR, OUTPUT);
    digitalWrite(TFT_PWR, HIGH);
    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);

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
    lv_label_set_text(label, "T-Display S3 Pro");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### Factory Example

Open the `LVGL_Demo` or `Factory` example from the repository — these are the authoritative reference for production-grade LVGL integration on T-Display S3 Pro.

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode, then upload.

**Q: Device keeps rebooting without a battery connected?**  
A: Call `PMU.disableCharge()` during PMU initialization, or refer to the `PMU_Example`.

**Q: Screen is off or backlight is abnormal?**  
A: Check that the backlight driver matches your board version — V1.0 uses PWM, V1.1 uses constant-current. Ensure PMU is supplying power correctly.

**Q: How to distinguish V1.0 from V1.1?**  
A: Check whether "V1.1" is printed near the USB-C port. V1.1 uses a constant-current backlight driver — use the matching example.

**Q: OTG peripheral not recognized?**  
A: Enable OTG output via `PMU.enableOTG()`. Note that USB input will not charge the battery while OTG is active.
