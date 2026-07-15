---
title: 快速开始
show_source: false
---

# T-Beam BPF 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. 打开 `platformio.ini`，在 `default_envs` 下取消注释 `T-Beam-BPF` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

在 `utilities.h` 中取消注释 `LILYGO_T_BEAM_S3_BPF`，然后点击「上传」。

---

### 外设示例

#### LoRa（SX1262 + BPF — RadioLib）

> 板载带通滤波器（BPF）始终在 RF 链路中，无需额外配置，直接使用 RadioLib 即可。

```cpp
#include <RadioLib.h>

#define LORA_CS    10
#define LORA_IRQ   1
#define LORA_RST   17
#define LORA_BUSY  2

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa 初始化失败: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello T-Beam BPF");
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

**Q：BPF 滤波器有什么作用？**  
A：带通滤波器（BPF）可减少大功率 LoRa 发射机的带外谐波和干扰，改善频谱纯度，有助于满足无线电法规要求。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
