---
title: 快速开始
show_source: false
---

# T-Circle 快速开始
## 依赖库
将项目 `libraries/` 目录复制到 Arduino 库目录，或通过库管理器安装：
| 库名 | 来源 |
| :--: | :--: |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| CST816D（触摸） | [GitHub](https://github.com/Xinyuan-LilyGO/T-Circle-S3) |

---

## Arduino

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE -> **文件** -> **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** -> **开发板** -> **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 安装依赖库
将项`libraries/` 目录中的所有文件夹复制到 Arduino 库目录（例如 `C:\Users\YourName\Documents\Arduino\libraries`）
#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | 默认 |
| PSRAM | **Enabled** |

#### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。 
若上传失败，按住 **BOOT** 再按一下 **RST**，先松开 RST，保持按住 BOOT 后再开始上传
---

### PlatformIO

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Circle.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例环境。
4. 点击 **Build** 编译，连接开发板，点击 **Upload** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Basic_Display` | 在圆形 LCD 上绘制文字和图形 |
| `Touch_Test` | 读取 CST816D 电容触摸事件 |

---

### 外设示例

#### Hello World（LovyanGFX
```cpp
#define LILYGO_LGFX_USE_T_CIRCLE
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle display;

void setup() {
    display.begin(0);
    display.setTextColor(TFT_WHITE, TFT_BLACK);
    display.setTextSize(2);
    display.setCursor(20, 70);
    display.println("T-Circle!");
}

void loop() {}
```

#### 在圆形屏幕上绘图

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle display;

void setup() {
    display.begin(0);

    // 填充背景圆（显示例160×160    display.fillCircle(80, 80, 60, TFT_BLUE);

    // 白色边框圆环
    display.drawCircle(80, 80, 75, TFT_WHITE);

    // 在圆内绘制文字    display.setTextColor(TFT_WHITE);
    display.setTextSize(1);
    display.setCursor(55, 76);
    display.print("你好);
}

void loop() {}
```

#### 读取触摸事件（CST816D，I2C）
```cpp
#include <Wire.h>

#define TOUCH_SDA   5
#define TOUCH_SCL   6
#define TOUCH_ADDR  0x15

void setup() {
    Serial.begin(115200);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x02);  // 手势寄存器    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint8_t xH = Wire.read() & 0x0F;
        uint8_t xL = Wire.read();
        uint8_t yH = Wire.read() & 0x0F;
        uint8_t yL = Wire.read();
        int x = (xH << 8) | xL;
        int y = (yH << 8) | yL;
        if (x || y) {
            Serial.printf("手势: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

> 具体 GPIO 引脚号（SPI CS/DC/RST/BL、I2C SDA/SCL）请参考项目 `pin_config.h`
#### 触摸唤醒深度睡眠

```cpp
#include <esp_sleep.h>

// 触摸中断引脚 参考 pin_config.h
#define TOUCH_INT_PIN  7

void setup() {
    Serial.begin(115200);
    Serial.println("唤醒，运行中...");

    // ... 执行任务 ...

    Serial.println("进入深度睡眠");
    esp_sleep_enable_ext0_wakeup((gpio_num_t)TOUCH_INT_PIN, LOW);
    esp_deep_sleep_start();
}

void loop() {}
```

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT**，再按一下 **RST**，先松开 RST，保持按住 BOOT 后开始烧录
**Q：T-Circle T-Circle S3 有什么区别？**  
A：T-Circle 使用原版 ESP32；T-Circle S3 使用更新的 ESP32-S3，具备 USB-OTG、更多 GPIO 和更强性能。两者使用相同的 0.75 英寸圆形显示屏
**Q：如何让圆形屏幕显示效果更好？**  
A：在(80, 80) 为圆心、半160 像素的圆形区域内绘制内容。物理镜头会裁切圆外区域，但控制器仍会渲染，建议`display.fillCircle()` 作背景，避免露出方形边角