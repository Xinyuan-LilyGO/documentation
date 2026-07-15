---
title: 快速开始
show_source: false
---

本板使用 GxEPD2 驱动的电子墨水屏。文档中不再推荐在此类小型 e-paper 上直接使用 LVGL——请使用仓库中的 `GxEPD2` 示例进行显示驱动与局刷控制。

注意事项：
- 运行 LilyGO-Mini-Epaper-S3 仓库中的 `EPD_Display` / `Factory_Test` 示例来验证显示、LoRa、RTC、SD 等外设。
- 上电首次请做一次全刷：`display.display(false)`。
- 对于小分辨率墨水屏，若需简单 UI 建议基于 `GxEPD2` 实现小型绘制逻辑，而非完整 LVGL 移植。
   ```
3. 打开 `platformio.ini`，取消注释目标示例环境
4. 点击 **✓** 编译，连接开发板，点击 **→** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `EPD_Display` | 电子墨水屏显示演示 |
| `LoRa_Send` | LoRa 发送示例 |
| `LoRa_Receive` | LoRa 接收示例 |
| `RTC_Clock` | PCF8563 实时时钟 |
| `Deep_Sleep` | 深度睡眠与唤醒 |
| `SD_Card` | TF 卡读写 |
| `Factory_Test` | 全功能出厂测试 |

---

本板使用 GxEPD2 驱动的电子墨水屏。文档中不再推荐在此类小型 e-paper 上直接使用 LVGL——请使用仓库中的 `GxEPD2` 示例进行显示驱动与局刷控制。

注意事项：
- 运行 LilyGO-Mini-Epaper-S3 仓库中的 `EPD_Display` / `Factory_Test` 示例来验证显示、LoRa、RTC、SD 等外设。
- 上电首次请做一次全刷：`display.display(false)`。
- 对于小分辨率墨水屏，若需简单 UI 建议基于 `GxEPD2` 实现小型绘制逻辑，而非完整 LVGL 移植。

---

### 外设示例

#### Hello World（GxEPD2 电子墨水屏）

```cpp
#include <GxEPD2_BW.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// SPI 引脚 — 参考项目 pin_config.h
#define EPD_CS    10
#define EPD_DC     9
#define EPD_RST    8
#define EPD_BUSY   7

// 1.02 英寸 128×80 电子墨水屏
GxEPD2_BW<GxEPD2_102, GxEPD2_102::HEIGHT> display(
    GxEPD2_102(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY));

void setup() {
    display.init(115200);
    display.setRotation(1);
    display.setFont(&FreeMonoBold9pt7b);
    display.setTextColor(GxEPD_BLACK);

    display.setFullWindow();
    display.firstPage();
    do {
        display.fillScreen(GxEPD_WHITE);
        display.setCursor(5, 30);
        display.print("T-Mini E-Paper");
        display.setCursor(5, 55);
        display.print("Hello World!");
    } while (display.nextPage());
}

void loop() {}
```

#### 局部刷新（低功耗快速刷新）

```cpp
// 局部刷新仅刷新变化区域，速度快、闪烁少
display.setPartialWindow(0, 0, 128, 40);
display.firstPage();
do {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(5, 25);
    display.printf("计数: %d", count++);
} while (display.nextPage());
```

#### LoRa 发送（SX1262）

```cpp
#include <RadioLib.h>

// 引脚 — 参考项目 pin_config.h
#define LORA_CS    SS
#define LORA_DIO1  33
#define LORA_RST   32
#define LORA_BUSY  34

SX1262 radio = new Module(LORA_CS, LORA_DIO1, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    int state = radio.begin(915.0);  // 欧洲用 868.0，亚洲用 433.0
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("LoRa 初始化成功");
    }
}

void loop() {
    int state = radio.transmit("Hello from T-Mini E-Paper S3!");
    if (state == RADIOLIB_ERR_NONE) {
        Serial.println("数据包发送成功");
    }
    delay(5000);
}
```

#### LoRa 接收（SX1262）

```cpp
#include <RadioLib.h>

SX1262 radio = new Module(LORA_CS, LORA_DIO1, LORA_RST, LORA_BUSY);

void setup() {
    Serial.begin(115200);
    radio.begin(915.0);
    radio.startReceive();
}

void loop() {
    String str;
    int state = radio.readData(str);
    if (state == RADIOLIB_ERR_NONE) {
        Serial.print("收到: ");
        Serial.println(str);
        Serial.print("RSSI: ");
        Serial.println(radio.getRSSI());
        radio.startReceive();
    }
    delay(10);
}
```

#### RTC 设置与读取（PCF8563）

```cpp
#include <PCF8563.h>

PCF8563 rtc;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    rtc.init();

    // 设置时间：2026-01-01 12:00:00
    rtc.stopClock();
    rtc.setYear(26);
    rtc.setMonth(1);
    rtc.setDay(1);
    rtc.setHour(12);
    rtc.setMinut(0);
    rtc.setSecond(0);
    rtc.startClock();
}

void loop() {
    Time now = rtc.getTime();
    Serial.printf("20%02d-%02d-%02d %02d:%02d:%02d\n",
        now.year, now.month, now.day,
        now.hour, now.minute, now.second);
    delay(1000);
}
```

#### 深度睡眠 + 定时唤醒

```cpp
#include <esp_sleep.h>

#define SLEEP_SECONDS 60

void setup() {
    Serial.begin(115200);
    Serial.println("唤醒，正在执行任务...");

    // ... 更新电子墨水屏、发送 LoRa 数据等 ...

    Serial.printf("进入深度睡眠 %d 秒\n", SLEEP_SECONDS);
    esp_sleep_enable_timer_wakeup((uint64_t)SLEEP_SECONDS * 1000000ULL);
    esp_deep_sleep_start();
}

void loop() {}
```

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT** 再按一下 **RST**，先松开 RST，保持按住 BOOT 后再开始烧录。

**Q：USB 串口无输出？**  
A：在 Arduino IDE 工具菜单中将 **USB CDC On Boot** 设为 **Enabled**。

**Q：电子墨水屏刷新后有残影怎么办？**  
A：每隔约 10 次局部刷新，执行一次全屏刷新（`display.setFullWindow()`）以清除残影。

**Q：LoRa 应该用哪个频段？**  
A：北美用 915 MHz，欧洲用 868 MHz，亚洲用 433 MHz。收发两端频率必须一致。

**Q：如何验证硬件正常？**  
A：烧录[出厂固件测试文件](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/firmware/README.MD)以检验各外设。
