---
title: T-Deck Pro Quick Start
show_source: false
---

# T-Deck Pro Quick Start

This guide covers Arduino, PlatformIO, LVGL, and peripheral usage for the **T-Deck Pro V1.1 (branch: HD-V2-250915)**. For hardware specs and pin mapping, see the [T-Deck Pro product page](index.md).

> **Version notice:** Different hardware versions have incompatible code. This guide applies to **V1.1 only** (branch `HD-V2-250915`). For V1.0, use branch `HD-V1-250326`.

---

## Pin Definitions

Copy this block into every sketch — all examples below reference these constants.

```cpp
// I2C bus (Touch, Keyboard, IMU, Light sensor, Power management)
#define BOARD_I2C_SDA       13
#define BOARD_I2C_SCL       14

// Keyboard (TCA8418)
#define BOARD_KB_INT        15
#define BOARD_KB_LED        42

// Touch (CST328)
#define BOARD_TOUCH_INT     12
#define BOARD_TOUCH_RST     45

// Ambient light sensor (LTR553ALS)
#define BOARD_ALS_INT       16

// IMU (BHI260AP)
#define BOARD_IMU_INT       21

// Shared SPI bus (E-Paper, SD card, LoRa)
#define BOARD_SPI_SCK       36
#define BOARD_SPI_MOSI      33
#define BOARD_SPI_MISO      47

// E-Paper display (GDEQ031T10, 320×240)
#define BOARD_EPD_DC        35
#define BOARD_EPD_CS        34
#define BOARD_EPD_BUSY      37
#define BOARD_EPD_BL        45   // Screen backlight (V1.1 added)

// SD card
#define BOARD_SDCARD_CS     48

// LoRa (SX1262)
#define RADIO_CS_PIN         3
#define RADIO_BUSY_PIN       6
#define RADIO_RST_PIN        4
#define RADIO_DIO1_PIN       5

// GNSS (MIA-M10Q, UART)
#define BOARD_GPS_RX_PIN    44
#define BOARD_GPS_TX_PIN    43
#define BOARD_GPS_PPS_PIN    1

// 4G module A7682E (V2 hardware variant)
#define BOARD_4G_RI          7
#define BOARD_4G_ITR         8
#define BOARD_4G_RST         9
#define BOARD_4G_RXD        10
#define BOARD_4G_TXD        11
#define BOARD_4G_PWRKEY     40

// Audio PCM5102A (V1 hardware variant — shares pins 7/8/9 with A7682E)
#define BOARD_I2S_BCLK       7
#define BOARD_I2S_DOUT       8
#define BOARD_I2S_LRC        9

// Microphone (PDM)
#define BOARD_MIC_DATA      17
#define BOARD_MIC_CLK       18

// Motor (DRV2605, V1.1)
#define BOARD_MOTOR          2

// Power / control
#define BOARD_GPS_EN        39
#define BOARD_1V8_EN        38
#define BOARD_4G_EN         41
#define BOARD_LORA_EN       46
#define BOARD_BOOT_PIN       0
```

> **SPI bus sharing:** E-Paper, SD card, and LoRa share one SPI bus. Pull inactive CS lines HIGH before each transaction:
> ```cpp
> digitalWrite(BOARD_EPD_CS,    HIGH);
> digitalWrite(BOARD_SDCARD_CS, HIGH);
> digitalWrite(RADIO_CS_PIN,    HIGH);
> ```

> **V1 vs V2 hardware note:** PCM5102A audio (V1) and A7682E 4G (V2) share GPIO 7/8/9. The two are mutually exclusive — confirm your hardware variant before enabling either peripheral.

---

## Arduino

### Arduino IDE

#### Install Board Support

1. Open **Arduino IDE → File → Preferences**
2. Add this URL to *Additional boards manager URLs*:
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Open **Tools → Board → Boards Manager**, search **esp32**, install **esp32 by Espressif Systems**

> **Version lock:** T-Deck Pro V1.1 requires **arduino-esp32 2.0.14**. The project is not compatible with the V3.x series. Pin with 2.0.14 to avoid library breakage.

#### Install Libraries

