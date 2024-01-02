---
sidebar_position: 2
title: Post-installion setup
sidebar_label: Post-install Setup
slug: post-install-setup
---

- do this to make windows ltsc 2021 daily drivable.
- Make sure to check this out: [Guide to install and optimize Windows 10 LTSC](https://rentry.co/LTSC)
- You might also wan't to take a look at this great project: [LiveScript-LTSC-21H2 by Marctraider](https://github.com/Marctraider/LiveScript-LTSC-21H2)

## Disable Telemtry

### Using O&O ShutUp10

- Luckily, no bloatware comes pre-installed with this version of windows, but, there's still some telemetry left.

- Download and run [O&O ShutUp10](https://www.oo-software.com/en/shutup10) to disable telemetry.

![a1](https://www.naut.ca/blog/content/images/2019/07/sidebysideshutup10v2.png)

### Disabling `Allow Telemetry`

- In local group policy editor

![a2](https://i.imgur.com/CD7wfNB.png)

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

- Looking back at both of these error, if they still won't work, try this instead:

1. Set `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters\AllowInsecureGuestAuth` to 1

   - You can also run the command below:

   ```
   Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters' -Name 'AllowInsecureGuestAuth' -Value 1
   ```

2. You may also have to enable/run 2 system services at `services.msc`:
   - Function Discovery Provider Host
   - Function Discovery Resource Publication
   - both of which got disabled by default, and is for network sharing/browsing.

## Restore Microsoft Photos

The only good alternative to Microsoft Photos is [ImageGlass](https://github.com/d2phap/ImageGlass)

![a3](https://raw.githubusercontent.com/ImageGlass/releases/main/screenshots/v9.0/9.0_b1.webp)

## OneDrive Problem

:::note

Source: https://rentry.org/od_problem

:::

### Problem

- The personal Onedrive icon inside navigation panel does not work. The property page shows blank. By using `Win+R` to run `shell:::{018D5C66-4533-4307-9B53-224DE2ED1FE6}`, you should see the OneDrive folder opened but it’s not.
- However, the business account will work completely fine and also other file sync application such as iCloud and nextCloud.
- This happens to all latest OneDrive version (32/64 bit) installed per users or for all users under Windows 10 LTSC 2021.
- by the way, the default version bundled with Windows 10 is 32 bit regardless of the Windows version.

### Reason

- When you setup the personal OneDrive account, the client should register the icon in navigation panel pointing to a CLSID (Basically the GUID of the folder registered as Known Folders) `{A52BBA46-E9E1-435f-B3D9-28DAA648C0F6}`.
- This is the CLSID of the OneDrive folder which should be registered meanwhile, and it contains the path to the OneDrive folder.
- BUT the client did not do so in LTSC
- Therefore, when you start the explorer, the icon itself was displayed, but it points to a ID which doesn’t exist.

### Solution

- Copy the following content into a text file, save it as `ANYNAME.reg`, double click on it and let the regedit import it. Restart the file explorer and all set!
- This only applies if your OneDrive folder is at the default location. e.g. `C:\User\username\OneDrive`.
- If it’s not but still under your user folder e.g. `C:\User\username\ExampleFolder`, you need to change the value of `RelativePath` to `ExampleFolder`.
- If it’s not under your user folder, e.g. `E:\OneDrive`, you need to remove the line `"ParentFolder"="{5E6C858F-0E22-4760-9AFE-EA3317B67173}"`, and change the value of RelativePath to the absolute path such as `"RelativePath"="E:\OneDrive"`.

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FolderDescriptions\{5E6C858F-0E22-4760-9AFE-EA3317B67173}]
"Category"=dword:00000002
"Name"="Profile"

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FolderDescriptions\{A52BBA46-E9E1-435f-B3D9-28DAA648C0F6}]
"Attributes"=dword:00000001
"Category"=dword:00000004
"DefinitionFlags"=dword:00000040
"Icon"=hex(2):25,00,53,00,79,00,73,00,74,00,65,00,6d,00,52,00,6f,00,6f,00,74,  00,25,00,5c,00,73,00,79,00,73,00,74,00,65,00,6d,00,33,00,32,00,5c,00,69,00,  6d,00,61,00,67,00,65,00,72,00,65,00,73,00,2e,00,64,00,6c,00,6c,00,2c,00,2d,  00,31,00,30,00,34,00,30,00,00,00
"LocalizedName"=hex(2):40,00,25,00,53,00,79,00,73,00,74,00,65,00,6d,00,52,00,  6f,00,6f,00,74,00,25,00,5c,00,53,00,79,00,73,00,74,00,65,00,6d,00,33,00,32,  00,5c,00,53,00,65,00,74,00,74,00,69,00,6e,00,67,00,53,00,79,00,6e,00,63,00,  43,00,6f,00,72,00,65,00,2e,00,64,00,6c,00,6c,00,2c,00,2d,00,31,00,30,00,32,  00,34,00,00,00
"LocalRedirectOnly"=dword:00000001
"Name"="OneDrive"
"ParentFolder"="{5E6C858F-0E22-4760-9AFE-EA3317B67173}"
"ParsingName"="shell:::{018D5C66-4533-4307-9B53-224DE2ED1FE6}"
"RelativePath"="OneDrive"
```
