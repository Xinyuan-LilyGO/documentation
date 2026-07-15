---
title: Quick Start
show_source: false
---

# T-HaLow P4 Quick Start

## Overview

T-HaLow P4 combines the **ESP32-P4** high-performance application processor with **Wi-Fi HaLow (802.11ah)** for long-range sub-1 GHz IoT applications requiring significant local processing power.

---

## ESP-IDF Setup

1. Install [ESP-IDF for ESP32-P4](https://docs.espressif.com/projects/esp-idf/en/latest/esp32p4/get-started/)
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/LilyGO-T-Halow.git
   ```
3. Navigate to the example and build:
   ```bash
   idf.py set-target esp32p4
   idf.py build flash monitor
   ```

---

## Development Platforms

- [ESP-IDF (ESP32-P4)](https://docs.espressif.com/projects/esp-idf/en/latest/esp32p4/)
- [T-HaLow Repository](https://github.com/Xinyuan-LilyGO/LilyGO-T-Halow)

---

## FAQ

**Q: Can I use Arduino IDE?**  
A: Arduino support for ESP32-P4 is experimental. ESP-IDF is the recommended platform.
