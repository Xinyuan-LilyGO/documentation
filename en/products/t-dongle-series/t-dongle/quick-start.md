---
title: Quick Start
show_source: false
---

# T-Dongle Quick Start

## Arduino

### PlatformIO (Recommended)

1. Install [VS Code](https://code.visualstudio.com/) with the **PlatformIO IDE** extension
2. Clone the repository:
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Dongle-ESP32S2.git
   ```
3. Open the project and select the environment in `platformio.ini`
4. Build, plug into a USB-A port, then upload

### Arduino IDE

| Setting | Value |
| :-----: | :---: |
| Board | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | Disabled |

---

## Notes

- **Display:** 0.96-inch ST7735 TFT, 80×160 px (SPI)
- **RGB LED:** WS2812 addressable LED
- **TF card:** Hidden inside the USB-A housing
- **Display library:** Use LovyanGFX with the SPI pins from the repository schematic or display helper

---

## LVGL

T-Dongle can run LVGL 8.3.x on the 80×160 ST7735 display. Use a LovyanGFX flush callback:

```cpp
// Replace `display` with the LovyanGFX device configured for T-Dongle pins.
void disp_flush(lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p) {
    uint32_t w = area->x2 - area->x1 + 1;
    uint32_t h = area->y2 - area->y1 + 1;
    display.startWrite();
    display.setAddrWindow(area->x1, area->y1, w, h);
    display.pushPixels((uint16_t *)&color_p->full, w * h, true);
    display.endWrite();
    lv_disp_flush_ready(disp);
}
```

---

## FAQ

**Q: Display not initializing?**
A: Verify the ST7735 SPI pin assignments against the T-Dongle schematic; the compact form factor uses non-standard SPI pins.
