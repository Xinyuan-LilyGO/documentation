---
title: Quick Start
show_source: false
---

# T-ETH Elite LoRa Shield Quick Start

## Overview

T-ETH Elite LoRa Shield is an expansion board for the **T-ETH-Elite** mainboard, adding LoRa (SX1262) and optional GPS (L76K) functionality.

---

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Setup

1. Mount the LoRa shield onto the T-ETH-Elite mainboard
2. Attach the LoRa and GPS antennas
3. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
4. Open `platformio.ini` and select the LoRa shield example
5. Build and upload

---

### Peripheral Examples

#### LoRa (SX1262)

```cpp
#include <RadioLib.h>

// SX1262 on LoRa Shield — check LilyGO-T-ETH-Series schematic for CS/IRQ/RST/BUSY pins
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
  int state = radio.transmit("Hello T-ETH LoRa");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### GPS (L76K via TinyGPSPlus)

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

**Q: Does T-ETH Elite LoRa Shield work standalone?**  
A: No. It requires the T-ETH-Elite mainboard.
