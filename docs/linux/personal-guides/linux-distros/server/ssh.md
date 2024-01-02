---
title: SSH Setup
sidebar_label: SSH
slug: ssh
---

## Setup

### Install

```bash
sudo apt install openssh-server -y
```

### Setup

```bash
sudo systemctl enable sshd --now
```

```bash
sudo systemctl start sshd
```
