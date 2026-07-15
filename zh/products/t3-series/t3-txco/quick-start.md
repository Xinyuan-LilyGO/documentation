---
title: 快速开始
show_source: false
---

# T3-TCXO 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| U8g2 | 最新 | Arduino 库管理器 |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. 打开项目，在 `platformio.ini` 中选择 `T3_V3_0_SX1276_TCXO` 环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Enabled** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-LoRa-Series 仓库并打开示例工程
3. 在 `utilities.h` 中取消注释 `T3_V3_0_SX1276_TCXO`
4. 按上表配置开发板参数，点击「上传」

---

### 外设示例

#### LoRa（SX1276 + TCXO — RadioLib）

```cpp
#include <RadioLib.h>

// SX1276: CS=18, IRQ=26, RST=23, DIO1=33
SX1276 radio = new Module(18, 26, 23, 33);

void setup() {
  Serial.begin(115200);
  // TCXO 使能引脚（GPIO12）须在 LoRa 初始化前拉高
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH);
  delay(10);

  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1276 + TCXO 就绪");
}

void loop() {
  int state = radio.transmit("Hello T3-TCXO");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### OLED 显示屏（SSD1306 — U8g2）

```cpp
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "T3-TCXO Ready");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## 注意事项

- **SoC**：ESP32-Pico-D4（非标准 ESP32 模块），请选择 **ESP32 Dev Module** 开发板定义
- **TCXO**：板载 TCXO（±0.5 ppm）提供温度稳定频率，LoRa 初始化前须将 TCXO 使能引脚（GPIO12）拉高
- **PSRAM**：板载 2 MB PSRAM，需在开发板设置中启用
- **供电**：支持 USB-C、3.7 V 锂电池及太阳能输入

---

## 常见问题

**Q：在极端温度下 LoRa 频率漂移？**
A：TCXO 正是为此设计——确保在调用 `radio.begin()` 前将 GPIO12 置高以使能 TCXO。

**Q：连接 USB-C 后找不到端口？**
A：ESP32-Pico-D4 使用标准 USB 转串口桥接，检查设备管理器中的 COM 端口，必要时安装 CH34x 或 CP210x 驱动。
