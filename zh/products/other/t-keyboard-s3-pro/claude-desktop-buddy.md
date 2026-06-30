# Claude Desktop Buddy

Claude for macOS 和 Windows 可以通过 BLE 将 Claude Code 和 Claude 桌面端连接到创客设备，让开发者和创客能够构建显示权限提示、最近消息及其他交互内容的硬件。

作为示例，我们在 T-Keyboard S3 Pro 上搭建了一个桌面宠物，它依赖 Claude 的权限审批和交互而生。无事发生时它会进入睡眠，会话开始时它会醒来，遇到待审批的权限提示时会表现出明显的不耐烦，并可以直接通过键盘完成批准或拒绝。

<p align="center">
  <img src="/products/other/t-keyboard-s3-pro/claude-desktop-buddy/image/device.jpg" alt="运行 Buddy 固件的 T-Lora Pager" width="500">
</p>

## 硬件

固件目标平台为 T-Keyboard S3 Pro（ESP32-S3 + 4 × 128×128 TFT 屏幕），使用 T-Keyboard-S3-Pro-Library 提供显示屏、按键、RGB 和编码器驱动。

## 屏幕布局

四块屏幕分为专用面板（从左到右）：

| 面板 | 内容 |
| :---: | :------ |
| **0** | 角色——GIF 动画（已安装时）或 ASCII 猫咪备用动画 |
| **1** | 会话状态——运行中 / 等待中 / 总会话数 + 等级条 |
| **2** | 对话记录或权限审批提示 |
| **3** | Token 计数、审批统计、按键说明 |

## 烧录

<EspFlasher
  :firmware-options="[
    {
      id: 'claude desktop buddy',
      name: 'Claude Desktop Buddy',
      version: 'v1.0.0',
      description: 'Claude Desktop Buddy for T-Keyboard S3 Pro',
      url: '/products/other/t-keyboard-s3-pro/claude-desktop-buddy/firmware/claude-desktop-buddy_t-keyboard-s3-pro_0x0.bin',
      address: 0x0000,
    }
  ]"
  :baud-rate="921600"
/>

## 从源码构建

### PlatformIO

```bash
# 克隆库仓库（包含示例）
git clone https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library
cd T-Keyboard-S3-Pro-Library/examples/Advanced/Claude-Desktop-Buddy

# 构建并上传
pio run -t upload

# 上传 LittleFS 文件系统镜像（GIF 角色包所需）
pio run -t uploadfs
```

[platformio.ini](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library/tree/master/examples/Advanced/Claude-Desktop-Buddy/platformio.ini) 目标平台为 `esp32-s3-devkitc-1`，配置 16 MB Flash、OPI PSRAM 和 LittleFS。依赖库自动解析：

| 库 | 版本 |
| :-----: | :-----: |
| LovyanGFX | ^1.1.0 |
| ButtonSense | ^1.0.0 |
| AnimatedGIF | ^2.1.1 |
| ArduinoJson | ^7.0.0 |

### Arduino IDE

1. 通过库管理器安装 **T-Keyboard-S3-Pro-Library** 及其依赖（LovyanGFX、ButtonSense、AnimatedGIF、ArduinoJson）。
2. 打开 `Claude-Desktop-Buddy.ino`。
3. 配置开发板：

| 设置 | 值 |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Enabled |
| Flash Size | 16MB (128Mb) |
| Partition Scheme | Default (6.25MB APP/3.43MB SPIFFS) |
| PSRAM | OPI PSRAM |

4. 点击 **Upload**。

## 配对

要将设备与 Claude 配对，请先在 Claude 桌面端启用开发者模式（**帮助 → 故障排除 → 启用开发者模式**）。然后打开 **开发者 → 打开 Hardware Buddy…**，点击 **连接**，从列表中选择 **TKB-S3-Buddy**。首次连接时 macOS 会请求蓝牙权限，请授予。

<p align="center">
  <img src="/products/t-lora-series/t-lora-pager/claude-desktop-buddy/image/menu.png" alt="开发者 → 打开 Hardware Buddy… 菜单项" width="420">
  <img src="/products/t-lora-series/t-lora-pager/claude-desktop-buddy/image/hardware-buddy-window.png" alt="Hardware Buddy 窗口（含连接按钮和文件夹拖放目标）" width="420">
