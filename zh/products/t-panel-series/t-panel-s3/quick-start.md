---
title: 快速开始
show_source: false
---

# T-Panel S3 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LVGL | ≥ 8.3 | [GitHub](https://github.com/lvgl/lvgl) |
| Arduino_GFX | 最新 | [GitHub](https://github.com/moononournation/Arduino_GFX) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Panel.git
   ```
3. 打开 `platformio.ini`，在 `[platformio]` 下取消注释 `T-Panel-S3` 环境行
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

#### 显示屏（4.3 英寸 RGB IPS — Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>

// RGB 面板数据引脚和时序定义在 T-Panel 板级配置中
// 具体引脚请参阅 T-Panel/src/pin_config.h
extern Arduino_RGB_Display *gfx;

void setup() {
  gfx->begin();
  gfx->fillScreen(BLACK);
  gfx->setTextColor(WHITE);
  gfx->setTextSize(3);
  gfx->setCursor(250, 220);
  gfx->print("T-Panel S3");
}

void loop() {}
```

#### 触摸（GT911）

```cpp
#include <Wire.h>

// GT911 I2C: SDA=19, SCL=20, INT=18, RST=38
#define GT911_ADDR 0x5D
#define TOUCH_SDA  19
#define TOUCH_SCL  20
#define TOUCH_INT  18
#define TOUCH_RST  38

void setup() {
  Serial.begin(115200);
  Wire.begin(TOUCH_SDA, TOUCH_SCL);
  pinMode(TOUCH_RST, OUTPUT);
  digitalWrite(TOUCH_RST, LOW); delay(10);
  digitalWrite(TOUCH_RST, HIGH); delay(50);
  pinMode(TOUCH_INT, INPUT);
}

void loop() {
  if (digitalRead(TOUCH_INT) == LOW) {
    Wire.beginTransmission(GT911_ADDR);
    Wire.write(0x81); Wire.write(0x4E); // 状态寄存器
    Wire.endTransmission(false);
    Wire.requestFrom(GT911_ADDR, 1);
    if (Wire.available()) {
      uint8_t status = Wire.read();
      if (status & 0x80) {
        Serial.print("检测到触摸，触点数: ");
        Serial.println(status & 0x0F);
      }
    }
  }
  delay(10);
}
```

---

## 注意事项

- **显示屏**：4.3 英寸 800×480 IPS，带电容触摸（GT911），使用 RGB 接口
- **microSD**：SPI 接口，直接使用 `SD` 库
- **LVGL**：在 `lv_conf.h` 中设置 `LV_HOR_RES_MAX = 800`，`LV_VER_RES_MAX = 480`

---

## 常见问题

**Q：无法烧录？**
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后重试。

**Q：显示花屏或无显示？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**，并在 `platformio.ini` 或 `config.h` 中选择了正确的开发板变体（T-Panel-S3）。
