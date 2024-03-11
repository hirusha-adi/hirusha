"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2024-02-15-beeper","metadata":{"permalink":"/blog/2024-02-15-beeper","editUrl":"https://github.com/hirusha-adi/hirusha/edit/main/blog/2024-02-15-beeper.md","source":"@site/blog/2024-02-15-beeper.md","title":"Beeper - Sounds like a secuirty nightmare","description":"3","date":"2024-02-15T00:00:00.000Z","formattedDate":"February 15, 2024","tags":[{"label":"security","permalink":"/blog/tags/security"},{"label":"privacy","permalink":"/blog/tags/privacy"}],"readingTime":3.1666666666666665,"hasTruncateMarker":true,"authors":[{"name":"Hirusha Adikari","title":"Student interested in Tech","url":"https://github.com/hirusha-adi","imageURL":"https://avatars.githubusercontent.com/u/36286877?v=4","key":"hirusha"}],"frontMatter":{"slug":"2024-02-15-beeper","title":"Beeper - Sounds like a secuirty nightmare","authors":["hirusha"],"tags":["security","privacy"]},"unlisted":false,"nextItem":{"title":"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d","permalink":"/blog/2023-02-15-sri-lanka-rasitha-worm"}},"content":"![3](./media/2024-02-15-beeper-img3.png)\\n\\n\x3c!--truncate--\x3e\\n\\n:::warning NOTE\\n\\nThis is completely my personal opinion.\\n\\n:::\\n\\nI was trying to find a good client for WhatsApp for Linux, and that\'s when I came across [Beeper (All your chats in one app. Yes, really.)](https://www.beeper.com/). However, it is still not released publicly, and you will have to join the waitlist to use it. After some digging around in the [r/beeper](https://www.reddit.com/r/beeper/) subreddit, I was able to find a working redeem key in this [post](https://www.reddit.com/r/beeper/comments/18ep74x/beeper_cloud_referrals_thread/).\\n\\n## What is Beeper?\\n\\n![2](./media/2024-02-15-beeper-img2.png)\\n\\nThis app allows you to combine all of your messaging apps into one place. You can log in to each and every platform provided by Beeper and manage all of your chats within one application easily. You can also use iMessage on Android (and even on Windows Computers) after some setup. I don\'t have any comments about it since I\'m completely in the Android ecosystem.\\n\\nWatch this video to understand how the iMessage thing works:\\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/S24TDRxEna4?si=lkXB06hKlz4M25qJ\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n\\nAccording to this video, it seems pretty reliable and secure as no intermediate relay is being used for iMessage by Beeper Mini.\\n\\nFor me, what\'s interesting in it is combining all of my third-party messaging apps and using all of them in one application.\\n\\n## How Beeper Cloud works?\\n\\nFrom this section onwards, I\'ll be referring to \\"Beeper Cloud\\" when I say \\"Beeper\\".\\n\\nIt\'s fairly simple. We have the proprietary client application (I guess it\'s fine) and an [open-source backend](https://github.com/beeper). Beeper is built upon Matrix, Matrix Bridges to be specific. \\"Bridges allow you to connect Matrix to a third-party platform and interact seamlessly\\" ([Click here](https://matrix.org/ecosystem/bridges/) to learn more). Beeper basically helps you to easily use these community-hosted matrix bridges and the matrix bridges maintained by Beeper themselves using their proprietary client application.\\n\\n## Security Concerns\\n\\n### Bridges\\n\\n\\"The bridge can optionally encrypt messages between Matrix users and the bridge to hide messages from the homeserver.\\" - Source: [Official mautrix-bridges documentation](https://docs.mau.fi/bridges/general/end-to-bridge-encryption.html)\\n\\nMatrix servers are decentralized and mostly anonymous, so, even if they wanted to grab your data, they\'d have a hard time doing so.\\n\\nBut of course, you can [self-host it](https://github.com/beeper/bridge-manager) if you do not trust them with your data. It\'s well-documented and it should be fairly easy.\\n\\n\\"for complete control over your data on Beeper, you always have the option of self hosting the \'bridge\' component on your own computer or server\\" - by [the CEO of Beeper](https://www.reddit.com/r/beeper/comments/14nmt5c/data_security/) \\n\\n### Signal & Whatsapp\\n\\nSignal is possibly one of the most secure messengers out there; everything is End-to-End Encrypted (E2EE), and the messages aren\'t stored anywhere except on your device, locally. Only you and your message recipient can see the message.\\n\\nBeeper introduces an additional layer of riskiness.\\n\\n\\"For example, if you send a message from Beeper to a friend on WhatsApp, the message is encrypted on your Beeper Cloud client, sent to the Beeper Cloud web service, which decrypts and re-encrypts the message with WhatsApp\'s proprietary encryption protocol.\\" - Source: [FAQ Page](https://www.beeper.com/faq#how-does-beeper-cloud-connect-to-encrypted-chat-networks-like-imessage-signal-whatsapp):\\n\\nNot only are your messages being decrypted by Beeper and then re-encrypted, but a copy of messages is also stored by Beeper to provide a chat history, which is \\"encrypted\\".\\n\\n\\"Beeper Cloud backs up an encrypted copy of all your Beeper Cloud chat history on Beeper servers. This allows you to install Beeper Cloud on a new device and view your entire past chat history.\\" - Source: [FAQ Page](https://www.beeper.com/faq#how-does-beeper-cloud-keep-my-data-safe)\\n\\n![1](./media/2024-02-15-beeper-img1.png)\\n\\nThis literally destroys the main security and privacy-related features of Signal. Not only are they being stored online by a third party, but the messages will also be visible in clear text during the decrypting and re-encrypting process. It only takes one single service to be compromised, for the attackers to easily monitor all of your activity in all of these platforms easily.\\n\\nThis destroys the whole purpose of E2EE.\\n\\nIt\'s the same story for WhatsApp as well.\\n\\nIn the worst-case scenario, they are keeping a plaintext copy of our conversations. They don\'t say that they don\'t do it. Even if they have stated it somewhere, I was not able to find it.\\n\\n### Other chat platforms\\n\\nInstagram chats and all the other chat platforms available here are not encrypted. For your privacy, stay away from these chat platforms even if you are not using Beeper.\\n\\n### Privacy Policy\\n\\nTheir privacy policy is much less worse, even than that of chat platforms provided by them. lol.\\n\\n## There\'s Hope\\n\\n\\"There\u2019s also hope for the future: Beeper mentions that new EU legislation will compel companies like Apple and Meta to create interoperable end-to-end-encrypted APIs\\" - Source: [Lifehacker.com Article](https://lifehacker.com/beeper-isnt-a-safe-solution-for-imessaging-on-android-1850734981)\\n\\nHopefully, if this happens, and if Beeper introduces a 100% secure model to work with these message platforms without requiring to \\"re-encrypt\\" the messages, you should definitely ditch all the apps and use this instead, but for now, wait.\\n\\n## Finally\\n\\nThe real question arises, how and why can this be free to use?\\n\\nFor now, stay away from this!\\n\\nAnd hopefully soon enough this will come to true: [WhatsApp Chats Will Soon Work With Other Encrypted Messaging Apps](https://www.wired.com/story/whatsapp-interoperability-messaging/)\\n\\n## Alternatives for now\\n\\nI tried it by linking a couple of my services, and the experience was extremely smooth and easy. I unlinked everything due to security concerns, but once you experience the \\"everything in one app,\\" there\'s no going back.\\n\\nFor now, the only secure alternative I was able to find was [Station](https://getstation.com/). It\'s basically like a web browser but built specifically for this task and it\'s completely open-source. This has no server-side component and is far behind the experience with Beeper, but it works, and it\'s better than manually opening an additional 3-10 tabs in your web browser."},{"id":"2023-02-15-sri-lanka-rasitha-worm","metadata":{"permalink":"/blog/2023-02-15-sri-lanka-rasitha-worm","editUrl":"https://github.com/hirusha-adi/hirusha/edit/main/blog/2023-02-15-sri-lanka-rasitha-worm.md","source":"@site/blog/2023-02-15-sri-lanka-rasitha-worm.md","title":"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d","description":"The Rasith.A worm propagates through removable devices. When an infected device is connected to a computer, the malware\u2019s hidden files execute without the user\u2019s knowledge or consent. The worm is self-replicating and steals sensitive system information, thereby continuing its spread. As a standalone malware program, a computer worm seeks to spread to other computers by self-replication.","date":"2023-02-15T00:00:00.000Z","formattedDate":"February 15, 2023","tags":[{"label":"hacking","permalink":"/blog/tags/hacking"},{"label":"windows","permalink":"/blog/tags/windows"},{"label":"malware","permalink":"/blog/tags/malware"}],"readingTime":4.196666666666666,"hasTruncateMarker":true,"authors":[{"name":"Hirusha Adikari","title":"Student interested in Tech","url":"https://github.com/hirusha-adi","imageURL":"https://avatars.githubusercontent.com/u/36286877?v=4","key":"hirusha"}],"frontMatter":{"slug":"2023-02-15-sri-lanka-rasitha-worm","title":"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d","authors":["hirusha"],"tags":["hacking","windows","malware"]},"unlisted":false,"prevItem":{"title":"Beeper - Sounds like a secuirty nightmare","permalink":"/blog/2024-02-15-beeper"},"nextItem":{"title":"SNI Spoofing Analysis","permalink":"/blog/2022-12-26-tcp-over-ssl-tunnel-sni-spoofing"}},"content":"The Rasith.A worm propagates through removable devices. When an infected device is connected to a computer, the malware\u2019s hidden files execute without the user\u2019s knowledge or consent. The worm is self-replicating and steals sensitive system information, thereby continuing its spread. As a standalone malware program, a computer worm seeks to spread to other computers by self-replication.\\n\\n\x3c!--truncate--\x3e\\n\\n\\n- _( Please note that the \u201cWindows Error\u201d window image provided earlier is no longer functional and no longer appears due to compatibility issues with Windows 10 and 11. However, the worm\u2019s ability to spread through removable media drives still persists in Windows 10, but not in Windows 11. It is worth noting that many users may not even notice any changes in their removable media drive folders once it is infected. )_\\n\\nRegrettably, the Rasith.A worm has become a common and popular malware variant, with a significant impact on the government office computers in Sri Lanka. The worm shares similarities with the shortcut virus, which has also been widespread in Sri Lanka.\\n\\nThe Rasith.A worm exclusively targets Windows-based computers.\\n\\nA hidden file named kabe.exe is responsible for infecting a computer from within a pen drive. In some cases, all the folders on the device may be hidden, with malicious executables posing as normal Windows folders with a changed custom file icon. When the user attempts to open one of these folders, the file executes, and the folder appears to open as usual. This behavior is reminiscent of the shortcut virus.\\n\\n- With \u201cHide extensions for known filetypes\u201d enabled\\n\\n![img1](https://cdn-images-1.medium.com/max/1000/1*erAQl8aYa0ShGyQIyB54EQ.png)\\n\\n- With \u201cHide extensions for known filetypes\u201d disabled\\n\\n![img2](https://cdn-images-1.medium.com/max/1000/1*yLwlMNn3yWJB0iZzuFoWJA.png)\\n\\nNOTE: To see all the hidden files, run this command\\n\\n```\\nattrib -h -r -s /s /d *.*\\n```\\n\\nUpon executing, the Rasith.A worm generates an executable file called `msfold.exe` at `C:\\\\Users\\\\admin\\\\AppData\\\\Roaming\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\Startup\\\\msfold.exe`. Once this file runs for the first time, it creates a copy of itself at `C:\\\\Users\\\\admin\\\\AppData\\\\Local\\\\Temp\\\\explorer.exe`, giving itself the same name as a legitimate system process (explorer.exe) and blending in with other processes in the Task Manager.\\n\\nThe worm also creates two superfluous temporary files at `C:\\\\Users\\\\admin\\\\AppData\\\\Local\\\\Temp`. Although these files appear to be useless, they are nonetheless generated every time the worm executes.\\n\\nThe Rasith.A worm creates or modifies an AUTORUN.INF file in the removable media drive. This file is hidden, and its contents are as follows:\\n\\n```\\n[AutoRun]\\naction=Open\\nshell\\\\execute=kabe.bat\\nshell\\\\explore\\\\command=kabe.bat\\nUSEAUTOPLAY=1\\nshell\\\\Open\\\\command=kabe.bat\\nshell\\\\Autorun\\\\command=kabe.bat\\nshell\\\\Search\\\\command=kabe.bat\\n```\\n\\nThese settings indicate that the worm aims to run the kabe.bat file. When executed, the kabe.bat file launches `kabe.exe`, which subsequently triggers the worm\u2019s full activation.\\n\\nThe new `explorer.exe` file generated by the Rasith.A worm temporarily creates a SQLite3 database file at `C:\\\\Users\\\\admin\\\\AppData\\\\Local\\\\Temp\\\\sajith_and_rasini.db`. Another database file with the name `i_love_you_rasini.db` can also be observed. It is unclear why these two files are generated, but they may be intended to mislead the user. However, given the nature of the worm, the purpose behind these files is uncertain.\\n\\nTo summarize the actions of the Rasith.A worm, the malware performs the following tasks:\\n\\n- Drops the executable file immediately after the start\\n- Writes to the Start menu file\\n- Drops a file with too old compile date\\n- Starts itself from another location\\n- Executable content was dropped or overwritten\\n- The process creates files with names similar to system file names\\n- Creates executable files that already exist in Windows\\n- Creates files or folders in the user directory\\n- Reads the computer name\\n- Reads the machine GUID from the registry\\n- The process checks LSA protection\\n- Create files in a temporary directory\\n- Checks supported languages\\n\\n- Registry Access\\n\\n```\\nPath: \\"\\\\REGISTRY\\\\MACHINE\\\\SYSTEM\\\\CONTROLSET001\\\\CONTROL\\\\COMPUTERNAME\\\\ACTIVECOMPUTERNAME\\", Key: \\"COMPUTERNAME\\"\\nPath: \\"\\\\REGISTRY\\\\MACHINE\\\\SOFTWARE\\\\MICROSOFT\\\\CRYPTOGRAPHY\\", Key: \\"MACHINEGUID\\"\\n```\\n\\n- Reads Configuration Files\\n\\n```\\nread file \\"C:\\\\Users\\\\desktop.ini\\"\\nread file \\"C:\\\\Users\\\\%USERNAME%\\\\desktop.ini\\"\\nread file \\"C:\\\\Users\\\\%USERNAME%\\\\Desktop\\\\desktop.ini\\"\\nread file \\"%ALLUSERSPROFILE%\\\\Microsoft\\\\Windows\\\\Start Menu\\\\desktop.ini\\"\\nread file \\"C:\\\\Users\\\\%USERNAME%\\\\Desktop\\\\desktop.ini\\"\\n```\\n\\n- Creates files in windows directory\\n\\n```\\ncreated file \\"C:\\\\Windows\\\\Globalization\\\\Sorting\\\\sortdefault.nls\\"\\ncreated file \\"C:\\\\Windows\\\\system32\\\\rsaenh.dll\\"\\ncreated file \\"C:\\\\Windows\\\\Fonts\\\\staticcache.dat\\"\\ncreated file \\"C:\\\\Windows\\\\system32\\\\wshom.ocx\\"\\ncreated file \\"C:\\\\Users\\\\%USERNAME%\\\\AppData\\\\Local\\\\Microsoft\\\\Windows\\\\Caches\\"\\ncreated file \\"C:\\\\Users\\\\%USERNAME%\\\\AppData\\\\Local\\\\Microsoft\\\\Windows\\\\Caches\\\\cversions.1.db\\"\\ncreated file \\"C:\\\\Users\\\\%USERNAME%\\\\AppData\\\\Local\\\\Microsoft\\\\Windows\\\\Caches\\\\{AFBF9F1A-8EE8\u20134C77-AF34-C647E37CA0D9}.1.ver0x0000000000000006.db\\"\\ncreated file \\"%ALLUSERSPROFILE%\\\\Microsoft\\\\Windows\\\\Start Menu\\"\\ncreated file \\"C:\\\\ProgramData\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\desktop.ini\\"\\n```\\n\\n- Drops executable files\\n\\n```\\n\\"explorer.exe\\" has type \\"PE32 executable (GUI) Intel 80386, for MS Windows\\"\\n\\"msfold.exe\\" has type \\"PE32 executable (GUI) Intel 80386, for MS Windows\\"\\n```\\n\\n- Potential URL found in binary/memory\\n\\n```\\nEmail - allosfix@hotmail.com\\n```\\n\\nHere\u2019s a professional version of the text you provided:\\n\\nThe Rasith.A worm is associated with the email address `allosfix@hotmail.com`. The malware was originally developed using VB 6, an older programming language, and was detected by antivirus software at the time of its initial release. However, it appears to have evaded detection in recent years for unknown reasons.\\n\\nTo remove the Rasith.A worm from your computer, follow these steps:\\n\\n1. Restart your computer in safe mode\\n2. Locate the following files and delete them:\\n\\n   - `C:\\\\Users\\\\admin\\\\AppData\\\\Roaming\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\Startup\\\\msfold.exe`\\n   - `C:\\\\Users\\\\admin\\\\AppData\\\\Local\\\\Temp\\\\sajith_and_rasini.db`\\n   - `C:\\\\Users\\\\admin\\\\AppData\\\\Local\\\\Temp\\\\i_love_you_rasini.db`\\n\\nUpon decompiling the Rasith.A worm with [VB Decompiler Lite v12](https://www.vb-decompiler.org/download.htm), it was discovered that the file is actually named \u201cK Abe\u201d, rather than \u201ckabe\u201d as initially believed. The naming convention, coupled with the creation of the `.db` files with names such as `sajith_and_rasini.db` and `i_love_you_rasini.db`, suggests a Sri Lankan origin for the malware creator. However, it is important to note that definitive conclusions about the creator\u2019s nationality cannot be drawn with certainty when analyzing malware.\\n\\n- its called `K Abe` and not `kabe`\\n\\n![img69](https://cdn-images-1.medium.com/max/1000/1*0N9yAbBkNJsvs3StvGsZuA.png)\\n\\n- The form that you get promptet with, made with Visual Basics 6 (this is what you got prompted with, this doesnt work anymore)\\n\\n![img67](https://cdn-images-1.medium.com/max/1000/1*0jwSB6ZsTf9f1N8afkmWjw.png)\\n\\nIt is notable that the attacker is only asking for a ransom of $4, which is a relatively small amount. This could be an indication that the attacker is not particularly skilled or motivated, or that they are specifically targeting low-value targets, or maybe he\u2019s from a country where 4$ is a huge amount. Alternatively, it could be a deliberate attempt to avoid attracting too much attention or to make the ransom demand more likely to be paid. Nonetheless, regardless of the amount requested, it is important to never pay a ransom to attackers, as it encourages their criminal activities and does not guarantee that access to the infected system will be restored.\\n\\nThe decompiled file project information reveals the following details:\\n\\n```\\nType=Exe\\nReference=*\\\\G{00020430-0000-0000-C000-000000000046}#2.0#0#..\\\\..\\\\..\\\\..\\\\WINDOWS\\\\SYSTEM32\\\\STDOLE2.TLB#OLE Automation\\nForm=Form1.frm\\nModule=Module1; Module1.bas\\nClass=clsMD5; clsMD5.cls\\nForm=frm_lock.frm\\nModule=Module2; Module2.bas\\nStartup=\\"Form1\\"\\nIconForm=\\"Form1\\"\\nHelpFile=\\"\\"\\nExeName32=\\"sajith.exe\\"\\nName=\\"Project1\\"\\nTitle=\\"sajith\\"\\nVersionCompanyName=\\"Folders\\"\\nMajorVer=1\\nMinorVer=00\\nRevisionVer=0\\nCommand32 = \\"\\"\\nHelpContextID = \\"0\\"\\nCompatibleMode = \\"0\\"\\nAutoIncrementVer = 0\\nServerSupportFiles = 0\\nCompilationType = 0\\nOptimizationType = 0\\nFavorPentiumPro(tm) = 0\\nCodeViewDebugInfo = 0\\nNoAliasing = 0\\nBoundsCheck = 0\\nOverflowCheck = -1\\nFlPointCheck = 0\\nFDIVCheck = 0\\nUnroundedFP = 0\\nStartMode = 0\\nUnattended = 0\\nRetained = 0\\nThreadPerObject = 0\\nMaxNumberOfThreads = 1\\n\\n[MS Transaction Server]\\nAutoRefresh = 1\\n\\n[VB Decompiler]\\nBuild = 12.0.8439.29532\\nDate = 2/15/2023\\n```\\n\\n- Additional images of infected computers:\\n\\n![img71](https://cdn-images-1.medium.com/max/1000/1*BFP9rALVsVq-Y1uH2nYgOQ.png)\\n![img72](https://cdn-images-1.medium.com/max/1000/1*NpCwcT271tymbu8QUz5E_g.jpeg)\\n\\nUpon investigation, it is evident that the malware attempts to access the IPv4 address of 20.99.184.37, which is owned by Microsoft. This suggests that the attacker utilized a Microsoft Azure server as a command and control center to manage the worm and collect the $4 ransom. Further details regarding the IP address can be found at here. It is worth noting that Microsoft has already taken this down.\\n\\nAs this is an older program, its functionality may not work as intended by the attacker on modern computers and newer operating systems. However, despite any limitations, the program is designed to continue running and spreading.\\n\\nSources:\\n\\n- [any.run report](https://any.run/report/260d745e60019fb56f6d04be30285efe25db08d2dd64acefe1afe092e5f5b46f/cde60de9-16a1-4b3f-b37f-3d8d5f661573)\\n\\n- [any.run analysis](https://app.any.run/tasks/cde60de9-16a1-4b3f-b37f-3d8d5f661573/)\\n\\n- [VirusTotal analysis](https://www.virustotal.com/gui/file/260d745e60019fb56f6d04be30285efe25db08d2dd64acefe1afe092e5f5b46f/detection)\\n\\n- [VirusTotal Generated Graph](https://www.virustotal.com/graph/260d745e60019fb56f6d04be30285efe25db08d2dd64acefe1afe092e5f5b46f)\\n\\n- [Trend Micro](https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/worm_rasith.a)\\n\\n- [Hybrid Analysis](https://www.hybrid-analysis.com/sample/31c425084a6b932b36b8b588888ca631c9f2fc50a89e880da748ac59325304f1/562467cf0e316d6b77fccf3f)\\n\\n- [this Canon\u2019s website](https://eset-info.canon-its.jp/files/user/html/info/virusinfo/list/vr_win32_rasith_a.html)"},{"id":"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing","metadata":{"permalink":"/blog/2022-12-26-tcp-over-ssl-tunnel-sni-spoofing","editUrl":"https://github.com/hirusha-adi/hirusha/edit/main/blog/2022-12-26-sni-spoofing.md","source":"@site/blog/2022-12-26-sni-spoofing.md","title":"SNI Spoofing Analysis","description":"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks.","date":"2022-12-26T00:00:00.000Z","formattedDate":"December 26, 2022","tags":[{"label":"python","permalink":"/blog/tags/python"},{"label":"network","permalink":"/blog/tags/network"},{"label":"hacking","permalink":"/blog/tags/hacking"}],"readingTime":6.59,"hasTruncateMarker":true,"authors":[{"name":"Hirusha Adikari","title":"Student interested in Tech","url":"https://github.com/hirusha-adi","imageURL":"https://avatars.githubusercontent.com/u/36286877?v=4","key":"hirusha"}],"frontMatter":{"slug":"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing","title":"SNI Spoofing Analysis","authors":["hirusha"],"tags":["python","network","hacking"]},"unlisted":false,"prevItem":{"title":"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d","permalink":"/blog/2023-02-15-sri-lanka-rasitha-worm"}},"content":"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks.\\n\\n\x3c!--truncate--\x3e\\n\\n![TCP Over SSL Tunnel Software](https://cdn-images-1.medium.com/v2/resize:fit:880/0*ls1-d3UfIMvyvPf0)\\n\\nServer Name Indication (SNI) is an extension to the TLS protocol that allows a client to specify the domain name it is connecting to at the start of the handshake process. This enables a server to host multiple TLS-based websites on a single IP address and port, as the server can use the SNI information to determine which certificate to present to the client.\\n\\nSNI injection involves manipulating the SNI field in the TLS handshake process in order to trick the server into presenting a different certificate than the one it would normally present. This can be used in various ways, such as to bypass certificate-based access controls or to perform man-in-the-middle attacks.\\n\\nIn the context of TCP over SSL tunneling, SNI injection can be used to bypass controls that are based on the domain name being accessed. For example, if a client is using an SSL tunnel to access a specific domain, the server may only allow access if the SNI field in the TLS handshake matches that domain. By injecting a different domain name into the SNI field, the client may be able to bypass these controls and gain access to the server even if it is not normally allowed.\\n\\nIt is important to note that SNI injection can be a serious security vulnerability and should be properly mitigated to prevent exploitation.\\n\\nThe SNI (Server Name Indication) header is an extension to the TLS (Transport Layer Security) protocol that allows a client to specify the desired server name during the SSL/TLS handshake. This is typically used to identify the server that the client wants to connect to when multiple servers are hosted on the same IP address.\\n\\nHere is the wireshark output of the extension:\\n\\n```\\nExtension: server_name (len=24)\\nType: server_name (0)\\nLength: 24\\nServer Name Indication extension\\nServer Name list length: 22\\nServer Name Type: host_name (0)\\nServer Name length: 19\\nServer Name: clients5.google.com\\n```\\n\\nSpoofing the SNI header involves sending a forged SNI value to the server during the SSL/TLS handshake. This can be done by specifying a different server name when creating the SSL context on the client side. For example, if the client wants to connect to www.example.com, but wants to spoof the SNI header to say www.spoofed-sni.com, it can do so by specifying www.spoofed-sni.com as the server name when creating the SSL context.\\n\\nThere are a few reasons why someone might want to spoof the SNI header. One reason is to bypass network restrictions that are based on the server name. For example, if a client is blocked from accessing www.example.com, but is allowed to access www.spoofed-sni.com, it can use SNI spoofing to bypass the restriction. Another reason is to perform SSL strip attacks, where an attacker intercepts and downgrades secure connections to non-secure connections in order to steal sensitive information.\\n\\nIt\u2019s important to note that spoofing the SNI header does not necessarily guarantee a successful connection to the desired server. The server may still perform checks to verify the authenticity of the client and the connection, and may reject the connection if it determines that the client is not legitimate.\\n\\nOriginal Code: [Click here.](https://sourceforge.net/p/tcpoverssltunnel/code-0/ci/master/tree/client.py#l10)\\n\\n```python\\nimport socket, threading, select\\n\\nSNI_HOST = \'www.example.com\'\\nLISTEN_PORT = 8088\\n\\n\\ndef conecta(c, a):\\n\\tprint(\'<#> Cliente {} recebido!\'.format(a[-1]))\\n\\trequest = c.recv(8192)\\n\\n\\thost = request.split(\':\')[0].split()[-1]\\n\\tport = request.split(\':\')[-1].split()[0]\\n\\n\\n\\ts = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\n\\ts.connect((str(host), int(port)))\\n\\n\\t# Wrap o SSL.\\n\\timport ssl\\n\\tctx = ssl.SSLContext(ssl.PROTOCOL_SSLv23)\\n\\ts = ctx.wrap_socket(s, server_hostname=str(SNI_HOST))\\n\\n\\t# Direta\\n\\tc.send(b\\"HTTP/1.1 200 Established\\\\r\\\\n\\\\r\\\\n\\")\\n\\n\\n\\n\\tconnected = True\\n\\twhile connected == True:\\n\\t\\tr, w, x = select.select([c,s], [], [c,s], 3)\\n\\t\\tif x: connected = False; break\\n\\t\\tfor i in r:\\n\\t\\t\\ttry:\\n\\t\\t\\t\\t# Break if not data.\\n\\t\\t\\t\\tdata = i.recv(8192)\\n\\t\\t\\t\\tif not data: connected = False; break\\n\\t\\t\\t\\tif i is s:\\n\\t\\t\\t\\t\\t# Download.\\n\\t\\t\\t\\t\\tc.send(data)\\n\\t\\t\\t\\telse:\\n\\t\\t\\t\\t\\t# Upload.\\n\\t\\t\\t\\t\\ts.send(data)\\n\\t\\t\\texcept:\\n\\t\\t\\t\\tconnected = False\\n\\t\\t\\t\\tbreak\\n\\tc.close()\\n\\ts.close()\\n\\tprint(\'<#> Cliente {} Desconectado!\'.format(a[-1]))\\n\\n\\n# Listen\\nprint(\'Injector SSL com SNI Host em Python\\\\n\\\\\\nVersao de Teste.\\\\n\\\\\\nCriado por Marcone.\\\\n\')\\nl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\nl.bind((\'\', int(LISTEN_PORT)))\\nl.listen(0)\\nprint(\'Esperando Cliente no Ip e Porta: 127.0.0.1:{}\\\\n\'.format(LISTEN_PORT))\\nwhile True:\\n\\tc, a = l.accept()\\n\\tthreading.Thread(target=conecta, args=(c, a)).start()\\nl.close()\\n```\\n\\nThis Python code appears to be a simple implementation of a Secure Sockets Layer (SSL) injector with Server Name Indication (SNI) host.\\n\\nThe code starts by importing the socket, threading, and select modules. The SNI_HOST and LISTEN_PORT variables are then defined at the beginning of the script. The SNI_HOST variable specifies the hostname that the client will be requesting a secure connection to, while the LISTEN_PORT variable specifies the port number that the injector will be listening on for incoming connection requests.\\n\\nThe conecta() function is then defined, which takes two arguments: c and a. This function is called whenever a new client connects to the injector. The function begins by printing a message indicating that a new client has connected, and then it receives a request from the client using the recv() method of the c socket object.\\n\\nThe host and port specified in the client\u2019s request are then extracted from the request using the split() method, and a new socket connection is established to the specified host and port using the connect() method of the socket module.\\n\\nThe new socket connection is then wrapped in an SSL context using the wrap_socket() method of the ssl module, and the SNI_HOST variable is passed as the server_hostname argument to the wrap_socket() method.\\n\\nThe conecta() function then sends an HTTP \\"200 Established\\" response to the client, and enters a loop to continually receive data from either the client or the server and send it to the other party. The loop terminates when either the client or the server closes the connection.\\n\\nFinally, the conecta() function closes both the client and server sockets and prints a message indicating that the client has been disconnected.\\n\\nThe main body of the script then creates a new socket using the socket module\'s socket() function and binds it to the LISTEN_PORT on the local host. The socket is then set to listen for incoming connection requests using the listen() method.\\n\\nThe script enters an infinite loop, waiting for new clients to connect using the accept() method of the listening socket. Whenever a new client connects, a new thread is created to handle the connection using the conecta() function as the target, and the client socket and address are passed as arguments.\\n\\nFinally, the listening socket is closed when the script terminates.\\n\\nIt looks like this code could potentially be used for SNI spoofing, which is a technique that involves presenting a fake SSL certificate to a client in order to intercept and decrypt the client\u2019s traffic.\\n\\nIt is possible that you could use this code to trick your Internet Service Provider (ISP) into believing that you are accessing a different hostname than the one you are actually accessing. However, keep in mind that this code alone is not sufficient to fully trick your ISP.\\n\\nTo trick your ISP using this code, you would need to set up a fake SSL certificate for the hostname that you want to spoof, and configure the injector to use this certificate when establishing the SSL connection with your ISP. You would also need to configure your device to send all of your network traffic through the injector, rather than directly to the Internet.\\n\\nTo use this code for SNI spoofing, you would need to modify the SNI_HOST variable to specify the hostname that you want to spoof. You would then need to set up a fake SSL certificate for this hostname, and configure the injector to use this certificate when establishing the SSL connection with the client.\\n\\n```python\\nimport socket\\nimport ssl\\n\\n# Create a socket and bind it to a port\\nsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\nsock.bind((\'localhost\', 8080))\\nsock.listen()\\n\\n# Accept incoming connections\\nconn, addr = sock.accept()\\n\\n# Wrap the socket in an SSL context\\ncontext = ssl.create_default_context()\\nssl_sock = context.wrap_socket(conn, server_side=True)\\n\\n# Read data from the SSL socket and send it through the tunnel\\ndata = ssl_sock.read()\\ntunnel_sock = socket.create_connection((\'www.example.com\', 443))\\ntunnel_sock.sendall(data)\\n\\n# Read the response from the tunnel and send it back to the client\\nresponse = tunnel_sock.recv(4096)\\nssl_sock.sendall(response)\\n\\n# Close the sockets\\nssl_sock.close()\\ntunnel_sock.close()\\n```\\n\\nThis code creates a socket and binds it to the localhost on port 8080. It then listens for incoming connections and accepts them when they arrive. The incoming connection is then wrapped in an SSL context and the data from the connection is read. The data is then sent through a tunnel to the destination server (www.example.com on port 443 in this example). The response from the destination server is read and sent back to the client through the SSL socket. Finally, the sockets are closed.\\n\\nTo spoof the SNI (Server Name Indication) header, you can use the ssl_sock.server_hostname attribute to specify the desired SNI value when creating the SSL context. For example:\\n\\n```\\ncontext = ssl.create_default_context()\\ncontext.check_hostname = False\\ncontext.verify_mode = ssl.CERT_NONE\\nssl_sock = context.wrap_socket(conn, server_side=True, server_hostname=\'www.spoofed-sni.com\')\\n```\\n\\nThis will cause the SNI header to be sent with the value \u2018www.spoofed-sni.com\' when the SSL handshake is performed.\\n\\nFirst, the socket and ssl modules are imported. These modules provide the necessary functions for creating sockets and wrapping them in SSL contexts.\\n\\n```\\nimport socket\\nimport ssl\\n```\\n\\nNext, a socket is created and bound to the localhost on port 8080. The socket is then put into listening mode to wait for incoming connections.\\n\\n```\\nsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\nsock.bind((\'localhost\', 8080))\\nsock.listen()\\n```\\n\\nWhen an incoming connection is received, it is accepted and stored in the conn variable along with the address of the client in the addr variable\\n\\n```\\nconn, addr = sock.accept()\\n```\\n\\nThe incoming connection is then wrapped in an SSL context using the wrap_socket function. This function takes the connection as an argument and returns an SSL socket object. The server_side argument is set to True to indicate that the socket will be used to accept connections from clients.\\n\\n```\\ncontext = ssl.create_default_context()\\nssl_sock = context.wrap_socket(conn, server_side=True)\\n```\\n\\nThe data from the SSL socket is read using the read function and stored in the data variable.\\n\\n```\\ndata = ssl_sock.read()\\n```\\n\\nA connection is then established with the destination server using the create_connection function from the socket module. This function takes the address of the destination server as an argument and returns a socket object that can be used to send and receive\\n\\n```\\ntunnel_sock = socket.create_connection((\'www.example.com\', 443))\\n```\\n\\nThe data that was read from the SSL socket is then sent through the tunnel to the destination server using the sendall function.\\n\\n```\\ntunnel_sock.sendall(data)\\n```\\n\\nThe response from the destination server is read using the recv function and stored in the response variable.\\n\\n```\\nresponse = tunnel_sock.recv(4096)\\n```\\n\\nThe response is then sent back to the client through the SSL socket using the sendall function.\\n\\n```\\nssl_sock.sendall(response)\\n```\\n\\nFinally, both the SSL socket and the tunnel socket are closed using the close function.\\n\\n```\\nssl_sock.close()\\ntunnel_sock.close()\\n```\\n\\nIn conclusion, it is possible to create a TCP over SSL tunnel using Python\u2019s ssl module. This can be useful for encrypting network traffic and bypassing network restrictions. The SNI (Server Name Indication) header can also be spoofed by specifying a different server name when creating the SSL context on the client side. While SNI spoofing can be used for legitimate purposes, it can also be used for malicious purposes such as bypassing network restrictions or performing SSL strip attacks. It\'s important to be aware of the potential risks and use SNI spoofing responsibly.\\n\\nReferences:\\n\\n- [Bypassing Content-based internet packages with an SSL/TLS Tunnel, SNI Spoofing, and DNS spoofing by Shanaka Anuradha Samarakoon](https://arxiv.org/ftp/arxiv/papers/2212/2212.05447.pdf)\\n- [Efficiently Bypassing SNI-based HTTPS Filtering by Wazen M. Shbair, Thibault Cholez, Antoine Goichot, Isabelle Chrisment](https://hal.inria.fr/hal-01202712/document)"}]}')}}]);