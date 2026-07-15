---
title: Quick Start
show_source: false
---

# T-PCIE Quick Start

## Overview

T-PCIE is a modular development platform that accommodates different Mini PCIe cellular/communication modules.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series.git
   ```
3. Open `platformio.ini` and select the `T-PCIE` environment
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
| PSRAM | **Enabled** |

---

### Peripheral Examples

#### Cellular Data via Mini PCIe Module (TinyGSM)

```cpp
#define TINY_GSM_MODEM_SIM7600  // Change to match your installed module
#include <TinyGsmClient.h>

// T-PCIE modem UART: RX=26, TX=27, PWR_KEY=4
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 26, 27);
  // Power on the PCIe module
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(2000);

  modem.restart();
  Serial.println("Modem: " + modem.getModemInfo());
}

void loop() { delay(1000); }
```

---

## FAQ

**Q: Which Mini PCIe modules are supported?**  
A: T-PCIE supports various SIMCom and Quectel cellular modules in Mini PCIe form factor. Check the hardware page for the confirmed compatible module list.

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.
