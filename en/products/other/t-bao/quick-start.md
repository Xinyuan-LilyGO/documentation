---
title: Quick Start
show_source: false
---

# T-Bao Quick Start

## Required Tools

| Tool | Source |
| :--: | :----: |
| kflash_gui | [GitHub](https://github.com/sipeed/kflash_gui) |
| MaixPy IDE | [GitHub](https://github.com/sipeed/MaixPy-IDE) |
| Arduino IDE | [arduino.cc](https://www.arduino.cc/en/software) |

---

## K210 Side (AI / Camera)

1. Download **MaixPy** firmware from the MaixPy releases page
2. Flash MaixPy to the K210 using **kflash_gui** (select the correct COM port and baud rate)
3. Open **MaixPy IDE**, connect to the board, and run Python scripts for camera / face recognition / YOLOv3 tasks

---

## ESP32 Side (Wi-Fi / BLE / Display)

### Board Settings

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **Enabled** |

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script.git
   ```
2. Open an example sketch in Arduino IDE
3. Select the board settings above and click **Upload**

---

### Peripheral Examples

#### K210 — Camera + Face Detection (MaixPy)

```python
# Run on K210 via MaixPy IDE
import sensor, image, lcd, KPU

lcd.init()
sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.run(1)

task = KPU.load(0x300000)  # load face detection model from flash
KPU.init_yolo2(task, 0.5, 0.3, 5, [(1.889, 2.5245), (2.9465, 3.94056)])

while True:
    img = sensor.snapshot()
    code = KPU.run_yolo2(task, img)
    if code:
        for i in code:
            img.draw_rectangle(i.rect())
    lcd.display(img)
```

#### ESP32 — Display (TFT_eSPI)

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

#### ESP32 — UART Bridge to K210

```cpp
// K210 communicates with ESP32 via UART: RX=3, TX=1
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

## Notes

- **Dual-chip:** K210 (RISC-V, AI) communicates with ESP32 (Wi-Fi/BLE) via UART
- **Camera:** OV2640 2 MP with 180° rotation support
- **K210 AI:** ~0.5 TOPS KPU — capable of YOLOv3, face recognition, and image classification
- **PMU:** AXP202 power management — controls power rails for both chips
- **IMU:** MPU6050 6-axis (I²C)

---

## FAQ

**Q: K210 not detected by kflash_gui?**
A: Select the correct COM port and set baud rate to 115200 or 1500000. Ensure the board is in download mode (hold BOOT while connecting).

**Q: ESP32 side not uploading?**
A: Confirm you are connecting to the ESP32 USB port (not the K210 port) and have selected **ESP32 Dev Module**.
