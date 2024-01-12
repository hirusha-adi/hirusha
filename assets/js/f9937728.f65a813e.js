"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[9623],{969:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=o(1527),t=o(6213);const s={title:"Genode Free Proxies API Wrapper"},i=void 0,p={id:"projects/geonode_free_proxies_api_wrapper",title:"Genode Free Proxies API Wrapper",description:"API wrapper for https://geonode.com/free-proxy-list",source:"@site/docs/projects/geonode_free_proxies_api_wrapper.md",sourceDirName:"projects",slug:"/projects/geonode_free_proxies_api_wrapper",permalink:"/docs/projects/geonode_free_proxies_api_wrapper",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Genode Free Proxies API Wrapper"},sidebar:"projects",previous:{title:"Usage",permalink:"/docs/projects/data_recovery/usage"},next:{title:"GifGang",permalink:"/docs/projects/gifgang/"}},a={},c=[{value:"Usage",id:"usage",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["API wrapper for ",(0,n.jsx)(r.a,{href:"https://geonode.com/free-proxy-list",children:"https://geonode.com/free-proxy-list"})]}),"\n",(0,n.jsxs)(r.p,{children:["Scrape proxies easily with a basic understanding of Python 3 (knowledge of ",(0,n.jsx)(r.code,{children:"for"})," loops is sufficient to use this API wrapper). This wrapper facilitates the scraping of the Genode Free Proxies API and returns the results."]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.p,{children:"Use the wrapper in your Python script:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"import geonode\r\n\r\n# Initialize the Proxylist object\r\nprox = geonode.Proxylist()\r\n\r\n# Get a list of proxies\r\nproxies = prox.get_proxies_only()\r\n\r\n# Print the obtained proxies\r\nfor proxy in proxies:\r\n    print(proxy)\n"})}),"\n",(0,n.jsx)(r.p,{children:"Ensure that you have an active internet connection while using this wrapper, as it fetches data from an online API. A"})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6213:(e,r,o)=>{o.d(r,{Z:()=>p,a:()=>i});var n=o(959);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);