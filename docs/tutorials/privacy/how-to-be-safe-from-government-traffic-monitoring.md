---
slug: how-to-be-safe-from-government-traffic-monitoring
title: How to be safe from government traffic monitoring?
---

:::note note

This is a beginner-friendly guide. I'll be writing a guide to staying completely anonymous online in the near future. Stay tuned!

:::

:::info

This guide is tailored to help you conceal your online network activity from both your Internet Service Provider (ISP) and government authorities. This guide does not aim to provide anonymity. Poor operational security (Opsec) is what often leads to the arrest of many activists and cybercriminals. To ensure comprehensive anonymity, it's crucial to follow the recommendations outlined in [privacyguides.net](https://www.privacyguides.org/en/tools/). What constitutes bad Opsec? Consider this example: Using all these tools to create a Facebook account under your real legal name and then engaging in illegal activities.

:::

## How the ISP can track our traffic?

ISPs (Internet Service Providers) have the capability to monitor and track various aspects of your internet activity. Let's take a look at the main few methods:

1. **Packet Inspection:**

   - ISPs can inspect the data packets that travel through their network to see the content of your online activities.

2. **Deep Packet Inspection (DPI):**

   - DPI is a more advanced form of packet inspection that involves analyzing the content of data packets in detail. This can reveal specific types of traffic like websites you visit, applications you use, etc...

3. **DNS Monitoring:**

   - ISPs may monitor Domain Name System (DNS) requests, which translates domain names (e.g., www.example.com) into IP addresses. By logging DNS requests, ISPs can see which websites you visit.

4. **Traffic Logging:**

   - ISPs may log the source and destination IP addresses, as well as the amount of data transferred. This information may be used to create a profile of your online activities. Which is most probably is being sent to government authorities.

And also the various other methods that exist, like: Metadata Analysis, Maintaining Connection Logs, etc...

## VPN - Virtual Private Networks

A VPN, or Virtual Private Network, creates a secure and encrypted connection between your device and a server operated by the VPN service.

Instead of connecting directly to the internet, your traffic is routed through this tunnel, masking your IP address and providing a layer of privacy and security.

While some VPNs provide encryption, not all VPNs use the same level of encryption. It's essential to choose a VPN service that implements strong encryption protocols, like AES-256 (against [Packet Inspection and Deep Packet Inspection](#how-the-isp-can-track-our-traffic) by ISPs) .

<details>
<summary>Encrypted VPN vs. Non-Encrypted VPN</summary>

| **Risk Aspect** | **Non-Encrypted VPN** | **Encrypted VPN** |
| --- | --- | --- |
| **Data Security** | Vulnerable to interception and monitoring of data. | Encrypts data, providing a secure tunnel for transmission. |
| **Privacy Protection** | Potential exposure of sensitive information. | Helps in concealing IP addresses and protects user privacy. |
| **Logging Policies** | May log user activities, compromising privacy. | Reputable services have strict no-logs policies. |
| **Connection Security** | Lacks robust protection against potential attacks. | Enhances security through encryption and secure protocols. |
| **Trusted Servers** | Server connections might be unsecured and unreliable. | Reputable VPN services operate secure and reliable servers. |
| **Free VPN Risks** | Free services may monetize user data or show ads. | Paid services are more likely to prioritize user privacy. |
| **Legal Implications** | Legal issues may arise if involved in illegal activities. | Legitimate use helps maintain privacy without legal concerns. |

</details>

### Why use a VPN?

1. **To hide your IP address:**

The VPN server acts as an intermediary between your device and the internet. Your ISP sees the VPN server's IP address instead of your actual IP address. This helps to mask your identity and location, providing a layer of anonymity.

2. **To encrypt your internet traffic:**

When you connect to a VPN, your internet traffic is encrypted. This means that the data you send and receive is transformed into a secure, unreadable format. Even if your ISP monitors your traffic, all they see is encrypted data.

### Choosing the right VPN

