---
title: 快速开始
show_source: false
---

# T-Keyboard S3 Pro 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| T-Keyboard-S3-Pro-Library | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library) |
| LovyanGFX | 最新 | 随 T-Keyboard-S3-Pro-Library 自动安装 |

> **推荐：** 使用 [T-Keyboard-S3-Pro-Library](library) 统一驱动显示屏、按键、RGB 灯和编码器。该库会把四块 GC9107 屏幕封装成 LovyanGFX 设备（`display1`..`display4`），示例代码不需要再引入单独的显示驱动，也不需要手动配置屏幕引脚。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置（ESP32-S3 主机）

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
2. 通过 Arduino 库管理器安装 **T-Keyboard-S3-Pro-Library**，或将库文件夹复制到 Arduino 的 `libraries/` 目录
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **主机 + 从机**：主机通过磁吸接口连接从机，最多支持 2×3 共 6 个从机
- **RGB LED**：WS2812C；多设备运行时将亮度限制在 10 以内，避免电源过载
- **4× TFT 显示屏**：每个 0.85 英寸 GC9107，128×128 像素（SPI），库中作为 LovyanGFX 设备使用
- **STM32 协处理器**：负责按键扫描；如需自定义固件，通过 STM32CubeMX + ARM Keil μVision5 经 SWD 烧录
- **PSRAM**：OPI 8 MB，Arduino IDE 中选择 **OPI PSRAM**

---

### 外设示例

#### 按键读取（T-Keyboard-S3-Pro-Library）

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
  Serial.begin(115200);
  TKeyboardS3Pro.begin();
}

void loop() {
  TKeyboardS3Pro.update();

  for (uint8_t i = 0; i < TKeyboardS3ProClass::KEY_COUNT; i++) {
    if (TKeyboardS3Pro.key(i).wasPressed()) {
      Serial.printf("KEY%u pressed\n", i + 1);
    }
  }
}
```

#### TFT 显示屏（GC9107 — LovyanGFX）

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
  TKeyboardS3Pro.begin();
  TKeyboardS3Pro.setBrightness(200);
  TKeyboardS3Pro.fillAllScreens(TFT_BLACK);

  for (uint8_t i = 0; i < TKeyboardS3ProClass::HOST_SCREEN_COUNT; i++) {
    Display& panel = TKeyboardS3Pro.displayAt(i);
    panel.fillScreen(TFT_NAVY);
    panel.setTextColor(TFT_WHITE);
    panel.setTextDatum(middle_center);
    panel.drawString(String("Panel ") + (i + 1), panel.width() / 2, panel.height() / 2);
  }
}

void loop() {
  TKeyboardS3Pro.update();
}
```

#### RGB LED（T-Keyboard-S3-Pro-Library）

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
  TKeyboardS3Pro.begin();
}

void loop() {
  TKeyboardS3Pro.update();

  static uint16_t hue = 0;
  TKeyboardS3Pro.setLeds(hue, 80, 10);
  hue = (hue + 2) % 360;
  delay(30);
}
```

---

## 常见问题

**Q：从机设备未被检测到？**
A：确认磁吸连接器已完全对接。先给主机上电，再连接从机。

**Q：LED 过亮或闪烁？**
A：多设备配置下将 WS2812C 亮度限制在 10 以内，以控制在功耗预算之内。
