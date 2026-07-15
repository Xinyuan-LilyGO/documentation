---
title: 快速开始
show_source: false
---

# T5-4.7 E-Paper S3 Pro 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| epd47 | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO.git
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
2. 克隆 T5S3-4.7-e-paper-PRO 仓库并打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **显示屏**：4.7 英寸 ED047TC1，960×540 像素，16 级灰度；TPS65185 电源驱动芯片（I²C 地址 0x68）管理显示电压
- **LoRa**：SX1262（433–915 MHz）
- **GNSS**：MIA-M10Q；首次定位建议在室外空旷环境，冷启动可能需要 1–5 分钟
- **电池管理**：BQ25896 充电 IC + BQ27220 电量计；支持 MagSafe 磁吸充电和 USB-C 充电
- **IO 扩展器**：PCA9535PW（I²C）扩展可用 GPIO

---

## LVGL

该开发板可以使用 LVGL 在其 ED047TC1 显示屏上构建图形界面。推荐 LVGL 版本：**8.3.x**。仓库中包含专用的 LVGL 测试示例，位于 `examples/lvgl_test`。

#### lv_conf.h

将 `lv_conf.h` 放在 Arduino `libraries/` 目录中 `lvgl/` 文件夹旁边。最小化配置：

```c
#define LV_COLOR_DEPTH    16    // 16 位色深（用于 16 级灰度）
#define LV_HOR_RES_MAX   960
#define LV_VER_RES_MAX   540
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE  (128 * 1024)   // 128KB 用于 LVGL 对象
```

#### Hello World（参考 examples/lvgl_test）

```cpp
#include <lvgl.h>
#include <epd47.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[960 * 60];   // 部分缓冲区

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    
    // 使用 epd47 驱动写入到显示屏
    epd47.writePixelArea(area->x1, area->y1, w, h, (uint16_t *)color_p);
    
    lv_disp_flush_ready(disp);
}

void setup() {
    Serial.begin(115200);
    
    // 初始化 EPD 驱动
    epd47.init(/*CS*/9, /*DC*/11, /*RST*/17, /*BUSY*/13);
    
    // 初始化 LVGL
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 960 * 60);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 960;
    disp_drv.ver_res = 540;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    // 创建演示 UI
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T5-4.7 S3 Pro\nLVGL Demo\nWith LoRa & GPS");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(10);
}
```

---

### 外设示例

#### 墨水屏（epd47）

```cpp
#include <epd47.h>

void setup() {
    epd47.init(/*CS*/9, /*DC*/11, /*RST*/17, /*BUSY*/13);
    epd47.clear();
    epd47.setFont(&FreeSans12pt7b);
    epd47.setCursor(20, 60);
    epd47.print("T5-4.7 S3 Pro");
    epd47.update();
}

void loop() {}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <RadioLib.h>

#define LORA_CS    14
#define LORA_IRQ   13
#define LORA_RST   12
#define LORA_BUSY  15

SX1262 radio = new Module(LORA_CS, LORA_IRQ, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0, 125.0, 9, 7, RADIOLIB_SX126X_SYNC_WORD_PRIVATE, 22);
    if (state != RADIOLIB_ERR_NONE) {
        Serial.printf("LoRa 初始化失败: %d\n", state);
    }
}

void loop() {
    radio.transmit("Hello T5 Pro");
    delay(2000);
}
```

#### GPS（MIA-M10Q — TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

#define GPS_RX  44
#define GPS_TX  43

TinyGPSPlus gps;
HardwareSerial GPSSerial(1);

void setup() {
    Serial.begin(115200);
    GPSSerial.begin(38400, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    while (GPSSerial.available()) gps.encode(GPSSerial.read());
    if (gps.location.isUpdated()) {
        Serial.printf("纬度: %.6f  经度: %.6f\n",
            gps.location.lat(), gps.location.lng());
    }
}
```

---

## 常见问题

**Q：显示屏只有黑白，没有灰度？**
A：确认 TPS65185 的 Vcom 电压设置正确。使用 epd47 驱动中的 Vcom 调节功能，或参考显示屏数据手册进行校准。

**Q：GNSS 无法定位？**
A：移至室外空旷处，确保天线朝上。冷启动可能需要 1–5 分钟。

**Q：无法上传？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**。必要时按住 BOOT + 按 RST 进入下载模式。
