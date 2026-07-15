---
title: 快速开始
show_source: false
---

# T-Relay 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Relay.git
   ```
3. 打开 `platformio.ini`，选择目标示例
4. 点击 **✓** 编译，连接 USB，点击 **→** 上传

---

### Arduino IDE

#### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| CPU Frequency | **240 MHz (WiFi)** |
| Flash Size | **4 MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |

---

### 外设示例

#### 继电器基础控制

```cpp
// T-Relay GPIO 引脚定义（根据实际版本调整）
#define RELAY1  21
#define RELAY2  19
#define RELAY3  18
#define RELAY4   5

void setup() {
    pinMode(RELAY1, OUTPUT);
    pinMode(RELAY2, OUTPUT);
    pinMode(RELAY3, OUTPUT);
    pinMode(RELAY4, OUTPUT);
    // 继电器高电平有效
    digitalWrite(RELAY1, LOW);
    digitalWrite(RELAY2, LOW);
    digitalWrite(RELAY3, LOW);
    digitalWrite(RELAY4, LOW);
}

void loop() {
    digitalWrite(RELAY1, HIGH);  // 继电器 1 吸合
    delay(1000);
    digitalWrite(RELAY1, LOW);   // 继电器 1 断开
    delay(1000);
}
```

---

## 常见问题

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。

**Q：继电器不动作？**  
A：确认继电器控制 GPIO 引脚对应你的板子版本。T-Relay 默认使用高电平有效控制。

**Q：T-Relay 能控制多大负载？**  
A：每路继电器最大可切换 250 VAC 10 A 或 30 VDC 10 A，请勿超出额定值。
