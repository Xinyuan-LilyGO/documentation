---
title: Quick Start
show_source: false
---

# T-Display-S3-AMOLED Quick Start

## Required Libraries

Before compiling any example, install the following libraries via Arduino IDE Library Manager or by placing them in your `libraries` folder:

| Library | Source |
| :-----: | :----: |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-AMOLED-Series | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) |
| LVGL (v8.x) | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |
| SensorLib | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| XPowersLib | [GitHub](https://github.com/lewisxhe/XPowersLib) |

> **LVGL version:** Most examples use LVGL v8. Only `examples/lvgl_version_9` uses v9. Do not mix v8 examples with a v9 `lv_conf.h`.

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE -> **File** -> **Preferences**
2. Add the following URL to *Additional Boards Manager URLs*:
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** -> **Board** -> **Boards Manager**, search for `esp32`, and install **esp32 by Espressif Systems**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your COM port |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128 Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3 MB APP / 9.9 MB FATFS)** |
| Upload Mode | **UART0 / Hardware CDC** |
| Upload Speed | **921600** |
| USB Mode | **CDC and JTAG** |

> **Note:** If running on battery without USB, set **USB CDC On Boot** to **Disabled** to avoid a startup block.

#### 3. Upload

1. Connect the board via USB-C
2. Open the example sketch (e.g. `examples/Factory/Factory.ino`)
3. Click **Upload**

If the port keeps disconnecting, manually enter download mode:
1. Hold **BOOT**
2. Press and release **RST**
3. Release **BOOT**
4. Click **Upload** in IDE

---

### PlatformIO

#### 1. Setup

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
   ```
3. Open the cloned folder in VS Code

#### 2. Select an Example

Open `platformio.ini` and uncomment the `src_dir` line for your target example. Make sure only **one** `src_dir` is active at a time:

```ini
; Only one src_dir should be uncommented at a time
src_dir = examples/Factory
; src_dir = examples/AdjustBrightness
; src_dir = examples/LVGL_Rotation
```

#### 3. Build and Upload

- Click **Build** (Build) in the PlatformIO toolbar
- Connect the board via USB-C
- Click **Upload** (Upload)

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `LilyGo_LovyanGFX_Board_Test` | Unified LilyGo_LovyanGFX board display test |
| `Factory` | Factory test / default demo |
| `AdjustBrightness` | Adjust display brightness |
| `LVGL_Rotation` | Screen rotation with LVGL |
| `Touchpad` | Capacitive touch input (touch version only) |
| `Lvgl_Images` | Color test with LVGL images |
| `LVGL_SD_Images` | Display images from SD card via LVGL |
| `SPI_SDCard` | External SPI SD card access |
| `USB_Host_Keyboard_Mouse` | USB host mode (requires USB CDC On Boot disabled) |
| `TWAI_SelfTest` | CAN bus (TWAI) self-test |
| `QWIIC_GPS_Shield` | GPS via QWIIC connector |
| `QWIIC_I2C_Scan` | I2C device scanner via QWIIC |
| `lvgl/get_started` | LVGL v8 getting started |
| `lvgl/font` | LVGL v8 font demo |
| `lvgl/event` | LVGL v8 event handling |
| `lvgl_version_9` | LVGL v9 demo (requires LVGL v9 conf) |

---

### LVGL

The LilyGo-AMOLED-Series library ships with `LV_Helper`, which wraps all low-level driver setup (display flush callback, touch input, DMA buffers) into a single init call so you can jump straight to writing UI logic.

#### Minimal Sketch

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    amoled.begin();          // auto-detects board variant and inits display
    beginLvglHelper(amoled); // inits LVGL, registers display and touch drivers
}

void loop() {
    lv_task_handler(); // drives the LVGL event loop
    delay(5);
}
```

`amoled.begin()` auto-detects the board model (T-Display-S3-AMOLED, Pro, etc.), no manual variant selection needed.

---

#### Displaying Text (Label)

```cpp
void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Hello, LilyGo!");
    lv_obj_center(label);
}
```

---

#### Button with Event Callback

```cpp
static void btn_event_cb(lv_event_t *e) {
    lv_event_code_t code = lv_event_get_code(e);
    if (code == LV_EVENT_CLICKED) {
        lv_obj_t *label = (lv_obj_t *)lv_event_get_user_data(e);
        static int count = 0;
        char buf[32];
        snprintf(buf, sizeof(buf), "Clicks: %d", ++count);
        lv_label_set_text(label, buf);
    }
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Clicks: 0");
    lv_obj_center(label);

    lv_obj_t *btn = lv_btn_create(lv_scr_act());
    lv_obj_set_size(btn, 160, 60);
    lv_obj_align(btn, LV_ALIGN_BOTTOM_MID, 0, -20);
    lv_obj_add_event_cb(btn, btn_event_cb, LV_EVENT_ALL, label);

    lv_obj_t *btn_label = lv_label_create(btn);
    lv_label_set_text(btn_label, "Click Me");
    lv_obj_center(btn_label);
}
```

---

#### Slider

