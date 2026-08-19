window.K230_PINOUT = {
  "meta": {
    "title": "K230 40Pin 引脚查询工具",
    "board": "K230",
    "header": "GPIO-40",
    "source": "K230_PINOUT_V1.2_20240822.xlsx"
  },
  "pins": [
    {
      "number": 1,
      "side": "left",
      "label": "ADC0",
      "chipName": "ADC_0",
      "chipPin": "C2",
      "power": "AVDD1P8_ADC",
      "ioType": "ADC",
      "direction": "I",
      "functions": [
        {
          "no": "",
          "signal": "ADC_0",
          "desc": "ADC Channel0",
          "category": "ADC"
        }
      ],
      "signals": [
        "ADC_0"
      ],
      "categories": [
        "ADC"
      ]
    },
    {
      "number": 2,
      "side": "right",
      "label": "ADC2",
      "chipName": "ADC_2",
      "chipPin": "B1",
      "power": "AVDD1P8_ADC",
      "ioType": "ADC",
      "direction": "I",
      "functions": [
        {
          "no": "",
          "signal": "ADC_2",
          "desc": "ADC Channel2",
          "category": "ADC"
        }
      ],
      "signals": [
        "ADC_2"
      ],
      "categories": [
        "ADC"
      ]
    },
    {
      "number": 3,
      "side": "left",
      "label": "ADC1",
      "chipName": "ADC_1",
      "chipPin": "D2",
      "power": "AVDD1P8_ADC",
      "ioType": "ADC",
      "direction": "I",
      "functions": [
        {
          "no": "",
          "signal": "ADC_1",
          "desc": "ADC Channel1",
          "category": "ADC"
        }
      ],
      "signals": [
        "ADC_1"
      ],
      "categories": [
        "ADC"
      ]
    },
    {
      "number": 4,
      "side": "right",
      "label": "GND",
      "chipName": "GND",
      "chipPin": "",
      "power": "0V",
      "ioType": "POWER",
      "direction": "G",
      "functions": [
        {
          "no": "",
          "signal": "GND",
          "desc": "Ground",
          "category": "GND"
        }
      ],
      "signals": [
        "GND"
      ],
      "categories": [
        "GND"
      ]
    },
    {
      "number": 5,
      "side": "left",
      "label": "GPIO47",
      "chipName": "GPIO47",
      "chipPin": "H5",
      "power": "VDDIO_BANK3",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO47",
          "desc": "GPIO47",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART2_CTS",
          "desc": "UART2 Clear To Send",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "PWM3",
          "desc": "PWM3",
          "category": "PWM"
        },
        {
          "no": "4",
          "signal": "IIC4_SDA",
          "desc": "IIC4 Serial Data",
          "category": "I2C"
        }
      ],
      "signals": [
        "GPIO47",
        "UART2_CTS",
        "PWM3",
        "IIC4_SDA"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "PWM",
        "UART"
      ]
    },
    {
      "number": 6,
      "side": "right",
      "label": "GPIO43",
      "chipName": "GPIO43",
      "chipPin": "J6",
      "power": "VDDIO_BANK3",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO43",
          "desc": "GPIO43",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART1_CTS",
          "desc": "UART1 Clear To Send",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "PWM1",
          "desc": "PWM1",
          "category": "PWM"
        },
        {
          "no": "4",
          "signal": "QSPI1_D3",
          "desc": "QSPI1 Data3",
          "category": "QSPI"
        }
      ],
      "signals": [
        "GPIO43",
        "UART1_CTS",
        "PWM1",
        "QSPI1_D3"
      ],
      "categories": [
        "GPIO",
        "PWM",
        "QSPI",
        "UART"
      ]
    },
    {
      "number": 7,
      "side": "left",
      "label": "GPIO14",
      "chipName": "GPIO14",
      "chipPin": "J5",
      "power": "VDDIO_BANK1",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO14",
          "desc": "GPIO14",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "OSPI_CS",
          "desc": "OSPI  Chip Select",
          "category": "QSPI"
        },
        {
          "no": "4",
          "signal": "QSPI0_CS0",
          "desc": "QSPI0  Chip Select0",
          "category": "QSPI"
        },
        {
          "no": "5",
          "signal": "DO3",
          "desc": "DO3, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO14",
        "OSPI_CS",
        "QSPI0_CS0",
        "DO3"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "QSPI"
      ]
    },
    {
      "number": 8,
      "side": "right",
      "label": "GPIO46",
      "chipName": "GPIO46",
      "chipPin": "H4",
      "power": "VDDIO_BANK3",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO46",
          "desc": "GPIO46",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART2_RTS",
          "desc": "UART2 Request-to-Send",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "PWM2",
          "desc": "PWM2",
          "category": "PWM"
        },
        {
          "no": "4",
          "signal": "IIC4_SCL",
          "desc": "IIC4 Serial Clock",
          "category": "I2C"
        }
      ],
      "signals": [
        "GPIO46",
        "UART2_RTS",
        "PWM2",
        "IIC4_SCL"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "PWM",
        "UART"
      ]
    },
    {
      "number": 9,
      "side": "left",
      "label": "GPIO17",
      "chipName": "GPIO17",
      "chipPin": "K4",
      "power": "VDDIO_BANK1",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO17",
          "desc": "GPIO17",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "OSPI_D1",
          "desc": "OSPI Data1",
          "category": "QSPI"
        },
        {
          "no": "3",
          "signal": "QSPI1_CS3",
          "desc": "QSPI1 Chip Select3",
          "category": "QSPI"
        },
        {
          "no": "4",
          "signal": "QSPI0_D1",
          "desc": "QSPI0 Data1",
          "category": "QSPI"
        },
        {
          "no": "5",
          "signal": "CO1",
          "desc": "CO1, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO17",
        "OSPI_D1",
        "QSPI1_CS3",
        "QSPI0_D1",
        "CO1"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "QSPI"
      ]
    },
    {
      "number": 10,
      "side": "right",
      "label": "GPIO18",
      "chipName": "GPIO18",
      "chipPin": "K5",
      "power": "VDDIO_BANK1",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO18",
          "desc": "GPIO18",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "OSPI_D2",
          "desc": "OSPI Data2",
          "category": "QSPI"
        },
        {
          "no": "3",
          "signal": "QSPI1_CS2",
          "desc": "QSPI1 Chip Select2",
          "category": "QSPI"
        },
        {
          "no": "4",
          "signal": "QSPI0_D2",
          "desc": "QSPI0 Data2",
          "category": "QSPI"
        },
        {
          "no": "5",
          "signal": "CO0",
          "desc": "CO0, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO18",
        "OSPI_D2",
        "QSPI1_CS2",
        "QSPI0_D2",
        "CO0"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "QSPI"
      ]
    },
    {
      "number": 11,
      "side": "left",
      "label": "GPIO53",
      "chipName": "GPIO53",
      "chipPin": "N4",
      "power": "VDDIO_BANK4",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO53",
          "desc": "GPIO53",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART3_CTS",
          "desc": "UART3 Clear To Send",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "PWM5",
          "desc": "PWM5",
          "category": "PWM"
        },
        {
          "no": "4",
          "signal": "IIC3_SDA",
          "desc": "IIC3 Serial Data",
          "category": "I2C"
        }
      ],
      "signals": [
        "GPIO53",
        "UART3_CTS",
        "PWM5",
        "IIC3_SDA"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "PWM",
        "UART"
      ]
    },
    {
      "number": 12,
      "side": "right",
      "label": "GPIO52",
      "chipName": "GPIO52",
      "chipPin": "M3",
      "power": "VDDIO_BANK4",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO52",
          "desc": "GPIO52",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART3_RTS",
          "desc": "UART3 Request-to-Send",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "PWM4",
          "desc": "PWM4",
          "category": "PWM"
        },
        {
          "no": "4",
          "signal": "IIC3_SCL",
          "desc": "IIC3 Serial Clock",
          "category": "I2C"
        }
      ],
      "signals": [
        "GPIO52",
        "UART3_RTS",
        "PWM4",
        "IIC3_SCL"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "PWM",
        "UART"
      ]
    },
    {
      "number": 13,
      "side": "left",
      "label": "GPIO33",
      "chipName": "GPIO33",
      "chipPin": "T11",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO33",
          "desc": "GPIO33",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "IIC0_SDA",
          "desc": "IIC0 Serial Data",
          "category": "I2C"
        },
        {
          "no": "3",
          "signal": "IIS_WS",
          "desc": "IIS Word Select",
          "category": "I2S"
        },
        {
          "no": "4",
          "signal": "UART3_RXD",
          "desc": "UART3 Receive Data",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO33",
        "IIC0_SDA",
        "IIS_WS",
        "UART3_RXD"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "I2S",
        "UART"
      ]
    },
    {
      "number": 14,
      "side": "right",
      "label": "GPIO62",
      "chipName": "GPIO62",
      "chipPin": "T14",
      "power": "VDDIO_BANK5",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO62",
          "desc": "GPIO62",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "M_CLK2",
          "desc": "Master Clock2, for carema",
          "category": "FUNC"
        },
        {
          "no": "3",
          "signal": "UART3_DE",
          "desc": "UART3 Driver output enable",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO62",
        "M_CLK2",
        "UART3_DE"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "UART"
      ]
    },
    {
      "number": 15,
      "side": "left",
      "label": "GPIO34",
      "chipName": "GPIO34",
      "chipPin": "U9",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO34",
          "desc": "GPIO34",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "IIC1_SCL",
          "desc": "IIC1 Serial Clock",
          "category": "I2C"
        },
        {
          "no": "3",
          "signal": "IIS_D_IN0",
          "desc": "IIS Data Input0",
          "category": "I2S"
        },
        {
          "no": "4",
          "signal": "PDM_IN3",
          "desc": "PDM Input3",
          "category": "PDM"
        },
        {
          "no": "5",
          "signal": "UART3_RTS",
          "desc": "UART3 Request to Send",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO34",
        "IIC1_SCL",
        "IIS_D_IN0",
        "PDM_IN3",
        "UART3_RTS"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "I2S",
        "PDM",
        "UART"
      ]
    },
    {
      "number": 16,
      "side": "right",
      "label": "GPIO32",
      "chipName": "GPIO32",
      "chipPin": "U10",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO32",
          "desc": "GPIO32",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "IIC0_SCL",
          "desc": "IIC0 Serial Clock",
          "category": "I2C"
        },
        {
          "no": "3",
          "signal": "IIS_CLK",
          "desc": "IIS Clock",
          "category": "I2S"
        },
        {
          "no": "4",
          "signal": "UART3_TXD",
          "desc": "UART3 Transmit Data",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO32",
        "IIC0_SCL",
        "IIS_CLK",
        "UART3_TXD"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "I2S",
        "UART"
      ]
    },
    {
      "number": 17,
      "side": "left",
      "label": "GPIO29",
      "chipName": "GPIO29",
      "chipPin": "V11",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO29",
          "desc": "GPIO29",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "MMC1_D1",
          "desc": "MMC1 Data1",
          "category": "MMC"
        },
        {
          "no": "3",
          "signal": "UART3_RXD",
          "desc": "UART3 Receive Data",
          "category": "UART"
        },
        {
          "no": "4",
          "signal": "3D_CTRL_IN",
          "desc": "3D_CTRL_IN",
          "category": "FUNC"
        },
        {
          "no": "5",
          "signal": "CI2",
          "desc": "CI2, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO29",
        "MMC1_D1",
        "UART3_RXD",
        "3D_CTRL_IN",
        "CI2"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "MMC",
        "UART"
      ]
    },
    {
      "number": 18,
      "side": "right",
      "label": "GPIO31",
      "chipName": "GPIO31",
      "chipPin": "V9",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO31",
          "desc": "GPIO31",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "MMC1_D3",
          "desc": "MMC1 Data3",
          "category": "MMC"
        },
        {
          "no": "3",
          "signal": "UART3_CTS",
          "desc": "UART3 Clear To Send",
          "category": "UART"
        },
        {
          "no": "4",
          "signal": "3D_CTRL_OUT2",
          "desc": "3D_CTRL_OUT2",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO31",
        "MMC1_D3",
        "UART3_CTS",
        "3D_CTRL_OUT2"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "MMC",
        "UART"
      ]
    },
    {
      "number": 19,
      "side": "left",
      "label": "GPIO28",
      "chipName": "GPIO28",
      "chipPin": "V12",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO28",
          "desc": "GPIO28",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "MMC1_D0",
          "desc": "MMC1 Data0",
          "category": "MMC"
        },
        {
          "no": "3",
          "signal": "UART3_TXD",
          "desc": "UART3 Transmit Data",
          "category": "UART"
        },
        {
          "no": "4",
          "signal": "PDM_IN1",
          "desc": "PDM Input1",
          "category": "PDM"
        },
        {
          "no": "5",
          "signal": "CI1",
          "desc": "CI1, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO28",
        "MMC1_D0",
        "UART3_TXD",
        "PDM_IN1",
        "CI1"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "MMC",
        "PDM",
        "UART"
      ]
    },
    {
      "number": 20,
      "side": "right",
      "label": "GPIO30",
      "chipName": "GPIO30",
      "chipPin": "V10",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO30",
          "desc": "GPIO30",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "MMC1_D2",
          "desc": "MMC1 Data2",
          "category": "MMC"
        },
        {
          "no": "3",
          "signal": "UART3_RTS",
          "desc": "UART3 Request to Send",
          "category": "UART"
        },
        {
          "no": "4",
          "signal": "3D_CTRL_OUT1",
          "desc": "3D_CTRL_OUT1",
          "category": "FUNC"
        },
        {
          "no": "5",
          "signal": "CI3",
          "desc": "CI3, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO30",
        "MMC1_D2",
        "UART3_RTS",
        "3D_CTRL_OUT1",
        "CI3"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "MMC",
        "UART"
      ]
    },
    {
      "number": 21,
      "side": "left",
      "label": "GPIO6",
      "chipName": "GPIO6",
      "chipPin": "V14",
      "power": "VDDIO_BANK0",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO6",
          "desc": "GPIO6",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "JTAG_RST",
          "desc": "JTAG_RST",
          "category": "JTAG"
        },
        {
          "no": "3",
          "signal": "PULSE_CNTR4",
          "desc": "PULSE_CNTR4",
          "category": "FUNC"
        },
        {
          "no": "4",
          "signal": "UART2_RXD",
          "desc": "UART2 Receive Data",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO6",
        "JTAG_RST",
        "PULSE_CNTR4",
        "UART2_RXD"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "JTAG",
        "UART"
      ]
    },
    {
      "number": 22,
      "side": "right",
      "label": "GPIO26",
      "chipName": "GPIO26",
      "chipPin": "U11",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO26",
          "desc": "GPIO26",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "MMC1_CLK",
          "desc": "MMC1 Clock",
          "category": "MMC"
        },
        {
          "no": "4",
          "signal": "PDM_CLK",
          "desc": "PDM Clock",
          "category": "PDM"
        }
      ],
      "signals": [
        "GPIO26",
        "MMC1_CLK",
        "PDM_CLK"
      ],
      "categories": [
        "GPIO",
        "MMC",
        "PDM"
      ]
    },
    {
      "number": 23,
      "side": "left",
      "label": "GPIO3",
      "chipName": "GPIO3",
      "chipPin": "V15",
      "power": "VDDIO_BANK0",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO3",
          "desc": "GPIO3",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "JTAG_TDI",
          "desc": "JTAG_TDI",
          "category": "JTAG"
        },
        {
          "no": "3",
          "signal": "PULSE_CNTR1",
          "desc": "Pulse Counter1",
          "category": "FUNC"
        },
        {
          "no": "4",
          "signal": "UART1_TXD",
          "desc": "UART1 Transmit Data",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO3",
        "JTAG_TDI",
        "PULSE_CNTR1",
        "UART1_TXD"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "JTAG",
        "UART"
      ]
    },
    {
      "number": 24,
      "side": "right",
      "label": "GPIO5",
      "chipName": "GPIO5",
      "chipPin": "U14",
      "power": "VDDIO_BANK0",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO5",
          "desc": "GPIO5",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "JTAG_TMS",
          "desc": "JTAG_TMS",
          "category": "JTAG"
        },
        {
          "no": "3",
          "signal": "PULSE_CNTR3",
          "desc": "Pulse Counter3",
          "category": "FUNC"
        },
        {
          "no": "4",
          "signal": "UART2_TXD",
          "desc": "UART2 Transmit Data",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO5",
        "JTAG_TMS",
        "PULSE_CNTR3",
        "UART2_TXD"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "JTAG",
        "UART"
      ]
    },
    {
      "number": 25,
      "side": "left",
      "label": "GPIO63",
      "chipName": "GPIO63",
      "chipPin": "U15",
      "power": "VDDIO_BANK5",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO63",
          "desc": "GPIO63",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "M_CLK3",
          "desc": "Master Clock3, for carema",
          "category": "FUNC"
        },
        {
          "no": "3",
          "signal": "UART3_RE",
          "desc": "UART3 Receiver output enable",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO63",
        "M_CLK3",
        "UART3_RE"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "UART"
      ]
    },
    {
      "number": 26,
      "side": "right",
      "label": "GPIO27",
      "chipName": "GPIO27",
      "chipPin": "W13",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO27",
          "desc": "GPIO27",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "MMC1_CMD",
          "desc": "MMC1 Command",
          "category": "MMC"
        },
        {
          "no": "3",
          "signal": "PULSE_CNTR5",
          "desc": "Pulse Counter5",
          "category": "FUNC"
        },
        {
          "no": "4",
          "signal": "PDM_IN0",
          "desc": "PDM Input0",
          "category": "PDM"
        },
        {
          "no": "5",
          "signal": "CI0",
          "desc": "CI0, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO27",
        "MMC1_CMD",
        "PULSE_CNTR5",
        "PDM_IN0",
        "CI0"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "MMC",
        "PDM"
      ]
    },
    {
      "number": 27,
      "side": "left",
      "label": "GPIO35",
      "chipName": "GPIO35",
      "chipPin": "W12",
      "power": "VDDIO_BANK2",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO35",
          "desc": "GPIO35",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "IIC1_SDA",
          "desc": "IIC1 Serial Data",
          "category": "I2C"
        },
        {
          "no": "3",
          "signal": "IIS_D_OUT0",
          "desc": "IIS Data Output0",
          "category": "I2S"
        },
        {
          "no": "4",
          "signal": "PDM_IN1",
          "desc": "PDM Input1",
          "category": "PDM"
        },
        {
          "no": "5",
          "signal": "UART3_CTS",
          "desc": "UART3 Clear To Send",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO35",
        "IIC1_SDA",
        "IIS_D_OUT0",
        "PDM_IN1",
        "UART3_CTS"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "I2S",
        "PDM",
        "UART"
      ]
    },
    {
      "number": 28,
      "side": "right",
      "label": "GPIO4",
      "chipName": "GPIO4",
      "chipPin": "Y15",
      "power": "VDDIO_BANK0",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO4",
          "desc": "GPIO4",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "JTAG_TDO",
          "desc": "JTAG_TDO",
          "category": "JTAG"
        },
        {
          "no": "3",
          "signal": "PULSE_CNTR2",
          "desc": "Pulse Counter2",
          "category": "FUNC"
        },
        {
          "no": "4",
          "signal": "UART1_RXD",
          "desc": "UART1 Receive Data",
          "category": "UART"
        }
      ],
      "signals": [
        "GPIO4",
        "JTAG_TDO",
        "PULSE_CNTR2",
        "UART1_RXD"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "JTAG",
        "UART"
      ]
    },
    {
      "number": 29,
      "side": "left",
      "label": "GPIO45",
      "chipName": "GPIO45",
      "chipPin": "H3",
      "power": "VDDIO_BANK3",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO45",
          "desc": "GPIO45",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART2_RXD",
          "desc": "UART2 Receive Data",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "IIC3_SDA",
          "desc": "IIC3 Serial Data",
          "category": "I2C"
        }
      ],
      "signals": [
        "GPIO45",
        "UART2_RXD",
        "IIC3_SDA"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "UART"
      ]
    },
    {
      "number": 30,
      "side": "right",
      "label": "GPIO2",
      "chipName": "GPIO2",
      "chipPin": "W15",
      "power": "VDDIO_BANK0",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO2",
          "desc": "GPIO2",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "JTAG_TCK",
          "desc": "JTAG_TCK",
          "category": "JTAG"
        },
        {
          "no": "3",
          "signal": "PULSE_CNTR0",
          "desc": "Pulse Counter0",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO2",
        "JTAG_TCK",
        "PULSE_CNTR0"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "JTAG"
      ]
    },
    {
      "number": 31,
      "side": "left",
      "label": "GPIO44",
      "chipName": "GPIO44",
      "chipPin": "H2",
      "power": "VDDIO_BANK3",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO44",
          "desc": "GPIO44",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART2_TXD",
          "desc": "UART2 Transmit Data",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "IIC3_SCL",
          "desc": "IIC3 Serial Clock",
          "category": "I2C"
        }
      ],
      "signals": [
        "GPIO44",
        "UART2_TXD",
        "IIC3_SCL"
      ],
      "categories": [
        "GPIO",
        "I2C",
        "UART"
      ]
    },
    {
      "number": 32,
      "side": "right",
      "label": "GPIO42",
      "chipName": "GPIO42",
      "chipPin": "H1",
      "power": "VDDIO_BANK3",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO42",
          "desc": "GPIO42",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "UART1_RTS",
          "desc": "UART1 Request-to-Send",
          "category": "UART"
        },
        {
          "no": "3",
          "signal": "PWM0",
          "desc": "PWM0",
          "category": "PWM"
        },
        {
          "no": "4",
          "signal": "QSPI1_D2",
          "desc": "QSPI1 Data2",
          "category": "QSPI"
        }
      ],
      "signals": [
        "GPIO42",
        "UART1_RTS",
        "PWM0",
        "QSPI1_D2"
      ],
      "categories": [
        "GPIO",
        "PWM",
        "QSPI",
        "UART"
      ]
    },
    {
      "number": 33,
      "side": "left",
      "label": "GPIO15",
      "chipName": "GPIO15",
      "chipPin": "K1",
      "power": "VDDIO_BANK1",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO15",
          "desc": "GPIO15",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "OSPI_CLK",
          "desc": "OSPI Clock",
          "category": "QSPI"
        },
        {
          "no": "4",
          "signal": "QSPI0_CLK",
          "desc": "QSPI0 Clock",
          "category": "QSPI"
        },
        {
          "no": "5",
          "signal": "CO3",
          "desc": "CO3, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO15",
        "OSPI_CLK",
        "QSPI0_CLK",
        "CO3"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "QSPI"
      ]
    },
    {
      "number": 34,
      "side": "right",
      "label": "GPIO16",
      "chipName": "GPIO16",
      "chipPin": "K2",
      "power": "VDDIO_BANK1",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO16",
          "desc": "GPIO16",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "OSPI_D0",
          "desc": "OSPI Data0",
          "category": "QSPI"
        },
        {
          "no": "3",
          "signal": "QSPI1_CS4",
          "desc": "QSPI1 Chip Select4",
          "category": "QSPI"
        },
        {
          "no": "4",
          "signal": "QSPI0_D0",
          "desc": "QSPI0 Data0",
          "category": "QSPI"
        },
        {
          "no": "5",
          "signal": "CO2",
          "desc": "CO2, for jam-link",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO16",
        "OSPI_D0",
        "QSPI1_CS4",
        "QSPI0_D0",
        "CO2"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "QSPI"
      ]
    },
    {
      "number": 35,
      "side": "left",
      "label": "GPIO19",
      "chipName": "GPIO19",
      "chipPin": "L1",
      "power": "VDDIO_BANK1",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO19",
          "desc": "GPIO19",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "OSPI_D3",
          "desc": "OSPI Data3",
          "category": "QSPI"
        },
        {
          "no": "3",
          "signal": "QSPI1_CS1",
          "desc": "QSPI1 Chip Select1",
          "category": "QSPI"
        },
        {
          "no": "4",
          "signal": "QSPI0_D3",
          "desc": "QSPI0 Data3",
          "category": "QSPI"
        }
      ],
      "signals": [
        "GPIO19",
        "OSPI_D3",
        "QSPI1_CS1",
        "QSPI0_D3"
      ],
      "categories": [
        "GPIO",
        "QSPI"
      ]
    },
    {
      "number": 36,
      "side": "right",
      "label": "GPIO20",
      "chipName": "GPIO20",
      "chipPin": "L2",
      "power": "VDDIO_BANK1",
      "ioType": "LVCMOS18/33",
      "direction": "IO",
      "functions": [
        {
          "no": "1",
          "signal": "GPIO20",
          "desc": "GPIO20",
          "category": "GPIO"
        },
        {
          "no": "2",
          "signal": "OSPI_D4",
          "desc": "OSPI Data4",
          "category": "QSPI"
        },
        {
          "no": "3",
          "signal": "QSPI1_CS0",
          "desc": "QSPI1 Chip Select0",
          "category": "QSPI"
        },
        {
          "no": "4",
          "signal": "PULSE_CNTR0",
          "desc": "Pulse Counter0",
          "category": "FUNC"
        }
      ],
      "signals": [
        "GPIO20",
        "OSPI_D4",
        "QSPI1_CS0",
        "PULSE_CNTR0"
      ],
      "categories": [
        "FUNC",
        "GPIO",
        "QSPI"
      ]
    },
    {
      "number": 37,
      "side": "left",
      "label": "5V",
      "chipName": "5V",
      "chipPin": "",
      "power": "5V",
      "ioType": "POWER",
      "direction": "P",
      "functions": [
        {
          "no": "",
          "signal": "5V",
          "desc": "5V power rail",
          "category": "POWER"
        }
      ],
      "signals": [
        "5V"
      ],
      "categories": [
        "POWER"
      ]
    },
    {
      "number": 38,
      "side": "right",
      "label": "3V3",
      "chipName": "3V3",
      "chipPin": "",
      "power": "3.3V",
      "ioType": "POWER",
      "direction": "P",
      "functions": [
        {
          "no": "",
          "signal": "3V3",
          "desc": "3.3V power rail",
          "category": "POWER"
        }
      ],
      "signals": [
        "3V3"
      ],
      "categories": [
        "POWER"
      ]
    },
    {
      "number": 39,
      "side": "left",
      "label": "GND",
      "chipName": "GND",
      "chipPin": "",
      "power": "0V",
      "ioType": "POWER",
      "direction": "G",
      "functions": [
        {
          "no": "",
          "signal": "GND",
          "desc": "Ground",
          "category": "GND"
        }
      ],
      "signals": [
        "GND"
      ],
      "categories": [
        "GND"
      ]
    },
    {
      "number": 40,
      "side": "right",
      "label": "USB-IN-5V",
      "chipName": "USB-IN-5V",
      "chipPin": "",
      "power": "5V",
      "ioType": "POWER",
      "direction": "P",
      "functions": [
        {
          "no": "",
          "signal": "USB-IN-5V",
          "desc": "5V power rail",
          "category": "POWER"
        }
      ],
      "signals": [
        "USB-IN-5V"
      ],
      "categories": [
        "POWER"
      ]
    }
  ]
};
