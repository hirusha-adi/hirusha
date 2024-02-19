---
title: Notes - Low-level programming
sidebar_label: Notes
slug: notes
sidebar_position: 1
---

## Our instruction set

*"An instruction set architecture is a part of the abstract model of a computer, which generally defines how software controls the CPU. A device that executes instructions described by that ISA, such as a central processing unit, is called an implementation"* - [Wikipedia](https://en.wikipedia.org/wiki/Instruction_set_architecture)

Below is the instruction set that we will be working with:

![alt text](images/image.png)
![alt text](images/image-1.png)

In the assembly code in this chapter:
- `ACC` denotes the Accumulator
- `IX` denotes the Index Register
- `#` denotes immediate addressing
- `B` denotes a binary number, e.g. B01001010
- `&` denotes a hexadecimal number, e.g. &4A
- `<address>` can be an absolute address or a symbolic address.

## Symbolic Addresses

A label is a symbolic name for the memory location that it represents. 

You can treat it like a variable name

The assembler will allocate absolute addresses during the assembly process.

## Problem Solving

### Assignment

| Pseudocode | Assembly Code | Explanation |
| - | - | - |
| `A <- 34` | `LDM #34`<br/>`STO A` | Assign value to A |
| `B <- B + 1` | `LDD B`<br/>`INC ACC`<br/>`STO B` | Increment value of B |




