---
title: T-2Can-FD
show_source: false
tags: CAN FD, ESP32-S3, MCP2518
---

# {{ $frontmatter.title }} <ShopLink href="" />

<ImageGallery :columns="3" :images="[
  { src: '/products/industrial-series/t-2can-fd/index/image/t-2can-fd-1.jpg', alt: 'T-2Can-Fd front view' },
  { src: '/products/industrial-series/t-2can-fd/index/image/t-2can-fd-2.jpg', alt: 'T-2Can-Fd rear view' },
  { src: '/products/industrial-series/t-2can-fd/index/image/t-2can-fd-pin.jpg', alt: 'T-2Can-Fd pinout diagram' }
]" />

## Overview

T-2Can-FD is an ESP32-S3-based development board with dual CAN FD bus interfaces. It provides two independent CAN buses: **CAN bus 1** is driven by an external **MCP2518FD** controller (SPI, CAN-FD capable, compatible with CAN 2.0), and **CAN bus 2** uses the **ESP32-S3's built-in TWAI** controller (CAN 2.0B). Ideal for industrial communication, vehicle diagnostics, robot control, and other CAN bus applications that require high reliability and high throughput.

> **Usage Notes:**
> 1. If firmware flashing fails, press and hold the `BOOT-0` button and try again.
> 2. When using USB serial debugging, USB is configured as UART0 output by default. To use the external UART interface, change the CDC settings (see FAQ).

## Quick Start

### Example Support

| Example | PlatformIO / Arduino | Description |
| :--: | :----------------: | :--: |
| [can](https://github.com/Xinyuan-LilyGO/T-2Can/tree/main/examples/can) | ✅ | CAN communication example (requires CAN FD adaptation) |
| [original_test](https://github.com/Xinyuan-LilyGO/T-2Can/tree/main/examples/original_test) | ✅ | Factory test program |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/).
2. Search for and install **PlatformIO IDE** in VS Code.
3. Clone or download the project repository: `https://github.com/Xinyuan-LilyGO/T-2Can`.
4. Open the project folder in VS Code.
5. Open `platformio.ini`, and uncomment the desired example under `[platformio]` (`default_envs = xxx`) for the T-2Can-Fd configuration.
6. Click the lower-left **✓** to build.
7. Connect the board and click **→** to upload.

### Arduino IDE

1. Install [Arduino IDE](https://www.arduino.cc/en/software).
2. Install ESP32 board support: Tools → Board → Board Manager → search for `esp32` and install `Espressif Systems`.
3. Select the board: **ESP32S3 Dev Module**.
4. Copy all libraries from the project's `libraries` directory into the Arduino libraries folder (`Sketchbook location/libraries`).
5. Open the example sketch (`.ino`) from the `examples` directory.
6. Select the following settings in the **Tools** menu:

| Arduino IDE (ESP32-S3) | Value |
| :--------------------------: | :-: |
| Board | **ESP32S3 Dev Module** |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | **16MB (128Mb)** |
| Core Debug Level | None |
| Partition Scheme | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM | **OPI PSRAM** |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

7. Select the correct port and click **Upload**.

### Firmware Burning (using flash tool)

1. Open the ESP32 flash tool in the project's `tools` directory.
2. Select the correct chip and flashing method, then click **OK**.
3. Select the firmware file in the `firmware/` directory, set the address, choose the port, and click burn.
4. If burning fails, press and hold the **BOOT-0** button and try again.

## Related Videos

> No video tutorials yet, contributions are welcome.

## Key Features

- MCU: ESP32-S3-WROOM-1U (16 MB Flash + 8 MB PSRAM)
- CAN bus 1: external **MCP2518FD** controller via SPI (CAN-FD, compatible with CAN 2.0)
- CAN bus 2: ESP32-S3 built-in **TWAI** controller (CAN 2.0B)
- Supports Wi-Fi + Bluetooth 5.0 LE
- USB powered with onboard 5V buck converter
- External UART expansion interface (CDC can be switched by configuration)
- Compact design suitable for automotive and industrial fieldbus applications

## Product Parameters

| Feature | Specification |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1U |
| Flash | 16 MB |
| PSRAM | 8 MB |
| CAN Bus 1 | MCP2518FD (SPI, CAN-FD) |
| CAN Bus 2 | ESP32-S3 built-in TWAI (CAN 2.0B) |
| Interface | SPI |
| Wireless | Wi-Fi 802.11 b/g/n + Bluetooth 5.0 LE |
| Power | USB 5V |
| Dimensions | TBD |

## Pinout Diagram

Pin definitions refer to the configuration file:  
[pin_config.h](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/libraries/private_library/pin_config.h)

> See the header file above for GPIO mapping, SPI chip select, interrupt pins, and other details.

### Main Interface Description

| Interface | Description |
| :--: | :--: |
| CAN1 | MCP2518FD CAN-FD controller, SPI chip select CS1 |
| CAN2 | ESP32-S3 built-in TWAI controller |
| USB | Default UART0 debug output |
| UART Interface | External UART0 (requires CDC disabled) |
| BOOT-0 | Download mode button |
| RST | Reset button |

## Dimension Diagram

<img src="/products/industrial-series/t-2can-fd/index/image/t-2can-fd-3.jpg" alt="T-2Can-Fd dimension diagram" width="100%" />

## Schematic

- [T-2Can-Fd V1.0 Schematic PDF](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/project/T-2Can-Fd_V1.0.pdf)

## Datasheet

- [MCP2518 Datasheet](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/docs/MCP2518FDT-E-SL.pdf)
- [ESP32-S3-WROOM-1U Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf)

## Software Development

- [T-2Can GitHub Repository](https://github.com/Xinyuan-LilyGO/T-2Can)
- [Longan_CANFD library](https://github.com/Longan-Labs/Longan_CANFD) (for MCP2518)

## FAQ

**Q: I still can't set up the development environment after reading the guide. What should I do?**  
A: Refer to [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) for more detailed setup guidance.

**Q: When Arduino IDE prompts me to update libraries, should I update them?**  
A: Choose not to update. Different library versions may be incompatible; it is recommended to use the project-provided library versions.

**Q: Why is there no serial output on the board's UART interface?**  
A: The project uses USB as UART0 output by default. To use the external UART interface:  
- PlatformIO users: modify `platformio.ini` and set `build_flags = -DARDUINO_USB_CDC_ON_BOOT=true` to `false`.  
- Arduino users: set USB CDC On Boot to **Disabled** in the Tools menu.

**Q: Why does flashing keep failing?**  
A: Press and hold the **BOOT-0** button while retrying the download.

**Q: Is T-2Can-Fd compatible with T-2Can firmware?**  
A: No. T-2Can-Fd uses MCP2518FD for CAN bus 1 and ESP32-S3 TWAI for CAN bus 2, requiring corresponding libraries and examples.

## Version History

| Version | Release Date | Update Notes |
| :--: | :------: | :--: |
| T-2Can-Fd V1.0 | 2026-04-10 | Initial release, MCP2518FD + ESP32-S3 TWAI |
