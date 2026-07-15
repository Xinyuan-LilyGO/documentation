---
title: Quick Start
show_source: false
---

# T8 Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/LilyGO/TTGO-T8-ESP32.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, connect via Micro USB, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Frequency | **80 MHz** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Install the **CH9102F** USB driver if the port is not detected
3. Clone the TTGO-T8-ESP32 repo and open an example sketch
4. Select **ESP32 Wrover Module** and the settings above, then click **Upload**

---

### Peripheral Examples

#### SD Card (SPI)

```cpp
#include <SD.h>
#include <SPI.h>

#define SD_CS  13

void setup() {
  Serial.begin(115200);
  if (!SD.begin(SD_CS)) {
    Serial.println("SD init failed"); return;
  }
  Serial.printf("SD size: %llu MB\n", SD.cardSize() / (1024 * 1024));
  File f = SD.open("/test.txt", FILE_WRITE);
  if (f) { f.println("Hello T8"); f.close(); }
}

void loop() {}
```

#### PSRAM Usage

```cpp
void setup() {
  Serial.begin(115200);
  if (psramFound()) {
    Serial.printf("PSRAM: %u bytes free\n", ESP.getFreePsram());
    uint8_t *buf = (uint8_t *)ps_malloc(1024 * 1024);
    if (buf) { Serial.println("1 MB PSRAM alloc OK"); free(buf); }
  } else {
    Serial.println("No PSRAM found");
  }
}

void loop() {}
```

---

## Notes

- **USB:** Micro USB with CH9102F USB-to-serial; install CH9102 driver if the port is not detected
- **PSRAM:** 8 MB PSRAM — use **ESP32 Wrover Module** board definition (not ESP32 Dev Module) to enable PSRAM APIs
- **MicroSD:** TF card slot via SPI interface
- **MicroPython:** Supported — flash via esptool if preferred over Arduino
- **Hardware revisions:** V1.7 and V1.8 are pin-compatible

---

## FAQ

**Q: PSRAM not available?**
A: Use board **ESP32 Wrover Module** in Arduino IDE — the Wrover definition activates PSRAM support.

**Q: Port not found after connecting Micro USB?**
A: Install the CH9102F (CH9102) USB driver and reconnect.
