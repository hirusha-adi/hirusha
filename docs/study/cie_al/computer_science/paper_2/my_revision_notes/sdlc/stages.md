---
title: Stages in Software Development Life Cycle (SDLC)
sidebar_label: Stages
slug: stages
sidebar_position: 2
---

## Analysis

- Analyze and define the problem and create a clear 'requirements specification.'
- Plan a solution, considering multiple options.
- Choose a problem-solving approach, either **bottom-up** or **top-down**.

#### One Document that may be produced here:

- the problem definition
- required specification
- documentation related to current system/client requirement


## Design

- the choice of data structures are made
- modules are allocated into teams (subroutines)
- testing plan is chosen
- choosing the programming language

## Coding

- also called "implementation"

## Testing

### Stub Testing

- Testing may be carried out before the modules are developed 
- ... not ready for full testing
- Module stubs contain simple code to provide a known response
- ... temporary replacement for a called module/return a fixed value/output a message to confirm the module has been called

### Black Box Testing

- comparing expected results with actual results when a program is run
or
- Without knowing what the code is
- Test based on program specification
- Test data: normal, extreme, erroneous values
- Results recorded
- Discrepancies indicate problems
- Debugging or dry-running for error correction.

#### What is Test Data?

- carefully chosen values that will test a program

### White Box Testing

- when we know the code
- testing every path through the program code

#### White Box Testing Techniques

- **Trace table:** a table with a column for each variable that records their changing values

- **Dry run (walk through technique):** checking the execution of an algorithm or program by recording variable values in a *trace table*

    - the program is checked by creating a trace table
    - to check values of variables as they change
    - errors might be indicated when unexpected value is given
    - faults in the logic of the program can be detected

- Additional Information needs to be known

    - the source code
    - test plan
    - expected results

    - why?

        - algorithms of the porgram needs to be known
        - so, all paths of the program can be tested 


### Integration testing

- modules that have already been tested individually
- are combined in to a single program to be tested a whole

#### One module doesn't work properly when testing, what to do?

- a dummy module to replace the module that does not work proeprly
- it will return an expected value

### Alpha testing

- testing of soft ware in-house by dedicated testers

### Acceptance testing

- testing of soft ware by customers before sign-off

### Beta testing

- tested by potential users
- use application and look for errors
- sends their feedback
- ... provied suggestions
- they will be addressed before the release in main channel

### Selecting Test Values

- Flow of control: User choices and module linkage
- Input validation: Data correctness
- Loops and decisions: Correct execution
- Data storage in correct files
- System produces accurate results.

| Type of test data | Explanation |
| - | - |
| **Normal** | Typical data values that are valid |
| **Abnormal** | Data values that the system should not accept |
| **Boundary** | Extreme end of normal range |

#### Integer Test Values [Sample Asnwer]

![img5](https://cdn.discordapp.com/attachments/1163847683207856178/1163858352388984923/image.png?ex=65411a8e&is=652ea58e&hm=da97ecda2b1fb03ec67dd4b4ba00dca989789a0863651fb3ae8ca9a9776e9ef4&)


## Maintainance

### Corrective Maintainance

-  correcting identified errors

#### When to use?

- when program doesn't operate as expected
- or contain a bug
- eg: passwords in password field are not hidden

### Adaptive Maintenance

- accomodate a change in required technology / feature
- eg: migrating to a newer optmized library version has been released

#### Why Adaptive maintainance is required for a website? (Sample Answer)

- changes to review requirements
- new tech abailable to host websites
- change in relevant legislation

### Perfective Maintenance

- modifying to improve performance or maintainability
- improve perfomance
- improve response time
