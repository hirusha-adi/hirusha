---
title: Jellyin Setup
sidebar_label: Jellyfin
slug: jellyfin
---

## Automated Installer

```bash
sudo apt install curl -y
```

```bash
curl https://repo.jellyfin.org/install-debuntu.sh | sudo bash
```

```bash
sudo systemctl enable jellyfin.service --now
```

```bash
sudo systemctl start jellyfin.service
```

- disable the firewall (optional)

```bash
sudo ufw disable
```

## Manually Install

```bash
sudo apt install curl gnupg
```

```bash
sudo add-apt-repository universe
```

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://repo.jellyfin.org/jellyfin_team.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/jellyfin.gpg
```

```bash
cat <<EOF | sudo tee /etc/apt/sources.list.d/jellyfin.sources
Types: deb
URIs: https://repo.jellyfin.org/$( awk -F'=' '/^ID=/{ print $NF }' /etc/os-release )
Suites: $( awk -F'=' '/^VERSION_CODENAME=/{ print $NF }' /etc/os-release )
Components: main
Architectures: $( dpkg --print-architecture )
Signed-By: /etc/apt/keyrings/jellyfin.gpg
EOF
```

```bash
sudo apt update
```

```bash
sudo apt install jellyfin
```

```bash
sudo systemctl enable jellyfin.service --now
```

```bash
sudo systemctl start jellyfin.service
```

- disable the firewall (optional)

```bash
sudo ufw disable
```


## with Packages

Download packages from [here](https://repo.jellyfin.org/releases/server/ubuntu/versions/) and install them

