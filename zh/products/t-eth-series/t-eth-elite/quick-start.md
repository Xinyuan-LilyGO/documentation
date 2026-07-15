---
title: 快速开始
show_source: false
---

# T-ETH Elite 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| ETHClass2 | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-ETH-Elite` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### 外设示例

#### 以太网（ETHClass2）

```cpp
#include <ETHClass2.h>

// T-ETH Elite 使用 W5500 SPI 以太网
// 引脚定义请参阅 LilyGO-T-ETH-Series/src/utilities.h
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

**Q：不接扩展板能单独使用吗？**  
A：可以。T-ETH Elite 可作为独立的 ESP32-S3 以太网开发板使用，网关扩展板提供 LoRa/GPS 扩展功能。
