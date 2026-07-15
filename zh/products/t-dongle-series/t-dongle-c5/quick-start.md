---
title: 快速开始
show_source: false
---

# T-Dongle-C5 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| TFT_eSPI | 最新 | [GitHub](https://github.com/Bodmer/TFT_eSPI) |
| LVGL | **9.x** | [GitHub](https://github.com/lvgl/lvgl) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Dongle-C5.git
   ```
3. 打开 `platformio.ini`，取消注释目标示例行
4. 点击 **✓** 编译，将 Dongle 插入 USB-A 接口，点击 **→** 上传

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

通过 **工具** → **管理库** 安装 TFT_eSPI 和 LVGL，或从项目 `lib/` 文件夹复制。

#### 3. 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32C5 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz** |
| Flash Mode | **QIO** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 4. 上传

将 Dongle 插入 USB-A 接口，打开示例，点击「上传」。  
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，然后上传。

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Display_Test` | ST7735 TFT 显示测试 |
| `TF_Card` | TF 卡读写 |
| `LVGL_Demo` | LVGL 9 UI 演示 |
| `WiFi6_Scan` | 双频 Wi-Fi 6 扫描 |
| `BLE_Scan` | Bluetooth 5.0 LE 扫描 |
| `Factory` | 全功能出厂测试 |

---

### 外设示例

#### Hello World（TFT_eSPI）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(5, 65);
    tft.println("T-Dongle C5");
}

void loop() {}
```

---

### LVGL

T-Dongle-C5 搭载 **ESP32-C5** 芯片，使用 **LVGL v9**。屏幕为 0.96 英寸 ST7735 IPS TFT（80 × 160），由 TFT_eSPI 驱动。

#### 配置 lv_conf.h

将项目中的 `lv_conf.h` 复制到 Arduino 库目录中与 `lvgl` 文件夹同级的位置。关键配置：

```c
#define LV_COLOR_DEPTH  16
```

#### 最简 LVGL v9 示例

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>

TFT_eSPI tft;

#define SCREEN_W  80
#define SCREEN_H 160

static lv_display_t *disp;
static lv_color_t buf[SCREEN_W * SCREEN_H / 10];

void my_disp_flush(lv_display_t *disp, const lv_area_t *area, uint8_t *px_map) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    tft.startWrite();
    tft.setAddrWindow(area->x1, area->y1, w, h);
    tft.pushColors((uint16_t *)px_map, w * h, true);
    tft.endWrite();
    lv_display_flush_ready(disp);
}

void setup() {
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);

    lv_init();

    disp = lv_display_create(SCREEN_W, SCREEN_H);
    lv_display_set_flush_cb(disp, my_disp_flush);
    lv_display_set_buffers(disp, buf, NULL, sizeof(buf), LV_DISPLAY_RENDER_MODE_PARTIAL);

    lv_obj_t *label = lv_label_create(lv_screen_active());
    lv_label_set_text(label, "T-Dongle C5");
    lv_obj_center(label);
}

void loop() {
    lv_timer_handler();
    delay(5);
}
```

#### 出厂示例

打开仓库中的 `LVGL_Demo` 或 `Factory` 示例，这是 T-Dongle-C5 生产级 LVGL 集成的权威参考。

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：T-Dongle-C5 支持 Matter 吗？**  
A：支持。ESP32-C5 内置 Thread 和 Zigbee 3.0，是 Matter 智能家居生态系统的核心协议。

**Q：和 T-Dongle-S3 有什么区别？**  
A：C5 采用更新的 ESP32-C5 芯片，支持双频 Wi-Fi 6（含 5 GHz）和 Thread/Zigbee；S3 采用 ESP32-S3，仅支持 2.4 GHz Wi-Fi 4 和 Bluetooth 5 LE。
