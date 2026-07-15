---
title: Quick Start
show_source: false
---

# T7-C5 Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-T7-C5.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32C5 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support (v3.x required for C5):
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the LilyGo-T7-C5 repo and open an example sketch
3. Select **ESP32C5 Dev Module** and the settings above, then click **Upload**

---

### Peripheral Examples

#### Wi-Fi 6 (2.4 GHz + 5 GHz)

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.begin("your-ssid", "your-password");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); Serial.print(".");
  }
  Serial.println("\nConnected: " + WiFi.localIP().toString());
  Serial.printf("RSSI: %d dBm\n", WiFi.RSSI());
}

void loop() { delay(1000); }
```

#### Bluetooth LE Beacon

```cpp
#include <BLEDevice.h>
#include <BLEAdvertising.h>

void setup() {
  Serial.begin(115200);
  BLEDevice::init("T7-C5");
  BLEAdvertising *adv = BLEDevice::getAdvertising();
  adv->setScanResponse(false);
  BLEDevice::startAdvertising();
  Serial.println("BLE advertising started");
}

void loop() { delay(1000); }
```

---

## Notes

- **Dual-band Wi-Fi 6:** 2.4 GHz + 5 GHz (802.11ax) — first ESP32 chip to support both bands
- **Protocols:** Bluetooth 5 LE, Thread/Zigbee (IEEE 802.15.4)
- **SDK requirement:** Arduino ESP32 core v3.x+ and ESP-IDF v5.3+ are required
- **Antenna:** Onboard ceramic antenna

---

## FAQ

**Q: Board not listed in Arduino IDE?**
A: The ESP32-C5 requires Arduino ESP32 core v3.x or later. Update via Boards Manager.

**Q: 5 GHz Wi-Fi not connecting?**
A: Verify your router supports 802.11ax (Wi-Fi 6) on 5 GHz and that you are using the correct SSID/password for the 5 GHz band.
