---
title: Exam Style Questions - Communication and Internet technologies
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

## Question 1

#### 1. The following represents the structure of an IP datagram.

![i1](https://cdn.discordapp.com/attachments/1163847683207856178/1168542896434196530/image.png?ex=65522560&is=653fb060&hm=fec0bbd7b6cce086f9bd3080af63837826a2bb69101d918eae32b415efef7667&)

####  Using the code IP for IP Header, TCP for TCP Header and Content for TCP Content identify where the following data will be found:

#### **a** - *Destination address*, **b** - *Sender address* , **c** - *Destination port*, **d** - *Sender port*, **e** - *Packet sequence number*, **f** - *Acknowledgement.*

- **a** - *Destination address*  - IP
- **b** - *Sender address* - IP
- **c** - *Destination port* - TCP
- **d** - *Sender port* - TCP
- **e** - *Packet sequence number* - TCP
- **f** - *Acknowledgement.* - TCP

## Question 2

#### 2. Ethernet can be used in conjunction with the TCP/IP protocol suite.

### Part a)

#### a. Draw a diagram to illustrate how the combination of Ethernet and the TCP/IP suite provides support for data communication.

```
          +-------------------------------+
          |       Application Layer       |
          +-------------------------------+
          |   Transport Layer (TCP/UDP)   |
          +-------------------------------+
          |        Network Layer (IP)     |
          +-------------------------------+
          |   Data Link Layer (Ethernet)  |
          +-------------------------------+
          |    Physical Layer (Hardware)  |
          +-------------------------------+
```

- The "**Application Layer**" represents software applications that use the TCP/IP suite to communicate, such as web browsers, email clients, and other network-aware programs.

- The "**Transport Layer**" is where the Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) operate. It provides end-to-end communication and error-checking.

- The "**Network Layer**" handles IP addressing and routing, ensuring data reaches its intended destination across networks.

- The "**Data Link Layer**" is where Ethernet operates, and it's responsible for framing data into packets and managing communication on the local network.

- The "**Physical Layer**" represents the underlying hardware, such as network cables and network interface cards (NICs), that enable the physical transmission of data.

### Part b)

#### b. Explain the meaning of the term ‘MAC address’.

- A MAC address, short for Media Access Control address, is a unique identifier assigned to a network interface controller (NIC) or network adapter in a computer or network device. MAC addresses are used at the Data Link Layer of the OSI model to distinguish and address devices within a local network segment.

- **Uniqueness**
    - globally unique to make sure no two network interface cards (NICs) share the same MAC address

- **Structure**: 
    - a MAC address is typically 48 bits (or 64 bits in much newer systems) 
    - represented as 6 groups of 2 hex digits (total 12 hex characters)
    - a sequence of 12 hexadecimal digits (0-9 and A-F)
    - eg:  "00:1A:2B:3C:4D:5E."

- **OUI**: 
    - first 3 groups of 2 hex digits of a MAC address are for the *Organizationally Unique Identifier (OUI)* 
    - also called *vendor id*
    - to identify the manufacturer of the device easily

- **Locality**: 
    - used for communication within a local network segments 
    - like an Ethernet LAN
    - this is *NOT* globally routable across the internet, unlike IP addresses

## Question 3

#### 3. One end-system with an Internet connection has a file. A user on another end-system connected to the Internet needs a copy of the file. There are different methods that might be used to enable the user to obtain a copy of the file.

### Part a)

#### a. Identify three possible methods with a brief explanation for each

- HTTP File Transfer:

    - user accesses the file using his web browser that is hosted on the web server
    - the file is usually made available for download via a URL/route
    - user can simply click and download the file

- FTP (File Transfer Protocol):

    - its a dedicated protocol for transferring files over networks
    - user useses FTP client to connect to an FTP server where the file is stored
    - they can then navigate the servers directory structure and download the file to their own system

- Cloud Storage and File Sharing:

    - user can upload the file to a cloud storage service (eg: Google Drive, MEGA, OneDrive)
    - then, they can share a link or grant access permissions to the file with other users
    - They can then access and download the file via a web browser or the CSP's (cloud storage providers) app

### Part b)

#### b. Identify the application-layer protocols that each method will use with a brief explanation for each one

