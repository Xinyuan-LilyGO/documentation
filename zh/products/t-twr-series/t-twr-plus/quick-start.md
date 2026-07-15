---
title: 快速开始
show_source: false
---

# T-TWR Plus 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| U8g2 | 最新 | [GitHub](https://github.com/olikraus/u8g2) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

> **重要：** 上电前务必连接射频天线。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-TWR.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-TWR-Plus` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### 外设示例

#### SA868 VHF/UHF 无线电（AT 指令）

```cpp
// SA868 UART — 请查阅 T-TWR-Plus 原理图确认引脚
HardwareSerial sa868(1);

void setup() {
  Serial.begin(115200);
  sa868.begin(9600, SERIAL_8N1, /*RX=*/16, /*TX=*/15);
  delay(500);
  // 查询固件版本
  sa868.println("AT+DMOCONNECT");
  delay(200);
  while (sa868.available()) Serial.write(sa868.read());
}

void loop() {}
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
    Serial.printf("纬度: %.6f  经度: %.6f\n",
      gps.location.lat(), gps.location.lng());
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
  u8g2.drawStr(0, 20, "T-TWR Plus Ready");
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

**Q：与 T-TWR 有何区别？**  
A：T-TWR Plus 增加了更大容量电池、升级了电源管理单元，并新增了额外的 I/O 接口。
