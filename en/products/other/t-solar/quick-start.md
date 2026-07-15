---
title: Quick Start
show_source: false
---

# T-Solar Quick Start

## Overview

T-Solar is a solar charging expansion kit for outdoor IoT devices. It has no host MCU — it provides off-grid power to a compatible LILYGO mainboard (T3, T-Beam, T-Echo Lite, etc.) via a JST2.0 connector.

---

## Hardware Installation

1. Connect the solar panel's JST2.0 cable to the T-Solar expansion board input
2. Connect the expansion board's output JST2.0 cable to the battery/power input of your mainboard
3. Secure the expansion board with the included M4/M5 screws and SUS304 washers
4. Position the solar panel facing direct sunlight and verify charging status on your mainboard

---

## Electrical Specifications

| Parameter | Value |
| :-------: | :---: |
| Peak Power (Pmax) | 5.4 W |
| Peak Voltage (Vmp) | 5.7 V |
| Peak Current (Imp) | 947 mA |
| Open-Circuit Voltage (Voc) | 6.9 V |
| Short-Circuit Current (Isc) | 994 mA |
| Input Voltage Range | 4.4–6 V |
| Output Interface | JST2.0 |
| Battery Type | 3.7 V Li-ion / LiPo |

---

## Notes

- **No host MCU**: T-Solar is a power accessory — no firmware required
- **Low-light charging**: 4.4 V minimum input allows charging in overcast conditions at reduced efficiency
- **Outdoor-rated**: SUS304 stainless steel mounting hardware for weather resistance
- **Antenna options**: Supports M12 and M16 IPEX antenna adapters for mainboards with external antenna connectors
- **Do not exceed 6 W** input — panels above this rating are not supported

---

## Kit Contents

- T-Solar Charging Expansion Board × 1
- Solar Panel with JST2.0 Connection Cable × 1
- M4×8×7 Machine Screws × 2
- M5×10 Flat Head Self-Tapping Screws × 2
- SUS304 Stainless Steel Washers × 2
- IPEX Adapter (M12/M16 optional) × 1

---

## FAQ

**Q: Can I use a higher-power solar panel?**
A: No — this kit is rated for 5.4 W peak input. Panels exceeding 6 W are not recommended.

**Q: Does it charge on cloudy days?**
A: Yes, at reduced efficiency. The 4.4 V minimum input threshold allows charging in low-light conditions.

**Q: What tools are needed for installation?**
A: Only a Phillips screwdriver — all mounting hardware is included.
