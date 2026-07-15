---
title: Quick Start
show_source: false
---

# T3-STM32 Quick Start

## Required Tools

| Tool | Source |
| :--: | :----: |
| STM32CubeIDE | [ST website](https://www.st.com/en/development-tools/stm32cubeide.html) |
| ST-Link V2 or J-Link | Hardware debugger required |

---

## Setup

1. Download and install **STM32CubeIDE** from ST's website
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T3-STM32.git
   ```
3. Open the project in STM32CubeIDE: **File → Open Projects from File System**
4. Connect the ST-Link to the 4-pin SWD header on the board
5. Click **Run** (▶) to build and flash

---

## Arduino

### PlatformIO

The T3-STM32 can also be programmed via PlatformIO with the STM32 platform:

```ini
[env:t3-stm32]
platform = ststm32
board = nucleo_wl55jc
framework = stm32cube
```

Connect the ST-Link debugger and run `pio run --target upload`.

---

### Peripheral Examples

#### Sub-GHz LoRa (STM32WL built-in radio)

```c
/* STM32CubeIDE — HAL Sub-GHz driver */
#include "subghz.h"

void LoRa_Init(void) {
  /* Configure Sub-GHz peripheral */
  MX_SUBGHZ_Init();

  /* Set frequency — match your board variant */
  HAL_SUBGHZ_WriteRegisters(&hsubghz, 0x088B,
    (uint8_t[]){0x39, 0x30, 0x00}, 3); // 915 MHz

  /* Set TX power to +14 dBm */
  RadioSetTxConfig(MODEM_LORA, 14, 0, 0, 10, 1, 8, false,
                   true, 0, 0, false, 3000);
}

void LoRa_Send(uint8_t *data, uint8_t len) {
  RadioSend(data, len);
}
```

#### OLED Display (SSD1315 I2C)

```c
/* Use SSD1306-compatible HAL I2C driver */
#include "ssd1306.h"

void Display_Init(void) {
  ssd1306_Init();
  ssd1306_Fill(Black);
  ssd1306_SetCursor(0, 0);
  ssd1306_WriteString("T3-STM32 Ready", Font_7x10, White);
  ssd1306_UpdateScreen();
}
```

---

## Notes

- **No Arduino support:** The T3-STM32 uses the STM32WL55CCU6 — use STM32CubeIDE or PlatformIO with the STM32 toolchain, not Arduino ESP32
- **Hardware debugger required:** There is no native USB bootloader; an ST-Link V2 or J-Link connected to the SWD header is needed to flash firmware
- **Built-in LoRa:** The Sub-GHz radio is integrated into the STM32WL die — no external LoRa chip; configure via the STM32 HAL Sub-GHz radio driver
- **Frequency variant:** Three versions sold separately (433 / 868 / 915 MHz) — verify your variant before setting the radio frequency in firmware
- **OLED:** 0.96-inch SSD1315 (128×64, I2C)

---

## FAQ

**Q: STM32CubeIDE cannot detect the board?**
A: Verify the ST-Link is properly connected to the SWD pins (SWDIO, SWDCLK, GND, 3.3 V) and that ST-Link drivers are installed.

**Q: Can I use Arduino IDE?**
A: No — the STM32WL55 is not supported by the Arduino ESP32 core. Use STM32CubeIDE or PlatformIO with the STM32 toolchain.
