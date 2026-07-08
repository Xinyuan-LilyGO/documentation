---
title: T-PCIE SIM7600E
show_source: false
tags: SIM7600E, LTE, 4G, mini PCIe, GNSS
---

# {{ $frontmatter.title }}

<ImageGallery :columns="2" :images="[
  { src: '/products/t-sim-series/sim7600e/index/image/sim7600e.jpg', alt: 'T-PCIE SIM7600E front view' },
  { src: '/products/t-sim-series/sim7600e/index/image/sim7600e-r.jpg', alt: 'T-PCIE SIM7600E rear view' }
]" />

## Overview

T-PCIE SIM7600E is a **mini PCIe form-factor LTE modem module** based on the **SIM7600E** chip. It is designed to be inserted into the T-PCIE mainboard's mPCIe slot. Supports LTE-FDD/LTE-TDD, HSPA+, GSM/GPRS/EDGE multi-mode wireless communication with maximum downlink 10 Mbps / uplink 5 Mbps. Integrates multi-constellation GNSS, built-in TCP/IP/HTTP/HTTPS/FTP protocol stack, and USB drivers for Windows/Linux/Android. AT commands are compatible with the SIM7600 series. Suitable for telematics, surveillance equipment, industrial routers, and remote IoT devices.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |
| [LilyGo-T-PCIE](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) | ✓ | | AT commands, MQTT, HTTP examples |

### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the **PlatformIO IDE** extension in VS Code
3. Clone the [LilyGo-T-PCIE](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE) repository and open it in VS Code
4. Open `platformio.ini`, uncomment the target example `src_dir` line
5. Click **✓** to compile, click **→** to upload

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
2. Copy all folders from the project `lib/` directory into your Arduino `libraries/` folder
3. Configure Tools → Board:

| Arduino IDE Setting | Value |
| :-----------------: | :---: |
| Board | **ESP32 Wrover Module** |
| CPU Frequency | 240 MHz (WiFi/BT) |
| Flash Mode | QIO |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM | **Enable** |
| Upload Speed | 921600 |

4. In the sketch, open `utilities.h` and uncomment `#define LILYGO_T_SIM7600X`
5. Click **Upload**

### Development Platforms

