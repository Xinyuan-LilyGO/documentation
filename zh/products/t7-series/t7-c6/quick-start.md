---
title: 快速开始
show_source: false
---

# T7-C6 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T7-c6.git
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
2. 克隆 T7-c6 仓库并打开示例工程
3. 选择 **ESP32C6 Dev Module** 及上表参数，点击「上传」

---

## 注意事项

- **Wi-Fi 6**：802.11ax（仅 2.4 GHz），蓝牙 5.0 LE，Thread/Zigbee（IEEE 802.15.4）
- **供电输出**：排针提供 5 V 和 3.3 V 电源
- **QWIIC**：1× QWIIC 接口，支持 I2C 传感器扩展
- **电池**：TP4065 充电 IC，支持锂电池充电
- **Arduino 核心**：需要 ESP32 Arduino 核心 v3.x 才支持 ESP32-C6

---

### 外设示例

#### Wi-Fi 6（802.11ax）

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.begin("your-ssid", "your-password");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); Serial.print(".");
  }
  Serial.println("\n已连接: " + WiFi.localIP().toString());
}

void loop() { delay(1000); }
```

#### 蓝牙低功耗广播

```cpp
#include <BLEDevice.h>
#include <BLEAdvertising.h>

void setup() {
  Serial.begin(115200);
  BLEDevice::init("T7-C6");
  BLEAdvertising *adv = BLEDevice::getAdvertising();
  adv->setScanResponse(false);
  BLEDevice::startAdvertising();
  Serial.println("BLE 广播已启动");
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：Arduino IDE 中找不到开发板？**
A：确认已安装 ESP32 Arduino 核心 v3.x 或更新版本，C6 不支持 v2.x。

**Q：Thread/Zigbee 无法使用？**
A：Thread 和 Zigbee 需要 ESP-IDF v5.x 及专项 SDK 配置，Arduino 暂不直接支持。如需 IEEE 802.15.4 协议请使用 ESP-IDF。
