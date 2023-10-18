"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[9457],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={title:"Windows XP Theme",sidebar_label:"Windows XP Theme",slug:"cinnamon-windows-xp-theme"},r=void 0,s={unversionedId:"tutorials/linux-customizations/cinnamon/windows_xp_theme",id:"tutorials/linux-customizations/cinnamon/windows_xp_theme",title:"Windows XP Theme",description:"img",source:"@site/docs/tutorials/linux-customizations/cinnamon/windows_xp_theme.md",sourceDirName:"tutorials/linux-customizations/cinnamon",slug:"/tutorials/linux-customizations/cinnamon/cinnamon-windows-xp-theme",permalink:"/docs/tutorials/linux-customizations/cinnamon/cinnamon-windows-xp-theme",draft:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/tutorials/linux-customizations/cinnamon/windows_xp_theme.md",tags:[],version:"current",frontMatter:{title:"Windows XP Theme",sidebar_label:"Windows XP Theme",slug:"cinnamon-windows-xp-theme"},sidebar:"tutorials",previous:{title:"Cinnamon Desktop Environment",permalink:"/docs/tutorials/linux-customizations/cinnamon/"},next:{title:"GNOME Desktop Environment",permalink:"/docs/tutorials/linux-customizations/gnome/"}},l={},p=[{value:"Run as a One-Liner",id:"run-as-a-one-liner",level:2},{value:"Run as a Script",id:"run-as-a-script",level:2},{value:"Run Manually",id:"run-manually",level:2}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/tEquSOE.png",alt:"img"})),(0,i.kt)("admonition",{title:"Note",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"This has only been tested on Linux Mint. These customizations are not made by me and might break your system.")),(0,i.kt)("h2",{id:"run-as-a-one-liner"},"Run as a One-Liner"),(0,i.kt)("p",null,"This section provides a one-liner command to perform all the necessary setup steps in a single line. Users can copy and paste this command into their terminal to execute the setup process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.org/download/bliss-600dpi/bliss-600dpi.png -P ~/Pictures && git clone https://github.com/B00merang-Project/Windows-XP.git Windows-XP-Themes && git clone https://github.com/B00merang-Artwork/Windows-XP.git Windows-XP-Icons && mkdir -p ~/.themes ~/.icons && cp -r 'Windows-XP-Themes/Windows XP Luna' ~/.themes && cp -r 'Windows-XP-Icons/' ~/.icons && sleep 3 && dconf load / < windowsXP.conf\n")),(0,i.kt)("h2",{id:"run-as-a-script"},"Run as a Script"),(0,i.kt)("p",null,"This section provides a script that combines the above steps for ease of use. Users can save the following content into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"windowsXP.sh"),", make it executable with ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x ./windowsXP.sh"),", and then run it with ",(0,i.kt)("inlineCode",{parentName:"p"},"./windowsXP.sh"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"windowsXP.conf")," contents:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"# [org/cinnamon/desktop/background]\n# picture-options='zoom'\n# picture-uri='file://~/Pictures/bliss-600dpi.png'\n\n[org/cinnamon/desktop/background/slideshow]\ndelay=15\nimage-source='xml:///usr/share/cinnamon-background-properties/linuxmint.xml'\n\n[org/cinnamon/desktop/interface]\ncursor-theme='DMZ-White'\ngtk-theme='Windows XP Luna'\nicon-theme='Windows-XP-Icons'\n\n[org/cinnamon/desktop/wm/preferences]\nmin-window-opacity=30\nnum-workspaces=3\ntheme='Mint-Y'\nworkspace-names=@as []\n\n[org/cinnamon/theme]\nname='Windows XP Luna'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"windowsXP.sh")," script:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nwget https://archive.org/download/bliss-600dpi/bliss-600dpi.png -P ~/Pictures\ngit clone https://github.com/B00merang-Project/Windows-XP.git Windows-XP-Themes\ngit clone https://github.com/B00merang-Artwork/Windows-XP.git Windows-XP-Icons\nmkdir -p ~/.themes ~/.icons\ncp -r 'Windows-XP-Themes/Windows XP Luna' ~/.themes\ncp -r 'Windows-XP-Icons/' ~/.icons\nsleep 3\ndconf load / < windowsXP.conf\n")))),(0,i.kt)("h2",{id:"run-manually"},"Run Manually"),(0,i.kt)("p",null,"This section breaks down the setup process into individual manual steps for users who prefer to execute each command separately."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the Bliss background image to the user's Pictures folder manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.org/download/bliss-600dpi/bliss-600dpi.png -P ~/Pictures\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the Windows XP theme repository manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/B00merang-Project/Windows-XP.git Windows-XP-Themes\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the Windows XP icon repository manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/B00merang-Artwork/Windows-XP.git Windows-XP-Icons\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the directories ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.themes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.icons")," if they don't already exist manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.themes ~/.icons\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the Windows XP Luna theme to the user's themes directory manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r 'Windows-XP-Themes/Windows XP Luna' ~/.themes\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the Windows XP icons to the user's icons directory manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r 'Windows-XP-Icons/' ~/.icons\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("inlineCode",{parentName:"p"},"windowsXP.conf")," file manually:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/hirusha-adi/myLinuxSetup/main/desktop/cinnamon/windowsXP.conf\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the dconf config file and edit it to suit your needs (optional):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano ./windowsXP.conf\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Load custom desktop configuration settings from the ",(0,i.kt)("inlineCode",{parentName:"p"},"windowsXP.conf")," file into the Cinnamon desktop environment manually using ",(0,i.kt)("inlineCode",{parentName:"p"},"dconf"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dconf load / < windowsXP.conf\n")))))}u.isMDXComponent=!0}}]);