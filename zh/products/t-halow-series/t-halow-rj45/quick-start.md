---
title: 快速开始
show_source: false
---

# T-HaLow RJ45 快速开始

## 概述

T-HaLow RJ45 将 **Wi-Fi HaLow（802.11ah）** 与有线 **以太网 RJ45** 接口相结合，实现长距离无线网络与有线网络的桥接。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Halow.git
   ```
3. 打开 `platformio.ini`，选择 `T-HaLow-RJ45` 环境
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### 外设示例

#### Wi-Fi HaLow + 以太网桥接

```cpp
// T-HaLow RJ45 将 HaLow 无线网络桥接到有线以太网
#include <T_HaLow.h>
#include <ETHClass2.h>

void setup() {
  Serial.begin(115200);
  // 初始化以太网（RJ45）
  ETH2.begin();
  // 初始化 HaLow（802.11ah）
  HaLow.begin();
  HaLow.connect("your-halow-ssid", "your-password");
  while (!HaLow.connected()) {
    delay(500); Serial.print(".");
  }
  Serial.println("\nHaLow 已连接，正在桥接到以太网");
}

void loop() { delay(1000); }
```

> **说明：** 具体桥接 API 请参阅 LilyGO-T-Halow 仓库示例。

---

## 常见问题

**Q：T-HaLow RJ45 的主要用途是什么？**  
A：将 Wi-Fi HaLow（亚 1 GHz 远距离无线）桥接到有线以太网，适用于将远距离 IoT 传感器接入局域网。
