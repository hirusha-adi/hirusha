"use strict";(self.webpackChunkhirusha=self.webpackChunkhirusha||[]).push([[3134],{55:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(1527),r=i(6213);const t={title:"Notes - System software",sidebar_label:"both",slug:"both",sidebar_position:2},l=void 0,c={id:"study/cie_al/computer_science/paper_3/my_revision_notes/chapter_20/index",title:"Notes - System software",description:"- operating systems",source:"@site/docs/study/cie_al/computer_science/paper_3/my_revision_notes/chapter_20/index.md",sourceDirName:"study/cie_al/computer_science/paper_3/my_revision_notes/chapter_20",slug:"/study/cie_al/computer_science/paper_3/my_revision_notes/chapter_20/both",permalink:"/docs/study/cie_al/computer_science/paper_3/my_revision_notes/chapter_20/both",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Notes - System software",sidebar_label:"both",slug:"both",sidebar_position:2},sidebar:"study",previous:{title:"My Revision Notes",permalink:"/docs/study/cie_al/computer_science/paper_3/my_revision_notes/"},next:{title:"9618",permalink:"/docs/study/cie_al/computer_science/paper_3/my_revision_notes/chapter_20/9618"}},o={},d=[];function a(e){const n={li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"operating systems"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"translation software"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["types","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["compiler","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["frontend analysis","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["lexical analysis","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["description","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"converting an imtermediate representation of source code into an executable form"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["description (old)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"convert source code into tokens"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["syntax analysis","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["description","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"using parsing algorithms to interpret the meaning of a sequence of tokens"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["purpose","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"it checks that the code matches the grammer of the language"}),"\n",(0,s.jsx)(n.li,{children:"it checks that the tokens confirm with the rules of the programming language"}),"\n",(0,s.jsx)(n.li,{children:"syntax errors are reported"}),"\n",(0,s.jsx)(n.li,{children:"a parse tree is produced"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["tasks done","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"parsing / construction of the parse tree"}),"\n",(0,s.jsx)(n.li,{children:"checkinbg that the rules of grammar / syntax have been obeyed"}),"\n",(0,s.jsx)(n.li,{children:"production of an error report"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"semantic analysis"}),"\n",(0,s.jsx)(n.li,{children:"intermediate code generation"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["backend analysis","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["RPN (reverse polish notation)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["why?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RPN provides and unambiguous method of representing an expression"}),"\n",(0,s.jsx)(n.li,{children:"reading from left to right"}),"\n",(0,s.jsx)(n.li,{children:"without the need to use brackets"}),"\n",(0,s.jsx)(n.li,{children:"with no need for rules of precedence / BODMAS"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["why? (old)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"evaluvation does not need to use rules of precedence of operators"}),"\n",(0,s.jsx)(n.li,{children:"no need for brackets (infix may required the use of brackets)"}),"\n",(0,s.jsx)(n.li,{children:"enables evaluvation in the sequence read / left to right"}),"\n",(0,s.jsx)(n.li,{children:"no need to backtrack"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["what data strucute could be used to evaluate an expression?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["stack","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the operands are popped from the stack in the reverse order to how they were pushed"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["binary tree","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a binary tree allows both infix and postfix to be evaluated (tree traversal)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"BNF (Backus Naur Form)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["other stages of compiler (analysis):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["code generation","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["description","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"converting an intermediate representation of source code into an executable form"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["description (old)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"produces the object code"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["code optimization","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["description","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"minimizing a program's execution time and memmory requirement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["description (old)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"improving efficiency of object code"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["why?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"minimize execution time"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["interpreter","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["how interpreter executes a program?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"an interpreter examines source code one statement at a time"}),"\n",(0,s.jsx)(n.li,{children:"check each statement for errors"}),"\n",(0,s.jsx)(n.li,{children:"if no error is found, statement is executed"}),"\n",(0,s.jsx)(n.li,{children:"if an error is found, this is reported and interpreter halts"}),"\n",(0,s.jsx)(n.li,{children:"interpretation is repeated for every iteration in repeated sections of code / in-loops"}),"\n",(0,s.jsx)(n.li,{children:"interpretation has to be repeated every time the program is run"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"assembler"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"other"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["uses of a stack:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"recursion"}),"\n",(0,s.jsx)(n.li,{children:"implementation of ADTs: linked list"}),"\n",(0,s.jsx)(n.li,{children:"procedure calls"}),"\n",(0,s.jsx)(n.li,{children:"interrupt handling (storing contents of registers)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6213:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var s=i(959);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);