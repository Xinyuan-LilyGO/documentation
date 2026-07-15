---
title: 快速开始
show_source: false
---

# T-PCIE 快速开始

## 概述

T-PCIE 是一款模块化开发平台，支持安装不同的 Mini PCIe 蜂窝/通信模块。

---

## Arduino

### PlatformIO（推荐）

克隆 [LilyGo-Modem-Series](https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series)，在 `platformio.ini` 中选择 `T-PCIE` 环境，编译上传。

---

### 外设示例

#### 通过 Mini PCIe 模块进行蜂窝数据通信（TinyGSM）

```cpp
#define TINY_GSM_MODEM_SIM7600  // 按实际安装的模块修改
#include <TinyGsmClient.h>

// T-PCIE 调制解调器 UART: RX=26, TX=27, PWR_KEY=4
HardwareSerial modemSerial(1);
TinyGsm modem(modemSerial);

void setup() {
  Serial.begin(115200);
  modemSerial.begin(115200, SERIAL_8N1, 26, 27);
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH); delay(1000);
  digitalWrite(4, LOW);  delay(2000);

  modem.restart();
  Serial.println("调制解调器: " + modem.getModemInfo());
}

void loop() { delay(1000); }
```

---

## 常见问题

**Q：支持哪些 Mini PCIe 模块？**  
A：T-PCIE 支持多种 SIMCom 和 Quectel 蜂窝模块（Mini PCIe 封装），详细兼容模块列表请参考硬件说明页。

**Q：一直无法烧录？**  
A：按住 **BOOT**，按一下 **RST** 后松开，再松开 BOOT，进入下载模式后再上传。
