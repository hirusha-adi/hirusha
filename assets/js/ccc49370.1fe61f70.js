"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[6103],{57928:(e,t,n)=>{n.d(t,{Z:()=>L});n(50959);var a=n(5341),s=n(65913),i=n(82188);const o={article:"article_y69D",cover:"cover_ksob",coverMask:"coverMask_km0g"};var r=n(11527);function l(e){var t,n=e.children,l=e.className,c=(0,s.C)(),d=c.frontMatter,m=c.assets,u=(0,i.C)().withBaseUrl,g=null!=(t=m.image)?t:d.image;return(0,r.jsxs)("article",{className:(0,a.Z)(l,o.article),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[g&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{itemProp:"image",content:u(g,{absolute:!0})}),(0,r.jsx)("div",{className:o.cover,children:(0,r.jsx)("div",{className:o.coverMask,style:{backgroundImage:'url("'+g+'")'}})}),(0,r.jsx)("div",{style:{height:"120px"}})]}),n]})}var c=n(97621);const d={titleLink:"titleLink_BX2g"};function m(e){var t=e.className,n=(0,s.C)(),i=n.metadata,o=n.isBlogPostPage,l=i.permalink,m=i.title,u=o?"h1":"h2";return(0,r.jsx)(u,{className:(0,a.Z)(d.title,t),itemProp:"headline",children:o?m:(0,r.jsx)(c.Z,{itemProp:"url",to:l,className:d.titleLink,children:m})})}var u=n(29342),g=n(75762);const h={container:"container_iJTo",date:"date_ZxYJ",read:"read_TwWb",tagInfo:"tagInfo_Ym7h",tagList:"tagList_aAIV"};var p=n(70693),b=n(28900);function x(e){var t,n=e.readingTime,a=(t=(0,g.c)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))});return(0,r.jsx)(r.Fragment,{children:a(n)})}function j(e){var t=e.date,n=e.formattedDate;return(0,r.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function v(e){var t=e.className,n=(0,s.C)().metadata,i=n.date,o=n.tags,l=n.formattedDate,c=n.readingTime,d=o.length>0;return(0,r.jsxs)("div",{className:(0,a.Z)(h.container,"margin-bottom--md",t),children:[(0,r.jsxs)("div",{className:h.date,children:[(0,r.jsx)(b.JO,{icon:"ri:calendar-line"}),(0,r.jsx)(j,{date:i,formattedDate:l})]}),d&&(0,r.jsxs)("div",{className:h.tagInfo,children:[(0,r.jsx)(b.JO,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("div",{className:h.tagList,children:o.slice(0,2).map((function(e,t){var n=e.label,a=e.permalink;return(0,r.jsxs)("div",{children:[0!==t&&"/",(0,r.jsx)(p.Z,{label:n,permalink:a,className:"tag"})]},a)}))})]}),void 0!==c&&(0,r.jsxs)("div",{className:h.date,children:[(0,r.jsx)(b.JO,{icon:"ri:time-line"}),(0,r.jsx)(x,{readingTime:c})]})]})}function f(){var e=(0,s.C)().isBlogPostPage;return(0,r.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,r.jsx)(m,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v,{})})]})}var k=n(26514),N=n(68270);function _(e){var t=e.children,n=e.className,i=(0,s.C)().isBlogPostPage;return(0,r.jsx)("div",{id:i?k.blogPostContainerID:void 0,className:(0,a.Z)("markdown",n),itemProp:"articleBody",style:{position:"relative",zIndex:2},children:(0,r.jsx)(N.Z,{children:t})})}var B=n(60045),Z=["blogPostTitle"];function I(){return(0,r.jsx)("b",{children:"Read More"})}function y(e){var t=e.blogPostTitle,n=(0,B.Z)(e,Z);return(0,r.jsxs)(c.Z,Object.assign({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),style:{display:"flex",alignItems:"center",gap:"0.25rem"}},n,{children:[(0,r.jsx)(I,{}),(0,r.jsx)(b.JO,{icon:"ri:arrow-right-line"})]}))}const C={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_CYj5",blogPostInfo:"blogPostInfo_HuGF",blogPostInfoTags:"blogPostInfoTags_rGHT",blogPostAuthor:"blogPostAuthor_vaiQ",blogPostDetailsFull:"blogPostDetailsFull_DS_f",divider:"divider_DMLD"};function P(){var e=(0,s.C)(),t=e.metadata,n=e.isBlogPostPage,i=t.tags,o=t.title,l=(t.editUrl,t.hasTruncateMarker),c=t.date,d=t.formattedDate,m=t.readingTime,u=t.authors,g=!n&&l,h=i.length>0;u.length;return n?(0,r.jsx)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",n&&C.blogPostFooterDetailsFull),children:g&&(0,r.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":h}),children:(0,r.jsx)(y,{blogPostTitle:o,to:t.permalink})})}):(0,r.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,r.jsxs)("div",{className:C.blogPostInfo,children:[c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.JO,{icon:"ri:calendar-line"}),(0,r.jsx)("time",{dateTime:c,className:C.blogPostDate,itemProp:"datePublished",children:d})]}),h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.JO,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("span",{className:C.blogPostInfoTags,children:i.map((function(e){var t=e.label,n=e.permalink;return(0,r.jsx)(p.Z,{label:t,permalink:n},n)}))})]}),m&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.JO,{icon:"ri:time-line"}),(0,r.jsx)("span",{className:(0,a.Z)(C.blogPostReadTime,"blog__readingTime"),children:(0,r.jsx)(x,{readingTime:m})})]}),g&&(0,r.jsx)("div",{className:(0,a.Z)("readMore",{"col--3":h}),children:(0,r.jsx)(y,{blogPostTitle:o,to:t.permalink})})]})})}function L(e){var t=e.children,n=e.className,i=(0,s.C)().isBlogPostPage?"":"blog-card margin-bottom--lg";return(0,r.jsxs)(l,{className:(0,a.Z)(i,n),children:[(0,r.jsx)(f,{}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(P,{})]})}},73022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var a=n(50959),s=n(5341),i=n(58803),o=n(61412),r=n(65913),l=n(60045),c=n(50824),d=n(39665),m=n(97621),u=n(28900),g=n(29342);const h={sidebar:"sidebar_me8e",sidebarItemTitle:"sidebarItemTitle_MDMA",sidebarItemList:"sidebarItemList_t5AC",sidebarItem:"sidebarItem_PSMt",sidebarItemLink:"sidebarItemLink_nW7C",sidebarItemLinkActive:"sidebarItemLinkActive_hG8J",backButton:"backButton_Rxyd"};var p=n(11527);function b(e){var t=e.sidebar,n=(0,r.C)().isBlogPostPage,i=(0,a.useState)(!1),o=i[0],l=i[1];return(0,p.jsx)("aside",{className:"col col--2",onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:(0,p.jsxs)("nav",{className:(0,s.Z)(h.sidebar,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),style:{opacity:o?1:0},children:[n&&(0,p.jsx)("div",{className:h.backButton,onClick:function(){window.history.back()},children:(0,p.jsx)(u.JO,{icon:"ri:arrow-go-back-line"})}),(0,p.jsx)(m.Z,{href:"/blog",className:(0,s.Z)(h.sidebarItemTitle,"margin-bottom--sm"),children:t.title}),(0,p.jsx)("ul",{className:(0,s.Z)(h.sidebarItemList,"clean-list"),children:t.items.map((function(e){return(0,p.jsx)("li",{className:h.sidebarItem,children:(0,p.jsx)(m.Z,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var x=n(10200);function j(e){var t=e.sidebar;return(0,p.jsx)("ul",{className:"menu__list",children:t.items.map((function(e){return(0,p.jsx)("li",{className:"menu__list-item",children:(0,p.jsx)(m.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function v(e){return(0,p.jsx)(x.Zo,{component:j,props:e})}function f(e){var t=e.sidebar,n=(0,d.i)();return null!=t&&t.items.length?"mobile"===n?(0,p.jsx)(v,{sidebar:t}):(0,p.jsx)(b,{sidebar:t}):null}var k=["sidebar","toc","children"];function N(e){var t=e.sidebar,n=e.toc,a=e.children,i=(0,l.Z)(e,k),o=t&&t.items.length>0;return(0,p.jsx)(c.Z,Object.assign({},i,{children:(0,p.jsx)("div",{className:"container margin-vert--md",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)(f,{sidebar:t}),(0,p.jsx)("main",{className:(0,s.Z)("col",{"col--8":o,"col--8 col--offset-2":!o}),itemScope:!0,itemType:"h ttp://schema.org/Blog",children:a}),n&&(0,p.jsx)("div",{className:"col col--2",children:n})]})})}))}var _=n(57928),B=n(25354);function Z(){var e,t=(0,r.C)(),n=t.assets,a=t.metadata,s=a.title,o=a.description,l=a.date,c=a.tags,d=a.authors,m=a.frontMatter,u=m.keywords,g=null!=(e=n.image)?e:m.image;return(0,p.jsxs)(i.d,{title:s,description:o,keywords:u,image:g,children:[(0,p.jsx)("meta",{property:"og:type",content:"article"}),(0,p.jsx)("meta",{property:"article:published_time",content:l}),d.some((function(e){return e.url}))&&(0,p.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,p.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var I=n(56517),y=n(79172),C=n(72606),P=n(42452),L=n(93291),T=n(98474),w=n(91918),O={id:"comments",mapping:"title",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"zh-CN",theme:"light",darkTheme:"dark_dimmed"};function A(){var e=(0,C.L)(),t=(0,L.Z)().i18n,n=Object.assign({},O,e.giscus);if(!n.repo||!n.repoId||!n.categoryId)throw new Error("You must provide `repo`, `repoId`, and `categoryId` to `themeConfig.giscus`.");return n.theme="dark"===(0,P.I)().colorMode?n.darkTheme:n.theme,n.lang=t.currentLocale,(0,p.jsx)(T.Z,{fallback:(0,p.jsx)("div",{children:"Loading Comments..."}),children:function(){return(0,p.jsx)(w.Z,Object.assign({},n))}})}function F(e){var t=e.sidebar,n=e.children,a=(0,r.C)(),s=a.metadata,i=a.toc,o=s.nextItem,l=s.prevItem,c=s.frontMatter,d=c.hide_table_of_contents,m=c.toc_min_heading_level,u=c.toc_max_heading_level,g=c.hide_comment;return(0,p.jsxs)(N,{sidebar:t,toc:!d&&i.length>0?(0,p.jsx)(y.Z,{toc:i,minHeadingLevel:m,maxHeadingLevel:u}):void 0,children:[(0,p.jsx)(_.Z,{children:n}),(o||l)&&(0,p.jsx)("div",{className:"margin-bottom--md",children:(0,p.jsx)(B.Z,{nextItem:o,prevItem:l})}),!g&&(0,p.jsx)(A,{}),(0,p.jsx)(I.Z,{})]})}function M(e){var t=e.content;return(0,p.jsx)(r.n,{content:e.content,isBlogPostPage:!0,children:(0,p.jsxs)(i.FG,{className:(0,s.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage),children:[(0,p.jsx)(Z,{}),(0,p.jsx)(F,{sidebar:e.sidebar,children:(0,p.jsx)(t,{})})]})})}},35776:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(60045),s=n(50959),i=n(87362),o=n(5341),r=n(21891),l=n(61412),c=n(20050);const d={codeBlockContainer:"codeBlockContainer_APcc"};var m=n(11527),u=["as"];function g(e){var t=e.as,n=(0,a.Z)(e,u),s=(0,r.p)(),i=(0,c.QC)(s);return(0,m.jsx)(t,Object.assign({},n,{style:i,className:(0,o.Z)(n.className,d.codeBlockContainer,l.k.common.codeBlock)}))}const h={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){var t=e.children,n=e.className;return(0,m.jsx)(g,{as:"pre",tabIndex:0,className:(0,o.Z)(h.codeBlockStandalone,"thin-scrollbar",n),children:(0,m.jsx)("code",{className:h.codeBlockLines,children:t})})}var b=n(88875),x=n(72606),j=n(20112),v=n(2425);const f={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function k(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,s=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var r=s({line:t,className:(0,o.Z)(n,a&&f.codeLine)}),l=t.map((function(e,t){return(0,m.jsx)("span",Object.assign({},i({token:e,key:t})),t)}));return(0,m.jsxs)("span",Object.assign({},r,{children:[a?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:f.codeLineNumber}),(0,m.jsx)("span",{className:f.codeLineContent,children:l})]}):l,(0,m.jsx)("br",{})]}))}var N=n(17931),_=n(29342),B=n(20056),Z=n(23016);const I={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function y(e){var t=e.code,n=e.className,a=(0,s.useState)(!1),i=a[0],r=a[1],l=(0,s.useRef)(void 0),c=(0,s.useCallback)((function(){(0,N.Z)(t),r(!0),l.current=window.setTimeout((function(){r(!1)}),1e3)}),[t]);return(0,s.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),(0,m.jsx)("button",{type:"button","aria-label":i?(0,_.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,_.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,_.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,I.copyButton,i&&I.copyButtonCopied),onClick:c,children:(0,m.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,m.jsx)(B.Z,{className:I.copyButtonIcon}),(0,m.jsx)(Z.Z,{className:I.copyButtonSuccessIcon})]})})}var C=n(88303);const P={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function L(e){var t=e.className,n=e.onClick,a=e.isEnabled,s=(0,_.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,m.jsx)("button",{type:"button",onClick:n,className:(0,o.Z)("clean-btn",t,a&&P.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,m.jsx)(C.Z,{className:P.wordWrapButtonIcon,"aria-hidden":"true"})})}var T=n(28900);function w(e){var t,n=e.children,a=e.className,s=void 0===a?"":a,i=e.metastring,l=e.title,d=e.showLineNumbers,u=e.language,p=(0,x.L)().prism,f=p.defaultLanguage,N=p.magicComments,_=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=u?u:(0,c.Vo)(s))?t:f),B=(0,r.p)(),Z=(0,j.F)(),I=(0,c.bc)(i)||l,C=function(e){var t,n,a=(0,b.Z)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),s=null!=(t=null==e||null==(n=e.match(a))?void 0:n.groups.icon)?t:"";return s?(0,m.jsx)(T.JO,{icon:s,width:"16"}):null}(i),P=(0,c.nZ)(n,{metastring:i,language:_,magicComments:N}),w=P.lineClassNames,O=P.code,A=null!=d?d:(0,c.nt)(i);return(0,m.jsxs)(g,{as:"div",className:(0,o.Z)(s,_&&!s.includes("language-"+_)&&"language-"+_),children:[I&&(0,m.jsxs)("div",{className:h.codeBlockTitle,children:[C,I,(0,m.jsx)("span",{style:{flex:1,textAlign:"right"},children:_})]}),(0,m.jsxs)("div",{className:h.codeBlockContent,children:[(0,m.jsx)(v.y$,{theme:B,code:O,language:null!=_?_:"text",children:function(e){var t=e.className,n=e.style,a=e.tokens,s=e.getLineProps,i=e.getTokenProps;return(0,m.jsx)("pre",{tabIndex:0,ref:Z.codeBlockRef,className:(0,o.Z)(t,h.codeBlock,"thin-scrollbar"),style:n,children:(0,m.jsx)("code",{className:(0,o.Z)(h.codeBlockLines,A&&h.codeBlockLinesWithNumbering),children:a.map((function(e,t){return(0,m.jsx)(k,{line:e,getLineProps:s,getTokenProps:i,classNames:w[t],showLineNumbers:A},t)}))})})}}),(0,m.jsxs)("div",{className:h.buttonGroup,children:[(Z.isEnabled||Z.isCodeScrollable)&&(0,m.jsx)(L,{className:h.codeButton,onClick:function(){return Z.toggle()},isEnabled:Z.isEnabled}),(0,m.jsx)(y,{className:h.codeButton,code:O})]})]})]})}var O=["children"];function A(e){var t=e.children,n=(0,a.Z)(e,O),o=(0,i.Z)(),r=function(e){return s.Children.toArray(e).some((function(e){return(0,s.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof r?w:p;return(0,m.jsx)(l,Object.assign({},n,{children:r}),String(o))}},57507:(e,t,n)=>{n.d(t,{Z:()=>o});n(50959);var a=n(97621),s=n(28900),i=n(11527);function o(e){var t=e.href;if(!t)return(0,i.jsx)(a.Z,Object.assign({},e));var n={"github.com":"simple-icons:github","twitter.com":"logos:twitter"},o=Object.keys(n).find((function(e){return new RegExp("^https?://"+e).test(t)})),r=o?n[o]:null;return r?(0,i.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[r&&(0,i.jsx)(s.JO,{className:"a-icon",style:{alignSelf:"center"},icon:r,width:16,height:16}),(0,i.jsx)(a.Z,Object.assign({},e))]}):(0,i.jsx)(a.Z,Object.assign({},e))}},64625:(e,t,n)=>{n.d(t,{Z:()=>o});n(50959);var a=n(5341),s=n(97621),i=n(11527);function o(e){var t=e.permalink,n=e.title,o=e.subLabel,r=e.isNext;return(0,i.jsxs)(s.Z,{className:(0,a.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},79172:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(60045),s=n(50959),i=n(5341),o=n(17378),r=n(57100);const l={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",hr:"hr_UhE0",percent:"percent_H6RK"};var c=n(41475),d=n(50701),m=function(){var e=(0,s.useState)(0),t=e[0],n=e[1],a=(0,s.useRef)(null),i=(0,c.v)({container:a}).scrollYProgress;return(0,s.useLayoutEffect)((function(){a.current=document.getElementById("__blog-post-container")}),[]),(0,d.W)(i,"change",(function(e){n(e)})),{readPercent:(0,s.useMemo)((function(){return Math.round(100*t)}),[t])}},u=n(11527),g=["className"],h="table-of-contents__link toc-highlight",p="table-of-contents__link--active";function b(e){var t=e.className,n=(0,a.Z)(e,g),s=m().readPercent;return(0,u.jsxs)(o.E.div,{className:(0,i.Z)(l.tableOfContents,"thin-scrollbar",t),initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3},children:[(0,u.jsx)(r.Z,Object.assign({},n,{linkClassName:h,linkActiveClassName:p})),(0,u.jsx)("hr",{className:l.hr}),(0,u.jsxs)("span",{className:l.percent,children:[s+"%"," "]})]})}},70693:(e,t,n)=>{n.d(t,{Z:()=>r});n(50959);var a=n(5341),s=n(97621);const i={tag:"tag_b1dr",tagRegular:"tagRegular_t85v",tagWithCount:"tagWithCount_ZJSN"};var o=n(11527);function r(e){var t=e.permalink,n=e.label,r=e.count,l=e.className;return(0,o.jsxs)(s.Z,{href:t,className:(0,a.Z)(i.tag,r?i.tagWithCount:i.tagRegular,l),children:[n,r&&(0,o.jsx)("span",{children:r})]})}}}]);