---
title: Quick Start
show_source: false
---

# T-ETH Lite Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| ETHClass2 | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
3. Open `platformio.ini` and uncomment the `T-ETH-Lite` environment
4. Click **✓** to build, connect via USB-C, click **→** to upload

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
| CPU Frequency | **240 MHz (WiFi/BT)** |
| Flash Mode | **QIO** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enable** |

#### 3. Upload

Connect via USB-C and click **Upload**.

---

### Peripheral Examples

#### Ethernet HTTP Client

```cpp
#include <ETH.h>

void setup() {
    Serial.begin(115200);
    // Initialize Ethernet with RTL8201 PHY
    ETH.begin(0, -1, 23, 18, ETH_PHY_RTL8201, ETH_CLOCK_GPIO0_IN);
    while (!ETH.linkUp()) { delay(500); Serial.print("."); }
    Serial.println("\nEthernet connected: " + ETH.localIP().toString());
}

void loop() {}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: Ethernet not connecting?**  
A: Check that the ETH PHY pin definitions match your board version. Ensure PSRAM is enabled in board settings.
