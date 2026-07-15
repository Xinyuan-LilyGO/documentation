---
title: Quick Start
show_source: false
---

# T-Radar Quick Start

## Overview

T-Radar is a 60 GHz radar expansion module with no onboard host MCU. It attaches to a compatible LILYGO mainboard via pin headers and is driven by the host's firmware over I²C or SPI.

---

## Hardware Connection

1. Plug T-Radar onto a compatible LILYGO mainboard (e.g., T3, T-Beam) via the pin header
2. Ensure the mainboard provides 3.3 V or 5 V power to the module
3. Select I²C or SPI communication via the jumper on the board

---

## Software Setup

1. Download the A121 SDK / driver library from [developer.acconeer.com](https://developer.acconeer.com/home/a121-docs-software/)
2. Install the library into your Arduino or PlatformIO project
3. Initialize the radar interface in your host firmware:
   ```cpp
   // Example I²C initialization (pseudo-code)
   radar.begin(Wire);
   radar.setMode(RADAR_MODE_DISTANCE);
   ```
4. Read distance/motion data in your main loop

---

## Notes

- **No host MCU**: T-Radar has no microcontroller of its own — all code runs on the host mainboard
- **60 GHz PCR**: A121 Pulsed Coherent Radar, up to 20 m range
- **Accuracy**: Millimeter absolute / micrometer relative accuracy
- **Use cases**: Distance measurement, motion detection, material classification, vital sign monitoring (breathing, heart rate)
- **Penetration**: Can detect through thin non-metallic materials; metal blocks the signal completely

---

## FAQ

**Q: Can T-Radar be used outdoors?**
A: Yes. 60 GHz radar is largely unaffected by weather, though heavy rain or snow may cause slight signal attenuation.

**Q: Does it support multi-target detection?**
A: The current version targets single-object high-precision ranging. Multi-target discrimination requires additional algorithm work on the host.

**Q: What is the maximum data refresh rate?**
A: Depends on the host MCU and interface speed; typically supports updates above 100 Hz.
