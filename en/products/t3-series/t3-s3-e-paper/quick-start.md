---
title: Quick Start
show_source: false
---

# T3-S3 E-Paper Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| GxEPD2 | Latest | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| U8g2 | Latest | Arduino Library Manager |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series.git
   ```
3. Open the project and select the `T3-S3-E-Paper` environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **OPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the Lilygo-LoRa-Epaper-series repo and open an example sketch
3. Select the board settings above and click **Upload**

---

## Notes

- **E-ink display:** 2.13-inch DEPG0213BN (250×122 px, B&W, SPI) — full refresh takes 2–3 s, partial refresh ~0.3–0.5 s; no power needed to hold the image
- **LoRa variant:** SX1280 (2.4 GHz) or SX1276 / SX1262 (868/915 MHz) depending on the version ordered — confirm before selecting the environment
- **PSRAM:** OPI PSRAM — select **OPI PSRAM** in Arduino IDE

---

### LVGL

This board uses a GxEPD2 e-paper panel (DEPG0213BN). LVGL is not recommended for this e-paper model in documentation — use the repository's `GxEPD2` examples for display and partial-refresh handling.

Notes:
- Use the examples in the Lilygo-LoRa-Epaper-series repo to initialise and drive the panel (`EPD_Display`, `Factory_Test`, etc.).
- E-paper panels require a full refresh after power-on before partial updates will behave predictably; call `display.display(false)` on first run.
- If you need a GUI, prefer the project's factory sketches or tailor a minimal draw routine with `GxEPD2` rather than attempting a full LVGL port on constrained e-paper panels.

### Peripheral Examples

#### E-Paper Display (GxEPD2)

```cpp
#include <GxEPD2_BW.h>

// 2.13" DEPG0213BN 250×122 — verify pins in the Lilygo-LoRa-Epaper-series utilities.h
#define EPD_CS    10
#define EPD_DC     9
#define EPD_RST    8
#define EPD_BUSY   7

GxEPD2_BW<GxEPD2_213_B74, GxEPD2_213_B74::HEIGHT> display(
    GxEPD2_213_B74(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.setCursor(10, 50);
        display.print("T3-S3 E-Paper");
    } while (display.nextPage());
}

void loop() {}
```

#### LoRa (SX1262/SX1276/SX1280 — RadioLib)

```cpp
#include <RadioLib.h>

// Verify LoRa pins in utilities.h for your variant
#define LORA_CS    14
#define LORA_IRQ   13
#define LORA_RST   12
#define LORA_BUSY  15

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) Serial.printf("LoRa init failed: %d\n", state);
}

void loop() {
    radio.transmit("Hello T3-S3");
    delay(3000);
}
```

#### SD Card (SPI)

```cpp
#include <SD.h>
#include <SPI.h>

#define SD_CS  2

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SD_CS)) {
        Serial.println("SD init failed");
        return;
    }
    Serial.printf("SD size: %llu MB\n", SD.cardSize() / (1024 * 1024));
}

void loop() {}
```

## FAQ

**Q: Display shows garbage or won't update?**
A: E-ink panels require a full refresh after power-on before partial refresh works. Call `display.display(false)` (full) first.

**Q: Cannot upload?**
A: Hold BOOT, press RST, release RST, then release BOOT to enter download mode.
