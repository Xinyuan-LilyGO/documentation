---
title: Quick Start
show_source: false
---

# T-Echo Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| Adafruit_EPD | Latest | [GitHub](https://github.com/adafruit/Adafruit_EPD) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Echo.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB, click **→** to upload

---

### Arduino IDE

#### 1. Install nRF52 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional Board Manager URLs":
   ```
   https://adafruit.github.io/arduino-board-index/package_adafruit_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `nRF52`, install **Adafruit nRF52 by Adafruit**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **Adafruit Feather nRF52840 Express** |
| Bootloader | **0.3.2 or later** |
| Upload Speed | 115200 |

#### 3. Upload

Connect via USB and click **Upload**.  
If upload fails: double-tap the reset button to enter bootloader mode (LED blinks slowly).

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `LoRa_Sender` | SX1262 LoRa packet transmission |
| `LoRa_Receiver` | SX1262 LoRa packet reception |
| `GPS_Test` | L76K GPS NMEA data |
| `EPD_Test` | E-paper display test |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### E-Paper Display (Adafruit_EPD)

```cpp
#include <Adafruit_EPD.h>
#include <SPI.h>

// Adjust pins to match your T-Echo hardware version
#define EPD_CS     33
#define EPD_DC     10
#define EPD_RESET  2
#define EPD_BUSY   3

Adafruit_IL0373 epd(212, 104, EPD_DC, EPD_RESET, EPD_CS, -1, EPD_BUSY);

void setup() {
    epd.begin();
    epd.clearBuffer();
    epd.setCursor(10, 10);
    epd.setTextColor(EPD_BLACK);
    epd.setTextSize(2);
    epd.print("T-Echo");
    epd.display();
}

void loop() {}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

// Pin definitions — verify against your T-Echo schematic
#define LORA_CS    24
#define LORA_IRQ   25
#define LORA_RST   26
#define LORA_BUSY  17

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa init failed: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello T-Echo");
    Serial.printf("TX state: %d\n", state);
    delay(2000);
}
```

#### GPS (L76K — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>

// nRF52840 uses Adafruit Serial1/Serial2 — check pin definitions for your board
#define GPSSerial Serial1

TinyGPSPlus gps;

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(9600);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n", gps.location.lat(), gps.location.lng());
    }
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Double-tap the reset button to enter bootloader mode. The LED should blink slowly and a mass storage device appears on your computer.

**Q: E-paper not updating?**  
A: E-paper displays require a full refresh cycle. Partial refreshes may leave artifacts — call a full refresh after partial updates.

**Q: T-Echo is nRF52, not ESP32 — can I use ESP-IDF?**  
A: No. T-Echo uses Nordic nRF52840 which requires Adafruit nRF52 Arduino core or Zephyr RTOS.
