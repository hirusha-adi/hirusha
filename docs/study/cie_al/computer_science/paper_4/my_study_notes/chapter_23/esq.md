---
title: Exam Style Questions - Further problem-solving and programming skills
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

## Question 1

#### a) Complete the algorithm for a binary search function FindName. The data being searched is stored in the array `Names[0 : 50]`. The name to be searched for is passed as a parameter.

![i1](https://cdn.discordapp.com/attachments/1163847683207856178/1187213911783649460/image.png)

```
FUNCTION FindName(s : STRING) RETURNS INTEGER
    Index ← -1
    First ← 0
    Last ← 50

    WHILE (Last >= First) AND (Index = -1) DO
        Middle ← (First + Last) DIV 2

        IF Names[Middle] = s THEN
            Index ← Middle
        ELSE
            IF Names[Middle] > s THEN
                Last ← Middle - 1
            ELSE
                First ← Middle + 1
            ENDIF
        ENDIF
    ENDWHILE

    RETURN Index
ENDFUNCTION
```

#### b) The binary search does not work if the data in the array being searched is ………………

- not sorted.

#### c) State the return value of the function FindName return when:

#### i the name searched for exists in the array.

- will return the index of that name in the array.

#### ii the name searched for does not exist in the array.

- will return -1 to indicate that the name is not found in the array.

## Question 2

#### 2) A queue Abstract Data Type (ADT) is to be implemented as a linked list of nodes. Each node is a record, consisting of a data field and a pointer field. The queue ADT also has a FrontOfQueue pointer and an EndOfQueue pointer associated with it. The possible queue operations are: JoinQueue and LeaveQueue.

#### a) i Write labels on the diagram to show the state of the queue after three data items have been added to the queue in the given order: Apple, Pear, Banana.

- lets assume you have a node structure like this:

```
Node:
  - Data
  - Next (pointer to the next node)
```

- at the start, the FrontOfQueue and EndOfQueue pointers are set to null because the queue is empty.

- After adding "Apple"

```
FrontOfQueue -> [Apple] <- EndOfQueue
```

- After adding "Pear"

```
FrontOfQueue -> [Apple] -> [Pear] <- EndOfQueue
```

- After adding "Banana"

```
FrontOfQueue -> [Apple] -> [Pear] -> [Banana] <- EndOfQueue
```

#### ii Write labels on the diagram to show how the unused nodes are linked to form a list of free nodes. This list has a StartOfFreeList pointer associated with it

- after the initial setup

```
FrontOfQueue -> null
EndOfQueue   -> null

StartOfFreeList -> [Apple] -> [Pear] -> [Banana] -> null
```

- after adding "Apple" to the queue

```
FrontOfQueue -> [Apple]
EndOfQueue   -> [Apple]

StartOfFreeList -> [Pear] -> [Banana] -> null
```

- after adding "Pear" to the queue

```
FrontOfQueue -> [Apple] -> [Pear]
EndOfQueue   -> [Pear]

StartOfFreeList -> [Banana] -> null
```

- after adding "Banana" to the queue

```
FrontOfQueue -> [Apple] -> [Pear] -> [Banana]
EndOfQueue   -> [Banana]

StartOfFreeList -> null
```

- the EndOfQueue points to the node containing "Banana".
- all nodes are in use, and the free list is empty.

#### b) i Write program code to declare the record type Node

```python
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None
```

#### ii Write program code to create an array Queue with 50 records of type Node. Your solution should link all nodes and initialise the pointers FrontOfQueue, EndOfQueue and StartOfFreeList.

```python
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

# Initialize an array Queue with 50 records of type Node
Queue = [Node() for _ in range(50)]

# Link all nodes in the array
for i in range(len(Queue) - 1):
    Queue[i].next = Queue[i + 1]

# Initialize pointers
FrontOfQueue = None
EndOfQueue = None

# Set FrontOfQueue and EndOfQueue to the first node
FrontOfQueue = Queue[0] if Queue else None
EndOfQueue = Queue[-1] if Queue else None

# Initialize the StartOfFreeList pointer
StartOfFreeList = Queue[0] if Queue else None

# Print the state of pointers for demonstration
print("FrontOfQueue:", FrontOfQueue.data if FrontOfQueue else None)
print("EndOfQueue:", EndOfQueue.data if EndOfQueue else None)
print("StartOfFreeList:", StartOfFreeList.data if StartOfFreeList else None)
```

#### c) The pseudocode algorithm for the queue operation JoinQueue is written as a procedure with the header: `PROCEDURE JoinQueue(NewItem)` where NewItem is the new value to be added to the queue. The procedure uses the variables shown in the following identifier table:

![a1](https://cdn.discordapp.com/attachments/1163847683207856178/1187217297186758706/image.png)

#### i Complete the identifier table.

| Identifier      | Data Type | Description                        |
| --------------- | --------- | ---------------------------------- |
| NullPointer     | INTEGER   | Constant set to -1                 |
| QueueArray      | ARRAY     | Array to store queue data          |
| NewItem         | STRING    | Value to be added                  |
| FreeNodePointer | INTEGER   | Pointer to next free node in array |
| FrontOfQueue    | POINTER   | Pointer to the first node in queue |
| EndOfQueue      | POINTER   | Pointer to the last node in queue  |
| NodeToAdd       | POINTER   | Pointer to the node to be added    |

#### ii Complete the pseudocode using the identifiers from the table in part (c) (i)

![b1](https://cdn.discordapp.com/attachments/1163847683207856178/1187217991574753330/image.png)
![b2](https://cdn.discordapp.com/attachments/1163847683207856178/1187218056942977095/image.png)

```
PROCEDURE JoinQueue(NewItem : STRING)
// Report error if no free nodes remaining
IF StartOfFreeList = NullPointer
THEN
    Report Error
ELSE
    // new data item placed in node at start of free list
    NewNodePointer ← StartOfFreeList
    Queue[NewNodePointer].Data ← NewItem
    // adjust free list pointer
    StartOfFreeList ← Queue[NewNodePointer].Pointer
    Queue[NewNodePointer].Pointer ← NullPointer
    // if the first item in the queue then adjust front of queue pointer
    IF FrontOfQueue = NullPointer
    THEN
        FrontOfQueue ← NewNodePointer
    ENDIF
    // new node is the new end of queue
    Queue[NewNodePointer].Pointer ← NullPointer
    IF EndOfQueue = NullPointer
    THEN
        EndOfQueue ← NewNodePointer
    ELSE
        Queue[EndOfQueue].Pointer ← NewNodePointer
        EndOfQueue ← NewNodePointer
    ENDIF
ENDIF
ENDPROCEDURE
```

<details>

<summary>Alternative python code</summary>

```python
class Node:
    def __init__(self, data=None):
        self.data = data
        self.pointer = None

class Queue:
def **init**(self):
self.QueueArray = [Node() for _ in range(50)]
self.StartOfFreeList = 0
self.FrontOfQueue = None
self.EndOfQueue = None

    def JoinQueue(self, NewItem):
        # Report error if no free nodes remaining
        if self.StartOfFreeList is None:
            print("Error: No free nodes remaining.")
        else:
            # new data item placed in node at start of free list
            NewNodePointer = self.StartOfFreeList
            self.QueueArray[NewNodePointer].data = NewItem
            # adjust free list pointer
            self.StartOfFreeList = self.QueueArray[NewNodePointer].pointer
            self.QueueArray[NewNodePointer].pointer = None
            # if the first item in the queue then adjust front of queue pointer
            if self.FrontOfQueue is None:
                self.FrontOfQueue = NewNodePointer
            # new node is the new end of queue
            self.QueueArray[NewNodePointer].pointer = None
            if self.EndOfQueue is None:
                self.EndOfQueue = NewNodePointer
            else:
                self.QueueArray[self.EndOfQueue].pointer = NewNodePointer
                self.EndOfQueue = NewNodePointer

# Example usage:

my_queue = Queue()
my_queue.JoinQueue("Apple")
my_queue.JoinQueue("Pear")
my_queue.JoinQueue("Banana")
```

</details>

## Question 3

#### A program is required that sorts a list of words into alphabetical order. The list of words is supplied as a text file

#### a) Write a program to declare a string array, WordList, that can hold 500 elements. Initialise the array so all elements contain the empty string.

```python
# a. Declare and initialize the WordList array
WordList = [''] * 500
```

#### b) Write a procedure, OutputList, to output all elements in index order.

```python
# b. Procedure to output all elements in index order
def OutputList():
    for i, word in enumerate(WordList):
        print(f"{i + 1}. {word}")
```

#### c) Write a procedure, LoadWords, that asks the user for a filename and reads the contents of the text file, storing each line of text (word) in a separate array element. The procedure should output a relevant error message if: - the file doesn’t exist - the array is full.

```python
# c. Procedure to load words from a file into the WordList array
def LoadWords():
    filename = input("Enter the filename: ")

    try:
        with open(filename, 'r') as file:
            for i, line in enumerate(file):
                line = line.strip()
                if i < len(WordList):
                    WordList[i] = line
                else:
                    print("Error: Array is full.")
                    return
        print("Words loaded successfully.")
    except FileNotFoundError:
        print("Error: File not found.")
```

<details>
<summary>alternative list comprehension approach</summary>

```python
# c. Procedure to load words from a file into the WordList array
def LoadWords():
    filename = input("Enter the filename: ")

    try:
        with open(filename, 'r') as file:
            WordList[:len(file.readlines())] = [line.strip() for line in file]
        print("Words loaded successfully.")
    except FileNotFoundError:
        print("Error: File not found.")
    except IndexError:
        print("Error: Array is full.")
```

- to further describe this one liner: `WordList[:len(file.readlines())] = [line.strip() for line in file]`

```python
# Read all lines from the file and strip whitespace from each line
file_lines_stripped = [line.strip() for line in file]

# Determine the length of the list of stripped lines
num_lines = len(file_lines_stripped)

# Slice the WordList array to accommodate the lines from the file
# This ensures that only the necessary elements are updated, and any remaining elements in WordList remain unchanged.
WordList[:num_lines] = file_lines_stripped
```

</details>

#### d) Write a procedure, SortWords, to perform a bubble sort on all non-empty array elements, so that the words are in alphabetical order.

```python
# d. Procedure to perform bubble sort on non-empty array elements
def SortWords():
    n = len(WordList)
    for i in range(n):
        for j in range(0, n-i-1):
            if WordList[j] and WordList[j] > WordList[j+1]:
                WordList[j], WordList[j+1] = WordList[j+1], WordList[j]
```

#### e) Write program code to call LoadWords, then OutputList, followed by SortWords and then OutputList again.

```python
# e. Call LoadWords, OutputList, SortWords, and OutputList
LoadWords()
print("\nOriginal Word List:")
OutputList()

SortWords()
print("\nSorted Word List:")
OutputList()
```

#### f) Test your program by running it first with a non-existing file, and then with a text file ontaining 20 words in random order. Take screenshots of your test runs that show your code works correctly.

```python
# f. Test the program with a non-existing file and a file with 20 words
# Test 1: Non-existing file
LoadWords()  # This will display an error message

# Test 2: File with 20 words in random order
with open("word_list.txt", 'w') as test_file:
    test_file.write("banana\napple\norange\ngrape\nkiwi\npear\ncherry\nmelon\n")
    test_file.write("peach\nstrawberry\nblueberry\nraspberry\npineapple\nmango\n")
    test_file.write("watermelon\npapaya\napricot\nplum\nfig")

LoadWords()
print("\nOriginal Word List:")
OutputList()

SortWords()
print("\nSorted Word List:")
OutputList()
```

<details>

<summary>the whole program should look something like this:</summary>

```python
# a. Declare and initialize the WordList array
WordList = [''] * 500

# b. Procedure to output all elements in index order
def OutputList():
    for i, word in enumerate(WordList):
        print(f"{i + 1}. {word}")

# c. Procedure to load words from a file into the WordList array
def LoadWords():
    filename = input("Enter the filename: ")

    try:
        with open(filename, 'r') as file:
            for i, line in enumerate(file):
                line = line.strip()
                if i < len(WordList):
                    WordList[i] = line
                else:
                    print("Error: Array is full.")
                    return
        print("Words loaded successfully.")
    except FileNotFoundError:
        print("Error: File not found.")

# d. Procedure to perform bubble sort on non-empty array elements
def SortWords():
    n = len(WordList)
    for i in range(n):
        for j in range(0, n-i-1):
            if WordList[j] and WordList[j] > WordList[j+1]:
                WordList[j], WordList[j+1] = WordList[j+1], WordList[j]

# e. Call LoadWords, OutputList, SortWords, and OutputList
LoadWords()
print("\nOriginal Word List:")
OutputList()

SortWords()
print("\nSorted Word List:")
OutputList()

# f. Test the program with a non-existing file and a file with 20 words
# Test 1: Non-existing file
LoadWords()  # This will display an error message

# Test 2: File with 20 words in random order
with open("word_list.txt", 'w') as test_file:
    test_file.write("banana\napple\norange\ngrape\nkiwi\npear\ncherry\nmelon\n")
    test_file.write("peach\nstrawberry\nblueberry\nraspberry\npineapple\nmango\n")
    test_file.write("watermelon\npapaya\napricot\nplum\nfig")

LoadWords()
print("\nOriginal Word List:")
OutputList()

SortWords()
print("\nSorted Word List:")
OutputList()
```

</details>
