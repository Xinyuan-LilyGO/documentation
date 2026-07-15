---
title: Quick Start
show_source: false
---

# T-SIM7670G-S3 Quick Start

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
3. Open `platformio.ini` and select the `T-SIM7670G-S3` environment
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

#### LTE Data (TinyGSM)

```cpp
#define TINY_GSM_MODEM_SIM7672
#include <TinyGsmClient.h>

// SIM7670G UART: RX=4, TX=5, PWR_KEY=12
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 4, 5);
  // Power on modem
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH); delay(1000);
  digitalWrite(12, LOW);  delay(2000);

  modem.restart();
  Serial.println("Modem: " + modem.getModemInfo());
  modem.gprsConnect("your.apn", "", "");
  Serial.println("Connected: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS (SIM7670G built-in GNSS)

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

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: SIM7670G not connecting?**  
A: Insert a valid nano SIM with LTE Cat-1 service. Connect the LTE and GPS antennas. Power on the modem using the PWR_KEY GPIO.
