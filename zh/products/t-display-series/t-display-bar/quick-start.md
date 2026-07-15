---
title: 快速开始
show_source: false
---

# T-Display Bar 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-Bar.git
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
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 外设示例

#### 显示屏（ST7789）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Display Bar", 5, 130);
}

void loop() {}
```

#### 触摸（CST816）

```cpp
#include <Wire.h>

// CST816 I2C: SDA=2, SCL=3, IRQ=21, RST=1
#define CST816_ADDR 0x15
#define TOUCH_SDA   2
#define TOUCH_SCL   3
#define TOUCH_IRQ   21
#define TOUCH_RST   1

void setup() {
  Serial.begin(115200);
  Wire.begin(TOUCH_SDA, TOUCH_SCL);
  pinMode(TOUCH_RST, OUTPUT);
  digitalWrite(TOUCH_RST, LOW); delay(10);
  digitalWrite(TOUCH_RST, HIGH); delay(50);
  pinMode(TOUCH_IRQ, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(TOUCH_IRQ) == LOW) {
    Wire.beginTransmission(CST816_ADDR);
    Wire.write(0x02);
    Wire.endTransmission(false);
    Wire.requestFrom(CST816_ADDR, 6);
    if (Wire.available() >= 6) {
      Wire.read();
      uint8_t num = Wire.read();
      uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
      uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
      Serial.printf("触摸: x=%d y=%d 手指数=%d\n", x, y, num);
    }
  }
  delay(10);
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
