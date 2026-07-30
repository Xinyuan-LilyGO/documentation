---
title: 快速开始
show_source: false
---

# T-Encoder 快速开始
## 依赖库
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Encoder.git
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

### 外设示例

#### 旋转编码器+ GC9A01 圆形显示例
```cpp
#define LILYGO_LGFX_USE_T_ENCODER
#include <LilyGo_LovyanGFX.h>

#define ENC_A   4
#define ENC_B   5
#define ENC_BTN 0

LilyGo_T_Encoder display;
int encoderPos = 0;
int lastA = HIGH;

void setup() {
    pinMode(ENC_A, INPUT_PULLUP);
    pinMode(ENC_B, INPUT_PULLUP);
    pinMode(ENC_BTN, INPUT_PULLUP);
    display.begin(0);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(3);
    display.setCursor(80, 110);
    display.println("0");
}

void loop() {
    int currentA = digitalRead(ENC_A);
    if (currentA != lastA && currentA == LOW) {
        encoderPos += (digitalRead(ENC_B) == LOW) ? 1 : -1;
        display.fillScreen(TFT_BLACK);
        display.setCursor(80, 110);
        display.println(encoderPos);
    }
    lastA = currentA;
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
**Q：旋转编码器方向反了*  
A：在代码中交ENC_A ENC_B 的引脚定义，或反转旋转方向逻辑