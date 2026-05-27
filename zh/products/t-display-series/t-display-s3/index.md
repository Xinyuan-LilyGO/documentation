---
title: T-Display-S3
show_source: false
tags: ESP32-S3R8, WIFI, BLE, LCD
---

# {{ $frontmatter.title }} <ShopLink href="https://lilygo.cc/products/t-display-s3?variant=42589373268149" />



<ImageGallery :columns="3" :images="[
  { src: '/products/t-display-series/t-display-s3/index/image/t-display-s3-1.jpg', alt: 'T-Display-S3 front view' },
  { src: '/products/t-display-series/t-display-s3/index/image/t-display-s3-2.jpg', alt: 'T-Display-S3 back view' },
  { src: '/products/t-display-series/t-display-s3/index/image/t-display-s3-pin.jpg', alt: 'T-Display-S3 pin diagram' },
]" />


##  概述
T-Display-S3 是一款主控芯片为 ESP32-S3 的开发板。它配备了一块 1.9 英寸的 LCD 彩色屏幕和两个可编程按钮。通信采用 I8080 接口，保留了与 T-Display 相同的布局设计。你可以直接使用 ESP32S3 进行 USB 通信或编程。


##  快速开始

### 示例支持
| 示例名称 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :---: | :---: | :---: | :---: |
| [T-Display-S3](https://github.com/Xinyuan-LilyGO/T-Display-S3) | ✓ | ✓ | 包含 BLE, WIFI, SPIFFS, FFat 示例 |

### PlatformIO 配置步骤
1.  安装 Visual Studio Code 和 Python。
2.  在 VS Code 扩展中搜索 PlatformIO 插件并安装。
3.  安装完成后，重启 Visual Studio Code。
4.  重启后，点击左上角 `File` -> `Open Folder`，选择 T-Display-S3 目录。
5.  等待第三方依赖库安装完成。
6.  点击 `platformio.ini` 文件，在 platformio 栏中操作。
7.  取消注释 `default_envs = xxxx` 中的一行，确保只有一行生效。
8.  点击左下角的 (✔) 符号进行编译。
9.  将开发板通过 USB 连接到电脑。
10. 点击 (→) 上传固件。
11. 点击 (插头符号) 监视串口输出。
12. 如果无法写入或 USB 设备不停闪烁，请查看下方的 FAQ。

### Arduino IDE 配置步骤
1.  在 Arduino 首选项的“附加开发板管理器网址”中输入：
    `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
    *注意：测试阶段使用的是 2.0.14 版本。高于 2.0.14 的版本可能无法运行（截至 2024/08/02，TFT_eSPI 在高于 2.0.14 的版本上不工作）。*
2.  下载 T-Display-S3 库，移动到 Arduino 库文件夹（例如 `C:\Users\YourName\Documents\Arduino\libraries`）。
3.  将 `lib` 文件夹下的所有文件夹复制到 Arduino 库文件夹。
4.  进入下载的 `T-Display-S3/examples` 目录。
5.  选择任意示例并双击 `.ino` 文件打开。
6.  打开 Arduino IDE，进入 `工具` 菜单，根据下表进行设置：

| Arduino IDE 设置项 | 推荐值 |
| :--- | :--- |
| **开发板** | **ESP32S3 Dev Module** |
| 端口 | 选择你的端口 |
| **USB CDC 开机** | **Enable (启用)** |
| CPU 频率 | 240MHZ(WiFi) |
| 核心调试级别 | None |
| USB DFU 开机 | Disable |
| 烧录前擦除所有 Flash | Disable |
| 事件运行核心 | Core1 |
| Flash 模式 | QIO 80MHZ |
| **Flash 大小** | **16MB(128Mb)** |
| Arduino 运行核心 | Core1 |
| USB 固件 MSC 开机 | Disable |
| **分区方案** | **16M Flash(3M APP/9.9MB FATFS)** |
| **PSRAM** | **OPI PSRAM** |
| **上传模式** | **UART0/Hardware CDC** |
| 上传速度 | 921600 |
| USB 模式 | **CDC and JTAG** |

*注：加粗选项为必选，其余根据实际情况选择。*
7.  点击 `上传`，等待编译和烧录完成。

### ESP-IDF

*   T-Display-S3 的 ESP-IDF 示例版本，请跳转至 [LilyGo-Display-IDF](https://github.com/Xinyuan-LilyGO/LilyGo-Display-IDF)

### MicroPython

*   [russhughes/st7789s3_mpy](https://github.com/russhughes/st7789s3_mpy)
*   [Micropython](https://github.com/Xinyuan-LilyGO/lilygo-micropython)

### 支持的开发平台
1.  [Arduino IDE](https://www.arduino.cc/en/software)
2.  [PlatformIO](https://platformio.org/)
3.  [MicroPython](https://micropython.org/)


##  视频教程
*   [T-Display-S3 Arduino IDE 演示记录](https://www.youtube.com/watch?v=PgtxisFvMcc)


## 关键特性
*   **主控芯片**：ESP32-S3R8 双核 LX7 微处理器
*   **无线连接**：Wi-Fi 802.11, BLE 5 + BT mesh
*   **显示屏**：1.9 英寸对角线，全彩 TFT 显示屏
*   **分辨率**：170(H)RGB x 320(V) 8位并行接口
*   **接口**：STEMMA QT / Qwiic, JST-GH 1.25mm 2PIN


## 产品参数
| 特性 | 规格 |
| :--- | :--- |
| **MCU** | ESP32-S3R8 双核 LX7 微处理器 |
| **无线连接** | Wi-Fi 802.11, BLE 5 + BT mesh |
| **编程平台** | Arduino-ide, Micropython |
| **Flash** | 16MB |
| **PSRAM** | 8MB |
| **电池电压检测** | IO04 |
| **板载功能** | Boot + Reset + IO14 按钮 |
| **LCD** | 1.9" 对角线，全彩 TFT 显示屏 |
| **驱动芯片** | ST7789V |
| **分辨率** | 170(H)RGB x320(V) 8位并行接口 |
| **工作电源** | 3.3v |
| **支持接口** | STEMMA QT / Qwiic JST-SH 1.0mm 4-PIN |
| **连接器** | JST-GH 1.25mm 2PIN |

## 引脚图

<img src="/products/t-display-series/t-display-s3/index/image/t-display-s3-pin.jpg" alt="T-Display-S3 pin diagram" width=100%>

### Display

| ST7789V  | BL     | Power EN | RST    | CS     | DC     | WR     | RD     | D0     | D1     | D2     | D3     | D4     | D5     | D6     | D7     |
| :------: | :----: | :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO38 | GPIO15   | GPIO5  | GPIO6  | GPIO7  | GPIO8  | GPIO9  | GPIO39 | GPIO40 | GPIO41 | GPIO42 | GPIO45 | GPIO46 | GPIO47 | GPIO48 |

### Button

| Button   | BOOT  | User   |
| :------: | :---: | :----: |
| ESP32-S3 | GPIO0 | GPIO14 |

### Battery

| Battery  | ADC   |
| :------: | :---: |
| ESP32-S3 | GPIO4 |

### I2C (QWIIC / STEMMA QT)

| I2C      | SDA    | SCL    |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO18 | GPIO17 |

### UART

| UART     | TX     | RX     |
| :------: | :----: | :----: |
| ESP32-S3 | GPIO43 | GPIO44 |

## 尺寸图
*   [DWG 文件下载](https://github.com/Xinyuan-LilyGO/T-Display-S3/blob/main/dimensions/PCB.dwg)

##  原理图
*   [T-Display-S3 原理图 (PDF)](https://github.com/Xinyuan-LilyGO/T-Display-S3/blob/main/schematic/T_Display_S3.pdf)

##  数据手册
*   [ESP32-S3 数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)


##  软件开发
*   **GitHub 仓库**：[T-Display-S3 GitHub Repository](https://https://github.com/Xinyuan-LilyGO/T-Display-S3/tree/main)

### 依赖库
*   [lvgl](https://github.com/lvgl/lvgl)
*   [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
*   [TFT-eSPI](https://github.com/Bodmer/TFT_eSPI)
*   [ESP32_Host_MIDI](https://github.com/sauloverissimo/ESP32_Host_MIDI)
*   [Gingoduino](https://github.com/sauloverissimo/gingoduino)
*   [Adafruit_MPR121](https://github.com/adafruit/Adafruit_MPR121)

---

## 常见问题 (FAQ)

**1. 使用电池供电时屏幕不亮？**
*   当 T-Display-S3 使用电池供电时，必须将 GPIO15 设置为 HIGH 以打开背光。
*   请在 `setup` 函数的开头添加以下两行代码：
    ```cpp
    void setup(){
      // 开启显示电源
      pinMode(15, OUTPUT);
      digitalWrite(15, HIGH);
    }
    ```

**2. 程序可以正常烧录，但烧录后仍然无显示？**
*   如果你使用的是 **TFT_eSPI**，请尝试先运行 `Arduino_GFXDemo`。如果烧录后仍无显示，可判定为硬件问题。
*   如果 `Arduino_GFXDemo` 烧录正常，但 **TFT_eSPI** 无显示，则可能是 `User_Setup_Select` 被覆盖。请阅读 FAQ 第 3 条以重新配置 **TFT_eSPI**。

**3. 如何更新 **TFT_eSPI**，或确认 **TFT_eSPI** 的引脚配置是否正确？**
*   在 Arduino IDE 库管理器中搜索 **TFT_eSPI** 并点击更新。
*   进入默认库管理器安装位置并打开 **TFT_eSPI** 文件夹（默认路径例如：`C:\Users\YourName\Documents\Arduino\libraries`）。
*   打开 `User_Setup_Select.h`，注释掉默认启用的 `#include <User_Setup.h>` 或将其删除。
*   搜索 **Setup206_LilyGo_T_Display_S3**，找到后取消注释，保存并关闭。这样 TFT_eSPI 就会默认使用 T-Display-S3 的引脚定义。
    ```cpp
    #include <User_Setups/Setup206_LilyGo_T_Display_S3.h> // For the LilyGo T-Display S3 based ESP32S3 with ST7789 170 x 320 TFT
    ```

**4. 无法上传任何程序，提示“请手动进入上传模式”。**
*   通过 USB 线连接开发板。
*   按住 **BOOT** 按钮，同时按下 **RST** 按钮。
*   松开 **RST** 按钮。
*   松开 **BOOT** 按钮（如果没有 **BOOT** 按钮，请断开 IO0 与 GND 的连接）。
*   上传程序。
*   按下 **RST** 按钮退出下载模式。

**5. 如果使用外部电源而非 USB-C 供电，请关闭 CDC 选项。**
*   **Arduino IDE 用户**：在工具选项中，`USB CDC On Boot` 设置为 `Disable`。注意：关闭 USB CDC 将关闭串口重定向，此时通过 USB-C 打开端口将看不到任何串口消息输出，而是从 GPIO43 和 GPIO44 输出。
*   **PlatformIO 用户**：在 ini 文件中添加以下编译标志：
    ```ini
    build_flags = 
      ; 启用 -DARDUINO_USB_CDC_ON_BOOT 会在启动时开始打印并等待终端访问
      ; -DARDUINO_USB_CDC_ON_BOOT=1 
      ; 启用 -UARDUINO_USB_CDC_ON_BOOT 将关闭打印且在使用电池时不会阻塞
      -UARDUINO_USB_CDC_ON_BOOT
    ```

**6. 如果以上方法均无效，请烧录出厂固件进行快速验证。**
*   请查看 [这里](https://github.com/Xinyuan-LilyGO/T-Display-S3/blob/main/firmware/README.MD)

**7. 我可以使用外部 5V 引脚供电吗？**
*   请参阅 [issues/205](https://github.com/Xinyuan-LilyGO/T-Display-S3/issues/205)

**8. 默认充电电流设置为每小时 500mA。**
*   如果需要调整充电电流，请参阅此 [issue](https://github.com/Xinyuan-LilyGO/T-Display-S3/issues/230)

---

###  版本历史
| 版本 | 发布日期 | 更新描述 |
| :--- | :--- | :--- |
