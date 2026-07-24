---
title: VibeKeyboard 使用指南
show_source: false
---

# VibeKeyboard 使用指南

`VibeKeyboard` 是面向 LILYGO T-LoRa-Pager 的 AI 会话控制器示例。它通过 BLE 将设备连接到电脑上的 `vk-daemon`，可在设备上查看和切换 Claude Code、Codex 会话，处理权限请求，并管理 YOLO、声音等设置。

> `VibeKeyboard` 不是通用 BLE 键盘。完整功能由设备固件和电脑端 `vk-daemon` 两部分组成。只烧录固件可以浏览界面，但不会显示真实会话，也无法执行远程操作。

## 主要功能

- 查看并切换最多 32 个 AI 会话，包括会话状态、上下文占用、费用、token 和最后一条消息。
- 接收通知和权限请求，并直接在设备上选择 **Allow** 或 **Deny**。
- 检查 Claude Code、Codex、iTerm2 和 `terminal-notifier` 的安装与集成状态。
- 配置 YOLO 模式、自动允许通知以及 allow/deny 规则。
- 调节音量、静音状态和事件提示音。
- 通过主机同步时间，离线时可回退到板载 RTC。

## 准备工作

完整运行需要：

- LILYGO T-LoRa-Pager
- 支持 Bluetooth Low Energy 的电脑
- Arduino IDE
- Arduino-ESP32 3.3.0-alpha1 或更高版本
- [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)
- [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)
- Python 3.12 或更高版本
- [`uv`](https://docs.astral.sh/uv/)
- Claude Code 或 Codex，至少安装其中一种

在 macOS 上使用完整功能前，需要为启动 `vk-daemon` 的宿主应用授予蓝牙、辅助功能和麦克风权限，并配置系统听写快捷键，具体操作见[配置 macOS 权限与听写](#_4-配置-macos-权限与听写)。

`vk-daemon` 目前主要支持 macOS。Linux 可以运行 daemon 核心和 BLE，但不支持窗口聚焦、按键和本机通知等桌面功能；Windows 尚未完成项目级验证。

连接实体设备时，`vk-daemon` 必须运行在拥有 Bluetooth 权限的本机。远程主机或云端开发环境无法代替本机访问 BLE。

## 烧录 VibeKeyboard 固件

VibeKeyboard 支持在线烧录和自行编译烧录。建议优先使用在线烧录，无需安装 Arduino IDE 和依赖库；需要修改源码或使用其他射频版本时，再选择自行编译。

### 方法一：在线烧录（推荐）

下面的在线固件适用于 **T-LoRa-Pager SX1262** 版本。在线烧录使用 Web Serial API，请在桌面版 Chrome 或 Edge 中打开本页，并使用支持数据传输的 USB-C 线连接设备。

<EspFlasher
  :firmware-options="[
    {
      id: 'vibe-keyboard-t-lora-pager',
      name: 'VibeKeyboard for T-LoRa-Pager',
      version: 'v0.1.0',
      description: 'VibeKeyboard AI session controller for T-LoRa-Pager',
      url: '/products/t-lora-series/t-lora-pager/vibe-keyboard/firmware/T-LoRaPager-VibeKeyboard-0.1.0-20260724_0x0.bin',
      address: 0x0000,
    }
  ]"
  :baud-rate="921600"
/>

操作步骤：

1. 关闭 Arduino Serial Monitor、PlatformIO Monitor 及其他正在占用串口的软件。
2. 在烧录工具中选择 **VibeKeyboard for T-LoRa-Pager**。
3. 点击 **连接设备**，在浏览器弹出的窗口中选择 T-LoRa-Pager 串口。
4. 点击 **开始烧录**，等待进度完成。烧录期间不要拔出 USB 线。
5. 烧录完成后按下设备 **RST**，VibeKeyboard 启动后会显示主界面并广播 BLE 设备。

如果浏览器无法连接设备，按住 **BOOT**，短按并释放 **RST**，再释放 **BOOT**，然后重新点击 **连接设备**。Safari 和 Firefox 目前不支持该页面使用的 Web Serial API。

> 其他射频版本请使用下面的自行编译方式，并将 Board Revision 设置为实际模块型号。

### 方法二：自行编译烧录

#### 1. 安装开发环境

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)。
2. 打开 **文件 > 首选项**，将以下地址添加到「附加开发板管理器网址」：

