---
title: Quick Start
show_source: false
---

# T-Connect Pro Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TFT_eSPI | Latest | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| SensorLib | Latest | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Connect-Pro.git
   ```
3. Open `platformio.ini` and select the target example
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

#### 2. Board Settings

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

#### 3. Upload

Connect via USB-C, open an example, and click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Original_Test` | Factory program |
| `CAN` | CAN bus communication |
| `RS485` | RS485 communication |
| `Ethernet_HTTP` | Ethernet HTTP client |
| `Ethernet_Relay` | Ethernet-controlled relay |
| `GFX` | Display test |
| `SX1262_Receive_Interrupt` | LoRa receive with interrupt |
| `SX126x_PingPong` | LoRa ping-pong test |
| `ttn_otaa` | TTN OTAA LoRaWAN activation |

---

### Peripheral Examples

#### Display (ST7796 TFT)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Connect Pro", 30, 230);
}

void loop() {}
```

#### LoRa (SX1262)

```cpp
#include <RadioLib.h>

// SX1262 pins — check the T-Connect-Pro schematic
SX1262 radio = new Module(10, 3, 9, 4);

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
  int state = radio.transmit("Hello T-Connect Pro");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### RS485 Communication

```cpp
HardwareSerial rs485(1);

void setup() {
  Serial.begin(115200);
  // RS485 TX/RX pins — check schematic for your revision
  rs485.begin(9600, SERIAL_8N1, 17, 18);
}

void loop() {
  rs485.print("Hello RS485\r\n");
  delay(1000);
  while (rs485.available()) Serial.write(rs485.read());
}
```

#### Ethernet (W5500)

```cpp
#include <Ethernet.h>
#include <SPI.h>

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
// W5500 CS pin — check schematic
#define ETH_CS  48

void setup() {
  Serial.begin(115200);
  Ethernet.init(ETH_CS);
  if (Ethernet.begin(mac)) {
    Serial.print("IP: ");
    Serial.println(Ethernet.localIP());
  } else {
    Serial.println("Ethernet init failed");
  }
}

void loop() { Ethernet.maintain(); }
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What is the input voltage range?**  
A: T-Connect Pro accepts **12–24 V DC** wide-range input. Do not connect USB and external DC simultaneously without checking the schematic.

**Q: RS485 or CAN not responding?**  
A: Ensure you have proper bus termination resistors (120 Ω) on both ends of the RS485/CAN bus.
