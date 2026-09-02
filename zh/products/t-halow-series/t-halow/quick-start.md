---
title: 快速开始
show_source: false
---

# T-HaLow 快速开始

## 概述

T-HaLow 基于 **ESP32** + **Morse Micro MM6108** Wi-Fi HaLow（802.11ah）芯片组，工作在亚 1 GHz 频段，适用于远距离、低功耗物联网应用。

---

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Halow.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### 外设示例

#### Wi-Fi HaLow 客户端（802.11ah）

```cpp
// T-HaLow 通过 SPI 使用 Morse Micro MM6108
// LilyGO-T-Halow 库封装了 MM6108 驱动
#include <T_HaLow.h>

void setup() {
  Serial.begin(115200);
  HaLow.begin();
  // 连接到 HaLow AP（802.11ah — 需要支持 HaLow 的路由器）
  HaLow.connect("your-halow-ssid", "your-password");
  while (!HaLow.connected()) {
    delay(500); Serial.print(".");
  }
  Serial.println("\nHaLow 已连接: " + HaLow.localIP().toString());
}

void loop() { delay(1000); }
```

> **说明：** Wi-Fi HaLow（802.11ah）工作在 Sub-1 GHz 频段，需要支持 HaLow 的接入点。具体 API 请参阅 LilyGO-T-Halow 仓库的最新示例。

---

## 常见问题

**Q：Wi-Fi HaLow 工作在什么频率？**  
A：Wi-Fi HaLow（802.11ah）工作在亚 1 GHz 频段（欧洲通常为 863–868 MHz，美洲为 902–928 MHz），比 2.4 GHz Wi-Fi 通信距离更远、穿透性更强。

**Q：HaLow 与普通 Wi-Fi 兼容吗？**  
A：不兼容。HaLow 是独立协议，需要支持 HaLow 的接入点。
