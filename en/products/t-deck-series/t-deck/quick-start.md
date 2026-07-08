---
title: T-Deck Quick Start
show_source: false
---

# T-Deck Quick Start

This guide covers Arduino, PlatformIO, LVGL, and peripheral usage for the T-Deck. For hardware specs and pin mapping, see the [T-Deck product page](index.md).

## Pin Definitions

Copy this block into every sketch — all examples below reference these constants.

```cpp
#define BOARD_POWERON       10   // Peripheral power rail; set HIGH when on battery
#define BOARD_I2C_SDA       18
#define BOARD_I2C_SCL        8
#define BOARD_BAT_ADC        4
#define BOARD_TOUCH_INT     16
#define BOARD_KEYBOARD_INT  46
#define BOARD_SDCARD_CS     39
#define BOARD_TFT_CS        12
#define BOARD_TFT_DC        11
#define BOARD_TFT_BACKLIGHT 42
#define BOARD_SPI_MOSI      41
#define BOARD_SPI_MISO      38
#define BOARD_SPI_SCK       40
#define BOARD_TBOX_G01       3
#define BOARD_TBOX_G02       2
#define BOARD_TBOX_G03      15
#define BOARD_TBOX_G04       1
#define BOARD_ES7210_MCLK   48
#define BOARD_ES7210_LRCK   21
#define BOARD_ES7210_SCK    47
#define BOARD_ES7210_DIN    14
#define RADIO_CS_PIN         9
#define RADIO_BUSY_PIN      13
#define RADIO_RST_PIN       17
#define RADIO_DIO1_PIN      45
#define BOARD_GPS_TX_PIN    43
#define BOARD_GPS_RX_PIN    44
#define BOARD_BOOT_PIN       0
```

> **SPI bus sharing:** T-Deck's TFT, SD card, and LoRa module share one SPI bus. Before any SPI transaction, pull the other two CS lines HIGH:
> ```cpp
> digitalWrite(BOARD_SDCARD_CS, HIGH);
> digitalWrite(BOARD_TFT_CS,    HIGH);
> digitalWrite(RADIO_CS_PIN,    HIGH);
> ```

---

## Arduino

### Install Board Support

1. Open **Arduino IDE → File → Preferences**
2. Add this URL to *Additional boards manager URLs*:
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Open **Tools → Board → Boards Manager**, search **esp32**, install **esp32 by Espressif Systems**

> **Version lock:** The T-Deck examples are tested against **arduino-esp32 2.0.14**. Versions above 2.0.14 may break `TFT_eSPI`. Stay on 2.0.14 until the upstream library is updated.

### Install Libraries

