---
title: Quick Start
show_source: false
---

# T-Knob Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Knob.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Click **✓** to build, connect via USB-C, then click **→** to upload

---

### Arduino IDE

#### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### Steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add ESP32 board support (v3.x required for C6):
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. Clone the T-Knob repo and open an example sketch
3. Select **ESP32C6 Dev Module** and the settings above, then click **Upload**

---

### Peripheral Examples

#### Rotary Knob (MT6701 Hall Sensor + TMC6300 Motor)

```cpp
#include <Wire.h>

// MT6701 I2C angle sensor: SDA=6, SCL=7
#define MT6701_ADDR 0x06

void setup() {
  Serial.begin(115200);
  Wire.begin(6, 7);
}

void loop() {
  Wire.beginTransmission(MT6701_ADDR);
  Wire.write(0x03); // angle register high byte
  Wire.endTransmission(false);
  Wire.requestFrom(MT6701_ADDR, 2);
  if (Wire.available() >= 2) {
    uint16_t raw = (Wire.read() << 6) | (Wire.read() >> 2);
    float angle = raw * 360.0f / 16384.0f;
    Serial.printf("Angle: %.2f deg\n", angle);
  }
  delay(50);
}
```

#### Haptic Feedback (TMC6300 BLDC driver)

```cpp
// TMC6300 enable pin — check T-Knob schematic
#define MOTOR_EN  10
#define MOTOR_U   2
#define MOTOR_V   3
#define MOTOR_W   4

void setup() {
  // Enable the BLDC driver
  pinMode(MOTOR_EN, OUTPUT);
  digitalWrite(MOTOR_EN, HIGH);
  // Set PWM for haptic detent effect
  ledcAttachPin(MOTOR_U, 0);
  ledcSetup(0, 20000, 8);
  ledcWrite(0, 128); // 50% duty for coil excitation
}

void loop() { delay(100); }
```

---

## Notes

- **Motor driver:** TMC6300 BLDC driver provides haptic feedback via the rotary knob
- **Hall sensor:** MT6701 provides high-precision angle measurement for the knob position
- **Connectivity:** Wi-Fi 6 (802.11ax), Bluetooth 5.0 LE, Thread/Zigbee (IEEE 802.15.4)
- **QWIIC:** 1× QWIIC connector for I2C expansion
- **Arduino core:** Requires ESP32 Arduino core v3.x for ESP32-C6 support

---

## FAQ

**Q: Knob motor not responding?**
A: Verify the TMC6300 enable pin is driven correctly and that the motor coil connections are secure.

**Q: Board not found in Arduino IDE?**
A: Install ESP32 Arduino core v3.x or later — the C6 is not supported in v2.x.
