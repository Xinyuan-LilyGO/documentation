---
title: Quick Start
show_source: false
---

# T-Beam 1W Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| U8g2 | Latest | [GitHub](https://github.com/olikraus/u8g2) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. Open `platformio.ini` and uncomment the `T-Beam-1W` environment under `default_envs`
4. Uncomment one `src_dir = xxxx` line (only one active at a time)
5. Click **✓** to build, connect via USB-C, click **→** to upload

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

Copy all folders from the project `lib/` to your Arduino libraries directory, or install via **Tools** → **Manage Libraries**.

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

In `utilities.h`, uncomment `LILYGO_T_BEAM_S3_1W`, then click **Upload**.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `LoRa_Sender` | High-power LoRa packet transmission (max 32 dBm) |
| `LoRa_Receiver` | LoRa packet reception |
| `GPS_Basic` | L76K GPS data parsing |
| `OLED_Test` | SH1106 OLED display test |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### Display (SH1106 OLED — U8g2)

```cpp
#include <Wire.h>
#include <U8g2lib.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
    Wire.begin();
    u8g2.begin();
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(10, 30, "T-Beam 1W");
    u8g2.sendBuffer();
}

void loop() {}
```

#### LoRa (SX1262 1W — RadioLib)

> Always connect a proper antenna before transmitting. Transmitting without an antenna at high power will damage the SX1262.

```cpp
#include <RadioLib.h>

#define LORA_CS    10
#define LORA_IRQ   1
#define LORA_RST   17
#define LORA_BUSY  2

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    // Max output power: 32 dBm (1 W) — use carefully
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa init failed: %d\n", state);
        return;
    }
    radio.setOutputPower(22);   // Start at 22 dBm; increase to 32 only with proper antenna
}

void loop() {
    int state = radio.transmit("Hello T-Beam 1W");
    Serial.printf("TX state: %d\n", state);
    delay(2000);
}
```

#### GPS (L76K — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

#define GPS_RX  9
#define GPS_TX  8

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(38400, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n", gps.location.lat(), gps.location.lng());
    }
}
```

#### PMU (AXP2101 — XPowersLib)

```cpp
#include <XPowersLib.h>

XPowersAXP2101 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    if (!PMU.begin(Wire, AXP2101_SLAVE_ADDRESS)) {
        Serial.println("PMU init failed");
        return;
    }
    Serial.printf("Battery voltage: %u mV\n", PMU.getBattVoltage());
    Serial.printf("Charging: %s\n", PMU.isCharging() ? "Yes" : "No");
}

void loop() {}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What does "1W" mean?**  
A: T-Beam 1W uses an SX1262 LoRa module capable of up to **32 dBm (1 Watt)** output power — significantly higher than the standard 14–20 dBm of regular LoRa modules. Always connect a proper antenna before transmitting.

**Q: Battery connector type?**  
A: T-Beam 1W uses a 7.4 V battery input (no onboard charging). Use a 2S Li-Ion or Li-Po pack.
