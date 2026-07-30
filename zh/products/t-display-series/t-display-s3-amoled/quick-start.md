---
title: 快速开始
show_source: false
---

# T-Display-S3-AMOLED 快速开始

## 依赖库

在编译任何示例之前，请通过 Arduino IDE 库管理器安装以下库，或手动将它们放入 `libraries` 文件夹：

| 库名 | 来源 |
| :--: | :--: |
| LilyGo-display-library | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| LovyanGFX | [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-AMOLED-Series | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series) |
| LVGL (v8.x) | [GitHub](https://github.com/lvgl/lvgl/tree/release/v8.4) |
| SensorLib | [GitHub](https://github.com/lewisxhe/SensorsLib) |
| XPowersLib | [GitHub](https://github.com/lewisxhe/XPowersLib) |

> **LVGL 版本说明：** 大多数示例使用 LVGL v8，仅 `examples/lvgl_version_9` 使用 v9。请勿将 v8 示例v9 将 `lv_conf.h` 混用途

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
| Flash Size | **16 MB (128 Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **16M Flash (3 MB APP / 9.9 MB FATFS)** |
| Upload Mode | **UART0 / Hardware CDC** |
| Upload Speed | **921600** |
| USB Mode | **CDC and JTAG** |

> **提示：** 如果使用电池供电且不连接 USB，请将 **USB CDC On Boot** 设为 **Disabled**，否则启动时会卡住。

#### 3. 上传

1. 通过 USB-C 连接开发板
2. 打开示例程序（如 `examples/Factory/Factory.ino`
3. 点击「上传

如果端口一直断开，手动进入下载模式：
1. 按住 **BOOT** 按钮
2. 按下并释放 **RST** 按钮
3. 释放 **BOOT** 按钮
4. 在 IDE 中点击「上传

---

### PlatformIO

#### 1. 环境配置

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series.git
   ```
3. VS Code 中打开克隆的文件夹

#### 2. 选择示例

打开 `platformio.ini`，取消注释你想运行的示例对应`src_dir` 行。一次只能激活 **一个** `src_dir`

```ini
; 一次只能取消注释一个src_dir
src_dir = examples/Factory
; src_dir = examples/AdjustBrightness
; src_dir = examples/LVGL_Rotation
```

#### 3. 编译与上传

- 点击 PlatformIO 工具栏中***（编译）
- 通过 USB-C 连接开发板
- 点击 **Upload**（上传）

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `LilyGo_LovyanGFX_Board_Test` | LilyGo_LovyanGFX 统一板级显示测试 |
| `Factory` | 出厂测试 / 默认演示 |
| `AdjustBrightness` | 调整屏幕亮度 |
| `LVGL_Rotation` | LVGL 屏幕旋转 |
| `Touchpad` | 电容触摸输入（仅触摸版） |
| `Lvgl_Images` | LVGL 图像颜色测试 |
| `LVGL_SD_Images` | 通过 LVGL 显示 SD 卡图片|
| `SPI_SDCard` | 外部 SPI SD 卡访|
| `USB_Host_Keyboard_Mouse` | USB 主机模式（需禁用 USB CDC On Boot|
| `TWAI_SelfTest` | CAN 总线（TWAI）自检 |
| `QWIIC_GPS_Shield` | 通过 QWIIC 接口读取 GPS |
| `QWIIC_I2C_Scan` | QWIIC I2C 设备扫描 |
| `lvgl/get_started` | LVGL v8 入门 |
| `lvgl/font` | LVGL v8 字体演示 |
| `lvgl/event` | LVGL v8 事件处理 |
| `lvgl_version_9` | LVGL v9 演示（需使用 LVGL v9 配置。|

---

### LVGL

T-Display-S3-AMOLED 库内置了 `LV_Helper`，将所有底层驱动（显示刷新、触摸输入、DMA 缓冲区）封装成一行初始化调用，让你可以直接编写界面逻辑

#### 最小示例

```cpp
#include <LilyGo_AMOLED.h>
#include <LV_Helper.h>

LilyGo_Class amoled;

void setup() {
    amoled.begin();          // 自动识别板型并初始化屏幕
    beginLvglHelper(amoled); // 初始LVGL、注册显示和触摸驱动
}

void loop() {
    lv_task_handler(); // 驱动 LVGL 事件循环
    delay(5);
}
```

`amoled.begin()` 会自动识别当前型号（T-Display-S3-AMOLED / Pro 等），无需手动指定

---

#### 显示文字（Label

```cpp
void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "Hello, LilyGo!");
    lv_obj_center(label); // 居中显示
}
```

---

#### 按钮与事件回调

```cpp
static void btn_event_cb(lv_event_t *e) {
    lv_event_code_t code = lv_event_get_code(e);
    if (code == LV_EVENT_CLICKED) {
        lv_obj_t *label = (lv_obj_t *)lv_event_get_user_data(e);
        static int count = 0;
        char buf[32];
        snprintf(buf, sizeof(buf), "点击次数：%d", ++count);
        lv_label_set_text(label, buf);
    }
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "点击次数：");
    lv_obj_center(label);

    lv_obj_t *btn = lv_btn_create(lv_scr_act());
    lv_obj_set_size(btn, 160, 60);
    lv_obj_align(btn, LV_ALIGN_BOTTOM_MID, 0, -20);
    lv_obj_add_event_cb(btn, btn_event_cb, LV_EVENT_ALL, label);

    lv_obj_t *btn_label = lv_label_create(btn);
    lv_label_set_text(btn_label, "点我");
    lv_obj_center(btn_label);
}
```

---

#### 滑动条（Slider

```cpp
static void slider_event_cb(lv_event_t *e) {
    lv_obj_t *slider = lv_event_get_target(e);
    lv_obj_t *label  = (lv_obj_t *)lv_event_get_user_data(e);
    char buf[16];
    snprintf(buf, sizeof(buf), "%d%%", lv_slider_get_value(slider));
    lv_label_set_text(label, buf);
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_label_set_text(label, "50%");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, -40);

    lv_obj_t *slider = lv_slider_create(lv_scr_act());
    lv_obj_set_width(slider, 200);
    lv_slider_set_value(slider, 50, LV_ANIM_OFF);
    lv_obj_center(slider);
    lv_obj_add_event_cb(slider, slider_event_cb, LV_EVENT_VALUE_CHANGED, label);
}
```

---

#### 屏幕旋转

LVGL 初始化后调用 `amoled.setRotation()` 即可改变显示方向，参0 对应 0°/90°/180°/270°

```cpp
void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    amoled.setRotation(1); // 横屏
    // 旋转后更LVGL 分辨
    lv_disp_set_rotation(lv_disp_get_default(), LV_DISP_ROT_90);
}
```

完整旋转示例见仓`examples/LVGL_Rotation`

---

#### 动画效果

LVGL 内置动画引擎，可以平滑改变对象的任何属性。以下示例演示一个圆弧从 0° 旋转到 360°

```cpp
static void set_angle(void *obj, int32_t v) {
    lv_arc_set_value((lv_obj_t *)obj, v);
}

