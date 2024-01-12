"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[4368],{8893:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(959),i=t(5341),o=t(5152),r=t(6120),s=t(7502),l=t(4865);const c={backToTopButton:"backToTopButton_dPjc",backToTopButtonShow:"backToTopButtonShow_i9mq"};var d=t(1527);function u(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),i=t[0],o=t[1],r=(0,a.useRef)(!1),c=(0,s.Ct)(),d=c.startScroll,u=c.cancelScroll;return(0,s.RF)((function(e,t){var a=e.scrollY,i=null==t?void 0:t.scrollY;i&&(r.current?r.current=!1:a>=i?(u(),o(!1)):a<n?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,l.S)((function(e){e.location.hash&&(r.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,d.jsx)("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",r.k.common.backToTopButton,c.backToTopButton,n&&c.backToTopButtonShow),type:"button",onClick:t})}},1910:(e,n,t)=>{t.r(n),t.d(n,{default:()=>xe});var a=t(959),i=t(5341),o=t(559),r=t(6120),s=t(7005),l=t(8458),c=t(8893),d=t(7058),u=t(8903),m=t(5231),b=t(4079),h=t(1196),p=t(5152),x=t(1527);function v(e){return(0,x.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const f={collapseSidebarButton:"collapseSidebarButton_NtiL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_YcR0"};function j(e){var n=e.onClick;return(0,x.jsx)("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",f.collapseSidebarButton),onClick:n,children:(0,x.jsx)(v,{className:f.collapseSidebarButtonIcon})})}var g=t(7296),k=t(7502),_=t(45),C=t(9209),S=Symbol("EmptyContext"),I=a.createContext(S);function N(e){var n=e.children,t=(0,a.useState)(null),i=t[0],o=t[1],r=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:o}}),[i]);return(0,x.jsx)(I.Provider,{value:r,children:n})}var T=t(9426),Z=t(7059),B=t(1502),L=t(2432),y=["item","onItemClick","activePath","level","index"];function A(e){var n=e.collapsed,t=e.categoryLabel,a=e.onClick;return(0,x.jsx)("button",{"aria-label":n?(0,p.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,p.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){var n=e.item,t=e.onItemClick,o=e.activePath,l=e.level,c=e.index,d=(0,_.Z)(e,y),u=n.items,m=n.label,h=n.collapsible,p=n.className,v=n.href,f=(0,b.L)().docs.sidebar.autoCollapseCategories,j=function(e){var n=(0,L.Z)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!n&&e.collapsible?(0,s.LM)(e):void 0}),[e,n])}(n),g=(0,s._F)(n,o),k=(0,Z.Mg)(v,o),N=(0,T.u)({initialState:function(){return!!h&&(!g&&n.collapsed)}}),w=N.collapsed,E=N.setCollapsed,H=function(){var e=(0,a.useContext)(I);if(e===S)throw new C.i6("DocSidebarItemsExpandedStateProvider");return e}(),M=H.expandedItem,P=H.setExpandedItem,R=function(e){void 0===e&&(e=!w),P(e?null:c),E(e)};return function(e){var n=e.isActive,t=e.collapsed,i=e.updateCollapsed,o=(0,C.D9)(n);(0,a.useEffect)((function(){n&&!o&&t&&i(!1)}),[n,o,t,i])}({isActive:g,collapsed:w,updateCollapsed:R}),(0,a.useEffect)((function(){h&&null!=M&&M!==c&&f&&E(!0)}),[h,M,c,E,f]),(0,x.jsxs)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":w},p),children:[(0,x.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,x.jsx)(B.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!v&&h,"menu__link--active":g}),onClick:h?function(e){null==t||t(n),v?R(!1):(e.preventDefault(),R())}:function(){null==t||t(n)},"aria-current":k?"page":void 0,"aria-expanded":h?!w:void 0,href:h?null!=j?j:"#":j},d,{children:m})),v&&h&&(0,x.jsx)(A,{collapsed:w,categoryLabel:m,onClick:function(e){e.preventDefault(),R()}})]}),(0,x.jsx)(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:w,children:(0,x.jsx)(z,{items:u,tabIndex:w?-1:0,onItemClick:t,activePath:o,level:l+1})})]})}var E=t(1791),H=t(2147);const M={menuExternalLink:"menuExternalLink_s9zg"};var P=["item","onItemClick","activePath","level","index"];function R(e){var n=e.item,t=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,_.Z)(e,P)),c=n.href,d=n.label,u=n.className,m=n.autoAddBaseUrl,b=(0,s._F)(n,a),h=(0,E.Z)(c);return(0,x.jsx)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,x.jsxs)(B.Z,Object.assign({className:(0,i.Z)("menu__link",!h&&M.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:c},h&&{onClick:t?function(){return t(n)}:void 0},l,{children:[d,!h&&(0,x.jsx)(H.Z,{})]}))},d)}const D={menuHtmlItem:"menuHtmlItem_eKNl"};function F(e){var n=e.item,t=e.level,a=e.index,o=n.value,s=n.defaultStyle,l=n.className;return(0,x.jsx)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(t),s&&[D.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},a)}var W=["item"];function O(e){var n=e.item,t=(0,_.Z)(e,W);switch(n.type){case"category":return(0,x.jsx)(w,Object.assign({item:n},t));case"html":return(0,x.jsx)(F,Object.assign({item:n},t));default:return(0,x.jsx)(R,Object.assign({item:n},t))}}var V=["items"];function Y(e){var n=e.items,t=(0,_.Z)(e,V),a=(0,s.f)(n,t.activePath);return(0,x.jsx)(N,{children:a.map((function(e,n){return(0,x.jsx)(O,Object.assign({item:e,index:n},t),n)}))})}const z=(0,a.memo)(Y),U={menu:"menu_FFDh",menuWithAnnouncementBar:"menuWithAnnouncementBar_K0BS"};function K(e){var n=e.path,t=e.sidebar,o=e.className,s=function(){var e=(0,g.nT)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,k.RF)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,x.jsx)("nav",{"aria-label":(0,p.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",U.menu,s&&U.menuWithAnnouncementBar,o),children:(0,x.jsx)("ul",{className:(0,i.Z)(r.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(z,{items:t,activePath:n,level:1})})})}const q="sidebar_yFBL",G="sidebarWithHideableNavbar_wIlP",J="sidebarHidden_HvSr",Q="sidebarLogo_XWTN";function X(e){var n=e.path,t=e.sidebar,a=e.onCollapse,o=e.isHidden,r=(0,b.L)(),s=r.navbar.hideOnScroll,l=r.docs.sidebar.hideable;return(0,x.jsxs)("div",{className:(0,i.Z)(q,s&&G,o&&J),children:[s&&(0,x.jsx)(h.Z,{tabIndex:-1,className:Q}),(0,x.jsx)(K,{path:n,sidebar:t}),l&&(0,x.jsx)(j,{onClick:a})]})}const $=a.memo(X);var ee=t(3529),ne=t(1349),te=function(e){var n=e.sidebar,t=e.path,a=(0,ne.e)();return(0,x.jsx)("ul",{className:(0,i.Z)(r.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(z,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ae(e){return(0,x.jsx)(ee.Zo,{component:te,props:e})}const ie=a.memo(ae);function oe(e){var n=(0,m.i)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)($,Object.assign({},e)),a&&(0,x.jsx)(ie,Object.assign({},e))]})}const re={expandButton:"expandButton_k_u3",expandButtonIcon:"expandButtonIcon_JyAQ"};function se(e){var n=e.toggleSidebar;return(0,x.jsx)("div",{className:re.expandButton,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n,children:(0,x.jsx)(v,{className:re.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_CpLD",docSidebarContainerHidden:"docSidebarContainerHidden_DR9Y",sidebarViewport:"sidebarViewport_vL50"};function ce(e){var n,t=e.children,i=(0,l.V)();return(0,x.jsx)(a.Fragment,{children:t},null!=(n=null==i?void 0:i.name)?n:"noSidebar")}function de(e){var n=e.sidebar,t=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,s=(0,u.TH)().pathname,l=(0,a.useState)(!1),c=l[0],m=l[1],b=(0,a.useCallback)((function(){c&&m(!1),!c&&(0,d.n)()&&m(!0),o((function(e){return!e}))}),[o,c]);return(0,x.jsx)("aside",{className:(0,i.Z)(r.k.docs.docSidebarContainer,le.docSidebarContainer,t&&le.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(le.docSidebarContainer)&&t&&m(!0)},children:(0,x.jsx)(ce,{children:(0,x.jsxs)("div",{className:(0,i.Z)(le.sidebarViewport,c&&le.sidebarViewportHidden),children:[(0,x.jsx)(oe,{sidebar:n,path:s,onCollapse:b,isHidden:c}),c&&(0,x.jsx)(se,{toggleSidebar:b})]})})})}const ue={docMainContainer:"docMainContainer_gY15",docMainContainerEnhanced:"docMainContainerEnhanced_hDb3",docItemWrapperEnhanced:"docItemWrapperEnhanced_Wanu"};function me(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,l.V)();return(0,x.jsx)("main",{className:(0,i.Z)(ue.docMainContainer,(n||!a)&&ue.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,n&&ue.docItemWrapperEnhanced),children:t})})}const be={docRoot:"docRoot_Dgjd",docsWrapper:"docsWrapper_d_Mm"};function he(e){var n=e.children,t=(0,l.V)(),i=(0,a.useState)(!1),o=i[0],r=i[1];return(0,x.jsxs)("div",{className:be.docsWrapper,children:[(0,x.jsx)(c.Z,{}),(0,x.jsxs)("div",{className:be.docRoot,children:[t&&(0,x.jsx)(de,{sidebar:t.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,x.jsx)(me,{hiddenSidebarContainer:o,children:n})]})]})}var pe=t(7351);function xe(e){var n=(0,s.SN)(e);if(!n)return(0,x.jsx)(pe.Z,{});var t=n.docElement,a=n.sidebarName,c=n.sidebarItems;return(0,x.jsx)(o.FG,{className:(0,i.Z)(r.k.page.docsDocPage),children:(0,x.jsx)(l.b,{name:a,items:c,children:(0,x.jsx)(he,{children:t})})})}},7351:(e,n,t)=>{t.d(n,{Z:()=>s});t(959);var a=t(5341),i=t(5152),o=t(3920),r=t(1527);function s(e){var n=e.className;return(0,r.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",n),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(o.Z,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);