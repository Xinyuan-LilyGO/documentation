---
title: 快速开始
show_source: false
---

# T-BHI260AP 快速开始

## 概述

T-BHI260AP 是一款运动感知扩展模块，本身无主控芯片。通过 I²C 或 SPI 连接到兼容的 LILYGO 主板（T-Deck、T-Display-S3、T-Display-S3-Pro、T-Echo），由主板固件驱动。

---

## 硬件连接

1. 通过排针将 T-BHI260AP 连接到主板
2. 根据主板可用接口选择 I²C（SDA/SCL）或 SPI（MOSI/MISO/SCK/CS）
3. 确认主板为模块提供 3.3 V 供电

---

## 软件配置

克隆宿主主板的示例仓库并打开 BHI260AP 示例工程：

```bash
# 以 T-Display-S3 为例
git clone https://github.com/Xinyuan-LilyGO/T-Display-S3.git
```

根据**宿主主板**（而非扩展模块）选择开发板型号和参数，然后上传固件。

---

## 注意事项

- **无主控芯片**：T-BHI260AP 本身没有 MCU，所有固件运行在宿主主板上
- **AI IMU**：BHI260AP 集成 6 轴 IMU（加速度计 + 陀螺仪）及板载自学习 AI 算法
- **运动功能**：实时行人追踪、个性化健身数据分析、游泳划水指标监测
- **防水设计**：适用于户外及水下场景
- **接口**：I²C 或 SPI（通过硬件跳线选择）

---

## 兼容主板

| 产品 | 说明 |
| :--: | :--: |
| T-Deck | 主要推荐宿主主板 |
| T-Display-S3 | |
| T-Display-S3-Pro | |
| T-Echo | |

---

## 常见问题

**Q：应该用 I²C 还是 SPI？**
A：两者均可。SPI 吞吐量更高；I²C 更简单、占用引脚更少。通过模块上的硬件跳线选择。

**Q：支持 Arduino 开发吗？**
A：支持，通过宿主主板实现。在主板 Arduino 工程中包含 BHI260AP 驱动库即可。
