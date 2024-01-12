---
title: Chapter 2 - Communication and networking technologies
sidebar_label: 2. Communication and networking technologies
slug: chapter_2_communication_and_networking_technologies
sidebar_position: 2
---

## WAN (Wide Area Network)

- for organizations we lease stuff
- has PSTN or Fiber Optics
- transmission happens from switch to switch

#### What is a Leased Line?

- permanant connections
- only available for bussinesses

## LAN (Local Area Network)

- within building we own stuff
- twisted pair cables or wireless technology is used

### Central Device

- manages traffic by forwarding packets to devices in the LAN

#### What LAN Hardware is used as a central device?

- a switch/hub *or*
- a router

# Word Wide Web (WWW)

- Has a large collection of websites each having one or more web pages
- linked via hyperlinks

## Internet

- main infrastructure
- many networks connected together

### Internet vs WWW

- internet is infrastruture
- WWW is web pages
- WWW is accessed over internet
- Web Pages written in HTML
- HTTP fir transfer of web pages
- Internet uses IP Protocol

## Client-Server Model

- client runs the application provided by a server on a network

#### Web Server

- web pages saved on servers
- client sends requests to servers
- servers process the request
- return results to client (web page)
- client displays results

#### File Server

- employee PC are clients
- server hosts shared file
- request file from server
- many people can access the same file simultaneously

#### General Answer

- tell what the client is
- request from server
- process
- return to client
- client outputs the result to query returned by the server


### Thin Client

- only input
- output from backend
- does no processing

### Thick Client

- atleast does some processing

## Peer-to-Peer Networks

- eg: Bittorrent Protocol
- parts available from many hosts can download simultaneously

### Good

- all computers have equal status
- data is distributed
- devices can share resources
- each PC is responsible for its own security

### Bad

- reduced security
- no central management
- no central backup
- individual devices may respond slower
- all devices needs to be switched on


## Communication

