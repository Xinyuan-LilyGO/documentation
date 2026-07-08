---
title: T-LoRaPager Quick Start
show_source: false
---

# T-LoRaPager Quick Start

This guide covers Arduino, PlatformIO, LVGL, and peripheral usage for the T-LoRaPager. For hardware specs and pin mapping, see the [T-LoRaPager product page](index.md).

## Pin Definitions

Copy this block into every sketch — all examples below reference these constants.

```cpp
// Display (ST7796, SPI shared bus)
#define BOARD_DISP_BL       42   // Backlight (AW9364)
#define BOARD_DISP_CS       38
#define BOARD_DISP_DC       37
#define BOARD_DISP_RST      -1   // No reset pin

// Shared SPI bus (Display, SD, NFC, LoRa)
#define BOARD_SPI_SCK       35
#define BOARD_SPI_MOSI      34
#define BOARD_SPI_MISO      33

// SD Card
#define BOARD_SDCARD_CS     21

// LoRa (SX1262 / SX1280)
#define RADIO_CS_PIN        36
#define RADIO_DIO1_PIN      14
#define RADIO_RST_PIN       47
#define RADIO_BUSY_PIN      48

// NFC (ST25R3916)
#define BOARD_NFC_CS        39
#define BOARD_NFC_INT        1

// GNSS (MIA-M10Q, UART)
#define BOARD_GPS_RX_PIN    12
#define BOARD_GPS_TX_PIN     4
#define BOARD_GPS_PPS_PIN   13

// I2C bus (Keyboard, IMU, RTC, Power, Haptic, Fuel Gauge)
#define BOARD_I2C_SCL        2
#define BOARD_I2C_SDA        3

// Keyboard (TCA8418, I2C)
#define BOARD_KB_INT         6

// Rotary Encoder
#define BOARD_ENC_A         40
#define BOARD_ENC_B         41
#define BOARD_ENC_BTN        7

// Boot / User button
#define BOARD_BOOT_PIN       0

// Audio (ES8311, I2S)
#define BOARD_I2S_WS        18
#define BOARD_I2S_BCK       11
#define BOARD_I2S_MCLK      10
#define BOARD_I2S_DOUT      45
#define BOARD_I2S_DIN       17

// GPIO Expander (XL9555, I2C addr 0x20)
// XL9555 IO2 = KB power EN, IO3 = NFC power EN, IO4 = GNSS power EN
// IO5 = NFC power, IO7 = GNSS RST, IO9 = EXT CE, IO10 = KB RST, IO14 = SD power EN
```

> **SPI bus sharing:** Display, SD card, NFC (ST25R3916), and LoRa share one SPI bus. Pull all inactive CS lines HIGH before each transaction:
> ```cpp
> digitalWrite(BOARD_DISP_CS,    HIGH);
> digitalWrite(BOARD_SDCARD_CS,  HIGH);
> digitalWrite(RADIO_CS_PIN,     HIGH);
> digitalWrite(BOARD_NFC_CS,     HIGH);
> ```

---

## Arduino

### Install Board Support

