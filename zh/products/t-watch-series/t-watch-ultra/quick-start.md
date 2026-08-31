---
title: 快速开始
show_source: false
---

# T-Watch Ultra 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| Arduino-ESP32 | **3.3.0-alpha1 或更高版本** | [安装指南](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html) |
| LilyGoLib | 当前 master | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGoLib) |
| LVGL | **9.4.0** | [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) |
| RadioLib | **7.4.0** | [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) |
| XPowersLib | **0.3.1** | [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) |

> LilyGoLib-ThirdParty 提供经过测试的依赖版本。在 `helloworld` 示例正常运行前不要升级这些库。完整版本请查看 [T-Watch Ultra 第三方库列表](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/docs/third_party.md#t-watch-ultra-third-party)。

---

## Arduino

### PlatformIO

LilyGoLib 主仓库使用 Arduino-ESP32 3.x，目前 PlatformIO 不支持该配置。PlatformIO 开发请使用独立的 [LilyGoLib-PlatformIO](https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO) 仓库，该仓库使用 Arduino-ESP32 2.0.17（ESP-IDF 4.4.7）：

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展。
2. 克隆 PlatformIO 仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGoLib-PlatformIO.git
   ```
3. 按该仓库中的 T-Watch Ultra 环境说明进行编译和上传。

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **LilyGo T-Watch-Ultra** |
| Port | 设备对应端口 |
| Upload Speed | 921600 |
| Upload Mode | **UART0 / Hardware CDC** |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | **240 MHz (WiFi)** |
| Core Debug Level | None |
| Erase All Flash Before Sketch Upload | Disabled |
| JTAG Adapter | Disabled |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| Board Revision | **Radio-SX1262**（按实际射频模块选择） |

Board Revision 选项：

- `Radio-SX1262`：Sub-GHz LoRa
- `Radio-SX1280`：2.4 GHz LoRa
- `Radio-CC1101`：Sub-GHz (G)MSK、(G)FSK、ASK、OOK
- `Radio-LR1121`：Sub-GHz + 2.4 GHz LoRa
- `Radio-SI4432`：Sub-GHz ISM

专用开发板定义会自动配置 16MB QSPI Flash 和 8MB QSPI PSRAM，请勿选择 **ESP32S3 Dev Module**。

#### 步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 在「附加开发板管理器网址」中加入 `https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json`，然后安装 Arduino-ESP32 **3.3.0-alpha1 或更高版本**。
3. 下载 [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip)，在 Arduino IDE 中选择「项目」→「加载库」→「添加 .ZIP 库」。
4. 下载 [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)，将仓库内部的库文件夹复制到 Arduino `libraries` 目录，不要只复制最外层仓库文件夹。
5. 打开「文件」→「示例」→「LilyGoLib」→「helloworld」。
6. 按上表配置开发板、选择端口，然后点击「上传」。

如果串口没有输出，请确认 **USB CDC On Boot** 已设置为 **Enabled**。

---

### LVGL

T-Watch Ultra 通过 `LilyGoLib` 使用 **LVGL 9.4.0**，库会自动处理 AMOLED 显示初始化、触摸和刷新。

```cpp
#include <LilyGoLib.h>
#include <LV_Helper.h>

void setup() {
    instance.begin();
    beginLvglHelper(instance);

    lv_obj_t *label = lv_label_create(lv_screen_active());
    lv_label_set_text(label, "T-Watch Ultra");
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);
}

void loop() {
    lv_timer_handler();
    delay(2);
}
```

---

### 外设示例

#### 显示屏（AMOLED — LilyGoLib）

```cpp
#include <LilyGoLib.h>

void setup() {
    instance.begin();
    instance.setBrightness(200);
    uint16_t w = instance.width(), h = instance.height();
    uint16_t *buf = (uint16_t *)ps_malloc(w * h * 2);
    if (buf) {
        for (int i = 0; i < w * h; i++) buf[i] = 0xF800; // 红色
        instance.pushColors(0, 0, w - 1, h - 1, buf);
        free(buf);
    }
}

void loop() {}
```

#### 触摸

```cpp
#include <LilyGoLib.h>

void setup() {
    instance.begin();
}

void loop() {
    int16_t x, y;
    if (instance.getPoint(&x, &y, 1)) {
        Serial.printf("触摸坐标: X=%d Y=%d\n", x, y);
    }
    delay(10);
}
```

#### LoRa（SX1262 — RadioLib）

```cpp
#include <LilyGoLib.h>

void setup() {
    Serial.begin(115200);
    instance.begin(); // 初始化所选射频模块及其电源
    radio.setFrequency(915.0);
}

void loop() {
    radio.transmit("Hello T-Watch Ultra");
    delay(2000);
}
```

#### GNSS（MIA-M10Q）

```cpp
#include <LilyGoLib.h>

void setup() {
    Serial.begin(115200);
    instance.begin(); // 初始化 MIA-M10Q，Serial1 使用 RX=44、TX=43
}

void loop() {
    while (Serial1.available()) instance.gps.encode(Serial1.read());
    if (instance.gps.location.isUpdated()) {
        Serial.printf("Lat: %.6f  Lon: %.6f\n",
                      instance.gps.location.lat(), instance.gps.location.lng());
    }
}
```

---

## 注意事项

- **NFC**：ST25R3916，LilyGoLib 内置 NFC 驱动，可直接使用相关示例
- **麦克风（T3902）**：PDM 麦克风，LilyGoLib 会初始化 GPIO17 时钟和 GPIO18 数据接口
- **GNSS**：MIA-M10Q 多星座定位，室外冷启动约需 60–90 秒获得定位
- **MicroSD**：最大支持 32GB，使用 FAT32 格式
- **电源键**：按住 1 秒开机，按住 6 秒关机

---

## 常见问题

**Q：无法烧录？**
A：连接 USB-C，按住 **BOOT**，按下并松开 **RST**，再松开 **BOOT**。上传完成后按 **RST** 退出下载模式。

**Q：AMOLED 显示屏上传后无显示？**
A：确认开发板为 **LilyGo T-Watch-Ultra**、**USB CDC On Boot** 为 **Enabled**，分区方案为 **16M Flash (3MB APP/9.9MB FATFS)**。
