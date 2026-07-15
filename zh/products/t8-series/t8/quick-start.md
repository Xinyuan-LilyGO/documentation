---
title: 快速开始
show_source: false
---

# T8 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/LilyGO/TTGO-T8-ESP32.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，通过 Micro USB 连接，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Frequency | **80 MHz** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 如端口未被识别，安装 **CH9102F** USB 驱动
3. 克隆 TTGO-T8-ESP32 仓库并打开示例工程
4. 选择 **ESP32 Wrover Module** 及上表参数，点击「上传」

---

## 注意事项

- **USB 接口**：Micro USB + CH9102F USB 转串口，若端口未识别请安装 CH9102 驱动
- **PSRAM**：8 MB PSRAM——必须选择 **ESP32 Wrover Module**（不要选 ESP32 Dev Module）才能使用 PSRAM API
- **MicroSD**：TF 卡槽，SPI 接口
- **MicroPython**：支持，可通过 esptool 刷入 MicroPython 固件
- **硬件版本**：V1.7 和 V1.8 引脚兼容

---

### 外设示例

#### SD 卡（SPI）

```cpp
#include <SD.h>
#include <SPI.h>

#define SD_CS  13

void setup() {
  Serial.begin(115200);
  if (!SD.begin(SD_CS)) {
    Serial.println("SD 卡初始化失败"); return;
  }
  Serial.printf("SD 卡容量: %llu MB\n", SD.cardSize() / (1024 * 1024));
  File f = SD.open("/test.txt", FILE_WRITE);
  if (f) { f.println("Hello T8"); f.close(); }
}

void loop() {}
```

#### PSRAM 使用

```cpp
void setup() {
  Serial.begin(115200);
  if (psramFound()) {
    Serial.printf("PSRAM 可用: %u 字节\n", ESP.getFreePsram());
    uint8_t *buf = (uint8_t *)ps_malloc(1024 * 1024);
    if (buf) { Serial.println("1 MB PSRAM 分配成功"); free(buf); }
  } else {
    Serial.println("未检测到 PSRAM");
  }
}

void loop() {}
```

---

## 常见问题

**Q：PSRAM 无法使用？**
A：开发板选择 **ESP32 Wrover Module**（不要选 ESP32 Dev Module），Wrover 定义才能激活 PSRAM 支持。

**Q：连接 Micro USB 后端口未识别？**
A：安装 CH9102F（CH9102）USB 驱动后重新连接。