1. Open **Arduino IDE → File → Preferences**
2. Add this URL to *Additional boards manager URLs*:
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json
   ```
3. Open **Tools → Board → Boards Manager**, search **esp32**, install **esp32 by Espressif Systems**

> **Version requirement:** T-LoRaPager requires **arduino-esp32 V3.3.0-alpha1 or later**. The board definition `LilyGo-T-LoRa-Pager` is only available in V3.x. Earlier versions will error.

### Install Libraries

**Step 1 — Install LilyGoLib:**

1. Download [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip) as a ZIP
2. In Arduino IDE: **Sketch → Include Library → Add .ZIP Library** → select the downloaded ZIP

**Step 2 — Install LilyGoLib-ThirdParty:**

1. Download [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) (clone or download ZIP)
2. Copy **all folders inside** `LilyGoLib-ThirdParty/` to your Arduino `libraries/` directory (do not copy the parent folder itself)
   - Windows: `C:\Users\{Username}\Documents\Arduino\libraries`
   - macOS: `/Users/{Username}/Documents/Arduino/libraries`
   - Linux: `/home/{Username}/Arduino/libraries`

Key libraries included in ThirdParty:

| Library | Version | Purpose |
| :-----: | :-----: | :-----: |
| LilyGoLib | master | Board HAL |
| lvgl | 9.4.0 | GUI framework |
| RadioLib | 7.4.0 | LoRa / RF |
| XPowersLib | 0.3.1 | Power management (BQ25896/BQ27220) |
| SensorLib | 0.3.3 | IMU (BHI260AP), RTC (PCF85063A), Haptic (DRV2605) |
| TinyGPSPlus | 1.1.0 | GNSS NMEA parsing |
| ESP8266Audio | 2.0.0 | Audio playback |
| Adafruit TCA8418 | 1.0.2 | Keyboard controller |
| Adafruit BusIO | 1.17.0 | I2C/SPI abstraction |
| NFC-RFAL Fork | 1.0.1 | NFC stack |
| ST25R3916 Fork | 1.1.0 | NFC driver |

> Do **not** upgrade libraries when Arduino IDE prompts — the ThirdParty versions are tested together. Confirm normal operation before upgrading.

### Board Settings

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **LilyGo-T-LoRa-Pager** |
| Port | Your port |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | 240 MHz (WiFi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core 1 |
| JTAG Adapter | Disable |
| Arduino Runs On | Core 1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | **16M Flash (3M APP/9.9MB FATFS)** |
| Board Revision | **Radio-SX1262** (match your module) |
| Upload Mode | **UART0/Hardware CDC** |
| Upload Speed | 921600 |
| USB Mode | **CDC and JTAG** |

**Board Revision** must match your RF module:
- `Radio-SX1262` — Sub-1G LoRa (most common)
- `Radio-SX1280` — 2.4G LoRa
- `Radio-CC1101` — Sub-1G FSK/OOK
- `Radio-LR1121` — Sub-1G + 2.4G LoRa
- `Radio-SI4432` — Sub-1G ISM

### Upload

Select the correct COM port, then click **Upload**.

If upload fails: hold **BOOT (GPIO0)**, press **RESET**, then release BOOT. The device enters download mode; click Upload again. Press **RESET** to exit after flashing.

---

## PlatformIO

> **Note:** PlatformIO uses a separate repository — [LilyGoLib-PlatformIO](https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO). This targets `espressif32@6.10.0` (IDF v4.4.7 / arduino-esp32 v2.0.17), which differs from the Arduino IDE path above.

### platformio.ini

```ini
[platformio]
default_envs = tlora_pager
; Uncomment the example you want to build, comment out the rest:
src_dir = examples/Factory
; src_dir = examples/LoRa
; src_dir = examples/GPS
; src_dir = examples/Keyboard
; src_dir = examples/Audio
; src_dir = examples/NFC

[env_arduino]
platform      = espressif32@6.10.0
framework     = arduino
upload_speed  = 921600
monitor_speed = 115200
build_flags =
    -D ARDUINO_LILYGO_LORA_SX1262
    ; -D ARDUINO_LILYGO_LORA_SX1280
    ; -D ARDUINO_LILYGO_LORA_CC1101
    ; -D ARDUINO_LILYGO_LORA_LR1121
    ; -D ARDUINO_LILYGO_LORA_SI4432
    -DRADIOLIB_EXCLUDE_RF69
    -DRADIOLIB_EXCLUDE_SX1231
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
lib_deps =
    LilyGoLib
    lvgl @ 9.4.0
    RadioLib @ 7.4.0
    XPowersLib @ 0.3.1
    SensorLib @ 0.3.3
    TinyGPSPlus @ 1.1.0
    ESP8266Audio @ 2.0.0
    Adafruit TCA8418 @ 1.0.2
    Adafruit BusIO @ 1.17.0
    NFC-RFAL-fork @ 1.0.1
    ST25R3916-fork

[env:tlora_pager]
extends       = env_arduino
board         = lilygo-t-lora-pager
build_flags   =
    ${env_arduino.build_flags}
    -D ARDUINO_T_LORA_PAGER
    -I variants/lilygo_tlora_pager
```

### Steps

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Install the **PlatformIO IDE** extension in VS Code
3. Clone [LilyGoLib-PlatformIO](https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO) and open the folder in VS Code
4. PlatformIO auto-installs dependencies on first build
5. In `platformio.ini`, uncomment the `src_dir` line for your target example, and select the correct `ARDUINO_LILYGO_LORA_*` build flag for your RF module
6. Click **✓** to compile, then **→** to upload

---

## LVGL

T-LoRaPager uses **LVGL v9.4.0** with the LilyGoLib display driver. The display is 480 × 222 (ST7796 IPS), no touch — interaction uses the rotary encoder and keyboard.

### lv_conf.h

Place `lv_conf.h` in your Arduino libraries folder (same level as `lvgl/`). Minimum settings for T-LoRaPager:

```c
#define LV_COLOR_DEPTH       16
#define LV_HOR_RES_MAX      480
#define LV_VER_RES_MAX      222
#define LV_TICK_CUSTOM        1
#define LV_TICK_CUSTOM_INCLUDE  "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR  (millis())
#define LV_MEM_SIZE    (128 * 1024U)   // 128 KB — increase if PSRAM available
```

> LVGL v9 changed the API from v8. If you're porting v8 code, note `lv_disp_draw_buf_t` → `lv_draw_buf_t`, and `lv_disp_drv_t` → use `lv_display_create()`.

### Hello World (LVGL v9)

```cpp
#include <lvgl.h>
// LilyGoLib handles display init — include the board header
#include <LilyGoLib.h>

