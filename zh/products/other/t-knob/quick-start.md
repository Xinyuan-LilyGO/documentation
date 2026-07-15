---
title: 快速开始
show_source: false
---

# T-Knob 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Knob.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持（C6 需要 v3.x 核心）：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 T-Knob 仓库并打开示例工程
3. 选择 **ESP32C6 Dev Module** 及上表参数，点击「上传」

---

## 注意事项

- **电机驱动**：TMC6300 无刷直流电机驱动，通过旋钮提供触觉反馈
- **霍尔传感器**：MT6701 提供高精度旋钮角度测量
- **无线连接**：Wi-Fi 6（802.11ax），蓝牙 5.0 LE，Thread/Zigbee（IEEE 802.15.4）
- **QWIIC**：1× QWIIC 接口，支持 I2C 扩展
- **Arduino 核心**：需要 ESP32 Arduino 核心 v3.x 才支持 ESP32-C6

---

### 外设示例

#### 旋钮（MT6701 霍尔传感器 + TMC6300 电机驱动）

```cpp
#include <Wire.h>

// MT6701 I2C 角度传感器: SDA=6, SCL=7
#define MT6701_ADDR 0x06

void setup() {
  Serial.begin(115200);
  Wire.begin(6, 7);
}

void loop() {
  Wire.beginTransmission(MT6701_ADDR);
  Wire.write(0x03); // 角度寄存器高字节
  Wire.endTransmission(false);
  Wire.requestFrom(MT6701_ADDR, 2);
  if (Wire.available() >= 2) {
    uint16_t raw = (Wire.read() << 6) | (Wire.read() >> 2);
    float angle = raw * 360.0f / 16384.0f;
    Serial.printf("角度: %.2f °\n", angle);
  }
  delay(50);
}
```

#### 触觉反馈（TMC6300 无刷电机驱动）

```cpp
// TMC6300 使能引脚 — 请查阅 T-Knob 原理图
#define MOTOR_EN  10
#define MOTOR_U   2
#define MOTOR_V   3
#define MOTOR_W   4

void setup() {
  pinMode(MOTOR_EN, OUTPUT);
  digitalWrite(MOTOR_EN, HIGH);
  // 设置 PWM 产生触觉定位感
  ledcAttachPin(MOTOR_U, 0);
  ledcSetup(0, 20000, 8);
  ledcWrite(0, 128); // 50% 占空比激励线圈
}

void loop() { delay(100); }
```

---

## 常见问题

**Q：旋钮电机无反应？**
A：确认 TMC6300 使能引脚已正确驱动，电机线圈连接牢固。

**Q：Arduino IDE 中找不到开发板？**
A：需要安装 ESP32 Arduino 核心 v3.x 或更新版本，C6 不支持 v2.x。
