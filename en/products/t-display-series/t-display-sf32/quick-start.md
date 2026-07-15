---
title: Quick Start
show_source: false
---

# T-Display SF32 Quick Start

## Overview

T-Display SF32 is based on the **SiFlower SF32** processor. Development uses the SF32 SDK.

---

## SDK Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-SF32.git
   ```
2. Follow the README instructions for SDK toolchain installation
3. Build and flash using the provided scripts

---

## Development Platforms

- [T-Display-SF32 Repository](https://github.com/Xinyuan-LilyGO/T-Display-SF32)

---

## FAQ

**Q: Can I use Arduino IDE or ESP-IDF?**  
A: No. T-Display SF32 uses the SiFlower SF32 chipset, which requires its own SDK toolchain.

**Q: Upload keeps failing?**  
A: Hold **BOOT**, press and release **RST**, then release **BOOT** to enter download mode.
