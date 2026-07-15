---
title: 快速开始
show_source: false
---

# T3-S3 V1.3 快速开始

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
3. 打开项目，在 `platformio.ini` 中选择与你的 LoRa 模块型号对应的环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **LilyGo T3-S3** |
| Board Revision | 按 LoRa 模块选择（SX1262 / SX1276 / SX1280 等） |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **QSPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-LoRa-Series 仓库并打开示例工程
3. 将 **Board Revision** 设置为与 LoRa 模块匹配的值
4. 点击「上传」

---

### 外设示例

#### LoRa（SX1262）

```cpp
#include <RadioLib.h>

// T3-S3 V1.3 SX1262: CS=7, IRQ=33, RST=8, BUSY=34
SX1262 radio = new Module(7, 33, 8, 34);

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
  int state = radio.transmit("Hello T3-S3 V1.3");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### OLED 显示屏（SSD1306 — U8g2）

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// SSD1306 128×64 I2C，SDA=18，SCL=17
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  Wire.begin(18, 17);
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "T3-S3 V1.3");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## 注意事项

- **V1.3 与 V1.2 的区别**：V1.3 进行了硬件优化和 PCB 布局改进，与 V1.2 引脚完全兼容，代码无需修改
- **LoRa 型号**：SX1262 / SX1276 / SX1278（Sub-GHz）或 SX1280（2.4 GHz）——设置正确的 Board Revision
- **Meshtastic**：本板支持 Meshtastic，可通过网页烧录工具或 CLI 刷入固件
- **PSRAM**：QSPI PSRAM，Arduino IDE 中选择 **QSPI PSRAM**

---

## 常见问题

**Q：V1.2 的代码可以在 V1.3 上直接使用吗？**
A：可以，引脚定义完全相同，无需任何代码改动。

**Q：上传失败，找不到端口？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**。若之前已禁用，按住 BOOT 再按 RST 进入下载模式。
