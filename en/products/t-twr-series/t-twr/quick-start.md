---
title: Quick Start
show_source: false
---

# T-TWR Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| U8g2 | Latest | [GitHub](https://github.com/olikraus/u8g2) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

> **Important:** T-TWR requires a battery for radio operation. USB alone cannot supply sufficient current for the SA868 RF unit. Always connect a 21700 or 18650 battery before using the radio.

> **Important:** Always connect the RF antenna before powering on. Operating without an antenna may damage the SA868 module.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-TWR.git
   ```
3. Open `platformio.ini` and uncomment the target example under `[platformio]`
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from `T-TWR/lib` to your Arduino libraries directory.

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 4. Upload

Click **Upload**.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Factory` | Full factory application |
| `GPS_Basic_Example` | Basic GPS data display |
| `SA868_ATDebug_Example` | SA868 AT command debug |
| `SA868_ESPSendAudio_Example` | Radio audio transmission |
| `U8g2_GraphicsTest_Example` | OLED graphics test |

---

### Peripheral Examples

#### SA868 VHF/UHF Radio (AT commands)

```cpp
// SA868 connected via UART — check T-TWR schematic for pins
HardwareSerial sa868(1);

void setup() {
  Serial.begin(115200);
  sa868.begin(9600, SERIAL_8N1, /*RX=*/16, /*TX=*/15);
  delay(500);
  // Set frequency (UHF example: 433.000 MHz TX/RX)
  sa868.println("AT+DMOSETGROUP=0,433.0000,433.0000,0000,1,0000");
  delay(200);
  while (sa868.available()) Serial.write(sa868.read());
}

void loop() {
  // PTT: drive PTT pin LOW to transmit, HIGH to receive
}
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
    Serial.printf("Lat: %.6f Lng: %.6f Sats: %d\n",
      gps.location.lat(), gps.location.lng(), gps.satellites.value());
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
  u8g2.drawStr(0, 20, "T-TWR Ready");
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

**Q: Radio not transmitting?**  
A: Ensure a battery is connected (USB power alone is insufficient for RF). Confirm the antenna is attached. Check the SA868 power state via AXP2102 PMU.

**Q: UHF or VHF version?**  
A: T-TWR is available in UHF (400–480 MHz) and VHF (134–174 MHz) variants. Ensure the correct frequency is programmed for your version.