![img1](https://cdn.discordapp.com/attachments/1163847683207856178/1168496991546900520/image.png?ex=6551faa0&is=653f85a0&hm=fa8182b8968f4eb7146664f913f6f21a8caf30612c6c8ffd9ffcedcc74ad87f1&)

- this image shows
    1. simplex
    2. half duplex
    3. full duplex

### Simplex

- the communication between sender and receiver occurs in only one direction

### Half Duplex

- the communication between sender and receiver occurs in both directions in half duplex transmission, but only one at a time

### Full Duplex

- data can be transmitted in both directions on a signal carrier at the same time

## Topologies

### Point to Point Topology

- Only unicast happens here
- Isolated network with a dedicated link

![cc1](https://cdn.discordapp.com/attachments/1163847683207856178/1168505564448428082/image.png?ex=6552029c&is=653f8d9c&hm=e26b778c090cde8599b2fde194e1400e8ecd81fec86a2a1013f0cb625b0fdf94&)

### Bus Topology

- has only one link but it is shared by many end-systems. so, its multipoint connection
- Message is sent as broadcast
- if one computer failed, other still function

![cc2](https://cdn.discordapp.com/attachments/1163847683207856178/1168505843646476288/image.png?ex=655202de&is=653f8dde&hm=18e2c44ce366cdd1f21fc0792e5e2552d23bf9dc3405fb9d1071a41d0742f9ba&)

### Mesh Topolgy

- Unrealistic as amount of cabling required
- Used for connection of routers within the infrastructure of the internet

![cc3](https://cdn.discordapp.com/attachments/1163847683207856178/1168505980359811142/image.png?ex=655202ff&is=653f8dff&hm=0dd6e9ed4501b498982100344d4705a4a028187aa23f05f1dc563e2d01245e91&)

### Star Topolgy

- Each end system is linked to a central device
- A hub or a switch (mostly with a router)
- Most Common
- Duplex transmission
- Uses all broadcast, multicast or unicast

![cc4](https://cdn.discordapp.com/attachments/1163847683207856178/1168506312615796846/image.png?ex=6552034e&is=653f8e4e&hm=0e87993625705077995c111d9f4cea532a85d05ac8cafd1565d2f9da2d3cf896&)

## Sending Messages

### Unicast

- one to one communication

### Multicast

- one source to many destinations

### Broadcast

- one to all 
- communications in radio, TV

## Wired Transmission Mediums

![bb1](https://cdn.discordapp.com/attachments/1163847683207856178/1168507498148409424/image.png?ex=65520469&is=653f8f69&hm=566b4f149b6f3614d66af684cd82029798d96ed2bb4a95e23458df81c21bb887&)

#### What is Bandwidth?

- measure of the amount of data that can be transmitted per second

### Copper / Twisted Pair


### Fiber

- data is transmitted through glass  / plastic tubes

#### Good

- less interference to signal
- no crosstalk
- less signal degrading
- less boosting needed
- more secure, stable, faster
- higher bandwidth
- lower latency / ping

#### Bad

- initial costs are high
- expensive maintainance
- needs trained specialists
- can break when bent
- hard to terminate
- once strand can send data only to a single directtion at a time
    - so, two strands are used
    - making it more expensive
- cannot transmit power like PoE (Power over Ethernet)

#### Copper vs Fiber

![bb3](https://cdn.discordapp.com/attachments/1163847683207856178/1168507663462711366/image.png?ex=65520490&is=653f8f90&hm=d7eaba414ae80f2a9686e16daed650d134d32d49e1c8fb617403a522cb4b27b1&)

## Wireless Transmission Mediums

- different electromagnetic waves of different wavelengths are used

![bb4](https://cdn.discordapp.com/attachments/1163847683207856178/1168507805918040084/image.png?ex=655204b2&is=653f8fb2&hm=bcaa8e8caf30b5ca4579135a14f31a1eba3d4445e7f265b66917b21c30851807&)

### Good

- less hardware needed
- users can be mobile
- more straighforward to connect
- cheap
- can be accessed within a range

### Bad

- less secure transmissions
- easily interceptable by a man in the middle (MITM)
- low bandwidth
- high latency / ping
    - therefore, slower access
- interference from other signals which disturbs tranmissions
- limited range
- high attenuation
- needs a lot of repeaters 



### Satellites

- placed/exist within Van Allen Belts

#### How does Transmission Occur?

- sends data to satellites in the orbit

![bb7](https://cdn.discordapp.com/attachments/1163847683207856178/1168508246491922543/image.png?ex=6552051b&is=653f901b&hm=a40f7dffe4727671ba41d4a7b4b651a0ee7964ecc722a575ba954a79c1de1753&)

#### Mid Orbit

- GPS (Global Positioning System)

#### Low Orbit

- mobile phone networks
- need **50+**  for global coverage


## LAN Hardware

### Server

- manages access to a centralized resource

### Router

- recieve data frrom network and forward them to another similiar network

### Gateway

- like a router but can connect networks with different protocols (two *dissimiliar networks*)
- joins networks that use different sets of rules to transmit data

### Firewall

- monitors and controls incoming and outgoing traffic based on criteria
- prevents unauthorized access
- prevents reconissance port stance of the networks
- block unauthorized transmissions
- maintains an allow list or a blacklist

### Repeater

- generates a new full strength signal
- from an attenuated signal thats recieved


### Bridge

- connects two segments together

#### What are Segments?

- bus networks has several of these

### NIC

- Network Interface Card
- has a unique MAC Address used to connect to a network

### Switch

- connecting devices that can send a unicast message

### WAP

- Wireless Access Points
- connecting device in Wifi LAN

### WNIC

- provides NIC function in a WiFi LAN

## Ethernet

#### Introductions

- standardization adopted by IEEE
- transmits at broadcast
- **"Collisions"** occur when packets are sent by two clients at the same time, causing them to be curropt
- when a system recieves any packet, the system checks the destination IP Address, destination MAC Address is for it or not
- this is very system intensive when broadcast without switches
- modern switches controls transmissions intelligently unlike hubs in full duplex mode
- so, no collisions occur

### CSMA/CD

- Carrier Sense Multiple Access / Collision Detection

#### How does CSMA/CD manage collisions?

- workstation listens to the communication channel
- if data is being transmitted, wait a random time and try again
- if no data is being transmitted, the workstation will send its data
- a collision might occur if another device sent data in this same time as well
- if collisions occur, each workstation waits a random time before re-transmitting
- if another collision occurs, the random waiting time is increased

## PSTN / POTS

- Public Switched Telephone Networks
- in old times, it was called Plain Old Telephone Service

#### Who uses theses?

- WAN / MAN s lease these lines

#### How is data being transmitted?

- many different communication lines
- full duplex data transmission
- communication passes through different switching centers

### Good

- faster
- consistent
- secure

### Bad

- expensive setup
- expensive maintainance
- disruption in line would cause the network to go down
    - we would have no alternative route

### Earlier

- carried analogue voice data
- **Modem** was responsible for Modulation and DeModulation

### Present

- provide broadband networks
- WiFi Hotsposts using WAPS


## Cell Phone Networks

- by mobile phone companies acting as ISPs
- talks with strandard cell tower to access telephone network wirelessly


## Bit Streaming

#### What is a Buffer?

- Buffer is where we temporaily store data until the video is closed

#### What is Bit-Rate?

- number of bits thats transmitted per second

#### Why does my video buffer?

- slow bandwidth
- video is HQ to live stream
- congestion on home network
- high demand from supplier
- apps running in background taking up network usage
    - eg: Windows Updates

### How Bit Streamed?

- data is compressed before transmission
- video transmits continuously as a series of bits
- video is hosted on a media server
- on download, server sends data to the buffer of the client's application
- the users software recieves bit streams from the buffers
- buffer size should be larger so it never gets filled

### Real Time Bit Streaming

- used when watching a live stream of events that are currently taking place
- the even captured live with a video camera connected to a computer
- it cannot be paused or rewound
- not already stored online
- so, cannot 

### On-Demand Bit Btreaming

- used when watching an event that has taken place in the past
- existing media are encoded to bit streaming format and uploaded to a server
- it can be paused or rewound
- it is stored in a server

## IP Addresse Scope

- not all devices in the local network needs a public IP
- 1 for the router is enough
- its basically shared (with the help of NAT)

#### Why a router might have both a public IP and a private IP?

- the private IP is used within the local network to identify devices
- Public IP assigned by the ISP to enable communication with  devices on internet
- local devices talk to the  internet through router
- local devices not directly accessible through the router

### Public IP

- assigned by an ISP
- can be accessed by anyone using the internet
- used to get internet
- must be unique throught the internet

### Private IP

- assigned by the router
- cannot access over internet by anyone
- communicate within a networks
- duplicated in different networks (local)
- unique only within that particular local area network


## IP Address Assignments

### Static IP

- dsoes not change after it has been assigned by the ISP/router
- ideal for servers
    - eg: if DNS points to a Dynamic IP, then, the IP will be changed and the DNS will be pointing to something else, which would give an error

### Dynamic IP

- IP address changes dynamically
- Bad for web servers

## IP Address Types

### IPv4

- 4 groups of digits
- from 0 to 255 (any type, mostly binary or decimal)
- dotted decimal notation
- 32 bits (2^32 / 4 billion addresses)

```
10000000 00001100 00000010 00011110
  128   .   12   .   2  .     30
		    128.12.2.30
```

### IPv6

- 8 groups of digits
- from 0 to 65535 / `0x000000` -> `0xFFFFFF`
- seperated by a colon
- 128 bits
- `::` means `:000000:000000:`
- cannot have `::` in one address

#### why IPv6?

- 4 billion addresses is not enough
- so, we need more

#### Remember

- when checking for errors, check for
    - too many digits per group
    - too many groups of digits
    - more bits than the address can have
    - seperators / delimiters

## IP Address Other

### Classful IPs

![xx1](https://cdn.discordapp.com/attachments/1163847683207856178/1168509621267341443/image.png?ex=65520663&is=653f9163&hm=0354a0ecf44081f2bace5eeda0cdb086e40e412f5808e8ef8814e7be015fb721&)

### CIDR

- Class Interdomain Routing Index
- add an 8 bit suffix to the address to specifiy the number of the bits used for netID

![xx2](https://cdn.discordapp.com/attachments/1163847683207856178/1168509757284425778/image.png?ex=65520683&is=653f9183&hm=ccbe176c07235fa3e379a48ab2b6979110ea9648e3528a862b6fdf7be41ee9a0&)

### Subnetting

- Divide single network logically into multiple smaller networks
- aka subnetworks / subnets
- divide large networks to small subnets logically
- improved performance and security
- easier to add more devices
- less collisions occur when broadcast happens

![xx3](https://cdn.discordapp.com/attachments/1163847683207856178/1168509800380891227/image.png?ex=6552068e&is=653f918e&hm=c216813e32f8025a30a104002986d52c7e80287ff9bb664853d07dfec41022fb&)

### NAT

- Network Address Translation
- maps multiple addresses inside a local network to one public IP adress before transferring into the internet

![xx4](https://cdn.discordapp.com/attachments/1163847683207856178/1168509987350396928/image.png?ex=655206ba&is=653f91ba&hm=06ac393dfa1365e224f43a2fd5f31c7a9671d62fa10e647e678bfcab6052910c&)

### DNS

- Doman Name Service
- browser parses URL and obtains the domain name
- domain name looked up in the local cache
- if not found, send to the closest DNS server
- which hasa table of domain names and server IPs
- if found, returns the IP address to the browser
- else, request is sent to t a DNS server at a higher level of the hierarchy
- if domain name is not found, return an error
- basically
    - maps a domain name to an IP Address

:::info BEYOND SYLLABUS

[Click here to learn more!](https://www.youtube.com/watch?v=mpQZVYPuDGU)

1. **User Input**: When a user types a web address like "google.com" into their web browser, the browser needs to find the IP address of the server hosting the website.

2. **Local DNS Cache**: The first place the browser checks is its own local DNS cache. This is a small database on the user's device that stores recently resolved DNS queries. If the IP address for "google.com" is found in the cache, the browser can immediately connect to the website without further DNS resolution.

3. **Resolver Server**: If the IP address is not found in the local cache, the browser contacts a resolver server. The resolver server is typically provided by the user's Internet Service Provider (ISP). This server is responsible for handling DNS queries on behalf of the user.

4. **Resolver's Cache**: The resolver server also has its own cache. It checks this cache to see if it has recently resolved the IP address for "google.com." If it finds a recent record, it returns the IP address to the user's browser.

5. **Root DNS Servers**: If the IP address is not in the resolver's cache, the resolver server needs to find out which DNS server can provide the answer. It starts at the top of the DNS hierarchy by contacting one of the 13 sets of root DNS servers distributed around the world.

6. **TLD Server**: The root DNS server doesn't have information about specific domains like "google.com," but it does know which Top-Level Domain (TLD) server to contact. In this case, it will direct the resolver server to the TLD server for ".com" domains.

7. **Authoritative Name Server**: The TLD server for ".com" provides the resolver server with information about the Authoritative Name Server responsible for the "google.com" domain.

8. **Authoritative Name Server**: The resolver contacts the Authoritative Name Server for "google.com." This server has the precise information about the IP address of Google's servers.

9. **IP Address Returned**: The IP address for "google.com" is sent back from the Authoritative Name Server to the resolver server, and then to the user's PC. The user's browser now knows the IP address and can connect to Google's servers to retrieve the web page.

10. **Caching**: To improve performance, both the resolver and the user's PC cache the IP address. Caching reduces the need to repeatedly query the DNS system for the same domain, making subsequent requests faster.

:::

## Cloud Computing 

### Private Cloud

- Organization takes full responsibility
- Third party manages the on-site network
- Third party manages the online accessible system

### Public Cloud

- File servers, Application Servers
- Accessed from browser from any network with proper authorization
- Server farms or mainframes are used	