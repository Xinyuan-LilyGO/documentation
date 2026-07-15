---
title: 快速开始
show_source: false
---

# T-Display S3 Pro 快速开始

## 依赖库

将项目 `lib/` 目录中的所有文件夹复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| Arduino_GFX | 最新 | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| LVGL | 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| SensorLib | 最新 | [GitHub](https://github.com/lewisxhe/SensorLib) |
| TouchLib | 最新 | [GitHub](https://github.com/mmMicky/TouchLib) |
| JPEGDEC | 最新 | [GitHub](https://github.com/bitbank2/JPEGDEC) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-Pro.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例行
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

#### 2. 安装依赖库

将项目 `lib/` 中的所有文件夹复制到 Arduino 库目录（例如 `C:\Users\YourName\Documents\Arduino\libraries`）。

#### 3. 开发板设置

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

> **提示：** 使用电池供电时，将 **USB CDC On Boot** 设为 **Disabled**。

#### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。  
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，然后上传。

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Factory` | 全功能出厂测试 |
| `TFT_eSPI_Hello` | TFT_eSPI Hello World 显示 |
| `Touch_Test` | CST816S 电容触摸测试 |
| `PMU_Example` | SY6970 电源管理 |
| `Camera` | DVP 摄像头流（OV2640/OV5640） |
| `USB_HID` | USB HID 键鼠演示 |
| `LTR553_Sensor` | 环境光与接近传感器 |
| `LVGL_Demo` | LVGL 8 UI 演示 |

---

### 外设示例

#### Hello World（TFT_eSPI）

```cpp
#include <TFT_eSPI.h>

// 确保 User_Setup.h 已配置 ST7789V2，222×480
TFT_eSPI tft;

#define TFT_PWR 15  // 背光电源引脚

void setup() {
    pinMode(TFT_PWR, OUTPUT);
    digitalWrite(TFT_PWR, HIGH);

    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);

    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(20, 220);
    tft.println("T-Display S3 Pro");
}

void loop() {}
```

#### 读取触摸（CST816S）

```cpp
#include <Wire.h>

#define TOUCH_SDA   3
#define TOUCH_SCL   2
#define TOUCH_INT  21
#define TOUCH_RST  13
#define TOUCH_ADDR 0x15

struct TouchPoint { uint16_t x, y; bool pressed; };

TouchPoint readTouch() {
    TouchPoint tp = {0, 0, false};
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);
    if (Wire.available() >= 6) {
        Wire.read(); // 手势
        uint8_t fingers = Wire.read() & 0x0F;
        tp.x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        tp.y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        tp.pressed = (fingers > 0);
    }
    return tp;
}

void setup() {
    Serial.begin(115200);
    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    TouchPoint tp = readTouch();
    if (tp.pressed) {
        Serial.printf("触摸: x=%d  y=%d\n", tp.x, tp.y);
    }
    delay(50);
}
```

#### PMU — 读取电池电压（SY6970）

```cpp
#include <XPowersLib.h>

XPowersSY6970 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin(/* SDA */, /* SCL */);
    if (!PMU.begin(Wire, SY6970_SLAVE_ADDRESS)) {
        Serial.println("PMU 初始化失败");
        return;
    }
    // 未接电池时关闭充电
    // PMU.disableCharge();
}

void loop() {
    Serial.printf("VBUS: %.2f V  VBAT: %.2f V  VSYS: %.2f V\n",
        PMU.getVbusVoltage() / 1000.0f,
        PMU.getBattVoltage() / 1000.0f,
        PMU.getSystemVoltage() / 1000.0f);
    delay(2000);
}
```

---

### LVGL

T-Display S3 Pro 搭载 2.2 英寸 **ST7789V2 IPS** 屏幕（222 × 480）和 **CST816S** 电容触摸。显示主驱动为 **TFT_eSPI**，LVGL 刷新回调使用 `pushColors`。

#### 配置 lv_conf.h

将项目 `lib/` 中的 `lv_conf.h` 复制到 Arduino 库目录中与 `lvgl` 文件夹同级的位置。关键配置：

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    222
#define LV_VER_RES_MAX    480
```

#### 最简 LVGL v8 示例

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

#define TFT_PWR    15
#define SCREEN_W  222
#define SCREEN_H  480

#define TOUCH_SDA   3
#define TOUCH_SCL   2
#define TOUCH_RST  13
#define TOUCH_ADDR 0x15

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1, w, h);
    tft.pushColors((uint16_t *)color_p, w * h, true);
    tft.endWrite();
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);
    if (Wire.available() >= 6) {
        Wire.read();
        uint8_t fingers = Wire.read() & 0x0F;
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (fingers > 0) {
            data->state   = LV_INDEV_STATE_PR;
            data->point.x = x;
            data->point.y = y;
            return;
        }
    }
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);

    pinMode(TFT_PWR, OUTPUT);
    digitalWrite(TFT_PWR, HIGH);
    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);

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
    lv_label_set_text(label, "T-Display S3 Pro");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 出厂示例

打开仓库中的 `LVGL_Demo` 或 `Factory` 示例，这是 T-Display S3 Pro 生产级 LVGL 集成的权威参考。

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：未接电池时设备反复重启？**  
A：在 PMU 初始化时调用 `PMU.disableCharge()`，或参考 `PMU_Example`。

**Q：屏幕不亮或背光异常？**  
A：检查背光驱动方式是否与版本匹配（V1.0 用 PWM，V1.1 用恒流），并确保 PMU 正常供电。

**Q：如何区分 V1.0 和 V1.1？**  
A：查看 USB-C 接口旁是否标注「V1.1」；V1.1 使用恒流背光驱动，请使用对应示例。

**Q：OTG 外设无法识别？**  
A：通过 `PMU.enableOTG()` 启用 OTG 输出。启用 OTG 时 USB 输入不会对电池充电。
