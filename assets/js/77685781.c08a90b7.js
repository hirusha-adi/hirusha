"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[6023],{9481:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=n(5893),r=n(1151);const l={title:"SSH Setup",sidebar_label:"SSH",slug:"ssh"},i=void 0,a={id:"linux/personal-guides/server/ssh",title:"SSH Setup",description:"Setup",source:"@site/docs/linux/personal-guides/server/ssh.md",sourceDirName:"linux/personal-guides/server",slug:"/linux/personal-guides/server/ssh",permalink:"/docs/linux/personal-guides/server/ssh",draft:!1,unlisted:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/linux/personal-guides/server/ssh.md",tags:[],version:"current",frontMatter:{title:"SSH Setup",sidebar_label:"SSH",slug:"ssh"},sidebar:"linux",previous:{title:"Jellyfin",permalink:"/docs/linux/personal-guides/server/jellyfin"}},u={},o=[{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:3},{value:"Setup",id:"setup-1",level:3}];function d(e){const s={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(s.h3,{id:"install",children:"Install"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt install openssh-server -y\n"})}),"\n",(0,t.jsx)(s.h3,{id:"setup-1",children:"Setup"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl enable sshd --now\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl start sshd\n"})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var t=n(7294);const r={},l=t.createContext(r);function i(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);