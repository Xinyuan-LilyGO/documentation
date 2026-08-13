---
title: Expansion Version Notes
show_source: false
tags: SF32LB52X, Keyboard, GNSS, L76K
---

# {{ $frontmatter.title }}

## Overview

The GNSS function of T-Display SF32 is located on the keyboard expansion module. It is not a standalone GNSS function integrated on the T-Display SF32 main board. To use the L76K multi-constellation GNSS function, make sure the corresponding keyboard expansion module is installed.

## Keyboard Expansion Module

The keyboard expansion module adds physical keyboard and positioning-related functions to T-Display SF32. It is suitable for handheld input, location logging, IoT nodes, outdoor communication, and portable data collection.

## Key Features

- L76K multi-constellation GNSS, supporting GPS, GLONASS, BeiDou, and QZSS
- 8×8 matrix keyboard interface
- TCA8418 keyboard controller
- AW21009 keyboard backlight LED driver

## Function Location

| Function | Location |
| :--: | :--: |
| SF32LB52X main controller | T-Display SF32 main board |
| 2.16-inch AMOLED display | T-Display SF32 main board |
| SX1262 LoRa | T-Display SF32 main board |
| BHI260AP 9-axis IMU | T-Display SF32 main board |
| BME280 temperature/humidity sensor | T-Display SF32 main board |
| L76K GNSS | Keyboard expansion module |
| TCA8418 keyboard controller | Keyboard expansion module |
| AW21009 keyboard backlight driver | Keyboard expansion module |

## Schematic

* [T-SF32-Keyboard V1.0 Schematic](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-SF32-Keyboard%20V1.0.PDF)

## Datasheet

* [L76K GNSS Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/C2916234_卫星定位模块_L76KB-A58_规格书_WJ417768.PDF)
* [AW21009 LED Driver Datasheet](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/AW21009QNR.pdf)
