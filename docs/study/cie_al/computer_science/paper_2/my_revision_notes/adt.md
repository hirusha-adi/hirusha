---
title: Abstract Data Types
sidebar_label: ADT
slug: adt
sidebar_position: 2
---

## Stack

### Introduction/Features

#### [How does it work?](https://www.youtube.com/watch?v=I37kGX-nZEI&pp=ygUQc3RhY2tzIGV4cGxhaW5lZA%3D%3D)


#### why order has changed?

- the recieved string will be reversed.
- because of LIFO (Last In First Out)

#### Where are they used?

- the undo function
- back button in the web browser

### How to Implement a Stack?

- declare 1D array of type string
- Number of elements it corresponds is the size of the stack
- declare an Integer variable to use as a stack pointer
- use StackPointer as an index to the array
- pointers and variables are initialized to indicate an empty stack
- store each item on stack as one array element
- `push` will add a new element + increment Stack Pointer
- `pop` will remove the lastly pushed element and return it + decrement the stack Pointer
- both `push` and `pop` should check weather the stack is **empty** before performing stuff

### PUSH('A')

- (basically, added to TOP)
- Top-Of-Stack Pointer is incremented
- data value is added to that location

### POP()

- decrement Top-Of-Stack-Pointer and return the value to a varaible
    
- often used as:
    
    - `Value <- Pop()`


### Peek() / Top()
    
- This operation retrieves the value of the topmost element in the stack without removing it.

### isEmpty()
    
- This operation checks if the stack is empty, i.e.
- it returns true if there are no elements in the stack and false otherwise.


## Linked List

### Introduction 

- Made up of nodes that consists of two parts

    - **Data** - contains actual data
    
    - **Link** - contains address of the next node

- Memmory Addresses aren't stored contiguosly in RAM

### Advantages

- pointers determine the order of data
- easier to add and delete data

### Disadvantages

- need to store both data value and a pointer
- more complex to setup / implement

### How to Implement a Linked List?

- define a record with data element and the pointer
- declare a 1D array of this type
- pointers should be type integer
- null pointer can have -1 (or any other abnormal value)
- routines are required to add/delete/search data

or

- 1D array to store the data and a second 1D array to store the pointers
- integer variable to hold the start pointer and an integer variable to store the next free pointer
- both data value and representing node should have the same index


### Key Terms

#### Node

-  an element of a list

#### Pointer

- a variable that stores the address of the node it points to

#### Start Pointer

- has **no** data value
- points to the first element (node with first data value)

#### Null Pointer

- doesn't point to anything
- no any nodes come after it
- linked list ends there
- has a data value

### How to Add 'B' to the Middle of 'A' and 'C' in a Linked List?

- check for a free node
- search for the correct insertion point
- point node to start pointer of free list from pointer A will be changed to B instead of C 
- pointer from B will be set to point to node C

### Arranging / Changing Order of a linked list

![img3](https://cdn.discordapp.com/attachments/1163847683207856178/1163849022709174292/image.png?ex=654111de&is=652e9cde&hm=71eb20968f179ea8c372646c1956491ced9a24aa17563a55592ced91eaedcebf&)

- when elements are removed, leave them there unless its replaced
- (we assume theres no garbage collection going on)

![img14](https://cdn.discordapp.com/attachments/1163847683207856178/1164023313002151996/image.png?ex=6541b430&is=652f3f30&hm=a0b840d2acbd3e103e3229164561aec2002d03eb974e56c87d5e705e67a5fec8&)


## Queue

### Introduction/Features

#### [How does it work?](https://www.youtube.com/watch?v=v9BMdz5m5Vo)

- each queue element contains one data item
- theres a pointer at start of each queue
- theres a pointer at end of each queue
- data is added to back
- First In First Out - **FIFO**
- maybe circular

### How to Implement a Queue?

- declare 1D array of give size and given type
- declare integer for FoQ and EoQ pointer
- initialize FoQ, EoQ to represent an empty queue
- Declare integer varaibale `NumberInQueue` to represent the number of items in the queue
- Delcare integer variable `SizeOfQueue` to represent the size of the Queue
- Initialize the size of queue

### Circular Queues

- As Linear Queues involves a lot of moving data,
- we use Circular Queues to improve efficiency

### EnQueue (Add an Item)

- (basiclaly, add to end)
- End-of-Queue Pointer increments
- new data value is stored there

#### checks done:

- are there any unused elements in the queue?
- the queue is not empty

#### how to make adding detect errors? 

- if EoQ = FoQ, then error out
- ... as the queue is full
- increment the EoQ
- manage a wrap around

### DeQueue (Remove an Item)

- (basically, remove from front)
- Front-of-Queue Pointer is decremented
- the data value in original place is removed and returned
- it will be stored set to a given variable

#### checks done:

- are there items in the queue to remove?

### Front
    
- Returns the element at the front without removing it.

### IsEmpty
    
- Checks if the queue is empty.

### Size
    
- Returns the number of elements in the queue.


### Special Case: When Front-of-Queue Pointer and End-of-Queue Pointer Have the Same Value?

- there is only one data item in the queue


:::caution NOTE

- when elements are removed, leave them there unless its replaced
- (we assume theres no garbage collection going on)

:::