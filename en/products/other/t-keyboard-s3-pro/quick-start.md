---
title: Quick Start
show_source: false
---

# T-Keyboard S3 Pro Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| T-Keyboard-S3-Pro-Library | Latest | [GitHub](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library) |
| LovyanGFX | Latest | Installed automatically with T-Keyboard-S3-Pro-Library |

> **Recommended:** Use [T-Keyboard-S3-Pro-Library](library) for display, keys, RGB LEDs, and encoder. The library exposes the four GC9107 panels as LovyanGFX devices (`display1`..`display4`), so sketches do not need a separate display driver or manual panel pin configuration.

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings (ESP32-S3 Host)

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Install **T-Keyboard-S3-Pro-Library** from Arduino Library Manager, or copy the library folder into your Arduino `libraries/` directory
3. Select board settings above and click **Upload**

---

### Peripheral Examples

#### Key Press Reading (T-Keyboard-S3-Pro-Library)

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
  Serial.begin(115200);
  TKeyboardS3Pro.begin();
}

void loop() {
  TKeyboardS3Pro.update();

  for (uint8_t i = 0; i < TKeyboardS3ProClass::KEY_COUNT; i++) {
    if (TKeyboardS3Pro.key(i).wasPressed()) {
      Serial.printf("KEY%u pressed\n", i + 1);
    }
  }
}
```

#### TFT Displays (GC9107 via LovyanGFX)

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
  TKeyboardS3Pro.begin();
  TKeyboardS3Pro.setBrightness(200);
  TKeyboardS3Pro.fillAllScreens(TFT_BLACK);

  for (uint8_t i = 0; i < TKeyboardS3ProClass::HOST_SCREEN_COUNT; i++) {
    Display& panel = TKeyboardS3Pro.displayAt(i);
    panel.fillScreen(TFT_NAVY);
    panel.setTextColor(TFT_WHITE);
    panel.setTextDatum(middle_center);
    panel.drawString(String("Panel ") + (i + 1), panel.width() / 2, panel.height() / 2);
  }
}

void loop() {
  TKeyboardS3Pro.update();
}
```

#### RGB LEDs (T-Keyboard-S3-Pro-Library)

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
  TKeyboardS3Pro.begin();
}

void loop() {
  TKeyboardS3Pro.update();

  static uint16_t hue = 0;
  TKeyboardS3Pro.setLeds(hue, 80, 10);
  hue = (hue + 2) % 360;
  delay(30);
}
```

---

## Notes

- **Host + slaves:** Host unit connects to slave units via magnetic interfaces — up to 6 slaves in a 2×3 grid
- **RGB LEDs:** WS2812C; reduce brightness to 10 or lower when running multiple units to avoid overloading power supply
- **4× TFT displays:** Each 0.85-inch GC9107, 128×128 px (SPI), exposed by the library as LovyanGFX devices
- **STM32 co-processor:** Handles keyboard scanning; program via STM32CubeMX + ARM Keil μVision5 over SWD if customizing firmware
- **PSRAM:** OPI 8 MB — select **OPI PSRAM** in Arduino IDE

---

## FAQ

**Q: Slave units not detected?**
A: Ensure the magnetic connectors are fully seated. Power the host before attaching slaves.

**Q: LEDs too bright / flickering?**
A: Limit WS2812C brightness to 10 in multi-device configurations to stay within the power budget.
