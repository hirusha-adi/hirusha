---
title: Data Types
sidebar_label: Data Types
slug: data_types
sidebar_position: 2
---

:::caution note

some knowledge of pseudocode is required to understand this

:::

## Contstants

- no need to be declared seperately

```
CONSTANT MyVar <- "hirusha"
```

### Why use Constants?

- value is entered only once
- avoids accidental changs in that value
- when needed, can easily change the value
- makes the program easier to understand

## String (`STRING`)

```
DECLARE MyVar: STRING
MyVar <- "hirusha"
```

## Char (`CHAR`)

```
DECLARE MyVar: CHAR
MyVar <- 'A'
```

## Real (`REAL`)

```
DECLARE MyVar: REAL
MyVar <- 69.69
```

## Integer (`INTEGER`)

```
DECLARE MyVar: INTEGER
MyVar <- 69
```

### `REAL` to `INTEGER`

- use `INT` function (available in INSERT)
- Does NOT round off the number
- take only the integer part    

```
DECLARE MyVar1: INTEGER
DECLARE MyVar2: REAL

MyVar1 <- 69.875
MyVar2 <- INT(MyVar1)
```

- `MyVar2` will have the value `69` according the aforementioned reasons

## Boolean (`BOOL`)

### Why use Booleans?

- to terminate a conditional loop
- when variables need to store only 1 value
- eg: light is ON or light is OFF

## Date (`DATE`)

### Introduction

:::tip note
all the functions under the [Date section](#date-date) is given in the insert
:::

```
DECLARE MyDate: DATE
MyDate <- SETDATE(18, 10, 2023)
```

### Remaining Duration

```
RemainMonths <- 12 - MONTH(MyDate)
```

### Day Index

- refer to the *insert*
- used to tell weather the day is Monday...Friday

#### How to do it?

- refer to Insert
- store 7 Days as strings in a 1D array
- get `DAYINDEX(Date)` and use it as index to the array with strings
- output the relevant day  

### Age Verification

- day is usually not needed
- ONLY month AND year is fine


## Records

### Why use Records?

- allows different data types to be stored under one identifier
- used when implementing Linked Lists

```
TYPE Person
	DECLARE Name: STRING
	DECLARE ID: INTEGER
ENDTYPE
```

## Arrays

### Introduction

- the type can also be a Record
- in here, the
    - **Lower Bound** is 1
    - **Upper Bound** is 100

```
DECLARE People: ARRAY[1:100] OF Person
```

- assigning a value to 5th element of array
- in here, the
    - **[Array Index](#array-index)** is 5

```
People[5].Name <- "Hirusha"
People[5].ID <- 69
```

- the ID can be accessed using the index, of eg: a for loop (similiarly to the [Initializing all elements section](#initializing-all-elements))

### Initializing all elements

```
DECLARE Index: INTEGER
DECLARE ArrName: ARRAY[1:100] OF STRING
FOR Index <- 1 to 100 
	ArrName[Index] <- ""
NEXT Index
```

### 2D Arrays

#### Syntax:

- first dimension has 6 elements
- second dimension has 7 elements

```
DECLARE Board : ARRAY[1:6,1:7] OF INTEGER
```

#### Assigning Values

```
Board[3,4] ← 0 // sets the element in row 3 and column 4 to zero
```

### Linear Search

- checking each element of an array in turn for a required value
- 100 is the array upper bound

```
MaxIndex ← 6
INPUT SearchValue
Found ← FALSE
Index ← –1

REPEAT
 	Index ← Index + 1
 	IF MyList[Index] = SearchValue
 	THEN
 		Found ← TRUE
 	ENDIF
UNTIL FOUND = TRUE OR Index >= MaxIndex
```

### Bubble Sort

- Bad runtime: O(n^2) in worst case
- a sorting method where adjacent pairs of values are compared and swapped until array is fully sorted
- [Click here](https://www.youtube.com/watch?v=Jdtq5uKz-w4) to learn more

#### Example

- Pseudocode

```
MaxIndex ← 6
INPUT SearchValue
Found ← FALSE
Index ← –1

REPEAT
 	Index ← Index + 1
 	IF MyList[Index] = SearchValue
 	THEN
 		Found ← TRUE
 	ENDIF
UNTIL FOUND = TRUE OR Index >= MaxIndex
```

- Python (Explained with comments)

```python
def while_for_implentation(list_a):
    indexing_length = len(list_a) - 1  # Snan not apply comparision starting with last item of list (No item to right)
    sorted = False  # Create variable of sorted and set it equal to false

    while not sorted:  # Repeat until sorted = True
        sorted = True  # Break the while loop whenever we have gone through all the values

        for i in range(0, indexing_length):  # For every value in the list
            if list_a[i]:  # "Angled brackets not allowed in Youtube Description :( list_a[i+1]: #if value in list is greater than value directly to the right of it,
                sorted = False  # These values are unsorted
                list_a[i], list_a[i+1] = list_a[i+1], list_a[i]  # Switch these values
    return list_a  # Return our list "unsorted_list" which is not sorted.
```

- Python (Code only)

```python
def while_for_implentation(list_a):
    indexing_length = len(list_a) - 1
    sorted = False 
    while not sorted:  
        sorted = True  
        for i in range(0, indexing_length): 
            if list_a[i]:
                sorted = False 
                list_a[i], list_a[i+1] = list_a[i+1], list_a[i] 
    return list_a 
```

### Why use Arrays?

- can write algortihms to process/search/sort data
- can be easily iterated through (using an Index)
- makes the program easier to understand
- multiple instances can be referenced via a single identifier
- easier to change when number of items increase

### Array Index

- references individual element in array
- provides the index to array
- of type `INTEGER`
- when in loop, use **loop counter** as array index

### Why use a single Array with User Defined Data types (Records)?

- multiple data types under 1 identifier
- can be referenced together
- (has a closer association)
- program is easier to deisgn and maintain

### Why indicate unused Array elements?

- to recognize unused elements easily
- otherwise, element may contain unexpected data

### How to indicate an unused Array element?

- assign a value outside the normal range
- assign a bogus values
