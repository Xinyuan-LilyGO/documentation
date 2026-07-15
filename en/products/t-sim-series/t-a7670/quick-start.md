---
title: Quick Start
show_source: false
---

# T-A7670 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TinyGSM | Latest | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series.git
   ```
3. Open `platformio.ini` and select the `T-A7670X` environment
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
| PSRAM | **Enabled** |

---

### Peripheral Examples

#### LTE Call / SMS (TinyGSM)

```cpp
#define TINY_GSM_MODEM_A7670
#include <TinyGsmClient.h>

// A7670 UART: RX=26, TX=27, PWR_KEY=4
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 26, 27);
  // Power on modem
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(2000);

  modem.restart();
  Serial.println("Modem: " + modem.getModemInfo());
  modem.gprsConnect("your.apn", "", "");
  Serial.println("Connected: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS (A7670 built-in GNSS)

```cpp
void setup() {
  // modem already initialized above
  modem.enableGPS();
}

void loop() {
  float lat, lon, speed, alt;
  int vsat, usat;
  if (modem.getGPS(&lat, &lon, &speed, &alt, &vsat, &usat)) {
    Serial.printf("Lat: %.6f Lon: %.6f\n", lat, lon);
  }
  delay(2000);
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

**Q: Modem not responding?**  
A: Insert a valid SIM card. Connect the LTE and GPS antennas. Use the PWR_KEY GPIO to power on the A7670 modem.

**Q: What cellular standard does A7670 support?**  
A: A7670 supports LTE Cat-1 with 2G/3G fallback, suitable for voice calls, SMS, and data.
