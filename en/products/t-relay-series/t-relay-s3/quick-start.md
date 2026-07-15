---
title: Quick Start
show_source: false
---

# T-Relay S3 Quick Start

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
   git clone https://github.com/Xinyuan-LilyGO/T-Relay-S3.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### Peripheral Examples

#### Basic Relay Control

```cpp
#define RELAY1  21
#define RELAY2  47
#define RELAY3  48
#define RELAY4   3
#define RELAY5  14
#define RELAY6  13
#define RELAY7  12
#define RELAY8  11

void setup() {
    for (int pin : {RELAY1, RELAY2, RELAY3, RELAY4,
                    RELAY5, RELAY6, RELAY7, RELAY8}) {
        pinMode(pin, OUTPUT);
        digitalWrite(pin, LOW);
    }
}

void loop() {
    digitalWrite(RELAY1, HIGH);
    delay(500);
    digitalWrite(RELAY1, LOW);
    delay(500);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What is the difference from T-Relay?**  
A: T-Relay S3 uses ESP32-S3 (faster, more GPIO), supports 8 relay channels (vs 4 on the original), and has USB-C.
