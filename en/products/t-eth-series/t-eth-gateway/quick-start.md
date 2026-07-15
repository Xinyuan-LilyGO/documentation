---
title: Quick Start
show_source: false
---

# T-ETH Gateway Shield Quick Start

## Overview

T-ETH Gateway Shield is an expansion board designed for the **T-ETH-Elite** mainboard. It adds LoRa (SX1276/SX1262/SX1280/LR1121) and optional GPS (L76K) capabilities.

---

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Setup

1. Mount the gateway shield onto the T-ETH-Elite mainboard
2. Install the LoRa and GPS antennas
3. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
4. Select the gateway shield example in `platformio.ini`
5. Build and upload

---

### Peripheral Examples

#### LoRa (SX1262 — on gateway shield)

```cpp
#include <RadioLib.h>

// SX1262 — check LilyGO-T-ETH-Series schematic for exact CS/IRQ/RST/BUSY
SX1262 radio = new Module(10, 3, 9, 4);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio init failed: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1262 ready");
}

void loop() {
  int state = radio.transmit("Hello Gateway");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### GPS (L76K)

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

---

## FAQ

**Q: Does T-ETH Gateway Shield work standalone?**  
A: No. It requires the T-ETH-Elite mainboard.

**Q: Which LoRa modules are supported?**  
A: SX1276, SX1262, SX1280, and LR1121 — select the appropriate module variant when ordering.