Copy all folders from the project `lib/` directory into your Arduino Sketchbook `libraries/` folder, or install them manually from Library Manager:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TFT_eSPI | latest (locked) | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| RadioLib | latest | [GitHub](https://github.com/jgromes/RadioLib) |
| LVGL | 8.4.0 | [GitHub](https://github.com/lvgl/lvgl/tree/v8.4.0) |
| Arduino_GFX | latest | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| TinyGPSPlus | latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| TouchLib | latest | [GitHub](https://github.com/mmMicky/TouchLib) |
| AceButton | latest | [GitHub](https://github.com/bxparks/AceButton) |
| ESP32-audioI2S | latest | [GitHub](https://github.com/schreibfaul1/ESP32-audioI2S) |
| SensorsLib | latest | [GitHub](https://github.com/lewisxhe/SensorsLib) |

> Do **not** upgrade libraries when Arduino IDE prompts — versions in `lib/` are tested together.

**TFT_eSPI Configuration:**

Recent versions of TFT_eSPI (2.5.34+) include a dedicated `User_Setups/Setup210_LilyGo_T_Deck.h` with `USE_HSPI_PORT` already set. To activate it, edit `User_Setup_Select.h` and make sure line 137 is uncommented:

```cpp
#include <User_Setups/Setup210_LilyGo_T_Deck.h>  // For the LilyGo T-Deck based ESP32S3 with ST7789 320 x 240 TFT
```

If your version does not have `Setup210_LilyGo_T_Deck.h`, use the pre-configured `TFT_eSPI` from `T-Deck/lib/TFT_eSPI/` — copy the entire folder to your Arduino `libraries/` directory.

> **Note:** Without `USE_HSPI_PORT` in the active setup file, the sketch will crash with `Guru Meditation Error: Core 1 panic'ed (StoreProhibited)`.

### Board Settings

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz (WiFi) |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

### Upload

Select the correct COM port, then click **Upload**.

If upload fails: hold the trackball center button (**BOOT = GPIO0**), insert USB, then click Upload. After flashing, press **RST** to exit download mode.

> The ESP32-C3 keyboard MCU is programmed separately via the 6-pin header near the RST button (top to bottom: 3V3, GND, RST, BOOT, RX, TX).

---

## PlatformIO

### platformio.ini

```ini
[wifi]
ssid     = ${sysenv.PIO_WIFI_SSID}
password = ${sysenv.PIO_WIFI_PASSWORD}

[platformio]
default_envs = T-Deck
; Uncomment the example you want to build, comment out the rest:
src_dir = examples/UnitTest
; src_dir = examples/Microphone
; src_dir = examples/Touchpad
; src_dir = examples/lvgl_example
; src_dir = examples/Keyboard_T_Deck_Master
; src_dir = examples/GPSShield
; src_dir = examples/LoRaWAN_Starter
; src_dir = examples/I2SPlay
; src_dir = examples/LvglArduinoVNC_VGA
boards_dir = boards

[env:T-Deck]
platform      = espressif32@6.3.0
board         = T-Deck
framework     = arduino
upload_speed  = 921600
monitor_speed = 115200
lib_deps =
    bodmer/TFT_eSPI
    jgromes/RadioLib
    moononournation/Arduino_GFX_Library
    mikalhart/TinyGPSPlus
    lvgl/lvgl@^8.4.0
    AceButton
    lewisxhe/SensorsLib
build_flags =
    -DBOARD_HAS_PSRAM=1
    -DCORE_DEBUG_LEVEL=1
    -DARDUINO_USB_CDC_ON_BOOT=1
    '-DWIFI_SSID="${wifi.ssid}"'
    '-DWIFI_PASSWORD="${wifi.password}"'
    -DDISABLE_ALL_LIBRARY_WARNINGS
    -DRADIOLIB_EXCLUDE_CC1101
    -DRADIOLIB_EXCLUDE_NRF24
    -DRADIOLIB_EXCLUDE_RF69
    -DRADIOLIB_EXCLUDE_SX1231
    -DRADIOLIB_EXCLUDE_SI443X
    -DRADIOLIB_EXCLUDE_RFM2X
    -DRADIOLIB_EXCLUDE_SX127X
    -DRADIOLIB_EXCLUDE_AFSK
    -DRADIOLIB_EXCLUDE_AX25
    -DRADIOLIB_EXCLUDE_HELLSCHREIBER
    -DRADIOLIB_EXCLUDE_MORSE
    -DRADIOLIB_EXCLUDE_RTTY
    -DRADIOLIB_EXCLUDE_SSTV
    -DRADIOLIB_EXCLUDE_DIRECT_RECEIVE
    -DRADIOLIB_EXCLUDE_APRS
    -DRADIOLIB_EXCLUDE_BELL
```

### Steps

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Install the **PlatformIO IDE** extension in VS Code
3. Clone the repository and open the `T-Deck` folder in VS Code
4. PlatformIO auto-installs dependencies on first build (may take a few minutes)
5. In `platformio.ini`, uncomment the `src_dir` line for the example you want
6. Click **✓** to compile, then **→** to upload

---

## LVGL

T-Deck uses **LVGL v8.4.0** with **TFT_eSPI** as the display driver. The display is 320 × 240, no touch — interaction uses the trackball.

> **TFT_eSPI version lock:** Use the `TFT_eSPI` version bundled in `lib/` and the initialization sequence from the [2024-07-26 commit](https://github.com/Xinyuan-LilyGO/T-Deck/commit/6adb8884c689f174c29a6d7172a0daa367a582eb).

### lv_conf.h

Place `lv_conf.h` in your Arduino libraries folder (same level as `lvgl/`). Minimum settings:

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    320
#define LV_VER_RES_MAX    240
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
```

### Hello World

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[320 * 10];

// Flush callback — copy LVGL render buffer to TFT
void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1, w, h);
    tft.pushColors((uint16_t *)&color_p->full, w * h, true);
    tft.endWrite();
    lv_disp_flush_ready(disp);
}

void setup() {
    // Power on peripherals (required on battery)
    pinMode(BOARD_POWERON, OUTPUT);
    digitalWrite(BOARD_POWERON, HIGH);

    // Backlight
    pinMode(BOARD_TFT_BACKLIGHT, OUTPUT);
    digitalWrite(BOARD_TFT_BACKLIGHT, HIGH);

    // TFT
    tft.begin();
    tft.setRotation(1);

    // LVGL
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 320 * 10);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res   = 320;
    disp_drv.ver_res   = 240;
    disp_drv.flush_cb  = disp_flush;
    disp_drv.draw_buf  = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    // Hello World label
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Hello T-Deck!");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

### Trackball as LVGL Input

```cpp
#include <lvgl.h>

static int16_t enc_diff = 0;
static lv_indev_state_t enc_state = LV_INDEV_STATE_REL;

// Call from ISR or polling — increment/decrement enc_diff based on G01/G02
void trackball_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    data->enc_diff = enc_diff;
    data->state    = enc_state;
    enc_diff = 0;
}

void setup() {
    // ... LVGL display init as above ...

    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init(&indev_drv);
    indev_drv.type    = LV_INDEV_TYPE_ENCODER;
    indev_drv.read_cb = trackball_read;
    lv_indev_drv_register(&indev_drv);
}
```

---

## Peripheral Examples

### Power Enable

```cpp
// Required when running on battery; safe to call on USB too.
pinMode(BOARD_POWERON, OUTPUT);
digitalWrite(BOARD_POWERON, HIGH);
```

### Display (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
    pinMode(BOARD_TFT_BACKLIGHT, OUTPUT);
    digitalWrite(BOARD_TFT_BACKLIGHT, HIGH);
    tft.begin();
    tft.setRotation(1);   // landscape
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.drawString("T-Deck", 120, 110, 4);
}
```

### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(RADIO_CS_PIN, RADIO_DIO1_PIN, RADIO_RST_PIN, RADIO_BUSY_PIN);

void setup() {
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(BOARD_TFT_CS,    OUTPUT); digitalWrite(BOARD_TFT_CS,    HIGH);
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);

    // 915 MHz, 125 kHz BW, SF7, CR4/5, private sync, 22 dBm
    int state = radio.begin(915.0, 125.0, 7, 5, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa init failed: %d\n", state);
    }
}

void loop() {
    // Transmit
    int state = radio.transmit("Hello LoRa");
    Serial.printf("TX: %d\n", state);
    delay(2000);
}
```

### Keyboard (I²C)

```cpp
#include <Wire.h>

#define KEYBOARD_ADDR 0x55

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    pinMode(BOARD_KEYBOARD_INT, INPUT_PULLUP);
}

void loop() {
    if (digitalRead(BOARD_KEYBOARD_INT) == LOW) {
        Wire.requestFrom(KEYBOARD_ADDR, 1);
        if (Wire.available()) {
            char key = Wire.read();
            Serial.printf("Key: %c\n", key);
        }
    }
}
```

### Trackball

```cpp
volatile int trackX = 0, trackY = 0;

void IRAM_ATTR onG01() { trackX++; }
void IRAM_ATTR onG02() { trackX--; }
void IRAM_ATTR onG03() { trackY++; }
void IRAM_ATTR onG04() { trackY--; }

void setup() {
    pinMode(BOARD_TBOX_G01, INPUT);
    pinMode(BOARD_TBOX_G02, INPUT);
    pinMode(BOARD_TBOX_G03, INPUT);
    pinMode(BOARD_TBOX_G04, INPUT);
    attachInterrupt(BOARD_TBOX_G01, onG01, CHANGE);
    attachInterrupt(BOARD_TBOX_G02, onG02, CHANGE);
    attachInterrupt(BOARD_TBOX_G03, onG03, CHANGE);
    attachInterrupt(BOARD_TBOX_G04, onG04, CHANGE);
}

void loop() {
    Serial.printf("Trackball X=%d Y=%d\n", trackX, trackY);
    delay(100);
}
```

### Microphone (ES7210 — I²S)

> When the microphone is active, **GPIO0 (BOOT / trackball center) is not available**.

```cpp
#include <driver/i2s.h>

void setup() {
    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
        .sample_rate          = 16000,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 4,
        .dma_buf_len          = 256,
        .use_apll             = false,
    };
    i2s_pin_config_t pins = {
        .mck_io_num   = BOARD_ES7210_MCLK,
        .bck_io_num   = BOARD_ES7210_SCK,
        .ws_io_num    = BOARD_ES7210_LRCK,
        .data_in_num  = BOARD_ES7210_DIN,
        .data_out_num = I2S_PIN_NO_CHANGE,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
}
```

### GPS (MIA-M10Q — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
    Serial.begin(115200);
    gpsSerial.begin(9600, SERIAL_8N1, BOARD_GPS_RX_PIN, BOARD_GPS_TX_PIN);
}

void loop() {
    while (gpsSerial.available()) {
        gps.encode(gpsSerial.read());
    }
    if (gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n",
            gps.location.lat(), gps.location.lng());
    }
}
```

### SD Card (SPI)

```cpp
#include <SD.h>
#include <SPI.h>

void setup() {
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);
    if (!SD.begin(BOARD_SDCARD_CS)) {
        Serial.println("SD init failed");
        return;
    }
    Serial.printf("SD size: %llu MB\n", SD.cardSize() / (1024 * 1024));
}
```

---

## ESP-IDF

The T-Deck repository does not include an official ESP-IDF project template. If you need IDF support:

1. Create a new IDF project: `idf.py create-project t-deck`
2. Set target: `idf.py set-target esp32s3`
3. Use the pin definitions from the [Pin Definitions](#pin-definitions) section above
4. Configure PSRAM in `menuconfig`: **Component config → ESP PSRAM → Enable**
5. Refer to the Espressif [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/) for driver APIs

---

## MicroPython

<!-- Official MicroPython firmware for T-Deck is not yet available. Check the repository for updates. -->
