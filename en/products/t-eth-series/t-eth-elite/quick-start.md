---
title: Quick Start
show_source: false
---

# T-ETH Elite Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| ETHClass2 | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
3. Open `platformio.ini` and uncomment the `T-ETH-Elite` environment
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

## Examples

| Example | Description |
| :-----: | :---------- |
| `Ethernet_HTTP` | Ethernet HTTP client |
| `Ethernet_MQTT` | MQTT over Ethernet |
| `LoRa_Sender` | LoRa packet transmission (with gateway shield) |
| `GPS_Test` | GPS module test (with gateway shield) |
| `PMU_Test` | AXP2101 power management |

---

### Peripheral Examples

#### Ethernet (ETHClass2)

```cpp
#include <ETHClass2.h>

// T-ETH Elite uses W5500 SPI Ethernet
// Pin assignments from LilyGO-T-ETH-Series/src/utilities.h
void onEthEvent(arduino_event_id_t event) {
  if (event == ARDUINO_EVENT_ETH_GOT_IP) {
    Serial.print("IP: "); Serial.println(ETH2.localIP());
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.onEvent(onEthEvent);
  ETH2.begin();
}

void loop() { delay(1000); }
```

#### GPS (L76K via TinyGPSPlus — with gateway shield)

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600, SERIAL_8N1, /*RX=*/34, /*TX=*/33);
}

void loop() {
  while (gpsSerial.available()) gps.encode(gpsSerial.read());
  if (gps.location.isUpdated()) {
    Serial.printf("Lat: %.6f Lon: %.6f\n",
      gps.location.lat(), gps.location.lng());
  }
}
```

#### PMU (AXP2101 via XPowersLib)

```cpp
#include <XPowersLib.h>

XPowersPMU pmu;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  if (!pmu.begin(Wire, AXP2101_SLAVE_ADDRESS)) {
    Serial.println("PMU init failed");
    return;
  }
  Serial.printf("Battery: %d mV\n", pmu.getBattVoltage());
}

void loop() { delay(1000); }
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: Can I use T-ETH Elite without the gateway shield?**  
A: Yes. T-ETH Elite functions as a standalone ESP32-S3 Ethernet board. The gateway shield adds LoRa/GPS expansion.
