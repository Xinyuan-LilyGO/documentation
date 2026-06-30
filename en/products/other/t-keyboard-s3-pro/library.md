---
title: T-Keyboard-S3-Pro Library Guide
show_source: false
---

# T-Keyboard-S3-Pro Library Guide

The [T-Keyboard-S3-Pro-Library](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library) is a unified Arduino driver that wraps all hardware on the T-Keyboard-S3-Pro board behind a single global object — `TKeyboardS3Pro` — covering the four GC9107 display panels, five mechanical keys, 14 WS2812C RGB LEDs, and the rotary encoder.

## Installation

### Dependencies

Install these libraries first (Arduino Library Manager or manually):

| Library | Install |
| :-----: | :-----: |
| [LovyanGFX](https://github.com/lovyan03/LovyanGFX) | Arduino Library Manager or ZIP |
| [ButtonSense](https://github.com/lbuque/ButtonSense) | Manual / ZIP |

### Arduino IDE

Copy the `T-Keyboard-S3-Pro-Library` folder into your Arduino `libraries/` directory, then restart the IDE.

### PlatformIO

Add to `platformio.ini`:

```ini
lib_deps =
    https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro-Library.git
    https://github.com/lovyan03/LovyanGFX.git
    https://github.com/lbuque/ButtonSense.git
```

## Board Setup (Arduino IDE)

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32S3 Dev Module** |
| USB Mode | **Hardware CDC and JTAG** |
| USB CDC On Boot | **Enabled** |
| Flash Size | **16MB (128Mb)** |
| Flash Mode | **QIO 80 MHz** |
| Partition Scheme | **Default (6.25MB APP/3.43MB SPIFFS)** |
| PSRAM | **OPI PSRAM** |
| Upload Speed | 921600 |

> If upload fails, hold **BOOT** and press **RST** once, then release RST while still holding BOOT before clicking Upload.

## Quick Start

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();

    // Draw on host panels directly
    TKeyboardS3Pro.display1.fillScreen(TFT_RED);
    TKeyboardS3Pro.display2.drawString("Hello", 20, 50);

    // Set RGB LEDs (hue 0-360, saturation 0-100, brightness 0-100)
    TKeyboardS3Pro.setLeds(120, 80, 30);
}

void loop() {
    TKeyboardS3Pro.update();   // must call in loop() — polls keys + encoder

    if (TKeyboardS3Pro.key(0).wasPressed()) {
        Serial.println("KEY1 pressed");
    }
}
```

## Displays

The host board has **4 panels** (`display1`..`display4`). Each is a full LovyanGFX device — all LovyanGFX drawing methods work directly on them.

```cpp
// Named access — host panels only
TKeyboardS3Pro.display1.fillScreen(TFT_NAVY);
TKeyboardS3Pro.display2.setTextColor(TFT_WHITE);
TKeyboardS3Pro.display2.setTextSize(2);
TKeyboardS3Pro.display2.setCursor(10, 50);
TKeyboardS3Pro.display2.print("Hello");

// Index access — equivalent, 0-based
TKeyboardS3Pro.displayAt(0).fillScreen(TFT_RED);   // panel 1
TKeyboardS3Pro.displayAt(3).fillScreen(TFT_BLUE);  // panel 4

// Fill all panels at once
TKeyboardS3Pro.fillAllScreens(TFT_BLACK);

// Backlight (0-255)
TKeyboardS3Pro.setBrightness(200);
```

> **Note:** Always draw to one panel at a time. The STM32 multiplexes chip-select over I2C; selecting multiple panels simultaneously is unreliable.

### Full example — random rectangles

```cpp
#include <TKeyboardS3Pro.h>

static constexpr uint8_t N = TKeyboardS3ProClass::HOST_SCREEN_COUNT; // 4

void setup() {
    TKeyboardS3Pro.begin();
    TKeyboardS3Pro.setBrightness(255);
    TKeyboardS3Pro.fillAllScreens(TFT_BLACK);

    for (uint8_t i = 0; i < N; i++) {
        Display& s = TKeyboardS3Pro.displayAt(i);
        s.fillScreen(TFT_NAVY);
        s.setTextColor(TFT_WHITE);
        s.setTextSize(3);
        s.setCursor(48, 50);
        s.printf("%d", i + 1);
    }
}

void loop() {
    uint8_t i = rand() % N;
    Display& s = TKeyboardS3Pro.displayAt(i);
    int x = rand() % s.width();
    int y = rand() % s.height();
    int r = (s.width() >> 4) + 2;
    s.fillRect(x - r, y - r, r * 2, r * 2, rand());
    delay(2);
}
```

## Keys

The host has **5 keys** (KEY1..KEY5, index 0..4). Keys are read via the [ButtonSense](https://github.com/lbuque/ButtonSense) library — call `update()` once per loop to drive them.

```cpp
TKeyboardS3Pro.update();

// Edge detection
if (TKeyboardS3Pro.key(0).wasPressed())      { /* KEY1 just went down */ }
if (TKeyboardS3Pro.key(0).wasReleased())     { /* KEY1 just went up   */ }

// Level detection
if (TKeyboardS3Pro.key(1).isPressed())       { /* KEY2 is held down   */ }

// Rich events (require a full press+release cycle)
if (TKeyboardS3Pro.key(2).wasClicked())      { /* KEY3 single click   */ }
if (TKeyboardS3Pro.key(2).wasDoubleClicked()) { /* KEY3 double click  */ }
if (TKeyboardS3Pro.key(2).wasHold())         { /* KEY3 long hold      */ }
```

### Full example — key events on panels

```cpp
#include <TKeyboardS3Pro.h>

static constexpr uint8_t KEYS    = TKeyboardS3ProClass::KEY_COUNT;
static constexpr uint8_t SCREENS = TKeyboardS3ProClass::HOST_SCREEN_COUNT;

uint32_t pressCount[KEYS] = {};

void drawKey(uint8_t i) {
    if (i >= SCREENS) return;
    bool down = TKeyboardS3Pro.key(i).isPressed();
    Display& s = TKeyboardS3Pro.displayAt(i);
    s.fillScreen(down ? TFT_DARKGREEN : TFT_BLACK);
    s.setTextColor(TFT_WHITE);
    s.setTextSize(2);
    s.setCursor(8, 12);
    s.printf("KEY%d", i + 1);
    s.setTextColor(TFT_CYAN);
    s.setCursor(8, 52);
    s.printf("x %lu", (unsigned long)pressCount[i]);
    s.setCursor(8, 112);
    s.print(down ? "DOWN" : "up");
}

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
    for (uint8_t i = 0; i < SCREENS; i++) drawKey(i);
}

