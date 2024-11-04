---
title: Managing Software Easily on Windows with Chocolatey
sidebar_label: Chocolately
slug: chocolately
---

Chocolatey is a powerful package manager for Windows that simplifies the process of installing, updating, and managing software. With just a few commands in PowerShell, you can install popular applications, update them, and even clean up your package cache.

### Installation

:::info NOTE

Official Guide: https://chocolatey.org/install

:::

To get started, ensure PowerShell’s `ExecutionPolicy` is not set to `Restricted`. Use `Bypass` or `AllSigned` for more security.

1. Check the current policy:

    ```ps1
    Get-ExecutionPolicy
    ```

    If it returns `Restricted`, run the following command to allow Chocolatey installation:

    ```
    Set-ExecutionPolicy Bypass -Scope Process
    ```

2. Run Chocolatey’s install script:
    ```ps1
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```

After installation, type choco or choco -? to verify Chocolatey is installed and ready for use!

### Using Chocolatey to Install and Manage Packages

Chocolatey makes it simple to find and install packages. Visit [community.chocolatey.org](https://community.chocolatey.org/) to search for your favorite software.

- **Install a Package**:
   ```ps1
   choco install packagename -y
   ```
   Replace `packagename` with the software’s name. Chocolatey will handle downloading, installing, and setting up the software.

- **Uninstall a Package**:
   ```ps1
   choco uninstall packagename
   ```
   This command completely removes the specified software.

- **Clear Package Cache**:
   ```ps1
   choco clean
   ```
   Running this helps free up space by clearing old package files from Chocolatey’s cache.

- **Update All Packages**:
   ```ps1
   choco upgrade all
   ```
   This command updates every package on your system, ensuring all your software is up-to-date.

Chocolatey streamlines software management, making it easy to keep your Windows system clean, organized, and up-to-date with minimal effort.
