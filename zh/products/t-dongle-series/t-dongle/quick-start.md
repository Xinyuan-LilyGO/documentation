---
title: 快速开始
show_source: false
---

# T-Dongle 快速开始

## Arduino

### PlatformIO（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/) 和 **PlatformIO IDE** 扩展
2. 克隆仓库：
   ```bash
   git clone https://github.com/Xinyuan-LilyGO/T-Dongle-ESP32S2.git
   ```
3. 打开项目，在 `platformio.ini` 中选择环境
4. 编译，将 Dongle 插入 USB-A 接口后上传

### Arduino IDE

| 设置项 | 值 |
| :----: | :--: |
| 开发板 | **ESP32 Dev Module** |
| Upload Speed | 921600 |
| Flash Mode | **QIO** |
| Flash Size | **4MB (32Mb)** |
| Partition Scheme | **Default 4MB with spiffs** |
| PSRAM | Disabled |

---

## 注意事项

- **显示屏**：0.96 英寸 ST7735 TFT，80×160，SPI 接口
- **RGB LED**：WS2812 可编程 LED
- **TF 卡**：位于 USB-A 外壳内部
- **显示库**：使用 LovyanGFX，并按仓库原理图或显示 helper 中的 SPI 引脚配置

---

## LVGL

T-Dongle 可以在 80×160 ST7735 屏幕上运行 LVGL 8.3.x。刷新回调使用 LovyanGFX：

```cpp
// 将 display 替换为按 T-Dongle 引脚配置好的 LovyanGFX 设备对象。
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

## 常见问题

**Q：屏幕无法初始化？**
A：请按 T-Dongle 原理图确认 ST7735 SPI 引脚；该紧凑外形使用了非标准 SPI 引脚。
