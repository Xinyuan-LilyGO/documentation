---
title: Quick Start
show_source: false
---

# T-Camera S3 Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| esp32-camera | Latest | [GitHub](https://github.com/espressif/esp32-camera) |
| U8g2 | Latest | [GitHub](https://github.com/olikraus/u8g2) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Camera-S3.git
   ```
3. Open `platformio.ini` and select your example
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

#### 2. Install Libraries

Install via **Tools** → **Manage Libraries** or copy from the project `lib/` folder.

#### 3. Board Settings

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

#### 4. Upload

Connect via USB-C, open an example, and click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `CameraWebServer` | Stream video over Wi-Fi via browser |
| `PIR_Camera` | Trigger capture on PIR motion detection |
| `OLED_Test` | SSD1306 OLED display test |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### Camera Web Server

```cpp
#include "esp_camera.h"
#include <WiFi.h>

// T-Camera S3 camera pin definition
#define PWDN_GPIO_NUM  -1
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM  38
#define SIOD_GPIO_NUM   5
#define SIOC_GPIO_NUM   4
#define Y9_GPIO_NUM    14
#define Y8_GPIO_NUM    48
#define Y7_GPIO_NUM    47
#define Y6_GPIO_NUM    21
#define Y5_GPIO_NUM    13
#define Y4_GPIO_NUM    11
#define Y3_GPIO_NUM    10
#define Y2_GPIO_NUM     9
#define VSYNC_GPIO_NUM  8
#define HREF_GPIO_NUM  18
#define PCLK_GPIO_NUM  12

const char* ssid = "YourSSID";
const char* password = "YourPassword";

void setup() {
    Serial.begin(115200);

    camera_config_t config;
    config.ledc_channel = LEDC_CHANNEL_0;
    config.ledc_timer   = LEDC_TIMER_0;
    config.pin_d0       = Y2_GPIO_NUM;
    config.pin_d1       = Y3_GPIO_NUM;
    config.pin_d2       = Y4_GPIO_NUM;
    config.pin_d3       = Y5_GPIO_NUM;
    config.pin_d4       = Y6_GPIO_NUM;
    config.pin_d5       = Y7_GPIO_NUM;
    config.pin_d6       = Y8_GPIO_NUM;
    config.pin_d7       = Y9_GPIO_NUM;
    config.pin_xclk     = XCLK_GPIO_NUM;
    config.pin_pclk     = PCLK_GPIO_NUM;
    config.pin_vsync    = VSYNC_GPIO_NUM;
    config.pin_href     = HREF_GPIO_NUM;
    config.pin_sscb_sda = SIOD_GPIO_NUM;
    config.pin_sscb_scl = SIOC_GPIO_NUM;
    config.pin_pwdn     = PWDN_GPIO_NUM;
    config.pin_reset    = RESET_GPIO_NUM;
    config.xclk_freq_hz = 20000000;
    config.pixel_format = PIXFORMAT_JPEG;
    config.frame_size   = FRAMESIZE_VGA;
    config.jpeg_quality = 12;
    config.fb_count     = 2;

    esp_err_t err = esp_camera_init(&config);
    if (err != ESP_OK) {
        Serial.printf("Camera init failed: 0x%x\n", err);
        return;
    }

    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
    Serial.println("\nWiFi connected: " + WiFi.localIP().toString());
}

void loop() {}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: Camera init failed?**  
A: Verify the pin definitions match your board version. Check that PSRAM is set to **OPI PSRAM** in Arduino IDE.

**Q: PIR sensor not triggering?**  
A: The AS312 PIR sensor requires a few seconds warm-up time after power-on. Ensure no heat sources are near the sensor.
