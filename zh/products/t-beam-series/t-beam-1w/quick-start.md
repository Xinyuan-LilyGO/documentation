---
title: 快速开始
show_source: false
---

# T-Beam 1W 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| U8g2 | 最新 | [GitHub](https://github.com/olikraus/u8g2) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. 打开 `platformio.ini`，在 `default_envs` 下取消注释 `T-Beam-1W` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

按照 [Arduino ESP32 安装指南](https://docs.espressif.com/projects/arduino-esp32/en/latest/) 安装开发板支持包。

#### 2. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 3. 上传

在 `utilities.h` 中取消注释 `LILYGO_T_BEAM_S3_1W`，然后点击「上传」。

---

### 外设示例

#### LoRa（SX1262 1W — RadioLib）

```cpp
#include <RadioLib.h>

// 引脚定义 — 与 T-Beam Supreme 相同
#define LORA_CS    10
#define LORA_IRQ   1
#define LORA_RST   17
#define LORA_BUSY  2

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    // 最大输出功率 22 dBm（实际 1W 需外部 PA，发射前务必连接天线）
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa 初始化失败: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello T-Beam 1W");
    Serial.printf("TX 状态: %d\n", state);
    delay(2000);
}
```

#### GPS（L76K — TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

#define GPS_RX  9
#define GPS_TX  8

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(38400, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("纬度: %.6f  经度: %.6f\n", gps.location.lat(), gps.location.lng());
    }
}
```

#### 电源管理（AXP2101 — XPowersLib）

```cpp
#include <XPowersLib.h>

XPowersAXP2101 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    if (!PMU.begin(Wire, AXP2101_SLAVE_ADDRESS)) {
        Serial.println("PMU 初始化失败");
        return;
    }
    Serial.printf("电池电压: %u mV\n", PMU.getBattVoltage());
    Serial.printf("充电中: %s\n", PMU.isCharging() ? "是" : "否");
}

void loop() {}
```

---

## 常见问题

**Q：「1W」是什么意思？**  
A：T-Beam 1W 搭载 SX1262 LoRa 模块，最大发射功率可达 **32 dBm（1 瓦）**，远超普通 LoRa 模块的 14–20 dBm。发射前请务必连接天线。

**Q：电池接口是什么类型？**  
A：T-Beam 1W 使用 7.4 V 电池输入（板载不含充电电路），请使用 2S 锂离子或锂聚合物电池组。
