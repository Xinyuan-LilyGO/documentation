---
title: Quick Start
show_source: false
---

# T-TWR Plus Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| U8g2 | Latest | [GitHub](https://github.com/olikraus/u8g2) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

> **Important:** Always connect the RF antenna before powering on.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-TWR.git
   ```
3. Open `platformio.ini` and uncomment the `T-TWR-Plus` environment
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### Peripheral Examples

#### SA868 VHF/UHF Radio (AT commands)

```cpp
// SA868 UART — check T-TWR-Plus schematic for exact pins
HardwareSerial sa868(1);

void setup() {
  Serial.begin(115200);
  sa868.begin(9600, SERIAL_8N1, /*RX=*/16, /*TX=*/15);
  delay(500);
  // Query firmware version
  sa868.println("AT+DMOCONNECT");
  delay(200);
  while (sa868.available()) Serial.write(sa868.read());
}

void loop() {}
```

#### GPS (via TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(2);

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600, SERIAL_8N1, /*RX=*/3, /*TX=*/1);
}

void loop() {
  while (gpsSerial.available()) gps.encode(gpsSerial.read());
  if (gps.location.isUpdated()) {
    Serial.printf("Lat: %.6f Lng: %.6f\n",
      gps.location.lat(), gps.location.lng());
  }
}
```

#### OLED Display (U8g2)

```cpp
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "T-TWR Plus Ready");
  u8g2.sendBuffer();
  delay(1000);
}
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

**Q: What is the difference from T-TWR?**  
A: T-TWR Plus adds enhanced battery capacity, upgraded PMU, and additional I/O compared to the standard T-TWR.
