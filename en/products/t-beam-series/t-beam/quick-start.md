---
title: Quick Start
show_source: false
---

# T-Beam Quick Start

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
3. Open `platformio.ini` and uncomment the T-Beam environment under `default_envs`
4. Uncomment one `src_dir = xxxx` line (only one active at a time)
5. Click **✓** to build, connect via USB, click **→** to upload

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
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### 4. Upload

In `utilities.h`, uncomment your board model (e.g., `LILYGO_T_BEAM_SX1276`), then click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `LoRa_Sender` | LoRa packet transmission |
| `LoRa_Receiver` | LoRa packet reception |
| `GPS_NMEA` | GPS NMEA data parsing |
| `OLED_Test` | SSD1306 OLED display test |
| `PMU_AXP192` | AXP192 power management |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### Display (SSD1306 OLED — U8g2)

```cpp
#include <Wire.h>
#include <U8g2lib.h>

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
    Wire.begin();
    u8g2.begin();
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(10, 30, "T-Beam");
    u8g2.sendBuffer();
}

void loop() {}
```

#### LoRa (SX1276/SX1278 — RadioLib)

```cpp
#include <RadioLib.h>

// Pin definitions — adjust if using a different T-Beam revision
#define LORA_CS    18
#define LORA_IRQ   26
#define LORA_RST   23
#define LORA_BUSY  -1   // SX1276 has no BUSY pin

SX1276 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST);

void setup() {
    Serial.begin(115200);
    // 915.0 MHz, BW 125 kHz, SF 9, CR 4/7, sync 0x12, 17 dBm
    int state = radio.begin(915.0, 125.0, 9, 7, 0x12, 17);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa init failed: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello T-Beam");
    Serial.printf("TX state: %d\n", state);
    delay(2000);
}
```

#### GPS (NEO-6M — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

// Pins vary by T-Beam hardware revision — check utilities.h for your version
#define GPS_RX  34
#define GPS_TX  12

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(9600, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f  Alt: %.1f m\n",
            gps.location.lat(), gps.location.lng(), gps.altitude.meters());
    }
}
```

#### PMU (AXP192 — XPowersLib)

```cpp
#include <XPowersLib.h>

XPowersAXP192 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    if (!PMU.begin(Wire, AXP192_SLAVE_ADDRESS)) {
        Serial.println("PMU init failed");
        return;
    }
    // Enable LoRa power rail (LDO2 on most T-Beam versions)
    PMU.setLDO2Voltage(3300);
    PMU.enableLDO2();
    // Enable GPS power rail (LDO3)
    PMU.setLDO3Voltage(3300);
    PMU.enableLDO3();

    Serial.printf("Battery voltage: %u mV\n", PMU.getBattVoltage());
    Serial.printf("Charging: %s\n", PMU.isCharging() ? "Yes" : "No");
}

void loop() {}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: GPS not getting a fix?**  
A: Move outdoors with a clear sky view. Cold start can take 1–3 minutes. Ensure the GPS antenna is connected.

**Q: LoRa communication range is short?**  
A: Check that the LoRa antenna is attached. Without an antenna, output power may damage the SX1276/SX1278 module.

**Q: Which LoRa frequency should I use?**  
A: Use the frequency that matches your regional regulations: 433 MHz (Asia), 868 MHz (Europe), 915 MHz (Americas).
