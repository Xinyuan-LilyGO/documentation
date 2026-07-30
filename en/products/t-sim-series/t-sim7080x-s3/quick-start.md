---
title: Quick Start
show_source: false
---

# T-SIM7080X-S3 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| TinyGSM | Latest | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series.git
   ```
3. Open `platformio.ini` and select the `T-SIM7080G-S3` environment used by the GitHub project
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

#### NB-IoT / LTE-M Data (TinyGSM)

```cpp
#define TINY_GSM_MODEM_SIM7080
#include <TinyGsmClient.h>

// SIM7080G UART: RX=4, TX=5, PWR_KEY=12
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 4, 5);
  // Power on modem
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH); delay(1000);
  digitalWrite(12, LOW);  delay(3000);

  modem.restart();
  Serial.println("Modem: " + modem.getModemInfo());
  modem.setNetworkMode(38); // LTE-M + NB-IoT
  modem.gprsConnect("your.apn", "", "");
  Serial.println("Connected: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
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

**Q: SIM7080G modem not responding?**  
A: Insert a valid nano SIM with NB-IoT or LTE-M service. Connect the cellular antenna. Power on the modem with the PWR key GPIO before sending AT commands.
