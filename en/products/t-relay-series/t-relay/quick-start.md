---
title: Quick Start
show_source: false
---

# T-Relay Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| (No external libraries required) | — | — |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Relay.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB, click **→** to upload

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
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### 3. Upload

Connect via USB and click **Upload**.

---

### Peripheral Examples

#### Basic Relay Control

```cpp
// T-Relay GPIO pin definitions (adjust to your version)
#define RELAY1  21
#define RELAY2  19
#define RELAY3  18
#define RELAY4   5

void setup() {
    pinMode(RELAY1, OUTPUT);
    pinMode(RELAY2, OUTPUT);
    pinMode(RELAY3, OUTPUT);
    pinMode(RELAY4, OUTPUT);
    // Relays are active-HIGH
    digitalWrite(RELAY1, LOW);
    digitalWrite(RELAY2, LOW);
    digitalWrite(RELAY3, LOW);
    digitalWrite(RELAY4, LOW);
}

void loop() {
    digitalWrite(RELAY1, HIGH);  // Turn relay 1 ON
    delay(1000);
    digitalWrite(RELAY1, LOW);   // Turn relay 1 OFF
    delay(1000);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: Relays not switching?**  
A: Verify the relay control GPIO pins for your board version. T-Relay uses active-HIGH control by default.

**Q: What load can T-Relay switch?**  
A: Each relay channel can switch up to 10 A at 250 VAC or 30 VDC. Do not exceed these ratings.