. This will cost you €5 per month. For optimal privacy and security in your online activities, [Mullvad VPN](https://mullvad.net/en/vpn) stands out as the top choice as of the time of writing this article. It is recognized for being the most private, reliable, and secure VPN available. Mullvad VPN is priced at €5 per month. You can also make payments with Bitcoin and some other cyptocurrencies. [Click here](https://mullvad.net/en/vpn) to check it out.

<details>
<summary>If you are from Sri Lanka, India, etc... (or some other 3rd world country)</summary>

Mullvad VPN, priced at €5 per month, translates to approximately 1700 LKR per month. If you're seeking a more budget-friendly alternative, consider the [Kaspersky Plus](https://www.kaspersky.co.in/plus) plan, available at Kaspersky's official website. The Kaspersky Plus plan is priced at ₹550.00 INR (2100 LKR) for one device and ₹850.00 INR (3300 LKR) for three devices for the entire year.

For a clearer overview of pricing, refer to the table below:

| Plan           | Devices | Yearly Price | Monthly Price |
| -------------- | ------- | ------------ | ------------- |
| Mullvad VPN    | -       | 21200 LKR    | 1700 LKR      |
| Kaspersky Plus | 1       | 2100 LKR     | 175 LKR       |
| Kaspersky Plus | 3       | 3300 LKR     | 275 LKR       |
| Kaspersky Plus | 5       | 4100 LKR     | 340 LKR       |

_Prices last updated on 1/14/2024_

**Why Kaspersy Plus?**

_"Kaspersky VPN encrypts all data streams with industry-leading encryption algorithms – Advanced Encryption Standard (AES) 256, and the latest ChaCha20-Poly1305. AES-256 is gold-standard encryption that is used worldwide."_

[Click here](https://www.kaspersky.com/vpn-secure-connection-transparency-security#:~:text=A%3A%20Kaspersky%20VPN%20encrypts%20all,encryption%20that%20is%20used%20worldwide.) to read more.

</details>

Once you've chosen and installed your preferred VPN, your online traffic becomes encrypted, preventing ISPs from conducting packet inspection to identify and track your activities. However, despite this secure setup, several issues persist.

Let's discuss about DNS to address these concerns.

## DNS - Domain Name Service

You can use a custom DNS resolver like [Quad9](https://www.quad9.net/), but what about all the telemetry-related traffic (Microsoft Window's phone home features)? How do you block them? You can use a tool like [NextDNS](https://nextdns.io/), BUT:

:::warning don't use NextDNS

- It looks like the [NextDNS clients (Windows, Unix) are open-source](https://github.com/nextdns), but the server software isn't.
- They [violated their own privacy policy](https://www.reddit.com/r/privacy/comments/jswghu/nextdns_is_leaking_your_email_address_to/) once by using a third-party tool (Intercom).
- They have a freemium business model where customers pay.
- They meet the requirements and are part of the [Mozilla’s Trusted Recursive Resolver (TRR) program](https://wiki.mozilla.org/Security/DOH-resolver-policy).
- I couldn't find any independent audit or even a court case where they could prove the 'no logs' setting.

Source: [Reddit](https://www.reddit.com/r/privacytoolsIO/comments/milkyd/do_you_trust_nextdns/)

:::

So, your best and only option is to purchase a Raspberry Pi (or you can also use an old computer, but this consumes more electricity), and install [PiHole](https://pi-hole.net/). Set a static IP to this device and set it as the default DNS server of the router. Then, all of your home traffic will go through it.

You can watch the below video to get an idea of how it works and to see how easy it is to install.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KBXTnrD_Zs4?si=2FT6aGmjBP83hz6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Note that this video is 4 years old, and the newer versions have improved a lot.

Now, set the upstream DNS of PiHole to Quad9. This should make sure that no DNS requests are being sent to our ISP.

## WebRTC - Web Real-Time Communication

This is the technology that enables real-time communication between web browsers. This offers convenient features like video conferencing and peer-to-peer file sharing.

### Why WebRTC Leaks happen?

WebRTC leaks occur when your browser reveals your real IP address despite using a VPN or proxy service. This happens because WebRTC allows browsers to directly exchange data with other browsers, bypassing VPN or proxy configurations.

### Preventing WebRTC Leaks:

1. #### Disable WebRTC

Google Chrome:
- Type `chrome://flags/#disable-webrtc` in the address bar.
- Set the "WebRTC" flag to "Disabled."

Mozilla Firefox:
- Type about:config in the address bar.
- Search for `media.peerconnection.enabled` and set it to `"false"`.

2. #### Use a Browser Extension:

Install: [WebRTC Leak Shield](https://chromewebstore.google.com/detail/webrtc-leak-shield/bppamachkoflopbagkdoflbgfjflfnfl) and with a VPN, you are good to go.  

---

You have reached the end of this guide. To verify that everything works, use the tools listed below:

- [Public IP Address](https://browserleaks.com/ip)
- [DNS Leak Test](https://browserleaks.com/dns)
- [WebRTC Leak Test](https://browserleaks.com/webrtc)
- You can also use the other awesome tools by [browserleaks.com](https://browserleaks.com/)


:::warning What this guide won't do for you?

- Provide complete anonymity online.
- Absolve legal consequences of illegal activities.
- Address non-digital threats to security.
- Guarantee the security of third-party services.

:::

