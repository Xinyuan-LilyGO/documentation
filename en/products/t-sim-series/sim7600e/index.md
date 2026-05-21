---
title: T-PCIE SIM7600E
show_source: false
tags: LTE, SIM7600E, 4G, mini PCIe, GNSS
---

# {{ $frontmatter.title }}

<ImageGallery :columns="2" :images="[
  { src: '/products/t-sim-series/sim7600e/assets/sim7600e.jpg', alt: 'T-PCIE SIM7600E front view' },
  { src: '/products/t-sim-series/sim7600e/assets/sim7600e-r.jpg', alt: 'T-PCIE SIM7600E rear view' }
]" />

## Overview

T-PCIE SIM7600E is a mini PCIe form-factor **LTE Cat 1** communication module based on the **SIM7600E** chip. Supports LTE-TDD/FDD, HSPA+, GSM/GPRS/EDGE multi-mode wireless communication with maximum downlink 10 Mbps / uplink 5 Mbps. Integrates multi-constellation GNSS, built-in network protocols (TCP/IP/UDP/HTTP/HTTPS/FTP/FTPS), and USB drivers for Windows/Linux/Android. Suitable for telematics, surveillance equipment, CPE, industrial routers, and remote diagnostics.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [T-PCIE Examples](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) | ✓ | | LTE communication examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGo-T-PCIE](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) repository
4. Open `platformio.ini` and uncomment the desired example
5. Click **✓** to compile, click **→** to upload

### Arduino

Refer to the mainboard Quick Start guide for Arduino board settings.

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Video

## Key Features

- SIM7600E: LTE Cat 1, LTE-FDD B1/B3/B5/B8/B20, GSM 900/1800 MHz
- Max 10 Mbps DL / 5 Mbps UL
- Integrated GNSS (multi-constellation)
- USB drivers: Windows/Linux/Android
- Supported protocols: TCP/IP/IPv4/IPv6/HTTP/HTTPS/FTP/FTPS

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| Module | SIM7600E-PCIE |
| Form Factor | mini PCIe |
| Standard | LTE Cat 1 |
| LTE-FDD | B1/B3/B5/B8/B20 |
| GSM | 900/1800 MHz |
| Downlink | Max 10 Mbps |
| Uplink | Max 5 Mbps |
| GNSS | Multi-constellation |
| USB | USB 2.0 |
| SIM | Nano SIM |

## Pin Diagram

<img src="/products/t-sim-series/sim7600e/assets/sim7600e-1.jpg" alt="T-PCIE SIM7600E pin definition" width=60%>

## Dimension Diagram

## Schematic

* [T-PCIE V1.2 Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/blob/master/schematic/T-PCIE-V1.2.pdf)

## Datasheet

* [SIM7600E Datasheet](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/Files/T-SIM7600E-PCIE.pdf)

## Software Development

* [LilyGo-T-PCIE GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE)

### Dependent Libraries

## FAQ

* **Q. Which regions is SIM7600E compatible with?**
  A. SIM7600E covers Europe, Middle East, Africa, South Korea, and Thailand frequency bands (LTE-FDD B1/B3/B5/B8/B20).

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-PCIE SIM7600E V1.0 | — | Initial version |
