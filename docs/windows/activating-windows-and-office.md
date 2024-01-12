---
title: Activating Windows / Office
sidebar_label: Activating Windows / Office
slug: activating-windows-and-office
---

:::danger note

this may violate the terms and services of windows and this might be illegal

:::

:::info credits

This is possible thanks to this awesome open source project: [Microsoft Activation Scripts](https://massgrave.dev/index.html)

:::

1. Right click on the start button

2. Click on **"Windows PowerShell (Admin)"**

   - or use any [other method](https://www.makeuseof.com/windows-11-powershell-administrator/) to open PowerShell as Admin

3. Run this command:

   ```
   irm https://massgrave.dev/get | iex
   ```

4. Select your option and perform the action you want

   ![I2](https://cdn.discordapp.com/attachments/1163847683207856178/1176800016225030154/image.png)

   - `[1] HWID` is the best option here
   - `[3] KMS38` - use this only if `[1] HWID` fails

     - I have had problems with the `[1] HWID` option while activating `Windows 10 LTSC 2021` on _11/21/2023_, but it worked with `[3] KMS38`

   - use `[2] Ohook` to activate any version of microsoft office
