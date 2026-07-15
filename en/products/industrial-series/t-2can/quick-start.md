---
title: Quick Start
show_source: false
---

# T-2CAN Quick Start

## Required Libraries

Install the following libraries via the Arduino IDE Library Manager, or copy the `libraries/` folder from the repository into your Arduino libraries directory:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| mcp2515 | latest | [GitHub](https://github.com/autowp/arduino-mcp2515) |
| FastLED | latest | [GitHub](https://github.com/FastLED/FastLED) |

---

## Arduino

### Arduino IDE

#### 1. Install ESP32 Board Support

1. Open Arduino IDE → **File** → **Preferences**
2. Add the following URL to "Additional boards manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**, search `esp32`, install **esp32 by Espressif Systems**

#### 2. Install Libraries

Copy all folders from the project's `libraries/` directory into your Arduino libraries folder (e.g. `C:\Users\YourName\Documents\Arduino\libraries`).

#### 3. Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Port | Your COM port |
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

> **Note:** When using USB for serial debug, keep **USB CDC On Boot** as **Enabled**. To use the external UART interface instead, set it to **Disabled**.

#### 4. Upload

1. Connect the board via USB-C
2. Open the example sketch
3. Click **Upload**

If upload fails, hold the **BOOT** button and retry.

---

### PlatformIO

#### 1. Setup

1. Install [Visual Studio Code](https://code.visualstudio.com/) and **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-2Can.git
   ```
3. Open the cloned folder in VS Code

#### 2. Select Example

Open `platformio.ini`, uncomment the `default_envs` line for the desired example. Only one line should be active at a time.

#### 3. Build and Upload

- Click **✓** to build
- Connect via USB-C
- Click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `can` | Basic dual CAN bus communication (MCP2515 + TWAI) |
| `original_test` | Factory test program |

---

### Peripheral Examples

#### CAN1 Send (MCP2515 via SPI)

CAN bus 1 uses the external MCP2515 controller connected via SPI.

```cpp
#include <mcp2515.h>

// SPI pins — refer to pin_config.h in the project
MCP2515 mcp2515(/* CS pin */);

struct can_frame txMsg;

void setup() {
    Serial.begin(115200);
    mcp2515.reset();
    mcp2515.setBitrate(CAN_500KBPS, MCP_8MHZ);
    mcp2515.setNormalMode();
    Serial.println("MCP2515 CAN1 ready");
}

void loop() {
    txMsg.can_id  = 0x123;
    txMsg.can_dlc = 8;
    for (int i = 0; i < 8; i++) txMsg.data[i] = i;

    if (mcp2515.sendMessage(&txMsg) == MCP2515::ERROR_OK) {
        Serial.println("CAN1 frame sent");
    }
    delay(1000);
}
```

#### CAN1 Receive (MCP2515)

```cpp
#include <mcp2515.h>

MCP2515 mcp2515(/* CS pin */);
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
        Serial.print("  Data:");
        for (int i = 0; i < rxMsg.can_dlc; i++) {
            Serial.print(" 0x");
            Serial.print(rxMsg.data[i], HEX);
        }
        Serial.println();
    }
}
```

#### CAN2 Send (ESP32-S3 Built-in TWAI)

CAN bus 2 uses the ESP32-S3's built-in TWAI controller.

```cpp
#include "driver/twai.h"

// TX and RX GPIO — refer to pin_config.h
#define CAN2_TX_PIN  GPIO_NUM_XX
#define CAN2_RX_PIN  GPIO_NUM_XX

void setup() {
    Serial.begin(115200);

    twai_general_config_t g_config =
        TWAI_GENERAL_CONFIG_DEFAULT(CAN2_TX_PIN, CAN2_RX_PIN, TWAI_MODE_NORMAL);
    twai_timing_config_t  t_config = TWAI_TIMING_CONFIG_500KBITS();
    twai_filter_config_t  f_config = TWAI_FILTER_CONFIG_ACCEPT_ALL();

    if (twai_driver_install(&g_config, &t_config, &f_config) == ESP_OK) {
        Serial.println("TWAI driver installed");
    }
    twai_start();
    Serial.println("CAN2 TWAI started");
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
        Serial.println("CAN2 frame sent");
    }
    delay(1000);
}
```

#### CAN2 Receive (TWAI)

```cpp
#include "driver/twai.h"

// Install and start TWAI in setup() as shown above

void loop() {
    twai_message_t rx_msg;
    if (twai_receive(&rx_msg, pdMS_TO_TICKS(100)) == ESP_OK) {
        Serial.print("CAN2 ID: 0x");
        Serial.print(rx_msg.identifier, HEX);
        Serial.print("  DLC: ");
        Serial.print(rx_msg.data_length_code);
        Serial.print("  Data:");
        for (int i = 0; i < rx_msg.data_length_code; i++) {
            Serial.print(" 0x");
            Serial.print(rx_msg.data[i], HEX);
        }
        Serial.println();
    }
}
```

#### Dual-Bus Bridge Example

Forward frames received on CAN2 (TWAI) out to CAN1 (MCP2515):

```cpp
#include <mcp2515.h>
#include "driver/twai.h"

MCP2515 mcp2515(/* CS pin */);

void setup() {
    Serial.begin(115200);

    // Init CAN1 (MCP2515)
    mcp2515.reset();
    mcp2515.setBitrate(CAN_500KBPS, MCP_8MHZ);
    mcp2515.setNormalMode();

    // Init CAN2 (TWAI)
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
        Serial.printf("Bridged ID 0x%X from CAN2 → CAN1\n", rx.identifier);
    }
}
```

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold the **BOOT** button and retry uploading.

**Q: Why is there no output on the external UART interface?**  
A: The project defaults USB to UART0. To use the external UART interface, set **USB CDC On Boot** to **Disabled** in Arduino IDE Tools, or set `-DARDUINO_USB_CDC_ON_BOOT=0` in `platformio.ini`.

**Q: What is the CAN bus voltage isolation for?**  
A: T-2CAN uses SGND/DGND signal isolation to prevent ground loops and protect the ESP32 from high-voltage transients common in industrial and automotive environments.

**Q: Can I use a 12 V power supply?**  
A: Yes. T-2CAN accepts 12–24 V DC on the power input terminals. It can also be powered via USB-C (5 V).

**Q: What CAN bitrate can I use?**  
A: MCP2515 (CAN1) supports up to 1 Mb/s. ESP32-S3 TWAI (CAN2) supports standard CAN 2.0B rates. Both buses must run at the same bitrate as the other nodes on the bus.
