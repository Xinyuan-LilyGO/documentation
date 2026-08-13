---
title: 拓展版本说明
show_source: false
tags: SF32LB52X, Keyboard, GNSS, L76K
---

# {{ $frontmatter.title }}

## 概述

T-Display SF32 的 GNSS 功能位于键盘拓展模块上，不是 T-Display SF32 主板自带的独立 GNSS 功能。需要使用 L76K 多星座 GNSS 时，请确认设备已安装对应的键盘拓展模块。

## 键盘拓展模块

键盘拓展模块用于为 T-Display SF32 增加实体键盘与定位相关功能，适合手持输入、定位记录、物联网节点、户外通信和便携式数据采集等应用。

## 主要功能

- L76K 多星座 GNSS，支持 GPS、GLONASS、北斗、QZSS
- 8×8 矩阵键盘接口
- TCA8418 键盘控制器
- AW21009 键盘背光 LED 驱动

## 功能归属

| 功能 | 所在位置 |
| :--: | :--: |
| SF32LB52X 主控 | T-Display SF32 主板 |
| 2.16 英寸 AMOLED 屏幕 | T-Display SF32 主板 |
| SX1262 LoRa | T-Display SF32 主板 |
| BHI260AP 九轴 IMU | T-Display SF32 主板 |
| BME280 温湿度传感器 | T-Display SF32 主板 |
| L76K GNSS | 键盘拓展模块 |
| TCA8418 键盘控制器 | 键盘拓展模块 |
| AW21009 键盘背光驱动 | 键盘拓展模块 |

## 原理图

* [T-SF32-Keyboard V1.0 原理图](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/hardware/T-SF32-Keyboard%20V1.0.PDF)

## 数据手册

* [L76K GNSS 规格书](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/C2916234_卫星定位模块_L76KB-A58_规格书_WJ417768.PDF)
* [AW21009 LED 驱动数据手册](https://github.com/Xinyuan-LilyGO/T-Display-SF32/blob/master/doc/AW21009QNR.pdf)
