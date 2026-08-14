---
title: Quick Start
show_source: false
---

# T-Dongle-S3-Plus Quick Start

## Development Environment

```bash
git clone https://github.com/Xinyuan-LilyGO/T-Dongle-S3.git
```

## PlatformIO

1. Install VS Code and PlatformIO IDE
2. Open the `T-Dongle-S3` repository
3. Select the Plus environment and example in `platformio.ini`
4. Keep only one `src_dir = xxxx` example path that you want to run
5. Click **Build**, plug in the device, then click **Upload**

## Arduino IDE

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| CPU Frequency | **240MHz (WiFi)** |
| Flash Mode | **QIO 80MHz** |
| Flash Size | **16MB (128Mb)** |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |

> **Note:** T-Dongle-S3-Plus has 8MB OPI PSRAM. Set PSRAM to **OPI PSRAM** in Arduino IDE.

## Download Mode

If upload fails, hold the **BOOT** button while plugging the device into the USB port to enter download mode, then upload again. After flashing, unplug and plug the device again. Do not hold BOOT for normal startup.

## Pin Notes

| Name | GPIO |
| --- | --- |
| RGB DIN | GPIO40 |
| RGB CLK | GPIO39 |
| SDMMC D0 | GPIO14 |
| SDMMC D1 | GPIO17 |
| SDMMC D2 | GPIO21 |
| SDMMC D3 | GPIO18 |
| SDMMC CLK | GPIO12 |
| SDMMC CMD | GPIO16 |
| Button | GPIO0 |
| QWIIC TX | GPIO43 |
| QWIIC RX | GPIO44 |
| PDM CLK | GPIO9 |
| PDM DATA | GPIO8 |
| IR | GPIO7 |
| I2C SDA (Encrypted Version Only) | GPIO11 |
| I2C SCL (Encrypted Version Only) | GPIO10 |

## QWIIC

QWIIC is configured for serial port function by default. To use it as I2C, add pull-up resistors to the external sensor.

## Encryption Chip Note

The encrypted version may include an ATECC508A. To prevent the chip from being locked, the factory only performs I2C probing to confirm that the encryption chip responds normally. It does not configure or read/write the ATECC508A. Once configured, the chip is locked by its inherent configuration, so make sure you understand the process before changing it.
