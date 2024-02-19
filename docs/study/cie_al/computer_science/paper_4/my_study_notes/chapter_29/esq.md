---
title: Exam Style Questions - Declarative programming
sidebar_label: ESQ
slug: esq
sidebar_position: 2
---

## Question 1

A logic programming language is used to represent, as a set of facts and rules, details of cities of the world. The set of facts and rules are shown below in clauses labelled 1 to 17.

```prolog
01 capital(vienna).
02 capital(london).
03 capital(santiago).
04 capital(caracas).
05 capital(tokyo).
06 cityIn(vienna, austria).
07 cityIn(santiago, chile).
08 cityIn(salzburg, austria).
09 cityIn(maracaibo, venezuela).
10 continent(austria, europe).
11 continent(chile, southAmerica).
12 continent(uk, europe).
13 continent(argentina, southAmerica).
14 iVisited(vienna).
15 iVisited(tokyo).
16 capitalOf(City, Country)
    IF capital(City) AND cityIn(City, Country).
17 europeanCity(City)
    IF cityIn(City, Country) AND continent(Country, europe).
```

These clauses have the following meanings:

| Clause | Meaning |
| - | - |
| 01 | Vienna is a capital. |
| 06 | Vienna is in Austria. |
| 10 | Austria is in the continent of Europe. |
| 14 | I visited the city of Vienna. |
| 16 | City is the capital of Country if <br/> City is a capital and it is in Country. |
| 17 | City is a city in Europe if City is in Country and Country is in Europe. |

a) Write down the extra clauses needed to express the following facts:

i)London is in the UK.

```prolog
cityIn(london, uk).
```

ii) I visited the city of Strasbourg.

```prolog
iVisited(strasbourg).
```

b) The clause cityIn(City, austria) would return the result: vienna, salzburg. Write down the result returned by the clause: `continent(Country, southAmerica).`

```prolog
Country = chile ; 
Country = argentina.
```

c) Complete the rule to list countries that I have visited `countriesIVisited(Country) IF ...`

```prolog
countriesIVisited(Country) :- iVisited(City), cityIn(City, Country).
```

## Question 2

In a particular country, to become a qualified driver you must:

- have a licence: there is a minimum age at which a person can be issued with a licence and it is different for cars and trucks
- pass a theory test: it is the same test for cars and trucks
- pass a driving test for a specific vehicle (car or truck).

A declarative programming language is to be used to represent the knowledge base shown below:

```prolog
01 minimumAge(car, 18).
02 minimumAge(truck, 21).
03 age(fred, 19).
04 age(jack, 22).
05 age(mike, 17).
06 age(jhon, 20).
07 age(emma, 22).
08 age(sheena, 19).
09 hasLicence(fred).
10 hasLicence(jack).
11 hasLicence(mike).
12 hasLicence(jhon).
13 hasLicence(emma).
14 hasLicence(sheena).
15 allowedToDrive(X, V)
    IF hasLicence(X) AND minimumAge(V, L)
        AND age(X, A)
        AND A >= L.
16 passedTheoryTest(jack).
17 passedTheoryTest(emma).
18 passedTheoryTest(jhon).
19 passedTheoryTest(fred).
20 passedDrivingTest(jhon, car).
21 passedDrivingTest(fred, car).
22 passedDrivingTest(jack, car).
23 passedDrivingTest(jack, truck).
24 passedDrivingTest(sheena, car).
25 qualifiedDriver(X, V)
    IF allowedToDrive(X, V)
        AND passedTheoryTest(X)
        AND passedDrivingTest(X, V).
```

These clauses have the following meanings:

| Clause | Meaning |
| - | - |
| 01 | The minimum age for a car licence is 18. |
| 03 | Fred is aged 19. |
| 09 | Fred has a licence. |
| 15 | Person X is able to drive vehicle V if person X has a licence and the age A of person X is greater than or equal to the minimum age L to drive vehicle V. |

<details>
<summary>Runnable code</summary>

