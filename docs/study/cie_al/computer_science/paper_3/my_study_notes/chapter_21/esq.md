---
title: Exam Style Questions - Security
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

## Question 1

#### a) When transmitting data across a network three concerns relate to: confidentiality, authenticity and integrity. Explain each of these terms.

1. **Confidentiality:** Protects data from unauthorized access, crucial for privacy.
2. **Authenticity:** Ensures the genuine source of data, preventing impersonation.
3. **Integrity:** Guarantees data remains unaltered, ensuring accuracy and reliability.

#### b) Encryption and decryption can be carried out using a symmetric or an asymmetric key method. Explain how keys are used in each of these methods. You are not required to describe the algorithms used. Your account must include reference to a public key, a private key and a secret key

- **Symmetric Key Method**:

  - Secret Key:

    - Role: In symmetric key cryptography, a single secret key is used for both encryption and decryption.
    - Usage: The same key is employed by both the sender and the recipient. It must be kept confidential and securely shared between the communicating parties.

- **Asymmetric Key Method**:

  - Public Key:

    - Role: In asymmetric key cryptography, two keys are used: a public key and a private key.
    - Usage:
      - Public Key: It is widely distributed and accessible to anyone. It is used for encrypting messages.
      - Private Key: Kept confidential by the owner. It is used for decrypting messages that were encrypted with the corresponding public key.

  - Private Key:

    - Role: The counterpart to the public key, it is kept secret by its owner.
    - Usage: Used for decrypting messages that were encrypted using the corresponding public key.

- **Importance of Keys**:

  - Symmetric Key:

    - Advantages: Simplicity and speed in processing.
    - Concern: Secure distribution of the secret key among communicating parties.

  - Asymmetric Key:

    - Advantages: Overcomes the key distribution challenge of symmetric key methods.
    - Public Key: Can be freely distributed.
    - Private Key: Must be kept confidential to maintain the security of the communication.

#### c) Digital signatures and digital certificates are used in message transmission. Give an explanation of their use.

- **Digital Signatures**:

  - Use: Ensures message integrity and authenticity.
  - How: Sender uses a private key to sign the message. Recipient verifies using sender's public key.

- **Digital Certificates**:

  - Use: Verifies identity in online communication.
  - How: Certificate includes public key and identity info, signed by a trusted Certificate Authority (CA).

## Question 2

#### a) Secure socket layer (SSL) and its upgraded version named Transport Layer Security (TLS) is described as a protocol suite. a Explain the meaning of the description ‘protocol suite’

- Meaning: A set of interrelated protocols working together to provide comprehensive network functionality.
- SSL/TLS: In the context of SSL and its upgraded version TLS, the term refers to the combination of multiple protocols working together to establish secure communication over a network.

#### b) b Describe the type of activity where SSL or TLS would be used.

- Online Communication: SSL/TLS is used to secure data transmission over the Internet, ensuring privacy and integrity in activities like online banking, shopping, and email.

#### c) Explain how digital certificates are used in the protocol suite.

- Usage: Digital certificates are used to verify the authenticity of entities in the protocol suite.
- How: Certificates, containing public keys and identity information, are issued by trusted Certificate Authorities (CAs) to validate the legitimacy of parties involved in secure communication.

#### d) Explain how encryption keys are used in the protocol suite.

- Usage: Encryption keys are employed to secure data during transmission in the protocol suite.
- How: Keys, whether symmetric or asymmetric, facilitate the encryption and decryption processes, ensuring confidentiality and integrity of the transmitted information.

## Question 3

#### Digital certificates are used in Internet communications. A Certificate Authority (CA) is responsible for issuing digital certificates.

#### a) Name three data items present in a digital certificate.

1. Subject's Distinguished Name (DN): Identifies the entity (e.g., person, organization) associated with the certificate.
2. Public Key: The key used for encryption and verification purposes.
3. Issuer's Distinguished Name (DN): Identifies the entity (Certificate Authority) that issued the certificate.
4. Serial Number: A unique identifier assigned by the CA to distinguish different certificates.
5. Signature Algorithm: Specifies the algorithm used by the CA to sign the certificate.
6. Validity Period: Indicates the timeframe during which the certificate is considered valid.
7. Key Usage: Defines the cryptographic operations the public key can be used for (e.g., encryption, digital signature).
8. Extended Key Usage (EKU): Specifies additional purposes for which the public key may be used.
9. Subject Alternative Name (SAN): Lists alternative names (e.g., domain names) associated with the subject.
10. Certificate Policies: Describes the policies under which the certificate was issued.

