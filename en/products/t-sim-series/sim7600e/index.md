---
title: T-PCIE SIM7600E
show_source: false
tags: SIM7600E, LTE, 4G, mini PCIe, GNSS
---

# {{ $frontmatter.title }}

<ImageGallery :columns="2" :images="[
  { src: '/products/t-sim-series/sim7600e/index/image/sim7600e.jpg', alt: 'T-PCIE SIM7600E front view' },
  { src: '/products/t-sim-series/sim7600e/index/image/sim7600e-r.jpg', alt: 'T-PCIE SIM7600E rear view' }
]" />

## Overview

T-PCIE SIM7600E is a **mini PCIe form-factor LTE modem module** based on the **SIM7600E** chip, designed to be inserted into the [T-PCIE mainboard](../index.md) mPCIe slot. Supports LTE-FDD/LTE-TDD, HSPA+, GSM/GPRS/EDGE multi-mode wireless communication with maximum downlink 10 Mbps / uplink 5 Mbps. Integrates multi-constellation GNSS and built-in TCP/IP/HTTP/HTTPS/FTP protocol stack. AT commands are compatible with the SIM7600 series.

> For mainboard hardware details (DIP switch, pin map, electrical parameters, buttons, LED, antenna), see the [T-PCIE mainboard page](../index.md).

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series) | ✓ | | AT commands, MQTT, HTTP examples |


### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Related Videos

## Key Features

- SIM7600E LTE Cat-4, mini PCIe form factor
- LTE-FDD B1/B3/B5/B8/B20, GSM 900/1800 MHz
- Max 10 Mbps downlink / 5 Mbps uplink
- Integrated multi-constellation GNSS
- Built-in TCP/IP, HTTP/HTTPS, FTP/FTPS protocol stack
- USB 2.0 interface, Windows/Linux/Android drivers
- AT commands compatible with SIM7600 series

## Modem Specifications

| Feature | Specification |
| :-----: | :-----------: |
| Module | SIM7600E |
| Form Factor | mini PCIe |
| Standard | LTE Cat-4 |
| LTE-FDD | B1/B3/B5/B8/B20 |
| GSM | 900 / 1800 MHz |
| Max Downlink | 10 Mbps |
| Max Uplink | 5 Mbps |
| GNSS | Multi-constellation |
| Interface | UART, USB 2.0, GPIO |
| AT Commands | Compatible with SIM7600 series |
| SIM Card | Nano SIM (via mainboard slot) |

> **Regional coverage:** SIM7600E covers Europe, Middle East, Africa, South Korea, and Thailand. For other regions, see the modem differences table below.

## Modem Differences

| Model | GPS | Phone Call | SMS | Frequency Band |
| :---: | :-: | :--------: | :-: | :------------- |
| SIM7600E | ✅ | ✅ | ✅ | LTE-FDD: B1/B3/B5/B8/B20; GSM: 900/1800 MHz |

> Voice call requires an onboard audio decoder chip. Send `AT+SIMCOMATI` to check your module's hardware version. The SIM7600 series only has voice call functionality if a chip is present in the audio decoder area (red-marked zone on the PCB). If that area is empty, voice calls are not supported.

## Pin Diagram

<img src="/products/t-sim-series/sim7600e/index/image/sim7600e-1.jpg" alt="SIM7600E pin definition" width="60%">

## Dimension Diagram

## Schematic

* [T-PCIE V1.2 Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/blob/master/schematic/T-PCIE-V1.2.pdf)

## Datasheet

* [SIM7600E Datasheet](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/Files/T-SIM7600E-PCIE.pdf)
* [SIMCOM SIM7600X Official Page](https://cn.simcom.com/product/SIM7600X.html)

## Software Development

* [LilyGo-Modem-Series GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)

### Dependent Libraries

* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)

## FAQ

* **Q. Which regions does SIM7600E cover?**
  A. Europe, Middle East, Africa, South Korea, and Thailand (LTE-FDD B1/B3/B5/B8/B20, GSM 900/1800 MHz).

* **Q. Does SIM7600E support voice calls?**
  A. Only if the board has an onboard audio decoder chip. Send `AT+SIMCOMATI` to check. If the audio area is empty, voice calls are not possible.

* **Q. Which GPS antenna is compatible?**
  A. Use an active GPS antenna with 3.3 V supply (IPEX Gen-1 connector). Most active GPS antennas supporting 2.5–5.5 V are compatible.

* **Q. For mainboard-related issues (upload failure, SIM not detected, power switching).**
  A. See the [T-PCIE mainboard FAQ](../index.md#faq).

## Version History

| Version | Date | Notes |
| :-----: | :--: | :---- |
| T-PCIE V1.2 | — | Current version |
