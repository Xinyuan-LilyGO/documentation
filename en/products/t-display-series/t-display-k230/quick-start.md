---
title: Quick Start
show_source: false
---

# T-Display K230 Quick Start

## Overview

T-Display K230 is based on the **Kendryte K230** RISC-V dual-core processor and uses the K230 Linux/RT-Smart SDK for its main system. The board uses RTL8189FS SDIO Wi-Fi; Bluetooth requires a USB Bluetooth adapter or the optional nRF52840 base board.

---

## SDK Setup

1. In Ubuntu 22.04/24.04 or WSL2's Linux filesystem, clone the board repository with its SDK submodule:
   ```bash
   git clone --recurse-submodules https://github.com/Xinyuan-LilyGO/T-Display-K230.git t-display-k230
   cd t-display-k230
   ```
2. Install the toolchain and build the board image:
   ```bash
   ./scripts/setup_ubuntu.sh
   ./scripts/apply_to_sdk.sh
   ./scripts/build_sdcard_image.sh
   ```
3. The image is generated at `k230_bsp/images/sysimage-sdcard.img`. Write it to a TF card with `dd` on Linux or Rufus in **DD Image mode** on Windows.

---

## Development Platforms

- [K230 SDK](https://github.com/kendryte/k230_sdk)
- [T-Display-K230 Repository](https://github.com/Xinyuan-LilyGO/T-Display-K230)
- [K230 CanMV](https://github.com/kendryte/k230_canmv/)

---

## FAQ

**Q: Can I use Arduino IDE for T-Display K230?**  
A: The K230 main system requires the K230 SDK toolchain. The current T-Display-K230 BSP does not provide an ESP32-S3 co-processor workflow.

**Q: What operating systems does the K230 support?**  
A: The K230 SDK uses a Linux and RT-Smart dual-core architecture: the little core runs Linux and the big core runs RT-Smart.

**Q: Which chips provide Wi-Fi and Bluetooth on T-Display K230?**

A: The T-Display-K230 BSP uses RTL8189FS over SDIO for Wi-Fi. Bluetooth requires a USB Bluetooth adapter or the optional nRF52840 base board; check the actual driver for your hardware revision.
