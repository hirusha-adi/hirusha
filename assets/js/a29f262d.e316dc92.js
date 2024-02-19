"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[9410],{9915:(e,r,s)=>{s.d(r,{Z:()=>i});var a=s(959),t=s(422),n=s(5511);const o={tooltip:"tooltip_LqSg",tooltipArrow:"tooltipArrow_bmQN"};var c=s(1527);function i(e){var r=e.children,s=e.id,i=e.anchorEl,l=e.text,d=e.delay,h=(0,a.useState)(!1),u=h[0],m=h[1],v=(0,a.useState)(null),x=v[0],g=v[1],f=(0,a.useState)(null),p=f[0],j=f[1],w=(0,a.useState)(null),b=w[0],_=w[1],C=(0,a.useState)(null),y=C[0],N=C[1],L=(0,n.D)(x,p,{modifiers:[{name:"arrow",options:{element:b}},{name:"offset",options:{offset:[0,8]}}]}),Z=L.styles,F=L.attributes,I=(0,a.useRef)(null),S=s+"_tooltip";return(0,a.useEffect)((function(){N(i?"string"==typeof i?document.querySelector(i):i:document.body)}),[y,i]),(0,a.useEffect)((function(){var e=["mouseenter","focus"],r=["mouseleave","blur"],s=function(){""!==l&&(null==x||x.removeAttribute("title"),I.current=window.setTimeout((function(){m(!0)}),d||400))},a=function(){clearInterval(I.current),m(!1)};return x&&(e.forEach((function(e){x.addEventListener(e,s)})),r.forEach((function(e){x.addEventListener(e,a)}))),function(){x&&(e.forEach((function(e){x.removeEventListener(e,s)})),r.forEach((function(e){x.removeEventListener(e,a)})))}}),[x,l,d]),(0,c.jsxs)(c.Fragment,{children:[a.cloneElement(r,{ref:g,"aria-describedby":u?S:void 0}),y?t.createPortal(u&&(0,c.jsxs)("div",Object.assign({id:S,role:"tooltip",ref:j,className:o.tooltip,style:Z.popper},F.popper,{children:[l,(0,c.jsx)("span",{ref:_,className:o.tooltipArrow,style:Z.arrow})]})),y):y]})}},4290:(e,r,s)=>{s.r(r),s.d(r,{default:()=>E,prepareUserState:()=>I});var a=s(959),t=s(3301),n=s.n(t),o=s(5341),c=s(3291),i=s(778),l=s(7621);const d={showcaseCard:"showcaseCard_MkqL",showcaseCardImage:"showcaseCardImage_WoVb",showcaseCardHeader:"showcaseCardHeader_Mceh",showcaseCardTitle:"showcaseCardTitle_J7aP",svgIconFavorite:"svgIconFavorite_Xc7Y",showcaseCardSrcBtn:"showcaseCardSrcBtn_nptx",showcaseCardBody:"showcaseCardBody_R1Nj",cardFooter:"cardFooter_ODAT",tag:"tag_P8ik",textLabel:"textLabel_MjoO",colorLabel:"colorLabel_gM4S"};var h=s(45);const u={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};var m=s(1527),v=["svgClass","colorAttr","children","color","size","viewBox"];function x(e){var r=e.svgClass,s=e.colorAttr,a=e.children,t=e.color,n=void 0===t?"inherit":t,c=e.size,i=void 0===c?"medium":c,l=e.viewBox,d=void 0===l?"0 0 24 24":l,x=(0,h.Z)(e,v);return(0,m.jsx)("svg",Object.assign({viewBox:d,color:s,"aria-hidden":!0,className:(0,o.Z)(u.svgIcon,u[n],u[i],r)},x,{children:a}))}function g(e){return(0,m.jsx)(x,Object.assign({},e,{children:(0,m.jsx)("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})}))}var f=s(9915),p=s(3170);var j=a.forwardRef((function(e,r){var s=e.label,a=e.color,t=e.description;return(0,m.jsxs)("li",{ref:r,className:d.tag,title:t,children:[(0,m.jsx)("span",{className:d.textLabel,children:s.toLowerCase()}),(0,m.jsx)("span",{className:d.colorLabel,style:{backgroundColor:a}})]})}));function w(e){var r,s,a=e.tags.map((function(e){return Object.assign({tag:e},p.$G[e])})),t=(r=function(e){return p.PS.indexOf(e.tag)},(s=[].concat(a)).sort((function(e,s){return r(e)>r(s)?1:r(s)>r(e)?-1:0})),s);return(0,m.jsx)(m.Fragment,{children:t.map((function(e,r){var s="showcase_card_tag_"+e.tag;return(0,m.jsx)(f.Z,{text:e.description,anchorEl:"#__docusaurus",id:s,children:(0,m.jsx)(j,Object.assign({},e),r)},r)}))})}var b=(0,a.memo)((function(e){var r=e.project;return(0,m.jsxs)("div",{className:(0,o.Z)("card",d.showcaseCard),children:[r.preview&&(0,m.jsx)("div",{className:(0,o.Z)("card__image",d.showcaseCardImage),children:(0,m.jsx)(i.Z,{src:r.preview,alt:r.title,img:r.preview})}),(0,m.jsxs)("div",{className:"card__body",children:[(0,m.jsxs)("div",{className:(0,o.Z)(d.showcaseCardHeader),children:[(0,m.jsx)("h4",{className:d.showcaseCardTitle,children:(0,m.jsx)(l.Z,{href:r.website,className:d.showcaseCardLink,children:r.title})}),r.tags.includes("favorite")&&(0,m.jsx)(g,{svgClass:d.svgIconFavorite,size:"small"}),r.source&&(0,m.jsx)(l.Z,{href:r.source,className:(0,o.Z)("button button--secondary button--sm",d.showcaseCardSrcBtn),children:"Source Code"})]}),(0,m.jsx)("p",{className:d.showcaseCardBody,children:r.description})]}),(0,m.jsx)("ul",{className:(0,o.Z)("card__footer",d.cardFooter),children:(0,m.jsx)(w,{tags:r.tags})})]},r.title)}));const _=b;var C=s(1897);const y={filterCheckbox:"filterCheckbox_FZyb",checkboxList:"checkboxList_LYI2",showcaseList:"showcaseList_mWrw",checkboxListItem:"checkboxListItem_b1JS",searchContainer:"searchContainer_a2sm",showcaseFavorite:"showcaseFavorite_GB3i",showcaseFavoriteHeader:"showcaseFavoriteHeader_A4FS",svgIconFavoriteXs:"svgIconFavoriteXs_M3yI",svgIconFavorite:"svgIconFavorite_DKtz"};var N=s(4668),L="Projects",Z=" You can explore the collection of my projects, ranging from beginner levels of my programming journey to my current projects.",F="https://github.com/hirusha-adi";function I(){var e;if(C.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}function S(){return(0,m.jsxs)("section",{className:"text--center",children:[(0,m.jsx)("h2",{children:L}),(0,m.jsx)("p",{children:Z}),(0,m.jsx)("a",{className:"button button--primary",href:F,target:"_blank",rel:"noreferrer",children:"Open Github Profile"})]})}function k(){var e=(0,c.Z)().i18n.currentLocale;return 0===p.q.length?(0,m.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,m.jsx)("div",{className:"container padding-vert--md text--center",children:(0,m.jsx)("h2",{children:"No result"})})}):(0,m.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"container margin-top--lg",children:[(0,m.jsx)("div",{className:(0,o.Z)("margin-bottom--md",y.showcaseFavoriteHeader)}),Object.entries(p.fj).map((function(r){var s=r[0],a=r[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:(0,o.Z)("margin-bottom--md",y.showcaseFavoriteHeader),children:(0,m.jsx)("h3",{children:n().upperFirst("en"===e?s:p.cO[s])})}),(0,m.jsx)("ul",{className:y.showcaseList,children:a.map((function(e){return(0,m.jsx)(_,{project:e},e.title)}))})]},s)}))]})})})}const E=function(){return(0,m.jsx)(N.Z,{title:L,description:Z,maxWidth:1280,children:(0,m.jsxs)("main",{className:"margin-vert--lg",children:[(0,m.jsx)(S,{}),(0,m.jsx)(k,{})]})})}},4668:(e,r,s)=>{s.d(r,{Z:()=>l});var a=s(45),t=(s(959),s(5341)),n=s(824);const o={containerWrapper:"containerWrapper_I0cV",myContainer:"myContainer_pGZb"};var c=s(1527),i=["children","maxWidth"];function l(e){var r=e.children,s=e.maxWidth,l=(0,a.Z)(e,i);return(0,c.jsx)(n.Z,Object.assign({},l,{children:(0,c.jsx)("div",{className:o.containerWrapper,children:(0,c.jsx)("div",{className:(0,t.Z)(o.myContainer,"margin-vert--lg"),style:s?{maxWidth:s+"px"}:{},children:(0,c.jsx)("main",{children:r})})})}))}}}]);