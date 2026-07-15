---
title: Quick Start
show_source: false
---

# T-2CAN-FD Quick Start

## Required Libraries

Install the following libraries, or copy the `libraries/` folder from the repository into your Arduino libraries directory:

| Library | Version | Source |
| :-----: | :-----: | :----: |
| Longan_CANFD | latest | [GitHub](https://github.com/Longan-Labs/Longan_CANFD) |
| FastLED | latest | [GitHub](https://github.com/FastLED/FastLED) |

> The Longan_CANFD library provides MCP2518FD support. The MCP2518FD is fully backwards-compatible with CAN 2.0B frames.

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

If upload fails, hold the **BOOT-0** button and retry.

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

Open `platformio.ini`, uncomment the `default_envs` line for the T-2Can-FD configuration. Only one line should be active at a time.

#### 3. Build and Upload

- Click **✓** to build
- Connect via USB-C
- Click **→** to upload

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `can` | CAN FD communication example (MCP2518FD + TWAI, requires CAN FD adaptation) |
| `original_test` | Factory test program |

---

### Peripheral Examples

#### CAN1 Send — CAN FD Frame (MCP2518FD via SPI)

CAN bus 1 uses the external MCP2518FD controller over SPI. MCP2518FD supports CAN FD with up to 64-byte payloads and higher data-phase bitrates.

```cpp
#include <CANFD.h>   // Longan_CANFD

// CS pin — refer to pin_config.h
CANFD canfd(/* CS pin */);

void setup() {
    Serial.begin(115200);

    // Arbitration bitrate 500 kbps, data bitrate 2 Mbps
    if (canfd.begin(500000, 2000000) != 0) {
        Serial.println("MCP2518FD init failed");
        while (1);
    }
    Serial.println("CAN FD ready");
}

void loop() {
    unsigned char buf[8] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08};

    // send CAN FD frame: ID=0x123, 8 bytes
    if (canfd.sendMsgBuf(0x123, 0, 8, buf) == CAN_OK) {
        Serial.println("CAN FD frame sent");
    }
    delay(1000);
}
```

#### CAN1 Send — CAN 2.0 Compatible Frame (MCP2518FD)

```cpp
#include <CANFD.h>

CANFD canfd(/* CS pin */);

void setup() {
    Serial.begin(115200);
    // Classic CAN 2.0B mode: same arbitration and data bitrate
    canfd.begin(500000, 500000);
}

void loop() {
    unsigned char buf[8] = {0xDE, 0xAD, 0xBE, 0xEF, 0x00, 0x00, 0x00, 0x00};
    canfd.sendMsgBuf(0x456, 0, 8, buf);
    delay(1000);
}
```

#### CAN1 Receive (MCP2518FD)

```cpp
#include <CANFD.h>

CANFD canfd(/* CS pin */);

void setup() {
    Serial.begin(115200);
    canfd.begin(500000, 2000000);
}

void loop() {
    unsigned char len = 0;
    unsigned char buf[64];  // CAN FD max payload = 64 bytes

    if (canfd.checkReceive() == CAN_MSGAVAIL) {
        canfd.readMsgBuf(&len, buf);
        unsigned long id = canfd.getCanId();
        Serial.print("CAN1 ID: 0x");
        Serial.print(id, HEX);
        Serial.print("  Len: ");
        Serial.print(len);
        Serial.print("  Data:");
        for (int i = 0; i < len; i++) {
            Serial.print(" 0x");
            Serial.print(buf[i], HEX);
        }
        Serial.println();
    }
}
```

#### CAN2 Send (ESP32-S3 Built-in TWAI — CAN 2.0B)

CAN bus 2 uses the ESP32-S3's built-in TWAI controller. TWAI supports CAN 2.0B only (no CAN FD).

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

    twai_driver_install(&g_config, &t_config, &f_config);
    twai_start();
    Serial.println("CAN2 TWAI started");
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

---

## FAQ

**Q: Upload keeps failing — what should I do?**  
A: Hold the **BOOT-0** button and retry uploading.

**Q: What is the difference between T-2CAN and T-2CAN-FD?**  
A: T-2CAN uses an MCP2515 (CAN 2.0B only, max 1 Mb/s). T-2CAN-FD uses an MCP2518FD which supports CAN FD — higher data-phase bitrates (up to 8 Mb/s) and up to 64-byte payloads. T-2CAN-FD firmware is not compatible with T-2CAN.

**Q: Why is there no output on the external UART interface?**  
A: The project defaults USB to UART0. To use the external UART interface, set **USB CDC On Boot** to **Disabled** in Arduino IDE Tools, or set `-DARDUINO_USB_CDC_ON_BOOT=0` in `platformio.ini`.

**Q: Can MCP2518FD communicate with classic CAN 2.0B nodes?**  
A: Yes. MCP2518FD is fully backwards-compatible. Set the data-phase bitrate equal to the arbitration bitrate to operate in classic CAN 2.0B mode.

**Q: What CAN FD bitrates are supported?**  
A: Common combinations include 500 kbps arbitration / 2 Mbps data, or 1 Mbps / 4 Mbps. Both ends of the bus must use the same bitrates.
