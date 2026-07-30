---
title: T-Bao Gear
show_source: false
tags: K210, ESP32, AI, Camera, Motor, Robot, WiFi
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-bao" />


## Overview

T-Bao Gear is the smart car expansion of the T-Bao AIoT terminal, combining the **K210** RISC-V AI chip and **ESP32** dual-core MCU with a wheeled robot chassis. It uses a **DRV8833** dual H-bridge motor driver to control two DC gear motors and an **ES_9051** servo for camera pan/tilt. The K210 handles on-device AI inference (face detection, emotion recognition, object tracking) and drives the onboard display, while the ESP32 manages motion control, WiFi communication, and Web remote control. Suitable for AI robotics education, autonomous navigation research, and remote-controlled vehicle projects.

## Quick Start

### Example Support

| Example | PlatformIO / Arduino | Description |
| :-----: | :-----------------: | :---------- |
| [DRV8833](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/DRV8833) | ✓ | Basic DC motor drive via serial command |
| [ES_9051](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/ES_9051) | ✓ | Servo precise angle control (0–180°) |
| [Seeking](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Seeking) | ✓ | Auto face-tracking with timeout search |
| [Emotion](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Emotion) | ✓ | Random emotion animations — car plays random emotion expressions and motions |
| [Factory](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Factory) | ✓ | Multi-mode: face follow / object detection / remote control |
| [Remote](https://github.com/Xinyuan-LilyGO/T-Bao/tree/master/example/Remote) | ✓ | Web-based WiFi remote driving |

### Firmware Download

| Example | ESP32 Firmware | K210 Firmware | K210 Model | Notes |
| :-----: | :------------: | :-----------: | :--------: | :---- |
| DRV8833 | [firmware_lilygo-t-bao-esp32-DRV8833](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-DRV8833.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | — | Serial control |
| Seeking | [firmware_lilygo-t-bao-esp32-Seeking](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Seeking.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | [face_model_at_0x300000](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/model/face_model_at_0x300000.kfpkg) | Face tracking + auto search |
| Emotion | [firmware_lilygo-t-bao-esp32-Emotion](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Emotion.bin) | ⚠️ [maixpy_v0.6.2_87_g37c84a3e7](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_v0.6.2_87_g37c84a3e7.bin) | — | K210 firmware differs from other examples |
| Factory | [firmware_lilygo-t-bao-esp32-Factory](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Factory.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | [face_model_at_0x300000](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/model/face_model_at_0x300000.kfpkg) | Multi-mode integrated |
| Remote | [firmware_lilygo-t-bao-esp32-Remote](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/firmware_lilygo-t-bao-esp32-Remote.bin) | [maixpy_twatch_v0.6.2-75-g973361c0d-dirty](https://github.com/Xinyuan-LilyGO/T-Bao/raw/master/firmware/k210/maixpy_twatch_v0.6.2-75-g973361c0d-dirty.bin) | — | ESP32 firmware only needed |

### K210 Firmware Flashing

1. Download [MaixPy IDE](http://dl.sipeed.com/MAIX/MaixPy/ide/) — online debug and firmware flash tool
2. Download [kflash_gui](https://dl.sipeed.com/shareURL/MAIX/tools) — flashing tool for K210 firmware and model files
3. Select the corresponding firmware and model files for your example and flash

> **Note:** The **Emotion** example uses a different K210 firmware (`maixpy_v0.6.2_87_g37c84a3e7.bin`). Do not mix it with other examples.

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Open the `T-Bao` project folder
4. Open `platformio.ini` and uncomment the example you want to use
5. Click **✓** to compile, connect via USB-C, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Open the target example `.ino` file
4. In **Tools** → **Board**, configure:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Dev Module** |
| Port | Your port |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enabled** |
| Upload Speed | 921600 |

5. Click **Upload**

## Related Videos

- [T-BAO Demo](https://www.youtube.com/watch?v=vCzTFDb4YZ0)

## Key Features

- K210 RISC-V dual-core 64-bit AI chip (400 MHz), KPU neural network processor — on-device face detection, random emotion animations, object tracking
- ESP32-D0WDQ6-V3, 16 MB Flash, 8 MB PSRAM, Wi-Fi + Bluetooth 4.2
- DRV8833 dual H-bridge motor driver, controls two DC gear motors
- ES_9051 servo for camera pan/tilt (0–180°)
- OV2640 2 MP camera with 180° rotation
- ST7789V 1.54-inch IPS touch screen (240 × 240), driven by K210
- WiFi Web remote control support
- K210 ↔ ESP32 UART communication (TX: GPIO25, RX: GPIO26)
- Multiple operation modes: face tracking, emotion interaction, Web remote, multi-mode factory

## Specifications

| Parameter | Value |
| :-------: | :---: |
| AI Chip | K210 RISC-V Dual-core 64-bit, 400 MHz, KPU ~0.5 TOPS |
| MCU | ESP32-D0WDQ6-V3 Dual-core LX6, 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Wi-Fi | 2.4 GHz 802.11 b/g/n |
| Bluetooth | Bluetooth 4.2 + BLE |
| Display | 1.54-inch ST7789V IPS TFT, 240 × 240, driven by K210 |
| Camera | OV2640 (2 MP, 180° rotation) |
| Motor Driver | DRV8833 dual H-bridge |
| Servo | ES_9051 (0–180°) |
| USB | 1 × Type-C |

## Pin Diagram

<!-- Pin diagram image -->

### Motor (DRV8833)

| DRV8833  | EN     | IN1    | IN2    | IN3    | IN4    |
| :------: | :----: | :----: | :----: | :----: | :----: |
| ESP32    | GPIO2  | GPIO22 | GPIO21 | GPIO15 | GPIO13 |

### Servo

| ES_9051  | Signal |
| :------: | :----: |
| ESP32    | GPIO19 |

### K210 UART

| K210     | TX     | RX     |
| :------: | :----: | :----: |
| ESP32    | GPIO26 | GPIO25 |

## Dimensions

<!-- PCB and chassis dimension diagrams. -->

## Schematic

* [T-Bao Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script/blob/master/schematic/K210_Main.pdf)

## Datasheet

* [K210 Datasheet](https://canaan.io/product/kendryteai)
* [ESP32 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
* [OV2640 Datasheet](https://www.ovt.com/sensors/OV2640)
* [DRV8833 Datasheet](https://www.ti.com/product/DRV8833)

## Software Libraries

* [T-Bao GitHub Repository](https://github.com/Xinyuan-LilyGO/T-Bao) — ESP32 Arduino/PlatformIO examples
* [LilyGo-K210-Script](https://github.com/Xinyuan-LilyGO/LilyGo-K210-Script) — K210 MicroPython examples
* [MaixPy](https://github.com/sipeed/MaixPy) — K210 development framework
* [MaixHub](https://maixhub.com/) — Online model training platform

## FAQ

* **Q. How do K210 and ESP32 communicate?**
  A. Via UART serial — K210 TX → ESP32 GPIO26, K210 RX → ESP32 GPIO25. K210 acts as AI processor; ESP32 handles motion control and WiFi.

* **Q. The Emotion example doesn't work after flashing the standard K210 firmware.**
  A. The Emotion example requires a different K210 firmware (`maixpy_v0.6.2_87_g37c84a3e7.bin`). Flash the correct firmware listed in the firmware table above.

* **Q. How do I adjust motor speed?**
  A. Modify the PWM value in the `MotorPWMConfig` struct. The range is 0–255, e.g. `{200, 0, 0, 200}` for higher speed.

* **Q. How do I change the servo angle range?**
  A. Edit `SERVO_MIN_ANGLE` and `SERVO_MAX_ANGLE` constants in the example source code.

* **Q. Web remote control is not connecting.**
  A. Ensure the ESP32 is flashed with the Remote or Factory firmware, connect your phone/PC to the ESP32's WiFi AP, then open the displayed IP address in a browser.

## Changelog

| Version | Date | Notes |
| :-----: | :--: | :---- |
| V1.0 | — | Initial release |
