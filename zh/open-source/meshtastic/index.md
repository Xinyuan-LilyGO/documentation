---
title: LILYGO Meshtastic 下载指南
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

</div>

<!-- <div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">淘宝</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>
</div> -->

>!了解更多可进入[Meshtastic](https://meshtastic.org/docs/hardware/devices/lilygo/)

## 使用网页端下载

打开[meshtastic.org](https://meshtastic.org/)，点击Download按钮

![alt text](/open-source/meshtastic/index/web1.jpg)

找到`FLasher`中的 `Web Flasher `

![alt text](/open-source/meshtastic/index/web_flash.png)


![alt text](/open-source/meshtastic/index/web2.png)

>根据步骤先选择设备然后选择固件的版本，点击Download按钮下载固件

![alt text](/open-source/meshtastic/index/web3.png)

>下载固件之前可以先对设备进行擦除

![alt text](/open-source/meshtastic/index/web4.png)

>点击 `update` 等待下载完成 

##  使用flash_download_tool 下载

### 固件获取

点击右上角Download按钮

<img src="/open-source/meshtastic/index/mesh_web.jpg" alt="summary" width=100%>

找到Firmware这一栏,点击Download Stable跳转到github的release页面下载固件

<img src="/open-source/meshtastic/index/mesh_firmware.jpg" alt="summary" width=100%>

点击releases可以查看到最新的固件版本

<img src="/open-source/meshtastic/index/mesh_release.jpg" alt="summary" width=100%>

确认好固件的版本点击进入详情往下滑找到Assets下载固件


<img src="/open-source/meshtastic/index/mesh_assets.jpg" alt="summary" width=100%>

这里根据芯片的型号下载对应的固件

### 工具获取

下载好固件后需要烧录到开发板上，这里推荐使用Flash_Download_Tool工具进行烧录

点击[下载Flash_Download_Tool](https://docs.espressif.com/projects/esp-test-tools/en/latest/esp32/production_stage/tools/flash_download_tool.html)


<img src="/open-source/meshtastic/index/flash_download.jpg" alt="summary" width=100%>

### 烧录固件
选择好对应的芯片型号和对应的固件文件，点击Start进行烧录

<img src="/open-source/meshtastic/index/flash_setting.jpg" alt="summary" width=100%>