Copy all folders from the project `lib/` directory into your Arduino Sketchbook `libraries/` folder:

| Library | Version | Purpose |
| :-----: | :-----: | :-----: |
| GxEPD2 | 1.5.5 | E-paper display driver |
| RadioLib | 6.4.2 | LoRa / SX1262 |
| SensorLib | ^0.2.0 | IMU (BHI260AP), touch (CST328), motor (DRV2605) |
| TinyGPSPlus | ^1.0.3 | GNSS NMEA parsing |
| TinyGSM | ^0.12.0 | 4G modem (A7682E) |
| lvgl | ~8.3.9 | GUI framework (v8) |
| XPowersLib | ^0.2.4 | Battery management (BQ25896/BQ27220) |
| Adafruit TCA8418 | ^1.0.1 | Keyboard controller |
| Adafruit BusIO | ^1.14.4 | I2C/SPI abstraction |
| U8g2_for_Adafruit_GFX | ^1.8.0 | Font rendering on e-paper |
| Adafruit GFX Library | ^1.11.10 | Graphics base |
| ESP32-audioI2S | v3.0.12 | Audio playback |

> Do **not** upgrade libraries when Arduino IDE prompts — versions in `lib/` are tested together. Confirm normal operation before upgrading.

#### Board Settings

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

> There is no dedicated `T-Deck-Pro` board entry in Arduino IDE — use **ESP32S3 Dev Module** and configure the settings above manually.

#### Upload

Select the correct COM port, then click **Upload**.

If upload fails: hold the **BOOT** button (GPIO0), then click Upload. After flashing, press **RST** to exit download mode.

---

### PlatformIO

#### platformio.ini

```ini
[platformio]
default_envs = T-Deck-Pro
; Uncomment the example you want to build:
src_dir = examples/factory
; src_dir = examples/EPD_Test
; src_dir = examples/LoRa_Test
; src_dir = examples/GPS_Test
; src_dir = examples/Keyboard_Test
; src_dir = examples/IMU_Test
; src_dir = examples/4G_Test
; src_dir = examples/Audio_Test
boards_dir = boards

[env:T-Deck-Pro]
platform      = espressif32@6.5.0
board         = T-Deck-Pro
framework     = arduino
upload_speed  = 921600
monitor_speed = 115200
lib_deps =
    zinggjm/GxEPD2@1.5.5
    jgromes/RadioLib@6.4.2
    lewisxhe/SensorLib@^0.2.0
    mikalhart/TinyGPSPlus@^1.0.3
    vshymanskyy/TinyGSM@^0.12.0
    lvgl/lvgl@~8.3.9
    lewisxhe/XPowersLib@^0.2.4
    adafruit/Adafruit TCA8418@^1.0.1
    adafruit/Adafruit BusIO@^1.14.4
    olikraus/U8g2_for_Adafruit_GFX@^1.8.0
    adafruit/Adafruit GFX Library@^1.11.10
    esphome/ESP32-audioI2S#v3.0.12
build_flags =
    -DBOARD_HAS_PSRAM=1
    -DARDUINO_USB_CDC_ON_BOOT=1
    -DTINY_GSM_MODEM_SIM7672
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

#### Steps

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Install the **PlatformIO IDE** extension in VS Code
3. Clone the `HD-V2-250915` branch and open the folder in VS Code
4. PlatformIO auto-installs dependencies on first build (may take a few minutes)
5. In `platformio.ini`, uncomment the `src_dir` line for the example you want
6. Click **✓** to compile, then **→** to upload

---

### LVGL

T-Deck Pro uses **LVGL v8.3.9** with GxEPD2 as the display back-end. The e-paper display is 320 × 240 (GDEQ031T10) with CST328 touch support.

> LVGL v8 API is used here (not v9). Key types: `lv_disp_draw_buf_t`, `lv_disp_drv_t`, `lv_indev_drv_t`.

#### lv_conf.h

Place `lv_conf.h` in your Arduino libraries folder (same level as `lvgl/`). Minimum settings:

```c
#define LV_COLOR_DEPTH      16
#define LV_HOR_RES_MAX     320
#define LV_VER_RES_MAX     240
#define LV_TICK_CUSTOM       1
#define LV_TICK_CUSTOM_INCLUDE  "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR  (millis())
#define LV_MEM_SIZE    (64 * 1024U)
```

#### Hello World (LVGL v8)

```cpp
#include <lvgl.h>
#include <GxEPD2_BW.h>

