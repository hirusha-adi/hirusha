"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[4447],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>g});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},s=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return t?n.createElement(g,m(m({ref:a},s),{},{components:t})):n.createElement(g,m({ref:a},s))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,m=new Array(r);m[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:o,m[1]=i;for(var l=2;l<r;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5221:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294);const o=e=>{let{baseCommand:a,softwareData:t}=e;const[o,r]=(0,n.useState)([]),[m,i]=(0,n.useState)(!1);function c(e){const a=document.createElement("textarea");a.value=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),i(!0)}return n.createElement("div",null,n.createElement("div",{id:"software-list"},t.map((e=>n.createElement("div",{key:e.category,className:"category"},n.createElement("h4",null,e.category),e.items.map((e=>n.createElement("div",{key:e.name,className:"custom-checkbox-item"},n.createElement("input",{type:"checkbox",id:e.name,checked:o.includes(e.command),onChange:()=>function(e){const a=o.indexOf(e);if(-1===a)r([...o,e]);else{const e=[...o];e.splice(a,1),r(e)}}(e.command),className:"custom-checkbox"}),n.createElement("label",{htmlFor:e.name},e.name)))))))),function(){const[e,t]=(0,n.useState)(!1),r=o.join(" "),m=a+r;return n.createElement("div",null,n.createElement("h4",null,"Selected Software:"),n.createElement("textarea",{value:m,rows:3,style:{width:"100%",minHeight:"100px",border:"1px solid #ccc",resize:"none"},onChange:e=>{e.preventDefault()}}),n.createElement("button",{onClick:()=>{c(m),t(!0)},className:"button button--success"},"Copy Command"),e&&n.createElement("div",{className:"alert alert--success",role:"alert",style:{marginTop:"20px"}},n.createElement("button",{"aria-label":"Close",className:"clean-btn close",type:"button",onClick:()=>{t(!1)}},n.createElement("span",{"aria-hidden":"true"},"\xd7")),n.createElement("strong",null,"Success")))}())}},3241:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=t(7462),o=t(7294),r=t(3905),m=t(5221);const i=[{category:"Other Package Managers",items:[{name:"Snap",command:"snapd"},{name:"FlatPak",command:"flatpak"},{name:"Trizen",command:"trizen"},{name:"Pamac",command:"pamac-aur"},{name:"Powerpill",command:"powerpill"}]},{category:"Browser",items:[{name:"Brave Browser",command:"brave-bin"},{name:"Firefox",command:"firefox"},{name:"Google Chrome",command:"google-chrome"},{name:"Google Chrome Canary",command:"google-chrome-dev"}]},{category:"Utilities",items:[{name:"Yakuake (for KDE)",command:"yakuake"},{name:"Guake (for GNOME)",command:"guake"},{name:"ffmpegthumbs",command:"ffmpegthumbs"},{name:"mplayerthumbs",command:"mplayerthumbs"},{name:"qbittorrent",command:"qbittorrent"},{name:"KDE-Connect (Phone Sync)",command:"kdeconnect"}]},{category:"Media",items:[{name:"Audacity (Audio Editor)",command:"audacity"},{name:"RawTherapee (Image Editor)",command:"rawtherapee"},{name:"Pinta (Image Editor)",command:"pinta"},{name:"KdenLive (Video Editor)",command:"kdenlive"},{name:"OpenShot (Video Editor)",command:"openshot-git"},{name:"Shotcut (Video Editor)",command:"shotcut"},{name:"yt-dlp (Video Downloader)",command:"yt-dlp-git"},{name:"yt-dlp GUI (Video Downloader)",command:"ytdlp-gui"},{name:"HandBrake (Video Transcoder)",command:"handbrake"},{name:"Spotify (Music player)",command:"spotify"}]},{category:"System Monitor",items:[{name:"neofetch",command:"neofetch"},{name:"bpytop",command:"bpytop"},{name:"Stacer",command:"stacer-bin"}]},{category:"Password Manager",items:[{name:"Bitwarden",command:"bitwarden"},{name:"KeepassXC",command:"keepassxc"}]},{category:"Messaging",items:[{name:"Telegram",command:"telegram-desktop-bin"},{name:"Discord",command:"discord"}]},{category:"Remote Desktop",items:[{name:"TeamViewer",command:"teamviewer"},{name:"AnyDesk",command:"anydesk-bin"}]},{category:"Flasher",items:[{name:"Balena Etcher",command:"etcher-bin"},{name:"Popsicle",command:"popsicle-bin"},{name:"UNetbootin",command:"unetbootin"}]},{category:"Development",items:[{name:"Git",command:"git"},{name:"Docker",command:"docker"},{name:"Docker Compose",command:"docker-compose"},{name:"Github Desktop",command:"github-desktop-bin"},{name:"Visual Studio Code",command:"visual-studio-code-bin"},{name:"VirtualBox",command:"virtualbox"},{name:"OpenJDK v8",command:"jdk8-openjdk"},{name:"NodeJS",command:"nodejs"},{name:"Pycharm Community Edition",command:"pycharm-community-edition"},{name:"Eclipse",command:"eclipse"},{name:"NPM",command:"npm"},{name:"TCL",command:"tcl"},{name:"FPC",command:"fpc"},{name:"NotepadQQ",command:"notepadqq"},{name:"codeblocks",command:"codeblocks"},{name:"MongoDB Compass",command:"mongodb-compass"}]},{category:"Options in yay",items:[{name:"--noconfirm (No confirm. Choose the defaults)",command:"--noconfirm"},{name:"--noeditmenu (Skip editing PKGBUILD before building)",command:"--noeditmenu"},{name:"--noveride (Ignore version restrictions in the PKGBUILD)",command:"--noveride"},{name:"--nodiff (Skip checking for differences in files)",command:"--nodiff"},{name:"--editmenu (Edit PKGBUILD before building)",command:"--editmenu"},{name:"--rebuild (Rebuild a package even if its up to date)",command:"--editflags"},{name:"--verify (Verify the hashes of downloaded files)",command:"--verify"},{name:"--noextract (Skip extracting source files)",command:"--noextract"},{name:"--editflags (ggggggggggggg)",command:"--editflags"}]}];const c=function(){return o.createElement("div",null,o.createElement(m.Z,{baseCommand:"yay -S ",softwareData:i}))},l={title:"Arch Linux Setup",sidebar_label:"Arch Linux",slug:"arch-linux"},s=void 0,d={unversionedId:"tutorials/personal-guides/linux-distros/desktop/arch_linux",id:"tutorials/personal-guides/linux-distros/desktop/arch_linux",title:"Arch Linux Setup",description:"Auto Setup Script",source:"@site/docs/tutorials/personal-guides/linux-distros/desktop/arch_linux.mdx",sourceDirName:"tutorials/personal-guides/linux-distros/desktop",slug:"/tutorials/personal-guides/linux-distros/desktop/arch-linux",permalink:"/docs/tutorials/personal-guides/linux-distros/desktop/arch-linux",draft:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/tutorials/personal-guides/linux-distros/desktop/arch_linux.mdx",tags:[],version:"current",frontMatter:{title:"Arch Linux Setup",sidebar_label:"Arch Linux",slug:"arch-linux"},sidebar:"tutorials",previous:{title:"Desktop",permalink:"/docs/tutorials/personal-guides/linux-distros/desktop/"},next:{title:"Shared Home Folders",permalink:"/docs/tutorials/personal-guides/linux-distros/desktop/shared-home-folders"}},u={},p=[{value:"Auto Setup Script",id:"auto-setup-script",level:2},{value:"Manual Setup",id:"manual-setup",level:2},{value:"Update &amp; Upgrade System",id:"update--upgrade-system",level:3},{value:"Installing <code>yay</code>",id:"installing-yay",level:3},{value:"Install Packages",id:"install-packages",level:3}],g={toc:p},y="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(y,(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"auto-setup-script"},"Auto Setup Script"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Step 1: Install Required Packages"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S git curl wget nano base-devel python\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Step 2: Clone the Repository"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hirusha-adi/myLinuxSetup.git\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Step 3: Run the Script"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd myLinuxSetup/desktop\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python arch.py\n")),(0,r.kt)("h2",{id:"manual-setup"},"Manual Setup"),(0,r.kt)("h3",{id:"update--upgrade-system"},"Update & Upgrade System"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo pacman -Syyu\n")),(0,r.kt)("h3",{id:"installing-yay"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h3"},"yay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"one-liner"},"One Liner"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy base-devel --noconfirm && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si && cd .. && rm -rf yay\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"manual-method"},"Manual Method"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy base-devel --no-confirm\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://aur.archlinux.org/yay.git\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd yay\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"makepkg -si\n")),(0,r.kt)("p",null,"now, remove the yay directory as its no longer needed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd .. & rm -rf yay\n")),(0,r.kt)("h3",{id:"install-packages"},"Install Packages"),(0,r.kt)(c,{mdxType:"ArchLinuxManualSetup"}))}h.isMDXComponent=!0}}]);