---
title: Quick Start
show_source: false
---

# T-Display Quick Start

## Required Libraries

Install the following libraries via Arduino IDE Library Manager, or copy them into your Arduino `libraries` folder:

| Library | Source |
| :-----: | :----: |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE -> **File** -> **Preferences**
2. Add this URL to "Additional Boards Manager URLs":
   ```text
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Open **Tools** -> **Board** -> **Boards Manager**, search `esp32`, and install **esp32 by Espressif Systems**

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Upload Speed | **921600** |

> Some T-Display boards use 16 MB Flash. Select **16 MB (128Mb)** if your board is the 16 MB version.

#### 3. Upload

Connect the board through USB-C, open an example sketch, select the correct port, and click **Upload**. If the port keeps disconnecting, hold **Button 1 / GPIO0**, press and release **RST**, then release GPIO0 and upload again.

---

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO-T-Display.git
   ```
3. Open the project in VS Code and select the example you want to build

---

## Display

T-Display uses an **ST7789V** display. The display pins are already wrapped by `LilyGo_LovyanGFX`, so no separate display-driver setup file editing is required.

| ST7789V | MOSI | SCK | CS | DC | RST | BL |
| :-----: | :--: | :-: | :-: | :-: | :--: | :-: |
| ESP32 | GPIO19 | GPIO18 | GPIO5 | GPIO16 | GPIO23 | GPIO4 |

### Hello World

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.drawString("Hello T-Display!", 20, 50);
}

void loop() {}
```

### Draw Shapes

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display display;

void setup() {
    display.begin(1);
    display.fillCircle(60, 67, 40, TFT_BLUE);
    display.drawRect(130, 27, 80, 80, TFT_GREEN);
    display.drawLine(0, 0, 239, 134, TFT_RED);
}

void loop() {}
```

### Sprite

Use `LGFX_Sprite` for flicker-free updates.

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display display;
LGFX_Sprite sprite(&display);
int counter = 0;

void setup() {
    display.begin(1);
    sprite.createSprite(160, 40);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.setTextColor(TFT_YELLOW, TFT_BLACK);
    sprite.setTextSize(2);
    sprite.drawString("Count: " + String(counter++), 4, 10);
    sprite.pushSprite(40, 47);
    delay(200);
}
```

### Read Buttons

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

---

## FAQ

**Screen stays dark**
Use `display.begin()` from `LilyGo_T_Display`; it initializes the GPIO4 backlight automatically.

**Upload keeps failing**
Hold GPIO0, press and release RST, release GPIO0, then upload again.
