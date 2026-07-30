---
title: Quick Start
show_source: false
---

# T-Display Keyboard Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | Latest | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO-T-Display.git
   ```
3. Open `platformio.ini` and select your example
4. Click **Build**, then upload after selecting the correct port

### Arduino IDE

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

---

## Display Example

T-Display Keyboard uses the same ESP32 T-Display board and ST7789V display profile as T-Display.

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_KEYBOARD
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_Keyboard display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.setCursor(12, 55);
    display.println("T-Display");
    display.setCursor(12, 80);
    display.println("Keyboard");
}

void loop() {}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What keyboard shell does T-Display Keyboard use?**  
A: It uses a compact QWERTY-style keyboard shell that houses the T-Display board and a battery holder.
