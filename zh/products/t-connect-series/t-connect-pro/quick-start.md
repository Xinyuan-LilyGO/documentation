---
title: 快速开始
show_source: false
---

# T-Connect Pro 快速开始
## 依赖库
| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| RadioLib | 最新| [GitHub](https://github.com/jgromes/RadioLib) |
| LovyanGFX | 最新| [GitHub](https://github.com/lovyan03/LovyanGFX) |
| LilyGo-display-library | 最新 | [Xinyuan-LilyGO/LilyGo-display-library](https://github.com/Xinyuan-LilyGO/LilyGo-display-library) |
| SensorLib | 最新| [GitHub](https://github.com/lewisxhe/SensorsLib) |
| XPowersLib | 最新| [GitHub](https://github.com/lewisxhe/XPowersLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Connect-Pro.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **Build** 编译，连接 USB-C，点击 **Upload** 上传

---

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
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Mode | **QIO 80 MHz** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

#### 3. 上传

连接 USB-C，打开示例，点击「上传」。 
若上传失败：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
---

### 外设示例

#### 显示屏（ST7796 TFT）
```cpp
#define LILYGO_LGFX_USE_T_CONNECT_PRO
#include <LilyGo_LovyanGFX.h>

LilyGo_T_Connect_Pro display;

void setup() {
  display.begin(0);
  display.setTextColor(TFT_WHITE, TFT_BLACK);
  display.setTextSize(2);
  display.drawString("T-Connect Pro", 30, 230);
}

void loop() {}
```

#### LoRa（SX1262）
```cpp
#include <RadioLib.h>

// SX1262 引脚：CS=14，DIO1=45，RST=42，BUSY=38
SX1262 radio = new Module(14, 45, 42, 38);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败 "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1262 就绪");
}

void loop() {
  int state = radio.transmit("Hello T-Connect Pro");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功);
  delay(2000);
}
```

#### RS485 通信

```cpp
HardwareSerial rs485(1);

void setup() {
  Serial.begin(115200);
  // RS485 TX/RX 引脚 请查阅原理图
  rs485.begin(9600, SERIAL_8N1, 17, 18);
}

void loop() {
  rs485.print("Hello RS485\r\n");
  delay(1000);
  while (rs485.available()) Serial.write(rs485.read());
}
```

#### 以太网（W5500
```cpp
#include <Ethernet.h>
#include <SPI.h>

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
// W5500 CS 引脚
#define ETH_CS  10

void setup() {
  Serial.begin(115200);
  Ethernet.init(ETH_CS);
  if (Ethernet.begin(mac)) {
    Serial.print("IP: ");
    Serial.println(Ethernet.localIP());
  } else {
    Serial.println("以太网初始化失败");
  }
}

void loop() { Ethernet.maintain(); }
```

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `Original_Test` | 出厂程序 |
| `CAN` | CAN 总线通信 |
| `RS485` | RS485 通信 |
| `Ethernet_HTTP` | 以太网 HTTP 客户端|
| `Ethernet_Relay` | 以太网控制继电器 |
| `GFX` | 显示测试 |
| `SX1262_Receive_Interrupt` | LoRa 中断接收 |
| `SX126x_PingPong` | LoRa 收发测试 |
| `ttn_otaa` | TTN OTAA LoRaWAN 入网 |

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
**Q：输入电压范围是多少？**  
A：T-Connect Pro 支持 **12-24 V DC** 宽压输入。请勿同时连接 USB 和外部直流电源（具体请查阅原理图）
**Q：RS485 / CAN 无响应？**  
A：确认总线两端均已120 Ω 终端电阻。