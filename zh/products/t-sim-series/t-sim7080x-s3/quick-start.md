---
title: 快速开始
show_source: false
---

# T-SIM7080X-S3 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

克隆 [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)，在 `platformio.ini` 中选择 GitHub 项目当前使用的 `T-SIM7080G-S3` 环境，编译上传。

---

### 外设示例

#### NB-IoT / LTE-M 数据（TinyGSM）

```cpp
#define TINY_GSM_MODEM_SIM7080
#include <TinyGsmClient.h>

// SIM7080G UART: RX=4, TX=5, PWR_KEY=12
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 4, 5);
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH); delay(1000);
  digitalWrite(12, LOW);  delay(3000);

  modem.restart();
  Serial.println("调制解调器: " + modem.getModemInfo());
  modem.setNetworkMode(38); // LTE-M + NB-IoT
  modem.gprsConnect("your.apn", "", "");
  Serial.println("已连接: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
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

**Q：SIM7080G 无响应？**  
A：插入支持 NB-IoT 或 LTE-M 服务的 Nano SIM 卡，连接蜂窝天线，使用 PWR_KEY GPIO 给模组上电后再发送 AT 指令。
