---
title: Quick Start
show_source: false
---

# T-SPE Quick Start

## Overview

T-SPE uses **ESP-IDF v5.5.3** as its primary development framework. Arduino and PlatformIO examples are not yet available — use the ESP-IDF extension in VS Code.

---

## Development Environment Setup

### 1. Install VS Code and ESP-IDF Extension

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **ESP-IDF** extension from the VS Code marketplace
3. Clone the repository (with submodules):
   ```bash
   git clone --recursive https://github.com/Xinyuan-LilyGO/T-Spe.git
   ```
   If already cloned without `--recursive`, run:
   ```bash
   git submodule update --init --recursive
   ```

### 2. Configure the ESP-IDF Extension

1. Open the ESP-IDF extension panel → **Configure ESP-IDF Extension**
2. Select **USE EXISTING SETUP** → **Search ESP-IDF in system**
3. Set the paths:
   - **IDF_PATH:** `<your_install_path>\Espressif\frameworks\esp-idf-v5.5.3`
   - **IDF_TOOLS_PATH:** `<your_install_path>\Espressif`
4. Click **Install** to complete the setup

### 3. Select and Build an Example

1. Click **SDK Configuration Editor** at the bottom of VS Code
2. Search for `Select the example to build`, choose your target example, and save
3. Click **Set Espressif device target** → select **ESP32**
4. Click **Build Project**, then **Select Flash Port**, then **Flash Project**

If flashing fails, hold the **BOOT** button and retry.

---

## Firmware Flashing (Flash Tool)

1. Open the ESP32 flash tool from the project's `tools/` directory
2. Select chip type and flash method, click **OK**
3. Select the firmware file from `firmware/`, set the address, select the port, and click burn
4. If burning fails, hold the **BOOT** button and retry

---

## Examples

| Example | Description |
| :-----: | :---------- |
| `general_test` | Factory test — exercises all peripherals |
| `iperf_ethernet` | 10BASE-T1S Ethernet throughput test |
| `rs485` | RS485 serial communication |
| `wifi` | Wi-Fi connection example |
| `wifi_http_download_file` | Download a file over HTTP via Wi-Fi |

---

## Arduino

### Peripheral Examples

#### 10BASE-T1S Ethernet Initialization (LAN8671)

T-SPE uses the Microchip LAN8671 PHY over RMII. The ESP-IDF ethernet driver manages initialization.

```c
#include "esp_eth.h"
#include "esp_event.h"
#include "esp_log.h"
#include "driver/gpio.h"

static const char *TAG = "eth_example";

static void eth_event_handler(void *arg, esp_event_base_t event_base,
                               int32_t event_id, void *event_data) {
    switch (event_id) {
    case ETHERNET_EVENT_CONNECTED:
        ESP_LOGI(TAG, "Ethernet link up");
        break;
    case ETHERNET_EVENT_DISCONNECTED:
        ESP_LOGI(TAG, "Ethernet link down");
        break;
    case ETHERNET_EVENT_START:
        ESP_LOGI(TAG, "Ethernet started");
        break;
    default:
        break;
    }
}

static void got_ip_event_handler(void *arg, esp_event_base_t event_base,
                                  int32_t event_id, void *event_data) {
    ip_event_got_ip_t *event = (ip_event_got_ip_t *)event_data;
    ESP_LOGI(TAG, "Got IP: " IPSTR, IP2STR(&event->ip_info.ip));
}

void app_main(void) {
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    ESP_ERROR_CHECK(esp_event_handler_register(ETH_EVENT, ESP_EVENT_ANY_ID,
                                               &eth_event_handler, NULL));
    ESP_ERROR_CHECK(esp_event_handler_register(IP_EVENT, IP_EVENT_ETH_GOT_IP,
                                               &got_ip_event_handler, NULL));

    // MAC and PHY configuration — see general_test example for full pinout
    eth_mac_config_t mac_config = ETH_MAC_DEFAULT_CONFIG();
    eth_phy_config_t phy_config = ETH_PHY_DEFAULT_CONFIG();

    // Create MAC (internal EMAC with RMII)
    esp_eth_mac_t *mac = esp_eth_mac_new_esp32(&mac_config);
    // Create PHY (LAN8671 / generic RMII PHY)
    esp_eth_phy_t *phy = esp_eth_phy_new_lan87xx(&phy_config);

    esp_eth_config_t config = ETH_DEFAULT_CONFIG(mac, phy);
    esp_eth_handle_t eth_handle = NULL;
    ESP_ERROR_CHECK(esp_eth_driver_install(&config, &eth_handle));

    // Attach to TCP/IP stack
    esp_netif_config_t netif_config = ESP_NETIF_DEFAULT_ETH();
    esp_netif_t *eth_netif = esp_netif_new(&netif_config);
    ESP_ERROR_CHECK(esp_netif_attach(eth_netif, esp_eth_new_netif_glue(eth_handle)));

    ESP_ERROR_CHECK(esp_eth_start(eth_handle));
}
```

