---
title: Quick Start
show_source: false
---

# T-Beam Supreme Quick Start

## Required Libraries

| Library | Version | Source |
| :-----: | :-----: | :----: |
| RadioLib | Latest | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | Latest | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | Latest | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| U8g2 | Latest | [GitHub](https://github.com/olikraus/u8g2) |
| SensorLib | Latest | [GitHub](https://github.com/lewisxhe/SensorsLib) |

---

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) and the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. Open `platformio.ini` and uncomment the `T-Beam-Supreme` environment under `default_envs`
4. Uncomment one `src_dir = xxxx` line (only one active at a time)
5. Click **✓** to build, connect via USB-C, click **→** to upload

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

Copy all folders from the project `lib/` to your Arduino libraries directory, or install via **Tools** → **Manage Libraries**.

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

In `utilities.h`, uncomment `LILYGO_T_BEAM_S3_SUPREME`, then click **Upload**.  
If upload fails: hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `LoRa_Sender` | LoRa packet transmission |
| `LoRa_Receiver` | LoRa packet reception |
| `GPS_Basic` | L76K GPS data parsing |
| `OLED_Test` | SH1106 OLED display test |
| `PMU_AXP2101` | AXP2101 power management |
| `Factory` | Full factory test |

---

### Peripheral Examples

#### Display (SH1106 OLED — U8g2)

```cpp
#include <Wire.h>
#include <U8g2lib.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
    Wire.begin();
    u8g2.begin();
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(10, 30, "T-Beam Supreme");
    u8g2.sendBuffer();
}

void loop() {}
```

#### LoRa (SX1262 — RadioLib)

```cpp
#include <RadioLib.h>

#define LORA_CS    10
#define LORA_IRQ   1
#define LORA_RST   17
#define LORA_BUSY  2

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa init failed: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello T-Beam Supreme");
    Serial.printf("TX state: %d\n", state);
    delay(2000);
}
```

#### GPS (MAX-M10S / L76K — TinyGPSPlus)

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

#define GPS_RX  9
#define GPS_TX  8

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(38400, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n", gps.location.lat(), gps.location.lng());
    }
}
```

#### PMU (AXP2101 — XPowersLib)

```cpp
#include <XPowersLib.h>

XPowersAXP2101 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    if (!PMU.begin(Wire, AXP2101_SLAVE_ADDRESS)) {
        Serial.println("PMU init failed");
        return;
    }
    Serial.printf("Battery voltage: %u mV\n", PMU.getBattVoltage());
    Serial.printf("Charging: %s\n", PMU.isCharging() ? "Yes" : "No");
}

void loop() {}
```

#### Sensors (BME280 + QMI8658 — SensorLib)

```cpp
#include <Wire.h>
#include <SensorBME280.hpp>
#include <SensorQMI8658.hpp>

SensorBME280 bme;
SensorQMI8658 qmi;

void setup() {
    Serial.begin(115200);
    Wire.begin();

    if (bme.begin(&Wire, BME280_I2C_ADDR_PRIMARY)) {
        Serial.println("BME280 online");
    }
    if (qmi.begin(Wire, QMI8658_L_SLAVE_ADDRESS)) {
        qmi.configAccelerometer(SensorQMI8658::ACC_RANGE_4G, SensorQMI8658::ACC_ODR_1000Hz);
        qmi.enableAccelerometer();
        Serial.println("QMI8658 online");
    }
}

void loop() {
    if (bme.isReady()) {
        Serial.printf("Temp: %.2f C  Humidity: %.2f%%  Pressure: %.2f hPa\n",
            bme.getTemperature(), bme.getHumidity(), bme.getPressure());
    }
    delay(1000);
}
```

---

## FAQ

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.

**Q: GPS not getting a fix?**  
A: Move outdoors with a clear sky view. Cold start can take 1–3 minutes. Ensure the GPS antenna is connected.

**Q: What is the difference from T-Beam?**  
A: T-Beam Supreme uses ESP32-S3 (faster, more RAM), SX1262 LoRa, L76K GPS, AXP2101 PMU, and adds 8 MB PSRAM plus a TF card slot compared to the original T-Beam.
