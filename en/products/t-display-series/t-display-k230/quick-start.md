---
title: Quick Start
show_source: false
---

# T-Display K230 Quick Start

## Overview

T-Display K230 is based on the **Kendryte K230** RISC-V dual-core processor. It does not use the standard ESP32 Arduino/PlatformIO workflow. Refer to the official K230 SDK for development.

---

## SDK Setup

1. Clone the K230 SDK:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Display-K230.git
   ```
2. Follow the README for toolchain installation and build instructions
3. Flash using the provided scripts or `kflash` tool

---

## Development Platforms

- [K230 SDK](https://github.com/kendryte/k230_sdk)
- [T-Display-K230 Repository](https://github.com/Xinyuan-LilyGO/T-Display-K230)

---

## FAQ

**Q: Can I use Arduino IDE for T-Display K230?**  
A: No. T-Display K230 is based on the Kendryte K230 RISC-V SoC and requires the K230 SDK toolchain.

**Q: What operating systems does the K230 support?**  
A: The K230 supports bare-metal, RT-Thread, and Linux (via the dual-core architecture — big core runs Linux, little core runs RT-Thread or bare-metal).
