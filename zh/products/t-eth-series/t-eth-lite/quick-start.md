---
title: 快速开始
show_source: false
---

# T-ETH Lite 快速开始

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
3. 打开 `platformio.ini`，取消注释 `T-ETH-Lite` 环境行
4. 点击 **✓** 编译，连接 USB-C，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi/BT)** |
| Flash Size | **16 MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enable** |

---

### 外设示例

#### 以太网 HTTP 客户端

```cpp
#include <ETH.h>

void setup() {
    Serial.begin(115200);
    // 使用 RTL8201 PHY 初始化以太网
    ETH.begin(0, -1, 23, 18, ETH_PHY_RTL8201, ETH_CLOCK_GPIO0_IN);
    while (!ETH.linkUp()) { delay(500); Serial.print("."); }
    Serial.println("\n以太网已连接: " + ETH.localIP().toString());
}

void loop() {}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：以太网无法连接？**  
A：检查 ETH PHY 引脚定义是否与实际版本匹配，并确认 Arduino IDE 中已启用 PSRAM。
