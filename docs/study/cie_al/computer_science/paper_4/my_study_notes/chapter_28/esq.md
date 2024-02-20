---
title: Exam Style Questions - Low-level programming
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

## Tasks

<details>
<summary>Tasks</summary>

### Tasks 28.01

Write assembly code instructions for this sequence of pseudocode statements:

```
A ← 2
B ← 10
C ← A + B
D ← A - B
```

- Answer:
    ```
    LDM #2
    STO A

    LDM #10
    STO B

    ADD A
    STO C

    LDD A
    SUB B
    STO D
    ```

### Tasks 28.02

Write assembly code instructions for this sequence of pseudocode statements:

```
IF A <> 0 THEN
    B ← A
ELSE
    B ← B - 1
ENDIF
```

- Answer:
    ```
            LDD A
            SUB A
            CMP #0
            JPE ELSE    ; if a-a==0, then go to else => equal to not(a-a==0) to go if
    THEN:   LDD A
            STO B
    ELSE:   LDD B
            SUB #1
            STO B
    ENDIF:  ...
    ```

### Tasks 28.03

Write assembly code instructions for this sequence of pseudocode statements:

```
Number ← 1
Total ← 0
Max ← 5
REPEAT
Total ← Total + Number
Number ← Number + 1
UNTIL Number = Max
```

- Answer:
    ```
            LDM #1
            STO Number
            LDM #0
            STO Total
            LDM #5
            STO Max
    LOOP:   LDD Total
            ADD Number
            STO Total
            LDD Number
            INC ACC
            STO Number
            CMP Max
            JPN LOOP        ; repeat until the condition becomes true
                            ; repeat while condtion is false
    ```

### Tasks 28.04

Write assembly code instructions for this sequence of pseudocode statements:

```
Count ← 0
REPEAT
Count ← Count + 1
INPUT Character
UNTIL Character = "N"
```

- Answer:
```
        LDM #0
        STO Count
LOOP:   LDD Count       ; if we don't mention it, this won't work from 2nd iteraion onwards.
        INC ACC
        STO Character
        IN
        STO Character
        CMP #78         ; ascii code of 'N'
        JPN LOOP
```


### Tasks 28.05

Write assembly code instructions for this sequence of pseudocode statements:

```
REPEAT
Count ← Count + 1
INPUT Character
UNTIL Character = "N"
OUTPUT Count
```

- Answer:
```
        LDM #0
        STO Count
LOOP:   LDD Count
        INC ACC
        STO Character
        IN
        STO Character
        CMP #78         ; ascii code of 'N'
        JPN LOOP
        LDD Count
        OUT
```

### Tasks 28.06

Write instructions to reverse a word entered at the keyboard. This requires access to an area of memory treated as a stack

- Answer:
```

```

</details>

## Question 1

a) Explain the operation of the AND instruction.

The AND instruction performs a bitwise AND operation between two operands, setting each bit of the result to 1 only if both corresponding bits of the operands are 1.

b) The ASCII code for ‘0’ is the binary value 00110000. The ASCII code for ‘1’ is the binary
value 00110001. Write an AND instruction to convert any numeric digit stored in ACC in the form of an ASCII code
to its eight-bit binary integer equivalent.

```
LDM 00110000b
LDD 00110000    ; this is now in the ACC
AND 00001111b
```

c)

```
; Input first digit
IN

; Convert from ASCII to its digit value
; ---

; Move to upper nibble
LSL #4

; Store in location Result
STO Result

; Input second digit
IN

; Convert from ASCII to its digit value
; ---

; Combine the two values
ADD Result

; Store result
STO Result

; End of program
END

; Labels
;   Mask: 
;       --
;   Result:
;       &00
```

## Question 2

Write an assembly language program that outputs a sequence of characters stored in successive
locations, starting at the location labelled: STRING. Output ends when the character in ACC is ‘!’
(ASCII code 33).

```
; Set index register to zero
LDM #0
STO IX

; Load ACC with character stored at STRING (modified by index register)
; ---
; ---

```