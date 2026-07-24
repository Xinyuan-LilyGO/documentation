---
title: VibeKeyboard User Guide
show_source: false
---

# VibeKeyboard User Guide

`VibeKeyboard` is an AI session controller example for the LILYGO T-LoRa-Pager. It connects the device to `vk-daemon` on a computer over BLE, allowing you to view and switch Claude Code and Codex sessions, handle permission requests, and manage YOLO and sound settings from the device.

> `VibeKeyboard` is not a general-purpose BLE keyboard. The complete experience requires both the device firmware and the host-side `vk-daemon`. With only the firmware installed, you can browse the UI, but real sessions and remote actions are unavailable.

## Key Features

- View and switch between up to 32 AI sessions, including status, context usage, cost, token count, and the last message.
- Receive notifications and permission requests, then select **Allow** or **Deny** on the device.
- Check the installation and integration status of Claude Code, Codex, iTerm2, and `terminal-notifier`.
- Configure YOLO mode, automatic notification approval, and allow/deny rules.
- Adjust volume, mute state, and event sounds.
- Synchronize time from the host, with the onboard RTC as an offline fallback.

## Requirements

The complete setup requires:

- LILYGO T-LoRa-Pager
- A computer with Bluetooth Low Energy support
- Arduino IDE
- Arduino-ESP32 3.3.0-alpha1 or later
- [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)
- [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)
- Python 3.12 or later
- [`uv`](https://docs.astral.sh/uv/)
- At least one of Claude Code or Codex

On macOS, full functionality requires Bluetooth, Accessibility, and Microphone permissions for the application that launches `vk-daemon`, as well as the system Dictation shortcut. See [Configure macOS Permissions and Dictation](#_5-configure-macos-permissions-and-dictation).

`vk-daemon` currently provides its most complete support on macOS. Linux can run the daemon core and BLE transport, but desktop features such as window focusing, keystrokes, and native notifications are unavailable. Windows has not yet been fully validated at the project level.

To connect a physical device, `vk-daemon` must run locally on a computer with Bluetooth permission. A remote host or cloud development environment cannot access the local BLE adapter on its behalf.

## Flash the VibeKeyboard Firmware

VibeKeyboard supports online flashing and local compilation. Online flashing is recommended because it does not require Arduino IDE or the dependency libraries. Use local compilation when modifying the source or targeting another radio variant.

### Method 1: Online Flashing (Recommended)

The online firmware below is built for the **T-LoRa-Pager SX1262** variant. The flasher uses the Web Serial API, so open this page in desktop Chrome or Edge and connect the device with a data-capable USB-C cable.

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

To flash the firmware:

1. Close Arduino Serial Monitor, PlatformIO Monitor, and any other application using the serial port.
2. Select **VibeKeyboard for T-LoRa-Pager** in the flasher.
3. Click **Connect Device** (`连接设备`), then select the T-LoRa-Pager serial port in the browser dialog.
4. Click **Start Flashing** (`开始烧录`) and wait for the operation to finish. Do not disconnect the USB cable during flashing.
5. Press **RST** when flashing is complete. VibeKeyboard displays its main screen and begins advertising over BLE after startup.

If the browser cannot connect, hold **BOOT**, press and release **RST**, release **BOOT**, and click **Connect Device** (`连接设备`) again. Safari and Firefox do not currently support the Web Serial API used by this page.

> For other radio variants, use the local compilation method below and select the Board Revision that matches the installed radio module.

### Method 2: Compile and Flash Locally

#### 1. Install the Development Environment

1. Install [Arduino IDE](https://www.arduino.cc/en/software).
2. Open **File > Preferences** and add this URL under Additional Boards Manager URLs:

```text
https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json
```

3. In Boards Manager, install `esp32 by Espressif Systems` 3.3.0-alpha1 or later.
4. Download LilyGoLib and install it through **Sketch > Include Library > Add .ZIP Library**.
5. Download LilyGoLib-ThirdParty and copy every library directory inside it to the Arduino `libraries` directory. Do not copy the outer `LilyGoLib-ThirdParty` directory, and do not upgrade the bundled dependencies until the example works correctly.

For complete environment setup instructions, see [T-LoRaPager Quick Start](quick-start.md).

#### 2. Select the Board Configuration

In Arduino IDE, open **File > Examples > LilyGoLib > VibeKeyboard**, or open `examples/VibeKeyboard/VibeKeyboard.ino` directly, then configure:

| Arduino IDE setting | Value |
| --- | --- |
| Board | `LilyGo-T-LoRa-Pager` |
| USB CDC On Boot | `Enabled` |
| Partition Scheme | `16M Flash (3M APP/9.9MB FATFS)` |
| Board Revision | Match the installed radio module, for example `Radio-SX1262` |
| Upload Mode | `UART0/Hardware CDC` |
| Upload Speed | `921600` |
| USB Mode | `CDC and JTAG` |

#### 3. Upload the Firmware

Connect the T-LoRa-Pager, select the correct serial port, and click **Upload**. Set Serial Monitor to `115200` baud to view device logs.

If the device does not enter download mode:

1. Hold **BOOT**.
2. Press and release **RST**.
3. Release **BOOT** and upload again.
4. Press **RST** after flashing to leave download mode.

After the firmware starts, the device displays the VibeKeyboard main screen and advertises a BLE peripheral named `VibeKeyboard`.

## Configure vk-daemon

### 1. Get the Source and vk-daemon

The VibeKeyboard firmware and `vk-daemon` are located in the [VibeKeyboard example directory in LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/examples/VibeKeyboard). The daemon itself is located at `examples/VibeKeyboard/tools/vk-daemon`.

Using Git is the recommended way to download the complete source and enter the daemon directory:

```bash
git clone https://github.com/Xinyuan-LilyGO/LilyGoLib.git
cd LilyGoLib/examples/VibeKeyboard/tools/vk-daemon
```

Alternatively, download the LilyGoLib ZIP archive from GitHub, extract it, and navigate to:

```text
examples/VibeKeyboard/tools/vk-daemon
```

### 2. Create the Runtime Environment

From the `vk-daemon` directory, create the virtual environment from the lock file:

```bash
uv sync --frozen --extra ble
```

To test HTTP, hooks, or session discovery without a Bluetooth adapter, run `uv sync` without the BLE extra and start the daemon with `--no-ble` later.

### 3. Install AI Tool Integrations

Install only the integrations used on the host:

```bash
# Codex
uv run vk-daemon setup install codex

# Claude Code
uv run vk-daemon setup install claude-code
```

These commands modify the current user's AI tool configuration. Codex uses `~/.codex/config.toml` and `~/.codex/hooks.json`; Claude Code uses `~/.claude/settings.json`. If the daemon directory is moved or deleted, reinstall the hooks so their stored Python paths remain valid.

Check the installation status at any time:

```bash
uv run vk-daemon setup status
```

### 4. Start the BLE Connection

1. Restart the T-LoRa-Pager and confirm that the VibeKeyboard main screen appears.
2. Enable Bluetooth on the computer. Manual pairing in the system Bluetooth device list is not required.
3. On first launch in macOS, allow Bluetooth, Accessibility, and Microphone access when prompted. Permissions belong to the application that launches the daemon, so Terminal, iTerm2, Visual Studio Code, Codex, and Claude must be authorized separately.
4. Enable the BLE transport and start the daemon:

```bash
uv run vk-daemon config set ble.enabled true
uv run vk-daemon serve
```

The daemon listens on `http://127.0.0.1:19280` by default and continuously scans for, connects to, and reconnects to VibeKeyboard. A successful connection produces this log entry:

```text
device_loop.connected label=BLE
```

`vk-daemon serve` runs in the foreground. Press `Ctrl-C` to stop it.

Linux hosts must start BlueZ and power on the Bluetooth adapter, for example by running `power on` in `bluetoothctl`. The current user must also have permission to access BlueZ.

### 5. Configure macOS Permissions and Dictation

`vk-daemon` uses macOS Transparency, Consent, and Control (TCC) permissions, not Unix root privileges. **Do not run the daemon with `sudo`.** Permissions belong to the application that launches `vk-daemon`, so each host application must be authorized separately.

| Permission | System Settings location | Purpose |
| --- | --- | --- |
| Bluetooth | **Privacy & Security > Bluetooth** | Scan for and connect to VibeKeyboard |
| Accessibility | **Privacy & Security > Accessibility** | Focus session windows, send keystrokes, and trigger the double-Fn Dictation shortcut |
| Microphone | **Privacy & Security > Microphone** | Voice and Dictation audio input |

`vk-daemon serve` requests Microphone and Accessibility access during startup and triggers the Bluetooth permission request when BLE scanning begins. If access was previously denied, macOS might not show the prompt again; enable it manually in System Settings.

Authorize the application that matches how the daemon is launched:

- When running from Terminal or iTerm2, enable the permissions for that terminal application.
- When running from the Visual Studio Code integrated terminal, enable them for **Visual Studio Code**.
- When launched from the Codex or Claude application, enable them for **Codex** or **Claude**.

After changing permissions, fully quit and reopen the corresponding Terminal, iTerm2, Visual Studio Code, Codex, or Claude application before restarting the daemon.

#### Configure the Dictation Shortcut

By default, `vk-daemon` starts and stops macOS Dictation using the double-Fn shortcut. Before using the device Voice key:

1. Open **System Settings > Keyboard > Dictation** and enable Dictation.
2. Under **Dictation > Shortcut**, select **Press Fn (Function) Key Twice**.

When configuration is complete, hold Space on the VibeKeyboard main screen while speaking and release Space to stop Dictation. `vk-daemon` sends one double-Fn shortcut on press and another on release, so the macOS shortcut must match the setting above.

> If Dictation is disabled, the shortcut does not match, or Microphone access is missing, the device still sends Voice press and release events, but Codex or Claude Code cannot receive voice input correctly.

### 6. Verify the Connection

Keep the daemon running, open another terminal in the same directory, and run:

```bash
curl -sS http://127.0.0.1:19280/health
curl -sS http://127.0.0.1:19280/device/state
curl -sS http://127.0.0.1:19280/sessions
uv run vk-daemon setup status
```

Confirm that:

- `/health` returns successfully and `setup status` reports that the daemon is reachable.
- `ble_connected` is `true` in `/device/state`.
- `system.accessibility` is `true` and `system.microphone_authorization` is `authorized` in `setup status`.
- The daemon startup log contains `voice.microphone status=authorized` and `voice.accessibility status=authorized`.
- Starting a Claude Code or Codex session makes it appear in `/sessions` and on the device main screen.
- Permission requests can be approved or denied from the device.

To validate the daemon without a physical device, run:

```bash
uv run vk-daemon serve --no-ble
```

## Device Controls

### Key Navigation

| Input | Screen | Action |
| --- | --- | --- |
| Rotate encoder / Up and Down | Any | Move focus or scroll; adjust volume while editing the Sound volume |
| Encoder center button / Enter | Main screen | Open **Select Session** |
| Encoder center button / Enter | Setup, AI Agent, Sound, YOLO, Notify | Confirm the focused option or open details |
| Left / Backspace / Esc | Any screen except main | Go back; leaving YOLO submits the current configuration |
| Backspace / Delete | Main screen | Send the Delete action to the host |
| Left / Esc | Main screen | Send the Cancel action to the host |
| `Fn` | Main screen | Send the Session action and open notifications |
| Space | Main screen | Start Voice on press and stop Voice on release |
| `CAP` | Main screen | Open Setup |
| `CAP` | Select Session | Close the session selector |
| `A` / `D` | Notify Detail | Allow or deny the permission request |

### Switch Sessions

1. Press the encoder center button or Enter on the main screen to open **Select Session**.
2. Rotate the encoder or use Up and Down to select a session.
3. Press the encoder center button or Enter to confirm.

The device sends the selection to the daemon and shows the active session on the main screen. The firmware stores up to 32 sessions.

### Handle Permission Requests

The device can automatically open **Notify** when a new permission request arrives:

1. Select a notification and open **Notify Detail**.
2. Press `A` to allow the request or `D` to deny it.
3. The daemon sends the response to the corresponding AI session.

The device stores up to 32 notifications.

### Use the Setup Menu

Press `CAP` on the main screen to open Setup:

| Screen | Purpose |
| --- | --- |
| AI Agent | View tool and hook status, set the daemon port, and request integration installation |
| YOLO | Enable or disable YOLO and configure automatic notification approval and allow/deny rules |
| Sound | Adjust volume, assign event sounds, preview sounds, or mute audio |
| About | View device and firmware information |

YOLO settings are submitted when leaving the screen. The firmware encodes up to 16 non-empty allow rules and 16 non-empty deny rules.

## How It Works

1. The VibeKeyboard firmware starts the LVGL interface and advertises its BLE service.
2. `vk-daemon` scans for and connects to the device, then reads Claude Code or Codex sessions from the host.
3. The daemon sends sessions, notifications, permission requests, tool status, time, and sound settings to the device.
4. The device returns session changes, permission responses, and configuration actions to the daemon.
5. When BLE disconnects, the UI remains available, but live session data and remote actions stop updating.

BLE uses a custom binary protocol with UTF-8 strings. To develop another host implementation, use `vk_protocol.h` and `vk_protocol.cpp` in the example as the protocol source of truth.

## Troubleshooting

### No Real Session Data After Flashing

Confirm that `vk-daemon` is running locally and connected over BLE. Without the daemon, the firmware only displays placeholder content.

### `ble_connected` Remains `false`

Check that:

- The device is powered on and displays the VibeKeyboard main screen.
- Bluetooth is enabled on the computer.
- The application running the daemon has Bluetooth permission.
- `uv run vk-daemon config set ble.enabled true` has been run.

Logs are stored in `~/.config/vk-daemon/daemon.log`. If `no 'VibeKeyboard' BLE device found` repeats, the daemon continues scanning and does not need to be restarted.

### AI Agent Button Remains on `Sending`

The device sent an action request but did not receive a result with the matching `request_id`. Confirm that the daemon is running and check the relevant integration and BLE connection.

### Time Remains `--:--`

After BLE connects, the device requests time from the daemon. Confirm that the daemon subscribes to device events and that BLE remains connected. The onboard RTC is used as a fallback until host time arrives.

### Voice or Dictation Has No Audio Input

Check that:

- **System Settings > Keyboard > Dictation** is enabled.
- **Dictation > Shortcut** is set to **Press Fn (Function) Key Twice**.
- The application that launched the daemon has access under **System Settings > Privacy & Security > Microphone**.
- The same host application has access under **System Settings > Privacy & Security > Accessibility**.

After changing the shortcut or permissions, fully quit and reopen the corresponding application.

If Voice works in the Visual Studio Code integrated terminal but fails in macOS Terminal, the two host applications usually have different TCC permissions. Enable both Microphone and Accessibility access for Terminal, fully quit and reopen Terminal, then restart the daemon.

This log message specifically indicates missing Accessibility permission, not missing Microphone permission:

```text
macOS Accessibility permission is required to control Dictation
```

### Chinese Text Is Blank or Missing Glyphs

VibeKeyboard compiles the bundled Alibaba PuHuiTi fonts into the firmware. When adding custom UI text, confirm that the font file cmap contains the required Unicode glyphs.

### Serial Log Shows `queue full` or `rejected invalid packet`

- `queue full`: the host is sending data faster than the device main loop can process it. Reduce the update frequency or combine updates.
- `rejected invalid packet`: the packet is empty or larger than 2048 bytes. Check the protocol encoding and packet length.

## Related Resources

- [VibeKeyboard example source](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/examples/VibeKeyboard)
- [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib)
- [T-LoRaPager Quick Start](quick-start.md)
- [T-LoRaPager product page](index.md)
