---
title: T5-E-Paper-Basic Quick Start
show_source: false
---

# T5-E-Paper-Basic Quick Start

## Before You Begin

The official project is maintained for PlatformIO. Arduino IDE can be used with equivalent ESP32-S3 settings, but PlatformIO is the recommended and tested workflow.

| Requirement | Version / Source |
| :--- | :--- |
| Visual Studio Code | [Download](https://code.visualstudio.com/) |
| PlatformIO | 6.5.0 |
| PlatformIO Espressif 32 | 6.13.0 |
| M5GFX | ^0.2.24 |
| SensorLib | ^0.4.1 |
| Project | [T5-E-Paper-Basic](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic) |

## Hardware Setup

1. Check that the e-paper flex cable is fully seated.
2. Insert a FAT32-formatted TF card only if the selected example requires one.
3. Connect the board with a data-capable USB-C cable.

## PlatformIO

### Build and Upload

1. Install Visual Studio Code and the **PlatformIO IDE** extension.
2. Clone and open the official repository:

   ```powershell
   git clone https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic.git
   cd T5-E-Paper-Basic
   ```

3. In `platformio.ini`, uncomment exactly one `src_dir` entry. The factory-test example is selected by default.
4. Build and upload:

   ```powershell
   pio run -e T5_E_PAPER_BASIC
   pio run -e T5_E_PAPER_BASIC -t upload
   ```

5. Open the serial monitor when diagnostics are needed:

   ```powershell
   pio device monitor --baud 115200
   ```

### Available Examples

| Example | Purpose |
| :--- | :--- |
| [factory_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/factory_test) | Combined EPD, XL9555, TF card, Wi-Fi, battery, and button test |
| [epd_display_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/epd_display_test) | Geometry, grayscale, text, pattern, and refresh test |
| [sd_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/sd_test) | TF / SD card mount, read, and write test |
| [wifi_scan](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/wifi_scan) | Scan nearby 2.4 GHz Wi-Fi networks |
| [axp2602_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/axp2602_test) | Battery voltage, current, SOC, SOH, and gauge status |
| [employee_badge](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/employee_badge) | Render a static employee badge with an embedded logo and QR code |

## Arduino IDE

Use **ESP32S3 Dev Module** and settings equivalent to the repository board definition:

| Setting | Value |
| :--- | :--- |
| Board | ESP32S3 Dev Module |
| USB CDC On Boot | Enabled |
| CPU Frequency | 240 MHz |
| Flash Mode | QIO |
| Flash Size | 16 MB |
| Partition Scheme | 3 MB APP / FATFS |
| PSRAM | Enabled |
| Upload Speed | 921600 |
| USB Mode | CDC and JTAG |

## Panel Configuration

The repository lists a standard 960 x 540 display configuration. The factory-test application also contains a 1216 x 684 panel configuration selected with:

```ini
-DFACTORY_TEST_PANEL_1216X684=1
```

## Flash the Factory Firmware

Download the matching merged image from the repository's [firmware directory](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/firmware), then write it from address `0x0`:

```powershell
python -m esptool --chip esp32s3 --port COMx --baud 921600 write_flash 0x0 firmware\T5-E-Paper-Basic-factory_20260817.bin
```

Replace `COMx` and the firmware filename with the values for your device.

## Enter Download Mode Manually

1. Hold **BOOT**.
2. Press and release **RESET**.
3. Release **BOOT**.
4. Start the upload again.

## Troubleshooting

| Symptom | Check |
| :--- | :--- |
| Display is blank | Check the EPD cable, power supply, selected example, and panel resolution. |
| Severe ghosting or lines | Power-cycle the board and allow a complete full refresh. |
| SD card is not detected | Use FAT32 and verify GPIO38/39/40/47 plus XL9555 P05. |
| Wi-Fi scan is empty | Use a 2.4 GHz access point; ESP32-S3 cannot scan 5 GHz-only networks. |
| Side buttons do not respond | Check I2C on GPIO2/GPIO3 and XL9555 P00 through P04. |
| Upload fails | Enter download mode manually and verify the USB cable supports data. |
