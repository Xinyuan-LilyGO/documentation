---
title: 快速开始
show_source: false
---

# T-Camera Plus S3 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| esp32-camera | 最新 | [GitHub](https://github.com/espressif/esp32-camera) |
| U8g2 | 最新 | [GitHub](https://github.com/olikraus/u8g2) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Camera-Plus-S3.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 外设示例

#### 摄像头（OV2640）

```cpp
#include "esp_camera.h"

#define PWDN_GPIO_NUM  -1
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM  15
#define SIOD_GPIO_NUM   4
#define SIOC_GPIO_NUM   5
#define Y9_GPIO_NUM    16
#define Y8_GPIO_NUM    17
#define Y7_GPIO_NUM    18
#define Y6_GPIO_NUM    12
#define Y5_GPIO_NUM    10
#define Y4_GPIO_NUM     8
#define Y3_GPIO_NUM     9
#define Y2_GPIO_NUM    11
#define VSYNC_GPIO_NUM  6
#define HREF_GPIO_NUM   7
#define PCLK_GPIO_NUM  13

void setup() {
  Serial.begin(115200);
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer   = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk  = XCLK_GPIO_NUM; config.pin_pclk  = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM; config.pin_href  = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM; config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn  = PWDN_GPIO_NUM;  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size   = FRAMESIZE_QVGA;
  config.jpeg_quality = 12;
  config.fb_count     = 2;
  if (esp_camera_init(&config) != ESP_OK) {
    Serial.println("摄像头初始化失败");
    return;
  }
  Serial.println("摄像头就绪");
}

void loop() {
  camera_fb_t *fb = esp_camera_fb_get();
  if (fb) {
    Serial.printf("拍摄 %u 字节\n", fb->len);
    esp_camera_fb_return(fb);
  }
  delay(2000);
}
```

#### OLED 显示屏（U8g2）

```cpp
#include <U8g2lib.h>
#include <Wire.h>

// 0.96 英寸 SSD1306 I2C OLED
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(10, 30, "T-Camera Plus");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## 常见问题

**Q：与 T-Camera S3 有什么区别？**  
A：T-Camera Plus S3 新增了 IP5306 电源管理芯片和更大的电池接口。

**Q：摄像头初始化失败？**  
A：确认 PSRAM 设置为 **OPI PSRAM**，并检查对应版本的摄像头引脚定义是否正确。
