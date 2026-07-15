---
title: Quick Start
show_source: false
---

# T-BHI260AP Quick Start

## Overview

T-BHI260AP is a motion sensing expansion module with no onboard host MCU. It connects to a compatible LILYGO mainboard (T-Deck, T-Display-S3, T-Display-S3-Pro, T-Echo) via I²C or SPI and is driven entirely by the host's firmware.

---

## Hardware Connection

1. Connect T-BHI260AP to your mainboard via the pin headers
2. Use I²C (SDA/SCL) or SPI (MOSI/MISO/SCK/CS) depending on your mainboard's available interface
3. Ensure the mainboard supplies 3.3 V to the module

---

## Software Setup

Clone the example repository for your host board and open the BHI260AP example sketch:

```bash
# Example for T-Display-S3
git clone https://github.com/Xinyuan-LilyGO/T-Display-S3.git
```

Select the appropriate board and settings for your **host mainboard** (not the expansion module itself), then upload.

---

## Notes

- **No host MCU**: T-BHI260AP has no microcontroller of its own — all firmware runs on the host mainboard
- **AI IMU**: BHI260AP integrates a 6-axis IMU (accelerometer + gyroscope) with an onboard self-learning AI algorithm
- **Motion features**: Real-time pedestrian tracking, personalized fitness analysis, swimming stroke metrics
- **Waterproof**: Designed for outdoor and underwater use
- **Interface**: I²C or SPI (select via hardware jumper)

---

## Compatible Mainboards

| Product | Notes |
| :-----: | :---: |
| T-Deck | Primary recommended host |
| T-Display-S3 | |
| T-Display-S3-Pro | |
| T-Echo | |

---

## FAQ

**Q: Which interface should I use — I²C or SPI?**
A: Either works. SPI gives higher throughput; I²C is simpler and uses fewer pins. Select via the hardware jumper on the module.

**Q: Does it work with Arduino?**
A: Yes, through the host mainboard. Flash your host board with an Arduino sketch that includes the BHI260AP driver library.