</p>

配对完成后，只要双方均处于唤醒状态，桥接会自动重连。

如果设备未出现在扫描列表中：

- 按任意键唤醒键盘（从睡眠中唤醒）
- 确保 BLE 正在广播——重新上电可清除任何旧状态

设备同时支持通过 **USB 串口（波特率 115200）** 使用相同的 JSON 协议，因此无需 BLE 也可直接通过 USB 连接。

## 按键控制

| | 正常状态 | 待审批状态 |
| --- | --- | --- |
| **KEY1** | — | **批准**（"一次"） |
| **KEY2** | — | **拒绝** |
| **KEY3** | 刷新统计面板 | — |
| **KEY5** | 将亮度重置为 70% | — |
| **旋转编码器** | 调整显示亮度 | — |

KEY1–KEY5 对应主机上的五个物理按键（从左到右：KEY1 = 最左侧机械键，KEY5 = 旋转编码器点击）。

## 七种状态

角色会根据 Claude 的当前活动在七种状态间切换播放动画：

| 状态 | 触发条件 | LED 颜色 |
| ----- | ------- | ---------- |
| `sleep` | BLE/USB 未连接 | 暗蓝色 |
| `idle` | 已连接，无任务运行 | 柔和青色 |
| `busy` | 会话正在运行 | 绿色 |
| `attention` | 权限审批提示待处理 | 琥珀色，高亮 |
| `celebrate` | 会话完成，或每累计 50K Token | 彩虹循环 |
| `dizzy` | —（单次触发，键盘无硬件触发） | 紫色 |
| `heart` | 在 5 秒内完成审批 | 红色 |

## ASCII 宠物

固件内置 ASCII 猫咪作为默认角色，无需任何额外文件即可播放全部七种动画。

## GIF 角色包

将角色包文件夹拖入 Hardware Buddy 窗口的拖放区域即可安装自定义 GIF 角色。应用通过 BLE 将其传输到设备，设备随即切换为 GIF 模式。**设置 → 删除角色** 可恢复 ASCII 模式。

角色包是一个包含 `manifest.json` 和 GIF 文件的文件夹：

```json
{
  "name": "bufo",
  "colors": {
    "body": "#6B8E23",
    "bg": "#000000",
    "text": "#FFFFFF",
    "textDim": "#808080",
    "ink": "#000000"
  },
  "states": {
    "sleep": "sleep.gif",
    "idle": ["idle_0.gif", "idle_1.gif", "idle_2.gif"],
    "busy": "busy.gif",
    "attention": "attention.gif",
    "celebrate": "celebrate.gif",
    "dizzy": "dizzy.gif",
    "heart": "heart.gif"
  }
}
```

状态值可以是单个文件名或数组。数组在每次循环结束时轮换——适合制作空闲轮播，避免主屏幕重复播放同一段动画。

GIF 宽度必须为 **96 像素**；高度最大约 128 像素，可舒适显示在 128×128 面板上。整个角色包须控制在 **1.8 MB 以内**——`gifsicle --lossy=80 -O3 --colors 64` 通常可压缩 40–60%。

在迭代角色时，可直接暂存以跳过 BLE 传输：

```bash
# 在 Claude-Desktop-Buddy sketch 目录下执行
python3 tools/flash_character.py characters/bufo
# 暂存到 data/ 并运行：pio run -t uploadfs
```

## 项目结构

```
Claude-Desktop-Buddy/
  Claude-Desktop-Buddy.ino  — 主循环、状态机、面板渲染
  buddy_ble.h               — BLE Nordic UART Service 桥接
  buddy_character.h/.cpp    — LittleFS GIF 解码器 + 渲染器
  buddy_xfer.h              — BLE 文件夹推送接收器
  buddy_data.h              — JSON 状态解析器
  buddy_stats.h             — 基于 NVS 的统计、等级、拥有者、宠物名
  buddy_cat.h               — ASCII 猫咪备用动画
  data/                     — LittleFS 镜像根目录（GIF 角色包）
```

## 可用性

BLE API 仅在 Claude 桌面端处于开发者模式时可用（**帮助 → 故障排除 → 启用开发者模式**）。该功能面向创客和开发者，并非官方正式支持的产品功能。
