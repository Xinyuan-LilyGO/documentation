---
title: LILYGO Meshtastic Devices
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

</div>

<!-- <div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">淘宝</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>
</div> -->
>!了解更多可进入[Meshtastic](https://meshtastic.org/docs/hardware/devices/lilygo/)

## T-Beam

开发板配备了 GPS、18650 电池座，并且可以选配屏幕


| Name            | MCU      | Radio            | WiFi         | BT  | GPS  |
|-----------------|----------|------------------|--------------|-----|------|
| T-Beam v0.7     | ESP32    | SX1276           | 2.4GHz b/g/n | 4.2 | YES  |
| T-Beam v1.1     | ESP32    | SX1276           | 2.4GHz b/g/n | 4.2 | YES  |
| T-Beam with M8N | ESP32    | SX1276<br>SX1262 | 2.4GHz b/g/n | 4.2 | YES  |
| T-Beam S3-Core  | ESP32-S3 | SX1262           | 2.4GHz b/g/n | 5.0 | YES  |
| T-BeamSUPREME   | ESP32-S3 | SX1262           | 2.4GHz b/g/n | 5.0 | YES  |


## T-Echo
一体化设备，配有 E-Ink 屏幕、GPS 和电池，封装于注塑外壳中。采用低功耗的 nRF52840 芯片，以实现长续航。

| Name            | MCU      | Radio         | WiFi         | BT  | GPS  |
|-----------------|----------|---------------|--------------|-----|------|
| T-Echo          | nRF52840 | SX1262        | NO           | 5.0 | YES  |

## LoRa32 
低成本的基础型 ESP32 开发板。

| Name            | MCU   | Radio         | WiFi         | BT  | GPS  |
|-----------------|-------|---------------|--------------|-----|------|
| LoRa32 V1       | ESP32 | SX127x        | 2.4GHz b/g/n | 4.2 | NO   |
| LoRa32 V1.3     | ESP32 | SX127x        | 2.4GHz b/g/n | 4.2 | NO   |
| LoRa32 V2.0     | ESP32 | SX127x        | 2.4GHz b/g/n | 4.2 | NO   |
| LoRa32 V2.1-1.6 | ESP32 | SX127x        | 2.4GHz b/g/n | 4.2 | NO   |
| LoRa32 V2.1-1.8 | ESP32 | SX1280        | 2.4GHz b/g/n | 4.2 | NO   |
| LoRa32 V3.0     | ESP32 | SX127x + TCXO | 2.4GHz b/g/n | 4.2 | NO   |
| LoRa32 T3-S3    | ESP32-S3	|SX1262<br>SX1276<br>SX1280<br>LR1121|2.4GHz b/g/n | 5.0 | NO   |   


## T-Deck

带有屏幕和键盘的独立设备。

| Name            | MCU         | Radio         | WiFi         | BT  | GPS  |
|-----------------|-------------|---------------|--------------|-----|------|
| T-Deck          | ESP32-S3FN8 | SX1262        | YES          | 5.0 | NO   |
| T-Deck Plus     | ESP32-S3FN8 | SX1262        | YES          | 5.0 | YES  |

## T-Watch S3

| Name            | MCU         | Radio         | WiFi         | BT  | GPS  |
|-----------------|-------------|---------------|--------------|-----|------|
| T-Watch S3      | ESP32-S3    | SX1262        | YES          | 5.0 | NO   |


## T-Lora C6
| Name            | MCU         | Radio         | WiFi         | BT   | GPS  |
|-----------------|-------------|---------------|--------------|------|------|
| T-Lora C6       | ESP32-C6    | SX1262        | YES          | 5.0* | NO   |

>在Meshtastic固件中还不支持ESP32-C6模块中的蓝牙。
## 固件下载

LILYGO 设备Meshtastic 固件下载地址 : [Meshtastic Downloads](https://meshtastic.org/downloads/)

