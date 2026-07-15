---
title: 快速开始
show_source: false
---

# T-Bao 快速开始

## 所需工具

| 工具 | 来源 |
| :--: | :--: |
| kflash_gui | [GitHub](https://github.com/sipeed/kflash_gui) |
| MaixPy IDE | [GitHub](https://github.com/sipeed/MaixPy-IDE) |
| Arduino IDE | [arduino.cc](https://www.arduino.cc/en/software) |

---

## K210 侧（AI / 摄像头）

1. 从 MaixPy Releases 页面下载 **MaixPy** 固件
2. 使用 **kflash_gui** 将 MaixPy 烧录到 K210（选择正确的 COM 端口和波特率）
3. 打开 **MaixPy IDE**，连接开发板，运行摄像头 / 人脸识别 / YOLOv3 等 Python 脚本

---

## ESP32 侧（Wi-Fi / BLE / 显示屏）

### 开发板设置

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enabled** |

### 步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script.git
   ```
2. 在 Arduino IDE 中打开示例工程
3. 按上表配置开发板参数，点击「上传」

---

## 注意事项

- **双芯片**：K210（RISC-V，AI）通过 UART 与 ESP32（Wi-Fi/BLE）通信
- **摄像头**：OV2640 2MP，支持 180° 旋转
- **K210 AI**：约 0.5 TOPS KPU，支持 YOLOv3、人脸识别和图像分类
- **PMU**：AXP202 电源管理，控制两颗芯片的电源轨
- **IMU**：MPU6050 六轴（I²C）

---

### 外设示例

#### K210 — 摄像头 + 人脸检测（MaixPy）

```python
# 在 K210 上通过 MaixPy IDE 运行
import sensor, image, lcd, KPU

lcd.init()
sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.run(1)

task = KPU.load(0x300000)  # 从 Flash 加载人脸检测模型
KPU.init_yolo2(task, 0.5, 0.3, 5, [(1.889, 2.5245), (2.9465, 3.94056)])

while True:
    img = sensor.snapshot()
    code = KPU.run_yolo2(task, img)
    if code:
        for i in code:
            img.draw_rectangle(i.rect())
    lcd.display(img)
```

#### ESP32 — 显示屏（TFT_eSPI）

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.drawString("T-Bao Ready", 30, 60);
}

void loop() {}
```

#### ESP32 — UART 与 K210 通信

```cpp
// K210 通过 UART 与 ESP32 通信: RX=3, TX=1
HardwareSerial k210(2);

void setup() {
  Serial.begin(115200);
  k210.begin(115200, SERIAL_8N1, 3, 1);
}

void loop() {
  if (k210.available()) {
    String msg = k210.readStringUntil('\n');
    Serial.println("K210: " + msg);
  }
}
```

---

## 常见问题

**Q：kflash_gui 无法检测到 K210？**
A：选择正确的 COM 端口，波特率设为 115200 或 1500000。确保开发板处于下载模式（连接时按住 BOOT）。

**Q：ESP32 侧无法上传？**
A：确认连接的是 ESP32 USB 端口（不是 K210 端口），并已选择 **ESP32 Dev Module**。
