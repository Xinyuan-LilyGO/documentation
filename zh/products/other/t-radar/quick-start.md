---
title: 快速开始
show_source: false
---

# T-Radar 快速开始

## 概述

T-Radar 是一款 60 GHz 雷达扩展模块，本身无主控芯片。通过排针连接到兼容的 LILYGO 主板（如 T3、T-Beam），由主板固件通过 I²C 或 SPI 驱动。

---

## 硬件连接

1. 将 T-Radar 通过排针插接到兼容的 LILYGO 主板上
2. 确认主板能为模块提供 3.3 V 或 5 V 供电
3. 通过板上跳线选择 I²C 或 SPI 通信接口

---

## 软件配置

1. 从 [developer.acconeer.com](https://developer.acconeer.com/home/a121-docs-software/) 下载 A121 SDK / 驱动库
2. 将库安装到 Arduino 或 PlatformIO 项目中
3. 在主板固件中初始化雷达接口：
   ```cpp
   // 示例：I²C 初始化（伪代码）
   radar.begin(Wire);
   radar.setMode(RADAR_MODE_DISTANCE);
   ```
4. 在主循环中读取距离/运动数据

---

## 注意事项

- **无主控芯片**：T-Radar 本身没有 MCU，所有代码运行在宿主主板上
- **60 GHz PCR**：A121 脉冲相干雷达，最远测距 20 m
- **精度**：绝对精度毫米级，相对精度微米级
- **应用场景**：距离测量、运动检测、材质分类、生命体征监测（呼吸、心率）
- **穿透性**：可穿透薄非金属材料；金属材料会完全屏蔽信号

---

## 常见问题

**Q：T-Radar 可以在户外使用吗？**
A：可以。60 GHz 雷达受天气影响较小，但大雨或暴雪可能导致轻微信号衰减。

**Q：支持多目标检测吗？**
A：当前版本针对单目标高精度测距，多目标识别需要在主板端进行额外算法处理。

**Q：最大数据刷新率是多少？**
A：取决于宿主 MCU 和接口速度，通常支持 100 Hz 以上的数据更新。
