---
title: 快速开始
show_source: false
---

# T-Display S3 Pro 快速开始
## 依赖库
将项目 `lib/` 目录复制到 Arduino 库目录，或安装以下库：
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | 最新| [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | 最新| [GitHub](https://github.com/lewisxhe/SensorLib) |
| TouchLib | 最新| [GitHub](https://github.com/mmMicky/TouchLib) |
| JPEGDEC | 最新| [GitHub](https://github.com/bitbank2/JPEGDEC) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro.git
   ```
3. 打开 `platformio.ini`，只启用一个目标示例。
4. 编译，连接 USB-C 后上传
### Arduino IDE

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> 使用电池供电时，将 **USB CDC On Boot** 设为 **Disabled**。
---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Factory` | 全功能出厂测试|
| `GFX` / `LovyanGFX` | ST7796U 屏幕绘图测试 |
| `Touch_Test` | CST816S 电容触摸测试 |
| `PMU_Example` | SY6970 电源管理 |
| `Camera` | DVP 摄像头流 |
| `USB_HID` | USB HID 键鼠演示 |
| `LTR553_Sensor` | 环境光与接近传感器|
| `LVGL_Demo` | LVGL 8 UI 演示 |

该板使用 2.2 英寸 **ST7796U IPS** 屏幕（222×480）和 **CST816S** 触摸。快速显示测试可使用 `LilyGo_LovyanGFX` 中的 `LilyGo_T_Display_S3_Pro` 配置。
### 外设示例

#### 显示屏（LovyanGFX）
```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3_PRO
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3_Pro display;

void setup() {
    display.begin(0);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.drawString("T-Display S3 Pro", 20, 220, &fonts::Font2);
}

void loop() {}
```

---

## LVGL

将项目 `lib/` 中的 `lv_conf.h` 复制到 Arduino 库目录中`lvgl` 文件夹同级的位置。关键配置：

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    222
#define LV_VER_RES_MAX    480
```

完整的显+ 触摸实现请打开仓库中的 `LVGL_Demo` `Factory` 示例。显示后端可使用 `LilyGo_T_Display_S3_Pro`，触摸部分继续按官方 `pin_config.h` CST816S 引脚处理。
---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，然后重新上传。
**Q：屏幕不亮或背光异常？**  
A：确认背光驱动与板子版本一致。V1.0 使用 PWM，V1.1 使用恒流背光驱动