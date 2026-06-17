---
title: T-Halow RJ45
show_source: false
tags: HaLow, 802.11ah, Sub-1GHz, RJ45, Long Range, IoT
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-halow-rj45" />

<ImageGallery :columns="3" :images="[
  { src: '/products/t-halow-series/t-halow-rj45/index/image/t-halow-rj45-1.jpg', alt: 'T-Halow RJ45 正面图' },
  { src: '/products/t-halow-series/t-halow-rj45/index/image/t-halow-rj45-2.jpg', alt: 'T-Halow RJ45 背面图' },
  { src: '/products/t-halow-series/t-halow-rj45/index/image/t-halow-rj45-info.jpg', alt: 'T-Halow RJ45 详情图' },
]" />

## 概述

T-Halow RJ45 是一款集成 **HaLow（IEEE 802.11ah）** 无线模块与 **RJ45 以太网**接口的设备，支持 Sub-1 GHz 长距离、低功耗无线组网。支持 AP、STA、APSTA 中继和 GROUP 组播多种工作模式，提供 WPA-PSK 加密、中继、漫游、组播及低功耗休眠功能，通过 AT 命令进行串口配置。适用于工业物联网、远程监控和智慧农业等场景。

## 快速开始

### 硬件连接

将模块通过 RJ45 接口连接到网络设备，同时通过串口连接到主机或调试工具。

### 串口配置

使用串口工具连接模块，选择**新行模式**发送 AT 命令（AT 命令不区分大小写）。

### 快速配对（无需预设 SSID）

将一个设备设置为 AP（拨码开关拨到 NO 位置），另一个设置为 STA（拨码开关拨到 1 位置），然后两个设备同时按下 **Connect** 键。等待 CONN 指示灯快速闪烁表示配对成功，配对成功后 RSSI 信号灯亮起，亮起越多表示信号越好。

```
AT+PAIR=1   // AP 和 STA 同时开启配对
// 等待出现 PAIR SUCCESS 消息
AT+PAIR=0   // 停止配对，设备自动连接
```

### 基本配网（AP + STA）

**AP 端：**

```
AT+MODE=AP
AT+SSID=my_network
AT+KEYMGMT=WPA-PSK
AT+PSK=baa58569a9edd7c3a55e446bc658ef76a7173d023d256786832474d737756a82
```

**STA 端：**

```
AT+MODE=STA
AT+SSID=my_network
AT+KEYMGMT=WPA-PSK
AT+PSK=baa58569a9edd7c3a55e446bc658ef76a7173d023d256786832474d737756a82
```

配置完成后设备会自动建立连接。

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特点

- 支持 HaLow（IEEE 802.11ah）Sub-1 GHz 长距离无线通信
- AP / STA / APSTA（中继）/ GROUP（组播）多种工作模式
- 支持 WPA-PSK 加密
- 支持中继（Relay）、漫游（Roaming）、组播（Multicast）
- 支持低功耗休眠模式
- RJ45 以太网接口
- 通过串口 AT 命令配置

## 产品参数

| 参数 | 规格 |
| :--: | :--: |
| 无线 | HaLow IEEE 802.11ah Sub-1 GHz |
| 工作模式 | AP / STA / APSTA / GROUP |
| 加密 | WPA-PSK / NONE |
| 接口 | RJ45 以太网 + 串口（AT 命令） |
| 固件版本 | huge-ic-ah_v1.6.4.3-38054_2025.12.12 |

<img src="/products/t-halow-series/t-halow-rj45/index/image/t-halow-rj45-info.jpg" alt="T-Halow RJ45 详情图" width=100%>

## AT 命令

