---
title: 快速开始
show_source: false
---

# T-Glass 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LilyGo T-Wristband & T-Glass | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass.git
   ```
3. 打开项目，在 `platformio.ini` 中选择 T-Glass 对应环境
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
| PSRAM | **QSPI PSRAM** |

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software) 并添加 ESP32 开发板支持：
   `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
2. 克隆仓库并打开 T-Glass 示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **显示屏**：1.1 英寸 JD9613 AMOLED（294×126 像素），可见区域 126×126 像素——不支持 `setRotation(1)` 或 `setRotation(3)`，仅可使用 `0` 或 `2`
- **IMU**：BHI260AP AI 运动传感器（六自由度），支持手势和活动检测
- **睡眠电流**：约 300 µA，可通过侧边触摸按钮唤醒
- **RTC**：PCF85063A，可用于带时间戳的日志记录或定时唤醒
- **PSRAM**：QSPI 2 MB，Arduino IDE 中选择 **QSPI PSRAM**

---

## LVGL

T-Glass 可以在其 JD9613 AMOLED 显示屏（可见区域 126×126）上运行 LVGL。推荐 LVGL 版本：**8.3.x**。将 `lv_conf.h` 放在 Arduino `libraries/` 目录中 `lvgl/` 文件夹旁边，并将 `LV_HOR_RES_MAX` / `LV_VER_RES_MAX` 设置为 126×126。请注意旋转限制——仅使用 `setRotation(0)` 或 `setRotation(2)`。

#### lv_conf.h

```c
#define LV_COLOR_DEPTH    16    // 彩色 AMOLED
#define LV_HOR_RES_MAX   126
#define LV_VER_RES_MAX   126
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE (64 * 1024)  // 64KB 用于小屏设备
```

#### Hello World

```cpp
#include <LilyGo_AMOLED.h>
#include <lvgl.h>

LilyGo_Class amoled;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[126 * 20];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    amoled.startWrite();
    amoled.setAddrWindow(area->x1, area->y1, w, h);
    amoled.pushPixels((uint16_t *)&color_p->full, w * h, true);
    amoled.endWrite();
    lv_disp_flush_ready(disp);
}

void setup() {
    amoled.begin();
    amoled.setRotation(0);   // 仅使用 0 或 2
    
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 126 * 20);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 126;
    disp_drv.ver_res = 126;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Glass\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

### 外设示例

#### AMOLED 显示屏（JD9613）

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_Class amoled;

void setup() {
  amoled.begin();
  amoled.setRotation(0); // 仅支持旋转 0 或 2
  amoled.fillScreen(TFT_BLACK);
  amoled.setTextColor(TFT_WHITE, TFT_BLACK);
  amoled.setTextSize(1);
  amoled.drawString("T-Glass", 30, 55);
}

void loop() {}
```

#### IMU（BHI260AP）

```cpp
#include <Wire.h>

#define BHI260_ADDR 0x28

void setup() {
  Serial.begin(115200);
  Wire.begin();
  Wire.beginTransmission(BHI260_ADDR);
  if (Wire.endTransmission() == 0) {
    Serial.println("BHI260AP 已检测到");
  }
}

void loop() { delay(1000); }
```

#### RTC（PCF85063A）

```cpp
#include <Wire.h>

#define PCF85063_ADDR 0x51

void setup() {
  Serial.begin(115200);
  Wire.begin();
  Wire.beginTransmission(PCF85063_ADDR);
  Wire.write(0x04); // 秒寄存器
  Wire.endTransmission(false);
  Wire.requestFrom(PCF85063_ADDR, 1);
  if (Wire.available()) {
    uint8_t secs = Wire.read() & 0x7F;
    Serial.printf("RTC 秒: %d\n", secs);
  }
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：旋转后显示屏图像异常？**
A：JD9613 不支持所有旋转模式，仅使用 `setRotation(0)` 或 `setRotation(2)`。

**Q：无法上传？**
A：确认 **USB CDC On Boot** 已设置为 **Enabled**。必要时按住 BOOT + 按 RST 进入下载模式。
