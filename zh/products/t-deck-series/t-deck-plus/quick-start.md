---
title: 快速开始
show_source: false
---

# T-Deck Plus 快速开始
## 依赖库
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新| [GitHub](https://github.com/jgromes/RadioLib) |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| TinyGPSPlus | 最新| [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| SensorLib | 最新| [GitHub](https://github.com/lewisxhe/SensorsLib) |
| LVGL | **8.4.0** | [GitHub](https://github.com/lvgl/lvgl/tree/v8.4.0) |

> 请勿将库升级将 `T-Deck/lib/` 中版本以上
---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Deck.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例行（同时只能有一行有效）
4. 点击 **Build** 编译，连接 USB，点击 **Upload** 上传

---

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE -> **文件** -> **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** -> **开发板** -> **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

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

#### 显示屏（ST7789
```cpp
#define LILYGO_LGFX_USE_T_DECK_PLUS
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Deck_Plus display;

void setup() {
  display.begin(1);
  display.setTextColor(TFT_WHITE, TFT_BLACK);
  display.setTextSize(2);
  display.drawString("T-Deck Plus", 80, 110);
}

void loop() {}
```

#### LoRa（SX1262）
```cpp
#include <SPI.h>
#include <RadioLib.h>

#define BOARD_POWERON      10
#define RADIO_CS_PIN        9
#define RADIO_DIO1_PIN     45
#define RADIO_RST_PIN      17
#define RADIO_BUSY_PIN     13
#define BOARD_SPI_MOSI     41
#define BOARD_SPI_MISO     38
#define BOARD_SPI_SCK      40
#define BOARD_TFT_CS       12
#define BOARD_SDCARD_CS    39

SX1262 radio = new Module(RADIO_CS_PIN, RADIO_DIO1_PIN, RADIO_RST_PIN, RADIO_BUSY_PIN);

void setup() {
  Serial.begin(115200);

  // 使能外设电源，T-Deck Plus 上 LoRa 模块需要该电源域
  pinMode(BOARD_POWERON, OUTPUT);
  digitalWrite(BOARD_POWERON, HIGH);
  delay(200);

  // LoRa、TFT、SD 卡共用 SPI，总线初始化前先释放其他设备
  pinMode(BOARD_TFT_CS, OUTPUT);    digitalWrite(BOARD_TFT_CS, HIGH);
  pinMode(BOARD_SDCARD_CS, OUTPUT); digitalWrite(BOARD_SDCARD_CS, HIGH);
  pinMode(RADIO_CS_PIN, OUTPUT);    digitalWrite(RADIO_CS_PIN, HIGH);

  SPI.begin(BOARD_SPI_SCK, BOARD_SPI_MISO, BOARD_SPI_MOSI, RADIO_CS_PIN);

  int state = radio.begin(915.0, 125.0, 7, 5, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败 "); Serial.println(state);
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

- T-Deck Plus **Grove 接口**引脚已分配给 GPS 模块，不可用作通用接口。
- 电池供电时，**GPIO10 必须设为 HIGH**。
- LoRa SX1262 与其他外设共用 SPI 总线，通信前请确保其他 SPI 设备 CS 脚为高电平。
---

## 常见问题

**Q：一直无法烧录？**  
A：按住轨迹球中键（**BOOT**），插入 USB，再点击上传。

**Q：T-Deck Plus 有触摸屏吗？**  
A：有。T-Deck Plus 配备 GT911 电容触摸屏，同时支持轨迹球导航。标准 T-Deck 版本没有触摸屏。

**Q：屏幕显示异常？**  
A：T-Deck 2024-07-26 更新了 ST7789 初始化序列，请确认库版本与仓库当前版本一致。

**Q：LoRa 初始化出现 `Radio init failed: -2` 怎么办？**  
A：该错误通常表示程序没有检测到 SX1262。请确认初始化 LoRa 前已将 GPIO10 设为 HIGH，并将其他 SPI 设备的 CS 脚拉高，例如 TFT_CS=12、SD_CS=39。还需要确认代码使用 T-Deck Plus 的 LoRa 引脚：CS=9、DIO1=45、RST=17、BUSY=13。

**Q：如何判断 T-Deck Plus 是否正在充电或已经充满？**  
A：连接 USB 后，可以从设备底部观察蓝色充电指示灯。蓝灯亮起表示正在充电；蓝灯熄灭表示电池已充满。通过这种方式可以确认设备是否能够正常充满。

![T-Deck Plus 底部蓝色充电指示灯位置](/products/t-deck-series/t-deck-plus/index/image/t-deck-plus-charging-led.jpg)
