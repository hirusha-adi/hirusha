---
title: Pseudocode
sidebar_label: Pseudocode
slug: pseudocode
sidebar_position: 3
---

## Introduction

### Features

- meaningful variable names
- indentation
- capitalization of keywords
- whitespace
- comments
- local variables

## Modular Approach

### How?

- use of procedures/functions
- use of local variables

### Advantages

- to increase the modularity of the code
- too ru-use the same code
- reduces complexity
- easier testing and debugging


## Procedures

- a sequence of steps that is given an identifier and can be called to perform a sub-task

```
PROCEDURE ProcedureName(BYREF Name: STRING)
    // code
ENDPROCEDURE
```

- they are called like this

```
CALL ProcedureName()
```

### What is a Procedure Interface?

- provides mechanism to allow calling program to pass data 
- defines paramaters of a procedure
- ... giving their data type and order 

## Functions

- a sequence of steps that is given an identifier and returns a single value; function call is part

```
FUNCTION FuncName(Name: STRING, Price: REAL, BYREF Value: CHAR) RETURNS BOOLEAN
    // code
ENDFUNCTION
```

- as a function resturns a value, we assign it to a variable

```
MyVar <- FuncName()
```

### Describe the Function Interface?

- basically tell name + datatype of paramaters and return values 

### Combining multiple functions into one

- paramaters needs to be passed to the module to identify the type of thing we want to do
- the algorithm will be controlled by global variables / parameters

- good
    
    - aids re-usability
    - less repititive code
    - only have to change one module if needed

- bad

    - a single module can be more complex
    - cannot be split among different teams

## Passing Paramaters

### What is a Parameter?

- a value passed between modules

### By Reference (`BYREF`)

- a pointer of addres of the variable is passed 
- original is changed when paramater is changed 
- original variable passed in is updated

- *look for erros in it*

### By Value (`BYVAL`)

- a copy of that variable is passed (its value)
- the original variable is not changed


## Declarations

### Variable

```
DECLARE MyVar: INTEGER
```

### Array

- the data type can also be a user defined type (record)

```
DECLARE MyArr: ARRAY[1:100] OF INTEGER
```


## Variables

- all variables should be declared before being initialized

### Variable Names

- variable name should give a proper meaning
- eg:
    - `Temp` : the name doesn't indicate what its used for


### Good Variable Names?

- makes code easier to understand
- describes the purpose of the identifier
- makes cost easier to debug / maintain

### Local

- a variable that is accessible only within the module in which it is declared

### Global

- a variable that is accessible from all modules

### Assignment

```
Name <- "Hirusha"
```

### Swapping two variables

- use a temporary variable here

```
Temp ← Value1
Value1 ← Value2
Value2 ← Temp
```

### Identifier Table

- a table listing the variable identifiers required for the solution, 
- with explanations 
- and data types 
- and examples
- is also provided by the debugger

#### Example:

| Identifier     | Explanation                            |
|----------------|----------------------------------------|
| BiggestSoFar   | Stores the biggest number input so far  |
| NextNumber     | The next number to be input             |

## Logic Statmenets / Conditionals

### Syntax

- `A < B` is the **condition** 

```
IF A < B
THEN
 	<statement(s)>
ELSE
 	<statement(s)>
ENDIF
```

### ELSE IF

- **NO** ELSE IF / ELIF in pseudocode
- use nested conditionals instead (Conditionals within one conditional)

```
IF A < B THEN
 	IF B < C THEN
        <statement(s)>
    ELSE
        <statement(s)>
    ENDIF
ELSE
 	<statement(s)>
ENDIF
```


### Relational Operators

| Operator | Comparison              |
|----------|-------------------------|
| =        | Is equal to             |
| <        | Is less than            |
| >        | Is greater than         |
| <=       | Is less than or equal to|
| >=       | Is greater than or equal to |
| < >       | Is not equal to         |


## Repition

### `REPEAT` ... `UNTIL`

- if condition is met in *n* th iteration, *n+1* will also be executed 
- and then the loop will be terminated

```
REPEAT
	<condition(s)>
UNTIL <condition>
```

### `FOR` ... `NEXT`

- use when working with arrays

```
FOR Index ← 2 TO 10
 	MyArr[Index] <- "" // initialize 2->10 elements of array
NEXT Index
```


### Nested Loops

- we use comments to indicate weather to go to a new line or not
- as `\n` is not available in pseudocode

```
INPUT NumberOfRows
INPUT NumberOfColumns
INPUT Symbol

FOR RowCounter ← 1 TO NumberOfRows
 	FOR ColumnCounter ← 1 TO NumberOfColumns
 		OUTPUT Symbol // without moving to next line
 	NEXT ColumnCounter
 	OUTPUT Newline // move to the next line
NEXT RowCounter
```

- this will be the output for these input values:  *3, 7 and &*

```
&&&&&&&
&&&&&&&
&&&&&&&
```

