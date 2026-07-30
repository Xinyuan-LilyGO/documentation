---
title: 快速开始
show_source: false
---

# T-Display Keyboard 快速开始
## 依赖库
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/TTGO-T-Display.git
   ```
3. 打开 `platformio.ini` 并选择目标示例
4. 点击编译，选择端口后上传
### Arduino IDE

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

---

## 显示屏示例
T-Display Keyboard 内部使用 T-Display 开发板，显示配置与 T-Display 的 ST7789V 屏幕一致
```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_KEYBOARD
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_Keyboard display;

void setup() {
    display.begin(1);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.setCursor(12, 55);
    display.println("T-Display");
    display.setCursor(12, 80);
    display.println("Keyboard");
}

void loop() {}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
**Q：T-Display Keyboard 用的是什么键盘外壳？**  
A：使用紧凑型 QWERTY 物理键盘外壳，内T-Display 开发板和电池仓。