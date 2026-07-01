---
title: T-Keyboard-S3-Pro 库使用指南
show_source: false
---

# T-Keyboard-S3-Pro 库使用指南

[T-Keyboard-S3-Pro-Library](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library) 是一个统一的 Arduino 驱动库，通过单一全局对象 `TKeyboardS3Pro` 封装了 T-Keyboard-S3-Pro 的所有硬件——包括四块 GC9107 显示屏、五个机械按键、14 个 WS2812C RGB 灯和旋转编码器。

## 安装

### Arduino IDE

在 Arduino 库管理器中搜索 `LILYGO T-Keyboard-S3-Pro Library` 并安装，所有依赖库会自动安装。

也可以手动安装：将 `T-Keyboard-S3-Pro-Library` 文件夹复制到 Arduino 的 `libraries/` 目录下，然后重启 IDE。

### PlatformIO

在 `platformio.ini` 中添加：

```ini
lib_deps =
    https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library.git
    https://github.com/lovyan03/LovyanGFX.git
    https://github.com/lbuque/ButtonSense.git
```

## 开发板设置（Arduino IDE）

| 设置 | 值 |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| Flash Size | **16MB (128Mb)** |
| Flash Mode | **QIO 80 MHz** |
| Partition Scheme | **Default (6.25MB APP/3.43MB SPIFFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

> 如果上传失败，按住 **BOOT** 键并按一下 **RST**，松开 RST 后继续按住 BOOT，再点击 Upload。

## 快速入门

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();

    // 直接在主机屏幕上绘图
    TKeyboardS3Pro.display1.fillScreen(TFT_RED);
    TKeyboardS3Pro.display2.drawString("Hello", 20, 50);

    // 设置 RGB 灯（色调 0-360，饱和度 0-100，亮度 0-100）
    TKeyboardS3Pro.setLeds(120, 80, 30);
}

void loop() {
    TKeyboardS3Pro.update();   // 必须在 loop() 中调用——轮询按键和编码器

    if (TKeyboardS3Pro.key(0).wasPressed()) {
        Serial.println("KEY1 pressed");
    }
}
```

## 显示屏

主机板有 **4 块屏幕**（`display1`..`display4`）。每块均为完整的 LovyanGFX 设备——所有 LovyanGFX 绘图方法均可直接使用。

```cpp
// 命名访问——仅限主机屏幕
TKeyboardS3Pro.display1.fillScreen(TFT_NAVY);
TKeyboardS3Pro.display2.setTextColor(TFT_WHITE);
TKeyboardS3Pro.display2.setTextSize(2);
TKeyboardS3Pro.display2.setCursor(10, 50);
TKeyboardS3Pro.display2.print("Hello");

// 索引访问——等效，从 0 开始
TKeyboardS3Pro.displayAt(0).fillScreen(TFT_RED);   // 第 1 块屏幕
TKeyboardS3Pro.displayAt(3).fillScreen(TFT_BLUE);  // 第 4 块屏幕

// 一次填充所有屏幕
TKeyboardS3Pro.fillAllScreens(TFT_BLACK);

// 背光亮度（0-255）
TKeyboardS3Pro.setBrightness(200);
```

> **注意：** 每次只在一块屏幕上绘图。STM32 通过 I2C 对片选信号进行多路复用；同时选中多块屏幕不可靠。

### 完整示例——随机矩形

```cpp
#include <TKeyboardS3Pro.h>

static constexpr uint8_t N = TKeyboardS3ProClass::HOST_SCREEN_COUNT; // 4

void setup() {
    TKeyboardS3Pro.begin();
    TKeyboardS3Pro.setBrightness(255);
    TKeyboardS3Pro.fillAllScreens(TFT_BLACK);

    for (uint8_t i = 0; i < N; i++) {
        Display& s = TKeyboardS3Pro.displayAt(i);
        s.fillScreen(TFT_NAVY);
        s.setTextColor(TFT_WHITE);
        s.setTextSize(3);
        s.setCursor(48, 50);
        s.printf("%d", i + 1);
    }
}