```text
https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json
```

3. 在开发板管理器中搜索并安装 `esp32 by Espressif Systems` 3.3.0-alpha1 或更高版本。
4. 下载 LilyGoLib，并通过 **项目 > 加载库 > 添加 .ZIP 库** 安装。
5. 下载 LilyGoLib-ThirdParty，将其中的所有库目录复制到 Arduino `libraries` 目录。不要复制最外层的 `LilyGoLib-ThirdParty` 目录，也不要在确认示例正常运行前升级这些配套依赖。

更完整的环境配置说明请参阅 [T-LoRaPager 快速上手](quick-start.md)。

#### 2. 选择开发板配置

在 Arduino IDE 中打开 **文件 > 示例 > LilyGoLib > VibeKeyboard**，或者直接打开 `examples/VibeKeyboard/VibeKeyboard.ino`，然后设置：

| Arduino IDE 设置 | 值 |
| --- | --- |
| Board | `LilyGo-T-LoRa-Pager` |
| USB CDC On Boot | `Enabled` |
| Partition Scheme | `16M Flash (3M APP/9.9MB FATFS)` |
| Board Revision | 与设备的射频模块一致，例如 `Radio-SX1262` |
| Upload Mode | `UART0/Hardware CDC` |
| Upload Speed | `921600` |
| USB Mode | `CDC and JTAG` |

#### 3. 上传固件

连接 T-LoRa-Pager，选择正确串口并点击 **Upload**。需要查看设备日志时，将 Serial Monitor 波特率设为 `115200`。

如果设备无法进入烧录状态：

1. 按住 **BOOT**。
2. 短按并释放 **RST**。
3. 释放 **BOOT**，重新上传。
4. 烧录完成后按 **RST** 退出下载模式。

固件正常启动后会显示 VibeKeyboard 主界面，并广播名为 `VibeKeyboard` 的 BLE 设备。

## 配置 vk-daemon

以下命令均以 LilyGoLib 仓库根目录为起点。

### 1. 创建运行环境

进入 daemon 目录，并根据锁文件创建虚拟环境：

```bash
cd examples/VibeKeyboard/tools/vk-daemon
uv sync --frozen --extra ble
```

如果只需要测试 HTTP、hook 或会话发现，不连接实体设备，可以运行 `uv sync`，之后使用 `--no-ble` 启动。

### 2. 安装 AI 工具集成

只安装本机实际使用的集成：

```bash
# Codex
uv run vk-daemon setup install codex

# Claude Code
uv run vk-daemon setup install claude-code
```

安装命令会修改当前用户的 AI 工具配置。Codex 使用 `~/.codex/config.toml` 和 `~/.codex/hooks.json`，Claude Code 使用 `~/.claude/settings.json`。如果之后移动或删除 daemon 目录，需要重新安装 hook，使配置中的 Python 路径保持有效。

可以随时检查安装状态：

```bash
uv run vk-daemon setup status
```

### 3. 启动 BLE 连接

1. 重启 T-LoRa-Pager，确认设备已进入 VibeKeyboard 主界面。
2. 打开电脑的 Bluetooth。无需在系统蓝牙设备列表中手动配对。
3. 在 macOS 首次运行时，如果系统请求蓝牙、辅助功能或麦克风权限，请选择允许。权限归属于启动 daemon 的宿主应用，Terminal、iTerm2、Visual Studio Code、Codex 和 Claude 需要分别授权。
4. 启用 BLE transport 并启动 daemon：

```bash
uv run vk-daemon config set ble.enabled true
uv run vk-daemon serve
```

daemon 默认监听 `http://127.0.0.1:19280`，并持续扫描、连接和重连 VibeKeyboard。连接成功后，日志中会出现：

```text
device_loop.connected label=BLE
```

`vk-daemon serve` 会保持前台运行，按 `Ctrl-C` 可停止服务。

Linux 用户需要先启动 BlueZ 并打开 Bluetooth adapter，例如在 `bluetoothctl` 中执行 `power on`，同时确保当前用户有权访问 BlueZ。

### 4. 配置 macOS 权限与听写

`vk-daemon` 使用 macOS 的透明度、许可与控制（TCC）授权，而不是 Unix root 权限。**不要使用 `sudo` 启动 daemon**。权限归属于启动 `vk-daemon` 的宿主应用，因此从不同应用启动时，需要分别授权。

