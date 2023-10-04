---
title: Kali Linux Setup
sidebar_label: Kali Linux
slug: kali-linux
---

## Upgrade System

```bash
sudo apt update && sudo apt upgrade -y
```

## Install Nvidia Drivers

- install the nvidia driver, neglect the conflict warning

```bash
apt-get install nvidia-driver -y
```

- remove the open source driver

```bash
sudo nano /etc/modprobe.d/blacklist-nouveau.conf
```

```bash
blacklist nouveau
options nouveau modeset=0
alias nouveau off
```

- save file and exit

```bash
update-initramfs -u
```

```bash
reboot
```