void loop() {
    TKeyboardS3Pro.update();
    for (uint8_t i = 0; i < KEYS; i++) {
        button::ButtonSense& b = TKeyboardS3Pro.key(i);
        if (b.wasPressed()) {
            pressCount[i]++;
            Serial.printf("KEY%d pressed (total %lu)\n", i + 1, (unsigned long)pressCount[i]);
            drawKey(i);
        }
        if (b.wasReleased()) drawKey(i);
    }
    delay(1);
}
```

## RGB LEDs

The board has **14 WS2812C LEDs** driven by the STM32 over I2C. Colors are specified in HSV.

```cpp
// All 14 LEDs at once — hue 0-360, saturation 0-100, brightness 0-100
TKeyboardS3Pro.setLeds(0,   100, 60);  // red
TKeyboardS3Pro.setLeds(120, 100, 60);  // green
TKeyboardS3Pro.setLeds(240, 100, 60);  // blue

// Selective LEDs via bitmask (bit0 = LED1 ... bit13 = LED14)
TKeyboardS3Pro.setLeds(60, 100, 50, 0x000F);  // first 4 LEDs yellow

// Turn all off
TKeyboardS3Pro.setLeds(0, 0, 0);
```

> When multiple boards are chained, keep brightness at **10 or below**. 6 boards × 14 LEDs at full brightness will overload the USB power rail.

### Full example — hue sweep

```cpp
#include <TKeyboardS3Pro.h>

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
}