| 权限 | 系统设置位置 | 用途 |
| --- | --- | --- |
| 蓝牙 | **隐私与安全性 > 蓝牙** | 扫描并连接 VibeKeyboard |
| 辅助功能 | **隐私与安全性 > 辅助功能** | 聚焦会话窗口、发送按键和触发“双击 Fn”听写 |
| 麦克风 | **隐私与安全性 > 麦克风** | Voice/听写音频输入 |

`vk-daemon serve` 会在启动时请求麦克风和辅助功能权限，并在 BLE 扫描时触发蓝牙权限申请。如果此前拒绝过，macOS 可能不会再次弹出授权窗口，需要在系统设置中手动开启。

根据实际运行方式，为对应的宿主应用授权：

- 在 Terminal 或 iTerm2 中运行时，为对应终端应用开启上述权限。
- 在 Visual Studio Code 集成终端中运行时，为 **Visual Studio Code** 开启权限。
- 从 Codex 或 Claude 应用启动时，为 **Codex** 或 **Claude** 开启权限。

修改权限后，必须完全退出并重新打开对应的 Terminal、iTerm2、Visual Studio Code、Codex 或 Claude，再启动 daemon。

#### 配置听写快捷键

`vk-daemon` 默认通过 macOS 的“双击 Fn”快捷键启动和停止系统听写。使用设备上的 Voice 键前，还需要完成以下设置：

1. 打开 **系统设置 > 键盘 > 听写**，开启系统听写。
2. 在 **听写 > 快捷键** 中选择 **按下 Fn 键两次**。

配置完成后，在 VibeKeyboard 主屏按住 Space 说话，松开 Space 停止听写。`vk-daemon` 会在按下和松开时分别触发一次“双击 Fn”，因此 macOS 的听写快捷键必须与上述设置一致。

> 未开启系统听写、快捷键设置不一致或未授予麦克风权限时，设备端仍可发送 Voice 按下和松开事件，但 Codex 或 Claude Code 无法正常获取语音输入。

### 5. 验证连接

保持 daemon 运行，在另一个终端中进入相同目录并执行：

```bash
curl -sS http://127.0.0.1:19280/health
curl -sS http://127.0.0.1:19280/device/state
curl -sS http://127.0.0.1:19280/sessions
uv run vk-daemon setup status
```

确认以下状态：

- `/health` 正常返回，`setup status` 显示 daemon 可访问。
- `/device/state` 中的 `ble_connected` 为 `true`。
- `setup status` 中的 `system.accessibility` 为 `true`，`system.microphone_authorization` 为 `authorized`。
- daemon 启动日志包含 `voice.microphone status=authorized` 和 `voice.accessibility status=authorized`。
- 启动 Claude Code 或 Codex 会话后，`/sessions` 返回相应会话，设备主屏同步显示。
- 权限请求出现后，可以在设备端选择 Allow 或 Deny。

不连接实体设备时，可使用以下命令单独验证 daemon：

```bash
uv run vk-daemon serve --no-ble
```

## 设备操作

### 按键导航

| 输入 | 页面 | 作用 |
| --- | --- | --- |
| 旋钮旋转 / 上下键 | 通用 | 移动选择或滚动列表；编辑声音音量时调整数值 |
| 旋钮中心键 / Enter | 主屏 | 打开 **Select Session** 会话选择窗口 |
| 旋钮中心键 / Enter | Setup、AI Agent、Sound、YOLO、Notify | 确认选项或打开详情 |
| 左方向键 / Backspace / Esc | 非主屏 | 返回上一层；离开 YOLO 页面时提交配置 |
| Backspace / Delete | 主屏 | 向主机发送 Delete 操作 |
| 左方向键 / Esc | 主屏 | 向主机发送 Cancel 操作 |
| `Fn` | 主屏 | 发送 Session 操作并打开通知列表 |
| Space | 主屏 | 按下时开始 Voice，松开时结束 Voice |
| `CAP` | 主屏 | 进入 Setup |
| `CAP` | Select Session | 关闭会话选择窗口 |
| `A` / `D` | Notify Detail | 分别允许或拒绝权限请求 |

### 切换会话

1. 在主屏按下旋钮中心键或 Enter，打开 **Select Session**。
2. 旋转编码器或按上下键选择会话。
3. 按旋钮中心键或 Enter 确认。

