---
title: Quick Start
show_source: false
---

# T-Display S3 AMOLED Plus Quick Start

## Required Libraries

Install the following libraries via the Arduino IDE Library Manager, or place them in your `libraries` folder:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LVGL | 8.3.9 | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| Arduino_GFX | Latest | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | 0.2.x | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| AceButton | Latest | [GitHub](https://github.com/bxparks/AceButton) |

> **Note:** Use SensorLib 0.2.x. Version 0.3.x is incompatible.

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
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
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
| `Factory` | Factory test |
| `LovyanGFX` / `Arduino_GFX` | AMOLED graphics library demo |
| `Arduino_GFX` | Arduino_GFX library demo |
| `LVGL` | LVGL GUI demo |
| `LoRa` | LoRa communication example |
| `PowerManagement` | Power management example |
| `RTC` | RTC example |

See the full [LilyGo-AMOLED-Series](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) repository for all examples.

---

### Peripheral Examples

#### Minimal LVGL Sketch

The Plus uses the `LilyGo-AMOLED-Series` library with auto-detection:

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Display-S3\nAMOLED Plus");
    lv_obj_center(label);
}

void loop() {
    lv_task_handler();
    delay(5);
}
```

#### Button with Event Callback

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

static void btn_cb(lv_event_t *e) {
    lv_obj_t *label = (lv_obj_t *)lv_event_get_user_data(e);
    static int count = 0;
    char buf[32];
    snprintf(buf, sizeof(buf), "Clicks: %d", ++count);
    lv_label_set_text(label, buf);
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Clicks: 0");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, -40);

    lv_obj_t *btn = lv_btn_create(lv_scr_act());
    lv_obj_set_size(btn, 160, 60);
    lv_obj_align(btn, LV_ALIGN_CENTER, 0, 30);
    lv_obj_add_event_cb(btn, btn_cb, LV_EVENT_CLICKED, label);

    lv_obj_t *btn_label = lv_label_create(btn);
    lv_label_set_text(btn_label, "Click Me");
    lv_obj_center(btn_label);
}

void loop() {
    lv_task_handler();
    delay(5);
}
```

#### LoRa Send / Receive

```cpp
#include <LoRa.h>

#define LORA_SCK  5
#define LORA_MISO 3
#define LORA_MOSI 6
#define LORA_CS   7
#define LORA_RST  8
#define LORA_IRQ  9

void setup() {
    Serial.begin(115200);
    SPI.begin(LORA_SCK, LORA_MISO, LORA_MOSI, LORA_CS);
    LoRa.setPins(LORA_CS, LORA_RST, LORA_IRQ);

    if (!LoRa.begin(915E6)) {  // 915 MHz — change to 433E6 or 868E6 as needed
        Serial.println("LoRa init failed");
        while (1);
    }
    Serial.println("LoRa ready");
}

void loop() {
    // Send a packet every 5 seconds
    LoRa.beginPacket();
    LoRa.print("Hello from T-Display-Plus");
    LoRa.endPacket();
    delay(5000);
}
```

#### Power Management (XPowersLib)

```cpp
#include <XPowersLib.h>

XPowersAXP2101 axp;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    if (!axp.begin(Wire, AXP2101_SLAVE_ADDRESS)) {
        Serial.println("PMU init failed");
    }
    float vbat = axp.getBattVoltage();
    Serial.printf("Battery voltage: %.2f V\n", vbat / 1000.0f);
}

void loop() {}
```

> Pin numbers above are illustrative — check the actual schematic in the repository for correct SPI and I2C pins for your board revision.

---

## FAQ

**Board keeps failing to upload**
Hold the **BOOT** button, press **RST** once, then click Upload.

**Which LoRa frequency bands are supported?**
Supports 433 MHz, 868 MHz, and 915 MHz. Select the appropriate band per regional regulations.

**How to use power management features?**
Use the XPowersLib library to control the AXPM65611 and BQ25896 chips for low-power operation and battery management.
