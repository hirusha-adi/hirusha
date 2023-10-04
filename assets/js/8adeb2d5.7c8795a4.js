"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={title:"Installation",sidebar_label:"Installation",slug:"installation"},o=void 0,s={unversionedId:"projects/gifgang/installation",id:"projects/gifgang/installation",title:"Installation",description:"Install and Setup all GifGang Services",source:"@site/docs/projects/gifgang/installation.md",sourceDirName:"projects/gifgang",slug:"/projects/gifgang/installation",permalink:"/docs/projects/gifgang/installation",draft:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/projects/gifgang/installation.md",tags:[],version:"current",frontMatter:{title:"Installation",sidebar_label:"Installation",slug:"installation"},sidebar:"projects",previous:{title:"Discord Bot Guide",permalink:"/docs/projects/gifgang/discord-bot-guide"},next:{title:"Python Module",permalink:"/docs/projects/gifgang/python-module"}},i={},p=[{value:"Manual Installation",id:"manual-installation",level:2},{value:"Install and Setup MongoDB",id:"install-and-setup-mongodb",level:3},{value:"Install and Setup GifGang",id:"install-and-setup-gifgang",level:3},{value:"Setup Ngrok and setup SSL",id:"setup-ngrok-and-setup-ssl",level:3},{value:"Automated Installer",id:"automated-installer",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"Arch Linux",id:"arch-linux",level:3},{value:"Error?",id:"error",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Install and Setup all GifGang Services "),(0,l.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"NOTE: This guide is written for  ",(0,l.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/desktop"},"Ubuntu"),"/",(0,l.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/server"},"Ubuntu Server")," \u200b")),(0,l.kt)("h3",{id:"install-and-setup-mongodb"},"Install and Setup MongoDB"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade -y\nsudo apt install mongodb -y\nsudo systemctl enable mongodb --now\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Run this command and open the config file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/mongodb.conf\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Change bind_ip from ",(0,l.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"0.0.0.0"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bind_ip = 0.0.0.0\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"run this command to restart mongo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart mongodb\n")),(0,l.kt)("p",null,"MongoDB is now publicly accessible by the default Port and the Server IP. Now, create an account and enable authorization for security"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Start MongoDB CLI")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mongo\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Switch to the default pre-made admin database")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"use admin\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Create a new user")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mongodb"},'db.createUser(\n{\nuser: "AdminUserName",\npwd: "SuperSecretPassword",\nroles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]\n}\n)\n')),(0,l.kt)("p",null,"The new user is created, Now, You have to make logging-in required"),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Open the config file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/mongodb.conf\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Edit the file content Ctrl+W to search")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"authorization: enabled\n")),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Restart MongoDB Service")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart mongod\n")),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/products/compass"},"MongoDB Compass")," on your computer and connect to the Database")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a database named GifGang and a collection named torrents inside that database"))),(0,l.kt)("h3",{id:"install-and-setup-gifgang"},"Install and Setup GifGang"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install main dependencies ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade -y\nsudo apt install python3 python3-pip git nano -y\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Create a seperate folder (Optional)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /GifGang && cd /GifGang\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Clone the Git Repository")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git clone "https://github.com/hirusha-adi/GifGang.git" && cd ./Gifang\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Install Python dependencies")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install -r requirements.txt\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Edit the main configuration file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano ./database/config.json\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Edit the admin settings file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano ./database/admin/settings.json\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Start the web app")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 gifgang.py\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Z")," and bg and ",(0,l.kt)("inlineCode",{parentName:"p"},"disown -h"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start the discord bot"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 discord-bot.py\n")),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl+Z")," and bg and ",(0,l.kt)("inlineCode",{parentName:"li"},"disown -h"))),(0,l.kt)("h3",{id:"setup-ngrok-and-setup-ssl"},"Setup Ngrok and setup SSL"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install and start nginx")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install nginx\nsystemctl enable nginx --now\nsystemctl start nginx\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Open the default config file for the first time before setting up SSL")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/sites-enabled/default\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Edit the default config file for the first time before setting up SSL")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n        listen 80 default_server;\n        listen [::]:80 default_server;\n\u200b\n        server_name gifgang.net;\n\u200b\n        location / {\n                proxy_pass http://localhost:8080;\n        }\n}\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Load the new config")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -t\nnginx -s reload\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Install certbot")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install certbot -y\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Stop nginx temporarily to setup certbot  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop nginx\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Setup cerbot to get the key")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"certbot certonly --standalone --agree-tos -d gifgang.net,www.gifgang.net\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Open the default config file for the second time with new SSL settings")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/sites-enabled/default\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Open the default config file for the second time with new SSL settings")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n  listen 80 default_server;\n  listen [::]:80 default_server;\n\u200b\n  location / {\n    return 301 https://$host$request_uri;\n  }\n}\n\u200b\nserver {\n  listen 443 ssl;\n  listen [::]:443 ssl;\n  ssl_certificate     /etc/letsencrypt/live/gifgang.net/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/gifgang.net/privkey.pem;\n\u200b\n  location / {\n    proxy_pass http://localhost:8080;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n    proxy_set_header X-Forwarded-Protocol $scheme;\n    proxy_set_header X-Forwarded-Host $http_host;\n  }\n}\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Restart nginx")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start nginx\n")),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Reload the new nginx configuration")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -t\nnginx -s reload\n")),(0,l.kt)("h2",{id:"automated-installer"},"Automated Installer"),(0,l.kt)("p",null,"This cannot be 100% automated therefore user interaction is required"),(0,l.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget "https://raw.githubusercontent.com/hirusha-adi/GifGang/installer/ubuntu/install.py" && python3 ./install.py\n')),(0,l.kt)("h3",{id:"arch-linux"},"Arch Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget "https://raw.githubusercontent.com/hirusha-adi/GifGang/installer/arch/install.py" && python ./install.py\n')),(0,l.kt)("h2",{id:"error"},"Error?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I have an error while Installing. What should I do?")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check if your issue in this list of most commonly encountable error list (Click to open the guide to fixing it) or use your common sense:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://exerror.com/sudo-pip3-command-not-found/"},"pip3 command not found")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/40914108/bash-python3-command-not-found-windows-discord-py"},"python3 command not found")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable the developer-mode"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Stop the program if it is already running"),(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("inlineCode",{parentName:"li"},"./database/config.json")," file and set ",(0,l.kt)("inlineCode",{parentName:"li"},'"dev_mode"')," to true.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'json "dev_mode": true')))),(0,l.kt)("li",{parentName:"ol"},"Save the file"),(0,l.kt)("li",{parentName:"ol"},"Restart the application"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Re-create the issue.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the log displayed in the console")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/hirusha-adi/GifGang/issues/new/choose"},"Open an Issue")," with the copied log"))))}c.isMDXComponent=!0}}]);