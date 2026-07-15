---
title: 快速开始
show_source: false
---

# T-QT C6 快速开始

## 依赖库

将项目 `libraries/` 目录复制到 Arduino 库目录：

| 库名 | 来源 |
| :--: | :--: |
| Arduino_GFX | [GitHub](https://github.com/moononournation/Arduino_GFX) |
| CST816T（触摸） | 项目内置 |
| LVGL 8.x | [GitHub](https://github.com/lvgl/lvgl) |
| QMI8658（IMU） | 项目内置 |

---

## Arduino

### Arduino IDE

#### 1. 安装 ESP32 开发板支持

1. 打开 Arduino IDE → **文件** → **首选项**
2. 在「附加开发板管理器网址」中添加：
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
3. 前往 **工具** → **开发板** → **开发板管理器**，搜索 `esp32`，安装 **esp32 by Espressif Systems**

#### 2. 安装依赖库

将项目 `libraries/` 目录中的所有文件夹复制到 Arduino 库目录（例如 `C:\Users\YourName\Documents\Arduino\libraries`）。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32C6 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **160 MHz** |
| Flash Mode | **QIO** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |

#### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。  
若上传失败，按住 **BOOT** 按键重试。

---

### PlatformIO

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-QT-C6.git
   ```
3. 打开 `platformio.ini`，取消注释目标 `default_envs` 行
4. 点击 **✓** 编译，连接开发板，点击 **→** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `GFX` | 显示图形测试 |
| `CST816T` | 触摸手势演示 |
| `IMU` | 六轴 IMU（QMI8658） |
| `ADC_Battery` | 电池电压读取 |
| `Breathing_Light` | LED 呼吸灯效果 |
| `Deep_Sleep` | 深度睡眠（约 172 µA） |
| `Light_Sleep` | 轻睡眠（约 517 µA） |
| `Lvgl_CIT_SGM41562` | 出厂测试（V1.2） |
| `Lvgl_CIT_ETA4662` | 出厂测试（V1.0–V1.1） |

---

### 外设示例

#### Hello World（Arduino_GFX）

```cpp
#include <Arduino_GFX_Library.h>

// 引脚 — 参考项目 pin_config.h
#define TFT_CS    -1
#define TFT_DC     2
#define TFT_RST    1
#define TFT_BL     3

Arduino_DataBus *bus = new Arduino_ESP32SPI(TFT_DC, TFT_CS);
Arduino_GFX *gfx = new Arduino_GC9A01(bus, TFT_RST, 0, true);

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);

    gfx->begin();
    gfx->fillScreen(BLACK);

    gfx->setTextColor(WHITE);
    gfx->setTextSize(2);
    gfx->setCursor(25, 60);
    gfx->println("T-QT C6");
}

void loop() {}
```

#### 读取触摸手势（CST816T）

```cpp
#include <Wire.h>

#define TOUCH_SDA   11
#define TOUCH_SCL   10
#define TOUCH_INT    9
#define TOUCH_RST    8
#define TOUCH_ADDR   0x15

