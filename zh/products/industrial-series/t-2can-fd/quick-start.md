---
title: 快速开始
show_source: false
---

# T-2CAN-FD 快速开始

## 依赖库

安装以下库，或将项目 `libraries/` 目录复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| Longan_CANFD | 最新 | [GitHub](https://github.com/Longan-Labs/Longan_CANFD) |
| FastLED | 最新 | [GitHub](https://github.com/FastLED/FastLED) |

> Longan_CANFD 库提供 MCP2518FD 支持。MCP2518FD 完全向下兼容 CAN 2.0B 帧。

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
| :----: | :----: |
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

> **提示：** 使用 USB 串口调试时，保持 **USB CDC On Boot** 为 **Enabled**。如需使用外部 UART 接口，请改为 **Disabled**。

#### 4. 上传

1. 通过 USB-C 连接开发板
2. 打开示例程序
3. 点击「上传」

如果上传失败，按住 **BOOT-0** 按钮后重试。

---

### PlatformIO

#### 1. 环境配置

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-2Can.git
   ```
3. 在 VS Code 中打开克隆的文件夹

#### 2. 选择示例

打开 `platformio.ini`，取消注释 T-2Can-FD 对应的 `default_envs` 行，确保同时只有一行生效。

#### 3. 编译与上传

- 点击 **✓** 编译
- 通过 USB-C 连接开发板
- 点击 **→** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `can` | CAN FD 通信示例（MCP2518FD + TWAI，需适配 CAN FD） |
| `original_test` | 出厂测试程序 |

---

### 外设示例

#### CAN1 发送 — CAN FD 帧（MCP2518FD，SPI 接口）

CAN 总线 1 使用外置 MCP2518FD 控制器，通过 SPI 通信。MCP2518FD 支持 CAN FD，最大有效载荷 64 字节，数据段速率更高。

```cpp
#include <CANFD.h>   // Longan_CANFD

// CS 引脚 — 参考项目 pin_config.h
CANFD canfd(/* CS 引脚 */);

void setup() {
    Serial.begin(115200);

    // 仲裁速率 500 kbps，数据段速率 2 Mbps
    if (canfd.begin(500000, 2000000) != 0) {
        Serial.println("MCP2518FD 初始化失败");
        while (1);
    }
    Serial.println("CAN FD 就绪");
}

void loop() {
    unsigned char buf[8] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08};

    // 发送 CAN FD 帧：ID=0x123，8 字节
    if (canfd.sendMsgBuf(0x123, 0, 8, buf) == CAN_OK) {
        Serial.println("CAN FD 帧发送成功");
    }
    delay(1000);
}
```

#### CAN1 发送 — 兼容 CAN 2.0B 帧（MCP2518FD）

```cpp
#include <CANFD.h>

CANFD canfd(/* CS 引脚 */);

void setup() {
    Serial.begin(115200);
    // 经典 CAN 2.0B 模式：仲裁速率与数据速率相同
    canfd.begin(500000, 500000);
}

void loop() {
    unsigned char buf[8] = {0xDE, 0xAD, 0xBE, 0xEF, 0x00, 0x00, 0x00, 0x00};
    canfd.sendMsgBuf(0x456, 0, 8, buf);
    delay(1000);
}
```

#### CAN1 接收（MCP2518FD）

```cpp
#include <CANFD.h>

CANFD canfd(/* CS 引脚 */);

void setup() {
    Serial.begin(115200);
    canfd.begin(500000, 2000000);
}

void loop() {
    unsigned char len = 0;
    unsigned char buf[64];  // CAN FD 最大有效载荷 64 字节

    if (canfd.checkReceive() == CAN_MSGAVAIL) {
        canfd.readMsgBuf(&len, buf);
        unsigned long id = canfd.getCanId();
        Serial.print("CAN1 ID: 0x");
        Serial.print(id, HEX);
        Serial.print("  长度: ");
        Serial.print(len);
        Serial.print("  数据:");
        for (int i = 0; i < len; i++) {
            Serial.print(" 0x");
            Serial.print(buf[i], HEX);
        }
        Serial.println();
    }
}
```

#### CAN2 发送（ESP32-S3 内置 TWAI — CAN 2.0B）

CAN 总线 2 使用 ESP32-S3 内置 TWAI 控制器，仅支持 CAN 2.0B（不支持 CAN FD）。

```cpp
#include "driver/twai.h"

// TX / RX 引脚 — 参考项目 pin_config.h
#define CAN2_TX_PIN  GPIO_NUM_XX
#define CAN2_RX_PIN  GPIO_NUM_XX

void setup() {
    Serial.begin(115200);

    twai_general_config_t g_config =
        TWAI_GENERAL_CONFIG_DEFAULT(CAN2_TX_PIN, CAN2_RX_PIN, TWAI_MODE_NORMAL);
    twai_timing_config_t  t_config = TWAI_TIMING_CONFIG_500KBITS();
    twai_filter_config_t  f_config = TWAI_FILTER_CONFIG_ACCEPT_ALL();

    twai_driver_install(&g_config, &t_config, &f_config);
    twai_start();
    Serial.println("CAN2 TWAI 已启动");
}

void loop() {
    twai_message_t tx_msg = {};
    tx_msg.identifier = 0x789;
    tx_msg.data_length_code = 8;
    for (int i = 0; i < 8; i++) tx_msg.data[i] = i;

    twai_transmit(&tx_msg, pdMS_TO_TICKS(100));
    delay(1000);
}
```

#### CAN2 接收（TWAI）

```cpp
#include "driver/twai.h"

// 在 setup() 中安装并启动 TWAI（见上方示例）

void loop() {
    twai_message_t rx_msg;
    if (twai_receive(&rx_msg, pdMS_TO_TICKS(100)) == ESP_OK) {
        Serial.print("CAN2 ID: 0x");
        Serial.print(rx_msg.identifier, HEX);
        Serial.print("  DLC: ");
        Serial.print(rx_msg.data_length_code);
        Serial.print("  数据:");
        for (int i = 0; i < rx_msg.data_length_code; i++) {
            Serial.print(" 0x");
            Serial.print(rx_msg.data[i], HEX);
        }
        Serial.println();
    }
}
```

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT-0** 按键再重新烧录。

**Q：T-2CAN 和 T-2CAN-FD 有什么区别？**  
A：T-2CAN 使用 MCP2515（仅 CAN 2.0B，最高 1 Mb/s）。T-2CAN-FD 使用 MCP2518FD，支持 CAN FD——更高的数据段速率（最高 8 Mb/s）及最大 64 字节有效载荷。两者固件不兼容。

**Q：外部 UART 接口没有输出？**  
A：默认 USB 作为 UART0 输出。如需使用外部 UART 接口，在 Arduino IDE 工具菜单将 **USB CDC On Boot** 设为 **Disabled**，或在 `platformio.ini` 中设置 `-DARDUINO_USB_CDC_ON_BOOT=0`。

**Q：MCP2518FD 能与经典 CAN 2.0B 节点通信吗？**  
A：可以。MCP2518FD 完全向下兼容。将数据段速率设置与仲裁速率相同，即可在经典 CAN 2.0B 模式下工作。

**Q：支持哪些 CAN FD 速率组合？**  
A：常见组合有 500 kbps 仲裁 / 2 Mbps 数据，或 1 Mbps / 4 Mbps。总线两端节点必须使用相同速率。
