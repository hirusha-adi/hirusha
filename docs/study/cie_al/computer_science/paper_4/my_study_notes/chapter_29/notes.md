---
title: Notes - Declarative programming
sidebar_label: Notes
slug: notes
sidebar_position: 1
---

First, [install swi-prolog](./initial_setup.md) before getting started

# indian guy tutorial

## 1. why logic programming?

- consider this example: 
    - John own the book
    - Person owns the Object
    - the relationship is "owns"

- these relationship problems can be easily done using logic programming languages like prolog

- we first have a knowledge base
    - what ever we already know
    - facts and rules

- the machine takes in the knowledge base, then the question to produce an answer
    - answers can be either yes/no/some other output

- in other languages like java, c++, we just import the required libraries, declare the main function and our other procedures, and display the output / return. they dont take in any knowledge base.

- prolog vs c++/java
    - c++/java
        -  we use objects
        - problem is divided into different objects
        - these objects are all combined for our particular solution
        - this is a data structure, can execute methods and can inherit stuff from a class hierarchy to which the object belongs, etc...
    - prolog
        - objects in prolog are very different
        - John owns the book
            - object is the book
                - very close to the english meaning
        - does not refer to a data structure
            - cannot inherit from previsous classes
        - refers to things we can represent using terms

- why logic programming?
    - maintainance is costly in software development
        - eg in java, code readability depends on who the developer is
    - in prolog,
        - maintainance cost is reduced drastically
        - readability is very easy
        - 

## 2. history of prolog

- made in 1970
- used in relational databases, design automation,
- different from conventional programming languages
- its a descriptive languages
    - describes facts, relationships
    - and less about steps taken by computer to solve a problem
- prolog tells you what to do, not how to do

## 3. facts

- nothing but rules
- eg:
    - likes(john, mary).
        - read it as john likes mary
        - john is a object
        - mary is a object
        - likes is the relationship
        - we can call objects as parameters / arguments (what goes inside brackets)
        - make sure to end it with a full stop

- universal truth, in knowledge base, which will have facts, rules, etc..

- prolog will take this knowledge base, then our question and give the answer accordingly

- when declaring a fact, follow these rules/conventions:
    - start with lowercase
    - keep it single line
    - if many facts, use many lines

- consider this example

```
valuable(gold). % this is like a type
female(jane). % this is like a type
owns(jane, gold). % jane owns gold
father(john, mary). % john is the father of mary
gives(john, book, mary). % john gives book to mary
play(john, mary, football). % john and mary plays football
play(jane, jim, badminton). % jane and jim plays badminton
```

- notice how `gives` and `play` is read different
- every relationship can follow its own structure

- now, this knowledge base contains all the facts
- load the knowledge base

```
- does mary own gold?
?- owns(mary,gold).
false.

- does jane own gold?
?- owns(jane,gold).
true.

- does mary own anything
?- owns(mary,_).
false.

- does jane own anything
?- owns(jane,_).
true.

- proof that the order matters:
?- father(john,mary).
true.

?- father(mary,john).
false.

- human is not in knowledge base
?- human(john).
ERROR: Unknown procedure: human/1 (DWIM could not correct goal)
```

## 4. run prolog code

https://youtu.be/-v1K9AnkAeM?si=GkfE-tJIqcY21oyx

follow the first coupe of minutes in this video

## 4. Variables

```
likes(jim, flowers).
likes(jim, peanuts).
likes(jim, mangoes).
likes(jim, oranges).
likes(john, oranges).
likes(jane, oranges).
dislikes(jim, apple).
```

```
- what does john like?
?- likes(jim, Item).
Item = flowers ;
Item = peanuts ;
Item = mangoes ;
Item = oranges. % the last item in the list will end with a full stop

- who likes oranges?
?- likes(Person,oranges).
Person = jim ;
Person = john ;
Person = jane. 

- who likes what?
?- likes(Person,Item).
Person = jim,
Item = flowers ;
Person = jim,
Item = peanuts ;
Person = jim,
Item = mangoes ;
Person = jim,
Item = oranges ;
Person = john,
Item = oranges ;
Person = jane,
Item = oranges.
```

- variables start with uppercase letter
- make sure to press `;` until everything ends
- the last item in the list will end with a full stop

## 4. AND / OR

- and is `;`
- or is `,`

```
likes(jim, flowers).
likes(john, flowers). % added this new line
likes(jim, peanuts).
likes(jim, mangoes).
likes(jim, oranges).
likes(john, oranges).
likes(jane, oranges).
dislikes(jim, apple).
```

```

```


