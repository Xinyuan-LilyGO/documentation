---
title: 快速开始
show_source: false
---

# T-Panel S3 Lite 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| Arduino_GFX | 最新 | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| LVGL | ≥ 8.3 | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Panel.git
   ```
3. 打开 `platformio.ini`，在 `[platformio]` 下取消注释 `T-Panel-S3-Lite` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 T-Panel 仓库，打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

### 外设示例

#### 显示屏（ST7701S — Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>

// ST7701S 通过 XL9535 IO 扩展器经 I2C 初始化
// 完整引脚配置请参阅 T-Panel/src/pin_config.h
extern Arduino_RGB_Display *gfx;

void setup() {
  gfx->begin();
  gfx->fillScreen(BLACK);
  gfx->setTextColor(WHITE);
  gfx->setTextSize(3);
  gfx->setCursor(100, 220);
  gfx->print("T-Panel S3 Lite");
}

void loop() {}
```

#### 按键

```cpp
#define KEY1 48
#define KEY2 47

void setup() {
  Serial.begin(115200);
  pinMode(KEY1, INPUT_PULLUP);
  pinMode(KEY2, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(KEY1) == LOW) {
    Serial.println("KEY1 按下");
    delay(200);
  }
  if (digitalRead(KEY2) == LOW) {
    Serial.println("KEY2 按下");
    delay(200);
  }
}
```

---

## 注意事项

- **显示屏**：3.95 英寸 480×480 IPS（ST7701S），无触摸控制器，纯显示面板
- **IO 扩展器**：XL9535 负责 ST7701S 的 SPI 初始化，需包含 XL9535 I2C 驱动
- **按键**：KEY1 = GPIO48，KEY2 = GPIO47，BOOT = GPIO0
- **microSD**：SPI 接口（CS=GPIO34, SCK=GPIO36, MOSI=GPIO35, MISO=GPIO37）

---

## 常见问题

**Q：与 T-Panel S3 有何区别？**
A：T-Panel S3 Lite 配备 3.95 英寸 480×480 无触摸显示屏，去掉了 ESP32-H2 协处理器和 RS485/CAN 接口，更适合纯显示类 IoT 应用。

**Q：无法烧录？**
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后重试。
