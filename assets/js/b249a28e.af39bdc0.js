"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[7215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=s,m=c["".concat(i,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:s,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const a={title:"SSH Setup",sidebar_label:"SSH",slug:"ssh"},l=void 0,o={unversionedId:"tutorials/personal-guides/linux-distros/server/ssh",id:"tutorials/personal-guides/linux-distros/server/ssh",title:"SSH Setup",description:"Setup",source:"@site/docs/tutorials/personal-guides/linux-distros/server/ssh.md",sourceDirName:"tutorials/personal-guides/linux-distros/server",slug:"/tutorials/personal-guides/linux-distros/server/ssh",permalink:"/docs/tutorials/personal-guides/linux-distros/server/ssh",draft:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/tutorials/personal-guides/linux-distros/server/ssh.md",tags:[],version:"current",frontMatter:{title:"SSH Setup",sidebar_label:"SSH",slug:"ssh"},sidebar:"tutorials",previous:{title:"Jellyfin",permalink:"/docs/tutorials/personal-guides/linux-distros/server/jellyfin"}},i={},u=[{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:3},{value:"Setup",id:"setup-1",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("h3",{id:"install"},"Install"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openssh-server -y\n")),(0,s.kt)("h3",{id:"setup-1"},"Setup"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable sshd --now\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start sshd\n")))}d.isMDXComponent=!0}}]);