static lv_color_t buf1[480 * 20];

void disp_flush(lv_display_t *disp, const lv_area_t *area, uint8_t *px_map) {
    // LilyGoLib provides the push method via the board object
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    board.display->pushImageDMA(area->x1, area->y1, w, h, (uint16_t *)px_map);
    lv_display_flush_ready(disp);
}

void setup() {
    board.begin();   // Initializes display, keyboard, power, etc.

    lv_init();

    lv_display_t *disp = lv_display_create(480, 222);
    lv_display_set_flush_cb(disp, disp_flush);
    lv_display_set_buffers(disp, buf1, NULL, sizeof(buf1), LV_DISPLAY_RENDER_MODE_PARTIAL);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Hello T-LoRaPager!");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

### Rotary Encoder as LVGL Input

```cpp
#include <lvgl.h>

static int32_t enc_diff = 0;
static lv_indev_state_t enc_state = LV_INDEV_STATE_RELEASED;

void encoder_read(lv_indev_t *indev, lv_indev_data_t *data) {
    data->enc_diff = enc_diff;
    data->state    = enc_state;
    enc_diff = 0;
}

void IRAM_ATTR onEncA() {
    // Read B to determine direction
    enc_diff += (digitalRead(BOARD_ENC_B) == LOW) ? 1 : -1;
}

void setup() {
    // ... LVGL display init as above ...

    pinMode(BOARD_ENC_A,   INPUT_PULLUP);
    pinMode(BOARD_ENC_B,   INPUT_PULLUP);
    pinMode(BOARD_ENC_BTN, INPUT_PULLUP);
    attachInterrupt(BOARD_ENC_A, onEncA, FALLING);

    lv_indev_t *enc_indev = lv_indev_create();
    lv_indev_set_type(enc_indev, LV_INDEV_TYPE_ENCODER);
    lv_indev_set_read_cb(enc_indev, encoder_read);
}
```

---

## Peripheral Examples

### Display (LilyGoLib / ST7796)

LilyGoLib provides a unified `board` object that wraps the display driver.

```cpp
#include <LilyGoLib.h>

void setup() {
    board.begin();
    board.display->fillScreen(TFT_BLACK);
    board.display->setTextColor(TFT_WHITE, TFT_BLACK);
    board.display->setTextSize(2);
    board.display->drawString("T-LoRaPager", 160, 96);
}
```

### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(RADIO_CS_PIN, RADIO_DIO1_PIN, RADIO_RST_PIN, RADIO_BUSY_PIN);

void setup() {
    // Pull all other SPI CS pins HIGH first
    pinMode(BOARD_DISP_CS,   OUTPUT); digitalWrite(BOARD_DISP_CS,   HIGH);
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(BOARD_NFC_CS,    OUTPUT); digitalWrite(BOARD_NFC_CS,    HIGH);
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);

    // 915 MHz, 125 kHz BW, SF7, CR4/5, private sync, 22 dBm
    int state = radio.begin(915.0, 125.0, 7, 5, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa init failed: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello LoRa");
    Serial.printf("TX: %d\n", state);
    delay(2000);
}
```

### Keyboard (TCA8418 — I²C)

```cpp
#include <Adafruit_TCA8418.h>

Adafruit_TCA8418 keypad;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!keypad.begin(TCA8418_DEFAULT_ADDR, &Wire)) {
        Serial.println("TCA8418 not found");
    }
    keypad.matrix(6, 10);   // T-LoRaPager: 6 rows × 10 cols (60 keys routed, 34 used)
    keypad.flush();
}

void loop() {
    if (keypad.available()) {
        int key = keypad.getEvent();
        bool pressed = key & 0x80;
        key &= 0x7F;
        if (pressed) {
            Serial.printf("Key press: %d\n", key);
        }
    }
}
```

### Rotary Encoder

```cpp
volatile int32_t encoderPos = 0;

void IRAM_ATTR onEncA() {
    encoderPos += (digitalRead(BOARD_ENC_B) == LOW) ? 1 : -1;
}

void setup() {
    pinMode(BOARD_ENC_A,   INPUT_PULLUP);
    pinMode(BOARD_ENC_B,   INPUT_PULLUP);
    pinMode(BOARD_ENC_BTN, INPUT_PULLUP);
    attachInterrupt(BOARD_ENC_A, onEncA, FALLING);
}