void setup() {
    amoled.begin();
    beginLvglHelper(amoled);

    // 创建圆弧控件
    lv_obj_t *arc = lv_arc_create(lv_scr_act());
    lv_obj_set_size(arc, 150, 150);
    lv_obj_center(arc);
    lv_arc_set_rotation(arc, 270); // 起始位置在顶部
    lv_arc_set_bg_angles(arc, 0, 360);
    lv_arc_set_value(arc, 0);

    // 配置动画
    lv_anim_t a;
    lv_anim_init(&a);
    lv_anim_set_var(&a, arc);
    lv_anim_set_exec_cb(&a, set_angle);
    lv_anim_set_time(&a, 2000);              // 动画时长 2 秒
    lv_anim_set_repeat_count(&a, LV_ANIM_REPEAT_INFINITE); // 无限循环
    lv_anim_set_values(&a, 0, 100);          // 值从 0 到 100
    lv_anim_start(&a);
}
```

##### 常用动画效果

```cpp
// 淡入淡出（透明度）
lv_anim_set_exec_cb(&a, (lv_anim_exec_xcb_t)lv_obj_set_style_opa);
lv_anim_set_values(&a, LV_OPA_TRANSP, LV_OPA_COVER);

// 移动（X 坐标）
lv_anim_set_exec_cb(&a, (lv_anim_exec_xcb_t)lv_obj_set_x);
lv_anim_set_values(&a, 0, 200);

// 缩放
lv_anim_set_exec_cb(&a, (lv_anim_exec_xcb_t)lv_obj_set_width);
lv_anim_set_values(&a, 100, 300);

// 缓动曲线
lv_anim_set_path_cb(&a, lv_anim_path_ease_in_out); // 先慢后快再慢
```

如需精灵动画，可`LilyGo_LovyanGFX_Board_Test` 基础上创建`LGFX_Sprite` 并复用同一个板级显示对象
---

#### LVGL v9 说明

仓库的 `examples/lvgl_version_9` 提供LVGL v9 的演示。v9 v8 有以下主要 API 变化

| v8 API | v9 等效 API |
| :----: | :--------: |
| `lv_scr_act()` | `lv_screen_active()` |
| `lv_anim_set_time()` | `lv_anim_set_duration()` |
| `lv_obj_clear_flag()` | `lv_obj_remove_flag()` |

使用 v9 时，`src/lv_conf.h.v9` 重命名为 `lv_conf.h`（覆盖原 v8 的配置文件）

---

### 外设示例

#### AMOLED 显示屏（RM67162 秒LilyGo_LovyanGFX

```cpp
#define LILYGO_LGFX_USE_T_DISPLAY_S3_AMOLED
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Display_S3_AMOLED display;

void setup() {
  display.begin(1);
  display.setTextColor(TFT_GREEN, TFT_BLACK);
  display.setTextSize(2);
  display.drawString("T-Display-S3-AMOLED", 30, 110);
}

void loop() {}
```

#### 触摸（CST816 触控版）

```cpp
#include <LilyGo_AMOLED.h>

LilyGo_Class amoled;

void setup() {
  amoled.begin();
  Serial.begin(115200);
}

void loop() {
  int16_t x, y;
  if (amoled.getPoint(&x, &y)) {
    Serial.printf("触摸坐标: x=%d y=%d\n", x, y);
  }
  delay(10);
}
```

---

## 常见问题

**上传时端口一直断开**
手动进入下载模式（按住 BOOT -> RST -> 释放 BOOT），然后上传。

**电池供电时启动卡住？**
在开发板设置中将 **USB CDC On Boot** 设为 **Disabled**。

**LVGL 编译错误**
检查你安装LVGL 版本是否与示例匹配（大部分示例使用 v8，只`lvgl_version_9` 使用 v9）

**SensorLib 编译错误（`readBuffer` / `updateBits` 不存在）**
你的 SensorLib 版本太新，请[Releases 页面](https://github.com/lewisxhe/SensorsLib/releases) 降级到 **SensorLib 0.2.x**

**Windows 路径过长错误**
将程序移到短路径（如 `D:\sketches\`），或启用Windows 长路径支持：
```powershell
reg add "HKLM\SYSTEM\CurrentControlSet\Control\FileSystem" /v LongPathsEnabled /t REG_DWORD /d 1 /f
```
然后重启 Windows。