完整 AT 命令文档：[docs/AT_cmd.md](https://github.com/Xinyuan-LilyGO/T-Halow-RJ45/blob/master/docs/AT_cmd.md)

### 基础网络

| 命令 | 说明 |
| :--- | :--- |
| `AT+MODE=[ap/sta/group/apsta]` | 设置工作模式 |
| `AT+SSID=[ssid]` | 设置 SSID（最多 32 字符） |
| `AT+KEYMGMT=[WPA-PSK/NONE]` | 设置加密方式 |
| `AT+PSK=[64位hex密码]` | 设置加密密码 |
| `AT+PAIR=[0/1]` | 开启/停止配对 |
| `AT+BSS_BW=[1/2/4/8]` | 设置信道带宽 |
| `AT+FREQ_RANGE=[start,end]` | 设置频率范围（单位：0.1 MHz） |
| `AT+CHAN_LIST=[freq1,freq2,...]` | 设置非连续频点列表（最多 16 个） |

### 状态查询

| 命令 | 说明 |
| :--- | :--- |
| `AT+RSSI=?` | 查询信号强度 |
| `AT+CONN_STATE` | 查看连接状态 |
| `AT+WNBCFG` | 查看设备参数 |
| `AT+SCAN_AP=2` | 扫描 AP（STA 模式下执行） |
| `AT+BSSLIST` | 获取扫描到的 AP 列表 |
| `AT+MAC_ADDR=?` | 查看设备 MAC 地址 |
| `AT+VERSION=?` | 查看固件版本 |

### 高级参数

| 命令 | 说明 |
| :--- | :--- |
| `AT+TXPOWER=[6~20]` | 设置最大发射功率（dBm） |
| `AT+ACKTMO=[us]` | 设置 ACK 超时（超过 1km 时需设置，公式：10×(距离km-1)） |
| `AT+TX_MCS=[0~7/255]` | 设置发送 MCS，255 为自动 |
| `AT+HEART_INT=[ms]` | 设置心跳包间隔（建议：STA数量×50ms） |

### 中继模式（APSTA）

```
AT+MODE=APSTA
AT+R_SSID=upper_ap_ssid     // 设置上级 AP 的 SSID
AT+R_PSK=<64位hex密码>       // 设置上级 AP 的密码
```

### 漫游（仅 STA 端）

```
AT+ROAM=1   // 开启漫游
AT+ROAM=0   // 关闭漫游
```

AP 的 SSID 支持全字匹配或模糊匹配（SSID 总长度大于 8 字符，末 3 位不同，如 `HUGE_IC_AH001`、`HUGE_IC_AH002`）。

### 组播模式（GROUP）

```
AT+MODE=GROUP
AT+JOINGROUP=11:22:33:44:55:66,3   // 加入组播网络，AID=3
```

### 休眠模式（STA）

| 命令 | 说明 |
| :--: | :--- |
| `AT+PS_MODE=0` | 无休眠（等同模式 3） |
| `AT+PS_MODE=1` | 休眠时模块自行与服务器保活 |
| `AT+PS_MODE=2` | 休眠时由 AP 代为保活（最低功耗） |
| `AT+PS_MODE=3` | 休眠时保持与 AP 连接，单播包可唤醒 |
| `AT+PS_MODE=4` | 休眠时仅保持与 AP 连接，只能由 `AT+WAKEUP` 唤醒 |

### 调试

```
AT+LOADDEF=1        // 恢复出厂设置
AT+SYSDBG=LMAC,1   // 开启空口统计打印
AT+SYSDBG=WNB,1    // 开启网络层统计打印
```

## 工作模式

| 模式 | 说明 |
| :--: | :--- |
| `AP` | 接入点模式，作为热点供 STA 连接 |
| `STA` | 站点模式，连接到 AP |
| `APSTA` | 中继模式，同时作为 AP 和 STA |
| `GROUP` | 组播/广播模式 |

## 固件升级

固件文件位于 `firmware/` 目录下。

当前固件版本：`huge-ic-ah_v1.6.4.3-38054_2025.12.12_.bin`

查看固件版本：
```
AT+VERSION=?
```

## 引脚图

<img src="/products/t-halow-series/t-halow-rj45/index/image/t-halow-rj45-pinout.jpg" alt="T-Halow RJ45 引脚图" width=100%>

## 尺寸图

<img src="/products/t-halow-series/t-halow-rj45/index/image/t-halow-rj45-3.jpg" alt="T-Halow RJ45 尺寸图" width=100%>

## 原理图

* [T-Halow RJ45 V0.1 原理图](https://github.com/Xinyuan-LilyGO/T-Halow-RJ45/blob/master/hardware/T-Halow%20RJ45%20V0.1.pdf)

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

* [T-Halow-RJ45 GitHub 仓库](https://github.com/Xinyuan-LilyGO/T-Halow-RJ45)
* [AT 命令完整文档](https://github.com/Xinyuan-LilyGO/T-Halow-RJ45/blob/master/docs/AT_cmd.md)

## 常见问题

* **Q. 两台设备如何在不预设 SSID 的情况下配对？**
  A. 将一台设置为 AP（拨码开关拨到 NO），另一台设置为 STA（拨码开关拨到 1），同时按下 Connect 键，等待 CONN 灯快速闪烁即配对成功。

* **Q. 长距离时连接断开？**
  A. 增大 ACK 超时：`AT+ACKTMO=[us]`，公式：10 × (距离km − 1) 微秒。

* **Q. 如何恢复出厂设置？**
  A. 执行 `AT+LOADDEF=1`。

* **Q. 如何配置中继？**
  A. 设置 `AT+MODE=APSTA`，再用 `AT+R_SSID` 和 `AT+R_PSK` 指定上级 AP 的 SSID 和密码。

## 版本历史

| 版本 | 日期 | 说明 |
| :--: | :--: | :--- |
| V0.1 | — | 初始版本 |