#### b) The method of issuing a digital certificate is as follows.

#### i A user starts an application for a digital certificate using their computer. On this computer a key pair is generated. This key pair consists of a public key and an associated private key.

#### ii The user submits the application to the CA. The generated .................. (i) ................ key and other application data are sent. The key and data are encrypted using the CA’s ................ (ii) ................ key.

#### iii The CA creates a digital document containing all necessary data items and signs it using the CA’s ................ (iii) ................ key.

#### iv The CA sends the digital certificate to the individual.

#### In the above method there are three missing words. Each missing word is either ‘public’ or ‘private’. State the correct word. Justify your choice.

<details>
<summary>Marking Scheme</summary>

![a1](https://cdn.discordapp.com/attachments/1163847683207856178/1187226655568171018/image.png)
![a2](https://cdn.discordapp.com/attachments/1163847683207856178/1187226710303850586/image.png)

</details>

#### c) Alexa sends an email to Beena. Alexa’s email program:

#### - produces a message digest (hash)

#### - uses Alexa’s private key to encrypt the message digest

#### - adds the encrypted message digest to the plain text of her message

#### - encrypts the whole message with Beena’s public key

#### - sends the encrypted message with a copy of Alexa’s digital certificate.

#### Beena’s email program decrypts the encrypted message using her private key.

#### i State the name given to the encrypted message digest.

- Digital signature

#### ii Explain how Beena can be sure that she has received a message that is authentic (not corrupted or tampered with) and that it came from Alexa.

- Alexa’s digital certificate
- (Includes) Alexa’s public key
- Used to hash message received // produce message digest
- Generated hash compared to digital signature

#### iii Name two uses where encrypted message digests are advisable.

- Financial transaction
- Legal document
- Software distribution

## Question 4

#### Both clients and servers use the Secure Socket Layer (SSL) protocol and its successor, the Transport Layer Security (TLS) protocol.

#### a) i What is a protocol?

- A set of rules
- governing communications/transmission of data /sending and receiving data

#### ii Name the client application used in this context.

- (Web) browser / email client

#### iii Name the server used in this context.

- Web server / email server

#### iv Identify two problems that the SSL and TLS protocols can help to overcome.

- Security //example: for example, alteration of transmitted messages
- Privacy // for example, only intended receiver can view data
- Authentication // for example, trust in other party

#### b) Before any application data is transferred between the client and the server, a handshake process takes place. Part of this process is to agree the security parameters to be used. Describe two of these security parameters.

- Cipher Suite:

  - Definition: Specifies the set of cryptographic algorithms for encryption, authentication, and integrity protection.
  - Agreement: Client and server agree on a specific cipher suite to secure communication.

- Key Exchange Method:

  - Definition: Determines how cryptographic keys are securely exchanged between the client and server.
  - Agreement: Client and server agree on a key exchange method (e.g., Diffie-Hellman) to generate shared keys for encryption.

<details>
<summary>Marking Scheme</summary>

- which protocol will be used… [1]
  - there are a number of different versions of the two protocols [1]
- session ID … [1]
  - uniquely identifies a related series of messages between server and client [1]
- session type … [1]
  - reusable or not [1]
- encryption method … [1]
  - public / private keys to be used // asymmetric/ symmetric [1]
- authentication method … [1]
  - use of digital certificates / use of digital signature [1]
- compression … [1]
  - method to be used [1]

</details>

#### c) Name two applications of computer systems where it would be appropriate to use the SSL of TLS protocol. These applications should be different from the ones you named in part (a)(ii) and part (a)(iii).

- Remote Access VPNs:

  - Application: Providing secure remote access to corporate networks for employees working from different locations.
  - Use of SSL/TLS: Ensures encrypted and authenticated communication for secure access.

- File Transfer Protocols (e.g., SFTP):

  - Application: Securely transferring files between a client and a server over a network.
  - Use of SSL/TLS: Encrypts the data during transfer, ensuring confidentiality and integrity of the files.

<details>
<summary>Marking Scheme</summary>

- banking [1]
- private / secure email [1]
- shopping [1]
- financial transactions [1]
- secure file transfer [1]

</details>
