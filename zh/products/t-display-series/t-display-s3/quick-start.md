---
title: 快速开始
show_source: false
---

# T-Display-S3 快速开始

## 依赖库

在编译任何示例之前，请通过 Arduino IDE 库管理器安装以下库，或手动将它们放入 `libraries` 文件夹：

| 库名 | 来源 |
| :--: | :--: |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LVGL (v8.x) | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |

> **说明：** `LilyGo_LovyanGFX` 基于 LovyanGFX 封装了T-Display-S3 的屏幕引脚、电源和背光配置，无需在每个 sketch 中复制板级配置。

---

## Arduino

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE -> **文件** -> **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. 前往 **工具** -> **开发板** -> **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 开发板设置

| 设置项 | 值 |
| :----: | :----: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 你的 COM 口|
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3 MB APP / 9.9 MB FATFS)** |
| Upload Mode | **UART0 / Hardware CDC** |
| Upload Speed | **921600** |
| USB Mode | **CDC and JTAG** |

> **提示：** 使用电池供电时，请将 **USB CDC On Boot** 设为 **Disabled**，否则启动会等待 USB 连接而卡住。

#### 3. LilyGo_LovyanGFX 配置

T-Display-S3 使用 ST7789V（I8080 8 位并行接口）。安`LilyGo_LovyanGFX` 后，示例中直接创建 `LilyGo_T_Display_S3` 对象即可

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3 tft;
```

`tft.begin()` 会完成屏幕初始化、旋转设置、亮度设置和清屏。

#### 4. 上传

1. 通过 USB-C 连接开发板
2. 打开示例程序
3. 点击「上传

如果无法上传，手动进入下载模式：
1. 按住 **BOOT** 按钮
2. 按下并释放 **RST** 按钮
3. 释放 **BOOT** 按钮
4. 在 IDE 中点击「上传
5. 上传完成后按**RST** 退出下载模

---

### PlatformIO

#### 1. 环境配置

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3.git
   ```
3. VS Code 中打开克隆的文件夹

#### 2. 选择示例

打开 `platformio.ini`，取消注释你想运行的示例对应`default_envs` 行，确保同时只有一行生效：

```ini
; 一次只能取消注释一个
default_envs = Factory
; default_envs = WIFI_Scan
```

#### 3. 编译与上传

- 点击左下*** 编译
- 通过 USB-C 连接开发板
- 点击 *** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `LilyGo_LovyanGFX_Board_Test` | LilyGo_LovyanGFX 统一板级显示测试 |
| `Factory` | 出厂测试 |
| `WIFI_Scan` | Wi-Fi 扫描 |
| `BLE_Uart` | BLE 串口透传 |
| `SPIFFS_Test` | SPIFFS 文件系统 |
| `FFat_Test` | FFat 文件系统 |

完整示例列表见 [T-Display-S3 仓库](https://github.com/Xinyuan-LilyGO/T-Display-S3)

---

## ESP-IDF

T-Display-S3 支持 ESP-IDF 开发，请参见 [LilyGo-Display-IDF](https://github.com/Xinyuan-LilyGO/LilyGo-Display-IDF)

---

## MicroPython

支持 MicroPython 开发：
- [russhughes/st7789s3_mpy](https://github.com/russhughes/st7789s3_mpy)
- [lilygo-micropython](https://github.com/Xinyuan-LilyGO/lilygo-micropython)

---

### 外设示例

#### Hello World（LovyanGFX

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3 tft;

void setup() {
    tft.begin(1);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.drawString("T-Display-S3", 40, 80);
}

void loop() {}
```

#### 绘制图形

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3 tft;

void setup() {
    tft.begin(1);

    tft.fillCircle(80, 85, 50, TFT_BLUE);
    tft.drawRect(160, 35, 100, 100, TFT_GREEN);
    tft.drawLine(0, 0, 319, 169, TFT_RED);
}

void loop() {}
```

#### 读取按钮

T-Display-S3 有两个按钮：BOOT（GPIO0）和另一个可配置按钮（查看你的板子型号引脚图）

```cpp
#define BTN_BOOT 0

void setup() {
    Serial.begin(115200);
    pinMode(BTN_BOOT, INPUT_PULLUP);
}

void loop() {
    if (digitalRead(BTN_BOOT) == LOW) {
        Serial.println("BOOT button pressed");
        delay(200);
    }
}
```

#### Sprite 动画

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3 tft;
LGFX_Sprite sprite(&tft);

int x = 0;

void setup() {
    tft.begin(1);
    sprite.createSprite(60, 60);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.fillCircle(30, 30, 28, TFT_CYAN);
    sprite.pushSprite(x, 55);

    x += 5;
    if (x > 320) x = -60;
    delay(30);
}
```

---

### LVGL

T-Display-S3 支持 LVGL 8.x，以 LovyanGFX 作为显示刷新后端。

#### 配置 lv_conf.h

将项目根目录下的 `lv_conf.h`（或 LVGL 的 `lv_conf_template.h`）复制到 Arduino 库目录中`lvgl` 文件夹同级的位置。关键配置项：

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    320
#define LV_VER_RES_MAX    170
```

#### 最简 LVGL v8 示例

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W 320
#define SCREEN_H 170

LilyGo_T_Display_S3 tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1,
                      area->x2 - area->x1 + 1,
                      area->y2 - area->y1 + 1);
    tft.writePixels((lgfx::rgb565_t *)color_p,
                    (area->x2 - area->x1 + 1) * (area->y2 - area->y1 + 1));
    tft.endWrite();
    lv_disp_flush_ready(drv);
}

void setup() {
    tft.begin(1);

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
    lv_label_set_text(label, "T-Display-S3");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 添加触摸输入

T-Display-S3 有带触摸的版本，如果你的板子带触摸，将触摸读取回调注册到 LVGL 输入驱动

```cpp
void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    uint16_t x, y;
    bool touched = /* your_touch_lib.getPoint(&x, &y) */ false;
    if (touched) {
        data->state   = LV_INDEV_STATE_PR;
        data->point.x = x;
        data->point.y = y;
    } else {
        data->state = LV_INDEV_STATE_REL;
    }
}

// setup() 中注册显示驱动之后添加：
static lv_indev_drv_t indev_drv;
lv_indev_drv_init(&indev_drv);
indev_drv.type    = LV_INDEV_TYPE_POINTER;
indev_drv.read_cb = my_touchpad_read;
lv_indev_drv_register(&indev_drv);
```

---

## 常见问题

**屏幕不亮**
`LilyGo_LovyanGFX` 会拉GPIO15 作为屏幕电源使能，并使用 GPIO38 做背光 PWM。如果屏幕不亮，请确认板子版本与该配置一致，且供电正常。

**烧录成功但屏幕无显示**
确认已安`LilyGo_LovyanGFX`，并先运行库中的 `LilyGo_LovyanGFX_Board_Test` 示例确认硬件正常。**无法上传 / 端口不断闪烁**
手动进入下载模式（见上方步骤），或将板子移动到路径较短的目录（Windows MAX_PATH 限制）

**使用外部电源供电**
`USB CDC On Boot` 设为 `Disabled`，否则启动时会等USB 连接
