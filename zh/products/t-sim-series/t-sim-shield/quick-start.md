---
title: 快速开始
show_source: false
---

# T-SIM Shield 快速开始

## 概述

T-SIM Shield 是一款扩展板，为兼容的 ESP32 开发板添加蜂窝模组连接能力。

---

## 安装步骤

1. 将 T-SIM Shield 安装到兼容的 ESP32 开发板上
2. 插入 SIM 卡并连接天线
3. 克隆 [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) 并选择对应示例

---

### 外设示例

#### 通过 SIM Shield 进行蜂窝数据通信（TinyGSM）

```cpp
// 按实际安装的 SIM 模块选择调制解调器类型
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

// UART 引脚 — 请查阅 T-SIM-Shield 原理图及所连接的主板
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, /*RX=*/26, /*TX=*/27);
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

---

## 常见问题

**Q：T-SIM Shield 兼容哪些开发板？**  
A：T-SIM Shield 适配兼容的 ESP32 或 ESP32-S3 开发板，详细引脚兼容列表请参考硬件说明页。
