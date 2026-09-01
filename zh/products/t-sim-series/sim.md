---
title: LILYGO SIM
keywords: LILYGO, markdown, ESP32, Arduino, Platformio , github, lvgl, LoRa, GPS, AMOLED, E-Paper
desc: LILYGO的官方文档（Wiki），包含了开源软件和开源硬件资料，AIOT资料等等
date: 2025-04-01
---

## 各型号模块介绍


| Product                        | Module                   | QWIIC | Seamless <br> power <br> switching | GNSS<br> routing<br> to SOC | GNSS<br>PPS | eSIM<br>Pad | BMS | Camera<br>Interface | DeepSleep<br> Current | Pin<br>compatible |
| ------------------------------ | ------------------------ | ----- | ---------------------------------- | --------------------------- | ----------- | ----------- | --- | ------------------- | --------------------- | ----------------- |
| T-A7670X                       | ESP32-WROVER-B(N4R8)     | ❌     | ❌                                  | ❌                           | ❌           | ❌           | ✅   | ❌                   | Avg: 157uA            | ❌                 |
| T-A7608X                       | ESP32-WROVER-B(N4R8)     | ❌     | ❌                                  | ❌                           | ❌           | ❌           | ✅   | ❌                   | Avg: 240uA            | ❌                 |
| T-SIM7000G                     | ESP32-WROVER-B(N4R8)     | ❌     | ❌                                  | ❌                           | ❌           | ❌           | ✅   | ❌                   | Avg: 500uA            | ❌                 |
| T-SIM7600G                     | ESP32-WROVER-B(N4R8)     | ❌     | ❌                                  | ❌                           | ❌           | ❌           | ✅   | ❌                   | Avg: 200uA            | ❌                 |
| T-SIM7080G-S3                  | ESP32-S3-WROOM-1(N16R8)  | ❌     | ❌                                  | ❌                           | ❌           | ❌           | ❌   | ✅                   | Avg: 1.1mA            | ❌                 |
| T-SIM7670G-S3                  | ESP32-S3-WROOM-1(N16R8)  | ❌     | ❌                                  | ❌                           | ❌           | ❌           | ✅   | ❌                   | Avg: 497uA            | ❌                 |
| T-A7608X-S3                    | ESP32-S3-WROOM-1(N16R8)  | ❌     | ❌                                  | ❌                           | ❌           | ❌           | ✅   | ❌                   | Avg: 368uA            | ❌                 |
| T-A7670X-S3<br>-**Standard**   | ESP32-S3-WROOM-1(NR16R2) | ✅     | ✅                                  | ✅                           | ✅           | ✅           | ✅   | ✅                   | Avg: 314uA            | ✅                 |
| T-SIM7670G-S3<br>-**Standard** | ESP32-S3-WROOM-1(NR16R2) | ✅     | ✅                                  | ✅                           | ✅           | ✅           | ✅   | ✅                   | Avg: 147uA            | ✅                 |
| T-SIM7000G-S3<br>-**Standard** | ESP32-S3-WROOM-1(NR16R2) | ✅     | ✅                                  | ✅                           | ❌           | ✅           | ✅   | ✅                   | Avg: 166uA            | ✅                 |
| T-SIM7080G-S3<br>-**Standard** | ESP32-S3-WROOM-1(NR16R2) | ✅     | ✅                                  | ✅                           | ❌           | ✅           | ✅   | ✅                   | Avg: 128uA            | ✅                 |
| T-SIM7600G-S3<br>-**Standard** | ESP32-S3-WROOM-1(NR16R2) | ✅     | ✅                                  | ❌                           | ❌           | ✅           | ✅   | ✅                   | Avg: 128uA            | ✅                 |

- ESP32-WROVER-B(N4R8): 4MB Flash , 8MB PSRAM
- ESP32-S3-WROOM-1(N16R8): 16MB Flash , 8MB PSRAM(Octal SPI)
- ESP32-S3-WROOM-1(N16R2): 16MB Flash , 2MB PSRAM(Quad SPI)
- 深度睡眠电流测试记录可在 [DeepSleep.ino](../examples/DeepSleep/DeepSleep.ino)
- SIM7000G/SIM7080G/SIM7600G 没有 PPS 功能，因此该功能不可用。


