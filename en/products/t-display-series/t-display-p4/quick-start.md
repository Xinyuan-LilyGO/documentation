---
title: Quick Start
show_source: false
---

# T-Display P4 Quick Start

## Overview

T-Display P4 is based on the **Espressif ESP32-P4** high-performance application processor. Development uses the ESP-IDF SDK.

---

## ESP-IDF Setup

1. Install [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32p4/get-started/) for ESP32-P4
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-P4.git
   ```
3. Navigate to the example directory and build:
   ```bash
   idf.py set-target esp32p4
   idf.py build flash monitor
   ```

---

## Arduino

### Arduino IDE (Experimental)

Arduino ESP32 support for ESP32-P4 is experimental. Check [Arduino ESP32 releases](https://github.com/espressif/arduino-esp32/releases) for the latest P4 support status.

---

## Development Platforms

- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32p4/)
- [T-Display-P4 Repository](https://github.com/Xinyuan-LilyGO/T-Display-P4)

---

## FAQ

**Q: Can I use Arduino IDE?**  
A: Arduino support for ESP32-P4 is still experimental. ESP-IDF is the recommended development platform.

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.
