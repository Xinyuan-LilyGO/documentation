---
title: 快速开始
show_source: false
---

# T-SIM7000G 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-SIM7000G.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 Micro USB，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Wrover Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |

---

### 外设示例

#### NB-IoT / LTE-M 数据（TinyGSM）

```cpp
#define TINY_GSM_MODEM_SIM7000
#include <TinyGsmClient.h>

// SIM7000G UART: RX=26, TX=27, PWR_PIN=4
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(9600, SERIAL_8N1, 26, 27);
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(3000);

  modem.restart();
  Serial.println("调制解调器: " + modem.getModemInfo());
  modem.setNetworkMode(38); // LTE-M + NB-IoT
  modem.gprsConnect("your.apn", "", "");
  Serial.println("已连接: " + String(modem.isGprsConnected()));
}

void loop() { delay(1000); }
```

#### GPS（SIM7000G 内置 GNSS）

```cpp
void setup() {
  // 调制解调器已初始化
  modem.enableGPS();
  Serial.println("GPS 已使能");
}

void loop() {
  float lat, lon, speed, alt;
  int vsat, usat;
  if (modem.getGPS(&lat, &lon, &speed, &alt, &vsat, &usat)) {
    Serial.printf("纬度: %.6f  经度: %.6f  卫星数: %d\n", lat, lon, usat);
  }
  delay(2000);
}
```

---

## 常见问题

**Q：模组无响应？**  
A：插入有效的 Nano SIM 卡，连接 LTE 和 GPS 天线，使用 `PWR_PIN` GPIO 给 SIM7000G 模组上电后再发送 AT 指令。

**Q：GPS 一直无法定位？**  
A：在室外开阔处使用，冷启动需要 1–3 分钟，确认已连接 GPS 天线。
