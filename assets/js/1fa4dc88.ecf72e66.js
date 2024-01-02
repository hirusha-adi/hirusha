"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3162],{1694:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var l=n(5893),a=n(1151);const r={title:"Jellyin Setup",sidebar_label:"Jellyfin",slug:"jellyfin"},i=void 0,t={id:"linux/personal-guides/server/jellyfin",title:"Jellyin Setup",description:"Automated Installer",source:"@site/docs/linux/personal-guides/server/jellyfin.md",sourceDirName:"linux/personal-guides/server",slug:"/linux/personal-guides/server/jellyfin",permalink:"/docs/linux/personal-guides/server/jellyfin",draft:!1,unlisted:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/linux/personal-guides/server/jellyfin.md",tags:[],version:"current",frontMatter:{title:"Jellyin Setup",sidebar_label:"Jellyfin",slug:"jellyfin"},sidebar:"linux",previous:{title:"Server",permalink:"/docs/linux/personal-guides/server/"},next:{title:"SSH",permalink:"/docs/linux/personal-guides/server/ssh"}},c={},d=[{value:"Automated Installer",id:"automated-installer",level:2},{value:"Manually Install",id:"manually-install",level:2},{value:"with Packages",id:"with-packages",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"automated-installer",children:"Automated Installer"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo apt install curl -y\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"curl https://repo.jellyfin.org/install-debuntu.sh | sudo bash\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo systemctl enable jellyfin.service --now\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo systemctl start jellyfin.service\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"disable the firewall (optional)"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo ufw disable\n"})}),"\n",(0,l.jsx)(s.h2,{id:"manually-install",children:"Manually Install"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo apt install curl gnupg\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo add-apt-repository universe\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo mkdir -p /etc/apt/keyrings\r\ncurl -fsSL https://repo.jellyfin.org/jellyfin_team.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/jellyfin.gpg\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"cat <<EOF | sudo tee /etc/apt/sources.list.d/jellyfin.sources\r\nTypes: deb\r\nURIs: https://repo.jellyfin.org/$( awk -F'=' '/^ID=/{ print $NF }' /etc/os-release )\r\nSuites: $( awk -F'=' '/^VERSION_CODENAME=/{ print $NF }' /etc/os-release )\r\nComponents: main\r\nArchitectures: $( dpkg --print-architecture )\r\nSigned-By: /etc/apt/keyrings/jellyfin.gpg\r\nEOF\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo apt install jellyfin\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo systemctl enable jellyfin.service --now\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo systemctl start jellyfin.service\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"disable the firewall (optional)"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo ufw disable\n"})}),"\n",(0,l.jsx)(s.h2,{id:"with-packages",children:"with Packages"}),"\n",(0,l.jsxs)(s.p,{children:["Download packages from ",(0,l.jsx)(s.a,{href:"https://repo.jellyfin.org/releases/server/ubuntu/versions/",children:"here"})," and install them"]})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>i});var l=n(7294);const a={},r=l.createContext(a);function i(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);