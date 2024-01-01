---
title: Exam Style Questions - Algorithms
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

<details>
<summary>Tasks</summary>

### Task 24.01

#### Write program code to implement the recursive algorithm for the factorial function.

```python
def fact(n):
    if n == 0 or n == 1 or n < 0:
        return 1
    return n * fact(n - 1)

# one liner lambda function
factorial = lambda n: 1 if n == 0 or n == 1 else n * factorial(n - 1)

# Check
print(fact(1), factorial(1)) # 1 1
print(fact(2), factorial(2)) # 2 2
print(fact(3), factorial(3)) # 6 6
print(fact(4), factorial(4)) # 24 24
```

### Task 24.02

#### Consider the following recursive algorithm:

```
PROCEDURE X(n : INTEGER)
IF (n = 0) OR (n = 1)
THEN
OUTPUT n
ELSE
CALL X(n DIV 2)
OUTPUT(n MOD 2)
ENDIF
ENDPROCEDURE
```

#### Dry-run the procedure call X(19) by completing a trace table. What is the purpose of this algorithm?

| Step | n   | Operation            | Output |
| ---- | --- | -------------------- | ------ |
| 1    | 19  | Check n = 0 or n = 1 |        |
| 2    | 19  | Call X(19 DIV 2)     |        |
| 3    | 9   | Check n = 0 or n = 1 |        |
| 4    | 9   | Call X(9 DIV 2)      |        |
| 5    | 4   | Check n = 0 or n = 1 |        |
| 6    | 4   | Call X(4 DIV 2)      |        |
| 7    | 2   | Check n = 0 or n = 1 |        |
| 8    | 2   | Call X(2 DIV 2)      |        |
| 9    | 1   | Check n = 0 or n = 1 |        |
| 10   | 1   | Output n             | 1      |
| 11   | 2   | Output(n MOD 2)      | 0      |
| 12   | 4   | Output(n MOD 2)      | 0      |
| 13   | 9   | Output(n MOD 2)      | 1      |
| 14   | 19  | Output(n MOD 2)      | 1      |

- it converts a decimal number `n` into its binary representation using a recursive approach

### Task 24.03

#### Use your program code from Task 24.01 and add the main program as shown in Worked Example 24.03.

#### Amend your code in the following ways (line numbers are relative to the pseudocode in Worked Example 24.03):

#### • Add a global integer variable CallNumber

#### • Initialise CallNumber to zero (line 155).

#### • Increment CallNumber (line 35).

#### • Add a statement to output the values of CallNumber and n (line 36).

#### • Add a statement to output the value of Result (line 95).

#### Run the program and study the output.

```
# Global variable
CallNumber = 0

# Recursive factorial function
def factorial(n):
    global CallNumber
    CallNumber += 1  # Increment CallNumber
    print(f"CallNumber: {CallNumber}, n: {n}")

    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

# Main program
def main():
    global CallNumber
    CallNumber = 0  # Initialize CallNumber to zero

    # Input for the factorial function
    n = int(input("Enter a non-negative integer: "))

    # Output the factorial result
    result = factorial(n)
    print(f"The factorial of {n} is: {result}")

if __name__ == "__main__":
    main()
```

</details>

## Question 1

#### a Outline the differences between iteration and recursion.

- iteration: uses loops to repeat a set of instructions
- recursion: involves functions calling themselves

#### b Give one advantage and one disadvantage of using recursive subroutines.

- advantage: Elegance and readability for certain problems. Less code. Easiest way to implement some algorithms (specially the ones that are mathematical in nature)
- disadvantage: Risk of stack overflow and potentially higher memory usage.

## Question 2

#### The following is a recursively defined function which calculates the result of BaseExponent. For example, 23 is 8.

```
FUNCTION Power(Base: INTEGER, Exponent : INTEGER) RETURNS INTEGER
IF Exponent = 0
THEN
Result ← 1
ELSE
Result ← Base \* Power(Base, Exponent – 1)
ENDIF
RETURN Result
ENDFUNCTION
```

