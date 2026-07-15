---
title: Quick Start
show_source: false
---

# T-Echo Plus Quick Start

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
3. Open `platformio.ini` and select the `T-Echo-Plus` environment
4. Click **✓** to build, connect via USB, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **Adafruit Feather nRF52840 Express** |
| Upload Speed | 115200 |

Connect via USB and click **Upload**.  
If upload fails: double-tap the reset button to enter bootloader mode.

---

### Peripheral Examples

#### E-Paper Display (Adafruit_EPD)

```cpp
#include <Adafruit_EPD.h>
#include <SPI.h>

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
    epd.print("T-Echo Plus");
    epd.display();
}

void loop() {}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

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
    int state = radio.transmit("Hello T-Echo Plus");
    Serial.printf("TX state: %d\n", state);
    delay(2000);
}
```

#### GPS (L76K — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>

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
A: Double-tap the reset button to enter bootloader mode (LED blinks slowly, mass storage appears).

**Q: What is different from T-Echo?**  
A: T-Echo Plus typically adds a larger battery and additional features. Refer to the hardware page for the specific differences on your version.
