---
title: Notes - Declarative programming
sidebar_label: Notes
slug: notes
sidebar_position: 1
---

First, [install swi-prolog](./initial_setup) before getting started

## Logic Programming

### Introduction

Consider the following example:

- John owns the book.
- Person owns the Object.
- The relationship is "owns."

These relationship problems can be easily solved using logic programming languages like Prolog.

In logic programming, we first establish a knowledge base consisting of facts and rules. This knowledge base represents whatever information we already know about the problem domain.

The machine then takes in this knowledge base along with the question and produces an answer, which can be either "true," "false," or some other output.

Basically

1. We load the knowledge base.
2. User inputs the query.
3. Prolog returns the results.


### Prolog vs. C++/Java

In C++ or Java:

- We use objects, where the problem is divided into different objects that are combined for a particular solution.
- Objects are data structures that can execute methods and inherit from a class hierarchy.

In Prolog:

- Objects are very different, often closely aligned with the English meaning of the problem.
- Prolog terms do not refer to data structures and cannot inherit from anything. They represent things we describe using terms.

### History

Prolog was created in 1970 and has been used in relational databases, design automation, and other fields. It differs from conventional programming languages in that:

- It is a descriptive language, focusing on describing facts and relationships rather than the steps taken by the computer to solve a problem.
- Prolog tells you what to do, not how to do it.

## Prolog

### Keywords

1. **Atom**: Basic data type representing constants or names.
2. **Facts**: Assertions about relationships between entities.
3. **Rule**: Logical statement defining conditions and conclusions.
4. **Predicate**: Named relation or property defined by rules or facts.
5. **Variable**: Placeholder for values, instantiated during execution.
6. **Query**: Goal or question posed to Prolog for solution.

<details>

<summary>Detailed descriptions</summary>

1. **Atom**: In Prolog, an atom is a basic data type representing a constant. Atoms are often used to denote names of predicates, variables, or other constants. They are sequences of characters starting with a lowercase letter or enclosed in single quotes.

2. **Facts**: Facts in Prolog represent assertions about the relationships between various entities in the program's domain. They consist of a predicate followed by a list of arguments, defining a specific relationship or property. Facts are the base units of knowledge in Prolog programs.

3. **Rule**: A rule in Prolog is a logical statement that defines a relationship between certain conditions (antecedents) and a conclusion (consequent). It consists of a head (consequent) and a body (antecedents), separated by the ':-' operator. When the conditions in the body are satisfied, the conclusion in the head can be inferred.

4. **Predicate**: A predicate is a named relation or property defined by a rule or a fact. It consists of a predicate indicator (the predicate name followed by the number of arguments it takes) and may have one or more clauses (facts or rules) associated with it.

5. **Variable**: Variables in Prolog are denoted by strings starting with an uppercase letter or an underscore. They represent placeholders for values that can be instantiated with constants or other variables during program execution. Variables enable Prolog to perform logical inference and provide a mechanism for parameter passing.

6. **Query**: A query in Prolog is a goal or a question posed to the Prolog interpreter about the relationships defined in the program. It consists of a predicate followed by a list of arguments. The Prolog interpreter attempts to find solutions (bindings for variables) that satisfy the query by executing the rules and facts defined in the program.

Generated with ChatGPT
</details>


### Facts

Consider the following example:

- `likes(john, mary).`
    - Read as "John likes Mary."
    - `john` and `mary` are like objects, called **"atoms"**.
    - `likes` is the relationship.
    - Objects are parameters/arguments (what goes inside brackets).
    - End everything with a full stop.

In Prolog, a knowledge base comprises facts, rules, and more, representing universal truths. Prolog utilizes this knowledge base along with questions to provide answers.

When declaring a fact, follow these conventions:

