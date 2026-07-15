---
title: Quick Start
show_source: false
---

# SIM7600E Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TinyGSM | Latest | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series.git
   ```
3. Open `platformio.ini` and select the `SIM7600E` environment
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

#### LTE Data (TinyGSM)

```cpp
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

// SIM7600E UART: RX=26, TX=27, PWR_KEY=4
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
  Serial.println("GPRS connected: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS (SIM7600E built-in GNSS)

```cpp
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 26, 27);
  modem.enableGPS();
  Serial.println("GPS enabled");
}

void loop() {
  float lat, lon, speed, alt;
  int vsat, usat;
  if (modem.getGPS(&lat, &lon, &speed, &alt, &vsat, &usat)) {
    Serial.printf("Lat: %.6f Lon: %.6f Alt: %.1f\n", lat, lon, alt);
  }
  delay(2000);
}
```

---

## FAQ

**Q: Modem not responding?**  
A: Insert a valid SIM card. Connect 4G and GPS antennas. Power on the SIM7600E module using the PWR_KEY GPIO.

**Q: Which region does SIM7600E cover?**  
A: SIM7600E is the European variant supporting LTE Cat-4, WCDMA, and GSM for European/Middle Eastern/African bands.
