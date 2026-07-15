---
title: Quick Start
show_source: false
---

# T-Watch Ultra Quick Start

## Dependencies

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LilyGoLib | latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGoLib) |
| RadioLib | latest | [GitHub](https://github.com/jgromes/RadioLib) |
| XPowersLib | latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGoLib.git
   ```
3. Open `platformio.ini`, uncomment the `T-Watch-Ultra` environment
4. Click **✓** to compile, connect USB-C, click **→** to upload

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
2. Clone the LilyGoLib repository and open an example
3. Apply the board settings above and click **Upload**

---

### LVGL

T-Watch Ultra uses **LVGL v8** via `LilyGoLib`. The library handles AMOLED display init, touch, and flush automatically.

#### Hello World

```cpp
#include <LilyGoLib.h>
#include <LV_Helper.h>

void setup() {
    watch.begin();
    beginLvglHelper(watch);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Watch Ultra");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_task_handler();
    delay(2);
}
```

---

### Peripheral Examples

#### Display (AMOLED — LilyGoLib)

```cpp
#include <LilyGoLib.h>

void setup() {
    watch.begin();
    watch.setBrightness(200);
    // Fill screen red
    uint16_t w = watch.width(), h = watch.height();
    uint16_t *buf = (uint16_t *)ps_malloc(w * h * 2);
    if (buf) {
        for (int i = 0; i < w * h; i++) buf[i] = 0xF800;
        watch.pushColors(0, 0, w, h, buf);
        free(buf);
    }
}

void loop() {}
```

#### Touch

```cpp
#include <LilyGoLib.h>

void setup() {
    watch.begin();
}

void loop() {
    int16_t x, y;
    if (watch.getPoint(&x, &y, 1)) {
        Serial.printf("Touch X=%d Y=%d\n", x, y);
    }
    delay(10);
}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

// Verify LoRa pins in LilyGoLib/src/LilyGoWatch.h for T-Watch Ultra
#define LORA_CS    36
#define LORA_IRQ   45
#define LORA_RST   42
#define LORA_BUSY  46

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) Serial.printf("LoRa init failed: %d\n", state);
}

void loop() {
    radio.transmit("Hello T-Watch Ultra");
    delay(2000);
}
```

#### GPS (MIA-M10Q — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

#define GPS_RX  10
#define GPS_TX  11

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

#### PMU (AXP2101 — LilyGoLib)

```cpp
#include <LilyGoLib.h>

void setup() {
    watch.begin();
    Serial.printf("Battery: %u mV\n", watch.getBattVoltage());
    Serial.printf("Charging: %s\n", watch.isCharging() ? "Yes" : "No");
}

void loop() {}
```

---

## Notes

- **NFC**: ST25R3916 — the LilyGoLib includes a ready-to-use NFC driver
- **Cellular (T3902)**: Requires a SIM card inserted; use the modem examples from LilyGoLib
- **GNSS**: MIA-M10Q multi-constellation GPS; allow 60–90 seconds for cold fix outdoors
- **Power button**: Hold 2 s to power on; hold 6 s to force off

---

## FAQ

**Q: Cannot upload?**
A: Hold **BOOT**, press **RST** once, release **BOOT**, then retry uploading.

**Q: AMOLED display is blank after upload?**
A: Ensure **USB CDC On Boot** is **Enabled** and partition scheme is 16M Flash (3MB APP).