> For exact RMII GPIO assignments (MDC, MDIO, REF_CLK, TXD0/1, RXD0/1, CRS_DV) refer to the pin header:  
> [t_spe_config.h](https://github.com/Xinyuan-LilyGO/lilygo_device_driver/blob/main/src/device/t_spe/t_spe_config.h)

#### RS485 Communication

T-SPE has an onboard TD301D485H-A RS485 transceiver connected to an ESP32 UART.

```c
#include "driver/uart.h"
#include "driver/gpio.h"

// RS485 UART — refer to t_spe_config.h for actual pin numbers
#define RS485_UART_NUM   UART_NUM_1
#define RS485_TX_PIN     GPIO_NUM_XX
#define RS485_RX_PIN     GPIO_NUM_XX
#define RS485_DE_PIN     GPIO_NUM_XX  // Driver Enable (DE/RE)

void rs485_init(void) {
    uart_config_t uart_config = {
        .baud_rate  = 115200,
        .data_bits  = UART_DATA_8_BITS,
        .parity     = UART_PARITY_DISABLE,
        .stop_bits  = UART_STOP_BITS_1,
        .flow_ctrl  = UART_HW_FLOWCTRL_DISABLE,
        .source_clk = UART_SCLK_DEFAULT,
    };
    uart_driver_install(RS485_UART_NUM, 256, 256, 0, NULL, 0);
    uart_param_config(RS485_UART_NUM, &uart_config);
    uart_set_pin(RS485_UART_NUM, RS485_TX_PIN, RS485_RX_PIN,
                 RS485_DE_PIN, UART_PIN_NO_CHANGE);

    // Half-duplex RS485 mode — ESP-IDF handles DE automatically
    uart_set_mode(RS485_UART_NUM, UART_MODE_RS485_HALF_DUPLEX);
}

void app_main(void) {
    rs485_init();

    const char *msg = "Hello RS485\r\n";
    uart_write_bytes(RS485_UART_NUM, msg, strlen(msg));

    uint8_t buf[128];
    int len = uart_read_bytes(RS485_UART_NUM, buf, sizeof(buf) - 1,
                              pdMS_TO_TICKS(100));
    if (len > 0) {
        buf[len] = 0;
        printf("RS485 RX: %s\n", (char *)buf);
    }
}
```

#### Wi-Fi HTTP Download

```c
#include "esp_wifi.h"
#include "esp_http_client.h"

// See wifi_http_download_file example in the repository for the full
// initialization sequence (NVS init, netif init, event loop, sta config)

esp_http_client_config_t config = {
    .url = "http://example.com/file.bin",
};
esp_http_client_handle_t client = esp_http_client_init(&config);

esp_err_t err = esp_http_client_perform(client);
if (err == ESP_OK) {
    printf("HTTP status: %d, content-length: %lld\n",
           esp_http_client_get_status_code(client),
           esp_http_client_get_content_length(client));
}
esp_http_client_cleanup(client);
```

---

## FAQ

**Q: What development frameworks are supported?**  
A: Official support is for **ESP-IDF v5.5.3**. Arduino and PlatformIO examples are not yet provided.

**Q: Upload keeps failing — what should I do?**  
A: Hold the **BOOT** button and retry flashing.

**Q: What is the input voltage range?**  
A: T-SPE accepts **5–75 V DC**. Do not exceed 75 V to avoid damage.

**Q: What is 10BASE-T1S?**  
A: 10BASE-T1S is an IEEE 802.3cg Single Pair Ethernet standard operating at 10 Mbps over a single twisted pair, designed for short-range industrial and automotive networks (up to 25 m point-to-point, up to 15 nodes in multidrop mode).

**Q: Where are the GPIO pin assignments?**  
A: Refer to [t_spe_config.h](https://github.com/Xinyuan-LilyGO/lilygo_device_driver/blob/main/src/device/t_spe/t_spe_config.h) for all GPIO mappings.
