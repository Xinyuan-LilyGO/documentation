---
title: Quick Start
show_source: false
---

# T-Display P4 Quick Start

## Overview

T-Display P4 is based on the **Espressif ESP32-P4** high-performance application processor. Development uses the ESP-IDF SDK.

---

## Firmware Download and Flashing Notes

When the documentation or repository mentions "download firmware", it usually means two actions: download the corresponding `.bin` firmware file first, then flash it to the board Flash. T-Display P4 has an **ESP32-P4 main processor** and an **ESP32-C6 wireless coprocessor**. Confirm the target chip before flashing to avoid writing firmware to the wrong chip.

### Flash ESP32-P4 Main Firmware

If you only need to restore the factory firmware, run official examples, or flash main applications such as `LilygoBox`, you usually only need to flash the ESP32-P4:

1. Download the required `.bin` firmware from [T-Display-P4 GitHub Releases](https://github.com/Xinyuan-LilyGO/T-Display-P4/releases).
2. Open [ESP Launchpad](https://espressif.github.io/esp-launchpad/) or another ESP flashing tool.
3. Connect T-Display P4 with USB-C, and select **ESP32-P4** as the target chip.
4. Select the downloaded `.bin` file, and set the flash address to `0x0`.
5. Start flashing. After flashing completes, press **RST** or power-cycle the board.

> If the board cannot enter download mode, hold **BOOT**, press and release **RST**, then release **BOOT** and start flashing again.

### Flash ESP32-C6 Coprocessor Firmware

ESP32-C6 is used for wireless functions such as Wi-Fi / Bluetooth. Only perform this step when you need to update the wireless coprocessor firmware. The coprocessor firmware cannot be flashed as ESP32-P4 main firmware.

1. First flash the `coprocessor_download_mode` firmware from the repository to the ESP32-P4 main processor at address `0x0`.
2. Boot the board and check the serial log. Confirm that `Coprocessor preparation completed` appears.
3. Power off the board, then connect a 3.3V USB-TTL adapter to the coprocessor UART: board `RX` to USB-TTL `TX`, board `TX` to USB-TTL `RX`, and `GND` to `GND`.

   The UART download connector is shown below. The pin order is `RX-TX-3.3V-GND`:

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-uart-download.png" alt="T-Display P4 ESP32-C6 UART download connector" width=70%>

4. Put ESP32-C6 into download mode: hold the coprocessor **BOOT** button, press and release **RESET**, then release **BOOT**.
5. In the flashing tool, select **ESP32-C6** as the target chip, select the coprocessor firmware, and set the flash address to `0x0`.
6. After the ESP32-C6 coprocessor firmware is flashed, flash the ESP32-P4 main processor back to the factory firmware or the main application firmware you want to use.

> Note: ESP32-P4 main firmware and ESP32-C6 coprocessor firmware are not interchangeable. Select **ESP32-P4** for main firmware, and **ESP32-C6** for coprocessor firmware.
> It is recommended to finish flashing the ESP32-C6 coprocessor firmware first, then flash the ESP32-P4 main processor back to the factory firmware or normal application firmware.

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
