---
title: 快速开始
show_source: false
---

# T7-C5 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-T7-C5.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32C5 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持（C5 需要 v3.x 核心）：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-T7-C5 仓库并打开示例工程
3. 选择 **ESP32C5 Dev Module** 及上表参数，点击「上传」

---

## 注意事项

- **双频 Wi-Fi 6**：支持 2.4 GHz + 5 GHz（802.11ax），是首款支持双频的 ESP32 芯片
- **协议支持**：蓝牙 5 LE，Thread/Zigbee（IEEE 802.15.4）
- **SDK 要求**：需要 Arduino ESP32 核心 v3.x+ 和 ESP-IDF v5.3+
- **天线**：板载陶瓷天线

---

### 外设示例

#### Wi-Fi 6（2.4 GHz + 5 GHz）

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.begin("your-ssid", "your-password");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); Serial.print(".");
  }
  Serial.println("\n已连接: " + WiFi.localIP().toString());
  Serial.printf("信号强度: %d dBm\n", WiFi.RSSI());
}

void loop() { delay(1000); }
```

#### 蓝牙低功耗广播

```cpp
#include <BLEDevice.h>
#include <BLEAdvertising.h>

void setup() {
  Serial.begin(115200);
  BLEDevice::init("T7-C5");
  BLEAdvertising *adv = BLEDevice::getAdvertising();
  adv->setScanResponse(false);
  BLEDevice::startAdvertising();
  Serial.println("BLE 广播已启动");
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：Arduino IDE 中找不到该开发板？**
A：ESP32-C5 需要 Arduino ESP32 核心 v3.x 或更新版本，请在开发板管理器中更新。

**Q：5 GHz Wi-Fi 无法连接？**
A：确认路由器支持 802.11ax（Wi-Fi 6）5 GHz 频段，并使用正确的 SSID 和密码。
