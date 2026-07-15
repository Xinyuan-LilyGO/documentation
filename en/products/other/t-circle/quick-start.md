---
title: Quick Start
show_source: false
---

# T-Circle Quick Start

## Required Libraries

Copy the `libraries/` folder from the repository into your Arduino libraries directory, or install via Library Manager:

| Library | Source |
| :-----: | :----: |
| TFT_eSPI | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| CST816D (touch) | [GitHub](https://github.com/Xinyuan-LilyGO/T-Circle-S3) |

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

Copy all folders from the project `libraries/` directory into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | Default |
| PSRAM | **Enabled** |

#### 4. Upload

Connect via USB-C, open the example sketch, click **Upload**.  
If upload fails, hold **BOOT** and press **RST**, release RST first, then start upload.

---

### PlatformIO

1. Install [VS Code](https://code.visualstudio.com/) and **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Circle.git
   ```
3. Open `platformio.ini`, uncomment the desired example environment
4. Click **✓** to build, connect the board, click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Basic_Display` | Draw text and shapes on the circular LCD |
| `Touch_Test` | Read CST816D capacitive touch events |

---

### Peripheral Examples

#### Hello World (TFT_eSPI)

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);

    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(20, 70);
    tft.println("T-Circle!");
}

void loop() {}
```

#### Draw Shapes on the Round Screen

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.fillScreen(TFT_BLACK);

    // Draw a filled circle in the centre (display is 160×160)
    tft.fillCircle(80, 80, 60, TFT_BLUE);

    // Draw a ring
    tft.drawCircle(80, 80, 75, TFT_WHITE);

    // Draw text inside
    tft.setTextColor(TFT_WHITE);
    tft.setTextSize(1);
    tft.setCursor(55, 76);
    tft.print("Hello!");
}

void loop() {}
```

#### Read Touch Events (CST816D via I2C)

```cpp
#include <Wire.h>

#define TOUCH_SDA   5
#define TOUCH_SCL   6
#define TOUCH_ADDR  0x15

void setup() {
    Serial.begin(115200);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x02);  // gesture register
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();  // finger count
        uint8_t xH = Wire.read() & 0x0F;
        uint8_t xL = Wire.read();
        uint8_t yH = Wire.read() & 0x0F;
        uint8_t yL = Wire.read();
        int x = (xH << 8) | xL;
        int y = (yH << 8) | yL;
        if (x || y) {
            Serial.printf("Gesture: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

> For exact GPIO pin numbers (SPI CS, DC, RST, BL, I2C SDA/SCL) refer to the project `pin_config.h`.

#### Deep Sleep Wake-Up on Touch

```cpp
#include <esp_sleep.h>

// Assign the touch interrupt pin from pin_config.h
#define TOUCH_INT_PIN  7

void setup() {
    Serial.begin(115200);
    Serial.println("Woke up — running...");

    // ... do work here ...

    Serial.println("Going to sleep");
    esp_sleep_enable_ext0_wakeup((gpio_num_t)TOUCH_INT_PIN, LOW);
    esp_deep_sleep_start();
}

void loop() {}
```

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold **BOOT**, press and release **RST**, then start the upload while still holding BOOT.

**Q: T-Circle vs T-Circle S3 — which should I use?**  
A: T-Circle uses the original ESP32 chip. T-Circle S3 uses the newer ESP32-S3 with USB-OTG, more GPIO, and better performance. Both use the same 0.75-inch circular display.

**Q: How do I keep the round display looking good?**  
A: Draw content inside a 160-pixel circle centered at (80, 80). Pixels outside the visible circle are physically clipped by the lens, but the controller still renders them — use `tft.fillCircle()` as a background to avoid hard corners showing.
