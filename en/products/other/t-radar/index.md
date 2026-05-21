---
title: T-Radar
show_source: false
tags: Radar, 60GHz, A121, High Precision, IoT, Sensing
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-radar" />
<ImageGallery :columns="3" :images="[
  { src: '/products/other/t-radar/assets/t-radar-1.jpg', alt: 'T-Radar front view' },
  { src: '/products/other/t-radar/assets/t-radar-pin.jpg', alt: 'T-Radar pin diagram' },
  { src: '/products/other/t-radar/assets/t-radar-set.jpg', alt: 'T-Radar installation diagram' }
]" />

## Overview

LILYGO T-Radar V1.0 is a high-precision proximity detection expansion board based on the **60 GHz A121 radar chip** using **Pulsed Coherent Radar (PCR) technology**. Enables distance measurement up to **20 meters** with **millimeter-level absolute accuracy** and **micrometer-level relative accuracy**. Suitable for motion sensing, material identification, object tracking, and vital sign detection (breathing, heart rate). Compatible with LILYGO mainboards via pin headers.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :-----: | :----------------: | :-----: | :---------: |

### Installation

1. Connect T-Radar to a compatible LILYGO mainboard (e.g., T3, T-Beam) via pin headers
2. Ensure the mainboard provides sufficient I/O and power (3.3 V / 5 V)
3. Download and install the radar driver library
4. Initialize via I²C or SPI interface
5. Configure measurement mode (distance, motion, vital signs)
6. Read radar data and apply filtering as needed

### Development Platforms

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Video

## Key Features

- A121 60 GHz Pulsed Coherent Radar (PCR)
- Maximum measurement range: 20 meters
- Absolute accuracy: millimeter level; relative accuracy: micrometer level
- Supports: motion detection, material classification, object tracking, breathing, heart rate
- Configurable I²C / SPI communication interface
- Plug-and-play expansion board, compatible with major LILYGO mainboards

## Product Parameters

| Feature | Specification |
| :------------------------------: | :------------------------------: |
| Radar Chip | A121 60 GHz PCR |
| Maximum Range | 20 meters |
| Absolute Accuracy | Millimeter level (mm) |
| Relative Accuracy | Micrometer level (µm) |
| Communication | I²C / SPI (jumper configurable) |
| Power Supply | 3.3 V / 5 V |

## Pin Diagram

<img src="/products/other/t-radar/assets/t-radar-pin.jpg" alt="T-Radar pin diagram" width=100%>

## Dimension Diagram

## Schematic

## Datasheet

* [A121 Documentation](https://docs.acconeer.com/en/latest/detectors/a121/index.html)
* [A121 SDK](https://developer.acconeer.com/home/a121-docs-software/)

## Software Development

### Dependent Libraries

## FAQ

* **Q. Can T-Radar be used outdoors?**
  A. Yes. 60 GHz radar is less affected by weather, though heavy rain or snow may cause slight signal attenuation.

* **Q. Does it support multi-target detection?**
  A. The current version is designed for single-target high-precision ranging. Multi-target identification requires additional algorithm processing.

* **Q. What is the maximum refresh rate?**
  A. Depends on the host MCU and interface. Typically supports data updates above 100 Hz.

* **Q. Can it detect objects behind glass or walls?**
  A. Radar can penetrate thin non-metallic materials; metallic materials block the signal completely.

## Version History

| Version | Release Date | Update Description |
| :-----: | :----------: | :----------------: |
| T-Radar V1.0 | — | Initial version |
