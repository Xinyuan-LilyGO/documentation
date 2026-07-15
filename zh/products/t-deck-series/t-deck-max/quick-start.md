---
title: 快速开始
show_source: false
---

# T-Deck MAX 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| GxEPD2 | 最新 | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| SensorLib | 最新 | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| Adafruit TCA8418 | 最新 | [GitHub](https://github.com/adafruit/Adafruit_TCA8418) |
| ESP32-audioI2S | 最新 | [GitHub](https://github.com/schreibfaul1/ESP32-audioI2S) |

---

## 烧录固件

烧录前先进入下载模式：
1. 按住 **BOOT** 按钮
2. 按一下背面的 **RST** 按钮后松开
3. 松开 **BOOT**

### 使用 LILYGO Spark（推荐）

下载 [LILYGO Spark](https://lilygo.cc/en-us/pages/lilygo-spark)，搜索 `T-Deck Max`，直接烧录固件。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Deck-MAX.git
   ```
3. 打开 `platformio.ini`，选择目标示例
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
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 外设示例

#### 墨水屏显示（GxEPD2）

```cpp
#include <GxEPD2_BW.h>

// T-Deck MAX 墨水屏引脚 — 请查阅原理图确认
GxEPD2_BW<GxEPD2_154_D67, GxEPD2_154_D67::HEIGHT> display(
  GxEPD2_154_D67(/*CS=*/5, /*DC=*/17, /*RST=*/16, /*BUSY=*/4));

void setup() {
  display.init(115200);
  display.setRotation(1);
  display.setFullWindow();
  display.firstPage();
  do {
    display.fillScreen(GxEPD_WHITE);
    display.setTextColor(GxEPD_BLACK);
    display.setTextSize(2);
    display.setCursor(20, 60);
    display.print("T-Deck MAX");
  } while (display.nextPage());
}

void loop() {}
```

#### LoRa（SX1262）

```cpp
#include <RadioLib.h>

// SX1262: CS=9, IRQ=40, RST=17, BUSY=13
SX1262 radio = new Module(9, 40, 17, 13);

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
  int state = radio.transmit("Hello T-Deck MAX");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### GPS（MIA-M10Q）

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;
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

#### 键盘（TCA8418）

```cpp
#include <Adafruit_TCA8418.h>

Adafruit_TCA8418 keypad;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  keypad.begin(TCA8418_DEFAULT_ADDR, &Wire);
  keypad.matrix(3, 10); // T-Deck MAX 按键矩阵行 × 列
  keypad.flush();
}

void loop() {
  if (keypad.available() > 0) {
    int k = keypad.getEvent();
    bool pressed = k & 0x80;
    k &= 0x7F;
    Serial.printf("按键 %d %s\n", k, pressed ? "按下" : "释放");
  }
}
```

---

## 常见问题

**Q：如何进入下载模式？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT。

**Q：扬声器没有声音？**  
A：检查 XL9555 IO12 电平——HIGH = A7682E 音频，LOW = ES8311 音频。将 IO06 设为 HIGH 可打开功放。

**Q：外置天线 LoRa 不工作？**  
A：将 XL9555 IO04 设为 LOW 切换至外置天线（默认为内置天线 HIGH）。

**Q：墨水屏出现残影？**  
A：连续 5 次快速/局部刷新后，执行一次全刷以清除残影。
