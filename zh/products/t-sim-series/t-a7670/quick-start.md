---
title: 快速开始
show_source: false
---

# T-A7670 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series.git
   ```
3. 打开 `platformio.ini`，选择 `T-A7670X` 环境行
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### 外设示例

#### LTE 数据（TinyGSM）

```cpp
#define TINY_GSM_MODEM_A7670
#include <TinyGsmClient.h>

// A7670 UART: RX=26, TX=27, PWR_KEY=4
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 26, 27);
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(2000);

  modem.restart();
  Serial.println("调制解调器: " + modem.getModemInfo());
  modem.gprsConnect("your.apn", "", "");
  Serial.println("已连接: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS（A7670 内置 GNSS）

```cpp
void setup() {
  // 调制解调器已在上方初始化
  modem.enableGPS();
}

void loop() {
  float lat, lon, speed, alt;
  int vsat, usat;
  if (modem.getGPS(&lat, &lon, &speed, &alt, &vsat, &usat)) {
    Serial.printf("纬度: %.6f  经度: %.6f\n", lat, lon);
  }
  delay(2000);
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

**Q：模组无响应？**  
A：插入有效 SIM 卡，连接 LTE 和 GPS 天线，使用 PWR_KEY GPIO 给 A7670 模组上电后再发送 AT 指令。

**Q：A7670 支持什么网络制式？**  
A：A7670 支持 LTE Cat-1，可回退 2G/3G，支持语音通话、短信和数据业务。
