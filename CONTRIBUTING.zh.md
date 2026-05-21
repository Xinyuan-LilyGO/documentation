中文 | [English](CONTRIBUTING.md)

# 文档贡献指南

## 基本规范

- 文档使用 Markdown 格式编写
- 所有文件名和目录名全部使用**小写**，单词之间用连字符 `-` 分隔
- 中英文档目录结构保持镜像对称：`en/` 和 `zh/` 下的路径完全一致

## 产品名称规范

同一产品在不同场合使用不同形式的名称：

- **官方使用名**：用于宣发资料，如外包装、购买链接标题、GitHub 仓库名
- **小写形式**：用于代码、文件名、目录名

| 官方使用名 | 小写（文件/目录名） |
| --- | --- |
| LILYGO | lilygo |
| SIM7600E | sim7600e |
| T-2CAN | t-2can |
| T-A7670E | t-a7670e |
| T-A7670G | t-a7670g |
| T-A7670SA | t-a7670sa |
| T-Bao | t-bao |
| T-Beam 1W | t-beam-1w |
| T-Beam SUPREME | t-beam-supreme |
| T-BHI260AP | t-bhi260ap |
| T-Camera Plus S3 | t-camera-plus-s3 |
| T-Circle | t-circle |
| T-Circle S3 | t-circle-s3 |
| T-Connect | t-connect |
| T-Connect Pro | t-connect-pro |
| T-Deck | t-deck |
| T-Deck Plus | t-deck-plus |
| T-Deck Pro | t-deck-pro |
| T-Display Bar | t-display-bar |
| T-Display K230 | t-display-k230 |
| T-Display P4 | t-display-p4 |
| T-Display S3 AMOLED 1.43 | t-display-s3-amoled-1.43 |
| T-Display S3 AMOLED 1.64 | t-display-s3-amoled-1.64 |
| T-Display S3 AMOLED 1.75 | t-display-s3-amoled-1.75 |
| T-Display S3 AMOLED Plus | t-display-s3-amoled-plus |
| T-Display S3 Long | t-display-s3-long |
| T-Display S3 Pro | t-display-s3-pro |
| T-Display S3 Pro LR1121 | t-display-s3-pro-lr1121 |
| T-Echo | t-echo |
| T-Echo Lite | t-echo-lite |
| T-Embed CC1101 | t-embed-cc1101 |
| T-Embed SI4732 | t-embed-si4732 |
| T-Encoder Pro | t-encoder-pro |
| T-ETH-1302 | t-eth-1302 |
| T-ETH-Elite | t-eth-elite |
| T-ETH-Gateway | t-eth-gateway |
| T-ETH-Lite | t-eth-lite |
| T-ETH-Lite-S3 | t-eth-lite-s3 |
| T-ETH-LoRa-shield | t-eth-lora-shield |
| T-Glass | t-glass |
| T-Halow | t-halow |
| T-Halow-P4 | t-halow-p4 |
| T-Keyboard-S3 Pro | t-keyboard-s3-pro |
| T-Knob | t-knob |
| T-LoRa Dual | t-lora-dual |
| T-LoRa Pager | t-lora-pager |
| T-LoRa-C6 | t-lora-c6 |
| T-LoRa32 | t-lora32 |
| T-Mini E-paper-S3 | t-mini-e-paper-s3 |
| T-PCIE | t-pcie |
| T-Pico 2350 | t-pico-2350 |
| T-QT C6 | t-qt-c6 |
| T-Radar | t-radar |
| T-Sim Shield | t-sim-shield |
| T-Solar | t-solar |
| T-TWR | t-twr |
| T-Watch S3 Plus | t-watch-s3-plus |
| T-Watch Ultra | t-watch-ultra |
| T3-S3 | t3-s3 |
| T3-STM32 | t3-stm32 |
| T3-TXCO | t3-txco |
| T3-S3 E-paper | t3-s3-e-paper |
| T3-S3 LR1121 | t3-s3-lr1121 |
| T3-S3_MVSRBoard | t3-s3-mvsrboard |
| T5-E-Paper | t5-e-paper |
| T5-E-Paper S3 Lite | t5-e-paper-s3-lite |
| T5-E-Paper S3 Pro | t5-e-paper-s3-pro |
| T7-C6 | t7-c6 |

## 新增产品页

### 1. 创建文档文件

同时在英文和中文目录下创建对应的 `index.md`：

```
en/products/{系列}/{产品名}/index.md
zh/products/{系列}/{产品名}/index.md
```

文件头部添加 frontmatter：

```yaml
---
title: 产品名称
show_source: false
tags: LoRa, ESP32-S3, GPS
---
```

### 2. 放置产品图片

将产品图片放到以下目录：

```
public/products/{系列}/{产品名}/assets/
```

命名建议使用 `{产品名}-1.jpg`、`{产品名}-2.jpg` 等，首张图片会作为产品目录封面。

### 3. 侧边栏自动更新

侧边栏会在下次启动或热更新时自动扫描文件系统生成，**无需手动修改配置文件**。

## 产品文档结构

每个产品页面应按以下章节顺序组织内容。非必填章节在内容暂缺时可省略，后续补充。

### 页面头部

```md
---
title: 产品名称
show_source: false
tags: Tag1, Tag2, ChipName
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/..." />

<ImageGallery :columns="3" :images="[
  { src: '/products/{系列}/{产品名}/assets/{产品名}-1.jpg', alt: '正面' },
  { src: '/products/{系列}/{产品名}/assets/{产品名}-2.jpg', alt: '背面' },
]" />
```

### 概述（必填）

详细描述产品的主控方案、支持功能、适用场景和认证信息。内容越详细，越有助于用户选型和开发。

### 快速开始（必填）

包含以下内容（可跳转到独立文档页）：

1. Arduino / ESP-IDF / MicroPython 等开发环境配置教程
2. 硬件组装教程（焊接排针、安装天线等）
3. 第三方项目使用教程（Meshtastic、SoftRF 等）
4. 出厂固件使用说明

### 相关视频（必填）

产品宣传视频和使用教程视频。如果使用教程视频与"快速开始"中的内容重叠，应将视频移入对应的教程章节中，而非单独列出。

### 主要特性（必填）

简洁列出产品的关键特性，使用列表格式。

### 产品参数（必填）

列出各芯片和外设参数，建议包含：

- SOC 型号及主频
- Flash / PSRAM 大小
- 无线参数（频段、协议、输出功率等）
- 各外设传感器参数
- 产品重量
- 外包装尺寸

### 引脚图（必填）

列出所有 GPIO 映射关系，说明各 GPIO 连接的外设。

### 尺寸图（必填）

放置可公开的 PCB 尺寸图和外壳尺寸图。

### 原理图（必填）

放置可公开的 PCB 原理图。

### 数据手册（必填）

放置可公开的 SOC 数据手册和外设传感器数据手册。

### 软件开发（必填）

列出支持的软件驱动库和示例代码链接。

### 常见问题（必填）

记录产品勘误和用户常见问题及解答。

### 版本迭代（必填）

记录产品的硬件/固件版本迭代历史。
