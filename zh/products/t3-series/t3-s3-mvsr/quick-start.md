---
title: 快速开始
show_source: false
---

# T3-S3 MVSR 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| ESP-IDF I2S | 内置 | ESP32 Arduino Core |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard.git
   ```
3. 打开项目，在 `platformio.ini` 中选择对应环境
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
2. 克隆 T3-S3-MVSRBoard 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

### 外设示例

#### MAX98357A I2S 扬声器

```cpp
#include <driver/i2s.h>

// I2S 引脚：BCLK=42，LRCK=41，DOUT=40，SD=39
#define I2S_BCLK  42
#define I2S_LRCK  41
#define I2S_DOUT  40
#define I2S_SD    39

void setup() {
  // 使能功放
  pinMode(I2S_SD, OUTPUT);
  digitalWrite(I2S_SD, HIGH);

  i2s_config_t cfg = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX),
    .sample_rate = 44100,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_RIGHT_LEFT,
    .communication_format = I2S_COMM_FORMAT_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 8,
    .dma_buf_len = 64,
  };
  i2s_pin_config_t pins = {
    .bck_io_num = I2S_BCLK,
    .ws_io_num  = I2S_LRCK,
    .data_out_num = I2S_DOUT,
    .data_in_num = I2S_PIN_NO_CHANGE,
  };
  i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
  i2s_set_pin(I2S_NUM_0, &pins);
}

void loop() {}
```

#### MSM261S I2S 麦克风（V1.0）

```cpp
#include <driver/i2s.h>

// 麦克风 I2S 引脚（V1.0）：BCLK=46，WS=42，DIN=45
void setup() {
  i2s_config_t cfg = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = 16000,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_I2S,
    .intr_alloc_flags = 0,
    .dma_buf_count = 8,
    .dma_buf_len = 64,
  };
  i2s_pin_config_t pins = {
    .bck_io_num = 46,
    .ws_io_num  = 42,
    .data_out_num = I2S_PIN_NO_CHANGE,
    .data_in_num = 45,
  };
  i2s_driver_install(I2S_NUM_1, &cfg, 0, NULL);
  i2s_set_pin(I2S_NUM_1, &pins);
}

void loop() {
  int16_t buf[256];
  size_t bytesRead;
  i2s_read(I2S_NUM_1, buf, sizeof(buf), &bytesRead, portMAX_DELAY);
  Serial.printf("读取 %d 字节\n", bytesRead);
}
```

---

## 注意事项

- **扩展底板**：MVSR 是堆叠在 T3-S3 V1.2 主板上的扩展板，非独立板卡
- **扬声器**：MAX98357A I2S 功放（9 dB 增益），使用 ESP32 I2S 外设驱动音频输出
- **麦克风**：V1.0 使用 MSM261S4030H0R（I2S），V1.1 改为 MP34DT05-A（PDM）——选驱动前确认硬件版本
- **RTC**：PCF85063ATL（I2C），可用于带时间戳的数据记录
- **深度睡眠**：深睡电流仅 2.77 µA，适合电池供电场景

---

## 常见问题

**Q：无音频输出？**
A：确认 I2S 引脚与 MVSR 原理图一致，并将 MAX98357A 的 SD 引脚拉高（不可悬空）以使能功放。

**Q：麦克风无声？**
A：检查硬件版本——V1.0 使用 I2S 麦克风驱动，V1.1 使用 PDM 麦克风驱动，使用错误驱动将无声音输出。
