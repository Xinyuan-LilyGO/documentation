---
title: 快速开始
show_source: false
---

# T-Display S3 Long 快速开始

## 依赖库

将项目 `lib/` 目录中的所有文件夹复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| LVGL | **8.3.0**（禁止升级） | [GitHub](https://github.com/lvgl/lvgl) |
| Arduino_GFX | 最新 | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |
| Adafruit_BusIO | 最新 | [GitHub](https://github.com/adafruit/Adafruit_BusIO) |

> **重要：** LVGL 必须使用 **8.3.0**，项目启用了强制软件旋转补丁，升级后会导致显示方向错误。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-S3-Long.git
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
| `Display_Test` | AXS15231B AMOLED 显示测试 |
| `Touch_Test` | 电容触摸测试 |
| `LVGL_Demo` | LVGL 8 UI 演示 |
| `PMU` | 电源管理（XPowersLib） |
| `Deep_Sleep` | 深度睡眠与唤醒 |
| `QWIIC` | QWIIC 传感器接口演示 |
| `SD_Card` | SD 卡读写 |
| `Factory` | 全功能出厂测试 |

---

### 外设示例

#### Hello World（Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>

// QSPI 引脚 — 参考 index.md 引脚映射
#define TFT_QSPI_CS   12
#define TFT_QSPI_SCK  17
#define TFT_QSPI_D0   13
#define TFT_QSPI_D1   18
#define TFT_QSPI_D2   21
#define TFT_QSPI_D3   14
#define TFT_QSPI_RST  16
#define TFT_BL         1

Arduino_DataBus *bus = new Arduino_ESP32QSPI(
    TFT_QSPI_CS, TFT_QSPI_SCK,
    TFT_QSPI_D0, TFT_QSPI_D1, TFT_QSPI_D2, TFT_QSPI_D3);
Arduino_GFX *gfx = new Arduino_AXS15231B(bus, TFT_QSPI_RST, 0, false, 180, 640);

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    gfx->begin();
    gfx->fillScreen(BLACK);

    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(20, 300);
    gfx->println("T-Display S3 Long");
}

void loop() {}
```

#### 读取触摸

```cpp
#include <Wire.h>

#define TOUCH_SCL  10
#define TOUCH_SDA  15
#define TOUCH_INT  11
#define TOUCH_RST  16
#define TOUCH_ADDR 0x3B  // 请以实际固件为准

void setup() {
    Serial.begin(115200);

    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);

    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (x || y) {
            Serial.printf("手势: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### PMU — 读取电池电压（XPowersLib）

```cpp
#include <XPowersLib.h>

XPowersAXP2101 PMU;

void setup() {
    Serial.begin(115200);
    Wire.begin(/* SDA */, /* SCL */);
    PMU.begin(Wire, AXP2101_SLAVE_ADDRESS);
    PMU.disableStatLed();  // 无电池时关闭充电指示灯闪烁
}

void loop() {
    Serial.printf("电池电压: %.2f V\n", PMU.getBattVoltage() / 1000.0f);
    delay(2000);
}
```

#### 深度睡眠 + 按键唤醒

```cpp
#include <esp_sleep.h>

#define BTN_PIN GPIO_NUM_0

void setup() {
    Serial.begin(115200);
    Serial.println("唤醒！");
    delay(2000);

    esp_sleep_enable_ext0_wakeup(BTN_PIN, LOW);
    Serial.println("进入深度睡眠...");
    esp_deep_sleep_start();
}

void loop() {}
```

---

### LVGL

T-Display S3 Long 使用 **LVGL 8.3.0**，并启用了强制软件旋转以适配 180×640 竖向 AMOLED 屏幕。项目的 LVGL 辅助函数通过 Arduino_GFX 完成 AXS15231B 的刷新对接。

> **禁止将 LVGL 升级到 8.3.0 以上版本。** 强制软件旋转补丁与版本强绑定，升级后显示方向将出错。

#### 配置 lv_conf.h

将项目 `lib/` 中的 `lv_conf.h` 复制到 Arduino 库目录中与 `lvgl` 文件夹同级的位置。关键配置：

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    180
#define LV_VER_RES_MAX    640
```

#### 最简 LVGL v8 示例

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// 在调用 lv_init() 前完成 gfx 初始化（参考上方 Hello World）
extern Arduino_GFX *gfx;

#define SCREEN_W 180
#define SCREEN_H 640

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    // 接入触摸库读取逻辑
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);
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
    lv_label_set_text(label, "T-Display S3 Long");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 出厂示例

打开仓库中的 `LVGL_Demo` 或 `Factory` 示例，这是 T-Display S3 Long 生产级 LVGL 集成的权威参考。

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：能升级 LVGL 到 v8.3.x 或 v9 吗？**  
A：不能。项目对 LVGL 8.3.0 打了强制软件旋转补丁，升级后屏幕方向会出错。

**Q：没有接电池时充电指示灯一直闪烁？**  
A：在 setup() 中调用 `PMU.disableStatLed()` 关闭指示灯。

**Q：如何启用 OTG 输出？**  
A：通过 XPowersLib 调用 `PMU.enableOTG()`，关闭使用 `PMU.disableOTG()`。