void setup() {
    Serial.begin(115200);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);

    // 复位触摸芯片
    pinMode(TOUCH_RST, OUTPUT);
    digitalWrite(TOUCH_RST, LOW); delay(10);
    digitalWrite(TOUCH_RST, HIGH); delay(50);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x01);  // 手势寄存器
    Wire.endTransmission(false);
    Wire.requestFrom(TOUCH_ADDR, 6);

    if (Wire.available() >= 6) {
        uint8_t gesture = Wire.read();
        Wire.read();
        uint8_t xH = Wire.read() & 0x0F;
        uint8_t xL = Wire.read();
        uint8_t yH = Wire.read() & 0x0F;
        uint8_t yL = Wire.read();
        int x = (xH << 8) | xL;
        int y = (yH << 8) | yL;
        if (gesture) {
            Serial.printf("手势: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### IMU 读取加速度与陀螺仪（QMI8658）

```cpp
#include <Wire.h>

#define IMU_ADDR  0x6B

void setup() {
    Serial.begin(115200);
    Wire.begin();

    // 唤醒 QMI8658
    Wire.beginTransmission(IMU_ADDR);
    Wire.write(0x02); Wire.write(0x60);  // CTRL1：使能加速度计 + 陀螺仪
    Wire.endTransmission();
}

void readIMU(float &ax, float &ay, float &az, float &gx, float &gy, float &gz) {
    Wire.beginTransmission(IMU_ADDR);
    Wire.write(0x35);  // ACCEL_XOUT_L
    Wire.endTransmission(false);
    Wire.requestFrom(IMU_ADDR, 12);

    int16_t raw[6];
    for (int i = 0; i < 6; i++) {
        raw[i] = Wire.read() | (Wire.read() << 8);
    }
    ax = raw[0] / 4096.0f;  ay = raw[1] / 4096.0f;  az = raw[2] / 4096.0f;
    gx = raw[3] / 64.0f;    gy = raw[4] / 64.0f;    gz = raw[5] / 64.0f;
}

void loop() {
    float ax, ay, az, gx, gy, gz;
    readIMU(ax, ay, az, gx, gy, gz);
    Serial.printf("加速度: %.2f %.2f %.2f  陀螺仪: %.2f %.2f %.2f\n",
                  ax, ay, az, gx, gy, gz);
    delay(100);
}
```

#### 读取电池电压

```cpp
// ADC 引脚 — 参考 pin_config.h
#define BAT_ADC_PIN  0

void setup() {
    Serial.begin(115200);
    analogReadResolution(12);
}

void loop() {
    int raw = analogRead(BAT_ADC_PIN);
    float voltage = raw * (3.3f / 4095.0f) * 2.0f;  // 根据分压比调整
    Serial.printf("电池电压: %.2f V  (raw=%d)\n", voltage, raw);
    delay(2000);
}
```

#### 深度睡眠 + 定时唤醒

```cpp
#include <esp_sleep.h>

#define SLEEP_SECONDS 30

void setup() {
    Serial.begin(115200);
    Serial.println("唤醒！");

    // ... 执行任务 ...

    Serial.printf("进入深度睡眠 %d 秒...\n", SLEEP_SECONDS);
    esp_sleep_enable_timer_wakeup((uint64_t)SLEEP_SECONDS * 1000000ULL);
    esp_deep_sleep_start();
}

void loop() {}
```

---

### LVGL

T-QT C6 出厂固件基于 LVGL 8.3.x 构建（`Lvgl_CIT_SGM41562` 用于 V1.2，`Lvgl_CIT_ETA4662` 用于 V1.0–V1.1）。以下示例展示了以 Arduino_GFX 作为刷新后端，在 GC9A01 圆形屏上运行 LVGL 的最简配置。

#### 配置 lv_conf.h

将项目 `libraries/` 中的 `lvgl` 文件夹复制到 Arduino 库目录，然后将项目根目录下的 `lv_conf.h` 复制到与 `lvgl` 文件夹同级的位置。

#### 最简 LVGL 示例

```cpp
#include <Arduino_GFX_Library.h>
#include <lvgl.h>

// 引脚 — 参考 pin_config.h
#define TFT_CS    -1
#define TFT_DC     2
#define TFT_RST    1
#define TFT_BL     3
#define SCREEN_W  128
#define SCREEN_H  128

Arduino_DataBus *bus = new Arduino_ESP32SPI(TFT_DC, TFT_CS);
Arduino_GFX *gfx = new Arduino_GC9A01(bus, TFT_RST, 0, true);

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void my_disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    gfx->draw16bitRGBBitmap(area->x1, area->y1, (uint16_t *)color_p, w, h);
    lv_disp_flush_ready(drv);
}

void my_touchpad_read(lv_indev_drv_t *drv, lv_indev_data_t *data) {
    Wire.beginTransmission(0x15);
    Wire.write(0x01);
    Wire.endTransmission(false);
    Wire.requestFrom(0x15, 6);

    if (Wire.available() >= 6) {
        Wire.read();  // 手势字节
        Wire.read();
        uint16_t x = ((Wire.read() & 0x0F) << 8) | Wire.read();
        uint16_t y = ((Wire.read() & 0x0F) << 8) | Wire.read();
        if (x < SCREEN_W && y < SCREEN_H) {
            data->state   = LV_INDEV_STATE_PR;
            data->point.x = x;
            data->point.y = y;
            return;
        }
    }
    data->state = LV_INDEV_STATE_REL;
}

void setup() {
    pinMode(TFT_BL, OUTPUT);
    digitalWrite(TFT_BL, HIGH);
    gfx->begin();

    Wire.begin(/* SDA */, /* SCL */);  // 参考 pin_config.h

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
    lv_label_set_text(label, "T-QT C6");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_14, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 出厂测试示例

出厂固件是基于 LVGL 构建的完整组件检测 UI，涵盖显示屏、触摸、IMU 和电池读取。在 Arduino IDE 中打开对应示例（V1.2 用 `Lvgl_CIT_SGM41562`，V1.0–V1.1 用 `Lvgl_CIT_ETA4662`）直接烧录即可。

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT** 按键重试烧录。

**Q：应该用哪个出厂测试示例？**  
A：根据板卡版本选择：
- V1.0 和 V1.1：使用 `Lvgl_CIT_ETA4662`
- V1.2：使用 `Lvgl_CIT_SGM41562`

**Q：上传后屏幕全黑？**  
A：检查背光引脚是否设为 HIGH，并确认 `TFT_BL` 与 `pin_config.h` 一致。

**Q：T-QT C6 支持 Wi-Fi 6 吗？**  
A：支持。ESP32-C6 支持 802.11ax（Wi-Fi 6，2.4 GHz），同时支持 Bluetooth 5 LE 及 Zigbee/Thread（802.15.4）。
