"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3315],{4470:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=t(1527),o=t(6213),n=t(959);const i=function(){var e,s=(0,n.useState)("video"),t=s[0],o=s[1],i=(0,n.useState)("video_dl"),r=i[0],c=i[1],d=(0,n.useState)("best"),l=d[0],u=d[1],m=(0,n.useState)("720p"),h=m[0],p=m[1],x=(0,n.useState)({verbose:!0,ignoreErrors:!1,abortOnError:!0,writeSubs:!1,writeAutoSubs:!1}),b=x[0],j=x[1],v=(0,n.useState)(""),y=v[0],g=v[1],f=(0,n.useRef)(null),k=(0,n.useState)(!1),C=k[0],N=k[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Media URL"}),(0,a.jsx)("input",{type:"text",placeholder:"Enter URL",value:y,onChange:function(e){return g(e.target.value)},className:"custom-input",style:{width:"100%",border:"1px solid #ccc",resize:"none",marginBottom:20}}),(0,a.jsx)("h3",{children:"Contents to Downlaod"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoType",value:"video",checked:"video"===t,onChange:function(){return o("video")},className:"custom-radio"}),(0,a.jsx)("label",{children:"Video"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoType",value:"channel",checked:"channel"===t,onChange:function(){return o("channel")},className:"custom-radio"}),(0,a.jsx)("label",{children:"Channel"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoType",value:"playlist",checked:"playlist"===t,onChange:function(){return o("playlist")},className:"custom-radio"}),(0,a.jsx)("label",{children:"Playlist"})]})]}),(0,a.jsx)("h3",{children:"What to Download"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"downloadType",value:"audio_dl",checked:"audio_dl"===r,onChange:function(){return c("audio_dl")},className:"custom-radio"}),(0,a.jsx)("label",{children:"Audio"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"downloadType",value:"video_dl",checked:"video_dl"===r,onChange:function(){return c("video_dl")},className:"custom-radio"}),(0,a.jsx)("label",{children:"Video"})]})]}),"audio_dl"===r&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Audio Quality"}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"audioQuality",value:"128k",checked:"128k"===l,onChange:function(){return u("128k")},className:"custom-radio"}),(0,a.jsx)("label",{children:"128 kbps"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"audioQuality",value:"256k",checked:"256k"===l,onChange:function(){return u("256k")},className:"custom-radio"}),(0,a.jsx)("label",{children:"256 kbps"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"audioQuality",value:"best",checked:"best"===l,onChange:function(){return u("best")},className:"custom-radio"}),(0,a.jsx)("label",{children:"Best Available"})]})]}),"video_dl"===r&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Video Quality"}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoQuality",value:"240p",checked:"240p"===h,onChange:function(){return p("240p")},className:"custom-radio"}),(0,a.jsx)("label",{children:"240p"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoQuality",value:"360p",checked:"360p"===h,onChange:function(){return p("360p")},className:"custom-radio"}),(0,a.jsx)("label",{children:"360p"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoQuality",value:"480p",checked:"480p"===h,onChange:function(){return p("480p")},className:"custom-radio"}),(0,a.jsx)("label",{children:"480p"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoQuality",value:"720p",checked:"720p"===h,onChange:function(){return p("720p")},className:"custom-radio"}),(0,a.jsx)("label",{children:"720p"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoQuality",value:"1080p",checked:"1080p"===h,onChange:function(){return p("1080p")},className:"custom-radio"}),(0,a.jsx)("label",{children:"1080p"})]}),(0,a.jsxs)("div",{className:"custom-radio-item",children:[(0,a.jsx)("input",{type:"radio",name:"videoQuality",value:"best",checked:"best"===h,onChange:function(){return p("best")},className:"custom-radio"}),(0,a.jsx)("label",{children:"Best Available"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Additional Options"}),(0,a.jsxs)("div",{className:"custom-checkbox-item",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.verbose,onChange:function(){return j(Object.assign({},b,{verbose:!b.verbose}))},className:"custom-checkbox"}),(0,a.jsx)("label",{children:"Verbose"})]}),(0,a.jsxs)("div",{className:"custom-checkbox-item",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.ignoreErrors,onChange:function(){return j(Object.assign({},b,{ignoreErrors:!b.ignoreErrors}))},className:"custom-checkbox"}),(0,a.jsx)("label",{children:"Ignore Errors"})]}),(0,a.jsxs)("div",{className:"custom-checkbox-item",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.abortOnError,onChange:function(){return j(Object.assign({},b,{abortOnError:!b.abortOnError}))},className:"custom-checkbox"}),(0,a.jsx)("label",{children:"Abort on Error"})]}),(0,a.jsxs)("div",{className:"custom-checkbox-item",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.writeSubs,onChange:function(){return j(Object.assign({},b,{writeSubs:!b.writeSubs}))},className:"custom-checkbox"}),(0,a.jsx)("label",{children:"Write Subs"})]}),(0,a.jsxs)("div",{className:"custom-checkbox-item",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.writeAutoSubs,onChange:function(){return j(Object.assign({},b,{writeAutoSubs:!b.writeAutoSubs}))},className:"custom-checkbox"}),(0,a.jsx)("label",{children:"Write Auto Subs"})]})]}),(0,a.jsx)("textarea",{value:(e='yt-dlp "'+y+'" ',"channel"===t?e+="--yes-playlist ":"playlist"===t&&(e+="--extract-audio --audio-format mp3 "),e+="audio_dl"===r?"--audio-quality "+l+" ":"--format "+h+"+bestaudio ",b.verbose&&(e+="--verbose "),b.ignoreErrors&&(e+="--ignore-errors "),b.abortOnError&&(e+="--abort-on-error "),b.writeSubs&&(e+="--write-subs "),b.writeAutoSubs&&(e+="--write-auto-subs "),e),rows:"4",cols:"50",style:{width:"100%",minHeight:"100px",border:"1px solid #ccc",resize:"none"},ref:f}),(0,a.jsx)("button",{onClick:function(){f.current&&(f.current.select(),document.execCommand("copy"),N(!0))},className:"button button--success",children:"Copy to Clipboard"}),C&&(0,a.jsxs)("div",{className:"alert alert--success",role:"alert",style:{marginTop:"20px"},children:[(0,a.jsx)("button",{"aria-label":"Close",className:"clean-btn close",type:"button",onClick:function(){N(!1)},children:(0,a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,a.jsx)("strong",{children:"Successfully copied to clipboard!"})]})]})},r={title:"YT-DLP Command Generator",sidebar_label:"YT-DLP Command Generator",slug:"yt_dlp_command_generator"},c=void 0,d={id:"tutorials/media/yt_dlp_command_gen",title:"YT-DLP Command Generator",description:"What is YT-DLP?",source:"@site/docs/tutorials/media/yt_dlp_command_gen.mdx",sourceDirName:"tutorials/media",slug:"/tutorials/media/yt_dlp_command_generator",permalink:"/docs/tutorials/media/yt_dlp_command_generator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"YT-DLP Command Generator",sidebar_label:"YT-DLP Command Generator",slug:"yt_dlp_command_generator"},sidebar:"tutorials",previous:{title:"Media",permalink:"/docs/tutorials/media/"},next:{title:"Methods",permalink:"/docs/tutorials/methods/"}},l={},u=[{value:"What is <code>YT-DLP</code>?",id:"what-is-yt-dlp",level:2},{value:"Source Code",id:"source-code",level:2},{value:"Advanced Usage Guides",id:"advanced-usage-guides",level:2},{value:"YT-DLP Command Generator",id:"yt-dlp-command-generator",level:2}];function m(e){const s={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h2,{id:"what-is-yt-dlp",children:["What is ",(0,a.jsx)(s.code,{children:"YT-DLP"}),"?"]}),"\n",(0,a.jsx)(s.p,{children:"yt-dlp is a command-line program that lets you easily download videos and audio from more than a thousand websites."}),"\n",(0,a.jsx)(s.h2,{id:"source-code",children:"Source Code"}),"\n",(0,a.jsxs)(s.p,{children:["The official repository of yt-dlp can be found at: ",(0,a.jsx)(s.a,{href:"https://github.com/yt-dlp/yt-dlp",children:"here"})]}),"\n",(0,a.jsx)(s.h2,{id:"advanced-usage-guides",children:"Advanced Usage Guides"}),"\n",(0,a.jsxs)(s.p,{children:["Can be found ",(0,a.jsx)(s.a,{href:"https://github.com/yt-dlp/yt-dlp#usage-and-options",children:"here"})," of the official documentation"]}),"\n",(0,a.jsx)(s.h2,{id:"yt-dlp-command-generator",children:"YT-DLP Command Generator"}),"\n",(0,a.jsx)(i,{})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},6213:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>i});var a=t(959);const o={},n=a.createContext(o);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);