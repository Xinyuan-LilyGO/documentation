---
title: 快速开始
show_source: false
---

# SIM7600E 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Arduino

### PlatformIO（推荐）

克隆 [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)，在 `platformio.ini` 中选择 `SIM7600E` 环境，编译上传。

---

### 外设示例

#### LTE 数据（TinyGSM）

```cpp
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

// SIM7600E UART: RX=26, TX=27, PWR_KEY=4
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
  Serial.println("GPRS 已连接: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS（SIM7600E 内置 GNSS）

```cpp
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 26, 27);
  modem.enableGPS();
  Serial.println("GPS 已使能");
}

void loop() {
  float lat, lon, speed, alt;
  int vsat, usat;
  if (modem.getGPS(&lat, &lon, &speed, &alt, &vsat, &usat)) {
    Serial.printf("纬度: %.6f  经度: %.6f  海拔: %.1f\n", lat, lon, alt);
  }
  delay(2000);
}
```

---

## 常见问题

**Q：SIM7600E 覆盖哪些地区？**  
A：SIM7600E 是欧洲版本，支持 LTE Cat-4、WCDMA 和 GSM，适用于欧洲/中东/非洲频段。
