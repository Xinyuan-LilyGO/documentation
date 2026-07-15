---
title: 快速开始
show_source: false
---

# T3-S3 LR1121 快速开始

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
3. 打开项目，在 `platformio.ini` 中选择 `T3-S3-LR1121` 环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **LilyGo T3-S3** |
| Board Revision | **Radio-LR1121** |
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
3. 将 **Board Revision** 设置为 **Radio-LR1121**
4. 点击「上传」

---

### 外设示例

#### LoRa（LR1121 三频段）

```cpp
#include <RadioLib.h>

// T3-S3 LR1121: CS=7, IRQ=33, RST=8, BUSY=34
LR1121 radio = new Module(7, 33, 8, 34);

void setup() {
  Serial.begin(115200);
  radio.reset();
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LR1121 初始化失败: "); Serial.println(state);
    while (true);
  }
  radio.setOutputPower(22);
  Serial.println("LR1121 就绪");
}

void loop() {
  int state = radio.transmit("Hello LR1121");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### OLED 显示屏（SH1106 1.3 英寸 — U8g2）

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// SH1106 128×64 I2C，SDA=18，SCL=17
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  Wire.begin(18, 17);
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 20, "T3-S3 LR1121");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## 注意事项

- **LR1121 三频段无线电**：支持 400–520 MHz、830–945 MHz 和 2400–2500 MHz，不支持同时在两个频段收发
- **1.3 英寸 OLED**：比其他 T3 型号的 0.96 英寸更大，初始化时选择正确的 U8g2 显示构造函数
- **RTC**：PCF85063ATL（I2C），可用于低功耗带时间戳的数据记录
- **PSRAM**：QSPI PSRAM，Arduino IDE 中选择 **QSPI PSRAM**

---

## 常见问题

**Q：LR1121 无响应？**
A：LR1121 启动时需要复位脉冲，请在 `radio.begin()` 前先调用 `radio.reset()`。

**Q：无法上传？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**。必要时按住 BOOT + 按 RST 进入下载模式。
