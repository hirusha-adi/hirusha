"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[27],{7750:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>u});var o=a(1527),t=a(6213),i=(a(959),a(3608)),c=[{category:"Other Package Managers",items:[{name:"Snap",command:"snapd"},{name:"FlatPak",command:"flatpak"},{name:"Trizen",command:"trizen"},{name:"Pamac",command:"pamac-aur"},{name:"Powerpill",command:"powerpill"}]},{category:"Browser",items:[{name:"Brave Browser",command:"brave-bin"},{name:"Firefox",command:"firefox"},{name:"Google Chrome",command:"google-chrome"},{name:"Google Chrome Canary",command:"google-chrome-dev"}]},{category:"Utilities",items:[{name:"Yakuake (for KDE)",command:"yakuake"},{name:"Guake (for GNOME)",command:"guake"},{name:"ffmpegthumbs",command:"ffmpegthumbs"},{name:"mplayerthumbs",command:"mplayerthumbs"},{name:"qbittorrent",command:"qbittorrent"},{name:"KDE-Connect (Phone Sync)",command:"kdeconnect"}]},{category:"Media",items:[{name:"Audacity (Audio Editor)",command:"audacity"},{name:"RawTherapee (Image Editor)",command:"rawtherapee"},{name:"Pinta (Image Editor)",command:"pinta"},{name:"KdenLive (Video Editor)",command:"kdenlive"},{name:"OpenShot (Video Editor)",command:"openshot-git"},{name:"Shotcut (Video Editor)",command:"shotcut"},{name:"yt-dlp (Video Downloader)",command:"yt-dlp-git"},{name:"yt-dlp GUI (Video Downloader)",command:"ytdlp-gui"},{name:"HandBrake (Video Transcoder)",command:"handbrake"},{name:"Spotify (Music player)",command:"spotify"}]},{category:"System Monitor",items:[{name:"neofetch",command:"neofetch"},{name:"bpytop",command:"bpytop"},{name:"Stacer",command:"stacer-bin"}]},{category:"Password Manager",items:[{name:"Bitwarden",command:"bitwarden"},{name:"KeepassXC",command:"keepassxc"}]},{category:"Messaging",items:[{name:"Telegram",command:"telegram-desktop-bin"},{name:"Discord",command:"discord"}]},{category:"Remote Desktop",items:[{name:"TeamViewer",command:"teamviewer"},{name:"AnyDesk",command:"anydesk-bin"}]},{category:"Flasher",items:[{name:"Balena Etcher",command:"etcher-bin"},{name:"Popsicle",command:"popsicle-bin"},{name:"UNetbootin",command:"unetbootin"}]},{category:"Development",items:[{name:"Git",command:"git"},{name:"Docker",command:"docker"},{name:"Docker Compose",command:"docker-compose"},{name:"Github Desktop",command:"github-desktop-bin"},{name:"Visual Studio Code",command:"visual-studio-code-bin"},{name:"VirtualBox",command:"virtualbox"},{name:"OpenJDK v8",command:"jdk8-openjdk"},{name:"NodeJS",command:"nodejs"},{name:"Pycharm Community Edition",command:"pycharm-community-edition"},{name:"Eclipse",command:"eclipse"},{name:"NPM",command:"npm"},{name:"TCL",command:"tcl"},{name:"FPC",command:"fpc"},{name:"NotepadQQ",command:"notepadqq"},{name:"codeblocks",command:"codeblocks"},{name:"MongoDB Compass",command:"mongodb-compass"}]},{category:"Options in yay",items:[{name:"--noconfirm (No confirm. Choose the defaults)",command:"--noconfirm"},{name:"--noeditmenu (Skip editing PKGBUILD before building)",command:"--noeditmenu"},{name:"--noveride (Ignore version restrictions in the PKGBUILD)",command:"--noveride"},{name:"--nodiff (Skip checking for differences in files)",command:"--nodiff"},{name:"--editmenu (Edit PKGBUILD before building)",command:"--editmenu"},{name:"--rebuild (Rebuild a package even if its up to date)",command:"--editflags"},{name:"--verify (Verify the hashes of downloaded files)",command:"--verify"},{name:"--noextract (Skip extracting source files)",command:"--noextract"},{name:"--editflags (ggggggggggggg)",command:"--editflags"}]}];const s=function(){return(0,o.jsx)("div",{children:(0,o.jsx)(i.Z,{baseCommand:"yay -S ",softwareData:c})})},d={title:"Arch Linux Setup",sidebar_label:"Arch Linux",slug:"arch-linux"},m=void 0,r={id:"linux/personal-guides/desktop/arch_linux",title:"Arch Linux Setup",description:"Auto Setup Script",source:"@site/docs/linux/personal-guides/desktop/arch_linux.mdx",sourceDirName:"linux/personal-guides/desktop",slug:"/linux/personal-guides/desktop/arch-linux",permalink:"/docs/linux/personal-guides/desktop/arch-linux",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Arch Linux Setup",sidebar_label:"Arch Linux",slug:"arch-linux"},sidebar:"linux",previous:{title:"Desktop",permalink:"/docs/linux/personal-guides/desktop/"},next:{title:"Shared Home Folders",permalink:"/docs/linux/personal-guides/desktop/shared-home-folders"}},l={},u=[{value:"Auto Setup Script",id:"auto-setup-script",level:2},{value:"Manual Setup",id:"manual-setup",level:2},{value:"Update &amp; Upgrade System",id:"update--upgrade-system",level:3},{value:"Installing <code>yay</code>",id:"installing-yay",level:3},{value:"One Liner",id:"one-liner",level:4},{value:"Manual Method",id:"manual-method",level:4},{value:"Install Packages",id:"install-packages",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"auto-setup-script",children:"Auto Setup Script"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Step 1: Install Required Packages"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S git curl wget nano base-devel python\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Step 2: Clone the Repository"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/hirusha-adi/myLinuxSetup.git\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Step 3: Run the Script"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd myLinuxSetup/desktop\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python arch.py\n"})}),"\n",(0,o.jsx)(n.h2,{id:"manual-setup",children:"Manual Setup"}),"\n",(0,o.jsx)(n.h3,{id:"update--upgrade-system",children:"Update & Upgrade System"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"sudo pacman -Syyu\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"installing-yay",children:["Installing ",(0,o.jsx)(n.code,{children:"yay"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.h4,{id:"one-liner",children:"One Liner"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Sy base-devel --noconfirm && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si && cd .. && rm -rf yay\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.h4,{id:"manual-method",children:"Manual Method"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Sy base-devel --no-confirm\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://aur.archlinux.org/yay.git\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd yay\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"makepkg -si\n"})}),"\n",(0,o.jsx)(n.p,{children:"now, remove the yay directory as its no longer needed"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd .. & rm -rf yay\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-packages",children:"Install Packages"}),"\n",(0,o.jsx)(s,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3608:(e,n,a)=>{a.d(n,{Z:()=>i});var o=a(959),t=a(1527);const i=function(e){var n=e.baseCommand,a=e.softwareData,i=(0,o.useState)([]),c=i[0],s=i[1],d=(0,o.useState)(!1),m=(d[0],d[1]);function r(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),m(!0)}return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{id:"software-list",children:a.map((function(e){return(0,t.jsxs)("div",{className:"category",children:[(0,t.jsx)("h4",{children:e.category}),e.items.map((function(e){return(0,t.jsxs)("div",{className:"custom-checkbox-item",children:[(0,t.jsx)("input",{type:"checkbox",id:e.name,checked:c.includes(e.command),onChange:function(){return function(e){var n=c.indexOf(e);if(-1===n)s([].concat(c,[e]));else{var a=[].concat(c);a.splice(n,1),s(a)}}(e.command)},className:"custom-checkbox"}),(0,t.jsx)("label",{htmlFor:e.name,children:e.name})]},e.name)}))]},e.category)}))}),function(){var e=(0,o.useState)(!1),a=e[0],i=e[1],s=c.join(" "),d=n+s;return(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:"Selected Software:"}),(0,t.jsx)("textarea",{value:d,rows:3,style:{width:"100%",minHeight:"100px",border:"1px solid #ccc",resize:"none"},onChange:function(e){e.preventDefault()}}),(0,t.jsx)("button",{onClick:function(){r(d),i(!0)},className:"button button--success",children:"Copy Command"}),a&&(0,t.jsxs)("div",{className:"alert alert--success",role:"alert",style:{marginTop:"20px"},children:[(0,t.jsx)("button",{"aria-label":"Close",className:"clean-btn close",type:"button",onClick:function(){i(!1)},children:(0,t.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,t.jsx)("strong",{children:"Successfully copied to clipboard!"})]})]})}()]})}},6213:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>c});var o=a(959);const t={},i=o.createContext(t);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);