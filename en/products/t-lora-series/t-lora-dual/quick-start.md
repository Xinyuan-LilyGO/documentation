---
title: Quick Start
show_source: false
---

# T-LoRa Dual Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. Open `platformio.ini`, uncomment the `T-LoRa-Dual` environment
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

#### LoRa Radio 1 (SX1262 — 868/915 MHz)

```cpp
#include <RadioLib.h>

// Radio 1: CS=10, IRQ=11, RST=12, BUSY=13
SX1262 radio1 = new Module(10, 11, 12, 13);

void setup() {
  Serial.begin(115200);
  int state = radio1.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio1 init failed: "); Serial.println(state);
    while (true);
  }
  radio1.setOutputPower(22);
  Serial.println("Radio 1 ready");
}

void loop() {
  int state = radio1.transmit("Hello from Radio 1");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Radio1 Sent OK");
  delay(2000);
}
```

#### LoRa Radio 2 (SX1262 — 433 MHz)

```cpp
#include <RadioLib.h>

// Radio 2: CS=4, IRQ=5, RST=6, BUSY=7
SX1262 radio2 = new Module(4, 5, 6, 7);

void setup() {
  Serial.begin(115200);
  int state = radio2.begin(433.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio2 init failed: "); Serial.println(state);
    while (true);
  }
  radio2.setOutputPower(22);
  Serial.println("Radio 2 ready");
}

void loop() {
  String received;
  int state = radio2.receive(received);
  if (state == RADIOLIB_ERR_NONE) {
    Serial.print("Radio2 Received: "); Serial.println(received);
  }
  delay(100);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What does "Dual" mean in T-LoRa Dual?**  
A: T-LoRa Dual integrates two LoRa radio modules on a single board, enabling simultaneous dual-band or dual-channel LoRa communication.
