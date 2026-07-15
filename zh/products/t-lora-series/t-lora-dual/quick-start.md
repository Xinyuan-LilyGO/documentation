---
title: 快速开始
show_source: false
---

# T-LoRa Dual 快速开始

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
3. 打开 `platformio.ini`，取消注释 `T-LoRa-Dual` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 外设示例

#### LoRa 无线模块 1（SX1262 — 868/915 MHz）

```cpp
#include <RadioLib.h>

// Radio 1: CS=10, IRQ=11, RST=12, BUSY=13
SX1262 radio1 = new Module(10, 11, 12, 13);

void setup() {
  Serial.begin(115200);
  int state = radio1.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio1 初始化失败: "); Serial.println(state);
    while (true);
  }
  radio1.setOutputPower(22);
  Serial.println("Radio 1 就绪");
}

void loop() {
  int state = radio1.transmit("Hello from Radio 1");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Radio1 发送成功");
  delay(2000);
}
```

#### LoRa 无线模块 2（SX1262 — 433 MHz）

```cpp
#include <RadioLib.h>

// Radio 2: CS=4, IRQ=5, RST=6, BUSY=7
SX1262 radio2 = new Module(4, 5, 6, 7);

void setup() {
  Serial.begin(115200);
  int state = radio2.begin(433.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("Radio2 初始化失败: "); Serial.println(state);
    while (true);
  }
  radio2.setOutputPower(22);
  Serial.println("Radio 2 就绪");
}

void loop() {
  int state = radio2.transmit("Hello from Radio 2");
  if (state == RADIOLIB_ERR_NONE) Serial.println("Radio2 发送成功");
  delay(2000);
}
```

---

## 常见问题

**Q：「Dual」是什么意思？**  
A：T-LoRa Dual 在单块板上集成了两个 LoRa 无线模块，支持同时双频段或双通道 LoRa 通信。