void loop() {
    Serial.printf("Encoder: %d  Button: %s\n",
        encoderPos,
        digitalRead(BOARD_ENC_BTN) == LOW ? "pressed" : "released");
    delay(100);
}
```

### GNSS (MIA-M10Q — TinyGPSPlus)

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
        Serial.printf("Lat: %.6f  Lon: %.6f  Alt: %.1f m\n",
            gps.location.lat(), gps.location.lng(), gps.altitude.meters());
    }
}
```

### IMU (BHI260AP — SensorLib)

```cpp
#include <SensorLib.h>

SensorBHI260AP imu;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!imu.begin(Wire)) {
        Serial.println("BHI260AP not found");
        return;
    }
    imu.configure(SENSOR_ID_ACC_PASS, 100);   // Accelerometer at 100 Hz
}

void loop() {
    imu.update();
    float x, y, z;
    imu.getAccelerometer(x, y, z);
    Serial.printf("Accel: X=%.2f Y=%.2f Z=%.2f\n", x, y, z);
    delay(10);
}
```

### Audio (ES8311 — I²S)

```cpp
#include <driver/i2s.h>
#include <Wire.h>

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);

    // I2S for audio output
    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
        .sample_rate          = 44100,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 8,
        .dma_buf_len          = 512,
        .use_apll             = true,
    };
    i2s_pin_config_t pins = {
        .mck_io_num   = BOARD_I2S_MCLK,
        .bck_io_num   = BOARD_I2S_BCK,
        .ws_io_num    = BOARD_I2S_WS,
        .data_out_num = BOARD_I2S_DOUT,
        .data_in_num  = BOARD_I2S_DIN,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
    // ES8311 codec init via I2C (address 0x18) handled by LilyGoLib board.begin()
}
```

### RTC (PCF85063A — SensorLib)

```cpp
#include <SensorLib.h>

SensorPCF85063A rtc;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!rtc.begin(Wire)) {
        Serial.println("PCF85063A not found");
        return;
    }
    // Set time: year, month, day, hour, minute, second
    rtc.setDateTime(2025, 1, 1, 12, 0, 0);
}

void loop() {
    RTC_DateTime dt = rtc.getDateTime();
    Serial.printf("%04d-%02d-%02d %02d:%02d:%02d\n",
        dt.year, dt.month, dt.day, dt.hour, dt.minute, dt.second);
    delay(1000);
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

T-LoRaPager uses **LilyGoLib**, which is built on top of Arduino for ESP32. Pure ESP-IDF development is not officially supported with a project template. For IDF-based development:

1. Create a new IDF project: `idf.py create-project t-lorapager`
2. Set target: `idf.py set-target esp32s3`
3. Use the pin definitions from the [Pin Definitions](#pin-definitions) section above
4. Configure PSRAM in `menuconfig`: **Component config → ESP PSRAM → Enable**, set to **Octal PSRAM**
5. Set Flash size to 16 MB in `menuconfig`: **Serial flasher config → Flash size → 16 MB**
6. Refer to the [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)

---

## MicroPython

LILYGO provides a MicroPython firmware for the T-LoRaPager. Check [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib) releases for the latest `.bin` firmware file.

### Flash MicroPython

1. Download `esptool`: `pip install esptool`
2. Erase flash:
   ```bash
   esptool.py --chip esp32s3 --port COM_PORT erase_flash
   ```
3. Flash the MicroPython firmware:
   ```bash
   esptool.py --chip esp32s3 --port COM_PORT --baud 921600 \
     write_flash -z 0x0 micropython_t_lorapager_vX.X.X.bin
   ```
4. Connect with a serial terminal (115200 baud) to access the REPL

### Basic MicroPython Example

```python
from machine import Pin, I2C, SPI, UART
import time

# Encoder
enc_a = Pin(40, Pin.IN, Pin.PULL_UP)
enc_btn = Pin(7, Pin.IN, Pin.PULL_UP)

# GNSS via UART
gps_uart = UART(1, baudrate=9600, tx=4, rx=12)

# I2C for sensors/keyboard
i2c = I2C(0, scl=Pin(2), sda=Pin(3), freq=400000)

print("T-LoRaPager MicroPython ready")
print("I2C devices:", [hex(x) for x in i2c.scan()])

while True:
    if gps_uart.any():
        line = gps_uart.readline()
        if line and line.startswith(b'$GNGGA'):
            print("GPS:", line.decode('utf-8', 'ignore').strip())
    time.sleep_ms(100)
```
