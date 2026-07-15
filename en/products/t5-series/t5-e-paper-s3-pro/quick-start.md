---
title: Quick Start
show_source: false
---

# T5-4.7 E-Paper S3 Pro Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| epd47 | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO) |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO.git
   ```
3. Open the project and select the appropriate environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the T5S3-4.7-e-paper-PRO repo and open an example sketch
3. Select board settings above and click **Upload**

---

## Notes

- **Display:** 4.7-inch ED047TC1, 960×540 px, 16-level grayscale; TPS65185 power driver (I²C 0x68) manages display voltages
- **LoRa:** SX1262 (433–915 MHz)
- **GNSS:** MIA-M10Q; first fix may take several minutes outdoors with clear sky view
- **Battery:** BQ25896 charging IC + BQ27220 fuel gauge; MagSafe magnetic charging + USB-C both supported
- **I/O expander:** PCA9535PW expands available GPIOs (I²C)

---

### LVGL

The T5-4.7 S3 Pro can run LVGL on the epd47 panel. Recommended LVGL: **8.3.x**.

#### lv_conf.h

Place `lv_conf.h` next to the `lvgl/` folder in your Arduino libraries directory:

```c
#define LV_COLOR_DEPTH    16    // 16-bit color depth for grayscale
#define LV_HOR_RES_MAX   960
#define LV_VER_RES_MAX   540
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE  (128 * 1024)   // 128KB for LVGL objects
```

#### Hello World (from examples/lvgl_test)

```cpp
#include <lvgl.h>
#include <epd47.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[960 * 60];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    
    // Write to epd47 driver
    epd47.writePixelArea(area->x1, area->y1, w, h, (uint16_t *)color_p);
    
    lv_disp_flush_ready(disp);
}

void setup() {
    Serial.begin(115200);
    
    // Initialize EPD driver
    epd47.init(/*CS*/9, /*DC*/11, /*RST*/17, /*BUSY*/13);
    
    // Initialize LVGL
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 960 * 60);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 960;
    disp_drv.ver_res = 540;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    // Create demo UI
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T5-4.7 S3 Pro\nLVGL Demo\nWith LoRa & GPS");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(10);
}
```

The `examples/lvgl_test` sketches in the repository provide complete, working integration patterns.

### Peripheral Examples

#### E-Paper Display (epd47)

```cpp
#include <epd47.h>

void setup() {
    epd47.init(/*CS*/9, /*DC*/11, /*RST*/17, /*BUSY*/13);
    epd47.clear();
    epd47.setFont(&FreeSans12pt7b);
    epd47.setCursor(20, 60);
    epd47.print("T5-4.7 S3 Pro");
    epd47.update();
}

void loop() {}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

#define LORA_CS    14
#define LORA_IRQ   13
#define LORA_RST   12
#define LORA_BUSY  15

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa init failed: %d\n", state);
    }
}

void loop() {
    radio.transmit("Hello T5 Pro");
    delay(2000);
}
```

#### GPS (MIA-M10Q — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

#define GPS_RX  44
#define GPS_TX  43

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(38400, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n", gps.location.lat(), gps.location.lng());
    }
}
```

#### SD Card (SPI)

```cpp
#include <SD.h>
#include <SPI.h>

#define SD_CS    39
#define SD_MOSI  40
#define SD_MISO  38
#define SD_SCK   41

void setup() {
    Serial.begin(115200);
    SPI.begin(SD_SCK, SD_MISO, SD_MOSI);
    if (!SD.begin(SD_CS)) {
        Serial.println("SD init failed");
        return;
    }
    Serial.printf("SD size: %llu MB\n", SD.cardSize() / (1024 * 1024));
}

void loop() {}
```

## FAQ

**Q: Display shows no grayscale — only black and white?**
A: Ensure the TPS65185 Vcom voltage is correctly set. Use the Vcom adjustment function in the epd47 driver or refer to the display's datasheet for calibration.

**Q: GNSS not getting a fix?**
A: Move outdoors with an unobstructed sky view. Cold start can take 1–5 minutes.

**Q: Cannot upload?**
A: Ensure **USB CDC On Boot** is **Enabled**. Hold BOOT + press RST to enter download mode if needed.