- HTTP (Hypertext Transfer Protocol):

    - HTTP is the application layer protocol used with the method of HTTP file transfer. 
    - When a user clicks on a link to download the file, their web browser makes an HTTP request to the web server hosting the file
    - then, the server responds/returns with the file content, which is then displayed or saved on the user's device

- FTP (File Transfer Protocol):

    - FTP is both an application layer protocol and a method for transferring files
    - FTP clients and servers use this protocol 
        - to establish a connection 
        - authenticate users 
        - navigate directories and
        - transfer files between end-systems
        
- Various Proprietary Protocols or APIs for Cloud Storage Services:

    - they usually use their own proprietary protocols or APIs (application programming interfaces) for file transfers
    - they are specifically designed to work with each cloud service's infrastructure
    - eg: Google Drive API, Dropbox API
    - these APIs allow user to interact and manage files with CSP (Cloud Service Provider)

## Question 4

#### 4. For sending and receiving emails the following application protocols might be used: SMTP, POP3, IMAP, HTTP. For each of these protocols give a brief explanation as to how they might be used in association with an email application. You might find it useful to include a diagram for some of your account

- SMTP (Simple Mail Transfer Protocol)

    - used for sending sending outgoing emails
    - email application uses this to communicate with the email server
    -  it routes and delivers emails to the recipients server

- POP3 (Post Office Protocol version 3):

    - used for recieving incoming emails
    - downloads emails from server 
        - and stores locally on users device
    - emails are deleted from server after user is done downloading them

- IMAP (Internet Message Access Protocol):

    - also used for recieving emails
    - syncs emails between server and users device (email client)
    - this allows access from multiple devices

- HTTP (Hypertext Transfer Protocol):

    - used to access webmail interfaces
    - email provider  gives a web-based email application
    - which is accessible from the web-browser

## Question 5

### Part a)

#### a. Four descriptions and three protocols are shown below. Draw a line to connect each description to the appropriate protocol

