---
title: 快速开始
show_source: false
---

# T-Deck Plus 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| SensorLib | 最新 | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| LVGL | **8.4.0** | [GitHub](https://github.com/lvgl/lvgl/tree/v8.4.0) |

> 请勿将库升级到 `T-Deck/lib/` 中版本以上。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Deck.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例行（同时只能有一行有效）
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

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

将 `T-Deck/lib/` 中的所有文件夹复制到 Arduino 库目录。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 4. 上传

点击「上传」。  
若上传失败：按住轨迹球中键（**BOOT**），插入 USB，再点击上传。按 **RST** 退出下载模式。

---

### 外设示例

#### 显示屏（ST7789）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Deck Plus", 80, 110);
}

void loop() {}
```

#### LoRa（SX1262）

```cpp
#include <RadioLib.h>

// T-Deck SX1262: CS=9, IRQ=40, RST=17, BUSY=13
SX1262 radio = new Module(9, 40, 17, 13);

void setup() {
  Serial.begin(115200);
  // 使能 LoRa 模块
  pinMode(10, OUTPUT);
  digitalWrite(10, HIGH);
  delay(100);

  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1262 就绪");
}

void loop() {
  int state = radio.transmit("Hello T-Deck Plus");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### GPS（MIA-M10Q）

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
// GPS UART: RX=21, TX=48, 38400 波特
HardwareSerial gpsSerial(1);

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(38400, SERIAL_8N1, 21, 48);
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

## 注意事项

- T-Deck Plus 的 **Grove 接口**引脚已分配给 GPS 模块，不可用作通用接口。
- 电池供电时，**GPIO10 必须设为 HIGH**。
- LoRa SX1262 与其他外设共享 SPI 总线——通信前确保其他 SPI 设备 CS 脚为高电平。

---

## 常见问题

**Q：一直无法烧录？**  
A：按住轨迹球中键（**BOOT**），插入 USB，再点击上传。

**Q：T-Deck Plus 有触摸屏吗？**  
A：没有，使用轨迹球模块进行导航输入。

**Q：屏幕显示异常？**  
A：T-Deck 于 2024-07-26 更新了 ST7789 初始化序列，请确认库版本与仓库当前版本一致。
