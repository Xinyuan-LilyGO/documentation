---
title: 快速开始
show_source: false
---

# T3-S3 E-Paper 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| GxEPD2 | 最新 | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| U8g2 | 最新 | Arduino 库管理器 |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series.git
   ```
3. 打开项目，在 `platformio.ini` 中选择 `T3-S3-E-Paper` 环境
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
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **OPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 Lilygo-LoRa-Epaper-series 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

### 外设示例

#### 墨水屏显示（GxEPD2）

```cpp
#include <GxEPD2_BW.h>

// 2.13 英寸 DEPG0213BN 250×122 — 请查阅 utilities.h 确认引脚
#define EPD_CS    10
#define EPD_DC     9
#define EPD_RST    8
#define EPD_BUSY   7

GxEPD2_BW<GxEPD2_213_B74, GxEPD2_213_B74::HEIGHT> display(
    GxEPD2_213_B74(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.setCursor(10, 50);
        display.print("T3-S3 E-Paper");
    } while (display.nextPage());
}

void loop() {}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

// 请查阅 utilities.h 确认实际引脚
#define LORA_CS    14
#define LORA_IRQ   13
#define LORA_RST   12
#define LORA_BUSY  15

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) Serial.printf("LoRa 初始化失败: %d\n", state);
}

void loop() {
    radio.transmit("Hello T3-S3");
    delay(3000);
}
```

#### SD 卡（SPI）

```cpp
#include <SD.h>
#include <SPI.h>

#define SD_CS  2

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SD_CS)) {
        Serial.println("SD 卡初始化失败");
        return;
    }
    Serial.printf("SD 卡容量: %llu MB\n", SD.cardSize() / (1024 * 1024));
}

void loop() {}
```

---

## 注意事项

- **电子墨水屏**：2.13 英寸 DEPG0213BN（250×122 像素，黑白，SPI），全刷需 2–3 秒，局刷约 0.3–0.5 秒；断电后图像保持不变
- **LoRa 型号**：SX1280（2.4 GHz）或 SX1276 / SX1262（868/915 MHz），取决于订购版本——选择环境前务必确认
- **PSRAM**：OPI PSRAM，Arduino IDE 中选择 **OPI PSRAM**

---

本板使用 GxEPD2 驱动的电子墨水屏（DEPG0213BN）。文档中不再推荐将 LVGL 直接用于此类墨水屏——请使用仓库中的 `GxEPD2` 示例来处理显示与局刷。

注意事项：
- 使用 Lilygo-LoRa-Epaper-series 仓库中的示例初始化并驱动面板（例如 `EPD_Display`、`Factory_Test` 等）。
- 电子墨水屏在上电后需要一次全刷（`display.display(false)`），随后局刷才会稳定工作。
- 若确需 GUI，请使用项目提供的出厂示例或基于 `GxEPD2` 实现最小绘制例程，而非直接移植完整 LVGL 到受限的 e-paper 面板上。

---

## 常见问题

**Q：显示乱码或不刷新？**
A：电子墨水屏上电后需先进行一次全刷，之后才能使用局刷。先调用 `display.display(false)`（全刷），再使用局刷功能。

**Q：无法上传？**
A：按住 BOOT，按一下 RST 后松开，再松开 BOOT，进入下载模式后重试。
