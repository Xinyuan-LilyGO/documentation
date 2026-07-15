---
title: Quick Start
show_source: false
---

# T3-S3 LR1121 Quick Start

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
3. Open the project and select the `T3-S3-LR1121` environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **LilyGo T3-S3** |
| Board Revision | **Radio-LR1121** |
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
3. Set **Board Revision** to **Radio-LR1121**
4. Click **Upload**

---

### Peripheral Examples

#### LoRa (LR1121 tri-band)

```cpp
#include <RadioLib.h>

// T3-S3 LR1121: CS=7, IRQ=33, RST=8, BUSY=34
LR1121 radio = new Module(7, 33, 8, 34);

void setup() {
  Serial.begin(115200);
  radio.reset();
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio init failed: "); Serial.println(state);
    while (true);
  }
  radio.setOutputPower(22);
  Serial.println("LR1121 ready");
}

void loop() {
  int state = radio.transmit("Hello LR1121");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### OLED Display (SH1106 1.3-inch)

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// SH1106 128×64 I2C, SDA=18, SCL=17
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  Wire.begin(18, 17);
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "LR1121 Ready");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## Notes

- **LR1121 tri-band radio:** Supports 400–520 MHz, 830–945 MHz, and 2400–2500 MHz; the board cannot TX and RX on two bands simultaneously
- **1.3-inch OLED:** Larger than the 0.96-inch on most T3 siblings — initialize with the correct U8g2 display constructor
- **RTC:** PCF85063ATL is present on I2C — useful for low-power timestamped data logging
- **PSRAM:** QSPI PSRAM — select **QSPI PSRAM** in Arduino IDE

---

## FAQ

**Q: LR1121 not responding?**
A: The LR1121 requires a reset pulse on startup. Call `radio.reset()` before `radio.begin()`.

**Q: Cannot upload?**
A: Ensure **USB CDC On Boot** is **Enabled**. Hold BOOT + press RST to enter download mode if needed.
