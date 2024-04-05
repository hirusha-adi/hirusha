"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3721],{44127:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=s(11527),r=s(56213);const o={title:"Shared Home Folders Setup",sidebar_label:"Shared Home Folders",slug:"shared-home-folders"},i=void 0,d={id:"linux/personal-guides/desktop/common_home_folders",title:"Shared Home Folders Setup",description:"1. Edit the Configuration File: You can use a text editor of your choice to edit the ~/.config/user-dirs.dirs file.",source:"@site/docs/linux/personal-guides/desktop/common_home_folders.md",sourceDirName:"linux/personal-guides/desktop",slug:"/linux/personal-guides/desktop/shared-home-folders",permalink:"/docs/linux/personal-guides/desktop/shared-home-folders",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Shared Home Folders Setup",sidebar_label:"Shared Home Folders",slug:"shared-home-folders"},sidebar:"linux",previous:{title:"Arch Linux",permalink:"/docs/linux/personal-guides/desktop/arch-linux"},next:{title:"Kali Linux",permalink:"/docs/linux/personal-guides/desktop/kali-linux"}},l={},a=[];function c(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Edit the Configuration File"}),": You can use a text editor of your choice to edit the ",(0,t.jsx)(n.code,{children:"~/.config/user-dirs.dirs"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nano ~/.config/user-dirs.dirs\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Edit the Configuration File's Content"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# this file is to be placed at:\n#       ~/.config/user-dirs.dirs \n#\n# This file is written by xdg-user-dirs-update\n# If you want to change or add directories, just edit the line you\'re\n# interested in. All local changes will be retained on the next run.\n# Format is XDG_xxx_DIR="$HOME/yyy", where yyy is a shell-escaped\n# homedir-relative path, or XDG_xxx_DIR="/yyy", where /yyy is an\n# absolute path. No other format is supported.\n\n# these remains the same\nXDG_TEMPLATES_DIR="$HOME/Templates"\nXDG_PUBLICSHARE_DIR="$HOME/Public"\n\n# from 250GB HDD and 500GB HDD \nXDG_DESKTOP_DIR="/mnt/5498F4E498F4C610/Desktop"\nXDG_DOWNLOAD_DIR="/mnt/5498F4E498F4C610/Downloads"\nXDG_DOCUMENTS_DIR="/mnt/5498F4E498F4C610/Documents"\nXDG_MUSIC_DIR="/mnt/5D9037A9106244F3"\nXDG_PICTURES_DIR="/mnt/5498F4E498F4C610/Pictures"\nXDG_VIDEOS_DIR="/mnt/5498F4E498F4C610/Videos"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Save and Exit"}),": Replace the required contents, then save and exit ",(0,t.jsx)(n.code,{children:"nano"})," (or your text editor of choice)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Update User Directories"}),": To apply the changes, you'll need to update the user directories. Run the following command to do it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xdg-user-dirs-update\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This will refresh the user directories with the changes you made."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},56213:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var t=s(50959);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);