void loop() {
    for (uint16_t hue = 0; hue < 360; hue += 5) {
        TKeyboardS3Pro.setLeds(hue, 100, 60);
        delay(20);
    }
}
```

## Rotary Encoder

The encoder is connected directly to ESP32 GPIOs (not via STM32). Call `update()` each loop — it advances the internal quadrature state machine.

```cpp
TKeyboardS3Pro.update();

// Change since last read
long delta = TKeyboardS3Pro.encoder.delta();
if (delta > 0) Serial.println("Clockwise");
if (delta < 0) Serial.println("Counter-clockwise");

// Absolute position (accumulates)
long pos = TKeyboardS3Pro.encoderPosition();
```

### Full example — show position on panel 1

```cpp
#include <TKeyboardS3Pro.h>

void showPosition(long pos) {
    Display& s = TKeyboardS3Pro.display1;
    s.fillScreen(TFT_BLACK);
    s.setTextColor(TFT_GREEN);
    s.setTextSize(2);
    s.setCursor(8, 12);
    s.print("ENCODER");
    s.setTextColor(TFT_WHITE);
    s.setTextSize(3);
    s.setCursor(8, 60);
    s.printf("%ld", pos);
}

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
    showPosition(0);
}

void loop() {
    TKeyboardS3Pro.update();
    long d = TKeyboardS3Pro.encoder.delta();
    if (d != 0) {
        long pos = TKeyboardS3Pro.encoderPosition();
        Serial.printf("encoder %s -> %ld\n", d > 0 ? "CW" : "CCW", pos);
        showPosition(pos);
    }
    delay(1);
}
```

## Chained Boards

Up to **6 boards** can be magnetically chained on the same I2C bus. Each board has its own address (host = `0x01`, expansion modules = `0x02`..`0x06`).

```cpp
TKeyboardS3Pro.begin();

// How many boards are connected?
Serial.printf("boards: %u\n", TKeyboardS3Pro.deviceCount());

// List all boards and their panel counts
for (uint8_t addr : TKeyboardS3Pro.devices()) {
    Serial.printf("  0x%02X — %u panels\n", addr, TKeyboardS3Pro.screenCount(addr));
}

// Draw on a specific panel of a specific board
// displayAt(panelIndex, boardAddress)  — panelIndex is 0-based
TKeyboardS3Pro.displayAt(0, 0x01).fillScreen(TFT_RED);   // panel 1 on host
TKeyboardS3Pro.displayAt(4, 0x02).fillScreen(TFT_BLUE);  // panel 5 on board 0x02

// Hot-plug: pick up a module connected after power-up
uint8_t count = TKeyboardS3Pro.refreshDevices();
Serial.printf("now %u boards\n", count);
```

### Full example — label every panel on every board

```cpp
#include <TKeyboardS3Pro.h>

static const uint16_t palette[6] = {
    TFT_NAVY, TFT_MAROON, TFT_DARKGREEN, TFT_PURPLE, TFT_OLIVE, TFT_DARKCYAN
};

void labelBoard(uint8_t address, uint16_t color) {
    uint8_t n = TKeyboardS3Pro.screenCount(address);
    for (uint8_t i = 0; i < n; i++) {
        Display& s = TKeyboardS3Pro.displayAt(i, address);
        s.fillScreen(color);
        s.setTextColor(TFT_WHITE);
        s.setTextSize(2);
        s.setCursor(6, 10);
        s.printf("0x%02X", address);
        s.setTextSize(3);
        s.setCursor(48, 60);
        s.printf("%d", i + 1);
    }
}

void setup() {
    Serial.begin(115200);
    TKeyboardS3Pro.begin();
    TKeyboardS3Pro.setBrightness(255);
}

