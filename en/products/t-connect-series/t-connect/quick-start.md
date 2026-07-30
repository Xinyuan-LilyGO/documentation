---
title: Quick Start
show_source: false
---

# T-Connect Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Connect.git
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

#### 2. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 3. Upload

Connect via USB-C, open an example, and click **Upload**.

---

### Peripheral Examples

#### RS485 Communication

```cpp
// RS485 channel 1: TX=4, RX=5
HardwareSerial rs485(1);

void setup() {
  Serial.begin(115200);
  rs485.begin(9600, SERIAL_8N1, 5, 4); // RX, TX
}

void loop() {
  rs485.print("Hello RS485\r\n");
  delay(1000);
  while (rs485.available()) {
    Serial.write(rs485.read());
  }
}
```

#### CAN Bus (TWAI)

```cpp
#include <driver/twai.h>

// CAN TX=4, RX=5 (shared with RS485 channel 1 — configure only one at a time)
void setup() {
  Serial.begin(115200);
  twai_general_config_t g_config = TWAI_GENERAL_CONFIG_DEFAULT(GPIO_NUM_4, GPIO_NUM_5, TWAI_MODE_NORMAL);
  twai_timing_config_t  t_config = TWAI_TIMING_CONFIG_500KBITS();
  twai_filter_config_t  f_config = TWAI_FILTER_CONFIG_ACCEPT_ALL();
  twai_driver_install(&g_config, &t_config, &f_config);
  twai_start();
  Serial.println("CAN ready");
}

void loop() {
  twai_message_t msg;
  msg.identifier = 0x123;
  msg.data_length_code = 4;
  msg.data[0] = 0xDE; msg.data[1] = 0xAD;
  msg.data[2] = 0xBE; msg.data[3] = 0xEF;
  twai_transmit(&msg, pdMS_TO_TICKS(1000));
  delay(1000);
}
```

#### Relay Control

```cpp
// Relay control pin — check utilities.h for your board revision
#define RELAY_PIN  15

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW); // relay off
}

void loop() {
  digitalWrite(RELAY_PIN, HIGH); // relay on
  delay(2000);
  digitalWrite(RELAY_PIN, LOW);  // relay off
  delay(2000);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.
