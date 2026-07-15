---
title: Quick Start
show_source: false
---

# T-ETH Lite S3 Quick Start

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
3. Open `platformio.ini` and uncomment the `T-ETH-Lite-S3` environment
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

#### Ethernet (ETHClass2)

```cpp
#include <ETHClass2.h>

// T-ETH Lite S3 uses W5500 SPI Ethernet
// Pin definitions from LilyGO-T-ETH-Series/src/utilities.h
#define ETH_PHY_TYPE  ETH_PHY_W5500
#define ETH_PHY_CS    9
#define ETH_PHY_IRQ   21
#define ETH_PHY_RST   14
#define ETH_PHY_SCK   12
#define ETH_PHY_MISO  13
#define ETH_PHY_MOSI  11

ETHClass2 ETH2(ETH_PHY_TYPE, 1, ETH_PHY_CS, ETH_PHY_IRQ,
               ETH_PHY_RST, SPI, ETH_PHY_SCK, ETH_PHY_MISO, ETH_PHY_MOSI);

void onEthEvent(arduino_event_id_t event) {
  if (event == ARDUINO_EVENT_ETH_GOT_IP) {
    Serial.print("Ethernet IP: ");
    Serial.println(ETH2.localIP());
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.onEvent(onEthEvent);
  ETH2.begin();
}

void loop() { delay(1000); }
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What is the difference from T-ETH Lite?**  
A: T-ETH Lite S3 uses ESP32-S3 instead of ESP32, providing faster dual-core LX7 processing, more GPIO, and USB OTG support.
