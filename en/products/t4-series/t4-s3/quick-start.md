---
title: T4-S3 Quick Start
show_source: false
---

# T4-S3 Quick Start

This guide covers Arduino, PlatformIO, LVGL, and peripheral usage for the **T4-S3**. For hardware specs and pin mapping, see the [T4-S3 product page](index.md).

---

## Pin Definitions

The T4-S3 uses the `LilyGo_AMOLED` library which abstracts all hardware access. The pin constants below are for reference; you generally do not need to define them manually.

```cpp
// Display (RM690B0 via QSPI)
#define BOARD_DISP_DATA0    14
#define BOARD_DISP_DATA1    10
#define BOARD_DISP_DATA2    16
#define BOARD_DISP_DATA3    12
#define BOARD_DISP_SCK      15
#define BOARD_DISP_CS       11
#define BOARD_DISP_RESET    13
#define BOARD_DISP_TE       18   // Tearing Effect - do NOT use for other purposes

// Touch (CS226SE I2C)
#define BOARD_TOUCH_SDA      6
#define BOARD_TOUCH_SCL      7
#define BOARD_TOUCH_IRQ      8
#define BOARD_TOUCH_RST     17

// PMU (SY6970 I2C, shares I2C bus with touch)
#define BOARD_PMU_SDA        6
#define BOARD_PMU_SCL        7
#define BOARD_PMU_IRQ        5
#define BOARD_PMU_EN         9   // PMIC power enable

// SD card (SPI)
#define BOARD_SD_MISO        4
#define BOARD_SD_MOSI        2
#define BOARD_SD_SCK         3
#define BOARD_SD_CS          1

// Button
#define BOARD_BOOT_PIN       0
```

> **GPIO18 / TE pin:** GPIO18 is internally connected to the AMOLED display TE (tearing effect) signal. Do not use it for any other purpose.

---

## Arduino

### Arduino IDE

#### Install Board Support

1. Open **Arduino IDE -> File -> Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Open **Tools -> Board -> Boards Manager**, search **esp32**, install **esp32 by Espressif Systems**

> **Version note:** The `LilyGo-AMOLED-Series` library requires **arduino-esp32 秒2.0.5 and < 3.0.0**. Versions >= 3.0.0 are not supported.

#### Install Libraries

Copy all folders from the project `libdeps/` directory to your Arduino Sketchbook `libraries/` folder, or install via Library Manager:

| Library | Version | Purpose |
| :-----: | :-----: | :------ |
| LovyanGFX | latest | Display drawing backend |
| LilyGo-display-library | latest | T4-S3 display quick wrapper |
| LilyGo-AMOLED-Series | latest | Board HAL, display, touch, PMU |
| lvgl | 8.4.0 | GUI framework (v8) |
| XPowersLib | 0.2.7 | PMU (SY6970 / AXP2101) |
| SensorLib | 0.2.4 | Touch (CS226SE) |
| TinyGPSPlus | 1.0.3 | GNSS NMEA parsing (Qwiic shield) |
| Adafruit NeoPixel | 1.11.0 | NeoPixel LED (1.47-inch model only) |

#### Board Settings

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### Upload

Select the correct COM port and click **Upload**.

If upload fails: hold **BOOT** (GPIO0), press and release **RST**, then click Upload.

---

### PlatformIO

#### platformio.ini

