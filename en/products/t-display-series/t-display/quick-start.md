---
title: Quick Start
show_source: false
---

# T-Display Quick Start

## Required Libraries

Install the following library via the Arduino IDE Library Manager, or place it manually in your `libraries` folder:

| Library | Source |
| :-----: | :----: |
| TFT_eSPI | [GitHub](https://github.com/Bodmer/TFT_eSPI) |

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add the following URL to "Additional Boards Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Port | Your COM port |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Upload Speed | **921600** |

> **Note:** A 16 MB Flash variant exists. If your board has 16 MB Flash, select **16 MB (128Mb)** instead.

#### 3. Upload

1. Connect the board via USB-C
2. Open an example sketch (from the [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display) repository)
3. Click **Upload**

If the port keeps disconnecting, enter download mode manually:
1. Hold **Button 1** (GPIO0 / BOOT)
2. Press and release **RST**
3. Release **Button 1**
4. Click **Upload** in the IDE

---

### PlatformIO

#### 1. Setup

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO-T-Display.git
   ```
3. Open the cloned folder in VS Code

#### 2. Select an Example

Open `platformio.ini` and uncomment the `src_dir` line for the example you want to run.

#### 3. Build and Upload

- Click **✓** in the PlatformIO toolbar to compile
- Connect the board via USB-C
- Click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `TFT_eSPI` | Graphics drawing demos using TFT_eSPI |
| `Wifi Scan` | Wi-Fi network scanner |
| `Bluetooth` | Bluetooth demo |

See the full [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display) repository for all examples.

---

## TFT_eSPI Configuration

T-Display uses the **ST7789V** driver with the following pin mapping:

| ST7789V | MOSI   | SCK    | CS     | DC     | RST    | BL     |
| :-----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32   | GPIO19 | GPIO18 | GPIO5  | GPIO16 | GPIO23 | GPIO4  |

TFT_eSPI ships with a T-Display preset. To activate it manually:

1. Open `TFT_eSPI/User_Setup_Select.h` in your Arduino libraries folder
2. Comment out the default `#include <User_Setup.h>`
3. Uncomment:
   ```cpp
   #include <User_Setups/Setup25_TTGO_T_Display.h>
   ```

---

### Peripheral Examples

#### Hello World

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.setRotation(1);           // landscape (240×135)
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.drawString("Hello T-Display!", 20, 50);
}

void loop() {}
```

#### Backlight Control

The backlight is driven by GPIO4. Pull it HIGH to turn on:

```cpp
#define TFT_BL 4

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH); // backlight on
}
```

#### Draw Shapes

```cpp
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);

    tft.fillCircle(60, 67, 40, TFT_BLUE);          // filled circle
    tft.drawRect(130, 27, 80, 80, TFT_GREEN);       // hollow rectangle
    tft.drawLine(0, 0, 239, 134, TFT_RED);          // diagonal line
}

void loop() {}
```

#### Read Buttons

Button 1 → GPIO0, Button 2 → GPIO35:

```cpp
#define BTN1 0
#define BTN2 35

void setup() {
    Serial.begin(115200);
    pinMode(BTN1, INPUT_PULLUP);
    pinMode(BTN2, INPUT_PULLUP);
}

void loop() {
    if (digitalRead(BTN1) == LOW) {
        Serial.println("Button 1 pressed");
        delay(200);
    }
    if (digitalRead(BTN2) == LOW) {
        Serial.println("Button 2 pressed");
        delay(200);
    }
}
```

#### Sprite (Flicker-free Updates)

Use `TFT_eSprite` to draw into a buffer and push it atomically — avoids screen flicker:

```cpp
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft);

int counter = 0;

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
    sprite.createSprite(160, 40);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.setTextColor(TFT_YELLOW);
    sprite.setTextSize(2);
    sprite.drawString("Count: " + String(counter++), 4, 10);
    sprite.pushSprite(40, 47);  // push to screen at (x=40, y=47)
    delay(200);
}
```

---

## FAQ

**Port keeps disconnecting during upload**
Enter download mode manually: hold GPIO0 button → press RST → release GPIO0, then upload.

**Screen stays dark**
Make sure the backlight pin (GPIO4) is driven HIGH:
```cpp
pinMode(4, OUTPUT);
digitalWrite(4, HIGH);
```

**TFT_eSPI compile error**
Verify that `Setup25_TTGO_T_Display.h` is selected in `User_Setup_Select.h`.
