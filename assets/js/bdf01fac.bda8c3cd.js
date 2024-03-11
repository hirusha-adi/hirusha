"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3538],{2092:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=r(1527),t=r(6213);const l={title:"Guide to building  Data-Recovery",sidebar_label:"Build"},s=void 0,c={id:"projects/data_recovery/build",title:"Guide to building  Data-Recovery",description:"1. Install Python",source:"@site/docs/projects/data_recovery/build.md",sourceDirName:"projects/data_recovery",slug:"/projects/data_recovery/build",permalink:"/docs/projects/data_recovery/build",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Guide to building  Data-Recovery",sidebar_label:"Build"},sidebar:"projects",previous:{title:"Data Recovery",permalink:"/docs/projects/data_recovery/"},next:{title:"How it works",permalink:"/docs/projects/data_recovery/how_it_works"}},o={},d=[];function a(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Python"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run this command to use a Virtual Enviroment (This will help in a reduced compiled file size)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"python -m pip install virtualenv\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a virtual enviroment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"virtualenv env\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Activate the virtual enviroment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"env\\Scripts\\activate.bat\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install requirements"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pip install -r requirements.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install PyInstaller to build the executable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pip install pyinstaller\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run these commands to compile"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Normal Mode"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'pyinstaller recover.py --noconfirm --onefile --name "Data Recovery" --console\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Hidden Mode"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'pyinstaller recover.py --noconfirm --onefile --name "Data Recovery" --windowed\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deactive the virtual enviroment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"deactivate\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Your compiled ",(0,i.jsx)(n.code,{children:"Data Recovery.exe"})," is available at ",(0,i.jsx)(n.code,{children:"./dist"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},6213:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var i=r(959);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);