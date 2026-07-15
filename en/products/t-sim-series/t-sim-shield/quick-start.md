---
title: Quick Start
show_source: false
---

# T-SIM Shield Quick Start

## Overview

T-SIM Shield is an expansion shield that adds cellular modem connectivity to compatible ESP32 development boards.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series.git
   ```
3. Mount the SIM Shield onto your ESP32 board
4. Open `platformio.ini` and select the appropriate environment
5. Click **✓** to build, click **→** to upload

---

### Peripheral Examples

#### Cellular Data via SIM Shield (TinyGSM)

```cpp
// Select the modem type matching your installed SIM module
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

// UART pins — check T-SIM-Shield schematic for your host board combination
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, /*RX=*/26, /*TX=*/27);
  // Power on the cellular module
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

---

## FAQ

**Q: Which boards does T-SIM Shield support?**  
A: T-SIM Shield is designed to stack with compatible ESP32 or ESP32-S3 development boards. Refer to the hardware page for the pinout compatibility list.