```cpp
static void slider_event_cb(lv_event_t *e) {
    lv_obj_t *slider = lv_event_get_target(e);
    lv_obj_t *label  = (lv_obj_t *)lv_event_get_user_data(e);
    char buf[16];
    snprintf(buf, sizeof(buf), "%d%%", lv_slider_get_value(slider));
    lv_label_set_text(label, buf);
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "50%");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, -40);

    lv_obj_t *slider = lv_slider_create(lv_scr_act());
    lv_obj_set_width(slider, 200);
    lv_slider_set_value(slider, 50, LV_ANIM_OFF);
    lv_obj_center(slider);
    lv_obj_add_event_cb(slider, slider_event_cb, LV_EVENT_VALUE_CHANGED, label);
}
```

---

#### Screen Rotation

Call `amoled.setRotation()` after LVGL init to change orientation. Values 0-3 map to 0°/90°/180°/270°.

```cpp
void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    amoled.setRotation(1); // landscape
    lv_disp_set_rotation(lv_disp_get_default(), LV_DISP_ROT_90);
}
```

See `examples/LVGL_Rotation` for the full rotation demo.

---

#### Animation

LVGL has a built-in animation engine that smoothly transitions any object property. The example below animates an arc from 0 to 100 in an infinite loop:

```cpp
static void set_angle(void *obj, int32_t v) {
    lv_arc_set_value((lv_obj_t *)obj, v);
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    // Create an arc widget
    lv_obj_t *arc = lv_arc_create(lv_scr_act());
    lv_obj_set_size(arc, 150, 150);
    lv_obj_center(arc);
    lv_arc_set_rotation(arc, 270);   // start position at top
    lv_arc_set_bg_angles(arc, 0, 360);
    lv_arc_set_value(arc, 0);

    // Configure the animation
    lv_anim_t a;
    lv_anim_init(&a);
    lv_anim_set_var(&a, arc);
    lv_anim_set_exec_cb(&a, set_angle);
    lv_anim_set_time(&a, 2000);                          // 2-second duration
    lv_anim_set_repeat_count(&a, LV_ANIM_REPEAT_INFINITE); // loop forever
    lv_anim_set_values(&a, 0, 100);                      // value range
    lv_anim_start(&a);
}

void loop() {
    lv_task_handler();
    delay(5);
}
```

##### Common Animation Patterns

```cpp
// Fade in/out (opacity)
lv_anim_set_exec_cb(&a, (lv_anim_exec_xcb_t)lv_obj_set_style_opa);
lv_anim_set_values(&a, LV_OPA_TRANSP, LV_OPA_COVER);

// Move along X axis
lv_anim_set_exec_cb(&a, (lv_anim_exec_xcb_t)lv_obj_set_x);
lv_anim_set_values(&a, 0, 200);

// Resize width
lv_anim_set_exec_cb(&a, (lv_anim_exec_xcb_t)lv_obj_set_width);
lv_anim_set_values(&a, 100, 300);

// Easing curve
lv_anim_set_path_cb(&a, lv_anim_path_ease_in_out); // slow-fast-slow
```

For sprite animation, start from `LilyGo_LovyanGFX_Board_Test`, create an `LGFX_Sprite`, and reuse the same board display object.

---

#### LVGL v9 Notes

The `examples/lvgl_version_9` sketch demonstrates LVGL v9. Key API changes from v8:

| v8 API | v9 equivalent |
| :----: | :-----------: |
| `lv_scr_act()` | `lv_screen_active()` |
| `lv_anim_set_time()` | `lv_anim_set_duration()` |
| `lv_obj_clear_flag()` | `lv_obj_remove_flag()` |

To use v9, rename `src/lv_conf.h.v9` to `lv_conf.h` (replacing the v8 config).

---

### Peripheral Examples

#### AMOLED Display (RM67162 via LilyGo_LovyanGFX)

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3_AMOLED
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3_AMOLED display;

void setup() {
  display.begin(1);
  display.setTextColor(TFT_GREEN, TFT_BLACK);
  display.setTextSize(2);
  display.drawString("T-Display-S3-AMOLED", 30, 110);
}

void loop() {}
```

#### Touch (CST816 touch version only)

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_Class amoled;

void setup() {
  amoled.begin();
  Serial.begin(115200);
}

void loop() {
  int16_t x, y;
  if (amoled.getPoint(&x, &y)) {
    Serial.printf("Touch: x=%d y=%d\n", x, y);
  }
  delay(10);
}
```

---

## Common Issues

**Upload port keeps disconnecting**
Manually enter download mode (hold BOOT press RST release BOOT), then upload.

**Startup hangs when running on battery**
Set **USB CDC On Boot** to **Disabled** in board settings.

**LVGL compile errors**
Check that your installed LVGL version matches the example (v8 for most examples, v9 only for `lvgl_version_9`).

**SensorLib compile errors (`readBuffer` / `updateBits` not found)**
Your SensorLib version is too new. Downgrade to **SensorLib 0.2.x** from the [Releases page](https://github.com/lewisxhe/SensorsLib/releases).

**Path too long error on Windows**
Move the sketch to a shorter path (e.g. `D:\sketches\`), or enable Windows long path support:
```powershell
reg add "HKLM\SYSTEM\CurrentControlSet\Control\FileSystem" /v LongPathsEnabled /t REG_DWORD /d 1 /f
```
Then restart Windows.
