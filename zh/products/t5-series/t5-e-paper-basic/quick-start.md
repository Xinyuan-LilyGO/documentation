---
title: T5-E-Paper-Basic 快速开始
show_source: false
---

# T5-E-Paper-Basic 快速开始

## 开始之前

官方项目主要使用 PlatformIO 维护。Arduino IDE 可以按同等的 ESP32-S3 参数手动配置，但建议优先使用已经过验证的 PlatformIO 流程。

| 依赖 | 版本 / 来源 |
| :--- | :--- |
| Visual Studio Code | [下载](https://code.visualstudio.com/) |
| PlatformIO | 6.5.0 |
| PlatformIO Espressif 32 | 6.13.0 |
| M5GFX | ^0.2.24 |
| SensorLib | ^0.4.1 |
| 项目仓库 | [T5-E-Paper-Basic](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic) |

## 硬件准备

1. 检查电子纸屏排线是否完全插入并锁紧。
2. 仅在示例需要时插入 FAT32 格式的 TF 卡。
3. 使用支持数据传输的 USB-C 线连接开发板。

## PlatformIO

### 编译和上传

1. 安装 Visual Studio Code 和 **PlatformIO IDE** 扩展。
2. 克隆并打开官方仓库：

   ```powershell
   git clone https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic.git
   cd T5-E-Paper-Basic
   ```

3. 在 `platformio.ini` 中只取消一个 `src_dir` 的注释；默认选中出厂测试示例。
4. 编译并上传：

   ```powershell
   pio run -e T5_E_PAPER_BASIC
   pio run -e T5_E_PAPER_BASIC -t upload
   ```

5. 需要查看诊断日志时打开串口监视器：

   ```powershell
   pio device monitor --baud 115200
   ```

### 示例程序

| 示例 | 说明 |
| :--- | :--- |
| [factory_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/factory_test) | 综合测试 EPD、XL9555、TF 卡、Wi-Fi、电池和按键 |
| [epd_display_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/epd_display_test) | 几何图形、灰阶、文字、图案和刷新测试 |
| [sd_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/sd_test) | TF / SD 卡挂载、读取和写入测试 |
| [wifi_scan](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/wifi_scan) | 扫描附近的 2.4 GHz Wi-Fi 网络 |
| [axp2602_test](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/axp2602_test) | 电池电压、电流、SOC、SOH 和电量计状态 |
| [employee_badge](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/examples/employee_badge) | 显示带有内嵌 Logo 和二维码的静态电子工牌 |

## Arduino IDE

选择 **ESP32S3 Dev Module**，并使用与仓库板卡定义一致的设置：

| 设置 | 值 |
| :--- | :--- |
| 开发板 | ESP32S3 Dev Module |
| USB CDC On Boot | Enabled |
| CPU Frequency | 240 MHz |
| Flash Mode | QIO |
| Flash Size | 16 MB |
| Partition Scheme | 3 MB APP / FATFS |
| PSRAM | Enabled |
| Upload Speed | 921600 |
| USB Mode | CDC and JTAG |

## 屏幕配置

仓库列出的标准屏幕配置为 960 x 540。出厂测试程序还包含通过以下宏选择的 1216 x 684 面板配置：

```ini
-DFACTORY_TEST_PANEL_1216X684=1
```

## 烧录出厂固件

从仓库的[固件目录](https://github.com/Xinyuan-LilyGO/T5-E-Paper-Basic/tree/master/firmware)下载匹配的合并固件，然后从地址 `0x0` 写入：

```powershell
python -m esptool --chip esp32s3 --port COMx --baud 921600 write_flash 0x0 firmware\T5-E-Paper-Basic-factory_20260817.bin
```

请将 `COMx` 和固件文件名替换为实际值。

## 手动进入下载模式

1. 按住 **BOOT**。
2. 按下并释放 **RESET**。
3. 释放 **BOOT**。
4. 重新开始上传。

## 故障排查

| 现象 | 检查项 |
| :--- | :--- |
| 屏幕没有显示 | 检查 EPD 排线、供电、所选示例和屏幕分辨率。 |
| 严重残影或横线 | 重新上电，并等待一次完整的全屏刷新。 |
| 无法识别 SD 卡 | 使用 FAT32，并检查 GPIO38/39/40/47 和 XL9555 P05。 |
| Wi-Fi 扫描结果为空 | 使用 2.4 GHz 热点；ESP32-S3 无法扫描仅支持 5 GHz 的网络。 |
| 侧边按键无响应 | 检查 GPIO2/GPIO3 的 I2C 连接和 XL9555 P00 至 P04。 |
| 上传失败 | 手动进入下载模式，并确认 USB 线支持数据传输。 |
