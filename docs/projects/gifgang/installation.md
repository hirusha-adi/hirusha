---
title: Installation
sidebar_label: Installation
slug: installation
---

Install and Setup all GifGang Services 

## Manual Installation

:::info
NOTE: This guide is written for  [Ubuntu](https://ubuntu.com/download/desktop)/[Ubuntu Server](https://ubuntu.com/download/server) ​
:::

### Install and Setup MongoDB

1. Install

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install mongodb -y
sudo systemctl enable mongodb --now
```

2. Run this command and open the config file

```bash
sudo nano /etc/mongodb.conf
```

3. Change bind_ip from `127.0.0.1` to `0.0.0.0`

```bash
bind_ip = 0.0.0.0
```

4. run this command to restart mongo

```bash
sudo systemctl restart mongodb
```

MongoDB is now publicly accessible by the default Port and the Server IP. Now, create an account and enable authorization for security

5. Start MongoDB CLI

```bash
mongo
```

6. Switch to the default pre-made admin database

```bash
use admin
```

7. Create a new user

```mongodb
db.createUser(
{
user: "AdminUserName",
pwd: "SuperSecretPassword",
roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
}
)
```

The new user is created, Now, You have to make logging-in required


8. Open the config file

```bash
sudo nano /etc/mongodb.conf
```

9. Edit the file content Ctrl+W to search

```conf
authorization: enabled
```

10. Restart MongoDB Service

```bash
sudo systemctl restart mongod
```

11. Install [MongoDB Compass](https://www.mongodb.com/products/compass) on your computer and connect to the Database

12. Create a database named GifGang and a collection named torrents inside that database

### Install and Setup GifGang

1. Install main dependencies 

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install python3 python3-pip git nano -y
```

2. Create a seperate folder (Optional)

```bash
mkdir /GifGang && cd /GifGang
```

3. Clone the Git Repository

```bash
git clone "https://github.com/hirusha-adi/GifGang.git" && cd ./Gifang
```

4. Install Python dependencies

```bash
python3 -m pip install -r requirements.txt
```

5. Edit the main configuration file

```bash
nano ./database/config.json
```

6. Edit the admin settings file

```bash
nano ./database/admin/settings.json
```

7. Start the web app

```bash
python3 gifgang.py
```

8. `Ctrl+Z` and bg and `disown -h`

9. Start the discord bot

```bash
python3 discord-bot.py
```

10. `Ctrl+Z` and bg and `disown -h`

### Setup Ngrok and setup SSL

1. Install and start nginx

```bash
apt install nginx
systemctl enable nginx --now
systemctl start nginx
```

2. Open the default config file for the first time before setting up SSL

```bash
nano /etc/nginx/sites-enabled/default
```

3. Edit the default config file for the first time before setting up SSL

```conf
server {
        listen 80 default_server;
        listen [::]:80 default_server;
​
        server_name gifgang.net;
​
        location / {
                proxy_pass http://localhost:8080;
        }
}
```

4.  Load the new config

```bash
nginx -t
nginx -s reload
```

5. Install certbot

```bash
sudo apt install certbot -y
```

6. Stop nginx temporarily to setup certbot  

```bash
systemctl stop nginx
```

7. Setup cerbot to get the key

```bash
certbot certonly --standalone --agree-tos -d gifgang.net,www.gifgang.net
```

8. Open the default config file for the second time with new SSL settings

```bash
nano /etc/nginx/sites-enabled/default
```

8. Open the default config file for the second time with new SSL settings

```conf
server {
  listen 80 default_server;
  listen [::]:80 default_server;
​
  location / {
    return 301 https://$host$request_uri;
  }
}
​
server {
  listen 443 ssl;
  listen [::]:443 ssl;
  ssl_certificate     /etc/letsencrypt/live/gifgang.net/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/gifgang.net/privkey.pem;
​
  location / {
    proxy_pass http://localhost:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Protocol $scheme;
    proxy_set_header X-Forwarded-Host $http_host;
  }
}
```

9. Restart nginx

```bash
systemctl start nginx
```

10. Reload the new nginx configuration

```bash
nginx -t
nginx -s reload
```

## Automated Installer
This cannot be 100% automated therefore user interaction is required
### Ubuntu

```bash
wget "https://raw.githubusercontent.com/hirusha-adi/GifGang/installer/ubuntu/install.py" && python3 ./install.py
```

### Arch Linux

```bash
wget "https://raw.githubusercontent.com/hirusha-adi/GifGang/installer/arch/install.py" && python ./install.py
```


## Error?

- I have an error while Installing. What should I do?

1. Check if your issue in this list of most commonly encountable error list (Click to open the guide to fixing it) or use your common sense:

   - [pip3 command not found](https://exerror.com/sudo-pip3-command-not-found/)
   - [python3 command not found](https://stackoverflow.com/questions/40914108/bash-python3-command-not-found-windows-discord-py)

2. Enable the developer-mode
   1. Stop the program if it is already running
   2. Open the `./database/config.json` file and set `"dev_mode"` to true.
      - `json "dev_mode": true`
   3. Save the file
   4. Restart the application
3. Re-create the issue.
4. Copy the log displayed in the console
5. [Open an Issue](https://github.com/hirusha-adi/GifGang/issues/new/choose) with the copied log
