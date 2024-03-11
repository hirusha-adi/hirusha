---
title: Notes - System software
sidebar_label: both
slug: both
sidebar_position: 2
---

- operating systems


- translation software
    - types
        - compiler
            - frontend analysis
                - lexical analysis
                    - description
                        - converting an imtermediate representation of source code into an executable form
                    - description (old)
                        - convert source code into tokens
                - syntax analysis
                    - description
                        - using parsing algorithms to interpret the meaning of a sequence of tokens
                    - purpose
                        - it checks that the code matches the grammer of the language
                        - it checks that the tokens confirm with the rules of the programming language
                        - syntax errors are reported
                        - a parse tree is produced
                    - tasks done
                        - parsing / construction of the parse tree
                        - checkinbg that the rules of grammar / syntax have been obeyed
                        - production of an error report
                - semantic analysis
                - intermediate code generation
            - backend analysis
                - RPN (reverse polish notation)
                    - why?
                        - RPN provides and unambiguous method of representing an expression
                        - reading from left to right
                        - without the need to use brackets
                        - with no need for rules of precedence / BODMAS
                    - why? (old)
                        - evaluvation does not need to use rules of precedence of operators
                        - no need for brackets (infix may required the use of brackets)
                        - enables evaluvation in the sequence read / left to right
                        - no need to backtrack
                    - what data strucute could be used to evaluate an expression?
                        - stack
                            - the operands are popped from the stack in the reverse order to how they were pushed
                        - binary tree
                            - a binary tree allows both infix and postfix to be evaluated (tree traversal)
                - BNF (Backus Naur Form)
            - other stages of compiler (analysis):
                - code generation
                    - description
                        - converting an intermediate representation of source code into an executable form
                    - description (old)
                        - produces the object code
                - code optimization
                    - description
                        - minimizing a program's execution time and memmory requirement
                    - description (old)
                        - improving efficiency of object code
                    - why?
                        - minimize execution time
        - interpreter
            - how interpreter executes a program?
                - an interpreter examines source code one statement at a time
                - check each statement for errors
                - if no error is found, statement is executed
                - if an error is found, this is reported and interpreter halts
                - interpretation is repeated for every iteration in repeated sections of code / in-loops
                - interpretation has to be repeated every time the program is run
        - assembler

- other
    - uses of a stack:
        - recursion
        - implementation of ADTs: linked list
        - procedure calls
        - interrupt handling (storing contents of registers)
    

