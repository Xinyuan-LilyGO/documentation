---
title: 快速开始
show_source: false
---

# T-Circle S3 快速开始

## 依赖库

在编译任何示例之前，请通过 Arduino IDE 库管理器安装以下库，或手动将它们放入 `libraries` 文件夹。触摸库可从 T-Circle-S3 仓库的 `libraries/` 目录复制到 Arduino 库目录：

| 库名 | 来源 |
| :--: | :--: |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| CST816D（触摸） | [T-Circle-S3 仓库](https://github.com/Xinyuan-LilyGO/T-Circle-S3) |
| LVGL (v8.x) | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |

> **说明：** 新的显示示例推荐使用 `LilyGo_LovyanGFX`。该库基于 LovyanGFX 封装了T-Circle S3 的屏幕引脚和驱动配置，更适合后续让 AI 只生成界面逻辑，避免反复改坏底层显示配置。

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
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| 端口 | 你的 COM 口|
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

> **提示：** 仅使用电池供电时，请将 **USB CDC On Boot** 设为 **Disabled**，否则启动可能会等待 USB 连接。

#### 3. LilyGo_LovyanGFX 配置

T-Circle S3 使用 GC9D01N 圆形 TFT LCD（160 × 160，SPI 接口）。安`LilyGo_LovyanGFX` 后，示例中直接创建 `LilyGo_T_Circle_S3` 对象即可

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;
```

`tft.begin()` 会完成屏幕初始化、旋转设置、亮度设置和清屏。

#### 4. 上传

通过 USB-C 连接，打开示例，点击「上传」。 
若上传失败，按住 **BOOT** 再按一下 **RST**，先松开 RST，保持按住 BOOT 后再开始上传

---

### PlatformIO

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Circle-S3.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例环境。
4. 如新建基`LilyGo_LovyanGFX` 的示例，`lib_deps` 中添加：
   ```ini
   lib_deps =
       lovyan03/LovyanGFX
   ```
5. 点击 **Build** 编译，连接开发板，点击 **Upload** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `LilyGo_LovyanGFX_Board_Test` | LilyGo_LovyanGFX 统一板级显示测试 |
| `Original_Test` | 出厂综合测试 |
| `GFX` | LovyanGFX 屏幕显示示例 |
| `CST816D` | CST816D 电容触摸 |
| `APA102_Blink` | APA102 LED 闪烁 |
| `Voice_Speaker` | 扬声器示例|
| `DMIC_ReadData` | 麦克风读取|
| `Wifi_Music` | Wi-Fi 音乐播放 |

完整示例列表见 [T-Circle-S3 仓库](https://github.com/Xinyuan-LilyGO/T-Circle-S3)

---

### 外设示例

#### Hello World（LovyanGFX

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;

void setup() {
    tft.begin(0);

    tft.setTextColor(TFT_GREEN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(15, 70);
    tft.println("T-Circle S3");
}

void loop() {}
```

#### 在圆形屏幕上绘图

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;

void setup() {
    tft.begin(0);

    // 填充背景
    tft.fillCircle(80, 80, 78, TFT_NAVY);
    // 白色边框圆环
    tft.drawCircle(80, 80, 78, TFT_WHITE);

    tft.setTextColor(TFT_WHITE);
    tft.setTextSize(2);
    tft.setCursor(30, 72);
    tft.print("你好);
}

void loop() {}
```

#### 读取触摸（CST816D）

```cpp
#include <Wire.h>

// 根据引脚表：CST816D 使用 SDA=IO11，SCL=IO14，INT=IO12
#define TOUCH_SDA   11
#define TOUCH_SCL   14
#define TOUCH_INT   12
#define TOUCH_ADDR  0x15

void setup() {
    Serial.begin(115200);
    pinMode(TOUCH_INT, INPUT);
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

#### Sprite 动画

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Circle_S3 tft;
LGFX_Sprite sprite(&tft);

int r = 8;
int delta = 2;

void setup() {
    tft.begin(0);
    sprite.createSprite(80, 80);
}

void loop() {
    sprite.fillSprite(TFT_BLACK);
    sprite.fillCircle(40, 40, r, TFT_CYAN);
    sprite.drawCircle(40, 40, 30, TFT_WHITE);
    sprite.pushSprite(40, 40);

    r += delta;
    if (r >= 28 || r <= 8) delta = -delta;
    delay(30);
}
```

---

### LVGL

T-Circle S3 支持 LVGL 8.x，以 LovyanGFX 作为显示刷新后端。

#### 配置 lv_conf.h

将项目根目录下的 `lv_conf.h`（或 LVGL 的 `lv_conf_template.h`）复制到 Arduino 库目录中`lvgl` 文件夹同级的位置。关键配置项：

```c
#define LV_COLOR_DEPTH     16
#define LV_HOR_RES_MAX    160
#define LV_VER_RES_MAX    160
```

#### 最简 LVGL v8 示例

```cpp
#define LILYGO_LGFX_USE_T_CIRCLE_S3
#include <LilyGo_LovyanGFX.h>
#include <lvgl.h>

#define SCREEN_W 160
#define SCREEN_H 160

LilyGo_T_Circle_S3 tft;

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[SCREEN_W * 20];

void disp_flush(lv_disp_drv_t *drv, const lv_area_t *area, lv_color_t *color_p) {
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
    tft.begin(0);

    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, SCREEN_W * 20);

    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res  = SCREEN_W;
    disp_drv.ver_res  = SCREEN_H;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Circle S3");
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, 0);
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

---

## AI 生成代码建议

使用 AI 工具生成 T-Circle S3 显示代码时，可以这样描述

```text
LilyGO T-Circle S3 生成 Arduino/PlatformIO 示例代码
显示驱动使用 LovyanGFX
屏幕：GC9D01N60x160 圆形 TFT LCD，SPI 总线。
LCD 引脚：MOSI=17，SCLK=15，CS=13，DC=16，BL=18。
请使LilyGo_LovyanGFX 库，包含 <LilyGo_LovyanGFX.h>，创LilyGo_T_Circle_S3 tft
只生成setup/loop 中的显示例UI 逻辑
如需要离屏绘图，请使用 LGFX_Sprite
```

这样可以让 AI 专注于界面和交互逻辑，减少反复生成错误引脚或错误显示驱动的概率

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT**，按一下 **RST**，先松开 RST，保持按住 BOOT 后再开始烧录

**Q：USB 串口无输出？**  
A：在 Arduino IDE 工具菜单中将 **USB CDC On Boot** 设为 **Enabled**。

**Q：T-Circle T-Circle S3 有何区别？**  
A：T-Circle S3 使用 ESP32-S3，具备 USB-OTG、OPI PSRAM 和更多 GPIO，推荐用于新项目

**Q：屏幕不亮？**
A：`LilyGo_LovyanGFX` 通过 LovyanGFX `Light_PWM` 配置自动控制背光。请确认库中T-Circle S3 配置与板子版本一致，并确认USB 或电池供电正常。

**Q：新项目为什么推荐使LovyanGFX*
A：`LilyGo_LovyanGFX` 可以把屏幕配置集中在库里的板级类中，后续 AI 生成代码时只需要调用 `fillScreen`、`drawCircle`、`drawString`、`LGFX_Sprite` 等绘图接口，不容易反复改坏底层引脚配置。
