"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[268],{88267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(11527),o=n(56213);const i={slug:"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",title:"SNI Spoofing Analysis",authors:["hirusha"],tags:["python","network","hacking"]},a=void 0,c={permalink:"/blog/2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",editUrl:"https://github.com/hirusha-adi/hirusha/edit/main/blog/2022-12-26-sni-spoofing.md",source:"@site/blog/2022-12-26-sni-spoofing.md",title:"SNI Spoofing Analysis",description:"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks.",date:"2022-12-26T00:00:00.000Z",formattedDate:"December 26, 2022",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"network",permalink:"/blog/tags/network"},{label:"hacking",permalink:"/blog/tags/hacking"}],readingTime:6.59,hasTruncateMarker:!0,authors:[{name:"Hirusha Adikari",title:"Student interested in Tech",url:"https://github.com/hirusha-adi",imageURL:"https://avatars.githubusercontent.com/u/36286877?v=4",key:"hirusha"}],frontMatter:{slug:"2022-12-26-tcp-over-ssl-tunnel-sni-spoofing",title:"SNI Spoofing Analysis",authors:["hirusha"],tags:["python","network","hacking"]},unlisted:!1,prevItem:{title:"Sri Lanka\u2019s Most Widespread Computer Virus- \u201cRasith.A Worm\u201d",permalink:"/blog/2023-02-15-sri-lanka-rasitha-worm"}},r={authorsImageUrls:[void 0]},h=[];function l(e){const t={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://cdn-images-1.medium.com/v2/resize:fit:880/0*ls1-d3UfIMvyvPf0",alt:"TCP Over SSL Tunnel Software"})}),"\n",(0,s.jsx)(t.p,{children:"Server Name Indication (SNI) is an extension to the TLS protocol that allows a client to specify the domain name it is connecting to at the start of the handshake process. This enables a server to host multiple TLS-based websites on a single IP address and port, as the server can use the SNI information to determine which certificate to present to the client."}),"\n",(0,s.jsx)(t.p,{children:"SNI injection involves manipulating the SNI field in the TLS handshake process in order to trick the server into presenting a different certificate than the one it would normally present. This can be used in various ways, such as to bypass certificate-based access controls or to perform man-in-the-middle attacks."}),"\n",(0,s.jsx)(t.p,{children:"In the context of TCP over SSL tunneling, SNI injection can be used to bypass controls that are based on the domain name being accessed. For example, if a client is using an SSL tunnel to access a specific domain, the server may only allow access if the SNI field in the TLS handshake matches that domain. By injecting a different domain name into the SNI field, the client may be able to bypass these controls and gain access to the server even if it is not normally allowed."}),"\n",(0,s.jsx)(t.p,{children:"It is important to note that SNI injection can be a serious security vulnerability and should be properly mitigated to prevent exploitation."}),"\n",(0,s.jsx)(t.p,{children:"The SNI (Server Name Indication) header is an extension to the TLS (Transport Layer Security) protocol that allows a client to specify the desired server name during the SSL/TLS handshake. This is typically used to identify the server that the client wants to connect to when multiple servers are hosted on the same IP address."}),"\n",(0,s.jsx)(t.p,{children:"Here is the wireshark output of the extension:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Extension: server_name (len=24)\nType: server_name (0)\nLength: 24\nServer Name Indication extension\nServer Name list length: 22\nServer Name Type: host_name (0)\nServer Name length: 19\nServer Name: clients5.google.com\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Spoofing the SNI header involves sending a forged SNI value to the server during the SSL/TLS handshake. This can be done by specifying a different server name when creating the SSL context on the client side. For example, if the client wants to connect to ",(0,s.jsx)(t.a,{href:"http://www.example.com",children:"www.example.com"}),", but wants to spoof the SNI header to say ",(0,s.jsx)(t.a,{href:"http://www.spoofed-sni.com",children:"www.spoofed-sni.com"}),", it can do so by specifying ",(0,s.jsx)(t.a,{href:"http://www.spoofed-sni.com",children:"www.spoofed-sni.com"})," as the server name when creating the SSL context."]}),"\n",(0,s.jsxs)(t.p,{children:["There are a few reasons why someone might want to spoof the SNI header. One reason is to bypass network restrictions that are based on the server name. For example, if a client is blocked from accessing ",(0,s.jsx)(t.a,{href:"http://www.example.com",children:"www.example.com"}),", but is allowed to access ",(0,s.jsx)(t.a,{href:"http://www.spoofed-sni.com",children:"www.spoofed-sni.com"}),", it can use SNI spoofing to bypass the restriction. Another reason is to perform SSL strip attacks, where an attacker intercepts and downgrades secure connections to non-secure connections in order to steal sensitive information."]}),"\n",(0,s.jsx)(t.p,{children:"It\u2019s important to note that spoofing the SNI header does not necessarily guarantee a successful connection to the desired server. The server may still perform checks to verify the authenticity of the client and the connection, and may reject the connection if it determines that the client is not legitimate."}),"\n",(0,s.jsxs)(t.p,{children:["Original Code: ",(0,s.jsx)(t.a,{href:"https://sourceforge.net/p/tcpoverssltunnel/code-0/ci/master/tree/client.py#l10",children:"Click here."})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import socket, threading, select\n\nSNI_HOST = 'www.example.com'\nLISTEN_PORT = 8088\n\n\ndef conecta(c, a):\n\tprint('<#> Cliente {} recebido!'.format(a[-1]))\n\trequest = c.recv(8192)\n\n\thost = request.split(':')[0].split()[-1]\n\tport = request.split(':')[-1].split()[0]\n\n\n\ts = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\ts.connect((str(host), int(port)))\n\n\t# Wrap o SSL.\n\timport ssl\n\tctx = ssl.SSLContext(ssl.PROTOCOL_SSLv23)\n\ts = ctx.wrap_socket(s, server_hostname=str(SNI_HOST))\n\n\t# Direta\n\tc.send(b\"HTTP/1.1 200 Established\\r\\n\\r\\n\")\n\n\n\n\tconnected = True\n\twhile connected == True:\n\t\tr, w, x = select.select([c,s], [], [c,s], 3)\n\t\tif x: connected = False; break\n\t\tfor i in r:\n\t\t\ttry:\n\t\t\t\t# Break if not data.\n\t\t\t\tdata = i.recv(8192)\n\t\t\t\tif not data: connected = False; break\n\t\t\t\tif i is s:\n\t\t\t\t\t# Download.\n\t\t\t\t\tc.send(data)\n\t\t\t\telse:\n\t\t\t\t\t# Upload.\n\t\t\t\t\ts.send(data)\n\t\t\texcept:\n\t\t\t\tconnected = False\n\t\t\t\tbreak\n\tc.close()\n\ts.close()\n\tprint('<#> Cliente {} Desconectado!'.format(a[-1]))\n\n\n# Listen\nprint('Injector SSL com SNI Host em Python\\n\\\nVersao de Teste.\\n\\\nCriado por Marcone.\\n')\nl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nl.bind(('', int(LISTEN_PORT)))\nl.listen(0)\nprint('Esperando Cliente no Ip e Porta: 127.0.0.1:{}\\n'.format(LISTEN_PORT))\nwhile True:\n\tc, a = l.accept()\n\tthreading.Thread(target=conecta, args=(c, a)).start()\nl.close()\n"})}),"\n",(0,s.jsx)(t.p,{children:"This Python code appears to be a simple implementation of a Secure Sockets Layer (SSL) injector with Server Name Indication (SNI) host."}),"\n",(0,s.jsx)(t.p,{children:"The code starts by importing the socket, threading, and select modules. The SNI_HOST and LISTEN_PORT variables are then defined at the beginning of the script. The SNI_HOST variable specifies the hostname that the client will be requesting a secure connection to, while the LISTEN_PORT variable specifies the port number that the injector will be listening on for incoming connection requests."}),"\n",(0,s.jsx)(t.p,{children:"The conecta() function is then defined, which takes two arguments: c and a. This function is called whenever a new client connects to the injector. The function begins by printing a message indicating that a new client has connected, and then it receives a request from the client using the recv() method of the c socket object."}),"\n",(0,s.jsx)(t.p,{children:"The host and port specified in the client\u2019s request are then extracted from the request using the split() method, and a new socket connection is established to the specified host and port using the connect() method of the socket module."}),"\n",(0,s.jsx)(t.p,{children:"The new socket connection is then wrapped in an SSL context using the wrap_socket() method of the ssl module, and the SNI_HOST variable is passed as the server_hostname argument to the wrap_socket() method."}),"\n",(0,s.jsx)(t.p,{children:'The conecta() function then sends an HTTP "200 Established" response to the client, and enters a loop to continually receive data from either the client or the server and send it to the other party. The loop terminates when either the client or the server closes the connection.'}),"\n",(0,s.jsx)(t.p,{children:"Finally, the conecta() function closes both the client and server sockets and prints a message indicating that the client has been disconnected."}),"\n",(0,s.jsx)(t.p,{children:"The main body of the script then creates a new socket using the socket module's socket() function and binds it to the LISTEN_PORT on the local host. The socket is then set to listen for incoming connection requests using the listen() method."}),"\n",(0,s.jsx)(t.p,{children:"The script enters an infinite loop, waiting for new clients to connect using the accept() method of the listening socket. Whenever a new client connects, a new thread is created to handle the connection using the conecta() function as the target, and the client socket and address are passed as arguments."}),"\n",(0,s.jsx)(t.p,{children:"Finally, the listening socket is closed when the script terminates."}),"\n",(0,s.jsx)(t.p,{children:"It looks like this code could potentially be used for SNI spoofing, which is a technique that involves presenting a fake SSL certificate to a client in order to intercept and decrypt the client\u2019s traffic."}),"\n",(0,s.jsx)(t.p,{children:"It is possible that you could use this code to trick your Internet Service Provider (ISP) into believing that you are accessing a different hostname than the one you are actually accessing. However, keep in mind that this code alone is not sufficient to fully trick your ISP."}),"\n",(0,s.jsx)(t.p,{children:"To trick your ISP using this code, you would need to set up a fake SSL certificate for the hostname that you want to spoof, and configure the injector to use this certificate when establishing the SSL connection with your ISP. You would also need to configure your device to send all of your network traffic through the injector, rather than directly to the Internet."}),"\n",(0,s.jsx)(t.p,{children:"To use this code for SNI spoofing, you would need to modify the SNI_HOST variable to specify the hostname that you want to spoof. You would then need to set up a fake SSL certificate for this hostname, and configure the injector to use this certificate when establishing the SSL connection with the client."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import socket\nimport ssl\n\n# Create a socket and bind it to a port\nsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nsock.bind(('localhost', 8080))\nsock.listen()\n\n# Accept incoming connections\nconn, addr = sock.accept()\n\n# Wrap the socket in an SSL context\ncontext = ssl.create_default_context()\nssl_sock = context.wrap_socket(conn, server_side=True)\n\n# Read data from the SSL socket and send it through the tunnel\ndata = ssl_sock.read()\ntunnel_sock = socket.create_connection(('www.example.com', 443))\ntunnel_sock.sendall(data)\n\n# Read the response from the tunnel and send it back to the client\nresponse = tunnel_sock.recv(4096)\nssl_sock.sendall(response)\n\n# Close the sockets\nssl_sock.close()\ntunnel_sock.close()\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This code creates a socket and binds it to the localhost on port 8080. It then listens for incoming connections and accepts them when they arrive. The incoming connection is then wrapped in an SSL context and the data from the connection is read. The data is then sent through a tunnel to the destination server (",(0,s.jsx)(t.a,{href:"http://www.example.com",children:"www.example.com"})," on port 443 in this example). The response from the destination server is read and sent back to the client through the SSL socket. Finally, the sockets are closed."]}),"\n",(0,s.jsx)(t.p,{children:"To spoof the SNI (Server Name Indication) header, you can use the ssl_sock.server_hostname attribute to specify the desired SNI value when creating the SSL context. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"context = ssl.create_default_context()\ncontext.check_hostname = False\ncontext.verify_mode = ssl.CERT_NONE\nssl_sock = context.wrap_socket(conn, server_side=True, server_hostname='www.spoofed-sni.com')\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This will cause the SNI header to be sent with the value \u2018",(0,s.jsx)(t.a,{href:"http://www.spoofed-sni.com",children:"www.spoofed-sni.com"}),"'"," when the SSL handshake is performed."]}),"\n",(0,s.jsx)(t.p,{children:"First, the socket and ssl modules are imported. These modules provide the necessary functions for creating sockets and wrapping them in SSL contexts."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"import socket\nimport ssl\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, a socket is created and bound to the localhost on port 8080. The socket is then put into listening mode to wait for incoming connections."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nsock.bind(('localhost', 8080))\nsock.listen()\n"})}),"\n",(0,s.jsx)(t.p,{children:"When an incoming connection is received, it is accepted and stored in the conn variable along with the address of the client in the addr variable"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"conn, addr = sock.accept()\n"})}),"\n",(0,s.jsx)(t.p,{children:"The incoming connection is then wrapped in an SSL context using the wrap_socket function. This function takes the connection as an argument and returns an SSL socket object. The server_side argument is set to True to indicate that the socket will be used to accept connections from clients."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"context = ssl.create_default_context()\nssl_sock = context.wrap_socket(conn, server_side=True)\n"})}),"\n",(0,s.jsx)(t.p,{children:"The data from the SSL socket is read using the read function and stored in the data variable."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"data = ssl_sock.read()\n"})}),"\n",(0,s.jsx)(t.p,{children:"A connection is then established with the destination server using the create_connection function from the socket module. This function takes the address of the destination server as an argument and returns a socket object that can be used to send and receive"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"tunnel_sock = socket.create_connection(('www.example.com', 443))\n"})}),"\n",(0,s.jsx)(t.p,{children:"The data that was read from the SSL socket is then sent through the tunnel to the destination server using the sendall function."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"tunnel_sock.sendall(data)\n"})}),"\n",(0,s.jsx)(t.p,{children:"The response from the destination server is read using the recv function and stored in the response variable."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"response = tunnel_sock.recv(4096)\n"})}),"\n",(0,s.jsx)(t.p,{children:"The response is then sent back to the client through the SSL socket using the sendall function."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ssl_sock.sendall(response)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Finally, both the SSL socket and the tunnel socket are closed using the close function."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ssl_sock.close()\ntunnel_sock.close()\n"})}),"\n",(0,s.jsx)(t.p,{children:"In conclusion, it is possible to create a TCP over SSL tunnel using Python\u2019s ssl module. This can be useful for encrypting network traffic and bypassing network restrictions. The SNI (Server Name Indication) header can also be spoofed by specifying a different server name when creating the SSL context on the client side. While SNI spoofing can be used for legitimate purposes, it can also be used for malicious purposes such as bypassing network restrictions or performing SSL strip attacks. It's important to be aware of the potential risks and use SNI spoofing responsibly."}),"\n",(0,s.jsx)(t.p,{children:"References:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://arxiv.org/ftp/arxiv/papers/2212/2212.05447.pdf",children:"Bypassing Content-based internet packages with an SSL/TLS Tunnel, SNI Spoofing, and DNS spoofing by Shanaka Anuradha Samarakoon"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://hal.inria.fr/hal-01202712/document",children:"Efficiently Bypassing SNI-based HTTPS Filtering by Wazen M. Shbair, Thibault Cholez, Antoine Goichot, Isabelle Chrisment"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},56213:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(50959);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);