#### a State what is meant by ‘recursively defined’.

- a function is recursively defines when it refers to itself
- in this case, the function `Power` is being called within its definition
- so, this function (`Power`) is recursively defined

#### b Complete a trace table for the execution of the function call Power(2,4) showing for each re-entry into the Power function, the values passed to the function and the results returned.

| Step | Base | Exponent | Operation                 | Result |
| ---- | ---- | -------- | ------------------------- | ------ |
| 1    | 2    | 4        | Check Exponent = 0        |        |
| 2    | 2    | 4        | Call Power(2, 3)          |        |
| 3    | 2    | 3        | Check Exponent = 0        |        |
| 4    | 2    | 3        | Call Power(2, 2)          |        |
| 5    | 2    | 2        | Check Exponent = 0        |        |
| 6    | 2    | 2        | Call Power(2, 1)          |        |
| 7    | 2    | 1        | Check Exponent = 0        |        |
| 8    | 2    | 1        | Call Power(2, 0)          |        |
| 9    | 2    | 0        | Set Result ← 1            | 1      |
| 10   | 2    | 1        | Result ← 2 \* Power(2, 0) | 2      |
| 11   | 2    | 2        | Result ← 2 \* Power(2, 1) | 4      |
| 12   | 2    | 3        | Result ← 2 \* Power(2, 2) | 8      |
| 13   | 2    | 4        | Result ← 2 \* Power(2, 3) | 16     |

#### c Explain the role of the stack in the execution of the Power function.

- in the execution of the `Power` function, the stack manages function calls and their local variables
- each recursive call creates a new stack frame, to store parameters and variables
- as the recursive approach ends, intermediate results are accumulated, and the final result is obtained
- the stack is crucial for preserving context and managing the flow of the recursive calls

#### d Write a python non-recursive (iterative) version of the Power function. [6]

```python
def power(base, exponent):
    result = 1
    while exponent > 0:
        result *= base
        exponent -= 1
    return result

# power(2, 4) --> basically like 2^4
print(power(2, 4)) # 16
```

#### e i Give one reason why a non-recursive Power function may be preferred to a recursive one.

- efficient memory usage

#### e i Give one reason why a recursive Power function may be preferred to a non-recursive one

- increased readability

## Question 3

#### The following is a recursively defined function which calculates the nth integer in the sequence of Fibonacci numbers.

```
01 FUNCTION Fibonacci(n : INTEGER) RETURNS INTEGER
02 IF (n = 0) OR (n = 1)
03 THEN
04 Result ← 1
05 ELSE
06 Result ← Fibonacci(n – 1) + Fibonacci(n – 2)
07 ENDIF
08 RETURN Result
09 ENDFUNCTION
```

#### a i Give the line number of the line containing the base case.

- 4

#### ii Give the line number of the line containing the general case.

- 6

#### Complete a trace table for the function call Fibonacci(4).

| Step | n   | Operation                 | Result |
| ---- | --- | ------------------------- | ------ |
| 1    | 4   | Check n = 0 or n = 1      |        |
| 2    | 4   | Call Fibonacci(3)         |        |
| 3    | 3   | Check n = 0 or n = 1      |        |
| 4    | 3   | Call Fibonacci(2)         |        |
| 5    | 2   | Check n = 0 or n = 1      |        |
| 6    | 2   | Call Fibonacci(1)         |        |
| 7    | 1   | Check n = 0 or n = 1      |        |
| 8    | 1   | Set Result ← 1            | 1      |
| 9    | 2   | Call Fibonacci(0)         |        |
| 10   | 0   | Set Result ← 1            | 1      |
| 11   | 1   | Set Result ← 1            | 1      |
| 12   | 3   | Result ← Fibonacci(2) + 1 | 2      |
| 13   | 4   | Result ← Fibonacci(3) + 2 | 4      |