- Start with lowercase. (if it starts with an upper case, it's treated as a Variable)
- Keep it single line.
- Use multiple lines for multiple facts.

Consider this example:

```prolog
valuable(gold).          % This is like a type.
female(jane).            % This is like a type.
owns(jane, gold).        % Jane owns gold.
father(john, mary).      % John is the father of Mary.
gives(john, book, mary). % John gives a book to Mary.
play(john, mary, football).  % John and Mary play football.
play(jane, jim, badminton).  % Jane and Jim play badminton.
```

Notice how the relationships `gives` and `play` are structured differently. Each relationship can have its own structure.

Now, let's load the knowledge base and run some queries:

- Does Mary own gold?
    ```prolog
    ?- owns(mary, gold).
    false.
    ```

- Does Jane own gold?
    ```prolog
    ?- owns(jane, gold).
    true.
    ```

- Does Mary own anything? (We are using an Anonymous Variable here)
    ```prolog
    ?- owns(mary, _).
    false.
    ```

- Does Jane own anything? (We are using an Anonymous Variable here)
    ```prolog
    ?- owns(jane, _).
    true.
    ```

- Proof that the order matters:
    ```prolog
    ?- father(john, mary).
    true.

    ?- father(mary, john).
    false.
    ```

- "human" is not in the knowledge base (it's undefined):
    ```prolog
    ?- human(john).
    ERROR: Unknown procedure: human/1 (DWIM could not correct goal).
    ```


### Variables

- Variables start with an uppercase letter.
- Press `;` button on the keyboard to find additional results until everything is listed, once everything is listed, the final result will end with a `.` (period) and you will be taken back to the prompt. (`;` basically means OR)
- The last item in the list of results ends with a full stop.
- Note that `_` is the anonymous variable. Scroll up to the "Does Mary own anything?" example to understand it further.

Consider the following database / knowledge base of likes and dislikes:

```prolog
likes(jim, flowers).
likes(jim, peanuts).
likes(jim, mangoes).
likes(jim, oranges).
likes(john, oranges).
likes(jane, oranges).
dislikes(jim, apple).
```

- **Query:** What does John like?
    ```prolog
    ?- likes(jim, Item).
    Item = flowers ;
    Item = peanuts ;
    Item = mangoes ;
    Item = oranges.   % The last item in the list ends with a full stop.
    ```

- **Query:** Who likes oranges?
    ```prolog
    ?- likes(Person, oranges).
    Person = jim ;
    Person = john ;
    Person = jane.
    ```

- **Query:** Who likes what?
    ```prolog
    ?- likes(Person, Item).       % both are variables
    Person = jim, Item = flowers ;
    Person = jim, Item = peanuts ;
    Person = jim, Item = mangoes ;
    Person = jim, Item = oranges ;
    Person = john, Item = oranges ;
    Person = jane, Item = oranges.
    ```

### AND / OR / NOT

In Prolog:

- **AND** is represented by `,`.
- **OR** is represented by `;`.
- **NOT** is represented by `not`.

Consider the updated database of likes and dislikes:

```prolog
likes(jim, flowers).
likes(john, flowers). % Added this new line.
likes(jim, peanuts).
likes(jim, mangoes).
likes(jim, oranges).
likes(john, oranges).
likes(jane, oranges).
dislikes(jim, apple).
```

- **Query:** Listing all likes:
    ```prolog
    ?- listing(likes).
    likes(jim, flowers).
    likes(john, flowers).
    likes(jim, peanuts).
    likes(jim, mangoes).
    likes(jim, oranges).
    likes(john, oranges).
    likes(jane, oranges).
    true.
    ```

- **Query:** Does Jim like flowers OR does John like apples?
    ```prolog
    ?- likes(jim, flowers); likes(john, apples).
    true.
    ```
    Explanation: `likes(jim, flowers)` is true, and `likes(john, apples)` is false.

- **Query:** Does Jim like flowers AND does John like apples?
    ```prolog
    ?- likes(jim, flowers), likes(john, apples).
    false.
    ```
    Explanation: `likes(jim, flowers)` is true, but `likes(john, apples)` is false, so the conjunction is false.

- **Query:** Things both Jim and John like in common:
    ```prolog
    ?- likes(jim,X).
    X = flowers ;
    X = peanuts ;
    X = mangoes ;
    X = oranges.

    ?- likes(john,X).
    X = flowers ;
    X = oranges.
    
    ?- likes(jim, X), likes(john, X).
    X = flowers ;
    X = oranges.
    ```
    Explanation: Both Jim and John like flowers and oranges.

- **Query:** Using the anonymous variable:
    ```prolog
    ?- likes(john, _).
    true ;
    true.
    ```
    Explanation: John likes only two items.


### Basic Rules

Rules are logical statements defining conditions and conclusions.

In Prolog, `:-` means "if".


```prolog
% Fact: Romeo loves Juliet.
loves(romeo, juliet).

% Rule: Juliet loves Romeo if Romeo loves Juliet.
loves(juliet, romeo) :- loves(romeo, juliet).
```

Additional rules and facts:

```prolog
% Facts: Albert and Alice are happy.
happy(albert).
happy(alice).

% Fact: Alice is with Albert.
with_albert(alice).

% Rule: Albert laughs if he is happy.
laughs(albert) :-
    happy(albert).

% Rule: Alice dances if she is happy and with Albert.
dances(alice) :-
    happy(alice), % "and"
    with_albert(alice).

% Rule: Alice does dance if she dances.
does_alice_dance :- 
    dances(alice),
    write('When Alice is happy with Albert, she dances'). % like print() in python
```

- **Query:** Does albert laugh?
    ```prolog
    ?- laughs(albert).
    true.
    ```
- **Query:** Does albert dance?
    ```prolog
    ?- dances(albert).
    false.
    ```
    Explanation: This is false because `dances` is written explicitly for alice only. If we want it to work with anything, we can use variables. More on that later.


- **Query:** Does alice dance?
    ```prolog
    ?- dances(alice).
    true.
    ```

- **Query:** Does alice dance?
    ```prolog
    ?- does_alice_dance.
    When Alice is happy with Albert, she dances
    true.
    ```

### Advanced Rules

Consider this family tree example:

![img1](./images/img1.png)

It can be written as follows in the database:

```prolog
% Facts to define the family tree
parent(fred, jack). % fred is the parent of jack
parent(fred, alia).
parent(fred, paul).
parent(dave, fred).
```

We know that G is a grandparent of S, if G is a parent of P and P is a parent of S. We could write this as a rule: (Note that we introduced a temporary variable P which is being used within the rule)

```prolog
% grandparent(G, S) IF parent(G, P) AND parent(P, S).
grandparent(G, S) :- parent(G, P), parent(P, S).
```

A person has a sibling (brother or sister) if they have the same parent. We can write this as the Prolog rule:

```
sibling(A, B) :-
    parent(P, A),   % and
    parent(P, B).
```

- **Query:** Jack is the grandparent of whom?
    ```prolog
    ?- grandparent(jack, X).
    false.
    ```
    Explanation: Jack is not a grandparent as he is in the youngest generation of the family tree.

- **Query:** Who is the grandparent of jack?
    ```prolog
    ?- grandparent(X, jack).
    X = dave.
    ```

- **Query:** Dave is the grandparent of whom?
    ```prolog
    ?- grandparent(dave, X).
    X = jack ;
    X = alia ;
    X = paul.
    ```

- **Query:** Who are the siblings of Jack?
    ```prolog
    ?- sibling(X, fred).
    X = fred.
    ```
    Note: We get that fred is his own sibling

- **Query:** Who are the siblings of Paul?
    ```prolog
    ?- sibling(X, paul).
    X = jack ;
    X = alia ;
    X = paul.
    ```
    Note: We get the answers we expect, but we also get the answer that Paul is his own sibling.

Note: in the last 2 examples, the part of our query is also returned in the answer/result. To fix it, we can modify the code as follows:

```prolog
sibling(A, B) :-
    parent(P, A),
    parent(P, B),
    not(A=B).       % will stop giving the question itself as an answer
```

Running the last two quries once again:

- **Query:** Who are the siblings of Jack?
    ```prolog
    ?- sibling(X, fred).
    false.
    ```

- **Query:** Who are the siblings of Paul?
    ```prolog
    ?- sibling(X, paul).
    X = jack ;
    X = alia.
    ```
