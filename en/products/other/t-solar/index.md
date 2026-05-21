---
title: T-Solar
show_source: false
tags: Solar, Low Power, Charging, Outdoor, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-solar-kit" />
<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-solar/assets/t-solar-1.jpg', alt: 'T-Solar Kit front view' },
  { src: '/products/other/t-solar/assets/t-solar-board-info.jpg', alt: 'T-Solar panel specifications' },
  { src: '/products/other/t-solar/assets/t-solar-set.jpg', alt: 'T-Solar installation diagram' }
]" />

## Overview

The **T-Solar Kit** is a solar charging expansion solution designed for outdoor IoT devices. Provides stable off-grid power for low-power devices (environmental sensors, agricultural monitoring stations, field positioning terminals, etc.) via a **5.4 W peak solar panel** with a wide input range of 4.4–6 V. Uses a standard JST2.0 interface for quick installation. Includes all mounting screws and hardware (SUS304 stainless steel). Compatible with T3, T-Beam, T-Echo Lite, and other mainstream LILYGO mainboards.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |

### Installation

<img src="/products/other/t-solar/assets/t-solar-all.jpg" alt="T-Solar installation steps" width=100%>

1. Connect the solar panel's JST2.0 interface to the expansion board
2. Secure the expansion board using the provided M4/M5 screws
3. Connect the expansion board's output to a compatible mainboard
4. Position the solar panel facing sunlight and verify charging status

### Development Platforms

## Video

## Key Features

- 5.4 W peak solar panel (Vmp = 5.7 V, Imp = 947 mA)
- Wide input voltage: 4.4–6 V
- Standard JST2.0 interface for quick connection
- SUS304 stainless steel accessories for outdoor environments
- M12/M16 IPEX antenna adapter options
- Compatible with T3, T-Beam, T-Echo Lite, and more

## Product Parameters

| Parameter | Value |
| :-------: | :---: |
| Peak Power (Pmax) | 5.4 W |
| Peak Voltage (Vmp) | 5.7 V |
| Peak Current (Imp) | 947 mA |
| Open Circuit Voltage (Voc) | 6.9 V |
| Short Circuit Current (Isc) | 994 mA |
| Input Voltage Range | 4.4–6 V |
| Output Interface | JST2.0 |
| Battery Type | 3.7 V Li-ion / LiPo |

### Kit Contents

- T-Solar Charging Expansion Board × 1
- Solar Panel Connection Cable (JST2.0) × 1
- M4×8×7 Machine Screws × 2
- M5×10 Flat Head Self-Tapping Screws × 2
- SUS304 Stainless Steel Washers × 2
- IPEX Adapter (M12/M16 optional) × 1

## Pin Diagram

### Antenna Installation Options

**M12 Interface:**

<img src="/products/other/t-solar/assets/t-solar-m12.jpg" alt="M12 adapter" width=400px>

**M16 Interface:**

<img src="/products/other/t-solar/assets/t-solar-m16.jpg" alt="M16 adapter" width=400px>

## Dimension Diagram

## Schematic

## Datasheet

## Software Development

## FAQ

* **Q. Can I connect a higher-power solar panel?**
  A. This product is designed for 5.4 W peak input. Solar panels exceeding 6 W are not recommended.

* **Q. Can it charge on cloudy or rainy days?**
  A. Supports 4.4 V low-voltage input, allowing charging in low-light environments at reduced efficiency.

* **Q. What battery types are supported?**
  A. Supports 3.7 V Lithium-ion / Lithium-polymer batteries with built-in intelligent charging protection.

* **Q. Are special tools required for installation?**
  A. Only a Phillips screwdriver is needed — all hardware is included in the kit.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Solar Kit V1.0 | — | Initial version |
