"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[5524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,h=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={slug:"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",title:"SNI Spoofing Analysis",authors:["hirusha"],tags:["python","network","hacking"]},i=void 0,s={permalink:"/blog/2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/blog/2022-12-26-sni-spoofing.md",source:"@site/blog/2022-12-26-sni-spoofing.md",title:"SNI Spoofing Analysis",description:"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks.",date:"2022-12-26T00:00:00.000Z",formattedDate:"December 26, 2022",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"network",permalink:"/blog/tags/network"},{label:"hacking",permalink:"/blog/tags/hacking"}],readingTime:9.885,hasTruncateMarker:!0,authors:[{name:"Hirusha Adikari",title:"Student interested in Tech",url:"https://github.com/hirusha-adi",imageURL:"https://avatars.githubusercontent.com/u/36286877?v=4",key:"hirusha"}],frontMatter:{slug:"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",title:"SNI Spoofing Analysis",authors:["hirusha"],tags:["python","network","hacking"]},prevItem:{title:"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d",permalink:"/blog/2023-02-15-sri-lanka-rasitha-worm"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks."))}m.isMDXComponent=!0}}]);