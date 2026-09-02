---
title: Quick Start
show_source: false
---

# T-HaLow RJ45 Quick Start

## Overview

T-HaLow RJ45 combines **Wi-Fi HaLow (802.11ah)** with a wired **Ethernet RJ45** interface, enabling long-range wireless bridging with wired network connectivity.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Halow.git
   ```
3. Open `platformio.ini` and select the `T-HaLow-RJ45` environment
4. Click **✓** to build, connect via USB, click **→** to upload

---

### Peripheral Examples

#### Wi-Fi HaLow + Ethernet Bridge

```cpp
// T-HaLow RJ45 bridges HaLow wireless to wired Ethernet
// Use the LilyGO-T-Halow library for HaLow initialization
// and ETHClass2/Ethernet for the RJ45 side
#include <T_HaLow.h>
#include <ETHClass2.h>

void setup() {
  Serial.begin(115200);
  // Init Ethernet (RJ45)
  ETH2.begin();
  // Init HaLow (802.11ah)
  HaLow.begin();
  HaLow.connect("your-halow-ssid", "your-password");
  while (!HaLow.connected()) {
    delay(500); Serial.print(".");
  }
  Serial.println("\nHaLow connected, bridging to Ethernet");
}

void loop() { delay(1000); }
```

> **Note:** Refer to the LilyGO-T-Halow repository examples for the current bridge API and exact pin configuration.

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What is T-HaLow RJ45 used for?**  
A: It bridges Wi-Fi HaLow (sub-1 GHz long-range wireless) to a wired Ethernet network — useful for connecting IoT sensors in distant locations to a local network.
