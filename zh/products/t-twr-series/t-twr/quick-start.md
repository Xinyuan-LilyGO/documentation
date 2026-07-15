---
title: 快速开始
show_source: false
---

# T-TWR 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| U8g2 | 最新 | [GitHub](https://github.com/olikraus/u8g2) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

> **重要：** T-TWR 无线电功能需要电池供电。仅靠 USB 供电无法为 SA868 射频模块提供足够电流，请在使用无线电前接好 21700 或 18650 电池。

> **重要：** 上电前务必连接射频天线，未接天线时发射可能损坏 SA868 模块。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-TWR.git
   ```
3. 打开 `platformio.ini`，在 `[platformio]` 下取消注释目标示例行
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
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 外设示例

#### SA868 VHF/UHF 无线电（AT 指令）

```cpp
// SA868 通过 UART 连接 — 请查阅 T-TWR 原理图确认引脚
HardwareSerial sa868(1);

void setup() {
  Serial.begin(115200);
  sa868.begin(9600, SERIAL_8N1, /*RX=*/16, /*TX=*/15);
  delay(500);
  // 设置频率（UHF 示例：433.000 MHz 收发）
  sa868.println("AT+DMOSETGROUP=0,433.0000,433.0000,0000,1,0000");
  delay(200);
  while (sa868.available()) Serial.write(sa868.read());
}

void loop() {
  // PTT：将 PTT 引脚拉低发射，拉高接收
}
```

#### GPS（TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(2);

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600, SERIAL_8N1, /*RX=*/3, /*TX=*/1);
}

void loop() {
  while (gpsSerial.available()) gps.encode(gpsSerial.read());
  if (gps.location.isUpdated()) {
    Serial.printf("纬度: %.6f  经度: %.6f  卫星数: %d\n",
      gps.location.lat(), gps.location.lng(), gps.satellites.value());
  }
}
```

#### OLED 显示屏（U8g2）

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
  u8g2.drawStr(0, 20, "T-TWR Ready");
  u8g2.sendBuffer();
  delay(1000);
}
```

#### 电源管理（AXP2101 — XPowersLib）

```cpp
#include <XPowersLib.h>

XPowersPMU pmu;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  if (!pmu.begin(Wire, AXP2101_SLAVE_ADDRESS)) {
    Serial.println("PMU 初始化失败");
    return;
  }
  Serial.printf("电池电压: %d mV\n", pmu.getBattVoltage());
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：无线电无法发射？**  
A：确认已连接电池（仅 USB 供电不足以驱动射频），并已接好天线。通过 AXP2102 PMU 检查 SA868 供电状态。

**Q：UHF 版还是 VHF 版？**  
A：T-TWR 有 UHF（400–480 MHz）和 VHF（134–174 MHz）两个版本，请确认已为你的版本编程正确频率。
