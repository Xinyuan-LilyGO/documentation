---
title: 快速开始
show_source: false
---

# T7 (Mini32) 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/LilyGO/TTGO-T7-Demo.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Enabled** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 TTGO-T7-Demo 仓库并打开示例工程
3. 选择 **ESP32 Wrover Module** 及上表参数，点击「上传」

---

## 注意事项

- **USB**：CH9102 USB 转串口，若端口未识别请安装 CH9102 驱动
- **PSRAM**：8 MB PSRAM——必须选择 **ESP32 Wrover Module**（不要选 ESP32 Dev Module），才能使用 PSRAM API
- **STEMMA QT / Qwiic**：JST-SH I2C 接口，支持即插即用传感器扩展
- **电池**：板载充电电路，支持锂电池充电
- **MicroPython**：支持，可通过 esptool 刷入 MicroPython 固件

---

### 外设示例

#### Wi-Fi（客户端模式）

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

#### PSRAM 使用

```cpp
void setup() {
  Serial.begin(115200);
  if (psramFound()) {
    Serial.printf("PSRAM 可用: %u 字节\n", ESP.getFreePsram());
    uint8_t *buf = (uint8_t *)ps_malloc(1024 * 1024); // 从 PSRAM 分配 1 MB
    if (buf) { Serial.println("PSRAM 分配成功"); free(buf); }
  } else {
    Serial.println("未检测到 PSRAM");
  }
}

void loop() {}
```

---

## 常见问题

**Q：PSRAM 无法使用？**
A：开发板选择 **ESP32 Wrover Module**（不要选 ESP32 Dev Module），Wrover 定义才能启用 PSRAM 支持。

**Q：端口未识别？**
A：安装 CH9102 USB 驱动后重新连接。