```ini
[platformio]
default_envs = T-Display-AMOLED
src_dir = examples/Factory
; src_dir = examples/Touchpad
; src_dir = examples/lvgl/widgets/btn
; src_dir = examples/PPM_Example_for_T4S3
; src_dir = examples/SPI_SDCard
boards_dir = boards

[env:T-Display-AMOLED]
platform     = espressif32@6.12.0
board        = T-Display-AMOLED
framework    = arduino
upload_speed = 921600
monitor_speed = 115200
lib_extra_dirs = ${PROJECT_DIR}
build_flags =
    -DBOARD_HAS_PSRAM
    -DLV_CONF_INCLUDE_SIMPLE
    -DDISABLE_ALL_LIBRARY_WARNINGS
    -DARDUINO_USB_CDC_ON_BOOT=1
    -DCORE_DEBUG_LEVEL=1
lib_deps =
    lovyan03/LovyanGFX
    lvgl/lvgl@8.4.0
    lewisxhe/XPowersLib@0.2.7
    lewisxhe/SensorLib@0.2.4
    mikalhart/TinyGPSPlus@1.0.3
    adafruit/Adafruit NeoPixel@1.11.0
```

#### Steps

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Install the **PlatformIO IDE** extension in VS Code
3. Clone the `LilyGo-AMOLED-Series` repository and open it in VS Code
4. PlatformIO will download dependencies automatically on first build
5. Uncomment the `src_dir` for the example you want to run
6. Click **Build** to compile, *** to upload

---

### LVGL

The T4-S3 uses **LVGL v8.4.0** via the `LilyGo_AMOLED` library. The display driver, touch input, and flush callbacks are handled by `beginLvglHelper()` you do not need to configure them manually.

#### lv_conf.h

Place `lv_conf.h` next to the `lvgl/` folder in your Arduino libraries directory. Key settings used by this board:

```c
#define LV_COLOR_DEPTH       16
#define LV_COLOR_16_SWAP      1    // required for QSPI AMOLED
#define LV_MEM_CUSTOM         1
#define LV_MEM_CUSTOM_INCLUDE <esp32-hal-psram.h>
#define LV_MEM_CUSTOM_ALLOC   ps_malloc
#define LV_MEM_CUSTOM_FREE    free
#define LV_MEM_CUSTOM_REALLOC ps_realloc
#define LV_TICK_CUSTOM        1
#define LV_TICK_CUSTOM_INCLUDE  "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR  (millis())
```

#### Hello World (LVGL v8)

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);

    // beginAMOLED_241() initialises the 2.41-inch AMOLED (RM690B0) on T4-S3
    if (!amoled.beginAMOLED_241()) {
        Serial.println("Display init failed");
        while (true) delay(1000);
    }

    // Set up LVGL with display + touch in one call
    beginLvglHelper(amoled);

    // Create a label
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Hello T4-S3!");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_24, 0);
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop()
{
    lv_task_handler();
    delay(2);
}
```

---

### Peripheral Examples

#### Examples

| Example | Description |
| :-----: | :---------- |
| `LilyGo_LovyanGFX_Board_Test` | Unified LilyGo_LovyanGFX board display test |
| [display_touch](examples/display_touch/display_touch.ino) | LVGL UI showing live touch coordinates, a 5-entry touch log, and a dot that follows the finger |

#### Display (RM690B0 via QSPI AMOLED)

The 2.41-inch AMOLED uses RM690B0 over QSPI. For simple drawing or AI-generated display examples, use the `LilyGo_T4_S3` wrapper from `LilyGo_LovyanGFX`.

```cpp
#define LILYGO_LGFX_USE_T4_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T4_S3 display;

void setup()
{
    display.begin(0, 200);
    display.enableFrameBuffer(true);
    display.fillScreen(TFT_BLACK);
    display.drawRect(0, 0, display.width(), display.height(), TFT_CYAN);
    display.setTextDatum(textdatum_t::middle_center);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.drawString("T4-S3", display.width() / 2, display.height() / 2 - 24, &fonts::Font4);
    display.setTextColor(TFT_GREEN, TFT_BLACK);
    display.drawString("LovyanGFX", display.width() / 2, display.height() / 2 + 24, &fonts::Font2);
}

