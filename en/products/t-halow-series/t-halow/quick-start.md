---
title: Quick Start
show_source: false
---

# T-HaLow Quick Start

## Overview

T-HaLow is based on the **ESP32** + **Morse Micro MM6108** Wi-Fi HaLow (802.11ah) chipset, operating in the sub-1 GHz band for long-range, low-power IoT.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Halow.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

---

### Peripheral Examples

#### Wi-Fi HaLow Station (802.11ah)

```cpp
// T-HaLow uses the Morse Micro MM6108 via SPI
// The LilyGO-T-Halow library wraps the MM6108 driver
#include <T_HaLow.h>

void setup() {
  Serial.begin(115200);
  // Initialize HaLow module
  HaLow.begin();
  // Connect to a HaLow AP (802.11ah — requires HaLow-capable router)
  HaLow.connect("your-halow-ssid", "your-password");
  while (!HaLow.connected()) {
    delay(500); Serial.print(".");
  }
  Serial.println("\nHaLow connected: " + HaLow.localIP().toString());
}

void loop() { delay(1000); }
```

> **Note:** Wi-Fi HaLow (802.11ah) operates in sub-1 GHz band and requires a HaLow-compatible access point. The exact API depends on the LilyGO-T-Halow library version — refer to the repository examples for the current API.

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What frequency does Wi-Fi HaLow operate on?**  
A: Wi-Fi HaLow (802.11ah) operates in the sub-1 GHz band (typically 863–868 MHz in Europe, 902–928 MHz in Americas). This provides longer range and better penetration than 2.4 GHz Wi-Fi.

**Q: Is HaLow compatible with standard Wi-Fi?**  
A: No. HaLow (802.11ah) is a separate protocol and requires HaLow-compatible access points.
