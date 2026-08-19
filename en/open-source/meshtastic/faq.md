---
title: Meshtastic FAQ
show_source: false
---

# {{ $frontmatter.title }}

## Meshtastic General

### How to Confirm a Full Charge

When USB power is connected, the USB input voltage affects battery-level detection, so the Meshtastic UI will usually show **100%** immediately. Do not use the UI battery percentage to determine whether charging is complete while USB remains connected.

Check the **blue charging indicator on the bottom of the device** instead:

![Location of the blue charging indicator on the bottom of the device](/open-source/meshtastic/faq/image/meshtastic-charging-led.jpg)

- **Blue LED on:** the battery is charging.
- **Blue LED off:** charging is complete and the battery is at 100%.

> This indication is valid only while USB is properly connected and supplying power.

### Bluetooth

Meshtastic Bluetooth is disabled by default.
If you need to enable it for device download, you can control the device to turn it on via the web version:

1.Open the download interface on the[meshtastic official website](https://meshtastic.org/downloads/)

2.Click [client.meshtastic.org](https://client.meshtastic.org/)

![alt text](/open-source/meshtastic/faq/image/web_client.jpg)

3.Click "Connect via serial" and "Add new device"

![alt text](/open-source/meshtastic/faq/image/image.png)

4.Select the serial port corresponding to the device and click "Connect"

![alt text](/open-source/meshtastic/faq/image/image-1.png)

5.Follow the steps to enable Bluetooth
![alt text](/open-source/meshtastic/faq/image/client_setting.png)
>After making changes here, click the save button in the upper right corner and wait for the device to restart. Once the restart is complete, the Bluetooth function will be enabled....

## T-Deck Pro

### Touch or Device Functions Do Not Work

Current T-Deck Pro hardware uses the new touch version. If you flash an older Meshtastic firmware build, touch input, device functions, or general operation may not work correctly.

- Use the latest Meshtastic firmware release whenever possible.
- After flashing, wait for device initialization to finish before operating the device. This usually takes about 2 minutes.
- If the device still does not respond correctly after flashing, confirm that the firmware is the latest version and then run the full flashing process again.