void loop() {
    TKeyboardS3Pro.refreshDevices();
    uint8_t idx = 0;
    for (uint8_t a : TKeyboardS3Pro.devices()) {
        labelBoard(a, palette[idx++ % 6]);
    }
    delay(1000);
}
```

## BLE Keyboard

The `Advanced/BleKeyboard` example turns the T-Keyboard-S3-Pro into a Bluetooth HID keyboard. It requires the [ESP32 BLE Keyboard](https://github.com/T-vK/ESP32-BLE-Keyboard) library.

Key features of the example:
- Each of the 5 keys sends a configurable HID keycode (`KEY_MAP[]`)
- The rotary encoder sends Volume Up / Volume Down media keys
- The 4 panels show BLE connection state and per-key press counts
- KEY1 + KEY2 held together restarts BLE advertising (combo detection)
- LEDs breathe green when connected, pulse red when advertising

```cpp
#include <TKeyboardS3Pro.h>
#include <BleKeyboard.h>

BleKeyboard bleKb("TKB-S3-Pro", "LILYGO", 100);

const uint8_t KEY_MAP[5] = { 'a', 'b', 'c', 'd', ' ' };

void setup() {
    TKeyboardS3Pro.begin();

    // Combo: KEY1+KEY2 → restart advertising
    TKeyboardS3Pro.keyManager().onCombo(0x03, [](uint16_t, bool pressed) {
        if (!pressed) return;
        bleKb.end(); delay(200); bleKb.begin();
    });

    bleKb.begin();
}

void loop() {
    TKeyboardS3Pro.update();

    for (uint8_t i = 0; i < 5; i++) {
        if (TKeyboardS3Pro.key(i).wasPressed())
            if (bleKb.isConnected()) bleKb.press(KEY_MAP[i]);
        if (TKeyboardS3Pro.key(i).wasReleased())
            if (bleKb.isConnected()) bleKb.release(KEY_MAP[i]);
    }

    // Encoder → volume
    long pos = TKeyboardS3Pro.encoderPosition();
    static long last = 0;
    if (pos != last) {
        if (bleKb.isConnected())
            bleKb.write(pos > last ? KEY_MEDIA_VOLUME_UP : KEY_MEDIA_VOLUME_DOWN);
        last = pos;
    }
    delay(1);
}
```

## API Reference

### Initialization

| Method | Description |
| :----- | :---------- |
| `begin()` | Initialize all subsystems with default config |
| `begin(BoardConfig)` | Initialize with custom I2C/SPI frequencies and timing |
| `update()` | Call once per `loop()` — polls keys and advances encoder |

### Displays

| Method | Description |
| :----- | :---------- |
| `display1` .. `display4` | LovyanGFX objects for host panels 1–4 |
| `displayAt(index)` | Access host panel by 0-based index |
| `displayAt(index, address)` | Access any panel on any chained board |
| `screenCount(address)` | Panel count: 4 for host, 5 for expansion module |
| `fillAllScreens(color)` | Fill every panel on every board |
| `setBrightness(0..255)` | Shared backlight level |

### Keys

| Method | Description |
| :----- | :---------- |
| `key(i)` | `ButtonSense` object for key i (0=KEY1 .. 4=KEY5) |
| `key(i).wasPressed()` | True once on the falling edge |
| `key(i).wasReleased()` | True once on the rising edge |
| `key(i).isPressed()` | True while the key is held |
| `key(i).wasClicked()` | True after a complete click cycle |
| `key(i).wasDoubleClicked()` | True after two quick clicks |
| `key(i).wasHold()` | True after a long press |
| `keys(address)` | Raw 5-bit key state of any chained board |
| `keyManager()` | `ButtonManager` for combo detection |

### RGB LEDs

| Method | Description |
| :----- | :---------- |
| `setLeds(hue, sat, brt)` | Set all 14 LEDs — hue 0–360, sat/brt 0–100 |
| `setLeds(hue, sat, brt, mask, address)` | Target specific LEDs and/or board |

### Rotary Encoder

| Method | Description |
| :----- | :---------- |
| `encoder.delta()` | Steps changed since last read (positive = CW) |
| `encoderPosition()` | Running absolute detent count |

### Chained Boards

> [!IMPORTANT]
> Not tested

| Method | Description |
| :----- | :---------- |
| `deviceCount()` | Number of boards detected |
| `devices()` | Vector of detected I2C addresses (host first) |
| `refreshDevices()` | Re-scan bus and init any hot-plugged boards |
| `isDevicePresent(address)` | Check if a board responds |
| `firmwareVersion(address)` | STM32 firmware version byte |