// GDEQ031T10 320×240
GxEPD2_BW<GxEPD2_310_GDEQ031T10, GxEPD2_310_GDEQ031T10::HEIGHT>
    display(GxEPD2_310_GDEQ031T10(BOARD_EPD_CS, BOARD_EPD_DC,
                                   /*RST*/ -1, BOARD_EPD_BUSY));

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[320 * 10];

void disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    // E-paper partial update — convert RGB565 to B/W threshold
    display.setPartialWindow(area->x1, area->y1,
                             area->x2 - area->x1 + 1,
                             area->y2 - area->y1 + 1);
    display.firstPage();
    do {
        for (int y = area->y1; y <= area->y2; y++) {
            for (int x = area->x1; x <= area->x2; x++) {
                lv_color_t c = color_p[(y - area->y1) * (area->x2 - area->x1 + 1) + (x - area->x1)];
                display.drawPixel(x, y, c.full ? GxEPD_WHITE : GxEPD_BLACK);
            }
        }
    } while (display.nextPage());
    lv_disp_flush_ready(drv);
}

void setup() {
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);
    display.init(115200);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 320 * 10);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = 320;
    disp_drv.ver_res  = 240;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Hello T-Deck Pro!");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

### Peripheral Examples

#### E-Paper Display (GxEPD2)

The GDEQ031T10 supports full, fast, and partial refresh. After 5 consecutive partial/fast refreshes, perform a full refresh to clear ghosting.

```cpp
#include <GxEPD2_BW.h>
#include <SPI.h>

GxEPD2_BW<GxEPD2_310_GDEQ031T10, GxEPD2_310_GDEQ031T10::HEIGHT>
    display(GxEPD2_310_GDEQ031T10(BOARD_EPD_CS, BOARD_EPD_DC,
                                   /*RST*/ -1, BOARD_EPD_BUSY));

void setup() {
    // Pull inactive SPI CS HIGH
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    pinMode(RADIO_CS_PIN,    OUTPUT); digitalWrite(RADIO_CS_PIN,    HIGH);

    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);
    display.init(115200);

    // Full refresh — clear screen
    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setCursor(40, 120);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.print("T-Deck Pro V1.1");
    } while (display.nextPage());
}

void loop() {}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(RADIO_CS_PIN, RADIO_DIO1_PIN, RADIO_RST_PIN, RADIO_BUSY_PIN);

void setup() {
    Serial.begin(115200);

    pinMode(BOARD_EPD_CS,    OUTPUT); digitalWrite(BOARD_EPD_CS,    HIGH);
    pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
    SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI);

    // Enable LoRa power rail
    pinMode(BOARD_LORA_EN, OUTPUT); digitalWrite(BOARD_LORA_EN, HIGH);

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

#### Keyboard (TCA8418 — I²C)

```cpp
#include <Adafruit_TCA8418.h>

Adafruit_TCA8418 keypad;

void setup() {
    Serial.begin(115200);
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!keypad.begin(TCA8418_DEFAULT_ADDR, &Wire)) {
        Serial.println("TCA8418 not found");
    }
    keypad.matrix(4, 10);   // T-Deck Pro: 4 rows × 10 cols
    keypad.flush();
}

void loop() {
    if (keypad.available()) {
        int ev = keypad.getEvent();
        bool pressed = (ev & 0x80) != 0;
        uint8_t code = ev & 0x7F;
        if (pressed) {
            Serial.printf("Key: %d\n", code);
        }
    }
}
```

#### Touch (CST328 — SensorLib)

```cpp
#include <SensorLib.h>

