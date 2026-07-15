---
title: Quick Start
show_source: false
---

# T7 (Mini32) Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/LilyGO/TTGO-T7-Demo.git
   ```
3. Open the project and select your environment in `platformio.ini`
4. Click **✓** to build, connect via USB, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Enabled** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the TTGO-T7-Demo repo and open an example sketch
3. Select **ESP32 Wrover Module** and the settings above, then click **Upload**

---

### Peripheral Examples

#### Wi-Fi (Station Mode)

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.begin("your-ssid", "your-password");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); Serial.print(".");
  }
  Serial.println("\nConnected: " + WiFi.localIP().toString());
}

void loop() { delay(1000); }
```

#### PSRAM Usage

```cpp
void setup() {
  Serial.begin(115200);
  if (psramFound()) {
    Serial.printf("PSRAM: %u bytes free\n", ESP.getFreePsram());
    uint8_t *buf = (uint8_t *)ps_malloc(1024 * 1024); // 1 MB from PSRAM
    if (buf) { Serial.println("PSRAM alloc OK"); free(buf); }
  } else {
    Serial.println("No PSRAM found");
  }
}

void loop() {}
```

---

## Notes

- **USB:** CH9102 USB-to-serial; install the CH9102 driver if the port is not detected
- **PSRAM:** 8 MB PSRAM — select **Enabled** in board settings and use **ESP32 Wrover Module** (not ESP32 Dev Module) to expose PSRAM APIs
- **STEMMA QT / Qwiic:** JST-SH I2C connector for plug-and-play sensor expansion
- **Battery:** Li-Po battery charging supported via onboard charging circuit
- **MicroPython:** Supported — flash MicroPython firmware via esptool if preferred over Arduino

---

## FAQ

**Q: PSRAM not detected?**
A: Use board **ESP32 Wrover Module** (not ESP32 Dev Module) — the Wrover definition enables PSRAM support.

**Q: Port not found?**
A: Install the CH9102 USB driver and reconnect.
