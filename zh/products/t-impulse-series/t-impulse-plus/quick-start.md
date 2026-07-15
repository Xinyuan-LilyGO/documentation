---
title: 快速开始
show_source: false
---

# T-Impulse Plus 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| Adafruit nRF52 BSP | 最新 | [GitHub](https://github.com/adafruit/Adafruit_nRF52_Arduino) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |

> 请勿升级 T-Impulse-Plus 仓库中附带的库版本，需使用指定版本。

---

## Arduino

### Arduino IDE

#### 添加开发板包

在 **文件 → 首选项 → 附加开发板管理器网址** 中添加：
```
https://adafruit.github.io/arduino-board-index/package_adafruit_index.json
```

然后在开发板管理器中安装 **Adafruit nRF52**。

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **Nordic nRF52840 DK** |
| Softdevice | **S140 7.3.0** |
| Debug Level | **None** |

#### 步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Impulse-Plus.git
   ```
2. 在 Arduino IDE 中打开示例工程
3. 选择 **Nordic nRF52840 DK** 及上表参数
4. 快速双击复位按钮进入引导加载程序模式（LED 缓慢闪烁）
5. 选择出现的 UF2 驱动器并点击「上传」

---

## 使用 J-Link 烧录

将 J-Link 连接到 SWD 排针后执行：
```bash
nrfjprog --program firmware.hex --chiperase --verify
```

---

## 注意事项

- **LoRa**：SX1262（S62F 模块）——根据所在地区配置频率（433/868/915 MHz）
- **GNSS**：MIA-M10Q；首次定位建议在室外空旷环境，冷启动可能需要数分钟
- **OLED**：SSD1315 64×32 I²C 显示屏
- **IMU**：ICM20948 九轴（加速度计 + 陀螺仪 + 磁力计）
- **电源**：SGM41562 PMU；深度睡眠 10–40 µA，关机 < 1 µA
- **引导加载程序**：快速双击复位按钮进入 UF2 引导加载程序，可拖拽固件文件烧录

---

## LVGL

小型 SSD1315 OLED（64×32）可以与 LVGL 配合使用构建简单的 UI，但请注意内存和易用性的限制。推荐 LVGL 版本：**8.3.x**。如果使用 LVGL，需减少 `LV_MEM_SIZE` 并保持 UI 简洁。

#### lv_conf.h

```c
#define LV_COLOR_DEPTH     1    // 单色 OLED
#define LV_HOR_RES_MAX    64
#define LV_VER_RES_MAX    32
#define LV_TICK_CUSTOM      1
#define LV_TICK_CUSTOM_INCLUDE "Arduino.h"
#define LV_TICK_CUSTOM_SYS_TIME_EXPR (millis())
#define LV_MEM_SIZE (16 * 1024)  // 16KB，适合 nRF52 内存限制
```

#### Hello World

```cpp
#include <lvgl.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1315_128X40_1_HW_I2C u8g2(U8G2_R0, /*reset*/U8X8_PIN_NONE);

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[64 * 8];

void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    
    u8g2.clearBuffer();
    for (int y = 0; y < h; y++) {
        for (int x = 0; x < w; x++) {
            uint16_t idx = y * w + x;
            if (color_p[idx].full) {
                u8g2.drawPixel(area->x1 + x, area->y1 + y);
            }
        }
    }
    u8g2.sendBuffer();
    
    lv_disp_flush_ready(disp);
}

void setup() {
    Serial.begin(115200);
    
    // 初始化 OLED
    u8g2.begin();
    u8g2.clearDisplay();
    
    // 初始化 LVGL
    lv_init();
    lv_disp_draw_buf_init(&draw_buf, buf, NULL, 64 * 8);
    
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    disp_drv.hor_res = 64;
    disp_drv.ver_res = 32;
    disp_drv.flush_cb = disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);
    
    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "T-Impulse\nLVGL");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(10);
}
```

> **提示**：内存受限的 nRF52840 需要小心使用 LVGL。对于复杂的 UI，建议使用轻量级库如 U8g2 或原生 OLED 库。

---

### 外设示例

#### LoRa（SX1262）

```cpp
#include <RadioLib.h>

// T-Impulse-Plus SX1262 引脚 — 请查阅原理图
SX1262 radio = new Module(/*CS=*/24, /*IRQ=*/25, /*RST=*/26, /*BUSY=*/17);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1262 就绪");
}

void loop() {
  int state = radio.transmit("Hello T-Impulse");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

#### GPS（MIA-M10Q — TinyGPSPlus）

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;

void setup() {
  Serial.begin(115200);
  Serial1.begin(9600); // GPS UART 使用 nRF52 的 Serial1
}

void loop() {
  while (Serial1.available()) gps.encode(Serial1.read());
  if (gps.location.isUpdated()) {
    Serial.printf("纬度: %.6f  经度: %.6f\n",
      gps.location.lat(), gps.location.lng());
  }
}
```

#### OLED 显示屏（SSD1315 — U8g2）

```cpp
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_64X32_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_5x7_tr);
  u8g2.drawStr(0, 12, "T-Impulse");
  u8g2.sendBuffer();
  delay(1000);
}
```

---

## 常见问题

**Q：无法进入引导加载程序模式？**
A：在约 500 ms 内快速双击复位按钮，进入引导加载程序后 LED 会缓慢脉冲闪烁。

**Q：编译时出现库版本不兼容错误？**
A：只能使用 T-Impulse-Plus 仓库附带的库版本，不要单独升级依赖库。
