---
title: Quick Start
show_source: false
---

# T3-S3 MVSR Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| ESP-IDF I2S | Built-in | ESP32 Arduino Core |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard.git
   ```
3. Open the project and select the appropriate environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

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
2. Clone the T3-S3-MVSRBoard repo and open an example sketch
3. Select the board settings above and click **Upload**

---

### Peripheral Examples

#### Speaker (MAX98357A I2S)

```cpp
#include <driver/i2s.h>

// MAX98357A: BCLK=42, LRCK=41, DOUT=40, SD=39
#define I2S_BCLK  42
#define I2S_LRCK  41
#define I2S_DOUT  40
#define I2S_SD    39

void setup() {
  // Enable amplifier
  pinMode(I2S_SD, OUTPUT);
  digitalWrite(I2S_SD, HIGH);

  i2s_config_t cfg = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
    .sample_rate = 16000,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_RIGHT_LEFT,
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 8,
    .dma_buf_len = 64,
  };
  i2s_pin_config_t pins = {
    .bck_io_num = I2S_BCLK,
    .ws_io_num  = I2S_LRCK,
    .data_out_num = I2S_DOUT,
    .data_in_num = I2S_PIN_NO_CHANGE,
  };
  i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
  i2s_set_pin(I2S_NUM_0, &pins);
}
```

#### Microphone (V1.0: MSM261S I2S / V1.1: MP34DT05 PDM)

```cpp
// V1.0 — I2S microphone
#include <driver/i2s.h>

#define MIC_SCK  46
#define MIC_WS   45
#define MIC_SD   47

void setup() {
  Serial.begin(115200);
  i2s_config_t cfg = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = 16000,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_32BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 8,
    .dma_buf_len = 64,
  };
  i2s_pin_config_t pins = {
    .bck_io_num = MIC_SCK,
    .ws_io_num  = MIC_WS,
    .data_out_num = I2S_PIN_NO_CHANGE,
    .data_in_num = MIC_SD,
  };
  i2s_driver_install(I2S_NUM_1, &cfg, 0, NULL);
  i2s_set_pin(I2S_NUM_1, &pins);
}

void loop() {
  int32_t sample;
  size_t bytes_read;
  i2s_read(I2S_NUM_1, &sample, sizeof(sample), &bytes_read, portMAX_DELAY);
  Serial.println(sample >> 14);
}
```

---

## Notes

- **Expansion board:** The MVSR is a baseboard that stacks onto the T3-S3 V1.2 main board — it is not standalone
- **Speaker:** MAX98357A I2S amplifier (9 dB gain); use the ESP32 I2S peripheral to drive audio output
- **Microphone:** V1.0 uses MSM261S4030H0R (I2S); V1.1 changed to MP34DT05-A (PDM) — check your hardware revision before selecting the driver
- **RTC:** PCF85063ATL on I2C for timestamped logging
- **Deep sleep:** Current draw is 2.77 µA in deep sleep — suitable for battery-powered deployments

---

## FAQ

**Q: No audio output?**
A: Verify the I2S pins match the MVSR schematic and that MAX98357A SD pin is driven HIGH (not floating) to enable the amplifier.

**Q: Microphone not working?**
A: Check your hardware revision — V1.0 uses I2S mic driver, V1.1 uses PDM mic driver. Using the wrong driver will yield silence.