void loop() {}
```

#### Touch (CS226SE)

Touch is handled automatically by `beginAMOLED_241()`. Use `getPoint()` to poll coordinates.

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);
    amoled.beginAMOLED_241();
}

void loop()
{
    int16_t x, y;
    if (amoled.getPoint(&x, &y, 1)) {
        Serial.printf("Touch X=%d  Y=%d\n", x, y);
    }
    delay(10);
}
```

#### SD Card (SPI)

The T4-S3 has an onboard MicroSD slot. Call `amoled.installSD()` to mount it with the default pins (MISO=4, MOSI=2, SCK=3, CS=1).

```cpp
#include <LilyGo_AMOLED.h>
#include <SD.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);
    amoled.beginAMOLED_241();

    if (!amoled.installSD()) {
        Serial.println("SD card mount failed");
        return;
    }
    Serial.printf("SD card size: %llu MB\n", SD.cardSize() / (1024 * 1024));

    // List root
    File root = SD.open("/");
    File f = root.openNextFile();
    while (f) {
        Serial.println(f.name());
        f = root.openNextFile();
    }
}

void loop() {}
```

#### PMU (SY6970)

The SY6970 power management IC is accessed via the `amoled.BQ` object (PowersBQ25896-compatible API via SY6970).

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_AMOLED amoled;

void setup()
{
    Serial.begin(115200);
    amoled.beginAMOLED_241();

    Serial.printf("Battery voltage : %u mV\n", amoled.getBattVoltage());
    Serial.printf("VBUS voltage    : %u mV\n", amoled.getVbusVoltage());
    Serial.printf("Charging        : %s\n",    amoled.isCharging() ? "Yes" : "No");
    Serial.printf("Battery present : %s\n",    amoled.isBatteryConnect() ? "Yes" : "No");
}

void loop() {}
```

#### Brightness Control

```cpp
amoled.setBrightness(128);   // 0 (off) to 255 (full)
uint8_t level = amoled.getBrightness();
```

#### Sleep / Wake

```cpp
// Enter display sleep (keeps MCU running)
amoled.disp_sleep();

// Wake display
amoled.disp_wakeup();

// Deep sleep (touch pad can wake the device)
amoled.sleep(true);   // true = enable touchpad wakeup
```

#### Qwiic / I2C Expansion

The two Qwiic (JST-SH 1.0 mm) ports expose the I2C bus (SDA=6, SCL=7). Use standard `Wire` calls:

```cpp
#include <Wire.h>

void setup()
{
    Wire.begin(6, 7);   // SDA=6, SCL=7

    // Scan for I2C devices
    for (uint8_t addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        if (Wire.endTransmission() == 0) {
            Serial.printf("Found I2C device at 0x%02X\n", addr);
        }
    }
}
```

---

## ESP-IDF

No official ESP-IDF project template exists for the T4-S3. For IDF development:

1. Create a new project: `idf.py create-project t4-s3`
2. Set target: `idf.py set-target esp32s3`
3. Enable PSRAM in `menuconfig`: **Component config -> ESP PSRAM -> Enable**, type = **Octal PSRAM**
4. Set Flash to 16 MB: **Serial flasher config -> Flash size -> 16 MB**
5. Refer to [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)

---

## FAQ

* **Q. The screen shows nothing after upload.**
  A. Make sure PSRAM is set to **OPI PSRAM** in Arduino IDE. The library checks `BOARD_HAS_PSRAM` at compile time and will abort if PSRAM is not enabled.

* **Q. Upload fails.**
  A. Hold **BOOT** (GPIO0), press and release **RST**, then click Upload. Release BOOT after the upload starts.

* **Q. `beginAMOLED_241()` returns false.**
  A. Ensure the arduino-esp32 core is >= 2.0.5 and < 3.0.0. Version 3.x is not currently supported by the library.

* **Q. Which `begin()` function should I use?**
  A. Use `amoled.beginAMOLED_241()` for T4-S3 (2.41-inch). Alternatively, `amoled.begin()` auto-detects the board but `beginAMOLED_241()` is more reliable.
