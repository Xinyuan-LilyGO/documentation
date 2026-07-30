---
title: Quick Start
show_source: false
---

# T-Display S3 Long Quick Start

## Required Libraries

Copy all folders from the project `lib/` directory into your Arduino libraries folder:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LVGL | **8.3.0** (do not upgrade) | [GitHub](https://github.com/lvgl/lvgl) |
| Arduino_GFX | Latest | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| Adafruit_BusIO | Latest | [GitHub](https://github.com/adafruit/Adafruit_BusIO) |

> **Important:** Use LVGL **8.3.0** exactly. The project enables forced software rotation — newer versions break this.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-Long.git
   ```
3. Open `platformio.ini`, uncomment the desired example under `[platformio]`
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from the project `lib/` into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

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

> **Note:** When running on battery without USB, set **USB CDC On Boot** to **Disabled**.

#### 4. Upload

Connect via USB-C, open the example sketch, click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, release **BOOT**, then upload.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Display_Test` | AXS15231B AMOLED display test |
| `Touch_Test` | Capacitive touch test |
| `LVGL_Demo` | LVGL 8 UI demo |
| `PMU` | Power management (XPowersLib) |
| `Deep_Sleep` | Deep sleep / wake demo |
| `QWIIC` | QWIIC sensor interface demo |
| `SD_Card` | SD card read/write |
| `Factory` | Full hardware factory test |

---

### Peripheral Examples

#### Hello World (Arduino_GFX)

```cpp
#include <Arduino_GFX_Library.h>

// QSPI pins — from index.md pin mapping
#define TFT_QSPI_CS   12
#define TFT_QSPI_SCK  17
#define TFT_QSPI_D0   13
#define TFT_QSPI_D1   18
#define TFT_QSPI_D2   21
#define TFT_QSPI_D3   14
#define TFT_QSPI_RST  16
#define TFT_BL         1

Arduino_DataBus *bus = new Arduino_ESP32QSPI(
    TFT_QSPI_CS, TFT_QSPI_SCK,
    TFT_QSPI_D0, TFT_QSPI_D1, TFT_QSPI_D2, TFT_QSPI_D3);
Arduino_GFX *gfx = new Arduino_AXS15231B(bus, TFT_QSPI_RST, 0, false, 180, 640);

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    gfx->begin();
    gfx->fillScreen(BLACK);

    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(30, 300);
    gfx->println("T-Display S3 Long");
}

void loop() {}
```

#### Touch Read

```cpp
#include <Wire.h>

#define TOUCH_SCL  10
#define TOUCH_SDA  15
#define TOUCH_INT  11
#define TOUCH_RST  16
#define TOUCH_ADDR 0x3B  // verify against your firmware

void setup() {
    Serial.begin(115200);

    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);

    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (x || y) {
            Serial.printf("Gesture: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### PMU — Battery Voltage (XPowersLib)

```cpp
#include <XPowersLib.h>

XPowersAXP2101 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin(/* SDA */, /* SCL */);  // use TOUCH_SDA/SCL or dedicated PMU pins
    PMU.begin(Wire, AXP2101_SLAVE_ADDRESS);
    PMU.disableStatLed();  // stop charging LED flashing when no battery
}

void loop() {
    Serial.printf("Battery: %.2f V\n", PMU.getBattVoltage() / 1000.0f);
    delay(2000);
}
```

#### Deep Sleep + Button Wake

```cpp
#include <esp_sleep.h>

#define BTN_PIN GPIO_NUM_0

void setup() {
    Serial.begin(115200);
    Serial.println("Woke up!");
    delay(2000);

    esp_sleep_enable_ext0_wakeup(BTN_PIN, LOW);
    Serial.println("Entering deep sleep...");
    esp_deep_sleep_start();
}

void loop() {}
```

---

### LVGL

T-Display S3 Long uses **LVGL 8.3.0** with forced software rotation to handle the 180×640 portrait AMOLED. The project's LVGL helper wires up the AXS15231B flush via Arduino_GFX.

> **Do not upgrade LVGL beyond 8.3.0.** The forced software rotation patch is version-specific and will break on newer releases.

#### Setup lv_conf.h

Copy `lv_conf.h` from the project `lib/` folder into your Arduino libraries directory at the same level as the `lvgl` folder. Key settings:

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    180
#define LV_VER_RES_MAX    640
```

#### Minimal LVGL v8 Sketch

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// QSPI display init — same as Hello World above
extern Arduino_GFX *gfx;  // init gfx before calling lv_init()

#define SCREEN_W 180
#define SCREEN_H 640

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    // Wire up your touch library read here
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);
    gfx->begin();

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
    lv_label_set_text(label, "T-Display S3 Long");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### Factory Example

Open the `LVGL_Demo` or `Factory` sketch from the repository. These are the authoritative references for production-ready LVGL integration on T-Display S3 Long.

---

## FAQ

**Q: Upload keeps failing.**  
A: Hold **BOOT**, press and release **RST**, release **BOOT**, then click Upload.

**Q: Can I upgrade LVGL to v8.3.x or v9?**  
A: No. The project patches LVGL 8.3.0 for forced software rotation. Upgrading will break the display orientation.

**Q: Battery charging LED keeps flashing without a battery.**  
A: Call `PMU.disableStatLed()` in setup to silence the indicator.

**Q: How to enable OTG output?**  
A: Call `PMU.enableOTG()` via XPowersLib. Disable with `PMU.disableOTG()`.
