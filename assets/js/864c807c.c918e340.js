"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[6657],{60250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=t(11527),r=t(56213);const l={title:"Exam Style Questions - Algorithms",sidebar_label:"ESQ",slug:"esq",sidebar_position:2},s=void 0,d={id:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_24/esq",title:"Exam Style Questions - Algorithms",description:"Tasks",source:"@site/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_24/esq.md",sourceDirName:"study/cie_al/computer_science/paper_4/my_study_notes/chapter_24",slug:"/study/cie_al/computer_science/paper_4/my_study_notes/chapter_24/esq",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_24/esq",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Exam Style Questions - Algorithms",sidebar_label:"ESQ",slug:"esq",sidebar_position:2},sidebar:"study",previous:{title:"Notes",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_24/notes"},next:{title:"Chapter 25 - Programming paradigms",permalink:"/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_25/"}},c={},a=[{value:"Tasks",id:"tasks",level:2},{value:"Task 24.01",id:"task-2401",level:3},{value:"Write program code to implement the recursive algorithm for the factorial function.",id:"write-program-code-to-implement-the-recursive-algorithm-for-the-factorial-function",level:4},{value:"Task 24.02",id:"task-2402",level:3},{value:"Consider the following recursive algorithm:",id:"consider-the-following-recursive-algorithm",level:4},{value:"Dry-run the procedure call X(19) by completing a trace table. What is the purpose of this algorithm?",id:"dry-run-the-procedure-call-x19-by-completing-a-trace-table-what-is-the-purpose-of-this-algorithm",level:4},{value:"Task 24.03",id:"task-2403",level:3},{value:"Use your program code from Task 24.01 and add the main program as shown in Worked Example 24.03.",id:"use-your-program-code-from-task-2401-and-add-the-main-program-as-shown-in-worked-example-2403",level:4},{value:"Amend your code in the following ways (line numbers are relative to the pseudocode in Worked Example 24.03):",id:"amend-your-code-in-the-following-ways-line-numbers-are-relative-to-the-pseudocode-in-worked-example-2403",level:4},{value:"\u2022 Add a global integer variable CallNumber",id:"-add-a-global-integer-variable-callnumber",level:4},{value:"\u2022 Initialise CallNumber to zero (line 155).",id:"-initialise-callnumber-to-zero-line-155",level:4},{value:"\u2022 Increment CallNumber (line 35).",id:"-increment-callnumber-line-35",level:4},{value:"\u2022 Add a statement to output the values of CallNumber and n (line 36).",id:"-add-a-statement-to-output-the-values-of-callnumber-and-n-line-36",level:4},{value:"\u2022 Add a statement to output the value of Result (line 95).",id:"-add-a-statement-to-output-the-value-of-result-line-95",level:4},{value:"Run the program and study the output.",id:"run-the-program-and-study-the-output",level:4},{value:"Question 1",id:"question-1",level:2},{value:"a Outline the differences between iteration and recursion.",id:"a-outline-the-differences-between-iteration-and-recursion",level:4},{value:"b Give one advantage and one disadvantage of using recursive subroutines.",id:"b-give-one-advantage-and-one-disadvantage-of-using-recursive-subroutines",level:4},{value:"Question 2",id:"question-2",level:2},{value:"The following is a recursively defined function which calculates the result of BaseExponent. For example, 23 is 8.",id:"the-following-is-a-recursively-defined-function-which-calculates-the-result-of-baseexponent-for-example-23-is-8",level:4},{value:"a State what is meant by \u2018recursively defined\u2019.",id:"a-state-what-is-meant-by-recursively-defined",level:4},{value:"b Complete a trace table for the execution of the function call Power(2,4) showing for each re-entry into the Power function, the values passed to the function and the results returned.",id:"b-complete-a-trace-table-for-the-execution-of-the-function-call-power24-showing-for-each-re-entry-into-the-power-function-the-values-passed-to-the-function-and-the-results-returned",level:4},{value:"c Explain the role of the stack in the execution of the Power function.",id:"c-explain-the-role-of-the-stack-in-the-execution-of-the-power-function",level:4},{value:"d Write a python non-recursive (iterative) version of the Power function. [6]",id:"d-write-a-python-non-recursive-iterative-version-of-the-power-function-6",level:4},{value:"e i Give one reason why a non-recursive Power function may be preferred to a recursive one.",id:"e-i-give-one-reason-why-a-non-recursive-power-function-may-be-preferred-to-a-recursive-one",level:4},{value:"e i Give one reason why a recursive Power function may be preferred to a non-recursive one",id:"e-i-give-one-reason-why-a-recursive-power-function-may-be-preferred-to-a-non-recursive-one",level:4},{value:"Question 3",id:"question-3",level:2},{value:"The following is a recursively defined function which calculates the nth integer in the sequence of Fibonacci numbers.",id:"the-following-is-a-recursively-defined-function-which-calculates-the-nth-integer-in-the-sequence-of-fibonacci-numbers",level:4},{value:"a i Give the line number of the line containing the base case.",id:"a-i-give-the-line-number-of-the-line-containing-the-base-case",level:4},{value:"ii Give the line number of the line containing the general case.",id:"ii-give-the-line-number-of-the-line-containing-the-general-case",level:4},{value:"Complete a trace table for the function call Fibonacci(4).",id:"complete-a-trace-table-for-the-function-call-fibonacci4",level:4}];function o(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"tasks",children:"Tasks"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Tasks"}),(0,i.jsx)(n.h3,{id:"task-2401",children:"Task 24.01"}),(0,i.jsx)(n.h4,{id:"write-program-code-to-implement-the-recursive-algorithm-for-the-factorial-function",children:"Write program code to implement the recursive algorithm for the factorial function."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def fact(n):\n    if n == 0 or n == 1 or n < 0:\n        return 1\n    return n * fact(n - 1)\n\n# one liner lambda function\nfactorial = lambda n: 1 if n == 0 or n == 1 else n * factorial(n - 1)\n\n# Check\nprint(fact(1), factorial(1)) # 1 1\nprint(fact(2), factorial(2)) # 2 2\nprint(fact(3), factorial(3)) # 6 6\nprint(fact(4), factorial(4)) # 24 24\n"})}),(0,i.jsx)(n.h3,{id:"task-2402",children:"Task 24.02"}),(0,i.jsx)(n.h4,{id:"consider-the-following-recursive-algorithm",children:"Consider the following recursive algorithm:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PROCEDURE X(n : INTEGER)\nIF (n = 0) OR (n = 1)\nTHEN\nOUTPUT n\nELSE\nCALL X(n DIV 2)\nOUTPUT(n MOD 2)\nENDIF\nENDPROCEDURE\n"})}),(0,i.jsx)(n.h4,{id:"dry-run-the-procedure-call-x19-by-completing-a-trace-table-what-is-the-purpose-of-this-algorithm",children:"Dry-run the procedure call X(19) by completing a trace table. What is the purpose of this algorithm?"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Step"}),(0,i.jsx)(n.th,{children:"n"}),(0,i.jsx)(n.th,{children:"Operation"}),(0,i.jsx)(n.th,{children:"Output"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"Call X(19 DIV 2)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"Call X(9 DIV 2)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Call X(4 DIV 2)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Call X(2 DIV 2)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Output n"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"11"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Output(n MOD 2)"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Output(n MOD 2)"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"Output(n MOD 2)"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"14"}),(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"Output(n MOD 2)"}),(0,i.jsx)(n.td,{children:"1"})]})]})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["it converts a decimal number ",(0,i.jsx)(n.code,{children:"n"})," into its binary representation using a recursive approach"]}),"\n"]}),(0,i.jsx)(n.h3,{id:"task-2403",children:"Task 24.03"}),(0,i.jsx)(n.h4,{id:"use-your-program-code-from-task-2401-and-add-the-main-program-as-shown-in-worked-example-2403",children:"Use your program code from Task 24.01 and add the main program as shown in Worked Example 24.03."}),(0,i.jsx)(n.h4,{id:"amend-your-code-in-the-following-ways-line-numbers-are-relative-to-the-pseudocode-in-worked-example-2403",children:"Amend your code in the following ways (line numbers are relative to the pseudocode in Worked Example 24.03):"}),(0,i.jsx)(n.h4,{id:"-add-a-global-integer-variable-callnumber",children:"\u2022 Add a global integer variable CallNumber"}),(0,i.jsx)(n.h4,{id:"-initialise-callnumber-to-zero-line-155",children:"\u2022 Initialise CallNumber to zero (line 155)."}),(0,i.jsx)(n.h4,{id:"-increment-callnumber-line-35",children:"\u2022 Increment CallNumber (line 35)."}),(0,i.jsx)(n.h4,{id:"-add-a-statement-to-output-the-values-of-callnumber-and-n-line-36",children:"\u2022 Add a statement to output the values of CallNumber and n (line 36)."}),(0,i.jsx)(n.h4,{id:"-add-a-statement-to-output-the-value-of-result-line-95",children:"\u2022 Add a statement to output the value of Result (line 95)."}),(0,i.jsx)(n.h4,{id:"run-the-program-and-study-the-output",children:"Run the program and study the output."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Global variable\nCallNumber = 0\n\n# Recursive factorial function\ndef factorial(n):\n    global CallNumber\n    CallNumber += 1  # Increment CallNumber\n    print(f"CallNumber: {CallNumber}, n: {n}")\n\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n-1)\n\n# Main program\ndef main():\n    global CallNumber\n    CallNumber = 0  # Initialize CallNumber to zero\n\n    # Input for the factorial function\n    n = int(input("Enter a non-negative integer: "))\n\n    # Output the factorial result\n    result = factorial(n)\n    print(f"The factorial of {n} is: {result}")\n\nif __name__ == "__main__":\n    main()\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"question-1",children:"Question 1"}),"\n",(0,i.jsx)(n.h4,{id:"a-outline-the-differences-between-iteration-and-recursion",children:"a Outline the differences between iteration and recursion."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"iteration: uses loops to repeat a set of instructions"}),"\n",(0,i.jsx)(n.li,{children:"recursion: involves functions calling themselves"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"b-give-one-advantage-and-one-disadvantage-of-using-recursive-subroutines",children:"b Give one advantage and one disadvantage of using recursive subroutines."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"advantage: Elegance and readability for certain problems. Less code. Easiest way to implement some algorithms (specially the ones that are mathematical in nature)"}),"\n",(0,i.jsx)(n.li,{children:"disadvantage: Risk of stack overflow and potentially higher memory usage."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"question-2",children:"Question 2"}),"\n",(0,i.jsx)(n.h4,{id:"the-following-is-a-recursively-defined-function-which-calculates-the-result-of-baseexponent-for-example-23-is-8",children:"The following is a recursively defined function which calculates the result of BaseExponent. For example, 23 is 8."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FUNCTION Power(Base: INTEGER, Exponent : INTEGER) RETURNS INTEGER\nIF Exponent = 0\nTHEN\nResult \u2190 1\nELSE\nResult \u2190 Base \\* Power(Base, Exponent \u2013 1)\nENDIF\nRETURN Result\nENDFUNCTION\n"})}),"\n",(0,i.jsx)(n.h4,{id:"a-state-what-is-meant-by-recursively-defined",children:"a State what is meant by \u2018recursively defined\u2019."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a function is recursively defines when it refers to itself"}),"\n",(0,i.jsxs)(n.li,{children:["in this case, the function ",(0,i.jsx)(n.code,{children:"Power"})," is being called within its definition"]}),"\n",(0,i.jsxs)(n.li,{children:["so, this function (",(0,i.jsx)(n.code,{children:"Power"}),") is recursively defined"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"b-complete-a-trace-table-for-the-execution-of-the-function-call-power24-showing-for-each-re-entry-into-the-power-function-the-values-passed-to-the-function-and-the-results-returned",children:"b Complete a trace table for the execution of the function call Power(2,4) showing for each re-entry into the Power function, the values passed to the function and the results returned."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Step"}),(0,i.jsx)(n.th,{children:"Base"}),(0,i.jsx)(n.th,{children:"Exponent"}),(0,i.jsx)(n.th,{children:"Operation"}),(0,i.jsx)(n.th,{children:"Result"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Check Exponent = 0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Call Power(2, 3)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Check Exponent = 0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Call Power(2, 2)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Check Exponent = 0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Call Power(2, 1)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Check Exponent = 0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Call Power(2, 0)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Set Result \u2190 1"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Result \u2190 2 * Power(2, 0)"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"11"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Result \u2190 2 * Power(2, 1)"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Result \u2190 2 * Power(2, 2)"}),(0,i.jsx)(n.td,{children:"8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Result \u2190 2 * Power(2, 3)"}),(0,i.jsx)(n.td,{children:"16"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"c-explain-the-role-of-the-stack-in-the-execution-of-the-power-function",children:"c Explain the role of the stack in the execution of the Power function."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["in the execution of the ",(0,i.jsx)(n.code,{children:"Power"})," function, the stack manages function calls and their local variables"]}),"\n",(0,i.jsx)(n.li,{children:"each recursive call creates a new stack frame, to store parameters and variables"}),"\n",(0,i.jsx)(n.li,{children:"as the recursive approach ends, intermediate results are accumulated, and the final result is obtained"}),"\n",(0,i.jsx)(n.li,{children:"the stack is crucial for preserving context and managing the flow of the recursive calls"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"d-write-a-python-non-recursive-iterative-version-of-the-power-function-6",children:"d Write a python non-recursive (iterative) version of the Power function. [6]"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def power(base, exponent):\n    result = 1\n    while exponent > 0:\n        result *= base\n        exponent -= 1\n    return result\n\n# power(2, 4) --\x3e basically like 2^4\nprint(power(2, 4)) # 16\n"})}),"\n",(0,i.jsx)(n.h4,{id:"e-i-give-one-reason-why-a-non-recursive-power-function-may-be-preferred-to-a-recursive-one",children:"e i Give one reason why a non-recursive Power function may be preferred to a recursive one."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"efficient memory usage"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"e-i-give-one-reason-why-a-recursive-power-function-may-be-preferred-to-a-non-recursive-one",children:"e i Give one reason why a recursive Power function may be preferred to a non-recursive one"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"increased readability"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"question-3",children:"Question 3"}),"\n",(0,i.jsx)(n.h4,{id:"the-following-is-a-recursively-defined-function-which-calculates-the-nth-integer-in-the-sequence-of-fibonacci-numbers",children:"The following is a recursively defined function which calculates the nth integer in the sequence of Fibonacci numbers."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"01 FUNCTION Fibonacci(n : INTEGER) RETURNS INTEGER\n02 IF (n = 0) OR (n = 1)\n03 THEN\n04 Result \u2190 1\n05 ELSE\n06 Result \u2190 Fibonacci(n \u2013 1) + Fibonacci(n \u2013 2)\n07 ENDIF\n08 RETURN Result\n09 ENDFUNCTION\n"})}),"\n",(0,i.jsx)(n.h4,{id:"a-i-give-the-line-number-of-the-line-containing-the-base-case",children:"a i Give the line number of the line containing the base case."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"4"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ii-give-the-line-number-of-the-line-containing-the-general-case",children:"ii Give the line number of the line containing the general case."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"6"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"complete-a-trace-table-for-the-function-call-fibonacci4",children:"Complete a trace table for the function call Fibonacci(4)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Step"}),(0,i.jsx)(n.th,{children:"n"}),(0,i.jsx)(n.th,{children:"Operation"}),(0,i.jsx)(n.th,{children:"Result"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Call Fibonacci(3)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Call Fibonacci(2)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Call Fibonacci(1)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Check n = 0 or n = 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Set Result \u2190 1"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Call Fibonacci(0)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Set Result \u2190 1"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"11"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Set Result \u2190 1"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Result \u2190 Fibonacci(2) + 1"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Result \u2190 Fibonacci(3) + 2"}),(0,i.jsx)(n.td,{children:"4"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},56213:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(50959);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);