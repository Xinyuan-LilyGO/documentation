---
title: 快速开始
show_source: false
---

# T-SimCam 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| esp32-camera | 最新 | [GitHub](https://github.com/espressif/esp32-camera) |
| TinyGSM | 最新 | [GitHub](https://github.com/vshymanskyy/TinyGSM) |

---

## Arduino

### PlatformIO（推荐）

克隆 [T-SimCam](https://github.com/Xinyuan-LilyGO/T-SimCam)，打开 `platformio.ini`，选择目标示例，编译上传。

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
  config.pin_d0 = Y2_GPIO_NUM; config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM; config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM; config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM; config.pin_d7 = Y9_GPIO_NUM;
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
    Serial.println("摄像头初始化失败"); return;
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

#### LTE 数据（TinyGSM）

```cpp
#define TINY_GSM_MODEM_SIM7600
#include <TinyGsmClient.h>

HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  modemSerial.begin(115200, SERIAL_8N1, 26, 27);
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(2000);
  modem.restart();
  modem.gprsConnect("your.apn", "", "");
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：T-SimCam 的主要用途是什么？**  
A：T-SimCam 将 OV2640 摄像头与 4G LTE 模组结合，支持蜂窝网络图像/视频上传，适用于远程监控和资产追踪等场景。
