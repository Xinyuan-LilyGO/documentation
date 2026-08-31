---
title: Quick Start
show_source: false
---

# T-Watch Ultra Quick Start

## Dependencies

| Library | Version | Source |
| :-----: | :-----: | :----: |
| Arduino-ESP32 | **3.3.0-alpha1 or later** | [Installation guide](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html) |
| LilyGoLib | Current master | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGoLib) |
| LVGL | **9.4.0** | [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) |
| RadioLib | **7.4.0** | [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) |
| XPowersLib | **0.3.1** | [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) |

> LilyGoLib-ThirdParty contains the tested dependency versions. Do not upgrade those libraries until the `helloworld` example runs correctly. See the [complete T-Watch Ultra dependency list](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/docs/third_party.md#t-watch-ultra-third-party).

---

## Arduino

### PlatformIO

The main LilyGoLib repository uses Arduino-ESP32 3.x, which PlatformIO does not currently support for this device. Use the separate [LilyGoLib-PlatformIO](https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO) repository, which uses Arduino-ESP32 2.0.17 (ESP-IDF 4.4.7):

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension.
2. Clone the PlatformIO repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO.git
   ```
3. Follow that repository's environment instructions for T-Watch Ultra.

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **LilyGo T-Watch-Ultra** |
| Port | Device port |
| Upload Speed | 921600 |
| Upload Mode | **UART0 / Hardware CDC** |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Core Debug Level | None |
| Erase All Flash Before Sketch Upload | Disabled |
| JTAG Adapter | Disabled |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Board Revision | **Radio-SX1262** (select the installed radio) |

Board Revision options:

- `Radio-SX1262`: Sub-GHz LoRa
- `Radio-SX1280`: 2.4 GHz LoRa
- `Radio-CC1101`: Sub-GHz (G)MSK, (G)FSK, ASK, and OOK
- `Radio-LR1121`: Sub-GHz and 2.4 GHz LoRa
- `Radio-SI4432`: Sub-GHz ISM

The dedicated board definition automatically configures 16 MB QSPI Flash and 8 MB QSPI PSRAM. Do not select **ESP32S3 Dev Module**.

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software).
2. Add `https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json` to **Additional Boards Manager URLs**, then install Arduino-ESP32 **3.3.0-alpha1 or later**.
3. Download [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip), then select **Sketch** → **Include Library** → **Add .ZIP Library**.
4. Download [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) and copy the folders inside it to the Arduino `libraries` directory. Do not copy only the outer repository folder.
5. Open **File** → **Examples** → **LilyGoLib** → **helloworld**.
6. Apply the board settings above, select the port, and click **Upload**.

If there is no serial output, verify that **USB CDC On Boot** is **Enabled**.

---

### LVGL

T-Watch Ultra uses **LVGL 9.4.0** through `LilyGoLib`. The library handles AMOLED initialization, touch input, and display flushing.

#### Hello World

```cpp
#include <LilyGoLib.h>
#include <LV_Helper.h>

void setup() {
    instance.begin();
    beginLvglHelper(instance);

    lv_obj_t *label = lv_label_create(lv_screen_active());
    lv_label_set_text(label, "T-Watch Ultra");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(2);
}
```

---

### Peripheral Examples

#### Display (AMOLED — LilyGoLib)

```cpp
#include <LilyGoLib.h>

void setup() {
    instance.begin();
    instance.setBrightness(200);
    // Fill screen red
    uint16_t w = instance.width(), h = instance.height();
    uint16_t *buf = (uint16_t *)ps_malloc(w * h * 2);
    if (buf) {
        for (int i = 0; i < w * h; i++) buf[i] = 0xF800;
        instance.pushColors(0, 0, w - 1, h - 1, buf);
        free(buf);
    }
}

void loop() {}
```

#### Touch

```cpp
#include <LilyGoLib.h>

void setup() {
    instance.begin();
}

void loop() {
    int16_t x, y;
    if (instance.getPoint(&x, &y, 1)) {
        Serial.printf("Touch X=%d Y=%d\n", x, y);
    }
    delay(10);
}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <LilyGoLib.h>

void setup() {
    Serial.begin(115200);
    instance.begin(); // Initializes the selected radio and its power rail
    radio.setFrequency(915.0);
}

void loop() {
    radio.transmit("Hello T-Watch Ultra");
    delay(2000);
}
```

#### GPS (MIA-M10Q — TinyGPSPlus)

```cpp
#include <LilyGoLib.h>

void setup() {
    Serial.begin(115200);
    instance.begin(); // Initializes MIA-M10Q on Serial1 (RX=44, TX=43)
}

void loop() {
    while (Serial1.available()) instance.gps.encode(Serial1.read());
    if (instance.gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n",
                      instance.gps.location.lat(), instance.gps.location.lng());
    }
}
```

#### PMU (AXP2101 — LilyGoLib)

```cpp
#include <LilyGoLib.h>

void setup() {
    instance.begin();
    Serial.printf("Battery: %u mV\n", instance.getBattVoltage());
    Serial.printf("Charging: %s\n", instance.isCharging() ? "Yes" : "No");
}

void loop() {}
```

---

## Notes

- **NFC**: ST25R3916 — the LilyGoLib includes a ready-to-use NFC driver
- **Microphone (T3902)**: PDM microphone; LilyGoLib initializes its GPIO17 clock and GPIO18 data interface
- **GNSS**: MIA-M10Q multi-constellation GPS; allow 60–90 seconds for cold fix outdoors
- **MicroSD**: Maximum 32 GB, formatted as FAT32
- **Power button**: Hold 1 s to power on; hold 6 s to power off

---

## FAQ

**Q: Cannot upload?**
A: Connect USB-C, hold **BOOT**, press and release **RST**, then release **BOOT**. Upload the sketch and press **RST** to exit download mode.

**Q: AMOLED display is blank after upload?**
A: Ensure **Board** is **LilyGo T-Watch-Ultra**, **USB CDC On Boot** is **Enabled**, and the partition scheme is **16M Flash (3MB APP/9.9MB FATFS)**.
