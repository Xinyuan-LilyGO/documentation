---
title: 快速开始
show_source: false
---

# T-ETH LTE 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| ETHClass2 | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-ETH-LTE` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### 外设示例

#### 以太网（ETHClass2）

```cpp
#include <ETHClass2.h>

void onEthEvent(arduino_event_id_t event) {
  if (event == ARDUINO_EVENT_ETH_GOT_IP) {
    Serial.print("IP: "); Serial.println(ETH2.localIP());
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.onEvent(onEthEvent);
  ETH2.begin();
}

void loop() { delay(1000); }
```

#### LTE 数据（TinyGSM）

```cpp
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

// LTE 调制解调器 UART 引脚 — 请查阅 utilities.h
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, /*RX=*/4, /*TX=*/5);
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH); delay(1000);
  digitalWrite(12, LOW);  delay(2000);

  modem.restart();
  Serial.println("调制解调器: " + modem.getModemInfo());
  modem.gprsConnect("your.apn", "", "");
  Serial.println("LTE 已连接: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：LTE 模组无响应？**  
A：确认已插入有效的 Nano SIM 卡，并已连接 LTE 天线。插入 SIM 卡后重新给板子上电。
