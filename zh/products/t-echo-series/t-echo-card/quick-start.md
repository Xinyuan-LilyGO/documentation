---
title: 快速开始
show_source: false
---

# T-Echo Card 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| Adafruit_EPD | 最新 | [GitHub](https://github.com/adafruit/Adafruit_EPD) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Echo.git
   ```
3. 打开 `platformio.ini`，选择 `T-Echo-Card` 环境
4. 点击 **✓** 编译，点击 **→** 上传

---

### 外设示例

#### 墨水屏（Adafruit_EPD）

```cpp
#include <Adafruit_EPD.h>
#include <SPI.h>

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
    epd.print("T-Echo Card");
    epd.display();
}

void loop() {}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

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
    int state = radio.transmit("Hello T-Echo Card");
    Serial.printf("TX 状态: %d\n", state);
    delay(2000);
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：**双击复位按钮**进入 Bootloader 模式（LED 缓慢闪烁），然后再上传。

**Q：T-Echo Card 是什么外形规格？**  
A：T-Echo Card 采用信用卡大小的外形，集成 LoRa、nRF52840 和墨水屏，适用于超紧凑的可穿戴和随身携带场景。
