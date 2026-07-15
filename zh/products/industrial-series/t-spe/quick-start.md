---
title: 快速开始
show_source: false
---

# T-SPE 快速开始

## 概述

T-SPE 主要使用 **ESP-IDF v5.5.3** 进行开发。目前暂未提供 Arduino 或 PlatformIO 示例，请使用 VS Code 中的 ESP-IDF 扩展。

---

## 开发环境搭建

### 1. 安装 VS Code 与 ESP-IDF 扩展

1. 安装 [Visual Studio Code](https://code.visualstudio.com/)
2. 在 VS Code 扩展市场搜索并安装 **ESP-IDF** 扩展
3. 克隆仓库（包含子模块）：
   ```bash
   git clone --recursive https://github.com/Xinyuan-LilyGO/T-Spe.git
   ```
   若已克隆但未带子模块，执行：
   ```bash
   git submodule update --init --recursive
   ```

### 2. 配置 ESP-IDF 扩展

1. 打开 ESP-IDF 扩展面板 → **Configure ESP-IDF Extension**
2. 选择 **USE EXISTING SETUP** → **Search ESP-IDF in system**
3. 设置路径：
   - **IDF_PATH：** `<你的安装路径>\Espressif\frameworks\esp-idf-v5.5.3`
   - **IDF_TOOLS_PATH：** `<你的安装路径>\Espressif`
4. 点击 **Install** 完成安装

### 3. 选择并编译示例

1. 点击 VS Code 底部的 **SDK Configuration Editor**
2. 搜索 `Select the example to build`，选择目标示例并保存
3. 点击 **Set Espressif device target** → 选择 **ESP32**
4. 点击 **Build Project**，完成后依次点击 **Select Flash Port** → **Flash Project**

若烧录失败，按住 **BOOT** 按键后重试。

---

## 固件烧录（烧录工具）

1. 打开项目 `tools/` 目录中的 ESP32 烧录工具
2. 选择芯片型号和烧录方式，点击 **OK**
3. 选择 `firmware/` 目录中的固件文件，设置地址，选择端口，点击烧录
4. 若烧录失败，按住 **BOOT** 按键后重试

---

## 示例程序

| 示例 | 说明 |
| :--: | :--- |
| `general_test` | 出厂测试，覆盖全部外设 |
| `iperf_ethernet` | 10BASE-T1S 以太网吞吐量测试 |
| `rs485` | RS485 串口通信示例 |
| `wifi` | Wi-Fi 连接示例 |
| `wifi_http_download_file` | 通过 Wi-Fi 进行 HTTP 文件下载 |

---

## Arduino

### 外设示例

#### 10BASE-T1S 以太网初始化（LAN8671）

T-SPE 通过 RMII 接口使用 Microchip LAN8671 PHY，由 ESP-IDF 以太网驱动管理初始化。

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
        ESP_LOGI(TAG, "以太网链路已连接");
        break;
    case ETHERNET_EVENT_DISCONNECTED:
        ESP_LOGI(TAG, "以太网链路已断开");
        break;
    case ETHERNET_EVENT_START:
        ESP_LOGI(TAG, "以太网已启动");
        break;
    default:
        break;
    }
}

static void got_ip_event_handler(void *arg, esp_event_base_t event_base,
                                  int32_t event_id, void *event_data) {
    ip_event_got_ip_t *event = (ip_event_got_ip_t *)event_data;
    ESP_LOGI(TAG, "获取 IP: " IPSTR, IP2STR(&event->ip_info.ip));
}

