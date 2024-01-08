---
title: Notes - Programming paradigms
sidebar_label: Notes
slug: notes
sidebar_position: 1
---

## Tasks

<details>
<summary>Tasks</summary>

#### TASK 25.01

#### Draw a line between a statement on the left and its matching programming paradigm on the right

| Statement                                                              | Programming Paradigm |
| ---------------------------------------------------------------------- | -------------------- |
| Commands available depend on the type of processor                     | Low-level            |
| Information hiding is used to protect internal properties of an object | Object-oriented      |
| Statements operate on data                                             | Imperative           |
| Answer a question via a search for a solution                          | Declarative          |
| Data is combined with procedures                                       | Object-oriented      |
| First do this and then do that                                         | Imperative           |
| The basic concept is a relation                                        | Declarative          |

#### TASK 25.02

#### For each of the four programming paradigms in this chapter, give one programming statement example that is characteristic for this paradigm. State the programming language you used for each example.

1. **Low-level Programming:**

   - Example: `MOV AX, 5`
   - Language: Assembly (x86)

2. **Imperative Programming:**

   - Example: `for (int i = 0; i < 10; i++) { printf("%d\n", i); }`
   - Language: C

3. **Object-oriented Programming:**

   - Example: `Car myCar = new Car(); myCar.accelerate(50);`
   - Language: Java

4. **Declarative Programming:**
   - Example: `SELECT name FROM users WHERE age > 21;`
   - Language: SQL

</details>

## Programming Paradigms

The four types of programming paradigms are:

1. **Low-level** programming paradigm
2. **Imperative** programming paradigm
3. **Object-oriented** programming paradigm
4. **Declarative** programming paradigm

### Low-level

- Direct manipulation of memory addresses and registers.
- Exploitation of processor architecture.
- Specific to processor families (e.g., x86 for Intel).
- Involves Assembly languages.

### Imperative

- Programs as explicit step sequences.
- Execution by the processor.
- Emphasizes how to achieve a result.
- Examples: Pascal, C, Basic.

### Object-oriented

- Objects interacting with associated methods.
- Data structures with behavior.
- Evolution from imperative languages.
- Examples: Java, Python, Visual Basic (.NET).

### Declarative

- Problem-solving through logical specifications.
- Programmer describes the situation of interest.
- Query-based, letting the system determine how to achieve the goal.
- Examples: SQL, Prolog.

:::info note

We will be learning prolog in the later chapters

:::
