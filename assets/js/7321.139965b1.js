(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[7321],{5612:(e,n,t)=>{"use strict";t.d(n,{Z:()=>H});var r=t(959),s=t(1527);function i(e){var n,t=function(e){var n=r.Children.toArray(e),t=n.find((function(e){return r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),i=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:i.length>0?(0,s.jsx)(s.Fragment,{children:i}):null}}(e.children),i=t.mdxAdmonitionTitle,a=t.rest,c=null!=(n=e.title)?n:i;return Object.assign({},e,c&&{title:c},{children:a})}var a=t(5341),c=t(9342),o=t(1412);const l={admonition:"admonition_kr2c",admonitionHeading:"admonitionHeading_bxTh",admonitionIcon:"admonitionIcon_y2bu",admonitionContent:"admonitionContent_QWhA"};function u(e){var n=e.type,t=e.className,r=e.children;return(0,s.jsx)("div",{className:(0,a.Z)(o.k.common.admonition,o.k.common.admonitionType(n),l.admonition,t),children:r})}function d(e){var n=e.icon,t=e.title;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function f(e){var n=e.children;return n?(0,s.jsx)("div",{className:l.admonitionContent,children:n}):null}function m(e){var n=e.type,t=e.icon,r=e.title,i=e.children,a=e.className;return(0,s.jsxs)(u,{type:n,className:a,children:[(0,s.jsx)(d,{title:r,icon:t}),(0,s.jsx)(f,{children:i})]})}function h(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var v={icon:(0,s.jsx)(h,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,s.jsx)(m,Object.assign({},v,e,{className:(0,a.Z)("alert alert--secondary",e.className),children:e.children}))}function g(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var p={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,s.jsx)(m,Object.assign({},p,e,{className:(0,a.Z)("alert alert--success",e.className),children:e.children}))}function x(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var y={icon:(0,s.jsx)(x,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function O(e){return(0,s.jsx)(m,Object.assign({},y,e,{className:(0,a.Z)("alert alert--info",e.className),children:e.children}))}function w(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var N={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var Z={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var k={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var E={note:j,tip:b,info:O,warning:function(e){return(0,s.jsx)(m,Object.assign({},N,e,{className:(0,a.Z)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,s.jsx)(m,Object.assign({},Z,e,{className:(0,a.Z)("alert alert--danger",e.className),children:e.children}))}},z={secondary:function(e){return(0,s.jsx)(j,Object.assign({title:"secondary"},e))},important:function(e){return(0,s.jsx)(O,Object.assign({title:"important"},e))},success:function(e){return(0,s.jsx)(b,Object.assign({title:"success"},e))},caution:function(e){return(0,s.jsx)(m,Object.assign({},k,e,{className:(0,a.Z)("alert alert--warning",e.className),children:e.children}))}};const M=Object.assign({},E,z);function H(e){var n,t=i(e),r=(n=t.type,M[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),M.info));return(0,s.jsx)(r,Object.assign({},t))}},56:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});t(959);var r=t(1527);function s(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}},3016:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});t(959);var r=t(1527);function s(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}},8303:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});t(959);var r=t(1527);function s(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}},8270:(e,n,t)=>{"use strict";t.d(n,{Z:()=>H});var r=t(959),s=t(6213),i=t(38),a=t(5776),c=t(1527);function o(e){return(0,c.jsx)("code",Object.assign({},e))}var l=t(7507);var u=t(8863),d=t(5341),f=t(45),m=t(7362),h=t(4342);const v={details:"details_MWPH",isBrowser:"isBrowser_gOsG",collapsibleContent:"collapsibleContent_R17e"};var j=["summary","children"];function g(e){return!!e&&("SUMMARY"===e.tagName||g(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function b(e){var n=e.summary,t=e.children,s=(0,f.Z)(e,j),i=(0,m.Z)(),a=(0,r.useRef)(null),o=(0,h.u)({initialState:!s.open}),l=o.collapsed,u=o.setCollapsed,b=(0,r.useState)(s.open),x=b[0],y=b[1],O=r.isValidElement(n)?n:(0,c.jsx)("summary",{children:null!=n?n:"Details"});return(0,c.jsxs)("details",Object.assign({},s,{ref:a,open:x,"data-collapsed":l,className:(0,d.Z)(v.details,i&&v.isBrowser,s.className),onMouseDown:function(e){g(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;g(n)&&p(n,a.current)&&(e.preventDefault(),l?(u(!1),y(!0)):u(!0))},children:[O,(0,c.jsx)(h.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),y(!e)},children:(0,c.jsx)("div",{className:v.collapsibleContent,children:t})})]}))}const x={details:"details_fvjc"};var y="alert alert--info";function O(e){var n=Object.assign({},((0,u.Z)(e),e));return(0,c.jsx)(b,Object.assign({},n,{className:(0,d.Z)(y,x.details,n.className)}))}function w(e){var n=r.Children.toArray(e.children),t=n.find((function(e){return r.isValidElement(e)&&"summary"===e.type})),s=(0,c.jsx)(c.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,c.jsx)(O,Object.assign({},e,{summary:t,children:s}))}var N=t(7741);function C(e){return(0,c.jsx)(N.Z,Object.assign({},e))}const Z={containsTaskList:"containsTaskList_eTkw"};function k(e){if(void 0!==e)return(0,d.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&Z.containsTaskList)}const E={img:"img_KnJ7"};var z=t(5612);const M={Head:i.Z,details:w,Details:w,code:function(e){return function(e){return void 0!==e.children&&r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,c.jsx)(o,Object.assign({},e)):(0,c.jsx)(a.Z,Object.assign({},e))},a:l.Z,pre:function(e){return(0,c.jsx)(c.Fragment,{children:e.children})},ul:function(e){return(0,c.jsx)("ul",Object.assign({},e,{className:k(e.className)}))},img:function(e){return(0,c.jsx)("img",Object.assign({loading:"lazy"},e,{className:(n=e.className,(0,d.Z)(n,E.img))}));var n},h1:function(e){return(0,c.jsx)(C,Object.assign({as:"h1"},e))},h2:function(e){return(0,c.jsx)(C,Object.assign({as:"h2"},e))},h3:function(e){return(0,c.jsx)(C,Object.assign({as:"h3"},e))},h4:function(e){return(0,c.jsx)(C,Object.assign({as:"h4"},e))},h5:function(e){return(0,c.jsx)(C,Object.assign({as:"h5"},e))},h6:function(e){return(0,c.jsx)(C,Object.assign({as:"h6"},e))},admonition:z.Z,mermaid:function(){return null}};function H(e){var n=e.children;return(0,c.jsx)(s.Z,{components:M,children:n})}},112:(e,n,t)=>{"use strict";t.d(n,{F:()=>c});var r=t(959),s=t(2130),i={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,n){var t=(0,r.useState)(),a=t[0],c=t[1],o=(0,r.useCallback)((function(){var n;c(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,r.useEffect)((function(){o()}),[o]),function(e,n,t){void 0===t&&(t=i);var a=(0,s.zX)(n),c=(0,s.Ql)(t);(0,r.useEffect)((function(){var n=new MutationObserver(a);return e&&n.observe(e,c),function(){return n.disconnect()}}),[e,a,c])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function c(){var e=(0,r.useState)(!1),n=e[0],t=e[1],s=(0,r.useState)(!1),i=s[0],c=s[1],o=(0,r.useRef)(null),l=(0,r.useCallback)((function(){var e=o.current.querySelector("code");n?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),t((function(e){return!e}))}),[o,n]),u=(0,r.useCallback)((function(){var e=o.current,n=e.scrollWidth>e.clientWidth||o.current.querySelector("code").hasAttribute("style");c(n)}),[o]);return a(o,u),(0,r.useEffect)((function(){u()}),[n,u]),(0,r.useEffect)((function(){return window.addEventListener("resize",u,{passive:!0}),function(){window.removeEventListener("resize",u)}}),[u]),{codeBlockRef:o,isEnabled:n,isCodeScrollable:i,toggle:l}}},1891:(e,n,t)=>{"use strict";t.d(n,{p:()=>i});var r=t(2452),s=t(2606);function i(){var e=(0,s.L)().prism,n=(0,r.I)().colorMode,t=e.theme,i=e.darkTheme||t;return"dark"===n?i:t}},50:(e,n,t)=>{"use strict";t.d(n,{QC:()=>j,Vo:()=>h,bc:()=>f,nZ:()=>v,nt:()=>m});var r=t(8875),s=t(7226),i=t.n(s),a=(0,r.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),c=(0,r.Z)(/\{([\d,-]+)\}/,{range:1}),o={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},l=Object.assign({},o,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),u=Object.keys(o);function d(e,n){var t=e.map((function(e){var t=l[e],r=t.start,s=t.end;return"(?:"+r+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function f(e){var n,t;return null!=(n=null==e||null==(t=e.match(a))?void 0:t.groups.title)?n:""}function m(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function h(e){var n=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==n?void 0:n.replace(/language-/,"")}function v(e,n){var t=e.replace(/\n$/,""),r=n.language,s=n.magicComments,a=n.metastring;if(a&&c.test(a)){var o=a.match(c).groups.range;if(0===s.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=s[0].className,f=i()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(f),code:t}}if(void 0===r)return{lineClassNames:{},code:t};for(var m=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return d(["js","jsBlock"],n);case"jsx":case"tsx":return d(["js","jsBlock","jsx"],n);case"html":return d(["js","jsBlock","html"],n);case"python":case"py":case"bash":return d(["bash"],n);case"markdown":case"md":return d(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return d(["tex"],n);case"lua":case"haskell":case"sql":return d(["lua"],n);case"wasm":return d(["wasm"],n);case"vb":case"vbnet":case"vba":case"visual-basic":return d(["vb","rem"],n);case"batch":return d(["rem"],n);case"basic":return d(["rem","f90"],n);case"fsharp":return d(["js","ml"],n);case"ocaml":case"sml":return d(["ml"],n);case"fortran":return d(["f90"],n);case"cobol":return d(["cobol"],n);default:return d(u,n)}}(r,s),h=t.split("\n"),v=Object.fromEntries(s.map((function(e){return[e.className,{start:0,range:""}]}))),j=Object.fromEntries(s.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),g=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),p=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),b=0;b<h.length;){var x=h[b].match(m);if(x){var y=x.slice(1).find((function(e){return void 0!==e}));j[y]?v[j[y]].range+=b+",":g[y]?v[g[y]].start=b:p[y]&&(v[p[y]].range+=v[p[y]].start+"-"+(b-1)+","),h.splice(b,1)}else b+=1}t=h.join("\n");var O={};return Object.entries(v).forEach((function(e){var n=e[0],t=e[1].range;i()(t).forEach((function(e){null!=O[e]||(O[e]=[]),O[e].push(n)}))})),{lineClassNames:O,code:t}}function j(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var r=e[0],s=e[1],i=n[r];i&&"string"==typeof s&&(t[i]=s)})),t}},7226:(e,n)=>{function t(e){let n,t=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))t.push(parseInt(r,10));else if(n=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,i]=n;if(r&&i){r=parseInt(r),i=parseInt(i);const e=r<i?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(i+=e);for(let n=r;n!==i;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},6213:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c,a:()=>a});var r=t(959);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}},9239:(e,n,t)=>{"use strict";function r(e,{target:n=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const t=document.createElement("textarea"),r=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const s=document.getSelection(),i=s.rangeCount>0&&s.getRangeAt(0);n.append(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}return t.remove(),i&&(s.removeAllRanges(),s.addRange(i)),r&&r.focus(),a}t.d(n,{Z:()=>r})}}]);