void loop() {
    uint8_t i = rand() % N;
    Display& s = TKeyboardS3Pro.displayAt(i);
    int x = rand() % s.width();
    int y = rand() % s.height();
    int r = (s.width() >> 4) + 2;
    s.fillRect(x - r, y - r, r * 2, r * 2, rand());
    delay(2);
}
```

## 按键

主机有 **5 个按键**（KEY1..KEY5，索引 0..4）。按键通过 [ButtonSense](https://github.com/lbuque/ButtonSense) 库读取——每个 loop 调用一次 `update()` 来驱动按键状态。

```cpp
TKeyboardS3Pro.update();

// 边沿检测
if (TKeyboardS3Pro.key(0).wasPressed())      { /* KEY1 刚按下 */ }
if (TKeyboardS3Pro.key(0).wasReleased())     { /* KEY1 刚松开 */ }

// 电平检测
if (TKeyboardS3Pro.key(1).isPressed())       { /* KEY2 持续按下 */ }

// 复合事件（需要完整的按下+松开周期）
if (TKeyboardS3Pro.key(2).wasClicked())      { /* KEY3 单击 */ }
if (TKeyboardS3Pro.key(2).wasDoubleClicked()) { /* KEY3 双击 */ }
if (TKeyboardS3Pro.key(2).wasHold())         { /* KEY3 长按 */ }
```

### 完整示例——在屏幕上显示按键事件

```cpp
#include <TKeyboardS3Pro.h>

static constexpr uint8_t KEYS    = TKeyboardS3ProClass::KEY_COUNT;
static constexpr uint8_t SCREENS = TKeyboardS3ProClass::HOST_SCREEN_COUNT;

uint32_t pressCount[KEYS] = {};

void drawKey(uint8_t i) {
    if (i >= SCREENS) return;
    bool down = TKeyboardS3Pro.key(i).isPressed();
    Display& s = TKeyboardS3Pro.displayAt(i);
    s.fillScreen(down ? TFT_DARKGREEN : TFT_BLACK);
    s.setTextColor(TFT_WHITE);
    s.setTextSize(2);
    s.setCursor(8, 12);
    s.printf("KEY%d", i + 1);
    s.setTextColor(TFT_CYAN);
    s.setCursor(8, 52);
    s.printf("x %lu", (unsigned long)pressCount[i]);
    s.setCursor(8, 112);
    s.print(down ? "DOWN" : "up");
}

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
    for (uint8_t i = 0; i < SCREENS; i++) drawKey(i);
}

void loop() {
    TKeyboardS3Pro.update();
    for (uint8_t i = 0; i < KEYS; i++) {
        button::ButtonSense& b = TKeyboardS3Pro.key(i);
        if (b.wasPressed()) {
            pressCount[i]++;
            Serial.printf("KEY%d pressed (total %lu)\n", i + 1, (unsigned long)pressCount[i]);
            drawKey(i);
        }
        if (b.wasReleased()) drawKey(i);
    }
    delay(1);
}
```

## RGB 灯

板上有 **14 个 WS2812C 灯**，由 STM32 通过 I2C 控制。颜色以 HSV 格式指定。

```cpp
// 同时控制所有 14 个灯——色调 0-360，饱和度 0-100，亮度 0-100
TKeyboardS3Pro.setLeds(0,   100, 60);  // 红色
TKeyboardS3Pro.setLeds(120, 100, 60);  // 绿色
TKeyboardS3Pro.setLeds(240, 100, 60);  // 蓝色

// 通过位掩码选择灯（bit0 = LED1 ... bit13 = LED14）
TKeyboardS3Pro.setLeds(60, 100, 50, 0x000F);  // 前 4 个灯设为黄色

// 全部关闭
TKeyboardS3Pro.setLeds(0, 0, 0);
```

> 多板级联时，亮度请保持在 **10 以下**。6 块板 × 14 个灯全亮会超过 USB 供电限制。

### 完整示例——色调轮播

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
}

void loop() {
    for (uint16_t hue = 0; hue < 360; hue += 5) {
        TKeyboardS3Pro.setLeds(hue, 100, 60);
        delay(20);
    }
}
```

## 旋转编码器

编码器直接连接到 ESP32 GPIO（不经过 STM32）。每个 loop 调用 `update()`——它推进内部正交状态机。

