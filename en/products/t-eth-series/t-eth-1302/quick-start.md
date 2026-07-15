---
title: Quick Start
show_source: false
---

# T-ETH 1302 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| ETHClass2 | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
3. Open `platformio.ini` and uncomment the `T-ETH-1302` environment
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

#### Ethernet (ETHClass2)

```cpp
#include <ETHClass2.h>

#define ETH_PHY_TYPE  ETH_PHY_W5500
#define ETH_PHY_ADDR  1
#define ETH_PHY_CS    9
#define ETH_PHY_IRQ   21
#define ETH_PHY_RST   14
#define ETH_PHY_SPI   SPI
#define ETH_PHY_SCK   12
#define ETH_PHY_MISO  13
#define ETH_PHY_MOSI  11

ETHClass2 ETH2(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ,
               ETH_PHY_RST, ETH_PHY_SPI, ETH_PHY_SCK, ETH_PHY_MISO, ETH_PHY_MOSI);

void onEthEvent(arduino_event_id_t event) {
  if (event == ARDUINO_EVENT_ETH_GOT_IP) {
    Serial.print("IP: "); Serial.println(ETH2.localIP());
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.onEvent(onEthEvent);
  ETH2.begin();
}

void loop() { delay(1000); }
```

#### LoRa (SX1262)

```cpp
#include <RadioLib.h>

// SX1262 pins — check T-ETH-1302 schematic
SX1262 radio = new Module(10, 3, 8, 2);

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
  int state = radio.transmit("Hello T-ETH-1302");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.
