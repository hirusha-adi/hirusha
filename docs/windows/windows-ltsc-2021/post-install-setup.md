---
sidebar_position: 2
title: Post-install setup
sidebar_label: Post-install Setup
slug: post-install-setup
---

- do this to make windows ltsc 2021 daily drivable.

## Access Public Network Shares

### Folders/Data (`0x80004005`)

- If you are the kind of person that has your small local samba share setup at your house with no authentication (guest login allowed), you will run into this error: `0x80004005`

![i1](https://i.stack.imgur.com/PCJ3z.png)

- Microsoft posts the official "workaround" which is enabling the "AllowInsecureGuestAuth" group policy

![i2](https://i.stack.imgur.com/Arp4t.png)

- And it works

![i3](https://i.stack.imgur.com/JZyO6.png)

### Printers (`0x0000011b`)

- But, when you try to access a printer, you will get this error: `0x0000011b`

![i4](https://i.stack.imgur.com/2S6se.png)

- The posted official workaround is incomplete and printing doesn't fully respect this group policy configuration because as a fix for [CVE-2021-1678](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-1678) Microsoft increased the printer spooler protection but they forgot to let printing work for people who don't bother too much with proper encryption and authentication which `AllowInsecureGuestAuth` disables

- To fix it, add or modify a Printer Spooler registry setting called `RpcAuthnLevelPrivacyEnabled`

```
[HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print]
"RpcAuthnLevelPrivacyEnabled"=dword:00000000
```

- or, run this powershell command:

```
Set-ItemProperty -Path 'HKLM:\System\CurrentControlSet\Control\Print' -Name 'RpcAuthnLevelPrivacyEnabled' -Value 0
```

- Restarting the Printer Spooler service is enough to apply the fix

![i5](https://i.stack.imgur.com/TyYQn.png)
