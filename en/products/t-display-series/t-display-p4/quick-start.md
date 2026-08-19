---
title: Quick Start
show_source: false
---

# T-Display P4 Quick Start

## Overview

T-Display P4 is based on the **Espressif ESP32-P4** high-performance application processor. Development uses the ESP-IDF SDK.

---

## Firmware Download and Flashing Notes

When the documentation or repository mentions "download firmware", it usually means two actions: download the corresponding `.bin` firmware file first, then use **LILYGO Spark** to flash it to the board Flash. T-Display P4 has an **ESP32-P4 main processor** and an **ESP32-C6 wireless coprocessor**. Confirm the target chip before flashing to avoid writing firmware to the wrong chip.

> **USB-C port note:** For ESP32-P4 main firmware flashing, serial terminal access, or data transfer, connect the right-side USB-C port labeled `P4.U`. The left-side USB-C port is for charging / power only and is not used for firmware flashing or data transfer. Disable RTS / hardware flow control in serial terminal software; the RTS line may reset the P4 and cause the device to hang.

### Flash ESP32-P4 Main Firmware

If you only need to restore the factory firmware, run official examples, or flash main applications such as `LilygoBox`, you usually only need to flash the ESP32-P4:

1. Download the required `.bin` firmware from [T-Display-P4 GitHub Releases](https://github.com/Xinyuan-LilyGO/T-Display-P4/releases).
2. Open [LILYGO Spark](https://lilygo.cc/en-us/pages/lilygo-spark), then go to the firmware flashing tool.
3. Connect T-Display P4 with USB-C, and select **ESP32-P4** as the target chip.
4. Select the downloaded `.bin` file, and set the flash address to `0x0`.
5. Start flashing. After flashing completes, press **RST** or power-cycle the board.

> If the board cannot enter download mode, hold **BOOT**, press and release **RST**, then release **BOOT** and start flashing again.

### Flash ESP32-C6 Coprocessor Firmware

ESP32-C6 is used for wireless functions such as Wi-Fi / Bluetooth. The coprocessor firmware cannot be flashed as ESP32-P4 main firmware. The following steps use the **LILYGO Spark** firmware flashing tool, in this order: **P4 preparation firmware → C6 coprocessor firmware → P4 factory firmware**:

1. In Firmware Center, select the **T-Display P4** firmware series, find [`[T-Display-P4][coprocessor_download_mode]`](https://github.com/Xinyuan-LilyGO/T-Display-P4/blob/main/firmware/%5BT-Display-P4%5D%5Bcoprocessor_download_mode%5D), and click download. After it is downloaded, select the device's **ESP32-P4** port and flash it. This prepares the ESP32-C6 for download mode.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-1-select-coprocessor-download-mode.png" alt="Select the T-Display P4 coprocessor download mode firmware" width=100%>

2. After `coprocessor_download_mode` is flashed, click delete on the downloaded firmware, then download the next firmware.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-2-delete-coprocessor-download-mode.png" alt="Delete the downloaded coprocessor download mode firmware" width=100%>

3. Select [`lilygobox-t-display-p4-device-v1.0-esp32c6-rev0.0-v2.12.3-merged.bin`](https://github.com/Xinyuan-LilyGO/lilygobox-espidf/releases/download/v1.0.4/lilygobox-t-display-p4-device-v1.0-esp32c6-rev0.0-v2.12.3-merged.bin) as the ESP32-C6 coprocessor firmware.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-3-select-c6-firmware.png" alt="Select the ESP32-C6 coprocessor firmware" width=100%>

   Connect the 3.3V USB-TTL serial downloader to the device's C6 UART connector. The connector pin order is `RX-TX-3.3V-GND`. Wire board `RX` to USB-TTL `TX`, board `TX` to USB-TTL `RX`, and `GND` to `GND`.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-uart-download.png" alt="T-Display P4 ESP32-C6 UART download connector" width=70%>

4. In the flashing dialog, select the USB-TTL serial downloader port that corresponds to the device's **ESP32-C6**, then start flashing.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-4-flash-c6-port.png" alt="Select the ESP32-C6 port and start flashing" width=100%>

5. After the ESP32-C6 firmware is flashed, click delete on the downloaded C6 firmware, then download the next firmware.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-5-delete-c6-firmware.png" alt="Delete the downloaded ESP32-C6 firmware" width=100%>

6. Select [`lilygobox-t-display-p4-device-v1.0-esp32p4-rev1.0-v1.0.4-merged.bin`](https://github.com/Xinyuan-LilyGO/lilygobox-espidf/releases/download/v1.0.4/lilygobox-t-display-p4-device-v1.0-esp32p4-rev1.0-v1.0.4-merged.bin) as the ESP32-P4 factory firmware.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-6-select-p4-factory-firmware.png" alt="Select the ESP32-P4 factory firmware" width=100%>

7. In the flashing dialog, select the USB port that corresponds to the device's **ESP32-P4**, then start flashing.

   <img src="/products/t-display-series/t-display-p4/index/image/t-display-p4-c6-flash-step-7-flash-p4-port.png" alt="Select the ESP32-P4 port and start flashing" width=100%>

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

**Q: The device resets or hangs after opening a serial terminal?**  
A: Make sure you are connected to the right-side `P4.U` data port, and disable RTS / hardware flow control in the serial terminal program.
