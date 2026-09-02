---
title: 快速开始
show_source: false
---

# T7-S3 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T7-S3.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-T7-S3 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **PSRAM**：8 MB OPI PSRAM，Arduino IDE 中选择 **OPI PSRAM**
- **USB-C OTG**：支持 USB OTG，可连接 USB 外设
- **STEMMA QT / Qwiic**：JST-SH I2C 接口，支持传感器扩展
- **电池**：支持锂电池充电

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
    uint8_t *buf = (uint8_t *)ps_malloc(512 * 1024); // 从 PSRAM 分配 512 KB
    if (buf) { Serial.println("PSRAM 分配成功"); free(buf); }
  } else {
    Serial.println("未检测到 PSRAM");
  }
}

void loop() {}
```

---

## 常见问题

**Q：上传失败，找不到端口？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**。必要时按住 BOOT + 按 RST 进入下载模式。

**Q：PSRAM 无法使用？**
A：在 PSRAM 设置中选择 **OPI PSRAM**，不要保持 Disabled。
