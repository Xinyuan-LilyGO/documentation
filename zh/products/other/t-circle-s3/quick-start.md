---
title: 快速开始
show_source: false
---

# T-Circle S3 快速开始

## 依赖库

将项目 `libraries/` 目录复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TFT_eSPI | ≤ 2.0.14 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| CST816D（触摸） | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/T-Circle-S3) |
| LVGL | 8.3.x | [GitHub](https://github.com/lvgl/lvgl) |

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
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 你的 COM 口 |
| USB CDC On Boot | **Enabled** |
| USB Mode | **Hardware CDC and JTAG** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

> **提示：** 仅使用电池供电时，将 **USB CDC On Boot** 设为 **Disabled**。

#### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。  
若上传失败，按住 **BOOT** 再按一下 **RST**，先松开 RST，保持按住 BOOT 后再开始上传。

---

### PlatformIO

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Circle-S3.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例环境
4. 点击 **✓** 编译，连接开发板，点击 **→** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Display` | TFT_eSPI 显示演示 |
| `Touch` | CST816D 电容触摸 |
| `LVGL_Demo` | LVGL UI 框架演示 |
| `Factory` | 全功能出厂测试 |

---

### 外设示例

#### Hello World（TFT_eSPI）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);

    tft.setTextColor(TFT_GREEN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(15, 70);
    tft.println("T-Circle S3");
}

void loop() {}
```

#### 在圆形屏幕上绘图

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    tft.init();
    tft.fillScreen(TFT_BLACK);

    // 填充背景圆
    tft.fillCircle(80, 80, 78, TFT_NAVY);
    // 白色边框圆环
    tft.drawCircle(80, 80, 78, TFT_WHITE);

    tft.setTextColor(TFT_WHITE);
    tft.setTextSize(2);
    tft.setCursor(30, 72);
    tft.print("你好！");
}

void loop() {}
```

#### 读取触摸（CST816D）

```cpp
#include <Wire.h>

// 参考 pin_config.h 获取实际 I2C 引脚
#define TOUCH_SDA   3
#define TOUCH_SCL   2
#define TOUCH_ADDR  0x15

void setup() {
    Serial.begin(115200);
    Wire.begin(TOUCH_SDA, TOUCH_SCL);
}

void loop() {
    Wire.beginTransmission(TOUCH_ADDR);
    Wire.write(0x02);
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
        if (x || y) {
            Serial.printf("手势: 0x%02X  x=%d  y=%d\n", gesture, x, y);
        }
    }
    delay(50);
}
```

#### 最简 LVGL 示例

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[160 * 20];

TFT_eSPI tft = TFT_eSPI();

void disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1,
                      area->x2 - area->x1 + 1,
                      area->y2 - area->y1 + 1);
    tft.pushColors((uint16_t *)color_p,
                   (area->x2 - area->x1 + 1) * (area->y2 - area->y1 + 1), true);
    tft.endWrite();
    lv_disp_flush_ready(drv);
}

void setup() {
    tft.init();
    tft.setRotation(0);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 160 * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = 160;
    disp_drv.ver_res  = 160;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Circle S3");
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT**，按一下 **RST**，先松开 RST，保持按住 BOOT 后再开始烧录。

**Q：USB 串口无输出？**  
A：在 Arduino IDE 工具菜单中将 **USB CDC On Boot** 设为 **Enabled**。

**Q：T-Circle 与 T-Circle S3 有何区别？**  
A：T-Circle S3 使用 ESP32-S3，具备 USB-OTG、OPI PSRAM 和更多 GPIO，推荐用于新项目。

**Q：TFT_eSPI 版本必须 ≤ 2.0.14？**  
A：是的。更新版本更改了驱动接口，与该板卡配置文件不兼容。
