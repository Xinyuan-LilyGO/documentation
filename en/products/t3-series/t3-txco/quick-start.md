---
title: Quick Start
show_source: false
---

# T3-TCXO Quick Start

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
3. Open the project, select the `T3_V3_0_SX1276_TCXO` environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Enabled** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the LilyGo-LoRa-Series repo and open an example sketch
3. In `utilities.h`, uncomment `T3_V3_0_SX1276_TCXO`
4. Select the board settings above and click **Upload**

---

### Peripheral Examples

#### LoRa (SX1276 + TCXO)

```cpp
#include <RadioLib.h>

// T3-TCXO SX1276: CS=18, IRQ=26, RST=23, DIO1=33
// GPIO12 must be HIGH to enable the TCXO before radio init
SX1276 radio = new Module(18, 26, 23, 33);

void setup() {
  Serial.begin(115200);
  // Enable TCXO
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH);
  delay(10);

  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio init failed: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1276 + TCXO ready");
}

void loop() {
  int state = radio.transmit("Hello T3-TCXO");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### OLED Display (SSD1306)

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// SSD1306 128×64 I2C, SDA=21, SCL=22
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "T3-TCXO Ready");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## Notes

- **SoC:** ESP32-Pico-D4 (not standard ESP32 module) — use **ESP32 Dev Module** board definition
- **TCXO:** The onboard TCXO (±0.5 ppm) provides temperature-stable frequency; set TCXO enable pin (GPIO12) HIGH before LoRa initialization
- **PSRAM:** 2 MB PSRAM is present — enable it in board settings
- **Power:** Supports USB-C, 3.7 V Li-Po battery, and solar input

---

## FAQ

**Q: LoRa frequency drifts at temperature extremes?**
A: The TCXO is the fix for this — ensure GPIO12 is driven HIGH to enable it before calling `radio.begin()`.

**Q: Cannot find the board after connecting USB-C?**
A: The ESP32-Pico-D4 uses a standard USB-serial bridge — check Device Manager for the COM port and install CH34x or CP210x drivers if needed.
