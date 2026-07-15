---
title: Quick Start
show_source: false
---

# T-SIM7000G Quick Start

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
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-SIM7000G.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via Micro USB, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |

#### 3. Upload

Connect via Micro USB and click **Upload**.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `HTTP_POST` | HTTP POST via NB-IoT/LTE-M |
| `MQTT_Publish` | MQTT publish over cellular |
| `GPS_Test` | GNSS location fix |
| `SMS_Send` | SMS messaging |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### NB-IoT / LTE-M Data (TinyGSM)

```cpp
#define TINY_GSM_MODEM_SIM7000
#include <TinyGsmClient.h>

// SIM7000G UART: RX=26, TX=27, PWR_PIN=4
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(9600, SERIAL_8N1, 26, 27);
  // Power on modem
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(3000);

  modem.restart();
  Serial.println("Modem: " + modem.getModemInfo());
  modem.setNetworkMode(38); // LTE-M + NB-IoT
  modem.gprsConnect("your.apn", "", "");
  Serial.println("Connected: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS (SIM7000G built-in GNSS)

```cpp
void setup() {
  // modem already initialized
  modem.enableGPS();
  Serial.println("GPS enabled");
}

void loop() {
  float lat, lon, speed, alt;
  int vsat, usat;
  if (modem.getGPS(&lat, &lon, &speed, &alt, &vsat, &usat)) {
    Serial.printf("Lat: %.6f Lon: %.6f Sats: %d\n", lat, lon, usat);
  }
  delay(2000);
}
```

---

## FAQ

**Q: Modem not responding?**  
A: Insert a valid nano SIM. Connect both LTE and GPS antennas. Use `PWR_PIN` to power on the SIM7000G module before sending AT commands.

**Q: GPS not getting a fix?**  
A: Move outdoors. Cold start takes 1–3 minutes with a clear sky view. Ensure the GPS antenna is connected.
