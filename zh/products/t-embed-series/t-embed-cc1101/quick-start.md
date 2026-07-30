---
title: 快速开始
show_source: false
---

# T-Embed CC1101 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| RadioLib | 最新| [GitHub](https://github.com/jgromes/RadioLib) |
| FastLED | 最新| [GitHub](https://github.com/FastLED/FastLED) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Embed-CC1101.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **Build** 编译，连接 USB-C，点击 **Upload** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 基础示例

| 示例 | 说明 |
| :--: | :--- |
| `LilyGo_LovyanGFX_Board_Test` | LilyGo_LovyanGFX 统一板级显示测试，选择 T-Embed CC1101 时使用 `display.begin(3)` |

---

### LovyanGFX 显示测试

T-Embed CC1101 搭载 1.9 英寸 ST7789V TFT（320×170）。安装 `LovyanGFX` `LilyGo_LovyanGFX` 后，直接创建 `LilyGo_T_Embed_CC1101` 对象即可；该板横屏方向需要使用 `display.begin(3)`
```cpp
#define LILYGO_LGFX_USE_T_EMBED_CC1101
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Embed_CC1101 display;

void setup() {
  display.begin(3);
  display.setTextDatum(textdatum_t::middle_center);
  display.fillScreen(TFT_BLACK);
  display.drawRect(0, 0, display.width(), display.height(), TFT_CYAN);
  display.setTextColor(TFT_WHITE, TFT_BLACK);
  display.drawString("T-Embed CC1101", display.width() / 2, 54, &fonts::Font4);
  display.setTextColor(TFT_YELLOW, TFT_BLACK);
  display.drawString("LovyanGFX", display.width() / 2, 102, &fonts::Font2);
}

void loop() {}
```

---

### 外设示例

#### 显示屏（ST7789V）

```cpp
#define LILYGO_LGFX_USE_T_EMBED_CC1101
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Embed_CC1101 display;

void setup() {
  display.begin(3);     // 横屏，方向相rotation=1 旋转 180 
  display.fillScreen(TFT_BLACK);
  display.setTextColor(TFT_WHITE, TFT_BLACK);
  display.drawString("T-Embed CC1101", 40, 75, &fonts::Font2);
}

void loop() {}
```

#### CC1101 sub-GHz 无线模块

```cpp
#include <RadioLib.h>

// CC1101: CS=5, GDO0=4, RST=-1, GDO2=36
CC1101 radio = new Module(5, 4, RADIOLIB_NC, 36);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(433.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("CC1101 初始化失败 "); Serial.println(state);
    while (true);
  }
  Serial.println("CC1101 就绪");
}

void loop() {
  int state = radio.transmit("Hello CC1101");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功);
  delay(2000);
}
```

#### RGB LED 灯条（WS2812）

```cpp
#include <FastLED.h>

#define LED_PIN  38
#define NUM_LEDS 8

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB::Blue;
  }
  FastLED.show();
  delay(500);
  FastLED.clear();
  FastLED.show();
  delay(500);
}
```

---

## 常见问题

**Q：CC1101 工作在哪些频率？**  
A：CC1101 支持 315/433/868/915 MHz / sub-GHz 频段，请根据当地无线电法规在代码中配置频率

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
