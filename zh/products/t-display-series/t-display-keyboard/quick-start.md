---
title: 快速开始
show_source: false
---

# T-Display Keyboard 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO-T-Display.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

---

### 外设示例

#### 显示屏（TFT_eSPI）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(20, 55);
    tft.println("T-Display Keyboard");
}

void loop() {}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：T-Display Keyboard 用的是什么键盘外壳？**  
A：使用紧凑型 QWERTY 物理键盘外壳，内置 T-Display（ESP32 + 1.14 英寸 ST7789V）开发板和电池仓。
