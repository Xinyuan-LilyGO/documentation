---
title: Quick Start
show_source: false
---

# T-Display S3 Pro Quick Start

## Required Libraries

Copy the project `lib/` directory to your Arduino libraries folder, or install the libraries below:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| LovyanGFX | Latest | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | Latest | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | Latest | [GitHub](https://github.com/lewisxhe/SensorLib) |
| TouchLib | Latest | [GitHub](https://github.com/mmMicky/TouchLib) |
| JPEGDEC | Latest | [GitHub](https://github.com/bitbank2/JPEGDEC) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro.git
   ```
3. Open `platformio.ini` and enable one target example
4. Build, connect via USB-C, then upload

### Arduino IDE

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

> Set **USB CDC On Boot** to **Disabled** when running from battery only.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `Factory` | Full factory test |
| `GFX` / `LovyanGFX` | ST7796U display drawing test |
| `Touch_Test` | CST816S capacitive touch test |
| `PMU_Example` | SY6970 battery management |
| `Camera` | DVP camera streaming |
| `USB_HID` | USB HID keyboard/mouse demo |
| `LTR553_Sensor` | Ambient light and proximity sensor |
| `LVGL_Demo` | LVGL 8 UI demo |

The panel is a 2.2-inch **ST7796U IPS** display (222 x 480) with **CST816S** touch. For quick display tests, use the `LilyGo_T_Display_S3_Pro` profile from `LilyGo_LovyanGFX`.

### Peripheral Examples

#### Display (LovyanGFX)

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3_PRO
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3_Pro display;

void setup() {
    display.begin(0);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.drawString("T-Display S3 Pro", 20, 220, &fonts::Font2);
}

void loop() {}
```

---

## LVGL

Copy `lv_conf.h` from the project `lib/` folder so it sits beside the `lvgl` folder in your Arduino libraries directory. Key settings:

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    222
#define LV_VER_RES_MAX    480
```

Open the repository `LVGL_Demo` or `Factory` example for a complete display + touch implementation. Use `LilyGo_T_Display_S3_Pro` for the display backend and keep the CST816S touch pins from the official `pin_config.h`.

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** and upload again.

**Q: Screen is off or backlight is abnormal?**  
A: Check that the backlight driver matches your board version. V1.0 uses PWM; V1.1 uses a constant-current backlight driver.
