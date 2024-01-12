---
title: Exam Style Questions - Hardware and virtual machines
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

## Question 1

#### a) Computer systems are now often constructed with RISC processors

#### 1. State what the acronym RISC stands for

- Reduced Instruction Set Computing

#### 2. State four characteristics to be expected of a RISC system

- fewer and simpler instructions
- small number of instruction formats
- single-cycle instructions whenever possible
- fixed length instructions
- only load and store instructions to address memory
- fewer addressing modes
- multiple register sets
- hard wired control unit
- easier pipelining

- for more information, refer to this diagram

    ![i1](https://cdn.discordapp.com/attachments/1163847683207856178/1178173743172952085/image.png)

#### b) A RISC processor is likely to be ‘hard-wired’

#### 1. Explain what this term means and which specific part of the processor will be hard-wired

- use of fixed, dedicated circuitry to perform specific functions
- this happens in the Control Unit of the RISC processor

#### 2. State what the alternative to hard-wiring is and what hardware component is needed to be part of the processor to allow this alternative to be implemented. 

- microprogramming
- the control unit's functions are defined by a sequence of microinstructions stored in memory
- this allows for more flexibility
- component needed for microprogramming is a control memory unit, which stores the microinstructions

## Question 2

#### The following diagram represents a system which has implemented a virtual machine.

![i2](https://cdn.discordapp.com/attachments/1163847683207856178/1178183548855914536/image.png?ex=657537ef&is=6562c2ef&hm=2643e77aca3b74932a0d18d6a7aa1ed783240ccb8f7cd7b315d1817b29085010&)

#### a) For each of A, B, C, D give a suitable name

- *A* - Guest OS
- *B* - Virtual Machine
- *C* - Virtual Machine Implementation Software
- *D* - Host OS

#### b) For each of A, B, C and D give a brief description of the function of the feature

- *A - Guest OS* 
    - operating system running inside the virtual machine
    - provides the virtualized environment with its own set of operating system services
    - manages resources within the virtual machine
    - interacts with applications running on the virtual machine
    - Guest OS is unaware that it is running in a virtualized environment

- *B - Virtual Machine* 
    - this is a software emulation of a physical computer
    - allows multiple operating systems to run on a single physical machine
    - VM provides isolated environment with virtualized hardware for the Guest OS to run
    - it enables the coexistence of different operating systems on the same host machine

- *C - Virtual Machine Implementation Software*
    - this includes the hypervisor or Virtual Machine Monitor (VMM)
    - which is responsible for managing multiple virtual machines on the host hardware
    - hypervisor is what provides the virtualization layer that allows the guest operating systems to run independently
    - handles allocation of resources, scheduling of virtual machines between the Guest OS and the host hardware

- *D - Host OS*
    - this is what directly interacts with the underlying physical hardware
    - it manages resources such as CPU, memory, and I/O devices and provides services to both the Virtual Machine Implementation Software (hypervisor) and any native applications running on the host machine
    - supports the execution of multiple virtual machines by providing resource allocation and by managing the virtualized environments

#### c) Explain why the diagram is different for Application 2

- it is not virtualized

## Question 3

- *had difficulties finding this in the text book*

#### a) Parallelism can be achieved in a number of ways.

#### 1) Identify three different types of parallelism.


- Instruction Level Parallelism (ILP): This type of parallelism involves the concurrent execution of multiple instructions in a pipeline within a single processor.

- Data Level Parallelism (DLP): DLP involves the simultaneous processing of multiple data elements or operations. Vector processors and SIMD (Single Instruction, Multiple Data) architectures are examples of DLP.

- Task Level Parallelism (TLP): TLP involves the concurrent execution of multiple tasks or processes. This is typically achieved through the use of multiple processors or cores.

- Learn more: [some lecture notes i found online](https://www.inf.ed.ac.uk/teaching/courses/pa/Notes/lecture02-types.pdf), [wikipedia](https://en.wikipedia.org/wiki/Parallel_computing), [tutorialspoint](https://www.tutorialspoint.com/types-of-parallelism-in-processing-execution), [geeksforgeeks](https://www.geeksforgeeks.org/introduction-to-parallel-computing/)

#### 2) Identify which type pipelining belongs to.

- Instruction Level Parallelism (ILP)

#### 3) Using a diagram, explain how pipelining works

![i3](https://cdn.discordapp.com/attachments/1163847683207856178/1178191924973285426/image.png)

- Instruction Fetch (IF): Fetches the next instruction from memory
- Instruction Decode (ID): Decodes the instruction and reads the operands
- Execute (EX): Performs the operation or computation specified by the instruction
- Memory Access (MEM): Accesses memory if needed (eg: for load/store instructions)
- Write Back (WB): Writes the result back to the register file

#### b) Interrupt handling is not so straightforward in a pipelined system. Explain why this is so and give a brief account of how problems can be avoided.

- One issue with a pipelined processor is interrupt handling. The discussion in Chapter 5 (Section 5.08) referred to a processor with instructions handled sequentially. This approach where a check for any interrupt is made following the execution of an instruction is applicable to a CISC processor. It would also be applicable to a RISC processor if there were no pipelining. However, this is an unlikely circumstance. In the pipelined system described above there will be five instructions in the pipeline when an interrupt occurs. One option for handling the interrupt is to erase the pipeline contents for the latest four instructions to have entered. Then the normal interrupt handling routine can be applied to the remaining instruction. The other option is to construct the individual units in the processor with individual program counter registers. This option allows current data to be stored for all of the instructions in the pipeline while the interrupt is handled

## Question 4

#### a) Three descriptions and two types of processor are shown below. Draw a line to connect each description to the appropriate type of processor.

![41](https://cdn.discordapp.com/attachments/1163847683207856178/1178194645923151882/image.png)

#### b) In a RISC processor three instructions (A followed by B, followed by C) are processed using pipelining. The following table shows the five stages that occur when instructions are fetched and executed

#### 1. The “A” in the table indicates that instruction A has been fetched in time interval 1. 
#### Complete the table to show the time interval in which each stage of each instruction (A, B, C) is carried out.

![42](https://cdn.discordapp.com/attachments/1163847683207856178/1178195091228196894/image.png)

#### 2. The completed table shows how pipelining allows instructions to be carried out more rapidly. Each time interval represents one clock cycle. Calculate how many clock cycles are saved by the use of pipelining in the above example. Show your working

- With pipelining no of cycles = 7 [1]
- Without pipelining no of cycles = 3 * 5 = 15 [1]
- No of cycles saved = 8 

## Question 5

#### a) The following diagram shows how applications X, Y and Z can run on a virtual machine system.

![51](https://cdn.discordapp.com/attachments/1163847683207856178/1178195612433383464/image.png)

#### 1. The virtual machine software undertakes many tasks. Describe two of these tasks.

- my answer

    - resource allocation and management
        - this is a main task done by virtual machine software
        - this allocates CPU, memory, network bandwidth
        - prevents one virtual machine monopolizing all/majority of the available hardware
    
    - isolation and virtualization
        - each virtual machine operates as if it has its dedicated set of resources, independent of other virtual machines
        - so, this isolation is a must as it ensures that activities in one virtual machine do not interfere with or compromising the integrity of other virtual machines on the same host 

- marking scheme

    - Create / delete virtual machine
    - Existing hardware made available to guest OS // hardware emulation
    - Ensures each virtual machine is protected from actions of another virtual machine

#### 2. Explain the difference between a guest operating system and a host operating system.

- marking scheme

    - Guest operating system:
        - An operating system running in a virtual machine //
        - Controls virtual hardware //
        - OS is being emulated
    
    - Host operating system:
        - The operating system that is actually controlling the physical hardware //
        - the operating system for the physical machine// the OS running the VM software
    
    - Guest OS is running under the Host OS software 

#### b) A company uses a computer as web server. The manufacturer will no longer support the computer’s operating system (OS) in six months time. The company will then need to decide on a replacement OS. The company is also considering changing the web server software when the OS is changed. Whenever any changes are made, it is important that the web server service is not disrupted. In developing these changes, the company could use virtual machines.

#### 1. Describe two possible uses of virtual machines by the company. The web server often has to handle many simultaneous requests

- my answer
    - run a virtual machine with the new operating systemn and with the new web server files and configurations in it (inside the VM)
    - the original (main) web server files and configurations will be untouched in the host system until the new migration is fully tested in the VM
    - by doing so, even if the new operating system breaks (or if theres any issue with our web application), we can easily restore to a earlier snapshot of our VM easily or even re-install everything without affecting the web server hosted in the host system in any manner
    - we can configure the VM with a bridged network connection, so the VM appears as a seperate device on the host's physical network. it also allows direct access to the local network, this is cruicial for testing the web server in a realastic environment

- marking scheme
    - Trial/use alternative replacement operating system(s) …
    - Test to identify possible problems
    - Much easier to create VM with a new OS than create new computer
    - system
    - Trial/use alternative replacement web server software …
    - Test to identify possible problems
    - Easier to try alternative new software and new OS combinations
    - To provide some additional service(s)
    - Trial/test its use - description e.g. a print server
    - General description point – to provide a safe environment during testing
    - (which does not disrupt the web server service)

#### 2. The company uses a virtual machine to test possible solutions to the changes that they will need to make. Explain one limitation of this approach.

- my answer
    - takes more time to configure
    - degraded performance
    - hard to test the response times of the web server accurately

- marking scheme
    - Using virtual machine means execution of extra code // emulation of
    - some hardware …
    - Non-VM installation may not perform in the same way
    - Execution speed slower than non-VM system
    - Problems in judging actual response times
    - at time of maximum traffic needs fastest possible speed
    - Particular hardware may be difficult to emulate 
