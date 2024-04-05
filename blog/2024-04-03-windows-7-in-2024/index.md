---
slug: 2024-04-03-windows-7-in-2024
title: Windows 7 in 2024
authors: [hirusha]
tags: [windows]
---

This is my journey of installing Windows 7 for minimal office use in Sri Lanka. The device that i'm dealing with today is an ancient Dell Inspiron N4050 from 2014 (a 10 year Intel i3 laptop).

<!--truncate-->

This has a completely functional copy of Linux Mint installed, thats customized to look like Windows 7.

![alt text](<WhatsApp Image 2024-04-05 at 00.12.25_e8c31879.jpg>)

This laptop is equipped with an i3-2350M,  10 Gigabytes of RAM with a SATA SSD. 

The user requirements of this laptop has changed and legacy sinhala font support (FM Bindumathi, FM Gemunu, FM Abhaya, etc...) with the microsoft office suite was a must, so the only option left is to either install Windows 10 or 8 and get the system bloated and slow or to install Windows 7 in 2024. 

Yes, Windows 8 is also discontinued now, but, I personally don't think that it would support this device very well.

I'm not a huge fan of Windows 8 anyways, so, Windows 7 it is.

## Installation

### Bootable Pendrive

You can download the Windows 7 SP1 Ultimate image [from here](https://archive.org/details/7601.24214.180801-1700.win-7sp-1-ldr-escrow-client-ultimate-x-64-fre-en-us_202304) 

After downloading it, we can write that installation media to a pendrive and boot from it using tools like [Rufus: The Reliable USB Formatting Utility](https://rufus.ie/en/) - a Free and Open Source Tool. 

Open Rufus, plug-in your pendrive, select the downloading image (the `.iso` file). 

Make sure to select the **Partition Scheme** as **MBR** and the **Target System** as **BIOS** when you are trying flash a pendrive for older computers.

<details>
<summary>This might happen if you do not do that: </summary>

You will get this error after you boot from the pendrive after selecting it from the Boot Menu:

![alt text](image-2.png)

</details>

![alt text](image.png)

Click on the start button to flash the image make your pendrive bootable.

After you see "READY" in the progress bar, you are good to go. 

![alt text](image-1.png)

### Installing Windows

Remove the pendrive and plug it in to the system that we are going to install the new operating system to. (yes, those are scratches on the laptop chasis caused by myself trying to service it one every year)

![alt text](<WhatsApp Image 2024-04-05 at 00.40.19_d8922199.jpg>)

Turn on the device.

![alt text](<WhatsApp Image 2024-04-05 at 08.06.05_194af1a7.jpg>)
  
Go to the Boot Menu / Boot Options Menu, select the pendrive to boot with and hit enter. 

![alt text](<WhatsApp Image 2024-04-05 at 08.38.44_da676c76.jpg>)

Your computer will now boot from the bootable pendrive.

![alt text](image-7.png)

Choose your language and the keyboard layout and press "Next".

![alt text](image-8.png)

Click on "Install now".

![alt text](image-9.png)

Wait for it to load.

![alt text](image-10.png)

Accept the licence agreement and click "Next".

![alt text](image-11.png)

Now, we have to select the type of installation we want. There are two options here: Upgrade and Custom (Advanced). Since i want to completely remove the Linux Mint installation and install Windows 7, i'll select Custom (Advanced).

The "Upgrade" option has never worked for me, not with Windows 7 nor Windows 10. Maybe i was doing something wrong or it's the most useless feature ever built.

![alt text](image-12.png)

Since i want to remove everything, i'll delete all the partitions in my main disk (Disk 0)

![alt text](image-13.png)

So, now, it looks something like this:

![alt text](image-14.png)

Click on "Next" for the installation to begin.

![alt text](image-15.png)

Your computer will restart once or twice while the installation takes place. It happens automatically. 

![alt text](image-16.png)

![alt text](image-17.png)

![alt text](image-18.png)

Now, you will be greeted with the Set Up Windows page. At this stage, it's safe for you to remove your pendrive from the system.

Enter your username and the computer name.

![alt text](image-19.png)

I wont be setting any password, you should consider doing this incase if you are setting your computer up with windows 7 for office use. 

![alt text](image-20.png)

No, i don't want to activate a discontinued copy of Windows.

![alt text](image-21.png)

And no, i will disable the auto updating because i don't want to spend any resources / network usage trying to ping / GET non existing routes in Microsoft's servers.

The final update for Windows 7 was on January 10, 2023. 


<details>

<summary>Additional information about the final windows 7 update</summary>


*"While the OS's Extended Support ended on Jan. 14, 2020, the Extended Security Updates (ESUs) reached their end of life on Jan. 10, 2023. As we bid farewell to this successor of Windows Vista, and by far one of the most user-friendly OSs, let us take a deep dive into what Windows 7 end of life entails."* - [ManageEngine Blog](https://blogs.manageengine.com/desktop-mobile/patch-manager-plus/2023/03/31/windows-7-end-of-life-the-end-of-an-era.html#:~:text=While%20the%20OS's%20Extended%20Support,7%20end%20of%20life%20entails.)


<iframe width="560" height="315" src="https://www.youtube.com/embed/tvdpg8mTb6o?si=Sf7Ks8-T0yFiQKJx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</details>

![alt text](image-22.png)

Select your time zone

![alt text](image-23.png)

And you should be good to go

![alt text](image-24.png)

Now, the installation has been completed successfully. 

![alt text](image-25.png)


### Post Installation Setup

After the installation, without any graphics driver, my screen resolution defaulted to 800x600 which is literally unusable, so, before anything, lets get started by adjusting the screen resolution to something usable.

![alt text](image-26.png)

## Setting up

### Drivers

#### Downloading - Method 1

Go to your official manufacturers website and download the drivers. A quick and simple google search should get you the required drivers, but this is not always the case. Some manufacturers remove their old device information and drivers from their website. In this case, you'll have to either identify the correct drivers yourself and download them from a third party website or you can follow the method 2 (scroll down).

![alt text](image-28.png)

Download the required drivers. I will be downloading downloading and installing the Graphics Driver and the WiFi Driver from [dell's official website](https://www.dell.com/support/home/en-us/product-support/product/inspiron-14-intel-n4050/drivers).

![alt text](image-29.png)

#### Downloading - Method 2

![alt text](image-31.png)

Use [Driver Identifier](https://www.driveridentifier.com/) which is a free utility which will scan your computer for the required drivers and provide (almost) direct download links from reputable sources (like the manufactures of that specific hardware component, etc..)

Since the computer has no WiFi drivers, download it from another device and copy it the computer with Windows 7. (you can also downliad it from your phone, plug it in, and copy the setup from your phone)

![alt text](image-30.png)

Open the application and click "I do not have internet connection" and then click on "Scan now".
 
![alt text](image-32.png)

After the scanning is complete, you will be prompted to save a HTML file. Save it to your removable media drive.

![alt text](image-33.png)

Plug-in that removable media drive to another device with an internet connection. (Copy and) open the previously saved HTML file.

![alt text](image-3.png)

After some loading, you will be able to see the missing drivers. Download them through this page. Make sure you download the correct driver variant by reading it's description and supported operating systems carefully.

![alt text](image-5.png)

### Installing

First, let's install the graphics driver. This laptop has no fancy dedicated graphics cards, it just the iGPU of the processor. 

![alt text](image-34.png)

Run the installer, just keep on clicking Next on everything. 

![alt text](image-35.png)

After successfull installation of the graphics driver, you will be greeted with this window:

With functioning graphics drivers, the Windows Aero Theme (Windows 7 with translucency effects) gets enabled automatically, and then you are prompted saying that this might reduce performance and maybe you should switch back to the Windows 7 Basic theme. I'm not a huge fan of translucency effects, so, i'll disable it. 

![alt text](image-36.png)

And the bad resultion has been finally fixed: 

![alt text](image-37.png)

