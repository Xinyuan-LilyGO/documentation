---
title: Quick Start
show_source: false
---

# T3-LoRa32 Quick Start

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
3. Open the project, select the `T3_V1.6.1` environment in `platformio.ini`
4. Click **✓** to build, connect via Micro USB, then click **→** to upload

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
| PSRAM | Disabled |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Install the **CH9102** USB driver if not already present
3. In `utilities.h`, uncomment the macro matching your board variant (V1.3, V1.6.1, or TCXO)
4. Select the correct board settings and click **Upload**

---

### Peripheral Examples

#### LoRa (SX1276 / SX1278)

```cpp
#include <RadioLib.h>

// SX1276: CS=18, IRQ=26, RST=23, DIO1=33
SX1276 radio = new Module(18, 26, 23, 33);

void setup() {
  Serial.begin(115200);
  // Use 433.0 for SX1278 variant
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio init failed: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1276 ready");
}

void loop() {
  int state = radio.transmit("Hello LoRa32");
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
  u8g2.drawStr(0, 20, "LoRa32 Ready");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## Notes

- **USB:** Micro USB with CH9102 USB-to-serial chip — install the CH9102 driver if the port is not detected
- **LoRa module:** SX1276 (868/915/923 MHz) or SX1278 (433 MHz) depending on the version ordered
- **SD card:** Remove the TF card before flashing; it shares the SPI bus and can prevent uploads
- **GPIO:** GPIO33 and above are input-only on the ESP32; do not drive them as outputs

---

## FAQ

**Q: Port not recognized?**
A: Download and install the CH9102 driver from the manufacturer's website, then reconnect.

**Q: LoRa send fails?**
A: Verify the frequency in your sketch matches the module variant you ordered (433 / 868 / 915 MHz).