## 模块命名与兼容性说明
A7670G / A7670E / A7670SA 统称为 A7670X

A7672G 与 A7670G 完全相同，仅名称不同

A7608SA-H / A7608E-H / A7608E / A7608SA 统称为 A7608X
## 平台差异
SIM7670G 使用 高通（Qualcomm）平台

A7670X 使用 Asrmicro 平台

## 硬件版本与注意事项

### A7670 与 A7670 R2
使用方式完全相同

区别仅在于模块的芯片制造工艺不同

### A7608X-S3 V1.0 与 V1.1 差异
V1.1 增加了 太阳能输入电压分压电阻（占用 IO3）

其他部分保持不变

### T-A7608 与 T-A7608-V2 差异
移除：
* 模块复位引脚（IO5）
* 上电引脚（IO12）

增加：
* 板载 LED（IO12 控制）
* 太阳能电压检测功能（IO34，ADC）

## 功能限制说明

A7670E-LNXY-UBL 这个版本不支持语音和短信功能
## 规格比较
### T-A7670E T-A7670G T-A7670SA 
<img src="/products/t-sim-series/assets/a7670_1.jpg" alt="summary" width=80%>

<img src="/products/t-sim-series/assets/a7670_2.jpg" alt="summary" width=80%>

## 参考资料

1. SIMCOM 官网文档中心
   - [SIMCOM official A7670X All Datasheet](https://cn.simcom.com/product/A7670X.html)
   - [SIMCOM official A7608X All Datasheet](https://cn.simcom.com/product/A7608X-H-E_SA.html)
   - [SIMCOM official SIM7672 All Datasheet](https://en.simcom.com/product/SIM7672.html)
2. A7670/A7608-数据表
   - [A76xx AT Command](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX_Series_AT_Command_Manual_V1.09.pdf)
   - [A76xx MQTT(S) Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_MQTT(S)_Application%20Note_V1.02.pdf)
   - [A76xx HTTP(S) Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_HTTP(S)_Application%20Note_V1.02.pdf)
   - [A76xx GNSS Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_GNSS_Application%20Note_V1.02.pdf)
   - [A76xx FTP Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_FTP(S)_Application%20Note_V1.02.pdf)
   - [A76xx LBS Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_LBS_Application%20Note_V1.02.pdf)
   - [A76xx SSL Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_SSL_Application%20Note_V1.02.pdf)
   - [A76xx Sleep Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_Sleep%20Mode_Application%20Note_V1.02.pdf)
   - [A76xx Hardware Design manual](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A7670C_R2_硬件设计手册_V1.06.pdf)
   - [A76xx TCPIP Application](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/A76XX/A76XX%20Series_TCPIP_Application%20Note_V1.02.pdf)
3. SIM7670G-数据表
   - [SIM7670G Hardware Design manual](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/SIM767X/SIM7672X_Series_Hardware_Design_V1.02.pdf)
   - [SIM7670G AT Command](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/SIM767X/SIM767XX%20Series_AT_Command_Manual_V1.06.pdf)
   - [SIM7670G CE Certificate](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/SIM767X/SIM7670G_CE%20Certificate_2023.pdf)
   - [SIM7670G Series CMUX USER GUIDE](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/datasheet/SIM767X/SIM767XX%20Series_CMUX_USER_GUIDE_V1.00.pdf)
4. 原理图
   - [T-A7608-S3 V1.1 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/main/schematic/esp32s3/T-A7608-S3-V1.1.pdf)
   - [T-A7608X V1.0 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/main/schematic/esp32/T-A7608X-V1.0.pdf)
   - [T-A7670X V1.4 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/main/schematic/esp32/T-A7670X-V1.4.pdf)
   - [T-Call-A7670 V1.0 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/main/schematic/esp32/T-Call-A7670-V1.0.pdf)
   - [T-SIM7670G-S3 V1.0 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/main/schematic/esp32s3/T-SIM7670G-S3-V1.0.pdf)
