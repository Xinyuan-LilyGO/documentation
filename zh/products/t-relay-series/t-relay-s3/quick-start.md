---
title: 快速开始
show_source: false
---

# T-Relay S3 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Relay-S3.git
   ```
3. 打开 `platformio.ini`，选择目标示例
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

#### 继电器基础控制（8 路）

```cpp
#define RELAY1  21
#define RELAY2  47
#define RELAY3  48
#define RELAY4   3
#define RELAY5  14
#define RELAY6  13
#define RELAY7  12
#define RELAY8  11

void setup() {
    for (int pin : {RELAY1, RELAY2, RELAY3, RELAY4,
                    RELAY5, RELAY6, RELAY7, RELAY8}) {
        pinMode(pin, OUTPUT);
        digitalWrite(pin, LOW);
    }
}

void loop() {
    digitalWrite(RELAY1, HIGH); // 继电器 1 吸合
    delay(500);
    digitalWrite(RELAY1, LOW);  // 继电器 1 断开
    delay(500);
}
```

---

## 常见问题

**Q：与 T-Relay 有何区别？**  
A：T-Relay S3 采用 ESP32-S3（更快、更多 GPIO），支持 8 路继电器（原版为 4 路），并使用 USB-C 接口。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
