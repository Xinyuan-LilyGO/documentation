---
title: Quick Start
show_source: false
---

# T7-S3 Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-T7-S3.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the LilyGo-T7-S3 repo and open an example sketch
3. Select board settings above and click **Upload**

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
    uint8_t *buf = (uint8_t *)ps_malloc(512 * 1024); // 512 KB from PSRAM
    if (buf) { Serial.println("PSRAM alloc OK"); free(buf); }
  } else {
    Serial.println("No PSRAM");
  }
}

void loop() {}
```

---

## Notes

- **PSRAM:** 8 MB OPI PSRAM — select **OPI PSRAM** in Arduino IDE
- **USB-C with OTG:** Supports USB OTG for connecting peripherals
- **STEMMA QT / Qwiic:** JST-SH I2C connector for sensor expansion
- **Battery:** Li-Po battery charging supported

---

## FAQ

**Q: Cannot upload — port not found?**
A: Ensure **USB CDC On Boot** is **Enabled**. Hold BOOT + press RST to enter download mode if needed.

**Q: PSRAM not available?**
A: Select **OPI PSRAM** in the PSRAM setting — do not leave it as "Disabled".
