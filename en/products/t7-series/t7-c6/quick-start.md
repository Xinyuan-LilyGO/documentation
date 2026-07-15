---
title: Quick Start
show_source: false
---

# T7-C6 Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T7-c6.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support (v3.x required for C6):
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the T7-c6 repo and open an example sketch
3. Select **ESP32C6 Dev Module** and the settings above, then click **Upload**

---

### Peripheral Examples

#### Wi-Fi 6 (802.11ax)

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

#### Bluetooth LE Beacon

```cpp
#include <BLEDevice.h>
#include <BLEAdvertising.h>

void setup() {
  Serial.begin(115200);
  BLEDevice::init("T7-C6");
  BLEAdvertising *adv = BLEDevice::getAdvertising();
  adv->setScanResponse(false);
  BLEDevice::startAdvertising();
  Serial.println("BLE advertising started");
}

void loop() { delay(1000); }
```

---

## Notes

- **Wi-Fi 6:** 802.11ax (2.4 GHz only), Bluetooth 5.0 LE, Thread/Zigbee (IEEE 802.15.4)
- **Power outputs:** 5 V and 3.3 V rails available on headers
- **QWIIC:** 1× QWIIC connector for I2C sensor expansion
- **Battery:** TP4065 charging IC for Li-Po battery
- **Arduino core:** Requires ESP32 Arduino core v3.x for ESP32-C6 support

---

## FAQ

**Q: Board not recognized in Arduino IDE?**
A: Ensure you have installed ESP32 Arduino core v3.x or later — the C6 is not supported in v2.x.

**Q: Thread/Zigbee not working?**
A: Thread and Zigbee require ESP-IDF v5.x and specific SDK configuration — not available directly from Arduino. Use ESP-IDF for IEEE 802.15.4 protocols.
