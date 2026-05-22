---
title: T-Display-S3
show_source: false
tags: ESP32-S3R8, WIFI, BLE, LCD
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3?variant=42589373268149" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3/assets/t-display-s3-1.jpg', alt: 'T-Display-S3 front view' },
  { src: '/products/t-display-series/t-display-s3/assets/t-display-s3-2.jpg', alt: 'T-Display-S3 back view' },
  { src: '/products/t-display-series/t-display-s3/assets/t-display-s3-pin.jpg', alt: 'T-Display-S3 pin diagram' },
]" />

## Overview

T-Display-S3 is a development board whose main control chip is ESP32-S3. It is equipped with a 1.9-inch LCD color screen and two programmable buttons. Communication using the I8080 interface Retains the same layout design as T-Display. You can directly use ESP32S3 for USB communication or programming.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-Display-S3](https://github.com/Xinyuan-LilyGO/T-Display-S3) | ✓ | ✓ | BLE, WIFI, SPIFFS, FFat examples |

### PlatformIO

1. Install Visual Studio Code and Python
2. Search for the PlatformIO plugin in the VisualStudioCode extension and install it.
3. After the installation is complete, you need to restart VisualStudioCode
4. After restarting VisualStudioCode, select File in the upper left corner of VisualStudioCode -> Open Folder -> select the T-Display-S3 directory
5. Wait for the installation of third-party dependent libraries to complete
6. Click on the platformio.ini file, and in the platformio column
7. Uncomment one of the lines default_envs = xxxx to make sure only one line works
8. Click the (✔) symbol in the lower left corner to compile
9. Connect the board to the computer USB
10. Click (→) to upload firmware
11. Click (plug symbol) to monitor serial output
12. If it cannot be written, or the USB device keeps flashing, please check the FAQ below

### Arduino

Install Arduino IDE

1. In Arduino Preferences, on the Settings tab, enter the https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json URL in the Additional boards manager URLs input box. Please pay attention to the version. The test phase is using 2.0.14. It is not certain that versions above 2.0.14 can run. When the operation is abnormal, please downgrade to a version below 2.0.14. , As of 2024/08/02, TFT_eSPI does not work on versions higher than 2.0.14, see TFT_eSPI/issue3329
2. Download T-Display-S3 , move to Arduino library folder (e.g. C:\Users\YourName\Documents\Arduino\libraries)
3. Copy all folders in lib folder to Arduino library folder (e.g. C:\Users\YourName\Documents\Arduino\libraries)
4. Enter the downloaded T-Display-S3/examples directory
5. Select any example and double-click the any_example.ino to open it
6. Select any example and double-click the `any_example.ino` to open it
7. Open ArduinoIDE ,`Tools` ，Make your selection according to the table below
    | Arduino IDE Setting                  | Value                             |
    | ------------------------------------ | --------------------------------- |
    | Board                                | **ESP32S3 Dev Module**            |
    | Port                                 | Your port                         |
    | USB CDC On Boot                      | Enable                            |
    | CPU Frequency                        | 240MHZ(WiFi)                      |
    | Core Debug Level                     | None                              |
    | USB DFU On Boot                      | Disable                           |
    | Erase All Flash Before Sketch Upload | Disable                           |
    | Events Run On                        | Core1                             |
    | Flash Mode                           | QIO 80MHZ                         |
    | Flash Size                           | **16MB(128Mb)**                   |
    | Arduino Runs On                      | Core1                             |
    | USB Firmware MSC On Boot             | Disable                           |
    | Partition Scheme                     | **16M Flash(3M APP/9.9MB FATFS)** |
    | PSRAM                                | **OPI PSRAM**                     |
    | Upload Mode                          | **UART0/Hardware CDC**            |
    | Upload Speed                         | 921600                            |
    | USB Mode                             | **CDC and JTAG**                  |
    * The options in bold are required, others are selected according to actual conditions.

8. Click `upload` , Wait for compilation and writing to complete

### Development Platforms

1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [PlatformIO](https://platformio.org/)
3. [MicroPython](https://micropython.org/)

## Video

## Key Features

- ESP32-S3R8 Dual-core LX7 microprocessor
- Wi-Fi 802.11, BLE 5 + BT mesh
- 1.9" diagonal, Full-color TFT Display
- 170(H)RGB x320(V) 8-Bit Parallel Interface
- STEMMA QT / Qwiic 
- JST-GH 1.25mm 2PIN

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| MCU |	ESP32-S3R8 Dual-core LX7 microprocessor |
| Wireless Connectivity |	Wi-Fi 802.11, BLE 5 + BT mesh |
| Programming Platform |	Arduino-ide、 Micropython |
| Flash	| 16MB |
| PSRAM	| 8MB |
| Bat voltage detection |	IO04 |
| Onboard functions	| Boot + Reset + IO14 Button |
| LCD |	1.9" diagonal, Full-color TFT Display |
| Drive Chip	| ST7789V |
| Resolution |	170(H)RGB x320(V) 8-Bit Parallel Interface |
| Working power supply |	3.3v |
| Support	| STEMMA QT / Qwiic JST-SH 1.0mm 4-PIN |
|Connector |	JST-GH 1.25mm 2PIN |

## Pin Diagram

<img src="/products/t-display-series/t-display-bar/assets/t-display-s3-pin.jpg" alt="T-Display-S3 pin diagram" width=100%>


JST-SH 1.0mm 4-PIN


Coming soon
