"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=l(n),u=s,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:s,i[1]=r;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(7462),s=(n(7294),n(3905));const a={slug:"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",title:"SNI Spoofing Analysis",authors:["hirusha"],tags:["python","network","hacking"]},i=void 0,r={permalink:"/blog/2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",editUrl:"https://github.com/hirusha-adi/hirusha/tree/main/blog/2022-12-26-sni-spoofing.md",source:"@site/blog/2022-12-26-sni-spoofing.md",title:"SNI Spoofing Analysis",description:"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks.",date:"2022-12-26T00:00:00.000Z",formattedDate:"December 26, 2022",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"network",permalink:"/blog/tags/network"},{label:"hacking",permalink:"/blog/tags/hacking"}],readingTime:9.885,hasTruncateMarker:!0,authors:[{name:"Hirusha Adikari",title:"Student interested in Tech",url:"https://github.com/hirusha-adi",imageURL:"https://avatars.githubusercontent.com/u/36286877?v=4",key:"hirusha"}],frontMatter:{slug:"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",title:"SNI Spoofing Analysis",authors:["hirusha"],tags:["python","network","hacking"]},prevItem:{title:"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d",permalink:"/blog/2023-02-15-sri-lanka-rasitha-worm"}},c={authorsImageUrls:[void 0]},l=[],h={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/v2/resize:fit:880/0*ls1-d3UfIMvyvPf0",alt:"TCP Over SSL Tunnel Software"})),(0,s.kt)("p",null,"Server Name Indication (SNI) is an extension to the TLS protocol that allows a client to specify the domain name it is connecting to at the start of the handshake process. This enables a server to host multiple TLS-based websites on a single IP address and port, as the server can use the SNI information to determine which certificate to present to the client."),(0,s.kt)("p",null,"SNI injection involves manipulating the SNI field in the TLS handshake process in order to trick the server into presenting a different certificate than the one it would normally present. This can be used in various ways, such as to bypass certificate-based access controls or to perform man-in-the-middle attacks."),(0,s.kt)("p",null,"In the context of TCP over SSL tunneling, SNI injection can be used to bypass controls that are based on the domain name being accessed. For example, if a client is using an SSL tunnel to access a specific domain, the server may only allow access if the SNI field in the TLS handshake matches that domain. By injecting a different domain name into the SNI field, the client may be able to bypass these controls and gain access to the server even if it is not normally allowed."),(0,s.kt)("p",null,"It is important to note that SNI injection can be a serious security vulnerability and should be properly mitigated to prevent exploitation."),(0,s.kt)("p",null,"The SNI (Server Name Indication) header is an extension to the TLS (Transport Layer Security) protocol that allows a client to specify the desired server name during the SSL/TLS handshake. This is typically used to identify the server that the client wants to connect to when multiple servers are hosted on the same IP address."),(0,s.kt)("p",null,"Here is the wireshark output of the extension:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Extension: server_name (len=24)\nType: server_name (0)\nLength: 24\nServer Name Indication extension\nServer Name list length: 22\nServer Name Type: host_name (0)\nServer Name length: 19\nServer Name: clients5.google.com\n")),(0,s.kt)("p",null,"Spoofing the SNI header involves sending a forged SNI value to the server during the SSL/TLS handshake. This can be done by specifying a different server name when creating the SSL context on the client side. For example, if the client wants to connect to ",(0,s.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com"),", but wants to spoof the SNI header to say ",(0,s.kt)("a",{parentName:"p",href:"http://www.spoofed-sni.com"},"www.spoofed-sni.com"),", it can do so by specifying ",(0,s.kt)("a",{parentName:"p",href:"http://www.spoofed-sni.com"},"www.spoofed-sni.com")," as the server name when creating the SSL context."),(0,s.kt)("p",null,"There are a few reasons why someone might want to spoof the SNI header. One reason is to bypass network restrictions that are based on the server name. For example, if a client is blocked from accessing ",(0,s.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com"),", but is allowed to access ",(0,s.kt)("a",{parentName:"p",href:"http://www.spoofed-sni.com"},"www.spoofed-sni.com"),", it can use SNI spoofing to bypass the restriction. Another reason is to perform SSL strip attacks, where an attacker intercepts and downgrades secure connections to non-secure connections in order to steal sensitive information."),(0,s.kt)("p",null,"It\u2019s important to note that spoofing the SNI header does not necessarily guarantee a successful connection to the desired server. The server may still perform checks to verify the authenticity of the client and the connection, and may reject the connection if it determines that the client is not legitimate."),(0,s.kt)("p",null,"Original Code: ",(0,s.kt)("a",{parentName:"p",href:"https://sourceforge.net/p/tcpoverssltunnel/code-0/ci/master/tree/client.py#l10"},"Click here.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import socket, threading, select\n\nSNI_HOST = 'www.example.com'\nLISTEN_PORT = 8088\n\n\ndef conecta(c, a):\n    print('<#> Cliente {} recebido!'.format(a[-1]))\n    request = c.recv(8192)\n\n    host = request.split(':')[0].split()[-1]\n    port = request.split(':')[-1].split()[0]\n\n\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.connect((str(host), int(port)))\n\n    # Wrap o SSL.\n    import ssl\n    ctx = ssl.SSLContext(ssl.PROTOCOL_SSLv23)\n    s = ctx.wrap_socket(s, server_hostname=str(SNI_HOST))\n\n    # Direta\n    c.send(b\"HTTP/1.1 200 Established\\r\\n\\r\\n\")\n\n\n\n    connected = True\n    while connected == True:\n        r, w, x = select.select([c,s], [], [c,s], 3)\n        if x: connected = False; break\n        for i in r:\n            try:\n                # Break if not data.\n                data = i.recv(8192)\n                if not data: connected = False; break\n                if i is s:\n                    # Download.\n                    c.send(data)\n                else:\n                    # Upload.\n                    s.send(data)\n            except:\n                connected = False\n                break\n    c.close()\n    s.close()\n    print('<#> Cliente {} Desconectado!'.format(a[-1]))\n\n\n# Listen\nprint('Injector SSL com SNI Host em Python\\n\\\nVersao de Teste.\\n\\\nCriado por Marcone.\\n')\nl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nl.bind(('', int(LISTEN_PORT)))\nl.listen(0)\nprint('Esperando Cliente no Ip e Porta: 127.0.0.1:{}\\n'.format(LISTEN_PORT))\nwhile True:\n    c, a = l.accept()\n    threading.Thread(target=conecta, args=(c, a)).start()\nl.close()\n")),(0,s.kt)("p",null,"This Python code appears to be a simple implementation of a Secure Sockets Layer (SSL) injector with Server Name Indication (SNI) host."),(0,s.kt)("p",null,"The code starts by importing the socket, threading, and select modules. The SNI_HOST and LISTEN_PORT variables are then defined at the beginning of the script. The SNI_HOST variable specifies the hostname that the client will be requesting a secure connection to, while the LISTEN_PORT variable specifies the port number that the injector will be listening on for incoming connection requests."),(0,s.kt)("p",null,"The conecta() function is then defined, which takes two arguments: c and a. This function is called whenever a new client connects to the injector. The function begins by printing a message indicating that a new client has connected, and then it receives a request from the client using the recv() method of the c socket object."),(0,s.kt)("p",null,"The host and port specified in the client\u2019s request are then extracted from the request using the split() method, and a new socket connection is established to the specified host and port using the connect() method of the socket module."),(0,s.kt)("p",null,"The new socket connection is then wrapped in an SSL context using the wrap_socket() method of the ssl module, and the SNI_HOST variable is passed as the server_hostname argument to the wrap_socket() method."),(0,s.kt)("p",null,'The conecta() function then sends an HTTP "200 Established" response to the client, and enters a loop to continually receive data from either the client or the server and send it to the other party. The loop terminates when either the client or the server closes the connection.'),(0,s.kt)("p",null,"Finally, the conecta() function closes both the client and server sockets and prints a message indicating that the client has been disconnected."),(0,s.kt)("p",null,"The main body of the script then creates a new socket using the socket module's socket() function and binds it to the LISTEN_PORT on the local host. The socket is then set to listen for incoming connection requests using the listen() method."),(0,s.kt)("p",null,"The script enters an infinite loop, waiting for new clients to connect using the accept() method of the listening socket. Whenever a new client connects, a new thread is created to handle the connection using the conecta() function as the target, and the client socket and address are passed as arguments."),(0,s.kt)("p",null,"Finally, the listening socket is closed when the script terminates."),(0,s.kt)("p",null,"It looks like this code could potentially be used for SNI spoofing, which is a technique that involves presenting a fake SSL certificate to a client in order to intercept and decrypt the client\u2019s traffic."),(0,s.kt)("p",null,"It is possible that you could use this code to trick your Internet Service Provider (ISP) into believing that you are accessing a different hostname than the one you are actually accessing. However, keep in mind that this code alone is not sufficient to fully trick your ISP."),(0,s.kt)("p",null,"To trick your ISP using this code, you would need to set up a fake SSL certificate for the hostname that you want to spoof, and configure the injector to use this certificate when establishing the SSL connection with your ISP. You would also need to configure your device to send all of your network traffic through the injector, rather than directly to the Internet."),(0,s.kt)("p",null,"To use this code for SNI spoofing, you would need to modify the SNI_HOST variable to specify the hostname that you want to spoof. You would then need to set up a fake SSL certificate for this hostname, and configure the injector to use this certificate when establishing the SSL connection with the client."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import socket\nimport ssl\n\n# Create a socket and bind it to a port\nsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nsock.bind(('localhost', 8080))\nsock.listen()\n\n# Accept incoming connections\nconn, addr = sock.accept()\n\n# Wrap the socket in an SSL context\ncontext = ssl.create_default_context()\nssl_sock = context.wrap_socket(conn, server_side=True)\n\n# Read data from the SSL socket and send it through the tunnel\ndata = ssl_sock.read()\ntunnel_sock = socket.create_connection(('www.example.com', 443))\ntunnel_sock.sendall(data)\n\n# Read the response from the tunnel and send it back to the client\nresponse = tunnel_sock.recv(4096)\nssl_sock.sendall(response)\n\n# Close the sockets\nssl_sock.close()\ntunnel_sock.close()\n")),(0,s.kt)("p",null,"This code creates a socket and binds it to the localhost on port 8080. It then listens for incoming connections and accepts them when they arrive. The incoming connection is then wrapped in an SSL context and the data from the connection is read. The data is then sent through a tunnel to the destination server (",(0,s.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," on port 443 in this example). The response from the destination server is read and sent back to the client through the SSL socket. Finally, the sockets are closed."),(0,s.kt)("p",null,"To spoof the SNI (Server Name Indication) header, you can use the ssl_sock.server_hostname attribute to specify the desired SNI value when creating the SSL context. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"context = ssl.create_default_context()\ncontext.check_hostname = False\ncontext.verify_mode = ssl.CERT_NONE\nssl_sock = context.wrap_socket(conn, server_side=True, server_hostname='www.spoofed-sni.com')\n")),(0,s.kt)("p",null,"This will cause the SNI header to be sent with the value \u2018",(0,s.kt)("a",{parentName:"p",href:"http://www.spoofed-sni.com'"},"www.spoofed-sni.com'")," when the SSL handshake is performed."),(0,s.kt)("p",null,"First, the socket and ssl modules are imported. These modules provide the necessary functions for creating sockets and wrapping them in SSL contexts."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"import socket\nimport ssl\n")),(0,s.kt)("p",null,"Next, a socket is created and bound to the localhost on port 8080. The socket is then put into listening mode to wait for incoming connections."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nsock.bind(('localhost', 8080))\nsock.listen()\n")),(0,s.kt)("p",null,"When an incoming connection is received, it is accepted and stored in the conn variable along with the address of the client in the addr variable"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"conn, addr = sock.accept()\n")),(0,s.kt)("p",null,"The incoming connection is then wrapped in an SSL context using the wrap_socket function. This function takes the connection as an argument and returns an SSL socket object. The server_side argument is set to True to indicate that the socket will be used to accept connections from clients."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"context = ssl.create_default_context()\nssl_sock = context.wrap_socket(conn, server_side=True)\n")),(0,s.kt)("p",null,"The data from the SSL socket is read using the read function and stored in the data variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"data = ssl_sock.read()\n")),(0,s.kt)("p",null,"A connection is then established with the destination server using the create_connection function from the socket module. This function takes the address of the destination server as an argument and returns a socket object that can be used to send and receive"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"tunnel_sock = socket.create_connection(('www.example.com', 443))\n")),(0,s.kt)("p",null,"The data that was read from the SSL socket is then sent through the tunnel to the destination server using the sendall function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"tunnel_sock.sendall(data)\n")),(0,s.kt)("p",null,"The response from the destination server is read using the recv function and stored in the response variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"response = tunnel_sock.recv(4096)\n")),(0,s.kt)("p",null,"The response is then sent back to the client through the SSL socket using the sendall function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ssl_sock.sendall(response)\n")),(0,s.kt)("p",null,"Finally, both the SSL socket and the tunnel socket are closed using the close function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ssl_sock.close()\ntunnel_sock.close()\n")),(0,s.kt)("p",null,"In conclusion, it is possible to create a TCP over SSL tunnel using Python\u2019s ssl module. This can be useful for encrypting network traffic and bypassing network restrictions. The SNI (Server Name Indication) header can also be spoofed by specifying a different server name when creating the SSL context on the client side. While SNI spoofing can be used for legitimate purposes, it can also be used for malicious purposes such as bypassing network restrictions or performing SSL strip attacks. It's important to be aware of the potential risks and use SNI spoofing responsibly."),(0,s.kt)("p",null,"References:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/ftp/arxiv/papers/2212/2212.05447.pdf"},"Bypassing Content-based internet packages with an SSL/TLS Tunnel, SNI Spoofing, and DNS spoofing by Shanaka Anuradha Samarakoon")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hal.inria.fr/hal-01202712/document"},"Efficiently Bypassing SNI-based HTTPS Filtering by Wazen M. Shbair, Thibault Cholez, Antoine Goichot, Isabelle Chrisment"))))}d.isMDXComponent=!0}}]);