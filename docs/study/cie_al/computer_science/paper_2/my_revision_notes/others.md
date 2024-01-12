---
title: Others
sidebar_label: Others
slug: others
sidebar_position: 5
---

### What is an algorithm?

steps that describe how to solve a problem

### Why Count Controlled Loop?

- number of iterations are known

### basic boolean

- `X OR NOT X` cancels each other out

### what is a rogue value?

a value used to terminate a sequence of values

### Detailed Description of algorithm: AddWord() procedure stores the given word in an unused element in the array. return FALSE if its already in the array [Sample Answer]

- use the index to keep track
- loop through the array and check if the value already exists in it
- if it does, return false
- if it does not, loop through the array for the second time to find an unused element
- when you find one, store the value to it and exit the loop
- you may use a flag to exit the loop


### Structured English of Bubble Sort: Sorting Algorithm [Sample Answer]

- use an integer to keep track of the index over the iterations in the array
- use a loop to iterate through that array
- test if current element is greater than the next element
- if so, swap the value
- use a temporary variable to help swap the values


### Why use Library routines?

- they are tested a lot
- ... possibly by a huge community
- perform functions that we dont know how to perform
    - eg: complex math functions, encryption functions
- readily available
- therefore, speeds up development
