---
title: 快速开始
show_source: false
---

# T-Connect 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |
| XPowersLib | 最新 | [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Connect.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 外设示例

#### RS485 通信

```cpp
// RS485 通道 1: TX=4, RX=5
HardwareSerial rs485(1);

void setup() {
  Serial.begin(115200);
  rs485.begin(9600, SERIAL_8N1, 5, 4); // RX, TX
}

void loop() {
  rs485.print("Hello RS485\r\n");
  delay(1000);
  while (rs485.available()) {
    Serial.write(rs485.read());
  }
}
```

#### CAN 总线（TWAI）

```cpp
#include <driver/twai.h>

// CAN TX=4, RX=5（与 RS485 共用引脚，同时只能使用其中一路）
void setup() {
  Serial.begin(115200);
  twai_general_config_t g_config = TWAI_GENERAL_CONFIG_DEFAULT(GPIO_NUM_4, GPIO_NUM_5, TWAI_MODE_NORMAL);
  twai_timing_config_t  t_config = TWAI_TIMING_CONFIG_500KBITS();
  twai_filter_config_t  f_config = TWAI_FILTER_CONFIG_ACCEPT_ALL();
  twai_driver_install(&g_config, &t_config, &f_config);
  twai_start();
  Serial.println("CAN 就绪");
}

void loop() {
  twai_message_t msg;
  msg.identifier = 0x123;
  msg.data_length_code = 4;
  msg.data[0] = 0xDE; msg.data[1] = 0xAD;
  msg.data[2] = 0xBE; msg.data[3] = 0xEF;
  twai_transmit(&msg, pdMS_TO_TICKS(1000));
  delay(1000);
}
```

#### 继电器控制

```cpp
// 继电器控制引脚 — 请查阅 utilities.h 确认
#define RELAY_PIN  15

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW); // 继电器断开
}

void loop() {
  digitalWrite(RELAY_PIN, HIGH); // 继电器吸合
  delay(2000);
  digitalWrite(RELAY_PIN, LOW);  // 继电器断开
  delay(2000);
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
