---
title: 快速开始
show_source: false
---

# T-Camera S3 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| esp32-camera | 最新 | [GitHub](https://github.com/espressif/esp32-camera) |
| U8g2 | 最新 | [GitHub](https://github.com/olikraus/u8g2) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Camera-S3.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 开发板设置

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

#### 3. 上传

连接 USB-C，打开示例，点击「上传」。  
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

---

### 外设示例

#### 摄像头网络视频流

```cpp
#include "esp_camera.h"
#include <WiFi.h>

// T-Camera S3 摄像头引脚定义
#define PWDN_GPIO_NUM  -1
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM  38
#define SIOD_GPIO_NUM   5
#define SIOC_GPIO_NUM   4
#define Y9_GPIO_NUM    14
#define Y8_GPIO_NUM    48
#define Y7_GPIO_NUM    47
#define Y6_GPIO_NUM    21
#define Y5_GPIO_NUM    13
#define Y4_GPIO_NUM    11
#define Y3_GPIO_NUM    10
#define Y2_GPIO_NUM     9
#define VSYNC_GPIO_NUM  8
#define HREF_GPIO_NUM  18
#define PCLK_GPIO_NUM  12

const char* ssid = "你的WiFi名称";
const char* password = "你的WiFi密码";

void setup() {
    Serial.begin(115200);
    camera_config_t config;
    config.ledc_channel = LEDC_CHANNEL_0;
    config.ledc_timer   = LEDC_TIMER_0;
    config.pin_d0 = Y2_GPIO_NUM; config.pin_d1 = Y3_GPIO_NUM;
    config.pin_d2 = Y4_GPIO_NUM; config.pin_d3 = Y5_GPIO_NUM;
    config.pin_d4 = Y6_GPIO_NUM; config.pin_d5 = Y7_GPIO_NUM;
    config.pin_d6 = Y8_GPIO_NUM; config.pin_d7 = Y9_GPIO_NUM;
    config.pin_xclk  = XCLK_GPIO_NUM; config.pin_pclk  = PCLK_GPIO_NUM;
    config.pin_vsync = VSYNC_GPIO_NUM; config.pin_href  = HREF_GPIO_NUM;
    config.pin_sscb_sda = SIOD_GPIO_NUM; config.pin_sscb_scl = SIOC_GPIO_NUM;
    config.pin_pwdn  = PWDN_GPIO_NUM;  config.pin_reset = RESET_GPIO_NUM;
    config.xclk_freq_hz = 20000000;
    config.pixel_format = PIXFORMAT_JPEG;
    config.frame_size   = FRAMESIZE_VGA;
    config.jpeg_quality = 12;
    config.fb_count     = 2;
    if (esp_camera_init(&config) != ESP_OK) {
        Serial.println("摄像头初始化失败");
        return;
    }
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
    Serial.println("\nWiFi 已连接: " + WiFi.localIP().toString());
}

void loop() {}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：摄像头初始化失败？**  
A：确认引脚定义与实际版本匹配，并将 Arduino IDE 中的 PSRAM 设置为 **OPI PSRAM**。

**Q：PIR 传感器不触发？**  
A：AS312 PIR 传感器上电后需要几秒钟的预热时间，且传感器附近不能有热源干扰。
