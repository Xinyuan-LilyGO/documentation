---
title: 快速开始
show_source: false
---

# T-PICO-2350 快速开始

## 概述

T-PICO-2350 搭载双处理器：**RP2350** 负责显示和外设控制；**ESP32-C6** 负责 Wi-Fi 6 和蓝牙。两颗芯片通过 UART 通信。可使用 Arduino（Raspberry Pi Pico 开发板支持包）或 MicroPython 开发 RP2350 端。

---

## Arduino IDE（RP2350）

### 1. 安装 Raspberry Pi Pico 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `pico`，安装 **Raspberry Pi Pico/RP2040/RP2350 by Earle F. Philhower III**

### 2. 安装依赖库

将项目 `libraries/` 目录中的所有文件夹复制到 Arduino 库目录。

### 3. 开发板设置（RP2350）

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **Raspberry Pi Pico 2** |
| CPU Speed | **150 MHz** |
| Flash Size | **16 MB** |
| USB Stack | **Adafruit TinyUSB** |
| Upload Speed | 921600 |

### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。

---

## MicroPython（RP2350）

1. 下载 [RP2350 MicroPython UF2](https://micropython.org/download/RPI_PICO2/) 固件
2. 按住开发板上的 **BOOTSEL** 按键，连接 USB——设备将挂载为 U 盘
3. 将 `.uf2` 文件拖入 U 盘，开发板自动重启
4. 使用 [Thonny IDE](https://thonny.org/) 或任意串口终端编写 MicroPython 代码

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Display_Demo` | 2.33 英寸 IPS LCD 图形演示 |
| `WiFi_Scan` | ESP32-C6 Wi-Fi 扫描（通过 UART） |
| `BLE_Beacon` | ESP32-C6 BLE 广播 |
| `Factory_Test` | 全功能出厂测试 |

---

## Arduino

### 外设示例

#### 显示 Hello World（Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>

// SPI 和控制引脚 — 参考项目 pin_config.h
Arduino_DataBus *bus = new Arduino_HWSPI(/* DC */, /* CS */);
Arduino_GFX *gfx = new Arduino_ST7789(bus, /* RST */, /* 旋转 */);

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);

    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(30, 100);
    gfx->println("T-PICO-2350");
}

void loop() {}
```

#### 绘制图形

```cpp
#include <Arduino_GFX_Library.h>
// ... 按上方初始化 gfx ...

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);

    // 填充矩形
    gfx->fillRect(10, 10, 100, 60, BLUE);

    // 圆形
    gfx->drawCircle(160, 120, 50, YELLOW);

    // 三角形
    gfx->fillTriangle(50, 200, 100, 150, 150, 200, RED);

    gfx->setTextColor(WHITE);
    gfx->setCursor(60, 110);
    gfx->print("你好！");
}
```

#### ESP32-C6 Wi-Fi 扫描（通过 RP2350 UART）

RP2350 通过 UART 向 ESP32-C6 发送 AT 指令。使用前请确保 ESP32-C6 已烧录 AT 固件。

```cpp
// 连接 ESP32-C6 的 UART — TX/RX 引脚参考 pin_config.h
#define ESP_SERIAL Serial1

void setup() {
    Serial.begin(115200);
    ESP_SERIAL.begin(115200);

    delay(1000);
    ESP_SERIAL.println("AT+CWLAP");  // 扫描 Wi-Fi 网络
}

void loop() {
    while (ESP_SERIAL.available()) {
        Serial.write(ESP_SERIAL.read());
    }
}
```

#### 读取电池电压

```cpp
// 电池监测 ADC 引脚 — 参考 pin_config.h
#define BAT_ADC_PIN  A0

void setup() {
    Serial.begin(115200);
    pinMode(BAT_ADC_PIN, INPUT);
}

void loop() {
    int raw = analogRead(BAT_ADC_PIN);
    // 根据实际分压比调整系数
    float voltage = raw * (3.3f / 1023.0f) * 2.0f;
    Serial.printf("电池电压: %.2f V\n", voltage);
    delay(2000);
}
```

#### 深度睡眠（RP2350）

```cpp
#include "pico/sleep.h"

void setup() {
    Serial.begin(115200);
    Serial.println("运行中...");
    delay(2000);

    Serial.println("进入深度睡眠 10 秒");
    sleep_ms(100);  // 等待串口发送完毕

    // 使用 RTC 闹钟唤醒（RP2350 休眠模式）
    // 完整示例请参考 Raspberry Pi Pico SDK 文档
    rp2040.deepSleep(10000);
}

void loop() {}
```

---

### LVGL

T-PICO-2350 出厂固件使用 LVGL 8.3.9 构建显示 UI。RP2350 通过 Arduino_GFX 驱动 2.33 英寸 IPS LCD，LVGL 作为上层 UI 框架运行。

#### 安装 LVGL

将项目 `libraries/` 中的 `lvgl` 文件夹复制到 Arduino 库目录，然后将项目根目录下的 `lv_conf.h` 复制到与 `lvgl` 文件夹同级的位置。

#### 最简 LVGL 示例（RP2350 + Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// 引脚 — 参考 pin_config.h
Arduino_DataBus *bus = new Arduino_HWSPI(/* DC */, /* CS */);
Arduino_GFX *gfx    = new Arduino_ST7789(bus, /* RST */, 0 /* 旋转 */);

#define SCREEN_W  240
#define SCREEN_H  280

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-PICO-2350");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

> **提示：** 显示驱动型号和屏幕分辨率请以项目 `pin_config.h` 为准——出厂示例是引脚分配的权威参考。

#### 出厂示例

打开仓库中的 `Factory` 示例。它完整初始化了 LVGL UI，包括显示屏、按键和 ESP32-C6 通信面板，是 T-PICO-2350 生产级 LVGL 开发的最佳参考。

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOTSEL** 按键，连接 USB，设备以 U 盘形式挂载——将 `.uf2` 文件手动拖入即可。

**Q：RP2350 和 ESP32-C6 如何通信？**  
A：通过 UART。RP2350 发送指令，ESP32-C6 响应。烧录项目附带的 AT 固件到 ESP32-C6，即可方便地控制 Wi-Fi/蓝牙。

**Q：可以单独对 ESP32-C6 编程吗？**  
A：可以。通过 ESP32-C6 的 USB 接口（如已引出）或 UART 引导加载程序进行烧录，使用 Arduino IDE 选择 ESP32C6 Dev Module 开发板即可。

**Q：2.33 英寸 LCD 使用什么显示驱动？**  
A：请参考项目 `pin_config.h` 和 `platformio.ini` 获取确切驱动型号，该尺寸常见驱动包括 ST7789 和 GC9A01。
