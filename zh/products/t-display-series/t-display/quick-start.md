---
title: 快速开始
show_source: false
---

# T-Display 快速开始

## 依赖库

在编译任何示例之前，请通过 Arduino IDE 库管理器安装以下库，或手动将它们放入 `libraries` 文件夹：

| 库名 | 来源 |
| :--: | :--: |
| TFT_eSPI | [GitHub](https://github.com/Bodmer/TFT_eSPI) |

---

## Arduino

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 开发板设置

| 设置项 | 值 |
| :----: | :----: |
| 开发板 | **ESP32 Dev Module** |
| 端口 | 你的 COM 口 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Upload Speed | **921600** |

> **提示：** 部分 T-Display 有 16MB Flash 变体，如果你的板子是 16MB 版本，请选择 **16MB (128Mb)**。

#### 3. 上传

1. 通过 USB-C 连接开发板
2. 打开示例程序（从 [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display) 仓库下载）
3. 点击「上传」

如果端口一直断开，手动进入下载模式：
1. 按住 **按键 1**（GPIO0 BOOT）
2. 按下并释放 **RST** 按钮
3. 释放 **按键 1**
4. 在 IDE 中点击「上传」

---

### PlatformIO

#### 1. 环境配置

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO-T-Display.git
   ```
3. 在 VS Code 中打开克隆的文件夹

#### 2. 选择示例

打开 `platformio.ini`，取消注释你想运行的示例对应的 `src_dir` 行。

#### 3. 编译与上传

- 点击 PlatformIO 工具栏中的 **✓**（编译）
- 通过 USB-C 连接开发板
- 点击 **→**（上传）

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `TFT_eSPI` | TFT_eSPI 库演示，各种图形绘制示例 |
| `Wifi Scan` | Wi-Fi 扫描示例 |
| `Bluetooth` | 蓝牙示例 |

完整示例见仓库 [TTGO-T-Display](https://github.com/Xinyuan-LilyGO/TTGO-T-Display)。

---

## TFT_eSPI 配置

T-Display 使用的是 **ST7789V** 驱动，引脚定义如下：

| ST7789V | MOSI   | SCK    | CS     | DC     | RST    | BL     |
| :-----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32   | GPIO19 | GPIO18 | GPIO5  | GPIO16 | GPIO23 | GPIO4  |

TFT_eSPI 库已包含 T-Display 的预设配置。如需手动配置：

1. 打开 Arduino 库目录中的 `TFT_eSPI/User_Setup_Select.h`
2. 注释掉默认的 `#include <User_Setup.h>`
3. 取消注释：
   ```cpp
   #include <User_Setups/Setup25_TTGO_T_Display.h>
   ```

---

### 外设示例

#### Hello World

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.setRotation(1);           // 横屏（240×135）
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.drawString("Hello T-Display!", 20, 50);
}

void loop() {}
```

#### 背光控制

背光由 GPIO4 驱动，拉高即可点亮：

```cpp
#define TFT_BL 4

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH); // 背光开
}
```

#### 绘制图形

```cpp
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);

    tft.fillCircle(60, 67, 40, TFT_BLUE);          // 实心圆
    tft.drawRect(130, 27, 80, 80, TFT_GREEN);       // 空心矩形
    tft.drawLine(0, 0, 239, 134, TFT_RED);          // 对角线
}

void loop() {}
```

#### 读取按钮

按钮 1 → GPIO0，按钮 2 → GPIO35：

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

#### Sprite（无闪烁刷新）

使用 `TFT_eSprite` 缓冲区绘图后一次性推送到屏幕，避免闪烁：

```cpp
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft);

int counter = 0;

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
    sprite.createSprite(160, 40);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.setTextColor(TFT_YELLOW);
    sprite.setTextSize(2);
    sprite.drawString("Count: " + String(counter++), 4, 10);
    sprite.pushSprite(40, 47);  // 推送到屏幕坐标 (x=40, y=47)
    delay(200);
}
```

---

## 常见问题

**上传时端口一直断开**
手动进入下载模式（按住 GPIO0 按键 → 按 RST → 释放 GPIO0），然后上传。

**屏幕不亮**
检查背光引脚 GPIO4 是否设置为 HIGH：
```cpp
pinMode(4, OUTPUT);
digitalWrite(4, HIGH);
```

**TFT_eSPI 编译错误**
确认已选择正确的 `Setup25_TTGO_T_Display.h` 配置文件。

---

## ESP-IDF

T-Display 目前主要支持 Arduino 和 PlatformIO 开发。如需 ESP-IDF 开发，请参考 [ESP-IDF 官方文档](https://docs.espressif.com/projects/esp-idf/)。
