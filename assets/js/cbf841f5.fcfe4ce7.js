"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3940],{73626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>h});var i=r(11527),s=r(56213);const n={slug:"2024-02-15-beeper",title:"Beeper - Sounds like a secuirty nightmare",authors:["hirusha"],tags:["security","privacy"]},a=void 0,o={permalink:"/blog/2024-02-15-beeper",editUrl:"https://github.com/hirusha-adi/hirusha/edit/main/blog/2024-02-15-beeper.md",source:"@site/blog/2024-02-15-beeper.md",title:"Beeper - Sounds like a secuirty nightmare",description:"3",date:"2024-02-15T00:00:00.000Z",formattedDate:"February 15, 2024",tags:[{label:"security",permalink:"/blog/tags/security"},{label:"privacy",permalink:"/blog/tags/privacy"}],readingTime:3.1666666666666665,hasTruncateMarker:!0,authors:[{name:"Hirusha Adikari",title:"Student interested in Tech",url:"https://github.com/hirusha-adi",imageURL:"https://avatars.githubusercontent.com/u/36286877?v=4",key:"hirusha"}],frontMatter:{slug:"2024-02-15-beeper",title:"Beeper - Sounds like a secuirty nightmare",authors:["hirusha"],tags:["security","privacy"]},unlisted:!1,prevItem:{title:"Windows 7 in 2024",permalink:"/blog/2024-04-03-windows-7-in-2024"},nextItem:{title:"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d",permalink:"/blog/2023-02-15-sri-lanka-rasitha-worm"}},l={authorsImageUrls:[void 0]},h=[{value:"What is Beeper?",id:"what-is-beeper",level:2},{value:"How Beeper Cloud works?",id:"how-beeper-cloud-works",level:2},{value:"Security Concerns",id:"security-concerns",level:2},{value:"Bridges",id:"bridges",level:3},{value:"Signal &amp; Whatsapp",id:"signal--whatsapp",level:3},{value:"Other chat platforms",id:"other-chat-platforms",level:3},{value:"Privacy Policy",id:"privacy-policy",level:3},{value:"There&#39;s Hope",id:"theres-hope",level:2},{value:"Finally",id:"finally",level:2},{value:"Alternatives for now",id:"alternatives-for-now",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"3",src:r(56326).Z+"",width:"1920",height:"1118"})}),"\n",(0,i.jsx)(t.admonition,{title:"NOTE",type:"warning",children:(0,i.jsx)(t.p,{children:"This is completely my personal opinion."})}),"\n",(0,i.jsxs)(t.p,{children:["I was trying to find a good client for WhatsApp for Linux, and that's when I came across ",(0,i.jsx)(t.a,{href:"https://www.beeper.com/",children:"Beeper (All your chats in one app. Yes, really.)"}),". However, it is still not released publicly, and you will have to join the waitlist to use it. After some digging around in the ",(0,i.jsx)(t.a,{href:"https://www.reddit.com/r/beeper/",children:"r/beeper"})," subreddit, I was able to find a working redeem key in this ",(0,i.jsx)(t.a,{href:"https://www.reddit.com/r/beeper/comments/18ep74x/beeper_cloud_referrals_thread/",children:"post"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"what-is-beeper",children:"What is Beeper?"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"2",src:r(58947).Z+"",width:"1027",height:"774"})}),"\n",(0,i.jsx)(t.p,{children:"This app allows you to combine all of your messaging apps into one place. You can log in to each and every platform provided by Beeper and manage all of your chats within one application easily. You can also use iMessage on Android (and even on Windows Computers) after some setup. I don't have any comments about it since I'm completely in the Android ecosystem."}),"\n",(0,i.jsx)(t.p,{children:"Watch this video to understand how the iMessage thing works:"}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/S24TDRxEna4?si=lkXB06hKlz4M25qJ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(t.p,{children:"According to this video, it seems pretty reliable and secure as no intermediate relay is being used for iMessage by Beeper Mini."}),"\n",(0,i.jsx)(t.p,{children:"For me, what's interesting in it is combining all of my third-party messaging apps and using all of them in one application."}),"\n",(0,i.jsx)(t.h2,{id:"how-beeper-cloud-works",children:"How Beeper Cloud works?"}),"\n",(0,i.jsx)(t.p,{children:'From this section onwards, I\'ll be referring to "Beeper Cloud" when I say "Beeper".'}),"\n",(0,i.jsxs)(t.p,{children:["It's fairly simple. We have the proprietary client application (I guess it's fine) and an ",(0,i.jsx)(t.a,{href:"https://github.com/beeper",children:"open-source backend"}),'. Beeper is built upon Matrix, Matrix Bridges to be specific. "Bridges allow you to connect Matrix to a third-party platform and interact seamlessly" (',(0,i.jsx)(t.a,{href:"https://matrix.org/ecosystem/bridges/",children:"Click here"})," to learn more). Beeper basically helps you to easily use these community-hosted matrix bridges and the matrix bridges maintained by Beeper themselves using their proprietary client application."]}),"\n",(0,i.jsx)(t.h2,{id:"security-concerns",children:"Security Concerns"}),"\n",(0,i.jsx)(t.h3,{id:"bridges",children:"Bridges"}),"\n",(0,i.jsxs)(t.p,{children:['"The bridge can optionally encrypt messages between Matrix users and the bridge to hide messages from the homeserver." - Source: ',(0,i.jsx)(t.a,{href:"https://docs.mau.fi/bridges/general/end-to-bridge-encryption.html",children:"Official mautrix-bridges documentation"})]}),"\n",(0,i.jsx)(t.p,{children:"Matrix servers are decentralized and mostly anonymous, so, even if they wanted to grab your data, they'd have a hard time doing so."}),"\n",(0,i.jsxs)(t.p,{children:["But of course, you can ",(0,i.jsx)(t.a,{href:"https://github.com/beeper/bridge-manager",children:"self-host it"})," if you do not trust them with your data. It's well-documented and it should be fairly easy."]}),"\n",(0,i.jsxs)(t.p,{children:["\"for complete control over your data on Beeper, you always have the option of self hosting the 'bridge' component on your own computer or server\" - by ",(0,i.jsx)(t.a,{href:"https://www.reddit.com/r/beeper/comments/14nmt5c/data_security/",children:"the CEO of Beeper"})]}),"\n",(0,i.jsx)(t.h3,{id:"signal--whatsapp",children:"Signal & Whatsapp"}),"\n",(0,i.jsx)(t.p,{children:"Signal is possibly one of the most secure messengers out there; everything is End-to-End Encrypted (E2EE), and the messages aren't stored anywhere except on your device, locally. Only you and your message recipient can see the message."}),"\n",(0,i.jsx)(t.p,{children:"Beeper introduces an additional layer of riskiness."}),"\n",(0,i.jsxs)(t.p,{children:['"For example, if you send a message from Beeper to a friend on WhatsApp, the message is encrypted on your Beeper Cloud client, sent to the Beeper Cloud web service, which decrypts and re-encrypts the message with WhatsApp\'s proprietary encryption protocol." - Source: ',(0,i.jsx)(t.a,{href:"https://www.beeper.com/faq#how-does-beeper-cloud-connect-to-encrypted-chat-networks-like-imessage-signal-whatsapp",children:"FAQ Page"}),":"]}),"\n",(0,i.jsx)(t.p,{children:'Not only are your messages being decrypted by Beeper and then re-encrypted, but a copy of messages is also stored by Beeper to provide a chat history, which is "encrypted".'}),"\n",(0,i.jsxs)(t.p,{children:['"Beeper Cloud backs up an encrypted copy of all your Beeper Cloud chat history on Beeper servers. This allows you to install Beeper Cloud on a new device and view your entire past chat history." - Source: ',(0,i.jsx)(t.a,{href:"https://www.beeper.com/faq#how-does-beeper-cloud-keep-my-data-safe",children:"FAQ Page"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"1",src:r(41419).Z+"",width:"597",height:"369"})}),"\n",(0,i.jsx)(t.p,{children:"This literally destroys the main security and privacy-related features of Signal. Not only are they being stored online by a third party, but the messages will also be visible in clear text during the decrypting and re-encrypting process. It only takes one single service to be compromised, for the attackers to easily monitor all of your activity in all of these platforms easily."}),"\n",(0,i.jsx)(t.p,{children:"This destroys the whole purpose of E2EE."}),"\n",(0,i.jsx)(t.p,{children:"It's the same story for WhatsApp as well."}),"\n",(0,i.jsx)(t.p,{children:"In the worst-case scenario, they are keeping a plaintext copy of our conversations. They don't say that they don't do it. Even if they have stated it somewhere, I was not able to find it."}),"\n",(0,i.jsx)(t.h3,{id:"other-chat-platforms",children:"Other chat platforms"}),"\n",(0,i.jsx)(t.p,{children:"Instagram chats and all the other chat platforms available here are not encrypted. For your privacy, stay away from these chat platforms even if you are not using Beeper."}),"\n",(0,i.jsx)(t.h3,{id:"privacy-policy",children:"Privacy Policy"}),"\n",(0,i.jsx)(t.p,{children:"Their privacy policy is much less worse, even than that of chat platforms provided by them. lol."}),"\n",(0,i.jsx)(t.h2,{id:"theres-hope",children:"There's Hope"}),"\n",(0,i.jsxs)(t.p,{children:['"There\u2019s also hope for the future: Beeper mentions that new EU legislation will compel companies like Apple and Meta to create interoperable end-to-end-encrypted APIs" - Source: ',(0,i.jsx)(t.a,{href:"https://lifehacker.com/beeper-isnt-a-safe-solution-for-imessaging-on-android-1850734981",children:"Lifehacker.com Article"})]}),"\n",(0,i.jsx)(t.p,{children:'Hopefully, if this happens, and if Beeper introduces a 100% secure model to work with these message platforms without requiring to "re-encrypt" the messages, you should definitely ditch all the apps and use this instead, but for now, wait.'}),"\n",(0,i.jsx)(t.h2,{id:"finally",children:"Finally"}),"\n",(0,i.jsx)(t.p,{children:"The real question arises, how and why can this be free to use?"}),"\n",(0,i.jsx)(t.p,{children:"For now, stay away from this!"}),"\n",(0,i.jsxs)(t.p,{children:["And hopefully soon enough this will come to true: ",(0,i.jsx)(t.a,{href:"https://www.wired.com/story/whatsapp-interoperability-messaging/",children:"WhatsApp Chats Will Soon Work With Other Encrypted Messaging Apps"})]}),"\n",(0,i.jsx)(t.h2,{id:"alternatives-for-now",children:"Alternatives for now"}),"\n",(0,i.jsx)(t.p,{children:'I tried it by linking a couple of my services, and the experience was extremely smooth and easy. I unlinked everything due to security concerns, but once you experience the "everything in one app," there\'s no going back.'}),"\n",(0,i.jsxs)(t.p,{children:["For now, the only secure alternative I was able to find was ",(0,i.jsx)(t.a,{href:"https://getstation.com/",children:"Station"}),". It's basically like a web browser but built specifically for this task and it's completely open-source. This has no server-side component and is far behind the experience with Beeper, but it works, and it's better than manually opening an additional 3-10 tabs in your web browser."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},41419:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/2024-02-15-beeper-img1-57780daa0302cf1c51631ce5ea6601c4.png"},58947:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/2024-02-15-beeper-img2-a4e238b149eb8afa0ca434bd0b6253d9.png"},56326:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/2024-02-15-beeper-img3-509b0503dbd84a2ed55b77372f68fece.png"},56213:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var i=r(50959);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);