![qq1](https://cdn.discordapp.com/attachments/1163847683207856178/1168582202347487292/image.png?ex=655249fc&is=653fd4fc&hm=9ea5a6bf61c6cff267f0ddd764daaff42df3d7b3d38518b15ef57dba54dd6cc4&)

![qq2](https://cdn.discordapp.com/attachments/1163847683207856178/1168582892507627572/image.png?ex=65524aa0&is=653fd5a0&hm=1a787479a0aa8979be2b15df00dfea23d701b9f482943925f8785bd719894577&)

### Part b)

#### b. Downloading a file can use the client-server model. Alternatively, a file can be downloaded using the BitTorrent protocol. Name the model used.

- Peer to Peer / P2P

### Part c)

#### c. For the BitTorrent protocol, explain the function of each of the following: 1. tracker 2. seed 3. swarm

#### My Answer:

- Tracker
    - server that is facilitating BitTorrent file sharing
    - by managing and coordinating file transfers among peers in a torrent swarm
    - clients contact the tracker for a list of available peers
        - allowing simultaneous file downloads from multiple sources

- Seed
    - a client with the complete file, actively uploading it to others in the torrent
    - ensures the torrents health by facilitating the distribution of the complete file to peers that are still downloading it
    - more seeds lead to faster and a much more reliable file distribution

- Swarm
    - all group of peers participating in the distribution of a particular torrent
    - includes both seeders (complete file) and leechers (downloading users)
    - when more users join the swarm, efficiency of distribution increases
        - benefiting from a balance between seeders and leechers for quicker downloads

#### Marking Scheme:

- Tracker
    - central server that
        - stores details of other computers that have all / part of file to bedownloaded
        - has data on those peers downloading and uploading file
        - shares IP addresses with other clients in swarm allowing them to connect 

- Seed
    - peer computer
    - that has 100% of file 
    - is uploading downloaded content 

- Swarm 
    - all the connected peer computers
    - that have all or part of the file to be downloaded/uploaded
    - share a torrent 

## Question 6

#### 6. An email is sent from one email server to another using packet switching.

### Part a)

#### a) State two items that are contained in an email packet apart from the data. [2]

#### My Answer

- [Source / Reference](https://networklessons.com/cisco/ccna-routing-switching-icnd1-100-105/ipv4-packet-header)

![ww1](https://cdn.discordapp.com/attachments/1163847683207856178/1168587346397118574/ip-packet-header-fields.png?ex=65524ec6&is=653fd9c6&hm=fe7d802002d9e610b110e7b9afe562900ade5f0fa1029f93c7502aea084a926a&)

- Version: the first field tells us which IP version we are using, only IPv4 uses this header so you will always find decimal value 4 here.
- Header Length: this 4 bit field tells us the length of the IP header in 32 bit increments. The minimum length of an IP header is 20 bytes so with 32 bit increments, you would see value of 5 here. The maximum value we can create with 4 bits is 15 so with 32 bit increments, that would be a header length of 60 bytes. This field is also called the Internet Header Length (IHL).
- Type of Service: this is used for QoS (Quality of Service). There are 8 bits that we can use to mark the packet which we can use to give the packet a certain treatment. You can read more about this field in my IP precedence and DSCP lesson.
- Total Length: this 16-bit field indicates the entire size of the IP packet (header and data) in bytes. The minimum size is 20 bytes (if you have no data) and the maximum size is 65.535 bytes, that’s the highest value you can create with 16 bits.
- Identification: If the IP packet is fragmented then each fragmented packet will use the same 16 bit identification number to identify to which IP packet they belong to.
- IP Flags: These 3 bits are used for fragmentation:
    - The first bit is always set to 0.
    - The second bit is called the DF (Don’t Fragment) bit and indicates that this packet should not be fragmented.
    - The third bit is called the MF (More Fragments) bit and is set on all fragmented packets except the last one.
- Fragment Offset: this 13 bit field specifies the position of the fragment in the original fragmented IP packet.
- Time to Live: Everytime an IP packet passes through a router, the time to live field is decremented by 1. Once it hits 0 the router will drop the packet and sends an ICMP time exceeded message to the sender. The time to live field has 8 bits and is used to prevent packets from looping around forever (if you have a routing loop).
- Protocol: this 8 bit field tells us which protocol is enapsulated in the IP packet, for example TCP has value 6 and UDP has value 17.
- Header Checksum: this 16 bit field is used to store a checksum of the header. The receiver can use the checksum to check if there are any errors in the header.
- Source Address: here you will find the 32 bit source IP address.
- Destination Address: and here’s the 32 bit destination IP address.
- IP Option: this field is not used often, is optional and has a variable length based on the options that were used. When you use this field, the value in the header length field will increase. An example of a possible option is “source route” where the sender requests for a certain routing path.

#### Marking Scheme

- sender’s IP address
- receiver’s IP address
- packet sequence number
- checksum 

### Part b)

#### b) Explain the role of routers in sending an email from one email server to another. [3]

#### My Answer

- sending an email from one email server to another is to route the email packet through the network
- routers examine the dst address to determine the most efficient path for the packet to reach the dst email server
- these decisions are made based on data stored on routing tables
- routers will forward the packet from one router to another until it reaches the destination

#### Marking Scheme

- email has been split up into packets
- packet has destination address
- packets pass through many different routers in journey
- packets don’t take same route
- routers use IP addresses
- packets reassembled at destination to rebuild email 

### Part c)

#### c) Sending an email message is an appropriate use of packet switching. Explain why this is the case. [2]

#### Marking Scheme

- email message is only read when all of it is received
- time delays due to lost/ delayed packets not significant
- so sending different packets by different routes is not issue/ is efficient
- packets arriving out of order not an issue
- no requirement for a continuous circuit (circuit switching) 

### Part d)

#### d) Packet switching is not always an appropriate solution. Name an alternative communication method of transferring data in a digital network. [1]

- Circuit switching

### Part e)

#### e) Name an application for which the method identified in part (d) is an appropriate solution. Justify your choice. [3]

#### My Answer

- circuit switching is a suitable solution for voice calls over the PSTN (Public Switched Telephone Network). 
- ideal for realtime communication like voice calls 
    - as it establishes a dedicated circuit for the duration of the call
    - ensuring a continuous connection
    - helps minimise delay and jitter allowing a clear communication

#### Marking Scheme

- real-time video/ video conferencing
- circuit made available is dedicated to this communication stream
- full bandwidth available/ no sharing
- no lost packets
- guaranteed quality of service
