---
title: Quick Start
show_source: false
---

# T-SimCam Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| esp32-camera | Latest | [GitHub](https://github.com/espressif/esp32-camera) |
| TinyGSM | Latest | [GitHub](https://github.com/vshymanskyy/TinyGSM) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-SimCam.git
   ```
3. Open `platformio.ini` and select the target example
4. Click **✓** to build, connect via USB-C, click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### Peripheral Examples

#### Camera (OV2640)

```cpp
#include "esp_camera.h"

// T-SimCam camera pin config — check T-SimCam schematic for exact assignments
#define PWDN_GPIO_NUM  -1
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM  15
#define SIOD_GPIO_NUM  4
#define SIOC_GPIO_NUM  5
#define Y9_GPIO_NUM    16
#define Y8_GPIO_NUM    17
#define Y7_GPIO_NUM    18
#define Y6_GPIO_NUM    12
#define Y5_GPIO_NUM    10
#define Y4_GPIO_NUM    8
#define Y3_GPIO_NUM    9
#define Y2_GPIO_NUM    11
#define VSYNC_GPIO_NUM 6
#define HREF_GPIO_NUM  7
#define PCLK_GPIO_NUM  13

void setup() {
  Serial.begin(115200);
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer   = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM; config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM; config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM; config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM; config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk  = XCLK_GPIO_NUM; config.pin_pclk  = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM; config.pin_href  = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM; config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn  = PWDN_GPIO_NUM;  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size   = FRAMESIZE_QVGA;
  config.jpeg_quality = 12;
  config.fb_count     = 2;
  if (esp_camera_init(&config) != ESP_OK) {
    Serial.println("Camera init failed"); return;
  }
  Serial.println("Camera ready");
}

void loop() {
  camera_fb_t *fb = esp_camera_fb_get();
  if (fb) {
    Serial.printf("Captured %u bytes\n", fb->len);
    esp_camera_fb_return(fb);
  }
  delay(2000);
}
```

#### LTE Data (TinyGSM)

```cpp
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, /*RX=*/26, /*TX=*/27);
  // Power on modem
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(2000);
  modem.restart();
  Serial.println("Modem: " + modem.getModemInfo());
  modem.gprsConnect("your.apn", "", "");
  Serial.println("Connected: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: What is T-SimCam used for?**  
A: T-SimCam combines a camera (OV2640) with a 4G LTE modem, enabling cellular image/video upload applications — e.g., remote surveillance, asset monitoring.
