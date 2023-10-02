---
slug: 2022-12-26-tcp-over-ssl-tunnel-sni-spoofing
title: SNI Spoofing Analysis
authors: [hirusha]
tags: [python, network, hacking]
---

TCP over SSL tunneling is a technique for encapsulating normal TCP traffic within SSL/TLS encryption. This can be used to secure network communication and protect against man-in-the-middle attacks.

<!--truncate-->

![TCP Over SSL Tunnel Software](https://cdn-images-1.medium.com/v2/resize:fit:880/0*ls1-d3UfIMvyvPf0)

Server Name Indication (SNI) is an extension to the TLS protocol that allows a client to specify the domain name it is connecting to at the start of the handshake process. This enables a server to host multiple TLS-based websites on a single IP address and port, as the server can use the SNI information to determine which certificate to present to the client.

SNI injection involves manipulating the SNI field in the TLS handshake process in order to trick the server into presenting a different certificate than the one it would normally present. This can be used in various ways, such as to bypass certificate-based access controls or to perform man-in-the-middle attacks.

In the context of TCP over SSL tunneling, SNI injection can be used to bypass controls that are based on the domain name being accessed. For example, if a client is using an SSL tunnel to access a specific domain, the server may only allow access if the SNI field in the TLS handshake matches that domain. By injecting a different domain name into the SNI field, the client may be able to bypass these controls and gain access to the server even if it is not normally allowed.

It is important to note that SNI injection can be a serious security vulnerability and should be properly mitigated to prevent exploitation.

The SNI (Server Name Indication) header is an extension to the TLS (Transport Layer Security) protocol that allows a client to specify the desired server name during the SSL/TLS handshake. This is typically used to identify the server that the client wants to connect to when multiple servers are hosted on the same IP address.

Here is the wireshark output of the extension:

```
Extension: server_name (len=24)
Type: server_name (0)
Length: 24
Server Name Indication extension
Server Name list length: 22
Server Name Type: host_name (0)
Server Name length: 19
Server Name: clients5.google.com
```

Spoofing the SNI header involves sending a forged SNI value to the server during the SSL/TLS handshake. This can be done by specifying a different server name when creating the SSL context on the client side. For example, if the client wants to connect to www.example.com, but wants to spoof the SNI header to say www.spoofed-sni.com, it can do so by specifying www.spoofed-sni.com as the server name when creating the SSL context.

There are a few reasons why someone might want to spoof the SNI header. One reason is to bypass network restrictions that are based on the server name. For example, if a client is blocked from accessing www.example.com, but is allowed to access www.spoofed-sni.com, it can use SNI spoofing to bypass the restriction. Another reason is to perform SSL strip attacks, where an attacker intercepts and downgrades secure connections to non-secure connections in order to steal sensitive information.

It’s important to note that spoofing the SNI header does not necessarily guarantee a successful connection to the desired server. The server may still perform checks to verify the authenticity of the client and the connection, and may reject the connection if it determines that the client is not legitimate.

Original Code: [Click here.](https://sourceforge.net/p/tcpoverssltunnel/code-0/ci/master/tree/client.py#l10)

```python
import socket, threading, select

SNI_HOST = 'www.example.com'
LISTEN_PORT = 8088


def conecta(c, a):
	print('<#> Cliente {} recebido!'.format(a[-1]))
	request = c.recv(8192)

	host = request.split(':')[0].split()[-1]
	port = request.split(':')[-1].split()[0]


	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.connect((str(host), int(port)))

	# Wrap o SSL.
	import ssl
	ctx = ssl.SSLContext(ssl.PROTOCOL_SSLv23)
	s = ctx.wrap_socket(s, server_hostname=str(SNI_HOST))

	# Direta
	c.send(b"HTTP/1.1 200 Established\r\n\r\n")



	connected = True
	while connected == True:
		r, w, x = select.select([c,s], [], [c,s], 3)
		if x: connected = False; break
		for i in r:
			try:
				# Break if not data.
				data = i.recv(8192)
				if not data: connected = False; break
				if i is s:
					# Download.
					c.send(data)
				else:
					# Upload.
					s.send(data)
			except:
				connected = False
				break
	c.close()
	s.close()
	print('<#> Cliente {} Desconectado!'.format(a[-1]))


# Listen
print('Injector SSL com SNI Host em Python\n\
Versao de Teste.\n\
Criado por Marcone.\n')
l = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
l.bind(('', int(LISTEN_PORT)))
l.listen(0)
print('Esperando Cliente no Ip e Porta: 127.0.0.1:{}\n'.format(LISTEN_PORT))
while True:
	c, a = l.accept()
	threading.Thread(target=conecta, args=(c, a)).start()
l.close()
```

This Python code appears to be a simple implementation of a Secure Sockets Layer (SSL) injector with Server Name Indication (SNI) host.

The code starts by importing the socket, threading, and select modules. The SNI_HOST and LISTEN_PORT variables are then defined at the beginning of the script. The SNI_HOST variable specifies the hostname that the client will be requesting a secure connection to, while the LISTEN_PORT variable specifies the port number that the injector will be listening on for incoming connection requests.

The conecta() function is then defined, which takes two arguments: c and a. This function is called whenever a new client connects to the injector. The function begins by printing a message indicating that a new client has connected, and then it receives a request from the client using the recv() method of the c socket object.

The host and port specified in the client’s request are then extracted from the request using the split() method, and a new socket connection is established to the specified host and port using the connect() method of the socket module.

The new socket connection is then wrapped in an SSL context using the wrap_socket() method of the ssl module, and the SNI_HOST variable is passed as the server_hostname argument to the wrap_socket() method.

The conecta() function then sends an HTTP "200 Established" response to the client, and enters a loop to continually receive data from either the client or the server and send it to the other party. The loop terminates when either the client or the server closes the connection.

Finally, the conecta() function closes both the client and server sockets and prints a message indicating that the client has been disconnected.

The main body of the script then creates a new socket using the socket module's socket() function and binds it to the LISTEN_PORT on the local host. The socket is then set to listen for incoming connection requests using the listen() method.

The script enters an infinite loop, waiting for new clients to connect using the accept() method of the listening socket. Whenever a new client connects, a new thread is created to handle the connection using the conecta() function as the target, and the client socket and address are passed as arguments.

Finally, the listening socket is closed when the script terminates.

It looks like this code could potentially be used for SNI spoofing, which is a technique that involves presenting a fake SSL certificate to a client in order to intercept and decrypt the client’s traffic.

It is possible that you could use this code to trick your Internet Service Provider (ISP) into believing that you are accessing a different hostname than the one you are actually accessing. However, keep in mind that this code alone is not sufficient to fully trick your ISP.

To trick your ISP using this code, you would need to set up a fake SSL certificate for the hostname that you want to spoof, and configure the injector to use this certificate when establishing the SSL connection with your ISP. You would also need to configure your device to send all of your network traffic through the injector, rather than directly to the Internet.

To use this code for SNI spoofing, you would need to modify the SNI_HOST variable to specify the hostname that you want to spoof. You would then need to set up a fake SSL certificate for this hostname, and configure the injector to use this certificate when establishing the SSL connection with the client.

```python
import socket
import ssl

# Create a socket and bind it to a port
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.bind(('localhost', 8080))
sock.listen()

# Accept incoming connections
conn, addr = sock.accept()

# Wrap the socket in an SSL context
context = ssl.create_default_context()
ssl_sock = context.wrap_socket(conn, server_side=True)

# Read data from the SSL socket and send it through the tunnel
data = ssl_sock.read()
tunnel_sock = socket.create_connection(('www.example.com', 443))
tunnel_sock.sendall(data)

# Read the response from the tunnel and send it back to the client
response = tunnel_sock.recv(4096)
ssl_sock.sendall(response)

# Close the sockets
ssl_sock.close()
tunnel_sock.close()
```

This code creates a socket and binds it to the localhost on port 8080. It then listens for incoming connections and accepts them when they arrive. The incoming connection is then wrapped in an SSL context and the data from the connection is read. The data is then sent through a tunnel to the destination server (www.example.com on port 443 in this example). The response from the destination server is read and sent back to the client through the SSL socket. Finally, the sockets are closed.

To spoof the SNI (Server Name Indication) header, you can use the ssl_sock.server_hostname attribute to specify the desired SNI value when creating the SSL context. For example:

```
context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE
ssl_sock = context.wrap_socket(conn, server_side=True, server_hostname='www.spoofed-sni.com')
```

This will cause the SNI header to be sent with the value ‘www.spoofed-sni.com' when the SSL handshake is performed.

First, the socket and ssl modules are imported. These modules provide the necessary functions for creating sockets and wrapping them in SSL contexts.

```
import socket
import ssl
```

Next, a socket is created and bound to the localhost on port 8080. The socket is then put into listening mode to wait for incoming connections.

```
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.bind(('localhost', 8080))
sock.listen()
```

When an incoming connection is received, it is accepted and stored in the conn variable along with the address of the client in the addr variable

```
conn, addr = sock.accept()
```

The incoming connection is then wrapped in an SSL context using the wrap_socket function. This function takes the connection as an argument and returns an SSL socket object. The server_side argument is set to True to indicate that the socket will be used to accept connections from clients.

```
context = ssl.create_default_context()
ssl_sock = context.wrap_socket(conn, server_side=True)
```

The data from the SSL socket is read using the read function and stored in the data variable.

```
data = ssl_sock.read()
```

A connection is then established with the destination server using the create_connection function from the socket module. This function takes the address of the destination server as an argument and returns a socket object that can be used to send and receive

```
tunnel_sock = socket.create_connection(('www.example.com', 443))
```

The data that was read from the SSL socket is then sent through the tunnel to the destination server using the sendall function.

```
tunnel_sock.sendall(data)
```

The response from the destination server is read using the recv function and stored in the response variable.

```
response = tunnel_sock.recv(4096)
```

The response is then sent back to the client through the SSL socket using the sendall function.

```
ssl_sock.sendall(response)
```

Finally, both the SSL socket and the tunnel socket are closed using the close function.

```
ssl_sock.close()
tunnel_sock.close()
```

In conclusion, it is possible to create a TCP over SSL tunnel using Python’s ssl module. This can be useful for encrypting network traffic and bypassing network restrictions. The SNI (Server Name Indication) header can also be spoofed by specifying a different server name when creating the SSL context on the client side. While SNI spoofing can be used for legitimate purposes, it can also be used for malicious purposes such as bypassing network restrictions or performing SSL strip attacks. It's important to be aware of the potential risks and use SNI spoofing responsibly.

References:

- [Bypassing Content-based internet packages with an SSL/TLS Tunnel, SNI Spoofing, and DNS spoofing by Shanaka Anuradha Samarakoon](https://arxiv.org/ftp/arxiv/papers/2212/2212.05447.pdf)
- [Efficiently Bypassing SNI-based HTTPS Filtering by Wazen M. Shbair, Thibault Cholez, Antoine Goichot, Isabelle Chrisment](https://hal.inria.fr/hal-01202712/document)

