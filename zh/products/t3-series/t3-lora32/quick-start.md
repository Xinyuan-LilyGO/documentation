---
title: 快速开始
show_source: false
---

# T3-LoRa32 快速开始

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
3. 打开项目，在 `platformio.ini` 中选择 `T3_V1.6.1` 环境
4. 点击 **✓** 编译，通过 Micro USB 连接，点击 **→** 上传

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
| PSRAM | Disabled |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 如端口未被识别，安装 **CH9102** USB 驱动
3. 在 `utilities.h` 中取消注释与你板子型号对应的宏（V1.3、V1.6.1 或 TCXO）
4. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **USB 接口**：Micro USB + CH9102 USB 转串口芯片，若端口未识别请安装 CH9102 驱动
- **LoRa 模块**：SX1276（868/915/923 MHz）或 SX1278（433 MHz），取决于订购版本
- **SD 卡**：烧录前取出 TF 卡，SD 卡共用 SPI 总线可能导致上传失败
- **GPIO**：ESP32 的 GPIO33 及以上为仅输入引脚，不可作为输出驱动

---

### 外设示例

#### LoRa（SX1276 / SX1278）

```cpp
#include <RadioLib.h>

// SX1276: CS=18, IRQ=26, RST=23, DIO1=33
SX1276 radio = new Module(18, 26, 23, 33);

void setup() {
  Serial.begin(115200);
  // SX1278 版本请使用 433.0
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1276 就绪");
}

void loop() {
  int state = radio.transmit("Hello LoRa32");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### OLED 显示屏（SSD1306）

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// SSD1306 128×64 I2C，SDA=21，SCL=22
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "LoRa32 Ready");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## 常见问题

**Q：端口未识别？**
A：从厂商官网下载并安装 CH9102 驱动，重新连接即可。

**Q：LoRa 发送失败？**
A：确认代码中的频率与你订购的模块型号一致（433 / 868 / 915 MHz）。
