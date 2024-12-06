---
title: Autostart Services with systemd in Linux
sidebar_label: Autostart Services (with systemd)
---

The command i want to run is:

```
/mnt/B84CC2894CC241BC/Installations/Pocketbase/pocketbase
```

where `/mnt/B84CC2894CC241BC/Installations/Pocketbase` is the directory and `pocetbase` is the name of the binary that i want to exe

## Preperations

First, you have to get your username, by running:

```bash
uname
```

Then, you should know the name of the group you are in, by running:

```bash
id -gn
```

Note that the `-gn` argument will only show the group name, to see all the details, just run the `id` command. For example:

```bash
$ id

uid=1000(username) gid=1000(groupname) groups=1000(groupname),27(sudo),100(users)
```

Here, `username` is your username, and `groupname` after `gid=` is your primary group name.`

## Creating a systemd service file

Create a Systemd Service File

```bash
sudo nano /etc/systemd/system/pocketbase.service
```

make sure to replace `pocketbase` with the name you want to give to this service.


