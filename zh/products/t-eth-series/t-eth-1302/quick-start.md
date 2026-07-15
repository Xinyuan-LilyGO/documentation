---
title: 快速开始
show_source: false
---

# T-ETH 1302 快速开始

## 依赖库

| 库名 | 版本 | 来源 |
| :--: | :--: | :--: |
| ETHClass2 | 最新 | [GitHub](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series) |
| RadioLib | 最新 | [GitHub](https://github.com/jgromes/RadioLib) |

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series.git
   ```
3. 打开 `platformio.ini`，取消注释 `T-ETH-1302` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### 外设示例

#### 以太网（ETHClass2）

```cpp
#include <ETHClass2.h>

#define ETH_PHY_TYPE  ETH_PHY_W5500
#define ETH_PHY_ADDR  1
#define ETH_PHY_CS    9
#define ETH_PHY_IRQ   21
#define ETH_PHY_RST   14
#define ETH_PHY_SPI   SPI
#define ETH_PHY_SCK   12
#define ETH_PHY_MISO  13
#define ETH_PHY_MOSI  11

ETHClass2 ETH2(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ,
               ETH_PHY_RST, ETH_PHY_SPI, ETH_PHY_SCK, ETH_PHY_MISO, ETH_PHY_MOSI);

void onEthEvent(arduino_event_id_t event) {
  if (event == ARDUINO_EVENT_ETH_GOT_IP) {
    Serial.print("IP: "); Serial.println(ETH2.localIP());
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.onEvent(onEthEvent);
  ETH2.begin();
}

void loop() { delay(1000); }
```

#### LoRa（SX1262）

```cpp
#include <RadioLib.h>

// SX1262 引脚 — 请查阅 T-ETH-1302 原理图
SX1262 radio = new Module(10, 3, 8, 2);

void setup() {
  Serial.begin(115200);
  int state = radio.begin(915.0);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print("LoRa 初始化失败: "); Serial.println(state);
    while (true);
  }
  Serial.println("SX1262 就绪");
}

void loop() {
  int state = radio.transmit("Hello T-ETH-1302");
  if (state == RADIOLIB_ERR_NONE) Serial.println("发送成功");
  delay(2000);
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
