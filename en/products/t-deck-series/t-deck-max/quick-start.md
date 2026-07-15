---
title: Quick Start
show_source: false
outline: 3
---

# T-Deck MAX Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| GxEPD2 | Latest | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| SensorLib | Latest | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| TinyGSM | Latest | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| Adafruit TCA8418 | Latest | [GitHub](https://github.com/adafruit/Adafruit_TCA8418) |
| ESP32-audioI2S | Latest | [GitHub](https://github.com/schreibfaul1/ESP32-audioI2S) |

---

## Flash Firmware

Before flashing, enter download mode:
1. Hold the **BOOT** button
2. Press and release the **RST** button on the back
3. Release **BOOT**

### Using LILYGO Spark (Recommended)

Download [LILYGO Spark](https://lilygo.cc/en-us/pages/lilygo-spark), search for `T-Deck Max`, and flash directly.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Deck-MAX.git
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
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 3. Upload

Click **Upload**. If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT**.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `WireScan` | I2C device scan — verify all modules |
| `test_wifi` | Wi-Fi connection test |
| `test_BHI260AP` | BHI260AP IMU/gyroscope test |
| `test_GPS` | MIA-M10Q GPS test |
| `keypad` | Mechanical keyboard input test |
| `Elink_paper/display` | E-paper display example |
| `Elink_paper/test_lvgl` | LVGL graphics on e-paper |

---

### Peripheral Examples

#### E-Paper Display (GxEPD2)

```cpp
#include <GxEPD2_BW.h>

// T-Deck MAX e-paper pins — check schematic for CS/DC/RST/BUSY
GxEPD2_BW<GxEPD2_154_D67, GxEPD2_154_D67::HEIGHT> display(
  GxEPD2_154_D67(/*CS=*/5, /*DC=*/17, /*RST=*/16, /*BUSY=*/4));

void setup() {
  display.init(115200);
  display.setRotation(1);
  display.setFullWindow();
  display.firstPage();
  do {
    display.fillScreen(GxEPD_WHITE);
    display.setTextColor(GxEPD_BLACK);
    display.setTextSize(2);
    display.setCursor(20, 60);
    display.print("T-Deck MAX");
  } while (display.nextPage());
}

void loop() {}
```

#### LoRa (SX1262)

```cpp
#include <RadioLib.h>

// SX1262: CS=9, IRQ=40, RST=17, BUSY=13 (T-Deck shared pinout)
SX1262 radio = new Module(9, 40, 17, 13);

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
  int state = radio.transmit("Hello T-Deck MAX");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Sent OK");
  delay(2000);
}
```

#### GPS (MIA-M10Q)

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(38400, SERIAL_8N1, 21, 48);
}

void loop() {
  while (gpsSerial.available()) gps.encode(gpsSerial.read());
  if (gps.location.isUpdated()) {
    Serial.printf("Lat: %.6f Lng: %.6f\n",
      gps.location.lat(), gps.location.lng());
  }
}
```

#### Keyboard (TCA8418)

```cpp
#include <Adafruit_TCA8418.h>

Adafruit_TCA8418 keypad;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  keypad.begin(TCA8418_DEFAULT_ADDR, &Wire);
  keypad.matrix(3, 10); // T-Deck MAX key matrix rows x cols
  keypad.flush();
}

void loop() {
  if (keypad.available() > 0) {
    int k = keypad.getEvent();
    bool pressed = k & 0x80;
    k &= 0x7F;
    Serial.printf("Key %d %s\n", k, pressed ? "pressed" : "released");
  }
}
```

---

## FAQ

**Q: How to enter download mode?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT**.

**Q: No sound from speaker?**  
A: Check XL9555 IO12 level — HIGH = A7682E audio, LOW = ES8311 audio. Set IO06 HIGH to enable the power amplifier.

**Q: LoRa not working with external antenna?**  
A: Set XL9555 IO04 LOW to switch to the external antenna (default is internal, HIGH).

**Q: Ghosting on the e-paper display?**  
A: After 5 consecutive fast/partial refreshes, perform a full refresh to clear ghosting.
