---
title: T-Lora Pager 出厂固件
show_source: false
tags: LoRa, GPS, IMU, Keyboard, ESP32-S3, Factory
---

# 出厂固件使用指南

出厂固件（UI Demo）是 T-Lora Pager 出货前预装的程序。它基于
[LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib) 和 [LVGL](https://lvgl.io/)
构建，提供启动器风格的界面，让你无需编写任何代码即可体验所有板载外设——LoRa、GPS、
AI IMU、音频、NFC、QWERTY 键盘、电源管理等等。

本指南帮助你了解如何操作界面以及每个内置应用的功能。关于重新编译和烧录固件的说明，
请参阅[产品主页](index.md#快速开始)。

> 源代码：[LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib) 仓库中的 `examples/factory`。

## 烧录

<EspFlasher
  :firmware-options="[
    {
      id: 't-lora pager factory firmware with lr1121',
      name: 'T-LoRa Pager factory firmeare with LR1121',
      version: 'v1.0.0',
      description: 'T-LoRa Pager factory firmeare with LR1121',
      url: '/products/t-lora-series/t-lora-pager/factory/firmware/t-lora-pager-factory-with-lr1121_0x0.bin',
      address: 0x0000,
    },
    {
      id: 't-lora pager factory firmware with sx1262',
      name: 'T-LoRa Pager factory firmeare with SX1262',
      version: 'v1.0.0',
      description: 'T-LoRa Pager factory firmeare with SX1262',
      url: '/products/t-lora-series/t-lora-pager/factory/firmware/t-lora-pager-factory-with-sx1262_0x0.bin',
      address: 0x0000,
    }
  ]"
  :baud-rate="921600"
/>

## 操作控制

T-Lora Pager 主要通过**旋转编码器**和 **QWERTY 键盘**操作。

| 控制方式 | 操作 |
| :------ | :----- |
| **旋转编码器** | 在菜单图标 / 列表项 / 选项之间移动焦点 |
| **按下编码器（中键）** | 选择 / 确认当前焦点项（单击） |
| **QWERTY 键盘** | 在输入框中输入文本（聊天、Wi-Fi 密码、昵称、同步字等） |
| **返回按钮**（屏幕上的 `‹`） | 从应用返回主菜单 |
| **BOOT 按钮**（侧边） | 将设备从浅睡眠 / 深睡眠中唤醒 |
| **电源按钮** | 长按行为由电源 IC 处理（参见[功耗测试](index.md#功耗测试)） |

> **文本输入提示：** 在聊天框或 Wi-Fi 密码等输入框中，单击编码器一次进入*编辑模式*——
> 这会启用物理键盘以便输入。按 **Enter**（或再次单击编码器）确认并退出编辑模式。

## 主屏幕

显示 `LilyGo` 启动 Logo 后，设备进入**主菜单**：一行可横向滚动的应用图标。底部的标签显示当前
焦点应用的名称。

- **旋转**编码器以滚动浏览各应用。
- **按下**编码器以打开当前焦点应用。

### 时钟与低功耗屏幕

如果在主菜单空闲约 **10 秒**，设备会调暗键盘背光、降低 CPU 频率，并显示全屏**时钟**
（时间、日期、星期和电池百分比）。任意输入都会将其唤醒回菜单。再经过一段可配置的超时后，
显示屏会完全关闭以省电。

> **低电量保护：** 当电池电压低于约 3.3 V（且未连接 USB）时，固件会显示
> *"Battery Low — Shutting down…"* 屏幕并关闭设备以保护电芯。

## 内置应用

具体的图标集取决于你设备所配置的硬件（LoRa 型号、可选模块等）。下面介绍 T-Lora Pager
上常见的应用。

### Setting（设置）

系统配置，分为以下子页面：

- **Display & Backlight** —— 显示亮度、键盘背光、LED 指示灯亮度以及显示关闭超时。
- **System Info** —— MAC 地址、Wi-Fi SSID、RTC 日期/时间、IP 地址、RSSI、电池电压、
  SD 卡 / 存储大小、LVGL 版本、Arduino-ESP32 内核版本、固件构建时间、固件哈希和芯片 ID。
- **Devices status** —— 对每个 I²C/SPI 外设进行实时"在线 / 离线"探测，以便你确认硬件已被检测到。
- **Charger** —— 启用/禁用充电、设置充电电流，以及在支持的板子上切换 **OTG**（5 V 升压输出）。

### Wireless（无线）

扫描附近的 Wi-Fi 网络并连接。连接成功后，固件会自动从 NTP 服务器同步 RTC。连接详情随后会
显示在 **Setting → System Info** 中。

### LoRa

针对所配置模块（SX1262 / SX1280 / LR1121 / CC1101 …）的 LoRa 射频测试台。配置**模式**
（TX / RX / 连续波）、**频率**、**带宽**、**发射功率**、**发射间隔**、**编码率**、
**扩频因子**和**同步字**，然后按 **OK** 应用。在 TX 模式下设备发送一个递增的计数器；在 RX
模式下显示接收到的负载及其 RSSI。如果未配置射频模块，应用会显示 *"Radio module not detected!"*。

> 使用两台 Pager（或一台 Pager + 另一个 LoRa 节点），参数匹配——一台 TX、一台 RX——
> 以验证端到端通信。

### LoRa Chat

基于 LoRa 的简单文本即时通讯。在键盘上输入消息并发送；来自使用相同 LoRa 参数的另一节点的
消息会显示在会话视图中。（它复用 **LoRa** 应用中配置的射频设置。）

### Walkie（对讲机）

使用板载麦克风和扬声器、采用 G.722 宽带编解码器的 **ESP-NOW** 半双工对讲机。

1. 在设置页面，选择一个**昵称**和一个 **ESP-NOW 信道**，然后按 **Start**。（如果 Wi-Fi
   已连接，信道会锁定为 Wi-Fi 信道。）

    ![](/products/t-lora-series/t-lora-pager/factory/image/walkie_setup.jpg)

2. 在通话页面，附近的 Pager 会自动出现在 **Contacts** 列表中。

3. **按住**麦克风按钮（PTT）讲话；**松开**收听。状态会显示 *TALKING / RECEIVING / IDLE*
   以及当前正在通话的人。

    ![](/products/t-lora-series/t-lora-pager/factory/image/walkie_talking.jpg)

### GPS

显示来自 U-blox MIA-M10Q GNSS 模块的实时数据：纬度、经度、日期/时间、速度、使用中的卫星
数量和 PPS。要获得定位，请在室外开阔无遮挡的环境下使用设备——首次定位可能需要一分钟或更久。

### Music（音乐）

MP3 播放器。将 `.mp3` 文件放到 microSD 卡（或板载文件系统）上，它们会出现在播放列表中。
用编码器播放/暂停曲目并调整音量；播放界面上提供音质效果（如 3D / A-B）。如果未找到文件，
它会提示你向 SD 卡添加 MP3。

### Microphone（麦克风）

由 ES8311 麦克风驱动的实时音频频谱（FFT）可视化界面——用于确认麦克风正在采集音频。

### IMU

读取 Bosch BHI260AP AI IMU 并以动画指示器显示姿态（横滚、俯仰、航向）。

### Monitor（监测）

来自 BQ25896 充电器和 BQ27220 电量计的详细电源/电池仪表盘：充电状态、电池电压、系统电压、
电池百分比、USB 电压、温度、瞬时电流、剩余/满充/设计容量、平均功率、放空时间 / 充满时间等等。

### Power（电源）

关机 / 睡眠控制——选择 **Shutdown** 关机、**Sleep** 进入低功耗睡眠，或 **Close** 返回菜单。

### NFC

测试 ST25R3916 NFC 读卡器。将 NFC 标签/卡片靠近设备背面即可读取。

### BLE Keyboard（蓝牙键盘）

将 Pager 变成**蓝牙 HID 键盘**。从主机的蓝牙设置中将其配对到 PC/手机，然后在 Pager 上
键入的按键会发送到主机。屏幕会显示设备名称、连接状态和电量。

### Keyboard（键盘）

带输入框的键盘测试界面——逐键输入以确认每个按键都正常工作。它还会列出适用于你键盘版本的
修饰键快捷键（背光 / 符号 / 大写）。

### Camera Remote（相机遥控）

蓝牙相机快门。Pager 作为 BLE HID 设备广播；将其与手机配对，打开相机应用，按下屏幕上的
按钮即可触发快门（发送 *Volume Up* 媒体按键）。

### Screen Test（屏幕测试）

显示屏自检。它会依次循环显示灰阶渐变和纯红 / 绿 / 蓝 / 白 / 黑色块（每个约 3 秒），以便
你检查坏点或颜色问题。单击或等待循环结束即可返回菜单。

### NRF24 *(可选)*

当扩展插座上安装了外部 **nRF24L01** 模块时可用——一个类似 LoRa 应用的 2.4 GHz 射频测试。

## FAQ

* **问：某个应用显示模块"未检测到"或"离线"。**
  答：打开 **Setting → Devices status** 查看启动时探测了哪些外设。LoRa 应用只有在你的设备
  实际配置了相应的射频型号时才能工作。

* **问：在文本框中键盘无法输入。**
  答：在输入框获得焦点时单击编码器一次进入编辑模式（这会启用键盘）。按 **Enter** 确认。

* **问：屏幕总是变暗。**
  答：那是低功耗超时。按编码器/键盘将其唤醒，如果希望保持更久，可调高
  **Setting → Display & Backlight → Display Timeout**。

* **问：GPS 无法定位。**
  答：在室外开阔无遮挡的环境下使用设备；首次冷启动定位可能需要一段时间。

## 相关链接

* [T-Lora Pager 产品页面](index.md)
* [LilyGoLib 库](https://github.com/Xinyuan-LilyGO/LilyGoLib)
