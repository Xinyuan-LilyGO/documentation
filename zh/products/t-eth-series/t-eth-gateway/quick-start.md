---
title: 快速开始
show_source: false
---

# T-ETH Gateway Shield 快速开始

## 概述

T-ETH Gateway Shield 是专为 **T-ETH-Elite** 主板设计的扩展板，支持 LoRa（SX1276/SX1262/SX1280/LR1121）及可选 GPS（L76K）。

---

## 安装步骤

1. 将 Gateway Shield 安装到 T-ETH-Elite 主板上
2. 安装 LoRa 和 GPS 天线
3. 克隆仓库并在 `platformio.ini` 中选择对应示例：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```

---

### 外设示例

#### LoRa（SX1262 — 网关扩展板）

```cpp
#include <RadioLib.h>

// SX1262 引脚 — 请查阅 LilyGO-T-ETH-Series 原理图
SX1262 radio = new Module(10, 3, 9, 4);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1262 就绪");
}

void loop() {
  int state = radio.transmit("Hello Gateway");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### GPS（L76K — TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600, SERIAL_8N1, /*RX=*/34, /*TX=*/33);
}

void loop() {
  while (gpsSerial.available()) gps.encode(gpsSerial.read());
  if (gps.location.isUpdated()) {
    Serial.printf("纬度: %.6f  经度: %.6f\n",
      gps.location.lat(), gps.location.lng());
  }
}
```

---

## 常见问题

**Q：Gateway Shield 能单独使用吗？**  
A：不能，需要配合 T-ETH-Elite 主板使用。

**Q：支持哪些 LoRa 模块？**  
A：SX1276、SX1262、SX1280 和 LR1121，下单时请选择对应模块版本。
