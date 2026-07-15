---
title: 快速开始
show_source: false
---

# T-LoRa C6 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. 打开 `platformio.ini`，在 `default_envs` 下取消注释对应开发板名称
4. 取消注释一行 `src_dir = xxxx`（同时只能有一行有效）
5. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **160 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4M Flash with spiffs** |

在 `utilities.h` 中取消注释 `T3_C6`，然后点击「上传」。

---

### 外设示例

#### LoRa（SX1262）

```cpp
#include <RadioLib.h>

// SX1262: CS=8, IRQ=14, RST=5, BUSY=13
SX1262 radio = new Module(8, 14, 5, 13);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败: "); Serial.println(state);
    while (true);
  }
  radio.setOutputPower(22);
  Serial.println("SX1262 就绪");
}

void loop() {
  String msg = "Hello from T-LoRa C6";
  int state = radio.transmit(msg);
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

---

## 常见问题

**Q：T-LoRa C6 支持哪些无线协议？**  
A：Wi-Fi 6（802.11ax）、Bluetooth 5 LE、802.15.4（Zigbee/Thread）以及 SX1262 LoRa（868/915 MHz）。
