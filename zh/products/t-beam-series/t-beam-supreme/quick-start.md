---
title: 快速开始
show_source: false
---

# T-Beam Supreme 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| U8g2 | 最新 | [GitHub](https://github.com/olikraus/u8g2) |
| SensorLib | 最新 | [GitHub](https://github.com/lewisxhe/SensorsLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series.git
   ```
3. 打开 `platformio.ini`，在 `default_envs` 下取消注释 `T-Beam-Supreme` 环境行
4. 取消注释一行 `src_dir = xxxx`（同时只能有一行有效）
5. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 安装依赖库

将项目 `lib/` 中的所有文件夹复制到 Arduino 库目录，或通过 **工具** → **管理库** 安装。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 4. 上传

在 `utilities.h` 中取消注释 `LILYGO_T_BEAM_S3_SUPREME`，然后点击「上传」。  
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，然后上传。

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `LoRa_Sender` | LoRa 数据包发送 |
| `LoRa_Receiver` | LoRa 数据包接收 |
| `GPS_Basic` | L76K GPS 数据解析 |
| `OLED_Test` | SH1106 OLED 显示测试 |
| `PMU_AXP2101` | AXP2101 电源管理 |
| `Factory` | 全功能出厂测试 |

---

### 外设示例

#### 显示屏（SH1106 OLED — U8g2）

```cpp
#include <Wire.h>
#include <U8g2lib.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
    Wire.begin();
    u8g2.begin();
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(10, 30, "T-Beam Supreme");
    u8g2.sendBuffer();
}

void loop() {}
```

#### LoRa（SX1262 — RadioLib）

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
    int state = radio.transmit("Hello T-Beam Supreme");
    Serial.printf("TX 状态: %d\n", state);
    delay(2000);
}
```

#### GPS（MAX-M10S / L76K — TinyGPSPlus）

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

#### 传感器（BME280 + QMI8658 — SensorLib）

```cpp
#include <Wire.h>
#include <SensorBME280.hpp>
#include <SensorQMI8658.hpp>

SensorBME280 bme;
SensorQMI8658 qmi;

void setup() {
    Serial.begin(115200);
    Wire.begin();

    if (bme.begin(&Wire, BME280_I2C_ADDR_PRIMARY)) {
        Serial.println("BME280 已就绪");
    }
    if (qmi.begin(Wire, QMI8658_L_SLAVE_ADDRESS)) {
        qmi.configAccelerometer(SensorQMI8658::ACC_RANGE_4G, SensorQMI8658::ACC_ODR_1000Hz);
        qmi.enableAccelerometer();
        Serial.println("QMI8658 已就绪");
    }
}

void loop() {
    if (bme.isReady()) {
        Serial.printf("温度: %.2f °C  湿度: %.2f%%  气压: %.2f hPa\n",
            bme.getTemperature(), bme.getHumidity(), bme.getPressure());
    }
    delay(1000);
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：与 T-Beam 有什么区别？**  
A：T-Beam Supreme 采用 ESP32-S3（更快、内存更大），搭载 SX1262 LoRa、L76K GPS、AXP2101 电源管理，并新增 8 MB PSRAM 和 TF 卡槽。
