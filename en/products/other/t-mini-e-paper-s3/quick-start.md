---
title: Quick Start
show_source: false
---

# T-Mini E-Paper S3 Quick Start

## Required Libraries

Copy the `lib/` folder from the repository into your Arduino libraries directory, or install individually:

| Library | Source |
| :-----: | :----: |
| GxEPD2 (e-paper) | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| RadioLib (SX1262 LoRa) | [GitHub](https://github.com/jgromes/RadioLib) |
| PCF8563 (RTC) | [GitHub](https://github.com/lewisxhe/PCF8563_Library) |
| AceButton | [GitHub](https://github.com/bxparks/AceButton) |
| Adafruit NeoPixel | [GitHub](https://github.com/adafruit/Adafruit_NeoPixel) |

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add to "Additional boards manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from the project `lib/` directory into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your COM port |
| USB CDC On Boot | **Enabled** |
| USB Mode | **Hardware CDC and JTAG** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs (1.5MB APP/1.5MB SPIFFS)** |
| PSRAM | **QSPI PSRAM** |
| Upload Speed | 921600 |

> **Note:** Set **USB CDC On Boot** to **Disabled** when running on battery to avoid boot issues.

#### 4. Upload

Connect via USB-C, open the example sketch, click **Upload**.  
If upload fails, hold **BOOT** and press **RST**, release RST first, then start upload.

---

### PlatformIO

1. Install [VS Code](https://code.visualstudio.com/) and **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3.git
   ```
3. Open `platformio.ini`, uncomment the desired example environment
4. Click **✓** to build, connect the board, click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `EPD_Display` | E-paper display demo |
| `LoRa_Send` | LoRa transmit example |
| `LoRa_Receive` | LoRa receive example |
| `RTC_Clock` | PCF8563 real-time clock |
| `Deep_Sleep` | Deep sleep + wake-up |
| `SD_Card` | TF card read/write |
| `Factory_Test` | Full hardware test |

---

This board uses a GxEPD2 e-paper panel. LVGL is not recommended here — use the board's `GxEPD2` examples for display handling and partial refresh timing.

Notes:
- Run the `EPD_Display` and factory examples in the LilyGO-Mini-Epaper-S3 repo to exercise display, LoRa, RTC and SD features.
- Call a full refresh on first boot: `display.display(false)`.
- For simple UIs on small e-paper, implement minimal draw/update routines with `GxEPD2` instead of a full LVGL port.


### Peripheral Examples

#### E-Paper Hello World (GxEPD2)

```cpp
#include <GxEPD2_BW.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// SPI pins — refer to pin_config.h for actual values
#define EPD_CS    10
#define EPD_DC     9
#define EPD_RST    8
#define EPD_BUSY   7

// 1.02-inch 128×80 e-paper
GxEPD2_BW<GxEPD2_102, GxEPD2_102::HEIGHT> display(
    GxEPD2_102(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFont(&FreeMonoBold9pt7b);
    display.setTextColor(GxEPD_BLACK);

    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setCursor(5, 30);
        display.print("T-Mini E-Paper");
        display.setCursor(5, 55);
        display.print("Hello World!");
    } while (display.nextPage());
}

void loop() {}
```

#### Partial Update (Low Power Refresh)

```cpp
// Partial update only refreshes changed area — much faster and less flicker
display.setPartialWindow(0, 0, 128, 40);
display.firstPage();
do {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(5, 25);
    display.printf("Count: %d", count++);
} while (display.nextPage());
```

#### LoRa Send (SX1262)

```cpp
#include <RadioLib.h>

// SPI and control pins — refer to pin_config.h
#define LORA_CS    SS
#define LORA_DIO1  33
#define LORA_RST   32
#define LORA_BUSY  34

SX1262 radio = new Module(LORA_CS, LORA_DIO1, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0);  // 868.0 for EU, 433.0 for Asia
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("LoRa initialized");
    }
}

void loop() {
    int state = radio.transmit("Hello from T-Mini E-Paper S3!");
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("Packet sent");
    }
    delay(5000);
}
```

#### LoRa Receive (SX1262)

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(LORA_CS, LORA_DIO1, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    radio.begin(915.0);
    radio.startReceive();
}

void loop() {
    String str;
    int state = radio.readData(str);
    if (state == RADIOLIB_ERR_NONE) {
        Serial.print("Received: ");
        Serial.println(str);
        Serial.print("RSSI: ");
        Serial.println(radio.getRSSI());
        radio.startReceive();
    }
    delay(10);
}
```

#### RTC — Set and Read Time (PCF8563)

```cpp
#include <PCF8563.h>

PCF8563 rtc;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    rtc.init();

    // Set time: 2026-01-01 12:00:00
    rtc.stopClock();
    rtc.setYear(26);
    rtc.setMonth(1);
    rtc.setDay(1);
    rtc.setHour(12);
    rtc.setMinut(0);
    rtc.setSecond(0);
    rtc.startClock();
}

void loop() {
    Time now = rtc.getTime();
    Serial.printf("20%02d-%02d-%02d %02d:%02d:%02d\n",
        now.year, now.month, now.day,
        now.hour, now.minute, now.second);
    delay(1000);
}
```

#### Deep Sleep + Wake by Timer

```cpp
#include <esp_sleep.h>

#define SLEEP_SECONDS 60

void setup() {
    Serial.begin(115200);
    Serial.println("Woke up — running task...");

    // ... update e-paper display, send LoRa packet, etc. ...

    Serial.printf("Sleeping for %d seconds\n", SLEEP_SECONDS);
    esp_sleep_enable_timer_wakeup((uint64_t)SLEEP_SECONDS * 1000000ULL);
    esp_deep_sleep_start();
}

void loop() {}
```

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold **BOOT** and press **RST** once, release RST while still holding BOOT, then start the upload.

**Q: No serial output from USB?**  
A: Set **USB CDC On Boot** to **Enabled** in Arduino IDE Tools.

**Q: The e-paper display shows ghosting after many updates.**  
A: Perform a full refresh periodically (every ~10 partial updates) using `display.setFullWindow()` to clear ghosting.

**Q: Which LoRa frequency should I use?**  
A: Use 915 MHz for North America, 868 MHz for Europe, 433 MHz for Asia. Match the frequency of your receiver.

**Q: How do I check the hardware is working?**  
A: Flash the [factory firmware test](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/firmware/README.MD) to verify all peripherals.
