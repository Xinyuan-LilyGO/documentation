---
title: 快速开始
show_source: false
---

# T-Keyboard S3 Pro 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| T-Keyboard-S3-Pro-Library | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置（ESP32-S3 主机）

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆两个仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **主机 + 从机**：主机通过磁吸接口连接从机，最多支持 2×3 共 6 个从机
- **RGB LED**：WS2812C；多设备运行时将亮度限制在 10 以内，避免电源过载
- **4× TFT 显示屏**：每个 0.85 英寸 GC9107，128×128 像素（SPI）
- **STM32 协处理器**：负责按键扫描；如需自定义固件，通过 STM32CubeMX + ARM Keil μVision5 经 SWD 烧录
- **PSRAM**：OPI 8 MB，Arduino IDE 中选择 **OPI PSRAM**

---

### 外设示例

#### 按键读取（T-Keyboard-S3-Pro-Library）

```cpp
#include <T_Keyboard_S3_Pro.h>

TKeyboardS3Pro keyboard;

void setup() {
  Serial.begin(115200);
  keyboard.begin();
}

void loop() {
  keyboard.update();
  if (keyboard.isPressed()) {
    uint8_t key = keyboard.getKey();
    Serial.printf("按键按下: %d\n", key);
  }
  delay(10);
}
```

#### TFT 显示屏（GC9107 — TFT_eSPI）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE);
  tft.setTextSize(1);
  tft.drawString("T-Keyboard", 20, 55);
}

void loop() {}
```

#### RGB LED（WS2812C — FastLED）

```cpp
#include <FastLED.h>

// WS2812C 引脚 — 请查阅 T-Keyboard-S3-Pro 原理图
#define LED_PIN  38
#define NUM_LEDS 4

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812C, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(10); // 多从机场景下亮度保持低值
}

void loop() {
  for (int i = 0; i < NUM_LEDS; i++) leds[i] = CRGB::Cyan;
  FastLED.show();
  delay(500);
  FastLED.clear();
  FastLED.show();
  delay(500);
}
```

---

## 常见问题

**Q：从机设备未被检测到？**
A：确认磁吸连接器已完全对接。先给主机上电，再连接从机。

**Q：LED 过亮或闪烁？**
A：多设备配置下将 WS2812C 亮度限制在 10 以内，以控制在功耗预算之内。