```cpp
TKeyboardS3Pro.update();

// 自上次读取以来的变化量
long delta = TKeyboardS3Pro.encoder.delta();
if (delta > 0) Serial.println("顺时针");
if (delta < 0) Serial.println("逆时针");

// 绝对位置（累计值）
long pos = TKeyboardS3Pro.encoderPosition();
```

### 完整示例——在第 1 块屏幕上显示位置

```cpp
#include <TKeyboardS3Pro.h>

void showPosition(long pos) {
    Display& s = TKeyboardS3Pro.display1;
    s.fillScreen(TFT_BLACK);
    s.setTextColor(TFT_GREEN);
    s.setTextSize(2);
    s.setCursor(8, 12);
    s.print("ENCODER");
    s.setTextColor(TFT_WHITE);
    s.setTextSize(3);
    s.setCursor(8, 60);
    s.printf("%ld", pos);
}

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
    showPosition(0);
}

void loop() {
    TKeyboardS3Pro.update();
    long d = TKeyboardS3Pro.encoder.delta();
    if (d != 0) {
        long pos = TKeyboardS3Pro.encoderPosition();
        Serial.printf("encoder %s -> %ld\n", d > 0 ? "CW" : "CCW", pos);
        showPosition(pos);
    }
    delay(1);
}
```

## 级联板

最多 **6 块板**可通过磁吸接口连接在同一 I2C 总线上。每块板有独立地址（主机 = `0x01`，扩展模块 = `0x02`..`0x06`）。

```cpp
TKeyboardS3Pro.begin();

// 连接了多少块板？
Serial.printf("boards: %u\n", TKeyboardS3Pro.deviceCount());

// 列出所有板及其屏幕数量
for (uint8_t addr : TKeyboardS3Pro.devices()) {
    Serial.printf("  0x%02X — %u panels\n", addr, TKeyboardS3Pro.screenCount(addr));
}

// 在指定板的指定屏幕上绘图
// displayAt(panelIndex, boardAddress)  — panelIndex 从 0 开始
TKeyboardS3Pro.displayAt(0, 0x01).fillScreen(TFT_RED);   // 主机第 1 块屏幕
TKeyboardS3Pro.displayAt(4, 0x02).fillScreen(TFT_BLUE);  // 0x02 板第 5 块屏幕

// 热插拔：检测上电后插入的模块
uint8_t count = TKeyboardS3Pro.refreshDevices();
Serial.printf("now %u boards\n", count);
```

### 完整示例——为所有板的所有屏幕标注编号

```cpp
#include <TKeyboardS3Pro.h>

static const uint16_t palette[6] = {
    TFT_NAVY, TFT_MAROON, TFT_DARKGREEN, TFT_PURPLE, TFT_OLIVE, TFT_DARKCYAN
};

void labelBoard(uint8_t address, uint16_t color) {
    uint8_t n = TKeyboardS3Pro.screenCount(address);
    for (uint8_t i = 0; i < n; i++) {
        Display& s = TKeyboardS3Pro.displayAt(i, address);
        s.fillScreen(color);
        s.setTextColor(TFT_WHITE);
        s.setTextSize(2);
        s.setCursor(6, 10);
        s.printf("0x%02X", address);
        s.setTextSize(3);
        s.setCursor(48, 60);
        s.printf("%d", i + 1);
    }
}

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
    TKeyboardS3Pro.setBrightness(255);
}

void loop() {
    TKeyboardS3Pro.refreshDevices();
    uint8_t idx = 0;
    for (uint8_t a : TKeyboardS3Pro.devices()) {
        labelBoard(a, palette[idx++ % 6]);
    }
    delay(1000);
}
```

## BLE 键盘

