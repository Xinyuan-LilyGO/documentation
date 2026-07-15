---
title: 快速开始
show_source: false
---

# T-Beam 快速开始

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
3. 打开 `platformio.ini`，在 `default_envs` 下取消注释 T-Beam 环境行
4. 取消注释一行 `src_dir = xxxx`（同时只能有一行有效）
5. 点击 **✓** 编译，连接 USB，点击 **→** 上传

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
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

#### 4. 上传

在 `utilities.h` 中取消注释对应的开发板型号（如 `LILYGO_T_BEAM_SX1276`），然后点击「上传」。  
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `LoRa_Sender` | LoRa 数据包发送 |
| `LoRa_Receiver` | LoRa 数据包接收 |
| `GPS_NMEA` | GPS NMEA 数据解析 |
| `OLED_Test` | SSD1306 OLED 显示测试 |
| `PMU_AXP192` | AXP192 电源管理 |
| `Factory` | 全功能出厂测试 |

---

### 外设示例

#### Hello World（OLED + GPS）

```cpp
#include <Wire.h>
#include <U8g2lib.h>
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

// GPS UART 引脚（根据实际版本调整）
#define GPS_TX  34
#define GPS_RX  12
#define GPS_BAUD 9600

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);
TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Wire.begin();
    u8g2.begin();
    GPSSerial.begin(GPS_BAUD, SERIAL_8N1, GPS_TX, GPS_RX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());

    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB08_tr);
    u8g2.drawStr(0, 12, "T-Beam GPS");
    if (gps.location.isValid()) {
        char buf[32];
        snprintf(buf, sizeof(buf), "Lat: %.4f", gps.location.lat());
        u8g2.drawStr(0, 28, buf);
        snprintf(buf, sizeof(buf), "Lon: %.4f", gps.location.lng());
        u8g2.drawStr(0, 44, buf);
    } else {
        u8g2.drawStr(0, 28, "Waiting for GPS...");
    }
    u8g2.sendBuffer();
    delay(1000);
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：GPS 一直无法定位？**  
A：请在室外空旷处使用，冷启动需要 1–3 分钟。确认 GPS 天线已连接。

**Q：LoRa 通信距离很短？**  
A：检查 LoRa 天线是否已连接。未接天线时大功率发射可能损坏 SX1276/SX1278 模块。

**Q：应使用哪个 LoRa 频率？**  
A：根据当地无线电法规选择：433 MHz（亚洲）、868 MHz（欧洲）、915 MHz（美洲）。
