---
title: 快速开始
show_source: false
---

# T-Echo 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| Adafruit_EPD | 最新 | [GitHub](https://github.com/adafruit/Adafruit_EPD) |
| TinyGPSPlus | 最新 | [GitHub](https://github.com/mikalhart/TinyGPSPlus) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Echo.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### Arduino IDE

#### 1. 安装 nRF52 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://adafruit.github.io/arduino-board-index/package_adafruit_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `nRF52`，安装 **Adafruit nRF52 by Adafruit**

#### 2. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **Adafruit Feather nRF52840 Express** |
| Upload Speed | 115200 |

#### 3. 上传

连接 USB，点击「上传」。  
若上传失败：**双击复位按钮**进入 Bootloader 模式（LED 缓慢闪烁，电脑会出现一个可移动磁盘）。

---

### 外设示例

#### 墨水屏（Adafruit_EPD）

```cpp
#include <Adafruit_EPD.h>
#include <SPI.h>

// 引脚请根据你的 T-Echo 硬件版本调整
#define EPD_CS     33
#define EPD_DC     10
#define EPD_RESET  2
#define EPD_BUSY   3

Adafruit_IL0373 epd(212, 104, EPD_DC, EPD_RESET, EPD_CS, -1, EPD_BUSY);

void setup() {
    epd.begin();
    epd.clearBuffer();
    epd.setCursor(10, 10);
    epd.setTextColor(EPD_BLACK);
    epd.setTextSize(2);
    epd.print("T-Echo");
    epd.display();
}

void loop() {}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

// 引脚定义 — 请对照 T-Echo 原理图确认
#define LORA_CS    24
#define LORA_IRQ   25
#define LORA_RST   26
#define LORA_BUSY  17

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa 初始化失败: %d\n", state);
    }
}

void loop() {
    int state = radio.transmit("Hello T-Echo");
    Serial.printf("TX 状态: %d\n", state);
    delay(2000);
}
```

#### GPS（L76K — TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;

void setup() {
    Serial.begin(115200);
    Serial1.begin(9600); // GPS 使用 nRF52840 Serial1
}

void loop() {
    while (Serial1.available()) gps.encode(Serial1.read());
    if (gps.location.isUpdated()) {
        Serial.printf("纬度: %.6f  经度: %.6f\n",
            gps.location.lat(), gps.location.lng());
    }
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：**双击复位按钮**进入 Bootloader 模式，LED 缓慢闪烁后再上传。

**Q：墨水屏不更新内容？**  
A：墨水屏需要完整的刷新周期。多次局部刷新后请执行一次全刷以清除残影。

**Q：T-Echo 是 nRF52，可以用 ESP-IDF 开发吗？**  
A：不可以。T-Echo 使用 Nordic nRF52840，需要 Adafruit nRF52 Arduino 核心或 Zephyr RTOS。