`Advanced/BleKeyboard` 示例将 T-Keyboard-S3-Pro 变为蓝牙 HID 键盘，需要安装 [ESP32 BLE Keyboard](https://github.com/T-vK/ESP32-BLE-Keyboard) 库。

主要功能：
- 5 个按键各发送可配置的 HID 键码（`KEY_MAP[]`）
- 旋转编码器发送音量增大 / 减小媒体键
- 4 块屏幕显示 BLE 连接状态和各按键按下次数
- KEY1 + KEY2 同时按下重启 BLE 广播（组合键检测）
- 连接时 LED 缓慢呼吸绿色，广播时脉冲红色

```cpp
#include <TKeyboardS3Pro.h>
#include <BleKeyboard.h>

BleKeyboard bleKb("TKB-S3-Pro", "LILYGO", 100);

const uint8_t KEY_MAP[5] = { 'a', 'b', 'c', 'd', ' ' };

void setup() {
    TKeyboardS3Pro.begin();

    // 组合键：KEY1+KEY2 → 重启广播
    TKeyboardS3Pro.keyManager().onCombo(0x03, [](uint16_t, bool pressed) {
        if (!pressed) return;
        bleKb.end(); delay(200); bleKb.begin();
    });

    bleKb.begin();
}

void loop() {
    TKeyboardS3Pro.update();

    for (uint8_t i = 0; i < 5; i++) {
        if (TKeyboardS3Pro.key(i).wasPressed())
            if (bleKb.isConnected()) bleKb.press(KEY_MAP[i]);
        if (TKeyboardS3Pro.key(i).wasReleased())
            if (bleKb.isConnected()) bleKb.release(KEY_MAP[i]);
    }

    // 编码器 → 音量
    long pos = TKeyboardS3Pro.encoderPosition();
    static long last = 0;
    if (pos != last) {
        if (bleKb.isConnected())
            bleKb.write(pos > last ? KEY_MEDIA_VOLUME_UP : KEY_MEDIA_VOLUME_DOWN);
        last = pos;
    }
    delay(1);
}
```

## API 参考

### 初始化

| 方法 | 说明 |
| :----- | :---------- |
| `begin()` | 使用默认配置初始化所有子系统 |
| `begin(BoardConfig)` | 使用自定义 I2C/SPI 频率和时序初始化 |
| `update()` | 每个 `loop()` 调用一次——轮询按键并推进编码器 |

### 显示屏

| 方法 | 说明 |
| :----- | :---------- |
| `display1` .. `display4` | 主机 1–4 号屏幕的 LovyanGFX 对象 |
| `displayAt(index)` | 通过从 0 开始的索引访问主机屏幕 |
| `displayAt(index, address)` | 访问任意级联板上的任意屏幕 |
| `screenCount(address)` | 屏幕数量：主机为 4，扩展模块为 5 |
| `fillAllScreens(color)` | 填充所有板上的所有屏幕 |
| `setBrightness(0..255)` | 共享背光亮度 |

### 按键

| 方法 | 说明 |
| :----- | :---------- |
| `key(i)` | 第 i 个按键的 `ButtonSense` 对象（0=KEY1 .. 4=KEY5） |
| `key(i).wasPressed()` | 下降沿时返回一次 true |
| `key(i).wasReleased()` | 上升沿时返回一次 true |
| `key(i).isPressed()` | 按键按住期间持续返回 true |
| `key(i).wasClicked()` | 完整点击后返回 true |
| `key(i).wasDoubleClicked()` | 两次快速点击后返回 true |
| `key(i).wasHold()` | 长按后返回 true |
| `keys(address)` | 任意级联板的原始 5 位按键状态 |
| `keyManager()` | 用于组合键检测的 `ButtonManager` |

### RGB 灯

| 方法 | 说明 |
| :----- | :---------- |
| `setLeds(hue, sat, brt)` | 设置所有 14 个灯——色调 0–360，饱和度/亮度 0–100 |
| `setLeds(hue, sat, brt, mask, address)` | 定向控制特定灯和/或特定板 |

### 旋转编码器

| 方法 | 说明 |
| :----- | :---------- |
| `encoder.delta()` | 自上次读取以来的步数变化（正值 = 顺时针） |
| `encoderPosition()` | 累计绝对档位计数 |

### 级联板

> [!IMPORTANT]
> 未经测试

| 方法 | 说明 |
| :----- | :---------- |
| `deviceCount()` | 检测到的板数量 |
| `devices()` | 检测到的 I2C 地址向量（主机优先） |
| `refreshDevices()` | 重新扫描总线并初始化热插拔的板 |
| `isDevicePresent(address)` | 检查某板是否有响应 |
| `firmwareVersion(address)` | STM32 固件版本字节 |