设备会将选择结果发送给 daemon，并在主屏显示当前会话。当前固件最多保存 32 个会话。

### 处理权限请求

收到新的权限请求时，设备可自动打开 **Notify** 页面：

1. 选择通知并打开 **Notify Detail**。
2. 按 `A` 允许请求，或按 `D` 拒绝请求。
3. daemon 将响应传回对应的 AI 会话。

设备最多保存 32 条通知。

### 使用 Setup 菜单

在主屏按 `CAP` 进入 Setup：

| 页面 | 用途 |
| --- | --- |
| AI Agent | 查看工具与 hook 状态、设置 daemon 端口、请求安装集成 |
| YOLO | 启用或关闭 YOLO、配置自动允许通知及 allow/deny 规则 |
| Sound | 调节音量、设置事件提示音、试听或静音 |
| About | 查看设备和固件信息 |

YOLO 配置会在离开页面时提交。固件最多编码 16 条非空 allow 规则和 16 条非空 deny 规则。

## 工作原理

1. VibeKeyboard 固件启动 LVGL 界面并广播 BLE 服务。
2. `vk-daemon` 扫描并连接设备，从本机读取 Claude Code 或 Codex 会话。
3. daemon 向设备发送会话、通知、权限、工具状态、时间和声音设置。
4. 设备将会话切换、权限响应和设置操作回传给 daemon。
5. BLE 断开后，界面仍可浏览，但真实会话数据和远程操作不会更新。

BLE 使用自定义二进制协议，字符串以 UTF-8 编码。需要开发自己的主机端时，请以示例中的 `vk_protocol.h` 和 `vk_protocol.cpp` 为准。

## 常见问题

### 烧录后没有真实会话

确认 `vk-daemon` 正在本机运行并已连接 BLE。没有 daemon 时，固件只显示默认占位内容。

### `ble_connected` 一直为 `false`

依次检查：

- 设备是否已启动并显示 VibeKeyboard 主界面。
- 电脑 Bluetooth 是否开启。
- 运行 daemon 的终端是否具有 Bluetooth 权限。
- 是否已执行 `uv run vk-daemon config set ble.enabled true`。

日志位于 `~/.config/vk-daemon/daemon.log`。如果日志反复显示 `no 'VibeKeyboard' BLE device found`，daemon 仍会继续扫描，不需要重启。

### AI Agent 按钮一直显示 `Sending`

设备已经发出操作请求，但尚未收到匹配 `request_id` 的结果。确认 daemon 正常运行，并检查对应工具集成和 BLE 连接状态。

### 时间一直显示 `--:--`

设备连接 BLE 后会向 daemon 请求时间。先检查 daemon 是否订阅设备事件以及 BLE 是否保持连接；板载 RTC 可在尚未收到主机时间时作为回退。

### Voice/听写没有声音输入

检查以下设置：

- **系统设置 > 键盘 > 听写** 已开启。
- **听写 > 快捷键** 已设为 **按下 Fn 键两次**。
- **系统设置 > 隐私与安全性 > 麦克风** 中，启动 daemon 的宿主应用已获得权限。
- **系统设置 > 隐私与安全性 > 辅助功能** 中，同一个宿主应用也已获得权限。

修改快捷键或权限后，需要完全退出并重新打开相应应用。

如果 Voice 在 Visual Studio Code 集成终端中正常、在 macOS Terminal 中失败，通常表示两个宿主应用的 TCC 权限不同。请为 Terminal 同时开启麦克风和辅助功能权限，完全退出并重新打开 Terminal，再启动 daemon。

日志中出现以下错误时，缺少的是辅助功能权限，而不是麦克风权限：

```text
macOS Accessibility permission is required to control Dictation
```

### 中文显示空白或缺字

VibeKeyboard 使用随示例编译的 Alibaba PuHuiTi 字体。自定义界面文本时，需要确认字体文件的 cmap 中包含对应 Unicode 字形。

### 串口出现 `queue full` 或 `rejected invalid packet`

- `queue full`：主机下发速度超过设备主循环的处理速度，应降低频率或合并更新。
- `rejected invalid packet`：数据包为空或超过 2048 字节，应检查协议编码和包长度。

## 相关资源

- [VibeKeyboard 示例源码](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/examples/VibeKeyboard)
- [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)
- [T-LoRaPager 快速上手](quick-start.md)
- [T-LoRaPager 产品页](index.md)
