---
title: 快速开始
show_source: false
---

# T3-STM32 快速开始

## 所需工具

| 工具 | 来源 |
| :--: | :--: |
| STM32CubeIDE | [ST 官网](https://www.st.com/en/development-tools/stm32cubeide.html) |
| ST-Link V2 或 J-Link | 硬件调试器（必须） |

---

## 开发环境搭建

1. 从 ST 官网下载并安装 **STM32CubeIDE**
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T3-STM32.git
   ```
3. 在 STM32CubeIDE 中打开项目：**File → Open Projects from File System**
4. 将 ST-Link 连接到板子上的 4 针 SWD 排针
5. 点击 **Run**（▶）编译并烧录

---

## Arduino

### PlatformIO

T3-STM32 也可通过 PlatformIO 的 STM32 平台进行编程：

```ini
[env:t3-stm32]
platform = ststm32
board = nucleo_wl55jc
framework = stm32cube
```

连接 ST-Link 调试器后运行 `pio run --target upload`。

---

### 外设示例

#### Sub-GHz LoRa（STM32WL 内置无线电）

```c
/* STM32CubeIDE — HAL Sub-GHz 驱动 */
#include "subghz.h"

void LoRa_Init(void) {
  /* 配置 Sub-GHz 外设 */
  MX_SUBGHZ_Init();

  /* 设置频率 — 按实际版本修改 */
  HAL_SUBGHZ_WriteRegisters(&hsubghz, 0x088B,
    (uint8_t[]){0x39, 0x30, 0x00}, 3); // 915 MHz

  /* 设置发射功率 +14 dBm */
  RadioSetTxConfig(MODEM_LORA, 14, 0, 0, 10, 1, 8, false,
                   true, 0, 0, false, 3000);
}

void LoRa_Send(uint8_t *data, uint8_t len) {
  RadioSend(data, len);
}
```

#### OLED 显示屏（SSD1315 I2C）

```c
/* 使用 SSD1306 兼容的 HAL I2C 驱动 */
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

## 注意事项

- **不支持 Arduino**：T3-STM32 使用 STM32WL55CCU6，请使用 STM32CubeIDE 或带 STM32 工具链的 PlatformIO，不支持 Arduino ESP32
- **必须使用硬件调试器**：无原生 USB 引导加载程序，需通过 SWD 排针连接 ST-Link V2 或 J-Link 烧录固件
- **内置 LoRa**：Sub-GHz 无线电集成在 STM32WL 芯片内部，无外部 LoRa 芯片；通过 STM32 HAL Sub-GHz 无线电驱动配置
- **频段版本**：433 / 868 / 915 MHz 三个版本分开销售——烧录前确认你的版本并在固件中设置正确频率
- **OLED**：0.96 英寸 SSD1315（128×64，I2C）

---

## 常见问题

**Q：STM32CubeIDE 无法检测到开发板？**
A：确认 ST-Link 已正确连接到 SWD 引脚（SWDIO、SWDCLK、GND、3.3 V），并已安装 ST-Link 驱动。

**Q：可以使用 Arduino IDE 吗？**
A：不可以——STM32WL55 不受 Arduino ESP32 核心支持，请使用 STM32CubeIDE 或 PlatformIO + STM32 工具链。
