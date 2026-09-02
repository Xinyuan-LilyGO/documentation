---
title: Quick Start
show_source: false
---

# T-Display S3 AMOLED 1.75 Quick Start

## Required Libraries

Install the following libraries via the Arduino IDE Library Manager, or place them in your `libraries` folder:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| Arduino_GFX | 1.3.7 | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| Arduino_DriveBus | 1.1.16 | [GitHub](https://github.com/Llgok/Arduino_DriveBus) |
| JPEGDEC | 1.2.8 | [GitHub](https://github.com/bitbank2/JPEGDEC) |
| LVGL | 8.3.5 | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |
| SensorLib | 0.2.x | [GitHub](https://github.com/lewisxhe/SensorsLib) |

> **Note:** Use the exact library versions listed. Newer versions may break compatibility.

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Boards Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from the project `libraries/` directory into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your COM port |
| USB CDC On Boot | **Enabled** |
| USB Mode | **Hardware CDC and JTAG** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3 MB APP / 9.9 MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

> **Note:** If using battery power without USB, set **USB CDC On Boot** to **Disabled**.

#### 4. Upload

1. Connect the board via USB-C
2. Open an example sketch
3. Click **Upload**

If the upload fails, hold the **BOOT** button and try again.

---

### PlatformIO

#### 1. Setup

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75.git
   ```
3. Open the cloned folder in VS Code

#### 2. Select an Example

Open `platformio.ini` and uncomment the `src_dir` line for your example. Only one line active at a time.

#### 3. Build and Upload

- Click **✓** to compile
- Connect via USB-C
- Click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `FT3168` | Capacitive touch example |
| `GFX` | Graphics library demo |
| `SY6970` | Power management example |
| `Light_Sleep_Wake_Up` | Light sleep / wake demo |
| `Deep_Sleep_Wake_Up` | Deep sleep / wake demo |
| `PCF8563` | RTC example |
| `SD` | SD card read/write |
| `lvgl_benchmark` | LVGL performance benchmark |
| `iic_scan` | I2C device scan (ESP-IDF) |
| `touch` | Touch function test (ESP-IDF) |

---

### Peripheral Examples

#### Hello World (Arduino_GFX)

```cpp
#include <Arduino_GFX_Library.h>
#include <Arduino_DriveBus_Library.h>

extern Arduino_GFX *gfx;

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);
    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(30, 200);
    gfx->println("Hello 1.75!");
}

void loop() {}
```

> For the complete board initialization sequence, open the `GFX` example from the `T-Display-S3-AMOLED-1.43-1.75` repository.

#### Draw Shapes

```cpp
gfx->fillCircle(140, 228, 80, BLUE);
gfx->drawRect(60, 148, 160, 160, GREEN);
gfx->fillTriangle(140, 80, 60, 380, 220, 380, RED);
```

#### Touch Input (FT3168)

```cpp
#include <SensorLib.h>

SensorFT3168 touch;

void setup() {
    touch.begin(Wire, FT3168_SLAVE_ADDRESS, TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    if (touch.isAvailable()) {
        touch.read();
        Serial.printf("Touch: x=%d, y=%d\n", touch.getX(), touch.getY());
    }
}
```

#### Deep Sleep Wake-Up

```cpp
#define WAKE_PIN GPIO_NUM_0

void setup() {
    Serial.begin(115200);
    Serial.println("Woke up!");
    delay(2000);
    esp_sleep_enable_ext0_wakeup(WAKE_PIN, LOW);
    esp_deep_sleep_start();
}

void loop() {}
```

---

### LVGL

T-Display S3 AMOLED 1.75 supports LVGL 8.3.5. The display is driven via Arduino_DriveBus; LVGL uses Arduino_GFX's `draw16bitRGBBitmap` as the flush backend.

#### Setup lv_conf.h

Copy `lv_conf.h` from the project `libraries/` folder into your Arduino libraries directory at the same level as the `lvgl` folder. Key settings for this board:

```c
#define LV_COLOR_DEPTH  16
#define LV_HOR_RES_MAX  280   // 1.75-inch AMOLED: 280×456
#define LV_VER_RES_MAX  456
```

#### Minimal LVGL v8 Sketch

```cpp
#include <Arduino_GFX_Library.h>
#include <Arduino_DriveBus_Library.h>
#include <lvgl.h>

// Display is initialised by the board library helper.
// Open the GFX example from the repo to get the full init sequence.
extern Arduino_GFX *gfx;

#define SCREEN_W 280
#define SCREEN_H 456

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    // Use SensorLib FT3168 — see Touch Input example above for init
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    // Board + display init (copy from GFX example)
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
    lv_label_set_text(label, "AMOLED 1.75");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### Factory Example

The `lvgl_benchmark` example measures LVGL rendering performance on this board. Use it as a reference for buffer size tuning and draw speed optimization.

---

## FAQ

**Board keeps failing to upload**
Hold the **BOOT** button and click Upload.

**No serial output from UART**
Set **USB CDC On Boot** to **Disabled** in Arduino Tools if you need hardware UART output.

**SY6970 instability without a battery**
The PMU output is unstable at 5V without a battery. Always connect a battery, or disable the battery channel in software.
