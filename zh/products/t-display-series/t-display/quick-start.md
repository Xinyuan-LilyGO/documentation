---
title: 快速开始
show_source: false
---

# T-Display 快速开始
## 依赖库
在编译示例前，请通过 Arduino IDE 库管理器安装以下库，或手动放入 Arduino `libraries` 目录
| 库名 | 来源 |
| :--: | :--: |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |

---

## Arduino

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE -> **文件** -> **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```text
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** -> **开发板** -> **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Upload Speed | **921600** |

> 部分 T-Display 16 MB Flash 版本，请按实际硬件选择 **16 MB (128Mb)**
#### 3. 上传

通过 USB-C 连接开发板，打开示例，选择端口后点击「上传」。如果端口反复断开，按**Button 1 / GPIO0**，按下并释放 **RST**，再释放 GPIO0 后重新上传。
---

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO-T-Display.git
   ```
3. VS Code 中打开工程并选择需要编译的示例

---

## 显示例
T-Display 使用 **ST7789V** 屏幕。`LilyGo_LovyanGFX` 已封装显示引脚，不需要再修改单独的显示驱动配置文件
| ST7789V | MOSI | SCK | CS | DC | RST | BL |
| :-----: | :--: | :-: | :-: | :-: | :--: | :-: |
| ESP32 | GPIO19 | GPIO18 | GPIO5 | GPIO16 | GPIO23 | GPIO4 |

### Hello World

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.drawString("Hello T-Display!", 20, 50);
}

void loop() {}
```

### 绘制图形

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display display;

void setup() {
    display.begin(1);
    display.fillCircle(60, 67, 40, TFT_BLUE);
    display.drawRect(130, 27, 80, 80, TFT_GREEN);
    display.drawLine(0, 0, 239, 134, TFT_RED);
}

void loop() {}
```

### Sprite

使用 `LGFX_Sprite` 做缓冲绘制，可以减少刷新闪烁
```cpp
#define LILYGO_LGFX_USE_T_DISPLAY
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display display;
LGFX_Sprite sprite(&display);
int counter = 0;

void setup() {
    display.begin(1);
    sprite.createSprite(160, 40);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.setTextColor(TFT_YELLOW, TFT_BLACK);
    sprite.setTextSize(2);
    sprite.drawString("Count: " + String(counter++), 4, 10);
    sprite.pushSprite(40, 47);
    delay(200);
}
```

### 读取按键

```cpp
#define BTN1 0
#define BTN2 35

void setup() {
    Serial.begin(115200);
    pinMode(BTN1, INPUT_PULLUP);
    pinMode(BTN2, INPUT_PULLUP);
}

void loop() {
    if (digitalRead(BTN1) == LOW) {
        Serial.println("Button 1 pressed");
        delay(200);
    }
    if (digitalRead(BTN2) == LOW) {
        Serial.println("Button 2 pressed");
        delay(200);
    }
}
```

---

## 常见问题

**屏幕不亮**
使用 `LilyGo_T_Display` `display.begin()`，该函数会自动初始化 GPIO4 背光
**一直无法烧*
按住 GPIO0，按一RST 后松开，再松开 GPIO0，然后重新上传。