```prolog
minimumAge(car, 18).
minimumAge(truck, 21).
age(fred, 19).
age(jack, 22).
age(mike, 17).
age(jhon, 20).
age(emma, 22).
age(sheena, 19).
hasLicence(fred).
hasLicence(jack).
hasLicence(mike).
hasLicence(jhon).
hasLicence(emma).
hasLicence(sheena).
allowedToDrive(X, V):- 
        hasLicence(X),
        minimumAge(V, L),
        age(X, A),
        A >= L.
passedTheoryTest(jack).
passedTheoryTest(emma).
passedTheoryTest(jhon).
passedTheoryTest(fred).
passedDrivingTest(jhon, car).
passedDrivingTest(fred, car).
passedDrivingTest(jack, car).
passedDrivingTest(jack, truck).
passedDrivingTest(sheena, car).
qualifiedDriver(X, V):- allowedToDrive(X, V),
        passedTheoryTest(X),
        passedDrivingTest(X, V).
```

</details>

a) 

i) Give one example of a fact in this knowledge base.

- `age(fred, 19).` - This states the fact that Fred is aged 19.

ii) Give one example of a rule in this knowledge base.

- `qualifiedDriver(X, V) IF allowedToDrive(X, V) AND passedTheoryTest(X) AND passedDrivingTest(X, V).` - This is a rule that defines a qualified driver. It states that a person X is a qualified driver of vehicle V if they are allowed to drive that vehicle, have passed the theory test, and have passed the driving test for that vehicle.


b) State the output produced from these clauses:


i) passedDrivingTest(Who, truck).

- This will output all individuals (Who) who have passed the driving test for a truck.

    ```prolog
    ?- passedDrivingTest(Who, truck).
    Who = jack.
    ```

ii) allowedToDrive(mike, car).

- This will output true if Mike is allowed to drive a car according to the knowledge base, based on having a license and meeting the minimum age requirement for driving a car.

    ``prolog
    ?- allowedToDrive(mike, car).
    false.
    ```

iii) NOT(hasLicence(sheena)).

- This will output true if Sheena does not have a license according to the knowledge base.

    ```prolog
    ?- hasLicence(sheena).
    true.
    ```

c) Write a clause to output:

i) all qualified car drivers.

```prolog
qualifiedCarDriver(X) :-
   qualifiedDriver(X, car).
```

ii) all drivers who have passed the theory test but not a driving test.

```prolog
passedTheoryButNotDriving(X) :-
   passedTheoryTest(X),
   NOT(passedDrivingTest(X, _)).
```

d) To produce the output from a clause, the inference engine uses a process called backtracking Consider the clause: `allowedToDrive(mike, car).` Identify the order in which clauses are used to produce the output. For each clause, describe the result that it returns.

1. The clause `allowedToDrive(X, V)` is used, where X = mike and V = car. It checks if Mike has a license and if his age is greater than or equal to the minimum age to drive a car. If both conditions are met, it returns true.
   
2. The clause `hasLicence(mike)` is used to check if Mike has a license. If this is true, it proceeds to the next step.

3. The clause `minimumAge(car, L)` is used to determine the minimum age to drive a car. If Mike's age is greater than or equal to this minimum age (which is 18), it returns true.

So, if Mike is aged 17 (as per the provided knowledge base), the output would be false since he does not meet the minimum age requirement to drive a car.

```prolog
[trace]  ?- allowedToDrive(mike, car).
   Call: (10) allowedToDrive(mike, car) ? creep
   Call: (11) hasLicence(mike) ? creep
   Exit: (11) hasLicence(mike) ? creep
   Call: (11) minimumAge(car, _22812) ? creep
   Exit: (11) minimumAge(car, 18) ? creep
   Call: (11) age(mike, _24322) ? creep
   Exit: (11) age(mike, 17) ? creep
   Call: (11) 17>=18 ? creep
   Fail: (11) 17>=18 ? creep
   Fail: (10) allowedToDrive(mike, car) ? creep
false.
```
