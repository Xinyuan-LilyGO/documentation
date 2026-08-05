---
title: Meshtastic FAQ
show_source: false
---

## Meshtastic 通用

### Bluetooth

Meshtastic 设备的蓝牙功能默认关闭。  
如果需要开启蓝牙以读取或配置设备信息，可以通过网页客户端进行设置：

1. 打开 [Meshtastic 官方下载页面](https://meshtastic.org/downloads/)。
2. 点击 [client.meshtastic.org](https://client.meshtastic.org/) 链接。

![alt text](/open-source/meshtastic/faq/image/web_client.jpg)

3. 点击 **Connect via Serial**，然后选择 **Add New Device**。

![alt text](/open-source/meshtastic/faq/image/image.png)

4. 选择设备对应的串口，然后点击 **Connect**。

![alt text](/open-source/meshtastic/faq/image/image-1.png)

5. 按照页面提示开启蓝牙。

![alt text](/open-source/meshtastic/faq/image/client_setting.png)

> 设置完成后，点击右上角 **Save** 保存，并等待设备重启。重启完成后，蓝牙功能即可启用。

### GPS

通过 [meshtastic.org](https://client.meshtastic.org/) 连接设备后，可以配置并启用 GPS。选择 **Enable GPS**，然后点击右上角 **Save** 保存，并等待设备重启。

![alt text](/open-source/meshtastic/faq/image/gps.png)

## T-Deck Pro

### 触摸或设备功能无法使用

T-Deck Pro 目前使用新的触摸版本。如果刷写旧版本 Meshtastic 固件，可能会出现触摸不可用、设备功能异常或操作无响应的问题。

- 建议优先下载并刷写最新版本的 Meshtastic 固件。
- 固件刷写完成后，请先等待设备初始化结束再进行操作，通常约 2 分钟。
- 如果刷写后仍无法正常操作，请先确认固件版本是否为最新版本，再重新执行完整刷写流程。

## T3-S3 E-Paper

### 无法正常使用

![alt text](/open-source/meshtastic/faq/image/t3epaper.png)

- 选择最新固件版本，勾选 `Full Erase and Install` 和 `Install InkHUD`，然后刷写固件。
- 使用 `Meshtastic` App 连接设备，并按照提示完成设置。

> InkHUD 是为搭载电子墨水屏的 Meshtastic 设备设计的用户界面。它可以清晰显示关键信息，并与客户端应用配合使用，适合作为原 OLED 界面的替代方案。
