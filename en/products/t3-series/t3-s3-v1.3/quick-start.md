---
title: Quick Start
show_source: false
---

# T3-S3 V1.3 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| U8g2 | Latest | Arduino Library Manager |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. Open the project, select the environment matching your LoRa module variant in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **LilyGo T3-S3** |
| Board Revision | Select per LoRa module (SX1262 / SX1276 / SX1280 etc.) |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **QSPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the LilyGo-LoRa-Series repo and open an example sketch
3. Set **Board Revision** to match your LoRa module
4. Click **Upload**

---

### Peripheral Examples

#### LoRa (SX1262)

```cpp
#include <RadioLib.h>

// T3-S3 V1.3 SX1262: CS=7, IRQ=33, RST=8, BUSY=34
SX1262 radio = new Module(7, 33, 8, 34);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio init failed: "); Serial.println(state);
    while (true);
  }
  radio.setOutputPower(22);
  Serial.println("SX1262 ready");
}

void loop() {
  int state = radio.transmit("Hello T3-S3 V1.3");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### OLED Display (SSD1306)

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// SSD1306 128×64 I2C, SDA=18, SCL=17
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  Wire.begin(18, 17);
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "T3-S3 V1.3");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## Notes

- **V1.3 vs V1.2:** V1.3 brings hardware optimizations and an improved PCB layout; the pinout and software are fully compatible with V1.2
- **LoRa variant:** SX1262 / SX1276 / SX1278 (Sub-GHz) or SX1280 (2.4 GHz) — set the correct Board Revision
- **Meshtastic:** This board is Meshtastic compatible; flash via the Meshtastic web flasher or CLI
- **PSRAM:** QSPI PSRAM — select **QSPI PSRAM** in Arduino IDE

---

## FAQ

**Q: Can I use V1.2 sketches on V1.3?**
A: Yes — the pinout is identical. No code changes needed.

**Q: Cannot upload — port not found?**
A: Ensure **USB CDC On Boot** is **Enabled**. If previously disabled, hold BOOT and press RST to enter download mode.
