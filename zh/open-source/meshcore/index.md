---
title: LILYGO Meshcore 使用指南
show_source: false
---

## 介绍
![alt text](/open-source/meshcore/image/image.png)
MeshCore 是一个轻量级、可移植的 C++ 库，可为 LoRa 和其他分组无线电的嵌入式项目实现多跳数据包路由。它专为想要创建无需互联网即可工作的弹性、去中心化通信网络的开发人员而设计。

>了解更多可进入[MeshCore](https://github.com/meshcore-dev/MeshCore)

MeshCore 现在支持一系列 LoRa 设备，无需手动编译固件即可轻松刷新。用户可以使用 Adafruit ESPTool 等工具刷新预构建的二进制文件，并通过串行控制台与网络交互。MeshCore 提供了创建无线网状网络的能力，类似于 Meshtastic 和 Reticulum，但专注于嵌入式项目的轻量级多跳数据包路由。与专为休闲 LoRa 通信量身定制的 Meshtastic 或提供高级网络的 Reticulum 不同，MeshCore 平衡了简单性与可扩展性，使其成为定制嵌入式解决方案的理想选择，其中设备（节点）可以通过中间节点中继消息进行长距离通信。这在传统通信基础设施不可用的离网、紧急情况或战术情况下特别有用。

## 特性

- 多跳数据包路由
  - 设备可以跨多个节点转发消息，将范围扩展到单个无线电的范围之外。
  - 支持多达可配置的跃点数，以平衡网络效率并防止流量过大。
  - 节点使用固定角色，其中“配套”节点根本不重复消息，以防止使用不利的路由路径。
- 支持 LoRa 无线电 – 与 Heltec、RAK Wireless 和其他基于 LoRa 的硬件配合使用。
- 去中心化和弹性 – 无需中央服务器或互联网;网络是自我修复的。
- 低功耗 – 非常适合电池供电或太阳能供电设备。
- 易于部署 – 预构建的示例应用程序使入门变得容易。

## 用途

- 离网通信：即使在偏远地区也能保持联系。MeshCore 设备可以与其他设备进行无线通信，而无需连接到互联网。
- 应急响应和灾难恢复：在基础设施出现故障的情况下建立即时网络。
- 户外活动：徒步旅行、露营和冒险赛车交流。
- 战术和安全应用：军事、执法和私人安全用例。
- 物联网和传感器网络：从远程传感器收集数据并将其中继回中心位置。

## 支持设备

- T-Deck
- T-Deck Pro
- T-Display Pro
- T-LoRa Pager
- T5 E-Paper S3 Pro
- LoRa32 V1.6.1
- T-Beam(SX1262)
- T-Beam 1.2(SX1276)
- T-Beam Superme(SX1262)
- T-Deck (community)
- T-Echo 
- T-Echo Lite
- T3 S3(SX126X)
- T3 S3(SX127X)


## 下载固件

1. 打开网页下载页面[MeshCore](https://flasher.meshcore.co.uk/)
2. 选择支持的设备
3. 刷新其中一种固件类型:
   - 配套
   - 中继器
   - 房间服务器

配套固件可以通过 BLE、USB 或 WiFi 连接，具体取决于您刷新的固件类型。
- Web: https://app.meshcore.nz
- 安卓：https://play.google.com/store/apps/details?id=com.liamcottle.meshcore.android
- iOS: https://apps.apple.com/us/app/meshcore/id6742354151?platform=iphone
- NodeJS: https://github.com/liamcottle/meshcore.js
- Python: https://github.com/fdlamotte/meshcore-cli

可以进入[MeshCore FAQ](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md)了解更多信息。