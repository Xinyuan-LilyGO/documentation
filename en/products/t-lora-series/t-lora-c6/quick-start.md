---
title: Quick Start
show_source: false
---

# T-LoRa C6 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. Open `platformio.ini`, under `default_envs` uncomment your board name
4. Uncomment one `src_dir = xxxx` line (only one active at a time)
5. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **160 MHz (WiFi)** |
| Flash Mode | **DIO** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4M Flash with spiffs (1.2M APP/1.5MB SPIFFS)** |

#### 3. Upload

In `utilities.h`, uncomment `T3_C6`, then click **Upload**.

---

### Peripheral Examples

#### LoRa (SX1262)

```cpp
#include <RadioLib.h>

// SX1262: CS=8, IRQ=14, RST=5, BUSY=13 (T-LoRa C6)
SX1262 radio = new Module(8, 14, 5, 13);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio init failed: "); Serial.println(state);
    while (true);
  }
  radio.setOutputPower(22);
  Serial.println("SX1262 ready");
}

void loop() {
  String msg = "Hello from T-LoRa C6";
  int state = radio.transmit(msg);
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What wireless protocols does T-LoRa C6 support?**  
A: Wi-Fi 6 (802.11ax), Bluetooth 5 LE, 802.15.4 (Zigbee/Thread), and SX1262 LoRa (868/915 MHz).