void app_main(void) {
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    ESP_ERROR_CHECK(esp_event_handler_register(ETH_EVENT, ESP_EVENT_ANY_ID,
                                               &eth_event_handler, NULL));
    ESP_ERROR_CHECK(esp_event_handler_register(IP_EVENT, IP_EVENT_ETH_GOT_IP,
                                               &got_ip_event_handler, NULL));

    // MAC 和 PHY 配置 — 完整引脚定义参考 general_test 示例
    eth_mac_config_t mac_config = ETH_MAC_DEFAULT_CONFIG();
    eth_phy_config_t phy_config = ETH_PHY_DEFAULT_CONFIG();

    // 创建 MAC（内部 EMAC，RMII 模式）
    esp_eth_mac_t *mac = esp_eth_mac_new_esp32(&mac_config);
    // 创建 PHY（LAN8671 / 通用 RMII PHY）
    esp_eth_phy_t *phy = esp_eth_phy_new_lan87xx(&phy_config);

    esp_eth_config_t config = ETH_DEFAULT_CONFIG(mac, phy);
    esp_eth_handle_t eth_handle = NULL;
    ESP_ERROR_CHECK(esp_eth_driver_install(&config, &eth_handle));

    // 挂载到 TCP/IP 协议栈
    esp_netif_config_t netif_config = ESP_NETIF_DEFAULT_ETH();
    esp_netif_t *eth_netif = esp_netif_new(&netif_config);
    ESP_ERROR_CHECK(esp_netif_attach(eth_netif, esp_eth_new_netif_glue(eth_handle)));

    ESP_ERROR_CHECK(esp_eth_start(eth_handle));
}
```

> RMII 引脚（MDC、MDIO、REF_CLK、TXD0/1、RXD0/1、CRS_DV）的具体分配请参考：  
> [t_spe_config.h](https://github.com/Xinyuan-LilyGO/lilygo_device_driver/blob/main/src/device/t_spe/t_spe_config.h)

#### RS485 通信

T-SPE 板载 TD301D485H-A RS485 收发器，通过 ESP32 UART 连接。

```c
#include "driver/uart.h"
#include "driver/gpio.h"

// RS485 UART — 实际引脚编号参考 t_spe_config.h
#define RS485_UART_NUM   UART_NUM_1
#define RS485_TX_PIN     GPIO_NUM_XX
#define RS485_RX_PIN     GPIO_NUM_XX
#define RS485_DE_PIN     GPIO_NUM_XX  // 驱动使能（DE/RE）

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

    // 半双工 RS485 模式 — ESP-IDF 自动管理 DE 信号
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
        printf("RS485 接收: %s\n", (char *)buf);
    }
}
```

#### Wi-Fi HTTP 文件下载

```c
#include "esp_wifi.h"
#include "esp_http_client.h"

// 完整的 Wi-Fi 初始化序列（NVS 初始化、netif 初始化、事件循环、STA 配置）
// 请参考仓库中的 wifi_http_download_file 示例

esp_http_client_config_t config = {
    .url = "http://example.com/file.bin",
};
esp_http_client_handle_t client = esp_http_client_init(&config);

esp_err_t err = esp_http_client_perform(client);
if (err == ESP_OK) {
    printf("HTTP 状态码: %d，内容长度: %lld\n",
           esp_http_client_get_status_code(client),
           esp_http_client_get_content_length(client));
}
esp_http_client_cleanup(client);
```

---

## 常见问题

**Q：支持哪些开发框架？**  
A：目前官方支持 **ESP-IDF v5.5.3**，暂未提供 Arduino 或 PlatformIO 示例。

**Q：板子一直烧录失败怎么办？**  
A：按住 **BOOT** 按键后重新烧录。

**Q：输入电压范围是多少？**  
A：T-SPE 支持 **5–75V DC** 宽压输入，请勿超过 75V，以免损坏设备。

**Q：什么是 10BASE-T1S？**  
A：10BASE-T1S 是 IEEE 802.3cg 单对线以太网标准，通过单根双绞线以 10 Mbps 速率传输数据，专为短距离工业和车载网络设计（点对点最远 25 m，多节点模式最多 15 个节点）。

**Q：GPIO 引脚定义在哪里查看？**  
A：请参考 [t_spe_config.h](https://github.com/Xinyuan-LilyGO/lilygo_device_driver/blob/main/src/device/t_spe/t_spe_config.h)。
