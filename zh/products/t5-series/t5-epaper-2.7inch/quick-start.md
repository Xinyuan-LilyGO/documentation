---
title: 快速开始
show_source: false
---

# T5 E-Paper 2.7" 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| GxEPD2 | 最新 | [GitHub](https://github.com/ZinggJM/GxEPD2) |
| Adafruit GFX | 最新 | Arduino 库管理器 |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series.git
   ```
3. 打开项目，在 `platformio.ini` 中选择 `T5_V27` 环境
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | **Enabled** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆 LilyGo-T5-Epaper-Series 仓库并打开示例工程
3. 选择 `T5_V27` 对应的开发板设置，点击「上传」

---

### 外设示例

#### 墨水屏显示（GxEPD2）

```cpp
#include <GxEPD2_BW.h>

// 2.7 英寸 264×176 — 请按实际引脚调整
GxEPD2_BW<GxEPD2_270, GxEPD2_270::HEIGHT> display(GxEPD2_270(/*CS*/5, /*DC*/17, /*RST*/16, /*BUSY*/4));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setTextColor(GxEPD_BLACK);
        display.setTextSize(2);
        display.setCursor(20, 80);
        display.print("T5 E-Paper 2.7\"");
    } while (display.nextPage());
}

void loop() {}
```

#### 音频（MAX98357A — I2S）

```cpp
#include <driver/i2s.h>

#define I2S_BCLK  26
#define I2S_LRCK  25
#define I2S_DOUT  19
#define I2S_SD    22   // MAX98357A SD 引脚 — 拉高使能功放

void setup() {
    pinMode(I2S_SD, OUTPUT);
    digitalWrite(I2S_SD, HIGH);

    i2s_config_t cfg = {
        .mode                 = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
        .sample_rate          = 44100,
        .bits_per_sample      = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format       = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags     = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count        = 8,
        .dma_buf_len          = 64,
    };
    i2s_pin_config_t pins = {
        .bck_io_num   = I2S_BCLK,
        .ws_io_num    = I2S_LRCK,
        .data_out_num = I2S_DOUT,
        .data_in_num  = I2S_PIN_NO_CHANGE,
    };
    i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
    i2s_set_pin(I2S_NUM_0, &pins);
}

void loop() {}
```

---

## 注意事项

- **显示屏**：2.7 英寸微雪电子墨水屏，264×176 像素，黑白，SPI 接口；全刷约 2–4 秒
- **PSRAM**：8 MB PSRAM，需在开发板设置中启用
- **音频**：MAX98357A I2S 功放 + 扬声器接口，支持音频播放
- **USB**：CP2102 USB 转串口，若端口未识别请安装 CP210x 驱动
- **深度睡眠**：使用 `esp_deep_sleep_start()` 在刷新间隔期间降低功耗

---

## 常见问题

**Q：显示屏不刷新？**
A：2.7 英寸屏上电后需先进行全刷，之后才能使用局刷。先调用 `display.display(false)` 进行全刷。

**Q：无音频输出？**
A：确认 MAX98357A 的 SD 引脚已拉高以使能功放，并检查 I2S 引脚定义是否与原理图一致。
