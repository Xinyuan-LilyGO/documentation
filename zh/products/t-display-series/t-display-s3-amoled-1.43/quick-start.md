---
title: 快速开始
show_source: false
---

# T-Display S3 AMOLED 1.43 快速开始

## 依赖库

在编译之前，请通过 Arduino IDE 库管理器安装以下库，或将 `libraries/` 目录中的文件夹复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| Arduino_GFX | 1.3.7 | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| Arduino_DriveBus | 1.1.16 | [GitHub](https://github.com/Xk-w/Arduino_DriveBus) |
| JPEGDEC | 1.2.8 | [GitHub](https://github.com/bitbank2/JPEGDEC) |
| LVGL | 8.3.5 | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |
| SensorLib | 0.2.x | [GitHub](https://github.com/lewisxhe/SensorsLib) |

> **注意：** 请使用上方指定版本，更新版本可能导致兼容性问题。

---

## Arduino

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 安装依赖库

将项目 `libraries/` 目录中的所有文件夹复制到 Arduino 库目录（例如 `C:\Users\YourName\Documents\Arduino\libraries`）。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :----: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 你的 COM 口 |
| USB CDC On Boot | **Enabled** |
| USB Mode | **Hardware CDC and JTAG** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3 MB APP / 9.9 MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

> **提示：** 使用电池供电时，请将 **USB CDC On Boot** 设为 **Disabled**。

#### 4. 上传

1. 通过 USB-C 连接开发板
2. 打开示例程序
3. 点击「上传」

如果上传失败，按住 **BOOT-0** 按钮后重试。

---

### PlatformIO

#### 1. 环境配置

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75.git
   ```
3. 在 VS Code 中打开克隆的文件夹

#### 2. 选择示例

打开 `platformio.ini`，取消注释你想运行的 `src_dir` 行，确保同时只有一行生效。

#### 3. 编译与上传

- 点击 **✓** 编译
- 通过 USB-C 连接开发板
- 点击 **→** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Original_Test` | DO0143 出厂测试 |
| `GFX` | 图形库演示 |
| `FT3168` | 电容触摸示例 |
| `SY6970` | 电源管理示例 |
| `PCF8563` | RTC 示例 |
| `Light_Sleep_Wake_Up` | 轻睡眠唤醒 |
| `Deep_Sleep_Wake_Up` | 深度睡眠唤醒 |
| `SD` | SD 卡读写 |
| `screen_touch_lvgl_9` | LVGL 9 触摸示例（ESP-IDF） |

---

### 外设示例

#### Hello World（Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>
#include <Arduino_DriveBus_Library.h>

// 显示驱动由板级库初始化，完整初始化流程见仓库中的 GFX 示例
// 下方假设 gfx 是由板级初始化助手设置的 Arduino_GFX* 指针

extern Arduino_GFX *gfx;

void setup() {
    gfx->begin();
    gfx->fillScreen(BLACK);
    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(30, 100);
    gfx->println("Hello 1.43!");
}

void loop() {}
```

> 完整的板级初始化流程请打开仓库 `T-Display-S3-AMOLED-1.43-1.75` 中的 `GFX` 示例，里面包含完整的总线和显示器初始化代码。

#### 绘制图形

```cpp
gfx->fillCircle(140, 140, 80, BLUE);                // 实心圆
gfx->drawRect(60, 60, 160, 160, GREEN);             // 空心矩形（居中）
gfx->fillTriangle(140, 40, 60, 220, 220, 220, RED); // 三角形
```

#### 触摸输入（FT3168）

```cpp
#include <SensorLib.h>

SensorFT3168 touch;

void setup() {
    // SDA、SCL、中断引脚 — 参考你的板子原理图
    touch.begin(Wire, FT3168_SLAVE_ADDRESS, TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    if (touch.isAvailable()) {
        touch.read();
        int16_t x = touch.getX();
        int16_t y = touch.getY();
        Serial.printf("Touch: x=%d, y=%d\n", x, y);
    }
}
```

#### 深度睡眠唤醒

```cpp
#define WAKE_PIN GPIO_NUM_0   // BOOT 按钮

void setup() {
    Serial.begin(115200);
    Serial.println("已唤醒！");

    // ... 显示器初始化 ...

    delay(2000);

    // 设置唤醒源并进入深度睡眠
    esp_sleep_enable_ext0_wakeup(WAKE_PIN, LOW);
    Serial.println("进入深度睡眠...");
    esp_deep_sleep_start();
}

void loop() {}
```

---

### LVGL

T-Display S3 AMOLED 1.43 支持 LVGL 8.3.5，以 Arduino_DriveBus 驱动显示屏，LVGL 通过 Arduino_GFX 的 `draw16bitRGBBitmap` 作为刷新后端。

#### 配置 lv_conf.h

将项目 `libraries/` 中的 `lv_conf.h` 复制到 Arduino 库目录中与 `lvgl` 文件夹同级的位置。该板卡的关键配置：

```c
#define LV_COLOR_DEPTH  16
#define LV_HOR_RES_MAX  466   // 1.43 英寸 AMOLED：466×466
#define LV_VER_RES_MAX  466
```

#### 最简 LVGL v8 示例

```cpp
#include <Arduino_GFX_Library.h>
#include <Arduino_DriveBus_Library.h>
#include <lvgl.h>

// 显示屏由板卡库初始化，完整初始化代码请参考仓库中的 GFX 示例
extern Arduino_GFX *gfx;

#define SCREEN_W 466
#define SCREEN_H 466

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    // 使用 SensorLib FT3168，初始化参考上方触摸示例
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    // 板卡与显示屏初始化（从 GFX 示例复制）
    gfx->begin();

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init(&indev_drv);
    indev_drv.type    = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register(&indev_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "AMOLED 1.43");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 出厂示例

仓库中的 `screen_touch_lvgl_9` 示例展示了基于 ESP-IDF 的完整 LVGL 9 触摸 UI。如需 Arduino LVGL 8 开发，以上述示例为起点，并参考 `lvgl_benchmark` 示例进行性能调优。

---

## 常见问题

**板子一直烧录失败**
按住 **BOOT-0** 按钮后点击上传，上传开始后释放。

**UART 接口没有串口输出**
默认将 USB 接口作为 UART0 调试输出。如需使用硬件 UART，请在 Arduino IDE 工具中将 **USB CDC On Boot** 设为 **Disabled**。

**SY6970 不接电池时工作不稳定**
PMU 在仅 5V 供电（无电池）时输出波形不稳定，请始终连接电池使用，或通过软件关闭电池通道。
