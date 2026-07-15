---
title: Quick Start
show_source: false
---

# T5 E-Paper 2.7" Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| GxEPD2 | Latest | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| Adafruit GFX | Latest | Arduino Library Manager |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series.git
   ```
3. Open the project and select the `T5_V27` environment in `platformio.ini`
4. Click **✓** to build, connect via USB, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Enabled** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support:
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the LilyGo-T5-Epaper-Series repo and open an example sketch
3. Select the `T5_V27` board settings and click **Upload**

---

## Notes

- **Display:** 2.7-inch Waveshare e-ink, 264×176 px, black & white, SPI; full refresh takes 2–4 s
- **PSRAM:** 8 MB PSRAM — enable it in board settings
- **Audio:** MAX98357A I2S amplifier with speaker connector for audio playback
- **USB:** CP2102 USB-to-serial; install CP210x driver if the port is not detected
- **Deep sleep:** Use `esp_deep_sleep_start()` to reduce power consumption between updates

---

### LVGL

LVGL is not recommended for the 2.7" e-paper panel — the slow refresh rate (2–4 s full, 0.5 s partial) makes interactive UIs impractical. Use `GxEPD2` directly for display updates.

### Peripheral Examples

#### E-Paper Display (GxEPD2)

```cpp
#include <GxEPD2_BW.h>

// 2.7" 264×176 Waveshare panel — adjust CS/DC/RST/BUSY pins for your board
GxEPD2_BW<GxEPD2_270, GxEPD2_270::HEIGHT> display(GxEPD2_270(/*CS*/5, /*DC*/17, /*RST*/16, /*BUSY*/4));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.setCursor(20, 80);
        display.print("T5 E-Paper 2.7\"");
    } while (display.nextPage());
}

void loop() {}
```

#### Audio (MAX98357A — I2S)

```cpp
#include <driver/i2s.h>

// Adjust I2S pins for your T5 2.7" board
#define I2S_BCLK  26
#define I2S_LRCK  25
#define I2S_DOUT  19
#define I2S_SD    22   // MAX98357A SD (shutdown) pin — HIGH to enable

void setup() {
    // Enable amplifier
    pinMode(I2S_SD, OUTPUT);
    digitalWrite(I2S_SD, HIGH);

    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
        .sample_rate          = 44100,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 8,
        .dma_buf_len          = 64,
    };
    i2s_pin_config_t pins = {
        .bck_io_num   = I2S_BCLK,
        .ws_io_num    = I2S_LRCK,
        .data_out_num = I2S_DOUT,
        .data_in_num  = I2S_PIN_NO_CHANGE,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
}
```

---

## FAQ

**Q: Display not updating?**
A: The 2.7" panel requires a full refresh on first boot. Call `display.display(false)` before using partial refresh.

**Q: No audio output?**
A: Ensure the MAX98357A SD pin is driven HIGH to enable the amplifier, and verify I2S pin assignments match the schematic.
