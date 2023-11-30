---
title: Guide to using Data-Recovery
sidebar_label: Usage
---

## Introduction

To explore the available options and usage guide for the Data-Recovery tool, use the following command:

```bash
python Data-Recovery.py --help
```

or its shorthand version:

```bash
python Data-Recovery.py -h
```

This will display a comprehensive list of available options and their descriptions. 

```
$ python .\recover.py -h
usage: recover.py [-h] [--all] [--silent] [--verbose] [--log] [--browser-all] [--browser-passwords]
                  [--browser-history] [--browser-bookmarks] [--network-all] [--network-wifi] [--network-info]       
                  [--system-all] [--apps-all] [--apps-discord] [--apps-zip]

Data Recovery | Built by @hirusha-adi

options:
  -h, --help            show this help message and exit
  --all, -a             Get All Information
  --silent, -s          Silent Mode - No Console Output
  --verbose, -v         Verbose - Display everything that happens
  --log, -l             Log to file

Browser Options:
  --browser-all, -ba    Get Browser Passwords, Cookies, Cards, History, and Bookmarks
  --browser-passwords, -bp
                        Get Browser Passwords, Cookies, Cards, and History DB File
  --browser-history, -bh
                        Get Browser History
  --browser-bookmarks, -bb
                        Get Browser Bookmarks

Network Options:
  --network-all, -na    Get All Network Information and Wifi Passwords
  --network-wifi, -nw   Get Wifi Passwords
  --network-info, -ni   Get All Network Information

System Options:
  --system-all, -sa     Get All System Information

Application Options:
  --apps-all, -Aa       Get Discord Tokens of Logged in Accounts
  --apps-discord, -Ad   Get Discord Tokens of Logged in Accounts
  --apps-zip, -Az       Zip and Copy Important Accounts
```

For example commands, refer to the examples below:

## Examples

1. Retrieve all information in verbose mode and log to a file:
```bash
python Data-Recovery.py --all --verbose --log
```

:::note note
Note that `--verbose` and `--silent` cannot be used together.
:::

2. Recover browser passwords, cookies, cards, and history DB file:
```bash
python Data-Recovery.py --browser-all
```

3. Obtain WiFi passwords and all other network information:
```bash
python Data-Recovery.py --network-all
```

4. Zip and copy important data from installed applications:
```bash
python Data-Recovery.py --apps-zip
```

5. Retrieve all network information and bookmarks from browsers while displaying the status of each and every stage at highest verbosity:
```bash
python Data-Recovery.py --browser-bookmarks --network-all --verbose
```

Using the `--help` or `-h` option is the quickest way to understand the tool's capabilities and formulate commands tailored to your specific data recovery needs.