SensorCST328 touch;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    pinMode(BOARD_TOUCH_RST, OUTPUT);
    digitalWrite(BOARD_TOUCH_RST, HIGH);
    delay(50);

    if (!touch.begin(Wire, CST328_SLAVE_ADDRESS)) {  // 0x1A
        Serial.println("CST328 not found");
        return;
    }
}

void loop() {
    if (touch.isPressed()) {
        touch.update();
        Serial.printf("Touch X=%d Y=%d\n",
            touch.getPoint(0).x, touch.getPoint(0).y);
    }
    delay(10);
}
```

#### GNSS (MIA-M10Q — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
    Serial.begin(115200);
    // Enable GPS power
    pinMode(BOARD_GPS_EN, OUTPUT); digitalWrite(BOARD_GPS_EN, HIGH);
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

#### IMU (BHI260AP — SensorLib)

```cpp
#include <SensorLib.h>

SensorBHI260AP imu;

void setup() {
    Wire.begin(BOARD_I2C_SDA, BOARD_I2C_SCL);
    if (!imu.begin(Wire, BHI260AP_SLAVE_ADDRESS)) {  // 0x28
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

#### 4G — A7682E (V2 hardware — TinyGSM)

> This peripheral is only present on the **V2 hardware variant**. It shares GPIO 7/8/9 with the PCM5102A audio on V1 — do not enable both.

```cpp
#define TINY_GSM_MODEM_SIM7672
#include <TinyGsmClient.h>

HardwareSerial modemSerial(1);

void setup() {
    Serial.begin(115200);

    // Power on the 4G module
    pinMode(BOARD_4G_EN,     OUTPUT); digitalWrite(BOARD_4G_EN,     HIGH);
    pinMode(BOARD_4G_PWRKEY, OUTPUT);
    digitalWrite(BOARD_4G_PWRKEY, HIGH);
    delay(1000);
    digitalWrite(BOARD_4G_PWRKEY, LOW);
    delay(2000);

    modemSerial.begin(115200, SERIAL_8N1, BOARD_4G_RXD, BOARD_4G_TXD);

    TinyGsm modem(modemSerial);
    modem.restart();
    Serial.println(modem.getModemInfo());
}

void loop() {}
```

#### Audio — PCM5102A (V1 hardware — I²S)

> This peripheral is only present on the **V1 hardware variant**. It shares GPIO 7/8/9 with the A7682E 4G on V2 — do not enable both.

```cpp
#include <driver/i2s.h>

void setup() {
    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
        .sample_rate          = 44100,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 8,
        .dma_buf_len          = 512,
        .use_apll             = false,
    };
    i2s_pin_config_t pins = {
        .mck_io_num   = I2S_PIN_NO_CHANGE,
        .bck_io_num   = BOARD_I2S_BCLK,
        .ws_io_num    = BOARD_I2S_LRC,
        .data_out_num = BOARD_I2S_DOUT,
        .data_in_num  = I2S_PIN_NO_CHANGE,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
}
```

#### SD Card (SPI)

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

The T-Deck Pro repository does not include an official ESP-IDF project template. For IDF-based development:

1. Create a new IDF project: `idf.py create-project t-deck-pro`
2. Set target: `idf.py set-target esp32s3`
3. Use the pin definitions from the [Pin Definitions](#pin-definitions) section above
4. Configure PSRAM in `menuconfig`: **Component config → ESP PSRAM → Enable**, set to **Octal PSRAM**
5. Set Flash size to 16 MB: **Serial flasher config → Flash size → 16 MB**
6. Refer to the [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)

---

## V1.1 Hardware Changes from V1.0

| Change | V1.0 | V1.1 |
| :----- | :--- | :--- |
| LCD RST (IO16 freed) | Used for LCD RST | IO16 available as ALS INT |
| T-RST (IO38 freed) | Used for T-RST | IO38 used for 1V8 EN |
| Screen backlight | Not separately controlled | IO45 controls EPD backlight |
| Haptic motor driver | ERM driver | DRV2605 (I2C) |
| PSRAM supply voltage | 1.8 V | 3.3 V |

> If you see `CST3xx` in the touch section — V1.0 uses CST816S (0x15) while V1.1 uses CST328 (0x1A). Use the matching `SensorLib` class.