1. [PlatformIO](https://platformio.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Related Videos

## Key Features

- SIM7600E LTE Cat-4 modem, mini PCIe form factor
- LTE-FDD B1/B3/B5/B8/B20, GSM 900/1800 MHz
- Max 10 Mbps downlink / 5 Mbps uplink
- Integrated multi-constellation GNSS
- Built-in TCP/IP, HTTP/HTTPS, FTP/FTPS protocol stack
- USB 2.0 interface, Windows/Linux/Android drivers
- AT commands compatible with SIM7600 series

## Modem Specifications

| Feature | Specification |
| :-----: | :-----------: |
| Module | SIM7600E |
| Form Factor | mini PCIe |
| Standard | LTE Cat-4 |
| LTE-FDD | B1/B3/B5/B8/B20 |
| GSM | 900 / 1800 MHz |
| Max Downlink | 10 Mbps |
| Max Uplink | 5 Mbps |
| GNSS | Multi-constellation |
| Interface | UART, USB 2.0, GPIO |
| AT Commands | Compatible with SIM7600 series |
| SIM Card | Nano SIM |

> **Note:** SIM7600E covers Europe, Middle East, Africa, South Korea, and Thailand frequency bands. For other regions, refer to [Modem differences](#modem-differences) below.

## Modem Differences

| Model | GPS | Phone Call | SMS | Frequency Band |
| :---: | :-: | :--------: | :-: | :------------- |
| SIM7600E | ✅ | ✅ | ✅ | LTE-FDD: B1/B3/B5/B8/B20; GSM: 900/1800 MHz |

> The voice call version requires an onboard audio decoder chip. Send `AT+SIMCOMATI` to check your module's firmware and hardware version.

## DIP Switch

| Name | GPIO | ON | OFF |
| :--: | :--: | :- | :-- |
| Pin 1 | 27 | Connect Modem TX to ESP | Disconnect |
| Pin 2 | 26 | Connect Modem RX to ESP | Disconnect |
| Pin 3 | NC | No connect | No connect |
| Pin 4 | PWRKEY | Power controlled by ESP | Auto power-on |

**ESP programming mode** — Set Pin 1 & 2 to ON (modem UART connected to ESP), Pin 4 to OFF (ESP controls modem power).

**USB Modem mode** — Set Pin 1 & 2 to OFF, Pin 4 to ON. Used to update modem firmware or use dial-up internet directly from a PC.

## Pin Map

| Name | GPIO |
| :--- | :--: |
| Modem TX | 27 |
| Modem RX | 26 |
| Modem PWRKEY | 4 |
| Modem RING | 33 |
| Modem DTR | 32 |
| Modem Flight (Airplane) | 25 |
| Modem Status | 34 |
| Board LED | 12 |
| SD SCK | 14 |
| SD MISO | 2 |
| SD MOSI | 15 |
| SD CS | 13 |
| Battery ADC | 35 |
| Solar ADC | 36 |
| Default SDA | 21 |
| Default SCL | 22 |

> **Important:**
> - The **Modem Flight pin (GPIO25)** must be set HIGH to connect to the cellular network; LOW = airplane mode.
> - GPIO33 and above on ESP32 are input-only — do not use as output.
> - Do not connect external wires to GPIO4 (PWRKEY), GPIO25, GPIO32, or GPIO33 header pins.
> - Remove the SD card before uploading new firmware (SD uses GPIO2 as CS).

## Electrical Parameters

| Parameter | Value |
| :-------: | :---: |
| USB-C Input Voltage | 5 V |
| Solar Input Voltage | 5 ~ 6 V |
| Charge Max Current | 500 mA |
| Battery Voltage | 3.7 V |
| VBUS (pin header) | 5 V |
| VBAT (pin header) | 4.2 V max |

> - Do not use USB-C to USB-C cables (e.g. Apple MacBook ports cannot power this board directly — use USB-A to USB-C).
> - VBUS is only active when USB-C is connected. With battery only, VBUS has no output.
> - USB/VBUS input must supply at least 2 A peak at 5 V; dropping below 5 V will trigger an automatic shutdown.

## Battery Protector

| Parameter | Value |
| :-------: | :---: |
| Over-voltage Threshold | 4.30 V |
| Under-voltage Threshold | 2.5 V |
| Over-discharge Current | 3 A |

## Button Description

| Button | Function |
| :----: | :------- |
| RST (near modem) | Reset the device |
| PWR (near modem) | When battery is first connected, press to activate battery power supply |

## Antenna

| Connector | Function |
| :-------: | :------- |
| MAIN | LTE main antenna |
| AUX | LTE diversity antenna (optional, not required) |
| GPS | Active GPS antenna (3.3 V, IPEX Gen-1) |

## LED Description

| LED | Color | Location |
| :-: | :---: | :------- |
| Modem Status | Red | Near modem |
| Modem Network | Red | Near modem |
| Charge | Red | Near battery switch |
| Charge Done | Green | Near battery switch |
| Board LED | Blue | Near ESP module |

> Modem Status and Network LEDs cannot be turned off in software.

## Pin Diagram

<img src="/products/t-sim-series/sim7600e/index/image/sim7600e-1.jpg" alt="SIM7600E pin definition" width="60%">

## Dimension Diagram

## Schematic

* [T-PCIE V1.2 Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE/blob/master/schematic/T-PCIE-V1.2.pdf)

## Datasheet

* [SIM7600E Datasheet](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/Files/T-SIM7600E-PCIE.pdf)
* [SIMCOM SIM7600X Official Page](https://cn.simcom.com/product/SIM7600X.html)

## Software Development

* [LilyGo-T-PCIE GitHub Repository](https://github.com/Xinyuan-LilyGO/LilyGo-T-PCIE)

### Dependent Libraries

## FAQ

* **Q. Cannot upload sketch.**
  A. Hold BOOT (IO0), press RST, release RST, then release BOOT. Try uploading again. Alternatively, short GND and IO0 together, press RST, then disconnect IO0 from GND before uploading.

* **Q. SIM card not detected.**
  A. Insert the SIM card before powering on. Hot-inserting after boot may cause detection failure.

* **Q. The board resets when switching between USB and battery.**
  A. This is expected behavior — the board does not have seamless power switching. It cannot be changed in software.

* **Q. Does SIM7600E support voice calls?**
  A. Only if the board has an onboard audio decoder chip. Check by sending `AT+SIMCOMATI`. If no decoder is present, voice calls are not possible.

* **Q. Which GPS antenna is compatible?**
  A. Use an active GPS antenna with 3.3 V supply (IPEX Gen-1 connector). Most active GPS antennas supporting 2.5–5.5 V are compatible.

* **Q. What does the onboard power switch do?**
  A. It controls battery power only. If an external battery is connected to the VBAT pin directly, the switch is bypassed. It has no effect when powered via USB.

## Version History

| Version | Date | Notes |
| :-----: | :--: | :---- |
| T-PCIE V1.2 | — | Current version |
