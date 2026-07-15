---
title: 快速开始
show_source: false
---

# T-2CAN 快速开始

## 依赖库

通过 Arduino IDE 库管理器安装以下库，或将项目 `libraries/` 目录复制到 Arduino 库目录：

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| mcp2515 | 最新 | [GitHub](https://github.com/autowp/arduino-mcp2515) |
| FastLED | 最新 | [GitHub](https://github.com/FastLED/FastLED) |

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

如果上传失败，按住 **BOOT** 按钮后重试。

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

打开 `platformio.ini`，取消注释 `default_envs` 行以选择所需示例，确保同时只有一行生效。

#### 3. 编译与上传

- 点击 **✓** 编译
- 通过 USB-C 连接开发板
- 点击 **→** 上传

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `can` | 双路 CAN 总线通信示例（MCP2515 + TWAI） |
| `original_test` | 出厂测试程序 |

---

### 外设示例

#### CAN1 发送（MCP2515，SPI 接口）

CAN 总线 1 使用外置 MCP2515 控制器，通过 SPI 与 ESP32-S3 通信。

```cpp
#include <mcp2515.h>

// SPI 片选引脚 — 参考项目 pin_config.h
MCP2515 mcp2515(/* CS 引脚 */);

struct can_frame txMsg;

void setup() {
    Serial.begin(115200);
    mcp2515.reset();
    mcp2515.setBitrate(CAN_500KBPS, MCP_8MHZ);
    mcp2515.setNormalMode();
    Serial.println("MCP2515 CAN1 就绪");
}

void loop() {
    txMsg.can_id  = 0x123;
    txMsg.can_dlc = 8;
    for (int i = 0; i < 8; i++) txMsg.data[i] = i;

    if (mcp2515.sendMessage(&txMsg) == MCP2515::ERROR_OK) {
        Serial.println("CAN1 帧发送成功");
    }
    delay(1000);
}
```

#### CAN1 接收（MCP2515）

```cpp
#include <mcp2515.h>

MCP2515 mcp2515(/* CS 引脚 */);
struct can_frame rxMsg;

void setup() {
    Serial.begin(115200);
    mcp2515.reset();
    mcp2515.setBitrate(CAN_500KBPS, MCP_8MHZ);
    mcp2515.setNormalMode();
}

void loop() {
    if (mcp2515.readMessage(&rxMsg) == MCP2515::ERROR_OK) {
        Serial.print("CAN1 ID: 0x");
        Serial.print(rxMsg.can_id, HEX);
        Serial.print("  数据:");
        for (int i = 0; i < rxMsg.can_dlc; i++) {
            Serial.print(" 0x");
            Serial.print(rxMsg.data[i], HEX);
        }
        Serial.println();
    }
}
```

#### CAN2 发送（ESP32-S3 内置 TWAI）

CAN 总线 2 使用 ESP32-S3 内置 TWAI 控制器。

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

    if (twai_driver_install(&g_config, &t_config, &f_config) == ESP_OK) {
        Serial.println("TWAI 驱动安装成功");
    }
    twai_start();
    Serial.println("CAN2 TWAI 已启动");
}

void loop() {
    twai_message_t tx_msg = {};
    tx_msg.identifier = 0x456;
    tx_msg.data_length_code = 4;
    tx_msg.data[0] = 0xDE;
    tx_msg.data[1] = 0xAD;
    tx_msg.data[2] = 0xBE;
    tx_msg.data[3] = 0xEF;

    if (twai_transmit(&tx_msg, pdMS_TO_TICKS(100)) == ESP_OK) {
        Serial.println("CAN2 帧发送成功");
    }
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

#### 双总线桥接示例

将 CAN2（TWAI）收到的帧转发到 CAN1（MCP2515）：

```cpp
#include <mcp2515.h>
#include "driver/twai.h"

MCP2515 mcp2515(/* CS 引脚 */);

void setup() {
    Serial.begin(115200);

    // 初始化 CAN1（MCP2515）
    mcp2515.reset();
    mcp2515.setBitrate(CAN_500KBPS, MCP_8MHZ);
    mcp2515.setNormalMode();

    // 初始化 CAN2（TWAI）
    twai_general_config_t g_config =
        TWAI_GENERAL_CONFIG_DEFAULT(CAN2_TX_PIN, CAN2_RX_PIN, TWAI_MODE_NORMAL);
    twai_timing_config_t  t_config = TWAI_TIMING_CONFIG_500KBITS();
    twai_filter_config_t  f_config = TWAI_FILTER_CONFIG_ACCEPT_ALL();
    twai_driver_install(&g_config, &t_config, &f_config);
    twai_start();
}

void loop() {
    twai_message_t rx;
    if (twai_receive(&rx, pdMS_TO_TICKS(10)) == ESP_OK) {
        struct can_frame tx;
        tx.can_id  = rx.identifier;
        tx.can_dlc = rx.data_length_code;
        memcpy(tx.data, rx.data, rx.data_length_code);
        mcp2515.sendMessage(&tx);
        Serial.printf("桥接 ID 0x%X：CAN2 → CAN1\n", rx.identifier);
    }
}
```

---

## 常见问题

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT** 按键再重新烧录。

**Q：外部 UART 接口没有输出？**  
A：默认 USB 作为 UART0 输出。如需使用外部 UART 接口，在 Arduino IDE 工具菜单将 **USB CDC On Boot** 设为 **Disabled**，或在 `platformio.ini` 中设置 `-DARDUINO_USB_CDC_ON_BOOT=0`。

**Q：CAN 总线信号隔离有什么用？**  
A：T-2CAN 采用 SGND/DGND 信号隔离设计，防止地环路干扰，保护 ESP32 免受工业和车载环境中的高压瞬变冲击。

**Q：支持 12V 供电吗？**  
A：支持。T-2CAN 电源输入端子接受 12–24V DC 宽压输入，也可通过 USB-C（5V）供电。

**Q：CAN 总线速率如何选择？**  
A：MCP2515（CAN1）最高支持 1 Mb/s；ESP32-S3 TWAI（CAN2）支持标准 CAN 2.0B 速率。两路总线各自的速率必须与同一总线上的其他节点一致。
