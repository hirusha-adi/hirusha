---
title: Chapter 2 - Hardware
sidebar_label: 3. Hardware
slug: chapter_3
sidebar_position: 3
---

## TO be Completed!

## Embedded System

- has microprocessor within a larger that does a specific task
- has small amounts of memmory
    - its faster
- used in IoT (Internet of Things) 




## Primary Memmory

#### Why?

- to store files to boot system
- ... related to Operating System
- ... machine software
- ... intermediate data

#### There are two types:

1. [RAM](#ram)
2. [ROM](#rom)

## RAM

- Ramdon Access Memmory
- [volatile](#volatile)
- any byte of data stored can be accessed without affecting the other bytes stored
- direct access to data

#### Volatile:

- doesn't store data when the computer is turned off


#### What is stored in RAM?

- current instructions
    - eg: currently open apps 

### Dynamic RAM (DRAM)

- refreshed
- uses capacitors (+ less transistors)
- stores bits as charges
- cheap ans less transistors as used
- slower access speeds
- high storage density
- used in main memmory

### Static RAM (SRAM)

- no refreshing
- takes less power
- use only transistors
- expensive
- fast access times
- low storage density
- used in cache memmory




## ROM

- Read Only Memmory
- Non-Volatile

#### What is stored in ROM?

- startup instructions
- OS kernel

### ROM

- Read Only Memmory
- installed when manufacturing
- cannot change chips contents once data is written to it

### PROM

- Programmable Read Only Memmory
- manufacturer sends an empty chip to the system builder
- the system builder installs their own program to it
- once programmed, we cannot replace / change the contents
    - the chip should be replaced to do so

### EPROM

- Erasable Programmable Read Only Memmory
- erasable with UV light
- to write data, all contents of the ship should be erased before writing
- requires a technical skill to do so

### EEPROM

- Electrically Erasable Programmable Read Only Memmory
- erased using electric signal (a voltage)
- not entirely erased before rewrite

## Secondary Storage

#### Why?

- to store files, photos, etc...


## Magnetic Disk

- built upon basic laws of magnetism
- opposite laws used for read / write heads
- for long term data storage

## Hard Disk Drive (HDD)

### Parts

#### Platter

- individual disks with each side having its own read, write head
- stacked one aboce another
- all spinning together, all at once

#### Cylinder

- stacked up platters

#### Read/Write Head

- works on basic laws of magnetism
- this head never touches the platter
- controlled by the actuator arm, which is controlled by the circuit 

#### Track

- platter is divided into concentric tracks

#### Sectors

- part of track
- usually 512 bytes

#### Blocks

- this is what the OS deals with
- 1, 2, 4, 8 or more sectors


### Answer

- has 1 or more platter
- each surface of it is magentized
- platters mounted to central spindle
- entire mechanism sealed in an aluminium box
- each surface has read/write head mounted to it
- electric circuits control arm moving
- surface of disk is divided into sectors
- one track in one sector is the basic storage unit
    - called "Block"
- data is encoded in a magentic pattern in each block

## Solid State Disk (SSD)

- no moving parts
- non volatile
- made with blocks of NAND flash
- controller manages the components
- memmory cells have voltages that represents a 1 or a 0
- movement of electrons controlled to read/write
- when overwriting, first erases required chip contents, then write
- controller does water levelling
- DRAM cache decreases data access latency (making it more fast)
- everything in NAND flash can be erased all at once 

## Optical Media

- TODO

## Hardware Devices

- 

## LED Screens

- every pixedl has 3 subpixels - RGB
- with varying light levels
- display CLI (Command Line Interface) or a GUI (Graphical User Interface) - which provied WIMP (Windows, Icons, Menus, Pointers)

- TODO

## Touch Screen

### Resistive Touch Screens

- two charged plates
- has an air gap
- not rigid
- pressure causes planes to touch
- completing the circuit
- points of contact registered
- coordinates used to calculate position
    - so, no multitouch
- best for industrial places
    - as its usable with gloves

### Capacitive Touch Screen

- made with materials that can store electric charges
- when touched, charge is transferred to the finger
- sensors at corners detects the changes
- rigid screen
- point of contact is registered
- coordinates used to calculate the position
- has multi touch
- needs contact with fingers
- won't work with gloves on

### CRT Touch Screens

- this was used earlier
- have ultrasonic wave emitters
- when finger blocks them, the signal strength is lowered
- that position is obtained 

## VR Headset

- two eyepieces
- fed with paired images, which when looked gives a 3D feel
- controlled by moving head or a controller

## Printers

### Laser Printer

#### Short Answer
- uses a laser beam and a rotating mirror to draw contents of a page on photosensitive drum as an electrostatic charge
- toner is attracted to charge

#### Long Answer

- revolving drum is given an electric charge
- laser beam bouncing off mirrors scans back and forth the drum
- drum rolls over the selectroostatically charged paper
- pattern on drum is transfeered to paper
- paper is pssed through the fuser to seal the image
- electrical charge is removed from the drum

### 3D Printer

#### CAM

- Computer Aided Manufacturing

#### CAD

- Computer Aided Designing

#### How it works?

- object designed using CAD software
- software splits the objects intro slices
- data about slices is sent to the pointer
- solid plastic is melted and transferred to the nozzle
- stepper motor moves from the nozzle into position
- the nozzle extrudes molten plastic or silicon
- steps 5->6 are repeated
- a fan cools the layer
- steps 4->8 are repeated

### Inkjet Printer

- printer head moves and deposits ink on paper
- paper moves forwards it repeats
- ink supplied from catridges

### Graphics Plotter

- print vectors without converting to bitmaps
- uses pen to write on plotting paper

## Keyboards

- uses switches and circuits to send key presses to PC
- the key matrix is a grid of circuits (has 3 layers)
- each circuit is open under key
- on press, circuit is closed
- processor compares location in matrix
- to ao character map stored on ROM
- character code for each key press is saved in a keyboard

## Webcam

- streams video images to PC

## Scanner

- main component is CCD array (Charged Couple Device)
- CCS is a collection of light sensitive diodes
- laser beam shines to source file
- scanned image reaches CCD through mirros/lenses
- sensors detects levels of reflected lights
- brighter light =  greater charge
- light intensity is converted to digital values by software

## Microphone

- microphone has diaghragm
- incoming sound waves cause vibrations to it
- causing a coil to movie past / against a magnet
- an electric signal is produced

## Speaker

- electric current sent to it
- current passes through coik
- current in coil creates an electromagnetic feild
- changes in the audio signal case the direction of electrical current to change
- this determines the polarity of the electromagenet
- electromagnet is repelled by or attracted by permanent magnet
- movement of coil causes vibrations
- vibrations create sound waves


