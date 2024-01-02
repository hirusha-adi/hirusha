"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3315],{8551:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var t=a(5893),o=a(1151),i=a(7294);const d=function(){const[e,s]=(0,i.useState)("video"),[a,o]=(0,i.useState)("video_dl"),[d,n]=(0,i.useState)("best"),[r,c]=(0,i.useState)("720p"),[l,u]=(0,i.useState)({verbose:!0,ignoreErrors:!1,abortOnError:!0,writeSubs:!1,writeAutoSubs:!1}),[m,h]=(0,i.useState)(""),p=(0,i.useRef)(null),[x,b]=(0,i.useState)(!1);return(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Media URL"}),(0,t.jsx)("input",{type:"text",placeholder:"Enter URL",value:m,onChange:e=>h(e.target.value),className:"custom-input",style:{width:"100%",border:"1px solid #ccc",resize:"none",marginBottom:20}}),(0,t.jsx)("h3",{children:"Contents to Downlaod"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoType",value:"video",checked:"video"===e,onChange:()=>s("video"),className:"custom-radio"}),(0,t.jsx)("label",{children:"Video"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoType",value:"channel",checked:"channel"===e,onChange:()=>s("channel"),className:"custom-radio"}),(0,t.jsx)("label",{children:"Channel"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoType",value:"playlist",checked:"playlist"===e,onChange:()=>s("playlist"),className:"custom-radio"}),(0,t.jsx)("label",{children:"Playlist"})]})]}),(0,t.jsx)("h3",{children:"What to Download"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"downloadType",value:"audio_dl",checked:"audio_dl"===a,onChange:()=>o("audio_dl"),className:"custom-radio"}),(0,t.jsx)("label",{children:"Audio"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"downloadType",value:"video_dl",checked:"video_dl"===a,onChange:()=>o("video_dl"),className:"custom-radio"}),(0,t.jsx)("label",{children:"Video"})]})]}),"audio_dl"===a&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Audio Quality"}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"audioQuality",value:"128k",checked:"128k"===d,onChange:()=>n("128k"),className:"custom-radio"}),(0,t.jsx)("label",{children:"128 kbps"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"audioQuality",value:"256k",checked:"256k"===d,onChange:()=>n("256k"),className:"custom-radio"}),(0,t.jsx)("label",{children:"256 kbps"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"audioQuality",value:"best",checked:"best"===d,onChange:()=>n("best"),className:"custom-radio"}),(0,t.jsx)("label",{children:"Best Available"})]})]}),"video_dl"===a&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Video Quality"}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoQuality",value:"240p",checked:"240p"===r,onChange:()=>c("240p"),className:"custom-radio"}),(0,t.jsx)("label",{children:"240p"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoQuality",value:"360p",checked:"360p"===r,onChange:()=>c("360p"),className:"custom-radio"}),(0,t.jsx)("label",{children:"360p"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoQuality",value:"480p",checked:"480p"===r,onChange:()=>c("480p"),className:"custom-radio"}),(0,t.jsx)("label",{children:"480p"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoQuality",value:"720p",checked:"720p"===r,onChange:()=>c("720p"),className:"custom-radio"}),(0,t.jsx)("label",{children:"720p"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoQuality",value:"1080p",checked:"1080p"===r,onChange:()=>c("1080p"),className:"custom-radio"}),(0,t.jsx)("label",{children:"1080p"})]}),(0,t.jsxs)("div",{className:"custom-radio-item",children:[(0,t.jsx)("input",{type:"radio",name:"videoQuality",value:"best",checked:"best"===r,onChange:()=>c("best"),className:"custom-radio"}),(0,t.jsx)("label",{children:"Best Available"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Additional Options"}),(0,t.jsxs)("div",{className:"custom-checkbox-item",children:[(0,t.jsx)("input",{type:"checkbox",checked:l.verbose,onChange:()=>u({...l,verbose:!l.verbose}),className:"custom-checkbox"}),(0,t.jsx)("label",{children:"Verbose"})]}),(0,t.jsxs)("div",{className:"custom-checkbox-item",children:[(0,t.jsx)("input",{type:"checkbox",checked:l.ignoreErrors,onChange:()=>u({...l,ignoreErrors:!l.ignoreErrors}),className:"custom-checkbox"}),(0,t.jsx)("label",{children:"Ignore Errors"})]}),(0,t.jsxs)("div",{className:"custom-checkbox-item",children:[(0,t.jsx)("input",{type:"checkbox",checked:l.abortOnError,onChange:()=>u({...l,abortOnError:!l.abortOnError}),className:"custom-checkbox"}),(0,t.jsx)("label",{children:"Abort on Error"})]}),(0,t.jsxs)("div",{className:"custom-checkbox-item",children:[(0,t.jsx)("input",{type:"checkbox",checked:l.writeSubs,onChange:()=>u({...l,writeSubs:!l.writeSubs}),className:"custom-checkbox"}),(0,t.jsx)("label",{children:"Write Subs"})]}),(0,t.jsxs)("div",{className:"custom-checkbox-item",children:[(0,t.jsx)("input",{type:"checkbox",checked:l.writeAutoSubs,onChange:()=>u({...l,writeAutoSubs:!l.writeAutoSubs}),className:"custom-checkbox"}),(0,t.jsx)("label",{children:"Write Auto Subs"})]})]}),(0,t.jsx)("textarea",{value:(()=>{let s=`yt-dlp "${m}" `;return"channel"===e?s+="--yes-playlist ":"playlist"===e&&(s+="--extract-audio --audio-format mp3 "),s+="audio_dl"===a?`--audio-quality ${d} `:`--format ${r}+bestaudio `,l.verbose&&(s+="--verbose "),l.ignoreErrors&&(s+="--ignore-errors "),l.abortOnError&&(s+="--abort-on-error "),l.writeSubs&&(s+="--write-subs "),l.writeAutoSubs&&(s+="--write-auto-subs "),s})(),rows:"4",cols:"50",style:{width:"100%",minHeight:"100px",border:"1px solid #ccc",resize:"none"},ref:p}),(0,t.jsx)("button",{onClick:()=>{p.current&&(p.current.select(),document.execCommand("copy"),b(!0))},className:"button button--success",children:"Copy to Clipboard"}),x&&(0,t.jsxs)("div",{className:"alert alert--success",role:"alert",style:{marginTop:"20px"},children:[(0,t.jsx)("button",{"aria-label":"Close",className:"clean-btn close",type:"button",onClick:()=>{b(!1)},children:(0,t.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,t.jsx)("strong",{children:"Successfully copied to clipboard!"})]})]})},n={title:"YT-DLP Command Generator",sidebar_label:"YT-DLP Command Generator",slug:"yt_dlp_command_generator"},r=void 0,c={id:"tutorials/media/yt_dlp_command_gen",title:"YT-DLP Command Generator",description:"What is YT-DLP?",source:"@site/docs/tutorials/media/yt_dlp_command_gen.mdx",sourceDirName:"tutorials/media",slug:"/tutorials/media/yt_dlp_command_generator",permalink:"/docs/tutorials/media/yt_dlp_command_generator",draft:!1,unlisted:!1,editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/docs/tutorials/media/yt_dlp_command_gen.mdx",tags:[],version:"current",frontMatter:{title:"YT-DLP Command Generator",sidebar_label:"YT-DLP Command Generator",slug:"yt_dlp_command_generator"},sidebar:"tutorials",previous:{title:"Media",permalink:"/docs/tutorials/media/"},next:{title:"Methods",permalink:"/docs/tutorials/methods/"}},l={},u=[{value:"What is <code>YT-DLP</code>?",id:"what-is-yt-dlp",level:2},{value:"Source Code",id:"source-code",level:2},{value:"Advanced Usage Guides",id:"advanced-usage-guides",level:2},{value:"YT-DLP Command Generator",id:"yt-dlp-command-generator",level:2}];function m(e){const s={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h2,{id:"what-is-yt-dlp",children:["What is ",(0,t.jsx)(s.code,{children:"YT-DLP"}),"?"]}),"\n",(0,t.jsx)(s.p,{children:"yt-dlp is a command-line program that lets you easily download videos and audio from more than a thousand websites."}),"\n",(0,t.jsx)(s.h2,{id:"source-code",children:"Source Code"}),"\n",(0,t.jsxs)(s.p,{children:["The official repository of yt-dlp can be found at: ",(0,t.jsx)(s.a,{href:"https://github.com/yt-dlp/yt-dlp",children:"here"})]}),"\n",(0,t.jsx)(s.h2,{id:"advanced-usage-guides",children:"Advanced Usage Guides"}),"\n",(0,t.jsxs)(s.p,{children:["Can be found ",(0,t.jsx)(s.a,{href:"https://github.com/yt-dlp/yt-dlp#usage-and-options",children:"here"})," of the official documentation"]}),"\n",(0,t.jsx)(s.h2,{id:"yt-dlp-command-generator",children:"YT-DLP Command Generator"}),"\n",(0,t.jsx)(d,{})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,s,a)=>{a.d(s,{Z:()=>n,a:()=>d});var t=a(7294);const o={},i=t.createContext(o);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);