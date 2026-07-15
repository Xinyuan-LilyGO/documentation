---
title: 快速开始
show_source: false
---

# T-ETH Lite S3 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| ETHClass2 | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-ETH-Lite-S3` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB CDC On Boot | **Enable** |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

---

### 外设示例

#### 以太网（ETHClass2）

```cpp
#include <ETHClass2.h>

// T-ETH Lite S3 使用 W5500 SPI 以太网
#define ETH_PHY_TYPE  ETH_PHY_W5500
#define ETH_PHY_CS    9
#define ETH_PHY_IRQ   21
#define ETH_PHY_RST   14
#define ETH_PHY_SCK   12
#define ETH_PHY_MISO  13
#define ETH_PHY_MOSI  11

ETHClass2 ETH2(ETH_PHY_TYPE, 1, ETH_PHY_CS, ETH_PHY_IRQ,
               ETH_PHY_RST, SPI, ETH_PHY_SCK, ETH_PHY_MISO, ETH_PHY_MOSI);

void onEthEvent(arduino_event_id_t event) {
  if (event == ARDUINO_EVENT_ETH_GOT_IP) {
    Serial.print("以太网 IP: ");
    Serial.println(ETH2.localIP());
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.onEvent(onEthEvent);
  ETH2.begin();
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：与 T-ETH Lite 有何区别？**  
A：T-ETH Lite S3 采用 ESP32-S3，提供更快的双核 LX7 处理器、更多 GPIO 和 USB OTG 支持。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
