"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[8293],{20136:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(11527),t=s(56213);const r={slug:"2023-02-15-sri-lanka-rasitha-worm",title:"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d",authors:["hirusha"],tags:["hacking","windows","malware"]},a=void 0,o={permalink:"/blog/2023-02-15-sri-lanka-rasitha-worm",editUrl:"https://github.com/hirusha-adi/hirusha/edit/main/blog/2023-02-15-sri-lanka-rasitha-worm.md",source:"@site/blog/2023-02-15-sri-lanka-rasitha-worm.md",title:"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d",description:"The Rasith.A worm propagates through removable devices. When an infected device is connected to a computer, the malware\u2019s hidden files execute without the user\u2019s knowledge or consent. The worm is self-replicating and steals sensitive system information, thereby continuing its spread. As a standalone malware program, a computer worm seeks to spread to other computers by self-replication.",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"hacking",permalink:"/blog/tags/hacking"},{label:"windows",permalink:"/blog/tags/windows"},{label:"malware",permalink:"/blog/tags/malware"}],readingTime:4.196666666666666,hasTruncateMarker:!0,authors:[{name:"Hirusha Adikari",title:"Student interested in Tech",url:"https://github.com/hirusha-adi",imageURL:"https://avatars.githubusercontent.com/u/36286877?v=4",key:"hirusha"}],frontMatter:{slug:"2023-02-15-sri-lanka-rasitha-worm",title:"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d",authors:["hirusha"],tags:["hacking","windows","malware"]},unlisted:!1,prevItem:{title:"Beeper - Sounds like a secuirty nightmare",permalink:"/blog/2024-02-15-beeper"},nextItem:{title:"SNI Spoofing Analysis",permalink:"/blog/2022-12-26-tcp-over-ssl-tunnel-sni-spoofing"}},l={authorsImageUrls:[void 0]},d=[];function c(e){const n={a:"a",code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Rasith.A worm propagates through removable devices. When an infected device is connected to a computer, the malware\u2019s hidden files execute without the user\u2019s knowledge or consent. The worm is self-replicating and steals sensitive system information, thereby continuing its spread. As a standalone malware program, a computer worm seeks to spread to other computers by self-replication."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"( Please note that the \u201cWindows Error\u201d window image provided earlier is no longer functional and no longer appears due to compatibility issues with Windows 10 and 11. However, the worm\u2019s ability to spread through removable media drives still persists in Windows 10, but not in Windows 11. It is worth noting that many users may not even notice any changes in their removable media drive folders once it is infected. )"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Regrettably, the Rasith.A worm has become a common and popular malware variant, with a significant impact on the government office computers in Sri Lanka. The worm shares similarities with the shortcut virus, which has also been widespread in Sri Lanka."}),"\n",(0,i.jsx)(n.p,{children:"The Rasith.A worm exclusively targets Windows-based computers."}),"\n",(0,i.jsx)(n.p,{children:"A hidden file named kabe.exe is responsible for infecting a computer from within a pen drive. In some cases, all the folders on the device may be hidden, with malicious executables posing as normal Windows folders with a changed custom file icon. When the user attempts to open one of these folders, the file executes, and the folder appears to open as usual. This behavior is reminiscent of the shortcut virus."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With \u201cHide extensions for known filetypes\u201d enabled"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/1000/1*erAQl8aYa0ShGyQIyB54EQ.png",alt:"img1"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With \u201cHide extensions for known filetypes\u201d disabled"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/1000/1*yLwlMNn3yWJB0iZzuFoWJA.png",alt:"img2"})}),"\n",(0,i.jsx)(n.p,{children:"NOTE: To see all the hidden files, run this command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"attrib -h -r -s /s /d *.*\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Upon executing, the Rasith.A worm generates an executable file called ",(0,i.jsx)(n.code,{children:"msfold.exe"})," at ",(0,i.jsx)(n.code,{children:"C:\\Users\\admin\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\msfold.exe"}),". Once this file runs for the first time, it creates a copy of itself at ",(0,i.jsx)(n.code,{children:"C:\\Users\\admin\\AppData\\Local\\Temp\\explorer.exe"}),", giving itself the same name as a legitimate system process (explorer.exe) and blending in with other processes in the Task Manager."]}),"\n",(0,i.jsxs)(n.p,{children:["The worm also creates two superfluous temporary files at ",(0,i.jsx)(n.code,{children:"C:\\Users\\admin\\AppData\\Local\\Temp"}),". Although these files appear to be useless, they are nonetheless generated every time the worm executes."]}),"\n",(0,i.jsx)(n.p,{children:"The Rasith.A worm creates or modifies an AUTORUN.INF file in the removable media drive. This file is hidden, and its contents are as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[AutoRun]\naction=Open\nshell\\execute=kabe.bat\nshell\\explore\\command=kabe.bat\nUSEAUTOPLAY=1\nshell\\Open\\command=kabe.bat\nshell\\Autorun\\command=kabe.bat\nshell\\Search\\command=kabe.bat\n"})}),"\n",(0,i.jsxs)(n.p,{children:["These settings indicate that the worm aims to run the kabe.bat file. When executed, the kabe.bat file launches ",(0,i.jsx)(n.code,{children:"kabe.exe"}),", which subsequently triggers the worm\u2019s full activation."]}),"\n",(0,i.jsxs)(n.p,{children:["The new ",(0,i.jsx)(n.code,{children:"explorer.exe"})," file generated by the Rasith.A worm temporarily creates a SQLite3 database file at ",(0,i.jsx)(n.code,{children:"C:\\Users\\admin\\AppData\\Local\\Temp\\sajith_and_rasini.db"}),". Another database file with the name ",(0,i.jsx)(n.code,{children:"i_love_you_rasini.db"})," can also be observed. It is unclear why these two files are generated, but they may be intended to mislead the user. However, given the nature of the worm, the purpose behind these files is uncertain."]}),"\n",(0,i.jsx)(n.p,{children:"To summarize the actions of the Rasith.A worm, the malware performs the following tasks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Drops the executable file immediately after the start"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Writes to the Start menu file"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Drops a file with too old compile date"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Starts itself from another location"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Executable content was dropped or overwritten"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The process creates files with names similar to system file names"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Creates executable files that already exist in Windows"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Creates files or folders in the user directory"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reads the computer name"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reads the machine GUID from the registry"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The process checks LSA protection"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create files in a temporary directory"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Checks supported languages"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Registry Access"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Path: "\\REGISTRY\\MACHINE\\SYSTEM\\CONTROLSET001\\CONTROL\\COMPUTERNAME\\ACTIVECOMPUTERNAME", Key: "COMPUTERNAME"\nPath: "\\REGISTRY\\MACHINE\\SOFTWARE\\MICROSOFT\\CRYPTOGRAPHY", Key: "MACHINEGUID"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reads Configuration Files"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'read file "C:\\Users\\desktop.ini"\nread file "C:\\Users\\%USERNAME%\\desktop.ini"\nread file "C:\\Users\\%USERNAME%\\Desktop\\desktop.ini"\nread file "%ALLUSERSPROFILE%\\Microsoft\\Windows\\Start Menu\\desktop.ini"\nread file "C:\\Users\\%USERNAME%\\Desktop\\desktop.ini"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creates files in windows directory"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'created file "C:\\Windows\\Globalization\\Sorting\\sortdefault.nls"\ncreated file "C:\\Windows\\system32\\rsaenh.dll"\ncreated file "C:\\Windows\\Fonts\\staticcache.dat"\ncreated file "C:\\Windows\\system32\\wshom.ocx"\ncreated file "C:\\Users\\%USERNAME%\\AppData\\Local\\Microsoft\\Windows\\Caches"\ncreated file "C:\\Users\\%USERNAME%\\AppData\\Local\\Microsoft\\Windows\\Caches\\cversions.1.db"\ncreated file "C:\\Users\\%USERNAME%\\AppData\\Local\\Microsoft\\Windows\\Caches\\{AFBF9F1A-8EE8\u20134C77-AF34-C647E37CA0D9}.1.ver0x0000000000000006.db"\ncreated file "%ALLUSERSPROFILE%\\Microsoft\\Windows\\Start Menu"\ncreated file "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\desktop.ini"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Drops executable files"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"explorer.exe" has type "PE32 executable (GUI) Intel 80386, for MS Windows"\n"msfold.exe" has type "PE32 executable (GUI) Intel 80386, for MS Windows"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Potential URL found in binary/memory"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Email - allosfix@hotmail.com\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s a professional version of the text you provided:"}),"\n",(0,i.jsxs)(n.p,{children:["The Rasith.A worm is associated with the email address ",(0,i.jsx)(n.code,{children:"allosfix@hotmail.com"}),". The malware was originally developed using VB 6, an older programming language, and was detected by antivirus software at the time of its initial release. However, it appears to have evaded detection in recent years for unknown reasons."]}),"\n",(0,i.jsx)(n.p,{children:"To remove the Rasith.A worm from your computer, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restart your computer in safe mode"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Locate the following files and delete them:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"C:\\Users\\admin\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\msfold.exe"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"C:\\Users\\admin\\AppData\\Local\\Temp\\sajith_and_rasini.db"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"C:\\Users\\admin\\AppData\\Local\\Temp\\i_love_you_rasini.db"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Upon decompiling the Rasith.A worm with ",(0,i.jsx)(n.a,{href:"https://www.vb-decompiler.org/download.htm",children:"VB Decompiler Lite v12"}),", it was discovered that the file is actually named \u201cK Abe\u201d, rather than \u201ckabe\u201d as initially believed. The naming convention, coupled with the creation of the ",(0,i.jsx)(n.code,{children:".db"})," files with names such as ",(0,i.jsx)(n.code,{children:"sajith_and_rasini.db"})," and ",(0,i.jsx)(n.code,{children:"i_love_you_rasini.db"}),", suggests a Sri Lankan origin for the malware creator. However, it is important to note that definitive conclusions about the creator\u2019s nationality cannot be drawn with certainty when analyzing malware."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["its called ",(0,i.jsx)(n.code,{children:"K Abe"})," and not ",(0,i.jsx)(n.code,{children:"kabe"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/1000/1*0N9yAbBkNJsvs3StvGsZuA.png",alt:"img69"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The form that you get promptet with, made with Visual Basics 6 (this is what you got prompted with, this doesnt work anymore)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/1000/1*0jwSB6ZsTf9f1N8afkmWjw.png",alt:"img67"})}),"\n",(0,i.jsx)(n.p,{children:"It is notable that the attacker is only asking for a ransom of $4, which is a relatively small amount. This could be an indication that the attacker is not particularly skilled or motivated, or that they are specifically targeting low-value targets, or maybe he\u2019s from a country where 4$ is a huge amount. Alternatively, it could be a deliberate attempt to avoid attracting too much attention or to make the ransom demand more likely to be paid. Nonetheless, regardless of the amount requested, it is important to never pay a ransom to attackers, as it encourages their criminal activities and does not guarantee that access to the infected system will be restored."}),"\n",(0,i.jsx)(n.p,{children:"The decompiled file project information reveals the following details:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Type=Exe\nReference=*\\G{00020430-0000-0000-C000-000000000046}#2.0#0#..\\..\\..\\..\\WINDOWS\\SYSTEM32\\STDOLE2.TLB#OLE Automation\nForm=Form1.frm\nModule=Module1; Module1.bas\nClass=clsMD5; clsMD5.cls\nForm=frm_lock.frm\nModule=Module2; Module2.bas\nStartup="Form1"\nIconForm="Form1"\nHelpFile=""\nExeName32="sajith.exe"\nName="Project1"\nTitle="sajith"\nVersionCompanyName="Folders"\nMajorVer=1\nMinorVer=00\nRevisionVer=0\nCommand32 = ""\nHelpContextID = "0"\nCompatibleMode = "0"\nAutoIncrementVer = 0\nServerSupportFiles = 0\nCompilationType = 0\nOptimizationType = 0\nFavorPentiumPro(tm) = 0\nCodeViewDebugInfo = 0\nNoAliasing = 0\nBoundsCheck = 0\nOverflowCheck = -1\nFlPointCheck = 0\nFDIVCheck = 0\nUnroundedFP = 0\nStartMode = 0\nUnattended = 0\nRetained = 0\nThreadPerObject = 0\nMaxNumberOfThreads = 1\n\n[MS Transaction Server]\nAutoRefresh = 1\n\n[VB Decompiler]\nBuild = 12.0.8439.29532\nDate = 2/15/2023\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Additional images of infected computers:"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/1000/1*BFP9rALVsVq-Y1uH2nYgOQ.png",alt:"img71"}),"\n",(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/1000/1*NpCwcT271tymbu8QUz5E_g.jpeg",alt:"img72"})]}),"\n",(0,i.jsx)(n.p,{children:"Upon investigation, it is evident that the malware attempts to access the IPv4 address of 20.99.184.37, which is owned by Microsoft. This suggests that the attacker utilized a Microsoft Azure server as a command and control center to manage the worm and collect the $4 ransom. Further details regarding the IP address can be found at here. It is worth noting that Microsoft has already taken this down."}),"\n",(0,i.jsx)(n.p,{children:"As this is an older program, its functionality may not work as intended by the attacker on modern computers and newer operating systems. However, despite any limitations, the program is designed to continue running and spreading."}),"\n",(0,i.jsx)(n.p,{children:"Sources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://any.run/report/260d745e60019fb56f6d04be30285efe25db08d2dd64acefe1afe092e5f5b46f/cde60de9-16a1-4b3f-b37f-3d8d5f661573",children:"any.run report"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://app.any.run/tasks/cde60de9-16a1-4b3f-b37f-3d8d5f661573/",children:"any.run analysis"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.virustotal.com/gui/file/260d745e60019fb56f6d04be30285efe25db08d2dd64acefe1afe092e5f5b46f/detection",children:"VirusTotal analysis"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.virustotal.com/graph/260d745e60019fb56f6d04be30285efe25db08d2dd64acefe1afe092e5f5b46f",children:"VirusTotal Generated Graph"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/worm_rasith.a",children:"Trend Micro"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.hybrid-analysis.com/sample/31c425084a6b932b36b8b588888ca631c9f2fc50a89e880da748ac59325304f1/562467cf0e316d6b77fccf3f",children:"Hybrid Analysis"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://eset-info.canon-its.jp/files/user/html/info/virusinfo/list/vr_win32_rasith_a.html",children:"this Canon\u2019s website"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},56213:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(50959);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);