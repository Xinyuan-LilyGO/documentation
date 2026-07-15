---
title: 快速开始
show_source: false
---

# T-SIM7670G-S3 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Arduino

### PlatformIO（推荐）

克隆 [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)，在 `platformio.ini` 中选择 `T-SIM7670G-S3` 环境，编译上传。

---

### 外设示例

#### LTE 数据（TinyGSM）

```cpp
#define TINY_GSM_MODEM_SIM7672
#include <TinyGsmClient.h>

// SIM7670G UART: RX=4, TX=5, PWR_KEY=12
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 4, 5);
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH); delay(1000);
  digitalWrite(12, LOW);  delay(2000);

  modem.restart();
  Serial.println("调制解调器: " + modem.getModemInfo());
  modem.gprsConnect("your.apn", "", "");
  Serial.println("已连接: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS（SIM7670G 内置 GNSS）

```cpp
void setup() {
  // 调制解调器已初始化
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

---

## 常见问题

**Q：SIM7670G 无法连接？**  
A：插入支持 LTE Cat-1 服务的 Nano SIM 卡，连接 LTE 和 GPS 天线，使用 PWR_KEY GPIO 给模组上电后再发送 AT 指令。
